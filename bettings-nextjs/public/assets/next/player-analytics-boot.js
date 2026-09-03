(function () {
  var srcs = ["https://cdn.jsdelivr.net/npm/chart.js","https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js","/assets/next/player-analytics-inline-0.js","/assets/js/language.js","/assets/js/theme.js?v=1"];
  var i = 0;
  function next() {
    if (i >= srcs.length) {
      try { document.dispatchEvent(new Event('DOMContentLoaded', { bubbles: true })); } catch (e) {}
      try { window.dispatchEvent(new Event('load')); } catch (e) {}
      return;
    }
    var url = srcs[i++];
    var s = document.createElement('script');
    s.src = url;
    s.async = false;
    s.onload = next;
    s.onerror = next;
    document.head.appendChild(s);
  }
  next();
})();
