$(document).ready(function(){
    $("#startRace").click(function(){
      $("#car1").animate({
        left:"90%"     
      });

      $("#car2").animate({
        left:"90%"     
      });

    });

    $("#resetRace").click(function(){
        $("#car1").animate({
          left:"5%"     
        });
  
        $("#car2").animate({
          left:"5%"     
        });
  
      });
  });

  