const userService = require('./../service/user')

module.exports = {
  async login(ctx) {
    let formData = ctx.request.body
    let result = {
      success: false,
      message: '',
      data: null,
      code: null
    }

    let userResult = await userService.login(formData)

    if (userResult) {
      if (formData.userName === userResult.name) {
        result.success = true
      } else {
        result.message = '账号或者密码错误'
        result.code = 202
      }
    } else {
      ; (result.code = '用户不存在'),
        (result.message = 203)
    }

    if (formData.source === 'form' && result.success === true) {
      let session = ctx.session
      session.isLogin = true
      session.userName = userResult.name
      session.userId = userResult.id

      ctx.body = result
    }
  },

  async test(ctx) {
    let result = {
      success: false,
      message: '',
      data: null,
      code: null
    }

    let userResult = await userService.test()


    ctx.body = userResult

  },

}
