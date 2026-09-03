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

        // Default French
        setTimeout(function () {
            switchGoogleLanguage("fr");
        }, 1000);
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

            const selectedLangText =
                document.getElementById("selectedLangText");

            if (selectedLangText) {
                selectedLangText.textContent =
                    language === "fr" ? "FR" : "EN";
            }

        }, 100);

    };


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

            switchGoogleLanguage("en");
        }

        // French
        if (
            text === "français" ||
            text === "francais" ||
            text === "french" ||
            text === "fr" ||
            target.dataset.language === "fr" ||
            target.dataset.lang === "fr"
        ) {

            event.preventDefault();

            switchGoogleLanguage("fr");
        }

    });


    // Google script load
    function loadGoogleTranslate() {

        if (document.querySelector(
            'script[src*="translate.google.com"]'
        )) {
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
            loadGoogleTranslate
        );

    } else {

        loadGoogleTranslate();

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
        // DEFAULT LANGUAGE = FRENCH
        // -------------------------------
        if (typeof setLanguage === 'function') {
            setLanguage('fr');
        }

        if (langText) {
            langText.textContent = 'FR';
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