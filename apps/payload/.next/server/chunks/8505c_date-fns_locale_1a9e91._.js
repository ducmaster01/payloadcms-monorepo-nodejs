module.exports = {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/formatDistance.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            regular: "méně než 1 sekunda",
            past: "před méně než 1 sekundou",
            future: "za méně než 1 sekundu"
        },
        few: {
            regular: "méně než {{count}} sekundy",
            past: "před méně než {{count}} sekundami",
            future: "za méně než {{count}} sekundy"
        },
        many: {
            regular: "méně než {{count}} sekund",
            past: "před méně než {{count}} sekundami",
            future: "za méně než {{count}} sekund"
        }
    },
    xSeconds: {
        one: {
            regular: "1 sekunda",
            past: "před 1 sekundou",
            future: "za 1 sekundu"
        },
        few: {
            regular: "{{count}} sekundy",
            past: "před {{count}} sekundami",
            future: "za {{count}} sekundy"
        },
        many: {
            regular: "{{count}} sekund",
            past: "před {{count}} sekundami",
            future: "za {{count}} sekund"
        }
    },
    halfAMinute: {
        type: "other",
        other: {
            regular: "půl minuty",
            past: "před půl minutou",
            future: "za půl minuty"
        }
    },
    lessThanXMinutes: {
        one: {
            regular: "méně než 1 minuta",
            past: "před méně než 1 minutou",
            future: "za méně než 1 minutu"
        },
        few: {
            regular: "méně než {{count}} minuty",
            past: "před méně než {{count}} minutami",
            future: "za méně než {{count}} minuty"
        },
        many: {
            regular: "méně než {{count}} minut",
            past: "před méně než {{count}} minutami",
            future: "za méně než {{count}} minut"
        }
    },
    xMinutes: {
        one: {
            regular: "1 minuta",
            past: "před 1 minutou",
            future: "za 1 minutu"
        },
        few: {
            regular: "{{count}} minuty",
            past: "před {{count}} minutami",
            future: "za {{count}} minuty"
        },
        many: {
            regular: "{{count}} minut",
            past: "před {{count}} minutami",
            future: "za {{count}} minut"
        }
    },
    aboutXHours: {
        one: {
            regular: "přibližně 1 hodina",
            past: "přibližně před 1 hodinou",
            future: "přibližně za 1 hodinu"
        },
        few: {
            regular: "přibližně {{count}} hodiny",
            past: "přibližně před {{count}} hodinami",
            future: "přibližně za {{count}} hodiny"
        },
        many: {
            regular: "přibližně {{count}} hodin",
            past: "přibližně před {{count}} hodinami",
            future: "přibližně za {{count}} hodin"
        }
    },
    xHours: {
        one: {
            regular: "1 hodina",
            past: "před 1 hodinou",
            future: "za 1 hodinu"
        },
        few: {
            regular: "{{count}} hodiny",
            past: "před {{count}} hodinami",
            future: "za {{count}} hodiny"
        },
        many: {
            regular: "{{count}} hodin",
            past: "před {{count}} hodinami",
            future: "za {{count}} hodin"
        }
    },
    xDays: {
        one: {
            regular: "1 den",
            past: "před 1 dnem",
            future: "za 1 den"
        },
        few: {
            regular: "{{count}} dny",
            past: "před {{count}} dny",
            future: "za {{count}} dny"
        },
        many: {
            regular: "{{count}} dní",
            past: "před {{count}} dny",
            future: "za {{count}} dní"
        }
    },
    aboutXWeeks: {
        one: {
            regular: "přibližně 1 týden",
            past: "přibližně před 1 týdnem",
            future: "přibližně za 1 týden"
        },
        few: {
            regular: "přibližně {{count}} týdny",
            past: "přibližně před {{count}} týdny",
            future: "přibližně za {{count}} týdny"
        },
        many: {
            regular: "přibližně {{count}} týdnů",
            past: "přibližně před {{count}} týdny",
            future: "přibližně za {{count}} týdnů"
        }
    },
    xWeeks: {
        one: {
            regular: "1 týden",
            past: "před 1 týdnem",
            future: "za 1 týden"
        },
        few: {
            regular: "{{count}} týdny",
            past: "před {{count}} týdny",
            future: "za {{count}} týdny"
        },
        many: {
            regular: "{{count}} týdnů",
            past: "před {{count}} týdny",
            future: "za {{count}} týdnů"
        }
    },
    aboutXMonths: {
        one: {
            regular: "přibližně 1 měsíc",
            past: "přibližně před 1 měsícem",
            future: "přibližně za 1 měsíc"
        },
        few: {
            regular: "přibližně {{count}} měsíce",
            past: "přibližně před {{count}} měsíci",
            future: "přibližně za {{count}} měsíce"
        },
        many: {
            regular: "přibližně {{count}} měsíců",
            past: "přibližně před {{count}} měsíci",
            future: "přibližně za {{count}} měsíců"
        }
    },
    xMonths: {
        one: {
            regular: "1 měsíc",
            past: "před 1 měsícem",
            future: "za 1 měsíc"
        },
        few: {
            regular: "{{count}} měsíce",
            past: "před {{count}} měsíci",
            future: "za {{count}} měsíce"
        },
        many: {
            regular: "{{count}} měsíců",
            past: "před {{count}} měsíci",
            future: "za {{count}} měsíců"
        }
    },
    aboutXYears: {
        one: {
            regular: "přibližně 1 rok",
            past: "přibližně před 1 rokem",
            future: "přibližně za 1 rok"
        },
        few: {
            regular: "přibližně {{count}} roky",
            past: "přibližně před {{count}} roky",
            future: "přibližně za {{count}} roky"
        },
        many: {
            regular: "přibližně {{count}} roků",
            past: "přibližně před {{count}} roky",
            future: "přibližně za {{count}} roků"
        }
    },
    xYears: {
        one: {
            regular: "1 rok",
            past: "před 1 rokem",
            future: "za 1 rok"
        },
        few: {
            regular: "{{count}} roky",
            past: "před {{count}} roky",
            future: "za {{count}} roky"
        },
        many: {
            regular: "{{count}} roků",
            past: "před {{count}} roky",
            future: "za {{count}} roků"
        }
    },
    overXYears: {
        one: {
            regular: "více než 1 rok",
            past: "před více než 1 rokem",
            future: "za více než 1 rok"
        },
        few: {
            regular: "více než {{count}} roky",
            past: "před více než {{count}} roky",
            future: "za více než {{count}} roky"
        },
        many: {
            regular: "více než {{count}} roků",
            past: "před více než {{count}} roky",
            future: "za více než {{count}} roků"
        }
    },
    almostXYears: {
        one: {
            regular: "skoro 1 rok",
            past: "skoro před 1 rokem",
            future: "skoro za 1 rok"
        },
        few: {
            regular: "skoro {{count}} roky",
            past: "skoro před {{count}} roky",
            future: "skoro za {{count}} roky"
        },
        many: {
            regular: "skoro {{count}} roků",
            past: "skoro před {{count}} roky",
            future: "skoro za {{count}} roků"
        }
    }
};
const formatDistance = (token, count, options)=>{
    let pluralResult;
    const tokenValue = formatDistanceLocale[token];
    // cs pluralization
    if (tokenValue.type === "other") {
        pluralResult = tokenValue.other;
    } else if (count === 1) {
        pluralResult = tokenValue.one;
    } else if (count > 1 && count < 5) {
        pluralResult = tokenValue.few;
    } else {
        pluralResult = tokenValue.many;
    }
    // times
    const suffixExist = options?.addSuffix === true;
    const comparison = options?.comparison;
    let timeResult;
    if (suffixExist && comparison === -1) {
        timeResult = pluralResult.past;
    } else if (suffixExist && comparison === 1) {
        timeResult = pluralResult.future;
    } else {
        timeResult = pluralResult.regular;
    }
    return timeResult.replace("{{count}}", String(count));
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/formatLong.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-route] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, d. MMMM yyyy",
    long: "d. MMMM yyyy",
    medium: "d. M. yyyy",
    short: "dd.MM.yyyy"
};
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'v' {{time}}",
    long: "{{date}} 'v' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/formatRelative.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
const accusativeWeekdays = [
    "neděli",
    "pondělí",
    "úterý",
    "středu",
    "čtvrtek",
    "pátek",
    "sobotu"
];
const formatRelativeLocale = {
    lastWeek: "'poslední' eeee 've' p",
    yesterday: "'včera v' p",
    today: "'dnes v' p",
    tomorrow: "'zítra v' p",
    nextWeek: (date)=>{
        const day = date.getDay();
        return "'v " + accusativeWeekdays[day] + " o' p";
    },
    other: "P"
};
const formatRelative = (token, date)=>{
    const format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date);
    }
    return format;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/localize.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "localize": (()=>localize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-route] (ecmascript)");
;
const eraValues = {
    narrow: [
        "př. n. l.",
        "n. l."
    ],
    abbreviated: [
        "př. n. l.",
        "n. l."
    ],
    wide: [
        "před naším letopočtem",
        "našeho letopočtu"
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
        "1. čtvrtletí",
        "2. čtvrtletí",
        "3. čtvrtletí",
        "4. čtvrtletí"
    ],
    wide: [
        "1. čtvrtletí",
        "2. čtvrtletí",
        "3. čtvrtletí",
        "4. čtvrtletí"
    ]
};
const monthValues = {
    narrow: [
        "L",
        "Ú",
        "B",
        "D",
        "K",
        "Č",
        "Č",
        "S",
        "Z",
        "Ř",
        "L",
        "P"
    ],
    abbreviated: [
        "led",
        "úno",
        "bře",
        "dub",
        "kvě",
        "čvn",
        "čvc",
        "srp",
        "zář",
        "říj",
        "lis",
        "pro"
    ],
    wide: [
        "leden",
        "únor",
        "březen",
        "duben",
        "květen",
        "červen",
        "červenec",
        "srpen",
        "září",
        "říjen",
        "listopad",
        "prosinec"
    ]
};
const formattingMonthValues = {
    narrow: [
        "L",
        "Ú",
        "B",
        "D",
        "K",
        "Č",
        "Č",
        "S",
        "Z",
        "Ř",
        "L",
        "P"
    ],
    abbreviated: [
        "led",
        "úno",
        "bře",
        "dub",
        "kvě",
        "čvn",
        "čvc",
        "srp",
        "zář",
        "říj",
        "lis",
        "pro"
    ],
    wide: [
        "ledna",
        "února",
        "března",
        "dubna",
        "května",
        "června",
        "července",
        "srpna",
        "září",
        "října",
        "listopadu",
        "prosince"
    ]
};
const dayValues = {
    narrow: [
        "ne",
        "po",
        "út",
        "st",
        "čt",
        "pá",
        "so"
    ],
    short: [
        "ne",
        "po",
        "út",
        "st",
        "čt",
        "pá",
        "so"
    ],
    abbreviated: [
        "ned",
        "pon",
        "úte",
        "stř",
        "čtv",
        "pát",
        "sob"
    ],
    wide: [
        "neděle",
        "pondělí",
        "úterý",
        "středa",
        "čtvrtek",
        "pátek",
        "sobota"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "dop.",
        pm: "odp.",
        midnight: "půlnoc",
        noon: "poledne",
        morning: "ráno",
        afternoon: "odpoledne",
        evening: "večer",
        night: "noc"
    },
    abbreviated: {
        am: "dop.",
        pm: "odp.",
        midnight: "půlnoc",
        noon: "poledne",
        morning: "ráno",
        afternoon: "odpoledne",
        evening: "večer",
        night: "noc"
    },
    wide: {
        am: "dopoledne",
        pm: "odpoledne",
        midnight: "půlnoc",
        noon: "poledne",
        morning: "ráno",
        afternoon: "odpoledne",
        evening: "večer",
        night: "noc"
    }
};
const formattingDayPeriodValues = {
    narrow: {
        am: "dop.",
        pm: "odp.",
        midnight: "půlnoc",
        noon: "poledne",
        morning: "ráno",
        afternoon: "odpoledne",
        evening: "večer",
        night: "noc"
    },
    abbreviated: {
        am: "dop.",
        pm: "odp.",
        midnight: "půlnoc",
        noon: "poledne",
        morning: "ráno",
        afternoon: "odpoledne",
        evening: "večer",
        night: "noc"
    },
    wide: {
        am: "dopoledne",
        pm: "odpoledne",
        midnight: "půlnoc",
        noon: "poledne",
        morning: "ráno",
        afternoon: "odpoledne",
        evening: "večer",
        night: "noc"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    return number + ".";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/match.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "match": (()=>match)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-route] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)\.?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
    abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
    wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i
};
const parseEraPatterns = {
    any: [
        /^p[řr]/i,
        /^(po|n)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
    wide: /^[1234]\. [čc]tvrtlet[íi]/i
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
    narrow: /^[lúubdkčcszřrlp]/i,
    abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
    wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i
};
const parseMonthPatterns = {
    narrow: [
        /^l/i,
        /^[úu]/i,
        /^b/i,
        /^d/i,
        /^k/i,
        /^[čc]/i,
        /^[čc]/i,
        /^s/i,
        /^z/i,
        /^[řr]/i,
        /^l/i,
        /^p/i
    ],
    any: [
        /^led/i,
        /^[úu]n/i,
        /^b[řr]e/i,
        /^dub/i,
        /^kv[ěe]/i,
        /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,
        /^[čc]vc|[čc]erven(ec|ce)/i,
        /^srp/i,
        /^z[áa][řr]/i,
        /^[řr][íi]j/i,
        /^lis/i,
        /^pro/i
    ]
};
const matchDayPatterns = {
    narrow: /^[npuúsčps]/i,
    short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
    abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
    wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i
};
const parseDayPatterns = {
    narrow: [
        /^n/i,
        /^p/i,
        /^[úu]/i,
        /^s/i,
        /^[čc]/i,
        /^p/i,
        /^s/i
    ],
    any: [
        /^ne/i,
        /^po/i,
        /^[úu]t/i,
        /^st/i,
        /^[čc]t/i,
        /^p[áa]/i,
        /^so/i
    ]
};
const matchDayPeriodPatterns = {
    any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^dop/i,
        pm: /^odp/i,
        midnight: /^p[ůu]lnoc/i,
        noon: /^poledne/i,
        morning: /r[áa]no/i,
        afternoon: /odpoledne/i,
        evening: /ve[čc]er/i,
        night: /noc/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cs": (()=>cs),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/formatDistance.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/formatLong.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/formatRelative.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$localize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/localize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$match$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/cs/_lib/match.js [app-route] (ecmascript)");
;
;
;
;
;
const cs = {
    code: "cs",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$localize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$cs$2f$_lib$2f$match$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 4
    }
};
const __TURBOPACK__default__export__ = cs;
}}),

};

//# sourceMappingURL=8505c_date-fns_locale_1a9e91._.js.map