(function () {
  var srcs = ["https://cdn.jsdelivr.net/npm/chart.js","/assets/next/advanced-stats-inline-0.js","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js","/assets/js/language.js?v=4","/assets/js/theme.js?v=1"];
  var i = 0;
  function next() {
    if (i >= srcs.length) {
      try { document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true })); } catch (e) {}
      try { window.dispatchEvent(new Event('load')); } catch (e) {}
      return;
    }
    var url = srcs[i++];
    var prev = document.querySelector('script[data-boot-src="' + url + '"]');
    if (prev) {
      if (prev.getAttribute('data-boot-loaded') === '1') { next(); return; }
      prev.addEventListener('load', next);
      prev.addEventListener('error', next);
      return;
    }
    var s = document.createElement('script');
    s.src = url;
    s.setAttribute('data-boot-src', url);
    s.async = false;
    s.onload = function () { s.setAttribute('data-boot-loaded', '1'); next(); };
    s.onerror = next;
    document.head.appendChild(s);
  }
  next();
})();
