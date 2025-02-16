module.exports = {

"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "APIError": (()=>APIError),
    "APIErrorName": (()=>APIErrorName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
;
let APIErrorName = 'APIError';
class ExtendableError extends Error {
    data;
    isOperational;
    isPublic;
    status;
    constructor(message, status, data, isPublic){
        super(message, {
            // show data in cause
            cause: data
        });
        APIErrorName = this.constructor.name;
        this.name = this.constructor.name;
        this.message = message;
        this.status = status;
        this.data = data;
        this.isPublic = isPublic;
        this.isOperational = true // This is required since bluebird 4 doesn't append it anymore.
        ;
        Error.captureStackTrace(this, this.constructor);
    }
}
class APIError extends ExtendableError {
    /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {object} data - response data to be returned.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */ constructor(message, status = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR, data = null, isPublic = false){
        super(message, status, data, isPublic);
    }
} //# sourceMappingURL=APIError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/QueryError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "QueryError": (()=>QueryError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class QueryError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(results){
        const message = `The following path${results.length === 1 ? '' : 's'} cannot be queried:`;
        super(`${message} ${results.map((err)=>err.path).join(', ')}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, results);
    }
} //# sourceMappingURL=QueryError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/ValidationError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ValidationError": (()=>ValidationError),
    "ValidationErrorName": (()=>ValidationErrorName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
let ValidationErrorName = 'ValidationError';
class ValidationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(results, t){
        const message = t ? t('error:followingFieldsInvalid', {
            count: results.errors.length
        }) : results.errors.length === 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.followingFieldsInvalid_one : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.followingFieldsInvalid_other;
        super(`${message} ${results.errors.map((f)=>f.label || f.path).join(', ')}`, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST, results);
        ValidationErrorName = this.constructor.name;
    }
} //# sourceMappingURL=ValidationError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidConfiguration.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidConfiguration": (()=>InvalidConfiguration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class InvalidConfiguration extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(message){
        super(message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=InvalidConfiguration.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Forbidden": (()=>Forbidden)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class Forbidden extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:notAllowedToPerformAction') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.notAllowedToPerformAction, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].FORBIDDEN);
    }
} //# sourceMappingURL=Forbidden.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/AuthenticationError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "AuthenticationError": (()=>AuthenticationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class AuthenticationError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t, loginWithUsername){
        super(t ? `${loginWithUsername ? t('error:usernameOrPasswordIncorrect') : t('error:emailOrPasswordIncorrect')}` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.emailOrPasswordIncorrect, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=AuthenticationError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/LockedAuth.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "LockedAuth": (()=>LockedAuth)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class LockedAuth extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:userLocked') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.userLocked, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=LockedAuth.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MissingEditorProp": (()=>MissingEditorProp)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class MissingEditorProp extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`RichText field${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? ` "${field.name}"` : ''} is missing the editor prop. For sub-richText fields, the editor props is required, as it would otherwise create infinite recursion.`);
    }
} //# sourceMappingURL=MissingEditorProp.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/DuplicateCollection.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DuplicateCollection": (()=>DuplicateCollection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class DuplicateCollection extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(propertyName, duplicate){
        super(`Collection ${propertyName} already in use: "${duplicate}"`);
    }
} //# sourceMappingURL=DuplicateCollection.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingFieldType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MissingFieldType": (()=>MissingFieldType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class MissingFieldType extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`Field${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? ` "${field.name}"` : ''} is either missing a field type or it does not match an available field type`);
    }
} //# sourceMappingURL=MissingFieldType.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidFieldName.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidFieldName": (()=>InvalidFieldName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class InvalidFieldName extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field, fieldName){
        super(`Field ${field.label} has invalid name '${fieldName}'. Field names can not include periods (.) and must be alphanumeric.`);
    }
} //# sourceMappingURL=InvalidFieldName.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidFieldJoin.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidFieldJoin": (()=>InvalidFieldJoin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class InvalidFieldJoin extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field){
        super(`Invalid join field ${field.name}. The config does not have a field '${field.on}' in collection '${field.collection}'.`);
    }
} //# sourceMappingURL=InvalidFieldJoin.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidFieldRelationship.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "InvalidFieldRelationship": (()=>InvalidFieldRelationship)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class InvalidFieldRelationship extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field, relationship){
        super(`Field ${field.label} has invalid relationship '${relationship}'.`);
    }
} //# sourceMappingURL=InvalidFieldRelationship.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/DuplicateFieldName.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DuplicateFieldName": (()=>DuplicateFieldName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class DuplicateFieldName extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(fieldName){
        super(`A field with the name '${fieldName}' was found multiple times on the same level. Field names must be unique.`);
    }
} //# sourceMappingURL=DuplicateFieldName.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotFound": (()=>NotFound)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class NotFound extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('general:notFound') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.general.notFound, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].NOT_FOUND);
    }
} //# sourceMappingURL=NotFound.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/FileRetrievalError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FileRetrievalError": (()=>FileRetrievalError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class FileRetrievalError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t, message){
        let msg = t ? t('error:problemUploadingFile') : 'There was a problem while retrieving the file.';
        if (message) {
            msg += ` ${message}`;
        }
        super(msg, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=FileRetrievalError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/FileUploadError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "FileUploadError": (()=>FileUploadError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class FileUploadError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:problemUploadingFile') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.problemUploadingFile, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
} //# sourceMappingURL=FileUploadError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingFile.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MissingFile": (()=>MissingFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class MissingFile extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:noFilesUploaded') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.noFilesUploaded, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST);
    }
} //# sourceMappingURL=MissingFile.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/Locked.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Locked": (()=>Locked)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
class Locked extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(message){
        super(message, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].LOCKED);
    }
} //# sourceMappingURL=Locked.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/ErrorDeletingFile.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ErrorDeletingFile": (()=>ErrorDeletingFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class ErrorDeletingFile extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:deletingFile') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.deletingFile, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].INTERNAL_SERVER_ERROR);
    }
} //# sourceMappingURL=ErrorDeletingFile.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/TimestampsRequired.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TimestampsRequired": (()=>TimestampsRequired)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class TimestampsRequired extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(collection){
        super(`Timestamps are required in the collection ${collection.slug} because you have opted in to Versions.`);
    }
} //# sourceMappingURL=TimestampsRequired.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/ReservedFieldName.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ReservedFieldName": (()=>ReservedFieldName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
class ReservedFieldName extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(field, fieldName){
        super(`Field ${field.label} has reserved name '${fieldName}'.`);
    }
} //# sourceMappingURL=ReservedFieldName.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/UnauthorizedError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "UnauthorizedError": (()=>UnauthorizedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
class UnauthorizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"] {
    constructor(t){
        super(t ? t('error:unauthorized') : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"].translations.error.unauthorized, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].UNAUTHORIZED);
    }
} //# sourceMappingURL=UnauthorizedError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/types/constants.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validOperatorSet": (()=>validOperatorSet),
    "validOperators": (()=>validOperators)
});
const validOperators = [
    'equals',
    'contains',
    'not_equals',
    'in',
    'all',
    'not_in',
    'exists',
    'greater_than',
    'greater_than_equal',
    'less_than',
    'less_than_equal',
    'like',
    'within',
    'intersects',
    'near'
];
const validOperatorSet = new Set(validOperators); //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/types/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "docHasTimestamps": (()=>docHasTimestamps)
});
function docHasTimestamps(doc) {
    return doc?.createdAt && doc?.updatedAt;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/baseFields.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__),
    "statuses": (()=>statuses),
    "versionSnapshotField": (()=>versionSnapshotField)
});
const statuses = [
    {
        label: ({ t })=>t('version:draft'),
        value: 'draft'
    },
    {
        label: ({ t })=>t('version:published'),
        value: 'published'
    }
];
const baseVersionFields = [
    {
        name: '_status',
        type: 'select',
        admin: {
            components: {
                Field: false
            },
            disableBulkEdit: true
        },
        defaultValue: 'draft',
        index: true,
        label: ({ t })=>t('version:status'),
        options: statuses
    }
];
const versionSnapshotField = {
    name: 'snapshot',
    type: 'checkbox',
    admin: {
        disableBulkEdit: true,
        disabled: true
    },
    index: true
};
const __TURBOPACK__default__export__ = baseVersionFields;
 //# sourceMappingURL=baseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/buildGlobalFields.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildVersionGlobalFields": (()=>buildVersionGlobalFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/baseFields.js [app-route] (ecmascript)");
;
const buildVersionGlobalFields = (config, global, flatten)=>{
    const fields = [
        {
            name: 'version',
            type: 'group',
            fields: global.fields,
            ...flatten && {
                flattenedFields: global.flattenedFields
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if (global?.versions?.drafts) {
        if (config.localization) {
            fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionSnapshotField"]);
            fields.push({
                name: 'publishedLocale',
                type: 'select',
                admin: {
                    disableBulkEdit: true,
                    disabled: true
                },
                index: true,
                options: config.localization.locales.map((locale)=>{
                    if (typeof locale === 'string') {
                        return locale;
                    }
                    return locale.code;
                })
            });
        }
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
        if (global?.versions?.drafts?.autosave) {
            fields.push({
                name: 'autosave',
                type: 'checkbox',
                index: true
            });
        }
    }
    return fields;
}; //# sourceMappingURL=buildGlobalFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildVersionCollectionFields": (()=>buildVersionCollectionFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/baseFields.js [app-route] (ecmascript)");
;
const buildVersionCollectionFields = (config, collection, flatten)=>{
    const fields = [
        {
            name: 'parent',
            type: 'relationship',
            index: true,
            relationTo: collection.slug
        },
        {
            name: 'version',
            type: 'group',
            fields: collection.fields.filter((field)=>!('name' in field) || field.name !== 'id'),
            ...flatten && {
                flattenedFields: collection.flattenedFields.filter((each)=>each.name !== 'id')
            }
        },
        {
            name: 'createdAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        },
        {
            name: 'updatedAt',
            type: 'date',
            admin: {
                disabled: true
            },
            index: true
        }
    ];
    if (collection?.versions?.drafts) {
        if (config.localization) {
            fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$baseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["versionSnapshotField"]);
            fields.push({
                name: 'publishedLocale',
                type: 'select',
                admin: {
                    disableBulkEdit: true,
                    disabled: true
                },
                index: true,
                options: config.localization.locales.map((locale)=>{
                    if (typeof locale === 'string') {
                        return locale;
                    }
                    return locale.code;
                })
            });
        }
        fields.push({
            name: 'latest',
            type: 'checkbox',
            admin: {
                disabled: true
            },
            index: true
        });
        if (collection?.versions?.drafts?.autosave) {
            fields.push({
                name: 'autosave',
                type: 'checkbox',
                index: true
            });
        }
    }
    return fields;
}; //# sourceMappingURL=buildCollectionFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "appendVersionToQueryKey": (()=>appendVersionToQueryKey)
});
const appendVersionToQueryKey = (query = {})=>{
    return Object.entries(query).reduce((res, [key, val])=>{
        if ([
            'AND',
            'and',
            'OR',
            'or'
        ].includes(key) && Array.isArray(val)) {
            return {
                ...res,
                [key.toLowerCase()]: val.map((subQuery)=>appendVersionToQueryKey(subQuery))
            };
        }
        if (key !== 'id') {
            return {
                ...res,
                [`version.${key}`]: val
            };
        }
        return {
            ...res,
            parent: val
        };
    }, {});
}; //# sourceMappingURL=appendVersionToQueryKey.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLatestCollectionVersion": (()=>getLatestCollectionVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)");
;
;
const getLatestCollectionVersion = async ({ id, config, payload, published, query, req })=>{
    let latestVersion;
    const whereQuery = published ? {
        and: [
            {
                parent: {
                    equals: id
                }
            },
            {
                'version._status': {
                    equals: 'published'
                }
            }
        ]
    } : {
        and: [
            {
                parent: {
                    equals: id
                }
            },
            {
                latest: {
                    equals: true
                }
            }
        ]
    };
    if (config.versions?.drafts) {
        const { docs } = await payload.db.findVersions({
            collection: config.slug,
            limit: 1,
            pagination: false,
            req,
            sort: '-updatedAt',
            where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(query.where), whereQuery)
        });
        [latestVersion] = docs;
    }
    if (!latestVersion) {
        if (!published) {
            const doc = await payload.db.findOne({
                ...query,
                req
            });
            return doc;
        }
        return undefined;
    }
    latestVersion.version.id = id;
    return latestVersion.version;
}; //# sourceMappingURL=getLatestCollectionVersion.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getQueryDraftsSelect": (()=>getQueryDraftsSelect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getSelectMode.js [app-route] (ecmascript)");
;
const getQueryDraftsSelect = ({ select })=>{
    if (!select) {
        return;
    }
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSelectMode"])(select);
    if (mode === 'include') {
        return {
            parent: true,
            version: select
        };
    }
    return {
        version: select
    };
}; //# sourceMappingURL=getQueryDraftsSelect.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/enforceMaxVersions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "enforceMaxVersions": (()=>enforceMaxVersions)
});
const enforceMaxVersions = async ({ id, collection, global, max, payload, req })=>{
    const entityType = collection ? 'collection' : 'global';
    const slug = collection ? collection.slug : global?.slug;
    try {
        const where = {};
        let oldestAllowedDoc;
        if (collection) {
            where.parent = {
                equals: id
            };
            const query = await payload.db.findVersions({
                collection: collection.slug,
                limit: 1,
                pagination: false,
                req,
                skip: max,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        } else if (global) {
            const query = await payload.db.findGlobalVersions({
                global: global.slug,
                limit: 1,
                pagination: false,
                req,
                skip: max,
                sort: '-updatedAt',
                where
            });
            [oldestAllowedDoc] = query.docs;
        }
        if (oldestAllowedDoc?.updatedAt) {
            const deleteQuery = {
                updatedAt: {
                    less_than_equal: oldestAllowedDoc.updatedAt
                }
            };
            if (collection) {
                deleteQuery.parent = {
                    equals: id
                };
            }
            await payload.db.deleteVersions({
                collection: slug,
                req,
                where: deleteQuery
            });
        }
    } catch (err) {
        payload.logger.error(`There was an error cleaning up old versions for the ${entityType} ${slug}`);
    }
}; //# sourceMappingURL=enforceMaxVersions.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/saveVersion.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "saveVersion": (()=>saveVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$enforceMaxVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/enforceMaxVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
;
;
;
;
const saveVersion = async ({ id, autosave, collection, docWithLocales: doc, draft, global, payload, publishSpecificLocale, req, select, snapshot })=>{
    let result;
    let createNewVersion = true;
    const now = new Date().toISOString();
    const versionData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(doc);
    if (draft) {
        versionData._status = 'draft';
    }
    if (collection?.timestamps && draft) {
        versionData.updatedAt = now;
    }
    if (versionData._id) {
        delete versionData._id;
    }
    try {
        if (autosave) {
            let docs;
            const findVersionArgs = {
                limit: 1,
                pagination: false,
                req,
                sort: '-updatedAt'
            };
            if (collection) {
                ;
                ({ docs } = await payload.db.findVersions({
                    ...findVersionArgs,
                    collection: collection.slug,
                    limit: 1,
                    pagination: false,
                    req,
                    where: {
                        parent: {
                            equals: id
                        }
                    }
                }));
            } else {
                ;
                ({ docs } = await payload.db.findGlobalVersions({
                    ...findVersionArgs,
                    global: global.slug,
                    limit: 1,
                    pagination: false,
                    req
                }));
            }
            const [latestVersion] = docs;
            // overwrite the latest version if it's set to autosave
            if (latestVersion?.autosave === true) {
                createNewVersion = false;
                const data = {
                    createdAt: new Date(latestVersion.createdAt).toISOString(),
                    latest: true,
                    parent: id,
                    updatedAt: now,
                    version: {
                        ...versionData
                    }
                };
                const updateVersionArgs = {
                    id: latestVersion.id,
                    req,
                    versionData: data
                };
                if (collection) {
                    result = await payload.db.updateVersion({
                        ...updateVersionArgs,
                        collection: collection.slug,
                        req
                    });
                } else {
                    result = await payload.db.updateGlobalVersion({
                        ...updateVersionArgs,
                        global: global.slug,
                        req
                    });
                }
            }
        }
        if (createNewVersion) {
            const createVersionArgs = {
                autosave: Boolean(autosave),
                collectionSlug: undefined,
                createdAt: now,
                globalSlug: undefined,
                parent: collection ? id : undefined,
                publishedLocale: publishSpecificLocale || undefined,
                req,
                select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
                    select
                }),
                updatedAt: now,
                versionData
            };
            if (collection) {
                createVersionArgs.collectionSlug = collection.slug;
                result = await payload.db.createVersion(createVersionArgs);
            }
            if (global) {
                createVersionArgs.globalSlug = global.slug;
                result = await payload.db.createGlobalVersion(createVersionArgs);
            }
            if (publishSpecificLocale && snapshot) {
                const snapshotData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(snapshot);
                if (snapshotData._id) {
                    delete snapshotData._id;
                }
                snapshotData._status = 'draft';
                const snapshotDate = new Date().toISOString();
                const updatedArgs = {
                    ...createVersionArgs,
                    createdAt: snapshotDate,
                    snapshot: true,
                    updatedAt: snapshotDate,
                    versionData: snapshotData
                };
                if (collection) {
                    await payload.db.createVersion(updatedArgs);
                }
                if (global) {
                    await payload.db.createGlobalVersion(updatedArgs);
                }
            }
        }
    } catch (err) {
        let errorMessage;
        if (collection) {
            errorMessage = `There was an error while saving a version for the ${typeof collection.labels.singular === 'string' ? collection.labels.singular : collection.slug} with ID ${id}.`;
        }
        if (global) {
            errorMessage = `There was an error while saving a version for the global ${typeof global.label === 'string' ? global.label : global.slug}.`;
        }
        payload.logger.error({
            err,
            msg: errorMessage
        });
        return;
    }
    const max = collection ? collection.versions.maxPerDoc : global.versions.max;
    if (createNewVersion && max > 0) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$enforceMaxVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["enforceMaxVersions"])({
            id,
            collection,
            global,
            max,
            payload,
            req
        });
    }
    let createdVersion = result.version;
    createdVersion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(createdVersion);
    createdVersion.id = result.parent;
    return createdVersion;
}; //# sourceMappingURL=saveVersion.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/deleteCollectionVersions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteCollectionVersions": (()=>deleteCollectionVersions)
});
const deleteCollectionVersions = async ({ id, slug, payload, req })=>{
    try {
        await payload.db.deleteVersions({
            collection: slug,
            req,
            where: {
                parent: {
                    equals: id
                }
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: `There was an error removing versions for the deleted ${slug} document with ID ${id}.`
        });
    }
}; //# sourceMappingURL=deleteCollectionVersions.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/deleteScheduledPublishJobs.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteScheduledPublishJobs": (()=>deleteScheduledPublishJobs)
});
const deleteScheduledPublishJobs = async ({ id, slug, payload, req })=>{
    try {
        await payload.db.deleteMany({
            collection: 'payload-jobs',
            req,
            where: {
                and: [
                    // only want to delete jobs have not run yet
                    {
                        completedAt: {
                            exists: false
                        }
                    },
                    {
                        processing: {
                            equals: false
                        }
                    },
                    {
                        'input.doc.value': {
                            equals: id
                        }
                    },
                    {
                        'input.doc.relationTo': {
                            equals: slug
                        }
                    },
                    // data.type narrows scheduled publish jobs in case of another job having input.doc.value
                    {
                        taskSlug: {
                            equals: 'schedulePublish'
                        }
                    }
                ]
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: `There was an error deleting scheduled publish jobs from the queue for ${slug} document with ID ${id}.`
        });
    }
}; //# sourceMappingURL=deleteScheduledPublishJobs.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/getQueryDraftsSort.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Takes the incoming sort argument and prefixes it with `versions.` and preserves any `-` prefixes for descending order
 * @param sort
 */ __turbopack_esm__({
    "getQueryDraftsSort": (()=>getQueryDraftsSort)
});
const getQueryDraftsSort = ({ collectionConfig, sort })=>{
    if (!sort) {
        if (collectionConfig.defaultSort) {
            sort = collectionConfig.defaultSort;
        } else {
            sort = '-createdAt';
        }
    }
    if (typeof sort === 'string') {
        sort = [
            sort
        ];
    }
    return sort.map((field)=>{
        let orderBy;
        let direction = '';
        if (field[0] === '-') {
            orderBy = field.substring(1);
            direction = '-';
        } else {
            orderBy = field;
        }
        if (orderBy === 'id') {
            return `${direction}parent`;
        }
        return `${direction}version.${orderBy}`;
    });
}; //# sourceMappingURL=getQueryDraftsSort.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/replaceWithDraftIfAvailable.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/types/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/appendVersionToQueryKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/drafts/getQueryDraftsSelect.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-route] (ecmascript)");
;
;
;
;
;
;
const replaceWithDraftIfAvailable = async ({ accessResult, doc, entity, entityType, req, select })=>{
    const { locale } = req;
    const queryToBuild = {
        and: [
            {
                'version._status': {
                    equals: 'draft'
                }
            }
        ]
    };
    if (entityType === 'collection') {
        queryToBuild.and.push({
            parent: {
                equals: doc.id
            }
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$types$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["docHasTimestamps"])(doc)) {
        queryToBuild.and.push({
            or: [
                {
                    updatedAt: {
                        greater_than: doc.updatedAt
                    }
                },
                {
                    latest: {
                        equals: true
                    }
                }
            ]
        });
    }
    let versionAccessResult;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResult)) {
        versionAccessResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$appendVersionToQueryKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appendVersionToQueryKey"])(accessResult);
    }
    const findVersionsArgs = {
        collection: entity.slug,
        global: entity.slug,
        limit: 1,
        locale,
        pagination: false,
        req,
        select: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$drafts$2f$getQueryDraftsSelect$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getQueryDraftsSelect"])({
            select
        }),
        sort: '-updatedAt',
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(queryToBuild, versionAccessResult)
    };
    let versionDocs;
    if (entityType === 'global') {
        versionDocs = (await req.payload.db.findGlobalVersions(findVersionsArgs)).docs;
    } else {
        versionDocs = (await req.payload.db.findVersions(findVersionsArgs)).docs;
    }
    let draft = versionDocs[0];
    if (!draft) {
        return doc;
    }
    draft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeInternalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(draft);
    // Patch globalType onto version doc
    if (entityType === 'global' && 'globalType' in doc) {
        draft.version.globalType = doc.globalType;
    }
    // handle when .version wasn't selected due to projection
    if (!draft.version) {
        draft.version = {};
    }
    // Disregard all other draft content at this point,
    // Only interested in the version itself.
    // Operations will handle firing hooks, etc.
    draft.version.id = doc.id;
    return draft.version;
};
const __TURBOPACK__default__export__ = replaceWithDraftIfAvailable;
 //# sourceMappingURL=replaceWithDraftIfAvailable.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/defaults.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "versionDefaults": (()=>versionDefaults)
});
const versionDefaults = {
    autosaveInterval: 2000
}; //# sourceMappingURL=defaults.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/getLatestGlobalVersion.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLatestGlobalVersion": (()=>getLatestGlobalVersion)
});
const getLatestGlobalVersion = async ({ slug, config, locale, payload, published, req, where })=>{
    let latestVersion;
    const whereQuery = published ? {
        'version._status': {
            equals: 'published'
        }
    } : {
        latest: {
            equals: true
        }
    };
    if (config.versions?.drafts) {
        latestVersion = (await payload.db.findGlobalVersions({
            global: slug,
            limit: 1,
            locale,
            pagination: false,
            req,
            where: whereQuery
        })).docs[0];
    }
    const global = await payload.db.findGlobal({
        slug,
        locale,
        req,
        where
    });
    const globalExists = Boolean(global);
    if (!latestVersion) {
        return {
            global,
            globalExists
        };
    }
    if (!latestVersion.version.createdAt) {
        latestVersion.version.createdAt = latestVersion.createdAt;
    }
    if (!latestVersion.version.updatedAt) {
        latestVersion.version.updatedAt = latestVersion.updatedAt;
    }
    return {
        global: latestVersion.version,
        globalExists
    };
}; //# sourceMappingURL=getLatestGlobalVersion.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/schedule/job.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSchedulePublishTask": (()=>getSchedulePublishTask)
});
const getSchedulePublishTask = ({ adminUserSlug, collections, globals })=>{
    return {
        slug: 'schedulePublish',
        handler: async ({ input, req })=>{
            const _status = input?.type === 'publish' || !input?.type ? 'published' : 'draft';
            const userID = input.user;
            let user = null;
            if (userID) {
                user = await req.payload.findByID({
                    id: userID,
                    collection: adminUserSlug,
                    depth: 0
                });
                user.collection = adminUserSlug;
            }
            let publishSpecificLocale;
            if (input?.type === 'publish' && input.locale && req.payload.config.localization) {
                const matchedLocale = req.payload.config.localization.locales.find(({ code })=>code === input.locale);
                if (matchedLocale) {
                    publishSpecificLocale = input.locale;
                }
            }
            if (input.doc) {
                await req.payload.update({
                    id: input.doc.value,
                    collection: input.doc.relationTo,
                    data: {
                        _status
                    },
                    depth: 0,
                    overrideAccess: user === null,
                    publishSpecificLocale,
                    user
                });
            }
            if (input.global) {
                await req.payload.updateGlobal({
                    slug: input.global,
                    data: {
                        _status
                    },
                    depth: 0,
                    overrideAccess: user === null,
                    publishSpecificLocale,
                    user
                });
            }
            return {
                output: {}
            };
        },
        inputSchema: [
            {
                name: 'type',
                type: 'radio',
                defaultValue: 'publish',
                options: [
                    'publish',
                    'unpublish'
                ]
            },
            {
                name: 'locale',
                type: 'text'
            },
            {
                name: 'doc',
                type: 'relationship',
                relationTo: collections
            },
            {
                name: 'global',
                type: 'select',
                options: globals
            },
            {
                name: 'user',
                type: 'relationship',
                relationTo: adminUserSlug
            }
        ]
    };
}; //# sourceMappingURL=job.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/payloadPackageList.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "PAYLOAD_PACKAGE_LIST": (()=>PAYLOAD_PACKAGE_LIST)
});
const PAYLOAD_PACKAGE_LIST = [
    'payload',
    '@payloadcms/bundler-vite',
    '@payloadcms/bundler-webpack',
    '@payloadcms/db-mongodb',
    '@payloadcms/db-postgres',
    '@payloadcms/email-nodemailer',
    '@payloadcms/email-resend',
    '@payloadcms/graphql',
    '@payloadcms/live-preview-react',
    '@payloadcms/live-preview',
    '@payloadcms/next/utilities',
    '@payloadcms/plugin-cloud-storage',
    '@payloadcms/payload-cloud',
    '@payloadcms/plugin-form-builder',
    // '@payloadcms/plugin-multi-tenant',
    '@payloadcms/plugin-nested-docs',
    '@payloadcms/plugin-redirects',
    '@payloadcms/plugin-search',
    '@payloadcms/plugin-seo',
    '@payloadcms/plugin-stripe',
    '@payloadcms/plugin-zapier',
    '@payloadcms/richtext-lexical',
    '@payloadcms/richtext-slate',
    '@payloadcms/storage-azure',
    '@payloadcms/storage-gcs',
    '@payloadcms/storage-s3',
    '@payloadcms/storage-uploadthing',
    '@payloadcms/storage-vercel-blob',
    '@payloadcms/translations',
    '@payloadcms/ui/shared'
]; //# sourceMappingURL=payloadPackageList.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "readMigrationFiles": (()=>readMigrationFiles)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
;
;
;
const readMigrationFiles = async ({ payload })=>{
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(payload.db.migrationDir)) {
        payload.logger.error({
            msg: `No migration directory found at ${payload.db.migrationDir}`
        });
        return [];
    }
    payload.logger.info({
        msg: `Reading migration files from ${payload.db.migrationDir}`
    });
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(payload.db.migrationDir).sort().filter((f)=>{
        return (f.endsWith('.ts') || f.endsWith('.js')) && !f.includes('index.');
    }).map((file)=>{
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(payload.db.migrationDir, file);
    });
    return Promise.all(files.map(async (filePath)=>{
        // eval used to circumvent errors bundling
        let migration = ("TURBOPACK compile-time truthy", 1) ? await eval(`require('${filePath.replaceAll('\\', '/')}')`) : ("TURBOPACK unreachable", undefined);
        if ('default' in migration) {
            migration = migration.default;
        }
        const result = {
            name: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath).split('.')?.[0],
            down: migration.down,
            up: migration.up
        };
        return result;
    }));
}; //# sourceMappingURL=readMigrationFiles.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getMigrations.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Gets all existing migrations from the database, excluding the dev migration
 */ __turbopack_esm__({
    "getMigrations": (()=>getMigrations)
});
async function getMigrations({ payload }) {
    const migrationQuery = await payload.find({
        collection: 'payload-migrations',
        limit: 0,
        sort: [
            '-batch',
            '-name'
        ],
        where: {
            batch: {
                not_equals: -1
            }
        }
    });
    const existingMigrations = migrationQuery.docs;
    // Get the highest batch number from existing migrations
    const latestBatch = Number(existingMigrations?.[0]?.batch) || 0;
    return {
        existingMigrations,
        latestBatch
    };
} //# sourceMappingURL=getMigrations.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "combineQueries": (()=>combineQueries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
;
const combineQueries = (where, access)=>{
    if (!where && !access) {
        return {};
    }
    const result = {
        and: []
    };
    if (where) {
        result.and.push(where);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(access)) {
        result.and.push(access);
    }
    return result;
}; //# sourceMappingURL=combineQueries.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getPredefinedMigration.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getPredefinedMigration": (()=>getPredefinedMigration)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/url [external] (url, cjs)");
;
;
;
const getPredefinedMigration = async ({ dirname, file, migrationName: migrationNameArg, payload })=>{
    // Check for predefined migration.
    // Either passed in via --file or prefixed with '@payloadcms/db-mongodb/' for example
    const importPath = file ?? migrationNameArg;
    if (importPath?.startsWith('@payloadcms/db-')) {
        // removes the package name from the migrationName.
        const migrationName = importPath.split('/').slice(2).join('/');
        let cleanPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dirname, `./predefinedMigrations/${migrationName}`);
        if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(`${cleanPath}.mjs`)) {
            cleanPath = `${cleanPath}.mjs`;
        } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(`${cleanPath}.js`)) {
            cleanPath = `${cleanPath}.js`;
        } else {
            payload.logger.error({
                msg: `Canned migration ${migrationName} not found.`
            });
            process.exit(1);
        }
        cleanPath = cleanPath.replaceAll('\\', '/');
        const moduleURL = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["pathToFileURL"])(cleanPath);
        try {
            const { downSQL, imports, upSQL } = await eval(`import('${moduleURL.href}')`);
            return {
                downSQL,
                imports,
                upSQL
            };
        } catch (err) {
            payload.logger.error({
                err,
                msg: `Error loading predefined migration ${migrationName}`
            });
            process.exit(1);
        }
    } else if (importPath) {
        try {
            const { downSQL, imports, upSQL } = await eval(`import('${importPath}')`);
            return {
                downSQL,
                imports,
                upSQL
            };
        } catch (_err) {
            if (importPath?.includes('/')) {
                // We can assume that the intent was to import a file, thus we throw an error.
                throw new Error(`Error importing migration file from ${importPath}`);
            }
            // Silently fail. If the migration cannot be imported, it will be created as a blank migration and the import path will be used as the migration name.
            return {};
        }
    }
    return {};
}; //# sourceMappingURL=getPredefinedMigration.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/writeMigrationIndex.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "writeMigrationIndex": (()=>writeMigrationIndex)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$get$2d$tsconfig$40$4$2e$8$2e$1$2f$node_modules$2f$get$2d$tsconfig$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/get-tsconfig@4.8.1/node_modules/get-tsconfig/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
;
;
;
// Function to get all migration files (TS or JS) excluding 'index'
const getMigrationFiles = (dir)=>{
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(dir).filter((file)=>(file.endsWith('.ts') || file.endsWith('.js')) && file !== 'index.ts' && file !== 'index.js').sort();
};
// Function to generate the index.ts content
const generateIndexContent = (files)=>{
    const tsconfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$get$2d$tsconfig$40$4$2e$8$2e$1$2f$node_modules$2f$get$2d$tsconfig$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTsconfig"])();
    const importExt = tsconfig?.config?.compilerOptions?.moduleResolution === 'NodeNext' ? '.js' : '';
    let imports = '';
    let exportsArray = 'export const migrations = [\n';
    files.forEach((file, index)=>{
        const fileNameWithoutExt = file.replace(/\.[^/.]+$/, '');
        imports += `import * as migration_${fileNameWithoutExt} from './${fileNameWithoutExt}${importExt}';\n`;
        exportsArray += `  {
    up: migration_${fileNameWithoutExt}.up,
    down: migration_${fileNameWithoutExt}.down,
    name: '${fileNameWithoutExt}'${index !== files.length - 1 ? ',' : ''}\n  },\n`;
    });
    exportsArray += '];\n';
    return imports + '\n' + exportsArray;
};
const writeMigrationIndex = (args)=>{
    const migrationFiles = getMigrationFiles(args.migrationsDir);
    const indexContent = generateIndexContent(migrationFiles);
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(args.migrationsDir, 'index.ts'), indexContent);
}; //# sourceMappingURL=writeMigrationIndex.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrationTemplate.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrationTemplate": (()=>migrationTemplate)
});
const migrationTemplate = `
import {
  MigrateUpArgs,
  MigrateDownArgs,
} from "@payloadcms/db-mongodb";

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  // Migration code
};

export async function down({ payload, req }: MigrateDownArgs): Promise<void> {
  // Migration code
};
`; //# sourceMappingURL=migrationTemplate.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/createMigration.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createMigration": (()=>createMigration)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationTemplate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrationTemplate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$writeMigrationIndex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/writeMigrationIndex.js [app-route] (ecmascript)");
;
;
;
const createMigration = function createMigration({ migrationName, payload }) {
    const dir = payload.db.migrationDir;
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(dir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(dir);
    }
    const [yyymmdd, hhmmss] = new Date().toISOString().split('T');
    const formattedDate = yyymmdd.replace(/\D/g, '');
    const formattedTime = hhmmss.split('.')[0].replace(/\D/g, '');
    const timestamp = `${formattedDate}_${formattedTime}`;
    const formattedName = migrationName.replace(/\W/g, '_');
    const fileName = `${timestamp}_${formattedName}.ts`;
    const filePath = `${dir}/${fileName}`;
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationTemplate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrationTemplate"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$writeMigrationIndex$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeMigrationIndex"])({
        migrationsDir: payload.db.migrationDir
    });
    payload.logger.info({
        msg: `Migration created at ${filePath}`
    });
}; //# sourceMappingURL=createMigration.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrate.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrate": (()=>migrate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getMigrations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
;
const migrate = async function migrate(args) {
    const { payload } = this;
    const migrationFiles = args?.migrations || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    const newBatch = latestBatch + 1;
    // Execute 'up' function for each migration sequentially
    for (const migration of migrationFiles){
        const existingMigration = existingMigrations.find((existing)=>existing.name === migration.name);
        // Run migration if not found in database
        if (existingMigration) {
            continue;
        }
        const start = Date.now();
        const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            const session = payload.db.sessions?.[await req.transactionID];
            await migration.up({
                payload,
                req,
                session
            });
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    batch: newBatch
                },
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: `Error running migration ${migration.name}`
            });
            throw err;
        }
    }
}; //# sourceMappingURL=migrate.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateDown.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateDown": (()=>migrateDown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getMigrations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function migrateDown() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations, latestBatch } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
        return;
    }
    payload.logger.info({
        msg: `Rolling back batch ${latestBatch} consisting of ${existingMigrations.length} migration(s).`
    });
    const latestBatchMigrations = existingMigrations.filter(({ batch })=>batch === latestBatch);
    for (const migration of latestBatchMigrations){
        const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
        if (!migrationFile) {
            throw new Error(`Migration ${migration.name} not found locally.`);
        }
        const start = Date.now();
        const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
        try {
            payload.logger.info({
                msg: `Migrating down: ${migrationFile.name}`
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            const session = payload.db.sessions?.[await req.transactionID];
            await migrationFile.down({
                payload,
                req,
                session
            });
            payload.logger.info({
                msg: `Migrated down:  ${migrationFile.name} (${Date.now() - start}ms)`
            });
            // Waiting for implementation here
            await payload.delete({
                id: migration.id,
                collection: 'payload-migrations',
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            payload.logger.error({
                err,
                msg: `Error running migration ${migrationFile.name}`
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateDown.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateRefresh.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateRefresh": (()=>migrateRefresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getMigrations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function migrateRefresh() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
    if (existingMigrations?.length) {
        payload.logger.info({
            msg: `Rolling back all ${existingMigrations.length} migration(s).`
        });
        // Reverse order of migrations to rollback
        existingMigrations.reverse();
        for (const migration of existingMigrations){
            try {
                const migrationFile = migrationFiles.find((m)=>m.name === migration.name);
                if (!migrationFile) {
                    throw new Error(`Migration ${migration.name} not found locally.`);
                }
                payload.logger.info({
                    msg: `Migrating down: ${migration.name}`
                });
                const start = Date.now();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
                const session = payload.db.sessions?.[await req.transactionID];
                await migrationFile.down({
                    payload,
                    req,
                    session
                });
                payload.logger.info({
                    msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
                });
                await payload.delete({
                    collection: 'payload-migrations',
                    req,
                    where: {
                        name: {
                            equals: migration.name
                        }
                    }
                });
            } catch (err) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
                let msg = `Error running migration ${migration.name}. Rolling back.`;
                if (err instanceof Error) {
                    msg += ` ${err.message}`;
                }
                payload.logger.error({
                    err,
                    msg
                });
                process.exit(1);
            }
        }
    } else {
        payload.logger.info({
            msg: 'No migrations to rollback.'
        });
    }
    // Run all migrate up
    for (const migration of migrationFiles){
        payload.logger.info({
            msg: `Migrating: ${migration.name}`
        });
        try {
            const start = Date.now();
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
            await migration.up({
                payload,
                req
            });
            await payload.create({
                collection: 'payload-migrations',
                data: {
                    name: migration.name,
                    executed: true
                },
                req
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
            payload.logger.info({
                msg: `Migrated:  ${migration.name} (${Date.now() - start}ms)`
            });
        } catch (err) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
            let msg = `Error running migration ${migration.name}. Rolling back.`;
            if (err instanceof Error) {
                msg += ` ${err.message}`;
            }
            payload.logger.error({
                err,
                msg
            });
            process.exit(1);
        }
    }
} //# sourceMappingURL=migrateRefresh.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateReset.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateReset": (()=>migrateReset)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getMigrations.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/initTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/commitTransaction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/killTransaction.js [app-route] (ecmascript)");
;
;
;
;
;
;
async function migrateReset() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!existingMigrations?.length) {
        payload.logger.info({
            msg: 'No migrations to reset.'
        });
        return;
    }
    const req = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
    // Rollback all migrations in order
    for (const migration of migrationFiles){
        // Create or update migration in database
        const existingMigration = existingMigrations.find((existing)=>existing.name === migration.name);
        if (existingMigration) {
            payload.logger.info({
                msg: `Migrating down: ${migration.name}`
            });
            try {
                const start = Date.now();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$initTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTransaction"])(req);
                const session = payload.db.sessions?.[await req.transactionID];
                await migration.down({
                    payload,
                    req,
                    session
                });
                await payload.delete({
                    collection: 'payload-migrations',
                    req,
                    where: {
                        id: {
                            equals: existingMigration.id
                        }
                    }
                });
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$commitTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["commitTransaction"])(req);
                payload.logger.info({
                    msg: `Migrated down:  ${migration.name} (${Date.now() - start}ms)`
                });
            } catch (err) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$killTransaction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["killTransaction"])(req);
                payload.logger.error({
                    err,
                    msg: `Error running migration ${migration.name}`
                });
                throw err;
            }
        }
    }
    // Delete dev migration
    try {
        await payload.delete({
            collection: 'payload-migrations',
            where: {
                batch: {
                    equals: -1
                }
            }
        });
    } catch (err) {
        payload.logger.error({
            err,
            msg: 'Error deleting dev migration'
        });
    }
} //# sourceMappingURL=migrateReset.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateStatus.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrateStatus": (()=>migrateStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$console$2d$table$2d$printer$40$2$2e$12$2e$1$2f$node_modules$2f$console$2d$table$2d$printer$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/console-table-printer@2.12.1/node_modules/console-table-printer/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/readMigrationFiles.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/getMigrations.js [app-route] (ecmascript)");
;
;
;
async function migrateStatus() {
    const { payload } = this;
    const migrationFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$readMigrationFiles$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readMigrationFiles"])({
        payload
    });
    payload.logger.debug({
        msg: `Found ${migrationFiles.length} migration files.`
    });
    const { existingMigrations } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$getMigrations$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMigrations"])({
        payload
    });
    if (!migrationFiles.length) {
        payload.logger.info({
            msg: 'No migrations found.'
        });
        return;
    }
    // Compare migration files to existing migrations
    const statuses = migrationFiles.map((migration)=>{
        const existingMigration = existingMigrations.find((m)=>m.name === migration.name);
        return {
            Name: migration.name,
            Batch: existingMigration?.batch,
            Ran: existingMigration ? 'Yes' : 'No'
        };
    });
    const p = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$console$2d$table$2d$printer$40$2$2e$12$2e$1$2f$node_modules$2f$console$2d$table$2d$printer$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Table"]();
    statuses.forEach((s)=>{
        p.addRow(s, {
            color: s.Ran === 'Yes' ? 'green' : 'red'
        });
    });
    p.printTable();
} //# sourceMappingURL=migrateStatus.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/createDatabaseAdapter.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createDatabaseAdapter": (()=>createDatabaseAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$createMigration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/createMigration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateDown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateDown.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateRefresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateRefresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateReset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateReset.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrateStatus.js [app-route] (ecmascript)");
;
;
;
;
;
;
const beginTransaction = async ()=>null;
const rollbackTransaction = async ()=>null;
const commitTransaction = async ()=>null;
function createDatabaseAdapter(args) {
    return {
        // Default 'null' transaction functions
        beginTransaction,
        commitTransaction,
        createMigration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$createMigration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createMigration"],
        migrate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrate"],
        migrateDown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateDown$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateDown"],
        migrateFresh: async ({ forceAcceptWarning = null })=>null,
        migrateRefresh: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateRefresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateRefresh"],
        migrateReset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateReset$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateReset"],
        migrateStatus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrateStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrateStatus"],
        rollbackTransaction,
        ...args,
        // Ensure migrationDir is set
        migrationDir: args.migrationDir || 'migrations'
    };
} //# sourceMappingURL=createDatabaseAdapter.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/defaultBeginTransaction.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Default implementation of `beginTransaction` that returns a resolved promise of null
 */ __turbopack_esm__({
    "defaultBeginTransaction": (()=>defaultBeginTransaction)
});
function defaultBeginTransaction() {
    const promiseSingleton = Promise.resolve(null);
    return ()=>promiseSingleton;
} //# sourceMappingURL=defaultBeginTransaction.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/getLocalizedPaths.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLocalizedPaths": (()=>getLocalizedPaths)
});
function getLocalizedPaths({ collectionSlug, fields, globalSlug, incomingPath, locale, overrideAccess = false, payload }) {
    const pathSegments = incomingPath.split('.');
    const localizationConfig = payload.config.localization;
    let paths = [
        {
            collectionSlug,
            complete: false,
            field: undefined,
            fields,
            globalSlug,
            invalid: false,
            path: ''
        }
    ];
    for(let i = 0; i < pathSegments.length; i += 1){
        const segment = pathSegments[i];
        const lastIncompletePath = paths.find(({ complete })=>!complete);
        if (lastIncompletePath) {
            const { path } = lastIncompletePath;
            let currentPath = path ? `${path}.${segment}` : segment;
            let fieldsToSearch;
            let matchedField;
            if (lastIncompletePath?.field?.type === 'blocks') {
                if (segment === 'blockType') {
                    matchedField = {
                        name: 'blockType',
                        type: 'text'
                    };
                } else {
                    for (const block of lastIncompletePath.field.blocks){
                        matchedField = block.flattenedFields.find((field)=>field.name === segment);
                        if (matchedField) {
                            break;
                        }
                    }
                }
            } else {
                if (lastIncompletePath?.field && 'flattenedFields' in lastIncompletePath.field) {
                    fieldsToSearch = lastIncompletePath.field.flattenedFields;
                } else {
                    fieldsToSearch = lastIncompletePath.fields;
                }
                matchedField = fieldsToSearch.find((field)=>field.name === segment);
            }
            lastIncompletePath.field = matchedField;
            if (currentPath === 'globalType' && globalSlug) {
                lastIncompletePath.path = currentPath;
                lastIncompletePath.complete = true;
                lastIncompletePath.field = {
                    name: 'globalType',
                    type: 'text'
                };
                return paths;
            }
            if (!matchedField && currentPath === 'id' && i === pathSegments.length - 1) {
                lastIncompletePath.path = currentPath;
                const idField = {
                    name: 'id',
                    type: payload.db.defaultIDType
                };
                lastIncompletePath.field = idField;
                lastIncompletePath.complete = true;
                return paths;
            }
            if (matchedField) {
                if ('hidden' in matchedField && matchedField.hidden && !overrideAccess) {
                    lastIncompletePath.invalid = true;
                }
                const nextSegment = pathSegments[i + 1];
                const nextSegmentIsLocale = localizationConfig && localizationConfig.localeCodes.includes(nextSegment);
                if (nextSegmentIsLocale) {
                    // Skip the next iteration, because it's a locale
                    i += 1;
                    currentPath = `${currentPath}.${nextSegment}`;
                } else if (localizationConfig && 'localized' in matchedField && matchedField.localized) {
                    currentPath = `${currentPath}.${locale}`;
                }
                switch(matchedField.type){
                    case 'json':
                    case 'richText':
                        {
                            const upcomingSegments = pathSegments.slice(i + 1).join('.');
                            lastIncompletePath.complete = true;
                            lastIncompletePath.path = upcomingSegments ? `${currentPath}.${upcomingSegments}` : currentPath;
                            return paths;
                        }
                    case 'relationship':
                    case 'upload':
                        {
                            // If this is a polymorphic relation,
                            // We only support querying directly (no nested querying)
                            if (typeof matchedField.relationTo !== 'string') {
                                const lastSegmentIsValid = [
                                    'relationTo',
                                    'value'
                                ].includes(pathSegments[pathSegments.length - 1]) || pathSegments.length === 1 || pathSegments.length === 2 && pathSegments[0] === 'version';
                                lastIncompletePath.path = pathSegments.join('.');
                                if (lastSegmentIsValid) {
                                    lastIncompletePath.complete = true;
                                } else {
                                    lastIncompletePath.invalid = true;
                                    return paths;
                                }
                            } else {
                                lastIncompletePath.complete = true;
                                lastIncompletePath.path = currentPath;
                                const nestedPathToQuery = pathSegments.slice(nextSegmentIsLocale ? i + 2 : i + 1).join('.');
                                if (nestedPathToQuery) {
                                    const relatedCollection = payload.collections[matchedField.relationTo].config;
                                    const remainingPaths = getLocalizedPaths({
                                        collectionSlug: relatedCollection.slug,
                                        fields: relatedCollection.flattenedFields,
                                        globalSlug,
                                        incomingPath: nestedPathToQuery,
                                        locale,
                                        payload
                                    });
                                    paths = [
                                        ...paths,
                                        ...remainingPaths
                                    ];
                                }
                                return paths;
                            }
                            break;
                        }
                    default:
                        {
                            if (i + 1 === pathSegments.length) {
                                lastIncompletePath.complete = true;
                            }
                            lastIncompletePath.path = currentPath;
                        }
                }
            } else {
                lastIncompletePath.invalid = true;
                lastIncompletePath.path = currentPath;
                return paths;
            }
        }
    }
    return paths;
} //# sourceMappingURL=getLocalizedPaths.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/queryValidation/validateSearchParams.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateSearchParam": (()=>validateSearchParam)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPolicies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getEntityPolicies.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$getLocalizedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/getLocalizedPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
;
;
;
;
;
async function validateSearchParam({ collectionConfig, errors, fields, globalConfig, operator, overrideAccess, path: incomingPath, policies, req, val, versionFields }) {
    // Replace GraphQL nested field double underscore formatting
    let sanitizedPath;
    if (incomingPath === '_id') {
        sanitizedPath = 'id';
    } else {
        sanitizedPath = incomingPath.replace(/__/g, '.');
    }
    let paths = [];
    const { slug } = collectionConfig || globalConfig;
    if (globalConfig && !policies.globals[slug]) {
        policies.globals[slug] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPolicies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEntityPolicies"])({
            type: 'global',
            entity: globalConfig,
            operations: [
                'read'
            ],
            req
        });
    }
    if (sanitizedPath !== 'id') {
        paths = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$getLocalizedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLocalizedPaths"])({
            collectionSlug: collectionConfig?.slug,
            fields,
            globalSlug: globalConfig?.slug,
            incomingPath: sanitizedPath,
            locale: req.locale,
            overrideAccess,
            payload: req.payload
        });
    }
    const promises = [];
    // Sanitize relation.otherRelation.id to relation.otherRelation
    if (paths.at(-1)?.path === 'id') {
        const previousField = paths.at(-2)?.field;
        if (previousField && (previousField.type === 'relationship' || previousField.type === 'upload') && typeof previousField.relationTo === 'string') {
            paths.pop();
        }
    }
    promises.push(...paths.map(async ({ collectionSlug, field, invalid, path }, i)=>{
        if (invalid) {
            errors.push({
                path
            });
            return;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldIsVirtual"])(field)) {
            errors.push({
                path
            });
        }
        if (!overrideAccess && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if (collectionSlug) {
                if (!policies.collections[collectionSlug]) {
                    policies.collections[collectionSlug] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getEntityPolicies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getEntityPolicies"])({
                        type: 'collection',
                        entity: req.payload.collections[collectionSlug].config,
                        operations: [
                            'read'
                        ],
                        req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(req, 'transactionID')
                    });
                }
                if ([
                    'hash',
                    'salt'
                ].includes(incomingPath) && collectionConfig.auth && !collectionConfig.auth?.disableLocalStrategy) {
                    errors.push({
                        path: incomingPath
                    });
                }
            }
            let fieldPath = path;
            // remove locale from end of path
            if (path.endsWith(`.${req.locale}`)) {
                fieldPath = path.slice(0, -(req.locale.length + 1));
            }
            // remove ".value" from ends of polymorphic relationship paths
            if ((field.type === 'relationship' || field.type === 'upload') && Array.isArray(field.relationTo)) {
                fieldPath = fieldPath.replace('.value', '');
            }
            const entityType = globalConfig ? 'globals' : 'collections';
            const entitySlug = collectionSlug || globalConfig.slug;
            const segments = fieldPath.split('.');
            let fieldAccess;
            if (versionFields) {
                fieldAccess = policies[entityType][entitySlug];
                if (segments[0] === 'parent' || segments[0] === 'version') {
                    segments.shift();
                }
            } else {
                fieldAccess = policies[entityType][entitySlug].fields;
            }
            segments.forEach((segment)=>{
                if (fieldAccess[segment]) {
                    if ('fields' in fieldAccess[segment]) {
                        fieldAccess = fieldAccess[segment].fields;
                    } else if ('blocks' in fieldAccess[segment]) {
                        fieldAccess = fieldAccess[segment];
                    } else {
                        fieldAccess = fieldAccess[segment];
                    }
                }
            });
            if (!fieldAccess?.read?.permission) {
                errors.push({
                    path: fieldPath
                });
            }
        }
        if (i > 1) {
            // Remove top collection and reverse array
            // to work backwards from top
            const pathsToQuery = paths.slice(1).reverse();
            pathsToQuery.forEach(({ collectionSlug: pathCollectionSlug, path: subPath }, pathToQueryIndex)=>{
                // On the "deepest" collection,
                // validate query of the relationship
                if (pathToQueryIndex === 0) {
                    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                        collectionConfig: req.payload.collections[pathCollectionSlug].config,
                        errors,
                        globalConfig: undefined,
                        overrideAccess,
                        policies,
                        req,
                        where: {
                            [subPath]: {
                                [operator]: val
                            }
                        }
                    }));
                }
            });
        }
    }));
    await Promise.all(promises);
} //# sourceMappingURL=validateSearchParams.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateQueryPaths": (()=>validateQueryPaths)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/types/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateSearchParams$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/queryValidation/validateSearchParams.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/QueryError.js [app-route] (ecmascript)");
;
;
;
const flattenWhere = (query)=>{
    const flattenedConstraints = [];
    for (const [key, val] of Object.entries(query)){
        if ((key === 'and' || key === 'or') && Array.isArray(val)) {
            for (const subVal of val){
                flattenedConstraints.push(...flattenWhere(subVal));
            }
        } else {
            flattenedConstraints.push({
                [key]: val
            });
        }
    }
    return flattenedConstraints;
};
async function validateQueryPaths({ collectionConfig, errors = [], globalConfig, overrideAccess, policies = {
    collections: {},
    globals: {}
}, req, versionFields, where }) {
    const fields = versionFields || (globalConfig || collectionConfig).flattenedFields;
    if (typeof where === 'object') {
        const whereFields = flattenWhere(where);
        // We need to determine if the whereKey is an AND, OR, or a schema path
        const promises = [];
        for (const constraint of whereFields){
            for(const path in constraint){
                for(const operator in constraint[path]){
                    const val = constraint[path][operator];
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$types$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validOperatorSet"].has(operator)) {
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateSearchParams$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateSearchParam"])({
                            collectionConfig,
                            errors,
                            fields,
                            globalConfig,
                            operator,
                            overrideAccess,
                            path,
                            policies,
                            req,
                            val,
                            versionFields
                        }));
                    }
                }
            }
        }
        await Promise.all(promises);
        if (errors.length > 0) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryError"](errors);
        }
    }
} //# sourceMappingURL=validateQueryPaths.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/sanitizeJoinQuery.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sanitizeJoinQuery": (()=>sanitizeJoinQuery)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/queryValidation/validateQueryPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/QueryError.js [app-route] (ecmascript)");
;
;
;
;
const sanitizeJoinQuery = async ({ collectionConfig, joins: joinsQuery, overrideAccess, req })=>{
    if (joinsQuery === false) {
        return false;
    }
    if (!joinsQuery) {
        joinsQuery = {};
    }
    const errors = [];
    const promises = [];
    for(const collectionSlug in collectionConfig.joins){
        for (const { field, joinPath } of collectionConfig.joins[collectionSlug]){
            if (joinsQuery[joinPath] === false) {
                continue;
            }
            const joinCollectionConfig = req.payload.collections[collectionSlug].config;
            const accessResult = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
                disableErrors: true,
                req
            }, joinCollectionConfig.access.read) : true;
            if (accessResult === false) {
                joinsQuery[joinPath] = false;
                continue;
            }
            if (!joinsQuery[joinPath]) {
                joinsQuery[joinPath] = {};
            }
            const joinQuery = joinsQuery[joinPath];
            if (!joinQuery.where) {
                joinQuery.where = {};
            }
            if (field.where) {
                joinQuery.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(joinQuery.where, field.where);
            }
            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$queryValidation$2f$validateQueryPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateQueryPaths"])({
                collectionConfig: joinCollectionConfig,
                errors,
                overrideAccess,
                req,
                // incoming where input, but we shouldn't validate generated from the access control.
                where: joinQuery.where
            }));
            if (typeof accessResult === 'object') {
                joinQuery.where = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(joinQuery.where, accessResult);
            }
        }
    }
    await Promise.all(promises);
    if (errors.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$QueryError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryError"](errors);
    }
    return joinsQuery;
}; //# sourceMappingURL=sanitizeJoinQuery.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrationsCollection.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "migrationsCollection": (()=>migrationsCollection)
});
const migrationsCollection = {
    slug: 'payload-migrations',
    admin: {
        hidden: true
    },
    endpoints: false,
    fields: [
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'batch',
            type: 'number'
        }
    ],
    graphQL: false,
    lockDocuments: false
}; //# sourceMappingURL=migrationsCollection.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/translations/getLocalI18n.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLocalI18n": (()=>getLocalI18n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/utilities/init.js [app-route] (ecmascript)");
;
const getLocalI18n = async ({ config, language })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initI18n"])({
        config: config.i18n,
        context: 'api',
        language
    }); //# sourceMappingURL=getLocalI18n.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/defaults.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaults": (()=>defaults)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/defaultAccess.js [app-route] (ecmascript)");
;
const defaults = {
    admin: {
        avatar: 'gravatar',
        components: {},
        custom: {},
        dateFormat: 'MMMM do yyyy, h:mm a',
        dependencies: {},
        importMap: {
            baseDir: `${typeof process?.cwd === 'function' ? process.cwd() : ''}`
        },
        meta: {
            defaultOGImageType: 'dynamic',
            titleSuffix: '- Payload'
        },
        routes: {
            account: '/account',
            createFirstUser: '/create-first-user',
            forgot: '/forgot',
            inactivity: '/logout-inactivity',
            login: '/login',
            logout: '/logout',
            reset: '/reset',
            unauthorized: '/unauthorized'
        },
        theme: 'all'
    },
    bin: [],
    collections: [],
    cookiePrefix: 'payload',
    cors: [],
    csrf: [],
    custom: {},
    defaultDepth: 2,
    defaultMaxTextLength: 40000,
    endpoints: [],
    globals: [],
    graphQL: {
        disablePlaygroundInProduction: true,
        maxComplexity: 1000,
        schemaOutputFile: `${typeof process?.cwd === 'function' ? process.cwd() : ''}/schema.graphql`
    },
    hooks: {},
    i18n: {},
    jobs: {
        access: {
            run: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]
        },
        deleteJobOnComplete: true,
        depth: 0
    },
    localization: false,
    maxDepth: 10,
    routes: {
        admin: '/admin',
        api: '/api',
        graphQL: '/graphql',
        graphQLPlayground: '/graphql-playground'
    },
    serverURL: '',
    telemetry: true,
    typescript: {
        autoGenerate: true,
        outputFile: `${typeof process?.cwd === 'function' ? process.cwd() : ''}/payload-types.ts`
    },
    upload: {}
}; //# sourceMappingURL=defaults.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/sanitize.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sanitizeConfig": (()=>sanitizeConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/languages/en.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/exports/utilities.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/defaultUser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidConfiguration.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/timezone/defaultTimezones.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/defaults.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$endpoints$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/endpoints/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/DuplicateCollection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/config/sanitize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/config/sanitize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$schedule$2f$job$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/schedule/job.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$jobsCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/config/jobsCollection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$lockedDocuments$2f$lockedDocumentsCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/lockedDocuments/lockedDocumentsCollection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$preferencesCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/preferencesCollection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationsCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/migrations/migrationsCollection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-route] (ecmascript)");
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
const sanitizeAdminConfig = (configToSanitize)=>{
    const sanitizedConfig = {
        ...configToSanitize
    };
    // default logging level will be 'error' if not provided
    sanitizedConfig.loggingLevels = {
        Forbidden: 'info',
        Locked: 'info',
        MissingFile: 'info',
        NotFound: 'info',
        ValidationError: 'info',
        ...sanitizedConfig.loggingLevels || {}
    };
    // add default user collection if none provided
    if (!sanitizedConfig?.admin?.user) {
        const firstCollectionWithAuth = sanitizedConfig.collections.find(({ auth })=>Boolean(auth));
        if (firstCollectionWithAuth) {
            sanitizedConfig.admin.user = firstCollectionWithAuth.slug;
        } else {
            sanitizedConfig.admin.user = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultUserCollection"].slug;
            sanitizedConfig.collections.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$defaultUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultUserCollection"]);
        }
    }
    const userCollection = sanitizedConfig.collections.find(({ slug })=>slug === sanitizedConfig.admin.user);
    if (!userCollection || !userCollection.auth) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidConfiguration"](`${sanitizedConfig.admin.user} is not a valid admin user collection`);
    }
    if (sanitizedConfig?.admin?.timezones) {
        if (typeof sanitizedConfig?.admin?.timezones?.supportedTimezones === 'function') {
            sanitizedConfig.admin.timezones.supportedTimezones = sanitizedConfig.admin.timezones.supportedTimezones({
                defaultTimezones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultTimezones"]
            });
        }
        if (!sanitizedConfig?.admin?.timezones?.supportedTimezones) {
            sanitizedConfig.admin.timezones.supportedTimezones = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultTimezones"];
        }
    } else {
        sanitizedConfig.admin.timezones = {
            supportedTimezones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaultTimezones"]
        };
    }
    // Timezones supported by the Intl API
    const _internalSupportedTimezones = Intl.supportedValuesOf('timeZone');
    sanitizedConfig.admin.timezones.supportedTimezones.forEach((timezone)=>{
        if (!_internalSupportedTimezones.includes(timezone.value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidConfiguration$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["InvalidConfiguration"](`Timezone ${timezone.value} is not supported by the current runtime via the Intl API.`);
        }
    });
    return sanitizedConfig;
};
const sanitizeConfig = async (incomingConfig)=>{
    const configWithDefaults = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"],
        ...incomingConfig,
        admin: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].admin,
            ...incomingConfig?.admin,
            meta: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].admin.meta,
                ...incomingConfig?.admin?.meta
            },
            routes: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].admin.routes,
                ...incomingConfig?.admin?.routes
            }
        },
        graphQL: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].graphQL,
            ...incomingConfig?.graphQL
        },
        jobs: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].jobs,
            ...incomingConfig?.jobs,
            access: {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].jobs.access,
                ...incomingConfig?.jobs?.access
            },
            tasks: incomingConfig?.jobs?.tasks || [],
            workflows: incomingConfig?.jobs?.workflows || []
        },
        routes: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].routes,
            ...incomingConfig?.routes
        },
        typescript: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["defaults"].typescript,
            ...incomingConfig?.typescript
        }
    };
    if (!configWithDefaults?.serverURL) {
        configWithDefaults.serverURL = '';
    }
    if (process.env.NEXT_BASE_PATH) {
        if (!incomingConfig?.routes?.api) {
            // check for incomingConfig, as configWithDefaults will always have a default value for routes.api
            configWithDefaults.routes.api = process.env.NEXT_BASE_PATH + '/api';
        }
    }
    const config = sanitizeAdminConfig(configWithDefaults);
    if (!config.endpoints) {
        config.endpoints = [];
    }
    for (const endpoint of __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$endpoints$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authRootEndpoints"]){
        config.endpoints.push(endpoint);
    }
    if (config.localization && config.localization.locales?.length > 0) {
        // clone localization config so to not break everything
        const firstLocale = config.localization.locales[0];
        if (typeof firstLocale === 'string') {
            config.localization.localeCodes = [
                ...config.localization.locales
            ];
            // is string[], so convert to Locale[]
            config.localization.locales = config.localization.locales.map((locale)=>({
                    code: locale,
                    label: locale,
                    rtl: false,
                    toString: ()=>locale
                }));
        } else {
            // is Locale[], so convert to string[] for localeCodes
            config.localization.localeCodes = config.localization.locales.reduce((locales, locale)=>{
                locales.push(locale.code);
                return locales;
            }, []);
            config.localization.locales = config.localization.locales.map((locale)=>({
                    ...locale,
                    toString: ()=>locale.code
                }));
        }
        // Default fallback to true if not provided
        config.localization.fallback = config.localization?.fallback ?? true;
    }
    const i18nConfig = {
        fallbackLanguage: 'en',
        supportedLanguages: {
            en: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$languages$2f$en$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["en"]
        },
        translations: {}
    };
    if (incomingConfig?.i18n) {
        i18nConfig.supportedLanguages = incomingConfig.i18n?.supportedLanguages || i18nConfig.supportedLanguages;
        const supportedLangKeys = Object.keys(i18nConfig.supportedLanguages);
        const fallbackLang = incomingConfig.i18n?.fallbackLanguage || i18nConfig.fallbackLanguage;
        i18nConfig.fallbackLanguage = supportedLangKeys.includes(fallbackLang) ? fallbackLang : supportedLangKeys[0];
        i18nConfig.translations = incomingConfig.i18n?.translations || i18nConfig.translations;
    }
    config.i18n = i18nConfig;
    const richTextSanitizationPromises = [];
    const schedulePublishCollections = [];
    const schedulePublishGlobals = [];
    const collectionSlugs = new Set();
    for(let i = 0; i < config.collections.length; i++){
        if (collectionSlugs.has(config.collections[i].slug)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DuplicateCollection"]('slug', config.collections[i].slug);
        }
        collectionSlugs.add(config.collections[i].slug);
        const draftsConfig = config.collections[i]?.versions?.drafts;
        if (typeof draftsConfig === 'object' && draftsConfig.schedulePublish) {
            schedulePublishCollections.push(config.collections[i].slug);
        }
        config.collections[i] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, config.collections[i], richTextSanitizationPromises);
    }
    if (config.globals.length > 0) {
        for(let i = 0; i < config.globals.length; i++){
            const draftsConfig = config.globals[i]?.versions?.drafts;
            if (typeof draftsConfig === 'object' && draftsConfig.schedulePublish) {
                schedulePublishGlobals.push(config.globals[i].slug);
            }
            config.globals[i] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeGlobal"])(config, config.globals[i], richTextSanitizationPromises);
        }
    }
    if (schedulePublishCollections.length > 0 || schedulePublishGlobals.length > 0) {
        if (!Array.isArray(configWithDefaults.jobs?.tasks)) {
            configWithDefaults.jobs.tasks = [];
        }
        configWithDefaults.jobs.tasks.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$schedule$2f$job$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSchedulePublishTask"])({
            adminUserSlug: config.admin.user,
            collections: schedulePublishCollections,
            globals: schedulePublishGlobals
        }));
    }
    // Need to add default jobs collection before locked documents collections
    if (Array.isArray(configWithDefaults.jobs?.tasks) && configWithDefaults.jobs?.tasks?.length || Array.isArray(configWithDefaults.jobs?.workflows) && configWithDefaults.jobs?.workflows?.length) {
        let defaultJobsCollection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$jobsCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDefaultJobsCollection"])(config);
        if (typeof configWithDefaults.jobs.jobsCollectionOverrides === 'function') {
            defaultJobsCollection = configWithDefaults.jobs.jobsCollectionOverrides({
                defaultJobsCollection
            });
        }
        const sanitizedJobsCollection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, defaultJobsCollection, richTextSanitizationPromises);
        configWithDefaults.collections.push(sanitizedJobsCollection);
    }
    configWithDefaults.collections.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$lockedDocuments$2f$lockedDocumentsCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLockedDocumentsCollection"])(config), richTextSanitizationPromises));
    configWithDefaults.collections.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$preferencesCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(config), richTextSanitizationPromises));
    configWithDefaults.collections.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeCollection"])(config, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$migrations$2f$migrationsCollection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["migrationsCollection"], richTextSanitizationPromises));
    if (config.serverURL !== '') {
        config.csrf.push(config.serverURL);
    }
    // Get deduped list of upload adapters
    if (!config.upload) {
        config.upload = {
            adapters: []
        };
    }
    config.upload.adapters = Array.from(new Set(config.collections.map((c)=>c.upload?.adapter).filter(Boolean)));
    // Pass through the email config as is so adapters don't break
    if (incomingConfig.email) {
        config.email = incomingConfig.email;
    }
    /*
    Execute richText sanitization
   */ if (typeof incomingConfig.editor === 'function') {
        config.editor = await incomingConfig.editor({
            config: config,
            isRoot: true,
            parentIsLocalized: false
        });
        if (config.editor.i18n && Object.keys(config.editor.i18n).length >= 0) {
            config.i18n.translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepMergeSimple"])(config.i18n.translations, config.editor.i18n);
        }
    }
    const promises = [];
    for (const sanitizeFunction of richTextSanitizationPromises){
        promises.push(sanitizeFunction(config));
    }
    await Promise.all(promises);
    return config;
}; //# sourceMappingURL=sanitize.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/build.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildConfig": (()=>buildConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/sanitize.js [app-route] (ecmascript)");
;
async function buildConfig(config) {
    if (Array.isArray(config.plugins)) {
        const configAfterPlugins = await config.plugins.reduce(async (acc, plugin)=>{
            const configAfterPlugin = await acc;
            return plugin(configAfterPlugin);
        }, Promise.resolve(config));
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeConfig"])(configAfterPlugins);
    }
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$sanitize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sanitizeConfig"])(config);
} //# sourceMappingURL=build.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/types.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serverProps": (()=>serverProps)
});
const serverProps = [
    'payload',
    'i18n',
    'locale',
    'params',
    'permissions',
    'searchParams',
    'permissions'
]; //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/duplicateDocument/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDuplicateDocumentData": (()=>getDuplicateDocumentData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/getLatestCollectionVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
const getDuplicateDocumentData = async ({ id, collectionConfig, draftArg, overrideAccess, req, shouldSaveDraft })=>{
    const { payload } = req;
    // /////////////////////////////////////
    // Read Access
    // /////////////////////////////////////
    const accessResults = !overrideAccess ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
        id,
        req
    }, collectionConfig.access.read) : true;
    const hasWherePolicy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["hasWhereAccessResult"])(accessResults);
    // /////////////////////////////////////
    // Retrieve document
    // /////////////////////////////////////
    const findOneArgs = {
        collection: collectionConfig.slug,
        locale: req.locale,
        req,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])({
            id: {
                equals: id
            }
        }, accessResults)
    };
    let duplicatedFromDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$getLatestCollectionVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLatestCollectionVersion"])({
        id,
        config: collectionConfig,
        payload,
        query: findOneArgs,
        req
    });
    if (!duplicatedFromDocWithLocales && !hasWherePolicy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
    }
    if (!duplicatedFromDocWithLocales && hasWherePolicy) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    // remove the createdAt timestamp and rely on the db to set it
    if ('createdAt' in duplicatedFromDocWithLocales) {
        delete duplicatedFromDocWithLocales.createdAt;
    }
    // remove the id and rely on the db to set it
    if ('id' in duplicatedFromDocWithLocales) {
        delete duplicatedFromDocWithLocales.id;
    }
    duplicatedFromDocWithLocales = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["beforeDuplicate"])({
        id,
        collection: collectionConfig,
        context: req.context,
        doc: duplicatedFromDocWithLocales,
        overrideAccess,
        req
    });
    // for version enabled collections, override the current status with draft, unless draft is explicitly set to false
    if (shouldSaveDraft) {
        duplicatedFromDocWithLocales._status = 'draft';
    }
    const duplicatedFromDoc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["afterRead"])({
        collection: collectionConfig,
        context: req.context,
        depth: 0,
        doc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(duplicatedFromDocWithLocales),
        draft: draftArg,
        fallbackLocale: null,
        global: null,
        locale: req.locale,
        overrideAccess: true,
        req,
        showHiddenFields: true
    });
    return {
        duplicatedFromDoc,
        duplicatedFromDocWithLocales
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/deleteUserPreferences.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteUserPreferences": (()=>deleteUserPreferences)
});
const deleteUserPreferences = async ({ collectionConfig, ids, payload, req })=>{
    if (collectionConfig.auth) {
        await payload.db.deleteMany({
            collection: 'payload-preferences',
            req,
            where: {
                or: [
                    {
                        and: [
                            {
                                'user.value': {
                                    in: ids
                                }
                            },
                            {
                                'user.relationTo': {
                                    equals: collectionConfig.slug
                                }
                            }
                        ]
                    },
                    {
                        key: {
                            in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
                        }
                    }
                ]
            }
        });
    } else {
        await payload.db.deleteMany({
            collection: 'payload-preferences',
            req,
            where: {
                key: {
                    in: ids.map((id)=>`collection-${collectionConfig.slug}-${id}`)
                }
            }
        });
    }
}; //# sourceMappingURL=deleteUserPreferences.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/operations/findOne.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findOne": (()=>findOne)
});
async function findOne(args) {
    const { key, req: { payload }, req, user } = args;
    if (!user) {
        return null;
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const { docs } = await payload.db.find({
        collection: 'payload-preferences',
        limit: 1,
        pagination: false,
        req,
        sort: '-updatedAt',
        where
    });
    return docs?.[0] || null;
} //# sourceMappingURL=findOne.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/requestHandlers/findOne.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findByIDHandler": (()=>findByIDHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/operations/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
;
;
const findByIDHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json();
    } catch (error) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOne"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData.user
    });
    return Response.json({
        ...result ? result : {
            message: reqWithData.t('general:notFound'),
            value: null
        }
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=findOne.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/operations/delete.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteOperation": (()=>deleteOperation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/UnauthorizedError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/NotFound.js [app-route] (ecmascript)");
;
;
async function deleteOperation(args) {
    const { key, req: { payload }, req, user } = args;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnauthorizedError"](req.t);
    }
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const result = await payload.db.deleteOne({
        collection: 'payload-preferences',
        req,
        where
    });
    if (result) {
        return result;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$NotFound$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NotFound"](req.t);
} //# sourceMappingURL=delete.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/requestHandlers/delete.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteHandler": (()=>deleteHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/operations/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
;
;
const deleteHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json();
    } catch (error) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteOperation"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData.user
    });
    return Response.json({
        ...result,
        message: reqWithData.t('general:deletedSuccessfully')
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=delete.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/operations/update.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "update": (()=>update)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/UnauthorizedError.js [app-route] (ecmascript)");
;
async function update(args) {
    const { key, req: { payload }, req, user, value } = args;
    if (!user) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$UnauthorizedError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UnauthorizedError"](req.t);
    }
    const collection = 'payload-preferences';
    const where = {
        and: [
            {
                key: {
                    equals: key
                }
            },
            {
                'user.value': {
                    equals: user.id
                }
            },
            {
                'user.relationTo': {
                    equals: user.collection
                }
            }
        ]
    };
    const preference = {
        key,
        user: {
            relationTo: user.collection,
            value: user.id
        },
        value
    };
    return await payload.db.upsert({
        collection,
        data: preference,
        req,
        where
    });
} //# sourceMappingURL=update.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/requestHandlers/update.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "updateHandler": (()=>updateHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/operations/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
;
;
const updateHandler = async (incomingReq)=>{
    // We cannot import the addDataAndFileToRequest utility here from the 'next' package because of dependency issues
    // However that utility should be used where possible instead of manually appending the data
    let data;
    try {
        data = await incomingReq.json();
    } catch (_err) {
        data = {};
    }
    const reqWithData = incomingReq;
    if (data) {
        reqWithData.data = data;
        reqWithData.json = ()=>Promise.resolve(data);
    }
    const doc = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["update"])({
        key: reqWithData.routeParams?.key,
        req: reqWithData,
        user: reqWithData?.user,
        value: reqWithData.data.value || reqWithData.data
    });
    return Response.json({
        doc,
        message: reqWithData.t('general:updatedSuccessfully')
    }, {
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].OK
    });
}; //# sourceMappingURL=update.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/preferencesCollection.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/requestHandlers/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/requestHandlers/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/preferences/requestHandlers/update.js [app-route] (ecmascript)");
;
;
;
const preferenceAccess = ({ req })=>{
    if (!req.user) {
        return false;
    }
    return {
        'user.value': {
            equals: req?.user?.id
        }
    };
};
const getPreferencesCollection = (config)=>({
        slug: 'payload-preferences',
        access: {
            delete: preferenceAccess,
            read: preferenceAccess
        },
        admin: {
            hidden: true
        },
        endpoints: [
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findByIDHandler"],
                method: 'get',
                path: '/:key'
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteHandler"],
                method: 'delete',
                path: '/:key'
            },
            {
                handler: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$preferences$2f$requestHandlers$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateHandler"],
                method: 'post',
                path: '/:key'
            }
        ],
        fields: [
            {
                name: 'user',
                type: 'relationship',
                hooks: {
                    beforeValidate: [
                        ({ req })=>{
                            if (!req?.user) {
                                return null;
                            }
                            return {
                                relationTo: req?.user.collection,
                                value: req?.user.id
                            };
                        }
                    ]
                },
                index: true,
                relationTo: config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug),
                required: true
            },
            {
                name: 'key',
                type: 'text',
                index: true
            },
            {
                name: 'value',
                type: 'json',
                validate: (value)=>{
                    if (value) {
                        try {
                            JSON.parse(JSON.stringify(value));
                        } catch  {
                            return 'Invalid JSON';
                        }
                    }
                    return true;
                }
            }
        ],
        lockDocuments: false
    });
const __TURBOPACK__default__export__ = getPreferencesCollection;
 //# sourceMappingURL=preferencesCollection.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/getUpdateJobFunction.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUpdateJobFunction": (()=>getUpdateJobFunction)
});
function getUpdateJobFunction(job, req) {
    return async (jobData)=>{
        const updatedJob = await req.payload.update({
            id: job.id,
            collection: 'payload-jobs',
            data: jobData,
            depth: 0,
            disableTransaction: true
        });
        // Update job object like this to modify the original object - that way, incoming changes (e.g. taskStatus field that will be re-generated through the hook) will be reflected in the calling function
        for(const key in updatedJob){
            job[key] = updatedJob[key];
        }
        return updatedJob;
    };
} //# sourceMappingURL=getUpdateJobFunction.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/importHandlerPath.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "importHandlerPath": (()=>importHandlerPath)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/url [external] (url, cjs)");
;
async function importHandlerPath(path) {
    let runner;
    const [runnerPath, runnerImportName] = path.split('#');
    let runnerModule;
    try {
        // We need to check for `require` for compatibility with outdated frameworks that do not
        // properly support ESM, like Jest. This is not done to support projects without "type": "module" set
        runnerModule = ("TURBOPACK compile-time truthy", 1) ? await eval(`require('${runnerPath.replaceAll('\\', '/')}')`) : ("TURBOPACK unreachable", undefined);
    } catch (e) {
        throw new Error(`Error importing job queue handler module for path ${path}. This is an advanced feature that may require a sophisticated build pipeline, especially when using it in production or within Next.js, e.g. by calling opening the /api/payload-jobs/run endpoint. You will have to transpile the handler files separately and ensure they are available in the same location when the job is run. If you're using an endpoint to execute your jobs, it's recommended to define your handlers as functions directly in your Payload Config, or use import paths handlers outside of Next.js. Import Error: \n${e.message}`);
    }
    // If the path has indicated an #exportName, try to get it
    if (runnerImportName && runnerModule[runnerImportName]) {
        runner = runnerModule[runnerImportName];
    }
    // If there is a default export, use it
    if (!runner && runnerModule.default) {
        runner = runnerModule.default;
    }
    // Finally, use whatever was imported
    if (!runner) {
        runner = runnerModule;
    }
    return runner;
} //# sourceMappingURL=importHandlerPath.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/calculateBackoffWaitUntil.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calculateBackoffWaitUntil": (()=>calculateBackoffWaitUntil)
});
function calculateBackoffWaitUntil({ retriesConfig, totalTried }) {
    let waitUntil = new Date();
    if (typeof retriesConfig === 'object') {
        if (retriesConfig.backoff) {
            if (retriesConfig.backoff.type === 'fixed') {
                waitUntil = retriesConfig.backoff.delay ? new Date(new Date().getTime() + retriesConfig.backoff.delay) : new Date();
            } else if (retriesConfig.backoff.type === 'exponential') {
                // 2 ^ (attempts - 1) * delay (current attempt is not included in totalTried, thus no need for -1)
                const delay = retriesConfig.backoff.delay ? retriesConfig.backoff.delay : 0;
                waitUntil = new Date(new Date().getTime() + Math.pow(2, totalTried) * delay);
            }
        }
    }
    /*
  const differenceInMSBetweenNowAndWaitUntil = waitUntil.getTime() - new Date().getTime()

  const differenceInSBetweenNowAndWaitUntil = differenceInMSBetweenNowAndWaitUntil / 1000
  console.log('Calculated backoff', {
    differenceInMSBetweenNowAndWaitUntil,
    differenceInSBetweenNowAndWaitUntil,
    retriesConfig,
    totalTried,
  })*/ return waitUntil;
} //# sourceMappingURL=calculateBackoffWaitUntil.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/getRunTaskFunction.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getRunTaskFunction": (()=>getRunTaskFunction),
    "handleTaskFailed": (()=>handleTaskFailed)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/importHandlerPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/calculateBackoffWaitUntil.js [app-route] (ecmascript)");
;
;
async function getTaskHandlerFromConfig(taskConfig) {
    let handler;
    if (typeof taskConfig.handler === 'function') {
        handler = taskConfig.handler;
    } else {
        handler = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importHandlerPath"])(taskConfig.handler);
    }
    return handler;
}
async function handleTaskFailed({ error, executedAt, input, job, maxRetries, output, parent, req, retriesConfig, runnerOutput, state, taskConfig, taskID, taskSlug, taskStatus, updateJob }) {
    req.payload.logger.error({
        err: error,
        job,
        msg: `Error running task ${taskID}`,
        taskSlug
    });
    if (taskConfig?.onFail) {
        await taskConfig.onFail();
    }
    if (!job.log) {
        job.log = [];
    }
    const errorJSON = error ? {
        name: error.name,
        message: error.message,
        stack: error.stack
    } : runnerOutput.state;
    job.log.push({
        completedAt: new Date().toISOString(),
        error: errorJSON,
        executedAt: executedAt.toISOString(),
        input,
        output,
        parent: req?.payload?.config?.jobs?.addParentToTaskLog ? parent : undefined,
        state: 'failed',
        taskID,
        taskSlug
    });
    if (job.waitUntil) {
        // Check if waitUntil is in the past
        const waitUntil = new Date(job.waitUntil);
        if (waitUntil < new Date()) {
            // Outdated waitUntil, remove it
            delete job.waitUntil;
        }
    }
    if (!taskStatus?.complete && (taskStatus?.totalTried ?? 0) >= maxRetries) {
        state.reachedMaxRetries = true;
        await updateJob({
            error,
            hasError: true,
            log: job.log,
            processing: false,
            waitUntil: job.waitUntil
        });
        throw new Error(`Task ${taskSlug} has failed more than the allowed retries in workflow ${job.workflowSlug}${error ? `. Error: ${String(error)}` : ''}`);
    } else {
        // Job will retry. Let's determine when!
        const waitUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateBackoffWaitUntil"])({
            retriesConfig,
            totalTried: taskStatus?.totalTried ?? 0
        });
        // Update job's waitUntil only if this waitUntil is later than the current one
        if (!job.waitUntil || waitUntil > new Date(job.waitUntil)) {
            job.waitUntil = waitUntil.toISOString();
        }
        await updateJob({
            log: job.log,
            processing: false,
            waitUntil: job.waitUntil
        });
        throw error ?? new Error('Task failed');
    }
}
const getRunTaskFunction = (state, job, workflowConfig, req, isInline, updateJob, parent)=>{
    const runTask = (taskSlug)=>async (taskID, { input, retries, task })=>{
            const executedAt = new Date();
            let inlineRunner = null;
            if (isInline) {
                inlineRunner = task;
            }
            let taskConfig;
            if (!isInline) {
                taskConfig = req.payload.config.jobs.tasks.find((t)=>t.slug === taskSlug);
                if (!taskConfig) {
                    throw new Error(`Task ${taskSlug} not found in workflow ${job.workflowSlug}`);
                }
            }
            const retriesConfigFromPropsNormalized = retries == undefined || retries == null ? {} : typeof retries === 'number' ? {
                attempts: retries
            } : retries;
            const retriesConfigFromTaskConfigNormalized = taskConfig ? typeof taskConfig.retries === 'number' ? {
                attempts: taskConfig.retries
            } : taskConfig.retries : {};
            const finalRetriesConfig = {
                ...retriesConfigFromTaskConfigNormalized,
                ...retriesConfigFromPropsNormalized
            };
            const taskStatus = job?.taskStatus?.[taskSlug] ? job.taskStatus[taskSlug][taskID] : null;
            // Handle restoration of task if it succeeded in a previous run
            if (taskStatus && taskStatus.complete === true) {
                let shouldRestore = true;
                if (finalRetriesConfig?.shouldRestore === false) {
                    shouldRestore = false;
                } else if (typeof finalRetriesConfig?.shouldRestore === 'function') {
                    shouldRestore = await finalRetriesConfig.shouldRestore({
                        input,
                        job,
                        req,
                        taskStatus
                    });
                }
                if (shouldRestore) {
                    return taskStatus.output;
                }
            }
            let runner;
            if (isInline) {
                runner = inlineRunner;
            } else {
                if (!taskConfig) {
                    throw new Error(`Task ${taskSlug} not found in workflow ${job.workflowSlug}`);
                }
                runner = await getTaskHandlerFromConfig(taskConfig);
            }
            if (!runner || typeof runner !== 'function') {
                const errorMessage = isInline ? `Can't find runner for inline task with ID ${taskID}` : `Can't find runner while importing with the path ${typeof workflowConfig.handler === 'string' ? workflowConfig.handler : 'unknown - no string path'} in job type ${job.workflowSlug} for task ${taskSlug}.`;
                req.payload.logger.error(errorMessage);
                await updateJob({
                    error: {
                        error: errorMessage
                    },
                    hasError: true,
                    log: [
                        ...job.log,
                        {
                            completedAt: new Date().toISOString(),
                            error: errorMessage,
                            executedAt: executedAt.toISOString(),
                            parent: req?.payload?.config?.jobs?.addParentToTaskLog ? parent : undefined,
                            state: 'failed',
                            taskID,
                            taskSlug
                        }
                    ],
                    processing: false
                });
                return;
            }
            let output = {};
            let maxRetries = finalRetriesConfig?.attempts;
            if (maxRetries === undefined || maxRetries === null) {
                // Inherit retries from workflow config, if they are undefined and the workflow config has retries configured
                if (workflowConfig.retries !== undefined && workflowConfig.retries !== null) {
                    maxRetries = typeof workflowConfig.retries === 'object' ? workflowConfig.retries.attempts : workflowConfig.retries;
                } else {
                    maxRetries = 0;
                }
            }
            try {
                const runnerOutput = await runner({
                    inlineTask: getRunTaskFunction(state, job, workflowConfig, req, true, updateJob, {
                        taskID,
                        taskSlug
                    }),
                    input,
                    job: job,
                    req,
                    tasks: getRunTaskFunction(state, job, workflowConfig, req, false, updateJob, {
                        taskID,
                        taskSlug
                    })
                });
                if (runnerOutput.state === 'failed') {
                    await handleTaskFailed({
                        executedAt,
                        input,
                        job,
                        maxRetries,
                        output,
                        parent,
                        req,
                        retriesConfig: finalRetriesConfig,
                        runnerOutput,
                        state,
                        taskConfig,
                        taskID,
                        taskSlug,
                        taskStatus,
                        updateJob
                    });
                    throw new Error('Task failed');
                } else {
                    output = runnerOutput.output;
                }
            } catch (err) {
                await handleTaskFailed({
                    error: err,
                    executedAt,
                    input,
                    job,
                    maxRetries,
                    output,
                    parent,
                    req,
                    retriesConfig: finalRetriesConfig,
                    state,
                    taskConfig,
                    taskID,
                    taskSlug,
                    taskStatus,
                    updateJob
                });
                throw new Error('Task failed');
            }
            if (taskConfig?.onSuccess) {
                await taskConfig.onSuccess();
            }
            if (!job.log) {
                job.log = [];
            }
            job.log.push({
                completedAt: new Date().toISOString(),
                executedAt: executedAt.toISOString(),
                input,
                output,
                parent: req?.payload?.config?.jobs?.addParentToTaskLog ? parent : undefined,
                state: 'succeeded',
                taskID,
                taskSlug
            });
            await updateJob({
                log: job.log
            });
            return output;
        };
    if (isInline) {
        return runTask('inline');
    } else {
        const tasks = {};
        for (const task of req?.payload?.config?.jobs?.tasks ?? []){
            tasks[task.slug] = runTask(task.slug);
        }
        return tasks;
    }
}; //# sourceMappingURL=getRunTaskFunction.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/handleWorkflowError.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "handleWorkflowError": (()=>handleWorkflowError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/calculateBackoffWaitUntil.js [app-route] (ecmascript)");
;
function handleWorkflowError({ error, job, req, state, workflowConfig }) {
    const jobLabel = job.workflowSlug || `Task: ${job.taskSlug}`;
    let hasFinalError = state.reachedMaxRetries // If any TASK reached max retries, the job has an error
    ;
    const maxWorkflowRetries = (typeof workflowConfig.retries === 'object' ? workflowConfig.retries.attempts : workflowConfig.retries) ?? undefined;
    if (maxWorkflowRetries !== undefined && maxWorkflowRetries !== null && job.totalTried >= maxWorkflowRetries) {
        hasFinalError = true;
        state.reachedMaxRetries = true;
    }
    // Now let's handle workflow retries
    if (!hasFinalError) {
        if (job.waitUntil) {
            // Check if waitUntil is in the past
            const waitUntil = new Date(job.waitUntil);
            if (waitUntil < new Date()) {
                // Outdated waitUntil, remove it
                delete job.waitUntil;
            }
        }
        // Job will retry. Let's determine when!
        const waitUntil = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$calculateBackoffWaitUntil$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateBackoffWaitUntil"])({
            retriesConfig: workflowConfig.retries,
            totalTried: job.totalTried ?? 0
        });
        // Update job's waitUntil only if this waitUntil is later than the current one
        if (!job.waitUntil || waitUntil > new Date(job.waitUntil)) {
            job.waitUntil = waitUntil.toISOString();
        }
    }
    req.payload.logger.error({
        err: error,
        msg: `Error running job ${jobLabel} id: ${job.id} attempt ${job.totalTried + 1}${maxWorkflowRetries !== undefined ? '/' + (maxWorkflowRetries + 1) : ''}`
    });
    return {
        hasFinalError
    };
} //# sourceMappingURL=handleWorkflowError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJSONJob/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "runJSONJob": (()=>runJSONJob)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/getRunTaskFunction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/handleWorkflowError.js [app-route] (ecmascript)");
;
;
const runJSONJob = async ({ job, req, updateJob, workflowConfig, workflowHandler })=>{
    // Object so that we can pass contents by reference, not value.
    // We want any mutations to be reflected in here.
    const state = {
        reachedMaxRetries: false
    };
    const stepsToRun = [];
    for (const step of workflowHandler){
        if ('task' in step) {
            if (job?.taskStatus?.[step.task]?.[step.id]?.complete) {
                continue;
            }
        } else {
            if (job?.taskStatus?.['inline']?.[step.id]?.complete) {
                continue;
            }
        }
        if (step.condition && !step.condition({
            job: job
        })) {
            continue;
        }
        stepsToRun.push(step);
    }
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(state, job, workflowConfig, req, false, updateJob);
    const inlineTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(state, job, workflowConfig, req, true, updateJob);
    // Run the job
    let hasFinalError = false;
    let error;
    try {
        await Promise.all(stepsToRun.map(async (step)=>{
            if ('task' in step) {
                await tasks[step.task](step.id, {
                    input: step.input ? step.input({
                        job: job
                    }) : {},
                    retries: step.retries
                });
            } else {
                await inlineTask(step.id, {
                    retries: step.retries,
                    task: step.inlineTask
                });
            }
        }));
    } catch (err) {
        const errorResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleWorkflowError"])({
            error: err,
            job,
            req,
            state,
            workflowConfig
        });
        error = err;
        hasFinalError = errorResult.hasFinalError;
    }
    // Check if workflow has completed
    let workflowCompleted = false;
    for (const [slug, map] of Object.entries(job.taskStatus)){
        for (const [id, taskStatus] of Object.entries(map)){
            if (taskStatus.complete) {
                const step = workflowHandler.find((step)=>{
                    if ('task' in step) {
                        return step.task === slug && step.id === id;
                    } else {
                        return step.id === id && slug === 'inline';
                    }
                });
                if (step.completesJob) {
                    workflowCompleted = true;
                    break;
                }
            }
        }
    }
    if (workflowCompleted) {
        if (error) {
            // Tasks update the job if they error - but in case there is an unhandled error (e.g. in the workflow itself, not in a task)
            // we need to ensure the job is updated to reflect the error
            await updateJob({
                completedAt: new Date().toISOString(),
                error: hasFinalError ? error : undefined,
                hasError: hasFinalError,
                processing: false,
                totalTried: (job.totalTried ?? 0) + 1
            });
        } else {
            await updateJob({
                completedAt: new Date().toISOString(),
                processing: false,
                totalTried: (job.totalTried ?? 0) + 1
            });
        }
        return {
            status: 'success'
        };
    } else {
        if (error) {
            // Tasks update the job if they error - but in case there is an unhandled error (e.g. in the workflow itself, not in a task)
            // we need to ensure the job is updated to reflect the error
            await updateJob({
                error: hasFinalError ? error : undefined,
                hasError: hasFinalError,
                processing: false,
                totalTried: (job.totalTried ?? 0) + 1
            });
            return {
                status: hasFinalError ? 'error-reached-max-retries' : 'error'
            };
        } else {
            // Retry the job - no need to bump processing or totalTried as this does not count as a retry. A condition of a different task might have just opened up!
            return await runJSONJob({
                job,
                req,
                updateJob,
                workflowConfig,
                workflowHandler
            });
        }
    }
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "runJob": (()=>runJob)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/getRunTaskFunction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/handleWorkflowError.js [app-route] (ecmascript)");
;
;
const runJob = async ({ job, req, updateJob, workflowConfig, workflowHandler })=>{
    // Object so that we can pass contents by reference, not value.
    // We want any mutations to be reflected in here.
    const state = {
        reachedMaxRetries: false
    };
    // Run the job
    try {
        await workflowHandler({
            inlineTask: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(state, job, workflowConfig, req, true, updateJob),
            job: job,
            req,
            tasks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getRunTaskFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRunTaskFunction"])(state, job, workflowConfig, req, false, updateJob)
        });
    } catch (err) {
        const { hasFinalError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$handleWorkflowError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleWorkflowError"])({
            error: err,
            job,
            req,
            state,
            workflowConfig
        });
        const errorJSON = hasFinalError ? {
            name: err.name,
            message: err.message,
            stack: err.stack
        } : undefined;
        // Tasks update the job if they error - but in case there is an unhandled error (e.g. in the workflow itself, not in a task)
        // we need to ensure the job is updated to reflect the error
        await updateJob({
            error: errorJSON,
            hasError: hasFinalError,
            processing: false,
            totalTried: (job.totalTried ?? 0) + 1
        });
        return {
            status: hasFinalError ? 'error-reached-max-retries' : 'error'
        };
    }
    // Workflow has completed
    await updateJob({
        completedAt: new Date().toISOString(),
        processing: false,
        totalTried: (job.totalTried ?? 0) + 1
    });
    return {
        status: 'success'
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "runJobs": (()=>runJobs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getUpdateJobFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/getUpdateJobFunction.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/importHandlerPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJSONJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJSONJob/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/runJob/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
const runJobs = async ({ id, limit = 10, overrideAccess, queue, req, where: whereFromProps })=>{
    if (!overrideAccess) {
        const hasAccess = await req.payload.config.jobs.access.run({
            req
        });
        if (!hasAccess) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
    }
    const where = {
        and: [
            {
                completedAt: {
                    exists: false
                }
            },
            {
                hasError: {
                    not_equals: true
                }
            },
            {
                processing: {
                    equals: false
                }
            },
            {
                or: [
                    {
                        waitUntil: {
                            exists: false
                        }
                    },
                    {
                        waitUntil: {
                            less_than: new Date().toISOString()
                        }
                    }
                ]
            }
        ]
    };
    if (queue) {
        where.and.push({
            queue: {
                equals: queue
            }
        });
    }
    if (whereFromProps) {
        where.and.push(whereFromProps);
    }
    // Find all jobs and ensure we set job to processing: true as early as possible to reduce the chance of
    // the same job being picked up by another worker
    const jobsQuery = id ? {
        docs: [
            await req.payload.update({
                id,
                collection: 'payload-jobs',
                data: {
                    processing: true,
                    seenByWorker: true
                },
                depth: req.payload.config.jobs.depth,
                disableTransaction: true,
                showHiddenFields: true
            })
        ]
    } : await req.payload.update({
        collection: 'payload-jobs',
        data: {
            processing: true,
            seenByWorker: true
        },
        depth: req.payload.config.jobs.depth,
        disableTransaction: true,
        limit,
        showHiddenFields: true,
        where
    });
    /**
   * Just for logging purposes, we want to know how many jobs are new and how many are existing (= already been tried).
   * This is only for logs - in the end we still want to run all jobs, regardless of whether they are new or existing.
   */ const { newJobs } = jobsQuery.docs.reduce((acc, job)=>{
        if (job.totalTried > 0) {
            acc.existingJobs.push(job);
        } else {
            acc.newJobs.push(job);
        }
        return acc;
    }, {
        existingJobs: [],
        newJobs: []
    });
    if (!jobsQuery.docs.length) {
        return {
            noJobsRemaining: true,
            remainingJobsFromQueried: 0
        };
    }
    if (jobsQuery?.docs?.length) {
        req.payload.logger.info(`Running ${jobsQuery.docs.length} jobs.`);
    }
    const jobsToDelete = req.payload.config.jobs.deleteJobOnComplete ? [] : undefined;
    const jobPromises = jobsQuery.docs.map(async (job)=>{
        if (!job.workflowSlug && !job.taskSlug) {
            throw new Error('Job must have either a workflowSlug or a taskSlug');
        }
        const jobReq = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(req, 'transactionID');
        const workflowConfig = job.workflowSlug ? req.payload.config.jobs?.workflows.find(({ slug })=>slug === job.workflowSlug) : {
            slug: 'singleTask',
            handler: async ({ job, tasks })=>{
                await tasks[job.taskSlug]('1', {
                    input: job.input
                });
            }
        };
        if (!workflowConfig) {
            return null // Skip jobs with no workflow configuration
            ;
        }
        const updateJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$getUpdateJobFunction$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUpdateJobFunction"])(job, jobReq);
        // the runner will either be passed to the config
        // OR it will be a path, which we will need to import via eval to avoid
        // Next.js compiler dynamic import expression errors
        let workflowHandler;
        if (typeof workflowConfig.handler === 'function' || typeof workflowConfig.handler === 'object' && Array.isArray(workflowConfig.handler)) {
            workflowHandler = workflowConfig.handler;
        } else {
            workflowHandler = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$importHandlerPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["importHandlerPath"])(workflowConfig.handler);
            if (!workflowHandler) {
                const jobLabel = job.workflowSlug || `Task: ${job.taskSlug}`;
                const errorMessage = `Can't find runner while importing with the path ${workflowConfig.handler} in job type ${jobLabel}.`;
                req.payload.logger.error(errorMessage);
                await updateJob({
                    error: {
                        error: errorMessage
                    },
                    hasError: true,
                    processing: false
                });
                return;
            }
        }
        if (typeof workflowHandler === 'function') {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJob"])({
                job,
                req: jobReq,
                updateJob,
                workflowConfig,
                workflowHandler
            });
            if (result.status !== 'error' && jobsToDelete) {
                jobsToDelete.push(job.id);
            }
            return {
                id: job.id,
                result
            };
        } else {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$runJSONJob$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJSONJob"])({
                job,
                req: jobReq,
                updateJob,
                workflowConfig,
                workflowHandler
            });
            if (result.status !== 'error' && jobsToDelete) {
                jobsToDelete.push(job.id);
            }
            return {
                id: job.id,
                result
            };
        }
    });
    const resultsArray = await Promise.all(jobPromises);
    if (jobsToDelete && jobsToDelete.length > 0) {
        try {
            await req.payload.delete({
                collection: 'payload-jobs',
                req,
                where: {
                    id: {
                        in: jobsToDelete
                    }
                }
            });
        } catch (err) {
            req.payload.logger.error({
                err,
                msg: `failed to delete jobs ${jobsToDelete.join(', ')} on complete`
            });
        }
    }
    const resultsObject = resultsArray.reduce((acc, cur)=>{
        if (cur !== null) {
            // Check if there's a valid result to include
            acc[cur.id] = cur.result;
        }
        return acc;
    }, {});
    let remainingJobsFromQueried = 0;
    for(const jobID in resultsObject){
        const jobResult = resultsObject[jobID];
        if (jobResult.status === 'error') {
            remainingJobsFromQueried++ // Can be retried
            ;
        }
    }
    return {
        jobStatus: resultsObject,
        remainingJobsFromQueried
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/restEndpointRun.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "runJobsEndpoint": (()=>runJobsEndpoint)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/index.js [app-route] (ecmascript)");
;
const configHasJobs = (config)=>{
    if (!config.jobs) {
        return false;
    }
    if (config.jobs.tasks.length > 0) {
        return true;
    }
    if (Array.isArray(config.jobs.workflows) && config.jobs.workflows.length > 0) {
        return true;
    }
    return false;
};
const runJobsEndpoint = {
    handler: async (req)=>{
        if (!configHasJobs(req.payload.config)) {
            return Response.json({
                message: 'No jobs to run.'
            }, {
                status: 200
            });
        }
        const hasAccess = await req.payload.config.jobs.access.run({
            req
        });
        if (!hasAccess) {
            return Response.json({
                message: req.i18n.t('error:unauthorized')
            }, {
                status: 401
            });
        }
        const { limit, queue } = req.query;
        const runJobsArgs = {
            queue: 'default',
            req,
            // We are checking access above, so we can override it here
            overrideAccess: true
        };
        if (typeof queue === 'string') {
            runJobsArgs.queue = queue;
        }
        if (typeof limit !== 'undefined') {
            runJobsArgs.limit = Number(limit);
        }
        let noJobsRemaining = false;
        let remainingJobsFromQueried = 0;
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobs"])(runJobsArgs);
            noJobsRemaining = result.noJobsRemaining;
            remainingJobsFromQueried = result.remainingJobsFromQueried;
        } catch (err) {
            req.payload.logger.error({
                err,
                msg: 'There was an error running jobs:',
                queue: runJobsArgs.queue
            });
            return Response.json({
                message: req.i18n.t('error:unknown'),
                noJobsRemaining: true,
                remainingJobsFromQueried
            }, {
                status: 500
            });
        }
        return Response.json({
            message: req.i18n.t('general:success'),
            noJobsRemaining,
            remainingJobsFromQueried
        }, {
            status: 200
        });
    },
    method: 'get',
    path: '/run'
}; //# sourceMappingURL=restEndpointRun.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/utilities/getJobTaskStatus.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getJobTaskStatus": (()=>getJobTaskStatus)
});
const getJobTaskStatus = ({ jobLog })=>{
    const taskStatus = {};
    // First, add (in order) the steps from the config to
    // our status map
    for (const loggedJob of jobLog){
        if (!taskStatus[loggedJob.taskSlug]) {
            taskStatus[loggedJob.taskSlug] = {};
        }
        if (!taskStatus[loggedJob.taskSlug][loggedJob.taskID]) {
            taskStatus[loggedJob.taskSlug][loggedJob.taskID] = {
                complete: loggedJob.state === 'succeeded',
                input: loggedJob.input,
                output: loggedJob.output,
                taskSlug: loggedJob.taskSlug,
                totalTried: 1
            };
        } else {
            const newTaskStatus = taskStatus[loggedJob.taskSlug][loggedJob.taskID];
            newTaskStatus.totalTried += 1;
            if (loggedJob.state === 'succeeded') {
                newTaskStatus.complete = true;
                // As the task currently saved in taskStatus has likely failed and thus has no
                // Output data, we need to update it with the new data from the successful task
                newTaskStatus.output = loggedJob.output;
                newTaskStatus.input = loggedJob.input;
                newTaskStatus.taskSlug = loggedJob.taskSlug;
            }
            taskStatus[loggedJob.taskSlug][loggedJob.taskID] = newTaskStatus;
        }
    }
    return taskStatus;
}; //# sourceMappingURL=getJobTaskStatus.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/config/jobsCollection.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDefaultJobsCollection": (()=>getDefaultJobsCollection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$restEndpointRun$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/restEndpointRun.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getJobTaskStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/utilities/getJobTaskStatus.js [app-route] (ecmascript)");
;
;
const getDefaultJobsCollection = (config)=>{
    if (!Array.isArray(config?.jobs?.workflows)) {
        return null;
    }
    const workflowSlugs = new Set();
    const taskSlugs = new Set([
        'inline'
    ]);
    if (config.jobs?.workflows.length) {
        config.jobs?.workflows.forEach((workflow)=>{
            workflowSlugs.add(workflow.slug);
        });
    }
    if (config.jobs?.tasks.length) {
        config.jobs.tasks.forEach((task)=>{
            if (workflowSlugs.has(task.slug)) {
                throw new Error(`Task slug "${task.slug}" is already used by a workflow. No tasks are allowed to have the same slug as a workflow.`);
            }
            taskSlugs.add(task.slug);
        });
    }
    const logFields = [
        {
            name: 'executedAt',
            type: 'date',
            required: true
        },
        {
            name: 'completedAt',
            type: 'date',
            required: true
        },
        {
            name: 'taskSlug',
            type: 'select',
            options: [
                ...taskSlugs
            ],
            required: true
        },
        {
            name: 'taskID',
            type: 'text',
            required: true
        },
        {
            name: 'input',
            type: 'json'
        },
        {
            name: 'output',
            type: 'json'
        },
        {
            name: 'state',
            type: 'radio',
            options: [
                'failed',
                'succeeded'
            ],
            required: true
        },
        {
            name: 'error',
            type: 'json',
            admin: {
                condition: (_, data)=>data.state === 'failed'
            },
            required: true
        }
    ];
    if (config?.jobs?.addParentToTaskLog) {
        logFields.push({
            name: 'parent',
            type: 'group',
            fields: [
                {
                    name: 'taskSlug',
                    type: 'select',
                    options: [
                        ...taskSlugs
                    ]
                },
                {
                    name: 'taskID',
                    type: 'text'
                }
            ]
        });
    }
    const jobsCollection = {
        slug: 'payload-jobs',
        admin: {
            group: 'System',
            hidden: true
        },
        endpoints: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$restEndpointRun$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobsEndpoint"]
        ],
        fields: [
            {
                name: 'input',
                type: 'json',
                admin: {
                    description: 'Input data provided to the job'
                }
            },
            {
                name: 'taskStatus',
                type: 'json',
                virtual: true
            },
            {
                type: 'tabs',
                tabs: [
                    {
                        fields: [
                            {
                                name: 'completedAt',
                                type: 'date',
                                index: true
                            },
                            {
                                name: 'totalTried',
                                type: 'number',
                                defaultValue: 0,
                                index: true
                            },
                            {
                                name: 'hasError',
                                type: 'checkbox',
                                admin: {
                                    description: 'If hasError is true this job will not be retried'
                                },
                                defaultValue: false,
                                index: true
                            },
                            {
                                name: 'error',
                                type: 'json',
                                admin: {
                                    condition: (data)=>data.hasError,
                                    description: 'If hasError is true, this is the error that caused it'
                                }
                            },
                            {
                                name: 'log',
                                type: 'array',
                                admin: {
                                    description: 'Task execution log'
                                },
                                fields: logFields
                            }
                        ],
                        label: 'Status'
                    }
                ]
            },
            // only include the workflowSlugs field if workflows exist
            ...workflowSlugs.size > 0 ? [
                {
                    name: 'workflowSlug',
                    type: 'select',
                    admin: {
                        position: 'sidebar'
                    },
                    index: true,
                    options: [
                        ...workflowSlugs
                    ]
                }
            ] : [],
            {
                name: 'taskSlug',
                type: 'select',
                admin: {
                    position: 'sidebar'
                },
                index: true,
                options: [
                    ...taskSlugs
                ],
                required: false
            },
            {
                name: 'queue',
                type: 'text',
                admin: {
                    position: 'sidebar'
                },
                defaultValue: 'default',
                index: true
            },
            {
                name: 'waitUntil',
                type: 'date',
                index: true
            },
            {
                name: 'processing',
                type: 'checkbox',
                admin: {
                    position: 'sidebar'
                },
                defaultValue: false,
                index: true
            }
        ],
        hooks: {
            afterRead: [
                ({ doc, req })=>{
                    // This hook is used to add the virtual `tasks` field to the document, that is computed from the `log` field
                    doc.taskStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$utilities$2f$getJobTaskStatus$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJobTaskStatus"])({
                        jobLog: doc.log,
                        tasksConfig: req.payload.config.jobs.tasks
                    });
                    return doc;
                }
            ]
        },
        lockDocuments: false
    };
    return jobsCollection;
}; //# sourceMappingURL=jobsCollection.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/config/generateJobsJSONSchemas.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateJobsJSONSchemas": (()=>generateJobsJSONSchemas)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$configToJSONSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/configToJSONSchema.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenAllFields.js [app-route] (ecmascript)");
;
;
function generateJobsJSONSchemas(config, jobsConfig, interfaceNameDefinitions, /**
   * Used for relationship fields, to determine whether to use a string or number type for the ID.
   * While there is a default ID field type set by the db adapter, they can differ on a collection-level
   * if they have custom ID fields.
   */ collectionIDFieldTypes, i18n) {
    const properties = {
        tasks: {},
        workflows: {}
    };
    const definitions = new Map();
    if (jobsConfig?.tasks?.length) {
        for (const task of jobsConfig.tasks){
            const fullTaskJsonSchema = {
                type: 'object',
                additionalProperties: false,
                properties: {
                    input: {},
                    output: {}
                },
                required: []
            };
            if (task?.inputSchema?.length) {
                const inputJsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$configToJSONSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldsToJSONSchema"])(collectionIDFieldTypes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenAllFields"])({
                    fields: task.inputSchema
                }), interfaceNameDefinitions, config, i18n);
                const fullInputJsonSchema = {
                    type: 'object',
                    additionalProperties: false,
                    properties: inputJsonSchema.properties,
                    required: inputJsonSchema.required
                };
                fullTaskJsonSchema.properties.input = fullInputJsonSchema;
                fullTaskJsonSchema.required.push('input');
            }
            if (task?.outputSchema?.length) {
                const outputJsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$configToJSONSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldsToJSONSchema"])(collectionIDFieldTypes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenAllFields"])({
                    fields: task.outputSchema
                }), interfaceNameDefinitions, config, i18n);
                const fullOutputJsonSchema = {
                    type: 'object',
                    additionalProperties: false,
                    properties: outputJsonSchema.properties,
                    required: outputJsonSchema.required
                };
                fullTaskJsonSchema.properties.output = fullOutputJsonSchema;
                fullTaskJsonSchema.required.push('output');
            }
            const normalizedTaskSlug = task.slug[0].toUpperCase() + task.slug.slice(1);
            definitions.set(task.interfaceName ?? `Task${normalizedTaskSlug}`, fullTaskJsonSchema);
        }
        // Now add properties.tasks definition that references the types in definitions keyed by task slug:
        properties.tasks = {
            type: 'object',
            additionalProperties: false,
            properties: {
                ...Object.fromEntries(jobsConfig.tasks.map((task)=>{
                    const normalizedTaskSlug = task.slug[0].toUpperCase() + task.slug.slice(1);
                    const toReturn = {
                        $ref: task.interfaceName ? `#/definitions/${task.interfaceName}` : `#/definitions/Task${normalizedTaskSlug}`
                    };
                    return [
                        task.slug,
                        toReturn
                    ];
                })),
                inline: {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        input: {},
                        output: {}
                    },
                    required: [
                        'input',
                        'output'
                    ]
                }
            },
            required: [
                ...jobsConfig.tasks.map((task)=>task.slug),
                'inline'
            ]
        };
    }
    if (jobsConfig?.workflows?.length) {
        for (const workflow of jobsConfig.workflows){
            const fullWorkflowJsonSchema = {
                type: 'object',
                additionalProperties: false,
                properties: {
                    input: {}
                },
                required: []
            };
            if (workflow?.inputSchema?.length) {
                const inputJsonSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$configToJSONSchema$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldsToJSONSchema"])(collectionIDFieldTypes, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenAllFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["flattenAllFields"])({
                    fields: workflow.inputSchema
                }), interfaceNameDefinitions, config, i18n);
                const fullInputJsonSchema = {
                    type: 'object',
                    additionalProperties: false,
                    properties: inputJsonSchema.properties,
                    required: inputJsonSchema.required
                };
                fullWorkflowJsonSchema.properties.input = fullInputJsonSchema;
                fullWorkflowJsonSchema.required.push('input');
            }
            const normalizedWorkflowSlug = workflow.slug[0].toUpperCase() + workflow.slug.slice(1);
            definitions.set(workflow.interfaceName ?? `Workflow${normalizedWorkflowSlug}`, fullWorkflowJsonSchema);
            properties.workflows = {
                type: 'object',
                additionalProperties: false,
                properties: Object.fromEntries(jobsConfig.workflows.map((workflow)=>{
                    const normalizedWorkflowSlug = workflow.slug[0].toUpperCase() + workflow.slug.slice(1);
                    const toReturn = {
                        $ref: workflow.interfaceName ? `#/definitions/${workflow.interfaceName}` : `#/definitions/Workflow${normalizedWorkflowSlug}`
                    };
                    return [
                        workflow.slug,
                        toReturn
                    ];
                })),
                required: jobsConfig.workflows.map((workflow)=>workflow.slug)
            };
        }
    }
    return {
        definitions,
        properties
    };
} //# sourceMappingURL=generateJobsJSONSchemas.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/localAPI.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getJobsLocalAPI": (()=>getJobsLocalAPI)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/operations/runJobs/index.js [app-route] (ecmascript)");
;
;
const getJobsLocalAPI = (payload)=>({
        queue: async (args)=>{
            let queue;
            // If user specifies queue, use that
            if (args.queue) {
                queue = args.queue;
            } else if (args.workflow) {
                // Otherwise, if there is a workflow specified, and it has a default queue to use,
                // use that
                const workflow = payload.config.jobs?.workflows?.find(({ slug })=>slug === args.workflow);
                if (workflow?.queue) {
                    queue = workflow.queue;
                }
            }
            return await payload.create({
                collection: 'payload-jobs',
                data: {
                    input: args.input,
                    queue,
                    taskSlug: 'task' in args ? args.task : undefined,
                    waitUntil: args.waitUntil?.toISOString() ?? undefined,
                    workflowSlug: 'workflow' in args ? args.workflow : undefined
                },
                req: args.req
            });
        // Type assertion is still needed here
        },
        run: async (args)=>{
            const newReq = args?.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobs"])({
                limit: args?.limit,
                overrideAccess: args?.overrideAccess !== false,
                queue: args?.queue,
                req: newReq,
                where: args?.where
            });
            return result;
        },
        runByID: async (args)=>{
            const newReq = args?.req ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$createLocalReq$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createLocalReq"])({}, payload);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$operations$2f$runJobs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runJobs"])({
                id: args.id,
                overrideAccess: args?.overrideAccess !== false,
                req: newReq
            });
            return result;
        }
    }); //# sourceMappingURL=localAPI.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/lockedDocuments/lockedDocumentsCollection.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLockedDocumentsCollection": (()=>getLockedDocumentsCollection)
});
const getLockedDocumentsCollection = (config)=>({
        slug: 'payload-locked-documents',
        admin: {
            hidden: true
        },
        fields: [
            {
                name: 'document',
                type: 'relationship',
                index: true,
                maxDepth: 0,
                relationTo: [
                    ...config.collections.map((collectionConfig)=>collectionConfig.slug)
                ]
            },
            {
                name: 'globalSlug',
                type: 'text',
                index: true
            },
            {
                name: 'user',
                type: 'relationship',
                maxDepth: 1,
                relationTo: config.collections.filter((collectionConfig)=>collectionConfig.auth).map((collectionConfig)=>collectionConfig.slug),
                required: true
            }
        ],
        lockDocuments: false
    }); //# sourceMappingURL=lockedDocumentsCollection.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-expressions */ __turbopack_esm__({
    "genImportMapIterateFields": (()=>genImportMapIterateFields)
});
function hasKey(obj, key) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
}
const defaultUIFieldComponentKeys = [
    'Cell',
    'Description',
    'Field',
    'Filter'
];
function genImportMapIterateFields({ addToImportMap, baseDir, config, fields, importMap, imports }) {
    for (const field of fields){
        if ('fields' in field) {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.fields,
                importMap,
                imports
            });
        } else if (field.type === 'blocks') {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.blocks,
                importMap,
                imports
            });
        } else if (field.type === 'tabs') {
            genImportMapIterateFields({
                addToImportMap,
                baseDir,
                config,
                fields: field.tabs,
                importMap,
                imports
            });
        } else if (field.type === 'richText') {
            if (field?.editor && typeof field.editor === 'object' && field.editor.generateImportMap && typeof field.editor.generateImportMap === 'function') {
                field.editor.generateImportMap({
                    addToImportMap,
                    baseDir,
                    config,
                    importMap,
                    imports
                });
            }
        } else if (field.type === 'ui') {
            if (field?.admin?.components) {
                // Render any extra, untyped components
                for(const key in field.admin.components){
                    if (key in defaultUIFieldComponentKeys) {
                        continue;
                    }
                    addToImportMap(field.admin.components[key]);
                }
            }
        }
        hasKey(field?.admin, 'jsx') && addToImportMap(field.admin.jsx) // For Blocks
        ;
        hasKey(field?.admin?.components, 'Label') && addToImportMap(field.admin.components.Label);
        hasKey(field?.admin?.components, 'Block') && addToImportMap(field.admin.components.Block);
        hasKey(field?.admin?.components, 'Cell') && addToImportMap(field?.admin?.components?.Cell);
        hasKey(field?.admin?.components, 'Description') && addToImportMap(field?.admin?.components?.Description);
        hasKey(field?.admin?.components, 'Field') && addToImportMap(field?.admin?.components?.Field);
        hasKey(field?.admin?.components, 'Filter') && addToImportMap(field?.admin?.components?.Filter);
        hasKey(field?.admin?.components, 'Error') && addToImportMap(field?.admin?.components?.Error);
        hasKey(field?.admin?.components, 'afterInput') && addToImportMap(field?.admin?.components?.afterInput);
        hasKey(field?.admin?.components, 'beforeInput') && addToImportMap(field?.admin?.components?.beforeInput);
        hasKey(field?.admin?.components, 'RowLabel') && addToImportMap(field?.admin?.components?.RowLabel);
        hasKey(field?.admin?.components, 'Diff') && addToImportMap(field?.admin?.components?.Diff);
    }
} //# sourceMappingURL=iterateFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/parsePayloadComponent.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parsePayloadComponent": (()=>parsePayloadComponent)
});
function parsePayloadComponent(PayloadComponent) {
    if (!PayloadComponent) {
        return null;
    }
    const pathAndMaybeExport = typeof PayloadComponent === 'string' ? PayloadComponent : PayloadComponent.path;
    let path = '';
    let exportName = 'default';
    if (pathAndMaybeExport?.includes('#')) {
        ;
        [path, exportName] = pathAndMaybeExport.split('#');
    } else {
        path = pathAndMaybeExport;
    }
    if (typeof PayloadComponent === 'object' && PayloadComponent.exportName) {
        exportName = PayloadComponent.exportName;
    }
    return {
        exportName,
        path
    };
} //# sourceMappingURL=parsePayloadComponent.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iterateCollections": (()=>iterateCollections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)");
;
function iterateCollections({ addToImportMap, baseDir, collections, config, importMap, imports }) {
    for (const collection of collections){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
            addToImportMap,
            baseDir,
            config,
            fields: collection.fields,
            importMap,
            imports
        });
        addToImportMap(collection.admin?.components?.afterList);
        addToImportMap(collection.admin?.components?.afterListTable);
        addToImportMap(collection.admin?.components?.beforeList);
        addToImportMap(collection.admin?.components?.beforeListTable);
        addToImportMap(collection.admin?.components?.Description);
        addToImportMap(collection.admin?.components?.edit?.PreviewButton);
        addToImportMap(collection.admin?.components?.edit?.PublishButton);
        addToImportMap(collection.admin?.components?.edit?.SaveButton);
        addToImportMap(collection.admin?.components?.edit?.SaveDraftButton);
        addToImportMap(collection.admin?.components?.edit?.Upload);
        if (collection.admin?.components?.views?.edit) {
            for (const editViewConfig of Object.values(collection.admin?.components?.views?.edit)){
                if ('Component' in editViewConfig) {
                    addToImportMap(editViewConfig?.Component);
                }
                if ('actions' in editViewConfig) {
                    addToImportMap(editViewConfig?.actions);
                }
                if ('tab' in editViewConfig) {
                    addToImportMap(editViewConfig?.tab?.Component);
                    addToImportMap(editViewConfig?.tab?.Pill);
                }
            }
        }
        addToImportMap(collection.admin?.components?.views?.list?.Component);
        addToImportMap(collection.admin?.components?.views?.list?.actions);
    }
} //# sourceMappingURL=iterateCollections.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iterateGlobals": (()=>iterateGlobals)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateFields.js [app-route] (ecmascript)");
;
function iterateGlobals({ addToImportMap, baseDir, config, globals, importMap, imports }) {
    for (const global of globals){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genImportMapIterateFields"])({
            addToImportMap,
            baseDir,
            config,
            fields: global.fields,
            importMap,
            imports
        });
        addToImportMap(global.admin?.components?.elements?.Description);
        addToImportMap(global.admin?.components?.elements?.PreviewButton);
        addToImportMap(global.admin?.components?.elements?.PublishButton);
        addToImportMap(global.admin?.components?.elements?.SaveButton);
        addToImportMap(global.admin?.components?.elements?.SaveDraftButton);
        if (global.admin?.components?.views?.edit) {
            for (const editViewConfig of Object.values(global.admin?.components?.views?.edit)){
                if ('Component' in editViewConfig) {
                    addToImportMap(editViewConfig?.Component);
                }
                if ('actions' in editViewConfig) {
                    addToImportMap(editViewConfig?.actions);
                }
                if ('tab' in editViewConfig) {
                    addToImportMap(editViewConfig?.tab?.Component);
                    addToImportMap(editViewConfig?.tab?.Pill);
                }
            }
        }
    }
} //# sourceMappingURL=iterateGlobals.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-expressions */ __turbopack_esm__({
    "iterateConfig": (()=>iterateConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateCollections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateCollections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateGlobals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateGlobals.js [app-route] (ecmascript)");
;
;
function iterateConfig({ addToImportMap, baseDir, config, importMap, imports }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateCollections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateCollections"])({
        addToImportMap,
        baseDir,
        collections: config.collections,
        config,
        importMap,
        imports
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateGlobals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateGlobals"])({
        addToImportMap,
        baseDir,
        config,
        globals: config.globals,
        importMap,
        imports
    });
    if (typeof config.admin?.avatar === 'object') {
        addToImportMap(config.admin?.avatar?.Component);
    }
    addToImportMap(config.admin?.components?.Nav);
    addToImportMap(config.admin?.components?.header);
    addToImportMap(config.admin?.components?.logout?.Button);
    addToImportMap(config.admin?.components?.graphics?.Icon);
    addToImportMap(config.admin?.components?.graphics?.Logo);
    addToImportMap(config.admin?.components?.actions);
    addToImportMap(config.admin?.components?.afterDashboard);
    addToImportMap(config.admin?.components?.afterLogin);
    addToImportMap(config.admin?.components?.afterNavLinks);
    addToImportMap(config.admin?.components?.beforeDashboard);
    addToImportMap(config.admin?.components?.beforeLogin);
    addToImportMap(config.admin?.components?.beforeNavLinks);
    addToImportMap(config.admin?.components?.providers);
    if (config.admin?.components?.views) {
        if (Object.keys(config.admin?.components?.views)?.length) {
            for(const key in config.admin?.components?.views){
                const adminViewConfig = config.admin?.components?.views[key];
                addToImportMap(adminViewConfig?.Component);
            }
        }
    }
    if (config?.admin?.importMap?.generators?.length) {
        for (const generator of config.admin.importMap.generators){
            generator({
                addToImportMap,
                baseDir,
                config,
                importMap,
                imports
            });
        }
    }
    if (config?.admin?.dependencies) {
        for(const key in config.admin.dependencies){
            const dependency = config.admin.dependencies[key];
            addToImportMap(dependency.path);
        }
    }
/*
  if (
    config?.editor &&
    typeof config.editor === 'object' &&
    config.editor.generateImportMap &&
    typeof config.editor.generateImportMap === 'function'
  ) {
    config.editor.generateImportMap({
      addToImportMap,
      baseDir,
      componentMap,
      config,
      importMap,
    })
  }*/ // No need to do that here since in the sanitized editor config, this root editor is already added to the field editor - and we already process that in iterateFields
} //# sourceMappingURL=iterateConfig.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addPayloadComponentToImportMap": (()=>addPayloadComponentToImportMap),
    "generateImportMap": (()=>generateImportMap),
    "writeImportMap": (()=>writeImportMap)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:process [external] (node:process, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$parsePayloadComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/parsePayloadComponent.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/iterateConfig.js [app-route] (ecmascript)");
;
;
;
;
;
;
function addPayloadComponentToImportMap({ baseDir, importMap, imports, payloadComponent }) {
    if (!payloadComponent) {
        return;
    }
    const { exportName, path: componentPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$parsePayloadComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePayloadComponent"])(payloadComponent);
    if (importMap[componentPath + '#' + exportName]) {
        return;
    }
    const importIdentifier = exportName + '_' + __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(componentPath).digest('hex');
    // e.g. if baseDir is /test/fields and componentPath is /components/Field.tsx
    // then path needs to be /test/fields/components/Field.tsx NOT /users/username/project/test/fields/components/Field.tsx
    // so we need to append baseDir to componentPath
    if (componentPath.startsWith('.') || componentPath.startsWith('/')) {
        const normalizedBaseDir = baseDir.replace(/\\/g, '/');
        const finalPath = normalizedBaseDir.startsWith('/../') ? `${normalizedBaseDir}${componentPath.slice(1)}` : __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].posix.join(normalizedBaseDir, componentPath.slice(1));
        imports[importIdentifier] = {
            path: componentPath.startsWith('.') || componentPath.startsWith('/') ? finalPath : componentPath,
            specifier: exportName
        };
    } else {
        imports[importIdentifier] = {
            path: componentPath,
            specifier: exportName
        };
    }
    importMap[componentPath + '#' + exportName] = importIdentifier;
}
async function generateImportMap(config, options) {
    const shouldLog = options?.log ?? true;
    if (shouldLog) {
        console.log('Generating import map');
    }
    const importMap = {};
    const imports = {};
    const rootDir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].env.ROOT_DIR ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].cwd();
    // get componentsBaseDir.
    // E.g.:
    // config.admin.importMap.baseDir = /test/fields/
    // rootDir: /
    // componentsBaseDir = /test/fields/
    // or
    // E.g.:
    // config.admin.importMap.baseDir = /test/fields/
    // rootDir: /test
    // componentsBaseDir = /fields/
    // or
    // config.admin.importMap.baseDir = /
    // rootDir: /
    // componentsBaseDir = /
    // E.g.:
    // config.admin.importMap.baseDir = /test/fields/
    // rootDir: /test/fields/prod
    // componentsBaseDir = ../
    // Check if rootDir is a subdirectory of baseDir
    const baseDir = config.admin.importMap.baseDir;
    const isSubdirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(baseDir, rootDir).startsWith('..');
    let componentsBaseDir;
    if (isSubdirectory) {
        // Get the relative path from rootDir to baseDir
        componentsBaseDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(rootDir, baseDir);
    } else {
        // If rootDir is not a subdirectory, just return baseDir relative to rootDir
        componentsBaseDir = `/${__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].relative(rootDir, baseDir)}`;
    }
    // Ensure result has a trailing slash
    if (!componentsBaseDir.endsWith('/')) {
        componentsBaseDir += '/';
    }
    const addToImportMap = (payloadComponent)=>{
        if (!payloadComponent) {
            return;
        }
        if (typeof payloadComponent !== 'object' && typeof payloadComponent !== 'string') {
            console.error(payloadComponent);
            throw new Error('addToImportMap > Payload component must be an object or a string');
        }
        if (Array.isArray(payloadComponent)) {
            for (const component of payloadComponent){
                addPayloadComponentToImportMap({
                    baseDir: componentsBaseDir,
                    importMap,
                    imports,
                    payloadComponent: component
                });
            }
        } else {
            addPayloadComponentToImportMap({
                baseDir: componentsBaseDir,
                importMap,
                imports,
                payloadComponent
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$iterateConfig$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iterateConfig"])({
        addToImportMap,
        baseDir: config.admin.importMap.baseDir,
        config,
        importMap,
        imports
    });
    await writeImportMap({
        componentMap: importMap,
        config,
        fileName: 'importMap.js',
        force: options?.force,
        importMap: imports,
        log: shouldLog,
        rootDir
    });
}
async function writeImportMap({ componentMap, config, fileName, force, importMap, log, rootDir }) {
    let importMapFolderPath = '';
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `app/(payload)${config.routes.admin}/`))) {
        importMapFolderPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `app/(payload)${config.routes.admin}/`);
    } else if (__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `src/app/(payload)${config.routes.admin}/`))) {
        importMapFolderPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `src/app/(payload)${config.routes.admin}/`);
    } else {
        throw new Error(`Could not find the payload admin directory. Looked in ${__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `app/(payload)${config.routes.admin}/`)} and ${__TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(rootDir, `src/app/(payload)${config.routes.admin}/`)}`);
    }
    const imports = [];
    for (const [identifier, { path, specifier }] of Object.entries(importMap)){
        imports.push(`import { ${specifier} as ${identifier} } from '${path}'`);
    }
    const mapKeys = [];
    for (const [userPath, identifier] of Object.entries(componentMap)){
        mapKeys.push(`  "${userPath}": ${identifier}`);
    }
    const importMapOutputFile = `${imports.join('\n')}

export const importMap = {
${mapKeys.join(',\n')}
}
`;
    const importMapFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(importMapFolderPath, fileName);
    if (!force) {
        // Read current import map and check in the IMPORTS if there are any new imports. If not, don't write the file.
        const currentImportMap = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.readFile(importMapFilePath, 'utf-8');
        if (currentImportMap?.trim() === importMapOutputFile?.trim()) {
            if (log) {
                console.log('No new imports found, skipping writing import map');
            }
            return;
        }
    }
    if (log) {
        console.log('Writing import map to', importMapFilePath);
    }
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.writeFile(importMapFilePath, importMapOutputFile);
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/getFromImportMap.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFromImportMap": (()=>getFromImportMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$parsePayloadComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/parsePayloadComponent.js [app-route] (ecmascript)");
;
const getFromImportMap = (args)=>{
    const { importMap, PayloadComponent, schemaPath, silent } = args;
    const { exportName, path } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$parsePayloadComponent$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePayloadComponent"])(PayloadComponent);
    const key = path + '#' + exportName;
    const importMapEntry = importMap[key];
    if (!importMapEntry && !silent) {
        // eslint-disable-next-line no-console
        console.error(`getFromImportMap: PayloadComponent not found in importMap`, {
            key,
            PayloadComponent,
            schemaPath
        }, 'You may need to run the `payload generate:importmap` command to generate the importMap ahead of runtime.');
    }
    return importMapEntry;
}; //# sourceMappingURL=getFromImportMap.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/checkPayloadDependencies.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkPayloadDependencies": (()=>checkPayloadDependencies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$payloadPackageList$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/payloadPackageList.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-route] (ecmascript)");
;
;
function checkPayloadDependencies() {
    const dependencies = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$payloadPackageList$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PAYLOAD_PACKAGE_LIST"]
    ];
    if (process.env.PAYLOAD_CI_DEPENDENCY_CHECKER !== 'true') {
        dependencies.push('@payloadcms/plugin-sentry');
    }
    // First load. First check if there are mismatching dependency versions of payload packages
    void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$dependencyChecker$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkDependencies"])({
        dependencyGroups: [
            {
                name: 'payload',
                dependencies,
                targetVersionDependency: 'payload'
            }
        ]
    });
} //# sourceMappingURL=checkPayloadDependencies.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/email/defaults.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "emailDefaults": (()=>emailDefaults)
});
const emailDefaults = {
    defaultFromAddress: 'info@payloadcms.com',
    defaultFromName: 'Payload'
}; //# sourceMappingURL=defaults.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/email/getStringifiedToAddress.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getStringifiedToAddress": (()=>getStringifiedToAddress)
});
const getStringifiedToAddress = (message)=>{
    let stringifiedTo;
    if (typeof message.to === 'string') {
        stringifiedTo = message.to;
    } else if (Array.isArray(message.to)) {
        stringifiedTo = message.to.map((to)=>{
            if (typeof to === 'string') {
                return to;
            } else if (to.address) {
                return to.address;
            }
            return '';
        }).join(', ');
    } else if (message.to.address) {
        stringifiedTo = message.to.address;
    }
    return stringifiedTo;
}; //# sourceMappingURL=getStringifiedToAddress.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/email/consoleEmailAdapter.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "consoleEmailAdapter": (()=>consoleEmailAdapter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/email/defaults.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$getStringifiedToAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/email/getStringifiedToAddress.js [app-route] (ecmascript)");
;
;
const consoleEmailAdapter = ({ payload })=>({
        name: 'console',
        defaultFromAddress: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailDefaults"].defaultFromAddress,
        defaultFromName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$defaults$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["emailDefaults"].defaultFromName,
        sendEmail: async (message)=>{
            const stringifiedTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$getStringifiedToAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getStringifiedToAddress"])(message);
            const res = `Email attempted without being configured. To: '${stringifiedTo}', Subject: '${message.subject}'`;
            payload.logger.info({
                msg: res
            });
            return Promise.resolve();
        }
    }); //# sourceMappingURL=consoleEmailAdapter.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BasePayload": (()=>BasePayload),
    "default": (()=>__TURBOPACK__default__export__),
    "getPayload": (()=>getPayload),
    "reload": (()=>reload)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:url [external] (node:url, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/local/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/local/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/crypto.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$localAPI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/localAPI.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_import__("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$checkPayloadDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/checkPayloadDependencies.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/logger.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/traverseFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$consoleEmailAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/email/consoleEmailAdapter.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$events$2f$serverInit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/events/serverInit.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$apiKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/strategies/apiKey.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/strategies/jwt.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNextBuild$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isNextBuild.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$croner$40$9$2e$0$2e$0$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/croner@9.0.0/node_modules/croner/dist/croner.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ws$40$8$2e$18$2e$0$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/ws@8.18.0/node_modules/ws/wrapper.mjs [app-route] (ecmascript) <locals>");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/index.js")}`;
    }
};
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
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
let checkedDependencies = false;
class BasePayload {
    /**
   * @description Authorization and Authentication using headers and cookies to run auth user strategies
   * @returns permissions: Permissions
   * @returns user: User
   */ auth = async (options)=>{
        const { auth } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth;
        return auth(this, options);
    };
    authStrategies;
    collections = {};
    config;
    /**
   * @description Performs count operation
   * @param options
   * @returns count of documents satisfying query
   */ count = async (options)=>{
        const { count } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return count(this, options);
    };
    /**
   * @description Performs countGlobalVersions operation
   * @param options
   * @returns count of global document versions satisfying query
   */ countGlobalVersions = async (options)=>{
        const { countGlobalVersions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return countGlobalVersions(this, options);
    };
    /**
   * @description Performs countVersions operation
   * @param options
   * @returns count of document versions satisfying query
   */ countVersions = async (options)=>{
        const { countVersions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return countVersions(this, options);
    };
    /**
   * @description Performs create operation
   * @param options
   * @returns created document
   */ create = async (options)=>{
        const { create } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return create(this, options);
    };
    db;
    decrypt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["decrypt"];
    duplicate = async (options)=>{
        const { duplicate } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return duplicate(this, options);
    };
    email;
    encrypt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$crypto$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encrypt"];
    // TODO: re-implement or remove?
    // errorHandler: ErrorHandler
    extensions;
    /**
   * @description Find documents with criteria
   * @param options
   * @returns documents satisfying query
   */ find = async (options)=>{
        const { find } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return find(this, options);
    };
    /**
   * @description Find document by ID
   * @param options
   * @returns document with specified ID
   */ findByID = async (options)=>{
        const { findByID } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return findByID(this, options);
    };
    findGlobal = async (options)=>{
        const { findOne } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return findOne(this, options);
    };
    /**
   * @description Find global version by ID
   * @param options
   * @returns global version with specified ID
   */ findGlobalVersionByID = async (options)=>{
        const { findVersionByID } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return findVersionByID(this, options);
    };
    /**
   * @description Find global versions with criteria
   * @param options
   * @returns versions satisfying query
   */ findGlobalVersions = async (options)=>{
        const { findVersions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return findVersions(this, options);
    };
    /**
   * @description Find version by ID
   * @param options
   * @returns version with specified ID
   */ findVersionByID = async (options)=>{
        const { findVersionByID } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return findVersionByID(this, options);
    };
    /**
   * @description Find versions with criteria
   * @param options
   * @returns versions satisfying query
   */ findVersions = async (options)=>{
        const { findVersions } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return findVersions(this, options);
    };
    forgotPassword = async (options)=>{
        const { forgotPassword } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth;
        return forgotPassword(this, options);
    };
    getAdminURL = ()=>`${this.config.serverURL}${this.config.routes.admin}`;
    getAPIURL = ()=>`${this.config.serverURL}${this.config.routes.api}`;
    globals;
    importMap;
    jobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$localAPI$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getJobsLocalAPI"])(this);
    logger;
    login = async (options)=>{
        const { login } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth;
        return login(this, options);
    };
    resetPassword = async (options)=>{
        const { resetPassword } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth;
        return resetPassword(this, options);
    };
    /**
   * @description Restore global version by ID
   * @param options
   * @returns version with specified ID
   */ restoreGlobalVersion = async (options)=>{
        const { restoreVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return restoreVersion(this, options);
    };
    /**
   * @description Restore version by ID
   * @param options
   * @returns version with specified ID
   */ restoreVersion = async (options)=>{
        const { restoreVersion } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return restoreVersion(this, options);
    };
    schema;
    secret;
    sendEmail;
    types;
    unlock = async (options)=>{
        const { unlock } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth;
        return unlock(this, options);
    };
    updateGlobal = async (options)=>{
        const { update } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return update(this, options);
    };
    validationRules;
    verifyEmail = async (options)=>{
        const { verifyEmail } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].auth;
        return verifyEmail(this, options);
    };
    versions = {};
    async bin({ args, cwd, log }) {
        return new Promise((resolve, reject)=>{
            const spawned = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["spawn"])('node', [
                __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, '../bin.js'),
                ...args
            ], {
                cwd,
                stdio: log || log === undefined ? 'inherit' : 'ignore'
            });
            spawned.on('exit', (code)=>{
                resolve({
                    code
                });
            });
            spawned.on('error', (error)=>{
                reject(error);
            });
        });
    }
    delete(options) {
        const { deleteLocal } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return deleteLocal(this, options);
    }
    /**
   * @description Initializes Payload
   * @param options
   */ async init(options) {
        if (("TURBOPACK compile-time value", "development") !== 'production' && process.env.PAYLOAD_DISABLE_DEPENDENCY_CHECKER !== 'true' && !checkedDependencies) {
            checkedDependencies = true;
            void (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$checkPayloadDependencies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkPayloadDependencies"])();
        }
        this.importMap = options.importMap;
        if (!options?.config) {
            throw new Error('Error: the payload config is required to initialize payload.');
        }
        this.config = await options.config;
        this.logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLogger"])('payload', this.config.logger);
        if (!this.config.secret) {
            throw new Error('Error: missing secret key. A secret key is needed to secure Payload.');
        }
        this.secret = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(this.config.secret).digest('hex').slice(0, 32);
        this.globals = {
            config: this.config.globals
        };
        for (const collection of this.config.collections){
            let customIDType = undefined;
            const findCustomID = ({ field })=>{
                if ([
                    'array',
                    'blocks',
                    'group'
                ].includes(field.type) || field.type === 'tab' && 'name' in field) {
                    return true;
                }
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                    return;
                }
                if (field.name === 'id') {
                    customIDType = field.type;
                    return true;
                }
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["traverseFields"])({
                callback: findCustomID,
                fields: collection.fields
            });
            this.collections[collection.slug] = {
                config: collection,
                customIDType
            };
        }
        // Generate types on startup
        if (("TURBOPACK compile-time value", "development") !== 'production' && this.config.typescript.autoGenerate !== false) {
            // We cannot run it directly here, as generate-types imports json-schema-to-typescript, which breaks on turbopack.
            // see: https://github.com/vercel/next.js/issues/66723
            void this.bin({
                args: [
                    'generate:types'
                ],
                log: false
            });
        }
        this.db = this.config.db.init({
            payload: this
        });
        this.db.payload = this;
        if (this.db?.init) {
            await this.db.init();
        }
        if (!options.disableDBConnect && this.db.connect) {
            await this.db.connect();
        }
        // Load email adapter
        if (this.config.email instanceof Promise) {
            const awaitedAdapter = await this.config.email;
            this.email = awaitedAdapter({
                payload: this
            });
        } else if (this.config.email) {
            this.email = this.config.email({
                payload: this
            });
        } else {
            if (process.env.NEXT_PHASE !== 'phase-production-build') {
                this.logger.warn(`No email adapter provided. Email will be written to console. More info at https://payloadcms.com/docs/email/overview.`);
            }
            this.email = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$email$2f$consoleEmailAdapter$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["consoleEmailAdapter"])({
                payload: this
            });
        }
        // Warn if image resizing is enabled but sharp is not installed
        if (!this.config.sharp && this.config.collections.some((c)=>c.upload.imageSizes || c.upload.formatOptions)) {
            this.logger.warn(`Image resizing is enabled for one or more collections, but sharp not installed. Please install 'sharp' and pass into the config.`);
        }
        // Warn if user is deploying to Vercel, and any upload collection is missing a storage adapter
        if (process.env.VERCEL) {
            const uploadCollWithoutAdapter = this.config.collections.filter((c)=>c.upload && c.upload.adapter === undefined);
            if (uploadCollWithoutAdapter.length) {
                const slugs = uploadCollWithoutAdapter.map((c)=>c.slug).join(', ');
                this.logger.warn(`Collections with uploads enabled require a storage adapter when deploying to Vercel. Collection(s) without storage adapters: ${slugs}. See https://payloadcms.com/docs/upload/storage-adapters for more info.`);
            }
        }
        this.sendEmail = this.email['sendEmail'];
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$events$2f$serverInit$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serverInit"])(this);
        // 1. loop over collections, if collection has auth strategy, initialize and push to array
        let jwtStrategyEnabled = false;
        this.authStrategies = this.config.collections.reduce((authStrategies, collection)=>{
            if (collection?.auth) {
                if (collection.auth.strategies.length > 0) {
                    authStrategies.push(...collection.auth.strategies);
                }
                // 2. if api key enabled, push api key strategy into the array
                if (collection.auth?.useAPIKey) {
                    authStrategies.push({
                        name: `${collection.slug}-api-key`,
                        authenticate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$apiKey$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIKeyAuthentication"])(collection)
                    });
                }
                // 3. if localStrategy flag is true
                if (!collection.auth.disableLocalStrategy && !jwtStrategyEnabled) {
                    jwtStrategyEnabled = true;
                }
            }
            return authStrategies;
        }, []);
        // 4. if enabled, push jwt strategy into authStrategies last
        if (jwtStrategyEnabled) {
            this.authStrategies.push({
                name: 'local-jwt',
                authenticate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$strategies$2f$jwt$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["JWTAuthentication"]
            });
        }
        try {
            if (!options.disableOnInit) {
                if (typeof options.onInit === 'function') {
                    await options.onInit(this);
                }
                if (typeof this.config.onInit === 'function') {
                    await this.config.onInit(this);
                }
            }
        } catch (error) {
            this.logger.error({
                err: error
            }, 'Error running onInit function');
            throw error;
        }
        if (this.config.jobs.autoRun && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNextBuild$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNextBuild"])()) {
            const DEFAULT_CRON = '* * * * *';
            const DEFAULT_LIMIT = 10;
            const cronJobs = typeof this.config.jobs.autoRun === 'function' ? await this.config.jobs.autoRun(this) : this.config.jobs.autoRun;
            await Promise.all(cronJobs.map((cronConfig)=>{
                const job = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$croner$40$9$2e$0$2e$0$2f$node_modules$2f$croner$2f$dist$2f$croner$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Cron"](cronConfig.cron ?? DEFAULT_CRON, async ()=>{
                    if (typeof this.config.jobs.shouldAutoRun === 'function') {
                        const shouldAutoRun = await this.config.jobs.shouldAutoRun(this);
                        if (!shouldAutoRun) {
                            job.stop();
                            return false;
                        }
                    }
                    await this.jobs.run({
                        limit: cronConfig.limit ?? DEFAULT_LIMIT,
                        queue: cronConfig.queue
                    });
                });
            }));
        }
        return this;
    }
    update(options) {
        const { update } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$local$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
        return update(this, options);
    }
}
const initialized = new BasePayload();
const __TURBOPACK__default__export__ = initialized;
let cached = global._payload;
if (!cached) {
    cached = global._payload = {
        payload: null,
        promise: null,
        reload: false,
        ws: null
    };
}
const reload = async (config, payload, skipImportMapGeneration)=>{
    if (typeof payload.db.destroy === 'function') {
        await payload.db.destroy();
    }
    payload.config = config;
    payload.collections = config.collections.reduce((collections, collection)=>{
        collections[collection.slug] = {
            config: collection,
            customIDType: payload.collections[collection.slug]?.customIDType
        };
        return collections;
    }, {});
    payload.globals = {
        config: config.globals
    };
    // TODO: support HMR for other props in the future (see payload/src/index init()) that may change on Payload singleton
    // Generate types
    if (config.typescript.autoGenerate !== false) {
        // We cannot run it directly here, as generate-types imports json-schema-to-typescript, which breaks on turbopack.
        // see: https://github.com/vercel/next.js/issues/66723
        void payload.bin({
            args: [
                'generate:types'
            ],
            log: false
        });
    }
    // Generate component map
    if (skipImportMapGeneration !== true && config.admin?.importMap?.autoGenerate !== false) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateImportMap"])(config, {
            log: true
        });
    }
    await payload.db.init();
    if (payload.db.connect) {
        await payload.db.connect({
            hotReload: true
        });
    }
    global._payload_clientConfig = null;
    global._payload_schemaMap = null;
    global._payload_clientSchemaMap = null;
    global._payload_doNotCacheClientConfig = true // This will help refreshing the client config cache more reliably. If you remove this, please test HMR + client config refreshing (do new fields appear in the document?)
    ;
    global._payload_doNotCacheSchemaMap = true;
    global._payload_doNotCacheClientSchemaMap = true;
};
const getPayload = async (options)=>{
    if (!options?.config) {
        throw new Error('Error: the payload config is required for getPayload to work.');
    }
    if (cached.payload) {
        if (cached.reload === true) {
            let resolve;
            // getPayload is called multiple times, in parallel. However, we only want to run `await reload` once. By immediately setting cached.reload to a promise,
            // we can ensure that all subsequent calls will wait for the first reload to finish. So if we set it here, the 2nd call of getPayload
            // will reach `if (cached.reload instanceof Promise) {` which then waits for the first reload to finish.
            cached.reload = new Promise((res)=>resolve = res);
            const config = await options.config;
            await reload(config, cached.payload, !options.importMap);
            resolve();
        }
        if (cached.reload instanceof Promise) {
            await cached.reload;
        }
        if (options?.importMap) {
            cached.payload.importMap = options.importMap;
        }
        return cached.payload;
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    if (!cached.promise) {
        // no need to await options.config here, as it's already awaited in the BasePayload.init
        cached.promise = new BasePayload().init(options);
    }
    try {
        cached.payload = await cached.promise;
        if (!cached.ws && ("TURBOPACK compile-time value", "development") !== 'production' && ("TURBOPACK compile-time value", "development") !== 'test' && process.env.DISABLE_PAYLOAD_HMR !== 'true') {
            try {
                const port = process.env.PORT || '3000';
                cached.ws = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ws$40$8$2e$18$2e$0$2f$node_modules$2f$ws$2f$wrapper$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"](`ws://localhost:${port}${process.env.NEXT_BASE_PATH ?? ''}/_next/webpack-hmr`);
                cached.ws.onmessage = (event)=>{
                    if (typeof event.data === 'string') {
                        const data = JSON.parse(event.data);
                        if ('action' in data && data.action === 'serverComponentChanges') {
                            cached.reload = true;
                        }
                    }
                };
                cached.ws.onerror = (_)=>{
                // swallow any websocket connection error
                };
            } catch (_) {
            // swallow e
            }
        }
    } catch (e) {
        cached.promise = null;
        // add identifier to error object, so that our error logger in routeError.ts does not attempt to re-initialize getPayload
        e.payloadInitError = true;
        throw e;
    }
    if (options?.importMap) {
        cached.payload.importMap = options.importMap;
    }
    return cached.payload;
};
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
;
;
;
;
;
;
 //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=e2cf0_payload_dist_7aa4fb._.js.map