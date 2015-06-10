(function(root) {
  'use strict';

  function flowRight(/* fns */) {
    var fns = [].slice.call(arguments);

    return function(/* args */) {
      var i = fns.length - 1;
      var args = fns[i].apply(this, arguments);
      while(i--) {
        args = fns[i].call(this, args);
      }
      return args;
    };
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = flowRight;
    }
    exports.flowRight = flowRight;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return flowRight;
    });
  } else {
    root.flowRight = flowRight;
  }

})(this);
