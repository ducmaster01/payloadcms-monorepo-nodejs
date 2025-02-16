module.exports = {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatDistance.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
const formatDistanceLocale = {
    lessThanXSeconds: {
        one: {
            standalone: "manje od 1 sekunde",
            withPrepositionAgo: "manje od 1 sekunde",
            withPrepositionIn: "manje od 1 sekundu"
        },
        dual: "manje od {{count}} sekunde",
        other: "manje od {{count}} sekundi"
    },
    xSeconds: {
        one: {
            standalone: "1 sekunda",
            withPrepositionAgo: "1 sekunde",
            withPrepositionIn: "1 sekundu"
        },
        dual: "{{count}} sekunde",
        other: "{{count}} sekundi"
    },
    halfAMinute: "pola minute",
    lessThanXMinutes: {
        one: {
            standalone: "manje od 1 minute",
            withPrepositionAgo: "manje od 1 minute",
            withPrepositionIn: "manje od 1 minutu"
        },
        dual: "manje od {{count}} minute",
        other: "manje od {{count}} minuta"
    },
    xMinutes: {
        one: {
            standalone: "1 minuta",
            withPrepositionAgo: "1 minute",
            withPrepositionIn: "1 minutu"
        },
        dual: "{{count}} minute",
        other: "{{count}} minuta"
    },
    aboutXHours: {
        one: {
            standalone: "oko 1 sat",
            withPrepositionAgo: "oko 1 sat",
            withPrepositionIn: "oko 1 sat"
        },
        dual: "oko {{count}} sata",
        other: "oko {{count}} sati"
    },
    xHours: {
        one: {
            standalone: "1 sat",
            withPrepositionAgo: "1 sat",
            withPrepositionIn: "1 sat"
        },
        dual: "{{count}} sata",
        other: "{{count}} sati"
    },
    xDays: {
        one: {
            standalone: "1 dan",
            withPrepositionAgo: "1 dan",
            withPrepositionIn: "1 dan"
        },
        dual: "{{count}} dana",
        other: "{{count}} dana"
    },
    aboutXWeeks: {
        one: {
            standalone: "oko 1 tjedan",
            withPrepositionAgo: "oko 1 tjedan",
            withPrepositionIn: "oko 1 tjedan"
        },
        dual: "oko {{count}} tjedna",
        other: "oko {{count}} tjedana"
    },
    xWeeks: {
        one: {
            standalone: "1 tjedan",
            withPrepositionAgo: "1 tjedan",
            withPrepositionIn: "1 tjedan"
        },
        dual: "{{count}} tjedna",
        other: "{{count}} tjedana"
    },
    aboutXMonths: {
        one: {
            standalone: "oko 1 mjesec",
            withPrepositionAgo: "oko 1 mjesec",
            withPrepositionIn: "oko 1 mjesec"
        },
        dual: "oko {{count}} mjeseca",
        other: "oko {{count}} mjeseci"
    },
    xMonths: {
        one: {
            standalone: "1 mjesec",
            withPrepositionAgo: "1 mjesec",
            withPrepositionIn: "1 mjesec"
        },
        dual: "{{count}} mjeseca",
        other: "{{count}} mjeseci"
    },
    aboutXYears: {
        one: {
            standalone: "oko 1 godinu",
            withPrepositionAgo: "oko 1 godinu",
            withPrepositionIn: "oko 1 godinu"
        },
        dual: "oko {{count}} godine",
        other: "oko {{count}} godina"
    },
    xYears: {
        one: {
            standalone: "1 godina",
            withPrepositionAgo: "1 godine",
            withPrepositionIn: "1 godinu"
        },
        dual: "{{count}} godine",
        other: "{{count}} godina"
    },
    overXYears: {
        one: {
            standalone: "preko 1 godinu",
            withPrepositionAgo: "preko 1 godinu",
            withPrepositionIn: "preko 1 godinu"
        },
        dual: "preko {{count}} godine",
        other: "preko {{count}} godina"
    },
    almostXYears: {
        one: {
            standalone: "gotovo 1 godinu",
            withPrepositionAgo: "gotovo 1 godinu",
            withPrepositionIn: "gotovo 1 godinu"
        },
        dual: "gotovo {{count}} godine",
        other: "gotovo {{count}} godina"
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
            return "za " + result;
        } else {
            return "prije " + result;
        }
    }
    return result;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatLong.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-rsc] (ecmascript)");
;
const dateFormats = {
    full: "EEEE, d. MMMM y.",
    long: "d. MMMM y.",
    medium: "d. MMM y.",
    short: "dd. MM. y."
};
const timeFormats = {
    full: "HH:mm:ss (zzzz)",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
};
const dateTimeFormats = {
    full: "{{date}} 'u' {{time}}",
    long: "{{date}} 'u' {{time}}",
    medium: "{{date}} {{time}}",
    short: "{{date}} {{time}}"
};
const formatLong = {
    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateFormats,
        defaultWidth: "full"
    }),
    time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: timeFormats,
        defaultWidth: "full"
    }),
    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormatLongFn"])({
        formats: dateTimeFormats,
        defaultWidth: "full"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatRelative.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
const formatRelativeLocale = {
    lastWeek: (date)=>{
        switch(date.getDay()){
            case 0:
                return "'prošlu nedjelju u' p";
            case 3:
                return "'prošlu srijedu u' p";
            case 6:
                return "'prošlu subotu u' p";
            default:
                return "'prošli' EEEE 'u' p";
        }
    },
    yesterday: "'jučer u' p",
    today: "'danas u' p",
    tomorrow: "'sutra u' p",
    nextWeek: (date)=>{
        switch(date.getDay()){
            case 0:
                return "'iduću nedjelju u' p";
            case 3:
                return "'iduću srijedu u' p";
            case 6:
                return "'iduću subotu u' p";
            default:
                return "'prošli' EEEE 'u' p";
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/localize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "localize": (()=>localize)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildLocalizeFn.js [app-rsc] (ecmascript)");
;
const eraValues = {
    narrow: [
        "pr.n.e.",
        "AD"
    ],
    abbreviated: [
        "pr. Kr.",
        "po. Kr."
    ],
    wide: [
        "Prije Krista",
        "Poslije Krista"
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
        "1. kv.",
        "2. kv.",
        "3. kv.",
        "4. kv."
    ],
    wide: [
        "1. kvartal",
        "2. kvartal",
        "3. kvartal",
        "4. kvartal"
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
        "sij",
        "velj",
        "ožu",
        "tra",
        "svi",
        "lip",
        "srp",
        "kol",
        "ruj",
        "lis",
        "stu",
        "pro"
    ],
    wide: [
        "siječanj",
        "veljača",
        "ožujak",
        "travanj",
        "svibanj",
        "lipanj",
        "srpanj",
        "kolovoz",
        "rujan",
        "listopad",
        "studeni",
        "prosinac"
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
        "sij",
        "velj",
        "ožu",
        "tra",
        "svi",
        "lip",
        "srp",
        "kol",
        "ruj",
        "lis",
        "stu",
        "pro"
    ],
    wide: [
        "siječnja",
        "veljače",
        "ožujka",
        "travnja",
        "svibnja",
        "lipnja",
        "srpnja",
        "kolovoza",
        "rujna",
        "listopada",
        "studenog",
        "prosinca"
    ]
};
const dayValues = {
    narrow: [
        "N",
        "P",
        "U",
        "S",
        "Č",
        "P",
        "S"
    ],
    short: [
        "ned",
        "pon",
        "uto",
        "sri",
        "čet",
        "pet",
        "sub"
    ],
    abbreviated: [
        "ned",
        "pon",
        "uto",
        "sri",
        "čet",
        "pet",
        "sub"
    ],
    wide: [
        "nedjelja",
        "ponedjeljak",
        "utorak",
        "srijeda",
        "četvrtak",
        "petak",
        "subota"
    ]
};
const formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "navečer",
        night: "noću"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "navečer",
        night: "noću"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutro",
        afternoon: "poslije podne",
        evening: "navečer",
        night: "noću"
    }
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "navečer",
        night: "noću"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutro",
        afternoon: "popodne",
        evening: "navečer",
        night: "noću"
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutro",
        afternoon: "poslije podne",
        evening: "navečer",
        night: "noću"
    }
};
const ordinalNumber = (dirtyNumber, _options)=>{
    const number = Number(dirtyNumber);
    return number + ".";
};
const localize = {
    ordinalNumber,
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: eraValues,
        defaultWidth: "wide"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter)=>quarter - 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide",
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/match.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "match": (()=>match)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchPatternFn.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildMatchFn.js [app-rsc] (ecmascript)");
;
;
const matchOrdinalNumberPattern = /^(\d+)\./i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(pr\.n\.e\.|AD)/i,
    abbreviated: /^(pr\.\s?Kr\.|po\.\s?Kr\.)/i,
    wide: /^(Prije Krista|prije nove ere|Poslije Krista|nova era)/i
};
const parseEraPatterns = {
    any: [
        /^pr/i,
        /^(po|nova)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]\.\s?kv\.?/i,
    wide: /^[1234]\. kvartal/i
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
    abbreviated: /^(sij|velj|(ožu|ozu)|tra|svi|lip|srp|kol|ruj|lis|stu|pro)/i,
    wide: /^((siječanj|siječnja|sijecanj|sijecnja)|(veljača|veljače|veljaca|veljace)|(ožujak|ožujka|ozujak|ozujka)|(travanj|travnja)|(svibanj|svibnja)|(lipanj|lipnja)|(srpanj|srpnja)|(kolovoz|kolovoza)|(rujan|rujna)|(listopad|listopada)|(studeni|studenog)|(prosinac|prosinca))/i
};
const parseMonthPatterns = {
    narrow: [
        /1/i,
        /2/i,
        /3/i,
        /4/i,
        /5/i,
        /6/i,
        /7/i,
        /8/i,
        /9/i,
        /10/i,
        /11/i,
        /12/i
    ],
    abbreviated: [
        /^sij/i,
        /^velj/i,
        /^(ožu|ozu)/i,
        /^tra/i,
        /^svi/i,
        /^lip/i,
        /^srp/i,
        /^kol/i,
        /^ruj/i,
        /^lis/i,
        /^stu/i,
        /^pro/i
    ],
    wide: [
        /^sij/i,
        /^velj/i,
        /^(ožu|ozu)/i,
        /^tra/i,
        /^svi/i,
        /^lip/i,
        /^srp/i,
        /^kol/i,
        /^ruj/i,
        /^lis/i,
        /^stu/i,
        /^pro/i
    ]
};
const matchDayPatterns = {
    narrow: /^[npusčc]/i,
    short: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
    abbreviated: /^(ned|pon|uto|sri|(čet|cet)|pet|sub)/i,
    wide: /^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i
};
const parseDayPatterns = {
    narrow: [
        /^s/i,
        /^m/i,
        /^t/i,
        /^w/i,
        /^t/i,
        /^f/i,
        /^s/i
    ],
    any: [
        /^su/i,
        /^m/i,
        /^tu/i,
        /^w/i,
        /^th/i,
        /^f/i,
        /^sa/i
    ]
};
const matchDayPeriodPatterns = {
    any: /^(am|pm|ponoc|ponoć|(po)?podne|navecer|navečer|noću|poslije podne|ujutro)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^pono/i,
        noon: /^pod/i,
        morning: /jutro/i,
        afternoon: /(poslije\s|po)+podne/i,
        evening: /(navece|naveče)/i,
        night: /(nocu|noću)/i
    }
};
const match = {
    ordinalNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchPatternFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchPatternFn"])({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value)=>parseInt(value, 10)
    }),
    era: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
    }),
    quarter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index)=>index + 1
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildMatchFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildMatchFn"])({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "hr": (()=>hr)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatDistance.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatLong.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/formatRelative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/localize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hr/_lib/match.js [app-rsc] (ecmascript)");
;
;
;
;
;
const hr = {
    code: "hr",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hr$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 1
    }
};
const __TURBOPACK__default__export__ = hr;
}}),

};

//# sourceMappingURL=8505c_date-fns_locale_0b92a4._.js.map