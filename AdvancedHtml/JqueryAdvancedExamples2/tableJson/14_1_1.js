$(document).ready(function () {


    $("#btn").click(function () {

        $.getJSON("actors.json", function (result) {
            var actor = "";
            $.each(result, function (key, value) {
                actor += "<tr>";
                actor += "<td>" + value.id + "</td>";
                actor += "<td>" + value.fname + "</td>";
                actor += "<td>" + value.lname + "</td>";
                actor += "<td>" + value.age + "</td>";
                actor += "</tr>";
            });
            $("#actors_table").append(actor);
        });

    });









}); //ready