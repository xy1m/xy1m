;(function($,window,document,undefined){
	/*var BackToTop = function(ele,opt){
		var $element,defaults,options;
		this.$element = ele;
        this.defaults = {
        	position:0,
        	duration:800,
        	offset:600
        };
        this.options = $.extend({}, this.defaults, opt);
	}
	$.fn.backtotop=function(options){
		var backtotop=new BackToTop(this,options);
		return backtotop.init();
	}
	BackToTop.prototype = {
		init:function(){
			var $ele = this.$element;
			var opt = this.options;
			return $ele.on("click",function(e) {
				e.preventDefault();
				jQuery('html, body').animate({scrollTop: opt.position}, opt.duration);
				return false;
			});
		}
	}*/
	var offset = 300;
    var duration = 1000;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.backtotop').fadeIn(duration);
        } else {
            jQuery('.backtotop').fadeOut(duration);
        }
    });
    
    jQuery('.backtotop').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

})(jQuery,window,document);