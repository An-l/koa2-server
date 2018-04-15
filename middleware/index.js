const path = require('path')
const ip = require("ip")
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const koaStatic = require('koa-static')
const session = require("koa-session2");

const miLog = require('./mi-log')

module.exports = (app) => {
    // 配置控制台日志中间件
    app.use(miLog({
        env: app.env,
        projectName: 'koa2-server',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()
    }));


    // 配置session中间件
    app.use(session({
        key: 'USER_SID',
        maxAge: 30 * 1000 * 60,  // 设置maxAge是80000ms，即30分钟后session和相应的cookie失效过期
        secure: false //true为使用https连接

    }))



    // 配置ctx.body解析中间件
    app.use(bodyParser())

    // 配置静态资源加载中间件
    app.use(koaStatic(path.resolve(__dirname, "../public")))


    // 配置服务端模板渲染引擎中间件
    app.use(views(path.join(__dirname, './views'), {
        extension: 'ejs'
    }))


}