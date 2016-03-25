$(document).ready(function(){
  $("#A").mouseenter(function(){
    $("#A").fadeTo("slow", 0.33);
    $("#B").slideToggle("slow");

  });

});
