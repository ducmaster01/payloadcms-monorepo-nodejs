module.exports = {

"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_esm__({
    "fieldAffectsData": (()=>fieldAffectsData),
    "fieldHasMaxDepth": (()=>fieldHasMaxDepth),
    "fieldHasSubFields": (()=>fieldHasSubFields),
    "fieldIsArrayType": (()=>fieldIsArrayType),
    "fieldIsBlockType": (()=>fieldIsBlockType),
    "fieldIsGroupType": (()=>fieldIsGroupType),
    "fieldIsHiddenOrDisabled": (()=>fieldIsHiddenOrDisabled),
    "fieldIsID": (()=>fieldIsID),
    "fieldIsLocalized": (()=>fieldIsLocalized),
    "fieldIsPresentationalOnly": (()=>fieldIsPresentationalOnly),
    "fieldIsSidebar": (()=>fieldIsSidebar),
    "fieldIsVirtual": (()=>fieldIsVirtual),
    "fieldSupportsMany": (()=>fieldSupportsMany),
    "optionIsObject": (()=>optionIsObject),
    "optionIsValue": (()=>optionIsValue),
    "optionsAreObjects": (()=>optionsAreObjects),
    "tabHasName": (()=>tabHasName),
    "valueIsValueWithRelation": (()=>valueIsValueWithRelation)
});
function valueIsValueWithRelation(value) {
    return value !== null && typeof value === 'object' && 'relationTo' in value && 'value' in value;
}
function fieldHasSubFields(field) {
    return field.type === 'group' || field.type === 'array' || field.type === 'row' || field.type === 'collapsible';
}
function fieldIsArrayType(field) {
    return field.type === 'array';
}
function fieldIsBlockType(field) {
    return field.type === 'blocks';
}
function fieldIsGroupType(field) {
    return field.type === 'group';
}
function optionIsObject(option) {
    return typeof option === 'object';
}
function optionsAreObjects(options) {
    return Array.isArray(options) && typeof options?.[0] === 'object';
}
function optionIsValue(option) {
    return typeof option === 'string';
}
function fieldSupportsMany(field) {
    return field.type === 'select' || field.type === 'relationship' || field.type === 'upload';
}
function fieldHasMaxDepth(field) {
    return (field.type === 'upload' || field.type === 'relationship' || field.type === 'join') && typeof field.maxDepth === 'number';
}
function fieldIsPresentationalOnly(field) {
    return field.type === 'ui';
}
function fieldIsSidebar(field) {
    return 'admin' in field && 'position' in field.admin && field.admin.position === 'sidebar';
}
function fieldIsID(field) {
    return 'name' in field && field.name === 'id';
}
function fieldIsHiddenOrDisabled(field) {
    return 'hidden' in field && field.hidden || 'admin' in field && 'disabled' in field.admin && field.admin.disabled;
}
function fieldAffectsData(field) {
    return 'name' in field && !fieldIsPresentationalOnly(field);
}
function tabHasName(tab) {
    return 'name' in tab;
}
function fieldIsLocalized(field) {
    return 'localized' in field && field.localized;
}
function fieldIsVirtual(field) {
    return 'virtual' in field && field.virtual;
} //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/timezone/defaultTimezones.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * List of supported timezones
 *
 * label: UTC offset and location
 * value: IANA timezone name
 *
 * @example
 * { label: '(UTC-12:00) International Date Line West', value: 'Dateline Standard Time' }
 */ __turbopack_esm__({
    "defaultTimezones": (()=>defaultTimezones)
});
const defaultTimezones = [
    {
        label: '(UTC-11:00) Midway Island, Samoa',
        value: 'Pacific/Midway'
    },
    {
        label: '(UTC-11:00) Niue',
        value: 'Pacific/Niue'
    },
    {
        label: '(UTC-10:00) Hawaii',
        value: 'Pacific/Honolulu'
    },
    {
        label: '(UTC-10:00) Cook Islands',
        value: 'Pacific/Rarotonga'
    },
    {
        label: '(UTC-09:00) Alaska',
        value: 'America/Anchorage'
    },
    {
        label: '(UTC-09:00) Gambier Islands',
        value: 'Pacific/Gambier'
    },
    {
        label: '(UTC-08:00) Pacific Time (US & Canada)',
        value: 'America/Los_Angeles'
    },
    {
        label: '(UTC-08:00) Tijuana, Baja California',
        value: 'America/Tijuana'
    },
    {
        label: '(UTC-07:00) Mountain Time (US & Canada)',
        value: 'America/Denver'
    },
    {
        label: '(UTC-07:00) Arizona (No DST)',
        value: 'America/Phoenix'
    },
    {
        label: '(UTC-06:00) Central Time (US & Canada)',
        value: 'America/Chicago'
    },
    {
        label: '(UTC-06:00) Central America',
        value: 'America/Guatemala'
    },
    {
        label: '(UTC-05:00) Eastern Time (US & Canada)',
        value: 'America/New_York'
    },
    {
        label: '(UTC-05:00) Bogota, Lima, Quito',
        value: 'America/Bogota'
    },
    {
        label: '(UTC-04:00) Caracas',
        value: 'America/Caracas'
    },
    {
        label: '(UTC-04:00) Santiago',
        value: 'America/Santiago'
    },
    {
        label: '(UTC-03:00) Buenos Aires',
        value: 'America/Buenos_Aires'
    },
    {
        label: '(UTC-03:00) Brasilia',
        value: 'America/Sao_Paulo'
    },
    {
        label: '(UTC-02:00) South Georgia',
        value: 'Atlantic/South_Georgia'
    },
    {
        label: '(UTC-01:00) Azores',
        value: 'Atlantic/Azores'
    },
    {
        label: '(UTC-01:00) Cape Verde',
        value: 'Atlantic/Cape_Verde'
    },
    {
        label: '(UTC+00:00) London (GMT)',
        value: 'Europe/London'
    },
    {
        label: '(UTC+01:00) Berlin, Paris',
        value: 'Europe/Berlin'
    },
    {
        label: '(UTC+01:00) Lagos',
        value: 'Africa/Lagos'
    },
    {
        label: '(UTC+02:00) Athens, Bucharest',
        value: 'Europe/Athens'
    },
    {
        label: '(UTC+02:00) Cairo',
        value: 'Africa/Cairo'
    },
    {
        label: '(UTC+03:00) Moscow, St. Petersburg',
        value: 'Europe/Moscow'
    },
    {
        label: '(UTC+03:00) Riyadh',
        value: 'Asia/Riyadh'
    },
    {
        label: '(UTC+04:00) Dubai',
        value: 'Asia/Dubai'
    },
    {
        label: '(UTC+04:00) Baku',
        value: 'Asia/Baku'
    },
    {
        label: '(UTC+05:00) Islamabad, Karachi',
        value: 'Asia/Karachi'
    },
    {
        label: '(UTC+05:00) Tashkent',
        value: 'Asia/Tashkent'
    },
    {
        label: '(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        value: 'Asia/Calcutta'
    },
    {
        label: '(UTC+06:00) Dhaka',
        value: 'Asia/Dhaka'
    },
    {
        label: '(UTC+06:00) Almaty',
        value: 'Asia/Almaty'
    },
    {
        label: '(UTC+07:00) Jakarta',
        value: 'Asia/Jakarta'
    },
    {
        label: '(UTC+07:00) Bangkok',
        value: 'Asia/Bangkok'
    },
    {
        label: '(UTC+08:00) Beijing, Shanghai',
        value: 'Asia/Shanghai'
    },
    {
        label: '(UTC+08:00) Singapore',
        value: 'Asia/Singapore'
    },
    {
        label: '(UTC+09:00) Tokyo, Osaka, Sapporo',
        value: 'Asia/Tokyo'
    },
    {
        label: '(UTC+09:00) Seoul',
        value: 'Asia/Seoul'
    },
    {
        label: '(UTC+10:00) Sydney, Melbourne',
        value: 'Australia/Sydney'
    },
    {
        label: '(UTC+10:00) Guam, Port Moresby',
        value: 'Pacific/Guam'
    },
    {
        label: '(UTC+11:00) New Caledonia',
        value: 'Pacific/Noumea'
    },
    {
        label: '(UTC+12:00) Auckland, Wellington',
        value: 'Pacific/Auckland'
    },
    {
        label: '(UTC+12:00) Fiji',
        value: 'Pacific/Fiji'
    }
]; //# sourceMappingURL=defaultTimezones.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFieldPaths": (()=>getFieldPaths),
    "getFieldPathsModified": (()=>getFieldPathsModified)
});
function getFieldPaths({ field, index, parentIndexPath, parentPath, parentSchemaPath }) {
    if ('name' in field) {
        return {
            indexPath: `${parentIndexPath ? parentIndexPath + '-' : ''}${index}`,
            path: `${parentPath ? parentPath + '.' : ''}${field.name}`,
            schemaPath: `${parentSchemaPath ? parentSchemaPath + '.' : ''}${field.name}`
        };
    }
    const indexSuffix = `_index-${`${parentIndexPath ? parentIndexPath + '-' : ''}${index}`}`;
    return {
        indexPath: `${parentIndexPath ? parentIndexPath + '-' : ''}${index}`,
        path: `${parentPath ? parentPath + '.' : ''}${indexSuffix}`,
        schemaPath: `${parentSchemaPath ? parentSchemaPath + '.' : ''}${indexSuffix}`
    };
}
function getFieldPathsModified({ field, index, parentIndexPath, parentPath, parentSchemaPath }) {
    const parentPathSegments = parentPath.split('.');
    const parentIsUnnamed = parentPathSegments[parentPathSegments.length - 1].startsWith('_index-');
    const parentWithoutIndex = parentIsUnnamed ? parentPathSegments.slice(0, -1).join('.') : parentPath;
    const parentPathToUse = parentIsUnnamed ? parentWithoutIndex : parentPath;
    if ('name' in field) {
        return {
            indexPath: '',
            path: `${parentPathToUse ? parentPathToUse + '.' : ''}${field.name}`,
            schemaPath: `${parentSchemaPath ? parentSchemaPath + '.' : ''}${field.name}`
        };
    }
    const indexSuffix = `_index-${`${parentIndexPath ? parentIndexPath + '-' : ''}${index}`}`;
    return {
        indexPath: `${parentIndexPath ? parentIndexPath + '-' : ''}${index}`,
        path: `${parentPathToUse ? parentPathToUse + '.' : ''}${indexSuffix}`,
        schemaPath: `${!parentIsUnnamed && parentSchemaPath ? parentSchemaPath + '.' : ''}${indexSuffix}`
    };
} //# sourceMappingURL=getFieldPaths.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getDefaultValue.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDefaultValue": (()=>getDefaultValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
;
const getDefaultValue = async ({ defaultValue, locale, req, user, value })=>{
    if (typeof value !== 'undefined') {
        return value;
    }
    if (defaultValue && typeof defaultValue === 'function') {
        return await defaultValue({
            locale,
            req,
            user
        });
    }
    if (typeof defaultValue === 'object') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(defaultValue);
    }
    return defaultValue;
}; //# sourceMappingURL=getDefaultValue.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/relationshipPopulationPromise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "relationshipPopulationPromise": (()=>relationshipPopulationPromise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/dataloader.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
const populate = async ({ currentDepth, data, dataReference, depth, draft, fallbackLocale, field, index, key, locale, overrideAccess, populateArg, req, showHiddenFields })=>{
    const dataToUpdate = dataReference;
    let relation;
    if (field.type === 'join') {
        relation = field.collection;
    } else {
        relation = Array.isArray(field.relationTo) ? data.relationTo : field.relationTo;
    }
    const relatedCollection = req.payload.collections[relation];
    if (relatedCollection) {
        let id = field.type !== 'join' && Array.isArray(field.relationTo) ? data.value : data;
        let relationshipValue;
        const shouldPopulate = depth && currentDepth <= depth;
        if (typeof id !== 'string' && typeof id !== 'number' && typeof id?.toString === 'function' && typeof id !== 'object') {
            id = id.toString();
        }
        if (shouldPopulate) {
            relationshipValue = await req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                collectionSlug: relatedCollection.config.slug,
                currentDepth: currentDepth + 1,
                depth,
                docID: id,
                draft,
                fallbackLocale,
                locale,
                overrideAccess,
                select: populateArg?.[relatedCollection.config.slug] ?? relatedCollection.config.defaultPopulate,
                showHiddenFields,
                transactionID: req.transactionID
            }));
        }
        if (!relationshipValue) {
            // ids are visible regardless of access controls
            relationshipValue = id;
        }
        if (typeof index === 'number' && typeof key === 'string') {
            if (field.type !== 'join' && Array.isArray(field.relationTo)) {
                dataToUpdate[field.name][key][index].value = relationshipValue;
            } else {
                dataToUpdate[field.name][key][index] = relationshipValue;
            }
        } else if (typeof index === 'number' || typeof key === 'string') {
            if (field.type === 'join') {
                dataToUpdate[field.name].docs[index ?? key] = relationshipValue;
            } else if (Array.isArray(field.relationTo)) {
                dataToUpdate[field.name][index ?? key].value = relationshipValue;
            } else {
                dataToUpdate[field.name][index ?? key] = relationshipValue;
            }
        } else if (field.type !== 'join' && Array.isArray(field.relationTo)) {
            dataToUpdate[field.name].value = relationshipValue;
        } else {
            dataToUpdate[field.name] = relationshipValue;
        }
    }
};
const relationshipPopulationPromise = async ({ currentDepth, depth, draft, fallbackLocale, field, locale, overrideAccess, populate: populateArg, req, showHiddenFields, siblingDoc })=>{
    const resultingDoc = siblingDoc;
    const populateDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasMaxDepth"])(field) && field.maxDepth < depth ? field.maxDepth : depth;
    const rowPromises = [];
    if (field.type === 'join' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldSupportsMany"])(field) && field.hasMany) {
        if (field.localized && locale === 'all' && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null) {
            Object.keys(siblingDoc[field.name]).forEach((localeKey)=>{
                if (Array.isArray(siblingDoc[field.name][localeKey])) {
                    siblingDoc[field.name][localeKey].forEach((relatedDoc, index)=>{
                        const rowPromise = async ()=>{
                            await populate({
                                currentDepth,
                                data: siblingDoc[field.name][localeKey][index],
                                dataReference: resultingDoc,
                                depth: populateDepth,
                                draft,
                                fallbackLocale,
                                field,
                                index,
                                key: localeKey,
                                locale,
                                overrideAccess,
                                populateArg,
                                req,
                                showHiddenFields
                            });
                        };
                        rowPromises.push(rowPromise());
                    });
                }
            });
        } else if (Array.isArray(siblingDoc[field.name]) || Array.isArray(siblingDoc[field.name]?.docs)) {
            ;
            (Array.isArray(siblingDoc[field.name]) ? siblingDoc[field.name] : siblingDoc[field.name].docs).forEach((relatedDoc, index)=>{
                const rowPromise = async ()=>{
                    if (relatedDoc) {
                        await populate({
                            currentDepth,
                            data: relatedDoc?.id ? relatedDoc.id : relatedDoc,
                            dataReference: resultingDoc,
                            depth: populateDepth,
                            draft,
                            fallbackLocale,
                            field,
                            index,
                            locale,
                            overrideAccess,
                            populateArg,
                            req,
                            showHiddenFields
                        });
                    }
                };
                rowPromises.push(rowPromise());
            });
        }
    } else if (field.localized && locale === 'all' && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null) {
        Object.keys(siblingDoc[field.name]).forEach((localeKey)=>{
            const rowPromise = async ()=>{
                await populate({
                    currentDepth,
                    data: siblingDoc[field.name][localeKey],
                    dataReference: resultingDoc,
                    depth: populateDepth,
                    draft,
                    fallbackLocale,
                    field,
                    key: localeKey,
                    locale,
                    overrideAccess,
                    populateArg,
                    req,
                    showHiddenFields
                });
            };
            rowPromises.push(rowPromise());
        });
        await Promise.all(rowPromises);
    } else if (siblingDoc[field.name]) {
        await populate({
            currentDepth,
            data: siblingDoc[field.name],
            dataReference: resultingDoc,
            depth: populateDepth,
            draft,
            fallbackLocale,
            field,
            locale,
            overrideAccess,
            populateArg,
            req,
            showHiddenFields
        });
    }
    await Promise.all(rowPromises);
}; //# sourceMappingURL=relationshipPopulationPromise.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "promise": (()=>promise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getDefaultValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$relationshipPopulationPromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/relationshipPopulationPromise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const promise = async ({ blockData, collection, context, currentDepth, depth, doc, draft, fallbackLocale, field, fieldIndex, fieldPromises, findMany, flattenLocales, global, locale, overrideAccess, parentIndexPath, parentPath, parentSchemaPath, populate, populationPromises, req, select, selectMode, showHiddenFields, siblingDoc, triggerAccessControl = true, triggerHooks = true })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.hidden && typeof siblingDoc[field.name] !== 'undefined' && !showHiddenFields) {
        delete siblingDoc[field.name];
    }
    // Strip unselected fields
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && select && selectMode) {
        if (selectMode === 'include') {
            if (!select[field.name]) {
                delete siblingDoc[field.name];
                return;
            }
        }
        if (selectMode === 'exclude') {
            if (select[field.name] === false) {
                delete siblingDoc[field.name];
                return;
            }
        }
    }
    const shouldHoistLocalizedValue = flattenLocales && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && typeof siblingDoc[field.name] === 'object' && siblingDoc[field.name] !== null && field.localized && locale !== 'all' && req.payload.config.localization;
    if (shouldHoistLocalizedValue) {
        // replace actual value with localized value before sanitizing
        // { [locale]: fields } -> fields
        const value = siblingDoc[field.name][locale];
        let hoistedValue = value;
        if (fallbackLocale && fallbackLocale !== locale) {
            const fallbackValue = siblingDoc[field.name][fallbackLocale];
            const isNullOrUndefined = typeof value === 'undefined' || value === null;
            if (fallbackValue) {
                switch(field.type){
                    case 'text':
                    case 'textarea':
                        {
                            if (value === '' || isNullOrUndefined) {
                                hoistedValue = fallbackValue;
                            }
                            break;
                        }
                    default:
                        {
                            if (isNullOrUndefined) {
                                hoistedValue = fallbackValue;
                            }
                            break;
                        }
                }
            }
        }
        siblingDoc[field.name] = hoistedValue;
    }
    // Sanitize outgoing field value
    switch(field.type){
        case 'group':
            {
                // Fill groups with empty objects so fields with hooks within groups can populate
                // themselves virtually as necessary
                if (typeof siblingDoc[field.name] === 'undefined') {
                    siblingDoc[field.name] = {};
                }
                break;
            }
        case 'point':
            {
                const pointDoc = siblingDoc[field.name];
                if (Array.isArray(pointDoc?.coordinates) && pointDoc.coordinates.length === 2) {
                    siblingDoc[field.name] = pointDoc.coordinates;
                } else {
                    siblingDoc[field.name] = undefined;
                }
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                break;
            }
        case 'tabs':
            {
                field.tabs.forEach((tab)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) && (typeof siblingDoc[tab.name] === 'undefined' || siblingDoc[tab.name] === null)) {
                        siblingDoc[tab.name] = {};
                    }
                });
                break;
            }
        default:
            {
                break;
            }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        // Execute hooks
        if (triggerHooks && field.hooks?.afterRead) {
            await field.hooks.afterRead.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const shouldRunHookOnAllLocales = field.localized && (locale === 'all' || !flattenLocales) && typeof siblingDoc[field.name] === 'object';
                if (shouldRunHookOnAllLocales) {
                    const hookPromises = Object.entries(siblingDoc[field.name]).map(([locale, value])=>(async ()=>{
                            const hookedValue = await currentHook({
                                blockData,
                                collection,
                                context,
                                currentDepth,
                                data: doc,
                                depth,
                                draft,
                                field,
                                findMany,
                                global,
                                indexPath: indexPathSegments,
                                operation: 'read',
                                originalDoc: doc,
                                overrideAccess,
                                path: pathSegments,
                                req,
                                schemaPath: schemaPathSegments,
                                showHiddenFields,
                                siblingData: siblingDoc,
                                value
                            });
                            if (hookedValue !== undefined) {
                                siblingDoc[field.name][locale] = hookedValue;
                            }
                        })());
                    await Promise.all(hookPromises);
                } else {
                    const hookedValue = await currentHook({
                        blockData,
                        collection,
                        context,
                        currentDepth,
                        data: doc,
                        depth,
                        draft,
                        field,
                        findMany,
                        global,
                        indexPath: indexPathSegments,
                        operation: 'read',
                        originalDoc: doc,
                        overrideAccess,
                        path: pathSegments,
                        req,
                        schemaPath: schemaPathSegments,
                        showHiddenFields,
                        siblingData: siblingDoc,
                        value: siblingDoc[field.name]
                    });
                    if (hookedValue !== undefined) {
                        siblingDoc[field.name] = hookedValue;
                    }
                }
            }, Promise.resolve());
        }
        // Execute access control
        let allowDefaultValue = true;
        if (triggerAccessControl && field.access && field.access.read) {
            const result = overrideAccess ? true : await field.access.read({
                id: doc.id,
                blockData,
                data: doc,
                doc,
                req,
                siblingData: siblingDoc
            });
            if (!result) {
                allowDefaultValue = false;
                delete siblingDoc[field.name];
            }
        }
        // Set defaultValue on the field for globals being returned without being first created
        // or collection documents created prior to having a default
        if (allowDefaultValue && typeof siblingDoc[field.name] === 'undefined' && typeof field.defaultValue !== 'undefined') {
            siblingDoc[field.name] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultValue"])({
                defaultValue: field.defaultValue,
                locale,
                req,
                user: req.user,
                value: siblingDoc[field.name]
            });
        }
        if (field.type === 'relationship' || field.type === 'upload' || field.type === 'join') {
            populationPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$relationshipPopulationPromise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["relationshipPopulationPromise"])({
                currentDepth,
                depth,
                draft,
                fallbackLocale,
                field,
                locale,
                overrideAccess,
                populate,
                req,
                showHiddenFields,
                siblingDoc
            }));
        }
    }
    switch(field.type){
        case 'array':
            {
                const rows = siblingDoc[field.name];
                let arraySelect = select?.[field.name];
                if (selectMode === 'include' && typeof arraySelect === 'object') {
                    arraySelect = {
                        ...arraySelect,
                        id: true
                    };
                }
                if (Array.isArray(rows)) {
                    rows.forEach((row, rowIndex)=>{
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                            blockData,
                            collection,
                            context,
                            currentDepth,
                            depth,
                            doc,
                            draft,
                            fallbackLocale,
                            fieldPromises,
                            fields: field.fields,
                            findMany,
                            flattenLocales,
                            global,
                            locale,
                            overrideAccess,
                            parentIndexPath: '',
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            populate,
                            populationPromises,
                            req,
                            select: typeof arraySelect === 'object' ? arraySelect : undefined,
                            selectMode,
                            showHiddenFields,
                            siblingDoc: row || {},
                            triggerAccessControl,
                            triggerHooks
                        });
                    });
                } else if (!shouldHoistLocalizedValue && typeof rows === 'object' && rows !== null) {
                    Object.values(rows).forEach((localeRows)=>{
                        if (Array.isArray(localeRows)) {
                            localeRows.forEach((row, rowIndex)=>{
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                    blockData,
                                    collection,
                                    context,
                                    currentDepth,
                                    depth,
                                    doc,
                                    draft,
                                    fallbackLocale,
                                    fieldPromises,
                                    fields: field.fields,
                                    findMany,
                                    flattenLocales,
                                    global,
                                    locale,
                                    overrideAccess,
                                    parentIndexPath: '',
                                    parentPath: path + '.' + rowIndex,
                                    parentSchemaPath: schemaPath,
                                    populate,
                                    populationPromises,
                                    req,
                                    showHiddenFields,
                                    siblingDoc: row || {},
                                    triggerAccessControl,
                                    triggerHooks
                                });
                            });
                        }
                    });
                } else {
                    siblingDoc[field.name] = [];
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingDoc[field.name];
                let blocksSelect = select?.[field.name];
                if (Array.isArray(rows)) {
                    rows.forEach((row, rowIndex)=>{
                        const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                        let blockSelectMode = selectMode;
                        if (typeof blocksSelect === 'object') {
                            blocksSelect = {
                                ...blocksSelect
                            };
                            // sanitize blocks: {cta: false} to blocks: {cta: {id: true, blockType: true}}
                            if (selectMode === 'exclude' && blocksSelect[block.slug] === false) {
                                blockSelectMode = 'include';
                                blocksSelect[block.slug] = {
                                    id: true,
                                    blockType: true
                                };
                            } else if (selectMode === 'include') {
                                if (!blocksSelect[block.slug]) {
                                    blocksSelect[block.slug] = {};
                                }
                                if (typeof blocksSelect[block.slug] === 'object') {
                                    blocksSelect[block.slug] = {
                                        ...blocksSelect[block.slug]
                                    };
                                    blocksSelect[block.slug]['id'] = true;
                                    blocksSelect[block.slug]['blockType'] = true;
                                }
                            }
                        }
                        const blockSelect = blocksSelect?.[block.slug];
                        if (block) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                blockData: row,
                                collection,
                                context,
                                currentDepth,
                                depth,
                                doc,
                                draft,
                                fallbackLocale,
                                fieldPromises,
                                fields: block.fields,
                                findMany,
                                flattenLocales,
                                global,
                                locale,
                                overrideAccess,
                                parentIndexPath: '',
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                populate,
                                populationPromises,
                                req,
                                select: typeof blockSelect === 'object' ? blockSelect : undefined,
                                selectMode: blockSelectMode,
                                showHiddenFields,
                                siblingDoc: row || {},
                                triggerAccessControl,
                                triggerHooks
                            });
                        }
                    });
                } else if (!shouldHoistLocalizedValue && typeof rows === 'object' && rows !== null) {
                    Object.values(rows).forEach((localeRows)=>{
                        if (Array.isArray(localeRows)) {
                            localeRows.forEach((row, rowIndex)=>{
                                const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                                if (block) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                        blockData: row,
                                        collection,
                                        context,
                                        currentDepth,
                                        depth,
                                        doc,
                                        draft,
                                        fallbackLocale,
                                        fieldPromises,
                                        fields: block.fields,
                                        findMany,
                                        flattenLocales,
                                        global,
                                        locale,
                                        overrideAccess,
                                        parentIndexPath: '',
                                        parentPath: path + '.' + rowIndex,
                                        parentSchemaPath: schemaPath + '.' + block.slug,
                                        populate,
                                        populationPromises,
                                        req,
                                        showHiddenFields,
                                        siblingDoc: row || {},
                                        triggerAccessControl,
                                        triggerHooks
                                    });
                                }
                            });
                        }
                    });
                } else {
                    siblingDoc[field.name] = [];
                }
                break;
            }
        case 'collapsible':
        case 'row':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    populate,
                    populationPromises,
                    req,
                    select,
                    selectMode,
                    showHiddenFields,
                    siblingDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'group':
            {
                let groupDoc = siblingDoc[field.name];
                if (typeof siblingDoc[field.name] !== 'object') {
                    groupDoc = {};
                }
                const groupSelect = select?.[field.name];
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    parentIndexPath: '',
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    populate,
                    populationPromises,
                    req,
                    select: typeof groupSelect === 'object' ? groupSelect : undefined,
                    selectMode,
                    showHiddenFields,
                    siblingDoc: groupDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.afterRead?.length) {
                    await editor.hooks.afterRead.reduce(async (priorHook, currentHook)=>{
                        await priorHook;
                        const shouldRunHookOnAllLocales = field.localized && (locale === 'all' || !flattenLocales) && typeof siblingDoc[field.name] === 'object';
                        if (shouldRunHookOnAllLocales) {
                            const hookPromises = Object.entries(siblingDoc[field.name]).map(([locale, value])=>(async ()=>{
                                    const hookedValue = await currentHook({
                                        collection,
                                        context,
                                        currentDepth,
                                        data: doc,
                                        depth,
                                        draft,
                                        fallbackLocale,
                                        field,
                                        fieldPromises,
                                        findMany,
                                        flattenLocales,
                                        global,
                                        indexPath: indexPathSegments,
                                        locale,
                                        operation: 'read',
                                        originalDoc: doc,
                                        overrideAccess,
                                        path: pathSegments,
                                        populate,
                                        populationPromises,
                                        req,
                                        schemaPath: schemaPathSegments,
                                        showHiddenFields,
                                        siblingData: siblingDoc,
                                        triggerAccessControl,
                                        triggerHooks,
                                        value
                                    });
                                    if (hookedValue !== undefined) {
                                        siblingDoc[field.name][locale] = hookedValue;
                                    }
                                })());
                            await Promise.all(hookPromises);
                        } else {
                            const hookedValue = await currentHook({
                                collection,
                                context,
                                currentDepth,
                                data: doc,
                                depth,
                                draft,
                                fallbackLocale,
                                field,
                                fieldPromises,
                                findMany,
                                flattenLocales,
                                global,
                                indexPath: indexPathSegments,
                                locale,
                                operation: 'read',
                                originalDoc: doc,
                                overrideAccess,
                                path: pathSegments,
                                populate,
                                populationPromises,
                                req,
                                schemaPath: schemaPathSegments,
                                showHiddenFields,
                                siblingData: siblingDoc,
                                triggerAccessControl,
                                triggerHooks,
                                value: siblingDoc[field.name]
                            });
                            if (hookedValue !== undefined) {
                                siblingDoc[field.name] = hookedValue;
                            }
                        }
                    }, Promise.resolve());
                }
                break;
            }
        case 'tab':
            {
                let tabDoc = siblingDoc;
                let tabSelect;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    tabDoc = siblingDoc[field.name];
                    if (typeof siblingDoc[field.name] !== 'object') {
                        tabDoc = {};
                    }
                    if (typeof select?.[field.name] === 'object') {
                        tabSelect = select?.[field.name];
                    }
                } else {
                    tabSelect = select;
                }
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.fields,
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    populate,
                    populationPromises,
                    req,
                    select: tabSelect,
                    selectMode,
                    showHiddenFields,
                    siblingDoc: tabDoc,
                    triggerAccessControl,
                    triggerHooks
                });
                break;
            }
        case 'tabs':
            {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    currentDepth,
                    depth,
                    doc,
                    draft,
                    fallbackLocale,
                    fieldPromises,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    findMany,
                    flattenLocales,
                    global,
                    locale,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    populate,
                    populationPromises,
                    req,
                    select,
                    selectMode,
                    showHiddenFields,
                    siblingDoc,
                    triggerAccessControl,
                    triggerHooks
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
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/promise.js [app-rsc] (ecmascript)");
;
const traverseFields = ({ blockData, collection, context, currentDepth, depth, doc, draft, fallbackLocale, fieldPromises, fields, findMany, flattenLocales, global, locale, overrideAccess, parentIndexPath, parentPath, parentSchemaPath, populate, populationPromises, req, select, selectMode, showHiddenFields, siblingDoc, triggerAccessControl = true, triggerHooks = true })=>{
    fields.forEach((field, fieldIndex)=>{
        fieldPromises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"])({
            blockData,
            collection,
            context,
            currentDepth,
            depth,
            doc,
            draft,
            fallbackLocale,
            field,
            fieldIndex,
            fieldPromises,
            findMany,
            flattenLocales,
            global,
            locale,
            overrideAccess,
            parentIndexPath,
            parentPath,
            parentSchemaPath,
            populate,
            populationPromises,
            req,
            select,
            selectMode,
            showHiddenFields,
            siblingDoc,
            triggerAccessControl,
            triggerHooks
        }));
    });
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "afterRead": (()=>afterRead)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)");
;
;
async function afterRead(args) {
    const { collection, context, currentDepth: incomingCurrentDepth, depth: incomingDepth, doc: incomingDoc, draft, fallbackLocale, findMany, flattenLocales = true, global, locale, overrideAccess, populate, req, select, showHiddenFields } = args;
    const fieldPromises = [];
    const populationPromises = [];
    let depth = incomingDepth || incomingDepth === 0 ? parseInt(String(incomingDepth), 10) : req.payload.config.defaultDepth;
    if (depth > req.payload.config.maxDepth) {
        depth = req.payload.config.maxDepth;
    }
    const currentDepth = incomingCurrentDepth || 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        collection,
        context,
        currentDepth,
        depth,
        doc: incomingDoc,
        draft,
        fallbackLocale,
        fieldPromises,
        fields: collection?.fields || global?.fields,
        findMany,
        flattenLocales,
        global,
        locale,
        overrideAccess,
        parentIndexPath: '',
        parentPath: '',
        parentSchemaPath: '',
        populate,
        populationPromises,
        req,
        select,
        selectMode: select ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getSelectMode$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSelectMode"])(select) : undefined,
        showHiddenFields,
        siblingDoc: incomingDoc
    });
    /**
   * Await all field and population promises in parallel.
   * A field promise is able to add more field promises to the fieldPromises array, which will not be
   * awaited in the first run.
   * This is why we need to loop again to process the new field promises, until there are no more field promises left.
   */ let iterations = 0;
    while(fieldPromises.length > 0 || populationPromises.length > 0){
        const currentFieldPromises = fieldPromises.splice(0, fieldPromises.length);
        const currentPopulationPromises = populationPromises.splice(0, populationPromises.length);
        await Promise.all(currentFieldPromises);
        await Promise.all(currentPopulationPromises);
        iterations++;
        if (iterations >= 100) {
            throw new Error('Infinite afterRead promise loop detected. A hook is likely adding field promises in an infinitely recursive way.');
        }
    }
    return incomingDoc;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/validations.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "array": (()=>array),
    "blocks": (()=>blocks),
    "checkbox": (()=>checkbox),
    "code": (()=>code),
    "confirmPassword": (()=>confirmPassword),
    "date": (()=>date),
    "email": (()=>email),
    "json": (()=>json),
    "number": (()=>number),
    "password": (()=>password),
    "point": (()=>point),
    "radio": (()=>radio),
    "relationship": (()=>relationship),
    "richText": (()=>richText),
    "select": (()=>select),
    "text": (()=>text),
    "textarea": (()=>textarea),
    "upload": (()=>upload),
    "username": (()=>username),
    "validations": (()=>validations)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ajv$40$8$2e$17$2e$1$2f$node_modules$2f$ajv$2f$dist$2f$ajv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ajv@8.17.1/node_modules/ajv/dist/ajv.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isValidID.js [app-rsc] (ecmascript)");
;
;
const ObjectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
;
;
const text = (value, { hasMany, maxLength: fieldMaxLength, maxRows, minLength, minRows, req: { payload: { config }, t }, required })=>{
    let maxLength;
    if (!required) {
        if (!value) {
            return true;
        }
    }
    if (hasMany === true) {
        const lengthValidationResult = validateArrayLength(value, {
            maxRows,
            minRows,
            required,
            t
        });
        if (typeof lengthValidationResult === 'string') {
            return lengthValidationResult;
        }
    }
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (typeof fieldMaxLength === 'number') {
        maxLength = fieldMaxLength;
    }
    const stringsToValidate = Array.isArray(value) ? value : [
        value
    ];
    for (const stringValue of stringsToValidate){
        const length = stringValue?.length || 0;
        if (typeof maxLength === 'number' && length > maxLength) {
            return t('validation:shorterThanMax', {
                label: t('general:value'),
                maxLength,
                stringValue
            });
        }
        if (typeof minLength === 'number' && length < minLength) {
            return t('validation:longerThanMin', {
                label: t('general:value'),
                minLength,
                stringValue
            });
        }
    }
    if (required) {
        if (!(typeof value === 'string' || Array.isArray(value)) || value?.length === 0) {
            return t('validation:required');
        }
    }
    return true;
};
const password = (value, { maxLength: fieldMaxLength, minLength = 3, req: { payload: { config }, t }, required })=>{
    let maxLength;
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (typeof fieldMaxLength === 'number') {
        maxLength = fieldMaxLength;
    }
    if (value && maxLength && value.length > maxLength) {
        return t('validation:shorterThanMax', {
            maxLength
        });
    }
    if (value && minLength && value.length < minLength) {
        return t('validation:longerThanMin', {
            minLength
        });
    }
    if (required && !value) {
        return t('validation:required');
    }
    return true;
};
const confirmPassword = (value, { req: { t }, required, siblingData })=>{
    if (required && !value) {
        return t('validation:required');
    }
    if (value && value !== siblingData.password) {
        return t('fields:passwordsDoNotMatch');
    }
    return true;
};
const email = (value, { collectionSlug, req: { payload: { collections, config }, t }, required, siblingData })=>{
    if (collectionSlug) {
        const collection = collections?.[collectionSlug]?.config ?? config.collections.find(({ slug })=>slug === collectionSlug) // If this is run on the client, `collections` will be undefined, but `config.collections` will be available
        ;
        if (collection.auth.loginWithUsername && !collection.auth.loginWithUsername?.requireUsername && !collection.auth.loginWithUsername?.requireEmail) {
            if (!value && !siblingData?.username) {
                return t('validation:required');
            }
        }
    }
    if (value && !/\S[^\s@]*@\S+\.\S+/.test(value) || !value && required) {
        return t('validation:emailAddress');
    }
    return true;
};
const username = (value, { collectionSlug, req: { payload: { collections, config }, t }, required, siblingData })=>{
    let maxLength;
    if (collectionSlug) {
        const collection = collections?.[collectionSlug]?.config ?? config.collections.find(({ slug })=>slug === collectionSlug) // If this is run on the client, `collections` will be undefined, but `config.collections` will be available
        ;
        if (collection.auth.loginWithUsername && !collection.auth.loginWithUsername?.requireUsername && !collection.auth.loginWithUsername?.requireEmail) {
            if (!value && !siblingData?.email) {
                return t('validation:required');
            }
        }
    }
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (value && maxLength && value.length > maxLength) {
        return t('validation:shorterThanMax', {
            maxLength
        });
    }
    if (!value && required) {
        return t('validation:required');
    }
    return true;
};
const textarea = (value, { maxLength: fieldMaxLength, minLength, req: { payload: { config }, t }, required })=>{
    let maxLength;
    if (typeof config?.defaultMaxTextLength === 'number') {
        maxLength = config.defaultMaxTextLength;
    }
    if (typeof fieldMaxLength === 'number') {
        maxLength = fieldMaxLength;
    }
    if (value && maxLength && value.length > maxLength) {
        return t('validation:shorterThanMax', {
            maxLength
        });
    }
    if (value && minLength && value.length < minLength) {
        return t('validation:longerThanMin', {
            minLength
        });
    }
    if (required && !value) {
        return t('validation:required');
    }
    return true;
};
const code = (value, { req: { t }, required })=>{
    if (required && value === undefined) {
        return t('validation:required');
    }
    return true;
};
const json = async (value, { jsonError, jsonSchema, req: { t }, required })=>{
    const isNotEmpty = (value)=>{
        if (value === undefined || value === null) {
            return false;
        }
        if (Array.isArray(value) && value.length === 0) {
            return false;
        }
        if (typeof value === 'object' && Object.keys(value).length === 0) {
            return false;
        }
        return true;
    };
    const fetchSchema = ({ schema, uri })=>{
        if (uri && schema) {
            return schema;
        }
        // @ts-expect-error
        return fetch(uri).then((response)=>{
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((json)=>{
            const jsonSchemaSanitizations = {
                id: undefined,
                $id: json.id,
                $schema: 'http://json-schema.org/draft-07/schema#'
            };
            return Object.assign(json, jsonSchemaSanitizations);
        });
    };
    if (required && !value) {
        return t('validation:required');
    }
    if (jsonError !== undefined) {
        return t('validation:invalidInput');
    }
    if (jsonSchema && isNotEmpty(value)) {
        try {
            jsonSchema.schema = await fetchSchema(jsonSchema);
            const { schema } = jsonSchema;
            // @ts-expect-error
            const ajv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ajv$40$8$2e$17$2e$1$2f$node_modules$2f$ajv$2f$dist$2f$ajv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]();
            if (!ajv.validate(schema, value)) {
                return t(ajv.errorsText());
            }
        } catch (error) {
            return t(error.message);
        }
    }
    return true;
};
const checkbox = (value, { req: { t }, required })=>{
    if (value && typeof value !== 'boolean' || required && typeof value !== 'boolean') {
        return t('validation:trueOrFalse');
    }
    return true;
};
const date = (value, { name, req: { t }, required, siblingData, timezone })=>{
    const validDate = value && !isNaN(Date.parse(value.toString()));
    // We need to also check for the timezone data based on this field's config
    // We cannot do this inside the timezone field validation as it's visually hidden
    const hasRequiredTimezone = timezone && required;
    const selectedTimezone = siblingData?.[`${name}_tz`];
    // Always resolve to true if the field is not required, as timezone may be optional too then
    const validTimezone = hasRequiredTimezone ? Boolean(selectedTimezone) : true;
    if (validDate && validTimezone) {
        return true;
    }
    if (validDate && !validTimezone) {
        return t('validation:timezoneRequired');
    }
    if (value) {
        return t('validation:notValidDate', {
            value
        });
    }
    if (required) {
        return t('validation:required');
    }
    return true;
};
const richText = async (value, options)=>{
    if (!options?.editor) {
        throw new Error('richText field has no editor property.');
    }
    if (typeof options?.editor === 'function') {
        throw new Error('Attempted to access unsanitized rich text editor.');
    }
    const editor = options?.editor;
    return editor.validate(value, options);
};
const validateArrayLength = (value, options)=>{
    const { maxRows, minRows, required, t } = options;
    const arrayLength = Array.isArray(value) ? value.length : value || 0;
    if (!required && arrayLength === 0) {
        return true;
    }
    if (minRows && arrayLength < minRows) {
        return t('validation:requiresAtLeast', {
            count: minRows,
            label: t('general:rows')
        });
    }
    if (maxRows && arrayLength > maxRows) {
        return t('validation:requiresNoMoreThan', {
            count: maxRows,
            label: t('general:rows')
        });
    }
    if (required && !arrayLength) {
        return t('validation:requiresAtLeast', {
            count: 1,
            label: t('general:row')
        });
    }
    return true;
};
const number = (value, { hasMany, max, maxRows, min, minRows, req: { t }, required })=>{
    if (hasMany === true) {
        const lengthValidationResult = validateArrayLength(value, {
            maxRows,
            minRows,
            required,
            t
        });
        if (typeof lengthValidationResult === 'string') {
            return lengthValidationResult;
        }
    }
    if (!value && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(value)) {
        // if no value is present, validate based on required
        if (required) {
            return t('validation:required');
        }
        if (!required) {
            return true;
        }
    }
    const numbersToValidate = Array.isArray(value) ? value : [
        value
    ];
    for (const number of numbersToValidate){
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNumber"])(number)) {
            return t('validation:enterNumber');
        }
        const numberValue = parseFloat(number);
        if (typeof max === 'number' && numberValue > max) {
            return t('validation:greaterThanMax', {
                label: t('general:value'),
                max,
                value
            });
        }
        if (typeof min === 'number' && numberValue < min) {
            return t('validation:lessThanMin', {
                label: t('general:value'),
                min,
                value
            });
        }
    }
    return true;
};
const array = (value, { maxRows, minRows, req: { t }, required })=>{
    return validateArrayLength(value, {
        maxRows,
        minRows,
        required,
        t
    });
};
const blocks = (value, { maxRows, minRows, req: { t }, required })=>{
    return validateArrayLength(value, {
        maxRows,
        minRows,
        required,
        t
    });
};
const validateFilterOptions = async (value, { id, blockData, data, filterOptions, relationTo, req, req: { payload, t, user }, siblingData })=>{
    if (typeof filterOptions !== 'undefined' && value) {
        const options = {};
        const falseCollections = [];
        const collections = !Array.isArray(relationTo) ? [
            relationTo
        ] : relationTo;
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (const collection of collections){
            try {
                let optionFilter = typeof filterOptions === 'function' ? await filterOptions({
                    id,
                    blockData,
                    data,
                    relationTo: collection,
                    req,
                    siblingData,
                    user
                }) : filterOptions;
                if (optionFilter === true) {
                    optionFilter = null;
                }
                const valueIDs = [];
                values.forEach((val)=>{
                    if (typeof val === 'object') {
                        if (val?.value) {
                            valueIDs.push(val.value);
                        } else if (ObjectId.isValid(val)) {
                            valueIDs.push(new ObjectId(val).toHexString());
                        }
                    }
                    if (typeof val === 'string' || typeof val === 'number') {
                        valueIDs.push(val);
                    }
                });
                if (valueIDs.length > 0) {
                    const findWhere = {
                        and: [
                            {
                                id: {
                                    in: valueIDs
                                }
                            }
                        ]
                    };
                    if (optionFilter && optionFilter !== true) {
                        findWhere.and.push(optionFilter);
                    }
                    if (optionFilter === false) {
                        falseCollections.push(collection);
                    }
                    const result = await payload.find({
                        collection,
                        depth: 0,
                        limit: 0,
                        pagination: false,
                        req,
                        where: findWhere
                    });
                    options[collection] = result.docs.map((doc)=>doc.id);
                } else {
                    options[collection] = [];
                }
            } catch (err) {
                req.payload.logger.error({
                    err,
                    msg: `Error validating filter options for collection ${collection}`
                });
                options[collection] = [];
            }
        }
        const invalidRelationships = values.filter((val)=>{
            let collection;
            let requestedID;
            if (typeof relationTo === 'string') {
                collection = relationTo;
                if (typeof val === 'string' || typeof val === 'number') {
                    requestedID = val;
                }
                if (typeof val === 'object' && ObjectId.isValid(val)) {
                    requestedID = new ObjectId(val).toHexString();
                }
            }
            if (Array.isArray(relationTo) && typeof val === 'object' && val?.relationTo) {
                collection = val.relationTo;
                requestedID = val.value;
            }
            if (falseCollections.find((slug)=>relationTo === slug)) {
                return true;
            }
            if (!options[collection]) {
                return true;
            }
            return options[collection].indexOf(requestedID) === -1;
        });
        if (invalidRelationships.length > 0) {
            return invalidRelationships.reduce((err, invalid, i)=>{
                return `${err} ${JSON.stringify(invalid)}${invalidRelationships.length === i + 1 ? ',' : ''} `;
            }, t('validation:invalidSelections'));
        }
        return true;
    }
    return true;
};
const upload = async (value, options)=>{
    const { event, maxRows, minRows, relationTo, req: { payload, t }, required } = options;
    if ((!value && typeof value !== 'number' || Array.isArray(value) && value.length === 0) && required) {
        return t('validation:required');
    }
    if (Array.isArray(value) && value.length > 0) {
        if (minRows && value.length < minRows) {
            return t('validation:lessThanMin', {
                label: t('general:rows'),
                min: minRows,
                value: value.length
            });
        }
        if (maxRows && value.length > maxRows) {
            return t('validation:greaterThanMax', {
                label: t('general:rows'),
                max: maxRows,
                value: value.length
            });
        }
    }
    if (typeof value !== 'undefined' && value !== null) {
        const values = Array.isArray(value) ? value : [
            value
        ];
        const invalidRelationships = values.filter((val)=>{
            let collectionSlug;
            let requestedID;
            if (typeof relationTo === 'string') {
                collectionSlug = relationTo;
                // custom id
                if (val || typeof val === 'number') {
                    requestedID = val;
                }
            }
            if (Array.isArray(relationTo) && typeof val === 'object' && val?.relationTo) {
                collectionSlug = val.relationTo;
                requestedID = val.value;
            }
            if (requestedID === null) {
                return false;
            }
            const idType = payload.collections[collectionSlug]?.customIDType || payload?.db?.defaultIDType || 'text';
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidID"])(requestedID, idType);
        });
        if (invalidRelationships.length > 0) {
            return `This relationship field has the following invalid relationships: ${invalidRelationships.map((err, invalid)=>{
                return `${err} ${JSON.stringify(invalid)}`;
            }).join(', ')}`;
        }
    }
    if (event === 'onChange') {
        return true;
    }
    return validateFilterOptions(value, options);
};
const relationship = async (value, options)=>{
    const { event, maxRows, minRows, relationTo, req: { payload, t }, required } = options;
    if ((!value && typeof value !== 'number' || Array.isArray(value) && value.length === 0) && required) {
        return t('validation:required');
    }
    if (Array.isArray(value) && value.length > 0) {
        if (minRows && value.length < minRows) {
            return t('validation:lessThanMin', {
                label: t('general:rows'),
                min: minRows,
                value: value.length
            });
        }
        if (maxRows && value.length > maxRows) {
            return t('validation:greaterThanMax', {
                label: t('general:rows'),
                max: maxRows,
                value: value.length
            });
        }
    }
    if (typeof value !== 'undefined' && value !== null) {
        const values = Array.isArray(value) ? value : [
            value
        ];
        const invalidRelationships = values.filter((val)=>{
            let collectionSlug;
            let requestedID;
            if (typeof relationTo === 'string') {
                collectionSlug = relationTo;
                // custom id
                if (val || typeof val === 'number') {
                    requestedID = val;
                }
            }
            if (Array.isArray(relationTo) && typeof val === 'object' && val?.relationTo) {
                collectionSlug = val.relationTo;
                requestedID = val.value;
            }
            if (requestedID === null) {
                return false;
            }
            const idType = payload.collections[collectionSlug]?.customIDType || payload?.db?.defaultIDType || 'text';
            return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isValidID$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidID"])(requestedID, idType);
        });
        if (invalidRelationships.length > 0) {
            return `This relationship field has the following invalid relationships: ${invalidRelationships.map((err, invalid)=>{
                return `${err} ${JSON.stringify(invalid)}`;
            }).join(', ')}`;
        }
    }
    if (event === 'onChange') {
        return true;
    }
    return validateFilterOptions(value, options);
};
const select = (value, { hasMany, options, req: { t }, required })=>{
    if (Array.isArray(value) && value.some((input)=>!options.some((option)=>option === input || typeof option !== 'string' && option?.value === input))) {
        return t('validation:invalidSelection');
    }
    if (typeof value === 'string' && !options.some((option)=>option === value || typeof option !== 'string' && option.value === value)) {
        return t('validation:invalidSelection');
    }
    if (required && (typeof value === 'undefined' || value === null || hasMany && Array.isArray(value) && value?.length === 0)) {
        return t('validation:required');
    }
    return true;
};
const radio = (value, { options, req: { t }, required })=>{
    if (value) {
        const valueMatchesOption = options.some((option)=>option === value || typeof option !== 'string' && option.value === value);
        return valueMatchesOption || t('validation:invalidSelection');
    }
    return required ? t('validation:required') : true;
};
const point = (value = [
    '',
    ''
], { req: { t }, required })=>{
    const lng = parseFloat(String(value[0]));
    const lat = parseFloat(String(value[1]));
    if (required && (value[0] && value[1] && typeof lng !== 'number' && typeof lat !== 'number' || Number.isNaN(lng) || Number.isNaN(lat) || Array.isArray(value) && value.length !== 2)) {
        return t('validation:requiresTwoNumbers');
    }
    if (value[1] && Number.isNaN(lng) || value[0] && Number.isNaN(lat)) {
        return t('validation:invalidInput');
    }
    return true;
};
const validations = {
    array,
    blocks,
    checkbox,
    code,
    confirmPassword,
    date,
    email,
    json,
    number,
    password,
    point,
    radio,
    relationship,
    richText,
    select,
    text,
    textarea,
    upload
}; //# sourceMappingURL=validations.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/sanitizeJoinField.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sanitizeJoinField": (()=>sanitizeJoinField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldJoin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidFieldJoin.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/traverseFields.js [app-rsc] (ecmascript)");
;
;
;
const sanitizeJoinField = ({ config, field, joinPath, joins })=>{
    // the `joins` arg is not passed for globals or when recursing on fields that do not allow a join field
    if (typeof joins === 'undefined') {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"]('Join fields cannot be added to arrays, blocks or globals.');
    }
    if (typeof field.maxDepth === 'undefined') {
        field.maxDepth = 1;
    }
    const join = {
        field,
        joinPath: `${joinPath ? joinPath + '.' : ''}${field.name}`,
        targetField: undefined
    };
    const joinCollection = config.collections.find((collection)=>collection.slug === field.collection);
    if (!joinCollection) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldJoin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidFieldJoin"](field);
    }
    let joinRelationship;
    const pathSegments = field.on.split('.') // Split the schema path into segments
    ;
    let currentSegmentIndex = 0;
    let localized = false;
    // Traverse fields and match based on the schema path
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        callback: ({ field, next })=>{
            if (!('name' in field) || !field.name) {
                return;
            }
            const currentSegment = pathSegments[currentSegmentIndex];
            // match field on path segments
            if ('name' in field && field.name === currentSegment) {
                if ('localized' in field && field.localized) {
                    localized = true;
                    const fieldIndex = currentSegmentIndex;
                    join.getForeignPath = ({ locale })=>{
                        return pathSegments.reduce((acc, segment, index)=>{
                            let result = `${acc}${segment}`;
                            if (index === fieldIndex) {
                                result = `${result}.${locale}`;
                            }
                            if (index !== pathSegments.length - 1) {
                                result = `${result}.`;
                            }
                            return result;
                        }, '');
                    };
                }
                // Check if this is the last segment in the path
                if (currentSegmentIndex === pathSegments.length - 1 && 'type' in field && field.type === 'relationship' || field.type === 'upload') {
                    joinRelationship = field // Return the matched field
                    ;
                    next();
                    return true;
                } else {
                    // Move to the next path segment and continue traversal
                    currentSegmentIndex++;
                }
            } else {
                // skip fields in non-matching path segments
                next();
                return;
            }
        },
        fields: joinCollection.fields
    });
    if (!joinRelationship) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldJoin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidFieldJoin"](join.field);
    }
    join.targetField = joinRelationship;
    // override the join field localized property to use whatever the relationship field has
    // or if it's nested to a localized array / blocks / tabs / group
    field.localized = localized;
    // override the join field hasMany property to use whatever the relationship field has
    field.hasMany = joinRelationship.hasMany;
    // @ts-expect-error converting JoinField to FlattenedJoinField to track targetField
    field.targetField = join.targetField;
    if (!joins[field.collection]) {
        joins[field.collection] = [
            join
        ];
    } else {
        joins[field.collection].push(join);
    }
}; //# sourceMappingURL=sanitizeJoinField.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/baseIDField.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "baseIDField": (()=>baseIDField)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)");
;
const ObjectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const baseIDField = {
    name: 'id',
    type: 'text',
    admin: {
        hidden: true
    },
    defaultValue: ()=>new ObjectId().toHexString(),
    hooks: {
        beforeChange: [
            ({ value })=>value || new ObjectId().toHexString()
        ],
        beforeDuplicate: [
            ()=>new ObjectId().toHexString()
        ]
    },
    label: 'ID'
}; //# sourceMappingURL=baseIDField.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/setDefaultBeforeDuplicate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// default beforeDuplicate hook for required and unique fields
__turbopack_esm__({
    "setDefaultBeforeDuplicate": (()=>setDefaultBeforeDuplicate)
});
const unique = ({ value })=>typeof value === 'string' ? `${value} - Copy` : undefined;
const localizedUnique = ({ req, value })=>value ? `${value} - ${req?.t('general:copy') ?? 'Copy'}` : undefined;
const uniqueRequired = ({ value })=>`${value} - Copy`;
const localizedUniqueRequired = ({ req, value })=>`${value} - ${req?.t('general:copy') ?? 'Copy'}`;
const setDefaultBeforeDuplicate = (field)=>{
    if (('required' in field && field.required || field.unique) && (!field.hooks?.beforeDuplicate || Array.isArray(field.hooks.beforeDuplicate) && field.hooks.beforeDuplicate.length === 0)) {
        if ((field.type === 'text' || field.type === 'textarea') && field.required && field.unique) {
            field.hooks.beforeDuplicate = [
                field.localized ? localizedUniqueRequired : uniqueRequired
            ];
        } else if (field.unique) {
            field.hooks.beforeDuplicate = [
                field.localized ? localizedUnique : unique
            ];
        }
    }
}; //# sourceMappingURL=setDefaultBeforeDuplicate.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/baseBlockFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "baseBlockFields": (()=>baseBlockFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseIDField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/baseIDField.js [app-rsc] (ecmascript)");
;
const baseBlockFields = [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseIDField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseIDField"],
    {
        name: 'blockName',
        type: 'text',
        admin: {
            disabled: true
        },
        label: 'Block Name',
        required: false
    }
]; //# sourceMappingURL=baseBlockFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/timezone/baseField.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "baseTimezoneField": (()=>baseTimezoneField)
});
const baseTimezoneField = ({ name, defaultValue, options, required })=>{
    return {
        name,
        type: 'select',
        admin: {
            hidden: true
        },
        defaultValue,
        options,
        required
    };
}; //# sourceMappingURL=baseField.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/sanitize.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "sanitizeFields": (()=>sanitizeFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$exports$2f$utilities$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/exports/utilities.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingFieldType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingFieldType.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidFieldName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitizeJoinField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/sanitizeJoinField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldRelationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/InvalidFieldRelationship.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseIDField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/baseIDField.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateFieldName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/DuplicateFieldName.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/validations.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$setDefaultBeforeDuplicate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/setDefaultBeforeDuplicate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+translations@3.23.0/node_modules/@payloadcms/translations/dist/utilities/deepMergeSimple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseBlockFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/baseBlockFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/timezone/defaultTimezones.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$baseField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/baseFields/timezone/baseField.js [app-rsc] (ecmascript)");
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
const sanitizeFields = async ({ config, existingFieldNames = new Set(), fields, joinPath = '', joins, parentIsLocalized, requireFieldLevelRichTextEditor = false, richTextSanitizationPromises, validRelationships })=>{
    if (!fields) {
        return [];
    }
    for(let i = 0; i < fields.length; i++){
        const field = fields[i];
        if ('_sanitized' in field && field._sanitized === true) {
            continue;
        }
        if (!field.type) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingFieldType$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingFieldType"](field);
        }
        // assert that field names do not contain forbidden characters
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name.includes('.')) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidFieldName"](field, field.name);
        }
        // Auto-label
        if ('name' in field && field.name && typeof field.label !== 'object' && typeof field.label !== 'string' && typeof field.label !== 'function' && field.label !== false) {
            field.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toWords"])(field.name);
        }
        if (field.type === 'checkbox' && typeof field.defaultValue === 'undefined' && field.required === true) {
            field.defaultValue = false;
        }
        if (field.type === 'join') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$sanitizeJoinField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeJoinField"])({
                config,
                field,
                joinPath,
                joins
            });
        }
        if (field.type === 'relationship' || field.type === 'upload') {
            if (validRelationships) {
                const relationships = Array.isArray(field.relationTo) ? field.relationTo : [
                    field.relationTo
                ];
                relationships.forEach((relationship)=>{
                    if (!validRelationships.includes(relationship)) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$InvalidFieldRelationship$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvalidFieldRelationship"](field, relationship);
                    }
                });
            }
            if (field.min && !field.minRows) {
                console.warn(`(payload): The "min" property is deprecated for the Relationship field "${field.name}" and will be removed in a future version. Please use "minRows" instead.`);
                field.minRows = field.min;
            }
            if (field.max && !field.maxRows) {
                console.warn(`(payload): The "max" property is deprecated for the Relationship field "${field.name}" and will be removed in a future version. Please use "maxRows" instead.`);
                field.maxRows = field.max;
            }
        }
        if (field.type === 'upload') {
            if (!field.admin || !('isSortable' in field.admin)) {
                field.admin = {
                    isSortable: true,
                    ...field.admin
                };
            }
        }
        if (field.type === 'array' && field.fields) {
            field.fields.push(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseIDField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseIDField"]);
        }
        if ((field.type === 'blocks' || field.type === 'array') && field.label) {
            field.labels = field.labels || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLabels"])(field.name);
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
            if (existingFieldNames.has(field.name)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateFieldName$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DuplicateFieldName"](field.name);
            } else if (![
                'blockName',
                'id'
            ].includes(field.name)) {
                existingFieldNames.add(field.name);
            }
            if (typeof field.localized !== 'undefined') {
                let shouldDisableLocalized = !config.localization;
                if (!config.compatibility?.allowLocalizedWithinLocalized && parentIsLocalized) {
                    shouldDisableLocalized = true;
                }
                if (shouldDisableLocalized) {
                    delete field.localized;
                }
            }
            if (typeof field.validate === 'undefined') {
                const defaultValidate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$validations$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["validations"][field.type];
                if (defaultValidate) {
                    field.validate = (val, options)=>defaultValidate(val, {
                            ...field,
                            ...options
                        });
                } else {
                    field.validate = ()=>true;
                }
            }
            if (!field.hooks) {
                field.hooks = {};
            }
            if (!field.access) {
                field.access = {};
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$setDefaultBeforeDuplicate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDefaultBeforeDuplicate"])(field);
        }
        if (!field.admin) {
            field.admin = {};
        }
        // Make sure that the richText field has an editor
        if (field.type === 'richText') {
            const sanitizeRichText = async (_config)=>{
                if (!field.editor) {
                    if (_config.editor && !requireFieldLevelRichTextEditor) {
                        // config.editor should be sanitized at this point
                        field.editor = _config.editor;
                    } else {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                        ;
                    }
                }
                if (typeof field.editor === 'function') {
                    field.editor = await field.editor({
                        config: _config,
                        isRoot: requireFieldLevelRichTextEditor,
                        parentIsLocalized: parentIsLocalized || field.localized
                    });
                }
                if (field.editor.i18n && Object.keys(field.editor.i18n).length >= 0) {
                    config.i18n.translations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$translations$40$3$2e$23$2e$0$2f$node_modules$2f40$payloadcms$2f$translations$2f$dist$2f$utilities$2f$deepMergeSimple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepMergeSimple"])(config.i18n.translations, field.editor.i18n);
                }
            };
            if (richTextSanitizationPromises) {
                richTextSanitizationPromises.push(sanitizeRichText);
            } else {
                await sanitizeRichText(config);
            }
        }
        if (field.type === 'blocks' && field.blocks) {
            for (const block of field.blocks){
                if (block._sanitized === true) {
                    continue;
                }
                block._sanitized = true;
                block.fields = block.fields.concat(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$baseBlockFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseBlockFields"]);
                block.labels = !block.labels ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatLabels"])(block.slug) : block.labels;
                block.fields = await sanitizeFields({
                    config,
                    existingFieldNames: new Set(),
                    fields: block.fields,
                    parentIsLocalized: parentIsLocalized || field.localized,
                    requireFieldLevelRichTextEditor,
                    richTextSanitizationPromises,
                    validRelationships
                });
            }
        }
        if ('fields' in field && field.fields) {
            field.fields = await sanitizeFields({
                config,
                existingFieldNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? new Set() : existingFieldNames,
                fields: field.fields,
                joinPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? `${joinPath ? joinPath + '.' : ''}${field.name}` : joinPath,
                joins,
                parentIsLocalized: parentIsLocalized || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsLocalized"])(field),
                requireFieldLevelRichTextEditor,
                richTextSanitizationPromises,
                validRelationships
            });
        }
        if (field.type === 'tabs') {
            for(let j = 0; j < field.tabs.length; j++){
                const tab = field.tabs[j];
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) && typeof tab.label === 'undefined') {
                    tab.label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toWords"])(tab.name);
                }
                tab.fields = await sanitizeFields({
                    config,
                    existingFieldNames: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? new Set() : existingFieldNames,
                    fields: tab.fields,
                    joinPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) ? `${joinPath ? joinPath + '.' : ''}${tab.name}` : joinPath,
                    joins,
                    parentIsLocalized: parentIsLocalized || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab) && tab.localized,
                    requireFieldLevelRichTextEditor,
                    richTextSanitizationPromises,
                    validRelationships
                });
                field.tabs[j] = tab;
            }
        }
        if (field.type === 'ui' && typeof field.admin.disableBulkEdit === 'undefined') {
            field.admin.disableBulkEdit = true;
        }
        if ('_sanitized' in field) {
            field._sanitized = true;
        }
        fields[i] = field;
        // Insert our field after assignment
        if (field.type === 'date' && field.timezone) {
            const name = field.name + '_tz';
            const defaultTimezone = config.admin.timezones.defaultTimezone;
            const supportedTimezones = config.admin.timezones.supportedTimezones;
            const options = typeof supportedTimezones === 'function' ? supportedTimezones({
                defaultTimezones: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$defaultTimezones$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defaultTimezones"]
            }) : supportedTimezones;
            // Need to set the options here manually so that any database enums are generated correctly
            // The UI component will import the options from the config
            const timezoneField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$baseFields$2f$timezone$2f$baseField$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseTimezoneField"])({
                name,
                defaultValue: defaultTimezone,
                options,
                required: field.required
            });
            fields.splice(++i, 0, timezoneField);
        }
    }
    return fields;
}; //# sourceMappingURL=sanitize.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/runHook.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "runBeforeDuplicateHooks": (()=>runBeforeDuplicateHooks)
});
const runBeforeDuplicateHooks = async (args)=>await args.field.hooks.beforeDuplicate.reduce(async (priorHook, currentHook)=>{
        await priorHook;
        return await currentHook(args);
    }, Promise.resolve()); //# sourceMappingURL=runHook.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "promise": (()=>promise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$runHook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/runHook.js [app-rsc] (ecmascript)");
;
;
;
;
const promise = async ({ id, blockData, collection, context, doc, field, fieldIndex, overrideAccess, parentIndexPath, parentPath, parentSchemaPath, req, siblingDoc })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const { localization } = req.payload.config;
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        let fieldData = siblingDoc?.[field.name];
        const fieldIsLocalized = field.localized && localization;
        // Run field beforeDuplicate hooks
        if (Array.isArray(field.hooks?.beforeDuplicate)) {
            if (fieldIsLocalized) {
                const localeData = await localization.localeCodes.reduce(async (localizedValuesPromise, locale)=>{
                    const localizedValues = await localizedValuesPromise;
                    const beforeDuplicateArgs = {
                        blockData,
                        collection,
                        context,
                        data: doc,
                        field,
                        global: undefined,
                        indexPath: indexPathSegments,
                        path: pathSegments,
                        previousSiblingDoc: siblingDoc,
                        previousValue: siblingDoc[field.name]?.[locale],
                        req,
                        schemaPath: schemaPathSegments,
                        siblingData: siblingDoc,
                        siblingDocWithLocales: siblingDoc,
                        value: siblingDoc[field.name]?.[locale]
                    };
                    const hookResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$runHook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runBeforeDuplicateHooks"])(beforeDuplicateArgs);
                    if (typeof hookResult !== 'undefined') {
                        return {
                            ...localizedValues,
                            [locale]: hookResult
                        };
                    }
                    return localizedValuesPromise;
                }, Promise.resolve({}));
                siblingDoc[field.name] = localeData;
            } else {
                const beforeDuplicateArgs = {
                    blockData,
                    collection,
                    context,
                    data: doc,
                    field,
                    global: undefined,
                    indexPath: indexPathSegments,
                    path: pathSegments,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData: siblingDoc,
                    siblingDocWithLocales: siblingDoc,
                    value: siblingDoc[field.name]
                };
                const hookResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$runHook$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["runBeforeDuplicateHooks"])(beforeDuplicateArgs);
                if (typeof hookResult !== 'undefined') {
                    siblingDoc[field.name] = hookResult;
                }
            }
        }
        // First, for any localized fields, we will loop over locales
        // and if locale data is present, traverse the sub fields.
        // There are only a few different fields where this is possible.
        if (fieldIsLocalized) {
            if (typeof fieldData !== 'object' || fieldData === null) {
                siblingDoc[field.name] = {};
                fieldData = siblingDoc[field.name];
            }
            const promises = [];
            localization.localeCodes.forEach((locale)=>{
                if (fieldData[locale]) {
                    switch(field.type){
                        case 'array':
                            {
                                const rows = fieldData[locale];
                                if (Array.isArray(rows)) {
                                    const promises = [];
                                    rows.forEach((row, rowIndex)=>{
                                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                            id,
                                            blockData,
                                            collection,
                                            context,
                                            doc,
                                            fields: field.fields,
                                            overrideAccess,
                                            parentIndexPath: '',
                                            parentPath: path + '.' + rowIndex,
                                            parentSchemaPath: schemaPath,
                                            req,
                                            siblingDoc: row
                                        }));
                                    });
                                }
                                break;
                            }
                        case 'blocks':
                            {
                                const rows = fieldData[locale];
                                if (Array.isArray(rows)) {
                                    const promises = [];
                                    rows.forEach((row, rowIndex)=>{
                                        const blockTypeToMatch = row.blockType;
                                        const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                            id,
                                            blockData: row,
                                            collection,
                                            context,
                                            doc,
                                            fields: block.fields,
                                            overrideAccess,
                                            parentIndexPath: '',
                                            parentPath: path + '.' + rowIndex,
                                            parentSchemaPath: schemaPath + '.' + block.slug,
                                            req,
                                            siblingDoc: row
                                        }));
                                    });
                                }
                                break;
                            }
                        case 'group':
                        case 'tab':
                            {
                                promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                    id,
                                    blockData,
                                    collection,
                                    context,
                                    doc,
                                    fields: field.fields,
                                    overrideAccess,
                                    parentIndexPath: '',
                                    parentPath: path,
                                    parentSchemaPath: schemaPath,
                                    req,
                                    siblingDoc: fieldData[locale]
                                }));
                                break;
                            }
                    }
                }
            });
            await Promise.all(promises);
        } else {
            // If the field is not localized, but it affects data,
            // we need to further traverse its children
            // so the child fields can run beforeDuplicate hooks
            switch(field.type){
                case 'array':
                    {
                        const rows = siblingDoc[field.name];
                        if (Array.isArray(rows)) {
                            const promises = [];
                            rows.forEach((row, rowIndex)=>{
                                promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                    id,
                                    blockData,
                                    collection,
                                    context,
                                    doc,
                                    fields: field.fields,
                                    overrideAccess,
                                    parentIndexPath: '',
                                    parentPath: path + '.' + rowIndex,
                                    parentSchemaPath: schemaPath,
                                    req,
                                    siblingDoc: row
                                }));
                            });
                            await Promise.all(promises);
                        }
                        break;
                    }
                case 'blocks':
                    {
                        const rows = siblingDoc[field.name];
                        if (Array.isArray(rows)) {
                            const promises = [];
                            rows.forEach((row, rowIndex)=>{
                                const blockTypeToMatch = row.blockType;
                                const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                                if (block) {
                                    ;
                                    row.blockType = blockTypeToMatch;
                                    promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                        id,
                                        blockData: row,
                                        collection,
                                        context,
                                        doc,
                                        fields: block.fields,
                                        overrideAccess,
                                        parentIndexPath: '',
                                        parentPath: path + '.' + rowIndex,
                                        parentSchemaPath: schemaPath + '.' + block.slug,
                                        req,
                                        siblingDoc: row
                                    }));
                                }
                            });
                            await Promise.all(promises);
                        }
                        break;
                    }
                case 'group':
                    {
                        if (typeof siblingDoc[field.name] !== 'object') {
                            siblingDoc[field.name] = {};
                        }
                        const groupDoc = siblingDoc[field.name];
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            doc,
                            fields: field.fields,
                            overrideAccess,
                            parentIndexPath: '',
                            parentPath: path,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingDoc: groupDoc
                        });
                        break;
                    }
                case 'tab':
                    {
                        if (typeof siblingDoc[field.name] !== 'object') {
                            siblingDoc[field.name] = {};
                        }
                        const tabDoc = siblingDoc[field.name];
                        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            doc,
                            fields: field.fields,
                            overrideAccess,
                            parentIndexPath: '',
                            parentPath: path,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingDoc: tabDoc
                        });
                        break;
                    }
            }
        }
    } else {
        // Finally, we traverse fields which do not affect data here
        switch(field.type){
            case 'collapsible':
            case 'row':
                {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                        id,
                        blockData,
                        collection,
                        context,
                        doc,
                        fields: field.fields,
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentPath,
                        parentSchemaPath: schemaPath,
                        req,
                        siblingDoc
                    });
                    break;
                }
            // Unnamed Tab
            // @ts-expect-error `fieldAffectsData` inferred return type doesn't account for TabAsField
            case 'tab':
                {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                        id,
                        blockData,
                        collection,
                        context,
                        doc,
                        // @ts-expect-error `fieldAffectsData` inferred return type doesn't account for TabAsField
                        fields: field.fields,
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentPath,
                        parentSchemaPath: schemaPath,
                        req,
                        siblingDoc
                    });
                    break;
                }
            case 'tabs':
                {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                        id,
                        blockData,
                        collection,
                        context,
                        doc,
                        fields: field.tabs.map((tab)=>({
                                ...tab,
                                type: 'tab'
                            })),
                        overrideAccess,
                        parentIndexPath: indexPath,
                        parentPath: path,
                        parentSchemaPath: schemaPath,
                        req,
                        siblingDoc
                    });
                    break;
                }
            default:
                {
                    break;
                }
        }
    }
}; //# sourceMappingURL=promise.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/promise.js [app-rsc] (ecmascript)");
;
const traverseFields = async ({ id, blockData, collection, context, doc, fields, overrideAccess, parentIndexPath, parentPath, parentSchemaPath, req, siblingDoc })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"])({
            id,
            blockData,
            collection,
            context,
            doc,
            field,
            fieldIndex,
            overrideAccess,
            parentIndexPath,
            parentPath,
            parentSchemaPath,
            req,
            siblingDoc
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "beforeDuplicate": (()=>beforeDuplicate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeDuplicate/traverseFields.js [app-rsc] (ecmascript)");
;
const beforeDuplicate = async ({ id, collection, context, doc, overrideAccess, req })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeDuplicate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        id,
        collection,
        context,
        doc,
        fields: collection?.fields,
        overrideAccess,
        parentIndexPath: '',
        parentPath: '',
        parentSchemaPath: '',
        req,
        siblingDoc: doc
    });
    return doc;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/cloneDataFromOriginalDoc.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cloneDataFromOriginalDoc": (()=>cloneDataFromOriginalDoc)
});
const cloneDataFromOriginalDoc = (originalDocData)=>{
    if (Array.isArray(originalDocData)) {
        return originalDocData.map((row)=>{
            if (typeof row === 'object' && row != null) {
                return {
                    ...row
                };
            }
            return row;
        });
    }
    if (typeof originalDocData === 'object' && originalDocData !== null) {
        return {
            ...originalDocData
        };
    }
    return originalDocData;
}; //# sourceMappingURL=cloneDataFromOriginalDoc.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/getExistingRowDoc.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * If there is an incoming row id,
 * and it matches the existing sibling doc id,
 * this is an existing row, so it should be merged.
 * Otherwise, return an empty object.
 */ __turbopack_esm__({
    "getExistingRowDoc": (()=>getExistingRowDoc)
});
const getExistingRowDoc = (incomingRow, existingRows)=>{
    if (incomingRow.id && Array.isArray(existingRows)) {
        const matchedExistingRow = existingRows.find((existingRow)=>{
            if (typeof existingRow === 'object' && 'id' in existingRow) {
                if (existingRow.id === incomingRow.id) {
                    return existingRow;
                }
            }
            return false;
        });
        if (matchedExistingRow) {
            return matchedExistingRow;
        }
    }
    return {};
}; //# sourceMappingURL=getExistingRowDoc.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "promise": (()=>promise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getDefaultValue.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$cloneDataFromOriginalDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/cloneDataFromOriginalDoc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/getExistingRowDoc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const promise = async ({ id, blockData, collection, context, data, doc, field, fieldIndex, global, operation, overrideAccess, parentIndexPath, parentPath, parentSchemaPath, req, siblingData, siblingDoc })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        if (field.name === 'id') {
            if (field.type === 'number' && typeof siblingData[field.name] === 'string') {
                const value = siblingData[field.name];
                siblingData[field.name] = parseFloat(value);
            }
            if (field.type === 'text' && typeof siblingData[field.name]?.toString === 'function' && typeof siblingData[field.name] !== 'string') {
                siblingData[field.name] = siblingData[field.name].toString();
            }
        }
        // Sanitize incoming data
        switch(field.type){
            case 'array':
            case 'blocks':
                {
                    // Handle cases of arrays being intentionally set to 0
                    if (siblingData[field.name] === '0' || siblingData[field.name] === 0) {
                        siblingData[field.name] = [];
                    }
                    break;
                }
            case 'checkbox':
                {
                    if (siblingData[field.name] === 'true') {
                        siblingData[field.name] = true;
                    }
                    if (siblingData[field.name] === 'false') {
                        siblingData[field.name] = false;
                    }
                    if (siblingData[field.name] === '') {
                        siblingData[field.name] = false;
                    }
                    break;
                }
            case 'number':
                {
                    if (typeof siblingData[field.name] === 'string') {
                        const value = siblingData[field.name];
                        const trimmed = value.trim();
                        siblingData[field.name] = trimmed.length === 0 ? null : parseFloat(trimmed);
                    }
                    break;
                }
            case 'point':
                {
                    if (Array.isArray(siblingData[field.name])) {
                        siblingData[field.name] = siblingData[field.name].map((coordinate, i)=>{
                            if (typeof coordinate === 'string') {
                                const value = siblingData[field.name][i];
                                const trimmed = value.trim();
                                return trimmed.length === 0 ? null : parseFloat(trimmed);
                            }
                            return coordinate;
                        });
                    }
                    break;
                }
            case 'relationship':
            case 'upload':
                {
                    if (siblingData[field.name] === '' || siblingData[field.name] === 'none' || siblingData[field.name] === 'null' || siblingData[field.name] === null) {
                        if (field.hasMany === true) {
                            siblingData[field.name] = [];
                        } else {
                            siblingData[field.name] = null;
                        }
                    }
                    const value = siblingData[field.name];
                    if (Array.isArray(field.relationTo)) {
                        if (Array.isArray(value)) {
                            value.forEach((relatedDoc, i)=>{
                                const relatedCollection = req.payload.collections?.[relatedDoc.relationTo]?.config;
                                if (typeof relatedDoc.value === 'object' && relatedDoc.value && 'id' in relatedDoc.value) {
                                    relatedDoc.value = relatedDoc.value.id;
                                }
                                if (relatedCollection?.fields) {
                                    const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                    if (relationshipIDField?.type === 'number') {
                                        siblingData[field.name][i] = {
                                            ...relatedDoc,
                                            value: parseFloat(relatedDoc.value)
                                        };
                                    }
                                }
                            });
                        }
                        if (field.hasMany !== true && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["valueIsValueWithRelation"])(value)) {
                            const relatedCollection = req.payload.collections?.[value.relationTo]?.config;
                            if (typeof value.value === 'object' && value.value && 'id' in value.value) {
                                value.value = value.value.id;
                            }
                            if (relatedCollection?.fields) {
                                const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                if (relationshipIDField?.type === 'number') {
                                    siblingData[field.name] = {
                                        ...value,
                                        value: parseFloat(value.value)
                                    };
                                }
                            }
                        }
                    } else {
                        if (Array.isArray(value)) {
                            value.forEach((relatedDoc, i)=>{
                                const relatedCollection = Array.isArray(field.relationTo) ? undefined : req.payload.collections?.[field.relationTo]?.config;
                                if (typeof relatedDoc === 'object' && relatedDoc && 'id' in relatedDoc) {
                                    value[i] = relatedDoc.id;
                                }
                                if (relatedCollection?.fields) {
                                    const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                    if (relationshipIDField?.type === 'number') {
                                        siblingData[field.name][i] = parseFloat(relatedDoc);
                                    }
                                }
                            });
                        }
                        if (field.hasMany !== true && value) {
                            const relatedCollection = req.payload.collections?.[field.relationTo]?.config;
                            if (typeof value === 'object' && value && 'id' in value) {
                                siblingData[field.name] = value.id;
                            }
                            if (relatedCollection?.fields) {
                                const relationshipIDField = relatedCollection.fields.find((collectionField)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(collectionField) && collectionField.name === 'id');
                                if (relationshipIDField?.type === 'number') {
                                    siblingData[field.name] = parseFloat(value);
                                }
                            }
                        }
                    }
                    break;
                }
            case 'richText':
                {
                    if (typeof siblingData[field.name] === 'string') {
                        try {
                            const richTextJSON = JSON.parse(siblingData[field.name]);
                            siblingData[field.name] = richTextJSON;
                        } catch  {
                        // Disregard this data as it is not valid.
                        // Will be reported to user by field validation
                        }
                    }
                    break;
                }
            default:
                {
                    break;
                }
        }
        // Execute hooks
        if (field.hooks?.beforeValidate) {
            await field.hooks.beforeValidate.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const hookedValue = await currentHook({
                    blockData,
                    collection,
                    context,
                    data,
                    field,
                    global,
                    indexPath: indexPathSegments,
                    operation,
                    originalDoc: doc,
                    overrideAccess,
                    path: pathSegments,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData,
                    value: siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
        // Execute access control
        if (field.access && field.access[operation]) {
            const result = overrideAccess ? true : await field.access[operation]({
                id,
                blockData,
                data,
                doc,
                req,
                siblingData
            });
            if (!result) {
                delete siblingData[field.name];
            }
        }
        if (typeof siblingData[field.name] === 'undefined') {
            // If no incoming data, but existing document data is found, merge it in
            if (typeof siblingDoc[field.name] !== 'undefined') {
                siblingData[field.name] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$cloneDataFromOriginalDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cloneDataFromOriginalDoc"])(siblingDoc[field.name]);
            // Otherwise compute default value
            } else if (typeof field.defaultValue !== 'undefined') {
                siblingData[field.name] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getDefaultValue$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultValue"])({
                    defaultValue: field.defaultValue,
                    locale: req.locale,
                    req,
                    user: req.user,
                    value: siblingData[field.name]
                });
            }
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            data,
                            doc,
                            fields: field.fields,
                            global,
                            operation,
                            overrideAccess,
                            parentIndexPath: '',
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingData: row,
                            siblingDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name])
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
                    rows.forEach((row, rowIndex)=>{
                        const rowSiblingDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name]);
                        const blockTypeToMatch = row.blockType || rowSiblingDoc.blockType;
                        const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                        if (block) {
                            ;
                            row.blockType = blockTypeToMatch;
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                id,
                                blockData: row,
                                collection,
                                context,
                                data,
                                doc,
                                fields: block.fields,
                                global,
                                operation,
                                overrideAccess,
                                parentIndexPath: '',
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                req,
                                siblingData: row,
                                siblingDoc: rowSiblingDoc
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc
                });
                break;
            }
        case 'group':
            {
                if (typeof siblingData[field.name] !== 'object') {
                    siblingData[field.name] = {};
                }
                if (typeof siblingDoc[field.name] !== 'object') {
                    siblingDoc[field.name] = {};
                }
                const groupData = siblingData[field.name];
                const groupDoc = siblingDoc[field.name];
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: '',
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: groupData,
                    siblingDoc: groupDoc
                });
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.beforeValidate?.length) {
                    await editor.hooks.beforeValidate.reduce(async (priorHook, currentHook)=>{
                        await priorHook;
                        const hookedValue = await currentHook({
                            collection,
                            context,
                            data,
                            field,
                            global,
                            indexPath: indexPathSegments,
                            operation,
                            originalDoc: doc,
                            overrideAccess,
                            path: pathSegments,
                            previousSiblingDoc: siblingDoc,
                            previousValue: siblingData[field.name],
                            req,
                            schemaPath: schemaPathSegments,
                            siblingData,
                            value: siblingData[field.name]
                        });
                        if (hookedValue !== undefined) {
                            siblingData[field.name] = hookedValue;
                        }
                    }, Promise.resolve());
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData;
                let tabSiblingDoc;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                } else {
                    tabSiblingData = siblingData;
                    tabSiblingDoc = siblingDoc;
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    operation,
                    overrideAccess,
                    parentIndexPath: indexPath,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc
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
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/promise.js [app-rsc] (ecmascript)");
;
const traverseFields = async ({ id, blockData, collection, context, data, doc, fields, global, operation, overrideAccess, parentIndexPath, parentPath, parentSchemaPath, req, siblingData, siblingDoc })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"])({
            id,
            blockData,
            collection,
            context,
            data,
            doc,
            field,
            fieldIndex,
            global,
            operation,
            overrideAccess,
            parentIndexPath,
            parentPath,
            parentSchemaPath,
            req,
            siblingData,
            siblingDoc
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "beforeValidate": (()=>beforeValidate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-rsc] (ecmascript)");
;
const beforeValidate = async ({ id, collection, context, data: incomingData, doc, global, operation, overrideAccess, req })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        id,
        collection,
        context,
        data: incomingData,
        doc,
        fields: collection?.fields || global?.fields,
        global,
        operation,
        overrideAccess,
        parentIndexPath: '',
        parentPath: '',
        parentSchemaPath: '',
        req,
        siblingData: incomingData,
        siblingDoc: doc
    });
    return incomingData;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "promise": (()=>promise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepMerge.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getTranslatedLabel.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getLabelFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getLabelFromPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/getExistingRowDoc.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const promise = async ({ id, blockData, collection, context, data, doc, docWithLocales, errors, field, fieldIndex, global, mergeLocaleActions, operation, parentIndexPath, parentPath, parentSchemaPath, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const passesCondition = field.admin?.condition ? Boolean(field.admin.condition(data, siblingData, {
        blockData,
        user: req.user
    })) : true;
    let skipValidationFromHere = skipValidation || !passesCondition;
    const { localization } = req.payload.config;
    const defaultLocale = localization ? localization?.defaultLocale : 'en';
    const operationLocale = req.locale || defaultLocale;
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        // skip validation if the field is localized and the incoming data is null
        if (field.localized && operationLocale !== defaultLocale) {
            if ([
                'array',
                'blocks'
            ].includes(field.type) && siblingData[field.name] === null) {
                skipValidationFromHere = true;
            }
        }
        // Execute hooks
        if (field.hooks?.beforeChange) {
            await field.hooks.beforeChange.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const hookedValue = await currentHook({
                    blockData,
                    collection,
                    context,
                    data,
                    field,
                    global,
                    indexPath: indexPathSegments,
                    operation,
                    originalDoc: doc,
                    path: pathSegments,
                    previousSiblingDoc: siblingDoc,
                    previousValue: siblingDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData,
                    siblingDocWithLocales,
                    value: siblingData[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingData[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
        // Validate
        if (!skipValidationFromHere && 'validate' in field && field.validate) {
            const valueToValidate = siblingData[field.name];
            let jsonError;
            if (field.type === 'json' && typeof siblingData[field.name] === 'string') {
                try {
                    JSON.parse(siblingData[field.name]);
                } catch (e) {
                    jsonError = e;
                }
            }
            const validateFn = field.validate;
            const validationResult = await validateFn(valueToValidate, {
                ...field,
                id,
                blockData,
                collectionSlug: collection?.slug,
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepMergeWithSourceArrays"])(doc, data),
                event: 'submit',
                // @ts-expect-error
                jsonError,
                operation,
                preferences: {
                    fields: {}
                },
                previousValue: siblingDoc[field.name],
                req,
                siblingData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepMergeWithSourceArrays"])(siblingDoc, siblingData)
            });
            if (typeof validationResult === 'string') {
                const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getTranslatedLabel$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslatedLabel"])(field?.label || field?.name, req.i18n);
                const parentPathSegments = parentPath ? parentPath.split('.') : [];
                const fieldLabel = Array.isArray(parentPathSegments) && parentPathSegments.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getLabelFromPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLabelFromPath"])(parentPathSegments.concat(label)) : label;
                errors.push({
                    label: fieldLabel,
                    message: validationResult,
                    path
                });
            }
        }
        // Push merge locale action if applicable
        if (localization && field.localized) {
            mergeLocaleActions.push(async ()=>{
                const localeData = await localization.localeCodes.reduce(async (localizedValuesPromise, locale)=>{
                    const localizedValues = await localizedValuesPromise;
                    const fieldValue = locale === req.locale ? siblingData[field.name] : siblingDocWithLocales?.[field.name]?.[locale];
                    // const result = await localizedValues
                    // update locale value if it's not undefined
                    if (typeof fieldValue !== 'undefined') {
                        return {
                            ...localizedValues,
                            [locale]: fieldValue
                        };
                    }
                    return localizedValuesPromise;
                }, Promise.resolve({}));
                // If there are locales with data, set the data
                if (Object.keys(localeData).length > 0) {
                    siblingData[field.name] = localeData;
                }
            });
        }
    }
    switch(field.type){
        case 'array':
            {
                const rows = siblingData[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                            id,
                            blockData,
                            collection,
                            context,
                            data,
                            doc,
                            docWithLocales,
                            errors,
                            fields: field.fields,
                            global,
                            mergeLocaleActions,
                            operation,
                            parentIndexPath: '',
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            req,
                            siblingData: row,
                            siblingDoc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name]),
                            siblingDocWithLocales: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDocWithLocales[field.name]),
                            skipValidation: skipValidationFromHere
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
                    rows.forEach((row, rowIndex)=>{
                        const rowSiblingDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDoc[field.name]);
                        const rowSiblingDocWithLocales = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$getExistingRowDoc$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getExistingRowDoc"])(row, siblingDocWithLocales ? siblingDocWithLocales[field.name] : {});
                        const blockTypeToMatch = row.blockType || rowSiblingDoc.blockType;
                        const block = field.blocks.find((blockType)=>blockType.slug === blockTypeToMatch);
                        if (block) {
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                id,
                                blockData: row,
                                collection,
                                context,
                                data,
                                doc,
                                docWithLocales,
                                errors,
                                fields: block.fields,
                                global,
                                mergeLocaleActions,
                                operation,
                                parentIndexPath: '',
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                req,
                                siblingData: row,
                                siblingDoc: rowSiblingDoc,
                                siblingDocWithLocales: rowSiblingDocWithLocales,
                                skipValidation: skipValidationFromHere
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    parentIndexPath: indexPath,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'group':
            {
                if (typeof siblingData[field.name] !== 'object') {
                    siblingData[field.name] = {};
                }
                if (typeof siblingDoc[field.name] !== 'object') {
                    siblingDoc[field.name] = {};
                }
                if (typeof siblingDocWithLocales[field.name] !== 'object') {
                    siblingDocWithLocales[field.name] = {};
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    parentIndexPath: '',
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: siblingData[field.name],
                    siblingDoc: siblingDoc[field.name],
                    siblingDocWithLocales: siblingDocWithLocales[field.name],
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'point':
            {
                // Transform point data for storage
                if (Array.isArray(siblingData[field.name]) && siblingData[field.name][0] !== null && siblingData[field.name][1] !== null) {
                    siblingData[field.name] = {
                        type: 'Point',
                        coordinates: [
                            parseFloat(siblingData[field.name][0]),
                            parseFloat(siblingData[field.name][1])
                        ]
                    };
                }
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.beforeChange?.length) {
                    await editor.hooks.beforeChange.reduce(async (priorHook, currentHook)=>{
                        await priorHook;
                        const hookedValue = await currentHook({
                            collection,
                            context,
                            data,
                            docWithLocales,
                            errors,
                            field,
                            global,
                            indexPath: indexPathSegments,
                            mergeLocaleActions,
                            operation,
                            originalDoc: doc,
                            path: pathSegments,
                            previousSiblingDoc: siblingDoc,
                            previousValue: siblingDoc[field.name],
                            req,
                            schemaPath: schemaPathSegments,
                            siblingData,
                            siblingDocWithLocales,
                            skipValidation,
                            value: siblingData[field.name]
                        });
                        if (hookedValue !== undefined) {
                            siblingData[field.name] = hookedValue;
                        }
                    }, Promise.resolve());
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData = siblingData;
                let tabSiblingDoc = siblingDoc;
                let tabSiblingDocWithLocales = siblingDocWithLocales;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    if (typeof siblingData[field.name] !== 'object') {
                        siblingData[field.name] = {};
                    }
                    if (typeof siblingDoc[field.name] !== 'object') {
                        siblingDoc[field.name] = {};
                    }
                    if (typeof siblingDocWithLocales[field.name] !== 'object') {
                        siblingDocWithLocales[field.name] = {};
                    }
                    tabSiblingData = siblingData[field.name];
                    tabSiblingDoc = siblingDoc[field.name];
                    tabSiblingDocWithLocales = siblingDocWithLocales[field.name];
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.fields,
                    global,
                    mergeLocaleActions,
                    operation,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc,
                    siblingDocWithLocales: tabSiblingDocWithLocales,
                    skipValidation: skipValidationFromHere
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    id,
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    docWithLocales,
                    errors,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    mergeLocaleActions,
                    operation,
                    parentIndexPath: indexPath,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    req,
                    siblingData,
                    siblingDoc,
                    siblingDocWithLocales,
                    skipValidation: skipValidationFromHere
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
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/promise.js [app-rsc] (ecmascript)");
;
const traverseFields = async ({ id, blockData, collection, context, data, doc, docWithLocales, errors, fields, global, mergeLocaleActions, operation, parentIndexPath, parentPath, parentSchemaPath, req, siblingData, siblingDoc, siblingDocWithLocales, skipValidation })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"])({
            id,
            blockData,
            collection,
            context,
            data,
            doc,
            docWithLocales,
            errors,
            field,
            fieldIndex,
            global,
            mergeLocaleActions,
            operation,
            parentIndexPath,
            parentPath,
            parentSchemaPath,
            req,
            siblingData,
            siblingDoc,
            siblingDocWithLocales,
            skipValidation
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "beforeChange": (()=>beforeChange)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/ValidationError.js [app-rsc] (ecmascript)");
;
;
;
const beforeChange = async ({ id, collection, context, data: incomingData, doc, docWithLocales, global, operation, req, skipValidation })=>{
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObjectSimple"])(incomingData);
    const mergeLocaleActions = [];
    const errors = [];
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        id,
        collection,
        context,
        data,
        doc,
        docWithLocales,
        errors,
        fields: collection?.fields || global?.fields,
        global,
        mergeLocaleActions,
        operation,
        parentIndexPath: '',
        parentPath: '',
        parentSchemaPath: '',
        req,
        siblingData: data,
        siblingDoc: doc,
        siblingDocWithLocales: docWithLocales,
        skipValidation
    });
    if (errors.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationError"]({
            id,
            collection: collection?.slug,
            errors,
            global: global?.slug
        }, req.t);
    }
    await mergeLocaleActions.reduce(async (priorAction, action)=>{
        await priorAction;
        await action();
    }, Promise.resolve());
    return data;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/promise.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "promise": (()=>promise)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/getFieldPaths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
;
;
;
;
const promise = async ({ blockData, collection, context, data, doc, field, fieldIndex, global, operation, parentIndexPath, parentPath, parentSchemaPath, previousDoc, previousSiblingDoc, req, siblingData, siblingDoc })=>{
    const { indexPath, path, schemaPath } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$getFieldPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFieldPathsModified"])({
        field,
        index: fieldIndex,
        parentIndexPath,
        parentPath,
        parentSchemaPath
    });
    const pathSegments = path ? path.split('.') : [];
    const schemaPathSegments = schemaPath ? schemaPath.split('.') : [];
    const indexPathSegments = indexPath ? indexPath.split('-').filter(Boolean)?.map(Number) : [];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
        // Execute hooks
        if (field.hooks?.afterChange) {
            await field.hooks.afterChange.reduce(async (priorHook, currentHook)=>{
                await priorHook;
                const hookedValue = await currentHook({
                    blockData,
                    collection,
                    context,
                    data,
                    field,
                    global,
                    indexPath: indexPathSegments,
                    operation,
                    originalDoc: doc,
                    path: pathSegments,
                    previousDoc,
                    previousSiblingDoc,
                    previousValue: previousDoc[field.name],
                    req,
                    schemaPath: schemaPathSegments,
                    siblingData,
                    value: siblingDoc[field.name]
                });
                if (hookedValue !== undefined) {
                    siblingDoc[field.name] = hookedValue;
                }
            }, Promise.resolve());
        }
    }
    // Traverse subfields
    switch(field.type){
        case 'array':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                            blockData,
                            collection,
                            context,
                            data,
                            doc,
                            fields: field.fields,
                            global,
                            operation,
                            parentIndexPath: '',
                            parentPath: path + '.' + rowIndex,
                            parentSchemaPath: schemaPath,
                            previousDoc,
                            previousSiblingDoc: previousDoc?.[field.name]?.[rowIndex] || {},
                            req,
                            siblingData: siblingData?.[field.name]?.[rowIndex] || {},
                            siblingDoc: row ? {
                                ...row
                            } : {}
                        }));
                    });
                    await Promise.all(promises);
                }
                break;
            }
        case 'blocks':
            {
                const rows = siblingDoc[field.name];
                if (Array.isArray(rows)) {
                    const promises = [];
                    rows.forEach((row, rowIndex)=>{
                        const block = field.blocks.find((blockType)=>blockType.slug === row.blockType);
                        if (block) {
                            promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                                blockData: siblingData?.[field.name]?.[rowIndex],
                                collection,
                                context,
                                data,
                                doc,
                                fields: block.fields,
                                global,
                                operation,
                                parentIndexPath: '',
                                parentPath: path + '.' + rowIndex,
                                parentSchemaPath: schemaPath + '.' + block.slug,
                                previousDoc,
                                previousSiblingDoc: previousDoc?.[field.name]?.[rowIndex] || {},
                                req,
                                siblingData: siblingData?.[field.name]?.[rowIndex] || {},
                                siblingDoc: row ? {
                                    ...row
                                } : {}
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    parentIndexPath: indexPath,
                    parentPath,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: {
                        ...previousSiblingDoc
                    },
                    req,
                    siblingData: siblingData || {},
                    siblingDoc: {
                        ...siblingDoc
                    }
                });
                break;
            }
        case 'group':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    parentIndexPath: '',
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: previousDoc[field.name],
                    req,
                    siblingData: siblingData?.[field.name] || {},
                    siblingDoc: siblingDoc[field.name]
                });
                break;
            }
        case 'richText':
            {
                if (!field?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof field?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                const editor = field?.editor;
                if (editor?.hooks?.afterChange?.length) {
                    await editor.hooks.afterChange.reduce(async (priorHook, currentHook)=>{
                        await priorHook;
                        const hookedValue = await currentHook({
                            collection,
                            context,
                            data,
                            field,
                            global,
                            indexPath: indexPathSegments,
                            operation,
                            originalDoc: doc,
                            path: pathSegments,
                            previousDoc,
                            previousSiblingDoc,
                            previousValue: previousDoc[field.name],
                            req,
                            schemaPath: schemaPathSegments,
                            siblingData,
                            value: siblingDoc[field.name]
                        });
                        if (hookedValue !== undefined) {
                            siblingDoc[field.name] = hookedValue;
                        }
                    }, Promise.resolve());
                }
                break;
            }
        case 'tab':
            {
                let tabSiblingData = siblingData;
                let tabSiblingDoc = siblingDoc;
                let tabPreviousSiblingDoc = siblingDoc;
                const isNamedTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(field);
                if (isNamedTab) {
                    tabSiblingData = siblingData[field.name] ?? {};
                    tabSiblingDoc = siblingDoc[field.name] ?? {};
                    tabPreviousSiblingDoc = previousDoc[field.name] ?? {};
                }
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.fields,
                    global,
                    operation,
                    parentIndexPath: isNamedTab ? '' : indexPath,
                    parentPath: isNamedTab ? path : parentPath,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: tabPreviousSiblingDoc,
                    req,
                    siblingData: tabSiblingData,
                    siblingDoc: tabSiblingDoc
                });
                break;
            }
        case 'tabs':
            {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
                    blockData,
                    collection,
                    context,
                    data,
                    doc,
                    fields: field.tabs.map((tab)=>({
                            ...tab,
                            type: 'tab'
                        })),
                    global,
                    operation,
                    parentIndexPath: indexPath,
                    parentPath: path,
                    parentSchemaPath: schemaPath,
                    previousDoc,
                    previousSiblingDoc: {
                        ...previousSiblingDoc
                    },
                    req,
                    siblingData: siblingData || {},
                    siblingDoc: {
                        ...siblingDoc
                    }
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
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/promise.js [app-rsc] (ecmascript)");
;
const traverseFields = async ({ blockData, collection, context, data, doc, fields, global, operation, parentIndexPath, parentPath, parentSchemaPath, previousDoc, previousSiblingDoc, req, siblingData, siblingDoc })=>{
    const promises = [];
    fields.forEach((field, fieldIndex)=>{
        promises.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["promise"])({
            blockData,
            collection,
            context,
            data,
            doc,
            field,
            fieldIndex,
            global,
            operation,
            parentIndexPath,
            parentPath,
            parentSchemaPath,
            previousDoc,
            previousSiblingDoc,
            req,
            siblingData,
            siblingDoc
        }));
    });
    await Promise.all(promises);
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "afterChange": (()=>afterChange)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-rsc] (ecmascript)");
;
const afterChange = async ({ collection, context, data, doc: incomingDoc, global, operation, previousDoc, req })=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])({
        collection,
        context,
        data,
        doc: incomingDoc,
        fields: collection?.fields || global?.fields,
        global,
        operation,
        parentIndexPath: '',
        parentPath: '',
        parentSchemaPath: '',
        previousDoc,
        previousSiblingDoc: previousDoc,
        req,
        siblingData: data,
        siblingDoc: incomingDoc
    });
    return incomingDoc;
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/mergeBaseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepMerge.js [app-rsc] (ecmascript) <locals>");
;
;
const mergeBaseFields = (fields, baseFields)=>{
    const mergedFields = [
        ...fields || []
    ];
    baseFields.forEach((baseField)=>{
        let matchedIndex = null;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(baseField)) {
            const match = mergedFields.find((field, i)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === baseField.name) {
                    matchedIndex = i;
                    return true;
                }
                return false;
            });
            if (match) {
                const matchCopy = {
                    ...match
                };
                mergedFields.splice(matchedIndex, 1);
                const mergedField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepMerge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deepMergeWithReactComponents"])(baseField, matchCopy);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(baseField) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(matchCopy)) {
                    ;
                    mergedField.fields = mergeBaseFields(matchCopy.fields, baseField.fields);
                }
                mergedFields.push(mergedField);
            } else {
                mergedFields.push(baseField);
            }
        }
    });
    return mergedFields;
};
const __TURBOPACK__default__export__ = mergeBaseFields;
 //# sourceMappingURL=mergeBaseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-rsc] (ecmascript) <export traverseFields as afterReadTraverseFields>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "afterReadTraverseFields": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterRead$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterRead/traverseFields.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-rsc] (ecmascript) <export traverseFields as afterChangeTraverseFields>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "afterChangeTraverseFields": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$afterChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/afterChange/traverseFields.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-rsc] (ecmascript) <export traverseFields as beforeChangeTraverseFields>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "beforeChangeTraverseFields": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeChange$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeChange/traverseFields.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-rsc] (ecmascript) <export traverseFields as beforeValidateTraverseFields>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "beforeValidateTraverseFields": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["traverseFields"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$hooks$2f$beforeValidate$2f$traverseFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/hooks/beforeValidate/traverseFields.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/client.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable perfectionist/sort-switch-case */ // Keep perfectionist/sort-switch-case disabled - it incorrectly messes up the ordering of the switch cases, causing it to break
__turbopack_esm__({
    "createClientField": (()=>createClientField),
    "createClientFields": (()=>createClientFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$removeUndefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/removeUndefined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$getFromImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/bin/generateImportMap/getFromImportMap.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
;
;
;
;
const serverOnlyFieldProperties = [
    'hooks',
    'access',
    'validate',
    'defaultValue',
    'filterOptions',
    'editor',
    'custom',
    'typescriptSchema',
    'dbName',
    'enumName',
    'graphQL'
];
const serverOnlyFieldAdminProperties = [
    'condition',
    'components'
];
const createClientField = ({ defaultIDType, field: incomingField, i18n, importMap })=>{
    const clientField = {};
    for(const key in incomingField){
        if (serverOnlyFieldProperties.includes(key)) {
            continue;
        }
        switch(key){
            case 'admin':
                if (!incomingField.admin) {
                    break;
                }
                clientField.admin = {};
                for(const adminKey in incomingField.admin){
                    if (serverOnlyFieldAdminProperties.includes(adminKey)) {
                        continue;
                    }
                    switch(adminKey){
                        case 'description':
                            if ('description' in incomingField.admin) {
                                if (typeof incomingField.admin?.description !== 'function') {
                                    ;
                                    clientField.admin.description = incomingField.admin.description;
                                }
                            }
                            break;
                        default:
                            clientField.admin[adminKey] = incomingField.admin[adminKey];
                    }
                }
                break;
            case 'blocks':
            case 'fields':
            case 'tabs':
                break;
            case 'label':
                //@ts-expect-error - would need to type narrow
                if (typeof incomingField.label === 'function') {
                    //@ts-expect-error - would need to type narrow
                    clientField.label = incomingField.label({
                        t: i18n.t
                    });
                } else {
                    //@ts-expect-error - would need to type narrow
                    clientField.label = incomingField.label;
                }
                break;
            default:
                clientField[key] = incomingField[key];
        }
    }
    switch(incomingField.type){
        case 'array':
            {
                if (incomingField.labels) {
                    const field = clientField;
                    field.labels = {};
                    if (incomingField.labels.singular) {
                        if (typeof incomingField.labels.singular === 'function') {
                            field.labels.singular = incomingField.labels.singular({
                                t: i18n.t
                            });
                        } else {
                            field.labels.singular = incomingField.labels.singular;
                        }
                        if (typeof incomingField.labels.plural === 'function') {
                            field.labels.plural = incomingField.labels.plural({
                                t: i18n.t
                            });
                        } else {
                            field.labels.plural = incomingField.labels.plural;
                        }
                    }
                }
            }
        // falls through
        case 'collapsible':
        case 'group':
        case 'row':
            {
                const field = clientField;
                if (!field.fields) {
                    field.fields = [];
                }
                field.fields = createClientFields({
                    defaultIDType,
                    disableAddingID: incomingField.type !== 'array',
                    fields: incomingField.fields,
                    i18n,
                    importMap
                });
                break;
            }
        case 'blocks':
            {
                const field = clientField;
                if (incomingField.labels) {
                    field.labels = {};
                    if (incomingField.labels.singular) {
                        if (typeof incomingField.labels.singular === 'function') {
                            field.labels.singular = incomingField.labels.singular({
                                t: i18n.t
                            });
                        } else {
                            field.labels.singular = incomingField.labels.singular;
                        }
                        if (typeof incomingField.labels.plural === 'function') {
                            field.labels.plural = incomingField.labels.plural({
                                t: i18n.t
                            });
                        } else {
                            field.labels.plural = incomingField.labels.plural;
                        }
                    }
                }
                if (incomingField.blocks?.length) {
                    for(let i = 0; i < incomingField.blocks.length; i++){
                        const block = incomingField.blocks[i];
                        // prevent $undefined from being passed through the rsc requests
                        const clientBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$removeUndefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeUndefined"])({
                            slug: block.slug,
                            fields: field.blocks?.[i]?.fields || [],
                            imageAltText: block.imageAltText,
                            imageURL: block.imageURL
                        });
                        if (block.admin?.custom) {
                            clientBlock.admin = {
                                custom: block.admin.custom
                            };
                        }
                        if (block?.admin?.jsx) {
                            const jsxResolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$bin$2f$generateImportMap$2f$getFromImportMap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFromImportMap"])({
                                importMap,
                                PayloadComponent: block.admin.jsx,
                                schemaPath: ''
                            });
                            clientBlock.jsx = jsxResolved;
                        }
                        if (block.labels) {
                            clientBlock.labels = {};
                            if (block.labels.singular) {
                                if (typeof block.labels.singular === 'function') {
                                    clientBlock.labels.singular = block.labels.singular({
                                        t: i18n.t
                                    });
                                } else {
                                    clientBlock.labels.singular = block.labels.singular;
                                }
                                if (typeof block.labels.plural === 'function') {
                                    clientBlock.labels.plural = block.labels.plural({
                                        t: i18n.t
                                    });
                                } else {
                                    clientBlock.labels.plural = block.labels.plural;
                                }
                            }
                        }
                        clientBlock.fields = createClientFields({
                            defaultIDType,
                            fields: block.fields,
                            i18n,
                            importMap
                        });
                        if (!field.blocks) {
                            field.blocks = [];
                        }
                        field.blocks[i] = clientBlock;
                    }
                }
                break;
            }
        case 'join':
            {
                const field = clientField;
                field.targetField = {
                    relationTo: field.targetField.relationTo
                };
                break;
            }
        case 'radio':
        // falls through
        case 'select':
            {
                const field = clientField;
                if (incomingField.options?.length) {
                    for(let i = 0; i < incomingField.options.length; i++){
                        const option = incomingField.options[i];
                        if (typeof option === 'object' && typeof option.label === 'function') {
                            if (!field.options) {
                                field.options = [];
                            }
                            field.options[i] = {
                                label: option.label({
                                    t: i18n.t
                                }),
                                value: option.value
                            };
                        }
                    }
                }
                break;
            }
        case 'richText':
            {
                if (!incomingField?.editor) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](incomingField) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                    ;
                }
                if (typeof incomingField?.editor === 'function') {
                    throw new Error('Attempted to access unsanitized rich text editor.');
                }
                break;
            }
        case 'tabs':
            {
                const field = clientField;
                if (incomingField.tabs?.length) {
                    field.tabs = [];
                    for(let i = 0; i < incomingField.tabs.length; i++){
                        const tab = incomingField.tabs[i];
                        const clientTab = {};
                        for(const key in tab){
                            if (serverOnlyFieldProperties.includes(key)) {
                                continue;
                            }
                            const tabProp = tab[key];
                            if (key === 'fields') {
                                clientTab.fields = createClientFields({
                                    defaultIDType,
                                    disableAddingID: true,
                                    fields: tab.fields,
                                    i18n,
                                    importMap
                                });
                            } else if ((key === 'label' || key === 'description') && typeof tabProp === 'function') {
                                clientTab[key] = tabProp({
                                    t: i18n.t
                                });
                            } else if (key === 'admin') {
                                clientTab.admin = {};
                                for(const adminKey in tab.admin){
                                    if (serverOnlyFieldAdminProperties.includes(adminKey)) {
                                        continue;
                                    }
                                    switch(adminKey){
                                        case 'description':
                                            if ('description' in tab.admin) {
                                                if (typeof tab.admin?.description === 'function') {
                                                    clientTab.admin.description = tab.admin.description({
                                                        t: i18n.t
                                                    });
                                                } else {
                                                    clientTab.admin.description = tab.admin.description;
                                                }
                                            }
                                            break;
                                        default:
                                            clientField.admin[adminKey] = tab.admin[adminKey];
                                    }
                                }
                            } else {
                                clientTab[key] = tabProp;
                            }
                        }
                        field.tabs[i] = clientTab;
                    }
                }
                break;
            }
        default:
            break;
    }
    return clientField;
};
const createClientFields = ({ defaultIDType, disableAddingID, fields, i18n, importMap })=>{
    const clientFields = [];
    for(let i = 0; i < fields.length; i++){
        const field = fields[i];
        const clientField = createClientField({
            defaultIDType,
            field,
            i18n,
            importMap
        });
        clientFields.push(clientField);
    }
    const hasID = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(fields).some((f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(f) && f.name === 'id');
    if (!disableAddingID && !hasID) {
        clientFields.push({
            name: 'id',
            type: defaultIDType,
            admin: {
                description: 'The unique identifier for this document',
                disableBulkEdit: true,
                disabled: true,
                hidden: true
            },
            hidden: true,
            label: 'ID'
        });
    }
    return clientFields;
}; //# sourceMappingURL=client.js.map
}}),

};

//# sourceMappingURL=e2cf0_payload_dist_fields_bd2976._.js.map