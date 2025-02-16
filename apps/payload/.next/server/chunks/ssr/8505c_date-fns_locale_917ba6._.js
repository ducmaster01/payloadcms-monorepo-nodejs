module.exports = {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/formatDistance.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            standalone: "мање од 1 секунде",
            withPrepositionAgo: "мање од 1 секунде",
            withPrepositionIn: "мање од 1 секунду"
        },
        dual: "мање од {{count}} секунде",
        other: "мање од {{count}} секунди"
    },
    xSeconds: {
        one: {
            standalone: "1 секунда",
            withPrepositionAgo: "1 секунде",
            withPrepositionIn: "1 секунду"
        },
        dual: "{{count}} секунде",
        other: "{{count}} секунди"
    },
    halfAMinute: "пола минуте",
    lessThanXMinutes: {
        one: {
            standalone: "мање од 1 минуте",
            withPrepositionAgo: "мање од 1 минуте",
            withPrepositionIn: "мање од 1 минуту"
        },
        dual: "мање од {{count}} минуте",
        other: "мање од {{count}} минута"
    },
    xMinutes: {
        one: {
            standalone: "1 минута",
            withPrepositionAgo: "1 минуте",
            withPrepositionIn: "1 минуту"
        },
        dual: "{{count}} минуте",
        other: "{{count}} минута"
    },
    aboutXHours: {
        one: {
            standalone: "око 1 сат",
            withPrepositionAgo: "око 1 сат",
            withPrepositionIn: "око 1 сат"
        },
        dual: "око {{count}} сата",
        other: "око {{count}} сати"
    },
    xHours: {
        one: {
            standalone: "1 сат",
            withPrepositionAgo: "1 сат",
            withPrepositionIn: "1 сат"
        },
        dual: "{{count}} сата",
        other: "{{count}} сати"
    },
    xDays: {
        one: {
            standalone: "1 дан",
            withPrepositionAgo: "1 дан",
            withPrepositionIn: "1 дан"
        },
        dual: "{{count}} дана",
        other: "{{count}} дана"
    },
    aboutXWeeks: {
        one: {
            standalone: "око 1 недељу",
            withPrepositionAgo: "око 1 недељу",
            withPrepositionIn: "око 1 недељу"
        },
        dual: "око {{count}} недеље",
        other: "око {{count}} недеље"
    },
    xWeeks: {
        one: {
            standalone: "1 недељу",
            withPrepositionAgo: "1 недељу",
            withPrepositionIn: "1 недељу"
        },
        dual: "{{count}} недеље",
        other: "{{count}} недеље"
    },
    aboutXMonths: {
        one: {
            standalone: "око 1 месец",
            withPrepositionAgo: "око 1 месец",
            withPrepositionIn: "око 1 месец"
        },
        dual: "око {{count}} месеца",
        other: "око {{count}} месеци"
    },
    xMonths: {
        one: {
            standalone: "1 месец",
            withPrepositionAgo: "1 месец",
            withPrepositionIn: "1 месец"
        },
        dual: "{{count}} месеца",
        other: "{{count}} месеци"
    },
    aboutXYears: {
        one: {
            standalone: "око 1 годину",
            withPrepositionAgo: "око 1 годину",
            withPrepositionIn: "око 1 годину"
        },
        dual: "око {{count}} године",
        other: "око {{count}} година"
    },
    xYears: {
        one: {
            standalone: "1 година",
            withPrepositionAgo: "1 године",
            withPrepositionIn: "1 годину"
        },
        dual: "{{count}} године",
        other: "{{count}} година"
    },
    overXYears: {
        one: {
            standalone: "преко 1 годину",
            withPrepositionAgo: "преко 1 годину",
            withPrepositionIn: "преко 1 годину"
        },
        dual: "преко {{count}} године",
        other: "преко {{count}} година"
    },
    almostXYears: {
        one: {
            standalone: "готово 1 годину",
            withPrepositionAgo: "готово 1 годину",
            withPrepositionIn: "готово 1 годину"
        },
        dual: "готово {{count}} године",
        other: "готово {{count}} година"
    }
};
const formatDistance = (token, count, options)=>{
    let result;
    const tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
        result = tokenValue;
    } else if (count === 1) {
        if (options?.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                result = tokenValue.one.withPrepositionIn;
            } else {
                result = tokenValue.one.withPrepositionAgo;
            }
        } else {
            result = tokenValue.one.standalone;
        }
    } else if (count % 10 > 1 && count % 10 < 5 && // if last digit is between 2 and 4
    String(count).substr(-2, 1) !== "1" // unless the 2nd to last digit is "1"
    ) {
        result = tokenValue.dual.replace("{{count}}", String(count));
    } else {
        result = tokenValue.other.replace("{{count}}", String(count));
    }
    if (options?.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "за " + result;
        } else {
            return "пре " + result;
        }
    }
    return result;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/formatLong.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-ssr] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, d. MMMM yyyy.",
    long: "d. MMMM yyyy.",
    medium: "d. MMM yy.",
    short: "dd. MM. yy."
};
const timeFormats = {
    full: "HH:mm:ss (zzzz)",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'у' {{time}}",
    long: "{{date}} 'у' {{time}}",
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/formatRelative.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
const formatRelativeLocale = {
    lastWeek: (date)=>{
        const day = date.getDay();
        switch(day){
            case 0:
                return "'прошле недеље у' p";
            case 3:
                return "'прошле среде у' p";
            case 6:
                return "'прошле суботе у' p";
            default:
                return "'прошли' EEEE 'у' p";
        }
    },
    yesterday: "'јуче у' p",
    today: "'данас у' p",
    tomorrow: "'сутра у' p",
    nextWeek: (date)=>{
        const day = date.getDay();
        switch(day){
            case 0:
                return "'следеће недеље у' p";
            case 3:
                return "'следећу среду у' p";
            case 6:
                return "'следећу суботу у' p";
            default:
                return "'следећи' EEEE 'у' p";
        }
    },
    other: "P"
};
const formatRelative = (token, date, _baseDate, _options)=>{
    const format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/localize.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
        "пр.н.е.",
        "АД"
    ],
    abbreviated: [
        "пр. Хр.",
        "по. Хр."
    ],
    wide: [
        "Пре Христа",
        "После Христа"
    ]
};
const quarterValues = {
    narrow: [
        "1.",
        "2.",
        "3.",
        "4."
    ],
    abbreviated: [
        "1. кв.",
        "2. кв.",
        "3. кв.",
        "4. кв."
    ],
    wide: [
        "1. квартал",
        "2. квартал",
        "3. квартал",
        "4. квартал"
    ]
};
const monthValues = {
    narrow: [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8.",
        "9.",
        "10.",
        "11.",
        "12."
    ],
    abbreviated: [
        "јан",
        "феб",
        "мар",
        "апр",
        "мај",
        "јун",
        "јул",
        "авг",
        "сеп",
        "окт",
        "нов",
        "дец"
    ],
    wide: [
        "јануар",
        "фебруар",
        "март",
        "април",
        "мај",
        "јун",
        "јул",
        "август",
        "септембар",
        "октобар",
        "новембар",
        "децембар"
    ]
};
const formattingMonthValues = {
    narrow: [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8.",
        "9.",
        "10.",
        "11.",
        "12."
    ],
    abbreviated: [
        "јан",
        "феб",
        "мар",
        "апр",
        "мај",
        "јун",
        "јул",
        "авг",
        "сеп",
        "окт",
        "нов",
        "дец"
    ],
    wide: [
        "јануар",
        "фебруар",
        "март",
        "април",
        "мај",
        "јун",
        "јул",
        "август",
        "септембар",
        "октобар",
        "новембар",
        "децембар"
    ]
};
const dayValues = {
    narrow: [
        "Н",
        "П",
        "У",
        "С",
        "Ч",
        "П",
        "С"
    ],
    short: [
        "нед",
        "пон",
        "уто",
        "сре",
        "чет",
        "пет",
        "суб"
    ],
    abbreviated: [
        "нед",
        "пон",
        "уто",
        "сре",
        "чет",
        "пет",
        "суб"
    ],
    wide: [
        "недеља",
        "понедељак",
        "уторак",
        "среда",
        "четвртак",
        "петак",
        "субота"
    ]
};
const formattingDayPeriodValues = {
    narrow: {
        am: "АМ",
        pm: "ПМ",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу"
    },
    abbreviated: {
        am: "АМ",
        pm: "ПМ",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "после подне",
        evening: "увече",
        night: "ноћу"
    }
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "после подне",
        evening: "увече",
        night: "ноћу"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    return number + ".";
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
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/match.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
const matchOrdinalNumberPattern = /^(\d+)\./i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(пр\.н\.е\.|АД)/i,
    abbreviated: /^(пр\.\s?Хр\.|по\.\s?Хр\.)/i,
    wide: /^(Пре Христа|пре нове ере|После Христа|нова ера)/i
};
const parseEraPatterns = {
    any: [
        /^пр/i,
        /^(по|нова)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\.\s?кв\.?/i,
    wide: /^[1234]\. квартал/i
};
const parseQuarterPatterns = {
    any: [
        /1/i,
        /2/i,
        /3/i,
        /4/i
    ]
};
const matchMonthPatterns = {
    narrow: /^(10|11|12|[123456789])\./i,
    abbreviated: /^(јан|феб|мар|апр|мај|јун|јул|авг|сеп|окт|нов|дец)/i,
    wide: /^((јануар|јануара)|(фебруар|фебруара)|(март|марта)|(април|априла)|(мја|маја)|(јун|јуна)|(јул|јула)|(август|августа)|(септембар|септембра)|(октобар|октобра)|(новембар|новембра)|(децембар|децембра))/i
};
const parseMonthPatterns = {
    narrow: [
        /^1/i,
        /^2/i,
        /^3/i,
        /^4/i,
        /^5/i,
        /^6/i,
        /^7/i,
        /^8/i,
        /^9/i,
        /^10/i,
        /^11/i,
        /^12/i
    ],
    any: [
        /^ја/i,
        /^ф/i,
        /^мар/i,
        /^ап/i,
        /^мај/i,
        /^јун/i,
        /^јул/i,
        /^авг/i,
        /^с/i,
        /^о/i,
        /^н/i,
        /^д/i
    ]
};
const matchDayPatterns = {
    narrow: /^[пусчн]/i,
    short: /^(нед|пон|уто|сре|чет|пет|суб)/i,
    abbreviated: /^(нед|пон|уто|сре|чет|пет|суб)/i,
    wide: /^(недеља|понедељак|уторак|среда|четвртак|петак|субота)/i
};
const parseDayPatterns = {
    narrow: [
        /^п/i,
        /^у/i,
        /^с/i,
        /^ч/i,
        /^п/i,
        /^с/i,
        /^н/i
    ],
    any: [
        /^нед/i,
        /^пон/i,
        /^уто/i,
        /^сре/i,
        /^чет/i,
        /^пет/i,
        /^суб/i
    ]
};
const matchDayPeriodPatterns = {
    any: /^(ам|пм|поноћ|(по)?подне|увече|ноћу|после подне|ујутру)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^поно/i,
        noon: /^под/i,
        morning: /ујутру/i,
        afternoon: /(после\s|по)+подне/i,
        evening: /(увече)/i,
        night: /(ноћу)/i
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "sr": (()=>sr)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/formatDistance.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/formatLong.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/formatRelative.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/localize.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sr/_lib/match.js [app-ssr] (ecmascript)");
;
;
;
;
;
const sr = {
    code: "sr",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$localize$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sr$2f$_lib$2f$match$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = sr;
}}),

};

//# sourceMappingURL=8505c_date-fns_locale_917ba6._.js.map