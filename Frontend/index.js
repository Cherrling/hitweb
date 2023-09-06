$(document).ready(function() {
    $("#1").click(function(e) {
        e.preventDefault();
        $.ajax({
            type: "get",
            url: "//127.0.0.1:3000",
            data: "datatest",
            dataType: "dataType",
            success: function(response) {

            }
        });
    });
    $("#2").click(function(e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "//127.0.0.1:3000",
            data: { 'data': 111 },
            dataType: "text",
            success: function(response) {
                console.log(response);
            }
        });
    });





});