$(document).ready(function() {
    $.ajax({
        url: "players.xml",
        success:function(result){
            $("keimeno").html(result);
        }
    });
    $("#btn2").on("click",function(){

        $.get("players.xml",function(res){
            $(res).find("player").each(function()
            
        });
    });
});