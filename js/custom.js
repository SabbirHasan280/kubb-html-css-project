//back-to t0p//
$(function(){
   $('.back-to-top').click(function(){
      $('html,body').animate({scrollTop:0},1500) 
   });
//sticky header//
    $(window).on('scroll',function (event) {
       var asad = $(window).scrollTop();
        if (asad < 245) {
            $(".header").removeClass("bg");
        }   else{
            $(".header").addClass("bg");
        }
    });
});
//back-to top//