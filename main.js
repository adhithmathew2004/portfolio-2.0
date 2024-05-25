$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
      $('.fa-bars').removeClass('fa-times');
      $('nav').removeClass('nav-toggle');

      // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById(".home .hero .text1 ").style.fontSize = "30px";
  } else {
    document.getElementById(".home .hero .text1 ").style.fontSize = "90px";
  }

}



    });
  

  
    $('.project').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  
  });


  