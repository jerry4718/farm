//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function(r,e){var t={};function n(r){return Promise.resolve(o(r))}function o(e){if(t[e])return t[e].exports;var i={id:e,exports:{},_m:function(){}};t[e]=i;r[e](i,i.exports,o,n);return i.exports}o(e)})({"ec853507":function  (module, exports, farmRequire, farmDynamicRequire) {
    console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);
}
,},"ec853507");(function(_){for(var r in _){_[r].__farm_resource_pot__='index_f1d9.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"4312d062":function  (module, exports, farmRequire, farmDynamicRequire) {
    function $e() {
        return {
            seed: (e)=>{
                return e;
            }
        };
    }
    var F = class {
        constructor(e = {}){
            let { randomizer: r = $e() } = e;
            this._randomizer = r;
        }
        get defaultRefDate() {
            return this._defaultRefDate;
        }
        setDefaultRefDate(e = ()=>new Date) {
            typeof e == "function" ? this._defaultRefDate = e : this._defaultRefDate = ()=>new Date(e);
        }
        seed(e = Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER)) {
            return this._randomizer.seed(e), e;
        }
    }, Yt = new F;
    exports.default = F;
    module._m(exports);
}
,
"81077a1f":function  (module, exports, farmRequire, farmDynamicRequire) {
    const defaultDocument = globalThis.isClient ? window.document : undefined;
    const defaultWindow = globalThis.isClient ? window : undefined;
    const F = {};
    function useFullscreen(target, options = {}) {
        const { document = defaultDocument, autoExit = false } = options;
        return document;
    }
    const { document: { document1 } = defaultWindow.document } = F;
    exports.useFullscreen = useFullscreen;
    exports.document1 = document1;
    module._m(exports);
}
,
"b5d64806":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_dep = farmRequire("4312d062");
    var _f_object_assign = farmRequire("81077a1f");
    console.log(_f_dep.default, _f_object_assign.useFullscreen, _f_object_assign.document1);
    module._m(exports);
}
,});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");