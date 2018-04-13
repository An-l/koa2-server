/**
 * 用户业务操作
 */

const userModel = require('./../models/user')

const user = {
  /**
   * 登录操作
   * @param  {object} formData 登录表单信息
   * @return {object}          登录操作结果
   */
  async signIn(formData) {
    let resultData = await userModel.getOneByUserNameAndPassword({
      password: formData.password,
      name: formData.userName
    })
    return resultData
  }
}


module.exports = user