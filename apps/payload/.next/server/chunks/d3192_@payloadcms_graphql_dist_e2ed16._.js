module.exports = {

"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/QueryComplexity.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */ /**
 * Created by Ivo Meißner on 28.07.17.
 */ __turbopack_esm__({
    "QueryComplexity": (()=>QueryComplexity),
    "getComplexity": (()=>getComplexity)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$execution$2f$values$2e$js__$5b$external$5d$__$28$graphql$2f$execution$2f$values$2e$js$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql/execution/values.js [external] (graphql/execution/values.js, cjs)");
;
;
function queryComplexityMessage(max, actual) {
    return `The query exceeds the maximum complexity of ${max}. ` + `Actual complexity is ${actual}`;
}
function getComplexity(options) {
    const typeInfo = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["TypeInfo"](options.schema);
    const errors = [];
    const context = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["ValidationContext"](options.schema, options.query, typeInfo, (error)=>errors.push(error));
    const visitor = new QueryComplexity(context, {
        // Maximum complexity does not matter since we're only interested in the calculated complexity.
        context: options.context,
        estimators: options.estimators,
        maximumComplexity: Infinity,
        operationName: options.operationName,
        variables: options.variables
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["visit"])(options.query, (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["visitWithTypeInfo"])(typeInfo, visitor));
    // Throw first error if any
    if (errors.length) {
        throw errors.pop();
    }
    return visitor.complexity;
}
class QueryComplexity {
    complexity;
    context;
    estimators;
    includeDirectiveDef;
    OperationDefinition;
    options;
    requestContext;
    skipDirectiveDef;
    variableValues;
    constructor(context, options){
        if (!(typeof options.maximumComplexity === 'number' && options.maximumComplexity > 0)) {
            throw new Error('Maximum query complexity must be a positive number');
        }
        this.context = context;
        this.complexity = 0;
        this.options = options;
        this.includeDirectiveDef = this.context.getSchema().getDirective('include');
        this.skipDirectiveDef = this.context.getSchema().getDirective('skip');
        this.estimators = options.estimators;
        this.variableValues = {};
        this.requestContext = options.context;
        this.OperationDefinition = {
            enter: this.onOperationDefinitionEnter,
            leave: this.onOperationDefinitionLeave
        };
    }
    createError() {
        if (typeof this.options.createError === 'function') {
            return this.options.createError(this.options.maximumComplexity, this.complexity);
        }
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLError"](queryComplexityMessage(this.options.maximumComplexity, this.complexity));
    }
    nodeComplexity(node, typeDef) {
        if (node.selectionSet) {
            let fields = {};
            if (typeDef instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"] || typeDef instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInterfaceType"]) {
                fields = typeDef.getFields();
            }
            // Determine all possible types of the current node
            let possibleTypeNames;
            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["isAbstractType"])(typeDef)) {
                possibleTypeNames = this.context.getSchema().getPossibleTypes(typeDef).map((t)=>t.name);
            } else {
                possibleTypeNames = [
                    typeDef.name
                ];
            }
            // Collect complexities for all possible types individually
            const selectionSetComplexities = node.selectionSet.selections.reduce((complexities, childNode)=>{
                // let nodeComplexity = 0;
                let innerComplexities = complexities;
                let includeNode = true;
                let skipNode = false;
                for (const directive of childNode.directives ?? []){
                    const directiveName = directive.name.value;
                    switch(directiveName){
                        case 'include':
                            {
                                const values = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$execution$2f$values$2e$js__$5b$external$5d$__$28$graphql$2f$execution$2f$values$2e$js$2c$__cjs$29$__["getDirectiveValues"])(this.includeDirectiveDef, childNode, this.variableValues || {});
                                if (typeof values.if === 'boolean') {
                                    includeNode = values.if;
                                }
                                break;
                            }
                        case 'skip':
                            {
                                const values = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$execution$2f$values$2e$js__$5b$external$5d$__$28$graphql$2f$execution$2f$values$2e$js$2c$__cjs$29$__["getDirectiveValues"])(this.skipDirectiveDef, childNode, this.variableValues || {});
                                if (typeof values.if === 'boolean') {
                                    skipNode = values.if;
                                }
                                break;
                            }
                    }
                }
                if (!includeNode || skipNode) {
                    return complexities;
                }
                switch(childNode.kind){
                    case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["Kind"].FIELD:
                        {
                            const field = fields[childNode.name.value];
                            // Invalid field, should be caught by other validation rules
                            if (!field) {
                                break;
                            }
                            const fieldType = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["getNamedType"])(field.type);
                            // Get arguments
                            let args;
                            try {
                                args = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$execution$2f$values$2e$js__$5b$external$5d$__$28$graphql$2f$execution$2f$values$2e$js$2c$__cjs$29$__["getArgumentValues"])(field, childNode, this.variableValues || {});
                            } catch (e) {
                                this.context.reportError(e);
                                return complexities;
                            }
                            // Check if we have child complexity
                            let childComplexity = 0;
                            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["isCompositeType"])(fieldType)) {
                                childComplexity = this.nodeComplexity(childNode, fieldType);
                            }
                            // Run estimators one after another and return first valid complexity
                            // score
                            const estimatorArgs = {
                                type: typeDef,
                                args,
                                childComplexity,
                                context: this.requestContext,
                                field,
                                node: childNode
                            };
                            const validScore = this.estimators.find((estimator)=>{
                                const tmpComplexity = estimator(estimatorArgs);
                                if (typeof tmpComplexity === 'number' && !isNaN(tmpComplexity)) {
                                    innerComplexities = addComplexities(tmpComplexity, complexities, possibleTypeNames);
                                    return true;
                                }
                                return false;
                            });
                            if (!validScore) {
                                this.context.reportError(new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLError"](`No complexity could be calculated for field ${typeDef.name}.${field.name}. ` + 'At least one complexity estimator has to return a complexity score.'));
                                return complexities;
                            }
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["Kind"].FRAGMENT_SPREAD:
                        {
                            const fragment = this.context.getFragment(childNode.name.value);
                            // Unknown fragment, should be caught by other validation rules
                            if (!fragment) {
                                break;
                            }
                            const fragmentType = this.context.getSchema().getType(fragment.typeCondition.name.value);
                            // Invalid fragment type, ignore. Should be caught by other validation rules
                            if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["isCompositeType"])(fragmentType)) {
                                break;
                            }
                            const nodeComplexity = this.nodeComplexity(fragment, fragmentType);
                            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["isAbstractType"])(fragmentType)) {
                                // Add fragment complexity for all possible types
                                innerComplexities = addComplexities(nodeComplexity, complexities, this.context.getSchema().getPossibleTypes(fragmentType).map((t)=>t.name));
                            } else {
                                // Add complexity for object type
                                innerComplexities = addComplexities(nodeComplexity, complexities, [
                                    fragmentType.name
                                ]);
                            }
                            break;
                        }
                    case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["Kind"].INLINE_FRAGMENT:
                        {
                            let inlineFragmentType = typeDef;
                            if (childNode.typeCondition && childNode.typeCondition.name) {
                                inlineFragmentType = this.context.getSchema().getType(childNode.typeCondition.name.value);
                                if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["isCompositeType"])(inlineFragmentType)) {
                                    break;
                                }
                            }
                            const nodeComplexity = this.nodeComplexity(childNode, inlineFragmentType);
                            if ((0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["isAbstractType"])(inlineFragmentType)) {
                                // Add fragment complexity for all possible types
                                innerComplexities = addComplexities(nodeComplexity, complexities, this.context.getSchema().getPossibleTypes(inlineFragmentType).map((t)=>t.name));
                            } else {
                                // Add complexity for object type
                                innerComplexities = addComplexities(nodeComplexity, complexities, [
                                    inlineFragmentType.name
                                ]);
                            }
                            break;
                        }
                    default:
                        {
                            innerComplexities = addComplexities(this.nodeComplexity(childNode, typeDef), complexities, possibleTypeNames);
                            break;
                        }
                }
                return innerComplexities;
            }, {});
            // Only return max complexity of all possible types
            if (!selectionSetComplexities) {
                return NaN;
            }
            return Math.max(...Object.values(selectionSetComplexities), 0);
        }
        return 0;
    }
    onOperationDefinitionEnter(operation) {
        if (typeof this.options.operationName === 'string' && this.options.operationName !== operation.name.value) {
            return;
        }
        // Get variable values from variables that are passed from options, merged
        // with default values defined in the operation
        const { coerced, errors } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$execution$2f$values$2e$js__$5b$external$5d$__$28$graphql$2f$execution$2f$values$2e$js$2c$__cjs$29$__["getVariableValues"])(this.context.getSchema(), operation.variableDefinitions ? [
            ...operation.variableDefinitions
        ] : [], this.options.variables ?? {});
        if (errors && errors.length) {
            // We have input validation errors, report errors and abort
            errors.forEach((error)=>this.context.reportError(error));
            return;
        }
        this.variableValues = coerced;
        switch(operation.operation){
            case 'mutation':
                this.complexity += this.nodeComplexity(operation, this.context.getSchema().getMutationType());
                break;
            case 'query':
                this.complexity += this.nodeComplexity(operation, this.context.getSchema().getQueryType());
                break;
            case 'subscription':
                this.complexity += this.nodeComplexity(operation, this.context.getSchema().getSubscriptionType());
                break;
            default:
                throw new Error(`Query complexity could not be calculated for operation of type ${operation.operation}`);
        }
    }
    onOperationDefinitionLeave(operation) {
        if (typeof this.options.operationName === 'string' && this.options.operationName !== operation.name.value) {
            return;
        }
        if (this.options.onComplete) {
            this.options.onComplete(this.complexity);
        }
        if (this.complexity > this.options.maximumComplexity) {
            return this.context.reportError(this.createError());
        }
    }
}
/**
 * Adds a complexity to the complexity map for all possible types
 * @param complexity
 * @param complexityMap
 * @param possibleTypes
 */ function addComplexities(complexity, complexityMap, possibleTypes) {
    for (const type of possibleTypes){
        if (Object.prototype.hasOwnProperty.call(complexityMap, type)) {
            complexityMap[type] += complexity;
        } else {
            complexityMap[type] = complexity;
        }
    }
    return complexityMap;
} //# sourceMappingURL=QueryComplexity.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/createComplexityRule.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createComplexityRule": (()=>createComplexityRule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$QueryComplexity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/QueryComplexity.js [app-route] (ecmascript)");
;
function createComplexityRule(options) {
    return (context)=>{
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$QueryComplexity$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["QueryComplexity"](context, options);
    };
} //# sourceMappingURL=createComplexityRule.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/estimators/fieldExtensions/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fieldExtensionsEstimator": (()=>fieldExtensionsEstimator)
});
const fieldExtensionsEstimator = ()=>{
    return (args)=>{
        if (args.field.extensions) {
            // Calculate complexity score
            if (typeof args.field.extensions.complexity === 'number') {
                return args.childComplexity + args.field.extensions.complexity;
            } else if (typeof args.field.extensions.complexity === 'function') {
                return args.field.extensions.complexity(args);
            }
        }
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/estimators/simple/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "simpleEstimator": (()=>simpleEstimator)
});
const simpleEstimator = (options)=>{
    const defaultComplexity = options && typeof options.defaultComplexity === 'number' ? options.defaultComplexity : 1;
    return (args)=>{
        return defaultComplexity + args.childComplexity;
    };
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
 //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$createComplexityRule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/createComplexityRule.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$estimators$2f$fieldExtensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/estimators/fieldExtensions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$estimators$2f$simple$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/estimators/simple/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatName": (()=>formatName)
});
const numbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];
const formatName = (string)=>{
    let sanitizedString = String(string);
    const firstLetter = sanitizedString.substring(0, 1);
    if (numbers.indexOf(firstLetter) > -1) {
        sanitizedString = `_${sanitizedString}`;
    }
    const formatted = sanitizedString // Convert accented characters
    .normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/\./g, '_').replace(/-|\//g, '_').replace(/\+/g, '_').replace(/,/g, '_').replace(/\(/g, '_').replace(/\)/g, '_').replace(/'/g, '_').replace(/ /g, '');
    return formatted || '_';
}; //# sourceMappingURL=formatName.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/access.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "accessResolver": (()=>accessResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$access$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/access.js [app-route] (ecmascript)");
;
;
const formatConfigNames = (results, configs)=>{
    const formattedResults = {
        ...results
    };
    configs.forEach(({ slug })=>{
        const result = {
            ...formattedResults[slug] || {}
        };
        delete formattedResults[slug];
        formattedResults[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(slug)] = result;
    });
    return formattedResults;
};
function accessResolver(config) {
    async function resolver(_, args, context) {
        const options = {
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const accessResults = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$access$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accessOperation"])(options);
        return {
            ...accessResults,
            ...formatConfigNames(accessResults.collections, config.collections),
            ...formatConfigNames(accessResults.globals, config.globals)
        };
    }
    return resolver;
} //# sourceMappingURL=access.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildFallbackLocaleInputType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildFallbackLocaleInputType": (()=>buildFallbackLocaleInputType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
;
;
const buildFallbackLocaleInputType = (localization)=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
        name: 'FallbackLocaleInputType',
        values: [
            ...localization.localeCodes,
            'none'
        ].reduce((values, locale)=>({
                ...values,
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(locale)]: {
                    value: locale
                }
            }), {})
    });
}; //# sourceMappingURL=buildFallbackLocaleInputType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildLocaleInputType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildLocaleInputType": (()=>buildLocaleInputType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
;
;
const buildLocaleInputType = (localization)=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
        name: 'LocaleInputType',
        values: localization.localeCodes.reduce((values, locale)=>({
                ...values,
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(locale)]: {
                    value: locale
                }
            }), {})
    });
}; //# sourceMappingURL=buildLocaleInputType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-type-json/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GraphQLJSON": (()=>GraphQLJSON),
    "GraphQLJSONObject": (()=>GraphQLJSONObject)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql/language/index.js [external] (graphql/language/index.js, cjs)");
;
;
function identity(value) {
    return value;
}
function ensureObject(value) {
    if (typeof value !== 'object' || value === null || Array.isArray(value)) {
        throw new TypeError(`JSONObject cannot represent non-object value: ${value}`);
    }
    return value;
}
function parseObject(typeName, ast, variables) {
    const value = Object.create(null);
    ast.fields.forEach((field)=>{
        value[field.name.value] = parseLiteral(typeName, field.value, variables);
    });
    return value;
}
function parseLiteral(typeName, ast, variables) {
    switch(ast.kind){
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].BOOLEAN:
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].STRING:
            return ast.value;
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].FLOAT:
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].INT:
            return parseFloat(ast.value);
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].LIST:
            return ast.values.map((n)=>parseLiteral(typeName, n, variables));
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].NULL:
            return null;
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].OBJECT:
            return parseObject(typeName, ast, variables);
        case __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].VARIABLE:
            return variables ? variables[ast.name.value] : undefined;
        default:
            throw new TypeError(`${typeName} cannot represent value: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["print"])(ast)}`);
    }
}
const GraphQLJSON = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLScalarType"]({
    name: 'JSON',
    description: 'The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
    parseLiteral: (ast, variables)=>parseLiteral('JSON', ast, variables),
    parseValue: identity,
    serialize: identity,
    specifiedByURL: 'http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf'
});
const GraphQLJSONObject = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLScalarType"]({
    name: 'JSONObject',
    description: 'The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).',
    parseLiteral: (ast, variables)=>{
        if (ast.kind !== __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["Kind"].OBJECT) {
            throw new TypeError(`JSONObject cannot represent non-object value: ${(0, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql$2f$language$2f$index$2e$js__$5b$external$5d$__$28$graphql$2f$language$2f$index$2e$js$2c$__cjs$29$__["print"])(ast)}`);
        }
        return parseObject('JSONObject', ast, variables);
    },
    parseValue: ensureObject,
    serialize: ensureObject,
    specifiedByURL: 'http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf'
}); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPoliciesType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildEntityPolicy": (()=>buildEntityPolicy),
    "buildPoliciesType": (()=>buildPoliciesType),
    "buildPolicyType": (()=>buildPolicyType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-type-json/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-route] (ecmascript)");
;
;
;
;
const buildFields = (label, fieldsToBuild)=>fieldsToBuild.reduce((builtFields, field)=>{
        const includeField = !field.hidden && field.type !== 'ui';
        if (includeField) {
            if (field.name) {
                const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(field.name);
                const objectTypeFields = [
                    'create',
                    'read',
                    'update',
                    'delete'
                ].reduce((operations, operation)=>{
                    const capitalizedOperation = operation.charAt(0).toUpperCase() + operation.slice(1);
                    return {
                        ...operations,
                        [operation]: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                                name: `${label}_${fieldName}_${capitalizedOperation}`,
                                fields: {
                                    permission: {
                                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"])
                                    }
                                }
                            })
                        }
                    };
                }, {});
                if (field.fields) {
                    objectTypeFields.fields = {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                            name: `${label}_${fieldName}_Fields`,
                            fields: buildFields(`${label}_${fieldName}`, field.fields)
                        })
                    };
                }
                return {
                    ...builtFields,
                    [field.name]: {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                            name: `${label}_${fieldName}`,
                            fields: objectTypeFields
                        })
                    }
                };
            }
            if (!field.name && field.fields) {
                const subFields = buildFields(label, field.fields);
                return {
                    ...builtFields,
                    ...subFields
                };
            }
            if (field.type === 'tabs') {
                return field.tabs.reduce((fieldsWithTabFields, tab)=>{
                    return {
                        ...fieldsWithTabFields,
                        ...buildFields(label, tab.fields)
                    };
                }, {
                    ...builtFields
                });
            }
        }
        return builtFields;
    }, {});
const buildEntityPolicy = (args)=>{
    const { name, entityFields, operations, scope } = args;
    const fieldsTypeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(`${name}-${scope || ''}-Fields`, true);
    const fields = {
        fields: {
            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                name: fieldsTypeName,
                fields: buildFields(fieldsTypeName, entityFields)
            })
        }
    };
    operations.forEach((operation)=>{
        const operationTypeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(`${name}-${operation}-${scope || 'Access'}`, true);
        fields[operation] = {
            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                name: operationTypeName,
                fields: {
                    permission: {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"])
                    },
                    where: {
                        type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSONObject"]
                    }
                }
            })
        };
    });
    return fields;
};
function buildPolicyType(args) {
    const { type, entity, scope, typeSuffix } = args;
    const { slug, fields, graphQL, versions } = entity;
    let operations = [];
    if (graphQL === false) {
        return null;
    }
    if (type === 'collection') {
        operations = [
            'create',
            'read',
            'update',
            'delete'
        ];
        if (entity.auth && typeof entity.auth === 'object' && typeof entity.auth.maxLoginAttempts !== 'undefined' && entity.auth.maxLoginAttempts !== 0) {
            operations.push('unlock');
        }
        if (versions) {
            operations.push('readVersions');
        }
        const collectionTypeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}${typeSuffix || ''}`);
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
            name: collectionTypeName,
            fields: buildEntityPolicy({
                name: slug,
                entityFields: fields,
                operations,
                scope
            })
        });
    }
    // else create global type
    operations = [
        'read',
        'update'
    ];
    if (entity.versions) {
        operations.push('readVersions');
    }
    const globalTypeName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${global?.graphQL?.name || slug}${typeSuffix || ''}`);
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
        name: globalTypeName,
        fields: buildEntityPolicy({
            name: entity.graphQL ? entity?.graphQL?.name || slug : slug,
            entityFields: entity.fields,
            operations,
            scope
        })
    });
}
function buildPoliciesType(config) {
    const fields = {
        canAccessAdmin: {
            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"])
        }
    };
    Object.values(config.collections).forEach((collection)=>{
        if (collection.graphQL === false) {
            return;
        }
        const collectionPolicyType = buildPolicyType({
            type: 'collection',
            entity: collection,
            typeSuffix: 'Access'
        });
        fields[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(collection.slug)] = {
            type: collectionPolicyType
        };
    });
    Object.values(config.globals).forEach((global1)=>{
        if (global1.graphQL === false) {
            return;
        }
        const globalPolicyType = buildPolicyType({
            type: 'global',
            entity: global1,
            typeSuffix: 'Access'
        });
        fields[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(global1.slug)] = {
            type: globalPolicyType
        };
    });
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
        name: 'Access',
        fields
    });
} //# sourceMappingURL=buildPoliciesType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/forgotPassword.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "forgotPassword": (()=>forgotPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/forgotPassword.js [app-route] (ecmascript)");
;
function forgotPassword(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email,
                username: args.username
            },
            disableEmail: args.disableEmail,
            expiration: args.expiration,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forgotPasswordOperation"])(options);
        return true;
    }
    return resolver;
} //# sourceMappingURL=forgotPassword.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/init.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "init": (()=>init)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/init.js [app-route] (ecmascript)");
;
function init(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initOperation"])(options);
    }
    return resolver;
} //# sourceMappingURL=init.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/login.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "login": (()=>login)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/login.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-route] (ecmascript)");
;
function login(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email,
                password: args.password,
                username: args.username
            },
            depth: 0,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["loginOperation"])(options);
        const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePayloadCookie"])({
            collectionAuthConfig: collection.config.auth,
            cookiePrefix: context.req.payload.config.cookiePrefix,
            token: result.token
        });
        context.headers['Set-Cookie'] = cookie;
        if (collection.config.auth.removeTokenFromResponses) {
            delete result.token;
        }
        return result;
    }
    return resolver;
} //# sourceMappingURL=login.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/logout.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "logout": (()=>logout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$logout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/logout.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-route] (ecmascript)");
;
function logout(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$logout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logoutOperation"])(options);
        const expiredCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generateExpiredPayloadCookie"])({
            collectionAuthConfig: collection.config.auth,
            config: context.req.payload.config,
            cookiePrefix: context.req.payload.config.cookiePrefix
        });
        context.headers['Set-Cookie'] = expiredCookie;
        return result;
    }
    return resolver;
} //# sourceMappingURL=logout.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/me.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "me": (()=>me)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$extractJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/extractJWT.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$me$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/me.js [app-route] (ecmascript)");
;
function me(collection) {
    async function resolver(_, args, context) {
        const currentToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$extractJWT$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["extractJWT"])(context.req);
        const options = {
            collection,
            currentToken,
            depth: 0,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$me$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["meOperation"])(options);
        if (collection.config.auth.removeTokenFromResponses) {
            delete result.token;
        }
        return result;
    }
    return resolver;
} //# sourceMappingURL=me.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/refresh.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "refresh": (()=>refresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$refresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/refresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-route] (ecmascript)");
;
function refresh(collection) {
    async function resolver(_, __, context) {
        const options = {
            collection,
            depth: 0,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$refresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refreshOperation"])(options);
        const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePayloadCookie"])({
            collectionAuthConfig: collection.config.auth,
            cookiePrefix: context.req.payload.config.cookiePrefix,
            token: result.refreshedToken
        });
        context.headers['Set-Cookie'] = cookie;
        if (collection.config.auth.removeTokenFromResponses) {
            delete result.refreshedToken;
        }
        return result;
    }
    return resolver;
} //# sourceMappingURL=refresh.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/resetPassword.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resetPassword": (()=>resetPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/resetPassword.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/cookies.js [app-route] (ecmascript)");
;
function resetPassword(collection) {
    async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const options = {
            api: 'GraphQL',
            collection,
            data: args,
            depth: 0,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetPasswordOperation"])(options);
        const cookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["generatePayloadCookie"])({
            collectionAuthConfig: collection.config.auth,
            cookiePrefix: context.req.payload.config.cookiePrefix,
            token: result.token
        });
        context.headers['Set-Cookie'] = cookie;
        if (collection.config.auth.removeTokenFromResponses) {
            delete result.token;
        }
        return result;
    }
    return resolver;
} //# sourceMappingURL=resetPassword.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/unlock.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unlock": (()=>unlock)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/unlock.js [app-route] (ecmascript)");
;
function unlock(collection) {
    async function resolver(_, args, context) {
        const options = {
            collection,
            data: {
                email: args.email,
                username: args.username
            },
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlockOperation"])(options);
        return result;
    }
    return resolver;
} //# sourceMappingURL=unlock.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/verifyEmail.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "verifyEmail": (()=>verifyEmail)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/operations/verifyEmail.js [app-route] (ecmascript)");
;
function verifyEmail(collection) {
    async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const options = {
            api: 'GraphQL',
            collection,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID'),
            token: args.token
        };
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$operations$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyEmailOperation"])(options);
        return success;
    }
    return resolver;
} //# sourceMappingURL=verifyEmail.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/count.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "countResolver": (()=>countResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/count.js [app-route] (ecmascript)");
;
function countResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'locale');
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = fallbackLocale;
        context.req = req;
        const options = {
            collection,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID'),
            where: args.where
        };
        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countOperation"])(options);
        return results;
    };
} //# sourceMappingURL=count.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/create.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createResolver": (()=>createResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/create.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
;
function createResolver(collection) {
    return async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createOperation"])({
            collection,
            data: args.data,
            depth: 0,
            draft: args.draft,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        });
        return result;
    };
} //# sourceMappingURL=create.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/delete.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getDeleteResolver": (()=>getDeleteResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$deleteByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/deleteByID.js [app-route] (ecmascript)");
;
function getDeleteResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'locale');
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) {
            req.query = {};
        }
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') {
            req.query.draft = String(draft);
        }
        context.req = req;
        const options = {
            id: args.id,
            collection,
            depth: 0,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$deleteByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteByIDOperation"])(options);
        return result;
    };
} //# sourceMappingURL=delete.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/docAccess.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "docAccessResolver": (()=>docAccessResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/docAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
;
function docAccessResolver(collection) {
    async function resolver(_, args, context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["docAccessOperation"])({
            id: args.id,
            collection,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        });
    }
    return resolver;
} //# sourceMappingURL=docAccess.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/duplicate.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "duplicateResolver": (()=>duplicateResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/duplicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
;
function duplicateResolver(collection) {
    return async function resolver(_, args, context) {
        const { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        context.req = req;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["duplicateOperation"])({
            id: args.id,
            collection,
            data: args.data,
            depth: 0,
            draft: args.draft,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID')
        });
        return result;
    };
} //# sourceMappingURL=duplicate.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/find.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findResolver": (()=>findResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/find.js [app-route] (ecmascript)");
;
function findResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, [
            'locale',
            'fallbackLocale',
            'transactionID'
        ]);
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) {
            req.query = {};
        }
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') {
            req.query.draft = String(draft);
        }
        context.req = req;
        const options = {
            collection,
            depth: 0,
            draft: args.draft,
            limit: args.limit,
            page: args.page,
            pagination: args.pagination,
            req,
            sort: args.sort,
            where: args.where
        };
        const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOperation"])(options);
        return results;
    };
} //# sourceMappingURL=find.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/findByID.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findByIDResolver": (()=>findByIDResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/findByID.js [app-route] (ecmascript)");
;
function findByIDResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'locale');
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) {
            req.query = {};
        }
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') {
            req.query.draft = String(draft);
        }
        context.req = req;
        const options = {
            id: args.id,
            collection,
            depth: 0,
            draft: args.draft,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findByIDOperation"])(options);
        return result;
    };
} //# sourceMappingURL=findByID.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/findVersionByID.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findVersionByIDResolver": (()=>findVersionByIDResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/findVersionByID.js [app-route] (ecmascript)");
;
function findVersionByIDResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'locale');
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        context.req = req;
        const options = {
            id: args.id,
            collection,
            depth: 0,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionByIDOperation"])(options);
        return result;
    };
} //# sourceMappingURL=findVersionByID.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/findVersions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findVersionsResolver": (()=>findVersionsResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/findVersions.js [app-route] (ecmascript)");
;
function findVersionsResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'locale');
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) {
            req.query = {};
        }
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') {
            req.query.draft = String(draft);
        }
        context.req = req;
        const options = {
            collection,
            depth: 0,
            limit: args.limit,
            page: args.page,
            pagination: args.pagination,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID'),
            sort: args.sort,
            where: args.where
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionsOperation"])(options);
        return result;
    };
} //# sourceMappingURL=findVersions.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/restoreVersion.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "restoreVersionResolver": (()=>restoreVersionResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/restoreVersion.js [app-route] (ecmascript)");
;
function restoreVersionResolver(collection) {
    async function resolver(_, args, context) {
        const options = {
            id: args.id,
            collection,
            depth: 0,
            draft: args.draft,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreVersionOperation"])(options);
        return result;
    }
    return resolver;
} //# sourceMappingURL=restoreVersion.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/update.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "updateResolver": (()=>updateResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$updateByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/operations/updateByID.js [app-route] (ecmascript)");
;
function updateResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'locale');
        req = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) {
            req.query = {};
        }
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') {
            req.query.draft = String(draft);
        }
        context.req = req;
        const options = {
            id: args.id,
            autosave: args.autosave,
            collection,
            data: args.data,
            depth: 0,
            draft: args.draft,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$operations$2f$updateByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateByIDOperation"])(options);
        return result;
    };
} //# sourceMappingURL=update.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/combineParentName.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "combineParentName": (()=>combineParentName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
;
const combineParentName = (parent, name)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${parent ? `${parent}_` : ''}${name}`); //# sourceMappingURL=combineParentName.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/groupOrTabHasRequiredSubfield.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "groupOrTabHasRequiredSubfield": (()=>groupOrTabHasRequiredSubfield)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
const groupOrTabHasRequiredSubfield = (entity)=>{
    if ('type' in entity && entity.type === 'group') {
        return entity.fields.some((subField)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(subField) && 'required' in subField && subField.required || groupOrTabHasRequiredSubfield(subField);
        });
    }
    if ('fields' in entity && 'name' in entity) {
        return entity.fields.some((subField)=>groupOrTabHasRequiredSubfield(subField));
    }
    return false;
}; //# sourceMappingURL=groupOrTabHasRequiredSubfield.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/withNullableType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "withNullableType": (()=>withNullableType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
;
const withNullableType = (field, type, forceNullable = false)=>{
    const hasReadAccessControl = field.access && field.access.read;
    const condition = field.admin && field.admin.condition;
    const isTimestamp = field.name === 'createdAt' || field.name === 'updatedAt';
    if (!forceNullable && 'required' in field && field.required && !field.localized && !condition && !hasReadAccessControl && !isTimestamp) {
        return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](type);
    }
    return type;
}; //# sourceMappingURL=withNullableType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildMutationInputType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildMutationInputType": (()=>buildMutationInputType),
    "getCollectionIDType": (()=>getCollectionIDType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-type-json/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/combineParentName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$groupOrTabHasRequiredSubfield$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/groupOrTabHasRequiredSubfield.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/withNullableType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-route] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const idFieldTypes = {
    number: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"],
    text: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
};
const getCollectionIDType = (type, collection)=>{
    const idField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(collection.fields).find((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === 'id');
    if (!idField) {
        return idFieldTypes[type];
    }
    return idFieldTypes[idField.type];
};
function buildMutationInputType({ name, config, fields, forceNullable = false, graphqlResult, parentName }) {
    const fieldToSchemaMap = {
        array: (inputObjectTypeConfig, field)=>{
            const fullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            let type = buildMutationInputType({
                name: fullName,
                config,
                fields: field.fields,
                graphqlResult,
                parentName: fullName
            });
            if (!type) {
                return inputObjectTypeConfig;
            }
            type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, type, forceNullable));
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        blocks: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                }
            }),
        checkbox: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                }
            }),
        code: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        collapsible: (inputObjectTypeConfig, field)=>field.fields.reduce((acc, subField)=>{
                const addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) {
                    return addSubField(acc, subField);
                }
                return acc;
            }, inputObjectTypeConfig),
        date: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        email: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        group: (inputObjectTypeConfig, field)=>{
            const requiresAtLeastOneField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$groupOrTabHasRequiredSubfield$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupOrTabHasRequiredSubfield"])(field);
            const fullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            let type = buildMutationInputType({
                name: fullName,
                config,
                fields: field.fields,
                graphqlResult,
                parentName: fullName
            });
            if (!type) {
                return inputObjectTypeConfig;
            }
            if (requiresAtLeastOneField) {
                type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](type);
            }
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        json: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"], forceNullable)
                }
            }),
        number: (inputObjectTypeConfig, field)=>{
            const type = field.name === 'id' ? __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"] : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLFloat"];
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, field.hasMany === true ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](type) : type, forceNullable)
                }
            };
        },
        point: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLFloat"]), forceNullable)
                }
            }),
        radio: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        relationship: (inputObjectTypeConfig, field)=>{
            const { relationTo } = field;
            let type;
            if (Array.isArray(relationTo)) {
                const fullName = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true))}RelationshipInput`;
                type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
                    name: fullName,
                    fields: {
                        relationTo: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                                name: `${fullName}RelationTo`,
                                values: relationTo.reduce((values, option)=>({
                                        ...values,
                                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option)]: {
                                            value: option
                                        }
                                    }), {})
                            })
                        },
                        value: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                        }
                    }
                });
            } else {
                type = getCollectionIDType(config.db.defaultIDType, graphqlResult.collections[relationTo].config);
            }
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: field.hasMany ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](type) : type
                }
            };
        },
        richText: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"], forceNullable)
                }
            }),
        row: (inputObjectTypeConfig, field)=>field.fields.reduce((acc, subField)=>{
                const addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) {
                    return addSubField(acc, subField);
                }
                return acc;
            }, inputObjectTypeConfig),
        select: (inputObjectTypeConfig, field)=>{
            const formattedName = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_MutationInput`;
            let type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                name: formattedName,
                values: field.options.reduce((values, option)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionIsObject"])(option)) {
                        return {
                            ...values,
                            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option.value)]: {
                                value: option.value
                            }
                        };
                    }
                    return {
                        ...values,
                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option)]: {
                            value: option
                        }
                    };
                }, {})
            });
            type = field.hasMany ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](type) : type;
            type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, type, forceNullable);
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        tabs: (inputObjectTypeConfig, field)=>{
            return field.tabs.reduce((acc, tab)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                    const fullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(tab.name, true));
                    const requiresAtLeastOneField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$groupOrTabHasRequiredSubfield$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["groupOrTabHasRequiredSubfield"])(field);
                    let type = buildMutationInputType({
                        name: fullName,
                        config,
                        fields: tab.fields,
                        graphqlResult,
                        parentName: fullName
                    });
                    if (!type) {
                        return acc;
                    }
                    if (requiresAtLeastOneField) {
                        type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](type);
                    }
                    return {
                        ...acc,
                        [tab.name]: {
                            type
                        }
                    };
                }
                return {
                    ...acc,
                    ...tab.fields.reduce((subFieldSchema, subField)=>{
                        const addSubField = fieldToSchemaMap[subField.type];
                        if (addSubField) {
                            return addSubField(subFieldSchema, subField);
                        }
                        return subFieldSchema;
                    }, acc)
                };
            }, inputObjectTypeConfig);
        },
        text: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, field.hasMany === true ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]) : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        textarea: (inputObjectTypeConfig, field)=>({
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        upload: (inputObjectTypeConfig, field)=>{
            const { relationTo } = field;
            let type;
            if (Array.isArray(relationTo)) {
                const fullName = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true))}RelationshipInput`;
                type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
                    name: fullName,
                    fields: {
                        relationTo: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                                name: `${fullName}RelationTo`,
                                values: relationTo.reduce((values, option)=>({
                                        ...values,
                                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option)]: {
                                            value: option
                                        }
                                    }), {})
                            })
                        },
                        value: {
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                        }
                    }
                });
            } else {
                type = getCollectionIDType(config.db.defaultIDType, graphqlResult.collections[relationTo].config);
            }
            return {
                ...inputObjectTypeConfig,
                [field.name]: {
                    type: field.hasMany ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](type) : type
                }
            };
        }
    };
    const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(name);
    const fieldSchemas = fields.reduce((inputObjectTypeConfig, field)=>{
        const fieldSchema = fieldToSchemaMap[field.type];
        if (typeof fieldSchema !== 'function') {
            return inputObjectTypeConfig;
        }
        const schema = fieldSchema(inputObjectTypeConfig, field);
        if (Object.keys(schema).length === 0) {
            return inputObjectTypeConfig;
        }
        return {
            ...inputObjectTypeConfig,
            ...fieldSchema(inputObjectTypeConfig, field)
        };
    }, {});
    if (Object.keys(fieldSchemas).length === 0) {
        return null;
    }
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
        name: `mutation${fieldName}Input`,
        fields: fieldSchemas
    });
} //# sourceMappingURL=buildMutationInputType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatOptions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "formatOptions": (()=>formatOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
;
const formatOptions = (field)=>{
    return field.options.reduce((values, option)=>{
        if (typeof option === 'object') {
            return {
                ...values,
                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option.value)]: {
                    value: option.value
                }
            };
        }
        return {
            ...values,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option)]: {
                value: option
            }
        };
    }, {});
}; //# sourceMappingURL=formatOptions.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/isFieldNullable.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isFieldNullable": (()=>isFieldNullable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
const isFieldNullable = (field, force)=>{
    const hasReadAccessControl = field.access && field.access.read;
    const condition = field.admin && field.admin.condition;
    return !(force && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && 'required' in field && field.required && !field.localized && !condition && !hasReadAccessControl);
}; //# sourceMappingURL=isFieldNullable.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildObjectType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildObjectType": (()=>buildObjectType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-type-json/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/combineParentName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatOptions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$isFieldNullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/isFieldNullable.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/withNullableType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$iso$2d$date$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLDateTime__as__DateTimeResolver$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql-scalars@1.22.2_graphql@16.10.0/node_modules/graphql-scalars/esm/scalars/iso-date/DateTime.js [app-route] (ecmascript) <export GraphQLDateTime as DateTimeResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$EmailAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLEmailAddress__as__EmailAddressResolver$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql-scalars@1.22.2_graphql@16.10.0/node_modules/graphql-scalars/esm/scalars/EmailAddress.js [app-route] (ecmascript) <export GraphQLEmailAddress as EmailAddressResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/database/combineQueries.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/collections/dataloader.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingEditorProp.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
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
function buildObjectType({ name, baseFields = {}, config, fields, forceNullable, graphqlResult, parentName }) {
    const fieldToSchemaMap = {
        array: (objectTypeConfig, field)=>{
            const interfaceName = field?.interfaceName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            if (!graphqlResult.types.arrayTypes[interfaceName]) {
                const objectType = buildObjectType({
                    name: interfaceName,
                    config,
                    fields: field.fields,
                    forceNullable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$isFieldNullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFieldNullable"])(field, forceNullable),
                    graphqlResult,
                    parentName: interfaceName
                });
                if (Object.keys(objectType.getFields()).length) {
                    graphqlResult.types.arrayTypes[interfaceName] = objectType;
                }
            }
            if (!graphqlResult.types.arrayTypes[interfaceName]) {
                return objectTypeConfig;
            }
            const arrayType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](graphqlResult.types.arrayTypes[interfaceName]));
            return {
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, arrayType)
                }
            };
        },
        blocks: (objectTypeConfig, field)=>{
            const blockTypes = field.blocks.reduce((acc, block)=>{
                if (!graphqlResult.types.blockTypes[block.slug]) {
                    const interfaceName = block?.interfaceName || block?.graphQL?.singularName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(block.slug, true);
                    const objectType = buildObjectType({
                        name: interfaceName,
                        config,
                        fields: [
                            ...block.fields,
                            {
                                name: 'blockType',
                                type: 'text'
                            }
                        ],
                        forceNullable,
                        graphqlResult,
                        parentName: interfaceName
                    });
                    if (Object.keys(objectType.getFields()).length) {
                        graphqlResult.types.blockTypes[block.slug] = objectType;
                    }
                }
                if (graphqlResult.types.blockTypes[block.slug]) {
                    acc.push(graphqlResult.types.blockTypes[block.slug]);
                }
                return acc;
            }, []);
            if (blockTypes.length === 0) {
                return objectTypeConfig;
            }
            const fullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            const type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLUnionType"]({
                name: fullName,
                resolveType: (data)=>graphqlResult.types.blockTypes[data.blockType].name,
                types: blockTypes
            })));
            return {
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, type)
                }
            };
        },
        checkbox: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"], forceNullable)
                }
            }),
        code: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        collapsible: (objectTypeConfig, field)=>field.fields.reduce((objectTypeConfigWithCollapsibleFields, subField)=>{
                const addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) {
                    return addSubField(objectTypeConfigWithCollapsibleFields, subField);
                }
                return objectTypeConfigWithCollapsibleFields;
            }, objectTypeConfig),
        date: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$iso$2d$date$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLDateTime__as__DateTimeResolver$3e$__["DateTimeResolver"], forceNullable)
                }
            }),
        email: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$EmailAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLEmailAddress__as__EmailAddressResolver$3e$__["EmailAddressResolver"], forceNullable)
                }
            }),
        group: (objectTypeConfig, field)=>{
            const interfaceName = field?.interfaceName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            if (!graphqlResult.types.groupTypes[interfaceName]) {
                const objectType = buildObjectType({
                    name: interfaceName,
                    config,
                    fields: field.fields,
                    forceNullable: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$isFieldNullable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFieldNullable"])(field, forceNullable),
                    graphqlResult,
                    parentName: interfaceName
                });
                if (Object.keys(objectType.getFields()).length) {
                    graphqlResult.types.groupTypes[interfaceName] = objectType;
                }
            }
            if (!graphqlResult.types.groupTypes[interfaceName]) {
                return objectTypeConfig;
            }
            return {
                ...objectTypeConfig,
                [field.name]: {
                    type: graphqlResult.types.groupTypes[interfaceName],
                    resolve: (parent, args, context)=>{
                        return {
                            ...parent[field.name],
                            _id: parent._id ?? parent.id
                        };
                    }
                }
            };
        },
        join: (objectTypeConfig, field)=>{
            const joinName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            const joinType = {
                type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                    name: joinName,
                    fields: {
                        docs: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](graphqlResult.collections[field.collection].graphQL.type)
                        },
                        hasNextPage: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                        }
                    }
                }),
                args: {
                    limit: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                    },
                    sort: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                    },
                    where: {
                        type: graphqlResult.collections[field.collection].graphQL.whereInputType
                    }
                },
                extensions: {
                    complexity: typeof field?.graphQL?.complexity === 'number' ? field.graphQL.complexity : 10
                },
                async resolve (parent, args, context) {
                    const { collection } = field;
                    const { limit, sort, where } = args;
                    const { req } = context;
                    const fullWhere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$database$2f$combineQueries$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineQueries"])(where, {
                        [field.on]: {
                            equals: parent._id ?? parent.id
                        }
                    });
                    return await req.payload.find({
                        collection,
                        depth: 0,
                        fallbackLocale: req.fallbackLocale,
                        limit,
                        locale: req.locale,
                        overrideAccess: false,
                        req,
                        sort,
                        where: fullWhere
                    });
                }
            };
            return {
                ...objectTypeConfig,
                [field.name]: joinType
            };
        },
        json: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"], forceNullable)
                }
            }),
        number: (objectTypeConfig, field)=>{
            const type = field?.name === 'id' ? __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"] : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLFloat"];
            return {
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, field?.hasMany === true ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](type) : type, forceNullable)
                }
            };
        },
        point: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLFloat"])), forceNullable)
                }
            }),
        radio: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name),
                        values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatOptions"])(field)
                    }), forceNullable)
                }
            }),
        relationship: (objectTypeConfig, field)=>{
            const { relationTo } = field;
            const isRelatedToManyCollections = Array.isArray(relationTo);
            const hasManyValues = field.hasMany;
            const relationshipName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            let type;
            let relationToType = null;
            const graphQLCollections = config.collections.filter((collectionConfig)=>collectionConfig.graphQL !== false);
            if (Array.isArray(relationTo)) {
                relationToType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                    name: `${relationshipName}_RelationTo`,
                    values: relationTo.filter((relation)=>graphQLCollections.some((collection)=>collection.slug === relation)).reduce((relations, relation)=>({
                            ...relations,
                            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(relation)]: {
                                value: relation
                            }
                        }), {})
                });
                // Only pass collections that are GraphQL enabled
                const types = relationTo.filter((relation)=>graphQLCollections.some((collection)=>collection.slug === relation)).map((relation)=>graphqlResult.collections[relation]?.graphQL.type);
                type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                    name: `${relationshipName}_Relationship`,
                    fields: {
                        relationTo: {
                            type: relationToType
                        },
                        value: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLUnionType"]({
                                name: relationshipName,
                                resolveType (data) {
                                    return graphqlResult.collections[data.collection].graphQL.type.name;
                                },
                                types
                            })
                        }
                    }
                });
            } else {
                ;
                ({ type } = graphqlResult.collections[relationTo].graphQL);
            }
            // If the relationshipType is undefined at this point,
            // it can be assumed that this blockType can have a relationship
            // to itself. Therefore, we set the relationshipType equal to the blockType
            // that is currently being created.
            type = type || newlyCreatedBlockType;
            const relationshipArgs = {};
            const relationsUseDrafts = (Array.isArray(relationTo) ? relationTo : [
                relationTo
            ]).filter((relation)=>graphQLCollections.some((collection)=>collection.slug === relation)).some((relation)=>graphqlResult.collections[relation].config.versions?.drafts);
            if (relationsUseDrafts) {
                relationshipArgs.draft = {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                };
            }
            if (config.localization) {
                relationshipArgs.locale = {
                    type: graphqlResult.types.localeInputType
                };
                relationshipArgs.fallbackLocale = {
                    type: graphqlResult.types.fallbackLocaleInputType
                };
            }
            const relationship = {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, hasManyValues ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](type)) : type, forceNullable),
                args: relationshipArgs,
                extensions: {
                    complexity: typeof field?.graphQL?.complexity === 'number' ? field.graphQL.complexity : 10
                },
                async resolve (parent, args, context) {
                    const value = parent[field.name];
                    const locale = args.locale || context.req.locale;
                    const fallbackLocale = args.fallbackLocale || context.req.fallbackLocale;
                    let relatedCollectionSlug = field.relationTo;
                    const draft = Boolean(args.draft ?? context.req.query?.draft);
                    if (hasManyValues) {
                        const results = [];
                        const resultPromises = [];
                        const createPopulationPromise = async (relatedDoc, i)=>{
                            let id = relatedDoc;
                            let collectionSlug = field.relationTo;
                            const isValidGraphQLCollection = isRelatedToManyCollections ? graphQLCollections.some((collection)=>collectionSlug.includes(collection.slug)) : graphQLCollections.some((collection)=>collectionSlug === collection.slug);
                            if (isValidGraphQLCollection) {
                                if (isRelatedToManyCollections) {
                                    collectionSlug = relatedDoc.relationTo;
                                    id = relatedDoc.value;
                                }
                                const result = await context.req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                                    collectionSlug: collectionSlug,
                                    currentDepth: 0,
                                    depth: 0,
                                    docID: id,
                                    draft,
                                    fallbackLocale,
                                    locale,
                                    overrideAccess: false,
                                    showHiddenFields: false,
                                    transactionID: context.req.transactionID
                                }));
                                if (result) {
                                    if (isRelatedToManyCollections) {
                                        results[i] = {
                                            relationTo: collectionSlug,
                                            value: {
                                                ...result,
                                                collection: collectionSlug
                                            }
                                        };
                                    } else {
                                        results[i] = result;
                                    }
                                }
                            }
                        };
                        if (value) {
                            value.forEach((relatedDoc, i)=>{
                                resultPromises.push(createPopulationPromise(relatedDoc, i));
                            });
                        }
                        await Promise.all(resultPromises);
                        return results;
                    }
                    let id = value;
                    if (isRelatedToManyCollections && value) {
                        id = value.value;
                        relatedCollectionSlug = value.relationTo;
                    }
                    if (id) {
                        if (graphQLCollections.some((collection)=>collection.slug === relatedCollectionSlug)) {
                            const relatedDocument = await context.req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                                collectionSlug: relatedCollectionSlug,
                                currentDepth: 0,
                                depth: 0,
                                docID: id,
                                draft,
                                fallbackLocale,
                                locale,
                                overrideAccess: false,
                                showHiddenFields: false,
                                transactionID: context.req.transactionID
                            }));
                            if (relatedDocument) {
                                if (isRelatedToManyCollections) {
                                    return {
                                        relationTo: relatedCollectionSlug,
                                        value: {
                                            ...relatedDocument,
                                            collection: relatedCollectionSlug
                                        }
                                    };
                                }
                                return relatedDocument;
                            }
                        }
                        return null;
                    }
                    return null;
                }
            };
            return {
                ...objectTypeConfig,
                [field.name]: relationship
            };
        },
        richText: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"], forceNullable),
                    args: {
                        depth: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                        }
                    },
                    async resolve (parent, args, context) {
                        let depth = config.defaultDepth;
                        if (typeof args.depth !== 'undefined') {
                            depth = args.depth;
                        }
                        if (!field?.editor) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingEditorProp$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingEditorProp"](field) // while we allow disabling editor functionality, you should not have any richText fields defined if you do not have an editor
                            ;
                        }
                        if (typeof field?.editor === 'function') {
                            throw new Error('Attempted to access unsanitized rich text editor.');
                        }
                        const editor = field?.editor;
                        // RichText fields have their own depth argument in GraphQL.
                        // This is why the populationPromise (which populates richtext fields like uploads and relationships)
                        // is run here again, with the provided depth.
                        // In the graphql find.ts resolver, the depth is then hard-coded to 0.
                        // Effectively, this means that the populationPromise for GraphQL is only run here, and not in the find.ts resolver / normal population promise.
                        if (editor?.graphQLPopulationPromises) {
                            const fieldPromises = [];
                            const populationPromises = [];
                            const populateDepth = field?.maxDepth !== undefined && field?.maxDepth < depth ? field?.maxDepth : depth;
                            editor?.graphQLPopulationPromises({
                                context,
                                depth: populateDepth,
                                draft: args.draft,
                                field,
                                fieldPromises,
                                findMany: false,
                                flattenLocales: false,
                                overrideAccess: false,
                                populationPromises,
                                req: context.req,
                                showHiddenFields: false,
                                siblingDoc: parent
                            });
                            await Promise.all(fieldPromises);
                            await Promise.all(populationPromises);
                        }
                        return parent[field.name];
                    }
                }
            }),
        row: (objectTypeConfig, field)=>field.fields.reduce((objectTypeConfigWithRowFields, subField)=>{
                const addSubField = fieldToSchemaMap[subField.type];
                if (addSubField) {
                    return addSubField(objectTypeConfigWithRowFields, subField);
                }
                return objectTypeConfigWithRowFields;
            }, objectTypeConfig),
        select: (objectTypeConfig, field)=>{
            const fullName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name);
            let type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                name: fullName,
                values: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatOptions"])(field)
            });
            type = field.hasMany ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](type)) : type;
            type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, type, forceNullable);
            return {
                ...objectTypeConfig,
                [field.name]: {
                    type
                }
            };
        },
        tabs: (objectTypeConfig, field)=>field.tabs.reduce((tabSchema, tab)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tabHasName"])(tab)) {
                    const interfaceName = tab?.interfaceName || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(tab.name, true));
                    if (!graphqlResult.types.groupTypes[interfaceName]) {
                        const objectType = buildObjectType({
                            name: interfaceName,
                            config,
                            fields: tab.fields,
                            forceNullable,
                            graphqlResult,
                            parentName: interfaceName
                        });
                        if (Object.keys(objectType.getFields()).length) {
                            graphqlResult.types.groupTypes[interfaceName] = objectType;
                        }
                    }
                    if (!graphqlResult.types.groupTypes[interfaceName]) {
                        return tabSchema;
                    }
                    return {
                        ...tabSchema,
                        [tab.name]: {
                            type: graphqlResult.types.groupTypes[interfaceName],
                            resolve (parent, args, context) {
                                return {
                                    ...parent[tab.name],
                                    _id: parent._id ?? parent.id
                                };
                            }
                        }
                    };
                }
                return {
                    ...tabSchema,
                    ...tab.fields.reduce((subFieldSchema, subField)=>{
                        const addSubField = fieldToSchemaMap[subField.type];
                        if (addSubField) {
                            return addSubField(subFieldSchema, subField);
                        }
                        return subFieldSchema;
                    }, tabSchema)
                };
            }, objectTypeConfig),
        text: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, field.hasMany === true ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]) : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        textarea: (objectTypeConfig, field)=>({
                ...objectTypeConfig,
                [field.name]: {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"], forceNullable)
                }
            }),
        upload: (objectTypeConfig, field)=>{
            const { relationTo } = field;
            const isRelatedToManyCollections = Array.isArray(relationTo);
            const hasManyValues = field.hasMany;
            const relationshipName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(field.name, true));
            let type;
            let relationToType = null;
            if (Array.isArray(relationTo)) {
                relationToType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                    name: `${relationshipName}_RelationTo`,
                    values: relationTo.reduce((relations, relation)=>({
                            ...relations,
                            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(relation)]: {
                                value: relation
                            }
                        }), {})
                });
                const types = relationTo.map((relation)=>graphqlResult.collections[relation].graphQL.type);
                type = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                    name: `${relationshipName}_Relationship`,
                    fields: {
                        relationTo: {
                            type: relationToType
                        },
                        value: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLUnionType"]({
                                name: relationshipName,
                                resolveType (data) {
                                    return graphqlResult.collections[data.collection].graphQL.type.name;
                                },
                                types
                            })
                        }
                    }
                });
            } else {
                ;
                ({ type } = graphqlResult.collections[relationTo].graphQL);
            }
            // If the relationshipType is undefined at this point,
            // it can be assumed that this blockType can have a relationship
            // to itself. Therefore, we set the relationshipType equal to the blockType
            // that is currently being created.
            type = type || newlyCreatedBlockType;
            const relationshipArgs = {};
            const relationsUseDrafts = (Array.isArray(relationTo) ? relationTo : [
                relationTo
            ]).some((relation)=>graphqlResult.collections[relation].config.versions?.drafts);
            if (relationsUseDrafts) {
                relationshipArgs.draft = {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                };
            }
            if (config.localization) {
                relationshipArgs.locale = {
                    type: graphqlResult.types.localeInputType
                };
                relationshipArgs.fallbackLocale = {
                    type: graphqlResult.types.fallbackLocaleInputType
                };
            }
            const relationship = {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withNullableType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withNullableType"])(field, hasManyValues ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](type)) : type, forceNullable),
                args: relationshipArgs,
                extensions: {
                    complexity: typeof field?.graphQL?.complexity === 'number' ? field.graphQL.complexity : 10
                },
                async resolve (parent, args, context) {
                    const value = parent[field.name];
                    const locale = args.locale || context.req.locale;
                    const fallbackLocale = args.fallbackLocale || context.req.fallbackLocale;
                    let relatedCollectionSlug = field.relationTo;
                    const draft = Boolean(args.draft ?? context.req.query?.draft);
                    if (hasManyValues) {
                        const results = [];
                        const resultPromises = [];
                        const createPopulationPromise = async (relatedDoc, i)=>{
                            let id = relatedDoc;
                            let collectionSlug = field.relationTo;
                            if (isRelatedToManyCollections) {
                                collectionSlug = relatedDoc.relationTo;
                                id = relatedDoc.value;
                            }
                            const result = await context.req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                                collectionSlug,
                                currentDepth: 0,
                                depth: 0,
                                docID: id,
                                draft,
                                fallbackLocale,
                                locale,
                                overrideAccess: false,
                                showHiddenFields: false,
                                transactionID: context.req.transactionID
                            }));
                            if (result) {
                                if (isRelatedToManyCollections) {
                                    results[i] = {
                                        relationTo: collectionSlug,
                                        value: {
                                            ...result,
                                            collection: collectionSlug
                                        }
                                    };
                                } else {
                                    results[i] = result;
                                }
                            }
                        };
                        if (value) {
                            value.forEach((relatedDoc, i)=>{
                                resultPromises.push(createPopulationPromise(relatedDoc, i));
                            });
                        }
                        await Promise.all(resultPromises);
                        return results;
                    }
                    let id = value;
                    if (isRelatedToManyCollections && value) {
                        id = value.value;
                        relatedCollectionSlug = value.relationTo;
                    }
                    if (id) {
                        const relatedDocument = await context.req.payloadDataLoader.load((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$collections$2f$dataloader$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDataloaderCacheKey"])({
                            collectionSlug: relatedCollectionSlug,
                            currentDepth: 0,
                            depth: 0,
                            docID: id,
                            draft,
                            fallbackLocale,
                            locale,
                            overrideAccess: false,
                            showHiddenFields: false,
                            transactionID: context.req.transactionID
                        }));
                        if (relatedDocument) {
                            if (isRelatedToManyCollections) {
                                return {
                                    relationTo: relatedCollectionSlug,
                                    value: {
                                        ...relatedDocument,
                                        collection: relatedCollectionSlug
                                    }
                                };
                            }
                            return relatedDocument;
                        }
                        return null;
                    }
                    return null;
                }
            };
            return {
                ...objectTypeConfig,
                [field.name]: relationship
            };
        }
    };
    const objectSchema = {
        name,
        fields: ()=>fields.reduce((objectTypeConfig, field)=>{
                const fieldSchema = fieldToSchemaMap[field.type];
                if (typeof fieldSchema !== 'function') {
                    return objectTypeConfig;
                }
                return {
                    ...objectTypeConfig,
                    ...fieldSchema(objectTypeConfig, field)
                };
            }, baseFields)
    };
    const newlyCreatedBlockType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"](objectSchema);
    return newlyCreatedBlockType;
} //# sourceMappingURL=buildObjectType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPaginatedListType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildPaginatedListType": (()=>buildPaginatedListType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
;
const buildPaginatedListType = (name, docType)=>new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
        name,
        fields: {
            docs: {
                type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](docType)
            },
            hasNextPage: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
            },
            hasPrevPage: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
            },
            limit: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            nextPage: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            offset: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            page: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            pagingCounter: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            prevPage: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            totalDocs: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            },
            totalPages: {
                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
            }
        }
    }); //# sourceMappingURL=buildPaginatedListType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/recursivelyBuildNestedPaths.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "recursivelyBuildNestedPaths": (()=>recursivelyBuildNestedPaths)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$fieldToWhereInputSchemaMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/fieldToWhereInputSchemaMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
;
const recursivelyBuildNestedPaths = ({ field, nestedFieldName2, parentName })=>{
    const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) ? field.name : undefined;
    const nestedFieldName = fieldName || nestedFieldName2;
    if (field.type === 'tabs') {
        // if the tab has a name, treat it as a group
        // otherwise, treat it as a row
        return field.tabs.reduce((tabSchema, tab)=>{
            tabSchema.push(...recursivelyBuildNestedPaths({
                field: {
                    ...tab,
                    type: 'name' in tab ? 'group' : 'row'
                },
                nestedFieldName2: nestedFieldName,
                parentName
            }));
            return tabSchema;
        }, []);
    }
    const nestedPaths = field.fields.reduce((nestedFields, nestedField)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldIsPresentationalOnly"])(nestedField)) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(nestedField)) {
                return [
                    ...nestedFields,
                    ...recursivelyBuildNestedPaths({
                        field: nestedField,
                        nestedFieldName2: nestedFieldName,
                        parentName
                    })
                ];
            }
            const nestedPathName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(nestedField) ? `${nestedFieldName ? `${nestedFieldName}__` : ''}${nestedField.name}` : undefined;
            const getFieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$fieldToWhereInputSchemaMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldToSchemaMap"])({
                nestedFieldName,
                parentName
            })[nestedField.type];
            if (getFieldSchema) {
                const fieldSchema = getFieldSchema({
                    ...nestedField,
                    name: nestedPathName
                });
                if (Array.isArray(fieldSchema)) {
                    return [
                        ...nestedFields,
                        ...fieldSchema
                    ];
                }
                return [
                    ...nestedFields,
                    {
                        type: fieldSchema,
                        key: nestedPathName
                    }
                ];
            }
        }
        return nestedFields;
    }, []);
    return nestedPaths;
}; //# sourceMappingURL=recursivelyBuildNestedPaths.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/operators.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "operators": (()=>operators)
});
const operators = {
    comparison: [
        'greater_than_equal',
        'greater_than',
        'less_than_equal',
        'less_than'
    ],
    contains: [
        'in',
        'not_in',
        'all'
    ],
    equality: [
        'equals',
        'not_equals'
    ],
    geo: [
        'near'
    ],
    geojson: [
        'within',
        'intersects'
    ],
    partial: [
        'like',
        'contains'
    ]
}; //# sourceMappingURL=operators.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/withOperators.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "withOperators": (()=>withOperators)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-type-json/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/combineParentName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/operators.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$iso$2d$date$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLDateTime__as__DateTimeResolver$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql-scalars@1.22.2_graphql@16.10.0/node_modules/graphql-scalars/esm/scalars/iso-date/DateTime.js [app-route] (ecmascript) <export GraphQLDateTime as DateTimeResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$EmailAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLEmailAddress__as__EmailAddressResolver$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/graphql-scalars@1.22.2_graphql@16.10.0/node_modules/graphql-scalars/esm/scalars/EmailAddress.js [app-route] (ecmascript) <export GraphQLEmailAddress as EmailAddressResolver>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const GeoJSONObject = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
    name: 'GeoJSONObject',
    fields: {
        type: {
            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
        },
        coordinates: {
            type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
        }
    }
});
const defaults = {
    checkbox: {
        operators: [
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality.map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                }))
        ]
    },
    code: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                }))
        ]
    },
    date: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].comparison,
                'like'
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$iso$2d$date$2f$DateTime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLDateTime__as__DateTimeResolver$3e$__["DateTimeResolver"]
                }))
        ]
    },
    email: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].contains
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$graphql$2d$scalars$40$1$2e$22$2e$2_graphql$40$16$2e$10$2e$0$2f$node_modules$2f$graphql$2d$scalars$2f$esm$2f$scalars$2f$EmailAddress$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__GraphQLEmailAddress__as__EmailAddressResolver$3e$__["EmailAddressResolver"]
                }))
        ]
    },
    json: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].geojson
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                }))
        ]
    },
    number: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].comparison
            ].map((operator)=>({
                    name: operator,
                    type: (field)=>{
                        return field?.name === 'id' ? __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"] : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLFloat"];
                    }
                }))
        ]
    },
    point: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].comparison,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].geo
            ].map((operator)=>({
                    name: operator,
                    type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLFloat"])
                })),
            ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].geojson.map((operator)=>({
                    name: operator,
                    /**
         * @example:
         * within: {
         *  type: "Polygon",
         *  coordinates: [[
         *   [0.0, 0.0],
         *   [1.0, 1.0],
         *   [1.0, 0.0],
         *   [0.0, 0.0],
         *  ]],
         * }
         * @example
         * intersects: {
         *  type: "Point",
         *  coordinates: [ 0.5, 0.5 ]
         * }
         */ type: GeoJSONObject
                }))
        ]
    },
    radio: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial
            ].map((operator)=>({
                    name: operator,
                    type: (field, parentName)=>new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                            name: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_Input`,
                            values: field.options.reduce((values, option)=>{
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionIsObject"])(option)) {
                                    return {
                                        ...values,
                                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option.value)]: {
                                            value: option.value
                                        }
                                    };
                                }
                                return {
                                    ...values,
                                    [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option)]: {
                                        value: option
                                    }
                                };
                            }, {})
                        })
                }))
        ]
    },
    relationship: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].contains
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                }))
        ]
    },
    richText: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                }))
        ]
    },
    select: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].contains
            ].map((operator)=>({
                    name: operator,
                    type: (field, parentName)=>new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                            name: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_Input`,
                            values: field.options.reduce((values, option)=>{
                                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionIsObject"])(option)) {
                                    return {
                                        ...values,
                                        [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option.value)]: {
                                            value: option.value
                                        }
                                    };
                                }
                                return {
                                    ...values,
                                    [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(option)]: {
                                        value: option
                                    }
                                };
                            }, {})
                        })
                }))
        ]
    },
    text: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].contains
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                }))
        ]
    },
    textarea: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].partial
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                }))
        ]
    },
    upload: {
        operators: [
            ...[
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].equality,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$operators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["operators"].contains
            ].map((operator)=>({
                    name: operator,
                    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                }))
        ]
    }
};
const listOperators = [
    'in',
    'not_in',
    'all'
];
const gqlTypeCache = {};
const withOperators = (field, parentName)=>{
    if (!defaults?.[field.type]) {
        throw new Error(`Error: ${field.type} has no defaults configured.`);
    }
    const name = `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_operator`;
    // Get the default operators for the field type which are hard-coded above
    const fieldOperators = [
        ...defaults[field.type].operators
    ];
    if (!('required' in field) || !field.required) {
        fieldOperators.push({
            name: 'exists',
            type: fieldOperators[0].type
        });
    }
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
        name,
        fields: fieldOperators.reduce((objectTypeFields, operator)=>{
            // Get the type of the operator. It can be either static, or dynamic (=> a function)
            let gqlType = typeof operator.type === 'function' ? operator.type(field, parentName) : operator.type;
            // GraphQL does not allow types with duplicate names, so we use this cache to avoid that.
            // Without this, select and radio fields would have the same name, and GraphQL would throw an error
            // This usually only happens if a custom type is returned from the operator.type function
            if (typeof operator.type === 'function' && 'name' in gqlType) {
                if (gqlTypeCache[gqlType.name]) {
                    gqlType = gqlTypeCache[gqlType.name];
                } else {
                    gqlTypeCache[gqlType.name] = gqlType;
                }
            }
            if (listOperators.includes(operator.name)) {
                gqlType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](gqlType);
            } else if (operator.name === 'exists') {
                gqlType = __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"];
            }
            return {
                ...objectTypeFields,
                [operator.name]: {
                    type: gqlType
                }
            };
        }, {})
    });
}; //# sourceMappingURL=withOperators.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/fieldToWhereInputSchemaMap.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fieldToSchemaMap": (()=>fieldToSchemaMap)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-type-json/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/combineParentName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$recursivelyBuildNestedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/recursivelyBuildNestedPaths.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/withOperators.js [app-route] (ecmascript)");
;
;
;
;
;
;
const fieldToSchemaMap = ({ nestedFieldName, parentName })=>({
        array: (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$recursivelyBuildNestedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recursivelyBuildNestedPaths"])({
                field,
                nestedFieldName2: nestedFieldName,
                parentName
            }),
        checkbox: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        code: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        collapsible: (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$recursivelyBuildNestedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recursivelyBuildNestedPaths"])({
                field,
                nestedFieldName2: nestedFieldName,
                parentName
            }),
        date: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        email: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        group: (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$recursivelyBuildNestedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recursivelyBuildNestedPaths"])({
                field,
                nestedFieldName2: nestedFieldName,
                parentName
            }),
        json: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        number: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        point: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        radio: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        relationship: (field)=>{
            if (Array.isArray(field.relationTo)) {
                return {
                    type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
                        name: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_Relation`,
                        fields: {
                            relationTo: {
                                type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                                    name: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_Relation_RelationTo`,
                                    values: field.relationTo.reduce((values, relation)=>({
                                            ...values,
                                            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(relation)]: {
                                                value: relation
                                            }
                                        }), {})
                                })
                            },
                            value: {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                            }
                        }
                    })
                };
            }
            return {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            };
        },
        richText: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        row: (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$recursivelyBuildNestedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recursivelyBuildNestedPaths"])({
                field,
                nestedFieldName2: nestedFieldName,
                parentName
            }),
        select: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        tabs: (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$recursivelyBuildNestedPaths$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["recursivelyBuildNestedPaths"])({
                field,
                nestedFieldName2: nestedFieldName,
                parentName
            }),
        text: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        textarea: (field)=>({
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            }),
        upload: (field)=>{
            if (Array.isArray(field.relationTo)) {
                return {
                    type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
                        name: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_Relation`,
                        fields: {
                            relationTo: {
                                type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLEnumType"]({
                                    name: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$combineParentName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["combineParentName"])(parentName, field.name)}_Relation_RelationTo`,
                                    values: field.relationTo.reduce((values, relation)=>({
                                            ...values,
                                            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(relation)]: {
                                                value: relation
                                            }
                                        }), {})
                                })
                            },
                            value: {
                                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$type$2d$json$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GraphQLJSON"]
                            }
                        }
                    })
                };
            }
            return {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])(field, parentName)
            };
        }
    }); //# sourceMappingURL=fieldToWhereInputSchemaMap.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildWhereInputType.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildWhereInputType": (()=>buildWhereInputType)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$fieldToWhereInputSchemaMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/fieldToWhereInputSchemaMap.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/withOperators.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-route] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
;
;
;
;
;
;
const buildWhereInputType = ({ name, fields, parentName })=>{
    // This is the function that builds nested paths for all
    // field types with nested paths.
    const idField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(fields).find((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === 'id');
    const fieldTypes = fields.reduce((schema, field)=>{
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldIsPresentationalOnly"])(field) && !field.hidden) {
            const getFieldSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$fieldToWhereInputSchemaMap$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldToSchemaMap"])({
                parentName
            })[field.type];
            if (getFieldSchema) {
                const fieldSchema = getFieldSchema(field);
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldHasSubFields"])(field) || field.type === 'tabs') {
                    return {
                        ...schema,
                        ...fieldSchema.reduce((subFields, subField)=>({
                                ...subFields,
                                [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(subField.key)]: subField.type
                            }), {})
                    };
                }
                return {
                    ...schema,
                    [(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(field.name)]: fieldSchema
                };
            }
        }
        return schema;
    }, {});
    if (!idField) {
        fieldTypes.id = {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$withOperators$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withOperators"])({
                name: 'id',
                type: 'text'
            }, parentName)
        };
    }
    const fieldName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(name);
    const recursiveFields = {
        AND: {
            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
                name: `${fieldName}_where_and`,
                fields: ()=>({
                        ...fieldTypes,
                        ...recursiveFields
                    })
            }))
        },
        OR: {
            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLList"](new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
                name: `${fieldName}_where_or`,
                fields: ()=>({
                        ...fieldTypes,
                        ...recursiveFields
                    })
            }))
        }
    };
    return new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInputObjectType"]({
        name: `${fieldName}_where`,
        fields: {
            ...fieldTypes,
            ...recursiveFields
        }
    });
}; //# sourceMappingURL=buildWhereInputType.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/initCollections.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initCollections": (()=>initCollections)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/forgotPassword.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/init.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/login.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$logout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/logout.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$me$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/me.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$refresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/refresh.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/resetPassword.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/unlock.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/verifyEmail.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/count.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/create.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/delete.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/docAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/duplicate.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/find.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/findByID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/findVersionByID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/findVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/restoreVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/collections/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildMutationInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildMutationInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPaginatedListType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPaginatedListType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPoliciesType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPoliciesType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildWhereInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildWhereInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/flattenTopLevelFields.js [app-route] (ecmascript) <export default as flattenTopLevelFields>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/fields/config/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/buildCollectionFields.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/getLoginOptions.js [app-route] (ecmascript)");
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
function initCollections({ config, graphqlResult }) {
    Object.keys(graphqlResult.collections).forEach((slug)=>{
        const collection = graphqlResult.collections[slug];
        const { config: collectionConfig, config: { fields, graphQL = {}, versions } } = collection;
        if (!graphQL) {
            return;
        }
        let singularName;
        let pluralName;
        const fromSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNames"])(collection.config.slug);
        if (graphQL.singularName) {
            singularName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(graphQL.singularName, true);
        } else {
            singularName = fromSlug.singular;
        }
        if (graphQL.pluralName) {
            pluralName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(graphQL.pluralName, true);
        } else {
            pluralName = fromSlug.plural;
        }
        // For collections named 'Media' or similar,
        // there is a possibility that the singular name
        // will equal the plural name. Append `all` to the beginning
        // of potential conflicts
        if (singularName === pluralName) {
            pluralName = `all${singularName}`;
        }
        collection.graphQL = {};
        const hasIDField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$flattenTopLevelFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__flattenTopLevelFields$3e$__["flattenTopLevelFields"])(fields).findIndex((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === 'id') > -1;
        const idType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildMutationInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCollectionIDType"])(config.db.defaultIDType, collectionConfig);
        const baseFields = {};
        const whereInputFields = [
            ...fields
        ];
        if (!hasIDField) {
            baseFields.id = {
                type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](idType)
            };
            whereInputFields.push({
                name: 'id',
                type: config.db.defaultIDType
            });
        }
        const forceNullableObjectType = Boolean(versions?.drafts);
        collection.graphQL.type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildObjectType"])({
            name: singularName,
            baseFields,
            config,
            fields,
            forceNullable: forceNullableObjectType,
            graphqlResult,
            parentName: singularName
        });
        collection.graphQL.paginatedType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPaginatedListType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPaginatedListType"])(pluralName, collection.graphQL.type);
        collection.graphQL.whereInputType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildWhereInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildWhereInputType"])({
            name: singularName,
            fields: whereInputFields,
            parentName: singularName
        });
        const mutationInputFields = [
            ...fields
        ];
        if (collectionConfig.auth && (!collectionConfig.auth.disableLocalStrategy || typeof collectionConfig.auth.disableLocalStrategy === 'object' && collectionConfig.auth.disableLocalStrategy.optionalPassword)) {
            mutationInputFields.push({
                name: 'password',
                type: 'text',
                label: 'Password',
                required: !(typeof collectionConfig.auth.disableLocalStrategy === 'object' && collectionConfig.auth.disableLocalStrategy.optionalPassword)
            });
        }
        const createMutationInputType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildMutationInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMutationInputType"])({
            name: singularName,
            config,
            fields: mutationInputFields,
            graphqlResult,
            parentName: singularName
        });
        if (createMutationInputType) {
            collection.graphQL.mutationInputType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](createMutationInputType);
        }
        const updateMutationInputType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildMutationInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMutationInputType"])({
            name: `${singularName}Update`,
            config,
            fields: mutationInputFields.filter((field)=>!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.name === 'id')),
            forceNullable: true,
            graphqlResult,
            parentName: `${singularName}Update`
        });
        if (updateMutationInputType) {
            collection.graphQL.updateMutationInputType = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](updateMutationInputType);
        }
        const queriesEnabled = typeof collectionConfig.graphQL !== 'object' || !collectionConfig.graphQL.disableQueries;
        const mutationsEnabled = typeof collectionConfig.graphQL !== 'object' || !collectionConfig.graphQL.disableMutations;
        if (queriesEnabled) {
            graphqlResult.Query.fields[singularName] = {
                type: collection.graphQL.type,
                args: {
                    id: {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](idType)
                    },
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    ...config.localization ? {
                        fallbackLocale: {
                            type: graphqlResult.types.fallbackLocaleInputType
                        },
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$findByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findByIDResolver"])(collection)
            };
            graphqlResult.Query.fields[pluralName] = {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPaginatedListType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPaginatedListType"])(pluralName, collection.graphQL.type),
                args: {
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    where: {
                        type: collection.graphQL.whereInputType
                    },
                    ...config.localization ? {
                        fallbackLocale: {
                            type: graphqlResult.types.fallbackLocaleInputType
                        },
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {},
                    limit: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                    },
                    page: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                    },
                    pagination: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    sort: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                    }
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$find$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findResolver"])(collection)
            };
            graphqlResult.Query.fields[`count${pluralName}`] = {
                type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                    name: `count${pluralName}`,
                    fields: {
                        totalDocs: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                        }
                    }
                }),
                args: {
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    where: {
                        type: collection.graphQL.whereInputType
                    },
                    ...config.localization ? {
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$count$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["countResolver"])(collection)
            };
            graphqlResult.Query.fields[`docAccess${singularName}`] = {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPoliciesType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPolicyType"])({
                    type: 'collection',
                    entity: collectionConfig,
                    scope: 'docAccess',
                    typeSuffix: 'DocAccess'
                }),
                args: {
                    id: {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](idType)
                    }
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["docAccessResolver"])(collection)
            };
        }
        if (mutationsEnabled) {
            graphqlResult.Mutation.fields[`create${singularName}`] = {
                type: collection.graphQL.type,
                args: {
                    ...createMutationInputType ? {
                        data: {
                            type: collection.graphQL.mutationInputType
                        }
                    } : {},
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    ...config.localization ? {
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$create$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createResolver"])(collection)
            };
            graphqlResult.Mutation.fields[`update${singularName}`] = {
                type: collection.graphQL.type,
                args: {
                    id: {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](idType)
                    },
                    autosave: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    ...updateMutationInputType ? {
                        data: {
                            type: collection.graphQL.updateMutationInputType
                        }
                    } : {},
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    ...config.localization ? {
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateResolver"])(collection)
            };
            graphqlResult.Mutation.fields[`delete${singularName}`] = {
                type: collection.graphQL.type,
                args: {
                    id: {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](idType)
                    }
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$delete$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDeleteResolver"])(collection)
            };
            if (collectionConfig.disableDuplicate !== true) {
                graphqlResult.Mutation.fields[`duplicate${singularName}`] = {
                    type: collection.graphQL.type,
                    args: {
                        id: {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](idType)
                        },
                        ...createMutationInputType ? {
                            data: {
                                type: collection.graphQL.mutationInputType
                            }
                        } : {}
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$duplicate$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["duplicateResolver"])(collection)
                };
            }
        }
        if (collectionConfig.versions) {
            const versionIDType = config.db.defaultIDType === 'text' ? __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"] : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"];
            const versionCollectionFields = [
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildCollectionFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionCollectionFields"])(config, collectionConfig),
                {
                    name: 'id',
                    type: config.db.defaultIDType
                },
                {
                    name: 'createdAt',
                    type: 'date',
                    label: 'Created At'
                },
                {
                    name: 'updatedAt',
                    type: 'date',
                    label: 'Updated At'
                }
            ];
            collection.graphQL.versionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildObjectType"])({
                name: `${singularName}Version`,
                config,
                fields: versionCollectionFields,
                forceNullable: forceNullableObjectType,
                graphqlResult,
                parentName: `${singularName}Version`
            });
            if (queriesEnabled) {
                graphqlResult.Query.fields[`version${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(singularName)}`] = {
                    type: collection.graphQL.versionType,
                    args: {
                        id: {
                            type: versionIDType
                        },
                        ...config.localization ? {
                            fallbackLocale: {
                                type: graphqlResult.types.fallbackLocaleInputType
                            },
                            locale: {
                                type: graphqlResult.types.localeInputType
                            }
                        } : {}
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionByIDResolver"])(collection)
                };
                graphqlResult.Query.fields[`versions${pluralName}`] = {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPaginatedListType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPaginatedListType"])(`versions${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(pluralName)}`, collection.graphQL.versionType),
                    args: {
                        where: {
                            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildWhereInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildWhereInputType"])({
                                name: `versions${singularName}`,
                                fields: versionCollectionFields,
                                parentName: `versions${singularName}`
                            })
                        },
                        ...config.localization ? {
                            fallbackLocale: {
                                type: graphqlResult.types.fallbackLocaleInputType
                            },
                            locale: {
                                type: graphqlResult.types.localeInputType
                            }
                        } : {},
                        limit: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                        },
                        page: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                        },
                        pagination: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                        },
                        sort: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                        }
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionsResolver"])(collection)
                };
            }
            if (mutationsEnabled) {
                graphqlResult.Mutation.fields[`restoreVersion${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(singularName)}`] = {
                    type: collection.graphQL.type,
                    args: {
                        id: {
                            type: versionIDType
                        },
                        draft: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                        }
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$collections$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreVersionResolver"])(collection)
                };
            }
        }
        if (collectionConfig.auth) {
            const authFields = collectionConfig.auth.disableLocalStrategy || collectionConfig.auth.loginWithUsername && !collectionConfig.auth.loginWithUsername.allowEmailLogin && !collectionConfig.auth.loginWithUsername.requireEmail ? [] : [
                {
                    name: 'email',
                    type: 'email',
                    required: true
                }
            ];
            collection.graphQL.JWT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildObjectType"])({
                name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}JWT`),
                config,
                fields: [
                    ...collectionConfig.fields.filter((field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$fields$2f$config$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldAffectsData"])(field) && field.saveToJWT),
                    ...authFields,
                    {
                        name: 'collection',
                        type: 'text',
                        required: true
                    }
                ],
                graphqlResult,
                parentName: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}JWT`)
            });
            if (queriesEnabled) {
                graphqlResult.Query.fields[`me${singularName}`] = {
                    type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}Me`),
                        fields: {
                            collection: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            },
                            exp: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                            },
                            strategy: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            },
                            token: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            },
                            user: {
                                type: collection.graphQL.type
                            }
                        }
                    }),
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$me$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["me"])(collection)
                };
                graphqlResult.Query.fields[`initialized${singularName}`] = {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"],
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$init$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["init"])(collection.config.slug)
                };
            }
            if (mutationsEnabled) {
                graphqlResult.Mutation.fields[`refreshToken${singularName}`] = {
                    type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}Refreshed${singularName}`),
                        fields: {
                            exp: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                            },
                            refreshedToken: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            },
                            strategy: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            },
                            user: {
                                type: collection.graphQL.JWT
                            }
                        }
                    }),
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$refresh$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["refresh"])(collection)
                };
                graphqlResult.Mutation.fields[`logout${singularName}`] = {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"],
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$logout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["logout"])(collection)
                };
                if (!collectionConfig.auth.disableLocalStrategy) {
                    const authArgs = {};
                    const { canLoginWithEmail, canLoginWithUsername } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$getLoginOptions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getLoginOptions"])(collectionConfig.auth.loginWithUsername);
                    if (canLoginWithEmail) {
                        authArgs['email'] = {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"])
                        };
                    }
                    if (canLoginWithUsername) {
                        authArgs['username'] = {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"])
                        };
                    }
                    if (collectionConfig.auth.maxLoginAttempts > 0) {
                        graphqlResult.Mutation.fields[`unlock${singularName}`] = {
                            type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]),
                            args: authArgs,
                            resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$unlock$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unlock"])(collection)
                        };
                    }
                    graphqlResult.Mutation.fields[`login${singularName}`] = {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}LoginResult`),
                            fields: {
                                exp: {
                                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                                },
                                token: {
                                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                                },
                                user: {
                                    type: collection.graphQL.type
                                }
                            }
                        }),
                        args: {
                            ...authArgs,
                            password: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            }
                        },
                        resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$login$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["login"])(collection)
                    };
                    graphqlResult.Mutation.fields[`forgotPassword${singularName}`] = {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]),
                        args: {
                            disableEmail: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                            },
                            expiration: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                            },
                            ...authArgs
                        },
                        resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$forgotPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forgotPassword"])(collection)
                    };
                    graphqlResult.Mutation.fields[`resetPassword${singularName}`] = {
                        type: new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLObjectType"]({
                            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(`${slug}ResetPassword`),
                            fields: {
                                token: {
                                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                                },
                                user: {
                                    type: collection.graphQL.type
                                }
                            }
                        }),
                        args: {
                            password: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            },
                            token: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            }
                        },
                        resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$resetPassword$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resetPassword"])(collection)
                    };
                    graphqlResult.Mutation.fields[`verifyEmail${singularName}`] = {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"],
                        args: {
                            token: {
                                type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                            }
                        },
                        resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$verifyEmail$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyEmail"])(collection)
                    };
                }
            }
        }
    });
} //# sourceMappingURL=initCollections.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/docAccess.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "docAccessResolver": (()=>docAccessResolver)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__docAccessOperation__as__docAccessOperationGlobal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/docAccess.js [app-route] (ecmascript) <export docAccessOperation as docAccessOperationGlobal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
;
function docAccessResolver(global) {
    async function resolver(_, context) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__docAccessOperation__as__docAccessOperationGlobal$3e$__["docAccessOperationGlobal"])({
            globalConfig: global,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        });
    }
    return resolver;
} //# sourceMappingURL=docAccess.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/findOne.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findOne": (()=>findOne)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/findOne.js [app-route] (ecmascript)");
;
function findOne(globalConfig) {
    return async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const { slug } = globalConfig;
        const options = {
            slug,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOneOperation"])(options);
        return result;
    };
} //# sourceMappingURL=findOne.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/findVersionByID.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findVersionByID": (()=>findVersionByID)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__findVersionByIDOperation__as__findVersionByIDOperationGlobal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/findVersionByID.js [app-route] (ecmascript) <export findVersionByIDOperation as findVersionByIDOperationGlobal>");
;
function findVersionByID(globalConfig) {
    return async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const options = {
            id: args.id,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__findVersionByIDOperation__as__findVersionByIDOperationGlobal$3e$__["findVersionByIDOperationGlobal"])(options);
        return result;
    };
} //# sourceMappingURL=findVersionByID.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/findVersions.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "findVersions": (()=>findVersions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__findVersionsOperation__as__findVersionsOperationGlobal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/findVersions.js [app-route] (ecmascript) <export findVersionsOperation as findVersionsOperationGlobal>");
;
function findVersions(globalConfig) {
    return async function resolver(_, args, context) {
        const options = {
            depth: 0,
            globalConfig,
            limit: args.limit,
            page: args.page,
            pagination: args.pagination,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID'),
            sort: args.sort,
            where: args.where
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__findVersionsOperation__as__findVersionsOperationGlobal$3e$__["findVersionsOperationGlobal"])(options);
        return result;
    };
} //# sourceMappingURL=findVersions.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/restoreVersion.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "restoreVersion": (()=>restoreVersion)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__restoreVersionOperation__as__restoreVersionOperationGlobal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/restoreVersion.js [app-route] (ecmascript) <export restoreVersionOperation as restoreVersionOperationGlobal>");
;
function restoreVersion(globalConfig) {
    return async function resolver(_, args, context) {
        const options = {
            id: args.id,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__restoreVersionOperation__as__restoreVersionOperationGlobal$3e$__["restoreVersionOperationGlobal"])(options);
        return result;
    };
} //# sourceMappingURL=restoreVersion.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/update.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "update": (()=>update)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__updateOperation__as__updateOperationGlobal$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/globals/operations/update.js [app-route] (ecmascript) <export updateOperation as updateOperationGlobal>");
;
function update(globalConfig) {
    return async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const { slug } = globalConfig;
        const options = {
            slug,
            data: args.data,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$globals$2f$operations$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__updateOperation__as__updateOperationGlobal$3e$__["updateOperationGlobal"])(options);
        return result;
    };
} //# sourceMappingURL=update.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/initGlobals.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "initGlobals": (()=>initGlobals)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/pluralize@8.0.0/node_modules/pluralize/pluralize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/docAccess.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/findOne.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/findVersionByID.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/findVersions.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/restoreVersion.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/globals/update.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/formatName.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildMutationInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildMutationInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildObjectType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPaginatedListType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPaginatedListType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPoliciesType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPoliciesType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildWhereInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildWhereInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/formatLabels.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/versions/buildGlobalFields.js [app-route] (ecmascript)");
;
;
const { singular } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$pluralize$40$8$2e$0$2e$0$2f$node_modules$2f$pluralize$2f$pluralize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
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
function initGlobals({ config, graphqlResult }) {
    Object.keys(graphqlResult.globals.config).forEach((slug)=>{
        const global = graphqlResult.globals.config[slug];
        const { fields, graphQL, versions } = global;
        if (graphQL === false) {
            return;
        }
        const formattedName = graphQL?.name ? graphQL.name : singular((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$formatLabels$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toWords"])(global.slug, true));
        const forceNullableObjectType = Boolean(versions?.drafts);
        if (!graphqlResult.globals.graphQL) {
            graphqlResult.globals.graphQL = {};
        }
        const updateMutationInputType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildMutationInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildMutationInputType"])({
            name: formattedName,
            config,
            fields,
            graphqlResult,
            parentName: formattedName
        });
        graphqlResult.globals.graphQL[slug] = {
            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildObjectType"])({
                name: formattedName,
                config,
                fields,
                forceNullable: forceNullableObjectType,
                graphqlResult,
                parentName: formattedName
            }),
            mutationInputType: updateMutationInputType ? new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLNonNull"](updateMutationInputType) : null
        };
        const queriesEnabled = typeof global.graphQL !== 'object' || !global.graphQL.disableQueries;
        const mutationsEnabled = typeof global.graphQL !== 'object' || !global.graphQL.disableMutations;
        if (queriesEnabled) {
            graphqlResult.Query.fields[formattedName] = {
                type: graphqlResult.globals.graphQL[slug].type,
                args: {
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    ...config.localization ? {
                        fallbackLocale: {
                            type: graphqlResult.types.fallbackLocaleInputType
                        },
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$findOne$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findOne"])(global)
            };
            graphqlResult.Query.fields[`docAccess${formattedName}`] = {
                type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPoliciesType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPolicyType"])({
                    type: 'global',
                    entity: global,
                    scope: 'docAccess',
                    typeSuffix: 'DocAccess'
                }),
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$docAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["docAccessResolver"])(global)
            };
        }
        if (mutationsEnabled) {
            graphqlResult.Mutation.fields[`update${formattedName}`] = {
                type: graphqlResult.globals.graphQL[slug].type,
                args: {
                    ...updateMutationInputType ? {
                        data: {
                            type: graphqlResult.globals.graphQL[slug].mutationInputType
                        }
                    } : {},
                    draft: {
                        type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                    },
                    ...config.localization ? {
                        locale: {
                            type: graphqlResult.types.localeInputType
                        }
                    } : {}
                },
                resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$update$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["update"])(global)
            };
        }
        if (global.versions) {
            const idType = config.db.defaultIDType === 'number' ? __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"] : __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"];
            const versionGlobalFields = [
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$versions$2f$buildGlobalFields$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildVersionGlobalFields"])(config, global),
                {
                    name: 'id',
                    type: config.db.defaultIDType
                },
                {
                    name: 'createdAt',
                    type: 'date',
                    label: 'Created At'
                },
                {
                    name: 'updatedAt',
                    type: 'date',
                    label: 'Updated At'
                }
            ];
            graphqlResult.globals.graphQL[slug].versionType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildObjectType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildObjectType"])({
                name: `${formattedName}Version`,
                config,
                fields: versionGlobalFields,
                forceNullable: forceNullableObjectType,
                graphqlResult,
                parentName: `${formattedName}Version`
            });
            if (queriesEnabled) {
                graphqlResult.Query.fields[`version${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(formattedName)}`] = {
                    type: graphqlResult.globals.graphQL[slug].versionType,
                    args: {
                        id: {
                            type: idType
                        },
                        draft: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                        },
                        ...config.localization ? {
                            fallbackLocale: {
                                type: graphqlResult.types.fallbackLocaleInputType
                            },
                            locale: {
                                type: graphqlResult.types.localeInputType
                            }
                        } : {}
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$findVersionByID$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersionByID"])(global)
                };
                graphqlResult.Query.fields[`versions${formattedName}`] = {
                    type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPaginatedListType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPaginatedListType"])(`versions${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(formattedName)}`, graphqlResult.globals.graphQL[slug].versionType),
                    args: {
                        where: {
                            type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildWhereInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildWhereInputType"])({
                                name: `versions${formattedName}`,
                                fields: versionGlobalFields,
                                parentName: `versions${formattedName}`
                            })
                        },
                        ...config.localization ? {
                            fallbackLocale: {
                                type: graphqlResult.types.fallbackLocaleInputType
                            },
                            locale: {
                                type: graphqlResult.types.localeInputType
                            }
                        } : {},
                        limit: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                        },
                        page: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLInt"]
                        },
                        pagination: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                        },
                        sort: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLString"]
                        }
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$findVersions$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["findVersions"])(global)
                };
            }
            if (mutationsEnabled) {
                graphqlResult.Mutation.fields[`restoreVersion${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$formatName$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatName"])(formattedName)}`] = {
                    type: graphqlResult.globals.graphQL[slug].type,
                    args: {
                        id: {
                            type: idType
                        },
                        draft: {
                            type: __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__["GraphQLBoolean"]
                        }
                    },
                    resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$globals$2f$restoreVersion$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["restoreVersion"])(global)
                };
            }
        }
    });
} //# sourceMappingURL=initGlobals.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/wrapCustomResolver.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "wrapCustomFields": (()=>wrapCustomFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isolateObjectProperty.js [app-route] (ecmascript) <export default as isolateObjectProperty>");
;
function wrapCustomResolver(resolver) {
    return (source, args, context, info)=>{
        return resolver(source, args, {
            ...context,
            req: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isolateObjectProperty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__isolateObjectProperty$3e$__["isolateObjectProperty"])(context.req, 'transactionID')
        }, info);
    };
}
function wrapCustomFields(fields) {
    for(const key in fields){
        if (fields[key].resolve) {
            fields[key].resolve = wrapCustomResolver(fields[key].resolve);
        }
    }
    return fields;
} //# sourceMappingURL=wrapCustomResolver.js.map
}}),
"[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "configToSchema": (()=>configToSchema)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__ = __turbopack_import__("[externals]/graphql [external] (graphql, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$access$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/resolvers/auth/access.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildFallbackLocaleInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildFallbackLocaleInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildLocaleInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildLocaleInputType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPoliciesType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/buildPoliciesType.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$initCollections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/initCollections.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$initGlobals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/schema/initGlobals.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$wrapCustomResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/utilities/wrapCustomResolver.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$createComplexityRule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/createComplexityRule.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$estimators$2f$fieldExtensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/estimators/fieldExtensions/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$estimators$2f$simple$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@payloadcms+graphql@3.23.0_graphql@16.10.0_payload@3.23.0_graphql@16.10.0_monaco-editor@0.52._xru4ouhmmdpevogb54w6do6uju/node_modules/@payloadcms/graphql/dist/packages/graphql-query-complexity/estimators/simple/index.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
function configToSchema(config) {
    const collections = config.collections.reduce((acc, collection)=>{
        acc[collection.slug] = {
            config: collection
        };
        return acc;
    }, {});
    const globals = {
        config: config.globals
    };
    const graphqlResult = {
        collections,
        globals,
        Mutation: {
            name: 'Mutation',
            fields: {}
        },
        Query: {
            name: 'Query',
            fields: {}
        },
        types: {
            arrayTypes: {},
            blockInputTypes: {},
            blockTypes: {},
            groupTypes: {},
            tabTypes: {}
        }
    };
    if (config.localization) {
        graphqlResult.types['localeInputType'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildLocaleInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildLocaleInputType"])(config.localization);
        graphqlResult.types['fallbackLocaleInputType'] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildFallbackLocaleInputType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFallbackLocaleInputType"])(config.localization);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$initCollections$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initCollections"])({
        config,
        graphqlResult
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$initGlobals$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initGlobals"])({
        config,
        graphqlResult
    });
    graphqlResult.Query.fields['Access'] = {
        type: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$schema$2f$buildPoliciesType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildPoliciesType"])(config),
        resolve: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$resolvers$2f$auth$2f$access$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["accessResolver"])(config)
    };
    if (typeof config.graphQL.queries === 'function') {
        const customQueries = config.graphQL.queries(__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__, {
            ...graphqlResult,
            config
        });
        graphqlResult.Query = {
            ...graphqlResult.Query,
            fields: {
                ...graphqlResult.Query.fields,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$wrapCustomResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapCustomFields"])(customQueries || {})
            }
        };
    }
    if (typeof config.graphQL.mutations === 'function') {
        const customMutations = config.graphQL.mutations(__TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__, {
            ...graphqlResult,
            config
        });
        graphqlResult.Mutation = {
            ...graphqlResult.Mutation,
            fields: {
                ...graphqlResult.Mutation.fields,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$utilities$2f$wrapCustomResolver$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["wrapCustomFields"])(customMutations || {})
            }
        };
    }
    const query = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__.GraphQLObjectType(graphqlResult.Query);
    const mutation = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__.GraphQLObjectType(graphqlResult.Mutation);
    const schema = new __TURBOPACK__imported__module__$5b$externals$5d2f$graphql__$5b$external$5d$__$28$graphql$2c$__cjs$29$__.GraphQLSchema({
        mutation,
        query
    });
    const validationRules = (args)=>[
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$createComplexityRule$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createComplexityRule"])({
                estimators: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$estimators$2f$fieldExtensions$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fieldExtensionsEstimator"])(),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$payloadcms$2b$graphql$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$_xru4ouhmmdpevogb54w6do6uju$2f$node_modules$2f40$payloadcms$2f$graphql$2f$dist$2f$packages$2f$graphql$2d$query$2d$complexity$2f$estimators$2f$simple$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["simpleEstimator"])({
                        defaultComplexity: 1
                    })
                ],
                maximumComplexity: config.graphQL.maxComplexity,
                variables: args.variableValues
            }),
            ...typeof config?.graphQL?.validationRules === 'function' ? config.graphQL.validationRules(args) : []
        ];
    return {
        schema,
        validationRules
    };
} //# sourceMappingURL=index.js.map
}}),

};

//# sourceMappingURL=d3192_%40payloadcms_graphql_dist_e2ed16._.js.map