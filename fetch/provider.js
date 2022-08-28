async function scheduleHtmlProvider() {
    await loadTool('AIScheduleTools')
    url = 'http://jwxt.niit.edu.cn/jwapp/sys/wdkb/modules/xskcb/cxxszhxqkb.do'
    const cookie = document.cookie
    const UA = navigator.userAgent
    const d = new Date()
    var year = d.getFullYear()
    const month = d.getMonth() + 1
    var XNXQDM = 2022 - 2023 - 1
    var term = 1
    // 2-7月份视为第二学期
    if (month > 1 && month < 8) {
        term = 2
        year--
    }
    XNXQDM = year + "-" + (year + 1) + "-" + term
    try {
        const res = await fetch(url,
            {
                method: "post",
                mode: 'no-cors',
                credentials: "include",
                "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Credentials": true,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    "Accept": "application/json, text/javascript, */*; q=0.01",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9",
                    "Content-Length": "25",
                    "Cookie": cookie,
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Host": "jwxt.niit.edu.cn",
                    "Origin": "http://jwxt.niit.edu.cn",
                    "Referer": "http://jwxt.niit.edu.cn/jwapp/sys/wdkb/*default/index.do?THEME=indigo&EMAP_LANG=zh",
                    "User-Agent": UA,
                    "X-Requested-With": "XMLHttpRequest",
                },
                body: 'XNXQDM=' + XNXQDM
            })
        resJson = await res.json()
        return JSON.stringify(resJson)
    } catch (error) {
        // console.error(error)
        await AIScheduleAlert("请登录后打开课表界面导入" + error.message)
        return 'do not continue'
    }
}