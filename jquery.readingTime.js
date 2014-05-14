(function($) {
// What does the readingTime plugin do?
$.fn.readingTime = function(options) {

	if (!this.length) { return this; }

	var opts = $.extend(true, {}, $.fn.readingTime.defaults, options);

	function countWords(str){
		s = str;
		s = s.replace(/(^\s*)|(\s*$)/gi,"");
		s = s.replace(/[ ]{2,}/gi," ");
		s = s.replace(/\n /,"\n");
		return s.split(' ').length;
	}

	function timeLeft()
	{
		var outofview = "";
		$(opts.copyEl).find(" > *").each(function(){
			if( $(window).scrollTop() < $(this).offset().top )
			{
				outofview = outofview + $(this).text();
			}
		});
		  
		var num_words = countWords(outofview),
			min_left = Math.floor(num_words / opts.wpm);
		  
		var suffix = 'minutes';
		if(min_left == 1)
		{
			suffix = 'minute';
		}
		$(opts.remainingEl).find(opts.counterEl).text( min_left + ' ' + suffix + ' left' );
		$(opts.remainingEl).find(opts.percEl).css('width', (( ($(window).scrollTop() + $(window).height()) / $(document).height()) * 100) + "%" );
		  
		if(min_left == 0)
		{
			$(opts.remainingEl).addClass('hide');
		}
		else {
			$(opts.remainingEl).removeClass('hide');
		}
	}

	this.each(function() {
		var $this = $(this);
		$this.append('<div class="left"><span class="counter"></span><span class="perc"></span></div>');
		$(window).on('load scroll', timeLeft);
	});

	return this;
};

// default options
$.fn.readingTime.defaults = {
	wpm: 300,
	copyEl: '.copy',
	remainingEl: '.left',
	counterEl: '.counter',
	percEl: '.perc'
};

})(jQuery);