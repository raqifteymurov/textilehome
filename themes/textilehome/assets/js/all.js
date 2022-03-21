//hero-slick-slider-start
$('.hero-slider').slick({
	 
		speed:1000,
		// autoplay:true,
		infinite:true,
		 
		fade:true,
		prevArrow: '.prev1_arrow',
		nextArrow: '.next1_arrow',
		 
	});
//hero-slick-slider-end


//featured-products-start
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
			breakpoint: 380,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  });
//featured-product-slider-end
	  
 
//our-products-slider-start
$('.our_products_slider').slick({	 
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		 prevArrow:'.prev2_arrow',
		 nextArrow:'.next2_arrow',
		autoplay: true,
		arrows:true,
		responsive: [
		  {
			breakpoint: 992,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			 
			}
		  }
		]
	  });

	  
	  $('.our_products_slider_mobile').slick({	 
		speed: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		//  prevArrow:'.prev3_arrow',
		//  nextArrow:'.next3_arrow',
		autoplay: true,
		autoplaySpeed:2000,
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
				slidesToScroll: 1,
				dots:true
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
                dots:true
			  }
			}
		  ]
		});
//our-products-slider-end
	 

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
