$(document).ready(function() {

    $.ajax({
        type: "post",
        url: "http://192.168.2.17/api/username",
        success: function (response) {
            console.log(response);
        }
    });


    $('#btn-login').click(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);
        console.log(password);

        $.ajax({
            type: "post",
            url: "http://192.168.2.17/api/login",
            data: { 'username': username, 'password': password },
            
            success: function(response) {
                location.href="../"
                console.log(response);
            }
        });


    });


    $('#btn-reg').click(function(e) {
        e.preventDefault();
        var username = $('#regusername').val();
        var password = $('#regpassword').val();
        console.log(username);
        console.log(password);

        $.ajax({
            type: "post",
            url: "http://192.168.2.17/api/reguser",
            data: { 'username': username, 'password': password },
            
            success: function(response) {
                console.log(response);

            }
        });


    });




});