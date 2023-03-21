/*---------------------------- start Hamburger_menu_mobile ------------------------*/

$(".btn_for_open_lang").click(function(){
	 $(".open_row_lang").slideToggle();
})
$(".open_name_info").click(function(){
	 $(".name_row_open").slideToggle();
})
$(".opencat").click(function(){
	 $(".open_select_categ").slideToggle();
})
$(".ope1").click(function(){
	 $(".select_item_calc_body1").slideToggle();
})
$(".ope2").click(function(){
	 $(".select_item_calc_body2").slideToggle();
})
$(".menu_right_btn").click(function(){
	 $(".menu_right_open_r").toggleClass('closed');
})
$(".close_menu_btn").click(function(){
	 $(".menu_right_open_r").addClass('closed');
})
$(".faq_tabs_title").click(function(){
	 $(this).toggleClass('activetab');
})
$(".toform").click(function(){
	 $(".open_popup").toggleClass('active');
})
$(".close_popup").click(function(){
	 $(".open_popup").toggleClass('active');
})


/*---------------------------- start MagnificPopup ------------------------*/

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});
/*---------------------------- start Slick_slider ------------------------*/

  $('.news_slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  infinite: true,
	  centerMode: false,
	  autoplaySpeed: 30000,
	  arrows: true,
	  dots: false,	
	  prevArrow: $('.left_slide'),
	  nextArrow: $('.right_slide'),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 930,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 400,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});


/*---------------------------- start MagnificPopup ------------------------*/

$(".send_mess").magnificPopup()

$(".item_popup1").magnificPopup({
	type: 'image',
	closeOnContentClick: true,
	closeBtnInside: false,
	gallery: { enabled:true }
})


/*---------------------------- start Scroll_To ------------------------*/

$(".scroll_down_btn").click(function (){
		$('html, body').animate({
				scrollTop: $("#polblock").offset().top
		}, 1000);
})


/*---------------------------- start Animate WOW ------------------------*/

new WOW().init();


/*---------------------------- tabs_contact page ------------------------*/
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
  }

/*---------------------------- timer code  ------------------------*/
  function startTimer(duration, display) {
    var start = Date.now(),
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
/*---------------------------- index timer code  ------------------------*/
// Set the date we're counting down to
var countDownDate = new Date("Dec 5, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("dayscount").innerHTML = days;
  document.getElementById("hourscount").innerHTML = hours;
  document.getElementById("minscount").innerHTML = minutes;
  document.getElementById("secscount").innerHTML = seconds;
    
  // If the count down is over, write some text 
  // if (distance < 0) {
  //   clearInterval(x);
  //   document.getElementById("demo").innerHTML = "EXPIRED";
  // }
}, 1000);

/*---------------------------- index range code  ------------------------*/
$.fn.WBslider = function() {
	return this.each(function() {
		var $_this = $(this),
			$_date = $('input', $_this),
			$_title = $('.setyear', $_this),
			thumbwidth = 50, // set this to the pixel width of the thumb
			yrnow = 200;

		// set range max to current year
		// $_date.attr('max', yrnow);
		// $('.endyear', $_this).text( yrnow );
		// $_date.val(yrnow - 10); // -10 years, just because...

		$_date.on('input change keyup', function() {
			var $_this = $(this),
				val = parseInt($_date.val(), 10);

			// if (val < 1) {
			// 	val = '< 1987';
			// }
			if (val === '') { // Stop IE8 displaying NaN
				val = 0;
			}

			$_title.text( val + ' BTC');

			var pos = (val - $_date.attr('min'))/($_date.attr('max') - $_date.attr('min'));

			// position the title with the thumb
			var thumbCorrect = thumbwidth * (pos - 0.5) * -1,
				titlepos = Math.round( ( pos * $_date.width() ) - thumbwidth/4 + thumbCorrect );

			$_title.css({'left': titlepos});

			// show "progress" on the track
			pos = Math.round( pos * 99 ); // to hide stuff behide the thumb
			var grad = 'linear-gradient(90deg, #8facf5 ' + pos + '%,#dde6fc ' + (pos+1) + '%)';
			$_date.css({'background': grad});

		}).on('focus', function() {
			if ( isNaN( $(this).val() ) ) {
				$(this).val(0);
			}
		}).trigger('change');
		
		$(window).on('resize', function() {
			$_date.trigger('change');
		});
	});
};

$(function() {

	$('.slider').WBslider();

});