module.exports = {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/formatDistance.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: "少於 1 秒",
        other: "少於 {{count}} 秒"
    },
    xSeconds: {
        one: "1 秒",
        other: "{{count}} 秒"
    },
    halfAMinute: "半分鐘",
    lessThanXMinutes: {
        one: "少於 1 分鐘",
        other: "少於 {{count}} 分鐘"
    },
    xMinutes: {
        one: "1 分鐘",
        other: "{{count}} 分鐘"
    },
    xHours: {
        one: "1 小時",
        other: "{{count}} 小時"
    },
    aboutXHours: {
        one: "大約 1 小時",
        other: "大約 {{count}} 小時"
    },
    xDays: {
        one: "1 天",
        other: "{{count}} 天"
    },
    aboutXWeeks: {
        one: "大約 1 個星期",
        other: "大約 {{count}} 個星期"
    },
    xWeeks: {
        one: "1 個星期",
        other: "{{count}} 個星期"
    },
    aboutXMonths: {
        one: "大約 1 個月",
        other: "大約 {{count}} 個月"
    },
    xMonths: {
        one: "1 個月",
        other: "{{count}} 個月"
    },
    aboutXYears: {
        one: "大約 1 年",
        other: "大約 {{count}} 年"
    },
    xYears: {
        one: "1 年",
        other: "{{count}} 年"
    },
    overXYears: {
        one: "超過 1 年",
        other: "超過 {{count}} 年"
    },
    almostXYears: {
        one: "將近 1 年",
        other: "將近 {{count}} 年"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        result = tokenValue.one;
    } else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return result + "內";
        } else {
            return result + "前";
        }
    }
    return result;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/formatLong.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "y'年'M'月'd'日' EEEE",
    long: "y'年'M'月'd'日'",
    medium: "yyyy-MM-dd",
    short: "yy-MM-dd"
};
const timeFormats = {
    full: "zzzz a h:mm:ss",
    long: "z a h:mm:ss",
    medium: "a h:mm:ss",
    short: "a h:mm"
};
const dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/formatRelative.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
const formatRelativeLocale = {
    lastWeek: "'上個'eeee p",
    yesterday: "'昨天' p",
    today: "'今天' p",
    tomorrow: "'明天' p",
    nextWeek: "'下個'eeee p",
    other: "P"
};
const formatRelative = (token, _date, _baseDate, _options)=>formatRelativeLocale[token];
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/localize.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "localize": (()=>localize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-ssr] (ecmascript)");
;
const eraValues = {
    narrow: [
        "前",
        "公元"
    ],
    abbreviated: [
        "前",
        "公元"
    ],
    wide: [
        "公元前",
        "公元"
    ]
};
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "第一刻",
        "第二刻",
        "第三刻",
        "第四刻"
    ],
    wide: [
        "第一刻鐘",
        "第二刻鐘",
        "第三刻鐘",
        "第四刻鐘"
    ]
};
const monthValues = {
    narrow: [
        "一",
        "二",
        "三",
        "四",
        "五",
        "六",
        "七",
        "八",
        "九",
        "十",
        "十一",
        "十二"
    ],
    abbreviated: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
    ],
    wide: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
    ]
};
const dayValues = {
    narrow: [
        "日",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六"
    ],
    short: [
        "日",
        "一",
        "二",
        "三",
        "四",
        "五",
        "六"
    ],
    abbreviated: [
        "週日",
        "週一",
        "週二",
        "週三",
        "週四",
        "週五",
        "週六"
    ],
    wide: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
    },
    abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    },
    wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "上",
        pm: "下",
        midnight: "凌晨",
        noon: "午",
        morning: "早",
        afternoon: "下午",
        evening: "晚",
        night: "夜"
    },
    abbreviated: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    },
    wide: {
        am: "上午",
        pm: "下午",
        midnight: "凌晨",
        noon: "中午",
        morning: "早晨",
        afternoon: "中午",
        evening: "晚上",
        night: "夜間"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const number = Number(dirtyNumber);
    switch(options?.unit){
        case "date":
            return number + "日";
        case "hour":
            return number + "時";
        case "minute":
            return number + "分";
        case "second":
            return number + "秒";
        default:
            return "第 " + number;
    }
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/match.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "match": (()=>match)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-ssr] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(第\s*)?\d+(日|時|分|秒)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(前)/i,
    abbreviated: /^(前)/i,
    wide: /^(公元前|公元)/i
};
const parseEraPatterns = {
    any: [
        /^(前)/i,
        /^(公元)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^第[一二三四]刻/i,
    wide: /^第[一二三四]刻鐘/i
};
const parseQuarterPatterns = {
    any: [
        /(1|一)/i,
        /(2|二)/i,
        /(3|三)/i,
        /(4|四)/i
    ]
};
const matchMonthPatterns = {
    narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
    abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
    wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
};
const parseMonthPatterns = {
    narrow: [
        /^一/i,
        /^二/i,
        /^三/i,
        /^四/i,
        /^五/i,
        /^六/i,
        /^七/i,
        /^八/i,
        /^九/i,
        /^十(?!(一|二))/i,
        /^十一/i,
        /^十二/i
    ],
    any: [
        /^一|1/i,
        /^二|2/i,
        /^三|3/i,
        /^四|4/i,
        /^五|5/i,
        /^六|6/i,
        /^七|7/i,
        /^八|8/i,
        /^九|9/i,
        /^十(?!(一|二))|10/i,
        /^十一|11/i,
        /^十二|12/i
    ]
};
const matchDayPatterns = {
    narrow: /^[一二三四五六日]/i,
    short: /^[一二三四五六日]/i,
    abbreviated: /^週[一二三四五六日]/i,
    wide: /^星期[一二三四五六日]/i
};
const parseDayPatterns = {
    any: [
        /日/i,
        /一/i,
        /二/i,
        /三/i,
        /四/i,
        /五/i,
        /六/i
    ]
};
const matchDayPeriodPatterns = {
    any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^上午?/i,
        pm: /^下午?/i,
        midnight: /^午夜/i,
        noon: /^[中正]午/i,
        morning: /^早上/i,
        afternoon: /^下午/i,
        evening: /^晚上?/i,
        night: /^凌晨/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "zhTW": (()=>zhTW)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/zh-TW/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const zhTW = {
    code: "zh-TW",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$zh$2d$TW$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 4
    }
};
const __TURBOPACK__default__export__ = zhTW;
}}),

};

//# sourceMappingURL=8505c_date-fns_locale_cf5680._.js.map