
// 导入定义验证规则的包
const joi = require('joi')

/**string()值必须是字符串
*alphanum()值只能是包含a-zA-Z0-9的字符串
*min(length)最小长度
*max(length)最大长度
*required()值是必填项，不能为undefined
*pattern(正则表达式)值必须符合正则表达式的规则
*/

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(4).max(10).required()
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required()

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
    body: {
      username,
      password,
    },
  }  