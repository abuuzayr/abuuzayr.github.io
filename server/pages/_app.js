(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 7998:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(3426);
;// CONCATENATED MODULE: ./styles/theme.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const fonts = _objectSpread(_objectSpread({}, react_.theme.fonts), {}, {
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
});

const overrides = _objectSpread(_objectSpread({}, react_.theme), {}, {
  config,
  fonts,
  colors: _objectSpread(_objectSpread({}, react_.theme.colors), {}, {
    buff: "#F3BE00"
  })
});

const customTheme = (0,react_.extendTheme)(overrides);
/* harmony default export */ var theme = (customTheme);
;// CONCATENATED MODULE: external "@emotion/react"
var external_emotion_react_namespaceObject = require("@emotion/react");;
;// CONCATENATED MODULE: ./pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const GlobalStyle = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_emotion_react_namespaceObject.Global, {
      styles: external_emotion_react_namespaceObject.css`
          @-moz-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              -moz-transform: translateY(0);
              transform: translateY(0);
            }
            40% {
              -moz-transform: translateY(-30px);
              transform: translateY(-30px);
            }
            60% {
              -moz-transform: translateY(-15px);
              transform: translateY(-15px);
            }
          }
          @-webkit-keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }
            40% {
              -webkit-transform: translateY(-30px);
              transform: translateY(-30px);
            }
            60% {
              -webkit-transform: translateY(-15px);
              transform: translateY(-15px);
            }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              -moz-transform: translateY(0);
              -ms-transform: translateY(0);
              -webkit-transform: translateY(0);
              transform: translateY(0);
            }
            40% {
              -moz-transform: translateY(-30px);
              -ms-transform: translateY(-30px);
              -webkit-transform: translateY(-30px);
              transform: translateY(-30px);
            }
            60% {
              -moz-transform: translateY(-15px);
              -ms-transform: translateY(-15px);
              -webkit-transform: translateY(-15px);
              transform: translateY(-15px);
            }
          }
          .bounce {
            -moz-animation: bounce 2s infinite;
            -webkit-animation: bounce 2s infinite;
            animation: bounce 2s infinite;
          }

        `
    }), children]
  });
};

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
    resetCSS: true,
    theme: theme,
    children: /*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 3426:
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(7998));
module.exports = __webpack_exports__;

})();