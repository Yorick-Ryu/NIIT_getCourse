/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
 async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {
        totalWeek: 20, // 总周数：[1, 30]之间的整数
        startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: false, // 是否显示周末
        forenoon: 4, // 上午课程节数：[1, 10]之间的整数
        afternoon: 4, // 下午课程节数：[0, 10]之间的整数
        night: 3, // 晚间课程节数：[0, 10]之间的整数
        sections: [
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
            { section: 11, startTime: "20:05", endTime: "20:50" }
        ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    }
}