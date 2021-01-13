$(document).ready(function(){
  var car1 = getRndInteger(800,1500);
  var car2 = getRndInteger(800,1500);
    $("#startRace").click(function(){
      $("#car1").animate({
        left:"90%"     
      },car1);

      $("#car2").animate({
        left:"90%"     
      },car2);

    });
    
    $("#resetRace").click(function(){
        $("#car1").animate({
          left:"5%"     
        },1500);
  
        $("#car2").animate({
          left:"5%"     
        },1500);
  
      });
  });

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }