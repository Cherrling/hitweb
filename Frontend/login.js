$(document).ready(function() {


    $('#btn-login').click(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);
        console.log(password);

        $.ajax({
            type: "post",
            url: "http://127.0.0.1:3000/login",
            data: { 'username': username, 'password': password },
            dataType: "dataType",
            success: function(response) {

            }
        });


    });






});