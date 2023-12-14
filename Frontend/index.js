$(document).ready(function () {

  username="";
  islogin=false;


  $.ajax({
    type: "post",
    url: "http://127.0.0.1/api/username",
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
  url: "http://127.0.0.1/api/getarticle",
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


});
