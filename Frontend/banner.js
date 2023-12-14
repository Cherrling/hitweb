$(document).ready(function () {

    function showTime() {
        var endTime = new Date("2024-01-01 00:00:00").getTime();
        var newTime = new Date().getTime();
        var diffTime = (endTime - newTime) / 1000;
        $("#hour").text(parseInt(diffTime / 60 / 60));
        $("#minute").text(parseInt((diffTime / 60) % 60));
        $("#second").text(parseInt(diffTime % 60));
      }
      setInterval(showTime, 1000);
    $('#lobby').click(function (e) { 
        e.preventDefault();
        location.href="./"
    });



    $("#banner-admin-button").click(function (e) { 
    e.preventDefault();
    if (islogin) {
      location.href="admin.html"
    
    }
  });
  $("#banner-upload-button").click(function (e) { 
    e.preventDefault();
    if (islogin) {
      location.href="upload.html"
    
    }else{
        alert("请先登录")
      location.href = "login.html"

    }
  });

$("#banner-login-button").hover(function () {
    // over
    if (islogin == 1) {
      $("#banner-login-button").text("Logout");
    }
  }, function () {
    // out
    if (islogin == 1) {
      $("#banner-login-button").text(username);

    }

  }
  );

  $("#banner-login-button").click(function (e) {
    e.preventDefault();
    if (islogin) {
      $.ajax({
        type: "post",
        url: "http://127.0.0.1/api/logout",
        success: function (response) {
          location.reload()

        }
      });

    } else {
      location.href = "login.html"

    }
  });

});



