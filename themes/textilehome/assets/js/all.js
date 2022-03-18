$('.hero-slider').slick({
		dots: true,
		speed:1000,
		// autoplay:true,
		infinite:true,
		 dots:true,
		fade:true,
		prevArrow: '.prev1_arrow',
		nextArrow: '.next1_arrow',
		 
	});

	$('.slidername').slick({	 
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		// prevArrow:'.slick-prev1',
		// nextArrow:'.slick-next1',
		autoplay: true,
	 arrows:false,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			 
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	  });
		  
	 

	mybutton = document.getElementById("myBtn");

	// When the user scrolls down 520px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 520 || document.documentElement.scrollTop > 520) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
