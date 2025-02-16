module.exports = {

"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultValuePromise": (()=>defaultValuePromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getDefaultValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js [app-rsc] (ecmascript)");
;
;
;
const defaultValuePromise = async ({ id, data, field, locale, req, siblingData, user })=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        if (typeof siblingData[field.name] === 'undefined' && typeof field.defaultValue !== 'undefined') {
            siblingData[field.name] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultValue"])({
                defaultValue: field.defaultValue,
                locale,
                req,
                user,
                value: siblingData[field.name]
            });
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                            id,
                            data,
                            fields: field.fields,
                            locale,
                            req,
                            siblingData: row,
                            user
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row)=>{
                        const blockTypeToMatch = row.blockType;
                        const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                        if (block) {
                            row.blockType = blockTypeToMatch;
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                                id,
                                data,
                                fields: block.fields,
                                locale,
                                req,
                                siblingData: row,
                                user
                            }));
                        }
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.fields,
                    locale,
                    req,
                    siblingData,
                    user
                });
                break;
            }
        case 'group':
            {
                if (typeof siblingData[field.name] !== 'object') {
                    siblingData[field.name] = {};
                }
                const groupData = siblingData[field.name];
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.fields,
                    locale,
                    req,
                    siblingData: groupData,
                    user
                });
                break;
            }
        case 'tab':
            {
                let tabSiblingData;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(field)) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    tabSiblingData = siblingData[field.name];
                } else {
                    tabSiblingData = siblingData;
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.fields,
                    locale,
                    req,
                    siblingData: tabSiblingData,
                    user
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                    id,
                    data,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    locale,
                    req,
                    siblingData,
                    user
                });
                break;
            }
        default:
            {
                break;
            }
    }
}; //# sourceMappingURL=promise.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iterateFields": (()=>iterateFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/promise.js [app-rsc] (ecmascript)");
;
const iterateFields = async ({ id, data, fields, locale, req, siblingData, user })=>{
    const promises = [];
    fields.forEach((field)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultValuePromise"])({
            id,
            data,
            field,
            locale,
            req,
            siblingData,
            user
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=iterateFields.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "calculateDefaultValues": (()=>calculateDefaultValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/iterateFields.js [app-rsc] (ecmascript)");
;
const calculateDefaultValues = async ({ id, data, fields, locale, req, user })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
        id,
        data,
        fields,
        locale,
        req,
        siblingData: data,
        user
    });
    return data;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/getFilterOptionsQuery.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFilterOptionsQuery": (()=>getFilterOptionsQuery)
});
const getFilterOptionsQuery = async (filterOptions, options)=>{
    const { relationTo } = options;
    const relations = Array.isArray(relationTo) ? relationTo : [
        relationTo
    ];
    const query = {};
    if (typeof filterOptions !== 'undefined') {
        await Promise.all(relations.map(async (relation)=>{
            query[relation] = typeof filterOptions === 'function' ? await filterOptions({
                ...options,
                relationTo: relation
            }) : filterOptions;
            if (query[relation] === true) {
                query[relation] = {};
            }
            // this is an ugly way to prevent results from being returned
            if (query[relation] === false) {
                query[relation] = {
                    id: {
                        exists: false
                    }
                };
            }
        }));
    }
    return query;
}; //# sourceMappingURL=getFilterOptionsQuery.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/addFieldStatePromise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "addFieldStatePromise": (()=>addFieldStatePromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$getFilterOptionsQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/getFilterOptionsQuery.js [app-rsc] (ecmascript)");
;
;
;
;
const ObjectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const addFieldStatePromise = async (args)=>{
    const { id, addErrorPathToParent: addErrorPathToParentArg, anyParentLocalized = false, clientFieldSchemaMap, collectionSlug, data, field, fieldIndex, fieldSchemaMap, filter, forceFullValue = false, fullData, includeSchema = false, omitParents = false, operation, parentIndexPath, parentPath, parentPermissions, parentSchemaPath, passesCondition, preferences, previousFormState, renderAllFields, renderFieldFn, req, skipConditionChecks = false, skipValidation = false, state } = args;
    if (!args.clientFieldSchemaMap && args.renderFieldFn) {
        console.warn('clientFieldSchemaMap is not passed to addFieldStatePromise - this will reduce performance');
    }
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPaths"])({
        field,
        index: fieldIndex,
        parentIndexPath: 'name' in field ? '' : parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const requiresRender = renderAllFields || previousFormState?.[path]?.requiresRender;
    let fieldPermissions = true;
    const fieldState = {
        errorPaths: [],
        fieldSchema: includeSchema ? field : undefined,
        initialValue: undefined,
        isSidebar: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsSidebar"])(field),
        passesCondition,
        valid: true,
        value: undefined
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(field)) {
        fieldPermissions = parentPermissions === true ? parentPermissions : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(parentPermissions?.[field.name]);
        let hasPermission = fieldPermissions === true || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(fieldPermissions?.read);
        if (typeof field?.access?.read === 'function') {
            hasPermission = await field.access.read({
                doc: fullData,
                req,
                siblingData: data
            });
        } else {
            hasPermission = true;
        }
        if (!hasPermission) {
            return;
        }
        const validate = field.validate;
        let validationResult = true;
        if (typeof validate === 'function' && !skipValidation && passesCondition) {
            let jsonError;
            if (field.type === 'json' && typeof data[field.name] === 'string') {
                try {
                    JSON.parse(data[field.name]);
                } catch (e) {
                    jsonError = e;
                }
            }
            validationResult = await validate(data?.[field.name], {
                ...field,
                id,
                collectionSlug,
                data: fullData,
                jsonError,
                operation,
                preferences,
                req,
                siblingData: data
            });
        }
        const addErrorPathToParent = (errorPath)=>{
            if (typeof addErrorPathToParentArg === 'function') {
                addErrorPathToParentArg(errorPath);
            }
            if (!fieldState.errorPaths.includes(errorPath)) {
                fieldState.errorPaths.push(errorPath);
                fieldState.valid = false;
            }
        };
        if (typeof validationResult === 'string') {
            fieldState.errorMessage = validationResult;
            fieldState.valid = false;
            addErrorPathToParent(path);
        } else {
            fieldState.valid = true;
        }
        switch(field.type){
            case 'array':
                {
                    const arrayValue = Array.isArray(data[field.name]) ? data[field.name] : [];
                    const { promises, rows } = arrayValue.reduce((acc, row, i)=>{
                        const parentPath = path + '.' + i;
                        row.id = row?.id || new ObjectId().toHexString();
                        if (!omitParents && (!filter || filter(args))) {
                            state[parentPath + '.id'] = {
                                fieldSchema: includeSchema ? field.fields.find((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsID"])(field)) : undefined,
                                initialValue: row.id,
                                valid: true,
                                value: row.id
                            };
                        }
                        acc.promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                            id,
                            addErrorPathToParent,
                            anyParentLocalized: field.localized || anyParentLocalized,
                            clientFieldSchemaMap,
                            collectionSlug,
                            data: row,
                            fields: field.fields,
                            fieldSchemaMap,
                            filter,
                            forceFullValue,
                            fullData,
                            includeSchema,
                            omitParents,
                            operation,
                            parentIndexPath: '',
                            parentPassesCondition: passesCondition,
                            parentPath,
                            parentSchemaPath: schemaPath,
                            permissions: fieldPermissions === true ? fieldPermissions : fieldPermissions?.fields || {},
                            preferences,
                            previousFormState,
                            renderAllFields: requiresRender,
                            renderFieldFn,
                            req,
                            skipConditionChecks,
                            skipValidation,
                            state
                        }));
                        const previousRows = previousFormState?.[path]?.rows || [];
                        const collapsedRowIDsFromPrefs = preferences?.fields?.[path]?.collapsed;
                        acc.rows.push({
                            id: row.id,
                            collapsed: (()=>{
                                // First, check if `previousFormState` has a matching row
                                const previousRow = previousRows.find((prevRow)=>prevRow.id === row.id);
                                if (previousRow?.collapsed !== undefined) {
                                    return previousRow.collapsed;
                                }
                                // If previousFormState is undefined, check preferences
                                if (collapsedRowIDsFromPrefs !== undefined) {
                                    return collapsedRowIDsFromPrefs.includes(row.id) // Check if collapsed in preferences
                                    ;
                                }
                                // If neither exists, fallback to `field.admin.initCollapsed`
                                return field.admin.initCollapsed;
                            })()
                        });
                        return acc;
                    }, {
                        promises: [],
                        rows: []
                    });
                    // Wait for all promises and update fields with the results
                    await Promise.all(promises);
                    fieldState.rows = rows;
                    // Unset requiresRender
                    // so it will be removed from form state
                    fieldState.requiresRender = false;
                    // Add values to field state
                    if (data[field.name] === null) {
                        fieldState.value = null;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = forceFullValue ? arrayValue : arrayValue.length;
                        fieldState.initialValue = forceFullValue ? arrayValue : arrayValue.length;
                        if (arrayValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    // Add field to state
                    if (!omitParents && (!filter || filter(args))) {
                        state[path] = fieldState;
                    }
                    break;
                }
            case 'blocks':
                {
                    const blocksValue = Array.isArray(data[field.name]) ? data[field.name] : [];
                    const { promises, rowMetadata } = blocksValue.reduce((acc, row, i)=>{
                        const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                        if (!block) {
                            throw new Error(`Block with type "${row.blockType}" was found in block data, but no block with that type is defined in the config for field with schema path ${schemaPath}.`);
                        }
                        const parentPath = path + '.' + i;
                        const rowSchemaPath = schemaPath + '.' + block.slug;
                        if (block) {
                            row.id = row?.id || new ObjectId().toHexString();
                            if (!omitParents && (!filter || filter(args))) {
                                state[parentPath + '.id'] = {
                                    fieldSchema: includeSchema ? block.fields.find((blockField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsID"])(blockField)) : undefined,
                                    initialValue: row.id,
                                    valid: true,
                                    value: row.id
                                };
                                state[parentPath + '.blockType'] = {
                                    fieldSchema: includeSchema ? block.fields.find((blockField)=>'name' in blockField && blockField.name === 'blockType') : undefined,
                                    initialValue: row.blockType,
                                    valid: true,
                                    value: row.blockType
                                };
                                state[parentPath + '.blockName'] = {
                                    fieldSchema: includeSchema ? block.fields.find((blockField)=>'name' in blockField && blockField.name === 'blockName') : undefined,
                                    initialValue: row.blockName,
                                    valid: true,
                                    value: row.blockName
                                };
                            }
                            acc.promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                                id,
                                addErrorPathToParent,
                                anyParentLocalized: field.localized || anyParentLocalized,
                                clientFieldSchemaMap,
                                collectionSlug,
                                data: row,
                                fields: block.fields,
                                fieldSchemaMap,
                                filter,
                                forceFullValue,
                                fullData,
                                includeSchema,
                                omitParents,
                                operation,
                                parentIndexPath: '',
                                parentPassesCondition: passesCondition,
                                parentPath,
                                parentSchemaPath: rowSchemaPath,
                                permissions: fieldPermissions === true ? fieldPermissions : parentPermissions?.[field.name]?.blocks?.[block.slug] === true ? true : parentPermissions?.[field.name]?.blocks?.[block.slug]?.fields || {},
                                preferences,
                                previousFormState,
                                renderAllFields: requiresRender,
                                renderFieldFn,
                                req,
                                skipConditionChecks,
                                skipValidation,
                                state
                            }));
                            const collapsedRowIDs = preferences?.fields?.[path]?.collapsed;
                            acc.rowMetadata.push({
                                id: row.id,
                                blockType: row.blockType,
                                collapsed: collapsedRowIDs === undefined ? field.admin.initCollapsed : collapsedRowIDs.includes(row.id)
                            });
                        }
                        return acc;
                    }, {
                        promises: [],
                        rowMetadata: []
                    });
                    await Promise.all(promises);
                    // Add values to field state
                    if (data[field.name] === null) {
                        fieldState.value = null;
                        fieldState.initialValue = null;
                    } else {
                        fieldState.value = forceFullValue ? blocksValue : blocksValue.length;
                        fieldState.initialValue = forceFullValue ? blocksValue : blocksValue.length;
                        if (blocksValue.length > 0) {
                            fieldState.disableFormData = true;
                        }
                    }
                    fieldState.rows = rowMetadata;
                    // Unset requiresRender
                    // so it will be removed from form state
                    fieldState.requiresRender = false;
                    // Add field to state
                    if (!omitParents && (!filter || filter(args))) {
                        state[path] = fieldState;
                    }
                    break;
                }
            case 'group':
                {
                    if (!filter || filter(args)) {
                        fieldState.disableFormData = true;
                        state[path] = fieldState;
                    }
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                        id,
                        addErrorPathToParent,
                        anyParentLocalized: field.localized || anyParentLocalized,
                        clientFieldSchemaMap,
                        collectionSlug,
                        data: data?.[field.name] || {},
                        fields: field.fields,
                        fieldSchemaMap,
                        filter,
                        forceFullValue,
                        fullData,
                        includeSchema,
                        omitParents,
                        operation,
                        parentIndexPath: '',
                        parentPassesCondition: passesCondition,
                        parentPath: path,
                        parentSchemaPath: schemaPath,
                        permissions: typeof fieldPermissions === 'boolean' ? fieldPermissions : fieldPermissions?.fields,
                        preferences,
                        previousFormState,
                        renderAllFields,
                        renderFieldFn,
                        req,
                        skipConditionChecks,
                        skipValidation,
                        state
                    });
                    break;
                }
            case 'relationship':
            case 'upload':
                {
                    if (field.filterOptions) {
                        if (typeof field.filterOptions === 'object') {
                            if (typeof field.relationTo === 'string') {
                                fieldState.filterOptions = {
                                    [field.relationTo]: field.filterOptions
                                };
                            } else {
                                fieldState.filterOptions = field.relationTo.reduce((acc, relation)=>{
                                    acc[relation] = field.filterOptions;
                                    return acc;
                                }, {});
                            }
                        }
                        if (typeof field.filterOptions === 'function') {
                            const query = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$getFilterOptionsQuery$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFilterOptionsQuery"])(field.filterOptions, {
                                id,
                                data: fullData,
                                relationTo: field.relationTo,
                                siblingData: data,
                                user: req.user
                            });
                            fieldState.filterOptions = query;
                        }
                    }
                    if (field.hasMany) {
                        const relationshipValue = Array.isArray(data[field.name]) ? data[field.name].map((relationship)=>{
                            if (Array.isArray(field.relationTo)) {
                                return {
                                    relationTo: relationship.relationTo,
                                    value: relationship.value && typeof relationship.value === 'object' ? relationship.value?.id : relationship.value
                                };
                            }
                            if (typeof relationship === 'object' && relationship !== null) {
                                return relationship.id;
                            }
                            return relationship;
                        }) : undefined;
                        fieldState.value = relationshipValue;
                        fieldState.initialValue = relationshipValue;
                    } else if (Array.isArray(field.relationTo)) {
                        if (data[field.name] && typeof data[field.name] === 'object' && 'relationTo' in data[field.name] && 'value' in data[field.name]) {
                            const value = typeof data[field.name]?.value === 'object' && data[field.name]?.value && 'id' in data[field.name].value ? data[field.name].value.id : data[field.name].value;
                            const relationshipValue = {
                                relationTo: data[field.name]?.relationTo,
                                value
                            };
                            fieldState.value = relationshipValue;
                            fieldState.initialValue = relationshipValue;
                        }
                    } else {
                        const relationshipValue = data[field.name] && typeof data[field.name] === 'object' && 'id' in data[field.name] ? data[field.name].id : data[field.name];
                        fieldState.value = relationshipValue;
                        fieldState.initialValue = relationshipValue;
                    }
                    if (!filter || filter(args)) {
                        state[path] = fieldState;
                    }
                    break;
                }
            default:
                {
                    fieldState.value = data[field.name];
                    fieldState.initialValue = data[field.name];
                    // Add field to state
                    if (!filter || filter(args)) {
                        state[path] = fieldState;
                    }
                    break;
                }
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        // Handle field types that do not use names (row, etc)
        if (!filter || filter(args)) {
            state[path] = {
                disableFormData: true,
                errorPaths: [],
                initialValue: undefined,
                passesCondition,
                valid: true,
                value: undefined
            };
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
            id,
            // passthrough parent functionality
            addErrorPathToParent: addErrorPathToParentArg,
            anyParentLocalized: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsLocalized"])(field) || anyParentLocalized,
            clientFieldSchemaMap,
            collectionSlug,
            data,
            fields: field.fields,
            fieldSchemaMap,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            omitParents,
            operation,
            parentIndexPath: indexPath,
            parentPassesCondition: passesCondition,
            parentPath,
            parentSchemaPath,
            permissions: parentPermissions,
            preferences,
            previousFormState,
            renderAllFields,
            renderFieldFn,
            req,
            skipConditionChecks,
            skipValidation,
            state
        });
    } else if (field.type === 'tabs') {
        const promises = field.tabs.map((tab, tabIndex)=>{
            const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab);
            const { indexPath: tabIndexPath, path: tabPath, schemaPath: tabSchemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPaths"])({
                field: {
                    ...tab,
                    type: 'tab'
                },
                index: tabIndex,
                parentIndexPath: indexPath,
                parentPath,
                parentSchemaPath
            });
            let childPermissions = undefined;
            if (isNamedTab) {
                if (parentPermissions === true) {
                    childPermissions = true;
                } else {
                    const tabPermissions = parentPermissions?.[tab.name];
                    if (tabPermissions === true) {
                        childPermissions = true;
                    } else {
                        childPermissions = tabPermissions?.fields;
                    }
                }
            } else {
                childPermissions = parentPermissions;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
                id,
                addErrorPathToParent: addErrorPathToParentArg,
                anyParentLocalized: tab.localized || anyParentLocalized,
                clientFieldSchemaMap,
                collectionSlug,
                data: isNamedTab ? data?.[tab.name] || {} : data,
                fields: tab.fields,
                fieldSchemaMap,
                filter,
                forceFullValue,
                fullData,
                includeSchema,
                omitParents,
                operation,
                parentIndexPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? '' : tabIndexPath,
                parentPassesCondition: passesCondition,
                parentPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? tabPath : parentPath,
                parentSchemaPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? tabSchemaPath : parentSchemaPath,
                permissions: childPermissions,
                preferences,
                previousFormState,
                renderAllFields,
                renderFieldFn,
                req,
                skipConditionChecks,
                skipValidation,
                state
            });
        });
        await Promise.all(promises);
    } else if (field.type === 'ui') {
        if (!filter || filter(args)) {
            state[path] = fieldState;
            state[path].disableFormData = true;
        }
    }
    if (requiresRender && renderFieldFn && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(field)) {
        const fieldState = state[path];
        const fieldConfig = fieldSchemaMap.get(schemaPath);
        if (!fieldConfig) {
            if (schemaPath.endsWith('.blockType')) {
                return;
            } else {
                throw new Error(`Field config not found for ${schemaPath}`);
            }
        }
        if (!fieldState) {
            // Some fields (ie `Tab`) do not live in form state
            // therefore we cannot attach customComponents to them
            return;
        }
        renderFieldFn({
            id,
            clientFieldSchemaMap,
            collectionSlug,
            data: fullData,
            fieldConfig: fieldConfig,
            fieldSchemaMap,
            fieldState,
            formState: state,
            indexPath,
            operation,
            parentPath,
            parentSchemaPath,
            path,
            permissions: fieldPermissions,
            preferences,
            previousFieldState: previousFormState?.[path],
            req,
            schemaPath,
            siblingData: data
        });
    }
}; //# sourceMappingURL=addFieldStatePromise.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iterateFields": (()=>iterateFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$addFieldStatePromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/addFieldStatePromise.js [app-rsc] (ecmascript)");
;
const iterateFields = async ({ id, addErrorPathToParent: addErrorPathToParentArg, anyParentLocalized = false, clientFieldSchemaMap, collectionSlug, data, fields, fieldSchemaMap, filter, forceFullValue = false, fullData, includeSchema = false, omitParents = false, operation, parentIndexPath, parentPassesCondition = true, parentPath, parentSchemaPath, permissions, preferences, previousFormState, renderAllFields, renderFieldFn: renderFieldFn, req, skipConditionChecks = false, skipValidation = false, state = {} })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        let passesCondition = true;
        if (!skipConditionChecks) {
            passesCondition = Boolean((field?.admin?.condition ? Boolean(field.admin.condition(fullData || {}, data || {}, {
                user: req.user
            })) : true) && parentPassesCondition);
        }
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$addFieldStatePromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addFieldStatePromise"])({
            id,
            addErrorPathToParent: addErrorPathToParentArg,
            anyParentLocalized,
            clientFieldSchemaMap,
            collectionSlug,
            data,
            field,
            fieldIndex,
            fieldSchemaMap,
            filter,
            forceFullValue,
            fullData,
            includeSchema,
            omitParents,
            operation,
            parentIndexPath,
            parentPath,
            parentPermissions: permissions,
            parentSchemaPath,
            passesCondition,
            preferences,
            previousFormState,
            renderAllFields,
            renderFieldFn,
            req,
            skipConditionChecks,
            skipValidation,
            state
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=iterateFields.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fieldSchemasToFormState": (()=>fieldSchemasToFormState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/calculateDefaultValues/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/iterateFields.js [app-rsc] (ecmascript)");
;
;
const fieldSchemasToFormState = async (args)=>{
    if (!args.clientFieldSchemaMap && args.renderFieldFn) {
        console.warn('clientFieldSchemaMap is not passed to fieldSchemasToFormState - this will reduce performance');
    }
    const { id, clientFieldSchemaMap, collectionSlug, data = {}, fields, fieldSchemaMap, operation, permissions, preferences, previousFormState, renderAllFields, renderFieldFn, req, schemaPath } = args;
    if (fields && fields.length) {
        const state = {};
        const dataWithDefaultValues = {
            ...data
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$calculateDefaultValues$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateDefaultValues"])({
            id,
            data: dataWithDefaultValues,
            fields,
            locale: req.locale,
            req,
            siblingData: dataWithDefaultValues,
            user: req.user
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$iterateFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["iterateFields"])({
            id,
            addErrorPathToParent: null,
            clientFieldSchemaMap,
            collectionSlug,
            data: dataWithDefaultValues,
            fields,
            fieldSchemaMap,
            fullData: dataWithDefaultValues,
            operation,
            parentIndexPath: '',
            parentPassesCondition: true,
            parentPath: '',
            parentSchemaPath: schemaPath,
            permissions,
            preferences,
            previousFormState,
            renderAllFields,
            renderFieldFn,
            req,
            state
        });
        return state;
    }
    return {};
};
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
const traverseFields = ({ config, fields, i18n, parentIndexPath, parentSchemaPath, schemaMap })=>{
    for (const [index, field] of fields.entries()){
        const { indexPath, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPaths"])({
            field,
            index,
            parentIndexPath: 'name' in field ? '' : parentIndexPath,
            parentPath: '',
            parentSchemaPath
        });
        schemaMap.set(schemaPath, field);
        switch(field.type){
            case 'array':
            case 'group':
                traverseFields({
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: '',
                    parentSchemaPath: schemaPath,
                    schemaMap
                });
                break;
            case 'blocks':
                field.blocks.map((block)=>{
                    const blockSchemaPath = `${schemaPath}.${block.slug}`;
                    schemaMap.set(blockSchemaPath, block);
                    traverseFields({
                        config,
                        fields: block.fields,
                        i18n,
                        parentIndexPath: '',
                        parentSchemaPath: blockSchemaPath,
                        schemaMap
                    });
                });
                break;
            case 'collapsible':
            case 'row':
                traverseFields({
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: indexPath,
                    parentSchemaPath,
                    schemaMap
                });
                break;
            case 'richText':
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                if (typeof field.editor.generateSchemaMap === 'function') {
                    field.editor.generateSchemaMap({
                        config,
                        field,
                        i18n,
                        schemaMap,
                        schemaPath
                    });
                }
                break;
            case 'tabs':
                field.tabs.map((tab, tabIndex)=>{
                    const { indexPath: tabIndexPath, schemaPath: tabSchemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPaths"])({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        index: tabIndex,
                        parentIndexPath: indexPath,
                        parentPath: '',
                        parentSchemaPath
                    });
                    schemaMap.set(tabSchemaPath, tab);
                    traverseFields({
                        config,
                        fields: tab.fields,
                        i18n,
                        parentIndexPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? '' : tabIndexPath,
                        parentSchemaPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? tabSchemaPath : parentSchemaPath,
                        schemaMap
                    });
                });
                break;
        }
    }
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Account": (()=>Account),
    "ActionsProvider": (()=>ActionsProvider),
    "AppHeader": (()=>AppHeader),
    "ArrayField": (()=>ArrayField),
    "AuthProvider": (()=>AuthProvider),
    "Banner": (()=>Banner),
    "BlocksDrawer": (()=>BlocksDrawer),
    "BlocksField": (()=>BlocksField),
    "BulkUploadDrawer": (()=>BulkUploadDrawer),
    "BulkUploadProvider": (()=>BulkUploadProvider),
    "Button": (()=>Button),
    "CalendarIcon": (()=>CalendarIcon),
    "Card": (()=>Card),
    "CheckIcon": (()=>CheckIcon),
    "CheckboxField": (()=>CheckboxField),
    "CheckboxInput": (()=>CheckboxInput),
    "ChevronIcon": (()=>ChevronIcon),
    "ClientFunctionProvider": (()=>ClientFunctionProvider),
    "CloseMenuIcon": (()=>CloseMenuIcon),
    "CodeBlockIcon": (()=>CodeBlockIcon),
    "CodeEdiftor": (()=>CodeEdiftor),
    "CodeEditorLazy": (()=>CodeEditorLazy),
    "CodeField": (()=>CodeField),
    "Collapsible": (()=>Collapsible),
    "CollapsibleField": (()=>CollapsibleField),
    "ConfigProvider": (()=>ConfigProvider),
    "ConfirmPasswordField": (()=>ConfirmPasswordField),
    "CopyIcon": (()=>CopyIcon),
    "CopyLocaleData": (()=>CopyLocaleData),
    "CopyToClipboard": (()=>CopyToClipboard),
    "DateCondition": (()=>DateCondition),
    "DatePicker": (()=>DatePicker),
    "DateTimeField": (()=>DateTimeField),
    "DefaultBlockImage": (()=>DefaultBlockImage),
    "DefaultCell": (()=>DefaultCell),
    "DefaultEditView": (()=>DefaultEditView),
    "DefaultListView": (()=>DefaultListView),
    "DeleteMany": (()=>DeleteMany),
    "DocumentControls": (()=>DocumentControls),
    "DocumentEventsProvider": (()=>DocumentEventsProvider),
    "DocumentFields": (()=>DocumentFields),
    "DocumentInfoProvider": (()=>DocumentInfoProvider),
    "DocumentLocked": (()=>DocumentLocked),
    "DocumentTakeOver": (()=>DocumentTakeOver),
    "DragHandleIcon": (()=>DragHandleIcon),
    "Drawer": (()=>Drawer),
    "DrawerToggler": (()=>DrawerToggler),
    "Dropzone": (()=>Dropzone),
    "EditDepthProvider": (()=>EditDepthProvider),
    "EditIcon": (()=>EditIcon),
    "EditMany": (()=>EditMany),
    "EditUpload": (()=>EditUpload),
    "EmailAndUsernameFields": (()=>EmailAndUsernameFields),
    "EmailField": (()=>EmailField),
    "EntityVisibilityProvider": (()=>EntityVisibilityProvider),
    "ErrorIcon": (()=>ErrorIcon),
    "ErrorPill": (()=>ErrorPill),
    "ExternalLinkIcon": (()=>ExternalLinkIcon),
    "FieldDescription": (()=>FieldDescription),
    "FieldError": (()=>FieldError),
    "FieldLabel": (()=>FieldLabel),
    "File": (()=>File),
    "FileDetails": (()=>FileDetails),
    "Form": (()=>Form),
    "FormLoadingOverlayToggle": (()=>FormLoadingOverlayToggle),
    "FormSubmit": (()=>FormSubmit),
    "FullscreenModal": (()=>FullscreenModal),
    "GenerateConfirmation": (()=>GenerateConfirmation),
    "GroupField": (()=>GroupField),
    "Gutter": (()=>Gutter),
    "Hamburger": (()=>Hamburger),
    "HiddenField": (()=>HiddenField),
    "HydrateAuthProvider": (()=>HydrateAuthProvider),
    "InfoIcon": (()=>InfoIcon),
    "JSONField": (()=>JSONField),
    "JoinField": (()=>JoinField),
    "LeaveWithoutSaving": (()=>LeaveWithoutSaving),
    "LineIcon": (()=>LineIcon),
    "LinkIcon": (()=>LinkIcon),
    "ListControls": (()=>ListControls),
    "ListDrawerContextProvider": (()=>ListDrawerContextProvider),
    "ListHeader": (()=>ListHeader),
    "ListQueryProvider": (()=>ListQueryProvider),
    "ListSelection": (()=>ListSelection),
    "LoadingOverlay": (()=>LoadingOverlay),
    "LoadingOverlayToggle": (()=>LoadingOverlayToggle),
    "LocaleProvider": (()=>LocaleProvider),
    "Locked": (()=>Locked),
    "LogOutIcon": (()=>LogOutIcon),
    "Logout": (()=>Logout),
    "MenuIcon": (()=>MenuIcon),
    "MinimizeMaximizeIcon": (()=>MinimizeMaximizeIcon),
    "Modal": (()=>Modal),
    "MoreIcon": (()=>MoreIcon),
    "NavGroup": (()=>NavGroup),
    "NavToggler": (()=>NavToggler),
    "NullifyLocaleField": (()=>NullifyLocaleField),
    "NumberCondition": (()=>NumberCondition),
    "NumberField": (()=>NumberField),
    "OperationProvider": (()=>OperationProvider),
    "Pagination": (()=>Pagination),
    "ParamsProvider": (()=>ParamsProvider),
    "PasswordField": (()=>PasswordField),
    "PayloadIcon": (()=>PayloadIcon),
    "PerPage": (()=>PerPage),
    "Pill": (()=>Pill),
    "PlusIcon": (()=>PlusIcon),
    "PointField": (()=>PointField),
    "Popup": (()=>Popup),
    "PopupList": (()=>PopupList),
    "PreferencesProvider": (()=>PreferencesProvider),
    "PreviewButton": (()=>PreviewButton),
    "PreviewSizes": (()=>PreviewSizes),
    "PublishButton": (()=>PublishButton),
    "PublishMany": (()=>PublishMany),
    "RadioGroupField": (()=>RadioGroupField),
    "ReactSelect": (()=>ReactSelect),
    "RelationshipCondition": (()=>RelationshipCondition),
    "RelationshipField": (()=>RelationshipField),
    "RelationshipProvider": (()=>RelationshipProvider),
    "RelationshipTable": (()=>RelationshipTable),
    "RenderCustomComponent": (()=>RenderCustomComponent),
    "RenderDefaultCell": (()=>RenderDefaultCell),
    "RenderFields": (()=>RenderFields),
    "RenderTitle": (()=>RenderTitle),
    "RichTextField": (()=>RichTextField),
    "RootProvider": (()=>RootProvider),
    "RouteCacheProvider": (()=>RouteCacheProvider),
    "RowField": (()=>RowField),
    "RowLabel": (()=>RowLabel),
    "RowLabelProvider": (()=>RowLabelProvider),
    "SaveButton": (()=>SaveButton),
    "SaveDraftButton": (()=>SaveDraftButton),
    "ScrollInfoProvider": (()=>ScrollInfoProvider),
    "SearchFilter": (()=>SearchFilter),
    "SearchIcon": (()=>SearchIcon),
    "SearchParamsProvider": (()=>SearchParamsProvider),
    "SectionTitle": (()=>SectionTitle),
    "Select": (()=>Select),
    "SelectAll": (()=>SelectAll),
    "SelectCondition": (()=>SelectCondition),
    "SelectField": (()=>SelectField),
    "SelectInput": (()=>SelectInput),
    "SelectMany": (()=>SelectMany),
    "SelectRow": (()=>SelectRow),
    "SelectionProvider": (()=>SelectionProvider),
    "ServerFunctionsProvider": (()=>ServerFunctionsProvider),
    "SetDocumentStepNav": (()=>SetDocumentStepNav),
    "SetDocumentTitle": (()=>SetDocumentTitle),
    "SetStepNav": (()=>SetStepNav),
    "ShimmerEffect": (()=>ShimmerEffect),
    "SortColumn": (()=>SortColumn),
    "StaggeredShimmers": (()=>StaggeredShimmers),
    "SuccessIcon": (()=>SuccessIcon),
    "SwapIcon": (()=>SwapIcon),
    "TabComponent": (()=>TabComponent),
    "Table": (()=>Table),
    "TableColumnsProvider": (()=>TableColumnsProvider),
    "TabsField": (()=>TabsField),
    "TabsProvider": (()=>TabsProvider),
    "TextCondition": (()=>TextCondition),
    "TextField": (()=>TextField),
    "TextInput": (()=>TextInput),
    "TextareaField": (()=>TextareaField),
    "TextareaInput": (()=>TextareaInput),
    "ThemeProvider": (()=>ThemeProvider),
    "Thumbnail": (()=>Thumbnail),
    "Tooltip": (()=>Tooltip),
    "Translation": (()=>Translation),
    "TranslationProvider": (()=>TranslationProvider),
    "UIField": (()=>UIField),
    "UnpublishMany": (()=>UnpublishMany),
    "Upload": (()=>Upload),
    "UploadEditsProvider": (()=>UploadEditsProvider),
    "UploadField": (()=>UploadField),
    "UploadInput": (()=>UploadInput),
    "ViewDescription": (()=>ViewDescription),
    "WarningIcon": (()=>WarningIcon),
    "WatchChildErrors": (()=>WatchChildErrors),
    "WatchCondition": (()=>WatchCondition),
    "WindowInfoProvider": (()=>WindowInfoProvider),
    "XIcon": (()=>XIcon),
    "allFieldComponents": (()=>allFieldComponents),
    "defaultTheme": (()=>defaultTheme),
    "documentDrawerBaseClass": (()=>documentDrawerBaseClass),
    "fieldBaseClass": (()=>fieldBaseClass),
    "fieldComponents": (()=>fieldComponents),
    "fieldReducer": (()=>fieldReducer),
    "formatDrawerSlug": (()=>formatDrawerSlug),
    "toast": (()=>toast),
    "useActions": (()=>useActions),
    "useAddClientFunction": (()=>useAddClientFunction),
    "useAllFormFields": (()=>useAllFormFields),
    "useAuth": (()=>useAuth),
    "useBulkUpload": (()=>useBulkUpload),
    "useBulkUploadDrawerSlug": (()=>useBulkUploadDrawerSlug),
    "useCellProps": (()=>useCellProps),
    "useClientFunctions": (()=>useClientFunctions),
    "useCollapsible": (()=>useCollapsible),
    "useConfig": (()=>useConfig),
    "useDebounce": (()=>useDebounce),
    "useDebouncedCallback": (()=>useDebouncedCallback),
    "useDebouncedEffect": (()=>useDebouncedEffect),
    "useDelay": (()=>useDelay),
    "useDelayedRender": (()=>useDelayedRender),
    "useDocumentDrawer": (()=>useDocumentDrawer),
    "useDocumentDrawerContext": (()=>useDocumentDrawerContext),
    "useDocumentEvents": (()=>useDocumentEvents),
    "useDocumentInfo": (()=>useDocumentInfo),
    "useDrawerSlug": (()=>useDrawerSlug),
    "useEditDepth": (()=>useEditDepth),
    "useEntityVisibility": (()=>useEntityVisibility),
    "useField": (()=>useField),
    "useForm": (()=>useForm),
    "useFormFields": (()=>useFormFields),
    "useFormInitializing": (()=>useFormInitializing),
    "useFormModified": (()=>useFormModified),
    "useFormProcessing": (()=>useFormProcessing),
    "useFormSubmitted": (()=>useFormSubmitted),
    "useHotkey": (()=>useHotkey),
    "useIntersect": (()=>useIntersect),
    "useListDrawer": (()=>useListDrawer),
    "useListDrawerContext": (()=>useListDrawerContext),
    "useListQuery": (()=>useListQuery),
    "useListRelationships": (()=>useListRelationships),
    "useLocale": (()=>useLocale),
    "useModal": (()=>useModal),
    "useNav": (()=>useNav),
    "useOperation": (()=>useOperation),
    "useParams": (()=>useParams),
    "usePayloadAPI": (()=>usePayloadAPI),
    "usePreferences": (()=>usePreferences),
    "useResize": (()=>useResize),
    "useRouteCache": (()=>useRouteCache),
    "useRowLabel": (()=>useRowLabel),
    "useScrollInfo": (()=>useScrollInfo),
    "useSearchParams": (()=>useSearchParams),
    "useSelection": (()=>useSelection),
    "useServerFunctions": (()=>useServerFunctions),
    "useStepNav": (()=>useStepNav),
    "useTableColumns": (()=>useTableColumns),
    "useTheme": (()=>useTheme),
    "useThrottledEffect": (()=>useThrottledEffect),
    "useTranslation": (()=>useTranslation),
    "useUploadEdits": (()=>useUploadEdits),
    "useUseTitleField": (()=>useUseTitleField),
    "useWatchForm": (()=>useWatchForm),
    "useWindowInfo": (()=>useWindowInfo),
    "withCondition": (()=>withCondition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Account() from the server but Account is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Account");
const ActionsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ActionsProvider() from the server but ActionsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ActionsProvider");
const AppHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppHeader() from the server but AppHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "AppHeader");
const ArrayField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ArrayField() from the server but ArrayField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ArrayField");
const AuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "AuthProvider");
const Banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Banner() from the server but Banner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Banner");
const BlocksDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlocksDrawer() from the server but BlocksDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "BlocksDrawer");
const BlocksField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlocksField() from the server but BlocksField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "BlocksField");
const BulkUploadDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BulkUploadDrawer() from the server but BulkUploadDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "BulkUploadDrawer");
const BulkUploadProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BulkUploadProvider() from the server but BulkUploadProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "BulkUploadProvider");
const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Button() from the server but Button is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Button");
const CalendarIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CalendarIcon() from the server but CalendarIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CalendarIcon");
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Card() from the server but Card is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Card");
const CheckIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckIcon() from the server but CheckIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CheckIcon");
const CheckboxField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckboxField() from the server but CheckboxField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CheckboxField");
const CheckboxInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckboxInput() from the server but CheckboxInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CheckboxInput");
const ChevronIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ChevronIcon() from the server but ChevronIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ChevronIcon");
const ClientFunctionProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientFunctionProvider() from the server but ClientFunctionProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ClientFunctionProvider");
const CloseMenuIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CloseMenuIcon() from the server but CloseMenuIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CloseMenuIcon");
const CodeBlockIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeBlockIcon() from the server but CodeBlockIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CodeBlockIcon");
const CodeEdiftor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeEdiftor() from the server but CodeEdiftor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CodeEdiftor");
const CodeEditorLazy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeEditorLazy() from the server but CodeEditorLazy is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CodeEditorLazy");
const CodeField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeField() from the server but CodeField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CodeField");
const Collapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Collapsible() from the server but Collapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Collapsible");
const CollapsibleField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollapsibleField() from the server but CollapsibleField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CollapsibleField");
const ConfigProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfigProvider() from the server but ConfigProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ConfigProvider");
const ConfirmPasswordField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfirmPasswordField() from the server but ConfirmPasswordField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ConfirmPasswordField");
const CopyIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopyIcon() from the server but CopyIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CopyIcon");
const CopyLocaleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopyLocaleData() from the server but CopyLocaleData is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CopyLocaleData");
const CopyToClipboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopyToClipboard() from the server but CopyToClipboard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "CopyToClipboard");
const DateCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DateCondition() from the server but DateCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DateCondition");
const DatePicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DatePicker() from the server but DatePicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DatePicker");
const DateTimeField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DateTimeField() from the server but DateTimeField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DateTimeField");
const DefaultBlockImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultBlockImage() from the server but DefaultBlockImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DefaultBlockImage");
const DefaultCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultCell() from the server but DefaultCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DefaultCell");
const DefaultEditView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultEditView() from the server but DefaultEditView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DefaultEditView");
const DefaultListView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultListView() from the server but DefaultListView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DefaultListView");
const DeleteMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DeleteMany() from the server but DeleteMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DeleteMany");
const DocumentControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentControls() from the server but DocumentControls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DocumentControls");
const DocumentEventsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentEventsProvider() from the server but DocumentEventsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DocumentEventsProvider");
const DocumentFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentFields() from the server but DocumentFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DocumentFields");
const DocumentInfoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentInfoProvider() from the server but DocumentInfoProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DocumentInfoProvider");
const DocumentLocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentLocked() from the server but DocumentLocked is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DocumentLocked");
const DocumentTakeOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentTakeOver() from the server but DocumentTakeOver is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DocumentTakeOver");
const DragHandleIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DragHandleIcon() from the server but DragHandleIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DragHandleIcon");
const Drawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Drawer() from the server but Drawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Drawer");
const DrawerToggler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DrawerToggler() from the server but DrawerToggler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "DrawerToggler");
const Dropzone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Dropzone() from the server but Dropzone is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Dropzone");
const EditDepthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditDepthProvider() from the server but EditDepthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EditDepthProvider");
const EditIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditIcon() from the server but EditIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EditIcon");
const EditMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditMany() from the server but EditMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EditMany");
const EditUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditUpload() from the server but EditUpload is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EditUpload");
const EmailAndUsernameFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EmailAndUsernameFields() from the server but EmailAndUsernameFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EmailAndUsernameFields");
const EmailField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EmailField() from the server but EmailField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EmailField");
const EntityVisibilityProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EntityVisibilityProvider() from the server but EntityVisibilityProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "EntityVisibilityProvider");
const ErrorIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorIcon() from the server but ErrorIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ErrorIcon");
const ErrorPill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorPill() from the server but ErrorPill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ErrorPill");
const ExternalLinkIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ExternalLinkIcon() from the server but ExternalLinkIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ExternalLinkIcon");
const FieldDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldDescription() from the server but FieldDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FieldDescription");
const FieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldError() from the server but FieldError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FieldError");
const FieldLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldLabel() from the server but FieldLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FieldLabel");
const File = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call File() from the server but File is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "File");
const FileDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FileDetails() from the server but FileDetails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FileDetails");
const Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Form() from the server but Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Form");
const FormLoadingOverlayToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FormLoadingOverlayToggle() from the server but FormLoadingOverlayToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FormLoadingOverlayToggle");
const FormSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FormSubmit() from the server but FormSubmit is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FormSubmit");
const FullscreenModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FullscreenModal() from the server but FullscreenModal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "FullscreenModal");
const GenerateConfirmation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GenerateConfirmation() from the server but GenerateConfirmation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "GenerateConfirmation");
const GroupField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GroupField() from the server but GroupField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "GroupField");
const Gutter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Gutter() from the server but Gutter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Gutter");
const Hamburger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Hamburger() from the server but Hamburger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Hamburger");
const HiddenField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HiddenField() from the server but HiddenField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "HiddenField");
const HydrateAuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HydrateAuthProvider() from the server but HydrateAuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "HydrateAuthProvider");
const InfoIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InfoIcon() from the server but InfoIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "InfoIcon");
const JSONField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call JSONField() from the server but JSONField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "JSONField");
const JoinField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call JoinField() from the server but JoinField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "JoinField");
const LeaveWithoutSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LeaveWithoutSaving() from the server but LeaveWithoutSaving is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LeaveWithoutSaving");
const LineIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LineIcon() from the server but LineIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LineIcon");
const LinkIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkIcon() from the server but LinkIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LinkIcon");
const ListControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListControls() from the server but ListControls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ListControls");
const ListDrawerContextProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListDrawerContextProvider() from the server but ListDrawerContextProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ListDrawerContextProvider");
const ListHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListHeader() from the server but ListHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ListHeader");
const ListQueryProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListQueryProvider() from the server but ListQueryProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ListQueryProvider");
const ListSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListSelection() from the server but ListSelection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ListSelection");
const LoadingOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoadingOverlay() from the server but LoadingOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LoadingOverlay");
const LoadingOverlayToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoadingOverlayToggle() from the server but LoadingOverlayToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LoadingOverlayToggle");
const LocaleProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LocaleProvider() from the server but LocaleProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LocaleProvider");
const Locked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Locked() from the server but Locked is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Locked");
const LogOutIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LogOutIcon() from the server but LogOutIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "LogOutIcon");
const Logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Logout() from the server but Logout is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Logout");
const MenuIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MenuIcon() from the server but MenuIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "MenuIcon");
const MinimizeMaximizeIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MinimizeMaximizeIcon() from the server but MinimizeMaximizeIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "MinimizeMaximizeIcon");
const Modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Modal() from the server but Modal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Modal");
const MoreIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MoreIcon() from the server but MoreIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "MoreIcon");
const NavGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavGroup() from the server but NavGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "NavGroup");
const NavToggler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavToggler() from the server but NavToggler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "NavToggler");
const NullifyLocaleField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NullifyLocaleField() from the server but NullifyLocaleField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "NullifyLocaleField");
const NumberCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NumberCondition() from the server but NumberCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "NumberCondition");
const NumberField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NumberField() from the server but NumberField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "NumberField");
const OperationProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OperationProvider() from the server but OperationProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "OperationProvider");
const Pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Pagination() from the server but Pagination is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Pagination");
const ParamsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ParamsProvider() from the server but ParamsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ParamsProvider");
const PasswordField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PasswordField() from the server but PasswordField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PasswordField");
const PayloadIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PayloadIcon() from the server but PayloadIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PayloadIcon");
const PerPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PerPage() from the server but PerPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PerPage");
const Pill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Pill() from the server but Pill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Pill");
const PlusIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PlusIcon() from the server but PlusIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PlusIcon");
const PointField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PointField() from the server but PointField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PointField");
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Popup() from the server but Popup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Popup");
const PopupList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PopupList() from the server but PopupList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PopupList");
const PreferencesProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PreferencesProvider() from the server but PreferencesProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PreferencesProvider");
const PreviewButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PreviewButton() from the server but PreviewButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PreviewButton");
const PreviewSizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PreviewSizes() from the server but PreviewSizes is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PreviewSizes");
const PublishButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PublishButton() from the server but PublishButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PublishButton");
const PublishMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PublishMany() from the server but PublishMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "PublishMany");
const RadioGroupField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RadioGroupField() from the server but RadioGroupField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RadioGroupField");
const ReactSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReactSelect() from the server but ReactSelect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ReactSelect");
const RelationshipCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipCondition() from the server but RelationshipCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RelationshipCondition");
const RelationshipField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipField() from the server but RelationshipField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RelationshipField");
const RelationshipProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipProvider() from the server but RelationshipProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RelationshipProvider");
const RelationshipTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipTable() from the server but RelationshipTable is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RelationshipTable");
const RenderCustomComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderCustomComponent() from the server but RenderCustomComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RenderCustomComponent");
const RenderDefaultCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderDefaultCell() from the server but RenderDefaultCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RenderDefaultCell");
const RenderFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderFields() from the server but RenderFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RenderFields");
const RenderTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderTitle() from the server but RenderTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RenderTitle");
const RichTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RichTextField() from the server but RichTextField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RichTextField");
const RootProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RootProvider() from the server but RootProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RootProvider");
const RouteCacheProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RouteCacheProvider() from the server but RouteCacheProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RouteCacheProvider");
const RowField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RowField() from the server but RowField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RowField");
const RowLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RowLabel() from the server but RowLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RowLabel");
const RowLabelProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RowLabelProvider() from the server but RowLabelProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "RowLabelProvider");
const SaveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SaveButton() from the server but SaveButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SaveButton");
const SaveDraftButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SaveDraftButton() from the server but SaveDraftButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SaveDraftButton");
const ScrollInfoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollInfoProvider() from the server but ScrollInfoProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ScrollInfoProvider");
const SearchFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchFilter() from the server but SearchFilter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SearchFilter");
const SearchIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchIcon() from the server but SearchIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SearchIcon");
const SearchParamsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchParamsProvider() from the server but SearchParamsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SearchParamsProvider");
const SectionTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SectionTitle() from the server but SectionTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SectionTitle");
const Select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Select() from the server but Select is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Select");
const SelectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectAll() from the server but SelectAll is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectAll");
const SelectCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectCondition() from the server but SelectCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectCondition");
const SelectField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectField() from the server but SelectField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectField");
const SelectInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectInput() from the server but SelectInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectInput");
const SelectMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectMany() from the server but SelectMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectMany");
const SelectRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectRow() from the server but SelectRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectRow");
const SelectionProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectionProvider() from the server but SelectionProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SelectionProvider");
const ServerFunctionsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServerFunctionsProvider() from the server but ServerFunctionsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ServerFunctionsProvider");
const SetDocumentStepNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SetDocumentStepNav() from the server but SetDocumentStepNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SetDocumentStepNav");
const SetDocumentTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SetDocumentTitle() from the server but SetDocumentTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SetDocumentTitle");
const SetStepNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SetStepNav() from the server but SetStepNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SetStepNav");
const ShimmerEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShimmerEffect() from the server but ShimmerEffect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ShimmerEffect");
const SortColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SortColumn() from the server but SortColumn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SortColumn");
const StaggeredShimmers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StaggeredShimmers() from the server but StaggeredShimmers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "StaggeredShimmers");
const SuccessIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SuccessIcon() from the server but SuccessIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SuccessIcon");
const SwapIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SwapIcon() from the server but SwapIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "SwapIcon");
const TabComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabComponent() from the server but TabComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TabComponent");
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Table");
const TableColumnsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableColumnsProvider() from the server but TableColumnsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TableColumnsProvider");
const TabsField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsField() from the server but TabsField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TabsField");
const TabsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsProvider() from the server but TabsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TabsProvider");
const TextCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextCondition() from the server but TextCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TextCondition");
const TextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextField() from the server but TextField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TextField");
const TextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextInput() from the server but TextInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TextInput");
const TextareaField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextareaField() from the server but TextareaField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TextareaField");
const TextareaInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextareaInput() from the server but TextareaInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TextareaInput");
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ThemeProvider");
const Thumbnail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Thumbnail() from the server but Thumbnail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Thumbnail");
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tooltip() from the server but Tooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Tooltip");
const Translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Translation() from the server but Translation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Translation");
const TranslationProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TranslationProvider() from the server but TranslationProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "TranslationProvider");
const UIField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UIField() from the server but UIField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "UIField");
const UnpublishMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UnpublishMany() from the server but UnpublishMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "UnpublishMany");
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Upload() from the server but Upload is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "Upload");
const UploadEditsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadEditsProvider() from the server but UploadEditsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "UploadEditsProvider");
const UploadField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadField() from the server but UploadField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "UploadField");
const UploadInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadInput() from the server but UploadInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "UploadInput");
const ViewDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ViewDescription() from the server but ViewDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "ViewDescription");
const WarningIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WarningIcon() from the server but WarningIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "WarningIcon");
const WatchChildErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WatchChildErrors() from the server but WatchChildErrors is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "WatchChildErrors");
const WatchCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WatchCondition() from the server but WatchCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "WatchCondition");
const WindowInfoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WindowInfoProvider() from the server but WindowInfoProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "WindowInfoProvider");
const XIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call XIcon() from the server but XIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "XIcon");
const allFieldComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call allFieldComponents() from the server but allFieldComponents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "allFieldComponents");
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call defaultTheme() from the server but defaultTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "defaultTheme");
const documentDrawerBaseClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call documentDrawerBaseClass() from the server but documentDrawerBaseClass is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "documentDrawerBaseClass");
const fieldBaseClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fieldBaseClass() from the server but fieldBaseClass is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "fieldBaseClass");
const fieldComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fieldComponents() from the server but fieldComponents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "fieldComponents");
const fieldReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fieldReducer() from the server but fieldReducer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "fieldReducer");
const formatDrawerSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call formatDrawerSlug() from the server but formatDrawerSlug is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "formatDrawerSlug");
const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toast() from the server but toast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "toast");
const useActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useActions() from the server but useActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useActions");
const useAddClientFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAddClientFunction() from the server but useAddClientFunction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useAddClientFunction");
const useAllFormFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAllFormFields() from the server but useAllFormFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useAllFormFields");
const useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useAuth");
const useBulkUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBulkUpload() from the server but useBulkUpload is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useBulkUpload");
const useBulkUploadDrawerSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBulkUploadDrawerSlug() from the server but useBulkUploadDrawerSlug is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useBulkUploadDrawerSlug");
const useCellProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useCellProps() from the server but useCellProps is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useCellProps");
const useClientFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useClientFunctions() from the server but useClientFunctions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useClientFunctions");
const useCollapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useCollapsible() from the server but useCollapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useCollapsible");
const useConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useConfig() from the server but useConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useConfig");
const useDebounce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDebounce() from the server but useDebounce is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDebounce");
const useDebouncedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDebouncedCallback() from the server but useDebouncedCallback is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDebouncedCallback");
const useDebouncedEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDebouncedEffect() from the server but useDebouncedEffect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDebouncedEffect");
const useDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDelay() from the server but useDelay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDelay");
const useDelayedRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDelayedRender() from the server but useDelayedRender is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDelayedRender");
const useDocumentDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentDrawer() from the server but useDocumentDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDocumentDrawer");
const useDocumentDrawerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentDrawerContext() from the server but useDocumentDrawerContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDocumentDrawerContext");
const useDocumentEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentEvents() from the server but useDocumentEvents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDocumentEvents");
const useDocumentInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentInfo() from the server but useDocumentInfo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDocumentInfo");
const useDrawerSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDrawerSlug() from the server but useDrawerSlug is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useDrawerSlug");
const useEditDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEditDepth() from the server but useEditDepth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useEditDepth");
const useEntityVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEntityVisibility() from the server but useEntityVisibility is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useEntityVisibility");
const useField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useField() from the server but useField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useField");
const useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useForm() from the server but useForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useForm");
const useFormFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormFields() from the server but useFormFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useFormFields");
const useFormInitializing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormInitializing() from the server but useFormInitializing is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useFormInitializing");
const useFormModified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormModified() from the server but useFormModified is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useFormModified");
const useFormProcessing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormProcessing() from the server but useFormProcessing is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useFormProcessing");
const useFormSubmitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormSubmitted() from the server but useFormSubmitted is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useFormSubmitted");
const useHotkey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useHotkey() from the server but useHotkey is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useHotkey");
const useIntersect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useIntersect() from the server but useIntersect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useIntersect");
const useListDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListDrawer() from the server but useListDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useListDrawer");
const useListDrawerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListDrawerContext() from the server but useListDrawerContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useListDrawerContext");
const useListQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListQuery() from the server but useListQuery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useListQuery");
const useListRelationships = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListRelationships() from the server but useListRelationships is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useListRelationships");
const useLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLocale() from the server but useLocale is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useLocale");
const useModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useModal() from the server but useModal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useModal");
const useNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNav() from the server but useNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useNav");
const useOperation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useOperation() from the server but useOperation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useOperation");
const useParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useParams() from the server but useParams is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useParams");
const usePayloadAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call usePayloadAPI() from the server but usePayloadAPI is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "usePayloadAPI");
const usePreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call usePreferences() from the server but usePreferences is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "usePreferences");
const useResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useResize() from the server but useResize is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useResize");
const useRouteCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useRouteCache() from the server but useRouteCache is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useRouteCache");
const useRowLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useRowLabel() from the server but useRowLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useRowLabel");
const useScrollInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useScrollInfo() from the server but useScrollInfo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useScrollInfo");
const useSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSearchParams() from the server but useSearchParams is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useSearchParams");
const useSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSelection() from the server but useSelection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useSelection");
const useServerFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useServerFunctions() from the server but useServerFunctions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useServerFunctions");
const useStepNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStepNav() from the server but useStepNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useStepNav");
const useTableColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTableColumns() from the server but useTableColumns is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useTableColumns");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useTheme");
const useThrottledEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useThrottledEffect() from the server but useThrottledEffect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useThrottledEffect");
const useTranslation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTranslation() from the server but useTranslation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useTranslation");
const useUploadEdits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUploadEdits() from the server but useUploadEdits is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useUploadEdits");
const useUseTitleField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUseTitleField() from the server but useUseTitleField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useUseTitleField");
const useWatchForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWatchForm() from the server but useWatchForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useWatchForm");
const useWindowInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWindowInfo() from the server but useWindowInfo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "useWindowInfo");
const withCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call withCondition() from the server but withCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js <module evaluation>", "withCondition");
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Account": (()=>Account),
    "ActionsProvider": (()=>ActionsProvider),
    "AppHeader": (()=>AppHeader),
    "ArrayField": (()=>ArrayField),
    "AuthProvider": (()=>AuthProvider),
    "Banner": (()=>Banner),
    "BlocksDrawer": (()=>BlocksDrawer),
    "BlocksField": (()=>BlocksField),
    "BulkUploadDrawer": (()=>BulkUploadDrawer),
    "BulkUploadProvider": (()=>BulkUploadProvider),
    "Button": (()=>Button),
    "CalendarIcon": (()=>CalendarIcon),
    "Card": (()=>Card),
    "CheckIcon": (()=>CheckIcon),
    "CheckboxField": (()=>CheckboxField),
    "CheckboxInput": (()=>CheckboxInput),
    "ChevronIcon": (()=>ChevronIcon),
    "ClientFunctionProvider": (()=>ClientFunctionProvider),
    "CloseMenuIcon": (()=>CloseMenuIcon),
    "CodeBlockIcon": (()=>CodeBlockIcon),
    "CodeEdiftor": (()=>CodeEdiftor),
    "CodeEditorLazy": (()=>CodeEditorLazy),
    "CodeField": (()=>CodeField),
    "Collapsible": (()=>Collapsible),
    "CollapsibleField": (()=>CollapsibleField),
    "ConfigProvider": (()=>ConfigProvider),
    "ConfirmPasswordField": (()=>ConfirmPasswordField),
    "CopyIcon": (()=>CopyIcon),
    "CopyLocaleData": (()=>CopyLocaleData),
    "CopyToClipboard": (()=>CopyToClipboard),
    "DateCondition": (()=>DateCondition),
    "DatePicker": (()=>DatePicker),
    "DateTimeField": (()=>DateTimeField),
    "DefaultBlockImage": (()=>DefaultBlockImage),
    "DefaultCell": (()=>DefaultCell),
    "DefaultEditView": (()=>DefaultEditView),
    "DefaultListView": (()=>DefaultListView),
    "DeleteMany": (()=>DeleteMany),
    "DocumentControls": (()=>DocumentControls),
    "DocumentEventsProvider": (()=>DocumentEventsProvider),
    "DocumentFields": (()=>DocumentFields),
    "DocumentInfoProvider": (()=>DocumentInfoProvider),
    "DocumentLocked": (()=>DocumentLocked),
    "DocumentTakeOver": (()=>DocumentTakeOver),
    "DragHandleIcon": (()=>DragHandleIcon),
    "Drawer": (()=>Drawer),
    "DrawerToggler": (()=>DrawerToggler),
    "Dropzone": (()=>Dropzone),
    "EditDepthProvider": (()=>EditDepthProvider),
    "EditIcon": (()=>EditIcon),
    "EditMany": (()=>EditMany),
    "EditUpload": (()=>EditUpload),
    "EmailAndUsernameFields": (()=>EmailAndUsernameFields),
    "EmailField": (()=>EmailField),
    "EntityVisibilityProvider": (()=>EntityVisibilityProvider),
    "ErrorIcon": (()=>ErrorIcon),
    "ErrorPill": (()=>ErrorPill),
    "ExternalLinkIcon": (()=>ExternalLinkIcon),
    "FieldDescription": (()=>FieldDescription),
    "FieldError": (()=>FieldError),
    "FieldLabel": (()=>FieldLabel),
    "File": (()=>File),
    "FileDetails": (()=>FileDetails),
    "Form": (()=>Form),
    "FormLoadingOverlayToggle": (()=>FormLoadingOverlayToggle),
    "FormSubmit": (()=>FormSubmit),
    "FullscreenModal": (()=>FullscreenModal),
    "GenerateConfirmation": (()=>GenerateConfirmation),
    "GroupField": (()=>GroupField),
    "Gutter": (()=>Gutter),
    "Hamburger": (()=>Hamburger),
    "HiddenField": (()=>HiddenField),
    "HydrateAuthProvider": (()=>HydrateAuthProvider),
    "InfoIcon": (()=>InfoIcon),
    "JSONField": (()=>JSONField),
    "JoinField": (()=>JoinField),
    "LeaveWithoutSaving": (()=>LeaveWithoutSaving),
    "LineIcon": (()=>LineIcon),
    "LinkIcon": (()=>LinkIcon),
    "ListControls": (()=>ListControls),
    "ListDrawerContextProvider": (()=>ListDrawerContextProvider),
    "ListHeader": (()=>ListHeader),
    "ListQueryProvider": (()=>ListQueryProvider),
    "ListSelection": (()=>ListSelection),
    "LoadingOverlay": (()=>LoadingOverlay),
    "LoadingOverlayToggle": (()=>LoadingOverlayToggle),
    "LocaleProvider": (()=>LocaleProvider),
    "Locked": (()=>Locked),
    "LogOutIcon": (()=>LogOutIcon),
    "Logout": (()=>Logout),
    "MenuIcon": (()=>MenuIcon),
    "MinimizeMaximizeIcon": (()=>MinimizeMaximizeIcon),
    "Modal": (()=>Modal),
    "MoreIcon": (()=>MoreIcon),
    "NavGroup": (()=>NavGroup),
    "NavToggler": (()=>NavToggler),
    "NullifyLocaleField": (()=>NullifyLocaleField),
    "NumberCondition": (()=>NumberCondition),
    "NumberField": (()=>NumberField),
    "OperationProvider": (()=>OperationProvider),
    "Pagination": (()=>Pagination),
    "ParamsProvider": (()=>ParamsProvider),
    "PasswordField": (()=>PasswordField),
    "PayloadIcon": (()=>PayloadIcon),
    "PerPage": (()=>PerPage),
    "Pill": (()=>Pill),
    "PlusIcon": (()=>PlusIcon),
    "PointField": (()=>PointField),
    "Popup": (()=>Popup),
    "PopupList": (()=>PopupList),
    "PreferencesProvider": (()=>PreferencesProvider),
    "PreviewButton": (()=>PreviewButton),
    "PreviewSizes": (()=>PreviewSizes),
    "PublishButton": (()=>PublishButton),
    "PublishMany": (()=>PublishMany),
    "RadioGroupField": (()=>RadioGroupField),
    "ReactSelect": (()=>ReactSelect),
    "RelationshipCondition": (()=>RelationshipCondition),
    "RelationshipField": (()=>RelationshipField),
    "RelationshipProvider": (()=>RelationshipProvider),
    "RelationshipTable": (()=>RelationshipTable),
    "RenderCustomComponent": (()=>RenderCustomComponent),
    "RenderDefaultCell": (()=>RenderDefaultCell),
    "RenderFields": (()=>RenderFields),
    "RenderTitle": (()=>RenderTitle),
    "RichTextField": (()=>RichTextField),
    "RootProvider": (()=>RootProvider),
    "RouteCacheProvider": (()=>RouteCacheProvider),
    "RowField": (()=>RowField),
    "RowLabel": (()=>RowLabel),
    "RowLabelProvider": (()=>RowLabelProvider),
    "SaveButton": (()=>SaveButton),
    "SaveDraftButton": (()=>SaveDraftButton),
    "ScrollInfoProvider": (()=>ScrollInfoProvider),
    "SearchFilter": (()=>SearchFilter),
    "SearchIcon": (()=>SearchIcon),
    "SearchParamsProvider": (()=>SearchParamsProvider),
    "SectionTitle": (()=>SectionTitle),
    "Select": (()=>Select),
    "SelectAll": (()=>SelectAll),
    "SelectCondition": (()=>SelectCondition),
    "SelectField": (()=>SelectField),
    "SelectInput": (()=>SelectInput),
    "SelectMany": (()=>SelectMany),
    "SelectRow": (()=>SelectRow),
    "SelectionProvider": (()=>SelectionProvider),
    "ServerFunctionsProvider": (()=>ServerFunctionsProvider),
    "SetDocumentStepNav": (()=>SetDocumentStepNav),
    "SetDocumentTitle": (()=>SetDocumentTitle),
    "SetStepNav": (()=>SetStepNav),
    "ShimmerEffect": (()=>ShimmerEffect),
    "SortColumn": (()=>SortColumn),
    "StaggeredShimmers": (()=>StaggeredShimmers),
    "SuccessIcon": (()=>SuccessIcon),
    "SwapIcon": (()=>SwapIcon),
    "TabComponent": (()=>TabComponent),
    "Table": (()=>Table),
    "TableColumnsProvider": (()=>TableColumnsProvider),
    "TabsField": (()=>TabsField),
    "TabsProvider": (()=>TabsProvider),
    "TextCondition": (()=>TextCondition),
    "TextField": (()=>TextField),
    "TextInput": (()=>TextInput),
    "TextareaField": (()=>TextareaField),
    "TextareaInput": (()=>TextareaInput),
    "ThemeProvider": (()=>ThemeProvider),
    "Thumbnail": (()=>Thumbnail),
    "Tooltip": (()=>Tooltip),
    "Translation": (()=>Translation),
    "TranslationProvider": (()=>TranslationProvider),
    "UIField": (()=>UIField),
    "UnpublishMany": (()=>UnpublishMany),
    "Upload": (()=>Upload),
    "UploadEditsProvider": (()=>UploadEditsProvider),
    "UploadField": (()=>UploadField),
    "UploadInput": (()=>UploadInput),
    "ViewDescription": (()=>ViewDescription),
    "WarningIcon": (()=>WarningIcon),
    "WatchChildErrors": (()=>WatchChildErrors),
    "WatchCondition": (()=>WatchCondition),
    "WindowInfoProvider": (()=>WindowInfoProvider),
    "XIcon": (()=>XIcon),
    "allFieldComponents": (()=>allFieldComponents),
    "defaultTheme": (()=>defaultTheme),
    "documentDrawerBaseClass": (()=>documentDrawerBaseClass),
    "fieldBaseClass": (()=>fieldBaseClass),
    "fieldComponents": (()=>fieldComponents),
    "fieldReducer": (()=>fieldReducer),
    "formatDrawerSlug": (()=>formatDrawerSlug),
    "toast": (()=>toast),
    "useActions": (()=>useActions),
    "useAddClientFunction": (()=>useAddClientFunction),
    "useAllFormFields": (()=>useAllFormFields),
    "useAuth": (()=>useAuth),
    "useBulkUpload": (()=>useBulkUpload),
    "useBulkUploadDrawerSlug": (()=>useBulkUploadDrawerSlug),
    "useCellProps": (()=>useCellProps),
    "useClientFunctions": (()=>useClientFunctions),
    "useCollapsible": (()=>useCollapsible),
    "useConfig": (()=>useConfig),
    "useDebounce": (()=>useDebounce),
    "useDebouncedCallback": (()=>useDebouncedCallback),
    "useDebouncedEffect": (()=>useDebouncedEffect),
    "useDelay": (()=>useDelay),
    "useDelayedRender": (()=>useDelayedRender),
    "useDocumentDrawer": (()=>useDocumentDrawer),
    "useDocumentDrawerContext": (()=>useDocumentDrawerContext),
    "useDocumentEvents": (()=>useDocumentEvents),
    "useDocumentInfo": (()=>useDocumentInfo),
    "useDrawerSlug": (()=>useDrawerSlug),
    "useEditDepth": (()=>useEditDepth),
    "useEntityVisibility": (()=>useEntityVisibility),
    "useField": (()=>useField),
    "useForm": (()=>useForm),
    "useFormFields": (()=>useFormFields),
    "useFormInitializing": (()=>useFormInitializing),
    "useFormModified": (()=>useFormModified),
    "useFormProcessing": (()=>useFormProcessing),
    "useFormSubmitted": (()=>useFormSubmitted),
    "useHotkey": (()=>useHotkey),
    "useIntersect": (()=>useIntersect),
    "useListDrawer": (()=>useListDrawer),
    "useListDrawerContext": (()=>useListDrawerContext),
    "useListQuery": (()=>useListQuery),
    "useListRelationships": (()=>useListRelationships),
    "useLocale": (()=>useLocale),
    "useModal": (()=>useModal),
    "useNav": (()=>useNav),
    "useOperation": (()=>useOperation),
    "useParams": (()=>useParams),
    "usePayloadAPI": (()=>usePayloadAPI),
    "usePreferences": (()=>usePreferences),
    "useResize": (()=>useResize),
    "useRouteCache": (()=>useRouteCache),
    "useRowLabel": (()=>useRowLabel),
    "useScrollInfo": (()=>useScrollInfo),
    "useSearchParams": (()=>useSearchParams),
    "useSelection": (()=>useSelection),
    "useServerFunctions": (()=>useServerFunctions),
    "useStepNav": (()=>useStepNav),
    "useTableColumns": (()=>useTableColumns),
    "useTheme": (()=>useTheme),
    "useThrottledEffect": (()=>useThrottledEffect),
    "useTranslation": (()=>useTranslation),
    "useUploadEdits": (()=>useUploadEdits),
    "useUseTitleField": (()=>useUseTitleField),
    "useWatchForm": (()=>useWatchForm),
    "useWindowInfo": (()=>useWindowInfo),
    "withCondition": (()=>withCondition)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Account() from the server but Account is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Account");
const ActionsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ActionsProvider() from the server but ActionsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ActionsProvider");
const AppHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AppHeader() from the server but AppHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "AppHeader");
const ArrayField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ArrayField() from the server but ArrayField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ArrayField");
const AuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AuthProvider() from the server but AuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "AuthProvider");
const Banner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Banner() from the server but Banner is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Banner");
const BlocksDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlocksDrawer() from the server but BlocksDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "BlocksDrawer");
const BlocksField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlocksField() from the server but BlocksField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "BlocksField");
const BulkUploadDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BulkUploadDrawer() from the server but BulkUploadDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "BulkUploadDrawer");
const BulkUploadProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BulkUploadProvider() from the server but BulkUploadProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "BulkUploadProvider");
const Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Button() from the server but Button is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Button");
const CalendarIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CalendarIcon() from the server but CalendarIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CalendarIcon");
const Card = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Card() from the server but Card is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Card");
const CheckIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckIcon() from the server but CheckIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CheckIcon");
const CheckboxField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckboxField() from the server but CheckboxField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CheckboxField");
const CheckboxInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CheckboxInput() from the server but CheckboxInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CheckboxInput");
const ChevronIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ChevronIcon() from the server but ChevronIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ChevronIcon");
const ClientFunctionProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ClientFunctionProvider() from the server but ClientFunctionProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ClientFunctionProvider");
const CloseMenuIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CloseMenuIcon() from the server but CloseMenuIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CloseMenuIcon");
const CodeBlockIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeBlockIcon() from the server but CodeBlockIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CodeBlockIcon");
const CodeEdiftor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeEdiftor() from the server but CodeEdiftor is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CodeEdiftor");
const CodeEditorLazy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeEditorLazy() from the server but CodeEditorLazy is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CodeEditorLazy");
const CodeField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CodeField() from the server but CodeField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CodeField");
const Collapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Collapsible() from the server but Collapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Collapsible");
const CollapsibleField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollapsibleField() from the server but CollapsibleField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CollapsibleField");
const ConfigProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfigProvider() from the server but ConfigProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ConfigProvider");
const ConfirmPasswordField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ConfirmPasswordField() from the server but ConfirmPasswordField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ConfirmPasswordField");
const CopyIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopyIcon() from the server but CopyIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CopyIcon");
const CopyLocaleData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopyLocaleData() from the server but CopyLocaleData is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CopyLocaleData");
const CopyToClipboard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CopyToClipboard() from the server but CopyToClipboard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "CopyToClipboard");
const DateCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DateCondition() from the server but DateCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DateCondition");
const DatePicker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DatePicker() from the server but DatePicker is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DatePicker");
const DateTimeField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DateTimeField() from the server but DateTimeField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DateTimeField");
const DefaultBlockImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultBlockImage() from the server but DefaultBlockImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DefaultBlockImage");
const DefaultCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultCell() from the server but DefaultCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DefaultCell");
const DefaultEditView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultEditView() from the server but DefaultEditView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DefaultEditView");
const DefaultListView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DefaultListView() from the server but DefaultListView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DefaultListView");
const DeleteMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DeleteMany() from the server but DeleteMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DeleteMany");
const DocumentControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentControls() from the server but DocumentControls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DocumentControls");
const DocumentEventsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentEventsProvider() from the server but DocumentEventsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DocumentEventsProvider");
const DocumentFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentFields() from the server but DocumentFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DocumentFields");
const DocumentInfoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentInfoProvider() from the server but DocumentInfoProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DocumentInfoProvider");
const DocumentLocked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentLocked() from the server but DocumentLocked is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DocumentLocked");
const DocumentTakeOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DocumentTakeOver() from the server but DocumentTakeOver is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DocumentTakeOver");
const DragHandleIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DragHandleIcon() from the server but DragHandleIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DragHandleIcon");
const Drawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Drawer() from the server but Drawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Drawer");
const DrawerToggler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DrawerToggler() from the server but DrawerToggler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "DrawerToggler");
const Dropzone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Dropzone() from the server but Dropzone is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Dropzone");
const EditDepthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditDepthProvider() from the server but EditDepthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EditDepthProvider");
const EditIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditIcon() from the server but EditIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EditIcon");
const EditMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditMany() from the server but EditMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EditMany");
const EditUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EditUpload() from the server but EditUpload is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EditUpload");
const EmailAndUsernameFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EmailAndUsernameFields() from the server but EmailAndUsernameFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EmailAndUsernameFields");
const EmailField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EmailField() from the server but EmailField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EmailField");
const EntityVisibilityProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EntityVisibilityProvider() from the server but EntityVisibilityProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "EntityVisibilityProvider");
const ErrorIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorIcon() from the server but ErrorIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ErrorIcon");
const ErrorPill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ErrorPill() from the server but ErrorPill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ErrorPill");
const ExternalLinkIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ExternalLinkIcon() from the server but ExternalLinkIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ExternalLinkIcon");
const FieldDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldDescription() from the server but FieldDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FieldDescription");
const FieldError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldError() from the server but FieldError is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FieldError");
const FieldLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FieldLabel() from the server but FieldLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FieldLabel");
const File = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call File() from the server but File is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "File");
const FileDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FileDetails() from the server but FileDetails is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FileDetails");
const Form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Form() from the server but Form is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Form");
const FormLoadingOverlayToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FormLoadingOverlayToggle() from the server but FormLoadingOverlayToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FormLoadingOverlayToggle");
const FormSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FormSubmit() from the server but FormSubmit is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FormSubmit");
const FullscreenModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FullscreenModal() from the server but FullscreenModal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "FullscreenModal");
const GenerateConfirmation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GenerateConfirmation() from the server but GenerateConfirmation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "GenerateConfirmation");
const GroupField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call GroupField() from the server but GroupField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "GroupField");
const Gutter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Gutter() from the server but Gutter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Gutter");
const Hamburger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Hamburger() from the server but Hamburger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Hamburger");
const HiddenField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HiddenField() from the server but HiddenField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "HiddenField");
const HydrateAuthProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HydrateAuthProvider() from the server but HydrateAuthProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "HydrateAuthProvider");
const InfoIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call InfoIcon() from the server but InfoIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "InfoIcon");
const JSONField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call JSONField() from the server but JSONField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "JSONField");
const JoinField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call JoinField() from the server but JoinField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "JoinField");
const LeaveWithoutSaving = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LeaveWithoutSaving() from the server but LeaveWithoutSaving is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LeaveWithoutSaving");
const LineIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LineIcon() from the server but LineIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LineIcon");
const LinkIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LinkIcon() from the server but LinkIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LinkIcon");
const ListControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListControls() from the server but ListControls is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ListControls");
const ListDrawerContextProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListDrawerContextProvider() from the server but ListDrawerContextProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ListDrawerContextProvider");
const ListHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListHeader() from the server but ListHeader is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ListHeader");
const ListQueryProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListQueryProvider() from the server but ListQueryProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ListQueryProvider");
const ListSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ListSelection() from the server but ListSelection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ListSelection");
const LoadingOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoadingOverlay() from the server but LoadingOverlay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LoadingOverlay");
const LoadingOverlayToggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoadingOverlayToggle() from the server but LoadingOverlayToggle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LoadingOverlayToggle");
const LocaleProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LocaleProvider() from the server but LocaleProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LocaleProvider");
const Locked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Locked() from the server but Locked is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Locked");
const LogOutIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LogOutIcon() from the server but LogOutIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "LogOutIcon");
const Logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Logout() from the server but Logout is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Logout");
const MenuIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MenuIcon() from the server but MenuIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "MenuIcon");
const MinimizeMaximizeIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MinimizeMaximizeIcon() from the server but MinimizeMaximizeIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "MinimizeMaximizeIcon");
const Modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Modal() from the server but Modal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Modal");
const MoreIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call MoreIcon() from the server but MoreIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "MoreIcon");
const NavGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavGroup() from the server but NavGroup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "NavGroup");
const NavToggler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavToggler() from the server but NavToggler is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "NavToggler");
const NullifyLocaleField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NullifyLocaleField() from the server but NullifyLocaleField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "NullifyLocaleField");
const NumberCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NumberCondition() from the server but NumberCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "NumberCondition");
const NumberField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NumberField() from the server but NumberField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "NumberField");
const OperationProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call OperationProvider() from the server but OperationProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "OperationProvider");
const Pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Pagination() from the server but Pagination is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Pagination");
const ParamsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ParamsProvider() from the server but ParamsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ParamsProvider");
const PasswordField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PasswordField() from the server but PasswordField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PasswordField");
const PayloadIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PayloadIcon() from the server but PayloadIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PayloadIcon");
const PerPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PerPage() from the server but PerPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PerPage");
const Pill = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Pill() from the server but Pill is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Pill");
const PlusIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PlusIcon() from the server but PlusIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PlusIcon");
const PointField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PointField() from the server but PointField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PointField");
const Popup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Popup() from the server but Popup is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Popup");
const PopupList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PopupList() from the server but PopupList is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PopupList");
const PreferencesProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PreferencesProvider() from the server but PreferencesProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PreferencesProvider");
const PreviewButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PreviewButton() from the server but PreviewButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PreviewButton");
const PreviewSizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PreviewSizes() from the server but PreviewSizes is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PreviewSizes");
const PublishButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PublishButton() from the server but PublishButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PublishButton");
const PublishMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PublishMany() from the server but PublishMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "PublishMany");
const RadioGroupField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RadioGroupField() from the server but RadioGroupField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RadioGroupField");
const ReactSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ReactSelect() from the server but ReactSelect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ReactSelect");
const RelationshipCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipCondition() from the server but RelationshipCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RelationshipCondition");
const RelationshipField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipField() from the server but RelationshipField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RelationshipField");
const RelationshipProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipProvider() from the server but RelationshipProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RelationshipProvider");
const RelationshipTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RelationshipTable() from the server but RelationshipTable is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RelationshipTable");
const RenderCustomComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderCustomComponent() from the server but RenderCustomComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RenderCustomComponent");
const RenderDefaultCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderDefaultCell() from the server but RenderDefaultCell is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RenderDefaultCell");
const RenderFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderFields() from the server but RenderFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RenderFields");
const RenderTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RenderTitle() from the server but RenderTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RenderTitle");
const RichTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RichTextField() from the server but RichTextField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RichTextField");
const RootProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RootProvider() from the server but RootProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RootProvider");
const RouteCacheProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RouteCacheProvider() from the server but RouteCacheProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RouteCacheProvider");
const RowField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RowField() from the server but RowField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RowField");
const RowLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RowLabel() from the server but RowLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RowLabel");
const RowLabelProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RowLabelProvider() from the server but RowLabelProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "RowLabelProvider");
const SaveButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SaveButton() from the server but SaveButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SaveButton");
const SaveDraftButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SaveDraftButton() from the server but SaveDraftButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SaveDraftButton");
const ScrollInfoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ScrollInfoProvider() from the server but ScrollInfoProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ScrollInfoProvider");
const SearchFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchFilter() from the server but SearchFilter is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SearchFilter");
const SearchIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchIcon() from the server but SearchIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SearchIcon");
const SearchParamsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchParamsProvider() from the server but SearchParamsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SearchParamsProvider");
const SectionTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SectionTitle() from the server but SectionTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SectionTitle");
const Select = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Select() from the server but Select is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Select");
const SelectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectAll() from the server but SelectAll is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectAll");
const SelectCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectCondition() from the server but SelectCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectCondition");
const SelectField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectField() from the server but SelectField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectField");
const SelectInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectInput() from the server but SelectInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectInput");
const SelectMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectMany() from the server but SelectMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectMany");
const SelectRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectRow() from the server but SelectRow is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectRow");
const SelectionProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SelectionProvider() from the server but SelectionProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SelectionProvider");
const ServerFunctionsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServerFunctionsProvider() from the server but ServerFunctionsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ServerFunctionsProvider");
const SetDocumentStepNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SetDocumentStepNav() from the server but SetDocumentStepNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SetDocumentStepNav");
const SetDocumentTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SetDocumentTitle() from the server but SetDocumentTitle is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SetDocumentTitle");
const SetStepNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SetStepNav() from the server but SetStepNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SetStepNav");
const ShimmerEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShimmerEffect() from the server but ShimmerEffect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ShimmerEffect");
const SortColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SortColumn() from the server but SortColumn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SortColumn");
const StaggeredShimmers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StaggeredShimmers() from the server but StaggeredShimmers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "StaggeredShimmers");
const SuccessIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SuccessIcon() from the server but SuccessIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SuccessIcon");
const SwapIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SwapIcon() from the server but SwapIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "SwapIcon");
const TabComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabComponent() from the server but TabComponent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TabComponent");
const Table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Table() from the server but Table is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Table");
const TableColumnsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TableColumnsProvider() from the server but TableColumnsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TableColumnsProvider");
const TabsField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsField() from the server but TabsField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TabsField");
const TabsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TabsProvider() from the server but TabsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TabsProvider");
const TextCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextCondition() from the server but TextCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TextCondition");
const TextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextField() from the server but TextField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TextField");
const TextInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextInput() from the server but TextInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TextInput");
const TextareaField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextareaField() from the server but TextareaField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TextareaField");
const TextareaInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextareaInput() from the server but TextareaInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TextareaInput");
const ThemeProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ThemeProvider() from the server but ThemeProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ThemeProvider");
const Thumbnail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Thumbnail() from the server but Thumbnail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Thumbnail");
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tooltip() from the server but Tooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Tooltip");
const Translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Translation() from the server but Translation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Translation");
const TranslationProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TranslationProvider() from the server but TranslationProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "TranslationProvider");
const UIField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UIField() from the server but UIField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "UIField");
const UnpublishMany = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UnpublishMany() from the server but UnpublishMany is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "UnpublishMany");
const Upload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Upload() from the server but Upload is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "Upload");
const UploadEditsProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadEditsProvider() from the server but UploadEditsProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "UploadEditsProvider");
const UploadField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadField() from the server but UploadField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "UploadField");
const UploadInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call UploadInput() from the server but UploadInput is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "UploadInput");
const ViewDescription = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ViewDescription() from the server but ViewDescription is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "ViewDescription");
const WarningIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WarningIcon() from the server but WarningIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "WarningIcon");
const WatchChildErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WatchChildErrors() from the server but WatchChildErrors is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "WatchChildErrors");
const WatchCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WatchCondition() from the server but WatchCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "WatchCondition");
const WindowInfoProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WindowInfoProvider() from the server but WindowInfoProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "WindowInfoProvider");
const XIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call XIcon() from the server but XIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "XIcon");
const allFieldComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call allFieldComponents() from the server but allFieldComponents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "allFieldComponents");
const defaultTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call defaultTheme() from the server but defaultTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "defaultTheme");
const documentDrawerBaseClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call documentDrawerBaseClass() from the server but documentDrawerBaseClass is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "documentDrawerBaseClass");
const fieldBaseClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fieldBaseClass() from the server but fieldBaseClass is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "fieldBaseClass");
const fieldComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fieldComponents() from the server but fieldComponents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "fieldComponents");
const fieldReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call fieldReducer() from the server but fieldReducer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "fieldReducer");
const formatDrawerSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call formatDrawerSlug() from the server but formatDrawerSlug is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "formatDrawerSlug");
const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call toast() from the server but toast is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "toast");
const useActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useActions() from the server but useActions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useActions");
const useAddClientFunction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAddClientFunction() from the server but useAddClientFunction is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useAddClientFunction");
const useAllFormFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAllFormFields() from the server but useAllFormFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useAllFormFields");
const useAuth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useAuth() from the server but useAuth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useAuth");
const useBulkUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBulkUpload() from the server but useBulkUpload is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useBulkUpload");
const useBulkUploadDrawerSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useBulkUploadDrawerSlug() from the server but useBulkUploadDrawerSlug is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useBulkUploadDrawerSlug");
const useCellProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useCellProps() from the server but useCellProps is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useCellProps");
const useClientFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useClientFunctions() from the server but useClientFunctions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useClientFunctions");
const useCollapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useCollapsible() from the server but useCollapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useCollapsible");
const useConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useConfig() from the server but useConfig is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useConfig");
const useDebounce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDebounce() from the server but useDebounce is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDebounce");
const useDebouncedCallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDebouncedCallback() from the server but useDebouncedCallback is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDebouncedCallback");
const useDebouncedEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDebouncedEffect() from the server but useDebouncedEffect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDebouncedEffect");
const useDelay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDelay() from the server but useDelay is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDelay");
const useDelayedRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDelayedRender() from the server but useDelayedRender is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDelayedRender");
const useDocumentDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentDrawer() from the server but useDocumentDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDocumentDrawer");
const useDocumentDrawerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentDrawerContext() from the server but useDocumentDrawerContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDocumentDrawerContext");
const useDocumentEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentEvents() from the server but useDocumentEvents is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDocumentEvents");
const useDocumentInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDocumentInfo() from the server but useDocumentInfo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDocumentInfo");
const useDrawerSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useDrawerSlug() from the server but useDrawerSlug is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useDrawerSlug");
const useEditDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEditDepth() from the server but useEditDepth is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useEditDepth");
const useEntityVisibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useEntityVisibility() from the server but useEntityVisibility is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useEntityVisibility");
const useField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useField() from the server but useField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useField");
const useForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useForm() from the server but useForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useForm");
const useFormFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormFields() from the server but useFormFields is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useFormFields");
const useFormInitializing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormInitializing() from the server but useFormInitializing is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useFormInitializing");
const useFormModified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormModified() from the server but useFormModified is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useFormModified");
const useFormProcessing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormProcessing() from the server but useFormProcessing is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useFormProcessing");
const useFormSubmitted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useFormSubmitted() from the server but useFormSubmitted is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useFormSubmitted");
const useHotkey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useHotkey() from the server but useHotkey is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useHotkey");
const useIntersect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useIntersect() from the server but useIntersect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useIntersect");
const useListDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListDrawer() from the server but useListDrawer is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useListDrawer");
const useListDrawerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListDrawerContext() from the server but useListDrawerContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useListDrawerContext");
const useListQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListQuery() from the server but useListQuery is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useListQuery");
const useListRelationships = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useListRelationships() from the server but useListRelationships is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useListRelationships");
const useLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useLocale() from the server but useLocale is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useLocale");
const useModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useModal() from the server but useModal is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useModal");
const useNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNav() from the server but useNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useNav");
const useOperation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useOperation() from the server but useOperation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useOperation");
const useParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useParams() from the server but useParams is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useParams");
const usePayloadAPI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call usePayloadAPI() from the server but usePayloadAPI is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "usePayloadAPI");
const usePreferences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call usePreferences() from the server but usePreferences is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "usePreferences");
const useResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useResize() from the server but useResize is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useResize");
const useRouteCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useRouteCache() from the server but useRouteCache is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useRouteCache");
const useRowLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useRowLabel() from the server but useRowLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useRowLabel");
const useScrollInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useScrollInfo() from the server but useScrollInfo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useScrollInfo");
const useSearchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSearchParams() from the server but useSearchParams is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useSearchParams");
const useSelection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSelection() from the server but useSelection is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useSelection");
const useServerFunctions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useServerFunctions() from the server but useServerFunctions is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useServerFunctions");
const useStepNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useStepNav() from the server but useStepNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useStepNav");
const useTableColumns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTableColumns() from the server but useTableColumns is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useTableColumns");
const useTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useTheme");
const useThrottledEffect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useThrottledEffect() from the server but useThrottledEffect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useThrottledEffect");
const useTranslation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTranslation() from the server but useTranslation is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useTranslation");
const useUploadEdits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUploadEdits() from the server but useUploadEdits is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useUploadEdits");
const useUseTitleField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useUseTitleField() from the server but useUseTitleField is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useUseTitleField");
const useWatchForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWatchForm() from the server but useWatchForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useWatchForm");
const useWindowInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useWindowInfo() from the server but useWindowInfo is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "useWindowInfo");
const withCondition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call withCondition() from the server but withCondition is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js", "withCondition");
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/removeUndefined.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "removeUndefined": (()=>removeUndefined)
});
function removeUndefined(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value])=>value !== undefined));
} //# sourceMappingURL=removeUndefined.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "RenderServerComponent": (()=>RenderServerComponent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isPlainObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$getFromImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/getFromImportMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isReactComponent.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$removeUndefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/removeUndefined.js [app-rsc] (ecmascript)");
;
;
;
;
const RenderServerComponent = ({ clientProps = {}, Component, Fallback, importMap, key, serverProps })=>{
    if (Array.isArray(Component)) {
        return Component.map((c, index)=>RenderServerComponent({
                clientProps,
                Component: c,
                importMap,
                key: index,
                serverProps
            }));
    }
    if (typeof Component === 'function') {
        const isRSC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReactServerComponentOrFunction"])(Component);
        // prevent $undefined from being passed through the rsc requests
        const sanitizedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$removeUndefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeUndefined"])({
            ...clientProps,
            ...isRSC ? serverProps : {}
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...sanitizedProps
        }, key);
    }
    if (typeof Component === 'string' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(Component)) {
        const ResolvedComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$getFromImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFromImportMap"])({
            importMap,
            PayloadComponent: Component,
            schemaPath: ''
        });
        if (ResolvedComponent) {
            const isRSC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReactServerComponentOrFunction"])(ResolvedComponent);
            // prevent $undefined from being passed through rsc requests
            const sanitizedProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$removeUndefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeUndefined"])({
                ...clientProps,
                ...isRSC ? serverProps : {},
                ...isRSC && typeof Component === 'object' && Component?.serverProps ? Component.serverProps : {},
                ...typeof Component === 'object' && Component?.clientProps ? Component.clientProps : {}
            });
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(ResolvedComponent, {
                ...sanitizedProps
            }, key);
        }
    }
    return Fallback ? RenderServerComponent({
        clientProps,
        Component: Fallback,
        importMap,
        key,
        serverProps
    }) : null;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getClientConfig": (()=>getClientConfig)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/client.js [app-rsc] (ecmascript)");
;
;
let cachedClientConfig = global._payload_clientConfig;
if (!cachedClientConfig) {
    cachedClientConfig = global._payload_clientConfig = null;
}
const getClientConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((args)=>{
    if (cachedClientConfig && !global._payload_doNotCacheClientConfig) {
        return cachedClientConfig;
    }
    const { config, i18n, importMap } = args;
    cachedClientConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClientConfig"])({
        config,
        i18n,
        importMap
    });
    global._payload_clientConfig = cachedClientConfig;
    global._payload_doNotCacheClientConfig = false;
    return cachedClientConfig;
}); //# sourceMappingURL=getClientConfig.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/shared/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "EntityType": (()=>F),
    "PayloadIcon": (()=>q),
    "PayloadLogo": (()=>j),
    "Translation": (()=>I),
    "WithServerSideProps": (()=>Z),
    "abortAndIgnore": (()=>V),
    "filterFields": (()=>L),
    "findLocaleFromCode": (()=>W),
    "formatAdminURL": (()=>u),
    "formatDate": (()=>y),
    "formatDocTitle": (()=>_),
    "getInitialColumns": (()=>T),
    "groupNavItems": (()=>J),
    "handleBackToDashboard": (()=>X),
    "handleGoBack": (()=>Y),
    "handleTakeOver": (()=>ee),
    "hasSavePermission": (()=>te),
    "isClientUserObject": (()=>re),
    "isEditing": (()=>oe),
    "mergeFieldStyles": (()=>N),
    "mergeListSearchAndWhere": (()=>ie),
    "reduceToSerializableFields": (()=>U),
    "requests": (()=>K),
    "sanitizeID": (()=>se),
    "withMergedProps": (()=>D)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isReactComponent.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/qs-esm@7.0.2/node_modules/qs-esm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@4.1.0/node_modules/date-fns/format.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
var L = (e)=>{
    let t = (o)=>o.type !== "ui" && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(o) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsID"])(o) || o?.admin?.disableListColumn === !0;
    return e?.reduce((o, n)=>{
        if (t(n)) return o;
        let i = n.type === "tabs" && "tabs" in n ? {
            ...n,
            tabs: n.tabs.map((s)=>({
                    ...s,
                    fields: s.fields.filter((a)=>!t(a))
                }))
        } : n;
        return o.push(i), o;
    }, []);
};
;
var g = (e, t)=>e?.reduce((r, o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(o) && o.name === t ? r : !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(o) && "fields" in o ? [
            ...r,
            ...g(o.fields, t)
        ] : o.type === "tabs" && "tabs" in o ? [
            ...r,
            ...o.tabs.reduce((n, i)=>[
                    ...n,
                    ..."name" in i ? [
                        i.name
                    ] : g(i.fields, t)
                ], [])
        ] : [
            ...r,
            o.name
        ], []), T = (e, t, r)=>{
    let o = [];
    if (Array.isArray(r) && r.length >= 1) o = r;
    else {
        t && o.push(t);
        let n = g(e, t);
        o = o.concat(n), o = o.slice(0, 4);
    }
    return o.map((n)=>({
            accessor: n,
            active: !0
        }));
};
;
var v = ({ elements: e, translationString: t })=>{
    let r = /(<[^>]+>.*?<\/[^>]+>)/g, o = t.split(r);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.createElement("span", null, o.map((n, i)=>{
        if (e && n.startsWith("<") && n.endsWith(">")) {
            let s = n[1], a = e[s];
            if (a) {
                let p = new RegExp(`<${s}>(.*?)</${s}>`, "g"), c = n.replace(p, (d, f)=>f);
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.createElement(a, {
                    key: i
                }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.createElement(v, {
                    translationString: c
                }));
            }
        }
        return n;
    }));
}, I = ({ elements: e, i18nKey: t, t: r, variables: o })=>{
    let n = r(t, o || {});
    return e ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.createElement(v, {
        elements: e,
        translationString: n
    }) : n;
};
;
;
function D({ Component: e, sanitizeServerOnlyProps: t, toMergeIntoProps: r }) {
    return t === void 0 && (t = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReactServerComponentOrFunction"])(e)), (n)=>{
        let i = A(n, r);
        return t && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["serverProps"].forEach((s)=>{
            delete i[s];
        }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(e, {
            ...i
        });
    };
}
function A(e, t) {
    return {
        ...e,
        ...t
    };
}
;
;
var Z = ({ Component: e, serverOnlyProps: t, ...r })=>e ? ((n)=>{
        let i = {
            ...n,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReactServerComponentOrFunction"])(e) ? t ?? {} : {}
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement(e, {
            ...i
        });
    })(r) : null;
var N = (e)=>({
        ...e?.admin?.style || {},
        ...e?.admin?.width ? {
            "--field-width": e.admin.width
        } : {
            flex: "1 1 auto"
        },
        ...e?.admin?.style?.flex ? {
            flex: e.admin.style.flex
        } : {}
    });
;
var B = [
    "validate",
    "customComponents"
], E = (e)=>{
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectComplex"])(e);
    return B.forEach((r)=>{
        delete t[r];
    }), t;
}, U = (e)=>Object.keys(e).reduce((t, r)=>(t[r] = E(e[r]), t), {});
;
var q = ({ fill: e })=>{
    let t = e || "var(--theme-elevation-1000)";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: "graphic-icon",
        height: "100%",
        viewBox: "0 0 25 25",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11.8673 21.2336L4.40922 16.9845C4.31871 16.9309 4.25837 16.8355 4.25837 16.7282V10.1609C4.25837 10.0477 4.38508 9.97616 4.48162 10.0298L13.1404 14.9642C13.2611 15.0358 13.412 14.9464 13.412 14.8093V11.6091C13.412 11.4839 13.3456 11.3647 13.2309 11.2992L2.81624 5.36353C2.72573 5.30989 2.60505 5.30989 2.51454 5.36353L1.15085 6.14422C1.06034 6.19786 1 6.29321 1 6.40048V18.5995C1 18.7068 1.06034 18.8021 1.15085 18.8558L11.8491 24.9583C11.9397 25.0119 12.0603 25.0119 12.1509 24.9583L21.1355 19.8331C21.2562 19.7616 21.2562 19.5948 21.1355 19.5232L18.3357 17.9261C18.2211 17.8605 18.0883 17.8605 17.9737 17.9261L12.175 21.2336C12.0845 21.2872 11.9638 21.2872 11.8733 21.2336H11.8673Z",
        fill: t
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M22.8491 6.13827L12.1508 0.0417218C12.0603 -0.0119135 11.9397 -0.0119135 11.8491 0.0417218L6.19528 3.2658C6.0746 3.33731 6.0746 3.50418 6.19528 3.57569L8.97092 5.16091C9.08557 5.22647 9.21832 5.22647 9.33296 5.16091L11.8672 3.71872C11.9578 3.66508 12.0784 3.66508 12.1689 3.71872L19.627 7.96782C19.7175 8.02146 19.7778 8.11681 19.7778 8.22408V14.8212C19.7778 14.9464 19.8442 15.0656 19.9589 15.1311L22.7345 16.7104C22.8552 16.7819 23.006 16.6925 23.006 16.5554V6.40048C23.006 6.29321 22.9457 6.19786 22.8552 6.14423L22.8491 6.13827Z",
        fill: t
    }));
};
;
var G = `
  .graphic-logo path {
    fill: var(--theme-elevation-1000);
  }
`, j = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: "graphic-logo",
        fill: "none",
        height: "43.5",
        id: "b",
        viewBox: "0 0 193.38 43.5",
        width: "193.38",
        xmlns: "http://www.w3.org/2000/svg"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("style", null, G), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "c"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M18.01,35.63l-12.36-7.13c-.15-.09-.25-.25-.25-.43v-11.02c0-.19.21-.31.37-.22l14.35,8.28c.2.12.45-.03.45-.26v-5.37c0-.21-.11-.41-.3-.52L3.01,9c-.15-.09-.35-.09-.5,0l-2.26,1.31c-.15.09-.25.25-.25.43v20.47c0,.18.1.34.25.43l17.73,10.24c.15.09.35.09.5,0l14.89-8.6c.2-.12.2-.4,0-.52l-4.64-2.68c-.19-.11-.41-.11-.6,0l-9.61,5.55c-.15.09-.35.09-.5,0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M36.21,10.3L18.48.07c-.15-.09-.35-.09-.5,0l-9.37,5.41c-.2.12-.2.4,0,.52l4.6,2.66c.19.11.41.11.6,0l4.2-2.42c.15-.09.35-.09.5,0l12.36,7.13c.15.09.25.25.25.43v11.07c0,.21.11.41.3.52l4.6,2.65c.2.12.45-.03.45-.26V10.74c0-.18-.1-.34-.25-.43Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "d"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M193.38,9.47c0,1.94-1.48,3.32-3.3,3.32s-3.31-1.39-3.31-3.32,1.49-3.31,3.31-3.31,3.3,1.39,3.3,3.31ZM192.92,9.47c0-1.68-1.26-2.88-2.84-2.88s-2.84,1.2-2.84,2.88,1.26,2.89,2.84,2.89,2.84-1.2,2.84-2.89ZM188.69,11.17v-3.51h1.61c.85,0,1.35.39,1.35,1.15,0,.53-.3.86-.67,1.02l.79,1.35h-.89l-.72-1.22h-.64v1.22h-.82ZM190.18,9.31c.46,0,.64-.16.64-.5s-.19-.49-.64-.49h-.67v.99h.67Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M54.72,24.84v10.93h-5.4V6.1h12.26c7.02,0,11.1,3.2,11.1,9.39s-4.07,9.35-11.06,9.35h-6.9,0ZM61.12,20.52c4.07,0,6.11-1.66,6.11-5.03s-2.04-5.03-6.11-5.03h-6.4v10.06h6.4Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M85.94,32.45c-1,2.41-3.66,3.78-7.02,3.78-4.11,0-7.11-2.29-7.11-6.11,0-4.24,3.32-5.98,7.61-6.48l6.32-.71v-1c0-2.58-1.58-3.82-3.99-3.82s-3.74,1.29-3.91,3.24h-5.11c.46-4.53,3.99-7.19,9.18-7.19,5.74,0,9.02,2.7,9.02,8.19v8.15c0,1.95.08,3.58.42,5.28h-5.11c-.21-1.16-.29-2.29-.29-3.32h0ZM85.73,27.58v-1.29l-4.7.54c-2.24.29-3.95.79-3.95,2.99,0,1.66,1.16,2.7,3.28,2.7,2.74,0,5.36-1.62,5.36-4.95h0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M90.39,14.66h5.4l5.86,15.92h.08l5.57-15.92h5.28l-8.23,21.49c-2,5.28-4.45,7.32-8.89,7.36-.71,0-1.7-.08-2.45-.21v-4.03c.62.13.96.13,1.41.13,2.16,0,3.07-.75,4.2-3.66l-8.23-21.07h0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M113.46,35.77V6.1h5.32v29.67h-5.32Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M130.79,36.27c-6.23,0-10.68-4.2-10.68-11.05s4.45-11.05,10.68-11.05,10.68,4.24,10.68,11.05-4.45,11.05-10.68,11.05ZM130.79,32.32c3.41,0,5.36-2.66,5.36-7.11s-1.95-7.11-5.36-7.11-5.36,2.7-5.36,7.11,1.91,7.11,5.36,7.11Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M156.19,32.45c-1,2.41-3.66,3.78-7.02,3.78-4.11,0-7.11-2.29-7.11-6.11,0-4.24,3.32-5.98,7.61-6.48l6.32-.71v-1c0-2.58-1.58-3.82-3.99-3.82s-3.74,1.29-3.91,3.24h-5.11c.46-4.53,3.99-7.19,9.19-7.19,5.74,0,9.02,2.7,9.02,8.19v8.15c0,1.95.08,3.58.42,5.28h-5.11c-.21-1.16-.29-2.29-.29-3.32h0ZM155.98,27.58v-1.29l-4.7.54c-2.24.29-3.95.79-3.95,2.99,0,1.66,1.16,2.7,3.28,2.7,2.74,0,5.36-1.62,5.36-4.95h0Z"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M178.5,32.41c-1.04,2.12-3.58,3.87-6.78,3.87-5.53,0-9.31-4.49-9.31-11.05s3.78-11.05,9.31-11.05c3.28,0,5.69,1.83,6.69,3.95V6.1h5.32v29.67h-5.24v-3.37h0ZM178.55,24.84c0-4.11-1.95-6.78-5.32-6.78s-5.45,2.83-5.45,7.15,2,7.15,5.45,7.15,5.32-2.66,5.32-6.78v-.75h0Z"
    }))));
function V(e) {
    if (e) try {
        e.abort();
    } catch  {}
}
;
var K = {
    delete: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "delete"
        };
        return fetch(e, o);
    },
    get: (e, t = {
        headers: {}
    })=>{
        let r = "";
        return t.params && (r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$qs$2d$esm$40$7$2e$0$2e$2$2f$node_modules$2f$qs$2d$esm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.stringify(t.params, {
            addQueryPrefix: !0
        })), fetch(`${e}${r}`, {
            credentials: "include",
            ...t
        });
    },
    patch: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "PATCH"
        };
        return fetch(e, o);
    },
    post: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "post"
        };
        return fetch(`${e}`, o);
    },
    put: (e, t = {
        headers: {}
    })=>{
        let r = t && t.headers ? {
            ...t.headers
        } : {}, o = {
            ...t,
            credentials: "include",
            headers: {
                ...r
            },
            method: "put"
        };
        return fetch(e, o);
    }
};
var W = (e, t)=>!e?.locales || e.locales.length === 0 ? null : e.locales.find((r)=>r?.code === t);
var u = (e)=>{
    let { adminRoute: t, basePath: r = "", path: o, serverURL: n } = e;
    if (t) if (t === "/") {
        if (!o) return `${n || ""}${r}${t}`;
    } else return `${n || ""}${r}${t}${o}`;
    return `${n || ""}${r}${o}`;
};
;
var y = ({ date: e, i18n: t, pattern: r })=>{
    let o = new Date(e);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$4$2e$1$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(o, r, {
        locale: t.dateFNS
    });
};
;
var _ = ({ collectionConfig: e, data: t, dateFormat: r, fallback: o, globalConfig: n, i18n: i })=>{
    let s;
    if (e) {
        let a = e?.admin?.useAsTitle;
        if (a && (s = t?.[a] || s, s)) {
            let p = e.fields.find((d)=>"name" in d && d.name === a);
            if (p?.type === "date") {
                let d = "date" in p.admin && p?.admin?.date?.displayFormat || r;
                s = y({
                    date: s,
                    i18n: i,
                    pattern: d
                }) || s;
            }
        }
    }
    return n && (s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(n?.label, i) || n?.slug), s || (s = o || `[${i.t("general:untitled")}]`), s;
};
;
var F = ((r)=>(r.collection = "collections", r.global = "globals", r))(F || {});
function J(e, t, r) {
    return e.reduce((n, i)=>{
        if (i.entity?.admin?.group === !1) return n;
        if (t?.[i.type.toLowerCase()]?.[i.entity.slug]?.read) {
            let s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(i.entity.admin.group, r), a = "labels" in i.entity ? i.entity.labels.plural : i.entity.label, p = typeof a == "function" ? a({
                t: r.t
            }) : a;
            if (i.entity.admin.group) {
                let c = n.find((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(f.label, r) === s), d = c;
                c || (d = {
                    entities: [],
                    label: s
                }, n.push(d)), d.entities.push({
                    slug: i.entity.slug,
                    type: i.type,
                    label: p
                });
            } else n.find((d)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(d.label, r) === r.t(`general:${i.type}`)).entities.push({
                slug: i.entity.slug,
                type: i.type,
                label: p
            });
        }
        return n;
    }, [
        {
            entities: [],
            label: r.t("general:collections")
        },
        {
            entities: [],
            label: r.t("general:globals")
        }
    ]).filter((n)=>n.entities.length > 0);
}
var X = ({ adminRoute: e, router: t })=>{
    let r = u({
        adminRoute: e,
        path: "/"
    });
    t.push(r);
};
var Y = ({ adminRoute: e, collectionSlug: t, router: r })=>{
    let o = u({
        adminRoute: e,
        path: t ? `/collections/${t}` : "/"
    });
    r.push(o);
};
var ee = (e, t, r, o, n, i, s, a, p, c)=>{
    if (p) try {
        i(e, t ?? r, o), n || (a.current.hasShownLockedModal = !0), a.current = {
            hasShownLockedModal: a.current?.hasShownLockedModal,
            isLocked: !0,
            user: o
        }, s(o), n && c && c(!1);
    } catch (d) {
        console.error("Error during document takeover:", d);
    }
};
var te = (e)=>{
    let { collectionSlug: t, docPermissions: r, globalSlug: o, isEditing: n } = e;
    return t ? !!(n && r?.update || !n && r?.create) : o ? !!r?.update : !1;
};
var re = (e)=>e && typeof e == "object";
var oe = ({ id: e, collectionSlug: t, globalSlug: r })=>!!(r || t && e);
var b = (e)=>Object.keys(e).length === 0, ne = (e, t)=>b(t) ? e : b(e) ? t : ("and" in e ? e.and.push(t) : "or" in e ? e = {
        and: [
            e,
            t
        ]
    } : e = {
        and: [
            e,
            t
        ]
    }, e), ie = ({ collectionConfig: e, search: t, where: r = {} })=>{
    if (t) {
        let o = {
            ...r || {}
        }, n = (e.admin.listSearchableFields || [
            e.admin?.useAsTitle || "id"
        ]).map((i)=>({
                [i]: {
                    like: t
                }
            }));
        n.length > 0 && (o = ne(o, {
            or: n
        })), b(o) || (r = o);
    }
    return r;
};
function se(e) {
    return e === void 0 || typeof e == "number" ? e : decodeURIComponent(e);
}
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png [app-rsc] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/payload-favicon-dark.e1173bd4.png");}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png [app-rsc] (static) <export default as payloadFaviconDark>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "payloadFaviconDark": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$dark$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-dark.png [app-rsc] (static)");
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png [app-rsc] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/payload-favicon-light.cb736110.png");}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png [app-rsc] (static) <export default as payloadFaviconLight>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "payloadFaviconLight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$payload$2d$favicon$2d$light$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/payload-favicon-light.png [app-rsc] (static)");
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/static-og-image.png [app-rsc] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/static-og-image.096ebc7f.png");}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/static-og-image.png [app-rsc] (static) <export default as staticOGImage>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "staticOGImage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$assets$2f$static$2d$og$2d$image$2e$png__$5b$app$2d$rsc$5d$__$28$static$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/assets/static-og-image.png [app-rsc] (static)");
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildFieldSchemaMap": (()=>buildFieldSchemaMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/validations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)");
;
;
const baseAuthFields = [
    {
        name: 'password',
        type: 'text',
        required: true,
        validate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["password"]
    },
    {
        name: 'confirm-password',
        type: 'text',
        required: true,
        validate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["confirmPassword"]
    }
];
const buildFieldSchemaMap = (args)=>{
    const { collectionSlug, config, globalSlug, i18n } = args;
    const schemaMap = new Map();
    if (collectionSlug) {
        const matchedCollection = config.collections.find((collection)=>collection.slug === collectionSlug);
        if (matchedCollection) {
            if (matchedCollection.auth && !matchedCollection.auth.disableLocalStrategy) {
                // register schema with auth schemaPath
                ;
                baseAuthFields[0].label = i18n.t('general:password');
                baseAuthFields[1].label = i18n.t('authentication:confirmPassword');
                schemaMap.set(`_${matchedCollection.slug}.auth`, {
                    fields: [
                        ...baseAuthFields,
                        ...matchedCollection.fields
                    ]
                });
            }
            schemaMap.set(collectionSlug, {
                fields: matchedCollection.fields
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                config,
                fields: matchedCollection.fields,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: collectionSlug,
                schemaMap
            });
        }
    } else if (globalSlug) {
        const matchedGlobal = config.globals.find((global)=>global.slug === globalSlug);
        if (matchedGlobal) {
            schemaMap.set(globalSlug, {
                fields: matchedGlobal.fields
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                config,
                fields: matchedGlobal.fields,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: globalSlug,
                schemaMap
            });
        }
    }
    return {
        fieldSchemaMap: schemaMap
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getSchemaMap.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSchemaMap": (()=>getSchemaMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFieldSchemaMap/index.js [app-rsc] (ecmascript)");
;
;
let cachedSchemaMap = global._payload_schemaMap;
if (!cachedSchemaMap) {
    cachedSchemaMap = global._payload_schemaMap = null;
}
const getSchemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((args)=>{
    const { collectionSlug, config, globalSlug, i18n } = args;
    if (!cachedSchemaMap || global._payload_doNotCacheSchemaMap) {
        cachedSchemaMap = new Map();
    }
    let cachedEntityFieldMap = cachedSchemaMap.get(collectionSlug || globalSlug);
    if (cachedEntityFieldMap) {
        return cachedEntityFieldMap;
    }
    cachedEntityFieldMap = new Map();
    const { fieldSchemaMap: entityFieldMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFieldSchemaMap"])({
        collectionSlug,
        config,
        globalSlug,
        i18n: i18n
    });
    cachedSchemaMap.set(collectionSlug || globalSlug, entityFieldMap);
    global._payload_schemaMap = cachedSchemaMap;
    global._payload_doNotCacheSchemaMap = false;
    return entityFieldMap;
}); //# sourceMappingURL=getSchemaMap.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
const traverseFields = ({ clientSchemaMap, config, fields, i18n, parentIndexPath, parentSchemaPath, payload, schemaMap })=>{
    for (const [index, field] of fields.entries()){
        const { indexPath, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPaths"])({
            field,
            index,
            parentIndexPath: 'name' in field ? '' : parentIndexPath,
            parentPath: '',
            parentSchemaPath
        });
        clientSchemaMap.set(schemaPath, field);
        switch(field.type){
            case 'array':
            case 'group':
                traverseFields({
                    clientSchemaMap,
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: '',
                    parentSchemaPath: schemaPath,
                    payload,
                    schemaMap
                });
                break;
            case 'blocks':
                field.blocks.map((block)=>{
                    const blockSchemaPath = `${schemaPath}.${block.slug}`;
                    clientSchemaMap.set(blockSchemaPath, block);
                    traverseFields({
                        clientSchemaMap,
                        config,
                        fields: block.fields,
                        i18n,
                        parentIndexPath: '',
                        parentSchemaPath: blockSchemaPath,
                        payload,
                        schemaMap
                    });
                });
                break;
            case 'collapsible':
            case 'row':
                traverseFields({
                    clientSchemaMap,
                    config,
                    fields: field.fields,
                    i18n,
                    parentIndexPath: indexPath,
                    parentSchemaPath,
                    payload,
                    schemaMap
                });
                break;
            case 'richText':
                {
                    // richText sub-fields are not part of the ClientConfig or the Config.
                    // They only exist in the field schema map.
                    // Thus, we need to
                    // 1. get them from the field schema map
                    // 2. convert them to client fields
                    // 3. add them to the client schema map
                    // So these would basically be all fields that are not part of the client config already
                    const richTextFieldSchemaMap = new Map();
                    for (const [path, subField] of schemaMap.entries()){
                        if (path.startsWith(`${schemaPath}.`)) {
                            richTextFieldSchemaMap.set(path, subField);
                        }
                    }
                    // Now loop through them, convert each entry to a client field and add it to the client schema map
                    for (const [path, subField] of richTextFieldSchemaMap.entries()){
                        const clientFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClientFields"])({
                            defaultIDType: payload.config.db.defaultIDType,
                            disableAddingID: true,
                            fields: 'fields' in subField ? subField.fields : [
                                subField
                            ],
                            i18n,
                            importMap: payload.importMap
                        });
                        clientSchemaMap.set(path, {
                            fields: clientFields
                        });
                    }
                    break;
                }
            case 'tabs':
                field.tabs.map((tab, tabIndex)=>{
                    const { indexPath: tabIndexPath, schemaPath: tabSchemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPaths"])({
                        field: {
                            ...tab,
                            type: 'tab'
                        },
                        index: tabIndex,
                        parentIndexPath: indexPath,
                        parentPath: '',
                        parentSchemaPath
                    });
                    clientSchemaMap.set(tabSchemaPath, tab);
                    traverseFields({
                        clientSchemaMap,
                        config,
                        fields: tab.fields,
                        i18n,
                        parentIndexPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? '' : tabIndexPath,
                        parentSchemaPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? tabSchemaPath : parentSchemaPath,
                        payload,
                        schemaMap
                    });
                });
                break;
        }
    }
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildClientFieldSchemaMap": (()=>buildClientFieldSchemaMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/traverseFields.js [app-rsc] (ecmascript)");
;
const baseAuthFields = [
    {
        name: 'password',
        type: 'text',
        required: true
    },
    {
        name: 'confirm-password',
        type: 'text',
        required: true
    }
];
const buildClientFieldSchemaMap = (args)=>{
    const { collectionSlug, config, globalSlug, i18n, payload, schemaMap } = args;
    const clientSchemaMap = new Map();
    if (collectionSlug) {
        const matchedCollection = config.collections.find((collection)=>collection.slug === collectionSlug);
        if (matchedCollection) {
            if (matchedCollection.auth && !matchedCollection.auth.disableLocalStrategy) {
                // register schema with auth schemaPath
                ;
                baseAuthFields[0].label = i18n.t('general:password');
                baseAuthFields[1].label = i18n.t('authentication:confirmPassword');
                clientSchemaMap.set(`_${matchedCollection.slug}.auth`, {
                    fields: [
                        ...baseAuthFields,
                        ...matchedCollection.fields
                    ]
                });
            }
            clientSchemaMap.set(collectionSlug, {
                fields: matchedCollection.fields
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                clientSchemaMap,
                config,
                fields: matchedCollection.fields,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: collectionSlug,
                payload,
                schemaMap
            });
        }
    } else if (globalSlug) {
        const matchedGlobal = config.globals.find((global)=>global.slug === globalSlug);
        if (matchedGlobal) {
            clientSchemaMap.set(globalSlug, {
                fields: matchedGlobal.fields
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                clientSchemaMap,
                config,
                fields: matchedGlobal.fields,
                i18n,
                parentIndexPath: '',
                parentSchemaPath: globalSlug,
                payload,
                schemaMap
            });
        }
    }
    return {
        clientFieldSchemaMap: clientSchemaMap
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientSchemaMap.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getClientSchemaMap": (()=>getClientSchemaMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildClientFieldSchemaMap/index.js [app-rsc] (ecmascript)");
;
;
let cachedClientSchemaMap = global._payload_clientSchemaMap;
if (!cachedClientSchemaMap) {
    cachedClientSchemaMap = global._payload_clientSchemaMap = null;
}
const getClientSchemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])((args)=>{
    const { collectionSlug, config, globalSlug, i18n, payload, schemaMap } = args;
    if (!cachedClientSchemaMap || global._payload_doNotCacheClientSchemaMap) {
        cachedClientSchemaMap = new Map();
    }
    let cachedEntityClientFieldMap = cachedClientSchemaMap.get(collectionSlug || globalSlug);
    if (cachedEntityClientFieldMap) {
        return cachedEntityClientFieldMap;
    }
    cachedEntityClientFieldMap = new Map();
    const { clientFieldSchemaMap: entityClientFieldMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$buildClientFieldSchemaMap$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildClientFieldSchemaMap"])({
        collectionSlug,
        config,
        globalSlug,
        i18n: i18n,
        payload,
        schemaMap
    });
    cachedClientSchemaMap.set(collectionSlug || globalSlug, entityClientFieldMap);
    global._payload_clientSchemaMap = cachedClientSchemaMap;
    global._payload_doNotCacheClientSchemaMap = false;
    return entityClientFieldMap;
}); //# sourceMappingURL=getClientSchemaMap.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/renderField.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renderField": (()=>renderField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/client.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
// eslint-disable-next-line payload/no-imports-from-exports-dir -- need this to reference already existing bundle. Otherwise, bundle size increases., payload/no-imports-from-exports-dir
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const defaultUIFieldComponentKeys = [
    'Cell',
    'Description',
    'Field',
    'Filter'
];
const renderField = ({ id, clientFieldSchemaMap, collectionSlug, data, fieldConfig, fieldSchemaMap, fieldState, formState, indexPath, operation, parentPath, parentSchemaPath, path, permissions, preferences, req, schemaPath, siblingData })=>{
    const clientField = clientFieldSchemaMap ? clientFieldSchemaMap.get(schemaPath) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$client$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClientField"])({
        defaultIDType: req.payload.config.db.defaultIDType,
        field: fieldConfig,
        i18n: req.i18n,
        importMap: req.payload.importMap
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(clientField)) {
        return;
    }
    const clientProps = {
        customComponents: fieldState?.customComponents || {},
        field: clientField,
        path,
        permissions,
        readOnly: typeof permissions === 'boolean' ? !permissions : !permissions?.[operation],
        schemaPath
    };
    // fields with subfields
    if ([
        'array',
        'blocks',
        'collapsible',
        'group',
        'row',
        'tabs'
    ].includes(fieldConfig.type)) {
        clientProps.indexPath = indexPath;
        clientProps.parentPath = parentPath;
        clientProps.parentSchemaPath = parentSchemaPath;
    }
    const serverProps = {
        id,
        clientField,
        clientFieldSchemaMap,
        data,
        field: fieldConfig,
        fieldSchemaMap,
        permissions,
        // TODO: Should we pass explicit values? initialValue, value, valid
        // value and initialValue should be typed
        collectionSlug,
        formState,
        i18n: req.i18n,
        operation,
        payload: req.payload,
        preferences,
        req,
        siblingData,
        user: req.user
    };
    if (!fieldState?.customComponents) {
        fieldState.customComponents = {};
    }
    switch(fieldConfig.type){
        // TODO: handle block row labels as well in a similar fashion
        case 'array':
            {
                fieldState?.rows?.forEach((row, rowIndex)=>{
                    if (fieldConfig.admin?.components && 'RowLabel' in fieldConfig.admin.components) {
                        if (!fieldState.customComponents.RowLabels) {
                            fieldState.customComponents.RowLabels = [];
                        }
                        fieldState.customComponents.RowLabels[rowIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            clientProps,
                            Component: fieldConfig.admin.components.RowLabel,
                            importMap: req.payload.importMap,
                            serverProps: {
                                ...serverProps,
                                rowLabel: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(fieldConfig.labels.singular, req.i18n)} ${String(rowIndex + 1).padStart(2, '0')}`,
                                rowNumber: rowIndex + 1
                            }
                        });
                    }
                });
                break;
            }
        case 'richText':
            {
                if (!fieldConfig?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](fieldConfig) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof fieldConfig?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                if (!fieldConfig.admin) {
                    fieldConfig.admin = {};
                }
                if (!fieldConfig.admin.components) {
                    fieldConfig.admin.components = {};
                }
                fieldState.customComponents.Field = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WatchCondition"], {
                    path: path,
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps,
                        Component: fieldConfig.editor.FieldComponent,
                        importMap: req.payload.importMap,
                        serverProps
                    })
                });
                break;
            }
        case 'ui':
            {
                if (fieldConfig?.admin?.components) {
                    // Render any extra, untyped components
                    for(const key in fieldConfig.admin.components){
                        if (key in defaultUIFieldComponentKeys) {
                            continue;
                        }
                        const Component = fieldConfig.admin.components[key];
                        fieldState.customComponents[key] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                            clientProps,
                            Component,
                            importMap: req.payload.importMap,
                            key: `field.admin.components.${key}`,
                            serverProps
                        });
                    }
                }
                break;
            }
        default:
            {
                break;
            }
    }
    if (fieldConfig.admin) {
        if ('description' in fieldConfig.admin) {
            if (typeof fieldConfig.admin?.description === 'function') {
                fieldState.customComponents.Description = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FieldDescription"], {
                    description: fieldConfig.admin?.description({
                        t: req.i18n.t
                    }),
                    path: path
                });
            }
        }
        if (fieldConfig.admin?.components) {
            if ('afterInput' in fieldConfig.admin.components) {
                fieldState.customComponents.AfterInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.afterInput,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.afterInput',
                    serverProps
                });
            }
            if ('beforeInput' in fieldConfig.admin.components) {
                fieldState.customComponents.BeforeInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.beforeInput,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.beforeInput',
                    serverProps
                });
            }
            if ('Description' in fieldConfig.admin.components) {
                fieldState.customComponents.Description = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.Description,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.Description',
                    serverProps
                });
            }
            if ('Error' in fieldConfig.admin.components) {
                fieldState.customComponents.Error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.Error,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.Error',
                    serverProps
                });
            }
            if ('Label' in fieldConfig.admin.components) {
                fieldState.customComponents.Label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                    clientProps,
                    Component: fieldConfig.admin.components.Label,
                    importMap: req.payload.importMap,
                    key: 'field.admin.components.Label',
                    serverProps
                });
            }
            if ('Field' in fieldConfig.admin.components) {
                fieldState.customComponents.Field = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WatchCondition"], {
                    path: path,
                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps,
                        Component: fieldConfig.admin.components.Field,
                        importMap: req.payload.importMap,
                        key: 'field.admin.components.Field',
                        serverProps
                    })
                });
            }
        }
    }
}; //# sourceMappingURL=renderField.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/handleFormStateLocking.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "handleFormStateLocking": (()=>handleFormStateLocking)
});
const handleFormStateLocking = async ({ id, collectionSlug, globalSlug, req, updateLastEdited })=>{
    let result;
    if (id || globalSlug) {
        let lockedDocumentQuery;
        if (collectionSlug) {
            lockedDocumentQuery = {
                and: [
                    {
                        'document.relationTo': {
                            equals: collectionSlug
                        }
                    },
                    {
                        'document.value': {
                            equals: id
                        }
                    }
                ]
            };
        } else if (globalSlug) {
            lockedDocumentQuery = {
                and: [
                    {
                        globalSlug: {
                            equals: globalSlug
                        }
                    }
                ]
            };
        }
        const lockDurationDefault = 300 // Default 5 minutes in seconds
        ;
        const lockDocumentsProp = collectionSlug ? req.payload.config.collections.find((c)=>c.slug === collectionSlug)?.lockDocuments : req.payload.config.globals.find((g)=>g.slug === globalSlug)?.lockDocuments;
        const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
        const lockDurationInMilliseconds = lockDuration * 1000;
        const now = new Date().getTime();
        if (lockedDocumentQuery) {
            // Query where the lock is newer than the current time minus the lock duration
            lockedDocumentQuery.and.push({
                updatedAt: {
                    greater_than: new Date(now - lockDurationInMilliseconds).toISOString()
                }
            });
            const lockedDocument = await req.payload.find({
                collection: 'payload-locked-documents',
                depth: 1,
                limit: 1,
                overrideAccess: false,
                pagination: false,
                req,
                where: lockedDocumentQuery
            });
            if (lockedDocument.docs && lockedDocument.docs.length > 0) {
                result = {
                    isLocked: true,
                    lastEditedAt: lockedDocument.docs[0]?.updatedAt,
                    user: lockedDocument.docs[0]?.user?.value
                };
                const lockOwnerID = typeof lockedDocument.docs[0]?.user?.value === 'object' ? lockedDocument.docs[0]?.user?.value?.id : lockedDocument.docs[0]?.user?.value;
                // Should only update doc if the incoming / current user is also the owner of the locked doc
                if (updateLastEdited && req.user && lockOwnerID === req.user.id) {
                    await req.payload.db.updateOne({
                        id: lockedDocument.docs[0].id,
                        collection: 'payload-locked-documents',
                        data: {},
                        req
                    });
                }
            } else {
                // If NO ACTIVE lock document exists, first delete any expired locks and then create a fresh lock
                // Where updatedAt is older than the duration that is specified in the config
                let deleteExpiredLocksQuery;
                if (collectionSlug) {
                    deleteExpiredLocksQuery = {
                        and: [
                            {
                                'document.relationTo': {
                                    equals: collectionSlug
                                }
                            },
                            {
                                updatedAt: {
                                    less_than: new Date(now - lockDurationInMilliseconds).toISOString()
                                }
                            }
                        ]
                    };
                } else if (globalSlug) {
                    deleteExpiredLocksQuery = {
                        and: [
                            {
                                globalSlug: {
                                    equals: globalSlug
                                }
                            },
                            {
                                updatedAt: {
                                    less_than: new Date(now - lockDurationInMilliseconds).toISOString()
                                }
                            }
                        ]
                    };
                }
                await req.payload.db.deleteMany({
                    collection: 'payload-locked-documents',
                    req,
                    where: deleteExpiredLocksQuery
                });
                await req.payload.db.create({
                    collection: 'payload-locked-documents',
                    data: {
                        document: collectionSlug ? {
                            relationTo: collectionSlug,
                            value: id
                        } : undefined,
                        globalSlug: globalSlug ? globalSlug : undefined,
                        user: {
                            relationTo: req.user.collection,
                            value: req.user.id
                        }
                    },
                    req
                });
                result = {
                    isLocked: true,
                    lastEditedAt: new Date().toISOString(),
                    user: req.user
                };
            }
        }
    }
    return result;
}; //# sourceMappingURL=handleFormStateLocking.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildFormState.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildFormState": (()=>buildFormState),
    "buildFormStateHandler": (()=>buildFormStateHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatErrors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getSchemaMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientSchemaMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$reduceFieldsToValues$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/reduceFieldsToValues.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/forms/fieldSchemasToFormState/renderField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handleFormStateLocking$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/handleFormStateLocking.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const buildFormStateHandler = async (args)=>{
    const { req } = args;
    const incomingUserSlug = req.user?.collection;
    const adminUserSlug = req.payload.config.admin.user;
    try {
        // If we have a user slug, test it against the functions
        if (incomingUserSlug) {
            const adminAccessFunction = req.payload.collections[incomingUserSlug].config.access?.admin;
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
            const hasUsers = await req.payload.find({
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
        const res = await buildFormState(args);
        return res;
    } catch (err) {
        req.payload.logger.error({
            err,
            msg: `There was an error building form state`
        });
        if (err.message === 'Could not find field schema for given path') {
            return {
                message: err.message
            };
        }
        if (err.message === 'Unauthorized') {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrors"])(err);
    }
};
const buildFormState = async (args)=>{
    const { id: idFromArgs, collectionSlug, data: incomingData, docPermissions, docPreferences, formState, globalSlug, operation, renderAllFields, req, req: { i18n, payload, payload: { config } }, returnLockStatus, schemaPath = collectionSlug || globalSlug, updateLastEdited } = args;
    let data = incomingData;
    if (!collectionSlug && !globalSlug) {
        throw new Error('Either collectionSlug or globalSlug must be provided');
    }
    const schemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSchemaMap"])({
        collectionSlug,
        config,
        globalSlug,
        i18n
    });
    const clientSchemaMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientSchemaMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientSchemaMap"])({
        collectionSlug,
        config: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getClientConfig"])({
            config,
            i18n,
            importMap: req.payload.importMap
        }),
        globalSlug,
        i18n,
        payload,
        schemaMap
    });
    const id = collectionSlug ? idFromArgs : undefined;
    const fieldOrEntityConfig = schemaMap.get(schemaPath);
    if (!fieldOrEntityConfig) {
        throw new Error(`Could not find "${schemaPath}" in the fieldSchemaMap`);
    }
    if ((!('fields' in fieldOrEntityConfig) || !fieldOrEntityConfig.fields || !fieldOrEntityConfig.fields.length) && 'type' in fieldOrEntityConfig && fieldOrEntityConfig.type !== 'blocks') {
        throw new Error(`The field found in fieldSchemaMap for "${schemaPath}" does not contain any subfields.`);
    }
    // If there is a form state,
    // then we can deduce data from that form state
    if (formState) {
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$reduceFieldsToValues$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reduceFieldsToValues"])(formState, true);
    }
    /**
  * When building state for sub schemas we need to adjust:
  * - `fields`
  * - `parentSchemaPath`
  * - `parentPath`
  *
  * Type assertion is fine because we wrap sub schemas in an array
  * so we can safely map over them within `fieldSchemasToFormState`
  */ const fields = Array.isArray(fieldOrEntityConfig) ? fieldOrEntityConfig : 'fields' in fieldOrEntityConfig ? fieldOrEntityConfig.fields : [
        fieldOrEntityConfig
    ];
    const formStateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fieldSchemasToFormState"])({
        id,
        clientFieldSchemaMap: clientSchemaMap,
        collectionSlug,
        data,
        fields,
        fieldSchemaMap: schemaMap,
        operation,
        permissions: docPermissions?.fields || {},
        preferences: docPreferences || {
            fields: {}
        },
        previousFormState: formState,
        renderAllFields,
        renderFieldFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$forms$2f$fieldSchemasToFormState$2f$renderField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderField"],
        req,
        schemaPath
    });
    // Maintain form state of auth / upload fields
    if (collectionSlug && formState) {
        if (payload.collections[collectionSlug]?.config?.upload && formState.file) {
            formStateResult.file = formState.file;
        }
    }
    let lockedStateResult;
    if (returnLockStatus) {
        lockedStateResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$handleFormStateLocking$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleFormStateLocking"])({
            id,
            collectionSlug,
            globalSlug,
            req,
            updateLastEdited
        });
    }
    return {
        lockedState: lockedStateResult,
        state: formStateResult
    };
}; //# sourceMappingURL=buildFormState.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/getInitialColumns.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getInitialColumns": (()=>getInitialColumns)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const getRemainingColumns = (fields, useAsTitle)=>fields?.reduce((remaining, field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === useAsTitle) {
            return remaining;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && 'fields' in field) {
            return [
                ...remaining,
                ...getRemainingColumns(field.fields, useAsTitle)
            ];
        }
        if (field.type === 'tabs' && 'tabs' in field) {
            return [
                ...remaining,
                ...field.tabs.reduce((tabFieldColumns, tab)=>[
                        ...tabFieldColumns,
                        ...'name' in tab ? [
                            tab.name
                        ] : getRemainingColumns(tab.fields, useAsTitle)
                    ], [])
            ];
        }
        return [
            ...remaining,
            field.name
        ];
    }, []);
const getInitialColumns = (fields, useAsTitle, defaultColumns)=>{
    let initialColumns = [];
    if (Array.isArray(defaultColumns) && defaultColumns.length >= 1) {
        initialColumns = defaultColumns;
    } else {
        if (useAsTitle) {
            initialColumns.push(useAsTitle);
        }
        const remainingColumns = getRemainingColumns(fields, useAsTitle);
        initialColumns = initialColumns.concat(remainingColumns);
        initialColumns = initialColumns.slice(0, 4);
    }
    return initialColumns.map((column)=>({
            accessor: column,
            active: true
        }));
}; //# sourceMappingURL=getInitialColumns.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/filterFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "filterFields": (()=>filterFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const filterFields = (incomingFields)=>{
    const shouldSkipField = (field)=>field.type !== 'ui' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(field) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsID"])(field) || field?.admin?.disableListColumn === true;
    const fields = incomingFields?.reduce((acc, field)=>{
        if (shouldSkipField(field)) {
            return acc;
        }
        // extract top-level `tabs` fields and filter out the same
        const formattedField = field.type === 'tabs' && 'tabs' in field ? {
            ...field,
            tabs: field.tabs.map((tab)=>({
                    ...tab,
                    fields: tab.fields.filter((tabField)=>!shouldSkipField(tabField))
                }))
        } : field;
        acc.push(formattedField);
        return acc;
    }, []);
    return fields;
}; //# sourceMappingURL=filterFields.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/buildColumnState.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildColumnState": (()=>buildColumnState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$filterFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/filterFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const buildColumnState = (args)=>{
    const { beforeRows, clientCollectionConfig, collectionConfig, columnPreferences, columns, customCellProps, docs, enableRowSelections, i18n, payload, sortColumnProps, useAsTitle } = args;
    // clientFields contains the fake `id` column
    let sortedFieldMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$filterFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFields"])(clientCollectionConfig.fields), true);
    let _sortedFieldMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$filterFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFields"])(collectionConfig.fields), true) // TODO: think of a way to avoid this additional flatten
    ;
    // place the `ID` field first, if it exists
    // do the same for the `useAsTitle` field with precedence over the `ID` field
    // then sort the rest of the fields based on the `defaultColumns` or `columnPreferences`
    const idFieldIndex = sortedFieldMap?.findIndex((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsID"])(field));
    if (idFieldIndex > -1) {
        const idField = sortedFieldMap.splice(idFieldIndex, 1)[0];
        sortedFieldMap.unshift(idField);
    }
    const useAsTitleFieldIndex = useAsTitle ? sortedFieldMap.findIndex((field)=>'name' in field && field.name === useAsTitle) : -1;
    if (useAsTitleFieldIndex > -1) {
        const useAsTitleField = sortedFieldMap.splice(useAsTitleFieldIndex, 1)[0];
        sortedFieldMap.unshift(useAsTitleField);
    }
    const sortTo = columnPreferences || columns;
    const sortFieldMap = (fieldMap, sortTo)=>fieldMap?.sort((a, b)=>{
            const aIndex = sortTo.findIndex((column)=>'name' in a && column.accessor === a.name);
            const bIndex = sortTo.findIndex((column)=>'name' in b && column.accessor === b.name);
            if (aIndex === -1 && bIndex === -1) {
                return 0;
            }
            if (aIndex === -1) {
                return 1;
            }
            if (bIndex === -1) {
                return -1;
            }
            return aIndex - bIndex;
        });
    if (sortTo) {
        // sort the fields to the order of `defaultColumns` or `columnPreferences`
        sortedFieldMap = sortFieldMap(sortedFieldMap, sortTo);
        _sortedFieldMap = sortFieldMap(_sortedFieldMap, sortTo) // TODO: think of a way to avoid this additional sort
        ;
    }
    const activeColumnsIndices = [];
    const sorted = sortedFieldMap?.reduce((acc, field, index)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(field) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsID"])(field)) {
            return acc;
        }
        const _field = _sortedFieldMap.find((f)=>'name' in field && 'name' in f && f.name === field.name);
        const columnPreference = columnPreferences?.find((preference)=>field && 'name' in field && preference.accessor === field.name);
        let active = false;
        if (columnPreference) {
            active = columnPreference.active;
        } else if (columns && Array.isArray(columns) && columns.length > 0) {
            active = columns.find((column)=>field && 'name' in field && column.accessor === field.name)?.active;
        } else if (activeColumnsIndices.length < 4) {
            active = true;
        }
        if (active && !activeColumnsIndices.includes(index)) {
            activeColumnsIndices.push(index);
        }
        const CustomLabelToRender = _field && 'admin' in _field && 'components' in _field.admin && 'Label' in _field.admin.components && _field.admin.components.Label !== undefined // let it return `null`
         ? _field.admin.components.Label : undefined;
        const CustomLabel = CustomLabelToRender ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
            Component: CustomLabelToRender,
            importMap: payload.importMap
        }) : undefined;
        const fieldAffectsDataSubFields = field && field.type && (field.type === 'array' || field.type === 'group' || field.type === 'blocks');
        const Heading = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortColumn"], {
            disable: fieldAffectsDataSubFields || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsPresentationalOnly"])(field) || undefined,
            Label: CustomLabel,
            label: field && 'label' in field ? field.label : undefined,
            name: 'name' in field ? field.name : undefined,
            ...sortColumnProps || {}
        });
        const baseCellClientProps = {
            cellData: undefined,
            collectionConfig: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(clientCollectionConfig),
            customCellProps,
            field,
            rowData: undefined
        };
        const serverProps = {
            field: _field,
            i18n,
            payload
        };
        const column = {
            accessor: 'name' in field ? field.name : undefined,
            active,
            CustomLabel,
            field,
            Heading,
            renderedCells: active ? docs.map((doc, i)=>{
                const isLinkedColumn = index === activeColumnsIndices[0];
                const cellClientProps = {
                    ...baseCellClientProps,
                    cellData: 'name' in field ? doc[field.name] : undefined,
                    link: isLinkedColumn,
                    rowData: doc
                };
                let CustomCell = null;
                if (_field?.type === 'richText') {
                    if (!_field?.editor) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](_field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                        ;
                    }
                    if (typeof _field?.editor === 'function') {
                        throw new Error('Attempted to access unsanitized rich text editor.');
                    }
                    if (!_field.admin) {
                        _field.admin = {};
                    }
                    if (!_field.admin.components) {
                        _field.admin.components = {};
                    }
                    CustomCell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps: cellClientProps,
                        Component: _field.editor.CellComponent,
                        importMap: payload.importMap,
                        serverProps
                    });
                } else {
                    CustomCell = _field?.admin && 'components' in _field.admin && _field.admin.components?.Cell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                        clientProps: cellClientProps,
                        Component: _field?.admin && 'components' in _field.admin && _field.admin.components?.Cell,
                        importMap: payload.importMap,
                        serverProps
                    }) : undefined;
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderCustomComponent"], {
                    CustomComponent: CustomCell,
                    Fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderDefaultCell"], {
                        clientProps: cellClientProps,
                        columnIndex: index,
                        enableRowSelections: enableRowSelections,
                        isLinkedColumn: isLinkedColumn
                    })
                }, `${i}-${index}`);
            }) : []
        };
        acc.push(column);
        return acc;
    }, []);
    if (enableRowSelections) {
        sorted?.unshift({
            accessor: '_select',
            active: true,
            field: null,
            Heading: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectAll"], {}),
            renderedCells: docs.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SelectRow"], {
                    rowData: docs[i]
                }, i))
        });
    }
    if (beforeRows) {
        sorted.unshift(...beforeRows);
    }
    return sorted;
}; //# sourceMappingURL=buildColumnState.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/renderTable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "renderFilters": (()=>renderFilters),
    "renderTable": (()=>renderTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.0_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.77.4/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/exports/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/RenderServerComponent/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$getInitialColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/getInitialColumns.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$filterFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/filterFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$buildColumnState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/elements/TableColumns/buildColumnState.js [app-rsc] (ecmascript)");
// eslint-disable-next-line payload/no-imports-from-exports-dir
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/exports/client/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.11.0/node_modules/@payloadcms/translations/dist/utilities/getTranslation.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const renderFilters = (fields, importMap)=>fields.reduce((acc, field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsHiddenOrDisabled"])(field)) {
            return acc;
        }
        if ('name' in field && field.admin?.components?.Filter) {
            acc.set(field.name, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$RenderServerComponent$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RenderServerComponent"])({
                Component: field.admin.components?.Filter,
                importMap
            }));
        }
        return acc;
    }, new Map());
const renderTable = ({ clientCollectionConfig, collectionConfig, columnPreferences, columns: columnsFromArgs, customCellProps, docs, enableRowSelections, i18n, payload, renderRowTypes, tableAppearance, useAsTitle })=>{
    // Ensure that columns passed as args comply with the field config, i.e. `hidden`, `disableListColumn`, etc.
    const columns = columnsFromArgs ? columnsFromArgs?.filter((column)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(clientCollectionConfig.fields, true)?.some((field)=>'name' in field && field.name === column.accessor)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$getInitialColumns$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getInitialColumns"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$filterFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterFields"])(clientCollectionConfig.fields), useAsTitle, clientCollectionConfig?.admin?.defaultColumns);
    const columnState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$elements$2f$TableColumns$2f$buildColumnState$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildColumnState"])({
        beforeRows: renderRowTypes ? [
            {
                accessor: 'collection',
                active: true,
                field: null,
                Heading: i18n.t('version:type'),
                renderedCells: docs.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Pill"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$11$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$getTranslation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslation"])(clientCollectionConfig.labels.singular, i18n)
                    }, i))
            }
        ] : undefined,
        clientCollectionConfig,
        collectionConfig,
        columnPreferences,
        columns,
        enableRowSelections,
        i18n,
        // sortColumnProps,
        customCellProps,
        docs,
        payload,
        useAsTitle
    });
    return {
        columnState,
        Table: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$77$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$exports$2f$client$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Table"], {
            appearance: tableAppearance,
            columns: columnState,
            data: docs
        })
    };
}; //# sourceMappingURL=renderTable.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/copyDataFromLocale.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "copyDataFromLocale": (()=>copyDataFromLocale),
    "copyDataFromLocaleHandler": (()=>copyDataFromLocaleHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatErrors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
function iterateFields(fields, fromLocaleData, toLocaleData) {
    fields.map((field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            switch(field.type){
                case 'array':
                    // if the field has no value, take the source value
                    if (field.name in toLocaleData && // only replace if the target value is null or undefined
                    [
                        null,
                        undefined
                    ].includes(toLocaleData[field.name]) && field.name in fromLocaleData) {
                        toLocaleData[field.name] = fromLocaleData[field.name];
                        break;
                    }
                    // if the field has a value but is not localized, loop over the data from target
                    if (!field.localized && field.name in toLocaleData) {
                        toLocaleData[field.name].map((item, index)=>{
                            if (fromLocaleData[field.name]?.[index]) {
                                iterateFields(field.fields, fromLocaleData[field.name][index], item);
                            }
                        });
                    }
                    break;
                case 'blocks':
                    // if the field has no value, take the source value
                    if (field.name in toLocaleData && // only replace if the target value is null or undefined
                    [
                        null,
                        undefined
                    ].includes(toLocaleData[field.name]) && field.name in fromLocaleData) {
                        toLocaleData[field.name] = fromLocaleData[field.name];
                        break;
                    }
                    // if the field has a value but is not localized, loop over the data from target
                    if (!field.localized && field.name in toLocaleData) {
                        toLocaleData[field.name].map((blockData, index)=>{
                            const blockFields = field.blocks.find(({ slug })=>slug === blockData.blockType)?.fields;
                            if (blockFields?.length) {
                                iterateFields(blockFields, fromLocaleData[field.name][index], blockData);
                            }
                        });
                    }
                    break;
                case 'checkbox':
                case 'code':
                case 'date':
                case 'email':
                case 'json':
                case 'number':
                case 'point':
                case 'radio':
                case 'relationship':
                case 'richText':
                case 'select':
                case 'text':
                case 'textarea':
                case 'upload':
                    if (field.name in toLocaleData && // only replace if the target value is null or undefined
                    [
                        null,
                        undefined
                    ].includes(toLocaleData[field.name]) && field.name in fromLocaleData) {
                        toLocaleData[field.name] = fromLocaleData[field.name];
                    }
                    break;
                case 'group':
                    {
                        if (field.name in toLocaleData && fromLocaleData?.[field.name] !== undefined) {
                            iterateFields(field.fields, fromLocaleData[field.name], toLocaleData[field.name]);
                        }
                        break;
                    }
            }
        } else {
            switch(field.type){
                case 'collapsible':
                case 'row':
                    iterateFields(field.fields, fromLocaleData, toLocaleData);
                    break;
                case 'tabs':
                    field.tabs.map((tab)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                            if (tab.name in toLocaleData && fromLocaleData?.[tab.name] !== undefined) {
                                iterateFields(tab.fields, fromLocaleData[tab.name], toLocaleData[tab.name]);
                            }
                        } else {
                            iterateFields(tab.fields, fromLocaleData, toLocaleData);
                        }
                    });
                    break;
            }
        }
    });
}
function mergeData(fromLocaleData, toLocaleData, fields) {
    iterateFields(fields, fromLocaleData, toLocaleData);
    return toLocaleData;
}
const copyDataFromLocaleHandler = async (args)=>{
    const { req } = args;
    try {
        return await copyDataFromLocale(args);
    } catch (err) {
        req.payload.logger.error({
            err,
            msg: `There was an error copying data from "${args.fromLocale}" to "${args.toLocale}"`
        });
        if (err.message === 'Unauthorized') {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrors"])(err);
    }
};
const copyDataFromLocale = async (args)=>{
    const { collectionSlug, docID, fromLocale, globalSlug, overrideData = false, req: { payload, payload: { collections, globals }, user }, req, toLocale } = args;
    const incomingUserSlug = user?.collection;
    const adminUserSlug = payload.config.admin.user;
    // If we have a user slug, test it against the functions
    if (incomingUserSlug) {
        const adminAccessFunction = payload.collections[incomingUserSlug].config.access?.admin;
        // Run the admin access function from the config if it exists
        if (adminAccessFunction) {
            const canAccessAdmin = await adminAccessFunction({
                req: args.req
            });
            if (!canAccessAdmin) {
                throw new Error('Unauthorized');
            }
        // Match the user collection to the global admin config
        } else if (adminUserSlug !== incomingUserSlug) {
            throw new Error('Unauthorized');
        }
    }
    const [fromLocaleData, toLocaleData] = await Promise.allSettled([
        globalSlug ? payload.findGlobal({
            slug: globalSlug,
            depth: 0,
            locale: fromLocale,
            overrideAccess: false,
            user
        }) : payload.findByID({
            id: docID,
            collection: collectionSlug,
            depth: 0,
            joins: false,
            locale: fromLocale,
            overrideAccess: false,
            user
        }),
        globalSlug ? payload.findGlobal({
            slug: globalSlug,
            depth: 0,
            locale: toLocale,
            overrideAccess: false,
            user
        }) : payload.findByID({
            id: docID,
            collection: collectionSlug,
            depth: 0,
            joins: false,
            locale: toLocale,
            overrideAccess: false,
            user
        })
    ]);
    if (fromLocaleData.status === 'rejected') {
        throw new Error(`Error fetching data from locale "${fromLocale}"`);
    }
    if (toLocaleData.status === 'rejected') {
        throw new Error(`Error fetching data from locale "${toLocale}"`);
    }
    return globalSlug ? await payload.updateGlobal({
        slug: globalSlug,
        data: overrideData ? fromLocaleData.value : mergeData(fromLocaleData.value, toLocaleData.value, globals[globalSlug].config.fields),
        locale: toLocale,
        overrideAccess: false,
        req,
        user
    }) : await payload.update({
        id: docID,
        collection: collectionSlug,
        data: overrideData ? fromLocaleData.value : mergeData(fromLocaleData.value, toLocaleData.value, collections[collectionSlug].config.fields),
        locale: toLocale,
        overrideAccess: false,
        req,
        user
    });
}; //# sourceMappingURL=copyDataFromLocale.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/buildTableState.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildTableState": (()=>buildTableState),
    "buildTableStateHandler": (()=>buildTableStateHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/dequal@2.0.3/node_modules/dequal/lite/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatErrors.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$getClientConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/getClientConfig.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$renderTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+ui@3.11.0_@types+react@19.0.1_monaco-editor@0.52.2_next@15.1.0_react-dom@19.0.0_r_xcet7chmsgr4ej7y3ssxeoyx7a/node_modules/@payloadcms/ui/dist/utilities/renderTable.js [app-rsc] (ecmascript)");
;
;
;
;
const buildTableStateHandler = async (args)=>{
    const { req } = args;
    try {
        const res = await buildTableState(args);
        return res;
    } catch (err) {
        req.payload.logger.error({
            err,
            msg: `There was an error building form state`
        });
        if (err.message === 'Could not find field schema for given path') {
            return {
                message: err.message
            };
        }
        if (err.message === 'Unauthorized') {
            return null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatErrors$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatErrors"])(err);
    }
};
const buildTableState = async (args)=>{
    const { collectionSlug, columns, docs: docsFromArgs, enableRowSelections, query, renderRowTypes, req, req: { i18n, payload, payload: { config }, user }, tableAppearance } = args;
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
    let collectionConfig;
    let clientCollectionConfig;
    if (req.payload.collections[collectionSlug]) {
        collectionConfig = req.payload.collections[collectionSlug].config;
        clientCollectionConfig = clientConfig.collections.find((collection)=>collection.slug === collectionSlug);
    }
    // get prefs, then set update them using the columns that we just received
    const preferencesKey = `${collectionSlug}-list`;
    const preferencesResult = await payload.find({
        collection: 'payload-preferences',
        depth: 0,
        limit: 1,
        pagination: false,
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
    }).then((res)=>res.docs[0] ?? {
            id: null,
            value: {}
        });
    let newPrefs = preferencesResult.value;
    if (!preferencesResult.id || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$dequal$40$2$2e$0$2e$3$2f$node_modules$2f$dequal$2f$lite$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dequal"])(columns, preferencesResult?.columns)) {
        const preferencesArgs = {
            collection: 'payload-preferences',
            data: {
                key: preferencesKey,
                user: {
                    collection: user.collection,
                    value: user.id
                },
                value: {
                    ...preferencesResult?.value || {},
                    columns
                }
            },
            depth: 0,
            req
        };
        if (preferencesResult.id) {
            newPrefs = await payload.update({
                ...preferencesArgs,
                id: preferencesResult.id
            })?.then((res)=>res.value);
        } else {
            newPrefs = await payload.create(preferencesArgs)?.then((res)=>res.value);
        }
    }
    let docs = docsFromArgs;
    let data;
    // lookup docs, if desired, i.e. within `join` field which initialize with `depth: 0`
    if (!docs || query) {
        data = await payload.find({
            collection: collectionSlug,
            depth: 0,
            limit: query?.limit ? parseInt(query.limit, 10) : undefined,
            overrideAccess: false,
            page: query?.page ? parseInt(query.page, 10) : undefined,
            sort: query?.sort,
            user: req.user,
            where: query?.where
        });
        docs = data.docs;
    }
    const { columnState, Table } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$renderTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderTable"])({
        clientCollectionConfig,
        collectionConfig,
        columnPreferences: undefined,
        columns,
        docs,
        enableRowSelections,
        i18n: req.i18n,
        payload,
        renderRowTypes,
        tableAppearance,
        useAsTitle: collectionConfig.admin.useAsTitle
    });
    const renderedFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$ui$40$3$2e$11$2e$0_$40$types$2b$react$40$19$2e$0$2e$1_monaco$2d$editor$40$0$2e$52$2e$2_next$40$15$2e$1$2e$0_react$2d$dom$40$19$2e$0$2e$0_r_xcet7chmsgr4ej7y3ssxeoyx7a$2f$node_modules$2f40$payloadcms$2f$ui$2f$dist$2f$utilities$2f$renderTable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["renderFilters"])(collectionConfig.fields, req.payload.importMap);
    return {
        data,
        preferences: newPrefs,
        renderedFilters,
        state: columnState,
        Table
    };
}; //# sourceMappingURL=buildTableState.js.map
}}),

};

//# sourceMappingURL=7cfd9_%40payloadcms_ui_dist_5c6b89._.js.map