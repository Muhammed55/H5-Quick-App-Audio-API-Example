/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "PGVb");
/******/ })
/************************************************************************/
/******/ ({

/***/ "PGVb":
/*!******************************************************************************************************!*\
  !*** c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!./hello.ux */ "iJfV")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux!../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux!./hello.ux */ "wV4S")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!../../../../../../../../Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!./hello.ux */ "rXU7")

$app_define$('@app-component/hello', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/hello',{ packagerName:'fa-toolkit', packagerVersion: '3.0.2-Stable.300'})

/***/ }),

/***/ "iJfV":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-template-loader.js?depends=!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=templates!c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={
  "type": "div",
  "attr": {},
  "classList": [
    "doc-page"
  ],
  "children": [
    {
      "type": "web",
      "attr": {
        "src": function () {return (this.loadUrl)},
        "trustedurl": function () {return (this.list)},
        "id": "web",
        "supportzoom": function () {return (this.supportZoom)},
        "wideviewport": function () {return (this.wideViewport)},
        "overviewmodeinload": function () {return (this.overViewModeLoad)},
        "useragent": function () {return (this.userAgent)},
        "allowthirdpartycookies": function () {return (this.allowThirdPartyCookies)},
        "multiwindow": function () {return (this.multiwindow)},
        "jumppolicy": function () {return (this.jumppolicy)}
      },
      "classList": [
        "web-page"
      ],
      "events": {
        "pagestart": "onPageStart",
        "pagefinish": "onPageFinish",
        "message": "onMessage",
        "titlereceive": "onTitleReceive",
        "error": "onError"
      },
      "id": "web"
    }
  ]
}

/***/ }),

/***/ "rXU7":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-script-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-access-loader.js!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/babel-loader/lib?presets[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/preset-env&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-transform-modules-commonjs&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/jsx-loader.js&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-class-properties&plugins[]=c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/@babel/plugin-proposal-object-rest-spread&comments=false!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=scripts!c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.audio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['websrc'],
  data: {
    title: "",
    loadUrl: "http://192.168.1.152:8081/audioPlayingWebsite/index.html",
    allowThirdPartyCookies: true,
    supportZoom: true,
    wideViewport: true,
    overViewModeLoad: true,
    userAgent: "default",
    list: ["new RegExp('https?.*')"],
    multiwindow: false,
    jumppolicy: 'default'
  },
  onInit: function onInit() {
    var _this = this;

    console.info('onInit: ');

    _system2["default"].onplay = function () {
      console.log("audio onplay");

      _this.$element('web').postMessage({
        message: "audio_play"
      });
    };

    _system2["default"].onpause = function () {
      console.log("audio onpause");

      _this.$element('web').postMessage({
        message: "audio_pause"
      });
    };
  },
  onPageStart: function onPageStart(e) {
    console.info('pagestart: ' + e.url);
  },
  onPageFinish: function onPageFinish(e) {
    console.info('pagefinish: ' + e.url, e.canBack, e.canForward);
  },
  onTitleReceive: function onTitleReceive(e) {
    this.title = e.title;
  },
  onError: function onError(e) {
    console.info('pageError : ' + e.errorMsg);
  },
  onMessage: function onMessage(e) {
    console.info('onmessage e = ' + e.message + ", url = " + e.url);
    var jsonMessage = JSON.parse(e.message);

    if (jsonMessage["action"] === "play") {
      _system2["default"].src = jsonMessage["audioUrl"];

      _system2["default"].play();
    } else if (jsonMessage["action"] === "pause") {
      _system2["default"].pause();
    }
  },
  onShow: function onShow() {
    console.info(" onshow");
  },
  onHide: function onHide() {
    console.info("  onHide");
  },
  onBackPress: function onBackPress() {
    console.log('onBackPress');
    this.$element('web').canBack({
      callback: function (e) {
        if (e) {
          console.log('web back');
          this.$element('web').back();
        } else {
          console.log('router back');

          _system["default"].back();
        }
      }.bind(this)
    });
    return true;
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (
    moduleOwn.data &&
    accessors.some(function (acc) {
        return moduleOwn[acc];
    })
) {
    throw new Error(
        'For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.'
    );
} else if (!moduleOwn.data) {
    moduleOwn.data = {};
    moduleOwn._descriptor = {};
    accessors.forEach(function (acc) {
        var accType = typeof moduleOwn[acc];
        if (accType === 'object') {
            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
            for (var name in moduleOwn[acc]) {
                moduleOwn._descriptor[name] = { access: acc };
            }
        } else if (accType === 'function') {
            console.warn(
                'For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.'
            );
        }
    });
}
}

/***/ }),

/***/ "wV4S":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-style-loader.js?index=0&type=styles&resourcePath=c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux!c:/Program Files/Huawei QuickApp IDE/resources/app/extensions/deveco-debug/node_modules/fa-toolkit/lib/fa-compiler/fa-fragment-loader.js?index=0&type=styles&resourcePath=c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux!c:/Users/m00537930/.quickapp-ide/workspace/_/com.mo55.sample.audio.quickapp/src/Hello/hello.ux ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={
  ".doc-page": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%",
    "position": "fixed"
  },
  ".web-page": {
    "width": "100%",
    "height": "100%"
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEhlbGxvXFxoZWxsby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvbTAwNTM3OTMwLy5xdWlja2FwcC1pZGUvd29ya3NwYWNlL18vY29tLm1vNTUuc2FtcGxlLmF1ZGlvLnF1aWNrYXBwL3NyYy9IZWxsby9oZWxsby51eD9iYjMyIiwid2VicGFjazovLy9jOi9Vc2Vycy9tMDA1Mzc5MzAvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvXy9jb20ubW81NS5zYW1wbGUuYXVkaW8ucXVpY2thcHAvc3JjL0hlbGxvL2hlbGxvLnV4P2M5NDkiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL20wMDUzNzkzMC8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9fL2NvbS5tbzU1LnNhbXBsZS5hdWRpby5xdWlja2FwcC9zcmMvSGVsbG8vaGVsbG8udXgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL20wMDUzNzkzMC8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9fL2NvbS5tbzU1LnNhbXBsZS5hdWRpby5xdWlja2FwcC9zcmMvSGVsbG8vaGVsbG8udXg/YjM0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJQR1ZiXCIpO1xuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXRlbXBsYXRlLWxvYWRlci5qcz9kZXBlbmRzPSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9oZWxsby51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxtMDA1Mzc5MzBcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcX1xcXFxjb20ubW81NS5zYW1wbGUuYXVkaW8ucXVpY2thcHBcXFxcc3JjXFxcXEhlbGxvXFxcXGhlbGxvLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIFF1aWNrQXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1jb21waWxlci9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcbTAwNTM3OTMwXFxcXC5xdWlja2FwcC1pZGVcXFxcd29ya3NwYWNlXFxcXF9cXFxcY29tLm1vNTUuc2FtcGxlLmF1ZGlvLnF1aWNrYXBwXFxcXHNyY1xcXFxIZWxsb1xcXFxoZWxsby51eCEuL2hlbGxvLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWNvbXBpbGVyL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgUXVpY2tBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLWNvbXBpbGVyXFxcXGpzeC1sb2FkZXIuanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLW9iamVjdC1yZXN0LXNwcmVhZCZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBRdWlja0FwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtY29tcGlsZXIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaGVsbG8udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9oZWxsbycsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaGVsbG8nLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMy4wLjItU3RhYmxlLjMwMCd9KSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiZG9jLXBhZ2VcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ3ZWJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMubG9hZFVybCl9LFxuICAgICAgICBcInRydXN0ZWR1cmxcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5saXN0KX0sXG4gICAgICAgIFwiaWRcIjogXCJ3ZWJcIixcbiAgICAgICAgXCJzdXBwb3J0em9vbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnN1cHBvcnRab29tKX0sXG4gICAgICAgIFwid2lkZXZpZXdwb3J0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMud2lkZVZpZXdwb3J0KX0sXG4gICAgICAgIFwib3ZlcnZpZXdtb2RlaW5sb2FkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMub3ZlclZpZXdNb2RlTG9hZCl9LFxuICAgICAgICBcInVzZXJhZ2VudFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLnVzZXJBZ2VudCl9LFxuICAgICAgICBcImFsbG93dGhpcmRwYXJ0eWNvb2tpZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5hbGxvd1RoaXJkUGFydHlDb29raWVzKX0sXG4gICAgICAgIFwibXVsdGl3aW5kb3dcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5tdWx0aXdpbmRvdyl9LFxuICAgICAgICBcImp1bXBwb2xpY3lcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5qdW1wcG9saWN5KX1cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwid2ViLXBhZ2VcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJwYWdlc3RhcnRcIjogXCJvblBhZ2VTdGFydFwiLFxuICAgICAgICBcInBhZ2VmaW5pc2hcIjogXCJvblBhZ2VGaW5pc2hcIixcbiAgICAgICAgXCJtZXNzYWdlXCI6IFwib25NZXNzYWdlXCIsXG4gICAgICAgIFwidGl0bGVyZWNlaXZlXCI6IFwib25UaXRsZVJlY2VpdmVcIixcbiAgICAgICAgXCJlcnJvclwiOiBcIm9uRXJyb3JcIlxuICAgICAgfSxcbiAgICAgIFwiaWRcIjogXCJ3ZWJcIlxuICAgIH1cbiAgXVxufSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJkb2MtcGFnZVwiPlxyXG4gICAgICAgIDx3ZWIgY2xhc3M9XCJ3ZWItcGFnZVwiIHNyYz1cInt7bG9hZFVybH19XCIgdHJ1c3RlZHVybD1cInt7bGlzdH19XCIgb25wYWdlc3RhcnQ9XCJvblBhZ2VTdGFydFwiIG9ucGFnZWZpbmlzaD1cIm9uUGFnZUZpbmlzaFwiXHJcbiAgICAgICAgICAgIG9ubWVzc2FnZT1cIm9uTWVzc2FnZVwiIG9udGl0bGVyZWNlaXZlPVwib25UaXRsZVJlY2VpdmVcIiBvbmVycm9yPVwib25FcnJvclwiIGlkPVwid2ViXCIgc3VwcG9ydHpvb209XCJ7e3N1cHBvcnRab29tfX1cIlxyXG4gICAgICAgICAgICB3aWRldmlld3BvcnQ9XCJ7e3dpZGVWaWV3cG9ydH19XCIgb3ZlcnZpZXdtb2RlaW5sb2FkPVwie3tvdmVyVmlld01vZGVMb2FkfX1cIiB1c2VyYWdlbnQ9XCJ7e3VzZXJBZ2VudH19XCJcclxuICAgICAgICAgICAgYWxsb3d0aGlyZHBhcnR5Y29va2llcz1cInt7YWxsb3dUaGlyZFBhcnR5Q29va2llc319XCIgbXVsdGl3aW5kb3c9XCJ7e211bHRpd2luZG93fX1cIiBqdW1wcG9saWN5PVwie3tqdW1wcG9saWN5fX1cIj5cclxuICAgICAgICA8L3dlYj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmRvYy1wYWdlIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuXHJcbiAgICAud2ViLXBhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCByb3V0ZXIgZnJvbSBcIkBzeXN0ZW0ucm91dGVyXCI7XHJcbiAgICBpbXBvcnQgYXVkaW8gZnJvbSAnQHN5c3RlbS5hdWRpbyc7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIHByb3BzOiBbJ3dlYnNyYyddLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLy8gRm9yIG1yb2UgaW5mb3JtYXRpb24gYWJvdXQgPHdlYj4sIHBsZWFzZSBjaGVjayA6XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmh1YXdlaS5jb20vY29uc3VtZXIvZW4vZG9jL2RldmVsb3BtZW50L3F1aWNrQXBwLVJlZmVyZW5jZXMvcXVpY2thcHAtY29tcG9uZW50LXdlYlxyXG5cclxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgICAgICAgIC8vIFRPRE8gUmVwbGFjZSB0aGUgbGluayB0byB0aGUgSDUgYXBwXHJcbiAgICAgICAgICAgIGxvYWRVcmw6IFwiaHR0cDovLzE5Mi4xNjguMS4xNTI6ODA4MS9hdWRpb1BsYXlpbmdXZWJzaXRlL2luZGV4Lmh0bWxcIixcclxuICAgICAgICAgICAgLy8gQXR0cmlidXRlIGFsbG93dGhpcmRwYXJ0eWNvb2tpZXMsIGluZGljYXRlcyB3aGV0aGVyIGNvb2tpZXMgY2FuIGJlIGRlbGl2ZXJlZCBpbiBjcm9zcy1kb21haW4gbW9kZS5cclxuICAgICAgICAgICAgLy8gSWYgeW91IG5lZWQgbG9naW4gR29vZ2xlIEFjY291bnQgb3IgT3RoZXIgQWNjb3VudCwgUGxlYXNlIHNldCBUUlVFLlxyXG4gICAgICAgICAgICBhbGxvd1RoaXJkUGFydHlDb29raWVzOiB0cnVlLFxyXG4gICAgICAgICAgICAvL0F0dHJpYnV0ZSBzdXBwb3J0em9vbSwgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIEg1IHBhZ2UgY2FuIGJlIHpvb21lZCB3aXRoIGdlc3R1cmVzLlxyXG4gICAgICAgICAgICBzdXBwb3J0Wm9vbTogdHJ1ZSxcclxuICAgICAgICAgICAgd2lkZVZpZXdwb3J0OiB0cnVlLFxyXG4gICAgICAgICAgICBvdmVyVmlld01vZGVMb2FkOiB0cnVlLFxyXG4gICAgICAgICAgICAvLyB1c2VyQWdlbnQgb2YgdGhlIHdlYiBjb21wb25lbnQuIFRoZSBxdWljayBhcHAgdXNlckFnZW50IGlzIHVzZWQgYnkgZGVmYXVsdC4gWW91IGNhbiB1c2UgQ2hyb21lIFVBIGxpa2UgXHJcbiAgICAgICAgICAgIC8vICdNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNi4wOyBOZXh1cyA1IEJ1aWxkL01SQTU4TikgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgzLjAuNDEwMy4xMDYgTW9iaWxlIFNhZmFyaS81MzcuMzYnXHJcbiAgICAgICAgICAgIHVzZXJBZ2VudDogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgICAgIC8vIEhlcmUgdGhlIHdoaXRlbGlzdCBzZXR0aW5ncywgd2hlbiB0aGUgbG9hZGluZyBwYWdlIGhhcyBtdWx0aXBsZSBhZGRyZXNzZXMsIHN1Y2ggYXMgdGhlIHN1Y2Nlc3NmdWwgbG9hZGluZyBvZiB0aGUgbG9naW4gYWRkcmVzcyBhbmQgdGhlXHJcbiAgICAgICAgICAgIC8vIGluY29uc2lzdGVudCBlbnRyeSBhZGRyZXNzLCBpdCBuZWVkcyB0byBzZXQgdGhlIHdoaXRlbGlzdCB0byBkbyBzby5cclxuICAgICAgICAgICAgbGlzdDogW1wibmV3IFJlZ0V4cCgnaHR0cHM/LionKVwiXSxcclxuICAgICAgICAgICAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHdlYiBjb21wb25lbnQgc3VwcG9ydHMgbXVsdGktd2luZG93IGRpc3BsYXkuXHJcbiAgICAgICAgICAgIG11bHRpd2luZG93OiBmYWxzZSxcclxuICAgICAgICAgICAgLy8gTXVsdGktd2luZG93IG9wZW5pbmcgcG9saWN5LiBcclxuICAgICAgICAgICAgLy8gYnJvd3NlcjogTXVsdGlwbGUgd2luZG93cyBzdGFydGVkIGluIHRoZSB3ZWIgY29tcG9uZW50ICBhcmUgb3BlbmVkIGluIHRoZSBzeXN0ZW0gYnJvd3Nlci5cclxuICAgICAgICAgICAgLy8gZGVmYXVsdDogTXVsdGlwbGUgd2luZG93cyBzdGFydGVkIGluIHRoZSB3ZWIgY29tcG9uZW50ICBhcmUgb3BlbmVkIGluIHRoZSBxdWljayBhcHAuXHJcbiAgICAgICAgICAgIGp1bXBwb2xpY3k6ICdkZWZhdWx0JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSW5pdCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdvbkluaXQ6ICcpO1xyXG4gICAgICAgICAgICAvLyBGdW5jdGlvbnMgdHJpZ2dlcmVkIHdoZW4gdGhlIGF1ZGlvIHBsYXkgc3RhdHVzIGNoYW5nZXNcclxuICAgICAgICAgICAgLy8gcG9zdE1lc3NhZ2UgaXMgdXNlZCB0byBzZW5kIGEgbWVzc2FnZSBmcm9tIHRoZSBRdWljayBBcHAgdG8gdGhlIHdlYnBhZ2VcclxuICAgICAgICAgICAgYXVkaW8ub25wbGF5ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdWRpbyBvbnBsYXlcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5wb3N0TWVzc2FnZSh7IG1lc3NhZ2U6IFwiYXVkaW9fcGxheVwiIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF1ZGlvLm9ucGF1c2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1ZGlvIG9ucGF1c2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5wb3N0TWVzc2FnZSh7IG1lc3NhZ2U6IFwiYXVkaW9fcGF1c2VcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25QYWdlU3RhcnQoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oJ3BhZ2VzdGFydDogJyArIGUudXJsKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gRWFjaCBwYWdlIHN3aXRjaCB0cmlnZ2Vyc1xyXG4gICAgICAgIG9uUGFnZUZpbmlzaChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygncGFnZWZpbmlzaDogJyArIGUudXJsLCBlLmNhbkJhY2ssIGUuY2FuRm9yd2FyZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRpdGxlUmVjZWl2ZShlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGl0bGUgPSBlLnRpdGxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FcnJvcihlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbygncGFnZUVycm9yIDogJyArIGUuZXJyb3JNc2cpXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBGdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiB0aGUgUXVpY2sgQXBwIHJlY2VpdmVzIGEgbWVzc2FnZSBmcm9tIHRoZSB3ZWJwYWdlXHJcbiAgICAgICAgb25NZXNzYWdlKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKCdvbm1lc3NhZ2UgZSA9ICcgKyBlLm1lc3NhZ2UgKyBcIiwgdXJsID0gXCIgKyBlLnVybCk7XHJcbiAgICAgICAgICAgIC8vIFBhcnNlIHRoZSBtZXNzYWdlIGFuZCBoYW5kbGUgaXQgYWNjb3JkaW5nbHlcclxuICAgICAgICAgICAgdmFyIGpzb25NZXNzYWdlID0gSlNPTi5wYXJzZShlLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICBpZihqc29uTWVzc2FnZVtcImFjdGlvblwiXSA9PT0gXCJwbGF5XCIpIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnNyYyA9IGpzb25NZXNzYWdlW1wiYXVkaW9VcmxcIl07XHJcbiAgICAgICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihqc29uTWVzc2FnZVtcImFjdGlvblwiXSA9PT0gXCJwYXVzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiIG9uc2hvd1wiKTtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiICBvbkhpZGVcIik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJhY2tQcmVzcygpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uQmFja1ByZXNzJylcclxuICAgICAgICAgICAgdGhpcy4kZWxlbWVudCgnd2ViJykuY2FuQmFjayh7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnd2ViIGJhY2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50KCd3ZWInKS5iYWNrKClcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm91dGVyIGJhY2snKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCJtb2R1bGUuZXhwb3J0cz17XG4gIFwiLmRvYy1wYWdlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwiLndlYi1wYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiXG4gIH1cbn0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUVBO0FBSUE7QUF6QkE7QUEyQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUF6RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9