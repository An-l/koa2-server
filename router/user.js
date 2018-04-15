/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userController = require('../controller/user')

const routers = router
  .get('/login', userController.login)
  .get('/test', userController.test)
//   .post('/user/signIn.json', userInfoController.signIn)
//   .post('/user/signUp.json', userInfoController.signUp)

module.exports = routers
