//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function(r,e){var t={};function n(r){return Promise.resolve(o(r))}function o(e){if(t[e])return t[e].exports;var i={id:e,exports:{},_m:function(){},o:function(a,b,c){a[b]=c()}};t[e]=i;r[e](i,i.exports,o,n);return i.exports}o(e)})({"../../_internal/runtime/index.js.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
    console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);
}
,},"../../_internal/runtime/index.js.farm-runtime");(function(_){for(var r in _){_[r].__farm_resource_pot__='index_4924.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"comp.tsx":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_dep = farmRequire("dep.ts");
    const LazyComp = _f_dep.default.lazy(()=>Promise.resolve({
            default: ()=>_f_dep.default.createElement("div", {
                    __source: {
                        fileName: "comp.tsx",
                        lineNumber: 3,
                        columnNumber: 73
                    },
                    __self: this
                }, "Lazy")
        }));
    _c = LazyComp;
    function Description() {
        console.trace("In Description, the sourcemap should be correct");
        return _f_dep.default.createElement(_f_dep.Suspense, {
            fallback: _f_dep.default.createElement("div", {
                __source: {
                    fileName: "comp.tsx",
                    lineNumber: 8,
                    columnNumber: 30
                }
            }, "Loading..."),
            __source: {
                fileName: "comp.tsx",
                lineNumber: 8,
                columnNumber: 10
            },
            __self: this
        }, _f_dep.default.createElement(LazyComp, {
            __source: {
                fileName: "comp.tsx",
                lineNumber: 8,
                columnNumber: 53
            },
            __self: this
        }));
    }
    module.o(exports, "Description", function() {
        return Description;
    });
    _c1 = Description;
    var _c, _c1;
    $RefreshReg$(_c, "LazyComp");
    $RefreshReg$(_c1, "Description");
    module._m(exports);
}
,
"dep.ts":function  (module, exports, farmRequire, farmDynamicRequire) {
    const Suspense = function() {
        console.log("Suspense");
    };
    module.o(exports, "Suspense", function() {
        return Suspense;
    });
    exports.default = {
        createElement (comp, ...args) {
            console.log(comp(), args);
        },
        lazy: (promise)=>{
            console.log("lazy", promise);
        }
    };
    module._m(exports);
}
,
"entry.ts":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_comp = farmRequire("comp.tsx");
    console.log(_f_comp.Description());
    module._m(exports);
}
,});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("entry.ts");