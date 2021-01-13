$(document).ready(function() {
    
    $("#states tr:odd").addClass("chroma_even");

    $("#states tr:even").addClass("chroma_odd");

    $("#states tr td span").find("span").hide();

    $("#states tr").on("mousenter", "td")

    $("#states tr").on("mouseenter", "td", function(){
        $(this).toggleClass("chroma");
        $(this).find("span").toggle();
    });

    


});

