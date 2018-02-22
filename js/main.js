$(function(){
	
	// Instantiate MixItUp:
	$('#container-mix').mixItUp();
	$("#testimonial-carousel").owlCarousel({
		items: 3,
		 afterAction: function(el){
		   //remove class active
		   this
		   .$owlItems
		   .removeClass('active')
		  
		   //add class active
		   this
		   .$owlItems //owl internal $ object containing items
		   .eq(this.currentItem + 1)
		   .addClass('active')
		  
		},
        pagination : true,
        paginationNumbers: true
	});
	new WOW().init();
	
	//Smooth Scroll
	$('nav a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	
	$('#mc-form').ajaxChimp({
        callback: mailchimpCallback,
        url: "http://blahblah.us13.list-manage.com/subscribe/post?u=1dc1b222717db8f0b81b0ed9c&id=5c4f4f89aa"
    });

    function mailchimpCallback(resp) {
        alert("We have sent you a confirmation email!");
    }
	
	
});
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
})
