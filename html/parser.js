function scheduleHtmlParser(html) {
    // 传入的parser获取的html
    let item = $('div.mtt_arrange_item')

    //最终结果
    let result = []

    // 主循环
   for (i = 0; i < item.length; i++) {
        // 定义课程结构
        let crouse = { weeks: [], sections: [] };

        // 添加课程名称
        crouse.name = $(item[i]).find('.mtt_item_kcmc').text().split('       ')[0].trim()
        
        // 添加任课教师
        crouse.teacher = $(item[i]).find('.mtt_item_jxbmc').text().replace("\n", "").trim()
        // 关键：处理星期，周数和节数
        let otherData = $(item[i]).find('.mtt_item_room').text().replace("\n", "").trim()
        let splitedStr = otherData.split(",").forEach((element) => {
            if (element.includes("星期")) {
                crouse.day = element.substring(2);
            }
            if (element.includes("周")) {
                if (element.substring(0, element.length - 1).includes("-")) {
                    let range = element.substring(0, element.length - 1).split("-")
                    let start = parseInt(range[0])
                    let end = parseInt(range[1])
                    for (let i = start; i <= end; i++) {
                        crouse.weeks.push(i)
                    }
                } else {
                    let i = parseInt(element)
                    crouse.weeks.push(i)
                }
            }
            if (element.includes("节")) {
                if (element.includes("-")) {
                    let start = parseInt(element.split("-")[0].substring(1))
                    let end = parseInt(element.split("-")[1].substring(1))
                    for (let i = start; i <= end; i++) {
                        crouse.sections.push(i)
                    }
                } else {
                    let i = parseInt(element.substring(1))
                    crouse.sections.push(i)
                }
            }
        })

        // 添加地点
        arr = otherData.split(",")
        crouse.position = arr[arr.length - 1]
        result.push(crouse)
    }
    return result
}