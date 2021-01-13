$(document).ready(function() {

    $("#left").click(function() {
        $(".box").animate({
            left: "-=40px"
        });
    });

    $("#right").click(function() {
        $(".box").animate({
            left: "+=40px"
        });
    });

    $("#down").click(function() {
        $(".box").animate({
            top: "+=40px"
        });
    });

    $("#up").click(function() {
        $(".box").animate({
            top: "-=40px"
        });
    });






});