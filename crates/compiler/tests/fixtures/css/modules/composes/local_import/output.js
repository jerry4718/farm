//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function(r,e){var t={};function n(r){return Promise.resolve(o(r))}function o(e){if(t[e])return t[e].exports;var i={id:e,exports:{},_m:function(){},o:function(a,b,c){a[b]=c()}};t[e]=i;r[e](i,i.exports,o,n);return i.exports}o(e)})({"0b3bded0":function  (module, exports, farmRequire, farmDynamicRequire) {
    console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);
}
,},"0b3bded0");(function(_){for(var r in _){_[r].__farm_resource_pot__='index_2544.js';(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(r,_[r])}})({"95fe6ac5":function  (module, exports, farmRequire, farmDynamicRequire) {
    "";
    exports.default = {
        "action": `farm-action`,
        "base": `farm-base farm-action`
    };
    module._m(exports);
}
,
"b5d64806":function  (module, exports, farmRequire, farmDynamicRequire) {
    var _f_index = farmRequire("95fe6ac5");
    console.log(_f_index.default.action);
    module._m(exports);
}
,});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");

//index_2528.css:
 .farm-base {
  font-size: 24px;
}
.farm-action {
  color: red;
}