$(document).ready(function () {

  username = "";
  islogin = false;

  checkadmin = 1;

  $.ajax({
    type: "post",
    url: "http://127.0.0.1/api/username",
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
    url: "http://127.0.0.1/api/getarticle",
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
        url: "http://127.0.0.1/api/updatearticle",
        data: { 'username': username, "ID": ID ,"show":0},
        
        complete: function() {     
          setTimeout(() => {
            location.reload()
          }, 200);
        }
      });
    });
    $('.reshow').click(function (e) { 
      e.preventDefault();
      var ID = $(this).attr("val");
      console.log(ID);
      $.ajax({
        type: "post",
        url: "http://127.0.0.1/api/updatearticle",
        data: { 'username': username, "ID": ID ,"show":1},
        complete: function() {     
          setTimeout(() => {
            location.reload()
          }, 200);
        }

      });
    });
  }





});
