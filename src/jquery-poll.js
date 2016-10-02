/*
 ---

 name: Jquery Poll
 require: jquery
*/

(function($){
  "use strict";

  $.poll = function(opts){
    var url       = opts.url;
    var every     = opts.every;
    var increment = opts.increment;
    var max       = opts.max;
    var success   = opts.success;
    var error     = opts.error;
    var ajaxOpts  = opts.ajaxOpts;
    var data      = opts.data;
    var method    = opts.method || 'GET';

    var defaultAjaxOpts = {
      url: url,
      data: data,
      method: method,
      success: function(_1,_2,_3){ success(_1,_2,_3,poll); },
      error: function(_1,_2,_3){ error(_1,_2,_3,poll); }
    }

    var poll = function(){
      if(increment != void 0) every += increment;
      if(max != void 0)       every = Math.min(max, every);

      setTimeout(function(){
        $.ajax($.extend({}, defaultAjaxOpts, ajaxOpts));
      }, every)
    };

    poll();
  }
})(jQuery)
