//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function(r,e){var t={};function n(r){return Promise.resolve(o(r))}function o(e){if(t[e])return t[e].exports;var i={id:e,exports:{},_m:function(){}};t[e]=i;r[e](i,i.exports,o,n);return i.exports}o(e)})({"../../_internal/runtime/index.js.farm-runtime":function  (module, exports, farmRequire, farmDynamicRequire) {
    console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);
}
,},"../../_internal/runtime/index.js.farm-runtime");(function(_){for(var r in _){_[r].__farm_resource_pot__='index_ddf1.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"dep.ts":function  (module, exports, farmRequire, farmDynamicRequire) {
    if (module.meta.hot) {
        module.meta.hot.accept(()=>{
            module.meta.hot.invalidate("parent module should accept this");
        });
    }
    const a = "1";
    exports.a = a;
    function invalidate() {
        return `invalidate data`;
    }
    exports.invalidate = invalidate;
    module._m(exports);
}
,
"index.ts":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_dep = farmRequire("dep.ts");
    console.log(_f_dep.a);
    const id = "InvalidateParent";
    function InvalidateParent() {
        return {
            render: ()=>{
                const renderData = _f_dep.invalidate();
                const div = document.createElement("div", {});
                div.id = id;
                div.innerText = renderData;
                div.className = "box";
                return div;
            }
        };
    }
    exports.InvalidateParent = InvalidateParent;
    if (module.meta.hot) {
        module.meta.hot.accept();
        const div = document.getElementById(id);
        if (div) {
            const comp = InvalidateParent().render();
            console.log(div, comp);
            div.replaceWith(comp);
        }
    }
    module._m(exports);
}
,});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("index.ts");var InvalidateParent=entry.InvalidateParent;export { InvalidateParent };