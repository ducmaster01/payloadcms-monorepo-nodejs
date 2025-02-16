module.exports = {

"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createArrayFromCommaDelineated.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createArrayFromCommaDelineated": (()=>createArrayFromCommaDelineated)
});
function createArrayFromCommaDelineated(input) {
    if (Array.isArray(input)) {
        return input;
    }
    if (input.indexOf(',') > -1) {
        return input.split(',');
    }
    return [
        input
    ];
} //# sourceMappingURL=createArrayFromCommaDelineated.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
Main deepCopyObject handling - from rfdc: https://github.com/davidmarkclements/rfdc/blob/master/index.js

Copyright 2019 "David Mark Clements <david.mark.clements@gmail.com>"

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions
of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
*/ __turbopack_esm__({
    "deepCopyObject": (()=>deepCopyObject),
    "deepCopyObjectComplex": (()=>deepCopyObjectComplex),
    "deepCopyObjectSimple": (()=>deepCopyObjectSimple),
    "deepCopyObjectSimpleWithoutReactComponents": (()=>deepCopyObjectSimpleWithoutReactComponents)
});
function copyBuffer(cur) {
    if (cur instanceof Buffer) {
        return Buffer.from(cur);
    }
    return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
}
const constructorHandlers = new Map();
constructorHandlers.set(Date, (o)=>new Date(o));
constructorHandlers.set(Map, (o, fn)=>new Map(cloneArray(Array.from(o), fn)));
constructorHandlers.set(Set, (o, fn)=>new Set(cloneArray(Array.from(o), fn)));
constructorHandlers.set(RegExp, (regex)=>new RegExp(regex.source, regex.flags));
let handler = null;
function cloneArray(a, fn) {
    const keys = Object.keys(a);
    const a2 = new Array(keys.length);
    for(let i = 0; i < keys.length; i++){
        const k = keys[i];
        const cur = a[k];
        if (typeof cur !== 'object' || cur === null) {
            a2[k] = cur;
        } else if (cur instanceof RegExp) {
            a2[k] = new RegExp(cur.source, cur.flags);
        } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            a2[k] = handler(cur, fn);
        } else if (ArrayBuffer.isView(cur)) {
            a2[k] = copyBuffer(cur);
        } else {
            a2[k] = fn(cur);
        }
    }
    return a2;
}
const deepCopyObject = (o)=>{
    if (typeof o !== 'object' || o === null) {
        return o;
    }
    if (Array.isArray(o)) {
        return cloneArray(o, deepCopyObject);
    }
    if (o instanceof RegExp) {
        return new RegExp(o.source, o.flags);
    }
    if (o.constructor !== Object && (handler = constructorHandlers.get(o.constructor))) {
        return handler(o, deepCopyObject);
    }
    const o2 = {};
    for(const k in o){
        if (Object.hasOwnProperty.call(o, k) === false) {
            continue;
        }
        const cur = o[k];
        if (typeof cur !== 'object' || cur === null) {
            o2[k] = cur;
        } else if (cur instanceof RegExp) {
            o2[k] = new RegExp(cur.source, cur.flags);
        } else if (cur.constructor !== Object && (handler = constructorHandlers.get(cur.constructor))) {
            o2[k] = handler(cur, deepCopyObject);
        } else if (ArrayBuffer.isView(cur)) {
            o2[k] = copyBuffer(cur);
        } else {
            o2[k] = deepCopyObject(cur);
        }
    }
    return o2;
};
function deepCopyObjectSimple(value, filterUndefined = false) {
    if (typeof value !== 'object' || value === null) {
        return value;
    } else if (Array.isArray(value)) {
        return value.map((e)=>typeof e !== 'object' || e === null ? e : deepCopyObjectSimple(e, filterUndefined));
    } else {
        if (value instanceof Date) {
            return new Date(value);
        }
        const ret = {};
        for(const k in value){
            const v = value[k];
            if (filterUndefined && v === undefined) {
                continue;
            }
            ret[k] = typeof v !== 'object' || v === null ? v : deepCopyObjectSimple(v, filterUndefined);
        }
        return ret;
    }
}
function deepCopyObjectSimpleWithoutReactComponents(value) {
    if (typeof value === 'object' && value !== null && '$$typeof' in value && typeof value.$$typeof === 'symbol') {
        return undefined;
    } else if (typeof value !== 'object' || value === null) {
        return value;
    } else if (Array.isArray(value)) {
        return value.map((e)=>typeof e !== 'object' || e === null ? e : deepCopyObjectSimpleWithoutReactComponents(e));
    } else {
        if (value instanceof Date) {
            return new Date(value);
        }
        const ret = {};
        for(const k in value){
            const v = value[k];
            ret[k] = typeof v !== 'object' || v === null ? v : deepCopyObjectSimpleWithoutReactComponents(v);
        }
        return ret;
    }
}
function deepCopyObjectComplex(object, cache = new WeakMap()) {
    if (object === null) {
        return null;
    }
    if (cache.has(object)) {
        return cache.get(object);
    }
    // Handle File
    if (object instanceof File) {
        return object;
    }
    // Handle Date
    if (object instanceof Date) {
        return new Date(object.getTime());
    }
    // Handle RegExp
    if (object instanceof RegExp) {
        return new RegExp(object.source, object.flags);
    }
    // Handle Map
    if (object instanceof Map) {
        const clonedMap = new Map();
        cache.set(object, clonedMap);
        for (const [key, value] of object.entries()){
            clonedMap.set(key, deepCopyObjectComplex(value, cache));
        }
        return clonedMap;
    }
    // Handle Set
    if (object instanceof Set) {
        const clonedSet = new Set();
        cache.set(object, clonedSet);
        for (const value of object.values()){
            clonedSet.add(deepCopyObjectComplex(value, cache));
        }
        return clonedSet;
    }
    // Handle Array and Object
    if (typeof object === 'object' && object !== null) {
        if ('$$typeof' in object && typeof object.$$typeof === 'symbol') {
            return object;
        }
        const clonedObject = Array.isArray(object) ? [] : Object.create(Object.getPrototypeOf(object));
        cache.set(object, clonedObject);
        for(const key in object){
            if (Object.prototype.hasOwnProperty.call(object, key) || Object.getOwnPropertySymbols(object).includes(key)) {
                clonedObject[key] = deepCopyObjectComplex(object[key], cache);
            }
        }
        return clonedObject;
    }
    // Handle all other cases
    return object;
} //# sourceMappingURL=deepCopyObject.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isReactComponent.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isReactClientComponent": (()=>isReactClientComponent),
    "isReactComponentOrFunction": (()=>isReactComponentOrFunction),
    "isReactServerComponentOrFunction": (()=>isReactServerComponentOrFunction)
});
const clientRefSymbol = Symbol.for('react.client.reference');
function isReactServerComponentOrFunction(component) {
    if (component === null || component === undefined) {
        return false;
    }
    const hasClientComponentSymbol = component.$$typeof == clientRefSymbol;
    const isFunctionalComponent = typeof component === 'function';
    // Anonymous functions are Client Components in Turbopack. RSCs should have a name
    const isAnonymousFunction = typeof component === 'function' && component.name === '';
    const isRSC = isFunctionalComponent && !isAnonymousFunction && !hasClientComponentSymbol;
    return isRSC;
}
function isReactClientComponent(component) {
    if (component === null || component === undefined) {
        return false;
    }
    return !isReactServerComponentOrFunction(component) && component.$$typeof == clientRefSymbol;
}
function isReactComponentOrFunction(component) {
    return isReactServerComponentOrFunction(component) || isReactClientComponent(component);
} //# sourceMappingURL=isReactComponent.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isPlainObject.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isPlainObject": (()=>isPlainObject)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isReactComponent.js [app-rsc] (ecmascript)");
;
function isPlainObject(o) {
    // Is this a React component?
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isReactComponent$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isReactComponentOrFunction"])(o)) {
        return false;
    }
    // from https://github.com/fastify/deepmerge/blob/master/index.js#L77
    return typeof o === 'object' && o !== null && !(o instanceof RegExp) && !(o instanceof Date);
} //# sourceMappingURL=isPlainObject.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepMerge.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deepMergeWithCombinedArrays": (()=>deepMergeWithCombinedArrays),
    "deepMergeWithReactComponents": (()=>deepMergeWithReactComponents),
    "deepMergeWithSourceArrays": (()=>deepMergeWithSourceArrays)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/deepmerge@4.3.1/node_modules/deepmerge/dist/cjs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isPlainObject.js [app-rsc] (ecmascript)");
;
;
;
function deepMergeWithCombinedArrays(obj1, obj2, options = {}) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        arrayMerge: (target, source, options)=>{
            const destination = target.slice();
            source.forEach((item, index)=>{
                if (typeof destination[index] === 'undefined') {
                    destination[index] = options.cloneUnlessOtherwiseSpecified(item, options);
                } else if (options.isMergeableObject(item)) {
                    destination[index] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(target[index], item, options);
                } else if (target.indexOf(item) === -1) {
                    destination.push(item);
                }
            });
            return destination;
        },
        ...options
    });
}
function deepMergeWithSourceArrays(obj1, obj2) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        arrayMerge: (_, source)=>source
    });
}
function deepMergeWithReactComponents(obj1, obj2) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$deepmerge$40$4$2e$3$2e$1$2f$node_modules$2f$deepmerge$2f$dist$2f$cjs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(obj1, obj2, {
        isMergeableObject: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isPlainObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"]
    });
} //# sourceMappingURL=deepMerge.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/fieldSchemaToJSON.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fieldSchemaToJSON": (()=>fieldSchemaToJSON)
});
const fieldSchemaToJSON = (fields)=>{
    return fields.reduce((acc, field)=>{
        let result = acc;
        switch(field.type){
            case 'array':
                acc.push({
                    name: field.name,
                    type: field.type,
                    fields: fieldSchemaToJSON([
                        ...field.fields,
                        {
                            name: 'id',
                            type: 'text'
                        }
                    ])
                });
                break;
            case 'blocks':
                acc.push({
                    name: field.name,
                    type: field.type,
                    blocks: field.blocks.reduce((acc, block)=>{
                        acc[block.slug] = {
                            fields: fieldSchemaToJSON([
                                ...block.fields,
                                {
                                    name: 'id',
                                    type: 'text'
                                }
                            ])
                        };
                        return acc;
                    }, {})
                });
                break;
            case 'collapsible':
            case 'row':
                result = result.concat(fieldSchemaToJSON(field.fields));
                break;
            case 'group':
                acc.push({
                    name: field.name,
                    type: field.type,
                    fields: fieldSchemaToJSON(field.fields)
                });
                break;
            case 'relationship':
            case 'upload':
                acc.push({
                    name: field.name,
                    type: field.type,
                    hasMany: 'hasMany' in field ? Boolean(field.hasMany) : false,
                    relationTo: field.relationTo
                });
                break;
            case 'tabs':
                {
                    let tabFields = [];
                    field.tabs.forEach((tab)=>{
                        if ('name' in tab) {
                            tabFields.push({
                                name: tab.name,
                                type: field.type,
                                fields: fieldSchemaToJSON(tab.fields)
                            });
                            return;
                        }
                        tabFields = tabFields.concat(fieldSchemaToJSON(tab.fields));
                    });
                    result = result.concat(tabFields);
                    break;
                }
            default:
                if ('name' in field) {
                    acc.push({
                        name: field.name,
                        type: field.type
                    });
                }
        }
        return result;
    }, []);
}; //# sourceMappingURL=fieldSchemaToJSON.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenAllFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "flattenAllFields": (()=>flattenAllFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const flattenAllFields = ({ fields })=>{
    const result = [];
    for (const field of fields){
        switch(field.type){
            case 'array':
            case 'group':
                {
                    result.push({
                        ...field,
                        flattenedFields: flattenAllFields({
                            fields: field.fields
                        })
                    });
                    break;
                }
            case 'blocks':
                {
                    const blocks = [];
                    for (const block of field.blocks){
                        blocks.push({
                            ...block,
                            flattenedFields: flattenAllFields({
                                fields: block.fields
                            })
                        });
                    }
                    result.push({
                        ...field,
                        blocks
                    });
                    break;
                }
            case 'collapsible':
            case 'row':
                {
                    for (const nestedField of flattenAllFields({
                        fields: field.fields
                    })){
                        result.push(nestedField);
                    }
                    break;
                }
            case 'join':
                {
                    result.push(field);
                    break;
                }
            case 'tabs':
                {
                    for (const tab of field.tabs){
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                            for (const nestedField of flattenAllFields({
                                fields: tab.fields
                            })){
                                result.push(nestedField);
                            }
                        } else {
                            result.push({
                                ...tab,
                                type: 'tab',
                                flattenedFields: flattenAllFields({
                                    fields: tab.fields
                                })
                            });
                        }
                    }
                    break;
                }
            default:
                {
                    if (field.type !== 'ui') {
                        result.push(field);
                    }
                }
        }
    }
    return result;
}; //# sourceMappingURL=flattenAllFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
/**
 * Flattens a collection's fields into a single array of fields, as long
 * as the fields do not affect data.
 *
 * @param fields
 * @param keepPresentationalFields if true, will skip flattening fields that are presentational only
 */ function flattenFields(fields, keepPresentationalFields) {
    return fields.reduce((acc, field)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) || keepPresentationalFields && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldIsPresentationalOnly"])(field)) {
            acc.push(field);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field)) {
            acc.push(...flattenFields(field.fields, keepPresentationalFields));
        } else if (field.type === 'tabs' && 'tabs' in field) {
            return [
                ...acc,
                ...field.tabs.reduce((tabFields, tab)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                        return [
                            ...tabFields,
                            {
                                ...tab,
                                type: 'tab'
                            }
                        ];
                    } else {
                        return [
                            ...tabFields,
                            ...flattenFields(tab.fields, keepPresentationalFields)
                        ];
                    }
                }, [])
            ];
        }
        return acc;
    }, []);
}
const __TURBOPACK__default__export__ = flattenFields;
 //# sourceMappingURL=flattenTopLevelFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/unflatten.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
 * Copyright (c) 2014, Hugh Kennedy
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /*
 * Copyright (c) 2020, Feross Aboukhadijeh <https://feross.org>
 * Reference: https://www.npmjs.com/package/is-buffer
 * All rights reserved.
 */ __turbopack_esm__({
    "unflatten": (()=>unflatten)
});
function isBuffer(obj) {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
}
const unflatten = (target, opts)=>{
    opts = opts || {};
    const delimiter = opts.delimiter || '.';
    const overwrite = opts.overwrite || false;
    const recursive = opts.recursive || false;
    const result = {};
    const isbuffer = isBuffer(target);
    if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
        return target;
    }
    // safely ensure that the key is an integer.
    const getkey = (key)=>{
        const parsedKey = Number(key);
        return isNaN(parsedKey) || key.indexOf('.') !== -1 || opts.object ? key : parsedKey;
    };
    const sortedKeys = Object.keys(target).sort((keyA, keyB)=>keyA.length - keyB.length);
    sortedKeys.forEach((key)=>{
        const split = key.split(delimiter);
        let key1 = getkey(split.shift());
        let key2 = getkey(split[0]);
        let recipient = result;
        while(key2 !== undefined){
            if (key1 === '__proto__') {
                return;
            }
            const type = Object.prototype.toString.call(recipient[key1]);
            const isobject = type === '[object Object]' || type === '[object Array]';
            // do not write over falsey, non-undefined values if overwrite is false
            if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
                return;
            }
            if (overwrite && !isobject || !overwrite && recipient[key1] == null) {
                recipient[key1] = typeof key2 === 'number' && !opts.object ? [] : {};
            }
            recipient = recipient[key1];
            if (split.length > 0) {
                key1 = getkey(split.shift());
                key2 = getkey(split[0]);
            }
        }
        // unflatten again for 'messy objects'
        recipient[key1] = recursive ? unflatten(target[key], opts) : target[key];
    });
    return result;
}; //# sourceMappingURL=unflatten.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getDataByPath.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDataByPath": (()=>getDataByPath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/unflatten.js [app-rsc] (ecmascript)");
;
const getDataByPath = (fields, path)=>{
    const pathPrefixToRemove = path.substring(0, path.lastIndexOf('.') + 1);
    const name = path.split('.').pop();
    const data = {};
    Object.keys(fields).forEach((key)=>{
        if (!fields[key].disableFormData && (key.indexOf(`${path}.`) === 0 || key === path)) {
            data[key.replace(pathPrefixToRemove, '')] = fields[key].value;
            if (fields[key]?.rows && fields[key].rows.length === 0) {
                data[key.replace(pathPrefixToRemove, '')] = [];
            }
        }
    });
    const unflattenedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unflatten"])(data);
    return unflattenedData?.[name];
}; //# sourceMappingURL=getDataByPath.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getSelectMode.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSelectMode": (()=>getSelectMode)
});
const getSelectMode = (select)=>{
    for(const key in select){
        const selectValue = select[key];
        if (selectValue === false) {
            return 'exclude';
        }
        if (typeof selectValue === 'object') {
            return getSelectMode(selectValue);
        }
    }
    return 'include';
}; //# sourceMappingURL=getSelectMode.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/reduceFieldsToValues.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "reduceFieldsToValues": (()=>reduceFieldsToValues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/unflatten.js [app-rsc] (ecmascript)");
;
const reduceFieldsToValues = (fields, unflatten, ignoreDisableFormData)=>{
    let data = {};
    if (!fields) {
        return data;
    }
    Object.keys(fields).forEach((key)=>{
        if (ignoreDisableFormData === true || !fields[key]?.disableFormData) {
            data[key] = fields[key]?.value;
        }
    });
    if (unflatten) {
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unflatten"])(data);
    }
    return data;
}; //# sourceMappingURL=reduceFieldsToValues.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getSiblingData.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSiblingData": (()=>getSiblingData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/unflatten.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$reduceFieldsToValues$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/reduceFieldsToValues.js [app-rsc] (ecmascript)");
;
;
const getSiblingData = (fields, path)=>{
    if (!fields) {
        return null;
    }
    if (path.indexOf('.') === -1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$reduceFieldsToValues$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["reduceFieldsToValues"])(fields, true);
    }
    const siblingFields = {};
    // Determine if the last segment of the path is an array-based row
    const pathSegments = path.split('.');
    const lastSegment = pathSegments[pathSegments.length - 1];
    const lastSegmentIsRowIndex = !Number.isNaN(Number(lastSegment));
    let parentFieldPath;
    if (lastSegmentIsRowIndex) {
        // If the last segment is a row index,
        // the sibling data is that row's contents
        // so create a parent field path that will
        // retrieve all contents of that row index only
        parentFieldPath = `${path}.`;
    } else {
        // Otherwise, the last path segment is a field name
        // and it should be removed
        parentFieldPath = path.substring(0, path.lastIndexOf('.') + 1);
    }
    Object.keys(fields).forEach((fieldKey)=>{
        if (!fields[fieldKey].disableFormData && fieldKey.indexOf(parentFieldPath) === 0) {
            siblingFields[fieldKey.replace(parentFieldPath, '')] = fields[fieldKey].value;
        }
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$unflatten$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unflatten"])(siblingFields);
}; //# sourceMappingURL=getSiblingData.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getUniqueListBy.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getUniqueListBy": (()=>getUniqueListBy)
});
function getUniqueListBy(arr, key) {
    return [
        ...new Map(arr.map((item)=>[
                item[key],
                item
            ])).values()
    ];
} //# sourceMappingURL=getUniqueListBy.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isNumber.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isNumber": (()=>isNumber)
});
function isNumber(value) {
    if (value === null || value === undefined || typeof value === 'string' && value.trim() === '') {
        return false;
    }
    return !Number.isNaN(Number(value));
} //# sourceMappingURL=isNumber.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/setsAreEqual.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "setsAreEqual": (()=>setsAreEqual)
});
const setsAreEqual = (xs, ys)=>xs.size === ys.size && [
        ...xs
    ].every((x)=>ys.has(x)); //# sourceMappingURL=setsAreEqual.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/toKebabCase.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const toKebabCase = (string)=>string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
const __TURBOPACK__default__export__ = toKebabCase;
 //# sourceMappingURL=toKebabCase.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/validateMimeType.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "validateMimeType": (()=>validateMimeType)
});
const validateMimeType = (mimeType, allowedMimeTypes)=>{
    const cleanedMimeTypes = allowedMimeTypes.map((v)=>v.replace('*', ''));
    return cleanedMimeTypes.some((cleanedMimeType)=>mimeType.startsWith(cleanedMimeType));
}; //# sourceMappingURL=validateMimeType.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/wait.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "wait": (()=>wait)
});
async function wait(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve, ms);
    });
} //# sourceMappingURL=wait.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/wordBoundariesRegex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = (input)=>{
    const words = input.split(' ');
    // Regex word boundaries that work for cyrillic characters - https://stackoverflow.com/a/47062016/1717697
    const wordBoundaryBefore = '(?:(?:[^\\p{L}\\p{N}])|^)' // Converted to a non-matching group instead of positive lookbehind for Safari
    ;
    const wordBoundaryAfter = '(?=[^\\p{L}\\p{N}]|$)';
    const regex = words.reduce((pattern, word, i)=>{
        const escapedWord = word.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
        return `${pattern}(?=.*${wordBoundaryBefore}.*${escapedWord}.*${wordBoundaryAfter})${i + 1 === words.length ? '.+' : ''}`;
    }, '');
    return new RegExp(regex, 'i');
};
 //# sourceMappingURL=wordBoundariesRegex.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isValidID.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isValidID": (()=>isValidID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/bson-objectid@2.0.4/node_modules/bson-objectid/objectid.js [app-rsc] (ecmascript)");
;
const ObjectId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].default || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$bson$2d$objectid$40$2$2e$0$2e$4$2f$node_modules$2f$bson$2d$objectid$2f$objectid$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const isValidID = (value, type)=>{
    if (type === 'text' && value) {
        if ([
            'object',
            'string'
        ].includes(typeof value)) {
            const isObjectID = ObjectId.isValid(value);
            return typeof value === 'string' || isObjectID;
        }
        return false;
    }
    if (typeof value === 'number' && !Number.isNaN(value)) {
        return true;
    }
    if (type === 'ObjectID') {
        return ObjectId.isValid(String(value));
    }
}; //# sourceMappingURL=isValidID.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Sanitizes fallbackLocale based on a provided fallbackLocale, locale and localization config
 *
 * Handles the following scenarios:
 * - determines if a fallback locale should be used
 * - determines if a locale specific fallback should be used in place of the default locale
 * - sets the fallbackLocale to 'null' if no fallback locale should be used
 */ __turbopack_esm__({
    "sanitizeFallbackLocale": (()=>sanitizeFallbackLocale)
});
const sanitizeFallbackLocale = ({ fallbackLocale, locale, localization })=>{
    const hasFallbackLocale = fallbackLocale === undefined || fallbackLocale === null ? localization && localization.fallback : fallbackLocale ? ![
        'false',
        'none',
        'null'
    ].includes(fallbackLocale) : false;
    if (hasFallbackLocale) {
        if (!fallbackLocale) {
            // Check for locale specific fallback
            const localeSpecificFallback = localization && localization?.locales?.length ? localization.locales.find((localeConfig)=>localeConfig.code === locale)?.fallbackLocale : undefined;
            if (localeSpecificFallback) {
                fallbackLocale = localeSpecificFallback;
            } else {
                // Use defaultLocale as fallback otherwise
                if (localization && 'fallback' in localization && localization.fallback) {
                    fallbackLocale = localization.defaultLocale;
                }
            }
        }
    } else {
        fallbackLocale = null;
    }
    return fallbackLocale;
}; //# sourceMappingURL=sanitizeFallbackLocale.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/createLocalReq.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createLocalReq": (()=>createLocalReq)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/sanitizeFallbackLocale.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$translations$2f$getLocalI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/translations/getLocalI18n.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/dataloader.js [app-rsc] (ecmascript)");
;
;
;
function getRequestContext(req = {
    context: null
}, context = {}) {
    if (req.context) {
        if (Object.keys(req.context).length === 0 && req.context.constructor === Object) {
            // if req.context is `{}` avoid unnecessary spread
            return context;
        } else {
            return {
                ...req.context,
                ...context
            };
        }
    } else {
        return context;
    }
}
const attachFakeURLProperties = (req)=>{
    /**
   * *NOTE*
   * If no URL is provided, the local API was called directly outside
   * the context of a request. Therefore we create a fake URL object.
   * `ts-expect-error` is used below for properties that are 'read-only'
   * since they do not exist yet we can safely ignore the error.
   */ let urlObject;
    function getURLObject() {
        if (urlObject) {
            return urlObject;
        }
        const urlToUse = req?.url || req.payload.config?.serverURL || 'http://localhost';
        try {
            urlObject = new URL(urlToUse);
        } catch (error) {
            urlObject = new URL('http://localhost');
        }
        return urlObject;
    }
    if (!req.host) {
        req.host = getURLObject().host;
    }
    if (!req.protocol) {
        req.protocol = getURLObject().protocol;
    }
    if (!req.pathname) {
        req.pathname = getURLObject().pathname;
    }
    if (!req.searchParams) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.searchParams = getURLObject().searchParams;
    }
    if (!req.origin) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.origin = getURLObject().origin;
    }
    if (!req?.url) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.url = getURLObject().href;
    }
};
const createLocalReq = async ({ context, fallbackLocale, locale: localeArg, req = {}, user }, payload)=>{
    const localization = payload.config?.localization;
    if (localization) {
        const locale = localeArg === '*' ? 'all' : localeArg;
        const defaultLocale = localization.defaultLocale;
        const localeCandidate = locale || req?.locale || req?.query?.locale;
        req.locale = localeCandidate && typeof localeCandidate === 'string' ? localeCandidate : defaultLocale;
        const sanitizedFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$sanitizeFallbackLocale$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sanitizeFallbackLocale"])({
            fallbackLocale,
            locale: req.locale,
            localization
        });
        req.fallbackLocale = sanitizedFallback;
    }
    const i18n = req?.i18n || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$translations$2f$getLocalI18n$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLocalI18n"])({
        config: payload.config,
        language: payload.config.i18n.fallbackLanguage
    });
    if (!req.headers) {
        // @ts-expect-error eslint-disable-next-line no-param-reassign
        req.headers = new Headers();
    }
    req.context = getRequestContext(req, context);
    req.payloadAPI = req?.payloadAPI || 'local';
    req.payload = payload;
    req.i18n = i18n;
    req.t = i18n.t;
    req.user = user || req?.user || null;
    req.payloadDataLoader = req?.payloadDataLoader || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDataLoader"])(req);
    req.routeParams = req?.routeParams || {};
    req.query = req?.query || {};
    attachFakeURLProperties(req);
    return req;
}; //# sourceMappingURL=createLocalReq.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/initTransaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Starts a new transaction using the db adapter with a random id and then assigns it to the req.transaction
 * @returns true if beginning a transaction and false when req already has a transaction to use
 */ __turbopack_esm__({
    "initTransaction": (()=>initTransaction)
});
async function initTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID instanceof Promise) {
        // wait for whoever else is already creating the transaction
        await transactionID;
        return false;
    }
    if (transactionID) {
        // we already have a transaction, we're not in charge of committing it
        return false;
    }
    if (typeof payload.db.beginTransaction === 'function') {
        // create a new transaction
        req.transactionID = payload.db.beginTransaction().then((transactionID)=>{
            if (transactionID) {
                req.transactionID = transactionID;
            }
            return transactionID;
        });
        return !!await req.transactionID;
    }
    return false;
} //# sourceMappingURL=initTransaction.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/commitTransaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * complete a transaction calling adapter db.commitTransaction and delete the transactionID from req
 */ __turbopack_esm__({
    "commitTransaction": (()=>commitTransaction)
});
async function commitTransaction(req) {
    const { payload, transactionID } = req;
    await payload.db.commitTransaction(transactionID);
    delete req.transactionID;
} //# sourceMappingURL=commitTransaction.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/killTransaction.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Rollback the transaction from the req using the db adapter and removes it from the req
 */ __turbopack_esm__({
    "killTransaction": (()=>killTransaction)
});
async function killTransaction(req) {
    const { payload, transactionID } = req;
    if (transactionID && !(transactionID instanceof Promise)) {
        try {
            await payload.db.rollbackTransaction(req.transactionID);
        } catch (error) {
        // swallow any errors while attempting to rollback
        }
        delete req.transactionID;
    }
} //# sourceMappingURL=killTransaction.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable no-restricted-exports */ /**
 * Creates a proxy for the given object that has its own property
 */ __turbopack_esm__({
    "default": (()=>isolateObjectProperty)
});
function isolateObjectProperty(object, key) {
    const keys = Array.isArray(key) ? key : [
        key
    ];
    const delegate = {};
    // Initialize delegate with the keys, if they exist in the original object
    for (const k of keys){
        if (k in object) {
            delegate[k] = object[k];
        }
    }
    const handler = {
        deleteProperty (target, p) {
            return Reflect.deleteProperty(keys.includes(p) ? delegate : target, p);
        },
        get (target, p, receiver) {
            return Reflect.get(keys.includes(p) ? delegate : target, p, receiver);
        },
        has (target, p) {
            return Reflect.has(keys.includes(p) ? delegate : target, p);
        },
        set (target, p, newValue, receiver) {
            if (keys.includes(p)) {
                // in case of transactionID we must ignore any receiver, because
                // "If provided and target does not have a setter for propertyKey, the property will be set on receiver instead."
                return Reflect.set(delegate, p, newValue);
            } else {
                return Reflect.set(target, p, newValue, receiver);
            }
        }
    };
    return new Proxy(object, handler);
} //# sourceMappingURL=isolateObjectProperty.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatLabels": (()=>formatLabels),
    "formatNames": (()=>formatNames),
    "toWords": (()=>toWords)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/pluralize@8.0.0/node_modules/pluralize/pluralize.js [app-rsc] (ecmascript)");
;
const { isPlural, singular } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
const capitalizeFirstLetter = (string)=>string.charAt(0).toUpperCase() + string.slice(1);
const toWords = (inputString, joinWords = false)=>{
    const notNullString = inputString || '';
    const trimmedString = notNullString.trim();
    const arrayOfStrings = trimmedString.split(/[\s-]/);
    const splitStringsArray = [];
    arrayOfStrings.forEach((tempString)=>{
        if (tempString !== '') {
            const splitWords = tempString.split(/(?=[A-Z])/).join(' ');
            splitStringsArray.push(capitalizeFirstLetter(splitWords));
        }
    });
    return joinWords ? splitStringsArray.join('').replace(/\s/g, '') : splitStringsArray.join(' ');
};
const formatLabels = (slug)=>{
    const words = toWords(slug);
    return isPlural(slug) ? {
        plural: words,
        singular: singular(words)
    } : {
        plural: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(words),
        singular: words
    };
};
const formatNames = (slug)=>{
    const words = toWords(slug, true);
    return isPlural(slug) ? {
        plural: words,
        singular: singular(words)
    } : {
        plural: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(words),
        singular: words
    };
};
;
 //# sourceMappingURL=formatLabels.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/traverseFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "traverseFields": (()=>traverseFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
;
const traverseArrayOrBlocksField = ({ callback, data, field, fillEmpty, parentRef })=>{
    if (fillEmpty) {
        if (field.type === 'array') {
            traverseFields({
                callback,
                fields: field.fields,
                parentRef
            });
        }
        if (field.type === 'blocks') {
            field.blocks.forEach((block)=>{
                traverseFields({
                    callback,
                    fields: block.fields,
                    parentRef
                });
            });
        }
        return;
    }
    for (const ref of data){
        let fields;
        if (field.type === 'blocks' && typeof ref?.blockType === 'string') {
            const block = field.blocks.find((block)=>block.slug === ref.blockType);
            fields = block?.fields;
        } else if (field.type === 'array') {
            fields = field.fields;
        }
        if (fields) {
            traverseFields({
                callback,
                fields,
                fillEmpty,
                parentRef,
                ref
            });
        }
    }
};
const traverseFields = ({ callback, fields, fillEmpty = true, parentRef = {}, ref = {} })=>{
    fields.some((field)=>{
        let skip = false;
        const next = ()=>{
            skip = true;
        };
        if (!ref || typeof ref !== 'object') {
            return;
        }
        if (callback && callback({
            field,
            next,
            parentRef,
            ref
        })) {
            return true;
        }
        if (skip) {
            return false;
        }
        // avoid mutation of ref for all fields
        let currentRef = ref;
        let currentParentRef = parentRef;
        if (field.type === 'tabs' && 'tabs' in field) {
            for (const tab of field.tabs){
                let tabRef = ref;
                if ('name' in tab && tab.name) {
                    if (!ref[tab.name] || typeof ref[tab.name] !== 'object') {
                        if (fillEmpty) {
                            ref[tab.name] = {};
                        } else {
                            continue;
                        }
                    }
                    tabRef = tabRef[tab.name];
                    if (tab.localized) {
                        for(const key in tabRef){
                            if (tabRef[key] && typeof tabRef[key] === 'object') {
                                traverseFields({
                                    callback,
                                    fields: tab.fields,
                                    fillEmpty,
                                    parentRef: currentParentRef,
                                    ref: tabRef[key]
                                });
                            }
                        }
                        continue;
                    }
                }
                if (callback && callback({
                    field: {
                        ...tab,
                        type: 'tab'
                    },
                    next,
                    parentRef: currentParentRef,
                    ref: tabRef
                })) {
                    return true;
                }
                traverseFields({
                    callback,
                    fields: tab.fields,
                    fillEmpty,
                    parentRef: currentParentRef,
                    ref: tabRef
                });
            }
            return;
        }
        if (field.type !== 'tab' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field) || field.type === 'blocks')) {
            if ('name' in field && field.name) {
                currentParentRef = currentRef;
                if (!ref[field.name]) {
                    if (fillEmpty) {
                        if (field.type === 'group') {
                            ref[field.name] = {};
                        } else if (field.type === 'array' || field.type === 'blocks') {
                            if (field.localized) {
                                ref[field.name] = {};
                            } else {
                                ref[field.name] = [];
                            }
                        }
                    } else {
                        return;
                    }
                }
                currentRef = ref[field.name];
            }
            if (field.type === 'group' && field.localized && currentRef && typeof currentRef === 'object') {
                for(const key in currentRef){
                    if (currentRef[key]) {
                        traverseFields({
                            callback,
                            fields: field.fields,
                            fillEmpty,
                            parentRef: currentParentRef,
                            ref: currentRef[key]
                        });
                    }
                }
                return;
            }
            if ((field.type === 'blocks' || field.type === 'array') && currentRef && typeof currentRef === 'object') {
                if (field.localized) {
                    if (Array.isArray(currentRef)) {
                        return;
                    }
                    for(const key in currentRef){
                        const localeData = currentRef[key];
                        if (!Array.isArray(localeData)) {
                            continue;
                        }
                        traverseArrayOrBlocksField({
                            callback,
                            data: localeData,
                            field,
                            fillEmpty,
                            parentRef: currentParentRef
                        });
                    }
                } else if (Array.isArray(currentRef)) {
                    traverseArrayOrBlocksField({
                        callback,
                        data: currentRef,
                        field,
                        fillEmpty,
                        parentRef: currentParentRef
                    });
                }
            } else if (currentRef && typeof currentRef === 'object' && 'fields' in field) {
                traverseFields({
                    callback,
                    fields: field.fields,
                    fillEmpty,
                    parentRef: currentParentRef,
                    ref: currentRef
                });
            }
        }
    });
}; //# sourceMappingURL=traverseFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/checkDuplicateCollections.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/DuplicateCollection.js [app-rsc] (ecmascript)");
;
const getDuplicates = (arr)=>arr.filter((item, index)=>arr.indexOf(item) !== index);
const checkDuplicateCollections = (collections)=>{
    const duplicateSlugs = getDuplicates(collections.map((c)=>c.slug));
    if (duplicateSlugs.length > 0) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$DuplicateCollection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DuplicateCollection"]('slug', duplicateSlugs);
    }
};
const __TURBOPACK__default__export__ = checkDuplicateCollections;
 //# sourceMappingURL=checkDuplicateCollections.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/realPath.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
  This source code has been taken from https://github.com/vercel/next.js/blob/39498d604c3b25d92a483153fe648a7ee456fbda/packages/next/src/lib/realpath.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_esm__({
    "realpathSync": (()=>realpathSync)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
;
const isWindows = process.platform === 'win32';
const realpathSync = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].realpathSync.native; //# sourceMappingURL=realPath.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/isError.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/be87132327ea28acd4bf7af09a401bac2374cb64/packages/next/src/lib/is-error.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_esm__({
    "isError": (()=>isError)
});
function isError(err) {
    return typeof err === 'object' && err !== null && 'name' in err && 'message' in err;
} //# sourceMappingURL=isError.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/resolveFrom.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/39498d604c3b25d92a483153fe648a7ee456fbda/packages/next/src/lib/resolve-from.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ // source: https://github.com/sindresorhus/resolve-from
__turbopack_esm__({
    "resolveFrom": (()=>resolveFrom)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__ = __turbopack_import__("[externals]/module [external] (module, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$realPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/realPath.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$isError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/isError.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/resolveFrom.js")}`;
    }
};
;
;
;
;
const resolveFrom = (fromDirectory, moduleId, silent)=>{
    if (typeof fromDirectory !== 'string') {
        throw new TypeError(`Expected \`fromDir\` to be of type \`string\`, got \`${typeof fromDirectory}\``);
    }
    if (typeof moduleId !== 'string') {
        throw new TypeError(`Expected \`moduleId\` to be of type \`string\`, got \`${typeof moduleId}\``);
    }
    try {
        fromDirectory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$realPath$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["realpathSync"])(fromDirectory);
    } catch (error) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$isError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isError"])(error) && error.code === 'ENOENT') {
            fromDirectory = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(fromDirectory);
        } else if (silent) {
            return;
        } else {
            throw error;
        }
    }
    const fromFile = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(fromDirectory, 'noop.js');
    const require = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$module__$5b$external$5d$__$28$module$2c$__cjs$29$__["createRequire"])(__TURBOPACK__import$2e$meta__.url);
    const Module = require('module');
    const resolveFileName = ()=>{
        return Module._resolveFilename(moduleId, {
            id: fromFile,
            filename: fromFile,
            paths: Module._nodeModulePaths(fromDirectory)
        });
    };
    if (silent) {
        try {
            return resolveFileName();
        } catch (error) {
            return;
        }
    }
    return resolveFileName();
}; //# sourceMappingURL=resolveFrom.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findUp": (()=>findUp),
    "findUpSync": (()=>findUpSync),
    "pathExistsAndIsAccessible": (()=>pathExistsAndIsAccessible),
    "pathExistsAndIsAccessibleSync": (()=>pathExistsAndIsAccessibleSync)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
;
;
function findUpSync({ condition, dir, fileNames }) {
    const { root } = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].parse(dir);
    while(true){
        if (fileNames?.length) {
            let found = false;
            for (const fileName of fileNames){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(dir, fileName);
                const exists = pathExistsAndIsAccessibleSync(filePath);
                if (exists) {
                    if (!condition) {
                        return filePath;
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
                ;
                continue;
            }
        }
        const result = condition(dir);
        if (result === true) {
            return dir;
        }
        if (typeof result === 'string' && result?.length) {
            return result;
        }
        if (dir === root) {
            return null // Reached the root directory without a match.
            ;
        }
        dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
        ;
    }
}
async function findUp({ condition, dir, fileNames }) {
    const { root } = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].parse(dir);
    while(true){
        if (fileNames?.length) {
            let found = false;
            for (const fileName of fileNames){
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dir, fileName);
                const exists = await pathExistsAndIsAccessible(filePath);
                if (exists) {
                    if (!condition) {
                        return filePath;
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
                ;
                continue;
            }
        }
        const result = await condition(dir);
        if (result === true) {
            return dir;
        }
        if (typeof result === 'string' && result?.length) {
            return result;
        }
        if (dir === root) {
            return null // Reached the root directory without a match.
            ;
        }
        dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(dir) // Move up one directory level.
        ;
    }
}
function pathExistsAndIsAccessibleSync(path) {
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].accessSync(path);
        return true;
    } catch  {
        return false;
    }
}
async function pathExistsAndIsAccessible(path) {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.access(path);
        return true;
    } catch  {
        return false;
    }
} //# sourceMappingURL=findUp.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/getDependencies.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/*
  This source code has been taken and modified from https://github.com/vercel/next.js/blob/41a80533f900467e1b788bd2673abe2dca20be6a/packages/next/src/lib/has-necessary-dependencies.ts

  License:

  The MIT License (MIT)

  Copyright (c) 2024 Vercel, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/ __turbopack_esm__({
    "getDependencies": (()=>getDependencies)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$resolveFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/resolveFrom.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/getDependencies.js")}`;
    }
};
;
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
const payloadPkgDirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(dirname, '../../../') // pkg dir (outside src)
;
// if node_modules is in payloadPkgDirname, go to parent dir which contains node_modules
if (payloadPkgDirname.includes('node_modules')) {
    payloadPkgDirname.split('node_modules').slice(0, -1);
}
const resolvedCwd = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd());
async function getDependencies(baseDir, requiredPackages) {
    const resolutions = new Map();
    const missingPackages = [];
    await Promise.all(requiredPackages.map(async (pkg)=>{
        try {
            const pkgPath = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].realpath((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$resolveFrom$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveFrom"])(baseDir, pkg));
            const pkgDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(pkgPath);
            let packageJsonFilePath = null;
            const foundPackageJsonDir = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUp"])({
                dir: pkgDir,
                fileNames: [
                    'package.json'
                ]
            });
            if (foundPackageJsonDir) {
                const resolvedFoundPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(foundPackageJsonDir);
                if (resolvedFoundPath.startsWith(resolvedCwd) || resolvedFoundPath.startsWith(payloadPkgDirname)) {
                    // We don't want to match node modules outside the user's project. Checking for both process.cwd and dirname is a reliable way to do this.
                    packageJsonFilePath = resolvedFoundPath;
                }
            }
            // No need to check if packageJsonFilePath exists - findUp checks that for us
            if (packageJsonFilePath) {
                // parse version
                const packageJson = JSON.parse(await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(packageJsonFilePath, 'utf8'));
                const version = packageJson.version;
                resolutions.set(pkg, {
                    path: packageJsonFilePath,
                    version
                });
            } else {
                return missingPackages.push(pkg);
            }
        } catch (_) {
            return missingPackages.push(pkg);
        }
    }));
    return {
        missing: missingPackages,
        resolved: resolutions
    };
} //# sourceMappingURL=getDependencies.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/versionUtils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "compareVersions": (()=>compareVersions),
    "parseVersion": (()=>parseVersion)
});
function parseVersion(version) {
    const [mainVersion, ...preReleases] = version.split('-');
    const parts = mainVersion.split('.').map(Number);
    return {
        parts,
        preReleases
    };
}
function extractNumbers(str) {
    const matches = str.match(/\d+/g) || [];
    return matches.map(Number);
}
function comparePreRelease(v1, v2) {
    const num1 = extractNumbers(v1);
    const num2 = extractNumbers(v2);
    for(let i = 0; i < Math.max(num1.length, num2.length); i++){
        if ((num1[i] || 0) < (num2[i] || 0)) {
            return -1;
        }
        if ((num1[i] || 0) > (num2[i] || 0)) {
            return 1;
        }
    }
    // If numeric parts are equal, compare the whole string
    if (v1 < v2) {
        return -1;
    }
    if (v1 > v2) {
        return 1;
    }
    return 0;
}
function compareVersions(compare, to, customVersionParser) {
    const { parts: parts1, preReleases: preReleases1 } = customVersionParser ? customVersionParser(compare) : parseVersion(compare);
    const { parts: parts2, preReleases: preReleases2 } = customVersionParser ? customVersionParser(to) : parseVersion(to);
    // Compare main version parts
    for(let i = 0; i < Math.max(parts1.length, parts2.length); i++){
        if ((parts1[i] || 0) > (parts2[i] || 0)) {
            return 'greater';
        }
        if ((parts1[i] || 0) < (parts2[i] || 0)) {
            return 'lower';
        }
    }
    // Compare pre-release parts if main versions are equal
    if (preReleases1?.length || preReleases2?.length) {
        for(let i = 0; i < Math.max(preReleases1.length, preReleases2.length); i++){
            if (!preReleases1[i]) {
                return 'greater';
            }
            if (!preReleases2[i]) {
                return 'lower';
            }
            const result = comparePreRelease(preReleases1[i], preReleases2[i]);
            if (result !== 0) {
                return result === 1 ? 'greater' : 'lower';
            }
        // Equal => continue for loop to check for next pre-release part
        }
    }
    return 'equal';
} //# sourceMappingURL=versionUtils.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkDependencies": (()=>checkDependencies)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/getDependencies.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$versionUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/versionUtils.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/dependencies/dependencyChecker.js")}`;
    }
};
;
;
;
;
const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
async function checkDependencies({ dependencyGroups, dependencyVersions }) {
    if (dependencyGroups?.length) {
        for (const dependencyGroup of dependencyGroups){
            const resolvedDependencies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDependencies"])(dirname, dependencyGroup.dependencies);
            // Go through each resolved dependency. If any dependency has a mismatching version, throw an error
            const foundVersions = {};
            for (const [_pkg, { version }] of resolvedDependencies.resolved){
                if (!Object.keys(foundVersions).includes(version)) {
                    foundVersions[version] = _pkg;
                }
            }
            if (Object.keys(foundVersions).length > 1) {
                const targetVersion = dependencyGroup.targetVersion ?? resolvedDependencies.resolved.get(dependencyGroup.targetVersionDependency)?.version;
                if (targetVersion) {
                    const formattedVersionsWithPackageNameString = Object.entries(foundVersions).filter(([version])=>version !== targetVersion).map(([version, pkg])=>`${pkg}@${version} (Please change this to ${targetVersion})`).join(', ');
                    throw new Error(`Mismatching "${dependencyGroup.name}" dependency versions found: ${formattedVersionsWithPackageNameString}. All "${dependencyGroup.name}" packages must have the same version. This is an error with your set-up, not a bug in Payload. Please go to your package.json and ensure all "${dependencyGroup.name}" packages have the same version.`);
                } else {
                    const formattedVersionsWithPackageNameString = Object.entries(foundVersions).map(([version, pkg])=>`${pkg}@${version}`).join(', ');
                    throw new Error(`Mismatching "${dependencyGroup.name}" dependency versions found: ${formattedVersionsWithPackageNameString}. All "${dependencyGroup.name}" packages must have the same version. This is an error with your set-up, not a bug in Payload. Please go to your package.json and ensure all "${dependencyGroup.name}" packages have the same version.`);
                }
            }
        }
    }
    if (dependencyVersions && Object.keys(dependencyVersions).length) {
        const resolvedDependencies = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$getDependencies$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDependencies"])(dirname, Object.keys(dependencyVersions));
        for (const [dependency, settings] of Object.entries(dependencyVersions)){
            const resolvedDependency = resolvedDependencies.resolved.get(dependency);
            if (!resolvedDependency) {
                if (!settings.required) {
                    continue;
                }
                throw new Error(`Dependency ${dependency} not found. Please ensure it is installed.`);
            }
            if (settings.version) {
                const settingsVersionToCheck = settings.version.startsWith('>=') ? settings.version.slice(2) : settings.version;
                const versionCompareResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$dependencies$2f$versionUtils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compareVersions"])(resolvedDependency.version, settingsVersionToCheck, settings.customVersionParser);
                if (settings.version.startsWith('>=')) {
                    if (versionCompareResult === 'lower') {
                        throw new Error(`Dependency ${dependency} is on version ${resolvedDependency.version}, but ${settings.version} or greater is required. Please update this dependency.`);
                    }
                } else if (versionCompareResult === 'lower' || versionCompareResult === 'greater') {
                    throw new Error(`Dependency ${dependency} is on version ${resolvedDependency.version}, but ${settings.version} is required. Please update this dependency.`);
                }
            }
        }
    }
} //# sourceMappingURL=dependencyChecker.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getCollectionIDFieldTypes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 *  While the default ID is determined by the db adapter, it can still differ for a collection if they
 *  define a custom ID field. This builds a map of collection slugs to their ID field type.
 * @param defaultIDType as defined by the database adapter
 */ __turbopack_esm__({
    "getCollectionIDFieldTypes": (()=>getCollectionIDFieldTypes)
});
function getCollectionIDFieldTypes({ config, defaultIDType }) {
    return config.collections.reduce((acc, collection)=>{
        const customCollectionIdField = collection.fields.find((field)=>'name' in field && field.name === 'id');
        acc[collection.slug] = defaultIDType === 'text' ? 'string' : 'number';
        if (customCollectionIdField) {
            acc[collection.slug] = customCollectionIdField.type === 'number' ? 'number' : 'string';
        }
        return acc;
    }, {});
} //# sourceMappingURL=getCollectionIDFieldTypes.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/configToJSONSchema.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "authCollectionToOperationsJSONSchema": (()=>authCollectionToOperationsJSONSchema),
    "configToJSONSchema": (()=>configToJSONSchema),
    "entityToJSONSchema": (()=>entityToJSONSchema),
    "fieldsToJSONSchema": (()=>fieldsToJSONSchema),
    "fieldsToSelectJSONSchema": (()=>fieldsToSelectJSONSchema),
    "withNullableJSONSchemaType": (()=>withNullableJSONSchemaType)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/pluralize@8.0.0/node_modules/pluralize/pluralize.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getCollectionIDFieldTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getCollectionIDFieldTypes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/deepCopyObject.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$generateJobsJSONSchemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/queues/config/generateJobsJSONSchemas.js [app-rsc] (ecmascript)");
;
const { singular } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
;
;
;
;
;
;
const fieldIsRequired = (field)=>{
    const isConditional = Boolean(field?.admin && field?.admin?.condition);
    if (isConditional) {
        return false;
    }
    const isMarkedRequired = 'required' in field && field.required === true;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && isMarkedRequired) {
        return true;
    }
    // if any subfields are required, this field is required
    if ('fields' in field && field.type !== 'array') {
        return field.flattenedFields.some((subField)=>fieldIsRequired(subField));
    }
    return false;
};
function buildOptionEnums(options) {
    return options.map((option)=>{
        if (typeof option === 'object' && 'value' in option) {
            return option.value;
        }
        return option;
    });
}
function generateEntitySchemas(entities) {
    const properties = [
        ...entities
    ].reduce((acc, { slug })=>{
        acc[slug] = {
            $ref: `#/definitions/${slug}`
        };
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function generateEntitySelectSchemas(entities) {
    const properties = [
        ...entities
    ].reduce((acc, { slug })=>{
        acc[slug] = {
            $ref: `#/definitions/${slug}_select`
        };
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function generateCollectionJoinsSchemas(collections) {
    const properties = [
        ...collections
    ].reduce((acc, { slug, joins })=>{
        const schema = {
            type: 'object',
            additionalProperties: false,
            properties: {},
            required: []
        };
        for(const collectionSlug in joins){
            for (const join of joins[collectionSlug]){
                schema.properties[join.joinPath] = {
                    type: 'string',
                    enum: [
                        collectionSlug
                    ]
                };
                schema.required.push(join.joinPath);
            }
        }
        if (Object.keys(schema.properties).length > 0) {
            acc[slug] = schema;
        }
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function generateLocaleEntitySchemas(localization) {
    if (localization && 'locales' in localization && localization?.locales) {
        const localesFromConfig = localization?.locales;
        const locales = [
            ...localesFromConfig
        ].map((locale)=>{
            return locale.code;
        }, []);
        return {
            type: 'string',
            enum: locales
        };
    }
    return {
        type: 'null'
    };
}
function generateAuthEntitySchemas(entities) {
    const properties = [
        ...entities
    ].filter(({ auth })=>Boolean(auth)).map(({ slug })=>{
        return {
            allOf: [
                {
                    $ref: `#/definitions/${slug}`
                },
                {
                    type: 'object',
                    additionalProperties: false,
                    properties: {
                        collection: {
                            type: 'string',
                            enum: [
                                slug
                            ]
                        }
                    },
                    required: [
                        'collection'
                    ]
                }
            ]
        };
    }, {});
    return {
        oneOf: properties
    };
}
/**
 * Generates the JSON Schema for database configuration
 *
 * @example { db: idType: string }
 */ function generateDbEntitySchema(config) {
    const defaultIDType = config.db?.defaultIDType === 'number' ? {
        type: 'number'
    } : {
        type: 'string'
    };
    return {
        type: 'object',
        additionalProperties: false,
        properties: {
            defaultIDType
        },
        required: [
            'defaultIDType'
        ]
    };
}
function withNullableJSONSchemaType(fieldType, isRequired) {
    const fieldTypes = [
        fieldType
    ];
    if (isRequired) {
        return fieldType;
    }
    fieldTypes.push('null');
    return fieldTypes;
}
function entityOrFieldToJsDocs({ config, entity, i18n }) {
    let description = undefined;
    if (entity?.admin?.description) {
        if (typeof entity?.admin?.description === 'string') {
            description = entity?.admin?.description;
        } else if (typeof entity?.admin?.description === 'object') {
            const defaultLocale = config?.localization ? config?.localization?.defaultLocale : undefined;
            if (entity?.admin?.description?.en) {
                description = entity?.admin?.description?.en;
            } else if (entity?.admin?.description?.[defaultLocale]) {
                description = entity?.admin?.description?.[defaultLocale];
            }
        } else if (typeof entity?.admin?.description === 'function' && i18n) {
            description = entity?.admin?.description(i18n);
        }
    }
    return description;
}
function fieldsToJSONSchema(/**
   * Used for relationship fields, to determine whether to use a string or number type for the ID.
   * While there is a default ID field type set by the db adapter, they can differ on a collection-level
   * if they have custom ID fields.
   */ collectionIDFieldTypes, fields, /**
   * Allows you to define new top-level interfaces that can be re-used in the output schema.
   */ interfaceNameDefinitions, config, i18n) {
    const requiredFieldNames = new Set();
    return {
        properties: Object.fromEntries(fields.reduce((fieldSchemas, field)=>{
            const isRequired = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && fieldIsRequired(field);
            if (isRequired) {
                requiredFieldNames.add(field.name);
            }
            const fieldDescription = entityOrFieldToJsDocs({
                config,
                entity: field,
                i18n
            });
            const baseFieldSchema = {};
            if (fieldDescription) {
                baseFieldSchema.description = fieldDescription;
            }
            let fieldSchema;
            switch(field.type){
                case 'array':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                type: 'object',
                                additionalProperties: false,
                                ...fieldsToJSONSchema(collectionIDFieldTypes, field.flattenedFields, interfaceNameDefinitions, config, i18n)
                            }
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                case 'blocks':
                    {
                        // Check for a case where no blocks are provided.
                        // We need to generate an empty array for this case, note that JSON schema 4 doesn't support empty arrays
                        // so the best we can get is `unknown[]`
                        const hasBlocks = Boolean(field.blocks.length);
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: hasBlocks ? {
                                oneOf: field.blocks.map((block)=>{
                                    const blockFieldSchemas = fieldsToJSONSchema(collectionIDFieldTypes, block.flattenedFields, interfaceNameDefinitions, config, i18n);
                                    const blockSchema = {
                                        type: 'object',
                                        additionalProperties: false,
                                        properties: {
                                            ...blockFieldSchemas.properties,
                                            blockType: {
                                                const: block.slug
                                            }
                                        },
                                        required: [
                                            'blockType',
                                            ...blockFieldSchemas.required
                                        ]
                                    };
                                    if (block.interfaceName) {
                                        interfaceNameDefinitions.set(block.interfaceName, blockSchema);
                                        return {
                                            $ref: `#/definitions/${block.interfaceName}`
                                        };
                                    }
                                    return blockSchema;
                                })
                            } : {}
                        };
                        break;
                    }
                case 'checkbox':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('boolean', isRequired)
                        };
                        break;
                    }
                case 'code':
                case 'date':
                case 'email':
                case 'textarea':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('string', isRequired)
                        };
                        break;
                    }
                case 'group':
                case 'tab':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: 'object',
                            additionalProperties: false,
                            ...fieldsToJSONSchema(collectionIDFieldTypes, field.flattenedFields, interfaceNameDefinitions, config, i18n)
                        };
                        if (field.interfaceName) {
                            interfaceNameDefinitions.set(field.interfaceName, fieldSchema);
                            fieldSchema = {
                                $ref: `#/definitions/${field.interfaceName}`
                            };
                        }
                        break;
                    }
                case 'join':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('object', false),
                            additionalProperties: false,
                            properties: {
                                docs: {
                                    type: withNullableJSONSchemaType('array', false),
                                    items: {
                                        oneOf: [
                                            {
                                                type: collectionIDFieldTypes[field.collection]
                                            },
                                            {
                                                $ref: `#/definitions/${field.collection}`
                                            }
                                        ]
                                    }
                                },
                                hasNextPage: {
                                    type: withNullableJSONSchemaType('boolean', false)
                                }
                            }
                        };
                        break;
                    }
                case 'json':
                    {
                        fieldSchema = field.jsonSchema?.schema || {
                            ...baseFieldSchema,
                            type: [
                                'object',
                                'array',
                                'string',
                                'number',
                                'boolean',
                                'null'
                            ]
                        };
                        break;
                    }
                case 'number':
                    {
                        if (field.hasMany === true) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'number'
                                }
                            };
                        } else {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('number', isRequired)
                            };
                        }
                        break;
                    }
                case 'point':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: [
                                {
                                    type: 'number'
                                },
                                {
                                    type: 'number'
                                }
                            ],
                            maxItems: 2,
                            minItems: 2
                        };
                        break;
                    }
                case 'radio':
                    {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('string', isRequired),
                            enum: buildOptionEnums(field.options)
                        };
                        break;
                    }
                case 'relationship':
                case 'upload':
                    {
                        if (Array.isArray(field.relationTo)) {
                            if (field.hasMany) {
                                fieldSchema = {
                                    ...baseFieldSchema,
                                    type: withNullableJSONSchemaType('array', isRequired),
                                    items: {
                                        oneOf: field.relationTo.map((relation)=>{
                                            return {
                                                type: 'object',
                                                additionalProperties: false,
                                                properties: {
                                                    relationTo: {
                                                        const: relation
                                                    },
                                                    value: {
                                                        oneOf: [
                                                            {
                                                                type: collectionIDFieldTypes[relation]
                                                            },
                                                            {
                                                                $ref: `#/definitions/${relation}`
                                                            }
                                                        ]
                                                    }
                                                },
                                                required: [
                                                    'value',
                                                    'relationTo'
                                                ]
                                            };
                                        })
                                    }
                                };
                            } else {
                                fieldSchema = {
                                    ...baseFieldSchema,
                                    oneOf: field.relationTo.map((relation)=>{
                                        return {
                                            type: withNullableJSONSchemaType('object', isRequired),
                                            additionalProperties: false,
                                            properties: {
                                                relationTo: {
                                                    const: relation
                                                },
                                                value: {
                                                    oneOf: [
                                                        {
                                                            type: collectionIDFieldTypes[relation]
                                                        },
                                                        {
                                                            $ref: `#/definitions/${relation}`
                                                        }
                                                    ]
                                                }
                                            },
                                            required: [
                                                'value',
                                                'relationTo'
                                            ]
                                        };
                                    })
                                };
                            }
                        } else if (field.hasMany) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    oneOf: [
                                        {
                                            type: collectionIDFieldTypes[field.relationTo]
                                        },
                                        {
                                            $ref: `#/definitions/${field.relationTo}`
                                        }
                                    ]
                                }
                            };
                        } else {
                            fieldSchema = {
                                ...baseFieldSchema,
                                oneOf: [
                                    {
                                        type: withNullableJSONSchemaType(collectionIDFieldTypes[field.relationTo], isRequired)
                                    },
                                    {
                                        $ref: `#/definitions/${field.relationTo}`
                                    }
                                ]
                            };
                        }
                        break;
                    }
                case 'richText':
                    {
                        if (!field?.editor) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                            ;
                        }
                        if (typeof field.editor === 'function') {
                            throw new Error('Attempted to access unsanitized rich text editor.');
                        }
                        if (field.editor.outputSchema) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                ...field.editor.outputSchema({
                                    collectionIDFieldTypes,
                                    config,
                                    field,
                                    i18n,
                                    interfaceNameDefinitions,
                                    isRequired
                                })
                            };
                        } else {
                            // Maintain backwards compatibility with existing rich text editors
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'object'
                                }
                            };
                        }
                        break;
                    }
                case 'select':
                    {
                        const optionEnums = buildOptionEnums(field.options);
                        if (field.hasMany) {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('array', isRequired),
                                items: {
                                    type: 'string'
                                }
                            };
                            if (optionEnums?.length) {
                                ;
                                fieldSchema.items.enum = optionEnums;
                            }
                        } else {
                            fieldSchema = {
                                ...baseFieldSchema,
                                type: withNullableJSONSchemaType('string', isRequired)
                            };
                            if (optionEnums?.length) {
                                fieldSchema.enum = optionEnums;
                            }
                        }
                        break;
                    }
                case 'text':
                    if (field.hasMany === true) {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('array', isRequired),
                            items: {
                                type: 'string'
                            }
                        };
                    } else {
                        fieldSchema = {
                            ...baseFieldSchema,
                            type: withNullableJSONSchemaType('string', isRequired)
                        };
                    }
                    break;
                default:
                    {
                        break;
                    }
            }
            if ('typescriptSchema' in field && field?.typescriptSchema?.length) {
                for (const schema of field.typescriptSchema){
                    fieldSchema = schema({
                        jsonSchema: fieldSchema
                    });
                }
            }
            if (fieldSchema && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field)) {
                fieldSchemas.set(field.name, fieldSchema);
            }
            return fieldSchemas;
        }, new Map())),
        required: Array.from(requiredFieldNames)
    };
}
function entityToJSONSchema(config, incomingEntity, interfaceNameDefinitions, defaultIDType, collectionIDFieldTypes, i18n) {
    if (!collectionIDFieldTypes) {
        collectionIDFieldTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getCollectionIDFieldTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionIDFieldTypes"])({
            config,
            defaultIDType
        });
    }
    const entity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$deepCopyObject$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deepCopyObject"])(incomingEntity);
    const title = entity.typescript?.interface ? entity.typescript.interface : singular((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toWords"])(entity.slug, true));
    const idField = {
        name: 'id',
        type: defaultIDType,
        required: true
    };
    const customIdField = entity.flattenedFields.find((field)=>field.name === 'id');
    if (customIdField && customIdField.type !== 'group' && customIdField.type !== 'tab') {
        customIdField.required = true;
    } else {
        entity.flattenedFields.unshift(idField);
    }
    // mark timestamp fields required
    if ('timestamps' in entity && entity.timestamps !== false) {
        entity.flattenedFields = entity.flattenedFields.map((field)=>{
            if (field.name === 'createdAt' || field.name === 'updatedAt') {
                return {
                    ...field,
                    required: true
                };
            }
            return field;
        });
    }
    if ('auth' in entity && entity.auth && (!entity.auth?.disableLocalStrategy || typeof entity.auth?.disableLocalStrategy === 'object' && entity.auth.disableLocalStrategy.enableFields)) {
        entity.flattenedFields.push({
            name: 'password',
            type: 'text'
        });
    }
    const jsonSchema = {
        type: 'object',
        additionalProperties: false,
        title,
        ...fieldsToJSONSchema(collectionIDFieldTypes, entity.flattenedFields, interfaceNameDefinitions, config, i18n)
    };
    const entityDescription = entityOrFieldToJsDocs({
        config,
        entity,
        i18n
    });
    if (entityDescription) {
        jsonSchema.description = entityDescription;
    }
    return jsonSchema;
}
function fieldsToSelectJSONSchema({ fields, interfaceNameDefinitions }) {
    const schema = {
        type: 'object',
        additionalProperties: false,
        properties: {}
    };
    for (const field of fields){
        switch(field.type){
            case 'array':
            case 'group':
            case 'tab':
                {
                    let fieldSchema = fieldsToSelectJSONSchema({
                        fields: field.flattenedFields,
                        interfaceNameDefinitions
                    });
                    if (field.interfaceName) {
                        const definition = `${field.interfaceName}_select`;
                        interfaceNameDefinitions.set(definition, fieldSchema);
                        fieldSchema = {
                            $ref: `#/definitions/${definition}`
                        };
                    }
                    schema.properties[field.name] = {
                        oneOf: [
                            {
                                type: 'boolean'
                            },
                            fieldSchema
                        ]
                    };
                    break;
                }
            case 'blocks':
                {
                    const blocksSchema = {
                        type: 'object',
                        additionalProperties: false,
                        properties: {}
                    };
                    for (const block of field.blocks){
                        let blockSchema = fieldsToSelectJSONSchema({
                            fields: block.flattenedFields,
                            interfaceNameDefinitions
                        });
                        if (block.interfaceName) {
                            const definition = `${block.interfaceName}_select`;
                            interfaceNameDefinitions.set(definition, blockSchema);
                            blockSchema = {
                                $ref: `#/definitions/${definition}`
                            };
                        }
                        blocksSchema.properties[block.slug] = {
                            oneOf: [
                                {
                                    type: 'boolean'
                                },
                                blockSchema
                            ]
                        };
                    }
                    schema.properties[field.name] = {
                        oneOf: [
                            {
                                type: 'boolean'
                            },
                            blocksSchema
                        ]
                    };
                    break;
                }
            default:
                schema.properties[field.name] = {
                    type: 'boolean'
                };
                break;
        }
    }
    return schema;
}
const fieldType = {
    type: 'string',
    required: false
};
const generateAuthFieldTypes = ({ type, loginWithUsername })=>{
    if (loginWithUsername) {
        switch(type){
            case 'forgotOrUnlock':
                {
                    if (loginWithUsername.allowEmailLogin) {
                        // allow email or username for unlock/forgot-password
                        return {
                            additionalProperties: false,
                            oneOf: [
                                {
                                    additionalProperties: false,
                                    properties: {
                                        email: fieldType
                                    },
                                    required: [
                                        'email'
                                    ]
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        username: fieldType
                                    },
                                    required: [
                                        'username'
                                    ]
                                }
                            ]
                        };
                    } else {
                        // allow only username for unlock/forgot-password
                        return {
                            additionalProperties: false,
                            properties: {
                                username: fieldType
                            },
                            required: [
                                'username'
                            ]
                        };
                    }
                }
            case 'login':
                {
                    if (loginWithUsername.allowEmailLogin) {
                        // allow username or email and require password for login
                        return {
                            additionalProperties: false,
                            oneOf: [
                                {
                                    additionalProperties: false,
                                    properties: {
                                        email: fieldType,
                                        password: fieldType
                                    },
                                    required: [
                                        'email',
                                        'password'
                                    ]
                                },
                                {
                                    additionalProperties: false,
                                    properties: {
                                        password: fieldType,
                                        username: fieldType
                                    },
                                    required: [
                                        'username',
                                        'password'
                                    ]
                                }
                            ]
                        };
                    } else {
                        // allow only username and password for login
                        return {
                            additionalProperties: false,
                            properties: {
                                password: fieldType,
                                username: fieldType
                            },
                            required: [
                                'username',
                                'password'
                            ]
                        };
                    }
                }
            case 'register':
                {
                    const requiredFields = [
                        'password'
                    ];
                    const properties = {
                        password: fieldType,
                        username: fieldType
                    };
                    if (loginWithUsername.requireEmail) {
                        requiredFields.push('email');
                    }
                    if (loginWithUsername.requireUsername) {
                        requiredFields.push('username');
                    }
                    if (loginWithUsername.requireEmail || loginWithUsername.allowEmailLogin) {
                        properties.email = fieldType;
                    }
                    return {
                        additionalProperties: false,
                        properties,
                        required: requiredFields
                    };
                }
        }
    }
    // default email (and password for login/register)
    return {
        additionalProperties: false,
        properties: {
            email: fieldType,
            password: fieldType
        },
        required: [
            'email',
            'password'
        ]
    };
};
function authCollectionToOperationsJSONSchema(config) {
    const loginWithUsername = config.auth?.loginWithUsername;
    const loginUserFields = generateAuthFieldTypes({
        type: 'login',
        loginWithUsername
    });
    const forgotOrUnlockUserFields = generateAuthFieldTypes({
        type: 'forgotOrUnlock',
        loginWithUsername
    });
    const registerUserFields = generateAuthFieldTypes({
        type: 'register',
        loginWithUsername
    });
    const properties = {
        forgotPassword: forgotOrUnlockUserFields,
        login: loginUserFields,
        registerFirstUser: registerUserFields,
        unlock: forgotOrUnlockUserFields
    };
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties),
        title: `${singular((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toWords"])(`${config.slug}`, true))}AuthOperations`
    };
}
function generateAuthOperationSchemas(collections) {
    const properties = collections.reduce((acc, collection)=>{
        if (collection.auth) {
            acc[collection.slug] = {
                $ref: `#/definitions/auth/${collection.slug}`
            };
        }
        return acc;
    }, {});
    return {
        type: 'object',
        additionalProperties: false,
        properties,
        required: Object.keys(properties)
    };
}
function configToJSONSchema(config, defaultIDType, i18n) {
    // a mutable Map to store custom top-level `interfaceName` types. Fields with an `interfaceName` property will be moved to the top-level definitions here
    const interfaceNameDefinitions = new Map();
    //  Used for relationship fields, to determine whether to use a string or number type for the ID.
    const collectionIDFieldTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$getCollectionIDFieldTypes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCollectionIDFieldTypes"])({
        config,
        defaultIDType
    });
    // Collections and Globals have to be moved to the top-level definitions as well. Reason: The top-level type will be the `Config` type - we don't want all collection and global
    // types to be inlined inside the `Config` type
    const entities = [
        ...config.globals.map((global)=>({
                type: 'global',
                entity: global
            })),
        ...config.collections.map((collection)=>({
                type: 'collection',
                entity: collection
            }))
    ];
    const entityDefinitions = entities.reduce((acc, { type, entity })=>{
        acc[entity.slug] = entityToJSONSchema(config, entity, interfaceNameDefinitions, defaultIDType, collectionIDFieldTypes, i18n);
        const select = fieldsToSelectJSONSchema({
            fields: entity.flattenedFields,
            interfaceNameDefinitions
        });
        if (type === 'global') {
            select.properties.globalType = {
                type: 'boolean'
            };
        }
        acc[`${entity.slug}_select`] = {
            type: 'object',
            additionalProperties: false,
            ...select
        };
        return acc;
    }, {});
    const authOperationDefinitions = [
        ...config.collections
    ].filter(({ auth })=>Boolean(auth)).reduce((acc, authCollection)=>{
        acc.auth[authCollection.slug] = authCollectionToOperationsJSONSchema(authCollection);
        return acc;
    }, {
        auth: {}
    });
    const jobsSchemas = config.jobs ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$queues$2f$config$2f$generateJobsJSONSchemas$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateJobsJSONSchemas"])(config, config.jobs, interfaceNameDefinitions, collectionIDFieldTypes, i18n) : {};
    let jsonSchema = {
        additionalProperties: false,
        definitions: {
            ...entityDefinitions,
            ...Object.fromEntries(interfaceNameDefinitions),
            ...authOperationDefinitions
        },
        // These properties here will be very simple, as all the complexity is in the definitions. These are just the properties for the top-level `Config` type
        type: 'object',
        properties: {
            auth: generateAuthOperationSchemas(config.collections),
            collections: generateEntitySchemas(config.collections || []),
            collectionsJoins: generateCollectionJoinsSchemas(config.collections || []),
            collectionsSelect: generateEntitySelectSchemas(config.collections || []),
            db: generateDbEntitySchema(config),
            globals: generateEntitySchemas(config.globals || []),
            globalsSelect: generateEntitySelectSchemas(config.globals || []),
            locale: generateLocaleEntitySchemas(config.localization),
            user: generateAuthEntitySchemas(config.collections)
        },
        required: [
            'user',
            'locale',
            'collections',
            'collectionsSelect',
            'collectionsJoins',
            'globalsSelect',
            'globals',
            'auth',
            'db',
            'jobs'
        ],
        title: 'Config'
    };
    if (jobsSchemas.definitions?.size) {
        for (const [key, value] of jobsSchemas.definitions){
            jsonSchema.definitions[key] = value;
        }
    }
    if (jobsSchemas.properties) {
        jsonSchema.properties.jobs = {
            type: 'object',
            additionalProperties: false,
            properties: jobsSchemas.properties,
            required: [
                'tasks',
                'workflows'
            ]
        };
    }
    if (config?.typescript?.schema?.length) {
        for (const schema of config.typescript.schema){
            jsonSchema = schema({
                jsonSchema
            });
        }
    }
    return jsonSchema;
} //# sourceMappingURL=configToJSONSchema.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/getEntityPolicies.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getEntityPolicies": (()=>getEntityPolicies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-rsc] (ecmascript)");
;
;
async function getEntityPolicies(args) {
    const { id, type, entity, operations, req } = args;
    const { data, locale, payload, user } = req;
    const isLoggedIn = !!user;
    const policies = {
        fields: {}
    };
    let docBeingAccessed;
    async function getEntityDoc({ where } = {}) {
        if (entity.slug) {
            if (type === 'global') {
                return payload.findGlobal({
                    slug: entity.slug,
                    fallbackLocale: null,
                    locale,
                    overrideAccess: true,
                    req
                });
            }
            if (type === 'collection' && id) {
                if (typeof where === 'object') {
                    const paginatedRes = await payload.find({
                        collection: entity.slug,
                        depth: 0,
                        fallbackLocale: null,
                        limit: 1,
                        locale,
                        overrideAccess: true,
                        pagination: false,
                        req,
                        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["combineQueries"])(where, {
                            id: {
                                equals: id
                            }
                        })
                    });
                    return paginatedRes?.docs?.[0] || undefined;
                }
                return payload.findByID({
                    id,
                    collection: entity.slug,
                    depth: 0,
                    fallbackLocale: null,
                    locale,
                    overrideAccess: true,
                    req
                });
            }
        }
        return undefined;
    }
    const createAccessPromise = async ({ access, accessLevel, disableWhere = false, operation, policiesObj })=>{
        const mutablePolicies = policiesObj;
        if (accessLevel === 'field' && docBeingAccessed === undefined) {
            // assign docBeingAccessed first as the promise to avoid multiple calls to getEntityDoc
            docBeingAccessed = getEntityDoc().then((doc)=>{
                docBeingAccessed = doc;
            });
        }
        // awaiting the promise to ensure docBeingAccessed is assigned before it is used
        await docBeingAccessed;
        // https://payloadcms.slack.com/archives/C048Z9C2BEX/p1702054928343769
        const accessResult = await access({
            id,
            data,
            doc: docBeingAccessed,
            req
        });
        if (typeof accessResult === 'object' && !disableWhere) {
            mutablePolicies[operation] = {
                permission: id || type === 'global' ? !!await getEntityDoc({
                    where: accessResult
                }) : true,
                where: accessResult
            };
        } else if (mutablePolicies[operation]?.permission !== false) {
            mutablePolicies[operation] = {
                permission: !!accessResult
            };
        }
    };
    const executeFieldPolicies = async ({ entityPermission, fields, operation, policiesObj })=>{
        const mutablePolicies = policiesObj.fields;
        // Fields don't have all operations of a collection
        if (operation === 'delete' || operation === 'readVersions' || operation === 'unlock') {
            return;
        }
        await Promise.all(fields.map(async (field)=>{
            if ('name' in field && field.name) {
                if (!mutablePolicies[field.name]) {
                    mutablePolicies[field.name] = {};
                }
                if ('access' in field && field.access && typeof field.access[operation] === 'function') {
                    await createAccessPromise({
                        access: field.access[operation],
                        accessLevel: 'field',
                        disableWhere: true,
                        operation,
                        policiesObj: mutablePolicies[field.name]
                    });
                } else {
                    mutablePolicies[field.name][operation] = {
                        permission: policiesObj[operation]?.permission
                    };
                }
                if ('fields' in field && field.fields) {
                    if (!mutablePolicies[field.name].fields) {
                        mutablePolicies[field.name].fields = {};
                    }
                    await executeFieldPolicies({
                        entityPermission,
                        fields: field.fields,
                        operation,
                        policiesObj: mutablePolicies[field.name]
                    });
                }
                if ('blocks' in field && field.blocks) {
                    if (!mutablePolicies[field.name]?.blocks) {
                        mutablePolicies[field.name].blocks = {};
                    }
                    await Promise.all(field.blocks.map(async (block)=>{
                        if (!mutablePolicies[field.name].blocks?.[block.slug]) {
                            mutablePolicies[field.name].blocks[block.slug] = {
                                fields: {},
                                [operation]: {
                                    permission: entityPermission
                                }
                            };
                        } else if (!mutablePolicies[field.name].blocks[block.slug][operation]) {
                            mutablePolicies[field.name].blocks[block.slug][operation] = {
                                permission: entityPermission
                            };
                        }
                        await executeFieldPolicies({
                            entityPermission,
                            fields: block.fields,
                            operation,
                            policiesObj: mutablePolicies[field.name].blocks[block.slug]
                        });
                    }));
                }
            } else if ('fields' in field && field.fields) {
                await executeFieldPolicies({
                    entityPermission,
                    fields: field.fields,
                    operation,
                    policiesObj
                });
            } else if (field.type === 'tabs') {
                await Promise.all(field.tabs.map(async (tab)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                        if (!mutablePolicies[tab.name]) {
                            mutablePolicies[tab.name] = {
                                fields: {},
                                [operation]: {
                                    permission: entityPermission
                                }
                            };
                        } else if (!mutablePolicies[tab.name][operation]) {
                            mutablePolicies[tab.name][operation] = {
                                permission: entityPermission
                            };
                        }
                        await executeFieldPolicies({
                            entityPermission,
                            fields: tab.fields,
                            operation,
                            policiesObj: mutablePolicies[tab.name]
                        });
                    } else {
                        await executeFieldPolicies({
                            entityPermission,
                            fields: tab.fields,
                            operation,
                            policiesObj
                        });
                    }
                }));
            }
        }));
    };
    await operations.reduce(async (priorOperation, operation)=>{
        await priorOperation;
        let entityAccessPromise;
        if (typeof entity.access[operation] === 'function') {
            entityAccessPromise = createAccessPromise({
                access: entity.access[operation],
                accessLevel: 'entity',
                operation,
                policiesObj: policies
            });
        } else {
            policies[operation] = {
                permission: isLoggedIn
            };
        }
        await entityAccessPromise;
        await executeFieldPolicies({
            entityPermission: policies[operation].permission,
            fields: entity.fields,
            operation,
            policiesObj: policies
        });
    }, Promise.resolve());
    return policies;
} //# sourceMappingURL=getEntityPolicies.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/sanitizePermissions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "recursivelySanitizeCollections": (()=>recursivelySanitizeCollections),
    "recursivelySanitizeGlobals": (()=>recursivelySanitizeGlobals),
    "sanitizePermissions": (()=>sanitizePermissions)
});
function checkAndSanitizeFieldsPermssions(data) {
    let allFieldPermissionsTrue = true;
    for(const key in data){
        if (typeof data[key] === 'object') {
            if (!checkAndSanitizePermissions(data[key])) {
                allFieldPermissionsTrue = false;
            } else {
                ;
                data[key] = true;
            }
        } else if (data[key] !== true) {
            allFieldPermissionsTrue = false;
        }
    }
    // If all values are true or it's an empty object, return true
    return allFieldPermissionsTrue;
}
/**
 * Check if all permissions in a FieldPermissions, CollectionPermission or GlobalPermission object are true.
 * If nested fields or blocks are present, the function will recursively check those as well.
 */ function checkAndSanitizePermissions(data) {
    /**
   * Check blocks permissions
   */ let blocksPermissions = true;
    if ('blocks' in data && data.blocks) {
        for(const blockSlug in data.blocks){
            if (typeof data.blocks[blockSlug] === 'object') {
                for(const key in data.blocks[blockSlug]){
                    /**
           * Check fields in nested blocks
           */ if (key === 'fields') {
                        if (data.blocks[blockSlug].fields) {
                            if (!checkAndSanitizeFieldsPermssions(data.blocks[blockSlug].fields)) {
                                blocksPermissions = false;
                            } else {
                                ;
                                data.blocks[blockSlug].fields = true;
                            }
                        }
                    } else {
                        if (typeof data.blocks[blockSlug][key] === 'object') {
                            /**
               * Check Permissions in nested blocks
               */ if (isPermissionObject(data.blocks[blockSlug][key])) {
                                if (data.blocks[blockSlug][key]['permission'] === true && !('where' in data.blocks[blockSlug][key])) {
                                    // If the permission is true and there is no where clause, set the key to true
                                    data.blocks[blockSlug][key] = true;
                                    continue;
                                } else if (data.blocks[blockSlug][key]['permission'] === true && 'where' in data.blocks[blockSlug][key]) {
                                    // otherwise do nothing so we can keep the where clause
                                    blocksPermissions = false;
                                } else {
                                    blocksPermissions = false;
                                    data.blocks[blockSlug][key] = false;
                                    delete data.blocks[blockSlug][key];
                                    continue;
                                }
                            } else {
                                throw new Error('Unexpected object in block permissions');
                            }
                        }
                    }
                }
            } else if (data.blocks[blockSlug] !== true) {
                // If any value is not true, return false
                blocksPermissions = false;
                delete data.blocks[blockSlug];
            }
        }
        if (blocksPermissions) {
            ;
            data.blocks = true;
        }
    }
    /**
   * Check nested Fields permissions
   */ let fieldsPermissions = true;
    if (data.fields) {
        if (!checkAndSanitizeFieldsPermssions(data.fields)) {
            fieldsPermissions = false;
        } else {
            ;
            data.fields = true;
        }
    }
    /**
   * Check other Permissions objects (e.g. read, write)
   */ let otherPermissions = true;
    for(const key in data){
        if (key === 'fields' || key === 'blocks') {
            continue;
        }
        if (typeof data[key] === 'object') {
            if (isPermissionObject(data[key])) {
                if (data[key]['permission'] === true && !('where' in data[key])) {
                    // If the permission is true and there is no where clause, set the key to true
                    data[key] = true;
                    continue;
                } else if (data[key]['permission'] === true && 'where' in data[key]) {
                    // otherwise do nothing so we can keep the where clause
                    otherPermissions = false;
                } else {
                    otherPermissions = false;
                    data[key] = false;
                    delete data[key];
                    continue;
                }
            } else {
                throw new Error('Unexpected object in fields permissions');
            }
        } else if (data[key] !== true) {
            // If any value is not true, return false
            otherPermissions = false;
        }
    }
    // If all values are true or it's an empty object, return true
    return fieldsPermissions && blocksPermissions && otherPermissions;
}
/**
 * Check if an object is a permission object.
 */ function isPermissionObject(data) {
    return typeof data === 'object' && 'permission' in data && typeof data['permission'] === 'boolean';
}
/**
 * Recursively remove empty objects from an object.
 */ function cleanEmptyObjects(obj) {
    Object.keys(obj).forEach((key)=>{
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            // Recursive call
            cleanEmptyObjects(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
                // Delete the key if the object is empty
                delete obj[key];
            }
        } else if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    });
}
function recursivelySanitizeCollections(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    const collectionPermissions = Object.values(obj);
    for (const collectionPermission of collectionPermissions){
        checkAndSanitizePermissions(collectionPermission);
    }
}
function recursivelySanitizeGlobals(obj) {
    if (typeof obj !== 'object') {
        return;
    }
    const globalPermissions = Object.values(obj);
    for (const globalPermission of globalPermissions){
        checkAndSanitizePermissions(globalPermission);
    }
}
function sanitizePermissions(data) {
    if (data.canAccessAdmin === false) {
        delete data.canAccessAdmin;
    }
    if (data.collections) {
        recursivelySanitizeCollections(data.collections);
    }
    if (data.globals) {
        recursivelySanitizeGlobals(data.globals);
    }
    // Run clean up of empty objects at the end
    cleanEmptyObjects(data);
    return data;
} //# sourceMappingURL=sanitizePermissions.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/sanitizeInternalFields.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const internalFields = [
    '__v'
];
const sanitizeInternalFields = (incomingDoc)=>Object.entries(incomingDoc).reduce((newDoc, [key, val])=>{
        if (key === '_id') {
            return {
                ...newDoc,
                id: val
            };
        }
        if (internalFields.indexOf(key) > -1) {
            return newDoc;
        }
        return {
            ...newDoc,
            [key]: val
        };
    }, {});
const __TURBOPACK__default__export__ = sanitizeInternalFields;
 //# sourceMappingURL=sanitizeInternalFields.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/mapAsync.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mapAsync": (()=>mapAsync)
});
async function mapAsync(arr, callbackfn) {
    return Promise.all(arr.map(callbackfn));
} //# sourceMappingURL=mapAsync.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/checkDocumentLockStatus.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkDocumentLockStatus": (()=>checkDocumentLockStatus)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Locked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/Locked.js [app-rsc] (ecmascript)");
;
const checkDocumentLockStatus = async ({ id, collectionSlug, globalSlug, lockDurationDefault = 300, lockErrorMessage, overrideLock = true, req })=>{
    const { payload } = req;
    // Retrieve the lockDocuments property for either collection or global
    const lockDocumentsProp = collectionSlug ? payload.config?.collections?.find((c)=>c.slug === collectionSlug)?.lockDocuments : payload.config?.globals?.find((g)=>g.slug === globalSlug)?.lockDocuments;
    const isLockingEnabled = lockDocumentsProp !== false;
    let lockedDocumentQuery = {};
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
            globalSlug: {
                equals: globalSlug
            }
        };
    } else {
        throw new Error('Either collectionSlug or globalSlug must be provided.');
    }
    if (!isLockingEnabled) {
        return;
    }
    // Only perform lock checks if overrideLock is false and locking is enabled
    if (!overrideLock) {
        const defaultLockErrorMessage = collectionSlug ? `Document with ID ${id} is currently locked by another user and cannot be modified.` : `Global document with slug "${globalSlug}" is currently locked by another user and cannot be modified.`;
        const finalLockErrorMessage = lockErrorMessage || defaultLockErrorMessage;
        const lockedDocumentResult = await payload.db.find({
            collection: 'payload-locked-documents',
            limit: 1,
            pagination: false,
            req,
            sort: '-updatedAt',
            where: lockedDocumentQuery
        });
        // If there's a locked document, check lock conditions
        const lockedDoc = lockedDocumentResult?.docs[0];
        if (lockedDoc) {
            const lastEditedAt = new Date(lockedDoc?.updatedAt).getTime();
            const now = new Date().getTime();
            const lockDuration = typeof lockDocumentsProp === 'object' ? lockDocumentsProp.duration : lockDurationDefault;
            const lockDurationInMilliseconds = lockDuration * 1000;
            const currentUserId = req.user?.id;
            // document is locked by another user and the lock hasn't expired
            if (lockedDoc.user?.value !== currentUserId && now - lastEditedAt <= lockDurationInMilliseconds) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Locked$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Locked"](finalLockErrorMessage);
            }
        }
    }
    // Perform the delete operation regardless of overrideLock status
    await payload.db.deleteMany({
        collection: 'payload-locked-documents',
        req,
        where: lockedDocumentQuery
    });
}; //# sourceMappingURL=checkDocumentLockStatus.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/logger.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultLoggerOptions": (()=>defaultLoggerOptions),
    "getLogger": (()=>getLogger),
    "prettySyncLoggerDestination": (()=>prettySyncLoggerDestination)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$5$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/pino@9.5.0/node_modules/pino/pino.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$0$2e$0$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/pino-pretty@13.0.0/node_modules/pino-pretty/index.js [app-rsc] (ecmascript)");
;
;
const prettyOptions = {
    colorize: true,
    ignore: 'pid,hostname',
    translateTime: 'SYS:HH:MM:ss'
};
const prettySyncLoggerDestination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$0$2e$0$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["build"])({
    ...prettyOptions,
    destination: 1,
    sync: true
});
const defaultLoggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$2d$pretty$40$13$2e$0$2e$0$2f$node_modules$2f$pino$2d$pretty$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["build"])(prettyOptions);
const getLogger = (name = 'payload', logger)=>{
    if (!logger) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$5$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pino"])(defaultLoggerOptions);
    }
    // Synchronous logger used by bin scripts
    if (logger === 'sync') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$5$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pino"])(prettySyncLoggerDestination);
    }
    // Check if logger is an object
    if ('options' in logger) {
        const { destination, options } = logger;
        if (!options.name) {
            options.name = name;
        }
        if (!options.enabled) {
            options.enabled = process.env.DISABLE_LOGGING !== 'true';
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pino$40$9$2e$5$2e$0$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pino"])(options, destination);
    } else {
        // Instantiated logger
        return logger;
    }
}; //# sourceMappingURL=logger.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/conf/envPaths.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Taken from https://github.com/sindresorhus/env-paths/blob/main/index.js
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ __turbopack_esm__({
    "envPaths": (()=>envPaths)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:process [external] (node:process, cjs)");
;
;
;
const homedir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].homedir();
const tmpdir = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].tmpdir();
const { env } = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"];
const macos = (name)=>{
    const library = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'Library');
    return {
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Caches', name),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Preferences', name),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Application Support', name),
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(library, 'Logs', name),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, name)
    };
};
const windows = (name)=>{
    const appData = env.APPDATA || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'AppData', 'Roaming');
    const localAppData = env.LOCALAPPDATA || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, 'AppData', 'Local');
    return {
        // Data/config/cache/log are invented by me as Windows isn't opinionated about this
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Cache'),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(appData, name, 'Config'),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Data'),
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(localAppData, name, 'Log'),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, name)
    };
};
// https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html
const linux = (name)=>{
    const username = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].basename(homedir);
    return {
        cache: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_CACHE_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.cache'), name),
        config: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_CONFIG_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.config'), name),
        data: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_DATA_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.local', 'share'), name),
        // https://wiki.debian.org/XDGBaseDirectorySpecification#state
        log: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(env.XDG_STATE_HOME || __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(homedir, '.local', 'state'), name),
        temp: __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(tmpdir, username, name)
    };
};
function envPaths(name, { suffix = 'nodejs' } = {}) {
    if (typeof name !== 'string') {
        throw new TypeError(`Expected a string, got ${typeof name}`);
    }
    if (suffix) {
        // Add suffix to prevent possible conflict with native apps
        name += `-${suffix}`;
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].platform === 'darwin') {
        return macos(name);
    }
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"].platform === 'win32') {
        return windows(name);
    }
    return linux(name);
} //# sourceMappingURL=envPaths.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/conf/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Taken & simplified from https://github.com/sindresorhus/conf/blob/main/source/index.ts
 *
 * MIT License
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ __turbopack_esm__({
    "Conf": (()=>Conf)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$assert__$5b$external$5d$__$28$node$3a$assert$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:assert [external] (node:assert, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$envPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/conf/envPaths.js [app-rsc] (ecmascript)");
;
;
;
;
const createPlainObject = ()=>Object.create(null);
const checkValueType = (key, value)=>{
    const nonJsonTypes = new Set([
        'function',
        'symbol',
        'undefined'
    ]);
    const type = typeof value;
    if (nonJsonTypes.has(type)) {
        throw new TypeError(`Setting a value of type \`${type}\` for key \`${key}\` is not allowed as it's not supported by JSON`);
    }
};
class Conf {
    #options;
    _deserialize = (value)=>JSON.parse(value);
    _serialize = (value)=>JSON.stringify(value, undefined, '\t');
    events;
    path;
    constructor(){
        const options = {
            configFileMode: 0o666,
            configName: 'config',
            fileExtension: 'json',
            projectSuffix: 'nodejs'
        };
        const cwd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$envPaths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["envPaths"])('payload', {
            suffix: options.projectSuffix
        }).config;
        this.#options = options;
        this.events = new EventTarget();
        const fileExtension = options.fileExtension ? `.${options.fileExtension}` : '';
        this.path = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].resolve(cwd, `${options.configName ?? 'config'}${fileExtension}`);
        const fileStore = this.store;
        const store = Object.assign(createPlainObject(), fileStore);
        try {
            __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$assert__$5b$external$5d$__$28$node$3a$assert$2c$__cjs$29$__["default"].deepEqual(fileStore, store);
        } catch  {
            this.store = store;
        }
    }
    _ensureDirectory() {
        // Ensure the directory exists as it could have been deleted in the meantime.
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].dirname(this.path), {
            recursive: true
        });
    }
    _write(value) {
        const data = this._serialize(value);
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(this.path, data, {
            mode: this.#options.configFileMode
        });
    }
    /**
   Delete an item.

   @param key - The key of the item to delete.
   */ delete(key) {
        const { store } = this;
        delete store[key];
        this.store = store;
    }
    /**
   Get an item.

   @param key - The key of the item to get.
   */ get(key) {
        const { store } = this;
        return store[key];
    }
    /**
   Set an item or multiple items at once.

   @param key - You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties. Or a hashmap of items to set at once.
   @param value - Must be JSON serializable. Trying to set the type `undefined`, `function`, or `symbol` will result in a `TypeError`.
   */ set(key, value) {
        if (typeof key !== 'string' && typeof key !== 'object') {
            throw new TypeError(`Expected \`key\` to be of type \`string\` or \`object\`, got ${typeof key}`);
        }
        if (typeof key !== 'object' && value === undefined) {
            throw new TypeError('Use `delete()` to clear values');
        }
        const { store } = this;
        const set = (key, value)=>{
            checkValueType(key, value);
            store[key] = value;
        };
        if (typeof key === 'object') {
            const object = key;
            for (const [key, value] of Object.entries(object)){
                set(key, value);
            }
        } else {
            set(key, value);
        }
        this.store = store;
    }
    *[Symbol.iterator]() {
        for (const [key, value] of Object.entries(this.store)){
            yield [
                key,
                value
            ];
        }
    }
    get size() {
        return Object.keys(this.store).length;
    }
    get store() {
        try {
            const dataString = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(this.path, 'utf8');
            const deserializedData = this._deserialize(dataString);
            return Object.assign(createPlainObject(), deserializedData);
        } catch (error) {
            if (error?.code === 'ENOENT') {
                this._ensureDirectory();
                return createPlainObject();
            }
            throw error;
        }
    }
    set store(value) {
        this._ensureDirectory();
        this._write(value);
        this.events.dispatchEvent(new Event('change'));
    }
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "oneWayHash": (()=>oneWayHash)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
;
const oneWayHash = (data, secret)=>{
    const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["createHash"])('sha256');
    // prepend value with payload secret. This ensure one-way.
    hash.update(secret);
    // Update is an append operation, not a replacement. The secret from the prior
    // update is still present!
    hash.update(data);
    return hash.digest('hex');
}; //# sourceMappingURL=oneWayHash.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getLocalizationInfo": (()=>getLocalizationInfo),
    "getPayloadVersion": (()=>getPayloadVersion),
    "sendEvent": (()=>sendEvent)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__ = __turbopack_import__("[externals]/child_process [external] (child_process, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$1$2e$0$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ci-info@4.1.0/node_modules/ci-info/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__ = __turbopack_import__("[externals]/url [external] (url, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/conf/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/oneWayHash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/findUp.js [app-rsc] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_resolve_absolute_path__("node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/index.js")}`;
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
let baseEvent = null;
const sendEvent = async ({ event, payload })=>{
    try {
        const { packageJSON, packageJSONPath } = await getPackageJSON();
        // Only generate the base event once
        if (!baseEvent) {
            const { projectID, source: projectIDSource } = getProjectID(payload, packageJSON);
            baseEvent = {
                ciName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$1$2e$0$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isCI ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$1$2e$0$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].name : null,
                envID: getEnvID(),
                isCI: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ci$2d$info$40$4$2e$1$2e$0$2f$node_modules$2f$ci$2d$info$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].isCI,
                nodeEnv: ("TURBOPACK compile-time value", "development") || 'development',
                nodeVersion: process.version,
                payloadVersion: getPayloadVersion(packageJSON),
                projectID,
                projectIDSource,
                ...getLocalizationInfo(payload),
                dbAdapter: payload.db.name,
                emailAdapter: payload.email?.name || null,
                uploadAdapters: payload.config.upload.adapters
            };
        }
        if (process.env.PAYLOAD_TELEMETRY_DEBUG) {
            payload.logger.info({
                event: {
                    ...baseEvent,
                    ...event,
                    packageJSONPath
                },
                msg: 'Telemetry Event'
            });
            return;
        }
        if (payload.config.telemetry !== false) {
            await fetch('https://telemetry.payloadcms.com/events', {
                body: JSON.stringify({
                    ...baseEvent,
                    ...event
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'post'
            });
        }
    } catch (_) {
    // Eat any errors in sending telemetry event
    }
};
/**
 * This is a quasi-persistent identifier used to dedupe recurring events. It's
 * generated from random data and completely anonymous.
 */ const getEnvID = ()=>{
    const conf = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$conf$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Conf"]();
    const ENV_ID = 'envID';
    const val = conf.get(ENV_ID);
    if (val) {
        return val;
    }
    const generated = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomBytes"])(32).toString('hex');
    conf.set(ENV_ID, generated);
    return generated;
};
const getProjectID = (payload, packageJSON)=>{
    const gitID = getGitID(payload);
    if (gitID) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(gitID, payload.secret),
            source: 'git'
        };
    }
    const packageJSONID = getPackageJSONID(payload, packageJSON);
    if (packageJSONID) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(packageJSONID, payload.secret),
            source: 'packageJSON'
        };
    }
    const serverURL = payload.config.serverURL;
    if (serverURL) {
        return {
            projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(serverURL, payload.secret),
            source: 'serverURL'
        };
    }
    const cwd = process.cwd();
    return {
        projectID: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(cwd, payload.secret),
        source: 'cwd'
    };
};
const getGitID = (payload)=>{
    try {
        const originBuffer = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$child_process__$5b$external$5d$__$28$child_process$2c$__cjs$29$__["execSync"])('git config --local --get remote.origin.url', {
            stdio: 'pipe',
            timeout: 1000
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(String(originBuffer).trim(), payload.secret);
    } catch (_) {
        return null;
    }
};
const getPackageJSON = async ()=>{
    let packageJSONPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].resolve(process.cwd(), 'package.json');
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(packageJSONPath)) {
        // Old logic
        const filename = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$url__$5b$external$5d$__$28$url$2c$__cjs$29$__["fileURLToPath"])(__TURBOPACK__import$2e$meta__.url);
        const dirname = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filename);
        packageJSONPath = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$findUp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findUp"])({
            dir: dirname,
            fileNames: [
                'package.json'
            ]
        });
    }
    const jsonContentString = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.readFile(packageJSONPath, 'utf-8');
    const jsonContent = JSON.parse(jsonContentString);
    return {
        packageJSON: jsonContent,
        packageJSONPath
    };
};
const getPackageJSONID = (payload, packageJSON)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$oneWayHash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["oneWayHash"])(packageJSON.name, payload.secret);
};
const getPayloadVersion = (packageJSON)=>{
    return packageJSON?.dependencies?.payload ?? '';
};
const getLocalizationInfo = (payload)=>{
    if (!payload.config.localization) {
        return {
            locales: [],
            localizationDefaultLocale: null,
            localizationEnabled: false
        };
    }
    return {
        locales: payload.config.localization.localeCodes,
        localizationDefaultLocale: payload.config.localization.defaultLocale,
        localizationEnabled: true
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/events/serverInit.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "serverInit": (()=>serverInit)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/telemetry/index.js [app-rsc] (ecmascript)");
;
const serverInit = (payload)=>{
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$telemetry$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendEvent"])({
        event: {
            type: 'server-init'
        },
        payload
    });
}; //# sourceMappingURL=serverInit.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/parseCookies.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "parseCookies": (()=>parseCookies)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
const parseCookies = (headers)=>{
    const list = new Map();
    const rc = headers.get('Cookie');
    if (rc) {
        rc.split(';').forEach((cookie)=>{
            const parts = cookie.split('=');
            const key = parts.shift().trim();
            const encodedValue = parts.join('=');
            try {
                const decodedValue = decodeURI(encodedValue);
                list.set(key, decodedValue);
            } catch (e) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIError"](`Error decoding cookie value for key ${key}: ${e.message}`);
            }
        });
    }
    return list;
}; //# sourceMappingURL=parseCookies.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/removeUndefined.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript) <export default as flattenTopLevelFields>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({
    "flattenTopLevelFields": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isEntityHidden.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isEntityHidden": (()=>isEntityHidden)
});
const isEntityHidden = ({ hidden, user })=>{
    return typeof hidden === 'function' ? hidden({
        user
    }) : hidden === true;
}; //# sourceMappingURL=isEntityHidden.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatErrors.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatErrors": (()=>formatErrors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/ValidationError.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.11.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-rsc] (ecmascript)");
;
;
const formatErrors = (incoming)=>{
    if (incoming) {
        // Cannot use `instanceof` to check error type: https://github.com/microsoft/TypeScript/issues/13965
        // Instead, get the prototype of the incoming error and check its constructor name
        const proto = Object.getPrototypeOf(incoming);
        // Payload 'ValidationError' and 'APIError'
        if ((proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationErrorName"] || proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APIErrorName"]) && incoming.data) {
            return {
                errors: [
                    {
                        name: incoming.name,
                        data: incoming.data,
                        message: incoming.message
                    }
                ]
            };
        }
        // Mongoose 'ValidationError': https://mongoosejs.com/docs/api/error.html#Error.ValidationError
        if (proto.constructor.name === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$11$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ValidationError$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ValidationErrorName"] && 'errors' in incoming && incoming.errors) {
            return {
                errors: Object.keys(incoming.errors).reduce((acc, key)=>{
                    acc.push({
                        field: incoming.errors[key].path,
                        message: incoming.errors[key].message
                    });
                    return acc;
                }, [])
            };
        }
        if (Array.isArray(incoming.message)) {
            return {
                errors: incoming.message
            };
        }
        if (incoming.name) {
            return {
                errors: [
                    {
                        message: incoming.message
                    }
                ]
            };
        }
    }
    return {
        errors: [
            {
                message: 'An unknown error occurred.'
            }
        ]
    };
}; //# sourceMappingURL=formatErrors.js.map
}}),

};

//# sourceMappingURL=1eaec_payload_dist_utilities_b45386._.js.map