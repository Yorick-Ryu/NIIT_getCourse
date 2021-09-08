function scheduleHtmlParser(html) {
    
    //传入的参数为上一步函数获取到的html
    var $ = cheerio.load(html, { decodeEntities: false });
    //课程名称
    let name = '';
    //教室位置
    let position = '';
    //授课教师
    let teacher = '';
    //第几周
    let week = '';
    //星期几
    let day;
    //第几节
    let sections = '';
    let result = [];

    //单双周处理
    function getWeeksArray(str) {
        if (str == null || str == "") return []

        // 判断单双周
        let odd = false
        let even = false
        if (str.includes("单")) {
            odd = true
        } else if (str.includes("双")) {
            even = true
        }

        let weekArray = [];
        str.split(",").forEach((element) => {
            if (!element.includes("-")) {
                // 没有 ‘-’ 表明只有一个数
                weekArray.push(parseInt(element))
            } else {
                // 包含 “-” 则是区间
                let start = parseInt(element.split("-")[0])
                let end = parseInt(element.split("-")[1])
                for (let i = start; i <= end ; i++) {
                    // 单双周、或者不设单双周
                    if (even && i % 2 == 0) {
                        weekArray.push(i)
                    } else if (odd && i % 2 != 0) {
                        weekArray.push(i)
                    } else if (!even && !odd) {
                        weekArray.push(i)
                    }
                }
            }
        })
         console.log(weekArray);
        return weekArray
    }

    //weeks格式化方法
    function weekStr2IntList(week) {

        let weeks = [];

        // 以逗号为界分割字符串，遍历分割的字符串
        week.split(",").forEach(w => {

            //当存在'-'时
            if (w.search('-') != -1) {
                let range = w.split("-");
                let start = parseInt(range[0]);
                let end = parseInt(range[1]);

                for (i = start; i <= end; i++) {

                    weeks.push(i);
                }
            } else if (w.search('-') == -1) {
                //当不存在'-'时
                let i = parseInt(w);
                weeks.push(i);
            }

        });
        return weeks;
    }

    //sections格式化方法

    function sectionsStr2IntList(str) {

        let sections = [];

        //当存在'-'时
        if (str.search('-') != -1) {
            let range = str.split("-");
            let start = parseInt(range[0]);
            let end = parseInt(range[1]);

            for (i = start; i <= end; i++) {
                sections.push({ section: i });
            }
        } else if (str.search('-') == -1) {
            //当不存在'-'时
            let i = parseInt(w);
            sections.push(i);
        }
        return sections;
    }

    //获取所有课程
    let curriculum = $('.sjp-item').toArray();

    //console.log(curriculum);

    for (let i = 0; i < curriculum.length; i++) {

        //获取课程在周几
        let day = curriculum[i].parent.attribs["data-skxq"];

        //console.log(day);

        //获取课程名称
        let name = curriculum[i].children[0].children[0].children[0].data;

        //console.log(name);

        //if(name = )

        //获取周次和节数

        let weeksAndsections = curriculum[i].children[2].children[0].data;//这里可以换写法nextchildren...

        let ws = weeksAndsections.split(' ');

        let week = ws[0];

        let sections = ws[1];

        //获取教室位置
        if (curriculum[i].children[4].children.length == 0) {
            position = '';
        } else if (curriculum[i].children[4].children.length != 0) {
            position = curriculum[i].children[4].children[0].data;
        }

        //获取授课教师
        if (curriculum[i].children[6].children.length == 0) {
            teacher = '';
        } else {

            teacher = curriculum[i].children[6].children[0].data;
        }

        //console.log(name, position, teacher, week, day, sections);

        let course = {
            name: name,
            position: position,
            teacher: teacher,
            weeks: getWeeksArray(week),//这里调用weeks格式化方法
            day: parseInt(day),
            sections: sectionsStr2IntList(sections),
        };

        result.push(course);

    }

    //console.log(result);
    return {
        courseInfos: result,
        sectionTimes: [
            { section: 1, startTime: "08:00", endTime: "08:45" },
            { section: 2, startTime: "08:55", endTime: "09:40" },
            { section: 3, startTime: "10:00", endTime: "10:45" },
            { section: 4, startTime: "10:55", endTime: "11:40" },
            { section: 5, startTime: "13:30", endTime: "14:15" },
            { section: 6, startTime: "14:25", endTime: "15:10" },
            { section: 7, startTime: "15:30", endTime: "16:15" },
            { section: 8, startTime: "16:25", endTime: "17:10" },
            { section: 9, startTime: "18:15", endTime: "19:00" },
            { section: 10, startTime: "19:10", endTime: "19:55" },
            { section: 11, startTime: "20:05", endTime: "20:50" },
        ]
    }
}
