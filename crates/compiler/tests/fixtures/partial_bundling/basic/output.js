//__farm_runtime.06a03283.mjs:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function(r,e){var t={};function n(r){return Promise.resolve(o(r))}function o(e){if(t[e])return t[e].exports;var i={id:e,exports:{},_m:function(){}};t[e]=i;r[e](i,i.exports,o,n);return i.exports}o(e)})({"d2214aaa":function  (module, exports, farmRequire, farmDynamicRequire) {
    console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);
}
,},"d2214aaa");

//debounce_6f74.js:
 (function(_){for(var r in _){_[r].__farm_resource_pot__='debounce_6f74.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"01609b59":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_utils = farmRequire("a5831d05");
    function debounce(fn) {
        _f_utils.debug("debounce");
        return fn;
    }
    exports.default = debounce;
    module._m(exports);
}
,});

//index.js:
 import "./__farm_runtime.06a03283.mjs";import "./index_2faa.js";import "./index_64d2.js";(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setExternalModules({"module": ((globalThis||window||{})['module']||{}).default && !((globalThis||window||{})['module']||{}).__esModule ? {...((globalThis||window||{})['module']||{}),__esModule:true} : ({...(globalThis||window||{})['module']||{}})});(function(_){for(var r in _){_[r].__farm_resource_pot__='index_dcdc.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"b5d64806":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_module = farmRequire("module");
    var _f_merge = farmRequire("726cd210");
    function defineConfig(config) {
        _f_merge.default(config, {
            compilation: {
                input: {
                    main: "./main.tsx"
                },
                external: _f_module.default.builtinModules
            }
        });
        return config;
    }
    farmDynamicRequire("01609b59").then((debounce)=>{
        console.log(debounce);
    });
    exports.default = defineConfig({});
    module._m(exports);
}
,});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources(['index_2faa.js','index_64d2.js']);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({ '01609b59': [{ path: 'index_2faa.js', type: 'script' },{ path: 'debounce_6f74.js', type: 'script' },] });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");export default entry.default || entry;

//index_2faa.js:
 (function(_){for(var r in _){_[r].__farm_resource_pot__='index_2faa.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"a5831d05":function  (module, exports, farmRequire, farmDynamicRequire) {
    function debug(msg) {
        console.log(msg);
    }
    exports.debug = debug;
    module._m(exports);
}
,});

//index_64d2.js:
 (function(_){for(var r in _){_[r].__farm_resource_pot__='index_64d2.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"726cd210":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_utils = farmRequire("a5831d05");
    function merge(a, b) {
        _f_utils.debug("merge");
        return a + b;
    }
    exports.default = merge;
    module._m(exports);
}
,});