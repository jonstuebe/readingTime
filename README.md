# readingTime, a jQuery plugin for reading progress

## Usage

To use simply include plugin file (and jQuery) and call on main container like so:

	<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script src="jquery.readingTime.min.js"></script>
	<script>
	$(function() {
		$(".container").readingTime();
	});
	</script>
	
You will need to do some basic styling, such as position the elements where you want on screen and giving a background color to the progress bar and such. I've included an example so you can see all of this in action (both scss and compiled css provided, as well as a gulp file to work with).

## Options

#### wpm
Words Per Minute

    wpm: 300
    
#### copyEl
Element that contains Copy

    copyEl: '.copy',

#### remainingEl
Element (will be generated) that is the parent container to the progress bar and remaining text label

    remainingEl: '.left',
    
#### CounterEl
Element that holds the text for how much time is left to finish reading the page.

    counterEl: '.counter',

#### percEl
Element that creates the progress bar

    percEl: '.perc'
    
## Demo
  
[CodePen Demo](http://codepen.io/jonstuebe/pen/KrIex)


### Ideas, Forks, Issues

If you have any cool ideas, bugs you notice or anything else really, please Download, Fork, Commit, and send it my way.