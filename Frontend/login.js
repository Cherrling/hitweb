$(document).ready(function() {

    $.ajax({
        type: "post",
        url: "http://127.0.0.1/api/username",
        success: function (response) {
            console.log(response);
        }
    });

    $('#2reg').click(function (e) { 
        e.preventDefault();
        $('#login-box').slideUp(function () {$('#reg-box').slideDown();  });

    });

    $('#2login').click(function (e) { 
        e.preventDefault();
        $('#reg-box').slideUp(function () {$('#login-box').slideDown();  });

    });



    $('#btn-login').click(function(e) {
        e.preventDefault();
        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);
        console.log(password);

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/api/login",
            data: { 'username': username, 'password': password },
            
            success: function(response) {
                console.log(response);
                if(response.status==0){
                    location.href="../"
                }else{
                    alert(response.message)
                }
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
            url: "http://127.0.0.1/api/reguser",
            data: { 'username': username, 'password': password },
            
            success: function(response) {
                if(response.status==0){
                    $('#reg-box').slideUp(function () {$('#login-box').slideDown();  });
                }else{
                    alert(response.message)
                }
                console.log(response);

            }
        });


    });




});