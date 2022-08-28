function scheduleHtmlParser(html) {

    let item = $('div.mtt_arrange_item')

    //最终结果
    let result = []
        //console.log(item);

    for (i = 0; i < item.length; i++) {
        //console.log(item[i]);
        console.log($(item[i]).find('.mtt_item_kcmc').text());
        //console.log($(item[i]).find('.mtt_item_jxbmc').text().replace("\n", "").trim());
        //console.log($(item[i]).find('.mtt_item_room').text().replace("\n", "").trim());
        let crouse = { weeks: [], sections: [] };

        let nameData = $(item[i]).find('.mtt_item_kcmc').text().split('       ')[0].trim()

        //为防止冲突，机智地过滤实训
        // if (nameData.includes("实训")) {
        //     continue
        // }
        //console.log(nameData);
        crouse.name = nameData

        let teacherData = $(item[i]).find('.mtt_item_jxbmc').text().replace("\n", "").trim()
        let otherData = $(item[i]).find('.mtt_item_room').text().replace("\n", "").trim()

        //console.log(teacherData);
        //console.log(otherData);

        crouse.teacher = teacherData
        let splitedStr = otherData.split(",").forEach((element) => {
            if (element.includes("星期")) {
                crouse.day = element.substring(2);
                //console.log(element.substring(2));
            }
            if (element.includes("周")) {
                //console.log(element.substring(0, element.length - 1));
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
                    //console.log(element);
                    let start = parseInt(element.split("-")[0].substring(1))
                    let end = parseInt(element.split("-")[1].substring(1))
                        //console.log(start, end);
                    for (let i = start; i <= end; i++) {
                        crouse.sections.push(i)
                    }
                } else {
                    let i = parseInt(element.substring(1))
                    crouse.sections.push(i)
                }
            }
        })

        arr = otherData.split(",")
            //console.log(arr);
        crouse.position = arr[arr.length - 1]

        //console.log(crouse);
        result.push(crouse)
    }
    //console.log(result);
    return result
}