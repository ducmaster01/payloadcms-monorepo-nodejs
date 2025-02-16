module.exports = {

"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/getNavPrefs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getNavPrefs": (()=>getNavPrefs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
const getNavPrefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async ({ payload, user })=>user ? await payload.find({
        collection: 'payload-preferences',
        depth: 0,
        limit: 1,
        user,
        where: {
            and: [
                {
                    key: {
                        equals: 'nav'
                    }
                },
                {
                    'user.relationTo': {
                        equals: user.collection
                    }
                },
                {
                    'user.value': {
                        equals: user.id
                    }
                }
            ]
        }
    })?.then((res)=>res?.docs?.[0]?.value) : null); //# sourceMappingURL=getNavPrefs.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getRequestLanguage.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRequestLanguage": (()=>getRequestLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/languages.js [app-rsc] (ecmascript)");
;
const getRequestLanguage = ({ config, cookies, headers })=>{
    const supportedLanguageKeys = Object.keys(config.i18n.supportedLanguages);
    const langCookie = cookies.get(`${config.cookiePrefix || 'payload'}-lng`);
    const languageFromCookie = typeof langCookie === 'string' ? langCookie : langCookie?.value;
    if (languageFromCookie && supportedLanguageKeys.includes(languageFromCookie)) {
        return languageFromCookie;
    }
    const languageFromHeader = headers.get('Accept-Language') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractHeaderLanguage"])(headers.get('Accept-Language')) : undefined;
    if (languageFromHeader && supportedLanguageKeys.includes(languageFromHeader)) {
        return languageFromHeader;
    }
    return config.i18n.fallbackLanguage;
}; //# sourceMappingURL=getRequestLanguage.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getRequestTheme.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRequestTheme": (()=>getRequestTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
const acceptedThemes = [
    'dark',
    'light'
];
const getRequestTheme = ({ config, cookies, headers })=>{
    if (config.admin.theme !== 'all' && acceptedThemes.includes(config.admin.theme)) {
        return config.admin.theme;
    }
    const themeCookie = cookies.get(`${config.cookiePrefix || 'payload'}-theme`);
    const themeFromCookie = typeof themeCookie === 'string' ? themeCookie : themeCookie?.value;
    if (themeFromCookie && acceptedThemes.includes(themeFromCookie)) {
        return themeFromCookie;
    }
    const themeFromHeader = headers.get('Sec-CH-Prefers-Color-Scheme');
    if (themeFromHeader && acceptedThemes.includes(themeFromHeader)) {
        return themeFromHeader;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTheme"];
}; //# sourceMappingURL=getRequestTheme.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initReq.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initReq": (()=>initReq)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getRequestLanguage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
;
;
;
;
;
const initReq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(async function(configPromise) {
    const config = await configPromise;
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPayload"])({
        config
    });
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCookies"])(headers);
    const languageCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestLanguage"])({
        config,
        cookies,
        headers
    });
    const i18n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'client',
        language: languageCode
    });
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({
        req: {
            headers,
            host: headers.get('host'),
            i18n: i18n,
            url: `${payload.config.serverURL}`
        }
    }, payload);
    const { permissions, user } = await payload.auth({
        headers,
        req
    });
    return {
        i18n,
        permissions,
        req,
        user
    };
}); //# sourceMappingURL=initReq.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/layouts/Root/checkDependencies.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkDependencies": (()=>checkDependencies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-rsc] (ecmascript)");
;
const customReactVersionParser = (version)=>{
    const [mainVersion, ...preReleases] = version.split('-');
    if (preReleases?.length === 3) {
        // Needs different handling, as it's in a format like 19.0.0-rc-06d0b89e-20240801 format
        const date = preReleases[2];
        const parts = mainVersion.split('.').map(Number);
        return {
            parts,
            preReleases: [
                date
            ]
        };
    }
    const parts = mainVersion.split('.').map(Number);
    return {
        parts,
        preReleases
    };
};
let checkedDependencies = false;
const checkDependencies = ()=>{
    if (("TURBOPACK compile-time value", "development") !== 'production' && process.env.PAYLOAD_DISABLE_DEPENDENCY_CHECKER !== 'true' && !checkedDependencies) {
        checkedDependencies = true;
        // First check if there are mismatching dependency versions of next / react packages
        void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkDependencies"])({
            dependencyGroups: [
                {
                    name: 'react',
                    dependencies: [
                        'react',
                        'react-dom'
                    ],
                    targetVersionDependency: 'react'
                }
            ],
            dependencyVersions: {
                next: {
                    required: false,
                    version: '>=15.0.0'
                },
                react: {
                    customVersionParser: customReactVersionParser,
                    required: false,
                    version: '>=19.0.0-rc-65a56d0e-20241020'
                },
                'react-dom': {
                    customVersionParser: customReactVersionParser,
                    required: false,
                    version: '>=19.0.0-rc-65a56d0e-20241020'
                }
            }
        });
    }
}; //# sourceMappingURL=checkDependencies.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/layouts/Root/NestProviders.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NestProviders": (()=>NestProviders)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
;
;
;
function NestProviders({ children, importMap, providers, serverProps }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
        clientProps: {
            children: providers.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(NestProviders, {
                importMap: importMap,
                providers: providers.slice(1),
                serverProps: serverProps,
                children: children
            }) : children
        },
        Component: providers[0],
        importMap,
        serverProps
    });
} //# sourceMappingURL=NestProviders.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/layouts/Root/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"609cf04bb680bea0b252054389e16cbd481de3c116":"$$RSC_SERVER_ACTION_0"} */ __turbopack_esm__({
    "$$RSC_SERVER_ACTION_0": (()=>$$RSC_SERVER_ACTION_0),
    "RootLayout": (()=>RootLayout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$getNavPrefs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/getNavPrefs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getRequestLanguage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestTheme$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getRequestTheme.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$checkDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/layouts/Root/checkDependencies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$NestProviders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/layouts/Root/NestProviders.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/languages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const metadata = {
    description: 'Generated by Next.js',
    title: 'Next.js'
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ $$RSC_SERVER_ACTION_0 = async function switchLanguageServerAction($$ACTION_CLOSURE_BOUND, lang) {
    var [$$ACTION_ARG_0] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptActionBoundArgs"])("609cf04bb680bea0b252054389e16cbd481de3c116", $$ACTION_CLOSURE_BOUND);
    const cookies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookies.set({
        name: `${$$ACTION_ARG_0 || 'payload'}-lng`,
        path: '/',
        value: lang
    });
};
const RootLayout = async ({ children, config: configPromise, importMap, serverFunction })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$checkDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkDependencies"])();
    const config = await configPromise;
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCookies"])(headers);
    const languageCode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestLanguage"])({
        config,
        cookies,
        headers
    });
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestTheme$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestTheme"])({
        config,
        cookies,
        headers
    });
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPayload"])({
        config,
        importMap
    });
    const { i18n, permissions, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initReq"])(config);
    const dir = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$languages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rtlLanguages"].includes(languageCode) ? 'RTL' : 'LTR';
    const languageOptions = Object.entries(config.i18n.supportedLanguages || {}).reduce((acc, [language, languageConfig])=>{
        if (Object.keys(config.i18n.supportedLanguages).includes(language)) {
            acc.push({
                label: languageConfig.translations.general.thisLanguage,
                value: language
            });
        }
        return acc;
    }, []);
    var switchLanguageServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])($$RSC_SERVER_ACTION_0, "609cf04bb680bea0b252054389e16cbd481de3c116", null).bind(null, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["encryptActionBoundArgs"])("609cf04bb680bea0b252054389e16cbd481de3c116", [
        config.cookiePrefix
    ]));
    const navPrefs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$getNavPrefs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNavPrefs"])({
        payload,
        user
    });
    const clientConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientConfig"])({
        config,
        i18n,
        importMap
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("html", {
        "data-theme": theme,
        dir: dir,
        lang: languageCode,
        suppressHydrationWarning: config?.admin?.suppressHydrationWarning ?? false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("style", {
                    children: `@layer payload-default, payload;`
                })
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("body", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootProvider"], {
                        config: clientConfig,
                        dateFNSKey: i18n.dateFNSKey,
                        fallbackLang: config.i18n.fallbackLanguage,
                        isNavOpen: navPrefs?.open ?? true,
                        languageCode: languageCode,
                        languageOptions: languageOptions,
                        permissions: permissions,
                        serverFunction: serverFunction,
                        switchLanguageServerAction: switchLanguageServerAction,
                        theme: theme,
                        translations: i18n.translations,
                        user: user,
                        children: Array.isArray(config.admin?.components?.providers) && config.admin?.components?.providers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$NestProviders$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NestProviders"], {
                            importMap: payload.importMap,
                            providers: config.admin?.components?.providers,
                            serverProps: {
                                i18n,
                                payload,
                                permissions,
                                user
                            },
                            children: children
                        }) : children
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        id: "portal"
                    })
                ]
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VersionsPill": (()=>VersionsPill)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const VersionsPill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VersionsPill() from the server but VersionsPill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js <module evaluation>", "VersionsPill");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VersionsPill": (()=>VersionsPill)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const VersionsPill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VersionsPill() from the server but VersionsPill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js", "VersionsPill");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$VersionsPill$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$VersionsPill$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$VersionsPill$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "documentViewKeys": (()=>documentViewKeys),
    "tabs": (()=>tabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$VersionsPill$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/VersionsPill/index.js [app-rsc] (ecmascript)");
;
const documentViewKeys = [
    'api',
    'default',
    'livePreview',
    'references',
    'relationships',
    'version',
    'versions'
];
const tabs = {
    api: {
        condition: ({ collectionConfig, globalConfig })=>collectionConfig && !collectionConfig?.admin?.hideAPIURL || globalConfig && !globalConfig?.admin?.hideAPIURL,
        href: '/api',
        label: 'API',
        order: 1000
    },
    default: {
        href: '',
        // isActive: ({ href, location }) =>
        // location.pathname === href || location.pathname === `${href}/create`,
        label: ({ t })=>t('general:edit'),
        order: 0
    },
    livePreview: {
        condition: ({ collectionConfig, config, globalConfig })=>{
            if (collectionConfig) {
                return Boolean(config?.admin?.livePreview?.collections?.includes(collectionConfig.slug) || collectionConfig?.admin?.livePreview);
            }
            if (globalConfig) {
                return Boolean(config?.admin?.livePreview?.globals?.includes(globalConfig.slug) || globalConfig?.admin?.livePreview);
            }
            return false;
        },
        href: '/preview',
        label: ({ t })=>t('general:livePreview'),
        order: 100
    },
    references: {
        condition: ()=>false
    },
    relationships: {
        condition: ()=>false
    },
    version: {
        condition: ()=>false
    },
    versions: {
        condition: ({ collectionConfig, globalConfig, permissions })=>Boolean(collectionConfig?.versions && permissions?.collections?.[collectionConfig?.slug]?.readVersions || globalConfig?.versions && permissions?.globals?.[globalConfig?.slug]?.readVersions),
        href: '/versions',
        label: ({ t })=>t('version:versions'),
        order: 200,
        Pill_Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$VersionsPill$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VersionsPill"]
    }
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/getCustomViews.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCustomViews": (()=>getCustomViews)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/index.js [app-rsc] (ecmascript)");
;
const getCustomViews = (args)=>{
    const { collectionConfig, globalConfig } = args;
    let customViews;
    if (collectionConfig) {
        const collectionViewsConfig = typeof collectionConfig?.admin?.components?.views?.edit === 'object' && typeof collectionConfig?.admin?.components?.views?.edit !== 'function' ? collectionConfig?.admin?.components?.views?.edit : undefined;
        customViews = Object.entries(collectionViewsConfig || {}).reduce((prev, [key, view])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["documentViewKeys"].includes(key)) {
                return prev;
            }
            return [
                ...prev,
                {
                    ...view,
                    key
                }
            ];
        }, []);
    }
    if (globalConfig) {
        const globalViewsConfig = typeof globalConfig?.admin?.components?.views?.edit === 'object' && typeof globalConfig?.admin?.components?.views?.edit !== 'function' ? globalConfig?.admin?.components?.views?.edit : undefined;
        customViews = Object.entries(globalViewsConfig || {}).reduce((prev, [key, view])=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["documentViewKeys"].includes(key)) {
                return prev;
            }
            return [
                ...prev,
                {
                    ...view,
                    key
                }
            ];
        }, []);
    }
    return customViews;
}; //# sourceMappingURL=getCustomViews.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/getViewConfig.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getViewConfig": (()=>getViewConfig)
});
const getViewConfig = (args)=>{
    const { name, collectionConfig, globalConfig } = args;
    if (collectionConfig) {
        const collectionConfigViewsConfig = typeof collectionConfig?.admin?.components?.views?.edit === 'object' && typeof collectionConfig?.admin?.components?.views?.edit !== 'function' ? collectionConfig?.admin?.components?.views?.edit : undefined;
        return collectionConfigViewsConfig?.[name];
    }
    if (globalConfig) {
        const globalConfigViewsConfig = typeof globalConfig?.admin?.components?.views?.edit === 'object' && typeof globalConfig?.admin?.components?.views?.edit !== 'function' ? globalConfig?.admin?.components?.views?.edit : undefined;
        return globalConfigViewsConfig?.[name];
    }
    return null;
}; //# sourceMappingURL=getViewConfig.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ShouldRenderTabs": (()=>ShouldRenderTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ShouldRenderTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShouldRenderTabs() from the server but ShouldRenderTabs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js <module evaluation>", "ShouldRenderTabs");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ShouldRenderTabs": (()=>ShouldRenderTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const ShouldRenderTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShouldRenderTabs() from the server but ShouldRenderTabs is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js", "ShouldRenderTabs");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$ShouldRenderTabs$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$ShouldRenderTabs$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$ShouldRenderTabs$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DocumentTabLink": (()=>DocumentTabLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DocumentTabLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentTabLink() from the server but DocumentTabLink is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js <module evaluation>", "DocumentTabLink");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DocumentTabLink": (()=>DocumentTabLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DocumentTabLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentTabLink() from the server but DocumentTabLink is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js", "DocumentTabLink");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$TabLink$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$TabLink$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$TabLink$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DocumentTab": (()=>DocumentTab),
    "baseClass": (()=>baseClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$TabLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/TabLink.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
;
;
;
;
const baseClass = 'doc-tab';
const DocumentTab = (props)=>{
    const { apiURL, collectionConfig, condition, globalConfig, href: tabHref, i18n, isActive: tabIsActive, label, newTab, payload, permissions, Pill, Pill_Component } = props;
    const { config } = payload;
    const { routes } = config;
    let href = typeof tabHref === 'string' ? tabHref : '';
    let isActive = typeof tabIsActive === 'boolean' ? tabIsActive : false;
    if (typeof tabHref === 'function') {
        href = tabHref({
            apiURL,
            collection: collectionConfig,
            global: globalConfig,
            routes
        });
    }
    if (typeof tabIsActive === 'function') {
        isActive = tabIsActive({
            href
        });
    }
    const meetsCondition = !condition || condition && Boolean(condition({
        collectionConfig,
        config,
        globalConfig,
        permissions
    }));
    if (meetsCondition) {
        const labelToRender = typeof label === 'function' ? label({
            t: i18n.t
        }) : label;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$TabLink$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentTabLink"], {
            adminRoute: routes.admin,
            ariaLabel: labelToRender,
            baseClass: baseClass,
            href: href,
            isActive: isActive,
            isCollection: !!collectionConfig && !globalConfig,
            newTab: newTab,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("span", {
                className: `${baseClass}__label`,
                children: [
                    labelToRender,
                    Pill || Pill_Component ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            " ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                                Component: Pill,
                                Fallback: Pill_Component,
                                importMap: payload.importMap,
                                serverProps: {
                                    i18n,
                                    payload,
                                    permissions
                                }
                            })
                        ]
                    }) : null
                ]
            })
        });
    }
    return null;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DocumentTabs": (()=>DocumentTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$getCustomViews$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/getCustomViews.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$getViewConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/getViewConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$ShouldRenderTabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/ShouldRenderTabs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/Tab/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/tabs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const baseClass = 'doc-tabs';
const DocumentTabs = (props)=>{
    const { collectionConfig, globalConfig, i18n, payload, permissions } = props;
    const { config } = payload;
    const customViews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$getCustomViews$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViews"])({
        collectionConfig,
        globalConfig
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$ShouldRenderTabs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShouldRenderTabs"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
            className: baseClass,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${baseClass}__tabs-container`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                    className: `${baseClass}__tabs`,
                    children: [
                        Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabs"])?.sort(([, a], [, b])=>{
                            if (a.order === undefined && b.order === undefined) {
                                return 0;
                            } else if (a.order === undefined) {
                                return 1;
                            } else if (b.order === undefined) {
                                return -1;
                            }
                            return a.order - b.order;
                        })?.map(([name, tab], index)=>{
                            const viewConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$getViewConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getViewConfig"])({
                                name,
                                collectionConfig,
                                globalConfig
                            });
                            const tabFromConfig = viewConfig && 'tab' in viewConfig ? viewConfig.tab : undefined;
                            const { condition } = tabFromConfig || {};
                            const meetsCondition = !condition || condition && Boolean(condition({
                                collectionConfig,
                                config,
                                globalConfig,
                                permissions
                            }));
                            if (meetsCondition) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentTab"], {
                                    ...props,
                                    ...tab || {},
                                    ...tabFromConfig || {}
                                }, `tab-${index}`);
                            }
                            return null;
                        }),
                        customViews?.map((CustomView, index)=>{
                            if ('tab' in CustomView) {
                                const { path, tab } = CustomView;
                                if (tab.Component) {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                                        clientProps: {
                                            path
                                        },
                                        Component: tab.Component,
                                        importMap: payload.importMap,
                                        key: `tab-custom-${index}`,
                                        serverProps: {
                                            collectionConfig,
                                            globalConfig,
                                            i18n,
                                            payload,
                                            permissions
                                        }
                                    });
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$Tab$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentTab"], {
                                    ...props,
                                    ...tab
                                }, `tab-custom-${index}`);
                            }
                            return null;
                        })
                    ]
                })
            })
        })
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DocumentHeader": (()=>DocumentHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/Tabs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
const baseClass = `doc-header`;
const DocumentHeader = (props)=>{
    const { collectionConfig, globalConfig, hideTabs, i18n, payload, permissions } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Gutter"], {
        className: baseClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderTitle"], {
                className: `${baseClass}__title`
            }),
            !hideTabs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$Tabs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentTabs"], {
                collectionConfig: collectionConfig,
                globalConfig: globalConfig,
                i18n: i18n,
                payload: payload,
                permissions: permissions
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavHamburger": (()=>NavHamburger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavHamburger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavHamburger() from the server but NavHamburger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js <module evaluation>", "NavHamburger");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavHamburger": (()=>NavHamburger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavHamburger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavHamburger() from the server but NavHamburger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js", "NavHamburger");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavHamburger$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavHamburger$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavHamburger$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavWrapper": (()=>NavWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavWrapper() from the server but NavWrapper is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js <module evaluation>", "NavWrapper");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavWrapper": (()=>NavWrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavWrapper() from the server but NavWrapper is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js", "NavWrapper");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavWrapper$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavWrapper$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavWrapper$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultNavClient": (()=>DefaultNavClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DefaultNavClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultNavClient() from the server but DefaultNavClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js <module evaluation>", "DefaultNavClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultNavClient": (()=>DefaultNavClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DefaultNavClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultNavClient() from the server but DefaultNavClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js", "DefaultNavClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$client$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$client$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$client$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultNav": (()=>DefaultNav)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavHamburger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavHamburger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavWrapper$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/NavWrapper/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$getNavPrefs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/getNavPrefs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const baseClass = 'nav';
;
;
const DefaultNav = async (props)=>{
    const { i18n, locale, params, payload, permissions, searchParams, user, visibleEntities } = props;
    if (!payload?.config) {
        return null;
    }
    const { admin: { components: { afterNavLinks, beforeNavLinks, logout } }, collections, globals } = payload.config;
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["groupNavItems"])([
        ...collections.filter(({ slug })=>visibleEntities.collections.includes(slug)).map((collection)=>({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EntityType"].collection,
                entity: collection
            })),
        ...globals.filter(({ slug })=>visibleEntities.globals.includes(slug)).map((global)=>({
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EntityType"].global,
                entity: global
            }))
    ], permissions, i18n);
    const navPreferences = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$getNavPrefs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNavPrefs"])({
        payload,
        user
    });
    const LogoutComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
        Component: logout?.Button,
        Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Logout"],
        importMap: payload.importMap,
        serverProps: {
            i18n,
            locale,
            params,
            payload,
            permissions,
            searchParams,
            user
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavWrapper$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavWrapper"], {
        baseClass: baseClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("nav", {
                className: `${baseClass}__wrap`,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        Component: beforeNavLinks,
                        importMap: payload.importMap,
                        serverProps: {
                            i18n,
                            locale,
                            params,
                            payload,
                            permissions,
                            searchParams,
                            user
                        }
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultNavClient"], {
                        groups: groups,
                        navPreferences: navPreferences
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        Component: afterNavLinks,
                        importMap: payload.importMap,
                        serverProps: {
                            i18n,
                            locale,
                            params,
                            payload,
                            permissions,
                            searchParams,
                            user
                        }
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                        className: `${baseClass}__controls`,
                        children: LogoutComponent
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: `${baseClass}__header`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: `${baseClass}__header-content`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$NavHamburger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavHamburger"], {
                        baseClass: baseClass
                    })
                })
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavHamburger": (()=>NavHamburger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavHamburger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavHamburger() from the server but NavHamburger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js <module evaluation>", "NavHamburger");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NavHamburger": (()=>NavHamburger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NavHamburger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavHamburger() from the server but NavHamburger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js", "NavHamburger");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$NavHamburger$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$NavHamburger$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$NavHamburger$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Wrapper": (()=>Wrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Wrapper() from the server but Wrapper is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js <module evaluation>", "Wrapper");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Wrapper": (()=>Wrapper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Wrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Wrapper() from the server but Wrapper is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js", "Wrapper");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$Wrapper$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$Wrapper$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$Wrapper$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultTemplate": (()=>DefaultTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/Nav/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$NavHamburger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/NavHamburger/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$Wrapper$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/Wrapper/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const baseClass = 'template-default';
const DefaultTemplate = ({ children, className, i18n, locale, params, payload, permissions, searchParams, user, viewActions, visibleEntities })=>{
    const { admin: { avatar, components, components: { header: CustomHeader, Nav: CustomNav } = {
        header: undefined,
        Nav: undefined
    } } = {} } = payload.config || {};
    const serverProps = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>({
            i18n,
            locale,
            params,
            payload,
            permissions,
            searchParams,
            user,
            visibleEntities
        }), [
        i18n,
        locale,
        params,
        payload,
        permissions,
        searchParams,
        user,
        visibleEntities
    ]);
    const { Actions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return {
            Actions: viewActions ? viewActions.reduce((acc, action)=>{
                if (action) {
                    if (typeof action === 'object') {
                        acc[action.path] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            Component: action,
                            importMap: payload.importMap,
                            serverProps
                        });
                    } else {
                        acc[action] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            Component: action,
                            importMap: payload.importMap,
                            serverProps
                        });
                    }
                }
                return acc;
            }, {}) : undefined
        };
    }, [
        payload,
        serverProps,
        viewActions
    ]);
    const NavComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
        clientProps: {
            clientProps: {
                visibleEntities
            }
        },
        Component: CustomNav,
        Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$Nav$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultNav"],
        importMap: payload.importMap,
        serverProps
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EntityVisibilityProvider"], {
        visibleEntities: visibleEntities,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BulkUploadProvider"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionsProvider"], {
                Actions: Actions,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps: {
                            clientProps: {
                                visibleEntities
                            }
                        },
                        Component: CustomHeader,
                        importMap: payload.importMap,
                        serverProps
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                        style: {
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                className: `${baseClass}__nav-toggler-wrapper`,
                                id: "nav-toggler",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                    className: `${baseClass}__nav-toggler-container`,
                                    id: "nav-toggler",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavToggler"], {
                                        className: `${baseClass}__nav-toggler`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$NavHamburger$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavHamburger"], {})
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$Wrapper$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Wrapper"], {
                                baseClass: baseClass,
                                className: className,
                                children: [
                                    NavComponent,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: `${baseClass}__wrap`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AppHeader"], {
                                                CustomAvatar: avatar !== 'gravatar' && avatar !== 'default' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                                                    Component: avatar.Component,
                                                    importMap: payload.importMap,
                                                    serverProps
                                                }) : undefined,
                                                CustomIcon: components?.graphics?.Icon ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                                                    Component: components.graphics.Icon,
                                                    importMap: payload.importMap,
                                                    serverProps
                                                }) : undefined
                                            }),
                                            children
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getNextRequestI18n.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getNextRequestI18n": (()=>getNextRequestI18n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getRequestLanguage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-rsc] (ecmascript)");
;
;
;
const getNextRequestI18n = async ({ config })=>{
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'client',
        language: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getRequestLanguage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestLanguage"])({
            config,
            cookies: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])(),
            headers: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])()
        })
    });
}; //# sourceMappingURL=getNextRequestI18n.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/shared.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// Routes that require admin authentication
__turbopack_esm__({
    "getRouteWithoutAdmin": (()=>getRouteWithoutAdmin),
    "isAdminRoute": (()=>isAdminRoute),
    "isPublicAdminRoute": (()=>isPublicAdminRoute)
});
const publicAdminRoutes = [
    'createFirstUser',
    'forgot',
    'login',
    'logout',
    'forgot',
    'inactivity',
    'unauthorized',
    'reset'
];
const isAdminRoute = ({ adminRoute, route })=>{
    return route.startsWith(adminRoute);
};
const isPublicAdminRoute = ({ adminRoute, config, route })=>{
    const isPublicAdminRoute = publicAdminRoutes.some((routeSegment)=>{
        const segment = config.admin?.routes?.[routeSegment] || routeSegment;
        const routeWithoutAdmin = getRouteWithoutAdmin({
            adminRoute,
            route
        });
        if (routeWithoutAdmin.startsWith(segment)) {
            return true;
        } else if (routeWithoutAdmin.includes('/verify/')) {
            return true;
        } else {
            return false;
        }
    });
    return isPublicAdminRoute;
};
const getRouteWithoutAdmin = ({ adminRoute, route })=>{
    return adminRoute && adminRoute !== '/' ? route.replace(adminRoute, '') : route;
}; //# sourceMappingURL=shared.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/handleAdminPage.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRouteInfo": (()=>getRouteInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/shared.js [app-rsc] (ecmascript)");
;
function getRouteInfo({ adminRoute, config, defaultIDType, payload, route }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAdminRoute"])({
        adminRoute,
        config,
        route
    })) {
        const routeWithoutAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteWithoutAdmin"])({
            adminRoute,
            route
        });
        const routeSegments = routeWithoutAdmin.split('/').filter(Boolean);
        const [entityType, entitySlug, createOrID] = routeSegments;
        const collectionSlug = entityType === 'collections' ? entitySlug : undefined;
        const globalSlug = entityType === 'globals' ? entitySlug : undefined;
        let collectionConfig;
        let globalConfig;
        let idType = defaultIDType;
        if (collectionSlug) {
            collectionConfig = config.collections.find((collection)=>collection.slug === collectionSlug);
        }
        if (globalSlug) {
            globalConfig = config.globals.find((global)=>global.slug === globalSlug);
        }
        // If the collection is using a custom ID, we need to determine it's type
        if (collectionConfig && payload) {
            if (payload.collections?.[collectionSlug]?.customIDType) {
                idType = payload.collections?.[collectionSlug].customIDType;
            }
        }
        const docID = collectionSlug && createOrID !== 'create' ? idType === 'number' ? Number(createOrID) : createOrID : undefined;
        return {
            collectionConfig,
            collectionSlug,
            docID,
            globalConfig,
            globalSlug
        };
    }
    return {};
} //# sourceMappingURL=handleAdminPage.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/handleAuthRedirect.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "handleAuthRedirect": (()=>handleAuthRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/qs-esm@7.0.2/node_modules/qs-esm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
;
const handleAuthRedirect = ({ config, route, searchParams, user })=>{
    const { admin: { routes: { login: loginRouteFromConfig, unauthorized: unauthorizedRoute } }, routes: { admin: adminRoute } } = config;
    if (searchParams && 'redirect' in searchParams) {
        delete searchParams.redirect;
    }
    const redirectRoute = (route !== adminRoute ? route : '') + (Object.keys(searchParams ?? {}).length > 0 ? `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.stringify(searchParams, {
        addQueryPrefix: true
    })}` : '');
    const redirectTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
        adminRoute,
        path: user ? unauthorizedRoute : loginRouteFromConfig
    });
    const parsedLoginRouteSearchParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.parse(redirectTo.split('?')[1] ?? '');
    const searchParamsWithRedirect = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.stringify({
        ...parsedLoginRouteSearchParams,
        ...redirectRoute ? {
            redirect: redirectRoute
        } : {}
    }, {
        addQueryPrefix: true
    })}`;
    return `${redirectTo.split('?')[0]}${searchParamsWithRedirect}`;
}; //# sourceMappingURL=handleAuthRedirect.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/isCustomAdminView.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isCustomAdminView": (()=>isCustomAdminView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/shared.js [app-rsc] (ecmascript)");
;
const isCustomAdminView = ({ adminRoute, config, route })=>{
    if (config.admin?.components?.views) {
        const isPublicAdminRoute = Object.entries(config.admin.components.views).some(([_, view])=>{
            const routeWithoutAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteWithoutAdmin"])({
                adminRoute,
                route
            });
            if (view.exact) {
                if (routeWithoutAdmin === view.path) {
                    return true;
                }
            } else {
                if (routeWithoutAdmin.startsWith(view.path)) {
                    return true;
                }
            }
            return false;
        });
        return isPublicAdminRoute;
    }
    return false;
}; //# sourceMappingURL=isCustomAdminView.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initPage": (()=>initPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$handleAdminPage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/handleAdminPage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$handleAuthRedirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/handleAuthRedirect.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$isCustomAdminView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/isCustomAdminView.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/shared.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/qs-esm@7.0.2/node_modules/qs-esm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isEntityHidden.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const initPage = async ({ config: configPromise, importMap, route, searchParams })=>{
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPayload"])({
        config: configPromise,
        importMap
    });
    const queryString = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.stringify(searchParams ?? {}, {
        addQueryPrefix: true
    })}`;
    const { collections, globals, localization, routes: { admin: adminRoute } } = payload.config;
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCookies"])(headers);
    const { i18n, permissions, user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initReq"])(payload.config);
    // Ideally, we should not need to recreate the req, because
    // we can get it from the above initReq.
    // We just need to -overwrite- the url and query of the req
    // we get above. Clone the req? We'll look into that eventually.
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createLocalReq"])({
        fallbackLocale: false,
        req: {
            headers,
            host: headers.get('host'),
            i18n: i18n,
            query: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.parse(queryString, {
                depth: 10,
                ignoreQueryPrefix: true
            }),
            url: `${payload.config.serverURL}${route}${searchParams ? queryString : ''}`
        }
    }, payload);
    const languageOptions = Object.entries(payload.config.i18n.supportedLanguages || {}).reduce((acc, [language, languageConfig])=>{
        if (Object.keys(payload.config.i18n.supportedLanguages).includes(language)) {
            acc.push({
                label: languageConfig.translations.general.thisLanguage,
                value: language
            });
        }
        return acc;
    }, []);
    req.user = user;
    const localeParam = searchParams?.locale;
    let locale;
    if (localization) {
        const defaultLocaleCode = localization.defaultLocale ? localization.defaultLocale : 'en';
        let localeCode = localeParam;
        if (!localeCode) {
            try {
                localeCode = await payload.find({
                    collection: 'payload-preferences',
                    depth: 0,
                    limit: 1,
                    user,
                    where: {
                        and: [
                            {
                                'user.relationTo': {
                                    equals: payload.config.admin.user
                                }
                            },
                            {
                                'user.value': {
                                    equals: user.id
                                }
                            },
                            {
                                key: {
                                    equals: 'locale'
                                }
                            }
                        ]
                    }
                })?.then((res)=>res.docs?.[0]?.value);
            } catch (error) {} // eslint-disable-line no-empty
        }
        locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findLocaleFromCode"])(localization, localeCode);
        if (!locale) {
            locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findLocaleFromCode"])(localization, defaultLocaleCode);
        }
        req.locale = locale.code;
    }
    const visibleEntities = {
        collections: collections.map(({ slug, admin: { hidden } })=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEntityHidden"])({
                hidden,
                user
            }) ? slug : null).filter(Boolean),
        globals: globals.map(({ slug, admin: { hidden } })=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEntityHidden"])({
                hidden,
                user
            }) ? slug : null).filter(Boolean)
    };
    let redirectTo = null;
    if (!permissions.canAccessAdmin && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$shared$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPublicAdminRoute"])({
        adminRoute,
        config: payload.config,
        route
    }) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$isCustomAdminView$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCustomAdminView"])({
        adminRoute,
        config: payload.config,
        route
    })) {
        redirectTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$handleAuthRedirect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleAuthRedirect"])({
            config: payload.config,
            route,
            searchParams,
            user
        });
    }
    const { collectionConfig, collectionSlug, docID, globalConfig, globalSlug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$handleAdminPage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteInfo"])({
        adminRoute,
        config: payload.config,
        defaultIDType: payload.db.defaultIDType,
        payload,
        route
    });
    if (collectionSlug && !collectionConfig || globalSlug && !globalConfig) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return {
        collectionConfig,
        cookies,
        docID,
        globalConfig,
        languageOptions,
        locale,
        permissions,
        redirectTo,
        req,
        translations: i18n.translations,
        visibleEntities
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotFoundClient": (()=>NotFoundClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NotFoundClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NotFoundClient() from the server but NotFoundClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js <module evaluation>", "NotFoundClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotFoundClient": (()=>NotFoundClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const NotFoundClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NotFoundClient() from the server but NotFoundClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js", "NotFoundClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotFoundPage": (()=>NotFoundPage),
    "NotFoundView": (()=>NotFoundView),
    "generatePageMetadata": (()=>generatePageMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/templates/Default/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getNextRequestI18n.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initPage/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const generatePageMetadata = async ({ config: configPromise })=>{
    const config = await configPromise;
    const i18n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextRequestI18n"])({
        config
    });
    return {
        title: i18n.t('general:notFound')
    };
};
const NotFoundPage = async ({ config: configPromise, importMap, params: paramsPromise, searchParams: searchParamsPromise })=>{
    const config = await configPromise;
    const { routes: { admin: adminRoute } = {} } = config;
    const searchParams = await searchParamsPromise;
    const initPageResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initPage$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initPage"])({
        config,
        importMap,
        redirectUnauthenticatedUser: true,
        route: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
            adminRoute,
            path: '/not-found'
        }),
        searchParams
    });
    const params = await paramsPromise;
    if (!initPageResult.req.user || !initPageResult.permissions.canAccessAdmin) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundClient"], {});
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$templates$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultTemplate"], {
        i18n: initPageResult.req.i18n,
        locale: initPageResult.locale,
        params: params,
        payload: initPageResult.req.payload,
        permissions: initPageResult.permissions,
        searchParams: searchParams,
        user: initPageResult.req.user,
        visibleEntities: initPageResult.visibleEntities,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundClient"], {})
    });
};
const NotFoundView = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundClient"], {
        marginTop: "large"
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocPreferences.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDocPreferences": (()=>getDocPreferences)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
const getDocPreferences = async ({ id, collectionSlug, globalSlug, payload, user })=>{
    let preferencesKey;
    if (collectionSlug && id) {
        preferencesKey = `collection-${collectionSlug}-${id}`;
    }
    if (globalSlug) {
        preferencesKey = `global-${globalSlug}`;
    }
    if (preferencesKey) {
        const preferencesResult = await payload.find({
            collection: 'payload-preferences',
            depth: 0,
            limit: 1,
            where: {
                and: [
                    {
                        key: {
                            equals: preferencesKey
                        }
                    },
                    {
                        'user.relationTo': {
                            equals: user.collection
                        }
                    },
                    {
                        'user.value': {
                            equals: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeID"])(user.id)
                        }
                    }
                ]
            }
        });
        if (preferencesResult?.docs?.[0]?.value) {
            return preferencesResult.docs[0].value;
        }
    }
    return {
        fields: {}
    };
}; //# sourceMappingURL=getDocPreferences.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocumentData.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDocumentData": (()=>getDocumentData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
const getDocumentData = async ({ id: idArg, collectionSlug, globalSlug, locale, payload, user })=>{
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeID"])(idArg);
    let resolvedData = null;
    try {
        if (collectionSlug && id) {
            resolvedData = await payload.findByID({
                id,
                collection: collectionSlug,
                depth: 0,
                draft: true,
                fallbackLocale: false,
                locale: locale?.code,
                overrideAccess: false,
                user
            });
        }
        if (globalSlug) {
            resolvedData = await payload.findGlobal({
                slug: globalSlug,
                depth: 0,
                draft: true,
                fallbackLocale: false,
                locale: locale?.code,
                overrideAccess: false,
                user
            });
        }
    } catch (_err) {
        payload.logger.error(_err);
    }
    return resolvedData;
}; //# sourceMappingURL=getDocumentData.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocumentPermissions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDocumentPermissions": (()=>getDocumentPermissions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/docAccess.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__docAccessOperation__as__docAccessOperationGlobal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/docAccess.js [app-rsc] (ecmascript) <export docAccessOperation as docAccessOperationGlobal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
;
const getDocumentPermissions = async (args)=>{
    const { id, collectionConfig, data = {}, globalConfig, req } = args;
    let docPermissions;
    let hasPublishPermission = false;
    if (collectionConfig) {
        try {
            docPermissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["docAccessOperation"])({
                id: id?.toString(),
                collection: {
                    config: collectionConfig
                },
                req: {
                    ...req,
                    data: {
                        ...data,
                        _status: 'draft'
                    }
                }
            });
            if (collectionConfig.versions?.drafts) {
                hasPublishPermission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["docAccessOperation"])({
                    id: id?.toString(),
                    collection: {
                        config: collectionConfig
                    },
                    req: {
                        ...req,
                        data: {
                            ...data,
                            _status: 'published'
                        }
                    }
                }).then((permissions)=>permissions.update);
            }
        } catch (error) {
            req.payload.logger.error(error);
        }
    }
    if (globalConfig) {
        try {
            docPermissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__docAccessOperation__as__docAccessOperationGlobal$3e$__["docAccessOperationGlobal"])({
                globalConfig,
                req: {
                    ...req,
                    data
                }
            });
            if (globalConfig.versions?.drafts) {
                hasPublishPermission = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__docAccessOperation__as__docAccessOperationGlobal$3e$__["docAccessOperationGlobal"])({
                    globalConfig,
                    req: {
                        ...req,
                        data: {
                            ...data,
                            _status: 'published'
                        }
                    }
                }).then((permissions)=>permissions.update);
            }
        } catch (error) {
            req.payload.logger.error(error);
        }
    }
    const hasSavePermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasSavePermission"])({
        collectionSlug: collectionConfig?.slug,
        docPermissions,
        globalSlug: globalConfig?.slug,
        isEditing: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEditing"])({
            id,
            collectionSlug: collectionConfig?.slug,
            globalSlug: globalConfig?.slug
        })
    });
    return {
        docPermissions,
        hasPublishPermission,
        hasSavePermission
    };
}; //# sourceMappingURL=getDocumentPermissions.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getIsLocked.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getIsLocked": (()=>getIsLocked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
const getIsLocked = async ({ id, collectionConfig, globalConfig, isEditing, req })=>{
    const entityConfig = collectionConfig || globalConfig;
    const entityHasLockingEnabled = entityConfig?.lockDocuments !== undefined ? entityConfig?.lockDocuments : true;
    if (!entityHasLockingEnabled || !isEditing) {
        return {
            isLocked: false
        };
    }
    const where = {};
    if (globalConfig) {
        where.globalSlug = {
            equals: globalConfig.slug
        };
    } else {
        where.and = [
            {
                'document.value': {
                    equals: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeID"])(id)
                }
            },
            {
                'document.relationTo': {
                    equals: collectionConfig.slug
                }
            }
        ];
    }
    const { docs } = await req.payload.find({
        collection: 'payload-locked-documents',
        depth: 1,
        overrideAccess: false,
        req,
        where
    });
    if (docs.length > 0) {
        const newEditor = docs[0].user?.value;
        const lastUpdateTime = new Date(docs[0].updatedAt).getTime();
        if (newEditor?.id !== req.user.id) {
            return {
                currentEditor: newEditor,
                isLocked: true,
                lastUpdateTime
            };
        }
    }
    return {
        isLocked: false
    };
}; //# sourceMappingURL=getIsLocked.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "meta": (()=>meta)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconDark$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png [app-rsc] (static) <export default as payloadFaviconDark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconLight$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png [app-rsc] (static) <export default as payloadFaviconLight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/qs-esm@7.0.2/node_modules/qs-esm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__staticOGImage$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/static-og-image.png [app-rsc] (static) <export default as staticOGImage>");
;
;
const defaultOpenGraph = {
    description: 'Payload is a headless CMS and application framework built with TypeScript, Node.js, and React.',
    siteName: 'Payload App',
    title: 'Payload App'
};
const meta = async (args)=>{
    const { defaultOGImageType, description, icons: customIcons, keywords, openGraph: openGraphFromProps, serverURL, title, titleSuffix } = args;
    const payloadIcons = [
        {
            type: 'image/png',
            rel: 'icon',
            sizes: '32x32',
            url: typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconDark$3e$__["payloadFaviconDark"] === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconDark$3e$__["payloadFaviconDark"]?.src : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconDark$3e$__["payloadFaviconDark"]
        },
        {
            type: 'image/png',
            media: '(prefers-color-scheme: dark)',
            rel: 'icon',
            sizes: '32x32',
            url: typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconLight$3e$__["payloadFaviconLight"] === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconLight$3e$__["payloadFaviconLight"]?.src : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__payloadFaviconLight$3e$__["payloadFaviconLight"]
        }
    ];
    let icons = payloadIcons;
    if (customIcons && typeof customIcons === 'object' && Array.isArray(customIcons)) {
        icons = customIcons;
    }
    const metaTitle = [
        title,
        titleSuffix
    ].filter(Boolean).join(' ');
    const ogTitle = `${typeof openGraphFromProps?.title === 'string' ? openGraphFromProps.title : title} ${titleSuffix}`;
    const mergedOpenGraph = {
        ...defaultOpenGraph || {},
        ...defaultOGImageType === 'dynamic' ? {
            images: [
                {
                    alt: ogTitle,
                    height: 630,
                    url: `/api/og${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.stringify({
                        description: openGraphFromProps?.description || defaultOpenGraph.description,
                        title: ogTitle
                    }, {
                        addQueryPrefix: true
                    })}`,
                    width: 1200
                }
            ]
        } : {},
        ...defaultOGImageType === 'static' ? {
            images: [
                {
                    alt: ogTitle,
                    height: 480,
                    url: typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__staticOGImage$3e$__["staticOGImage"] === 'object' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__staticOGImage$3e$__["staticOGImage"]?.src : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__$3c$export__default__as__staticOGImage$3e$__["staticOGImage"],
                    width: 640
                }
            ]
        } : {},
        title: ogTitle,
        ...openGraphFromProps || {}
    };
    return Promise.resolve({
        description,
        icons,
        keywords,
        metadataBase: new URL(serverURL || process.env.PAYLOAD_PUBLIC_SERVER_URL || `http://localhost:${process.env.PORT || 3000}`),
        openGraph: mergedOpenGraph,
        title: metaTitle
    });
}; //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
;
const generateMetadata = async ({ collectionConfig, config, globalConfig, i18n })=>{
    const entityLabel = collectionConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.singular, i18n) : globalConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(globalConfig.label, i18n) : '';
    return Promise.resolve((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        ...config.admin.meta || {},
        description: `API - ${entityLabel}`,
        keywords: 'API',
        serverURL: config.serverURL,
        title: `API - ${entityLabel}`,
        ...collectionConfig ? {
            ...collectionConfig?.admin.meta || {},
            ...collectionConfig?.admin?.components?.views?.edit?.api?.meta || {}
        } : {},
        ...globalConfig ? {
            ...globalConfig?.admin.meta || {},
            ...globalConfig?.admin?.components?.views?.edit?.api?.meta || {}
        } : {}
    }));
}; //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
;
const generateMetadata = async ({ collectionConfig, config, globalConfig, i18n, isEditing, view = 'default' })=>{
    const { t } = i18n;
    const entityLabel = collectionConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.singular, i18n) : globalConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(globalConfig.label, i18n) : '';
    const metaToUse = {
        ...config.admin.meta || {},
        description: `${isEditing ? t('general:editing') : t('general:creating')} - ${entityLabel}`,
        keywords: `${entityLabel}, Payload, CMS`,
        title: `${isEditing ? t('general:editing') : t('general:creating')} - ${entityLabel}`
    };
    const ogToUse = {
        title: `${isEditing ? t('general:edit') : t('general:edit')} - ${entityLabel}`,
        ...config.admin.meta.openGraph || {},
        ...collectionConfig ? {
            ...collectionConfig?.admin.meta?.openGraph || {},
            ...collectionConfig?.admin?.components?.views?.edit?.[view]?.meta?.openGraph || {}
        } : {},
        ...globalConfig ? {
            ...globalConfig?.admin.meta?.openGraph || {},
            ...globalConfig?.admin?.components?.views?.edit?.[view]?.meta?.openGraph || {}
        } : {}
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        ...metaToUse,
        openGraph: ogToUse,
        ...collectionConfig ? {
            ...collectionConfig?.admin.meta || {},
            ...collectionConfig?.admin?.components?.views?.edit?.[view]?.meta || {}
        } : {},
        ...globalConfig ? {
            ...globalConfig?.admin.meta || {},
            ...globalConfig?.admin?.components?.views?.edit?.[view]?.meta || {}
        } : {},
        serverURL: config.serverURL
    });
}; //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/meta.js [app-rsc] (ecmascript)");
;
const generateMetadata = async ({ collectionConfig, config, globalConfig, i18n, isEditing })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
        collectionConfig,
        config,
        globalConfig,
        i18n,
        isEditing,
        view: 'livePreview'
    }); //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateNotFoundMeta": (()=>generateNotFoundMeta)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateNotFoundMeta = async ({ config, i18n })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        description: i18n.t('general:pageNotFound'),
        keywords: `404 ${i18n.t('general:notFound')}`,
        serverURL: config.serverURL,
        title: i18n.t('general:notFound')
    }); //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
;
;
const generateMetadata = async ({ collectionConfig, config, globalConfig, i18n })=>{
    const { t } = i18n;
    let metaToUse = {
        ...config.admin.meta || {}
    };
    const doc = {} // TODO: figure this out
    ;
    const formattedCreatedAt = doc?.createdAt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatDate"])({
        date: doc.createdAt,
        i18n,
        pattern: config?.admin?.dateFormat
    }) : '';
    if (collectionConfig) {
        const useAsTitle = collectionConfig?.admin?.useAsTitle || 'id';
        const entityLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.singular, i18n);
        const titleFromData = doc?.[useAsTitle];
        metaToUse = {
            ...config.admin.meta || {},
            description: t('version:viewingVersion', {
                documentTitle: doc[useAsTitle],
                entityLabel
            }),
            title: `${t('version:version')}${formattedCreatedAt ? ` - ${formattedCreatedAt}` : ''}${titleFromData ? ` - ${titleFromData}` : ''} - ${entityLabel}`,
            ...collectionConfig?.admin?.meta || {},
            ...collectionConfig?.admin?.components?.views?.edit?.version?.meta || {}
        };
    }
    if (globalConfig) {
        const entityLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(globalConfig.label, i18n);
        metaToUse = {
            ...config.admin.meta || {},
            description: t('version:viewingVersionGlobal', {
                entityLabel
            }),
            title: `${t('version:version')}${formattedCreatedAt ? ` - ${formattedCreatedAt}` : ''}${entityLabel}`,
            ...globalConfig?.admin?.meta || {},
            ...globalConfig?.admin?.components?.views?.edit?.version?.meta || {}
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        ...metaToUse,
        serverURL: config.serverURL
    });
}; //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateMetadata": (()=>generateMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
;
const generateMetadata = async ({ collectionConfig, config, globalConfig, i18n })=>{
    const { t } = i18n;
    const entityLabel = collectionConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.singular, i18n) : globalConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(globalConfig.label, i18n) : '';
    let metaToUse = {
        ...config.admin.meta || {}
    };
    const data = {} // TODO: figure this out
    ;
    if (collectionConfig) {
        const useAsTitle = collectionConfig?.admin?.useAsTitle || 'id';
        const titleFromData = data?.[useAsTitle];
        metaToUse = {
            ...config.admin.meta || {},
            description: t('version:viewingVersions', {
                documentTitle: data?.[useAsTitle],
                entitySlug: collectionConfig.slug
            }),
            title: `${t('version:versions')}${titleFromData ? ` - ${titleFromData}` : ''} - ${entityLabel}`,
            ...collectionConfig?.admin.meta || {},
            ...collectionConfig?.admin?.components?.views?.edit?.versions?.meta || {}
        };
    }
    if (globalConfig) {
        metaToUse = {
            ...config.admin.meta || {},
            description: t('version:viewingVersionsGlobal', {
                entitySlug: globalConfig.slug
            }),
            title: `${t('version:versions')} - ${entityLabel}`,
            ...globalConfig?.admin.meta || {},
            ...globalConfig?.admin?.components?.views?.edit?.versions?.meta || {}
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        ...metaToUse,
        serverURL: config.serverURL
    });
}; //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "APIViewClient": (()=>APIViewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const APIViewClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call APIViewClient() from the server but APIViewClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js <module evaluation>", "APIViewClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "APIViewClient": (()=>APIViewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const APIViewClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call APIViewClient() from the server but APIViewClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js", "APIViewClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$client$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$client$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$client$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "APIView": (()=>APIView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.client.js [app-rsc] (ecmascript)");
;
;
;
const APIView = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIViewClient"], {});
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EditView": (()=>EditView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const EditView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditView() from the server but EditView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js <module evaluation>", "EditView");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EditView": (()=>EditView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const EditView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditView() from the server but EditView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js", "EditView");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LivePreviewClient": (()=>LivePreviewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const LivePreviewClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LivePreviewClient() from the server but LivePreviewClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js <module evaluation>", "LivePreviewClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LivePreviewClient": (()=>LivePreviewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const LivePreviewClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LivePreviewClient() from the server but LivePreviewClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js", "LivePreviewClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$client$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$client$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$client$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LivePreviewView": (()=>LivePreviewView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.client.js [app-rsc] (ecmascript)");
;
;
;
const LivePreviewView = async (props)=>{
    const { doc, initPageResult } = props;
    const { collectionConfig, globalConfig, locale, req } = initPageResult;
    let livePreviewConfig = req.payload.config?.admin?.livePreview;
    if (collectionConfig) {
        livePreviewConfig = {
            ...livePreviewConfig || {},
            ...collectionConfig.admin.livePreview || {}
        };
    }
    if (globalConfig) {
        livePreviewConfig = {
            ...livePreviewConfig || {},
            ...globalConfig.admin.livePreview || {}
        };
    }
    const breakpoints = [
        ...livePreviewConfig?.breakpoints || [],
        {
            name: 'responsive',
            height: '100%',
            label: 'Responsive',
            width: '100%'
        }
    ];
    const url = typeof livePreviewConfig?.url === 'function' ? await livePreviewConfig.url({
        collectionConfig,
        data: doc,
        globalConfig,
        locale,
        req,
        /**
       * @deprecated
       * Use `req.payload` instead. This will be removed in the next major version.
       */ payload: initPageResult.req.payload
    }) : livePreviewConfig?.url;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LivePreviewClient"], {
        breakpoints: breakpoints,
        initialData: doc,
        url: url
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FormHeader": (()=>FormHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
const baseClass = 'form-header';
function FormHeader({ description, heading }) {
    if (!heading) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: baseClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h1", {
                children: heading
            }),
            Boolean(description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                children: description
            })
        ]
    });
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateUnauthorizedMetadata": (()=>generateUnauthorizedMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
;
const generateUnauthorizedMetadata = async ({ config, i18n: { t } })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        description: t('error:unauthorized'),
        keywords: t('error:unauthorized'),
        serverURL: config.serverURL,
        title: t('error:unauthorized'),
        ...config.admin.meta || {}
    }); //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UnauthorizedView": (()=>UnauthorizedView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const Link = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
;
const baseClass = 'unauthorized';
const UnauthorizedView = ({ initPageResult })=>{
    const { req: { i18n, payload: { config: { admin: { routes: { logout: logoutRoute } }, routes: { admin: adminRoute } } } } } = initPageResult;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
        className: baseClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FormHeader"], {
                description: i18n.t('error:notAllowedToAccessPage'),
                heading: i18n.t('error:unauthorized')
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                className: `${baseClass}__button`,
                el: "link",
                Link: Link,
                size: "large",
                to: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
                    adminRoute,
                    path: logoutRoute
                }),
                children: i18n.t('authentication:logOut')
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$FormHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/FormHeader/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/getLatestVersion.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLatestVersion": (()=>getLatestVersion)
});
async function getLatestVersion(args) {
    const { slug, type = 'collection', parentID, payload, status } = args;
    const and = [
        {
            'version._status': {
                equals: status
            }
        }
    ];
    if (type === 'collection' && parentID) {
        and.push({
            parent: {
                equals: parentID
            }
        });
    }
    try {
        const sharedOptions = {
            depth: 0,
            limit: 1,
            sort: '-updatedAt',
            where: {
                and
            }
        };
        const response = type === 'collection' ? await payload.findVersions({
            collection: slug,
            ...sharedOptions
        }) : await payload.findGlobalVersions({
            slug,
            ...sharedOptions
        });
        if (!response.docs.length) {
            return null;
        }
        return {
            id: response.docs[0].id,
            updatedAt: response.docs[0].updatedAt
        };
    } catch (e) {
        payload.logger.error(e);
        return null;
    }
} //# sourceMappingURL=getLatestVersion.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultVersionView": (()=>DefaultVersionView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DefaultVersionView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultVersionView() from the server but DefaultVersionView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js <module evaluation>", "DefaultVersionView");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DefaultVersionView": (()=>DefaultVersionView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const DefaultVersionView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultVersionView() from the server but DefaultVersionView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js", "DefaultVersionView");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VersionView": (()=>VersionView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/getLatestVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/Default/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
const VersionView = async (props)=>{
    const { initPageResult, routeSegments } = props;
    const { collectionConfig, docID: id, globalConfig, permissions, req, req: { payload, payload: { config } = {}, user } = {} } = initPageResult;
    const versionID = routeSegments[routeSegments.length - 1];
    const collectionSlug = collectionConfig?.slug;
    const globalSlug = globalConfig?.slug;
    const { localization } = config;
    let docPermissions;
    let slug;
    let doc;
    let latestPublishedVersion = null;
    let latestDraftVersion = null;
    if (collectionSlug) {
        // /collections/:slug/:id/versions/:versionID
        slug = collectionSlug;
        docPermissions = permissions.collections[collectionSlug];
        try {
            doc = await payload.findVersionByID({
                id: versionID,
                collection: slug,
                depth: 1,
                locale: '*',
                overrideAccess: false,
                req,
                user
            });
            if (collectionConfig?.versions?.drafts) {
                latestDraftVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug,
                    type: 'collection',
                    parentID: id,
                    payload,
                    status: 'draft'
                });
                latestPublishedVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug,
                    type: 'collection',
                    parentID: id,
                    payload,
                    status: 'published'
                });
            }
        } catch (error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
    }
    if (globalSlug) {
        // /globals/:slug/versions/:versionID
        slug = globalSlug;
        docPermissions = permissions.globals[globalSlug];
        try {
            doc = await payload.findGlobalVersionByID({
                id: versionID,
                slug,
                depth: 1,
                locale: '*',
                overrideAccess: false,
                req,
                user
            });
            if (globalConfig?.versions?.drafts) {
                latestDraftVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug,
                    type: 'global',
                    payload,
                    status: 'draft'
                });
                latestPublishedVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug,
                    type: 'global',
                    payload,
                    status: 'published'
                });
            }
        } catch (error) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
    }
    const publishedNewerThanDraft = latestPublishedVersion?.updatedAt > latestDraftVersion?.updatedAt;
    if (publishedNewerThanDraft) {
        latestDraftVersion = {
            id: '',
            updatedAt: ''
        };
    }
    const localeOptions = localization && localization.locales.map(({ code, label })=>({
            label,
            value: code
        }));
    const latestVersion = latestPublishedVersion?.updatedAt > latestDraftVersion?.updatedAt ? latestPublishedVersion : latestDraftVersion;
    if (!doc) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$Default$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultVersionView"], {
        doc: doc,
        docPermissions: docPermissions,
        initialComparisonDoc: latestVersion,
        latestDraftVersion: latestDraftVersion?.id,
        latestPublishedVersion: latestPublishedVersion?.id,
        localeOptions: localeOptions,
        versionID: versionID
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AutosaveCell": (()=>AutosaveCell),
    "renderPill": (()=>renderPill)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AutosaveCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AutosaveCell() from the server but AutosaveCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js <module evaluation>", "AutosaveCell");
const renderPill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call renderPill() from the server but renderPill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js <module evaluation>", "renderPill");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AutosaveCell": (()=>AutosaveCell),
    "renderPill": (()=>renderPill)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AutosaveCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AutosaveCell() from the server but AutosaveCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js", "AutosaveCell");
const renderPill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call renderPill() from the server but renderPill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js", "renderPill");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$AutosaveCell$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$AutosaveCell$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$AutosaveCell$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CreatedAtCell": (()=>CreatedAtCell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CreatedAtCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CreatedAtCell() from the server but CreatedAtCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js <module evaluation>", "CreatedAtCell");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "CreatedAtCell": (()=>CreatedAtCell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const CreatedAtCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CreatedAtCell() from the server but CreatedAtCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js", "CreatedAtCell");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$CreatedAt$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$CreatedAt$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$CreatedAt$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IDCell": (()=>IDCell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const IDCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IDCell() from the server but IDCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js <module evaluation>", "IDCell");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "IDCell": (()=>IDCell)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const IDCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call IDCell() from the server but IDCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js", "IDCell");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$ID$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$ID$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$ID$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/buildColumns.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildVersionColumns": (()=>buildVersionColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$AutosaveCell$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/AutosaveCell/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$CreatedAt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/CreatedAt/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$ID$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/cells/ID/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const buildVersionColumns = ({ collectionConfig, docID, docs, globalConfig, i18n: { t }, latestDraftVersion, latestPublishedVersion })=>{
    const entityConfig = collectionConfig || globalConfig;
    const columns = [
        {
            accessor: 'updatedAt',
            active: true,
            field: {
                name: '',
                type: 'date'
            },
            Heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortColumn"], {
                Label: t('general:updatedAt'),
                name: "updatedAt"
            }),
            renderedCells: docs.map((doc, i)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$CreatedAt$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CreatedAtCell"], {
                    collectionSlug: collectionConfig?.slug,
                    docID: docID,
                    globalSlug: globalConfig?.slug,
                    rowData: {
                        id: doc.id,
                        updatedAt: doc.updatedAt
                    }
                }, i);
            })
        },
        {
            accessor: 'id',
            active: true,
            field: {
                name: '',
                type: 'text'
            },
            Heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortColumn"], {
                disable: true,
                Label: t('version:versionID'),
                name: "id"
            }),
            renderedCells: docs.map((doc, i)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$ID$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IDCell"], {
                    id: doc.id
                }, i);
            })
        }
    ];
    if (entityConfig?.versions?.drafts || entityConfig?.versions?.drafts && entityConfig.versions.drafts?.autosave) {
        columns.push({
            accessor: '_status',
            active: true,
            field: {
                name: '',
                type: 'checkbox'
            },
            Heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortColumn"], {
                disable: true,
                Label: t('version:status'),
                name: "status"
            }),
            renderedCells: docs.map((doc, i)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$cells$2f$AutosaveCell$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AutosaveCell"], {
                    latestDraftVersion: latestDraftVersion,
                    latestPublishedVersion: latestPublishedVersion,
                    rowData: doc
                }, i);
            })
        });
    }
    return columns;
}; //# sourceMappingURL=buildColumns.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VersionsViewClient": (()=>VersionsViewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const VersionsViewClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VersionsViewClient() from the server but VersionsViewClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js <module evaluation>", "VersionsViewClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VersionsViewClient": (()=>VersionsViewClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const VersionsViewClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call VersionsViewClient() from the server but VersionsViewClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js", "VersionsViewClient");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$client$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$client$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$client$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "VersionsView": (()=>VersionsView),
    "baseClass": (()=>baseClass)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$buildColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/buildColumns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/getLatestVersion.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const baseClass = 'versions';
const VersionsView = async (props)=>{
    const { initPageResult, searchParams } = props;
    const { collectionConfig, docID: id, globalConfig, req, req: { i18n, payload, payload: { config }, t, user } } = initPageResult;
    const collectionSlug = collectionConfig?.slug;
    const globalSlug = globalConfig?.slug;
    const { limit, page, sort } = searchParams;
    const { localization, routes: { api: apiRoute }, serverURL } = config;
    let versionsData;
    let limitToUse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(limit) ? Number(limit) : undefined;
    let latestPublishedVersion = null;
    let latestDraftVersion = null;
    if (collectionSlug) {
        limitToUse = limitToUse || collectionConfig.admin.pagination.defaultLimit;
        const whereQuery = {
            and: [
                {
                    parent: {
                        equals: id
                    }
                }
            ]
        };
        if (localization && collectionConfig?.versions?.drafts) {
            whereQuery.and.push({
                snapshot: {
                    not_equals: true
                }
            });
        }
        try {
            versionsData = await payload.findVersions({
                collection: collectionSlug,
                depth: 0,
                limit: limitToUse,
                overrideAccess: false,
                page: page ? parseInt(page.toString(), 10) : undefined,
                req,
                sort: sort,
                user,
                where: whereQuery
            });
            if (collectionConfig?.versions?.drafts) {
                latestDraftVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug: collectionSlug,
                    type: 'collection',
                    parentID: id,
                    payload,
                    status: 'draft'
                });
                latestPublishedVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug: collectionSlug,
                    type: 'collection',
                    parentID: id,
                    payload,
                    status: 'published'
                });
            }
        } catch (error) {
            payload.logger.error(error);
        }
    }
    if (globalSlug) {
        limitToUse = limitToUse || 10;
        const whereQuery = localization && globalConfig?.versions?.drafts ? {
            snapshot: {
                not_equals: true
            }
        } : {};
        try {
            versionsData = await payload.findGlobalVersions({
                slug: globalSlug,
                depth: 0,
                limit: limitToUse,
                overrideAccess: false,
                page: page ? parseInt(page, 10) : undefined,
                req,
                sort: sort,
                user,
                where: whereQuery
            });
            if (globalConfig?.versions?.drafts) {
                latestDraftVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug: globalSlug,
                    type: 'global',
                    payload,
                    status: 'draft'
                });
                latestPublishedVersion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$getLatestVersion$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestVersion"])({
                    slug: globalSlug,
                    type: 'global',
                    payload,
                    status: 'published'
                });
            }
        } catch (error) {
            payload.logger.error(error);
        }
        if (!versionsData) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
    }
    const fetchURL = collectionSlug ? `${serverURL}${apiRoute}/${collectionSlug}/versions` : globalSlug ? `${serverURL}${apiRoute}/globals/${globalSlug}/versions` : '';
    const publishedNewerThanDraft = latestPublishedVersion?.updatedAt > latestDraftVersion?.updatedAt;
    if (publishedNewerThanDraft) {
        latestDraftVersion = {
            id: '',
            updatedAt: ''
        };
    }
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$buildColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildVersionColumns"])({
        collectionConfig,
        config,
        docID: id,
        docs: versionsData?.docs,
        globalConfig,
        i18n,
        latestDraftVersion: latestDraftVersion?.id,
        latestPublishedVersion: latestPublishedVersion?.id
    });
    const pluralLabel = collectionConfig?.labels?.plural ? typeof collectionConfig.labels.plural === 'function' ? collectionConfig.labels.plural({
        t
    }) : collectionConfig.labels.plural : globalConfig?.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SetDocumentStepNav"], {
                collectionSlug: collectionConfig?.slug,
                globalSlug: globalConfig?.slug,
                id: id,
                pluralLabel: pluralLabel,
                useAsTitle: collectionConfig?.admin?.useAsTitle || globalConfig?.slug,
                view: i18n.t('version:versions')
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("main", {
                className: baseClass,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Gutter"], {
                    className: `${baseClass}__wrap`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListQueryProvider"], {
                        collectionSlug: collectionSlug,
                        data: versionsData,
                        defaultLimit: limitToUse,
                        defaultSort: sort,
                        modifySearchParams: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VersionsViewClient"], {
                            baseClass: baseClass,
                            columns: columns,
                            fetchURL: fetchURL,
                            paginationLimits: collectionConfig?.admin?.pagination?.limits
                        })
                    })
                })
            })
        ]
    });
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getCustomViewByKey.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCustomViewByKey": (()=>getCustomViewByKey)
});
const getCustomViewByKey = (views, customViewKey)=>{
    return typeof views?.edit?.[customViewKey] === 'object' && 'Component' in views.edit[customViewKey] ? views?.edit?.[customViewKey].Component : null;
}; //# sourceMappingURL=getCustomViewByKey.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Root/isPathMatchingRoute.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isPathMatchingRoute": (()=>isPathMatchingRoute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$path$2d$to$2d$regexp$40$6$2e$3$2e$0$2f$node_modules$2f$path$2d$to$2d$regexp$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/path-to-regexp@6.3.0/node_modules/path-to-regexp/dist.es2015/index.js [app-rsc] (ecmascript)");
;
const isPathMatchingRoute = ({ currentRoute, exact, path: viewPath, sensitive, strict })=>{
    const keys = [];
    // run the view path through `pathToRegexp` to resolve any dynamic segments
    // i.e. `/admin/custom-view/:id` -> `/admin/custom-view/123`
    const regex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$path$2d$to$2d$regexp$40$6$2e$3$2e$0$2f$node_modules$2f$path$2d$to$2d$regexp$2f$dist$2e$es2015$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(viewPath, keys, {
        sensitive,
        strict
    });
    const match = regex.exec(currentRoute);
    const viewRoute = match?.[0] || viewPath;
    if (exact) {
        return currentRoute === viewRoute;
    }
    if (!exact) {
        return viewRoute.startsWith(currentRoute);
    }
}; //# sourceMappingURL=isPathMatchingRoute.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getCustomViewByRoute.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCustomViewByRoute": (()=>getCustomViewByRoute)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$isPathMatchingRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Root/isPathMatchingRoute.js [app-rsc] (ecmascript)");
;
const getCustomViewByRoute = ({ baseRoute, currentRoute, views })=>{
    if (typeof views?.edit === 'object') {
        let viewKey;
        const foundViewConfig = Object.entries(views.edit).find(([key, view])=>{
            if (typeof view === 'object' && 'path' in view) {
                const viewPath = `${baseRoute}${view.path}`;
                const isMatching = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Root$2f$isPathMatchingRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPathMatchingRoute"])({
                    currentRoute,
                    exact: true,
                    path: viewPath
                });
                if (isMatching) {
                    viewKey = key;
                }
                return isMatching;
            }
            return false;
        })?.[1];
        if (foundViewConfig && 'Component' in foundViewConfig) {
            return {
                Component: foundViewConfig.Component,
                viewKey
            };
        }
    }
    return {
        Component: null
    };
}; //# sourceMappingURL=getCustomViewByRoute.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getViewsFromConfig.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getViewsFromConfig": (()=>getViewsFromConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getCustomViewByKey.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getCustomViewByRoute.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Unauthorized/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
;
;
;
;
const getViewsFromConfig = ({ collectionConfig, config, docPermissions, globalConfig, overrideDocPermissions, routeSegments })=>{
    // Conditionally import and lazy load the default view
    let DefaultView = null;
    let CustomView = null;
    let ErrorView = null;
    let viewKey;
    const { routes: { admin: adminRoute } } = config;
    const views = collectionConfig && collectionConfig?.admin?.components?.views || globalConfig && globalConfig?.admin?.components?.views;
    const livePreviewEnabled = collectionConfig && collectionConfig?.admin?.livePreview || config?.admin?.livePreview?.collections?.includes(collectionConfig?.slug) || globalConfig && globalConfig?.admin?.livePreview || config?.admin?.livePreview?.globals?.includes(globalConfig?.slug);
    if (collectionConfig) {
        const [collectionEntity, collectionSlug, segment3, segment4, segment5, ...remainingSegments] = routeSegments;
        if (!overrideDocPermissions && !docPermissions?.read) {
            throw new Error('not-found');
        } else {
            // `../:id`, or `../create`
            switch(routeSegments.length){
                case 3:
                    {
                        switch(segment3){
                            case 'create':
                                {
                                    if (!overrideDocPermissions && 'create' in docPermissions && docPermissions.create) {
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'default')
                                        };
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditView"]
                                        };
                                    } else {
                                        ErrorView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnauthorizedView"]
                                        };
                                    }
                                    break;
                                }
                            default:
                                {
                                    const baseRoute = [
                                        adminRoute !== '/' && adminRoute,
                                        'collections',
                                        collectionSlug,
                                        segment3
                                    ].filter(Boolean).join('/');
                                    const currentRoute = [
                                        baseRoute,
                                        segment4,
                                        segment5,
                                        ...remainingSegments
                                    ].filter(Boolean).join('/');
                                    const { Component: CustomViewComponent, viewKey: customViewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                                        baseRoute,
                                        currentRoute,
                                        views
                                    });
                                    if (customViewKey) {
                                        viewKey = customViewKey;
                                        CustomView = {
                                            ComponentConfig: CustomViewComponent
                                        };
                                    } else {
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'default')
                                        };
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditView"]
                                        };
                                    }
                                    break;
                                }
                        }
                        break;
                    }
                // `../:id/api`, `../:id/preview`, `../:id/versions`, etc
                case 4:
                    {
                        switch(segment4){
                            case 'api':
                                {
                                    if (collectionConfig?.admin?.hideAPIURL !== true) {
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'api')
                                        };
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIView"]
                                        };
                                    }
                                    break;
                                }
                            case 'preview':
                                {
                                    if (livePreviewEnabled) {
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LivePreviewView"]
                                        };
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'livePreview')
                                        };
                                    }
                                    break;
                                }
                            case 'versions':
                                {
                                    if (!overrideDocPermissions && docPermissions?.readVersions) {
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'versions')
                                        };
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VersionsView"]
                                        };
                                    } else {
                                        ErrorView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnauthorizedView"]
                                        };
                                    }
                                    break;
                                }
                            default:
                                {
                                    const baseRoute = [
                                        adminRoute !== '/' && adminRoute,
                                        'collections',
                                        collectionSlug,
                                        segment3
                                    ].filter(Boolean).join('/');
                                    const currentRoute = [
                                        baseRoute,
                                        segment4,
                                        segment5,
                                        ...remainingSegments
                                    ].filter(Boolean).join('/');
                                    const { Component: CustomViewComponent, viewKey: customViewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                                        baseRoute,
                                        currentRoute,
                                        views
                                    });
                                    if (customViewKey) {
                                        viewKey = customViewKey;
                                        CustomView = {
                                            ComponentConfig: CustomViewComponent
                                        };
                                    }
                                    break;
                                }
                        }
                        break;
                    }
                // `../:id/versions/:version`, etc
                default:
                    {
                        if (segment4 === 'versions') {
                            if (!overrideDocPermissions && docPermissions?.readVersions) {
                                CustomView = {
                                    ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'version')
                                };
                                DefaultView = {
                                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VersionView"]
                                };
                            } else {
                                ErrorView = {
                                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnauthorizedView"]
                                };
                            }
                        } else {
                            const baseRoute = [
                                adminRoute !== '/' && adminRoute,
                                collectionEntity,
                                collectionSlug,
                                segment3
                            ].filter(Boolean).join('/');
                            const currentRoute = [
                                baseRoute,
                                segment4,
                                segment5,
                                ...remainingSegments
                            ].filter(Boolean).join('/');
                            const { Component: CustomViewComponent, viewKey: customViewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                                baseRoute,
                                currentRoute,
                                views
                            });
                            if (customViewKey) {
                                viewKey = customViewKey;
                                CustomView = {
                                    ComponentConfig: CustomViewComponent
                                };
                            }
                        }
                        break;
                    }
            }
        }
    }
    if (globalConfig) {
        const [globalEntity, globalSlug, segment3, ...remainingSegments] = routeSegments;
        if (!overrideDocPermissions && !docPermissions?.read) {
            throw new Error('not-found');
        } else {
            switch(routeSegments.length){
                case 2:
                    {
                        CustomView = {
                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'default')
                        };
                        DefaultView = {
                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditView"]
                        };
                        break;
                    }
                case 3:
                    {
                        // `../:slug/api`, `../:slug/preview`, `../:slug/versions`, etc
                        switch(segment3){
                            case 'api':
                                {
                                    if (globalConfig?.admin?.hideAPIURL !== true) {
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'api')
                                        };
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIView"]
                                        };
                                    }
                                    break;
                                }
                            case 'preview':
                                {
                                    if (livePreviewEnabled) {
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LivePreviewView"]
                                        };
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'livePreview')
                                        };
                                    }
                                    break;
                                }
                            case 'versions':
                                {
                                    if (!overrideDocPermissions && docPermissions?.readVersions) {
                                        CustomView = {
                                            ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'versions')
                                        };
                                        DefaultView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VersionsView"]
                                        };
                                    } else {
                                        ErrorView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnauthorizedView"]
                                        };
                                    }
                                    break;
                                }
                            default:
                                {
                                    if (!overrideDocPermissions && docPermissions?.read) {
                                        const baseRoute = [
                                            adminRoute,
                                            globalEntity,
                                            globalSlug,
                                            segment3
                                        ].filter(Boolean).join('/');
                                        const currentRoute = [
                                            baseRoute,
                                            segment3,
                                            ...remainingSegments
                                        ].filter(Boolean).join('/');
                                        const { Component: CustomViewComponent, viewKey: customViewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                                            baseRoute,
                                            currentRoute,
                                            views
                                        });
                                        if (customViewKey) {
                                            viewKey = customViewKey;
                                            CustomView = {
                                                ComponentConfig: CustomViewComponent
                                            };
                                        } else {
                                            DefaultView = {
                                                Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditView"]
                                            };
                                        }
                                    } else {
                                        ErrorView = {
                                            Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnauthorizedView"]
                                        };
                                    }
                                    break;
                                }
                        }
                        break;
                    }
                default:
                    {
                        // `../:slug/versions/:version`, etc
                        if (segment3 === 'versions') {
                            if (!overrideDocPermissions && docPermissions?.readVersions) {
                                CustomView = {
                                    ComponentConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByKey$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByKey"])(views, 'version')
                                };
                                DefaultView = {
                                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VersionView"]
                                };
                            } else {
                                ErrorView = {
                                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Unauthorized$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UnauthorizedView"]
                                };
                            }
                        } else {
                            const baseRoute = [
                                adminRoute !== '/' && adminRoute,
                                'globals',
                                globalSlug
                            ].filter(Boolean).join('/');
                            const currentRoute = [
                                baseRoute,
                                segment3,
                                ...remainingSegments
                            ].filter(Boolean).join('/');
                            const { Component: CustomViewComponent, viewKey: customViewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getCustomViewByRoute$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCustomViewByRoute"])({
                                baseRoute,
                                currentRoute,
                                views
                            });
                            if (customViewKey) {
                                viewKey = customViewKey;
                                CustomView = {
                                    ComponentConfig: CustomViewComponent
                                };
                            }
                        }
                        break;
                    }
            }
        }
    }
    return {
        CustomView,
        DefaultView,
        ErrorView,
        viewKey
    };
}; //# sourceMappingURL=getViewsFromConfig.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getMetaBySegment.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getMetaBySegment": (()=>getMetaBySegment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/getNextRequestI18n.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/API/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Edit/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/LivePreview/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Version/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Versions/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getViewsFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getViewsFromConfig.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const getMetaBySegment = async ({ collectionConfig, config, globalConfig, params })=>{
    const { segments } = params;
    let fn = null;
    const [segmentOne] = segments;
    const isCollection = segmentOne === 'collections';
    const isGlobal = segmentOne === 'globals';
    const isEditing = isGlobal || Boolean(isCollection && segments?.length > 2 && segments[2] !== 'create');
    if (isCollection) {
        // `/:collection/:id`
        if (params.segments.length === 3) {
            fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
        }
        // `/:collection/:id/:view`
        if (params.segments.length === 4) {
            switch(params.segments[3]){
                case 'api':
                    // `/:collection/:id/api`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                case 'preview':
                    // `/:collection/:id/preview`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                case 'versions':
                    // `/:collection/:id/versions`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                default:
                    break;
            }
        }
        // `/:collection/:id/:slug-1/:slug-2`
        if (params.segments.length === 5) {
            switch(params.segments[3]){
                case 'versions':
                    // `/:collection/:id/versions/:version`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                default:
                    break;
            }
        }
    }
    if (isGlobal) {
        // `/:global`
        if (params.segments?.length === 2) {
            fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
        }
        // `/:global/:view`
        if (params.segments?.length === 3) {
            switch(params.segments[2]){
                case 'api':
                    // `/:global/api`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$API$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                case 'preview':
                    // `/:global/preview`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$LivePreview$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                case 'versions':
                    // `/:global/versions`
                    fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Versions$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
                    break;
                default:
                    break;
            }
        }
        // `/:global/versions/:version`
        if (params.segments?.length === 4 && params.segments[2] === 'versions') {
            fn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Version$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"];
        }
    }
    const i18n = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$getNextRequestI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextRequestI18n"])({
        config
    });
    if (typeof fn === 'function') {
        return fn({
            collectionConfig,
            config,
            globalConfig,
            i18n,
            isEditing
        });
    } else {
        const { viewKey } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getViewsFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getViewsFromConfig"])({
            collectionConfig,
            config,
            globalConfig,
            overrideDocPermissions: true,
            routeSegments: typeof segments === 'string' ? [
                segments
            ] : segments
        });
        if (viewKey) {
            const customViewConfig = collectionConfig?.admin?.components?.views?.edit?.[viewKey] || globalConfig?.admin?.components?.views?.edit?.[viewKey];
            if (customViewConfig) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Edit$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])({
                    collectionConfig,
                    config,
                    globalConfig,
                    i18n,
                    isEditing,
                    view: viewKey
                });
            }
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateNotFoundMeta"])({
        config,
        i18n
    });
}; //# sourceMappingURL=getMetaBySegment.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getVersions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getVersions": (()=>getVersions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
;
const getVersions = async ({ id: idArg, collectionConfig, doc, docPermissions, globalConfig, locale, payload, user })=>{
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeID"])(idArg);
    let publishedDoc;
    let hasPublishedDoc = false;
    let mostRecentVersionIsAutosaved = false;
    let unpublishedVersionCount = 0;
    let versionCount = 0;
    const entityConfig = collectionConfig || globalConfig;
    const versionsConfig = entityConfig?.versions;
    const shouldFetchVersions = Boolean(versionsConfig && docPermissions?.readVersions);
    if (!shouldFetchVersions) {
        const hasPublishedDoc = Boolean(collectionConfig && id || globalConfig);
        return {
            hasPublishedDoc,
            mostRecentVersionIsAutosaved,
            unpublishedVersionCount,
            versionCount
        };
    }
    if (collectionConfig) {
        if (!id) {
            return {
                hasPublishedDoc,
                mostRecentVersionIsAutosaved,
                unpublishedVersionCount,
                versionCount
            };
        }
        if (versionsConfig?.drafts) {
            // Find out if a published document exists
            if (doc?._status === 'published') {
                publishedDoc = doc;
            } else {
                publishedDoc = (await payload.find({
                    collection: collectionConfig.slug,
                    depth: 0,
                    limit: 1,
                    locale: locale || undefined,
                    pagination: false,
                    select: {
                        updatedAt: true
                    },
                    user,
                    where: {
                        and: [
                            {
                                or: [
                                    {
                                        _status: {
                                            equals: 'published'
                                        }
                                    },
                                    {
                                        _status: {
                                            exists: false
                                        }
                                    }
                                ]
                            },
                            {
                                id: {
                                    equals: id
                                }
                            }
                        ]
                    }
                }))?.docs?.[0];
            }
            if (publishedDoc) {
                hasPublishedDoc = true;
            }
            if (versionsConfig.drafts?.autosave) {
                const mostRecentVersion = await payload.findVersions({
                    collection: collectionConfig.slug,
                    depth: 0,
                    limit: 1,
                    select: {
                        autosave: true
                    },
                    user,
                    where: {
                        and: [
                            {
                                parent: {
                                    equals: id
                                }
                            }
                        ]
                    }
                });
                if (mostRecentVersion.docs[0] && 'autosave' in mostRecentVersion.docs[0] && mostRecentVersion.docs[0].autosave) {
                    mostRecentVersionIsAutosaved = true;
                }
            }
            if (publishedDoc?.updatedAt) {
                ({ totalDocs: unpublishedVersionCount } = await payload.countVersions({
                    collection: collectionConfig.slug,
                    user,
                    where: {
                        and: [
                            {
                                parent: {
                                    equals: id
                                }
                            },
                            {
                                'version._status': {
                                    equals: 'draft'
                                }
                            },
                            {
                                updatedAt: {
                                    greater_than: publishedDoc.updatedAt
                                }
                            }
                        ]
                    }
                }));
            }
        }
        ({ totalDocs: versionCount } = await payload.countVersions({
            collection: collectionConfig.slug,
            depth: 0,
            user,
            where: {
                and: [
                    {
                        parent: {
                            equals: id
                        }
                    }
                ]
            }
        }));
    }
    if (globalConfig) {
        // Find out if a published document exists
        if (versionsConfig?.drafts) {
            if (doc?._status === 'published') {
                publishedDoc = doc;
            } else {
                publishedDoc = await payload.findGlobal({
                    slug: globalConfig.slug,
                    depth: 0,
                    locale,
                    select: {
                        updatedAt: true
                    },
                    user
                });
            }
            if (publishedDoc?._status === 'published') {
                hasPublishedDoc = true;
            }
            if (versionsConfig.drafts?.autosave) {
                const mostRecentVersion = await payload.findGlobalVersions({
                    slug: globalConfig.slug,
                    limit: 1,
                    select: {
                        autosave: true
                    },
                    user
                });
                if (mostRecentVersion.docs[0] && 'autosave' in mostRecentVersion.docs[0] && mostRecentVersion.docs[0].autosave) {
                    mostRecentVersionIsAutosaved = true;
                }
            }
            if (publishedDoc?.updatedAt) {
                ({ totalDocs: unpublishedVersionCount } = await payload.countGlobalVersions({
                    depth: 0,
                    global: globalConfig.slug,
                    user,
                    where: {
                        and: [
                            {
                                'version._status': {
                                    equals: 'draft'
                                }
                            },
                            {
                                updatedAt: {
                                    greater_than: publishedDoc.updatedAt
                                }
                            }
                        ]
                    }
                }));
            }
        }
        ({ totalDocs: versionCount } = await payload.countGlobalVersions({
            depth: 0,
            global: globalConfig.slug,
            user
        }));
    }
    return {
        hasPublishedDoc,
        mostRecentVersionIsAutosaved,
        unpublishedVersionCount,
        versionCount
    };
}; //# sourceMappingURL=getVersions.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/renderDocumentSlots.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renderDocumentSlots": (()=>renderDocumentSlots),
    "renderDocumentSlotsHandler": (()=>renderDocumentSlotsHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocumentPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
const renderDocumentSlots = (args)=>{
    const { collectionConfig, globalConfig, hasSavePermission, req } = args;
    const components = {};
    const unsavedDraftWithValidations = undefined;
    const isPreviewEnabled = collectionConfig?.admin?.preview || globalConfig?.admin?.preview;
    const serverProps = {
        i18n: req.i18n,
        payload: req.payload,
        user: req.user
    };
    const CustomPreviewButton = collectionConfig?.admin?.components?.edit?.PreviewButton || globalConfig?.admin?.components?.elements?.PreviewButton;
    if (isPreviewEnabled && CustomPreviewButton) {
        components.PreviewButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            Component: CustomPreviewButton,
            importMap: req.payload.importMap,
            serverProps
        });
    }
    const descriptionFromConfig = collectionConfig?.admin?.description || globalConfig?.admin?.description;
    const staticDescription = typeof descriptionFromConfig === 'function' ? descriptionFromConfig({
        t: req.i18n.t
    }) : descriptionFromConfig;
    const CustomDescription = collectionConfig?.admin?.components?.Description || globalConfig?.admin?.components?.elements?.Description;
    const hasDescription = CustomDescription || staticDescription;
    if (hasDescription) {
        components.Description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps: {
                description: staticDescription
            },
            Component: CustomDescription,
            Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ViewDescription"],
            importMap: req.payload.importMap,
            serverProps
        });
    }
    if (hasSavePermission) {
        if (collectionConfig?.versions?.drafts || globalConfig?.versions?.drafts) {
            const CustomPublishButton = collectionConfig?.admin?.components?.edit?.PublishButton || globalConfig?.admin?.components?.elements?.PublishButton;
            if (CustomPublishButton) {
                components.PublishButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    Component: CustomPublishButton,
                    importMap: req.payload.importMap,
                    serverProps
                });
            }
            const CustomSaveDraftButton = collectionConfig?.admin?.components?.edit?.SaveDraftButton || globalConfig?.admin?.components?.elements?.SaveDraftButton;
            const draftsEnabled = collectionConfig?.versions?.drafts && !collectionConfig?.versions?.drafts?.autosave || globalConfig?.versions?.drafts && !globalConfig?.versions?.drafts?.autosave;
            if ((draftsEnabled || unsavedDraftWithValidations) && CustomSaveDraftButton) {
                components.SaveDraftButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    Component: CustomSaveDraftButton,
                    importMap: req.payload.importMap,
                    serverProps
                });
            }
        } else {
            const CustomSaveButton = collectionConfig?.admin?.components?.edit?.SaveButton || globalConfig?.admin?.components?.elements?.SaveButton;
            if (CustomSaveButton) {
                components.SaveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    Component: CustomSaveButton,
                    importMap: req.payload.importMap,
                    serverProps
                });
            }
        }
    }
    return components;
};
const renderDocumentSlotsHandler = async (args)=>{
    const { collectionSlug, req } = args;
    const collectionConfig = req.payload.collections[collectionSlug]?.config;
    if (!collectionConfig) {
        throw new Error(req.t('error:incorrectCollection'));
    }
    const { docPermissions, hasSavePermission } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentPermissions"])({
        collectionConfig,
        data: {},
        req
    });
    return renderDocumentSlots({
        collectionConfig,
        hasSavePermission,
        permissions: docPermissions,
        req
    });
}; //# sourceMappingURL=renderDocumentSlots.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Document": (()=>Document),
    "generateMetadata": (()=>generateMetadata),
    "renderDocument": (()=>renderDocument)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/elements/DocumentHeader/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/NotFound/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocPreferences.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocumentData.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getDocumentPermissions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getIsLocked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getIsLocked.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getMetaBySegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getMetaBySegment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getVersions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getViewsFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/getViewsFromConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$renderDocumentSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/renderDocumentSlots.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const generateMetadata = async (args)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getMetaBySegment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMetaBySegment"])(args);
const renderDocument = async ({ disableActions, drawerSlug, importMap, initialData, initPageResult, overrideEntityVisibility, params, redirectAfterDelete, redirectAfterDuplicate, searchParams })=>{
    const { collectionConfig, docID: idFromArgs, globalConfig, locale, permissions, req, req: { i18n, payload, payload: { config, config: { routes: { admin: adminRoute, api: apiRoute }, serverURL } }, user }, visibleEntities } = initPageResult;
    const segments = Array.isArray(params?.segments) ? params.segments : [];
    const collectionSlug = collectionConfig?.slug || undefined;
    const globalSlug = globalConfig?.slug || undefined;
    let isEditing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEditing"])({
        id: idFromArgs,
        collectionSlug,
        globalSlug
    });
    let RootViewOverride;
    let CustomView;
    let DefaultView;
    let ErrorView;
    let apiURL;
    // Fetch the doc required for the view
    let doc = initialData || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentData$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentData"])({
        id: idFromArgs,
        collectionSlug,
        globalSlug,
        locale,
        payload,
        user
    });
    if (isEditing && !doc) {
        throw new Error('not-found');
    }
    const [docPreferences, { docPermissions, hasPublishPermission, hasSavePermission }, { currentEditor, isLocked, lastUpdateTime }] = await Promise.all([
        // Get document preferences
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocPreferences$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocPreferences"])({
            id: idFromArgs,
            collectionSlug,
            globalSlug,
            payload,
            user
        }),
        // Get permissions
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getDocumentPermissions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDocumentPermissions"])({
            id: idFromArgs,
            collectionConfig,
            data: doc,
            globalConfig,
            req
        }),
        // Fetch document lock state
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getIsLocked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsLocked"])({
            id: idFromArgs,
            collectionConfig,
            globalConfig,
            isEditing,
            req
        })
    ]);
    const [{ hasPublishedDoc, mostRecentVersionIsAutosaved, unpublishedVersionCount, versionCount }, { state: formState }] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getVersions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVersions"])({
            id: idFromArgs,
            collectionConfig,
            doc,
            docPermissions,
            globalConfig,
            locale: locale?.code,
            payload,
            user
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormState"])({
            id: idFromArgs,
            collectionSlug,
            data: doc,
            docPermissions,
            docPreferences,
            fallbackLocale: false,
            globalSlug,
            locale: locale?.code,
            operation: collectionSlug && idFromArgs || globalSlug ? 'update' : 'create',
            renderAllFields: true,
            req,
            schemaPath: collectionSlug || globalSlug
        })
    ]);
    const serverProps = {
        doc,
        i18n,
        initPageResult,
        locale,
        params,
        payload,
        permissions,
        routeSegments: segments,
        searchParams,
        user
    };
    if (collectionConfig) {
        if (!visibleEntities?.collections?.find((visibleSlug)=>visibleSlug === collectionSlug) && !overrideEntityVisibility) {
            throw new Error('not-found');
        }
        const params = new URLSearchParams();
        if (collectionConfig.versions?.drafts) {
            params.append('draft', 'true');
        }
        if (locale?.code) {
            params.append('locale', locale.code);
        }
        const apiQueryParams = `?${params.toString()}`;
        apiURL = `${serverURL}${apiRoute}/${collectionSlug}/${idFromArgs}${apiQueryParams}`;
        RootViewOverride = collectionConfig?.admin?.components?.views?.edit?.root && 'Component' in collectionConfig.admin.components.views.edit.root ? collectionConfig?.admin?.components?.views?.edit?.root?.Component : null;
        if (!RootViewOverride) {
            const collectionViews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getViewsFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getViewsFromConfig"])({
                collectionConfig,
                config,
                docPermissions,
                routeSegments: segments
            });
            CustomView = collectionViews?.CustomView;
            DefaultView = collectionViews?.DefaultView;
            ErrorView = collectionViews?.ErrorView;
        }
        if (!CustomView && !DefaultView && !RootViewOverride && !ErrorView) {
            ErrorView = {
                Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundView"]
            };
        }
    }
    if (globalConfig) {
        if (!visibleEntities?.globals?.find((visibleSlug)=>visibleSlug === globalSlug)) {
            throw new Error('not-found');
        }
        const params = new URLSearchParams({
            locale: locale?.code
        });
        if (globalConfig.versions?.drafts) {
            params.append('draft', 'true');
        }
        if (locale?.code) {
            params.append('locale', locale.code);
        }
        const apiQueryParams = `?${params.toString()}`;
        apiURL = `${serverURL}${apiRoute}/${globalSlug}${apiQueryParams}`;
        RootViewOverride = globalConfig?.admin?.components?.views?.edit?.root && 'Component' in globalConfig.admin.components.views.edit.root ? globalConfig?.admin?.components?.views?.edit?.root?.Component : null;
        if (!RootViewOverride) {
            const globalViews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$getViewsFromConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getViewsFromConfig"])({
                config,
                docPermissions,
                globalConfig,
                routeSegments: segments
            });
            CustomView = globalViews?.CustomView;
            DefaultView = globalViews?.DefaultView;
            ErrorView = globalViews?.ErrorView;
            if (!CustomView && !DefaultView && !RootViewOverride && !ErrorView) {
                ErrorView = {
                    Component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$NotFound$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NotFoundView"]
                };
            }
        }
    }
    /**
  * Handle case where autoSave is enabled and the document is being created
  * => create document and redirect
  */ const shouldAutosave = hasSavePermission && (collectionConfig?.versions?.drafts && collectionConfig?.versions?.drafts?.autosave || globalConfig?.versions?.drafts && globalConfig?.versions?.drafts?.autosave);
    const validateDraftData = collectionConfig?.versions?.drafts && collectionConfig?.versions?.drafts?.validate;
    let id = idFromArgs;
    if (shouldAutosave && !validateDraftData && !idFromArgs && collectionSlug) {
        doc = await payload.create({
            collection: collectionSlug,
            data: initialData || {},
            depth: 0,
            draft: true,
            fallbackLocale: false,
            locale: locale?.code,
            req,
            user
        });
        if (doc?.id) {
            id = doc.id;
            isEditing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEditing"])({
                id: doc.id,
                collectionSlug,
                globalSlug
            });
            if (!drawerSlug) {
                const redirectURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
                    adminRoute,
                    path: `/collections/${collectionSlug}/${doc.id}`,
                    serverURL
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(redirectURL);
            }
        } else {
            throw new Error('not-found');
        }
    }
    const documentSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$renderDocumentSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderDocumentSlots"])({
        collectionConfig,
        globalConfig,
        hasSavePermission,
        permissions: docPermissions,
        req
    });
    const clientProps = {
        formState,
        ...documentSlots
    };
    return {
        data: doc,
        Document: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentInfoProvider"], {
            apiURL: apiURL,
            collectionSlug: collectionConfig?.slug,
            currentEditor: currentEditor,
            disableActions: disableActions ?? false,
            docPermissions: docPermissions,
            globalSlug: globalConfig?.slug,
            hasPublishedDoc: hasPublishedDoc,
            hasPublishPermission: hasPublishPermission,
            hasSavePermission: hasSavePermission,
            id: id,
            initialData: doc,
            initialState: formState,
            isEditing: isEditing,
            isLocked: isLocked,
            lastUpdateTime: lastUpdateTime,
            mostRecentVersionIsAutosaved: mostRecentVersionIsAutosaved,
            redirectAfterDelete: redirectAfterDelete,
            redirectAfterDuplicate: redirectAfterDuplicate,
            unpublishedVersionCount: unpublishedVersionCount,
            versionCount: versionCount,
            children: [
                !RootViewOverride && !drawerSlug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$elements$2f$DocumentHeader$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DocumentHeader"], {
                    collectionConfig: collectionConfig,
                    globalConfig: globalConfig,
                    i18n: i18n,
                    payload: payload,
                    permissions: permissions
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrateAuthProvider"], {
                    permissions: permissions
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EditDepthProvider"], {
                    children: ErrorView ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps,
                        Component: ErrorView.ComponentConfig || ErrorView.Component,
                        importMap,
                        serverProps
                    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps,
                        Component: RootViewOverride ? RootViewOverride : CustomView?.ComponentConfig || CustomView?.Component ? CustomView?.ComponentConfig || CustomView?.Component : DefaultView?.ComponentConfig || DefaultView?.Component,
                        importMap,
                        serverProps
                    })
                })
            ]
        }, locale?.code)
    };
};
const Document = async (args)=>{
    try {
        const { Document: RenderedDocument } = await renderDocument(args);
        return RenderedDocument;
    } catch (error) {
        if (error?.message === 'NEXT_REDIRECT') {
            throw error;
        }
        args.initPageResult.req.payload.logger.error(error);
        if (error.message === 'not-found') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        }
    }
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/handleServerFunction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renderDocumentHandler": (()=>renderDocumentHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isEntityHidden.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getAccessResults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/getAccessResults.js [app-rsc] (ecmascript)");
;
;
;
;
const renderDocumentHandler = async (args)=>{
    const { collectionSlug, disableActions, docID, drawerSlug, initialData, overrideEntityVisibility, redirectAfterDelete, redirectAfterDuplicate, req, req: { i18n, payload, payload: { config }, user } } = args;
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCookies"])(headers);
    const incomingUserSlug = user?.collection;
    const adminUserSlug = config.admin.user;
    // If we have a user slug, test it against the functions
    if (incomingUserSlug) {
        const adminAccessFunction = payload.collections[incomingUserSlug].config.access?.admin;
        // Run the admin access function from the config if it exists
        if (adminAccessFunction) {
            const canAccessAdmin = await adminAccessFunction({
                req
            });
            if (!canAccessAdmin) {
                throw new Error('Unauthorized');
            }
        // Match the user collection to the global admin config
        } else if (adminUserSlug !== incomingUserSlug) {
            throw new Error('Unauthorized');
        }
    } else {
        const hasUsers = await payload.find({
            collection: adminUserSlug,
            depth: 0,
            limit: 1,
            pagination: false
        });
        // If there are users, we should not allow access because of /create-first-user
        if (hasUsers.docs.length) {
            throw new Error('Unauthorized');
        }
    }
    const clientConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientConfig"])({
        config,
        i18n,
        importMap: req.payload.importMap
    });
    let preferences;
    if (docID) {
        const preferencesKey = `${collectionSlug}-edit-${docID}`;
        preferences = await payload.find({
            collection: 'payload-preferences',
            depth: 0,
            limit: 1,
            where: {
                and: [
                    {
                        key: {
                            equals: preferencesKey
                        }
                    },
                    {
                        'user.relationTo': {
                            equals: user.collection
                        }
                    },
                    {
                        'user.value': {
                            equals: user.id
                        }
                    }
                ]
            }
        }).then((res)=>res.docs[0]?.value);
    }
    const visibleEntities = {
        collections: payload.config.collections.map(({ slug, admin: { hidden } })=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEntityHidden"])({
                hidden,
                user
            }) ? slug : null).filter(Boolean),
        globals: payload.config.globals.map(({ slug, admin: { hidden } })=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEntityHidden"])({
                hidden,
                user
            }) ? slug : null).filter(Boolean)
    };
    const permissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getAccessResults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccessResults"])({
        req
    });
    const { data, Document } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderDocument"])({
        clientConfig,
        disableActions,
        drawerSlug,
        importMap: payload.importMap,
        initialData,
        initPageResult: {
            collectionConfig: payload.config.collections.find((collection)=>collection.slug === collectionSlug),
            cookies,
            docID,
            globalConfig: payload.config.globals.find((global)=>global.slug === collectionSlug),
            languageOptions: undefined,
            permissions,
            req,
            translations: undefined,
            visibleEntities
        },
        overrideEntityVisibility,
        params: {
            segments: [
                'collections',
                collectionSlug,
                docID
            ]
        },
        redirectAfterDelete,
        redirectAfterDuplicate,
        searchParams: {}
    });
    return {
        data,
        Document,
        preferences
    };
}; //# sourceMappingURL=handleServerFunction.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/renderListViewSlots.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renderListViewSlots": (()=>renderListViewSlots)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
;
const renderListViewSlots = ({ clientProps, collectionConfig, description, payload, serverProps })=>{
    const result = {};
    if (collectionConfig.admin.components?.afterList) {
        result.AfterList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps,
            Component: collectionConfig.admin.components.afterList,
            importMap: payload.importMap,
            serverProps
        });
    }
    if (collectionConfig.admin.components?.afterListTable) {
        result.AfterListTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps,
            Component: collectionConfig.admin.components.afterListTable,
            importMap: payload.importMap,
            serverProps
        });
    }
    if (collectionConfig.admin.components?.beforeList) {
        result.BeforeList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps,
            Component: collectionConfig.admin.components.beforeList,
            importMap: payload.importMap,
            serverProps
        });
    }
    if (collectionConfig.admin.components?.beforeListTable) {
        result.BeforeListTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps,
            Component: collectionConfig.admin.components.beforeListTable,
            importMap: payload.importMap,
            serverProps
        });
    }
    if (collectionConfig.admin.components?.Description) {
        result.Description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            clientProps: {
                description,
                ...clientProps
            },
            Component: collectionConfig.admin.components.Description,
            importMap: payload.importMap,
            serverProps
        });
    }
    return result;
}; //# sourceMappingURL=renderListViewSlots.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/meta.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateListMetadata": (()=>generateListMetadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
;
const generateListMetadata = async (args)=>{
    const { collectionConfig, config, i18n } = args;
    let title = '';
    const description = '';
    const keywords = '';
    if (collectionConfig) {
        title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(collectionConfig.labels.plural, i18n);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["meta"])({
        ...config.admin.meta || {},
        description,
        keywords,
        serverURL: config.serverURL,
        title,
        ...collectionConfig?.admin?.meta || {}
    });
}; //# sourceMappingURL=meta.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ListView": (()=>ListView),
    "renderListView": (()=>renderListView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$renderTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/renderTable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$renderListViewSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/renderListViewSlots.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const renderListView = async (args)=>{
    const { clientConfig, customCellProps, disableBulkDelete, disableBulkEdit, drawerSlug, enableRowSelections, initPageResult, overrideEntityVisibility, params, query: queryFromArgs, searchParams } = args;
    const { collectionConfig, collectionConfig: { slug: collectionSlug, admin: { useAsTitle }, defaultSort, fields }, locale: fullLocale, permissions, req, req: { i18n, locale, payload, payload: { config }, query: queryFromReq, user }, visibleEntities } = initPageResult;
    if (!permissions?.collections?.[collectionSlug]?.read) {
        throw new Error('not-found');
    }
    const query = queryFromArgs || queryFromReq;
    let listPreferences;
    const preferenceKey = `${collectionSlug}-list`;
    try {
        listPreferences = await payload.find({
            collection: 'payload-preferences',
            depth: 0,
            limit: 1,
            req,
            user,
            where: {
                and: [
                    {
                        key: {
                            equals: preferenceKey
                        }
                    },
                    {
                        'user.relationTo': {
                            equals: user.collection
                        }
                    },
                    {
                        'user.value': {
                            equals: user?.id
                        }
                    }
                ]
            }
        })?.then((res)=>res?.docs?.[0]?.value);
    } catch (_err) {} // eslint-disable-line no-empty
    const { routes: { admin: adminRoute } } = config;
    if (collectionConfig) {
        if (!visibleEntities.collections.includes(collectionSlug) && !overrideEntityVisibility) {
            throw new Error('not-found');
        }
        const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(query?.page) ? Number(query.page) : 0;
        let whereQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeListSearchAndWhere"])({
            collectionConfig,
            search: typeof query?.search === 'string' ? query.search : undefined,
            where: query?.where || undefined
        });
        const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(query?.limit) ? Number(query.limit) : listPreferences?.limit || collectionConfig.admin.pagination.defaultLimit;
        const sort = query?.sort && typeof query.sort === 'string' ? query.sort : listPreferences?.sort || (typeof collectionConfig.defaultSort === 'string' ? collectionConfig.defaultSort : undefined);
        if (typeof collectionConfig.admin?.baseListFilter === 'function') {
            const baseListFilter = await collectionConfig.admin.baseListFilter({
                limit,
                page,
                req,
                sort
            });
            if (baseListFilter) {
                whereQuery = {
                    and: [
                        whereQuery,
                        baseListFilter
                    ].filter(Boolean)
                };
            }
        }
        const data = await payload.find({
            collection: collectionSlug,
            depth: 0,
            draft: true,
            fallbackLocale: false,
            includeLockStatus: true,
            limit,
            locale,
            overrideAccess: false,
            page,
            req,
            sort,
            user,
            where: whereQuery || {}
        });
        const clientCollectionConfig = clientConfig.collections.find((c)=>c.slug === collectionSlug);
        const { columnState, Table } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$renderTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderTable"])({
            clientCollectionConfig,
            collectionConfig,
            columnPreferences: listPreferences?.columns,
            customCellProps,
            docs: data.docs,
            drawerSlug,
            enableRowSelections,
            i18n: req.i18n,
            payload,
            useAsTitle
        });
        const renderedFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$renderTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderFilters"])(fields, req.payload.importMap);
        const staticDescription = typeof collectionConfig.admin.description === 'function' ? collectionConfig.admin.description({
            t: i18n.t
        }) : collectionConfig.admin.description;
        const sharedClientProps = {
            collectionSlug,
            hasCreatePermission: permissions?.collections?.[collectionSlug]?.create,
            newDocumentURL: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$shared$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatAdminURL"])({
                adminRoute,
                path: `/collections/${collectionSlug}/create`
            })
        };
        const sharedServerProps = {
            collectionConfig,
            i18n,
            limit,
            locale: fullLocale,
            params,
            payload,
            permissions,
            searchParams,
            user
        };
        const listViewSlots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$renderListViewSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderListViewSlots"])({
            clientProps: sharedClientProps,
            collectionConfig,
            description: staticDescription,
            payload,
            serverProps: sharedServerProps
        });
        const clientProps = {
            ...listViewSlots,
            ...sharedClientProps,
            columnState,
            disableBulkDelete,
            disableBulkEdit,
            enableRowSelections,
            listPreferences,
            renderedFilters,
            Table
        };
        const isInDrawer = Boolean(drawerSlug);
        return {
            List: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrateAuthProvider"], {
                        permissions: permissions
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ListQueryProvider"], {
                        collectionSlug: collectionSlug,
                        data: data,
                        defaultLimit: limit,
                        defaultSort: sort,
                        modifySearchParams: !isInDrawer,
                        preferenceKey: preferenceKey,
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            clientProps,
                            Component: collectionConfig?.admin?.components?.views?.list?.Component,
                            Fallback: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DefaultListView"],
                            importMap: payload.importMap,
                            serverProps: {
                                ...sharedServerProps,
                                data,
                                listPreferences,
                                listSearchableFields: collectionConfig.admin.listSearchableFields
                            }
                        })
                    })
                ]
            })
        };
    }
    throw new Error('not-found');
};
const ListView = async (args)=>{
    try {
        const { List: RenderedList } = await renderListView({
            ...args,
            enableRowSelections: true
        });
        return RenderedList;
    } catch (error) {
        if (error.message === 'not-found') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
        } else {
            console.error(error) // eslint-disable-line no-console
            ;
        }
    }
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/navigation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$renderListViewSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/renderListViewSlots.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/handleServerFunction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renderListHandler": (()=>renderListHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isEntityHidden.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getAccessResults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/getAccessResults.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
const renderListHandler = async (args)=>{
    const { collectionSlug, disableActions, disableBulkDelete, disableBulkEdit, drawerSlug, enableRowSelections, overrideEntityVisibility, query, redirectAfterDelete, redirectAfterDuplicate, req, req: { i18n, payload, payload: { config }, user } } = args;
    const headers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCookies"])(headers);
    const incomingUserSlug = user?.collection;
    const adminUserSlug = config.admin.user;
    // If we have a user slug, test it against the functions
    if (incomingUserSlug) {
        const adminAccessFunction = payload.collections[incomingUserSlug].config.access?.admin;
        // Run the admin access function from the config if it exists
        if (adminAccessFunction) {
            const canAccessAdmin = await adminAccessFunction({
                req
            });
            if (!canAccessAdmin) {
                throw new Error('Unauthorized');
            }
        // Match the user collection to the global admin config
        } else if (adminUserSlug !== incomingUserSlug) {
            throw new Error('Unauthorized');
        }
    } else {
        const hasUsers = await payload.find({
            collection: adminUserSlug,
            depth: 0,
            limit: 1,
            pagination: false
        });
        // If there are users, we should not allow access because of /create-first-user
        if (hasUsers.docs.length) {
            throw new Error('Unauthorized');
        }
    }
    const clientConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientConfig"])({
        config,
        i18n,
        importMap: payload.importMap
    });
    const preferencesKey = `${collectionSlug}-list`;
    const preferences = await payload.find({
        collection: 'payload-preferences',
        depth: 0,
        limit: 1,
        where: {
            and: [
                {
                    key: {
                        equals: preferencesKey
                    }
                },
                {
                    'user.relationTo': {
                        equals: user.collection
                    }
                },
                {
                    'user.value': {
                        equals: user.id
                    }
                }
            ]
        }
    }).then((res)=>res.docs[0]?.value);
    const visibleEntities = {
        collections: payload.config.collections.map(({ slug, admin: { hidden } })=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEntityHidden"])({
                hidden,
                user
            }) ? slug : null).filter(Boolean),
        globals: payload.config.globals.map(({ slug, admin: { hidden } })=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isEntityHidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEntityHidden"])({
                hidden,
                user
            }) ? slug : null).filter(Boolean)
    };
    const permissions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getAccessResults$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAccessResults"])({
        req
    });
    const { List } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["renderListView"])({
        clientConfig,
        disableActions,
        disableBulkDelete,
        disableBulkEdit,
        drawerSlug,
        enableRowSelections,
        importMap: payload.importMap,
        initPageResult: {
            collectionConfig: payload.config.collections.find((collection)=>collection.slug === collectionSlug),
            cookies,
            globalConfig: payload.config.globals.find((global)=>global.slug === collectionSlug),
            languageOptions: undefined,
            permissions,
            req,
            translations: undefined,
            visibleEntities
        },
        overrideEntityVisibility,
        params: {
            segments: [
                'collections',
                collectionSlug
            ]
        },
        query,
        redirectAfterDelete,
        redirectAfterDuplicate,
        searchParams: {}
    });
    return {
        List,
        preferences
    };
}; //# sourceMappingURL=handleServerFunction.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/handleServerFunctions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "handleServerFunctions": (()=>handleServerFunctions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$handleServerFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/handleServerFunction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$renderDocumentSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/Document/renderDocumentSlots.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$handleServerFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/views/List/handleServerFunction.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/initReq.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$copyDataFromLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/copyDataFromLocale.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildTableState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildTableState.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const handleServerFunctions = async (args)=>{
    const { name: fnKey, args: fnArgs, config: configPromise, importMap } = args;
    const { req } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$initReq$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["initReq"])(configPromise);
    const augmentedArgs = {
        ...fnArgs,
        importMap,
        req
    };
    const serverFunctions = {
        'copy-data-from-locale': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$copyDataFromLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copyDataFromLocaleHandler"],
        'form-state': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFormState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFormStateHandler"],
        'render-document': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$handleServerFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderDocumentHandler"],
        'render-document-slots': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$Document$2f$renderDocumentSlots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderDocumentSlotsHandler"],
        'render-list': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$views$2f$List$2f$handleServerFunction$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderListHandler"],
        'table-state': __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildTableState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildTableStateHandler"]
    };
    const fn = serverFunctions[fnKey];
    if (!fn) {
        throw new Error(`Unknown Server Function: ${fnKey}`);
    }
    return fn(augmentedArgs);
}; //# sourceMappingURL=handleServerFunctions.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/exports/layouts.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
 //# sourceMappingURL=layouts.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/exports/layouts.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$layouts$2f$Root$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/layouts/Root/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$utilities$2f$handleServerFunctions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/utilities/handleServerFunctions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$next$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_$5f$kpgmheztbynlci6zqnfo3s6egm$2f$node_modules$2f40$payloadcms$2f$next$2f$dist$2f$exports$2f$layouts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+next@3.11.0_@types+react@19.0.1_graphql@16.10.0_monaco-editor@0.52.2_next@15.1.0__kpgmheztbynlci6zqnfo3s6egm/node_modules/@payloadcms/next/dist/exports/layouts.js [app-rsc] (ecmascript) <locals>");
}}),

};

//# sourceMappingURL=9812e_%40payloadcms_next_dist_ec97a9._.js.map