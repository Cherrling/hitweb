$(document).ready(function () {

  username = "";
  islogin = false;

  checkadmin = 0;

  $.ajax({
    type: "post",
    url: "http://192.168.2.17/api/username",
    success: function (response) {

      if (response.status == 0) {
        username = response.username;
        $("#banner-login-button").text(username);
        $("#banner-admin-button").show();
        islogin = true;
        if (response.op >= 3) {
        } else {
          if (checkadmin == 1) {

            alert("权限不足，即将返回主界面")
            location.href = "../"
          }
        }
      } else {
        if (checkadmin == 1) {

          alert("未登录，即将返回主界面")
          location.href = "../"
        }

      }
    }
  });

  $.ajax({
    type: "post",
    url: "http://192.168.2.17/api/getarticle",
    success: function (response) {

      if (response.status == 0) {
        console.log(response.article);
        for (let i = 0; i < response.article.length; i++) {
          var content = response.article[i].content;
          var ID = response.article[i].ID;
          // 创建一个 Date 对象，注意乘以1000转换为毫秒级别的时间戳
          const d = new Date(response.article[i].timestamp);
          // 获取东八区的时间字符串
          const date = d.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });

          var author = response.article[i].author;

          // 创建一个新的 <div> 元素


          var details = $('<div>');
          details.addClass('details')
          details.text("作者：" + author + "  " + "时间：" + date)


          var newDiv = $('<div>');
          newDiv.attr("val", ID);
          newDiv.addClass(ID);
          newDiv.addClass('article-node-box');
          newDiv.html(content);

          var del = $('<button>');
          del.text("删除此文章")
          del.addClass('del');
          del.addClass('button');
          del.attr('val', ID);

          $('<br>').appendTo(newDiv);
          
          details.appendTo(newDiv);

          if (response.article[i].show==0) {
            var h3=$('<h3>')
            h3.css('color', 'red');
            h3.text("已删除")
            var reshow = $('<button>');
            reshow.text("恢复显示")
            reshow.addClass('reshow');
            reshow.addClass('button');
            reshow.attr('val', ID);
            reshow.appendTo(h3);
            h3.appendTo(newDiv);
            // continue
          }
          
          del.appendTo(newDiv);


          newDiv.appendTo(".article-box");

        }

        binddel();
      }
      // console.log(response);
    }
  });



  function binddel() {
    $('.del').click(function (e) { 
      e.preventDefault();
      var ID = $(this).attr("val");
      console.log(ID);
      $.ajax({
        type: "post",
        url: "http://192.168.2.17/api/updatearticle",
        data: { 'username': username, "ID": ID ,"show":0},
  
        success: function (response) {
          console.log(response);
          location.reload();
        }
      });
    });
    $('.reshow').click(function (e) { 
      e.preventDefault();
      var ID = $(this).attr("val");
      console.log(ID);
      $.ajax({
        type: "post",
        url: "http://192.168.2.17/api/updatearticle",
        data: { 'username': username, "ID": ID ,"show":1},
  
        success: function (response) {
          console.log(response);
          location.reload();
        }
      });
    });
  }

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
        url: "http://192.168.2.17/api/logout",
        success: function (response) {
          location.reload()

        }
      });

    } else {
      location.href = "login.html"

    }
  });



  function showTime() {
    var endTime = new Date("2023-10-11 00:03:59").getTime();
    var newTime = new Date().getTime();
    var diffTime = (endTime - newTime) / 1000;
    $("#hour").text(parseInt(diffTime / 60 / 60));
    $("#minute").text(parseInt((diffTime / 60) % 60));
    $("#second").text(parseInt(diffTime % 60));
  }
  setInterval(showTime, 1000);

  // $("#img_0").slideDown();

  // $("#img_btn_0").click(function (e) {
  //   e.preventDefault();
  //   if ($("#img_0").css("display") == "none") {
  //     $(".image_box").slideUp(500);
  //     $("#img_0").slideDown();
  //   }
  // });
  // $("#img_btn_1").click(function (e) {
  //   e.preventDefault();
  //   if ($("#img_1").css("display") == "none") {
  //     $(".image_box").slideUp(500);
  //     $("#img_1").slideDown();
  //   }
  // });
  // $("#img_btn_2").click(function (e) {
  //   e.preventDefault();
  //   if ($("#img_2").css("display") == "none") {
  //     $(".image_box").slideUp(500);
  //     $("#img_2").slideDown();
  //   }
  // });
  // $("#img_btn_3").click(function (e) {
  //   e.preventDefault();
  //   if ($("#img_3").css("display") == "none") {
  //     $(".image_box").slideUp(500);
  //     $("#img_3").slideDown();
  //   }
  // });
  // $("#img_btn_4").click(function (e) {
  //   e.preventDefault();
  //   if ($("#img_4").css("display") == "none") {
  //     $(".image_box").slideUp(500);
  //     $("#img_4").slideDown();
  //   }
  // });


});
