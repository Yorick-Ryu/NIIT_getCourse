# 小爱课程表适配金智教务脚本

------------
## 基本介绍

在阅读本文档之前，请先了解[小爱课程表开发者文档](https://open-schedule-prod.ai.xiaomi.com/docs/#/help/)

**视频展示**

[点击跳转到视频展示](https://www.bilibili.com/video/BV1ae4y1Z7RV)

此脚本仅适用于金智教务系统，这里提供了两种获取课表数据的方式：

- `html`文件夹里是通过爬html获取数据，主要参考[Cheerio官方文档翻译](https://juejin.cn/post/6844904135767097352#heading-37)

- `fetch`文件夹下是通过fetch方法爬取数据。主要参考[fetch MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

理论上来讲，第二种方式只需登录即可。 但是因为后端禁止跨域发送请求的限制，无法获取数据（或者是我没找到方法），所以这两种方式暂时都需要登录后进入课表界面！

PS：课表数据用python是可以获取的，这就不存在跨域问题，所以求解？

目前仅测试过南京工业职业技术大学的金智教务系统可用。

## 已知问题

- 无法在ios上导入，但这并不是脚本的问题，而是小爱同学在ios系统的浏览器不适配金智教务系统导致无法进入二级菜单

-------
<img src="/pic/coder.png" width="700" height="470" alt="ME"/>

***

## 联系作者：

:smile: QQ：2524964538
  
:+1: Wechat：

<img src="./pic/wechat.JPG" width="400" height="500" alt="ME"/>