(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/8505c_date-fns_b19c81._.js", {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/formatDistance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
function declension(scheme, count) {
    // scheme for count=1 exists
    if (scheme.one !== undefined && count === 1) {
        return scheme.one;
    }
    const rem10 = count % 10;
    const rem100 = count % 100;
    // 1, 21, 31, ...
    if (rem10 === 1 && rem100 !== 11) {
        return scheme.singularNominative.replace("{{count}}", String(count));
    // 2, 3, 4, 22, 23, 24, 32 ...
    } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {
        return scheme.singularGenitive.replace("{{count}}", String(count));
    // 5, 6, 7, 8, 9, 10, 11, ...
    } else {
        return scheme.pluralGenitive.replace("{{count}}", String(count));
    }
}
function buildLocalizeTokenFn(scheme) {
    return (count, options)=>{
        if (options && options.addSuffix) {
            if (options.comparison && options.comparison > 0) {
                if (scheme.future) {
                    return declension(scheme.future, count);
                } else {
                    return "за " + declension(scheme.regular, count);
                }
            } else {
                if (scheme.past) {
                    return declension(scheme.past, count);
                } else {
                    return declension(scheme.regular, count) + " тому";
                }
            }
        } else {
            return declension(scheme.regular, count);
        }
    };
}
const halfAtMinute = (_, options)=>{
    if (options && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
            return "за півхвилини";
        } else {
            return "півхвилини тому";
        }
    }
    return "півхвилини";
};
const formatDistanceLocale = {
    lessThanXSeconds: buildLocalizeTokenFn({
        regular: {
            one: "менше секунди",
            singularNominative: "менше {{count}} секунди",
            singularGenitive: "менше {{count}} секунд",
            pluralGenitive: "менше {{count}} секунд"
        },
        future: {
            one: "менше, ніж за секунду",
            singularNominative: "менше, ніж за {{count}} секунду",
            singularGenitive: "менше, ніж за {{count}} секунди",
            pluralGenitive: "менше, ніж за {{count}} секунд"
        }
    }),
    xSeconds: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} секунда",
            singularGenitive: "{{count}} секунди",
            pluralGenitive: "{{count}} секунд"
        },
        past: {
            singularNominative: "{{count}} секунду тому",
            singularGenitive: "{{count}} секунди тому",
            pluralGenitive: "{{count}} секунд тому"
        },
        future: {
            singularNominative: "за {{count}} секунду",
            singularGenitive: "за {{count}} секунди",
            pluralGenitive: "за {{count}} секунд"
        }
    }),
    halfAMinute: halfAtMinute,
    lessThanXMinutes: buildLocalizeTokenFn({
        regular: {
            one: "менше хвилини",
            singularNominative: "менше {{count}} хвилини",
            singularGenitive: "менше {{count}} хвилин",
            pluralGenitive: "менше {{count}} хвилин"
        },
        future: {
            one: "менше, ніж за хвилину",
            singularNominative: "менше, ніж за {{count}} хвилину",
            singularGenitive: "менше, ніж за {{count}} хвилини",
            pluralGenitive: "менше, ніж за {{count}} хвилин"
        }
    }),
    xMinutes: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} хвилина",
            singularGenitive: "{{count}} хвилини",
            pluralGenitive: "{{count}} хвилин"
        },
        past: {
            singularNominative: "{{count}} хвилину тому",
            singularGenitive: "{{count}} хвилини тому",
            pluralGenitive: "{{count}} хвилин тому"
        },
        future: {
            singularNominative: "за {{count}} хвилину",
            singularGenitive: "за {{count}} хвилини",
            pluralGenitive: "за {{count}} хвилин"
        }
    }),
    aboutXHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "близько {{count}} години",
            singularGenitive: "близько {{count}} годин",
            pluralGenitive: "близько {{count}} годин"
        },
        future: {
            singularNominative: "приблизно за {{count}} годину",
            singularGenitive: "приблизно за {{count}} години",
            pluralGenitive: "приблизно за {{count}} годин"
        }
    }),
    xHours: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} годину",
            singularGenitive: "{{count}} години",
            pluralGenitive: "{{count}} годин"
        }
    }),
    xDays: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} день",
            singularGenitive: "{{count}} днi",
            pluralGenitive: "{{count}} днів"
        }
    }),
    aboutXWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "близько {{count}} тижня",
            singularGenitive: "близько {{count}} тижнів",
            pluralGenitive: "близько {{count}} тижнів"
        },
        future: {
            singularNominative: "приблизно за {{count}} тиждень",
            singularGenitive: "приблизно за {{count}} тижні",
            pluralGenitive: "приблизно за {{count}} тижнів"
        }
    }),
    xWeeks: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} тиждень",
            singularGenitive: "{{count}} тижні",
            pluralGenitive: "{{count}} тижнів"
        }
    }),
    aboutXMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "близько {{count}} місяця",
            singularGenitive: "близько {{count}} місяців",
            pluralGenitive: "близько {{count}} місяців"
        },
        future: {
            singularNominative: "приблизно за {{count}} місяць",
            singularGenitive: "приблизно за {{count}} місяці",
            pluralGenitive: "приблизно за {{count}} місяців"
        }
    }),
    xMonths: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} місяць",
            singularGenitive: "{{count}} місяці",
            pluralGenitive: "{{count}} місяців"
        }
    }),
    aboutXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "близько {{count}} року",
            singularGenitive: "близько {{count}} років",
            pluralGenitive: "близько {{count}} років"
        },
        future: {
            singularNominative: "приблизно за {{count}} рік",
            singularGenitive: "приблизно за {{count}} роки",
            pluralGenitive: "приблизно за {{count}} років"
        }
    }),
    xYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "{{count}} рік",
            singularGenitive: "{{count}} роки",
            pluralGenitive: "{{count}} років"
        }
    }),
    overXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "більше {{count}} року",
            singularGenitive: "більше {{count}} років",
            pluralGenitive: "більше {{count}} років"
        },
        future: {
            singularNominative: "більше, ніж за {{count}} рік",
            singularGenitive: "більше, ніж за {{count}} роки",
            pluralGenitive: "більше, ніж за {{count}} років"
        }
    }),
    almostXYears: buildLocalizeTokenFn({
        regular: {
            singularNominative: "майже {{count}} рік",
            singularGenitive: "майже {{count}} роки",
            pluralGenitive: "майже {{count}} років"
        },
        future: {
            singularNominative: "майже за {{count}} рік",
            singularGenitive: "майже за {{count}} роки",
            pluralGenitive: "майже за {{count}} років"
        }
    })
};
const formatDistance = (token, count, options)=>{
    options = options || {};
    return formatDistanceLocale[token](count, options);
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/formatLong.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, do MMMM y 'р.'",
    long: "do MMMM y 'р.'",
    medium: "d MMM y 'р.'",
    short: "dd.MM.y"
};
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'о' {{time}}",
    long: "{{date}} 'о' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameWeek.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "isSameWeek": (()=>isSameWeek)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/_lib/normalizeDates.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
;
;
function isSameWeek(laterDate, earlierDate, options) {
    const [laterDate_, earlierDate_] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$_lib$2f$normalizeDates$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDates"])(options?.in, laterDate, earlierDate);
    return +(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(laterDate_, options) === +(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(earlierDate_, options);
}
const __TURBOPACK__default__export__ = isSameWeek;
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/formatRelative.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/toDate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameWeek.js [app-client] (ecmascript)");
;
;
const accusativeWeekdays = [
    "неділю",
    "понеділок",
    "вівторок",
    "середу",
    "четвер",
    "п’ятницю",
    "суботу"
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
        case 3:
        case 5:
        case 6:
            return "'у минулу " + weekday + " о' p";
        case 1:
        case 2:
        case 4:
            return "'у минулий " + weekday + " о' p";
    }
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    return "'у " + weekday + " о' p";
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
        case 3:
        case 5:
        case 6:
            return "'у наступну " + weekday + " о' p";
        case 1:
        case 2:
        case 4:
            return "'у наступний " + weekday + " о' p";
    }
}
const lastWeekFormat = (dirtyDate, baseDate, options)=>{
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dirtyDate);
    const day = date.getDay();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameWeek"])(date, baseDate, options)) {
        return thisWeek(day);
    } else {
        return lastWeek(day);
    }
};
const nextWeekFormat = (dirtyDate, baseDate, options)=>{
    const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$toDate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDate"])(dirtyDate);
    const day = date.getDay();
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameWeek"])(date, baseDate, options)) {
        return thisWeek(day);
    } else {
        return nextWeek(day);
    }
};
const formatRelativeLocale = {
    lastWeek: lastWeekFormat,
    yesterday: "'вчора о' p",
    today: "'сьогодні о' p",
    tomorrow: "'завтра о' p",
    nextWeek: nextWeekFormat,
    other: "P"
};
const formatRelative = (token, date, baseDate, options)=>{
    const format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date, baseDate, options);
    }
    return format;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/localize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "localize": (()=>localize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)");
;
const eraValues = {
    narrow: [
        "до н.е.",
        "н.е."
    ],
    abbreviated: [
        "до н. е.",
        "н. е."
    ],
    wide: [
        "до нашої ери",
        "нашої ери"
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
        "1-й кв.",
        "2-й кв.",
        "3-й кв.",
        "4-й кв."
    ],
    wide: [
        "1-й квартал",
        "2-й квартал",
        "3-й квартал",
        "4-й квартал"
    ]
};
const monthValues = {
    // ДСТУ 3582:2013
    narrow: [
        "С",
        "Л",
        "Б",
        "К",
        "Т",
        "Ч",
        "Л",
        "С",
        "В",
        "Ж",
        "Л",
        "Г"
    ],
    abbreviated: [
        "січ.",
        "лют.",
        "берез.",
        "квіт.",
        "трав.",
        "черв.",
        "лип.",
        "серп.",
        "верес.",
        "жовт.",
        "листоп.",
        "груд."
    ],
    wide: [
        "січень",
        "лютий",
        "березень",
        "квітень",
        "травень",
        "червень",
        "липень",
        "серпень",
        "вересень",
        "жовтень",
        "листопад",
        "грудень"
    ]
};
const formattingMonthValues = {
    narrow: [
        "С",
        "Л",
        "Б",
        "К",
        "Т",
        "Ч",
        "Л",
        "С",
        "В",
        "Ж",
        "Л",
        "Г"
    ],
    abbreviated: [
        "січ.",
        "лют.",
        "берез.",
        "квіт.",
        "трав.",
        "черв.",
        "лип.",
        "серп.",
        "верес.",
        "жовт.",
        "листоп.",
        "груд."
    ],
    wide: [
        "січня",
        "лютого",
        "березня",
        "квітня",
        "травня",
        "червня",
        "липня",
        "серпня",
        "вересня",
        "жовтня",
        "листопада",
        "грудня"
    ]
};
const dayValues = {
    narrow: [
        "Н",
        "П",
        "В",
        "С",
        "Ч",
        "П",
        "С"
    ],
    short: [
        "нд",
        "пн",
        "вт",
        "ср",
        "чт",
        "пт",
        "сб"
    ],
    abbreviated: [
        "нед",
        "пон",
        "вів",
        "сер",
        "чтв",
        "птн",
        "суб"
    ],
    wide: [
        "неділя",
        "понеділок",
        "вівторок",
        "середа",
        "четвер",
        "п’ятниця",
        "субота"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "ДП",
        pm: "ПП",
        midnight: "півн.",
        noon: "пол.",
        morning: "ранок",
        afternoon: "день",
        evening: "веч.",
        night: "ніч"
    },
    abbreviated: {
        am: "ДП",
        pm: "ПП",
        midnight: "півн.",
        noon: "пол.",
        morning: "ранок",
        afternoon: "день",
        evening: "веч.",
        night: "ніч"
    },
    wide: {
        am: "ДП",
        pm: "ПП",
        midnight: "північ",
        noon: "полудень",
        morning: "ранок",
        afternoon: "день",
        evening: "вечір",
        night: "ніч"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "ДП",
        pm: "ПП",
        midnight: "півн.",
        noon: "пол.",
        morning: "ранку",
        afternoon: "дня",
        evening: "веч.",
        night: "ночі"
    },
    abbreviated: {
        am: "ДП",
        pm: "ПП",
        midnight: "півн.",
        noon: "пол.",
        morning: "ранку",
        afternoon: "дня",
        evening: "веч.",
        night: "ночі"
    },
    wide: {
        am: "ДП",
        pm: "ПП",
        midnight: "північ",
        noon: "полудень",
        morning: "ранку",
        afternoon: "дня",
        evening: "веч.",
        night: "ночі"
    }
};
const ordinalNumber = (dirtyNumber, options)=>{
    const unit = String(options?.unit);
    const number = Number(dirtyNumber);
    let suffix;
    if (unit === "date") {
        if (number === 3 || number === 23) {
            suffix = "-є";
        } else {
            suffix = "-е";
        }
    } else if (unit === "minute" || unit === "second" || unit === "hour") {
        suffix = "-а";
    } else {
        suffix = "-й";
    }
    return number + suffix;
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "any",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/match.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "match": (()=>match)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-client] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)(-?(е|й|є|а|я))?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^((до )?н\.?\s?е\.?)/i,
    abbreviated: /^((до )?н\.?\s?е\.?)/i,
    wide: /^(до нашої ери|нашої ери|наша ера)/i
};
const parseEraPatterns = {
    any: [
        /^д/i,
        /^н/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
    wide: /^[1234](-?[иі]?й?)? квартал/i
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
    narrow: /^[слбктчвжг]/i,
    abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
    wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i
};
const parseMonthPatterns = {
    narrow: [
        /^с/i,
        /^л/i,
        /^б/i,
        /^к/i,
        /^т/i,
        /^ч/i,
        /^л/i,
        /^с/i,
        /^в/i,
        /^ж/i,
        /^л/i,
        /^г/i
    ],
    any: [
        /^сі/i,
        /^лю/i,
        /^б/i,
        /^к/i,
        /^т/i,
        /^ч/i,
        /^лип/i,
        /^се/i,
        /^в/i,
        /^ж/i,
        /^лис/i,
        /^г/i
    ]
};
const matchDayPatterns = {
    narrow: /^[нпвсч]/i,
    short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
    abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
    wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
};
const parseDayPatterns = {
    narrow: [
        /^н/i,
        /^п/i,
        /^в/i,
        /^с/i,
        /^ч/i,
        /^п/i,
        /^с/i
    ],
    any: [
        /^н/i,
        /^п[он]/i,
        /^в/i,
        /^с[ер]/i,
        /^ч/i,
        /^п\W*?[ят]/i,
        /^с[уб]/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
    abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
    wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^дп/i,
        pm: /^пп/i,
        midnight: /^півн/i,
        noon: /^пол/i,
        morning: /^р/i,
        afternoon: /^д[ен]/i,
        evening: /^в/i,
        night: /^н/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "uk": (()=>uk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/formatDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/formatLong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/formatRelative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/localize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/uk/_lib/match.js [app-client] (ecmascript)");
;
;
;
;
;
const uk = {
    code: "uk",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$uk$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = uk;
}}),
}]);

//# sourceMappingURL=8505c_date-fns_b19c81._.js.map