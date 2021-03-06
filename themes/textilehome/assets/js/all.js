//hero-slick-slider-start
$(".hero-slider").slick({
    speed: 1000,
    // autoplay:true,
    infinite: true,

    fade: true,
    prevArrow: ".prev1_arrow",
    nextArrow: ".next1_arrow",
});
//hero-slick-slider-end

//featured-products-start
$(".slidername").slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow:'.slick-prev1',
    // nextArrow:'.slick-next1',
    autoplay: true,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
//featured-product-slider-end

//our-products-slider-start
$(".our_products_slider").slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".prev2_arrow",
    nextArrow: ".next2_arrow",
    autoplay: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
    ],
});

$(".our_products_slider_mobile").slick({
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    //  prevArrow:'.prev3_arrow',
    //  nextArrow:'.next3_arrow',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            },
        },
    ],
});
//our-products-slider-end

//testimonial-slider-start
$(".testimonial_slider").slick({
    speed: 1000,
    autoplay: true,
    infinite: true,
    arrows: false,
});
//testimonial-slider-end

//group-product-slider start
$(".group_product_slider1").slick({
    speed: 2000,
    autoplay: true,
    infinite: true,
    prevArrow: ".prev3_arrow",
    nextArrow: ".next3_arrow",
});
$(".group_product_slider2").slick({
    speed: 2000,
    autoplay: true,
    infinite: true,
    prevArrow: ".prev4_arrow",
    nextArrow: ".next4_arrow",
});
$(".group_product_slider3").slick({
    speed: 2000,
    autoplay: true,
    infinite: true,
    prevArrow: ".prev5_arrow",
    nextArrow: ".next5_arrow",
});
//group-product-slider end

$(".blog_page_slider").slick({
    speed: 1000,

    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
});

$(".blog_details_slider").slick({
    speed: 1000,

    infinite: true,
    arrows: false,
    dots: true,
    fade: true,
});

$(".product_details").slick({
     
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows:true,
    prevArrow: ".left_prod_details",
    nextArrow: ".right_prod_details",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
 






//go to top button start
mybutton = document.getElementById("myBtn");
// When the user scrolls down 520px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (
        document.body.scrollTop > 520 ||
        document.documentElement.scrollTop > 520
    ) {
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




//sidebar start
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.boxShadow =
        "0 0 0 10000px rgba(0,0,0,.50)";
    document.getElementById("html").style.overflow = "hidden";
    document.getElementById("html").style.height = "100vh";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("html").style.overflow = "visible";
    document.getElementById("html").style.height = "100vh";
    document.getElementById("mySidenav").style.boxShadow = "unset";
}

const $menu = $(".mysidebar");

$(document).mouseup((e) => {
    if (
        !$menu.is(e.target) && // if the target of the click isn't the container...
        $menu.has(e.target).length === 0
    ) {
        // ... nor a descendant of the container
        $menu.removeClass("is-active");
		closeNav();
    }
});

$("#toggle").on("click", () => {
    $menu.toggleClass("is-active");
});
//sidebar end 



//remove search click outside start
const $menu1 = $(".header-search-container");

$(document).mouseup((e) => {
    if (
        !$menu1.is(e.target) && // if the target of the click isn't the container...
        $menu1.has(e.target).length === 0
    ) {
        // ... nor a descendant of the container
        $menu1.removeClass("is-active1");
		 
    }
});

$(".search-trigger").on("click", () => {
    $menu1.toggleClass("is-active1");
});
//remove search click outside end




//quantity change js
$(".pro-qty").prepend('<span class="dec qtybtn">-</span>');
$(".pro-qty").append('<span class="inc qtybtn">+</span>');
$(".qtybtn").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass("inc")) {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero 
        if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find("input").val(newVal);
});

 // Image zoom effect
 $(document).ready(function(){
    $('.img-zoom').zoom();
  });

  //niceselect jquery
  $(document).ready(function(){
    $('select').niceSelect();
  }); 
  

  //product_details_change_images_for_zooming-in
  var imgsrc2= $('#ptt').attr('src');
  $(".product_detail_images img").click(function (e) {
    $('#ptt').attr('src',$(this).attr('src') );
    $(this).addClass('img-zoom');
    $(document).ready(function(){
        $('.img-zoom').zoom();
      });
  })



   
   
 