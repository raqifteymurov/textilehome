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



//testimonial-slider-start
$('.testimonial_slider').slick({
	speed:1000,
	autoplay:true,
	infinite:true,
	 arrows:false,
	 
});
//testimonial-slider-end


//group-product-slider start
$('.group_product_slider1').slick({
	speed:2000,
	autoplay:true,
	infinite:true,
	prevArrow: '.prev3_arrow',
	nextArrow: '.next3_arrow',
});
$('.group_product_slider2').slick({
	speed:2000,
	autoplay:true,
	infinite:true,
	prevArrow: '.prev4_arrow',
	nextArrow: '.next4_arrow',
});
$('.group_product_slider3').slick({
	speed:2000,
	autoplay:true,
	infinite:true,
	prevArrow: '.prev5_arrow',
	nextArrow: '.next5_arrow',
});
//group-product-slider end

$('.blog_page_slider').slick({
	speed:1000,
 
	infinite:true,
	 arrows:false,
	 dots:true,
	 fade:true
	 
});

$('.blog_details_slider').slick({
	speed:1000,
 
	infinite:true,
	 arrows:false,
	 dots:true,
	 fade:true
	 
});


//go to top button start
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
//go to top button end


// const toggle=document.getElementById("toggle");
// const sidebar=document.getElementById("mySidenav");

// document.body.click(function(e){
// 		if(e.target.id !=='mySidenav'){
// 			 sidebar.style.width="0";
		 
// 		}
// })

// toggle.onclick()==function(){
//   toggle.classList.toggle("active");
//   sidebar.classList.toggle("active");
// }
//in header left side bar start
function openNav() {
	document.getElementById("mySidenav").style.width = "350px";
//    
}
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

 
//in header left side bar end






