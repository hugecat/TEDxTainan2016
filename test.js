$(document).ready(function(){

  $(".b").hide();
  $(".c").hide();
  $(".d").hide();
  $(".e").hide();
  $(".f").hide();

  var prev=".a";

  $("#A").mouseenter(function(){
    if(prev!=".a"){
      $(prev).hide();
      $(".a").show();
      prev=".a";
    }
  });


  $("#B").mouseenter(function(){
    if(prev!=".b"){
      $(prev).hide();
      $(".b").show();
      prev=".b";
    }
  });


  $("#C").mouseenter(function(){
    if(prev!=".c"){
      $(prev).hide();
      $(".c").show();
      prev=".c";
    }
  });


  $("#D").mouseenter(function(){
    if(prev!=".d"){
      $(prev).hide();
      $(".d").show();
      prev=".d";
    }
  });


  $("#E").mouseenter(function(){
    if(prev!=".e"){
      $(prev).hide();
      $(".e").show();
      prev=".e";
    }
  });


  $("#F").mouseenter(function(){
    if(prev!=".f"){
      $(prev).hide();
      $(".f").show();
      prev=".f";
    }
  });


});
