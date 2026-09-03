// Persist the user's FR/EN choice across pages (global helpers)
function getPreferredLanguage() {
    try {
        var stored = localStorage.getItem('football-intelligence-language');
        if (stored === 'en' || stored === 'fr') return stored;
    } catch (err) {}
    return null;
}

function savePreferredLanguage(lang) {
    try { localStorage.setItem('football-intelligence-language', lang); } catch (err) {}
}

(function () {

    // Hidden Google Translate container automatically create
    function createGoogleTranslateBox() {

        if (document.getElementById("google_translate_element")) {
            return;
        }

        const box = document.createElement("div");

        box.id = "google_translate_element";

        box.style.position = "fixed";
        box.style.left = "-9999px";
        box.style.top = "-9999px";
        box.style.visibility = "hidden";

        document.body.appendChild(box);
    }


    // Google callback MUST be global
    window.googleTranslateElementInit = function () {

        new google.translate.TranslateElement(
            {
                pageLanguage: "en",
                includedLanguages: "en,fr",
                autoDisplay: false
            },
            "google_translate_element"
        );

        // Apply the stored language (French when nothing is stored yet).
        // Wait for the widget to finish its own startup first, otherwise
        // Google overrides the choice made right after a page reload.
        setTimeout(function () {
            applyInitialLanguage();
        }, 400);
    };


    // Google language switch function
    window.switchGoogleLanguage = function (language) {

        const interval = setInterval(function () {

            const select =
                document.querySelector(".goog-te-combo");

            if (!select) {
                return;
            }

            clearInterval(interval);

            select.value = language;

            select.dispatchEvent(
                new Event("change", {
                    bubbles: true
                })
            );

            setLangLabel(language);

        }, 100);

    };

    // Keep every visible language label in sync with the applied language
    function setLangLabel(language) {
        const text = language === "fr" ? "FR" : "EN";
        document.querySelectorAll("#selectedLangText").forEach(function (el) {
            if (el.textContent !== text) {
                el.textContent = text;
            }
        });
    }

    // Best guess of the language that is currently applied
    function getEffectiveLanguage() {
        const select = document.querySelector(".goog-te-combo");
        if (select) {
            if (select.value === "fr") return "fr";
            if (select.value === "en") return "en";
        }
        const pref = getPreferredLanguage();
        if (pref) return pref;
        return "fr";
    }

    // Update the label(s) to the language that is currently applied
    function syncLangLabels() {
        setLangLabel(getEffectiveLanguage());
    }

    // True when the widget is actually showing the requested language
    function languageAppliedOk(language) {
        const select = document.querySelector(".goog-te-combo");
        const value = select ? select.value : "";
        return language === "fr" ? value === "fr" : value !== "fr";
    }

    // Switch languages and keep verifying it really got applied. Google
    // sometimes ignores a switch made right after it initialises, so we
    // re-dispatch the SAME language (never the opposite one) until the
    // widget reports the requested state or we run out of attempts.
    function enforceLanguage(language, triesLeft, deadline) {
        if (!deadline) deadline = Date.now() + 6000;
        const select = document.querySelector(".goog-te-combo");
        if (!select) {
            if (Date.now() < deadline) {
                setTimeout(function () {
                    enforceLanguage(language, triesLeft, deadline);
                }, 250);
            } else {
                syncLangLabels();
            }
            return;
        }
        if (languageAppliedOk(language)) {
            syncLangLabels();
            return;
        }
        if (triesLeft <= 0) {
            syncLangLabels();
            return;
        }
        switchGoogleLanguage(language);
        setTimeout(function () {
            if (languageAppliedOk(language)) {
                syncLangLabels();
            } else {
                enforceLanguage(language, triesLeft - 1, deadline);
            }
        }, 1200);
    }

    // First boot after a (re)load: wait until the widget settles down,
    // then apply the stored choice or the site default (French).
    function applyInitialLanguage() {
        const select = document.querySelector(".goog-te-combo");
        const pref = getPreferredLanguage() || "fr";
        const delay = select && select.value ? 200 : 900;
        setTimeout(function () {
            installLangWatchers();
            enforceLanguage(pref, 5);
        }, delay);
    }

    // Re-apply the stored language when the Google widget is already present
    // (SPA page switch where the init callback never fires again).
    function applyStoredLanguage() {
        installLangWatchers();
        const select = document.querySelector(".goog-te-combo");
        if (!select) return;
        enforceLanguage(getPreferredLanguage() || "fr", 3);
    }

    // Next.js restores cached routes without re-running page scripts, so a
    // single persistent watcher fixes the labels after every DOM swap too.
    let labelSyncQueued = false;
    function queueLangLabelSync() {
        if (labelSyncQueued) return;
        labelSyncQueued = true;
        requestAnimationFrame(function () {
            labelSyncQueued = false;
            syncLangLabels();
        });
    }

    function installLangWatchers() {
        if (window.__langWatchersInstalled) return;
        window.__langWatchersInstalled = true;
        try {
            new MutationObserver(function () {
                queueLangLabelSync();
            }).observe(document.documentElement, {
                attributes: true,
                attributeFilter: ["lang", "class"]
            });
        } catch (e) {}
        try {
            new MutationObserver(function () {
                queueLangLabelSync();
            }).observe(document.body, {
                childList: true,
                subtree: true
            });
        } catch (e) {}
    }

    // Existing dropdown click
    document.addEventListener("click", function (event) {

        const target =
            event.target.closest(
                "a, button, .dropdown-item, .language-option"
            );

        if (!target) return;

        const text =
            target.textContent
                .trim()
                .toLowerCase();

        // English
        if (
            text === "english" ||
            text === "en" ||
            target.dataset.language === "en" ||
            target.dataset.lang === "en"
        ) {

            event.preventDefault();

            savePreferredLanguage("en");

            switchGoogleLanguage("en");

            // Verify once more in case Google ignored the switch (guarded
            // so a newer choice made meanwhile cancels this retry).
            setTimeout(function () {
                if (getPreferredLanguage() === "en") {
                    enforceLanguage("en", 1);
                }
            }, 300);
        }

        // French
        if (
            text === "franÃ§ais" ||
            text === "francais" ||
            text === "french" ||
            text === "fr" ||
            target.dataset.language === "fr" ||
            target.dataset.lang === "fr"
        ) {

            event.preventDefault();

            savePreferredLanguage("fr");

            switchGoogleLanguage("fr");

            // Verify once more in case Google ignored the switch (guarded
            // so a newer choice made meanwhile cancels this retry).
            setTimeout(function () {
                if (getPreferredLanguage() === "fr") {
                    enforceLanguage("fr", 1);
                }
            }, 300);
        }

    });


    // Google script load
    function loadGoogleTranslate() {

        if (document.querySelector(
            'script[src*="translate.google.com"]'
        )) {
            // Widget already loaded (e.g. SPA page switch where the init
            // callback never fires again) -> re-apply the stored choice.
            setTimeout(function () {
                applyStoredLanguage();
            }, 250);
            return;
        }

        createGoogleTranslateBox();

        const script =
            document.createElement("script");

        script.type = "text/javascript";

        script.src =
            "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

        document.head.appendChild(script);
    }


    // Start
    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            function () {
                loadGoogleTranslate();
                installLangWatchers();
                syncLangLabels();
            }
        );

    } else {

        loadGoogleTranslate();
        installLangWatchers();
        syncLangLabels();

    }

})();

// ========================================
// HIDE GOOGLE TRANSLATE BAR / POPUP
// ========================================

(function () {

    const hideGoogleTranslateUI = () => {

        // Google top bar hide
        document.querySelectorAll(
            '.skiptranslate, iframe.goog-te-banner-frame'
        ).forEach(function (el) {

            if (el.tagName === 'IFRAME') {
                el.style.setProperty('display', 'none', 'important');
                el.style.setProperty('visibility', 'hidden', 'important');
                el.style.setProperty('height', '0', 'important');
            }

        });

        // Body ko Google Translate top margin deta hai
        document.body.style.setProperty(
            'top',
            '0px',
            'important'
        );

        document.body.style.setProperty(
            'position',
            'static',
            'important'
        );

        // Google translate tooltip / popup hide
        document.querySelectorAll(
            '.goog-tooltip, .goog-tooltip:hover, .goog-text-highlight'
        ).forEach(function (el) {

            el.style.setProperty(
                'display',
                'none',
                'important'
            );

            el.style.setProperty(
                'box-shadow',
                'none',
                'important'
            );

        });

    };


    // CSS automatically inject
    const style = document.createElement('style');

    style.innerHTML = `
        iframe.goog-te-banner-frame,
        .goog-te-banner-frame,
        .goog-te-banner,
        .skiptranslate iframe,
        #goog-gt-tt,
        .goog-tooltip,
        .goog-tooltip:hover,
        .goog-text-highlight {
            display: none !important;
            visibility: hidden !important;
            height: 0 !important;
        }

        body {
            top: 0 !important;
        }
    `;

    document.head.appendChild(style);


    // Page load
    hideGoogleTranslateUI();


    // Google Translate dynamically elements add karta hai
    const observer = new MutationObserver(function () {
        hideGoogleTranslateUI();
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });


    // Extra safety
    setInterval(hideGoogleTranslateUI, 100);

})();

// ==========================================
// FAST DEFAULT FRENCH + LANGUAGE SWITCH
// PASTE THIS AT THE VERY BOTTOM
// ==========================================

(function () {

    function initFastLanguage() {

        const langText = document.getElementById('selectedLangText');

        // -------------------------------
        // DEFAULT LANGUAGE = SAVED PREFERENCE OR FRENCH
        // -------------------------------
        const preferred = getPreferredLanguage() || 'fr';
        if (typeof setLanguage === 'function') {
            setLanguage(preferred);
        }

        if (langText) {
            langText.textContent = preferred === 'fr' ? 'FR' : 'EN';
        }


        // -------------------------------
        // LANGUAGE DROPDOWN CLICK
        // -------------------------------
        document.addEventListener('click', function (e) {

            const option = e.target.closest(
                '.language-option, [data-language], [data-lang]'
            );

            if (!option) return;

            const lang =
                option.dataset.language ||
                option.dataset.lang;

            if (lang !== 'fr' && lang !== 'en') return;

            e.preventDefault();

            savePreferredLanguage(lang);

            // Existing fast function
            if (typeof setLanguage === 'function') {
                setLanguage(lang);
            }

            // Update button text
            if (langText) {
                langText.textContent =
                    lang === 'fr' ? 'FR' : 'EN';
            }

        });

    }


    // Run immediately when possible
    if (document.readyState === 'loading') {

        document.addEventListener(
            'DOMContentLoaded',
            initFastLanguage,
            { once: true }
        );

    } else {

        initFastLanguage();

    }

})();

// ==========================================
// QUICK PAGE LOADER
// ==========================================

(function () {

    // Loader HTML
    const loader = document.createElement("div");

    loader.id = "pageLoader";

    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
        </div>
    `;

    document.body.appendChild(loader);


    // Loader CSS
    const style = document.createElement("style");

    style.innerHTML = `
        #pageLoader {
            position: fixed;
            inset: 0;
            background: #0b1120;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            opacity: 1;
            visibility: visible;
            transition: opacity .25s ease,
                        visibility .25s ease;
        }

        .loader-content {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .loader-spinner {
            width: 38px;
            height: 38px;
            border: 3px solid rgba(255,255,255,.15);
            border-top-color: #10b981;
            border-radius: 50%;
            animation: pageLoaderSpin .7s linear infinite;
        }

        @keyframes pageLoaderSpin {
            to {
                transform: rotate(360deg);
            }
        }

        #pageLoader.hide {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
    `;

    document.head.appendChild(style);


    // Page load ke baad loader remove
    window.addEventListener("load", function () {

        setTimeout(function () {

            loader.classList.add("hide");

            setTimeout(function () {
                loader.remove();
            }, 500);

        }, 500);

    });

})();