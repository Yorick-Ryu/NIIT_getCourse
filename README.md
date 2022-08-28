# 小爱课程表适配脚本

## 基本介绍

在阅读之前，请先了解[小爱课程表开发者文档](https://open-schedule-prod.ai.xiaomi.com/docs/#/help/)

此脚本仅适用于金智教务系统，这里提供了两种获取课表数据的方式:

- `html`文件夹里是通过爬html获取数据，主要参考[Cheerio官方文档翻译](https://juejin.cn/post/6844904135767097352#heading-37)

- `fetch`是通过fetch爬取数据。[fetch参考文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

理论上来讲，第二种方式只需登录即可。 但是因为后端禁止跨域的限制，无法跨域爬取数据，所以这两种都需要登录后进入课表界面！

## 已知问题

- 无法在ios上导入，但这并不是脚本的问题，而是小爱课程表在ios的浏览器不适配金智教务系统导致无法进入二级菜单

<img src="/pic/coder.png" width="600" height="470" alt="ME"/><br/>
***
## 联系作者：

:smile:[QQ2524964538](http://wpa.qq.com/msgrd?v=3&uin=2524964538&site=qq&menu=yes<br>) 点击跳转
  
:+1:Wechat：<img src="/pic/Screenshot_2021_0910_000914.png" width="200" height="200" alt="ME"/><br/>