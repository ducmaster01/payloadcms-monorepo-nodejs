(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/8505c_date-fns_592be2._.js", {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatDistance.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
function declensionGroup(scheme, count) {
    if (count === 1 && scheme.one) {
        return scheme.one;
    }
    if (count >= 2 && count <= 4 && scheme.twoFour) {
        return scheme.twoFour;
    }
    // if count === null || count === 0 || count >= 5
    return scheme.other;
}
function declension(scheme, count, time) {
    const group = declensionGroup(scheme, count);
    const finalText = group[time];
    return finalText.replace("{{count}}", String(count));
}
function extractPreposition(token) {
    const result = [
        "lessThan",
        "about",
        "over",
        "almost"
    ].filter(function(preposition) {
        return !!token.match(new RegExp("^" + preposition));
    });
    return result[0];
}
function prefixPreposition(preposition) {
    let translation = "";
    if (preposition === "almost") {
        translation = "takmer";
    }
    if (preposition === "about") {
        translation = "približne";
    }
    return translation.length > 0 ? translation + " " : "";
}
function suffixPreposition(preposition) {
    let translation = "";
    if (preposition === "lessThan") {
        translation = "menej než";
    }
    if (preposition === "over") {
        translation = "viac než";
    }
    return translation.length > 0 ? translation + " " : "";
}
function lowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
const formatDistanceLocale = {
    xSeconds: {
        one: {
            present: "sekunda",
            past: "sekundou",
            future: "sekundu"
        },
        twoFour: {
            present: "{{count}} sekundy",
            past: "{{count}} sekundami",
            future: "{{count}} sekundy"
        },
        other: {
            present: "{{count}} sekúnd",
            past: "{{count}} sekundami",
            future: "{{count}} sekúnd"
        }
    },
    halfAMinute: {
        other: {
            present: "pol minúty",
            past: "pol minútou",
            future: "pol minúty"
        }
    },
    xMinutes: {
        one: {
            present: "minúta",
            past: "minútou",
            future: "minútu"
        },
        twoFour: {
            present: "{{count}} minúty",
            past: "{{count}} minútami",
            future: "{{count}} minúty"
        },
        other: {
            present: "{{count}} minút",
            past: "{{count}} minútami",
            future: "{{count}} minút"
        }
    },
    xHours: {
        one: {
            present: "hodina",
            past: "hodinou",
            future: "hodinu"
        },
        twoFour: {
            present: "{{count}} hodiny",
            past: "{{count}} hodinami",
            future: "{{count}} hodiny"
        },
        other: {
            present: "{{count}} hodín",
            past: "{{count}} hodinami",
            future: "{{count}} hodín"
        }
    },
    xDays: {
        one: {
            present: "deň",
            past: "dňom",
            future: "deň"
        },
        twoFour: {
            present: "{{count}} dni",
            past: "{{count}} dňami",
            future: "{{count}} dni"
        },
        other: {
            present: "{{count}} dní",
            past: "{{count}} dňami",
            future: "{{count}} dní"
        }
    },
    xWeeks: {
        one: {
            present: "týždeň",
            past: "týždňom",
            future: "týždeň"
        },
        twoFour: {
            present: "{{count}} týždne",
            past: "{{count}} týždňami",
            future: "{{count}} týždne"
        },
        other: {
            present: "{{count}} týždňov",
            past: "{{count}} týždňami",
            future: "{{count}} týždňov"
        }
    },
    xMonths: {
        one: {
            present: "mesiac",
            past: "mesiacom",
            future: "mesiac"
        },
        twoFour: {
            present: "{{count}} mesiace",
            past: "{{count}} mesiacmi",
            future: "{{count}} mesiace"
        },
        other: {
            present: "{{count}} mesiacov",
            past: "{{count}} mesiacmi",
            future: "{{count}} mesiacov"
        }
    },
    xYears: {
        one: {
            present: "rok",
            past: "rokom",
            future: "rok"
        },
        twoFour: {
            present: "{{count}} roky",
            past: "{{count}} rokmi",
            future: "{{count}} roky"
        },
        other: {
            present: "{{count}} rokov",
            past: "{{count}} rokmi",
            future: "{{count}} rokov"
        }
    }
};
const formatDistance = (token, count, options)=>{
    const preposition = extractPreposition(token) || "";
    const key = lowercaseFirstLetter(token.substring(preposition.length));
    const scheme = formatDistanceLocale[key];
    if (!options?.addSuffix) {
        return prefixPreposition(preposition) + suffixPreposition(preposition) + declension(scheme, count, "present");
    }
    if (options.comparison && options.comparison > 0) {
        return prefixPreposition(preposition) + "o " + suffixPreposition(preposition) + declension(scheme, count, "future");
    } else {
        return prefixPreposition(preposition) + "pred " + suffixPreposition(preposition) + declension(scheme, count, "past");
    }
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatLong.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-client] (ecmascript)");
;
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1986
const dateFormats = {
    full: "EEEE d. MMMM y",
    long: "d. MMMM y",
    medium: "d. M. y",
    short: "d. M. y"
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#2149
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1994
const dateTimeFormats = {
    full: "{{date}}, {{time}}",
    long: "{{date}}, {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}} {{time}}"
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatRelative.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/isSameWeek.js [app-client] (ecmascript)");
;
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1308
const accusativeWeekdays = [
    "nedeľu",
    "pondelok",
    "utorok",
    "stredu",
    "štvrtok",
    "piatok",
    "sobotu"
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
        /* Sun */ case 3:
        /* Wed */ case 6 /* Sat */ :
            return "'minulú " + weekday + " o' p";
        default:
            return "'minulý' eeee 'o' p";
    }
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    if (day === 4 /* Thu */ ) {
        return "'vo' eeee 'o' p";
    } else {
        return "'v " + weekday + " o' p";
    }
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch(day){
        case 0:
        /* Sun */ case 4:
        /* Wed */ case 6 /* Sat */ :
            return "'budúcu " + weekday + " o' p";
        default:
            return "'budúci' eeee 'o' p";
    }
}
const formatRelativeLocale = {
    lastWeek: (date, baseDate, options)=>{
        const day = date.getDay();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameWeek"])(date, baseDate, options)) {
            return thisWeek(day);
        } else {
            return lastWeek(day);
        }
    },
    yesterday: "'včera o' p",
    today: "'dnes o' p",
    tomorrow: "'zajtra o' p",
    nextWeek: (date, baseDate, options)=>{
        const day = date.getDay();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameWeek"])(date, baseDate, options)) {
            return thisWeek(day);
        } else {
            return nextWeek(day);
        }
    },
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/localize.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "localize": (()=>localize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-client] (ecmascript)");
;
// https://www.unicode.org/cldr/charts/32/summary/sk.html#1772
const eraValues = {
    narrow: [
        "pred Kr.",
        "po Kr."
    ],
    abbreviated: [
        "pred Kr.",
        "po Kr."
    ],
    wide: [
        "pred Kristom",
        "po Kristovi"
    ]
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html#1780
const quarterValues = {
    narrow: [
        "1",
        "2",
        "3",
        "4"
    ],
    abbreviated: [
        "Q1",
        "Q2",
        "Q3",
        "Q4"
    ],
    wide: [
        "1. štvrťrok",
        "2. štvrťrok",
        "3. štvrťrok",
        "4. štvrťrok"
    ]
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html#1804
const monthValues = {
    narrow: [
        "j",
        "f",
        "m",
        "a",
        "m",
        "j",
        "j",
        "a",
        "s",
        "o",
        "n",
        "d"
    ],
    abbreviated: [
        "jan",
        "feb",
        "mar",
        "apr",
        "máj",
        "jún",
        "júl",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
    ],
    wide: [
        "január",
        "február",
        "marec",
        "apríl",
        "máj",
        "jún",
        "júl",
        "august",
        "september",
        "október",
        "november",
        "december"
    ]
};
const formattingMonthValues = {
    narrow: [
        "j",
        "f",
        "m",
        "a",
        "m",
        "j",
        "j",
        "a",
        "s",
        "o",
        "n",
        "d"
    ],
    abbreviated: [
        "jan",
        "feb",
        "mar",
        "apr",
        "máj",
        "jún",
        "júl",
        "aug",
        "sep",
        "okt",
        "nov",
        "dec"
    ],
    wide: [
        "januára",
        "februára",
        "marca",
        "apríla",
        "mája",
        "júna",
        "júla",
        "augusta",
        "septembra",
        "októbra",
        "novembra",
        "decembra"
    ]
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html#1876
const dayValues = {
    narrow: [
        "n",
        "p",
        "u",
        "s",
        "š",
        "p",
        "s"
    ],
    short: [
        "ne",
        "po",
        "ut",
        "st",
        "št",
        "pi",
        "so"
    ],
    abbreviated: [
        "ne",
        "po",
        "ut",
        "st",
        "št",
        "pi",
        "so"
    ],
    wide: [
        "nedeľa",
        "pondelok",
        "utorok",
        "streda",
        "štvrtok",
        "piatok",
        "sobota"
    ]
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html#1932
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "poln.",
        noon: "pol.",
        morning: "ráno",
        afternoon: "pop.",
        evening: "več.",
        night: "noc"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "poln.",
        noon: "pol.",
        morning: "ráno",
        afternoon: "popol.",
        evening: "večer",
        night: "noc"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "polnoc",
        noon: "poludnie",
        morning: "ráno",
        afternoon: "popoludnie",
        evening: "večer",
        night: "noc"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "o poln.",
        noon: "nap.",
        morning: "ráno",
        afternoon: "pop.",
        evening: "več.",
        night: "v n."
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "o poln.",
        noon: "napol.",
        morning: "ráno",
        afternoon: "popol.",
        evening: "večer",
        night: "v noci"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "o polnoci",
        noon: "napoludnie",
        morning: "ráno",
        afternoon: "popoludní",
        evening: "večer",
        night: "v noci"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    return number + ".";
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
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/match.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const matchOrdinalNumberPattern = /^(\d+)\.?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
    abbreviated: /^(pred Kr\.|pred n\. l\.|po Kr\.|n\. l\.)/i,
    wide: /^(pred Kristom|pred na[šs][íi]m letopo[čc]tom|po Kristovi|n[áa][šs]ho letopo[čc]tu)/i
};
const parseEraPatterns = {
    any: [
        /^pr/i,
        /^(po|n)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234]\. [šs]tvr[ťt]rok/i
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
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|m[áa]j|j[úu]n|j[úu]l|aug|sep|okt|nov|dec)/i,
    wide: /^(janu[áa]ra?|febru[áa]ra?|(marec|marca)|apr[íi]la?|m[áa]ja?|j[úu]na?|j[úu]la?|augusta?|(september|septembra)|(okt[óo]ber|okt[óo]bra)|(november|novembra)|(december|decembra))/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^m[áa]j/i,
        /^j[úu]n/i,
        /^j[úu]l/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^[npusšp]/i,
    short: /^(ne|po|ut|st|št|pi|so)/i,
    abbreviated: /^(ne|po|ut|st|št|pi|so)/i,
    wide: /^(nede[ľl]a|pondelok|utorok|streda|[šs]tvrtok|piatok|sobota])/i
};
const parseDayPatterns = {
    narrow: [
        /^n/i,
        /^p/i,
        /^u/i,
        /^s/i,
        /^š/i,
        /^p/i,
        /^s/i
    ],
    any: [
        /^n/i,
        /^po/i,
        /^u/i,
        /^st/i,
        /^(št|stv)/i,
        /^pi/i,
        /^so/i
    ]
};
const matchDayPeriodPatterns = {
    narrow: /^(am|pm|(o )?poln\.?|(nap\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]\.?|(v n\.?|noc))/i,
    abbreviated: /^(am|pm|(o )?poln\.?|(napol\.?|pol\.?)|r[áa]no|pop\.?|ve[čc]er|(v )?noci?)/i,
    any: /^(am|pm|(o )?polnoci?|(na)?poludnie|r[áa]no|popoludn(ie|í|i)|ve[čc]er|(v )?noci?)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^am/i,
        pm: /^pm/i,
        midnight: /poln/i,
        noon: /^(nap|(na)?pol(\.|u))/i,
        morning: /^r[áa]no/i,
        afternoon: /^pop/i,
        evening: /^ve[čc]/i,
        night: /^(noc|v n\.)/i
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
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "sk": (()=>sk)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatLong.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/formatRelative.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/localize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/sk/_lib/match.js [app-client] (ecmascript)");
;
;
;
;
;
const sk = {
    code: "sk",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$localize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$sk$2f$_lib$2f$match$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 4
    }
};
const __TURBOPACK__default__export__ = sk;
}}),
}]);

//# sourceMappingURL=8505c_date-fns_592be2._.js.map