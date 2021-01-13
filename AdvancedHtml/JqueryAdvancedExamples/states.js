$(document).ready(function() {


    $("#states tr:odd").addClass("chroma_odd");

    $("#states tr:even").addClass("chroma_even");


    $("#states tr td").find("span").hide();

    $("#states tr").on("mouseenter mouseleave", "td", function() {

        $(this).toggleClass("chroma");
        $(this).find("span").toggle();

    });


}); // kleinei i ready