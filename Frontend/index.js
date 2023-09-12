$(document).ready(function () {
  $("#more").click(function (e) {
    e.preventDefault();
    alert("没有更多啦");
  });

  function showTime() {
    var endTime = new Date("2023-9-26 00:03:59").getTime();
    var newTime = new Date().getTime();
    var diffTime = (endTime - newTime) / 1000;
    $("#hour").text(parseInt(diffTime / 60 / 60));
    $("#minute").text(parseInt((diffTime / 60) % 60));
    $("#second").text(parseInt(diffTime % 60));
  }
  setInterval(showTime, 1000);

  $("#img_1").slideDown();


  $("#img_btn_1").click(function (e) {
    e.preventDefault();
    if ($('#img_1').css('display')=='none') {
      $(".image_box").slideUp(500);
      $("#img_1").slideDown();
    }
  });
  $("#img_btn_2").click(function (e) {
    e.preventDefault();
    if ($('#img_2').css('display')=='none') {
      $(".image_box").slideUp(500);
      $("#img_2").slideDown();
    }
  });  $("#img_btn_3").click(function (e) {
    e.preventDefault();
    if ($('#img_3').css('display')=='none') {
      $(".image_box").slideUp(500);
      $("#img_3").slideDown();
    }
  });  $("#img_btn_4").click(function (e) {
    e.preventDefault();
    if ($('#img_4').css('display')=='none') {
      $(".image_box").slideUp(500);
      $("#img_4").slideDown();
    }
  });

  $("#1").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "get",
      url: "//127.0.0.1:3000",
      data: "datatest",
      dataType: "dataType",
      success: function (response) {},
    });
  });
  $("#2").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "//127.0.0.1:3000",
      data: { data: 111 },
      dataType: "text",
      success: function (response) {
        console.log(response);
      },
    });
  });
  $("#3").click(function (e) {
    e.preventDefault();
    window.open("./login.html");
  });
});
