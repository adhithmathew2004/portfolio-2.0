<<<<<<< HEAD:main.js
$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
      $('.fa-bars').removeClass('fa-times');
      $('nav').removeClass('nav-toggle');
    });
  

  
    $('.project').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  
  });


=======
$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('nav').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
      $('.fa-bars').removeClass('fa-times');
      $('nav').removeClass('nav-toggle');
    });
  

  
    $('.project').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });
  
  });


>>>>>>> 79e5902eddb2dab4fbce236c19d4417ba3411b5d:portfolio website/portfolio-2.0/main.js
  