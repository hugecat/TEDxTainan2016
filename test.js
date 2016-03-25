$(document).ready(function(){

  $("#B").hide();
  $("#C").hide();
  $("#D").hide();
  $("#E").hide();
  $("#F").hide();

  $("#box1").mouseenter(function(){
    $(".intro").fadeOut(10);
    $("#A").fadeIn(1000);
  });


  $("#box2").mouseenter(function(){
    $(".intro").fadeOut(10);
    $("#B").fadeIn(1000);
  });


  $("#box3").mouseenter(function(){
    $(".intro").fadeOut(10);
    $("#C").fadeIn(1000);
  });


  $("#box4").mouseenter(function(){
    $(".intro").fadeOut(10);
    $("#D").fadeIn(1000);
  });


  $("#box5").mouseenter(function(){
    $(".intro").fadeOut(10);
    $("#E").fadeIn(1000);
  });


  $("#box6").mouseenter(function(){
    $(".intro").fadeOut(10);
    $("#F").fadeIn(1000);
  });


});
