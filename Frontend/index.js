$(document).ready(function () {

  username="";
  islogin=false;


  $.ajax({
    type: "post",
    url: "http://192.168.2.17/api/username",
    success: function (response) {
      
      if (response.status==0) {
        if(response.op>=3){
          $("#banner-admin-button").show();
        }



        username=response.username;
        islogin=true;
        $("#banner-login-button").text(username);
      }
      console.log(response);
    }
});


$.ajax({
  type: "post",
  url: "http://192.168.2.17/api/getarticle",
  success: function (response) {
    
    if (response.status==0) {
      console.log(response.article);
      for (let i = 0; i < response.article.length; i++) {
        if (response.article[i].show==0) {
          continue
        }
        var content = response.article[i].content;
        var ID=response.article[i].ID;
        // 创建一个 Date 对象，注意乘以1000转换为毫秒级别的时间戳
        const d = new Date(response.article[i].timestamp);
        // 获取东八区的时间字符串
        const date = d.toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' });
        var author=response.article[i].author;
         // 创建一个新的 <div> 元素

        
        
        var details = $('<div>');
        details.addClass('details')
        details.text("作者："+author+"  "+"时间："+date)

        var newDiv = $('<div>');

        // 添加类和文本内容
        console.log(ID);
        newDiv.addClass('article-node-box');
        newDiv.html(content);

        $('<br>').appendTo(newDiv);
        details.appendTo(newDiv);
        
        newDiv.appendTo(".article-box");
        
      }
    }
    // console.log(response);
  }
});








  $("#banner-login-button").hover(function () {
      // over
      if (islogin==1) {
        $("#banner-login-button").text("Logout");
      }
    }, function () {
      // out
      if (islogin==1) {
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
    
    }else{
      location.href="login.html"
    
    }
  });

  $("#banner-admin-button").click(function (e) { 
    e.preventDefault();
    if (islogin) {
      location.href="admin.html"
    
    }
  });



  $("#more").click(function (e) {
    e.preventDefault();
    alert("没有更多啦");
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

  $("#3").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "//127.0.0.1:3000/login",
      data: { username: 111, password: 123456 },
      dataType: "text",
      success: function (response) {
        console.log(response);
      },
    });
  });

  $("#Login").click(function (e) {
    e.preventDefault();
    window.open("./login.html");
  });
  $("#sql").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "post",
      url: "//127.0.0.1:3000/testsql",
      data: "",
      dataType: "dataType",
      success: function (response) {},
    });
  });
});
