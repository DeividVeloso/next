webpackHotUpdate(3,{

/***/ "./node_modules/babel-runtime/core-js/json/stringify.js":
false,

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
false,

/***/ "./node_modules/define-properties/index.js":
false,

/***/ "./node_modules/foreach/index.js":
false,

/***/ "./node_modules/function-bind/implementation.js":
false,

/***/ "./node_modules/function-bind/index.js":
false,

/***/ "./node_modules/has-symbols/shams.js":
false,

/***/ "./node_modules/has/src/index.js":
false,

/***/ "./node_modules/next/dist/lib/link.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/object-keys/index.js":
false,

/***/ "./node_modules/object-keys/isArguments.js":
false,

/***/ "./node_modules/object.assign/implementation.js":
false,

/***/ "./node_modules/object.assign/index.js":
false,

/***/ "./node_modules/object.assign/polyfill.js":
false,

/***/ "./node_modules/object.assign/shim.js":
false,

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
false,

/***/ "./node_modules/prop-types-exact/build/index.js":
false,

/***/ "./node_modules/webpack/buildin/harmony-module.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  

/***/ })

})
//# sourceMappingURL=3.15996f30f0d7e30d3114.hot-update.js.map