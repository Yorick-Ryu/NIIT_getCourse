function scheduleHtmlParser(html) {
    // 定义最终结果
    let result = []
    // 文本转json对象
    data = JSON.parse(html)
    // 获取数据读取状态
    let _status = data.datas.cxxszhxqkb.extParams.code
    // 判读数据读取状态
    if (_status != 1) {
        console.log("数据读取失败");
        return null
    }
    // 获取课程数据行
    rows = data.datas.cxxszhxqkb.rows
    // 遍历课程
    for (i = 0; i < rows.length; i++) {
        console.log(rows[i]);
        // 定义课表结构
        let crouse = { weeks: [], sections: [] };
        // 添加课程名
        crouse.name = rows[i].KCM;
        // 添加教师名
        crouse.teacher = rows[i].SKJS;
        // 添加课程地点
        let positionData = rows[i].JASMC;
        if (positionData == null) {
            positionData = "无"
        } else {
            crouse.position = positionData
        }
        // 添加课程在周几
        crouse.day = rows[i].SKXQ;
        // 处理周数
        let weekData = rows[i].ZCMC;
        // 以逗号分割
        let week = weekData.split(",").forEach(element => {
            // 如果包含“-”
            if (element.includes("-")) {
                let range = element.substring(0, element.length - 1).split("-")
                let start = parseInt(range[0])
                let end = parseInt(range[1])
                for (let j = start; j <= end; j++) {
                    crouse.weeks.push(j)
                }
            } else {
                let j = parseInt(element.substring(0))
                crouse.weeks.push(j)
            }
        });
        // 处理节数
        // 获取开始节数
        let startSection = rows[i].KSJC;
        // 获取结束节数
        let endSection = rows[i].JSJC;
        // 循环添加节数
        for (let k = startSection; k <= endSection; k++) {
            crouse.sections.push(k)
        }
        // 添加课程
        result.push(crouse)
    }
    return result
}