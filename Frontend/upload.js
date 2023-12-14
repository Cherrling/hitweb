$(document).ready(function () {

  username = "";
  islogin = false;

  checklogin = 1;

  $.ajax({
    type: "post",
    url: "http://127.0.0.1/api/username",
    success: function (response) {

      if (response.status == 0) {
        username = response.username;
        $("#banner-login-button").text(username);
        $("#banner-admin-button").show();
        islogin = true;
      } else {
        if (checklogin == 1) {

          alert("未登录，即将返回主界面")
          location.href = "../"
        }  

      }  
    }  
  });  


  const { createEditor, createToolbar } = window.wangEditor

const editorConfig = {
  placeholder: 'Type here...',
  onChange(editor) {
    const html = editor.getHtml()
    console.log('editor content', html)
    // 也可以同步到 <textarea>
  }
}

const editor = createEditor({
  selector: '#editor-container',
  html: '<p><br></p>',
  config: editorConfig,
  mode: 'default', // or 'simple'
})

const toolbarConfig = {}
toolbarConfig.excludeKeys = [
"group-image",
"group-video",
    'italic',
    'group-more-style' // 排除菜单组，写菜单组 key 的值即可
]

const toolbar = createToolbar({
  editor,
  selector: '#toolbar-container',
  config: toolbarConfig,
  mode: 'default', // or 'simple'
})




  $('#upload').click(function (e) {
    e.preventDefault();
    const html = editor.getHtml()
    console.log(html);
    $.ajax({
      type: "post",
      url: "http://127.0.0.1/api/upload",
      data: { content:html},

      complete: function() {     
        setTimeout(() => {
          location.href='./'
        }, 200);
      }
    });
  
  });




});
