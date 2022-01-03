
$('.owl-carousel').owlCarousel({

    autoplay:true,
    autoplayHoverPause:true,
    lazyLoad:true,
    margin:5,
    stagePadding:5,
    responsive:{
        0:{
            items:1,
            dots:false,
            nav:true
        },
     
        960:{
            items:3,
            dots:false,
            nav:true,
            loop:true
        },
        1200:{
            items:4,
            dots:false,
            nav:true,

  
        },
    }
  
  });

$(window).scroll(function(){
    if($(window).scrollTop() >150){

        $("#myHeader").addClass("sticky");
    }
    else{
        $("#myHeader").removeClass("sticky");

    }
})
  
function openNav(){
    document.getElementById("navbarSupportedContent").style.width = "100%";

 }

 function closeNav(){
    document.getElementById("navbarSupportedContent").style.width = "0";


 }