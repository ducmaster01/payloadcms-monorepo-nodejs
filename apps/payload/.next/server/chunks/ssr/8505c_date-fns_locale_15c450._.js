module.exports = {

"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatDistance.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatDistance": (()=>formatDistance)
});
const translations = {
    about: "körülbelül",
    over: "több mint",
    almost: "majdnem",
    lessthan: "kevesebb mint"
};
const withoutSuffixes = {
    xseconds: " másodperc",
    halfaminute: "fél perc",
    xminutes: " perc",
    xhours: " óra",
    xdays: " nap",
    xweeks: " hét",
    xmonths: " hónap",
    xyears: " év"
};
const withSuffixes = {
    xseconds: {
        "-1": " másodperccel ezelőtt",
        1: " másodperc múlva",
        0: " másodperce"
    },
    halfaminute: {
        "-1": "fél perccel ezelőtt",
        1: "fél perc múlva",
        0: "fél perce"
    },
    xminutes: {
        "-1": " perccel ezelőtt",
        1: " perc múlva",
        0: " perce"
    },
    xhours: {
        "-1": " órával ezelőtt",
        1: " óra múlva",
        0: " órája"
    },
    xdays: {
        "-1": " nappal ezelőtt",
        1: " nap múlva",
        0: " napja"
    },
    xweeks: {
        "-1": " héttel ezelőtt",
        1: " hét múlva",
        0: " hete"
    },
    xmonths: {
        "-1": " hónappal ezelőtt",
        1: " hónap múlva",
        0: " hónapja"
    },
    xyears: {
        "-1": " évvel ezelőtt",
        1: " év múlva",
        0: " éve"
    }
};
const formatDistance = (token, count, options)=>{
    const adverb = token.match(/about|over|almost|lessthan/i);
    const unit = adverb ? token.replace(adverb[0], "") : token;
    const addSuffix = options?.addSuffix === true;
    const key = unit.toLowerCase();
    const comparison = options?.comparison || 0;
    const translated = addSuffix ? withSuffixes[key][comparison] : withoutSuffixes[key];
    let result = key === "halfaminute" ? translated : count + translated;
    if (adverb) {
        const adv = adverb[0].toLowerCase();
        result = translations[adv] + " " + result;
    }
    return result;
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatLong.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLong": (()=>formatLong)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildFormatLongFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/_lib/buildFormatLongFn.js [app-rsc] (ecmascript)");
;
const dateFormats = {
    full: "y. MMMM d., EEEE",
    long: "y. MMMM d.",
    medium: "y. MMM d.",
    short: "y. MM. dd."
};
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm"
};
const dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatRelative.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatRelative": (()=>formatRelative)
});
const accusativeWeekdays = [
    "vasárnap",
    "hétfőn",
    "kedden",
    "szerdán",
    "csütörtökön",
    "pénteken",
    "szombaton"
];
function week(isFuture) {
    return (date)=>{
        const weekday = accusativeWeekdays[date.getDay()];
        const prefix = isFuture ? "" : "'múlt' ";
        return `${prefix}'${weekday}' p'-kor'`;
    };
}
const formatRelativeLocale = {
    lastWeek: week(false),
    yesterday: "'tegnap' p'-kor'",
    today: "'ma' p'-kor'",
    tomorrow: "'holnap' p'-kor'",
    nextWeek: week(true),
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/localize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
        "ie.",
        "isz."
    ],
    abbreviated: [
        "i. e.",
        "i. sz."
    ],
    wide: [
        "Krisztus előtt",
        "időszámításunk szerint"
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
        "1. n.év",
        "2. n.év",
        "3. n.év",
        "4. n.év"
    ],
    wide: [
        "1. negyedév",
        "2. negyedév",
        "3. negyedév",
        "4. negyedév"
    ]
};
const formattingQuarterValues = {
    narrow: [
        "I.",
        "II.",
        "III.",
        "IV."
    ],
    abbreviated: [
        "I. n.év",
        "II. n.év",
        "III. n.év",
        "IV. n.év"
    ],
    wide: [
        "I. negyedév",
        "II. negyedév",
        "III. negyedév",
        "IV. negyedév"
    ]
};
const monthValues = {
    narrow: [
        "J",
        "F",
        "M",
        "Á",
        "M",
        "J",
        "J",
        "A",
        "Sz",
        "O",
        "N",
        "D"
    ],
    abbreviated: [
        "jan.",
        "febr.",
        "márc.",
        "ápr.",
        "máj.",
        "jún.",
        "júl.",
        "aug.",
        "szept.",
        "okt.",
        "nov.",
        "dec."
    ],
    wide: [
        "január",
        "február",
        "március",
        "április",
        "május",
        "június",
        "július",
        "augusztus",
        "szeptember",
        "október",
        "november",
        "december"
    ]
};
const dayValues = {
    narrow: [
        "V",
        "H",
        "K",
        "Sz",
        "Cs",
        "P",
        "Sz"
    ],
    short: [
        "V",
        "H",
        "K",
        "Sze",
        "Cs",
        "P",
        "Szo"
    ],
    abbreviated: [
        "V",
        "H",
        "K",
        "Sze",
        "Cs",
        "P",
        "Szo"
    ],
    wide: [
        "vasárnap",
        "hétfő",
        "kedd",
        "szerda",
        "csütörtök",
        "péntek",
        "szombat"
    ]
};
const dayPeriodValues = {
    narrow: {
        am: "de.",
        pm: "du.",
        midnight: "éjfél",
        noon: "dél",
        morning: "reggel",
        afternoon: "du.",
        evening: "este",
        night: "éjjel"
    },
    abbreviated: {
        am: "de.",
        pm: "du.",
        midnight: "éjfél",
        noon: "dél",
        morning: "reggel",
        afternoon: "du.",
        evening: "este",
        night: "éjjel"
    },
    wide: {
        am: "de.",
        pm: "du.",
        midnight: "éjfél",
        noon: "dél",
        morning: "reggel",
        afternoon: "délután",
        evening: "este",
        night: "éjjel"
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
        argumentCallback: (quarter)=>quarter - 1,
        formattingValues: formattingQuarterValues,
        defaultFormattingWidth: "wide"
    }),
    month: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: monthValues,
        defaultWidth: "wide"
    }),
    day: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayValues,
        defaultWidth: "wide"
    }),
    dayPeriod: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$_lib$2f$buildLocalizeFn$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildLocalizeFn"])({
        values: dayPeriodValues,
        defaultWidth: "wide"
    })
};
}}),
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/match.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
const matchOrdinalNumberPattern = /^(\d+)\.?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(ie\.|isz\.)/i,
    abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
    wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
};
const parseEraPatterns = {
    narrow: [
        /ie/i,
        /isz/i
    ],
    abbreviated: [
        /^(i\.?\s?e\.?|b\s?ce)/i,
        /^(i\.?\s?sz\.?|c\s?e)/i
    ],
    any: [
        /előtt/i,
        /(szerint|i. sz.)/i
    ]
};
const matchQuarterPatterns = {
    narrow: /^[1234]\.?/i,
    abbreviated: /^[1234]?\.?\s?n\.év/i,
    wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
};
const parseQuarterPatterns = {
    any: [
        /1|I$/i,
        /2|II$/i,
        /3|III/i,
        /4|IV/i
    ]
};
const matchMonthPatterns = {
    narrow: /^[jfmaásond]|sz/i,
    abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
    wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a|á/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s|sz/i,
        /^o/i,
        /^n/i,
        /^d/i
    ],
    any: [
        /^ja/i,
        /^f/i,
        /^már/i,
        /^áp/i,
        /^máj/i,
        /^jún/i,
        /^júl/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
    ]
};
const matchDayPatterns = {
    narrow: /^([vhkpc]|sz|cs|sz)/i,
    short: /^([vhkp]|sze|cs|szo)/i,
    abbreviated: /^([vhkp]|sze|cs|szo)/i,
    wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
};
const parseDayPatterns = {
    narrow: [
        /^v/i,
        /^h/i,
        /^k/i,
        /^sz/i,
        /^c/i,
        /^p/i,
        /^sz/i
    ],
    any: [
        /^v/i,
        /^h/i,
        /^k/i,
        /^sze/i,
        /^c/i,
        /^p/i,
        /^szo/i
    ]
};
const matchDayPeriodPatterns = {
    any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i
};
const parseDayPeriodPatterns = {
    any: {
        am: /^de\.?/i,
        pm: /^du\.?/i,
        midnight: /^éjf/i,
        noon: /^dé/i,
        morning: /reg/i,
        afternoon: /^délu\.?/i,
        evening: /es/i,
        night: /éjj/i
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
        defaultParseWidth: "any"
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
"[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "hu": (()=>hu)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatDistance.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatLong.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/formatRelative.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/localize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/locale/hu/_lib/match.js [app-rsc] (ecmascript)");
;
;
;
;
;
const hu = {
    code: "hu",
    formatDistance: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$formatDistance$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDistance"],
    formatLong: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$formatLong$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLong"],
    formatRelative: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$formatRelative$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatRelative"],
    localize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$localize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["localize"],
    match: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$locale$2f$hu$2f$_lib$2f$match$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["match"],
    options: {
        weekStartsOn: 1 /* Monday */ ,
        firstWeekContainsDate: 4
    }
};
const __TURBOPACK__default__export__ = hu;
}}),

};

//# sourceMappingURL=8505c_date-fns_locale_15c450._.js.map