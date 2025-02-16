module.exports = {

"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/isEligibleRequest.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// eslint-disable-next-line regexp/no-super-linear-backtracking, regexp/no-obscure-range
__turbopack_esm__({
    "isEligibleRequest": (()=>isEligibleRequest)
});
const ACCEPTABLE_CONTENT_TYPE = /multipart\/['"()+-_]+(?:; ?['"()+-_]*)+$/i;
const UNACCEPTABLE_METHODS = new Set([
    'CONNECT',
    'DELETE',
    'GET',
    'HEAD',
    'OPTIONS',
    'TRACE'
]);
const hasBody = (req)=>{
    return Boolean(req.headers.get('transfer-encoding') || req.headers.get('content-length') && req.headers.get('content-length') !== '0');
};
const hasAcceptableMethod = (req)=>!UNACCEPTABLE_METHODS.has(req.method);
const hasAcceptableContentType = (req)=>{
    const contType = req.headers.get('content-type');
    return contType.includes('boundary=') && ACCEPTABLE_CONTENT_TYPE.test(contType);
};
const isEligibleRequest = (req)=>{
    try {
        return hasBody(req) && hasAcceptableMethod(req) && hasAcceptableContentType(req);
    } catch (e) {
        return false;
    }
}; //# sourceMappingURL=isEligibleRequest.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/utilities.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "buildFields": (()=>buildFields),
    "checkAndMakeDir": (()=>checkAndMakeDir),
    "debugLog": (()=>debugLog),
    "deleteFile": (()=>deleteFile),
    "getTempFilename": (()=>getTempFilename),
    "isFunc": (()=>isFunc),
    "isSafeFromPollution": (()=>isSafeFromPollution),
    "moveFile": (()=>moveFile),
    "parseFileName": (()=>parseFileName),
    "parseFileNameExtension": (()=>parseFileNameExtension),
    "promiseCallback": (()=>promiseCallback),
    "saveBufferToFile": (()=>saveBufferToFile)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_import__("[externals]/stream [external] (stream, cjs)");
;
;
;
// Parameters for safe file name parsing.
const SAFE_FILE_NAME_REGEX = /[^\w-]/g;
const MAX_EXTENSION_LENGTH = 3;
// Parameters to generate unique temporary file names:
const TEMP_COUNTER_MAX = 65536;
const TEMP_PREFIX = 'tmp';
let tempCounter = 0;
const debugLog = (options, msg)=>{
    const opts = options || {};
    if (!opts.debug) {
        return false;
    }
    console.log(`Next-file-upload: ${msg}`) // eslint-disable-line
    ;
    return true;
};
const getTempFilename = (prefix = TEMP_PREFIX)=>{
    tempCounter = tempCounter >= TEMP_COUNTER_MAX ? 1 : tempCounter + 1;
    return `${prefix}-${tempCounter}-${Date.now()}`;
};
const isFunc = (value)=>{
    return typeof value === 'function';
};
const errorFunc = (resolve, reject)=>isFunc(reject) ? reject : resolve;
const promiseCallback = (resolve, reject)=>{
    let hasFired = false;
    return (err)=>{
        if (hasFired) {
            return;
        }
        hasFired = true;
        return err ? errorFunc(resolve, reject)(err) : resolve();
    };
};
// The default prototypes for both objects and arrays.
// Used by isSafeFromPollution
const OBJECT_PROTOTYPE_KEYS = Object.getOwnPropertyNames(Object.prototype);
const ARRAY_PROTOTYPE_KEYS = Object.getOwnPropertyNames(Array.prototype);
const isSafeFromPollution = (base, key)=>{
    // We perform an instanceof check instead of Array.isArray as the former is more
    // permissive for cases in which the object as an Array prototype but was not constructed
    // via an Array constructor or literal.
    const TOUCHES_ARRAY_PROTOTYPE = base instanceof Array && ARRAY_PROTOTYPE_KEYS.includes(key);
    const TOUCHES_OBJECT_PROTOTYPE = OBJECT_PROTOTYPE_KEYS.includes(key);
    return !TOUCHES_ARRAY_PROTOTYPE && !TOUCHES_OBJECT_PROTOTYPE;
};
const buildFields = (instance, field, value)=>{
    // Do nothing if value is not set.
    if (value === null || value === undefined) {
        return instance;
    }
    instance = instance || Object.create(null);
    if (!isSafeFromPollution(instance, field)) {
        return instance;
    }
    // Non-array fields
    if (!instance[field]) {
        instance[field] = value;
        return instance;
    }
    // Array fields
    if (instance[field] instanceof Array) {
        instance[field].push(value);
    } else {
        instance[field] = [
            instance[field],
            value
        ];
    }
    return instance;
};
const checkAndMakeDir = (fileUploadOptions, filePath)=>{
    if (!fileUploadOptions.createParentPath) {
        return false;
    }
    // Check whether folder for the file exists.
    const parentPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].dirname(filePath);
    // Create folder if it doesn't exist.
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(parentPath)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(parentPath, {
            recursive: true
        });
    }
    // Checks folder again and return a results.
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(parentPath);
};
const deleteFile = (filePath, callback)=>__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlink(filePath, callback);
const copyFile = (src, dst, callback)=>{
    // cbCalled flag and runCb helps to run cb only once.
    let cbCalled = false;
    const runCb = (err)=>{
        if (cbCalled) {
            return;
        }
        cbCalled = true;
        callback(err);
    };
    // Create read stream
    const readable = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createReadStream(src);
    readable.on('error', runCb);
    // Create write stream
    const writable = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createWriteStream(dst);
    writable.on('error', (err)=>{
        readable.destroy();
        runCb(err);
    });
    writable.on('close', ()=>runCb());
    // Copy file via piping streams.
    readable.pipe(writable);
};
const moveFile = (src, dst, callback)=>__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].rename(src, dst, (err)=>{
        if (err) {
            // Try to copy file if rename didn't work.
            copyFile(src, dst, (cpErr)=>cpErr ? callback(cpErr) : deleteFile(src, callback));
            return;
        }
        // File was renamed successfully: Add true to the callback to indicate that.
        callback(null, true);
    });
const saveBufferToFile = (buffer, filePath, callback)=>{
    if (!Buffer.isBuffer(buffer)) {
        return callback(new Error('buffer variable should be type of Buffer!'));
    }
    // Setup readable stream from buffer.
    let streamData = buffer;
    const readStream = new __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"]();
    readStream._read = ()=>{
        readStream.push(streamData);
        streamData = null;
    };
    // Setup file system writable stream.
    const fstream = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createWriteStream(filePath);
    // console.log("Calling saveBuffer");
    fstream.on('error', (err)=>{
        // console.log("err cb")
        callback(err);
    });
    fstream.on('close', ()=>{
        // console.log("close cb");
        callback();
    });
    // Copy file via piping streams.
    readStream.pipe(fstream);
};
/**
 * Decodes uriEncoded file names.
 * @param {Object} opts - middleware options.
 * @param fileName {String} - file name to decode.
 * @returns {String}
 */ const uriDecodeFileName = (opts, fileName)=>{
    if (!opts || !opts.uriDecodeFileNames) {
        return fileName;
    }
    // Decode file name from URI with checking URI malformed errors.
    // See Issue https://github.com/richardgirges/express-fileupload/issues/342.
    try {
        return decodeURIComponent(fileName);
    } catch (err) {
        const matcher = /(%[a-f\d]{2})/gi;
        return fileName.split(matcher).map((str)=>{
            try {
                return decodeURIComponent(str);
            } catch (err) {
                return '';
            }
        }).join('');
    }
};
const parseFileNameExtension = (preserveExtension, fileName)=>{
    const defaultResult = {
        name: fileName,
        extension: ''
    };
    if (!preserveExtension) {
        return defaultResult;
    }
    // Define maximum extension length
    const maxExtLength = typeof preserveExtension === 'boolean' ? MAX_EXTENSION_LENGTH : preserveExtension;
    const nameParts = fileName.split('.');
    if (nameParts.length < 2) {
        return defaultResult;
    }
    let extension = nameParts.pop();
    if (extension.length > maxExtLength && maxExtLength > 0) {
        nameParts[nameParts.length - 1] += '.' + extension.substr(0, extension.length - maxExtLength);
        extension = extension.substr(-maxExtLength);
    }
    return {
        name: nameParts.join('.'),
        extension: maxExtLength ? extension : ''
    };
};
const parseFileName = (opts, fileName)=>{
    // Check fileName argument
    if (!fileName || typeof fileName !== 'string') {
        return getTempFilename();
    }
    // Cut off file name if it's length more then 255.
    let parsedName = fileName.length <= 255 ? fileName : fileName.substr(0, 255);
    // Decode file name if uriDecodeFileNames option set true.
    parsedName = uriDecodeFileName(opts, parsedName);
    // Stop parsing file name if safeFileNames options hasn't been set.
    if (!opts.safeFileNames) {
        return parsedName;
    }
    // Set regular expression for the file name.
    const nameRegex = typeof opts.safeFileNames === 'object' && opts.safeFileNames instanceof RegExp ? opts.safeFileNames : SAFE_FILE_NAME_REGEX;
    // Parse file name extension.
    const parsedFileName = parseFileNameExtension(opts.preserveExtension, parsedName);
    if (parsedFileName.extension.length) {
        parsedFileName.extension = '.' + parsedFileName.extension.replace(nameRegex, '');
    }
    return parsedFileName.name.replace(nameRegex, '').concat(parsedFileName.extension);
}; //# sourceMappingURL=utilities.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/handlers.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "memHandler": (()=>memHandler),
    "tempFileHandler": (()=>tempFileHandler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/crypto [external] (crypto, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/utilities.js [app-route] (ecmascript)");
;
;
;
;
const tempFileHandler = (options, fieldname, filename)=>{
    const dir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].normalize(options.tempFileDir);
    const tempFilePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), dir, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTempFilename"])());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAndMakeDir"])({
        createParentPath: true
    }, tempFilePath);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Temporary file path is ${tempFilePath}`);
    const hash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5');
    let fileSize = 0;
    let completed = false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Opening write stream for ${fieldname}->${filename}...`);
    const writeStream = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createWriteStream(tempFilePath);
    const writePromise = new Promise((resolve, reject)=>{
        writeStream.on('finish', ()=>resolve(true));
        writeStream.on('error', (err)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Error write temp file: ${err}`);
            reject(err);
        });
    });
    return {
        cleanup: ()=>{
            completed = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Cleaning up temporary file ${tempFilePath}...`);
            writeStream.end();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteFile"])(tempFilePath, (err)=>err ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Cleaning up temporary file ${tempFilePath} failed: ${err}`) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Cleaning up temporary file ${tempFilePath} done.`));
        },
        complete: ()=>{
            completed = true;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Upload ${fieldname}->${filename} completed, bytes:${fileSize}.`);
            if (writeStream instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["WriteStream"]) {
                writeStream.end();
            }
            // Return empty buff since data was uploaded into a temp file.
            return Buffer.concat([]);
        },
        dataHandler: (data)=>{
            if (completed === true) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Error: got ${fieldname}->${filename} data chunk for completed upload!`);
                return;
            }
            writeStream.write(data);
            hash.update(data);
            fileSize += data.length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Uploading ${fieldname}->${filename}, bytes:${fileSize}...`);
        },
        getFilePath: ()=>tempFilePath,
        getFileSize: ()=>fileSize,
        getHash: ()=>hash.digest('hex'),
        getWritePromise: ()=>writePromise
    };
};
const memHandler = (options, fieldname, filename)=>{
    const buffers = [];
    const hash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5');
    let fileSize = 0;
    let completed = false;
    const getBuffer = ()=>Buffer.concat(buffers, fileSize);
    return {
        cleanup: ()=>{
            completed = true;
        },
        complete: ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Upload ${fieldname}->${filename} completed, bytes:${fileSize}.`);
            completed = true;
            return getBuffer();
        },
        dataHandler: (data)=>{
            if (completed === true) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Error: got ${fieldname}->${filename} data chunk for completed upload!`);
                return;
            }
            buffers.push(data);
            hash.update(data);
            fileSize += data.length;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Uploading ${fieldname}->${filename}, bytes:${fileSize}...`);
        },
        getFilePath: ()=>'',
        getFileSize: ()=>fileSize,
        getHash: ()=>hash.digest('hex'),
        getWritePromise: ()=>Promise.resolve(true)
    };
}; //# sourceMappingURL=handlers.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/uploadTimer.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "createUploadTimer": (()=>createUploadTimer)
});
const createUploadTimer = (timeout = 0, callback = ()=>{})=>{
    let timer = null;
    const clear = ()=>{
        clearTimeout(timer);
    };
    const set = ()=>{
        // Do not start a timer if zero timeout or it hasn't been set.
        if (!timeout) {
            return false;
        }
        clear();
        timer = setTimeout(callback, timeout);
        return true;
    };
    return {
        clear,
        set
    };
}; //# sourceMappingURL=uploadTimer.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/fileFactory.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fileFactory": (()=>fileFactory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/utilities.js [app-route] (ecmascript)");
;
/**
 * Returns Local function that moves the file to a different location on the filesystem
 * which takes two function arguments to make it compatible w/ Promise or Callback APIs
 */ const moveFromTemp = (filePath, options, fileUploadOptions)=>(resolve, reject)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(fileUploadOptions, `Moving temporary file ${options.tempFilePath} to ${filePath}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["moveFile"])(options.tempFilePath, filePath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promiseCallback"])(resolve, reject));
    };
/**
 * Returns Local function that moves the file from buffer to a different location on the filesystem
 * which takes two function arguments to make it compatible w/ Promise or Callback APIs
 */ const moveFromBuffer = (filePath, options, fileUploadOptions)=>(resolve, reject)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(fileUploadOptions, `Moving uploaded buffer to ${filePath}`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveBufferToFile"])(options.buffer, filePath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["promiseCallback"])(resolve, reject));
    };
const fileFactory = (options, fileUploadOptions)=>{
    // see: https://github.com/richardgirges/express-fileupload/issues/14
    // firefox uploads empty file in case of cache miss when f5ing page.
    // resulting in unexpected behavior. if there is no file data, the file is invalid.
    // if (!fileUploadOptions.useTempFiles && !options.buffer.length) return;
    // Create and return file object.
    return {
        name: options.name,
        data: options.buffer,
        encoding: options.encoding,
        md5: options.hash,
        mimetype: options.mimetype,
        mv: (filePath, callback)=>{
            // Define a proper move function.
            const moveFunc = fileUploadOptions.useTempFiles ? moveFromTemp(filePath, options, fileUploadOptions) : moveFromBuffer(filePath, options, fileUploadOptions);
            // Create a folder for a file.
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkAndMakeDir"])(fileUploadOptions, filePath);
            // If callback is passed in, use the callback API, otherwise return a promise.
            const defaultReject = ()=>undefined;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFunc"])(callback) ? moveFunc(callback, defaultReject) : new Promise(moveFunc);
        },
        size: options.size,
        tempFilePath: options.tempFilePath,
        truncated: options.truncated
    };
}; //# sourceMappingURL=fileFactory.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/processNested.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "processNested": (()=>processNested)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/utilities.js [app-route] (ecmascript)");
;
const processNested = function(data) {
    if (!data || data.length < 1) {
        return Object.create(null);
    }
    const d = Object.create(null), keys = Object.keys(data);
    for(let i = 0; i < keys.length; i++){
        const key = keys[i], keyParts = key.replace(new RegExp(/\[/g), '.').replace(new RegExp(/\]/g), '').split('.'), value = data[key];
        let current = d;
        for(let index = 0; index < keyParts.length; index++){
            const k = keyParts[index];
            // Ensure we don't allow prototype pollution
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSafeFromPollution"])(current, k)) {
                continue;
            }
            if (index >= keyParts.length - 1) {
                current[k] = value;
            } else {
                if (!current[k]) {
                    current[k] = !keyParts[index + 1] ? [] : Object.create(null);
                }
                current = current[k];
            }
        }
    }
    return d;
}; //# sourceMappingURL=processNested.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/processMultipart.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "processMultipart": (()=>processMultipart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$busboy$40$1$2e$6$2e$0$2f$node_modules$2f$busboy$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/busboy@1.6.0/node_modules/busboy/lib/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/utilities.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$handlers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/handlers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$uploadTimer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/uploadTimer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/http-status@2.1.0/node_modules/http-status/dist/chunk-CUNVWAK5.js [app-route] (ecmascript) <export a as status>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$fileFactory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/fileFactory.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$processNested$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/processNested.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const waitFlushProperty = Symbol('wait flush property symbol');
const processMultipart = async ({ options, request })=>{
    let parsingRequest = true;
    let shouldAbortProccessing = false;
    let fileCount = 0;
    let filesCompleted = 0;
    let allFilesHaveResolved;
    let failedResolvingFiles;
    const allFilesComplete = new Promise((res, rej)=>{
        allFilesHaveResolved = res;
        failedResolvingFiles = rej;
    });
    const result = {
        fields: undefined,
        files: undefined
    };
    const headersObject = {};
    request.headers.forEach((value, name)=>{
        headersObject[name] = value;
    });
    const reader = request.body.getReader();
    const busboy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$busboy$40$1$2e$6$2e$0$2f$node_modules$2f$busboy$2f$lib$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
        ...options,
        headers: headersObject
    });
    function abortAndDestroyFile(file, err) {
        file.destroy();
        shouldAbortProccessing = true;
        failedResolvingFiles(err);
    }
    // Build multipart req.body fields
    busboy.on('field', (field, val)=>{
        result.fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFields"])(result.fields, field, val);
    });
    // Build req.files fields
    busboy.on('file', (field, file, info)=>{
        fileCount += 1;
        // Parse file name(cutting huge names, decoding, etc..).
        const { encoding, filename: name, mimeType: mime } = info;
        const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseFileName"])(options, name);
        // Define methods and handlers for upload process.
        const { cleanup, complete, dataHandler, getFilePath, getFileSize, getHash, getWritePromise } = options.useTempFiles ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$handlers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["tempFileHandler"])(options, field, filename) // Upload into temporary file.
         : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$handlers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["memHandler"])(options, field, filename) // Upload into RAM.
        ;
        const writePromise = options.useTempFiles ? getWritePromise().catch((err)=>{
            busboy.end();
            cleanup();
        }) : getWritePromise();
        const uploadTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$uploadTimer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createUploadTimer"])(options.uploadTimeout, ()=>{
            return abortAndDestroyFile(file, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Upload timeout for ${field}->${filename}, bytes:${getFileSize()}`));
        });
        file.on('limit', ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Size limit reached for ${field}->${filename}, bytes:${getFileSize()}`);
            uploadTimer.clear();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFunc"])(options.limitHandler)) {
                options.limitHandler({
                    request,
                    size: getFileSize()
                });
            }
            // Return error and cleanup files if abortOnLimit set.
            if (options.abortOnLimit) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Upload file size limit reached ${field}->${filename}.`);
                cleanup();
                abortAndDestroyFile(file, new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](options.responseOnLimit, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].REQUEST_ENTITY_TOO_LARGE, {
                    size: getFileSize()
                }));
            }
        });
        file.on('data', (data)=>{
            uploadTimer.set();
            dataHandler(data);
        });
        file.on('end', ()=>{
            const size = getFileSize();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Upload finished ${field}->${filename}, bytes:${size}`);
            uploadTimer.clear();
            if (!name && size === 0) {
                fileCount -= 1;
                if (options.useTempFiles) {
                    cleanup();
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Removing the empty file ${field}->${filename}`);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Don't add file instance if original name and size are empty`);
            }
            filesCompleted += 1;
            result.files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildFields"])(result.files, field, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$fileFactory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileFactory"])({
                name: filename,
                buffer: complete(),
                encoding,
                hash: getHash(),
                mimetype: mime,
                size,
                tempFilePath: getFilePath(),
                truncated: Boolean('truncated' in file && file.truncated) || false
            }, options));
            if (!request[waitFlushProperty]) {
                request[waitFlushProperty] = [];
            }
            request[waitFlushProperty].push(writePromise);
            if (filesCompleted === fileCount) {
                allFilesHaveResolved();
            }
        });
        file.on('error', (err)=>{
            uploadTimer.clear();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `File Error: ${err.message}`);
            cleanup();
            failedResolvingFiles(err);
        });
        // Start upload process.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `New upload started ${field}->${filename}, bytes:${getFileSize()}`);
        uploadTimer.set();
    });
    busboy.on('finish', async ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Busboy finished parsing request.`);
        if (options.parseNested) {
            result.fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$processNested$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processNested"])(result.fields);
            result.files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$processNested$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processNested"])(result.files);
        }
        if (request[waitFlushProperty]) {
            try {
                await Promise.all(request[waitFlushProperty]).then(()=>{
                    delete request[waitFlushProperty];
                });
            } catch (err) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Error waiting for file write promises: ${err}`);
            }
        }
        return result;
    });
    busboy.on('error', (err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Busboy error parsing multipart request', __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$http$2d$status$40$2$2e$1$2e$0$2f$node_modules$2f$http$2d$status$2f$dist$2f$chunk$2d$CUNVWAK5$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__a__as__status$3e$__["status"].BAD_REQUEST))=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(options, `Busboy error`);
        throw err;
    });
    while(parsingRequest){
        const { done, value } = await reader.read();
        if (done) {
            parsingRequest = false;
        }
        if (value && !shouldAbortProccessing) {
            busboy.write(value);
        }
    }
    if (fileCount !== 0) {
        await allFilesComplete.catch((e)=>{
            throw e;
        });
    }
    return result;
}; //# sourceMappingURL=processMultipart.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchAPIFileUpload": (()=>fetchAPIFileUpload)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$isEligibleRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/isEligibleRequest.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$processMultipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/processMultipart.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-multipart/utilities.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
;
;
;
;
const DEFAULT_OPTIONS = {
    abortOnLimit: false,
    createParentPath: false,
    debug: false,
    defParamCharset: 'utf8',
    limitHandler: false,
    parseNested: false,
    preserveExtension: false,
    responseOnLimit: 'File size limit has been reached',
    safeFileNames: false,
    tempFileDir: __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'tmp'),
    uploadTimeout: 60000,
    uriDecodeFileNames: false,
    useTempFiles: false
};
const fetchAPIFileUpload = async ({ options, request })=>{
    const uploadOptions = {
        ...DEFAULT_OPTIONS,
        ...options
    };
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$isEligibleRequest$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEligibleRequest"])(request)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$utilities$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["debugLog"])(uploadOptions, 'Request is not eligible for file upload!');
        return {
            error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Request is not eligible for file upload', 500),
            fields: undefined,
            files: undefined
        };
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fetchAPI$2d$multipart$2f$processMultipart$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["processMultipart"])({
            options: uploadOptions,
            request
        });
    }
}; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getExternalFile.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getExternalFile": (()=>getExternalFile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/APIError.js [app-route] (ecmascript)");
;
const getExternalFile = async ({ data, req, uploadConfig })=>{
    const { filename, url } = data;
    if (typeof url === 'string') {
        let fileURL = url;
        if (!url.startsWith('http')) {
            const baseUrl = req.headers.get('origin') || `${req.protocol}://${req.headers.get('host')}`;
            fileURL = `${baseUrl}${url}`;
        }
        const headers = uploadConfig.externalFileHeaderFilter ? uploadConfig.externalFileHeaderFilter(Object.fromEntries(new Headers(req.headers))) : {
            cookie: req.headers?.get('cookie')
        };
        const res = await fetch(fileURL, {
            credentials: 'include',
            headers,
            method: 'GET'
        });
        if (!res.ok) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"](`Failed to fetch file from ${fileURL}`, res.status);
        }
        const data = await res.arrayBuffer();
        return {
            name: filename,
            data: Buffer.from(data),
            mimetype: res.headers.get('content-type') || undefined,
            size: Number(res.headers.get('content-length')) || 0
        };
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$APIError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["APIError"]('Invalid file url', 400);
}; //# sourceMappingURL=getExternalFile.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getFileByPath.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFileByPath": (()=>getFileByPath)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/index.js [app-route] (ecmascript) <locals>");
;
;
;
const mimeTypeEstimate = {
    svg: 'image/svg+xml'
};
const getFileByPath = async (filePath)=>{
    if (typeof filePath === 'string') {
        const data = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath);
        const mimetype = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fileTypeFromFile"])(filePath);
        const { size } = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(filePath);
        const name = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].basename(filePath);
        const ext = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].extname(filePath).slice(1);
        const mime = (await mimetype)?.mime || mimeTypeEstimate[ext];
        return {
            name,
            data,
            mimetype: mime,
            size
        };
    }
    return undefined;
}; //# sourceMappingURL=getFileByPath.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/canResizeImage.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "canResizeImage": (()=>canResizeImage)
});
function canResizeImage(mimeType) {
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/webp',
        'image/tiff'
    ].indexOf(mimeType) > -1;
} //# sourceMappingURL=canResizeImage.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/isImage.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "isImage": (()=>isImage)
});
function isImage(mimeType) {
    return [
        'image/jpeg',
        'image/png',
        'image/gif',
        'image/svg+xml',
        'image/webp',
        'image/avif',
        'image/jxl'
    ].indexOf(mimeType) > -1;
} //# sourceMappingURL=isImage.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/tempFile.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "temporaryFileTask": (()=>temporaryFileTask)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:os [external] (node:os, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@10.0.0/node_modules/uuid/dist/esm-node/v4.js [app-route] (ecmascript) <export default as v4>");
;
;
;
;
async function runTask(temporaryPath, callback) {
    try {
        return await callback(temporaryPath);
    } finally{
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].rm(temporaryPath, {
            force: true,
            maxRetries: 2,
            recursive: true
        });
    }
}
const temporaryFileTask = async (callback, options = {})=>{
    const filePath = await temporaryFile(options);
    return runTask(filePath, callback);
};
async function temporaryFile(options) {
    if (options.name) {
        if (options.extension !== undefined && options.extension !== null) {
            throw new Error('The `name` and `extension` options are mutually exclusive');
        }
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(await temporaryDirectory(), options.name);
    }
    return await getPath() + (options.extension === undefined || options.extension === null ? '' : '.' + options.extension.replace(/^\./, ''));
}
async function temporaryDirectory({ prefix = '' } = {}) {
    const directory = await getPath(prefix);
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].mkdir(directory);
    return directory;
}
async function getPath(prefix = '') {
    const temporaryDirectory = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].realpath(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$os__$5b$external$5d$__$28$node$3a$os$2c$__cjs$29$__["default"].tmpdir());
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(temporaryDirectory, prefix + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$10$2e$0$2e$0$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])());
} //# sourceMappingURL=tempFile.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getImageSize.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getImageSize": (()=>getImageSize)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$1$2e$2$2e$0$2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/image-size@1.2.0/node_modules/image-size/dist/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_import__("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$tempFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/tempFile.js [app-route] (ecmascript)");
;
;
;
;
const { imageSize } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$image$2d$size$40$1$2e$2$2e$0$2f$node_modules$2f$image$2d$size$2f$dist$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
const imageSizePromise = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(imageSize);
async function getImageSize(file) {
    if (file.tempFilePath) {
        return imageSizePromise(file.tempFilePath);
    }
    // Tiff file do not support buffers or streams, so we must write to file first
    // then retrieve dimensions. https://github.com/image-size/image-size/issues/103
    if (file.mimetype === 'image/tiff') {
        const dimensions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$tempFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["temporaryFileTask"])(async (filepath)=>{
            __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filepath, file.data);
            return imageSizePromise(filepath);
        }, {
            extension: 'tiff'
        });
        return dimensions;
    }
    return imageSize(file.data);
} //# sourceMappingURL=getImageSize.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "optionallyAppendMetadata": (()=>optionallyAppendMetadata)
});
async function optionallyAppendMetadata({ req, sharpFile, withMetadata }) {
    const metadata = await sharpFile.metadata();
    if (withMetadata === true) {
        return sharpFile.withMetadata();
    } else if (typeof withMetadata === 'function') {
        const useMetadata = await withMetadata({
            metadata,
            req
        });
        if (useMetadata) {
            return sharpFile.withMetadata();
        }
    }
    return sharpFile;
} //# sourceMappingURL=optionallyAppendMetadata.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/docWithFilenameExists.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const docWithFilenameExists = async ({ collectionSlug, filename, req })=>{
    const doc = await req.payload.db.findOne({
        collection: collectionSlug,
        req,
        where: {
            filename: {
                equals: filename
            }
        }
    });
    if (doc) {
        return true;
    }
    return false;
};
const __TURBOPACK__default__export__ = docWithFilenameExists;
 //# sourceMappingURL=docWithFilenameExists.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
;
const fileExists = async (filename)=>{
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.stat(filename);
        return true;
    } catch (err) {
        return false;
    }
};
const __TURBOPACK__default__export__ = fileExists;
 //# sourceMappingURL=fileExists.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getSafeFilename.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getSafeFileName": (()=>getSafeFileName)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanitize-filename@1.6.3/node_modules/sanitize-filename/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$docWithFilenameExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/docWithFilenameExists.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)");
;
;
;
const incrementName = (name)=>{
    const extension = name.split('.').pop();
    const baseFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(name.substring(0, name.lastIndexOf('.')) || name);
    let incrementedName = baseFilename;
    const regex = /(.*)-(\d+)$/;
    const found = baseFilename.match(regex);
    if (found === null) {
        incrementedName += '-1';
    } else {
        const matchedName = found[1];
        const matchedNumber = found[2];
        const incremented = Number(matchedNumber) + 1;
        incrementedName = `${matchedName}-${incremented}`;
    }
    return `${incrementedName}.${extension}`;
};
async function getSafeFileName({ collectionSlug, desiredFilename, req, staticPath }) {
    let modifiedFilename = desiredFilename;
    while(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$docWithFilenameExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
        collectionSlug,
        filename: modifiedFilename,
        path: staticPath,
        req
    }) || await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(`${staticPath}/${modifiedFilename}`)){
        modifiedFilename = incrementName(modifiedFilename);
    }
    return modifiedFilename;
} //# sourceMappingURL=getSafeFilename.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/cropImage.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "cropImage": (()=>cropImage),
    "percentToPixel": (()=>percentToPixel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)");
;
const percentToPixel = (value, dimension)=>{
    return Math.floor(parseFloat(value) / 100 * dimension);
};
async function cropImage({ cropData, dimensions, file, heightInPixels, req, sharp, widthInPixels, withMetadata }) {
    try {
        const { x, y } = cropData;
        const fileIsAnimatedType = [
            'image/avif',
            'image/gif',
            'image/webp'
        ].includes(file.mimetype);
        const sharpOptions = {};
        if (fileIsAnimatedType) {
            sharpOptions.animated = true;
        }
        const formattedCropData = {
            height: Number(heightInPixels),
            left: percentToPixel(x, dimensions.width),
            top: percentToPixel(y, dimensions.height),
            width: Number(widthInPixels)
        };
        let cropped = sharp(file.tempFilePath || file.data, sharpOptions).extract(formattedCropData);
        cropped = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
            req,
            sharpFile: cropped,
            withMetadata
        });
        return await cropped.toBuffer({
            resolveWithObject: true
        });
    } catch (error) {
        console.error(`Error cropping image:`, error);
        throw error;
    }
} //# sourceMappingURL=cropImage.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/imageResizer.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "resizeAndTransformImageSizes": (()=>resizeAndTransformImageSizes)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanitize-filename@1.6.3/node_modules/sanitize-filename/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/isNumber.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)");
;
;
;
;
;
;
/**
 * Sanitize the image name and extract the extension from the source image
 *
 * @param sourceImage - the source image
 * @returns the sanitized name and extension
 */ const getSanitizedImageData = (sourceImage)=>{
    const extension = sourceImage.split('.').pop();
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(sourceImage.substring(0, sourceImage.lastIndexOf('.')) || sourceImage);
    return {
        name,
        ext: extension
    };
};
const createImageName = ({ extension, height, outputImageName, width })=>{
    return `${outputImageName}-${width}x${height}.${extension}`;
};
/**
 * Create the result object for the image resize operation based on the
 * provided parameters. If the name is not provided, an empty result object
 * is returned.
 *
 * @param name - the name of the image
 * @param filename - the filename of the image
 * @param width - the width of the image
 * @param height - the height of the image
 * @param filesize - the filesize of the image
 * @param mimeType - the mime type of the image
 * @param sizesToSave - the sizes to save
 * @returns the result object
 */ const createResult = ({ name, filename = null, filesize = null, height = null, mimeType = null, sizesToSave = [], width = null })=>{
    return {
        sizeData: {
            [name]: {
                filename,
                filesize,
                height,
                mimeType,
                width
            }
        },
        sizesToSave
    };
};
/**
 * Determine whether or not to resize the image.
 * - resize using image config
 * - resize using image config with focal adjustments
 * - do not resize at all
 *
 * `imageResizeConfig.withoutEnlargement`:
 * - undefined [default]: uploading images with smaller width AND height than the image size will return null
 * - false: always enlarge images to the image size
 * - true: if the image is smaller than the image size, return the original image
 *
 * `imageResizeConfig.withoutReduction`:
 * - false [default]: always enlarge images to the image size
 * - true: if the image is smaller than the image size, return the original image
 *
 * @return 'omit' | 'resize' | 'resizeWithFocalPoint'
 */ const getImageResizeAction = ({ dimensions: originalImage, hasFocalPoint, imageResizeConfig })=>{
    const { fit, height: targetHeight, width: targetWidth, withoutEnlargement, withoutReduction } = imageResizeConfig;
    // prevent upscaling by default when x and y are both smaller than target image size
    if (targetHeight && targetWidth) {
        const originalImageIsSmallerXAndY = originalImage.width < targetWidth && originalImage.height < targetHeight;
        if (withoutEnlargement === undefined && originalImageIsSmallerXAndY) {
            return 'omit' // prevent image size from being enlarged
            ;
        }
    }
    if (withoutEnlargement === undefined && (!targetWidth || !targetHeight)) {
        if (targetWidth && originalImage.width < targetWidth || targetHeight && originalImage.height < targetHeight) {
            return 'omit';
        }
    }
    const originalImageIsSmallerXOrY = originalImage.width < targetWidth || originalImage.height < targetHeight;
    if (fit === 'contain' || fit === 'inside') {
        return 'resize';
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(targetHeight) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(targetWidth)) {
        return 'resize';
    }
    const targetAspectRatio = targetWidth / targetHeight;
    const originalAspectRatio = originalImage.width / originalImage.height;
    if (originalAspectRatio === targetAspectRatio) {
        return 'resize';
    }
    if (withoutEnlargement && originalImageIsSmallerXOrY) {
        return 'resize';
    }
    if (withoutReduction && !originalImageIsSmallerXOrY) {
        return 'resize';
    }
    return hasFocalPoint ? 'resizeWithFocalPoint' : 'resize';
};
/**
 * Sanitize the resize config. If the resize config has the `withoutReduction`
 * property set to true, the `fit` and `position` properties will be set to `contain`
 * and `top left` respectively.
 *
 * @param resizeConfig - the resize config
 * @returns a sanitized resize config
 */ const sanitizeResizeConfig = (resizeConfig)=>{
    if (resizeConfig.withoutReduction) {
        return {
            ...resizeConfig,
            // Why fit `contain` should also be set to https://github.com/lovell/sharp/issues/3595
            fit: resizeConfig?.fit || 'contain',
            position: resizeConfig?.position || 'left top'
        };
    }
    return resizeConfig;
};
/**
 * Used to extract height from images, animated or not.
 *
 * @param sharpMetadata - the sharp metadata
 * @returns the height of the image
 */ function extractHeightFromImage(sharpMetadata) {
    if (sharpMetadata?.pages) {
        return sharpMetadata.height / sharpMetadata.pages;
    }
    return sharpMetadata.height;
}
async function resizeAndTransformImageSizes({ config, dimensions, file, mimeType, req, savedFilename, sharp, staticPath, uploadEdits, withMetadata }) {
    const { focalPoint: focalPointEnabled = true, imageSizes } = config.upload;
    // Focal point adjustments
    const incomingFocalPoint = uploadEdits.focalPoint ? {
        x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(uploadEdits.focalPoint.x) ? Math.round(uploadEdits.focalPoint.x) : 50,
        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$isNumber$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNumber"])(uploadEdits.focalPoint.y) ? Math.round(uploadEdits.focalPoint.y) : 50
    } : undefined;
    const defaultResult = {
        ...focalPointEnabled && incomingFocalPoint && {
            focalPoint: incomingFocalPoint
        },
        sizeData: {},
        sizesToSave: []
    };
    if (!imageSizes || !sharp) {
        return defaultResult;
    }
    // Determine if the file is animated
    const fileIsAnimatedType = [
        'image/avif',
        'image/gif',
        'image/webp'
    ].includes(file.mimetype);
    const sharpOptions = {};
    if (fileIsAnimatedType) {
        sharpOptions.animated = true;
    }
    const sharpBase = sharp(file.tempFilePath || file.data, sharpOptions).rotate() // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
    ;
    const originalImageMeta = await sharpBase.metadata();
    let adjustedDimensions = {
        ...dimensions
    };
    // Images with an exif orientation of 5, 6, 7, or 8 are auto-rotated by sharp
    // Need to adjust the dimensions to match the original image
    if ([
        5,
        6,
        7,
        8
    ].includes(originalImageMeta.orientation)) {
        adjustedDimensions = {
            ...dimensions,
            height: dimensions.width,
            width: dimensions.height
        };
    }
    const resizeImageMeta = {
        height: extractHeightFromImage(originalImageMeta),
        width: originalImageMeta.width
    };
    const results = await Promise.all(imageSizes.map(async (imageResizeConfig)=>{
        imageResizeConfig = sanitizeResizeConfig(imageResizeConfig);
        const resizeAction = getImageResizeAction({
            dimensions,
            hasFocalPoint: Boolean(incomingFocalPoint),
            imageResizeConfig
        });
        if (resizeAction === 'omit') {
            return createResult({
                name: imageResizeConfig.name
            });
        }
        const imageToResize = sharpBase.clone();
        let resized = imageToResize;
        if (resizeAction === 'resizeWithFocalPoint') {
            let { height: resizeHeight, width: resizeWidth } = imageResizeConfig;
            const originalAspectRatio = adjustedDimensions.width / adjustedDimensions.height;
            // Calculate resizeWidth based on original aspect ratio if it's undefined
            if (resizeHeight && !resizeWidth) {
                resizeWidth = Math.round(resizeHeight * originalAspectRatio);
            }
            // Calculate resizeHeight based on original aspect ratio if it's undefined
            if (resizeWidth && !resizeHeight) {
                resizeHeight = Math.round(resizeWidth / originalAspectRatio);
            }
            if (!resizeHeight) {
                resizeHeight = resizeImageMeta.height;
            }
            if (!resizeWidth) {
                resizeWidth = resizeImageMeta.width;
            }
            const resizeAspectRatio = resizeWidth / resizeHeight;
            const prioritizeHeight = resizeAspectRatio < originalAspectRatio;
            // Scales the image before extracting from it
            resized = imageToResize.resize({
                height: prioritizeHeight ? resizeHeight : undefined,
                width: prioritizeHeight ? undefined : resizeWidth
            });
            const metadataAppendedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
                req,
                sharpFile: resized,
                withMetadata
            });
            // Must read from buffer, resized.metadata will return the original image metadata
            const { info } = await metadataAppendedFile.toBuffer({
                resolveWithObject: true
            });
            resizeImageMeta.height = extractHeightFromImage({
                ...originalImageMeta,
                height: info.height
            });
            resizeImageMeta.width = info.width;
            const halfResizeX = resizeWidth / 2;
            const xFocalCenter = resizeImageMeta.width * (incomingFocalPoint.x / 100);
            const calculatedRightPixelBound = xFocalCenter + halfResizeX;
            let leftBound = xFocalCenter - halfResizeX;
            // if the right bound is greater than the image width, adjust the left bound
            // keeping focus on the right
            if (calculatedRightPixelBound > resizeImageMeta.width) {
                leftBound = resizeImageMeta.width - resizeWidth;
            }
            // if the left bound is less than 0, adjust the left bound to 0
            // keeping the focus on the left
            if (leftBound < 0) {
                leftBound = 0;
            }
            const halfResizeY = resizeHeight / 2;
            const yFocalCenter = resizeImageMeta.height * (incomingFocalPoint.y / 100);
            const calculatedBottomPixelBound = yFocalCenter + halfResizeY;
            let topBound = yFocalCenter - halfResizeY;
            // if the bottom bound is greater than the image height, adjust the top bound
            // keeping the image as far right as possible
            if (calculatedBottomPixelBound > resizeImageMeta.height) {
                topBound = resizeImageMeta.height - resizeHeight;
            }
            // if the top bound is less than 0, adjust the top bound to 0
            // keeping the image focus near the top
            if (topBound < 0) {
                topBound = 0;
            }
            resized = resized.extract({
                height: resizeHeight,
                left: Math.floor(leftBound),
                top: Math.floor(topBound),
                width: resizeWidth
            });
        } else {
            resized = imageToResize.resize(imageResizeConfig);
        }
        if (imageResizeConfig.formatOptions) {
            resized = resized.toFormat(imageResizeConfig.formatOptions.format, imageResizeConfig.formatOptions.options);
        }
        if (imageResizeConfig.trimOptions) {
            resized = resized.trim(imageResizeConfig.trimOptions);
        }
        const metadataAppendedFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
            req,
            sharpFile: resized,
            withMetadata
        });
        const { data: bufferData, info: bufferInfo } = await metadataAppendedFile.toBuffer({
            resolveWithObject: true
        });
        const sanitizedImage = getSanitizedImageData(savedFilename);
        if (req.payloadUploadSizes) {
            req.payloadUploadSizes[imageResizeConfig.name] = bufferData;
        }
        const mimeInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileTypeFromBuffer"])(bufferData);
        const imageNameWithDimensions = imageResizeConfig.generateImageName ? imageResizeConfig.generateImageName({
            extension: mimeInfo?.ext || sanitizedImage.ext,
            height: extractHeightFromImage({
                ...originalImageMeta,
                height: bufferInfo.height
            }),
            originalName: sanitizedImage.name,
            sizeName: imageResizeConfig.name,
            width: bufferInfo.width
        }) : createImageName({
            extension: mimeInfo?.ext || sanitizedImage.ext,
            height: extractHeightFromImage({
                ...originalImageMeta,
                height: bufferInfo.height
            }),
            outputImageName: sanitizedImage.name,
            width: bufferInfo.width
        });
        const imagePath = `${staticPath}/${imageNameWithDimensions}`;
        if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(imagePath)) {
            try {
                __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(imagePath);
            } catch  {
            // Ignore unlink errors
            }
        }
        const { height, size, width } = bufferInfo;
        return createResult({
            name: imageResizeConfig.name,
            filename: imageNameWithDimensions,
            filesize: size,
            height: fileIsAnimatedType && originalImageMeta.pages ? height / originalImageMeta.pages : height,
            mimeType: mimeInfo?.mime || mimeType,
            sizesToSave: [
                {
                    buffer: bufferData,
                    path: imagePath
                }
            ],
            width
        });
    }));
    return results.reduce((acc, result)=>{
        Object.assign(acc.sizeData, result.sizeData);
        acc.sizesToSave.push(...result.sizesToSave);
        return acc;
    }, {
        ...defaultResult
    });
} //# sourceMappingURL=imageResizer.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/generateFileData.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "generateFileData": (()=>generateFileData)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/sanitize-filename@1.6.3/node_modules/sanitize-filename/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getExternalFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getExternalFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getFileByPath.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileRetrievalError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/FileRetrievalError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$canResizeImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/canResizeImage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$isImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/isImage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getImageSize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getImageSize.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/optionallyAppendMetadata.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/file-type@19.3.0/node_modules/file-type/core.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getSafeFilename$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getSafeFilename.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$cropImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/cropImage.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$imageResizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/imageResizer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/FileUploadError.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/MissingFile.js [app-route] (ecmascript)");
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
const generateFileData = async ({ collection: { config: collectionConfig }, data, isDuplicating, operation, originalDoc, overwriteExistingFiles, req, throwOnMissingFile })=>{
    if (!collectionConfig.upload) {
        return {
            data,
            files: []
        };
    }
    const { sharp } = req.payload.config;
    let file = req.file;
    const uploadEdits = parseUploadEditsFromReqOrIncomingData({
        data,
        isDuplicating,
        operation,
        originalDoc,
        req
    });
    const { disableLocalStorage, focalPoint: focalPointEnabled = true, formatOptions, imageSizes, resizeOptions, staticDir, trimOptions, withMetadata } = collectionConfig.upload;
    const staticPath = staticDir;
    const incomingFileData = isDuplicating ? originalDoc : data;
    if (!file && uploadEdits && incomingFileData) {
        const { filename, url } = incomingFileData;
        try {
            if (url && url.startsWith('/') && !disableLocalStorage) {
                const filePath = `${staticPath}/${filename}`;
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getFileByPath$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getFileByPath"])(filePath);
                file = response;
                overwriteExistingFiles = true;
            } else if (filename && url) {
                file = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getExternalFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getExternalFile"])({
                    data: incomingFileData,
                    req,
                    uploadConfig: collectionConfig.upload
                });
                overwriteExistingFiles = true;
            }
        } catch (err) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileRetrievalError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileRetrievalError"](req.t, err instanceof Error ? err.message : undefined);
        }
    }
    if (isDuplicating) {
        overwriteExistingFiles = false;
    }
    if (!file) {
        if (throwOnMissingFile) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$MissingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MissingFile"](req.t);
        }
        return {
            data,
            files: []
        };
    }
    if (!disableLocalStorage) {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["mkdirSync"])(staticPath, {
            recursive: true
        });
    }
    let newData = data;
    const filesToSave = [];
    const fileData = {};
    const fileIsAnimatedType = [
        'image/avif',
        'image/gif',
        'image/webp'
    ].includes(file.mimetype);
    const cropData = typeof uploadEdits === 'object' && 'crop' in uploadEdits ? uploadEdits.crop : undefined;
    try {
        const fileSupportsResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$canResizeImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["canResizeImage"])(file.mimetype);
        let fsSafeName;
        let sharpFile;
        let dimensions;
        let fileBuffer;
        let ext;
        let mime;
        const fileHasAdjustments = fileSupportsResize && Boolean(resizeOptions || formatOptions || imageSizes || trimOptions || file.tempFilePath);
        const sharpOptions = {};
        if (fileIsAnimatedType) {
            sharpOptions.animated = true;
        }
        if (sharp && (fileIsAnimatedType || fileHasAdjustments)) {
            if (file.tempFilePath) {
                sharpFile = sharp(file.tempFilePath, sharpOptions).rotate() // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
                ;
            } else {
                sharpFile = sharp(file.data, sharpOptions).rotate() // pass rotate() to auto-rotate based on EXIF data. https://github.com/payloadcms/payload/pull/3081
                ;
            }
            if (fileHasAdjustments) {
                if (resizeOptions) {
                    sharpFile = sharpFile.resize(resizeOptions);
                }
                if (formatOptions) {
                    sharpFile = sharpFile.toFormat(formatOptions.format, formatOptions.options);
                }
                if (trimOptions) {
                    sharpFile = sharpFile.trim(trimOptions);
                }
            }
        }
        if (fileSupportsResize || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$isImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isImage"])(file.mimetype)) {
            dimensions = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getImageSize$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getImageSize"])(file);
            fileData.width = dimensions.width;
            fileData.height = dimensions.height;
        }
        if (sharpFile) {
            const metadata = await sharpFile.metadata();
            sharpFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$optionallyAppendMetadata$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["optionallyAppendMetadata"])({
                req,
                sharpFile,
                withMetadata
            });
            fileBuffer = await sharpFile.toBuffer({
                resolveWithObject: true
            });
            ({ ext, mime } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$file$2d$type$40$19$2e$3$2e$0$2f$node_modules$2f$file$2d$type$2f$core$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fileTypeFromBuffer"])(fileBuffer.data) // This is getting an incorrect gif height back.
            );
            fileData.width = fileBuffer.info.width;
            fileData.height = fileBuffer.info.height;
            fileData.filesize = fileBuffer.info.size;
            // Animated GIFs + WebP aggregate the height from every frame, so we need to use divide by number of pages
            if (metadata.pages) {
                fileData.height = fileBuffer.info.height / metadata.pages;
                fileData.filesize = fileBuffer.data.length;
            }
        } else {
            mime = file.mimetype;
            fileData.filesize = file.size;
            if (file.name.includes('.')) {
                ext = file.name.split('.').pop().split('?')[0];
            } else {
                ext = '';
            }
        }
        // Adjust SVG mime type. fromBuffer modifies it.
        if (mime === 'application/xml' && ext === 'svg') {
            mime = 'image/svg+xml';
        }
        fileData.mimeType = mime;
        const baseFilename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$sanitize$2d$filename$40$1$2e$6$2e$3$2f$node_modules$2f$sanitize$2d$filename$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(file.name.substring(0, file.name.lastIndexOf('.')) || file.name);
        fsSafeName = `${baseFilename}${ext ? `.${ext}` : ''}`;
        if (!overwriteExistingFiles) {
            fsSafeName = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$getSafeFilename$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getSafeFileName"])({
                collectionSlug: collectionConfig.slug,
                desiredFilename: fsSafeName,
                req,
                staticPath
            });
        }
        fileData.filename = fsSafeName;
        let fileForResize = file;
        if (cropData && sharp) {
            const { data: croppedImage, info } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$cropImage$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cropImage"])({
                cropData,
                dimensions,
                file,
                heightInPixels: uploadEdits.heightInPixels,
                req,
                sharp,
                widthInPixels: uploadEdits.widthInPixels,
                withMetadata
            });
            // Apply resize after cropping to ensure it conforms to resizeOptions
            if (resizeOptions) {
                const resizedAfterCrop = await sharp(croppedImage).resize({
                    fit: resizeOptions?.fit || 'cover',
                    height: resizeOptions?.height,
                    position: resizeOptions?.position || 'center',
                    width: resizeOptions?.width
                }).toBuffer({
                    resolveWithObject: true
                });
                filesToSave.push({
                    buffer: resizedAfterCrop.data,
                    path: `${staticPath}/${fsSafeName}`
                });
                fileForResize = {
                    ...fileForResize,
                    data: resizedAfterCrop.data,
                    size: resizedAfterCrop.info.size
                };
                fileData.width = resizedAfterCrop.info.width;
                fileData.height = resizedAfterCrop.info.height;
                if (fileIsAnimatedType) {
                    const metadata = await sharpFile.metadata();
                    fileData.height = metadata.pages ? resizedAfterCrop.info.height / metadata.pages : resizedAfterCrop.info.height;
                }
                fileData.filesize = resizedAfterCrop.info.size;
            } else {
                // If resizeOptions is not present, just save the cropped image
                filesToSave.push({
                    buffer: croppedImage,
                    path: `${staticPath}/${fsSafeName}`
                });
                fileForResize = {
                    ...file,
                    data: croppedImage,
                    size: info.size
                };
                fileData.width = info.width;
                fileData.height = info.height;
                if (fileIsAnimatedType) {
                    const metadata = await sharpFile.metadata();
                    fileData.height = metadata.pages ? info.height / metadata.pages : info.height;
                }
                fileData.filesize = info.size;
            }
            if (file.tempFilePath) {
                await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.writeFile(file.tempFilePath, croppedImage) // write fileBuffer to the temp path
                ;
            } else {
                req.file = fileForResize;
            }
        } else {
            filesToSave.push({
                buffer: fileBuffer?.data || file.data,
                path: `${staticPath}/${fsSafeName}`
            });
            // If using temp files and the image is being resized, write the file to the temp path
            if (fileBuffer?.data || file.data.length > 0) {
                if (file.tempFilePath) {
                    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].promises.writeFile(file.tempFilePath, fileBuffer?.data || file.data) // write fileBuffer to the temp path
                    ;
                } else {
                    // Assign the _possibly modified_ file to the request object
                    req.file = {
                        ...file,
                        data: fileBuffer?.data || file.data,
                        size: fileBuffer?.info.size
                    };
                }
            }
        }
        if (fileSupportsResize && (Array.isArray(imageSizes) || focalPointEnabled !== false)) {
            req.payloadUploadSizes = {};
            const { focalPoint, sizeData, sizesToSave } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$imageResizer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resizeAndTransformImageSizes"])({
                config: collectionConfig,
                dimensions: !cropData ? dimensions : {
                    ...dimensions,
                    height: fileData.height,
                    width: fileData.width
                },
                file: fileForResize,
                mimeType: fileData.mimeType,
                req,
                savedFilename: fsSafeName || file.name,
                sharp,
                staticPath,
                uploadEdits,
                withMetadata
            });
            fileData.sizes = sizeData;
            fileData.focalX = focalPoint?.x;
            fileData.focalY = focalPoint?.y;
            filesToSave.push(...sizesToSave);
        }
    } catch (err) {
        req.payload.logger.error(err);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileUploadError"](req.t);
    }
    newData = {
        ...newData,
        ...fileData
    };
    return {
        data: newData,
        files: filesToSave
    };
};
/**
 * Parse upload edits from req or incoming data
 */ function parseUploadEditsFromReqOrIncomingData(args) {
    const { data, isDuplicating, operation, originalDoc, req } = args;
    // Get intended focal point change from query string or incoming data
    const uploadEdits = req.query?.uploadEdits && typeof req.query.uploadEdits === 'object' ? req.query.uploadEdits : {};
    if (uploadEdits.focalPoint) {
        return uploadEdits;
    }
    const incomingData = data;
    const origDoc = originalDoc;
    if (origDoc && 'focalX' in origDoc && 'focalY' in origDoc) {
        // If no change in focal point, return undefined.
        // This prevents a refocal operation triggered from admin, because it always sends the focal point.
        if (incomingData.focalX === origDoc.focalX && incomingData.focalY === origDoc.focalY) {
            return undefined;
        }
        if (isDuplicating) {
            uploadEdits.focalPoint = {
                x: incomingData?.focalX || origDoc.focalX,
                y: incomingData?.focalY || origDoc.focalX
            };
        }
    }
    if (incomingData?.focalX && incomingData?.focalY) {
        uploadEdits.focalPoint = {
            x: incomingData.focalX,
            y: incomingData.focalY
        };
        return uploadEdits;
    }
    // If no focal point is set, default to center
    if (operation === 'create') {
        uploadEdits.focalPoint = {
            x: 50,
            y: 50
        };
    }
    return uploadEdits;
} //# sourceMappingURL=generateFileData.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/saveBufferToFile.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__ = __turbopack_import__("[externals]/stream [external] (stream, cjs)");
;
;
/**
 * Save buffer data to a file.
 * @param {Buffer} buffer - buffer to save to a file.
 * @param {string} filePath - path to a file.
 */ const saveBufferToFile = async (buffer, filePath)=>{
    // Setup readable stream from buffer.
    let streamData = buffer;
    const readStream = new __TURBOPACK__imported__module__$5b$externals$5d2f$stream__$5b$external$5d$__$28$stream$2c$__cjs$29$__["Readable"]();
    readStream._read = ()=>{
        readStream.push(streamData);
        streamData = null;
    };
    // Setup file system writable stream.
    return __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, buffer);
};
const __TURBOPACK__default__export__ = saveBufferToFile;
 //# sourceMappingURL=saveBufferToFile.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/uploadFiles.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "uploadFiles": (()=>uploadFiles)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$saveBufferToFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/saveBufferToFile.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/FileUploadError.js [app-route] (ecmascript)");
;
;
const uploadFiles = async (payload, files, req)=>{
    try {
        await Promise.all(files.map(async ({ buffer, path })=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$saveBufferToFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(buffer, path);
        }));
    } catch (err) {
        payload.logger.error(err);
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$FileUploadError$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["FileUploadError"](req.t);
    }
}; //# sourceMappingURL=uploadFiles.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/unlinkTempFiles.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "unlinkTempFiles": (()=>unlinkTempFiles)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__ = __turbopack_import__("[externals]/util [external] (util, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mapAsync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/mapAsync.js [app-route] (ecmascript)");
;
;
;
const unlinkFile = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$util__$5b$external$5d$__$28$util$2c$__cjs$29$__["promisify"])(__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlink);
const unlinkTempFiles = async ({ collectionConfig, config, req })=>{
    if (config.upload?.useTempFiles && collectionConfig.upload) {
        const { file } = req;
        const fileArray = [
            {
                file
            }
        ];
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$mapAsync$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mapAsync"])(fileArray, async ({ file })=>{
            // Still need this check because this will not be populated if using local API
            if (file?.tempFilePath) {
                await unlinkFile(file.tempFilePath);
            }
        });
    }
}; //# sourceMappingURL=unlinkTempFiles.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/deleteAssociatedFiles.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "deleteAssociatedFiles": (()=>deleteAssociatedFiles)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fileExists.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ErrorDeletingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/ErrorDeletingFile.js [app-route] (ecmascript)");
;
;
;
const deleteAssociatedFiles = async ({ collectionConfig, doc, files = [], overrideDelete, req })=>{
    if (!collectionConfig.upload) {
        return;
    }
    if (overrideDelete || files.length > 0) {
        const { staticDir: staticPath } = collectionConfig.upload;
        const fileToDelete = `${staticPath}/${doc.filename}`;
        try {
            if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(fileToDelete)) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(fileToDelete);
            }
        } catch (err) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ErrorDeletingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ErrorDeletingFile"](req.t);
        }
        if (doc.sizes) {
            const sizes = Object.values(doc.sizes);
            // Since forEach will not wait until unlink is finished it could
            // happen that two operations will try to delete the same file.
            // To avoid this it is recommended to use "sync" instead
            for (const size of sizes){
                const sizeToDelete = `${staticPath}/${size.filename}`;
                try {
                    if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$fileExists$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])(sizeToDelete)) {
                        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].unlinkSync(sizeToDelete);
                    }
                } catch (err) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$ErrorDeletingFile$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ErrorDeletingFile"](req.t);
                }
            }
        }
    }
}; //# sourceMappingURL=deleteAssociatedFiles.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/checkFileAccess.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "checkFileAccess": (()=>checkFileAccess)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/errors/Forbidden.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/auth/executeAccess.js [app-route] (ecmascript)");
;
;
const checkFileAccess = async ({ collection, filename, req })=>{
    if (filename.includes('../') || filename.includes('..\\')) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
    }
    const { config } = collection;
    const accessResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$auth$2f$executeAccess$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
        isReadingStaticFile: true,
        req
    }, config.access.read);
    if (typeof accessResult === 'object') {
        const queryToBuild = {
            and: [
                {
                    or: [
                        {
                            filename: {
                                equals: filename
                            }
                        }
                    ]
                },
                accessResult
            ]
        };
        if (config.upload.imageSizes) {
            config.upload.imageSizes.forEach(({ name })=>{
                queryToBuild.and[0].or.push({
                    [`sizes.${name}.filename`]: {
                        equals: filename
                    }
                });
            });
        }
        const doc = await req.payload.db.findOne({
            collection: config.slug,
            req,
            where: queryToBuild
        });
        if (!doc) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$errors$2f$Forbidden$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Forbidden"](req.t);
        }
        return doc;
    }
}; //# sourceMappingURL=checkFileAccess.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/fetchAPI-stream-file/index.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "iteratorToStream": (()=>iteratorToStream),
    "nodeStreamToIterator": (()=>nodeStreamToIterator),
    "streamFile": (()=>streamFile)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_import__("[externals]/fs [external] (fs, cjs)");
;
function iteratorToStream(iterator) {
    return new ReadableStream({
        async pull (controller) {
            const { done, value } = await iterator.next();
            if (done) {
                controller.close();
            } else {
                controller.enqueue(value);
            }
        }
    });
}
async function* nodeStreamToIterator(stream) {
    for await (const chunk of stream){
        yield new Uint8Array(chunk);
    }
}
function streamFile(path) {
    const nodeStream = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].createReadStream(path);
    const data = iteratorToStream(nodeStreamToIterator(nodeStream));
    return data;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getFileTypeFallback.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getFileTypeFallback": (()=>getFileTypeFallback)
});
const extensionMap = {
    css: 'text/css',
    csv: 'text/csv',
    htm: 'text/html',
    html: 'text/html',
    js: 'application/javascript',
    json: 'application/json',
    md: 'text/markdown',
    svg: 'image/svg+xml',
    xml: 'application/xml',
    yml: 'application/x-yaml'
};
const getFileTypeFallback = (path)=>{
    const ext = path.split('.').pop() || 'txt';
    return {
        ext,
        mime: extensionMap[ext] || 'text/plain'
    };
}; //# sourceMappingURL=getFileTypeFallback.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/mimeTypeValidator.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "mimeTypeValidator": (()=>mimeTypeValidator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateMimeType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/utilities/validateMimeType.js [app-route] (ecmascript)");
;
const mimeTypeValidator = (mimeTypes)=>(val, { siblingData })=>{
        if (!siblingData.filename) {
            return true;
        }
        if (!val) {
            return 'Invalid file type';
        }
        const isValidMimeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$utilities$2f$validateMimeType$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateMimeType"])(val, mimeTypes);
        return isValidMimeType ? true : `Invalid file type: '${val}'`;
    }; //# sourceMappingURL=mimeTypeValidator.js.map
}}),
"[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/getBaseFields.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getBaseUploadFields": (()=>getBaseUploadFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$mimeTypeValidator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/payload@3.23.0_graphql@16.10.0_monaco-editor@0.52.2_react-dom@19.0.0_react@19.0.0__react@19.0.0_typescript@5.7.2/node_modules/payload/dist/uploads/mimeTypeValidator.js [app-route] (ecmascript)");
;
const generateURL = ({ collectionSlug, config, filename })=>{
    if (filename) {
        return `${config.serverURL || ''}${config.routes.api || ''}/${collectionSlug}/file/${encodeURIComponent(filename)}`;
    }
    return undefined;
};
const getBaseUploadFields = ({ collection, config })=>{
    const uploadOptions = typeof collection.upload === 'object' ? collection.upload : {};
    const mimeType = {
        name: 'mimeType',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: 'MIME Type'
    };
    const thumbnailURL = {
        name: 'thumbnailURL',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        },
        hooks: {
            afterRead: [
                ({ originalDoc })=>{
                    const adminThumbnail = typeof collection.upload !== 'boolean' ? collection.upload?.adminThumbnail : undefined;
                    if (typeof adminThumbnail === 'function') {
                        return adminThumbnail({
                            doc: originalDoc
                        });
                    }
                    if (typeof adminThumbnail === 'string' && 'sizes' in originalDoc && originalDoc.sizes?.[adminThumbnail]?.filename) {
                        return generateURL({
                            collectionSlug: collection.slug,
                            config,
                            filename: originalDoc.sizes?.[adminThumbnail].filename
                        });
                    }
                    return null;
                }
            ]
        },
        label: 'Thumbnail URL'
    };
    const width = {
        name: 'width',
        type: 'number',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: ({ t })=>t('upload:width')
    };
    const height = {
        name: 'height',
        type: 'number',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: ({ t })=>t('upload:height')
    };
    const filesize = {
        name: 'filesize',
        type: 'number',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: ({ t })=>t('upload:fileSize')
    };
    const filename = {
        name: 'filename',
        type: 'text',
        admin: {
            disableBulkEdit: true,
            hidden: true,
            readOnly: true
        },
        index: true,
        label: ({ t })=>t('upload:fileName')
    };
    // Only set unique: true if the collection does not have a compound index
    if (collection.upload === true || typeof collection.upload === 'object' && !collection.upload.filenameCompoundIndex) {
        filename.unique = true;
    }
    const url = {
        name: 'url',
        type: 'text',
        admin: {
            hidden: true,
            readOnly: true
        },
        label: 'URL'
    };
    let uploadFields = [
        {
            ...url,
            hooks: {
                afterRead: [
                    ({ data, value })=>{
                        if (value && !data.filename) {
                            return value;
                        }
                        return generateURL({
                            collectionSlug: collection.slug,
                            config,
                            filename: data?.filename
                        });
                    }
                ]
            }
        },
        thumbnailURL,
        filename,
        mimeType,
        filesize,
        width,
        height
    ];
    // Add focal point fields if not disabled
    if (uploadOptions.focalPoint !== false || uploadOptions.imageSizes || uploadOptions.resizeOptions) {
        uploadFields = uploadFields.concat([
            'focalX',
            'focalY'
        ].map((name)=>{
            return {
                name,
                type: 'number',
                admin: {
                    disableListColumn: true,
                    disableListFilter: true,
                    hidden: true
                }
            };
        }));
    }
    if (uploadOptions.mimeTypes) {
        mimeType.validate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$payload$40$3$2e$23$2e$0_graphql$40$16$2e$10$2e$0_monaco$2d$editor$40$0$2e$52$2e$2_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_typescript$40$5$2e$7$2e$2$2f$node_modules$2f$payload$2f$dist$2f$uploads$2f$mimeTypeValidator$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mimeTypeValidator"])(uploadOptions.mimeTypes);
    }
    if (uploadOptions.imageSizes) {
        uploadFields = uploadFields.concat([
            {
                name: 'sizes',
                type: 'group',
                admin: {
                    hidden: true
                },
                fields: uploadOptions.imageSizes.map((size)=>({
                        name: size.name,
                        type: 'group',
                        admin: {
                            hidden: true
                        },
                        fields: [
                            {
                                ...url,
                                hooks: {
                                    afterRead: [
                                        ({ data, value })=>{
                                            if (value && size.height && size.width && !data.filename) {
                                                return value;
                                            }
                                            const sizeFilename = data?.sizes?.[size.name]?.filename;
                                            if (sizeFilename) {
                                                return `${config.serverURL}${config.routes.api}/${collection.slug}/file/${sizeFilename}`;
                                            }
                                            return null;
                                        }
                                    ]
                                }
                            },
                            width,
                            height,
                            mimeType,
                            filesize,
                            {
                                ...filename,
                                unique: false
                            }
                        ],
                        label: size.name
                    })),
                label: ({ t })=>t('upload:sizes')
            }
        ]);
    }
    return uploadFields;
}; //# sourceMappingURL=getBaseFields.js.map
}}),

};

//# sourceMappingURL=e2cf0_payload_dist_uploads_d039ab._.js.map