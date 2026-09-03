(function () {
  function __fiInlineEvents() {
    var els = document.querySelectorAll('[data-o-onclick],[data-o-onsubmit],[data-o-onchange],[data-o-oninput],[data-o-onkeyup],[data-o-onkeydown],[data-o-onblur],[data-o-onfocus],[data-o-onmouseover],[data-o-onmouseout],[data-o-ondblclick],[data-o-oncontextmenu]');
    var evs = ['onclick','onsubmit','onchange','oninput','onkeyup','onkeydown','onblur','onfocus','onmouseover','onmouseout','ondblclick','oncontextmenu'];
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      for (var j = 0; j < evs.length; j++) {
        var code = el.getAttribute('data-o-' + evs[j]);
        if (code !== null) {
          (function (element, handlerCode) {
            element[evs[j]] = function (event) {
              return (new Function('event', 'with(this) {' + handlerCode + '}')).call(element, event);
            };
          })(el, code);
        }
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', __fiInlineEvents);
  } else {
    __fiInlineEvents();
  }
})();
