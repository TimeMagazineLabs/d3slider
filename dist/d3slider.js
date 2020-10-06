var d3slider =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./slider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js?!../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/postcss-loader/dist/cjs.js?!./slider.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/chriswilson/.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js??ref--7-1!/Users/chriswilson/.npm-global/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!/Users/chriswilson/.npm-global/lib/node_modules/bundle-module/node_modules/postcss-loader/dist/cjs.js??ref--7-3!./slider.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _npm_global_lib_node_modules_bundle_module_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js */ "../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _npm_global_lib_node_modules_bundle_module_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_npm_global_lib_node_modules_bundle_module_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _npm_global_lib_node_modules_bundle_module_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".d3slider {\n  position: relative;\n  font-size: 14px;\n}\n.d3slider #control-panel {\n  display: inline-block;\n  vertical-align: top;\n}\n.d3slider #control-panel .playButton {\n  width: 40px;\n}\n.d3slider svg {\n  display: inline-block;\n}\n.d3slider #slider {\n  cursor: pointer;\n  height: 58px;\n  /* Safari */\n  transition: opacity 0.5s;\n}\n.d3slider .slider-axis {\n  font-size: 14px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.d3slider .slider-axis line,\n.d3slider .slider-axis path {\n  stroke: #777;\n  fill: none;\n}\n.d3slider .slider-axis .domain {\n  stroke-width: 1px;\n  stroke: #808080;\n}\n.d3slider .slider-axis .tick line {\n  stroke: #333;\n}\n.d3slider .slider-axis .tick text {\n  font-size: 14px;\n}\n.d3slider .thumb line {\n  fill: #333;\n  stroke: #333;\n  stroke-width: 2px;\n  cursor: pointer;\n}\n.d3slider .thumb image {\n  cursor: pointer;\n}\n.d3slider #thumb-text {\n  fill: #D7504F;\n}\n.d3slider .axis path,\n.d3slider .axis line {\n  fill: none;\n  stroke: #000;\n  shape-rendering: crispEdges;\n}\n.d3slider .axis path text.label,\n.d3slider .axis line text.label {\n  fill: #fff;\n}\n.d3slider .axis path .line,\n.d3slider .axis line .line {\n  fill: none;\n  stroke: steelblue;\n  stroke-width: 3px;\n}\n.d3slider .arrow_box_container {\n  position: absolute;\n}\n.d3slider .arrow_box {\n  font-size: 13px;\n  position: relative;\n  left: -50%;\n  background: #000000;\n  color: white;\n  display: inline-block;\n  padding: 3px 5px;\n  border-radius: 2px;\n}\n.d3slider .arrow_box:after {\n  top: 100%;\n  left: 50%;\n  border: solid transparent;\n  content: \" \";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  border-color: rgba(0, 0, 0, 0);\n  border-top-color: #000000;\n  border-width: 4px;\n  margin-left: -4px;\n}\n\n.d3slider.locked {\n  opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://slider.scss"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,eAAA;AACJ;AACI;EACI,qBAAA;EACA,mBAAA;AACR;AAAQ;EACI,WAAA;AAEZ;AAEI;EACI,qBAAA;AAAR;AAGI;EACI,eAAA;EACA,YAAA;EACA,WAAA;EACA,wBAAA;AADR;AAIG;EACK,eAAA;EACA,yBAAA;EACA,sBAAA;EACA,qBAAA;EACI,iBAAA;AAFZ;AAGQ;;EAEI,YAAA;EACA,UAAA;AADZ;AAIQ;EACI,iBAAA;EACA,eAAA;AAFZ;AAKQ;EACI,YAAA;AAHZ;AAMQ;EACI,eAAA;AAJZ;AASK;EACO,UAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;AAPZ;AAUQ;EACC,eAAA;AART;AAYI;EACI,aAAA;AAVR;AAaI;;EAEI,UAAA;EACA,YAAA;EACA,2BAAA;AAXR;AAYQ;;EACI,UAAA;AATZ;AAWQ;;EACI,UAAA;EACA,iBAAA;EACA,iBAAA;AARZ;AAYI;EACI,kBAAA;AAVR;AAaI;EACI,eAAA;EACA,kBAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,qBAAA;EACA,gBAAA;EACA,kBAAA;AAXR;AAcI;EACI,SAAA;EACA,SAAA;EACA,yBAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,kBAAA;EACA,oBAAA;EACA,8BAAA;EACA,yBAAA;EACA,iBAAA;EACA,iBAAA;AAZR;;AAgBA;EACC,YAAA;AAbD","sourcesContent":[".d3slider {\n    position: relative;\n    font-size: 14px;\n\n    #control-panel {\n        display: inline-block;\n        vertical-align: top;\n        .playButton {\n            width: 40px;\n        }\n    }\n\n    svg {\n        display: inline-block;\n    }\n \n    #slider {\n        cursor: pointer;\n        height: 58px;\n        /* Safari */\n        transition: opacity .5s;\n    }\n \n   .slider-axis {\n        font-size: 14px;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n        line,\n        path {\n            stroke: #777;\n            fill: none;\n        }\n\n        .domain {\n            stroke-width: 1px;\n            stroke: #808080;\n        }\n\n        .tick line {\n            stroke: #333;\n        }\n\n        .tick text {\n            font-size: 14px;\n        }\n    }\n\n    .thumb {\n    \tline {\n            fill: #333;\n            stroke: #333;\n            stroke-width: 2px;\n            cursor: pointer;\n        }\n\n        image {\n        \tcursor: pointer;\n        }\n    }    \n \n    #thumb-text {\n        fill: #D7504F;\n    }\n \n    .axis path,\n    .axis line {\n        fill: none;\n        stroke: #000;\n        shape-rendering: crispEdges;\n        text.label {\n            fill: #fff;\n        }\n        .line {\n            fill: none;\n            stroke: steelblue;\n            stroke-width: 3px;\n        }\n    }\n\n    .arrow_box_container {\n        position: absolute;\n    }\n\n    .arrow_box {\n        font-size: 13px;\n        position: relative;\n        left: -50%;\n        background: #000000;\n        color: white;\n        display: inline-block;\n        padding: 3px 5px;\n        border-radius: 2px;\n    }\n\n    .arrow_box:after {\n        top: 100%;\n        left: 50%;\n        border: solid transparent;\n        content: \" \";\n        height: 0;\n        width: 0;\n        position: absolute;\n        pointer-events: none;\n        border-color: rgba(0, 0, 0, 0);\n        border-top-color: #000000;\n        border-width: 4px;\n        margin-left: -4px;\n    }    \n}\n\n.d3slider.locked {\n\topacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/chriswilson/.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************************************************************************!*\
  !*** /Users/chriswilson/.npm-global/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./img/images.json":
/*!*************************!*\
  !*** ./img/images.json ***!
  \*************************/
/*! exports provided: play_gray, stop_gray, play_white, stop_white, play_hollow, pause_hollow, handle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"play_gray\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB4lJREFUeNrsXQ9IVVcY/3pJ8agQHhQNYdIwCqHV2DAcSWZsvLkxcSRJ/wiExWSVLKQkcSQbrcHCTBQN/2S1NowJxWogysRYIYutSbExKRyLIuGhWDwaGTvf9bt1vb3nu/e+d98959zzgx++9/x33vnd73x/znfPm1dYWAgK/CBDgDEuZlzFuI5xBWMOUUcW43J6PML4Hz2OMt4mjjLepcdKEJt4lTHMuJFxAz23ijWm5xtMz6cZrxEHGQdIOCWICXjl72bcStbgFuaTSMhqsqY+xjOMF3kQx0tBQiTATsZ8j8awgPF94iRjL4kz4NWkBDz4n0sZv2EcY2z2UAwzMslK+xn/YNwmuyDofE+SEJ+Rs+YV6IvOMf5JIs2XSZAgYx3j34yf0nNRgP6sk/G3GAGCkIKEyfyPCCZELIsZYuymJVc4QdBh9zBeMeUMomMnWfpukQTJJxPfImkynUnLWKcbfjDVgmBs/7PNZE5UoJX8ypjLoyBBWqK+ptjeL1hFopTyJEgm+Yot4E/oF+PHPAiynKKPjeBvYJ7SSuG9Z4JgovcLvFzQ8zMwvG/wQpAQLVMrlAYvYT/joXQKEiQxlGXEx1GnPsWuILhWfseYp+Y8IbBw+qHbgnzh5J/42NGfA5v7O3YECSezNvoUmMn/ADbqeFYFwYiqW82vI+TaibwCFk0P/cZSNbeOgQ5+W6oEwT+2Qc1p0jhJ6UJSgoTIkSskD0tzmUiQo1ZUVbC1dK1zKkg+pKhgpjDLH3c6FeSImj9XgBZSaleQNxnfUXPnGg7ZFeSwmjNXkRfvgo8lyBpI4Q6YQlwctirIfjVXacFGcg1zCoK1l628jDgnJ0d2USoSCbIFOGrxLC8vh1OnTsHatWtlFQQv/mAiQbgCWklDQwPU1dXBsmXLZMzei+IJgt8M8zryTZs2QXd3N1RUVMDChQtlEmVbPEHyIY1d3k6AQuzYsUMTZvPmzTI595iCCJMI4tJVW1sLLS0tMjh+3GvKjSVIkWjvZPXq1ZrTr66uhlAoJIWVBAz+Q9gukuLiYjh79iyUlZVBRkaGiG+hyCyI8BtQwWAQKisroaurCwoKCkQbfr5ZEGl6rLKysqC+vh6OHTsG2dnZIvmRxVIKoiMvLw86Ojpg3759sGjRIhGGnGMURMoaRSAQgNLSUjh//jyUlJRozzlGrlEQqXt0lyxZAlVVVZrFcFyGeS7IAvDJvjn6FCzDoI9BX8OhH9EE8V2/FUZh7e3tWhkGozNOENIF8WVXiV6GwfwlHA5zJUgQfAzM8A8ePKiVYTDz9xCLjT7E90AxUJSamhqvyjDzjVGWAsOTJ0/g4cOHEI16d0oTFn6mlRQAQ0NDmoXcv3/f03GgII/8LMSdO3egsbERbt686fVQJnVBJv0oxNTUlBb6Xrp0CZ49e8bDkB7pgoz7SQic/N7eXujs7ITHjx/zNLRxXZAoWUmm7GIMDw9Dc3MzjI2N8Ti8B7ogCDxCdZ2sQty7dw+amprg+vXrPA/zrlGQf2QUBJek06dPa0vU06dPeR/uLEF+B8lud758+bK23z4xMSHKkEeMgozIIgSGr7g8jY6OijTsCK6sRkGGRRcCM+y2tjbo7+8XcfjXjImh7kPwkhJu5xDLHVix7enp0R4LikGzIIg+0QRBa0CrQOsQHH2xBLnK+IkIo0f/gDt/t27dksHtRYw+3GwhWGjktr83Eolo5Q6MoCSCPu8vCTJOzoW7pjnMIfRyh5elcZdw0fjE3Hf5PW+CYFm8tbVVy7YlRNQsyDzTRx5hw8O/wMkuIna5S+Cw5wIaQLnxBfOO4bhZMa9zC8nRZn4h1hZuEyikA/h5WANWBMEk5YaaL9dxPNaL8ZocvlLz5SowQjljR5ALIFHBkUPUw4uP97MkCKJGzZs7hQbGrnjfnEuQH4kKqUVVPOtIJIj+y1E1hylDb6KLPGDBvOrVPKYE2OazN9EPWWklPQ4CfIasAPicoqukBcH1rkwtXUnhp3h5hxNB9Kxyr5pXR8Dd2F1Wf9hO93t7vGRGIS5wn2M72OgOtXs7QiXMtAwpWMMBmNmJBbcEwUjhXYq+FOYGlp9O2P0lJzfsoPm9B9SLqhB3eXdU6XB6B9UoWcqkmvuYyd8ep7+czC1tWHwsUJYyCxj0lEMSd6Ule48hirJe+ZTnCfQumKNOlQ5B9Dj7bZCgHTXJaOpAKv5Qqu7CRUdfCDH2iCUHNrl9YDULT6cgiCg5s+3gjxtJMb94HVK8ReHGferfMr4hcQI5TTkGrggpbxZz6+AAdPJvwcx+ikzWco3eVw24dH9/wOUrCTPVlTDTECa6r9hDwYurlp+OozUeUGyOOcugYEJM0vK0Ml0BSzrPOrlK6+56ymZ5t4haxmxaniLp+sdeHD6D+cpHFKGcAL4OLkAfUUlCfAkelIa8PA1ohJz+KxTLX0g2y3UIvB0Z+wZeIx/R4mUgwsMx0NPwouUID1MrMtCNe+cjZAm4hGJjOVf9Arydyx2F2f1geMoafvw1fjQQnpyaQ1+RiU4Zu01XOkZFf1EoPgqcN2zwflA6TugNSNz8nUvRXAQEx/8CDACj8sMRz67dLQAAAABJRU5ErkJggg==\",\"stop_gray\":\"data:image/png;base64,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\",\"play_white\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA5NJREFUeNrsnL9u1EAQh2fXvtz5vPYpKVIhAQVU0EBFDR0SBT0vQMcTIHiB0CFR0ECPkGhp6aCBBgkJGgoakPfs879zliLQQDiSKLZnd3/zALnd/eab2dmcThhjCMEnQgvWeJoZIwBkXABH+dsCQIaFcJzPFj4DMYztFD4BseEWMRqYECB4lTM50KZcuFsbF4C4NuT0nlwSVvBKNAkreCWdBAxee5acs8VHKBJW8IIiAYMXFAkYvKBIwOAFRQIGLygSMHhBkTgzXlAk7OAFRQIGr5CAwcsS9BBmUCTssK9kIQa0RMIOGILYkOwSdsAQxIakl7ADhiA2JL/kbEdRFCUMYRSTyeQ5EYk8z3/4YokVJUsptdO27eOmaTqfDDHMbbm7tbUVFkXxGiWLUcRxfIOIRJZlXwCEUSwWi/NEJBxp/MaZa28cx/O6rp+v1+t9lwyxehicTqd3wjAMlsvlO5QsRpEkyVUiElrrrwDCKNI0PWOMeViWZW1bH3H26UQIcT+KollZli9s+rUK59+yoii6LYQQWusPAMKrjF0mC55hJHn23K6U2um67lFVVQ0MYRJBENybzWZTjs8wXv8/5PczjNb6E4Dw6i8X6OAZJgcQXsYkTdM8bdsWQLhE27ZnJ5MJgIwdXdft1XXdxHF8fcx1hEBBlOf5d6XUdhAEaOpjhtb6PREZpdQ2blkjRlmWL40xJk3TSxznEOELCGPMg7IsqyiKbgnBc9ve9BCt9bc0TXejKGK9TudL1nK5fEtEJk3TXRvW6yyQuq6fdV23nyTJFZvW7WTJKopiFcdxZNmyhXOGZFn2mYiMhTD+KllW37TyPH9DRGaxWJyzPamsNqRpmidN06yVUtdcsTy02IpMKZW61v+sM0Rr/ZEOnjtcgiEOA8K6j6xWq1e/5omLLs9N7A3pum6vqqp6Pp/f9OFFQfzxJTJW30Cpqopms5nzDDYBYQfFBymcufa6BuNfQATOCU0d8R8gsGSEcgVDLCtZsGRgO2AIMxhHAQJLcMvy146jAoElA8E4jiGAwrBkAUrPdqCHMINxEiCwpOfzkkN8CGD0f+0FFIZzCKD0cDZyrA92GIQYyxBA6eEcJKfF+A7jtOcQ4SmYU92z5L5An2D0OakLD0D0ssdwgOwxMGJ8Q1zsLYPsIRxhQwYgeACxDcwoVocMNmx8h8AFyGGHYHyEwA3IpsMxrgPgDuSkh2dcmX9+DgCp9xGU2ut5RgAAAABJRU5ErkJggg==\",\"stop_white\":\"data:image/png;base64,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\",\"play_hollow\":\"data:image/png;base64,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\",\"pause_hollow\":\"data:image/png;base64,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\",\"handle\":\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAlCAYAAACzpJKIAAAAAXNSR0IArs4c6QAAAZ1JREFUSA29l71Kw1AcxavQQZQKulXopHNxsIPgqKurk+AjOPkovkF1cdBBBJ9CcHVw0EVEN0HUen5oQj9yc79z4PTm/j/Oyb0kaTLXsmNBJbvivtgXu+Kq+Co+i3fipXgrfohBwOREfBdHDnz7r6fPC1uqfhRdTKZr6KPfCQeqYjumRXzm9KNTiz1lv0QfYVMtOuhVYl1R9t3UHBJHD90ZXCkSImjrQXcCO5rZmmLy6Jc401GMmK13WDi1deB6L9lETXn02/P6GYjLYk6gP8Csl9NlTLuHGc+6JtDFjH1uAiPMnppwKny4w01XUcp4+SR5yGyIfottBBd/Q7bfCX2W+COm3LZCC91yC4vl3GQyQ3cG24oUZ5NyRLcS14qmNELPiE1lvsUUhuigV4tTZVOYoWPFiipexBhD+tFxwpGqYszo90LoxVJ7UZjOYE0J37ct6ukLwqG6fLaT+ijwsuJiWL7UxLh11Gz7VyBPXRLwofApVq2QuPOHhOvZHBvMiGfBuVTHV8c8GxalfC9iyMg8KzakzgcfYyNYCnH5BU0j3rpEGaUiAAAAAElFTkSuQmCC\"}");

/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/array.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/array.js ***!
  \******************************************************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bin.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bin.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/identity.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nice.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/nice.js");
/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds,
    // and nice the default domain accordingly.
    if (!Array.isArray(tz)) {
      tz = +tz;
      if (domain === _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"]) [x0, x1] = Object(_nice_js__WEBPACK_IMPORTED_MODULE_5__["default"])(x0, x1, tz);
      tz = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_6__["default"])(x0, x1, tz);
      if (tz[tz.length - 1] === x1) tz.pop(); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisect.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisect.js ***!
  \*******************************************************************************/
/*! exports provided: bisectRight, bisectLeft, bisectCenter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectCenter", function() { return bisectCenter; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisector.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/number.js");




const ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
const bisectRight = ascendingBisect.right;
const bisectLeft = ascendingBisect.left;
const bisectCenter = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_number_js__WEBPACK_IMPORTED_MODULE_2__["default"]).center;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisector.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisector.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(f) {
  let delta = f;
  let compare = f;

  if (f.length === 1) {
    delta = (d, x) => f(d) - x;
    compare = ascendingComparator(f);
  }

  function left(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }

  function right(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    while (lo < hi) {
      const mid = (lo + hi) >>> 1;
      if (compare(a[mid], x) > 0) hi = mid;
      else lo = mid + 1;
    }
    return lo;
  }

  function center(a, x, lo, hi) {
    if (lo == null) lo = 0;
    if (hi == null) hi = a.length;
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }

  return {left, center, right};
});

function ascendingComparator(f) {
  return (d, x) => Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/constant.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/constant.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/count.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/count.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return count; });
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count;
      }
    }
  }
  return count;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/cross.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/cross.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cross; });
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/cumsum.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/cumsum.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cumsum; });
function cumsum(values, valueof) {
  var sum = 0, index = 0;
  return Float64Array.from(values, valueof === undefined
    ? v => (sum += +v || 0)
    : v => (sum += +valueof(v, index++, values) || 0));
}

/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/descending.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/descending.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/deviation.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/deviation.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deviation; });
/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/variance.js");


function deviation(values, valueof) {
  const v = Object(_variance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, valueof);
  return v ? Math.sqrt(v) : v;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/difference.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/difference.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return difference; });
function difference(values, ...others) {
  values = new Set(values);
  for (const other of others) {
    for (const value of other) {
      values.delete(value);
    }
  }
  return values;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/disjoint.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/disjoint.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return disjoint; });
function disjoint(values, other) {
  const iterator = other[Symbol.iterator](), set = new Set();
  for (const v of values) {
    if (set.has(v)) return false;
    let value, done;
    while (({value, done} = iterator.next())) {
      if (done) break;
      if (Object.is(v, value)) return false;
      set.add(value);
    }
  }
  return true;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/every.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/every.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return every; });
function every(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index = -1;
  for (const value of values) {
    if (!test(value, ++index, values)) {
      return false;
    }
  }
  return true;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/extent.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/extent.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/filter.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/filter.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filter; });
function filter(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  const array = [];
  let index = -1;
  for (const value of values) {
    if (test(value, ++index, values)) {
      array.push(value);
    }
  }
  return array;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/fsum.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/fsum.js ***!
  \*****************************************************************************/
/*! exports provided: Adder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Adder", function() { return Adder; });
// https://github.com/python/cpython/blob/a74eea238f5baba15797e2e8b570d153bc8690a7/Modules/mathmodule.c#L1423
class Adder {
  constructor() {
    this._partials = new Float64Array(32);
    this._n = 0;
  }
  add(x) {
    const p = this._partials;
    let i = 0;
    for (let j = 0; j < this._n && j < 32; j++) {
      const y = p[j],
        hi = x + y,
        lo = Math.abs(x) < Math.abs(y) ? x - (hi - y) : y - (hi - x);
      if (lo) p[i++] = lo;
      x = hi;
    }
    p[i] = x;
    this._n = i + 1;
    return this;
  }
  valueOf() {
    const p = this._partials;
    let n = this._n, x, y, lo, hi = 0;
    if (n > 0) {
      hi = p[--n];
      while (n > 0) {
        x = hi;
        y = p[--n];
        hi = x + y;
        lo = y - (hi - x);
        if (lo) break;
      }
      if (n > 0 && ((lo < 0 && p[n - 1] < 0) || (lo > 0 && p[n - 1] > 0))) {
        y = lo * 2;
        x = hi + y;
        if (y == x - hi) hi = x;
      }
    }
    return hi;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  const adder = new Adder();
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        adder.add(value);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        adder.add(value);
      }
    }
  }
  return +adder;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/greatest.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/greatest.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return greatest; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");


function greatest(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let max;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, maxValue) > 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        max = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, max) > 0
          : compare(value, value) === 0) {
        max = value;
        defined = true;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/greatestIndex.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/greatestIndex.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return greatestIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/maxIndex.js");



function greatestIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (compare.length === 1) return Object(_maxIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, compare);
  let maxValue;
  let max = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (max < 0
        ? compare(value, value) === 0
        : compare(value, maxValue) > 0) {
      maxValue = value;
      max = index;
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/group.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/group.js ***!
  \******************************************************************************/
/*! exports provided: default, groups, rollup, rollups, index, indexes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return rollup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return rollups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexes", function() { return indexes; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/identity.js");


function group(values, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function index(values, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], unique, keys);
}

function indexes(values, ...keys) {
  return nest(values, Array.from, unique, keys);
}

function unique(values) {
  if (values.length !== 1) throw new Error("duplicate key");
  return values[0];
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/identity.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/identity.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js ***!
  \******************************************************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, bisectCenter, ascending, bisector, count, cross, cumsum, descending, deviation, extent, fsum, Adder, group, groups, index, indexes, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, nice, pairs, permute, quantile, quantileSorted, quickselect, range, least, leastIndex, greatest, greatestIndex, scan, shuffle, shuffler, sum, ticks, tickIncrement, tickStep, transpose, variance, zip, every, some, filter, map, reduce, reverse, sort, difference, disjoint, intersection, subset, superset, union */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectCenter", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectCenter"]; });

/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _count_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _cumsum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumsum.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/cumsum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cumsum", function() { return _cumsum_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviation.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extent.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _fsum_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fsum.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/fsum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fsum", function() { return _fsum_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Adder", function() { return _fsum_js__WEBPACK_IMPORTED_MODULE_9__["Adder"]; });

/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./group.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _group_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_10__["groups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "index", function() { return _group_js__WEBPACK_IMPORTED_MODULE_10__["index"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexes", function() { return _group_js__WEBPACK_IMPORTED_MODULE_10__["indexes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return _group_js__WEBPACK_IMPORTED_MODULE_10__["rollup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_10__["rollups"]; });

/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bin.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/bin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bin", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./threshold/scott.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./max.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/maxIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxIndex", function() { return _maxIndex_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mean.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./median.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./merge.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./min.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/minIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minIndex", function() { return _minIndex_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./nice.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/nice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nice", function() { return _nice_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./permute.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_25__["quantileSorted"]; });

/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quickselect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return _quickselect_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./range.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./least.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/least.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "least", function() { return _least_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/leastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leastIndex", function() { return _leastIndex_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _greatest_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./greatest.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/greatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatest", function() { return _greatest_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _greatestIndex_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./greatestIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/greatestIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatestIndex", function() { return _greatestIndex_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./scan.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffler", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_33__["shuffler"]; });

/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sum.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_35__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_35__["tickStep"]; });

/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./variance.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance_js__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./zip.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _every_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./every.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/every.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "every", function() { return _every_js__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _some_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./some.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/some.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _some_js__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./filter.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter_js__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./map.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map_js__WEBPACK_IMPORTED_MODULE_42__["default"]; });

/* harmony import */ var _reduce_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./reduce.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/reduce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reduce", function() { return _reduce_js__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _reverse_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./reverse.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/reverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return _reverse_js__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sort.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/sort.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return _sort_js__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _difference_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./difference.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/difference.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "difference", function() { return _difference_js__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _disjoint_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./disjoint.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/disjoint.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disjoint", function() { return _disjoint_js__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _intersection_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./intersection.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/intersection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intersection", function() { return _intersection_js__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _subset_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./subset.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/subset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subset", function() { return _subset_js__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _superset_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./superset.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/superset.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "superset", function() { return _superset_js__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _union_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./union.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/union.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "union", function() { return _union_js__WEBPACK_IMPORTED_MODULE_51__["default"]; });












 // Deprecated; use bin.




















 // Deprecated; use leastIndex.





















/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/intersection.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/intersection.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return intersection; });
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/set.js");


function intersection(values, ...others) {
  values = new Set(values);
  others = others.map(_set_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
  out: for (const value of values) {
    for (const other of others) {
      if (!other.has(value)) {
        values.delete(value);
        continue out;
      }
    }
  }
  return values;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/least.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/least.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return least; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");


function least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, minValue) < 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, min) < 0
          : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/leastIndex.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/leastIndex.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return leastIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");
/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/minIndex.js");



function leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (compare.length === 1) return Object(_minIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, compare);
  let minValue;
  let min = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (min < 0
        ? compare(value, value) === 0
        : compare(value, minValue) < 0) {
      minValue = value;
      min = index;
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/map.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/map.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
function map(values, mapper) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  if (typeof mapper !== "function") throw new TypeError("mapper is not a function");
  return Array.from(values, (value, index) => mapper(value, index, values));
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/max.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/max.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/maxIndex.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/maxIndex.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxIndex; });
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/mean.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/mean.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mean; });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/median.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/median.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quantile.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  return Object(_quantile_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, 0.5, valueof);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/merge.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/merge.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/min.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/minIndex.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/minIndex.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minIndex; });
function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/nice.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/nice.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nice; });
/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ticks.js");


function nice(start, stop, count) {
  let prestep;
  while (true) {
    const step = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    if (step === prestep || step === 0 || !isFinite(step)) {
      return [start, stop];
    } else if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
    }
    prestep = step;
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/number.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/number.js ***!
  \*******************************************************************************/
/*! exports provided: default, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/pairs.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/pairs.js ***!
  \******************************************************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/permute.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/permute.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(source, keys) {
  return Array.from(keys, key => source[key]);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quantile.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quantile.js ***!
  \*********************************************************************************/
/*! exports provided: default, quantileSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return quantileSorted; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/max.js");
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/min.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quickselect.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/number.js");





function quantile(values, p, valueof) {
  values = Float64Array.from(Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["numbers"])(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values);
  if (p >= 1) return Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values, i0).subarray(0, i0 + 1)),
      value1 = Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quickselect.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quickselect.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/range.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/range.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/reduce.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/reduce.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reduce; });
function reduce(values, reducer, value) {
  if (typeof reducer !== "function") throw new TypeError("reducer is not a function");
  const iterator = values[Symbol.iterator]();
  let done, next, index = -1;
  if (arguments.length < 3) {
    ({done, value} = iterator.next());
    if (done) return;
    ++index;
  }
  while (({done, value: next} = iterator.next()), !done) {
    value = reducer(value, next, ++index, values);
  }
  return value;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/reverse.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/reverse.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reverse; });
function reverse(values) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).reverse();
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/scan.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/scan.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scan; });
/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/leastIndex.js");


function scan(values, compare) {
  const index = Object(_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, compare);
  return index < 0 ? undefined : index;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/set.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/set.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return set; });
function set(values) {
  return values instanceof Set ? values : new Set(values);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/shuffle.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/shuffle.js ***!
  \********************************************************************************/
/*! exports provided: default, shuffler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffler", function() { return shuffler; });
/* harmony default export */ __webpack_exports__["default"] = (shuffler(Math.random));

function shuffler(random) {
  return function shuffle(array, i0 = 0, i1 = array.length) {
    let m = i1 - (i0 = +i0);
    while (m) {
      const i = random() * m-- | 0, t = array[m + i0];
      array[m + i0] = array[i + i0];
      array[i + i0] = t;
    }
    return array;
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/some.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/some.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
function some(values, test) {
  if (typeof test !== "function") throw new TypeError("test is not a function");
  let index = -1;
  for (const value of values) {
    if (test(value, ++index, values)) {
      return true;
    }
  }
  return false;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/sort.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/sort.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sort; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ascending.js");


function sort(values, comparator = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (typeof values[Symbol.iterator] !== "function") throw new TypeError("values is not iterable");
  return Array.from(values).sort(comparator);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/subset.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/subset.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return subset; });
/* harmony import */ var _superset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superset.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/superset.js");


function subset(values, other) {
  return Object(_superset_js__WEBPACK_IMPORTED_MODULE_0__["default"])(other, values);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/sum.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/sum.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sum; });
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/superset.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/superset.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return superset; });
function superset(values, other) {
  const iterator = values[Symbol.iterator](), set = new Set();
  for (const o of other) {
    if (set.has(o)) continue;
    let value, done;
    while (({value, done} = iterator.next())) {
      if (done) return false;
      set.add(value);
      if (Object.is(o, value)) break;
    }
  }
  return true;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/count.js");
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quantile.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/quantile.js");



/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (2 * (Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, 0.75) - Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, 0.25)) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values), -1 / 3)));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/scott.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/scott.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/count.js");
/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deviation.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/deviation.js");



/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values), -1 / 3)));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/sturges.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/threshold/sturges.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/count.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values)) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ticks.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/ticks.js ***!
  \******************************************************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    step = -step;
    start = Math.ceil(start * step);
    stop = Math.floor(stop * step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/transpose.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/transpose.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min_js__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/union.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/union.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return union; });
function union(...others) {
  const set = new Set();
  for (const other of others) {
    for (const o of other) {
      set.add(o);
    }
  }
  return set;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/variance.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/variance.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variance; });
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/zip.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/zip.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/array.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/array.js ***!
  \****************************************************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/axis.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/axis.js ***!
  \***************************************************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return axisTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return axisRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return axisBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return axisLeft; });
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/array.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/identity.js");



var top = 1,
    right = 2,
    bottom = 3,
    left = 4,
    epsilon = 1e-6;

function translateX(x) {
  return "translate(" + (x + 0.5) + ",0)";
}

function translateY(y) {
  return "translate(0," + (y + 0.5) + ")";
}

function number(scale) {
  return d => +scale(d);
}

function center(scale) {
  var offset = Math.max(0, scale.bandwidth() - 1) / 2; // Adjust for 0.5px offset.
  if (scale.round()) offset = Math.round(offset);
  return function(d) {
    return +scale(d) + offset;
  };
}

function entering() {
  return !this.__axis;
}

function axis(orient, scale) {
  var tickArguments = [],
      tickValues = null,
      tickFormat = null,
      tickSizeInner = 6,
      tickSizeOuter = 6,
      tickPadding = 3,
      k = orient === top || orient === left ? -1 : 1,
      x = orient === left || orient === right ? "x" : "y",
      transform = orient === top || orient === bottom ? translateX : translateY;

  function axis(context) {
    var values = tickValues == null ? (scale.ticks ? scale.ticks.apply(scale, tickArguments) : scale.domain()) : tickValues,
        format = tickFormat == null ? (scale.tickFormat ? scale.tickFormat.apply(scale, tickArguments) : _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : tickFormat,
        spacing = Math.max(tickSizeInner, 0) + tickPadding,
        range = scale.range(),
        range0 = +range[0] + 0.5,
        range1 = +range[range.length - 1] + 0.5,
        position = (scale.bandwidth ? center : number)(scale.copy()),
        selection = context.selection ? context.selection() : context,
        path = selection.selectAll(".domain").data([null]),
        tick = selection.selectAll(".tick").data(values, scale).order(),
        tickExit = tick.exit(),
        tickEnter = tick.enter().append("g").attr("class", "tick"),
        line = tick.select("line"),
        text = tick.select("text");

    path = path.merge(path.enter().insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"));

    tick = tick.merge(tickEnter);

    line = line.merge(tickEnter.append("line")
        .attr("stroke", "currentColor")
        .attr(x + "2", k * tickSizeInner));

    text = text.merge(tickEnter.append("text")
        .attr("fill", "currentColor")
        .attr(x, k * spacing)
        .attr("dy", orient === top ? "0em" : orient === bottom ? "0.71em" : "0.32em"));

    if (context !== selection) {
      path = path.transition(context);
      tick = tick.transition(context);
      line = line.transition(context);
      text = text.transition(context);

      tickExit = tickExit.transition(context)
          .attr("opacity", epsilon)
          .attr("transform", function(d) { return isFinite(d = position(d)) ? transform(d) : this.getAttribute("transform"); });

      tickEnter
          .attr("opacity", epsilon)
          .attr("transform", function(d) { var p = this.parentNode.__axis; return transform(p && isFinite(p = p(d)) ? p : position(d)); });
    }

    tickExit.remove();

    path
        .attr("d", orient === left || orient == right
            ? (tickSizeOuter ? "M" + k * tickSizeOuter + "," + range0 + "H0.5V" + range1 + "H" + k * tickSizeOuter : "M0.5," + range0 + "V" + range1)
            : (tickSizeOuter ? "M" + range0 + "," + k * tickSizeOuter + "V0.5H" + range1 + "V" + k * tickSizeOuter : "M" + range0 + ",0.5H" + range1));

    tick
        .attr("opacity", 1)
        .attr("transform", function(d) { return transform(position(d)); });

    line
        .attr(x + "2", k * tickSizeInner);

    text
        .attr(x, k * spacing)
        .text(format);

    selection.filter(entering)
        .attr("fill", "none")
        .attr("font-size", 10)
        .attr("font-family", "sans-serif")
        .attr("text-anchor", orient === right ? "start" : orient === left ? "end" : "middle");

    selection
        .each(function() { this.__axis = position; });
  }

  axis.scale = function(_) {
    return arguments.length ? (scale = _, axis) : scale;
  };

  axis.ticks = function() {
    return tickArguments = _array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(arguments), axis;
  };

  axis.tickArguments = function(_) {
    return arguments.length ? (tickArguments = _ == null ? [] : _array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickArguments.slice();
  };

  axis.tickValues = function(_) {
    return arguments.length ? (tickValues = _ == null ? null : _array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_), axis) : tickValues && tickValues.slice();
  };

  axis.tickFormat = function(_) {
    return arguments.length ? (tickFormat = _, axis) : tickFormat;
  };

  axis.tickSize = function(_) {
    return arguments.length ? (tickSizeInner = tickSizeOuter = +_, axis) : tickSizeInner;
  };

  axis.tickSizeInner = function(_) {
    return arguments.length ? (tickSizeInner = +_, axis) : tickSizeInner;
  };

  axis.tickSizeOuter = function(_) {
    return arguments.length ? (tickSizeOuter = +_, axis) : tickSizeOuter;
  };

  axis.tickPadding = function(_) {
    return arguments.length ? (tickPadding = +_, axis) : tickPadding;
  };

  return axis;
}

function axisTop(scale) {
  return axis(top, scale);
}

function axisRight(scale) {
  return axis(right, scale);
}

function axisBottom(scale) {
  return axis(bottom, scale);
}

function axisLeft(scale) {
  return axis(left, scale);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/identity.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/identity.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/index.js ***!
  \****************************************************************************/
/*! exports provided: axisTop, axisRight, axisBottom, axisLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axis.js */ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/axis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisTop", function() { return _axis_js__WEBPACK_IMPORTED_MODULE_0__["axisTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisRight", function() { return _axis_js__WEBPACK_IMPORTED_MODULE_0__["axisRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisBottom", function() { return _axis_js__WEBPACK_IMPORTED_MODULE_0__["axisBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "axisLeft", function() { return _axis_js__WEBPACK_IMPORTED_MODULE_0__["axisLeft"]; });




/***/ }),

/***/ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/color.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/color.js ***!
  \******************************************************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/cubehelix.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/cubehelix.js ***!
  \**********************************************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_2__["degrees"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/define.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/define.js ***!
  \*******************************************************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js ***!
  \******************************************************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/lab.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/lab.js ***!
  \****************************************************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/math.js");




// https://observablehq.com/@mbostock/lab-and-rgb
const K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math_js__WEBPACK_IMPORTED_MODULE_2__["degrees"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math_js__WEBPACK_IMPORTED_MODULE_2__["radians"];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/math.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/math.js ***!
  \*****************************************************************************/
/*! exports provided: radians, degrees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
const radians = Math.PI / 180;
const degrees = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/.pnpm/d3-dispatch@2.0.0/node_modules/d3-dispatch/src/dispatch.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-dispatch@2.0.0/node_modules/d3-dispatch/src/dispatch.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var noop = {value: () => {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["default"] = (dispatch);


/***/ }),

/***/ "./node_modules/.pnpm/d3-dispatch@2.0.0/node_modules/d3-dispatch/src/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-dispatch@2.0.0/node_modules/d3-dispatch/src/index.js ***!
  \************************************************************************************/
/*! exports provided: dispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/.pnpm/d3-dispatch@2.0.0/node_modules/d3-dispatch/src/dispatch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return _dispatch_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/constant.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/constant.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (x => () => x);


/***/ }),

/***/ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/drag.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/drag.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "./node_modules/.pnpm/d3-dispatch@2.0.0/node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nodrag.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/nodrag.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/noevent.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/constant.js");
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/event.js");







// Ignore right-click, since that should open the context menu.
function defaultFilter(event) {
  return !event.ctrlKey && !event.button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(event, d) {
  return d == null ? {x: event.x, y: event.y} : d;
}

function defaultTouchable() {
  return navigator.maxTouchPoints || ("ontouchstart" in this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned(event, d) {
    if (touchending || !filter.call(this, event, d)) return;
    var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
    if (!gesture) return;
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(event.view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    Object(_nodrag_js__WEBPACK_IMPORTED_MODULE_2__["default"])(event.view);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["nopropagation"])(event);
    mousemoving = false;
    mousedownx = event.clientX;
    mousedowny = event.clientY;
    gesture("start", event);
  }

  function mousemoved(event) {
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
    if (!mousemoving) {
      var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag", event);
  }

  function mouseupped(event) {
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(event.view).on("mousemove.drag mouseup.drag", null);
    Object(_nodrag_js__WEBPACK_IMPORTED_MODULE_2__["yesdrag"])(event.view, mousemoving);
    Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
    gestures.mouse("end", event);
  }

  function touchstarted(event, d) {
    if (!filter.call(this, event, d)) return;
    var touches = event.changedTouches,
        c = container.call(this, event, d),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
        Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["nopropagation"])(event);
        gesture("start", event, touches[i]);
      }
    }
  }

  function touchmoved(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event);
        gesture("drag", event, touches[i]);
      }
    }
  }

  function touchended(event) {
    var touches = event.changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(_noevent_js__WEBPACK_IMPORTED_MODULE_3__["nopropagation"])(event);
        gesture("end", event, touches[i]);
      }
    }
  }

  function beforestart(that, container, event, d, identifier, touch) {
    var dispatch = listeners.copy(),
        p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["pointer"])(touch || event, container), dx, dy,
        s;

    if ((s = subject.call(that, new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"]("beforestart", {
        sourceEvent: event,
        target: drag,
        identifier,
        active,
        x: p[0],
        y: p[1],
        dx: 0,
        dy: 0,
        dispatch
      }), d)) == null) return;

    dx = s.x - p[0] || 0;
    dy = s.y - p[1] || 0;

    return function gesture(type, event, touch) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[identifier] = gesture, n = active++; break;
        case "end": delete gestures[identifier], --active; // nobreak
        case "drag": p = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["pointer"])(touch || event, container), n = active; break;
      }
      dispatch.call(
        type,
        that,
        new _event_js__WEBPACK_IMPORTED_MODULE_5__["default"](type, {
          sourceEvent: event,
          subject: s,
          target: drag,
          identifier,
          active: n,
          x: p[0] + dx,
          y: p[1] + dy,
          dx: p[0] - p0[0],
          dy: p[1] - p0[1],
          dispatch
        }),
        d
      );
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_4__["default"])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/event.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragEvent; });
function DragEvent(type, {
  sourceEvent,
  subject,
  target,
  identifier,
  active,
  x, y, dx, dy,
  dispatch
}) {
  Object.defineProperties(this, {
    type: {value: type, enumerable: true, configurable: true},
    sourceEvent: {value: sourceEvent, enumerable: true, configurable: true},
    subject: {value: subject, enumerable: true, configurable: true},
    target: {value: target, enumerable: true, configurable: true},
    identifier: {value: identifier, enumerable: true, configurable: true},
    active: {value: active, enumerable: true, configurable: true},
    x: {value: x, enumerable: true, configurable: true},
    y: {value: y, enumerable: true, configurable: true},
    dx: {value: dx, enumerable: true, configurable: true},
    dy: {value: dy, enumerable: true, configurable: true},
    _: {value: dispatch}
  });
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),

/***/ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/index.js ***!
  \****************************************************************************/
/*! exports provided: drag, dragDisable, dragEnable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drag.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/drag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return _drag_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _nodrag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodrag.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/nodrag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return _nodrag_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return _nodrag_js__WEBPACK_IMPORTED_MODULE_1__["yesdrag"]; });





/***/ }),

/***/ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/nodrag.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/nodrag.js ***!
  \*****************************************************************************/
/*! exports provided: default, yesdrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yesdrag", function() { return yesdrag; });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var _noevent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noevent.js */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/noevent.js");



/* harmony default export */ __webpack_exports__["default"] = (function(view) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(view).on("dragstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", _noevent_js__WEBPACK_IMPORTED_MODULE_1__["default"], true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/noevent.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/noevent.js ***!
  \******************************************************************************/
/*! exports provided: nopropagation, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nopropagation", function() { return nopropagation; });
function nopropagation(event) {
  event.stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["default"] = (function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/defaultLocale.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/defaultLocale.js ***!
  \****************************************************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/exponent.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/exponent.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["formatDecimalParts"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatDecimal.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatDecimal.js ***!
  \****************************************************************************************/
/*! exports provided: default, formatDecimalParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDecimalParts", function() { return formatDecimalParts; });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return Math.abs(x = Math.round(x)) >= 1e21
      ? x.toLocaleString("en").replace(/,/g, "")
      : x.toString(10);
});

// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimalParts(1.23) returns ["123", 0].
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatGroup.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatGroup.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatNumerals.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatNumerals.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatPrefixAuto.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatPrefixAuto.js ***!
  \*******************************************************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["formatDecimalParts"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["formatDecimalParts"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatRounded.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatRounded.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["formatDecimalParts"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatSpecifier.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatSpecifier.js ***!
  \******************************************************************************************/
/*! exports provided: default, FormatSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return FormatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatTrim.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatTrim.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatTypes.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatTypes.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatDecimal.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatRounded.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_2__["default"])(x * 100, p),
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/identity.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/identity.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/index.js ***!
  \********************************************************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["FormatSpecifier"]; });

/* harmony import */ var _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/locale.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/locale.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/identity.js");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "−" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionFixed.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionFixed.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionPrefix.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionPrefix.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionRound.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/precisionRound.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/array.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/array.js ***!
  \******************************************************************************************/
/*! exports provided: default, genericArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericArray", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basis.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basis.js ***!
  \******************************************************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basisClosed.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basisClosed.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js ***!
  \******************************************************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/constant.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/constant.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (x => () => x);


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/cubehelix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/cubehelix.js ***!
  \**********************************************************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/date.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/date.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/discrete.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/discrete.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hcl.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hcl.js ***!
  \****************************************************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hsl.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hsl.js ***!
  \****************************************************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hue.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hue.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/index.js ***!
  \******************************************************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/numberArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumberArray", function() { return _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./round.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./string.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _transform_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transform/index.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasisClosed"]; });

/* harmony import */ var _hsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hsl.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["hslLong"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lab.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _hcl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hcl.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["hclLong"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["cubehelixLong"]; });

/* harmony import */ var _piecewise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./piecewise.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });
























/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/lab.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/lab.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/number.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/number.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/numberArray.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/numberArray.js ***!
  \************************************************************************************************/
/*! exports provided: default, isNumberArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/object.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/object.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/piecewise.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/piecewise.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/value.js");


function piecewise(interpolate, values) {
  if (values === undefined) values = interpolate, interpolate = _value_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/quantize.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/quantize.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/rgb.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/rgb.js ***!
  \****************************************************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/round.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/round.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/string.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/string.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/decompose.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/decompose.js ***!
  \********************************************************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/index.js ***!
  \****************************************************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/parse.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/parse.js ***!
  \****************************************************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/transform/decompose.js");


var svgNode;

/* eslint-disable no-undef */
function parseCss(value) {
  const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
  return m.isIdentity ? _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"] : Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(m.a, m.b, m.c, m.d, m.e, m.f);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/value.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/value.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/.pnpm/d3-color@2.0.0/node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__["genericArray"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/zoom.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/zoom.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

/* harmony default export */ __webpack_exports__["default"] = ((function zoomRho(rho, rho2, rho4) {

  // p0 = [ux0, uy0, w0]
  // p1 = [ux1, uy1, w1]
  function zoom(p0, p1) {
    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
        ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
        dx = ux1 - ux0,
        dy = uy1 - uy0,
        d2 = dx * dx + dy * dy,
        i,
        S;

    // Special case for u0 ≅ u1.
    if (d2 < epsilon2) {
      S = Math.log(w1 / w0) / rho;
      i = function(t) {
        return [
          ux0 + t * dx,
          uy0 + t * dy,
          w0 * Math.exp(rho * t * S)
        ];
      }
    }

    // General case.
    else {
      var d1 = Math.sqrt(d2),
          b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
          b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
          r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
          r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
      S = (r1 - r0) / rho;
      i = function(t) {
        var s = t * S,
            coshr0 = cosh(r0),
            u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
        return [
          ux0 + u * dx,
          uy0 + u * dy,
          w0 * coshr0 / cosh(rho * s + r0)
        ];
      }
    }

    i.duration = S * 1000 * rho / Math.SQRT2;

    return i;
  }

  zoom.rho = function(_) {
    var _1 = Math.max(1e-3, +_), _2 = _1 * _1, _4 = _2 * _2;
    return zoomRho(_1, _2, _4);
  };

  return zoom;
})(Math.SQRT2, 2, 4));


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/band.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/band.js ***!
  \*****************************************************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal_js__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/constant.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/constant.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return constants; });
function constants(x) {
  return function() {
    return x;
  };
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js ***!
  \***********************************************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/diverging.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/diverging.js ***!
  \**********************************************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingLog", function() { return divergingLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSymlog", function() { return divergingSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingPow", function() { return divergingPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSqrt", function() { return divergingSqrt; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/pow.js");









function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["piecewise"])(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolate"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateRound"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__["linearish"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]));

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, diverging());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__["loggish"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_6__["symlogish"])(transformer());

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__["powish"])(transformer());

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/identity.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/identity.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/number.js");



function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : [0, 1];

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/index.js ***!
  \******************************************************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleRadial, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/symlog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSymlog", function() { return _symlog_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__["implicit"]; });

/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__["sqrt"]; });

/* harmony import */ var _radial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radial.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/radial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleRadial", function() { return _radial_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _utcTime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcTime.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialLog", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialPow", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSqrt", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSymlog", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialSymlog"]; });

/* harmony import */ var _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sequentialQuantile.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequentialQuantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialQuantile", function() { return _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _diverging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./diverging.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingLog", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingPow", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSqrt", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSymlog", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingSymlog"]; });

/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/tickFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormat", function() { return _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });




































/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js ***!
  \*****************************************************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js ***!
  \*******************************************************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    
    while (maxIter-- > 0) {
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
      if (step === prestep) {
        d[i0] = start
        d[i1] = stop
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/log.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/log.js ***!
  \****************************************************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/index.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(u, v, n);
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/nice.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/nice.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nice; });
function nice(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/number.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/number.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return number; });
function number(x) {
  return +x;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/ordinal.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/ordinal.js ***!
  \********************************************************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_0__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/pow.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/pow.js ***!
  \****************************************************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/quantile.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/quantile.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantileSorted"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/quantize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/quantize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(Object(_linear_js__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/radial.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/radial.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radial; });
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/number.js");





function square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function(y) {
    return squared.invert(square(y));
  };

  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function(_) {
    return arguments.length ? (squared.range((range = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__["default"])).map(square)), scale) : range.slice();
  };

  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return radial(squared.domain(), range)
        .round(round)
        .clamp(squared.clamp())
        .unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequential.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequential.js ***!
  \***********************************************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialLog", function() { return sequentialLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSymlog", function() { return sequentialSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialPow", function() { return sequentialPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSqrt", function() { return sequentialSqrt; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/.pnpm/d3-interpolate@2.0.1/node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolate"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateRound"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__["linearish"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__["loggish"])(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_5__["symlogish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_6__["powish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequentialQuantile.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequentialQuantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");




function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/symlog.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/symlog.js ***!
  \*******************************************************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/threshold.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/threshold.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/tickFormat.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/tickFormat.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tickFormat; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/.pnpm/d3-format@2.0.0/node_modules/d3-format/src/index.js");



function tickFormat(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/time.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/time.js ***!
  \*****************************************************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return time; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nice.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/nice.js");







var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target),
          step;
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
      return interval.every(step);
    }

    return interval;
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1]))
        ? domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_5__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

function time() {
  return _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/utcTime.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/utcTime.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return utcTime; });
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/init.js");





function utcTime() {
  return _init_js__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_time_js__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/array.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/array.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return typeof x === "object" && "length" in x
    ? x // Array, TypedArray, NodeList, array-like
    : Array.from(x); // Map, Set, iterable, string, or anything else
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/constant.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/constant.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/create.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/create.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creator.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/creator.js");
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/select.js");



/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  return Object(_select_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name).call(document.documentElement));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/creator.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/creator.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespace.js");
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespaces.js");



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === _namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xhtml"] && document.documentElement.namespaceURI === _namespaces_js__WEBPACK_IMPORTED_MODULE_1__["xhtml"]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var fullname = Object(_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/index.js ***!
  \**************************************************************************************/
/*! exports provided: create, creator, local, matcher, namespace, namespaces, pointer, pointers, select, selectAll, selection, selector, selectorAll, style, window */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/create.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "create", function() { return _create_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creator.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/creator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return _creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "local", function() { return _local_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matcher.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/matcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return _matcher_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./namespace.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespace.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _namespace_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return _namespaces_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointer.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointer", function() { return _pointer_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _pointers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pointers.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pointers", function() { return _pointers_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _select_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return _selectAll_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return _selection_index_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./selector.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return _selector_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./selectorAll.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectorAll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return _selectorAll_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _selection_style_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selection/style.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "style", function() { return _selection_style_js__WEBPACK_IMPORTED_MODULE_13__["styleValue"]; });

/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./window.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "window", function() { return _window_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });


















/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/local.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/local.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return local; });
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/matcher.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/matcher.js ***!
  \****************************************************************************************/
/*! exports provided: default, childMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "childMatcher", function() { return childMatcher; });
/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return function() {
    return this.matches(selector);
  };
});

function childMatcher(selector) {
  return function(node) {
    return node.matches(selector);
  };
}



/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespace.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespace.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespaces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespaces.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespaces.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(prefix) ? {space: _namespaces_js__WEBPACK_IMPORTED_MODULE_0__["default"][prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespaces.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespaces.js ***!
  \*******************************************************************************************/
/*! exports provided: xhtml, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhtml", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["default"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointer.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/sourceEvent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(event, node) {
  event = Object(_sourceEvent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event);
  if (node === undefined) node = event.currentTarget;
  if (node) {
    var svg = node.ownerSVGElement || node;
    if (svg.createSVGPoint) {
      var point = svg.createSVGPoint();
      point.x = event.clientX, point.y = event.clientY;
      point = point.matrixTransform(node.getScreenCTM().inverse());
      return [point.x, point.y];
    }
    if (node.getBoundingClientRect) {
      var rect = node.getBoundingClientRect();
      return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
    }
  }
  return [event.pageX, event.pageY];
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointers.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointers.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointer.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/pointer.js");
/* harmony import */ var _sourceEvent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sourceEvent.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/sourceEvent.js");



/* harmony default export */ __webpack_exports__["default"] = (function(events, node) {
  if (events.target) { // i.e., instanceof Event, not TouchList or iterable
    events = Object(_sourceEvent_js__WEBPACK_IMPORTED_MODULE_1__["default"])(events);
    if (node === undefined) node = events.currentTarget;
    events = events.touches || [events];
  }
  return Array.from(events, event => Object(_pointer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(event, node));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/select.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/select.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[document.querySelector(selector)]], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"]([[selector]], _selection_index_js__WEBPACK_IMPORTED_MODULE_0__["root"]);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectAll.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectAll.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/array.js");
/* harmony import */ var _selection_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selection/index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return typeof selector === "string"
      ? new _selection_index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"]([document.querySelectorAll(selector)], [document.documentElement])
      : new _selection_index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"]([selector == null ? [] : Object(_array_js__WEBPACK_IMPORTED_MODULE_0__["default"])(selector)], _selection_index_js__WEBPACK_IMPORTED_MODULE_1__["root"]);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/append.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/append.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/creator.js");


/* harmony default export */ __webpack_exports__["default"] = (function(name) {
  var create = typeof name === "function" ? name : Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/attr.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/attr.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _namespace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../namespace.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/namespace.js");


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var fullname = Object(_namespace_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/call.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/call.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/classed.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/classed.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/clone.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/clone.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function selection_cloneShallow() {
  var clone = this.cloneNode(false), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

function selection_cloneDeep() {
  var clone = this.cloneNode(true), parent = this.parentNode;
  return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}

/* harmony default export */ __webpack_exports__["default"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/data.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/data.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enter.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../array.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/array.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/constant.js");





function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = new Map,
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
      if (nodeByKeyValue.has(keyValue)) {
        exit[i] = node;
      } else {
        nodeByKeyValue.set(keyValue, node);
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = key.call(parent, data[i], i, data) + "";
    if (node = nodeByKeyValue.get(keyValue)) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue.delete(keyValue);
    } else {
      enter[i] = new _enter_js__WEBPACK_IMPORTED_MODULE_1__["EnterNode"](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
      exit[i] = node;
    }
  }
}

function datum(node) {
  return node.__data__;
}

/* harmony default export */ __webpack_exports__["default"] = (function(value, key) {
  if (!arguments.length) return Array.from(this, datum);

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(_constant_js__WEBPACK_IMPORTED_MODULE_3__["default"])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = Object(_array_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value.call(parent, parent && parent.__data__, j, parents)),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/datum.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/datum.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/dispatch.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/dispatch.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/window.js");


function dispatchEvent(node, type, params) {
  var window = Object(_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/each.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/each.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/empty.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/empty.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return !this.node();
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/enter.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/enter.js ***!
  \************************************************************************************************/
/*! exports provided: default, EnterNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterNode", function() { return EnterNode; });
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._enter || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/exit.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/exit.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sparse.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sparse.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new _index_js__WEBPACK_IMPORTED_MODULE_1__["Selection"](this._exit || this._groups.map(_sparse_js__WEBPACK_IMPORTED_MODULE_0__["default"]), this._parents);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/filter.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/filter.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/matcher.js");



/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  if (typeof match !== "function") match = Object(_matcher_js__WEBPACK_IMPORTED_MODULE_1__["default"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/html.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/html.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js ***!
  \************************************************************************************************/
/*! exports provided: root, Selection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony import */ var _select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/select.js");
/* harmony import */ var _selectAll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectAll.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectAll.js");
/* harmony import */ var _selectChild_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectChild.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectChild.js");
/* harmony import */ var _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectChildren.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectChildren.js");
/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/filter.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/data.js");
/* harmony import */ var _enter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enter.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/enter.js");
/* harmony import */ var _exit_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exit.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/exit.js");
/* harmony import */ var _join_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/join.js");
/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./merge.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/merge.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./order.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/order.js");
/* harmony import */ var _sort_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sort.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sort.js");
/* harmony import */ var _call_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./call.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/call.js");
/* harmony import */ var _nodes_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nodes.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/nodes.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./node.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/node.js");
/* harmony import */ var _size_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./size.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/size.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./empty.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/empty.js");
/* harmony import */ var _each_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./each.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/each.js");
/* harmony import */ var _attr_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attr.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/attr.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./style.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/style.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./property.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/property.js");
/* harmony import */ var _classed_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./classed.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/classed.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./text.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/text.js");
/* harmony import */ var _html_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/html.js");
/* harmony import */ var _raise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./raise.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/raise.js");
/* harmony import */ var _lower_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./lower.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/lower.js");
/* harmony import */ var _append_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./append.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/append.js");
/* harmony import */ var _insert_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./insert.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/insert.js");
/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./remove.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/remove.js");
/* harmony import */ var _clone_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./clone.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/clone.js");
/* harmony import */ var _datum_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./datum.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/datum.js");
/* harmony import */ var _on_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./on.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/on.js");
/* harmony import */ var _dispatch_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./dispatch.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/dispatch.js");
/* harmony import */ var _iterator_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./iterator.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/iterator.js");



































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

function selection_selection() {
  return this;
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: _select_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  selectAll: _selectAll_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectChild: _selectChild_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  selectChildren: _selectChildren_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  filter: _filter_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  data: _data_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  enter: _enter_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  exit: _exit_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  join: _join_js__WEBPACK_IMPORTED_MODULE_8__["default"],
  merge: _merge_js__WEBPACK_IMPORTED_MODULE_9__["default"],
  selection: selection_selection,
  order: _order_js__WEBPACK_IMPORTED_MODULE_10__["default"],
  sort: _sort_js__WEBPACK_IMPORTED_MODULE_11__["default"],
  call: _call_js__WEBPACK_IMPORTED_MODULE_12__["default"],
  nodes: _nodes_js__WEBPACK_IMPORTED_MODULE_13__["default"],
  node: _node_js__WEBPACK_IMPORTED_MODULE_14__["default"],
  size: _size_js__WEBPACK_IMPORTED_MODULE_15__["default"],
  empty: _empty_js__WEBPACK_IMPORTED_MODULE_16__["default"],
  each: _each_js__WEBPACK_IMPORTED_MODULE_17__["default"],
  attr: _attr_js__WEBPACK_IMPORTED_MODULE_18__["default"],
  style: _style_js__WEBPACK_IMPORTED_MODULE_19__["default"],
  property: _property_js__WEBPACK_IMPORTED_MODULE_20__["default"],
  classed: _classed_js__WEBPACK_IMPORTED_MODULE_21__["default"],
  text: _text_js__WEBPACK_IMPORTED_MODULE_22__["default"],
  html: _html_js__WEBPACK_IMPORTED_MODULE_23__["default"],
  raise: _raise_js__WEBPACK_IMPORTED_MODULE_24__["default"],
  lower: _lower_js__WEBPACK_IMPORTED_MODULE_25__["default"],
  append: _append_js__WEBPACK_IMPORTED_MODULE_26__["default"],
  insert: _insert_js__WEBPACK_IMPORTED_MODULE_27__["default"],
  remove: _remove_js__WEBPACK_IMPORTED_MODULE_28__["default"],
  clone: _clone_js__WEBPACK_IMPORTED_MODULE_29__["default"],
  datum: _datum_js__WEBPACK_IMPORTED_MODULE_30__["default"],
  on: _on_js__WEBPACK_IMPORTED_MODULE_31__["default"],
  dispatch: _dispatch_js__WEBPACK_IMPORTED_MODULE_32__["default"],
  [Symbol.iterator]: _iterator_js__WEBPACK_IMPORTED_MODULE_33__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (selection);


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/insert.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/insert.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creator.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/creator.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selector.js");



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/iterator.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/iterator.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function*() {
  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) yield node;
    }
  }
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/join.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/join.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(onenter, onupdate, onexit) {
  var enter = this.enter(), update = this, exit = this.exit();
  enter = typeof onenter === "function" ? onenter(enter) : enter.append(onenter + "");
  if (onupdate != null) update = onupdate(update);
  if (onexit == null) exit.remove(); else onexit(exit);
  return enter && update ? enter.merge(update).order() : update;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/lower.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/lower.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(lower);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/merge.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/merge.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(selection) {
  if (!(selection instanceof _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"])) throw new Error("invalid merge");

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](merges, this._parents);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/node.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/node.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/nodes.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/nodes.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Array.from(this);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/on.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/on.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function contextListener(listener) {
  return function(event) {
    listener.call(this, event, this.__data__);
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, options) {
  return function() {
    var on = this.__on, o, listener = contextListener(value);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.options);
        this.addEventListener(o.type, o.listener = listener, o.options = options);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, options);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(typename, value, options) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
  return this;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/order.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/order.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/property.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/property.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/raise.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/raise.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(raise);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/remove.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/remove.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.each(remove);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/select.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/select.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _selector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selector.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selector.js");



/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select !== "function") select = Object(_selector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, this._parents);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectAll.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectAll.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../array.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/array.js");
/* harmony import */ var _selectorAll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectorAll.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectorAll.js");




function arrayAll(select) {
  return function() {
    var group = select.apply(this, arguments);
    return group == null ? [] : Object(_array_js__WEBPACK_IMPORTED_MODULE_1__["default"])(group);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(select) {
  if (typeof select === "function") select = arrayAll(select);
  else select = Object(_selectorAll_js__WEBPACK_IMPORTED_MODULE_2__["default"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](subgroups, parents);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectChild.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectChild.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/matcher.js");


var find = Array.prototype.find;

function childFind(match) {
  return function() {
    return find.call(this.children, match);
  };
}

function childFirst() {
  return this.firstElementChild;
}

/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  return this.select(match == null ? childFirst
      : childFind(typeof match === "function" ? match : Object(_matcher_js__WEBPACK_IMPORTED_MODULE_0__["childMatcher"])(match)));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectChildren.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/selectChildren.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matcher.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/matcher.js");


var filter = Array.prototype.filter;

function children() {
  return this.children;
}

function childrenFilter(match) {
  return function() {
    return filter.call(this.children, match);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(match) {
  return this.selectAll(match == null ? children
      : childrenFilter(typeof match === "function" ? match : Object(_matcher_js__WEBPACK_IMPORTED_MODULE_0__["childMatcher"])(match)));
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/size.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/size.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  let size = 0;
  for (const node of this) ++size; // eslint-disable-line no-unused-vars
  return size;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sort.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sort.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new _index_js__WEBPACK_IMPORTED_MODULE_0__["Selection"](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sparse.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/sparse.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(update) {
  return new Array(update.length);
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/style.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/style.js ***!
  \************************************************************************************************/
/*! exports provided: default, styleValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleValue", function() { return styleValue; });
/* harmony import */ var _window_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window.js */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/window.js");


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(_window_js__WEBPACK_IMPORTED_MODULE_0__["default"])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/text.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selection/text.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selector.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selector.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function none() {}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectorAll.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/selectorAll.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["default"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/sourceEvent.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/sourceEvent.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(event) {
  let sourceEvent;
  while (sourceEvent = event.sourceEvent) event = sourceEvent;
  return event;
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/window.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/window.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),

/***/ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/defaultLocale.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/defaultLocale.js ***!
  \**************************************************************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/index.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/index.js ***!
  \******************************************************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isoParse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _isoParse_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoFormat.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoFormat.js ***!
  \**********************************************************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoParse.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoParse.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat_js__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/locale.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time-format@3.0.0/node_modules/d3-time-format/src/locale.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d) - 1, d), p, 2);
}

function dISO(d) {
  var day = d.getDay();
  return (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
}

function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d) - 1, d), p, 2);
}

function UTCdISO(d) {
  var day = d.getUTCDay();
  return (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
}

function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/day.js":
/*!**************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/day.js ***!
  \**************************************************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var day = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(
  date => date.setHours(0, 0, 0, 0),
  (date, step) => date.setDate(date.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"],
  date => date.getDate() - 1
);

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js ***!
  \*******************************************************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/hour.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/hour.js ***!
  \***************************************************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var hour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"] - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/index.js ***!
  \****************************************************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _millisecond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecond.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minute.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _hour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcMinute.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _utcHour_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcHour.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _utcDay_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcDay.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcWeek.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utcMonth.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _utcYear_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utcYear.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/millisecond.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/millisecond.js ***!
  \**********************************************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/minute.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/minute.js ***!
  \*****************************************************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var minute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/month.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/month.js ***!
  \****************************************************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");


var month = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/second.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/second.js ***!
  \*****************************************************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var second = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcDay.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcDay.js ***!
  \*****************************************************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcHour.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcHour.js ***!
  \******************************************************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcMinute.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcMinute.js ***!
  \********************************************************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcMonth.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcMonth.js ***!
  \*******************************************************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcWeek.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcWeek.js ***!
  \******************************************************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcYear.js":
/*!******************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/utcYear.js ***!
  \******************************************************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/week.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/week.js ***!
  \***************************************************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/year.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/year.js ***!
  \***************************************************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/.pnpm/d3-time@2.0.0/node_modules/d3-time/src/interval.js");


var year = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/.pnpm/elastic-svg@0.1.0/node_modules/elastic-svg/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/.pnpm/elastic-svg@0.1.0/node_modules/elastic-svg/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return elasticSVG; });
// v0.0.8

function elasticSVG(selector, opts) {
	opts = opts || {};

	// containing DOM element, which defaults to body
	var parent = document.querySelectorAll(selector || "body");

	if (!parent || !parent.length) {
		console.log("Couldn't find a parent for elasticSVG making the selector '" + selector + "'");
		return;
	}

	parent = parent[0];

	// you can specify a width if you like, or we'll snap to size of container
	var base = {
		width: typeof opts.width !== "undefined" ? opts.width : parent.clientWidth,
		scale: 1
	};

	// we need to remember the original width for scaling purposes
	base.original_width = base.width;

	// you can either specify the height or the aspect ratio. If neither is specified, refaults to roughly the golden ratio
	// specifying the height keeps the svg at a standard height and only resizes the width
	// specifying the aspect ratio resizes both
    if (typeof opts.height !== "undefined") {
    	base.height = opts.height;
    	base.aspect = base.height / base.width;
    } else {
	    opts.aspect = typeof opts.aspect !== "undefined" ? opts.aspect : 0.618;
		base.height = base.width * opts.aspect;
    }

	// create a new SVG element
    var xmlns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(xmlns, "svg");
	svg.setAttributeNS(null, "width", base.width);
	svg.setAttributeNS(null, "height", base.height);
	parent.appendChild(svg);
	
	// setting resize to "auto" sets the viewport to the original width and height so that the SVG always scales
    if (opts.resize && opts.resize == "auto") {
		svg.setAttributeNS(null, "viewBox", "0 0 " + base.width + " " + base.height);
    }

	// function called when the window resizes		
	function resize() { 
		base.width = parent.clientWidth;
		svg.setAttributeNS(null, "width", base.width);

		// only resize the height if aspect was specified instead of height
		if (opts.aspect) {
		    base.height = base.width * opts.aspect;
			svg.setAttributeNS(null, "height", base.height);
		}

	    base.scale = base.width / base.original_width;

		// optional callback
		if (opts.onResize) {
			opts.onResize(base.width, base.height, base.scale, svg);
		}
	}

	window.addEventListener("resize", function() {
		resize();
	});

	resize(); // call this on load since sometimes the initial conditions are wider than container

	// methods
	base.setResize = function(f) {
		opts.onResize = f;
	}

	base.changeAspect = function(aspect) {
		opts.aspect = aspect;
		base.height = base.width * opts.aspect;
		svg.setAttributeNS(null, "height", base.height);
	}

	/*
	base.changeWidth = function(width) {
    	base.width = width;
    	if (opts.aspect) {
	    	opts.aspect = base.height / base.width;
	    } else {
	    	opts.width = width;
	    }
		svg.setAttributeNS(null, "width", base.width);
	}
	*/

	base.changeHeight = function(height) {
    	base.height = height;
    	if (opts.aspect) {
	    	opts.aspect = base.height / base.width;
	    } else {
	    	opts.height = height;
	    }
		svg.setAttributeNS(null, "height", base.height);
	}

	base.triggerResize = function() {
		resize();
	}

	base.svg = svg;
	return base;
}

/***/ }),

/***/ "./slider.js":
/*!*******************!*\
  !*** ./slider.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-selection */ "./node_modules/.pnpm/d3-selection@2.0.0/node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-array */ "./node_modules/.pnpm/d3-array@2.8.0/node_modules/d3-array/src/index.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/.pnpm/d3-scale@3.2.3/node_modules/d3-scale/src/index.js");
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-axis */ "./node_modules/.pnpm/d3-axis@2.0.0/node_modules/d3-axis/src/index.js");
/* harmony import */ var d3_drag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-drag */ "./node_modules/.pnpm/d3-drag@2.0.0/node_modules/d3-drag/src/index.js");
/* harmony import */ var elastic_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! elastic-svg */ "./node_modules/.pnpm/elastic-svg@0.1.0/node_modules/elastic-svg/index.js");







__webpack_require__(/*! ./slider.scss */ "./slider.scss");

var images = __webpack_require__(/*! ./img/images.json */ "./img/images.json");

function d3slider(container, myOpts) {
  var value, element; // current value of slider at all times
  // build slider

  if (!container) {
    console.log("You must supply slider a container as the first argument to d3slider.");
    return null;
  }

  element = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container).append("div").classed("d3slider", true); // var svg = element.append('svg');
  // svg
  // 	.attr('width', opts.width)
  // 	.attr('height', opts.height)

  var opts = {
    type: 'linear',
    // domain: [0, 1],
    // full_width: element.node().clientWidth,
    // full_height: element.node().clientHeight,
    margin: {
      left: 20,
      right: 20,
      top: 25,
      bottom: 0
    }
  }; // manual deep clone

  if (myOpts.hasOwnProperty("margin")) {
    Object.assign(opts.margin, myOpts.margin);
    delete myOpts.margin;
  }

  Object.assign(opts, myOpts);

  if (opts.playButton && myOpts.hasOwnProperty("margin") && myOpts.margin.hasOwnProperty("left")) {
    opts.margin.left += 40;
  }

  opts.height = opts.height || 60;
  var b = Object(elastic_svg__WEBPACK_IMPORTED_MODULE_5__["default"])(container + " .d3slider", {
    height: opts.height
  });
  var svg = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(b.svg);
  opts.domain = opts.domain || [0, 100];
  opts.tickInterval = opts.tickInterval || 10;
  opts.thumbnailStyle = opts.thumbnailStyle || "circle"; // default to 25 steps if not specified

  opts.playInterval = opts.playInterval || (opts.interval ? opts.interval : (opts.domain[1] - opts.domain[0]) / 20);
  opts.startValue = opts.startValue || opts.domain[0];
  opts.value = opts.hasOwnProperty("value") ? opts.value : opts.domain[0];
  opts.speed = opts.speed || 1000;
  opts.loop = typeof opts.loop == "undefined" ? true : opts.loop;
  opts.locked = opts.locked || false;
  opts.color = opts.color || "#CC0000";
  opts.snapToTick = opts.snapToTick || false;
  opts.buttonColor = opts.buttonColor ? opts.buttonColor : "gray";
  opts.size = opts.size || 12;

  if (opts.buttonColor == "white") {
    images.play = images.play_white;
    images.stop = images.stop_white;
  } else if (opts.buttonColor == "hollow") {
    images.play = images.play_hollow;
    images.stop = images.pause_hollow;
  } else {
    images.play = images.play_gray;
    images.stop = images.stop_gray;
  }

  if (opts.textBox) {
    opts.margin.top += 20;
    opts.height += 20;
  }

  if (opts.locked) {
    element.classed("locked", true);
  }

  value = opts.value; // put something in here so that we don't collapse to an 0x0 div
  // element.html("&nbsp;");

  opts.width = opts.width || element.node().offsetWidth; //parseInt(element.style('width'), 10);
  // element.html("");

  if (opts.playButton) {
    var controls = element.append("div").attr("id", "control-panel");
    controls.append("img").attr("id", "playButton").attr("class", "playButton").attr("src", images.play);
  }

  var data_layer = svg.append("g").attr("class", "data_layer").attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");
  var axes_layer = svg.append("g").attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");
  var thumb_layer = svg.append("g").attr("class", "thumbnail_layer").attr("transform", "translate(" + opts.margin.left + "," + opts.margin.top + ")");
  var xAxis = axes_layer.append("g").attr("class", "slider-axis");
  var xScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().domain(opts.domain); // Make adjustments to range and position of axis if play button

  xScale.range([0, opts.width - opts.margin.right - opts.margin.left]); // axis

  var x = Object(d3_axis__WEBPACK_IMPORTED_MODULE_3__["axisBottom"])().scale(xScale);
  var ticks = opts.tickValues || Object(d3_array__WEBPACK_IMPORTED_MODULE_1__["range"])(opts.domain[0], opts.domain[1] + 1, opts.tickInterval);
  x.tickValues(ticks);
  x.tickSize(opts.hasOwnProperty("tickSize") ? opts.tickSize : 12, 0);
  x.ticks(3);
  x.tickFormat(function (d, i) {
    return opts.tickFormat ? opts.tickFormat(d) : d;
  });
  xAxis.call(x); // see below

  var previous_snap = null; // fire when we've moved the thumbnail

  function clickedOrDragged(e) {
    if (opts.locked) {
      return;
    }

    var coords = Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["pointer"])(e, svg.select(".domain").node()); // console.log(e);

    if (!coords[0] && !coords[1]) {
      // console.log("Falling back on event");
      coords = [e.x, e.y];
    }

    ;
    var dx = Math.min(x.scale().range()[1], Math.max(x.scale().range()[0], coords[0]));
    value = x.scale().invert(dx); // if snapToTick, round the value to the nearest tick

    if (opts.snapToTick) {
      var distance = Infinity,
          tick = null;

      for (var t = 0; t < ticks.length; t += 1) {
        var d = Math.abs(value - ticks[t]);

        if (d < distance) {
          distance = d;
          tick = ticks[t];
        }
      }

      value = tick;
      var snap = xScale(value);
    } else {
      // round the value to the nearest interval
      value = opts.playInterval ? Math.max(opts.domain[0], Math.round(value / opts.playInterval) * opts.playInterval) : Math.max(opts.domain[0], value);
      var snap = xScale(value);
    }

    if (opts.textBox) {
      element.select(".arrow_box_container").style("left", opts.margin.left + xScale(value) + (opts.playButton ? 0 : 0) + "px");
      element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : opts.format ? opts.format(value) : value);
    } // we only want to fire the callback if we're moving to a new tick


    if (snap !== previous_snap) {
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
      opts.onDrag && opts.onDrag(value, true);
      previous_snap = snap;
    }

    if (value && value >= opts.domain[1]) {
      if (opts.onFinish) {
        opts.onFinish();
      }
    } // cancel playing when manually moved


    if (_playing) {
      _playing = false;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.play);
      clearTimeout(timer);

      if (opts.onStop) {
        opts.onStop();
      }
    }
  } // events


  var dragged = Object(d3_drag__WEBPACK_IMPORTED_MODULE_4__["drag"])().on("drag", function (e, d) {
    clickedOrDragged(e);
  });
  var thumb = thumb_layer.append("g").attr("class", "thumb").attr("id", "thumb").attr("transform", "translate(" + x.scale().range()[0] + ",0)");

  if (opts.thumbnailStyle == "bar") {
    thumb.append("line").attr("x1", 1).attr("x2", 1).attr("y1", 0).attr("y2", -opts.height + 40);
    thumb.append("image").attr("href", images.handle).attr("width", 27).attr("height", 37).attr("x", -13).attr("y", -opts.height + 22);
  } else {
    thumb.append("circle").attr("r", opts.size).attr("cx", 0).attr("cy", 0).style("fill", opts.color);
  }

  if (opts.textBox) {
    element.append("div").attr("class", "arrow_box_container").style("left", opts.margin.left + xScale(opts.value) + (opts.playButton ? 0 : 0) + "px").style("top", opts.margin.top - 40 + "px").append("div").attr("class", "arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(opts.value) : opts.format ? opts.format(opts.value) : opts.value);
  }

  Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(opts.value) + ",0)");
  thumb.call(dragged);

  function resize() {
    opts.width = parseInt(svg.style('width'), 10) - opts.margin.right - opts.margin.left; // Update scale

    xScale.range([0, opts.width]);
    x.scale(xScale);
    x.ticks(opts.width < 500 ? 3 : 10);
    xAxis.call(x); // svg.attr("width", opts.width);

    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");

    if (opts.textBox) {
      element.select(".arrow_box_container").style("left", opts.margin.left + xScale(value) + (opts.playButton ? 0 : 0) + "px"); // element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : (opts.format? opts.format(value) : value));
    } // optional callback


    if (opts.onResize) {
      opts.onResize(opts.width);
    }
  }

  var resizeTimer,
      uid = s5(); // needed for namespacing the resize event
  // http://stackoverflow.com/questions/3339825/what-is-the-best-practise-to-not-to-override-other-bound-functions-to-window-onr

  function addResizeEvent(func, dur) {
    var resizeTimer;
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(window).on("resize." + uid, function () {
      clearTimeout(resizeTimer);

      if (typeof oldResize === 'function') {
        oldResize();
      }

      resizeTimer = setTimeout(function () {
        func();
      }, dur || 250);
    });
  }

  addResizeEvent(resize, 100); // play button controls

  var timer,
      _playing = false;

  function set(v, update) {
    // bound input to domain
    value = Math.max(Math.min(v, opts.domain[1]), opts.domain[0]);
    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");

    if (opts.textBox) {
      element.select(".arrow_box_container").style("left", opts.margin.left + xScale(value) + (opts.playButton ? 0 : 0) + "px");
      element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : opts.format ? opts.format(value) : value);
    }

    if (update !== false) {
      opts.onDrag && opts.onDrag(value, false);
    }
  }

  function get() {
    return value;
  }

  function advance() {
    value += opts.playInterval;
    value = Math.round(value / opts.playInterval) * opts.playInterval;

    if (opts.snapToTick) {
      var distance = Infinity,
          tick = null;

      for (var t = 0; t < ticks.length; t += 1) {
        var d = Math.abs(value - ticks[t]);

        if (d < distance && value <= ticks[t]) {
          distance = d;
          tick = ticks[t];
        }
      }

      if (!tick) {
        value = ticks[0] - opts.playInterval;
        advance();
        return;
      }

      value = tick;
    }

    if (value == opts.domain[1] && !opts.loop) {
      _playing = false;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.play);
      clearTimeout(timer);
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");

      if (opts.textBox) {
        element.select(".arrow_box_container").style("left", opts.margin.left + xScale(value) + (opts.playButton ? 0 : 0) + "px");
        element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : opts.format ? opts.format(value) : value);
      } // select(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");


      opts.onDrag && opts.onDrag(value, false);

      if (opts.onFinish) {
        opts.onFinish();
      }

      return;
    } else if (value > opts.domain[1] && opts.loop) {
      value = opts.domain[0] - opts.playInterval;
      advance();
      return;
    }

    if (opts.textBox) {
      element.select(".arrow_box_container").style("left", opts.margin.left + xScale(value) + (opts.playButton ? 0 : 0) + "px");
      element.select(".arrow_box").html(opts.textBoxFormat ? opts.textBoxFormat(value) : opts.format ? opts.format(value) : value);
    }

    Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " div.d3slider > svg > .thumbnail_layer > #thumb").attr("transform", "translate(" + xScale(value) + ",0)");
    opts.onDrag && opts.onDrag(value, false);
  }

  Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").on("click", function (e) {
    if (opts.locked) {
      return;
    }

    if (value >= opts.domain[1]) {
      value = opts.domain[0] - opts.playInterval;
    }

    if (!_playing) {
      _playing = true;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.stop);
      advance();
      timer = setInterval(function () {
        advance();
      }, opts.speed);

      if (opts.onStart) {
        opts.onStart();
      }
    } else {
      _playing = false;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.play);
      clearTimeout(timer);

      if (opts.onStop) {
        opts.onStop();
      }
    }

    console.log(e);
    e.stopPropagation(); // otherwise clicking the play button triggers the following handler and resets the value to the min
  });
  element.on("click", function (e, d) {
    clickedOrDragged(e);
  });
  return {
    options: opts,
    height: opts.height,
    width: opts.width,
    axes_layer: axes_layer,
    data_layer: data_layer,
    scale: xScale,
    axis: x,
    // advance: advance,
    domain: opts.domain,
    setValue: set,
    getValue: get,
    resize: resize,
    playing: function playing() {
      return _playing;
    },
    start: function start(startValue) {
      _playing = true;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.stop);

      if (startValue) {
        set(startValue);
      } // advance();


      timer = setInterval(function () {
        advance();
      }, opts.speed);

      if (opts.onStart) {
        opts.onStart();
      }
    },
    stop: function stop() {
      _playing = false;
      Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.play);
      clearTimeout(timer);

      if (opts.onStop) {
        opts.onStop();
      }
    },
    lock: function lock() {
      opts.locked = true;
      element.classed("locked", true);
    },
    unlock: function unlock() {
      opts.locked = false;
      element.classed("locked", false);
    },
    setButtonColor: function setButtonColor(color) {
      if (color == "white") {
        images.play = images.play_white;
        images.stop = images.stop_white;
      } else if (color == "hollow") {
        images.play = images.play_hollow;
        images.stop = images.pause_hollow;
      } else {
        images.play = images.play_gray;
        images.stop = images.stop_gray;
      }

      if (opts.playButton && _playing) {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.stop);
      } else {
        Object(d3_selection__WEBPACK_IMPORTED_MODULE_0__["select"])(container + " #playButton").attr("src", images.play);
      }
    }
  };
}

function s5() {
  return Math.floor((1 + Math.random()) * 0x100000).toString(16).substring(1);
}

/* harmony default export */ __webpack_exports__["default"] = (d3slider);

/***/ }),

/***/ "./slider.scss":
/*!*********************!*\
  !*** ./slider.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/postcss-loader/dist/cjs.js??ref--7-3!./slider.scss */ "../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/css-loader/dist/cjs.js?!../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/sass-loader/dist/cjs.js!../../../../../../../../.npm-global/lib/node_modules/bundle-module/node_modules/postcss-loader/dist/cjs.js?!./slider.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })["default"];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kM3NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL3NsaWRlci5zY3NzIiwid2VicGFjazovL2Qzc2xpZGVyLy9Vc2Vycy9jaHJpc3dpbHNvbi8ubnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8vVXNlcnMvY2hyaXN3aWxzb24vLm5wbS1nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9idW5kbGUtbW9kdWxlL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2FycmF5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYXNjZW5kaW5nLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmluLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvYmlzZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2NvdW50LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvY3Jvc3MuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9jdW1zdW0uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9kZXNjZW5kaW5nLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZGV2aWF0aW9uLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZGlmZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2Rpc2pvaW50LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZXZlcnkuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9leHRlbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9mc3VtLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZ3JlYXRlc3QuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9ncmVhdGVzdEluZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbGVhc3QuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9sZWFzdEluZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWFwLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWF4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWF4SW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9tZWFuLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVkaWFuLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvbWVyZ2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW4uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9taW5JbmRleC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL25pY2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9wYWlycy5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3Blcm11dGUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9xdWFudGlsZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3F1aWNrc2VsZWN0LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9yZXZlcnNlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc2Nhbi5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3NldC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3NodWZmbGUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy9zb21lLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvc29ydC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3N1YnNldC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3N1bS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3N1cGVyc2V0LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdGhyZXNob2xkL2ZyZWVkbWFuRGlhY29uaXMuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvc2NvdHQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy90aHJlc2hvbGQvc3R1cmdlcy5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3RpY2tzLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdHJhbnNwb3NlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWFycmF5QDIuOC4wL25vZGVfbW9kdWxlcy9kMy1hcnJheS9zcmMvdW5pb24uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtYXJyYXlAMi44LjAvbm9kZV9tb2R1bGVzL2QzLWFycmF5L3NyYy92YXJpYW5jZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1hcnJheUAyLjguMC9ub2RlX21vZHVsZXMvZDMtYXJyYXkvc3JjL3ppcC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1heGlzQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1heGlzL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1heGlzQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1heGlzL3NyYy9heGlzLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWF4aXNAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWF4aXNAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWF4aXMvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWNvbG9yQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1jb2xvci9zcmMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtY29sb3JAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtY29sb3JAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtY29sb3JAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWNvbG9yL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1jb2xvckAyLjAuMC9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL2xhYi5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1jb2xvckAyLjAuMC9ub2RlX21vZHVsZXMvZDMtY29sb3Ivc3JjL21hdGguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZGlzcGF0Y2hAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWRpc3BhdGNoL3NyYy9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1kaXNwYXRjaEAyLjAuMC9ub2RlX21vZHVsZXMvZDMtZGlzcGF0Y2gvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWRyYWdAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL2NvbnN0YW50LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWRyYWdAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL2RyYWcuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZHJhZ0AyLjAuMC9ub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZHJhZ0AyLjAuMC9ub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZHJhZ0AyLjAuMC9ub2RlX21vZHVsZXMvZDMtZHJhZy9zcmMvbm9kcmFnLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWRyYWdAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWRyYWcvc3JjL25vZXZlbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDIuMC4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2RlZmF1bHRMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDIuMC4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2V4cG9uZW50LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAyLjAuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXREZWNpbWFsLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAyLjAuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9mb3JtYXRHcm91cC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0TnVtZXJhbHMuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDIuMC4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFByZWZpeEF1dG8uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDIuMC4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFJvdW5kZWQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDIuMC4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2Zvcm1hdFNwZWNpZmllci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0VHJpbS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvZm9ybWF0VHlwZXMuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtZm9ybWF0QDIuMC4wL25vZGVfbW9kdWxlcy9kMy1mb3JtYXQvc3JjL2lkZW50aXR5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAyLjAuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAyLjAuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25GaXhlZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1mb3JtYXRAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLWZvcm1hdC9zcmMvcHJlY2lzaW9uUHJlZml4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWZvcm1hdEAyLjAuMC9ub2RlX21vZHVsZXMvZDMtZm9ybWF0L3NyYy9wcmVjaXNpb25Sb3VuZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2FycmF5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDIuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvYmFzaXMuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9iYXNpc0Nsb3NlZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2NvbG9yLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDIuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9jdWJlaGVsaXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9kYXRlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDIuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvZGlzY3JldGUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oY2wuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9oc2wuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9odWUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL2xhYi5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL251bWJlckFycmF5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDIuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvb2JqZWN0LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDIuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcGllY2V3aXNlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLWludGVycG9sYXRlQDIuMC4xL25vZGVfbW9kdWxlcy9kMy1pbnRlcnBvbGF0ZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yZ2IuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy9yb3VuZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3RyYW5zZm9ybS9kZWNvbXBvc2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy90cmFuc2Zvcm0vcGFyc2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtaW50ZXJwb2xhdGVAMi4wLjEvbm9kZV9tb2R1bGVzL2QzLWludGVycG9sYXRlL3NyYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1pbnRlcnBvbGF0ZUAyLjAuMS9ub2RlX21vZHVsZXMvZDMtaW50ZXJwb2xhdGUvc3JjL3pvb20uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9iYW5kLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9jb250aW51b3VzLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvZGl2ZXJnaW5nLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zY2FsZUAzLjIuMy9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9saW5lYXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9sb2cuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9uaWNlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvbnVtYmVyLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvb3JkaW5hbC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zY2FsZUAzLjIuMy9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3Bvdy5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zY2FsZUAzLjIuMy9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3F1YW50aWxlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvcXVhbnRpemUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9yYWRpYWwuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy9zZXF1ZW50aWFsLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvc2VxdWVudGlhbFF1YW50aWxlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvc3ltbG9nLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGhyZXNob2xkLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNjYWxlQDMuMi4zL25vZGVfbW9kdWxlcy9kMy1zY2FsZS9zcmMvdGlja0Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zY2FsZUAzLjIuMy9ub2RlX21vZHVsZXMvZDMtc2NhbGUvc3JjL3RpbWUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2NhbGVAMy4yLjMvbm9kZV9tb2R1bGVzL2QzLXNjYWxlL3NyYy91dGNUaW1lLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9hcnJheS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY29uc3RhbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL2xvY2FsLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9tYXRjaGVyLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL25hbWVzcGFjZXMuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3BvaW50ZXJzLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdEFsbC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2FwcGVuZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2F0dHIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9jYWxsLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2Nsb25lLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGF0YS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2RhdHVtLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZGlzcGF0Y2guanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lYWNoLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vZW1wdHkuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9lbnRlci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2V4aXQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9odG1sLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pbnNlcnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL2pvaW4uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9sb3dlci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL21lcmdlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vbm9kZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL25vZGVzLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vb24uanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9vcmRlci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vcmFpc2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9yZW1vdmUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RBbGwuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zZWxlY3RDaGlsZC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NlbGVjdENoaWxkcmVuLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3Rpb24vc2l6ZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3NvcnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zcGFyc2UuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdGlvbi9zdHlsZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc2VsZWN0aW9uL3RleHQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3NlbGVjdG9yLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXNlbGVjdGlvbkAyLjAuMC9ub2RlX21vZHVsZXMvZDMtc2VsZWN0aW9uL3NyYy9zZWxlY3RvckFsbC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy1zZWxlY3Rpb25AMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXNlbGVjdGlvbi9zcmMvc291cmNlRXZlbnQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtc2VsZWN0aW9uQDIuMC4wL25vZGVfbW9kdWxlcy9kMy1zZWxlY3Rpb24vc3JjL3dpbmRvdy5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lLWZvcm1hdEAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvc3JjL2RlZmF1bHRMb2NhbGUuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdGltZS1mb3JtYXRAMy4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUtZm9ybWF0L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lLWZvcm1hdEAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvc3JjL2lzb0Zvcm1hdC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lLWZvcm1hdEAzLjAuMC9ub2RlX21vZHVsZXMvZDMtdGltZS1mb3JtYXQvc3JjL2lzb1BhcnNlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWUtZm9ybWF0QDMuMC4wL25vZGVfbW9kdWxlcy9kMy10aW1lLWZvcm1hdC9zcmMvbG9jYWxlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2RheS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lQDIuMC4wL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9kdXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lQDIuMC4wL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9ob3VyLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL2ludGVydmFsLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL21pbGxpc2Vjb25kLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL21pbnV0ZS5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lQDIuMC4wL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9tb250aC5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lQDIuMC4wL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy9zZWNvbmQuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdGltZUAyLjAuMC9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvdXRjRGF5LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y0hvdXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdGltZUAyLjAuMC9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvdXRjTWludXRlLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y01vbnRoLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3V0Y1dlZWsuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZDMtdGltZUAyLjAuMC9ub2RlX21vZHVsZXMvZDMtdGltZS9zcmMvdXRjWWVhci5qcyIsIndlYnBhY2s6Ly9kM3NsaWRlci8uL25vZGVfbW9kdWxlcy8ucG5wbS9kMy10aW1lQDIuMC4wL25vZGVfbW9kdWxlcy9kMy10aW1lL3NyYy93ZWVrLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2QzLXRpbWVAMi4wLjAvbm9kZV9tb2R1bGVzL2QzLXRpbWUvc3JjL3llYXIuanMiLCJ3ZWJwYWNrOi8vZDNzbGlkZXIvLi9ub2RlX21vZHVsZXMvLnBucG0vZWxhc3RpYy1zdmdAMC4xLjAvbm9kZV9tb2R1bGVzL2VsYXN0aWMtc3ZnL2luZGV4LmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vc2xpZGVyLmpzIiwid2VicGFjazovL2Qzc2xpZGVyLy4vc2xpZGVyLnNjc3M/ZGE0YiJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiaW1hZ2VzIiwiZDNzbGlkZXIiLCJjb250YWluZXIiLCJteU9wdHMiLCJ2YWx1ZSIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0IiwiYXBwZW5kIiwiY2xhc3NlZCIsIm9wdHMiLCJ0eXBlIiwibWFyZ2luIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJhc3NpZ24iLCJwbGF5QnV0dG9uIiwiaGVpZ2h0IiwiYiIsImVsYXN0aWNTVkciLCJzdmciLCJkb21haW4iLCJ0aWNrSW50ZXJ2YWwiLCJ0aHVtYm5haWxTdHlsZSIsInBsYXlJbnRlcnZhbCIsImludGVydmFsIiwic3RhcnRWYWx1ZSIsInNwZWVkIiwibG9vcCIsImxvY2tlZCIsImNvbG9yIiwic25hcFRvVGljayIsImJ1dHRvbkNvbG9yIiwic2l6ZSIsInBsYXkiLCJwbGF5X3doaXRlIiwic3RvcCIsInN0b3Bfd2hpdGUiLCJwbGF5X2hvbGxvdyIsInBhdXNlX2hvbGxvdyIsInBsYXlfZ3JheSIsInN0b3BfZ3JheSIsInRleHRCb3giLCJ3aWR0aCIsIm5vZGUiLCJvZmZzZXRXaWR0aCIsImNvbnRyb2xzIiwiYXR0ciIsImRhdGFfbGF5ZXIiLCJheGVzX2xheWVyIiwidGh1bWJfbGF5ZXIiLCJ4QXhpcyIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJ4IiwiYXhpc0JvdHRvbSIsInNjYWxlIiwidGlja3MiLCJ0aWNrVmFsdWVzIiwidGlja1NpemUiLCJ0aWNrRm9ybWF0IiwiZCIsImkiLCJjYWxsIiwicHJldmlvdXNfc25hcCIsImNsaWNrZWRPckRyYWdnZWQiLCJlIiwiY29vcmRzIiwicG9pbnRlciIsInkiLCJkeCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJpbnZlcnQiLCJkaXN0YW5jZSIsIkluZmluaXR5IiwidGljayIsInQiLCJsZW5ndGgiLCJhYnMiLCJzbmFwIiwicm91bmQiLCJzdHlsZSIsImh0bWwiLCJ0ZXh0Qm94Rm9ybWF0IiwiZm9ybWF0Iiwib25EcmFnIiwib25GaW5pc2giLCJwbGF5aW5nIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJvblN0b3AiLCJkcmFnZ2VkIiwiZHJhZyIsIm9uIiwidGh1bWIiLCJoYW5kbGUiLCJyZXNpemUiLCJwYXJzZUludCIsIm9uUmVzaXplIiwicmVzaXplVGltZXIiLCJ1aWQiLCJzNSIsImFkZFJlc2l6ZUV2ZW50IiwiZnVuYyIsImR1ciIsIndpbmRvdyIsIm9sZFJlc2l6ZSIsInNldFRpbWVvdXQiLCJzZXQiLCJ2IiwidXBkYXRlIiwiZ2V0IiwiYWR2YW5jZSIsInNldEludGVydmFsIiwib25TdGFydCIsInN0b3BQcm9wYWdhdGlvbiIsIm9wdGlvbnMiLCJheGlzIiwic2V0VmFsdWUiLCJnZXRWYWx1ZSIsInN0YXJ0IiwibG9jayIsInVubG9jayIsInNldEJ1dHRvbkNvbG9yIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInN1YnN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDaERBO0FBQWU7QUFDZjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Ozs7Ozs7QUNGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUttQjs7Ozs7Ozs7Ozs7OztBQ0xuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDOztBQUVwQzs7QUFFQTtBQUNBOztBQUVQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpREFBUyxjQUFjLHlEQUFTO0FBQ3hFLGlCQUFpQiw4Q0FBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx3Q0FBd0Msa0RBQVUs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QUksUUFBYixFQUF1QjtBQUM3Qm5DLGNBQU0sQ0FBQ3VDLElBQVAsR0FBY3ZDLE1BQU0sQ0FBQzJDLFdBQXJCO0FBQ0EzQyxjQUFNLENBQUN5QyxJQUFQLEdBQWN6QyxNQUFNLENBQUM0QyxZQUFyQjtBQUNBLE9BSE0sTUFHQTtBQUNONUMsY0FBTSxDQUFDdUMsSUFBUCxHQUFjdkMsTUFBTSxDQUFDNkMsU0FBckI7QUFDQTdDLGNBQU0sQ0FBQ3lDLElBQVAsR0FBY3pDLE1BQU0sQ0FBQzhDLFNBQXJCO0FBQ0E7O0FBRUQsVUFBSW5DLElBQUksQ0FBQ1UsVUFBTCxJQUFtQjBFLFFBQXZCLEVBQWdDO0FBQy9CdkYsbUVBQU0sQ0FBQ04sU0FBUyxHQUFHLGNBQWIsQ0FBTixDQUFtQ2tELElBQW5DLENBQXdDLEtBQXhDLEVBQStDcEQsTUFBTSxDQUFDeUMsSUFBdEQ7QUFDQSxPQUZELE1BRU87QUFDTmpDLG1FQUFNLENBQUNOLFNBQVMsR0FBRyxjQUFiLENBQU4sQ0FBbUNrRCxJQUFuQyxDQUF3QyxLQUF4QyxFQUErQ3BELE1BQU0sQ0FBQ3VDLElBQXREO0FBQ0E7QUFDRDtBQWhFSyxHQUFQO0FBa0VBOztBQUVELFNBQVNzRSxFQUFULEdBQWM7QUFDYixTQUFPaEMsSUFBSSxDQUFDdUQsS0FBTCxDQUFXLENBQUMsSUFBSXZELElBQUksQ0FBQ3dELE1BQUwsRUFBTCxJQUFzQixRQUFqQyxFQUNMQyxRQURLLENBQ0ksRUFESixFQUVMQyxTQUZLLENBRUssQ0FGTCxDQUFQO0FBR0E7O0FBRWN0SSx1RUFBZixFOzs7Ozs7Ozs7OztBQ3hlQSxVQUFVLG1CQUFPLENBQUMsb1JBQXdJO0FBQzFKLDBCQUEwQixtQkFBTyxDQUFDLCtxQkFBK1Y7O0FBRWpZOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImQzc2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zbGlkZXIuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmQzc2xpZGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmQzc2xpZGVyICNjb250cm9sLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5kM3NsaWRlciAjY29udHJvbC1wYW5lbCAucGxheUJ1dHRvbiB7XFxuICB3aWR0aDogNDBweDtcXG59XFxuLmQzc2xpZGVyIHN2ZyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5kM3NsaWRlciAjc2xpZGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNThweDtcXG4gIC8qIFNhZmFyaSAqL1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xcbn1cXG4uZDNzbGlkZXIgLnNsaWRlci1heGlzIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5kM3NsaWRlciAuc2xpZGVyLWF4aXMgbGluZSxcXG4uZDNzbGlkZXIgLnNsaWRlci1heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzc3O1xcbiAgZmlsbDogbm9uZTtcXG59XFxuLmQzc2xpZGVyIC5zbGlkZXItYXhpcyAuZG9tYWluIHtcXG4gIHN0cm9rZS13aWR0aDogMXB4O1xcbiAgc3Ryb2tlOiAjODA4MDgwO1xcbn1cXG4uZDNzbGlkZXIgLnNsaWRlci1heGlzIC50aWNrIGxpbmUge1xcbiAgc3Ryb2tlOiAjMzMzO1xcbn1cXG4uZDNzbGlkZXIgLnNsaWRlci1heGlzIC50aWNrIHRleHQge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZDNzbGlkZXIgLnRodW1iIGxpbmUge1xcbiAgZmlsbDogIzMzMztcXG4gIHN0cm9rZTogIzMzMztcXG4gIHN0cm9rZS13aWR0aDogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZDNzbGlkZXIgLnRodW1iIGltYWdlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmQzc2xpZGVyICN0aHVtYi10ZXh0IHtcXG4gIGZpbGw6ICNENzUwNEY7XFxufVxcbi5kM3NsaWRlciAuYXhpcyBwYXRoLFxcbi5kM3NsaWRlciAuYXhpcyBsaW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMwMDA7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufVxcbi5kM3NsaWRlciAuYXhpcyBwYXRoIHRleHQubGFiZWwsXFxuLmQzc2xpZGVyIC5heGlzIGxpbmUgdGV4dC5sYWJlbCB7XFxuICBmaWxsOiAjZmZmO1xcbn1cXG4uZDNzbGlkZXIgLmF4aXMgcGF0aCAubGluZSxcXG4uZDNzbGlkZXIgLmF4aXMgbGluZSAubGluZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBzdGVlbGJsdWU7XFxuICBzdHJva2Utd2lkdGg6IDNweDtcXG59XFxuLmQzc2xpZGVyIC5hcnJvd19ib3hfY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmQzc2xpZGVyIC5hcnJvd19ib3gge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogLTUwJTtcXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uZDNzbGlkZXIgLmFycm93X2JveDphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiA1MCU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMwMDAwMDA7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xcbn1cXG5cXG4uZDNzbGlkZXIubG9ja2VkIHtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NsaWRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQ0o7QUFDSTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtBQUVaO0FBRUk7RUFDSSxxQkFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQURSO0FBSUc7RUFDSyxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0ksaUJBQUE7QUFGWjtBQUdROztFQUVJLFlBQUE7RUFDQSxVQUFBO0FBRFo7QUFJUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUZaO0FBS1E7RUFDSSxZQUFBO0FBSFo7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQVNLO0VBQ08sVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQWjtBQVVRO0VBQ0MsZUFBQTtBQVJUO0FBWUk7RUFDSSxhQUFBO0FBVlI7QUFhSTs7RUFFSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBWFI7QUFZUTs7RUFDSSxVQUFBO0FBVFo7QUFXUTs7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQVJaO0FBWUk7RUFDSSxrQkFBQTtBQVZSO0FBYUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBWFI7QUFjSTtFQUNJLFNBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFaUjs7QUFnQkE7RUFDQyxZQUFBO0FBYkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmQzc2xpZGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuXFxuICAgICNjb250cm9sLXBhbmVsIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgICAgICAucGxheUJ1dHRvbiB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgc3ZnIHtcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgfVxcbiBcXG4gICAgI3NsaWRlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBoZWlnaHQ6IDU4cHg7XFxuICAgICAgICAvKiBTYWZhcmkgKi9cXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjVzO1xcbiAgICB9XFxuIFxcbiAgIC5zbGlkZXItYXhpcyB7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgIGxpbmUsXFxuICAgICAgICBwYXRoIHtcXG4gICAgICAgICAgICBzdHJva2U6ICM3Nzc7XFxuICAgICAgICAgICAgZmlsbDogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kb21haW4ge1xcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMXB4O1xcbiAgICAgICAgICAgIHN0cm9rZTogIzgwODA4MDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50aWNrIGxpbmUge1xcbiAgICAgICAgICAgIHN0cm9rZTogIzMzMztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50aWNrIHRleHQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAudGh1bWIge1xcbiAgICBcXHRsaW5lIHtcXG4gICAgICAgICAgICBmaWxsOiAjMzMzO1xcbiAgICAgICAgICAgIHN0cm9rZTogIzMzMztcXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDJweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBpbWFnZSB7XFxuICAgICAgICBcXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH0gICAgXFxuIFxcbiAgICAjdGh1bWItdGV4dCB7XFxuICAgICAgICBmaWxsOiAjRDc1MDRGO1xcbiAgICB9XFxuIFxcbiAgICAuYXhpcyBwYXRoLFxcbiAgICAuYXhpcyBsaW5lIHtcXG4gICAgICAgIGZpbGw6IG5vbmU7XFxuICAgICAgICBzdHJva2U6ICMwMDA7XFxuICAgICAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxuICAgICAgICB0ZXh0LmxhYmVsIHtcXG4gICAgICAgICAgICBmaWxsOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICAgICAgLmxpbmUge1xcbiAgICAgICAgICAgIGZpbGw6IG5vbmU7XFxuICAgICAgICAgICAgc3Ryb2tlOiBzdGVlbGJsdWU7XFxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAzcHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFycm93X2JveF9jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB9XFxuXFxuICAgIC5hcnJvd19ib3gge1xcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogLTUwJTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB9XFxuXFxuICAgIC5hcnJvd19ib3g6YWZ0ZXIge1xcbiAgICAgICAgdG9wOiAxMDAlO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gICAgICAgIGhlaWdodDogMDtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICBib3JkZXItdG9wLWNvbG9yOiAjMDAwMDAwO1xcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcXG4gICAgfSAgICBcXG59XFxuXFxuLmQzc2xpZGVyLmxvY2tlZCB7XFxuXFx0b3BhY2l0eTogMC41O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwidmFyIGFycmF5ID0gQXJyYXkucHJvdG90eXBlO1xuXG5leHBvcnQgdmFyIHNsaWNlID0gYXJyYXkuc2xpY2U7XG5leHBvcnQgdmFyIG1hcCA9IGFycmF5Lm1hcDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgPCBiID8gLTEgOiBhID4gYiA/IDEgOiBhID49IGIgPyAwIDogTmFOO1xufVxuIiwiaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBiaXNlY3QgZnJvbSBcIi4vYmlzZWN0LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBleHRlbnQgZnJvbSBcIi4vZXh0ZW50LmpzXCI7XG5pbXBvcnQgaWRlbnRpdHkgZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcbmltcG9ydCBuaWNlIGZyb20gXCIuL25pY2UuanNcIjtcbmltcG9ydCB0aWNrcyBmcm9tIFwiLi90aWNrcy5qc1wiO1xuaW1wb3J0IHN0dXJnZXMgZnJvbSBcIi4vdGhyZXNob2xkL3N0dXJnZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciB2YWx1ZSA9IGlkZW50aXR5LFxuICAgICAgZG9tYWluID0gZXh0ZW50LFxuICAgICAgdGhyZXNob2xkID0gc3R1cmdlcztcblxuICBmdW5jdGlvbiBoaXN0b2dyYW0oZGF0YSkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShkYXRhKSkgZGF0YSA9IEFycmF5LmZyb20oZGF0YSk7XG5cbiAgICB2YXIgaSxcbiAgICAgICAgbiA9IGRhdGEubGVuZ3RoLFxuICAgICAgICB4LFxuICAgICAgICB2YWx1ZXMgPSBuZXcgQXJyYXkobik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YWx1ZXNbaV0gPSB2YWx1ZShkYXRhW2ldLCBpLCBkYXRhKTtcbiAgICB9XG5cbiAgICB2YXIgeHogPSBkb21haW4odmFsdWVzKSxcbiAgICAgICAgeDAgPSB4elswXSxcbiAgICAgICAgeDEgPSB4elsxXSxcbiAgICAgICAgdHogPSB0aHJlc2hvbGQodmFsdWVzLCB4MCwgeDEpO1xuXG4gICAgLy8gQ29udmVydCBudW1iZXIgb2YgdGhyZXNob2xkcyBpbnRvIHVuaWZvcm0gdGhyZXNob2xkcyxcbiAgICAvLyBhbmQgbmljZSB0aGUgZGVmYXVsdCBkb21haW4gYWNjb3JkaW5nbHkuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHR6KSkge1xuICAgICAgdHogPSArdHo7XG4gICAgICBpZiAoZG9tYWluID09PSBleHRlbnQpIFt4MCwgeDFdID0gbmljZSh4MCwgeDEsIHR6KTtcbiAgICAgIHR6ID0gdGlja3MoeDAsIHgxLCB0eik7XG4gICAgICBpZiAodHpbdHoubGVuZ3RoIC0gMV0gPT09IHgxKSB0ei5wb3AoKTsgLy8gZXhjbHVzaXZlXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGFueSB0aHJlc2hvbGRzIG91dHNpZGUgdGhlIGRvbWFpbi5cbiAgICB2YXIgbSA9IHR6Lmxlbmd0aDtcbiAgICB3aGlsZSAodHpbMF0gPD0geDApIHR6LnNoaWZ0KCksIC0tbTtcbiAgICB3aGlsZSAodHpbbSAtIDFdID4geDEpIHR6LnBvcCgpLCAtLW07XG5cbiAgICB2YXIgYmlucyA9IG5ldyBBcnJheShtICsgMSksXG4gICAgICAgIGJpbjtcblxuICAgIC8vIEluaXRpYWxpemUgYmlucy5cbiAgICBmb3IgKGkgPSAwOyBpIDw9IG07ICsraSkge1xuICAgICAgYmluID0gYmluc1tpXSA9IFtdO1xuICAgICAgYmluLngwID0gaSA+IDAgPyB0eltpIC0gMV0gOiB4MDtcbiAgICAgIGJpbi54MSA9IGkgPCBtID8gdHpbaV0gOiB4MTtcbiAgICB9XG5cbiAgICAvLyBBc3NpZ24gZGF0YSB0byBiaW5zIGJ5IHZhbHVlLCBpZ25vcmluZyBhbnkgb3V0c2lkZSB0aGUgZG9tYWluLlxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIHggPSB2YWx1ZXNbaV07XG4gICAgICBpZiAoeDAgPD0geCAmJiB4IDw9IHgxKSB7XG4gICAgICAgIGJpbnNbYmlzZWN0KHR6LCB4LCAwLCBtKV0ucHVzaChkYXRhW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYmlucztcbiAgfVxuXG4gIGhpc3RvZ3JhbS52YWx1ZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh2YWx1ZSA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIGhpc3RvZ3JhbSkgOiB2YWx1ZTtcbiAgfTtcblxuICBoaXN0b2dyYW0uZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbiA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoW19bMF0sIF9bMV1dKSwgaGlzdG9ncmFtKSA6IGRvbWFpbjtcbiAgfTtcblxuICBoaXN0b2dyYW0udGhyZXNob2xkcyA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0aHJlc2hvbGQgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IEFycmF5LmlzQXJyYXkoXykgPyBjb25zdGFudChzbGljZS5jYWxsKF8pKSA6IGNvbnN0YW50KF8pLCBoaXN0b2dyYW0pIDogdGhyZXNob2xkO1xuICB9O1xuXG4gIHJldHVybiBoaXN0b2dyYW07XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuaW1wb3J0IGJpc2VjdG9yIGZyb20gXCIuL2Jpc2VjdG9yLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG5jb25zdCBhc2NlbmRpbmdCaXNlY3QgPSBiaXNlY3Rvcihhc2NlbmRpbmcpO1xuZXhwb3J0IGNvbnN0IGJpc2VjdFJpZ2h0ID0gYXNjZW5kaW5nQmlzZWN0LnJpZ2h0O1xuZXhwb3J0IGNvbnN0IGJpc2VjdExlZnQgPSBhc2NlbmRpbmdCaXNlY3QubGVmdDtcbmV4cG9ydCBjb25zdCBiaXNlY3RDZW50ZXIgPSBiaXNlY3RvcihudW1iZXIpLmNlbnRlcjtcbmV4cG9ydCBkZWZhdWx0IGJpc2VjdFJpZ2h0O1xuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZikge1xuICBsZXQgZGVsdGEgPSBmO1xuICBsZXQgY29tcGFyZSA9IGY7XG5cbiAgaWYgKGYubGVuZ3RoID09PSAxKSB7XG4gICAgZGVsdGEgPSAoZCwgeCkgPT4gZihkKSAtIHg7XG4gICAgY29tcGFyZSA9IGFzY2VuZGluZ0NvbXBhcmF0b3IoZik7XG4gIH1cblxuICBmdW5jdGlvbiBsZWZ0KGEsIHgsIGxvLCBoaSkge1xuICAgIGlmIChsbyA9PSBudWxsKSBsbyA9IDA7XG4gICAgaWYgKGhpID09IG51bGwpIGhpID0gYS5sZW5ndGg7XG4gICAgd2hpbGUgKGxvIDwgaGkpIHtcbiAgICAgIGNvbnN0IG1pZCA9IChsbyArIGhpKSA+Pj4gMTtcbiAgICAgIGlmIChjb21wYXJlKGFbbWlkXSwgeCkgPCAwKSBsbyA9IG1pZCArIDE7XG4gICAgICBlbHNlIGhpID0gbWlkO1xuICAgIH1cbiAgICByZXR1cm4gbG87XG4gIH1cblxuICBmdW5jdGlvbiByaWdodChhLCB4LCBsbywgaGkpIHtcbiAgICBpZiAobG8gPT0gbnVsbCkgbG8gPSAwO1xuICAgIGlmIChoaSA9PSBudWxsKSBoaSA9IGEubGVuZ3RoO1xuICAgIHdoaWxlIChsbyA8IGhpKSB7XG4gICAgICBjb25zdCBtaWQgPSAobG8gKyBoaSkgPj4+IDE7XG4gICAgICBpZiAoY29tcGFyZShhW21pZF0sIHgpID4gMCkgaGkgPSBtaWQ7XG4gICAgICBlbHNlIGxvID0gbWlkICsgMTtcbiAgICB9XG4gICAgcmV0dXJuIGxvO1xuICB9XG5cbiAgZnVuY3Rpb24gY2VudGVyKGEsIHgsIGxvLCBoaSkge1xuICAgIGlmIChsbyA9PSBudWxsKSBsbyA9IDA7XG4gICAgaWYgKGhpID09IG51bGwpIGhpID0gYS5sZW5ndGg7XG4gICAgY29uc3QgaSA9IGxlZnQoYSwgeCwgbG8sIGhpIC0gMSk7XG4gICAgcmV0dXJuIGkgPiBsbyAmJiBkZWx0YShhW2kgLSAxXSwgeCkgPiAtZGVsdGEoYVtpXSwgeCkgPyBpIC0gMSA6IGk7XG4gIH1cblxuICByZXR1cm4ge2xlZnQsIGNlbnRlciwgcmlnaHR9O1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmdDb21wYXJhdG9yKGYpIHtcbiAgcmV0dXJuIChkLCB4KSA9PiBhc2NlbmRpbmcoZihkKSwgeCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvdW50KHZhbHVlcywgdmFsdWVvZikge1xuICBsZXQgY291bnQgPSAwO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgICsrY291bnQ7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICArK2NvdW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG4iLCJmdW5jdGlvbiBsZW5ndGgoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5Lmxlbmd0aCB8IDA7XG59XG5cbmZ1bmN0aW9uIGVtcHR5KGxlbmd0aCkge1xuICByZXR1cm4gIShsZW5ndGggPiAwKTtcbn1cblxuZnVuY3Rpb24gYXJyYXlpZnkodmFsdWVzKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWVzICE9PSBcIm9iamVjdFwiIHx8IFwibGVuZ3RoXCIgaW4gdmFsdWVzID8gdmFsdWVzIDogQXJyYXkuZnJvbSh2YWx1ZXMpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VyKHJlZHVjZSkge1xuICByZXR1cm4gdmFsdWVzID0+IHJlZHVjZSguLi52YWx1ZXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcm9zcyguLi52YWx1ZXMpIHtcbiAgY29uc3QgcmVkdWNlID0gdHlwZW9mIHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09IFwiZnVuY3Rpb25cIiAmJiByZWR1Y2VyKHZhbHVlcy5wb3AoKSk7XG4gIHZhbHVlcyA9IHZhbHVlcy5tYXAoYXJyYXlpZnkpO1xuICBjb25zdCBsZW5ndGhzID0gdmFsdWVzLm1hcChsZW5ndGgpO1xuICBjb25zdCBqID0gdmFsdWVzLmxlbmd0aCAtIDE7XG4gIGNvbnN0IGluZGV4ID0gbmV3IEFycmF5KGogKyAxKS5maWxsKDApO1xuICBjb25zdCBwcm9kdWN0ID0gW107XG4gIGlmIChqIDwgMCB8fCBsZW5ndGhzLnNvbWUoZW1wdHkpKSByZXR1cm4gcHJvZHVjdDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBwcm9kdWN0LnB1c2goaW5kZXgubWFwKChqLCBpKSA9PiB2YWx1ZXNbaV1bal0pKTtcbiAgICBsZXQgaSA9IGo7XG4gICAgd2hpbGUgKCsraW5kZXhbaV0gPT09IGxlbmd0aHNbaV0pIHtcbiAgICAgIGlmIChpID09PSAwKSByZXR1cm4gcmVkdWNlID8gcHJvZHVjdC5tYXAocmVkdWNlKSA6IHByb2R1Y3Q7XG4gICAgICBpbmRleFtpLS1dID0gMDtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGN1bXN1bSh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgdmFyIHN1bSA9IDAsIGluZGV4ID0gMDtcbiAgcmV0dXJuIEZsb2F0NjRBcnJheS5mcm9tKHZhbHVlcywgdmFsdWVvZiA9PT0gdW5kZWZpbmVkXG4gICAgPyB2ID0+IChzdW0gKz0gK3YgfHwgMClcbiAgICA6IHYgPT4gKHN1bSArPSArdmFsdWVvZih2LCBpbmRleCsrLCB2YWx1ZXMpIHx8IDApKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBiIDwgYSA/IC0xIDogYiA+IGEgPyAxIDogYiA+PSBhID8gMCA6IE5hTjtcbn1cbiIsImltcG9ydCB2YXJpYW5jZSBmcm9tIFwiLi92YXJpYW5jZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXZpYXRpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGNvbnN0IHYgPSB2YXJpYW5jZSh2YWx1ZXMsIHZhbHVlb2YpO1xuICByZXR1cm4gdiA/IE1hdGguc3FydCh2KSA6IHY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlKHZhbHVlcywgLi4ub3RoZXJzKSB7XG4gIHZhbHVlcyA9IG5ldyBTZXQodmFsdWVzKTtcbiAgZm9yIChjb25zdCBvdGhlciBvZiBvdGhlcnMpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG90aGVyKSB7XG4gICAgICB2YWx1ZXMuZGVsZXRlKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHZhbHVlcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2pvaW50KHZhbHVlcywgb3RoZXIpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBvdGhlcltTeW1ib2wuaXRlcmF0b3JdKCksIHNldCA9IG5ldyBTZXQoKTtcbiAgZm9yIChjb25zdCB2IG9mIHZhbHVlcykge1xuICAgIGlmIChzZXQuaGFzKHYpKSByZXR1cm4gZmFsc2U7XG4gICAgbGV0IHZhbHVlLCBkb25lO1xuICAgIHdoaWxlICgoe3ZhbHVlLCBkb25lfSA9IGl0ZXJhdG9yLm5leHQoKSkpIHtcbiAgICAgIGlmIChkb25lKSBicmVhaztcbiAgICAgIGlmIChPYmplY3QuaXModiwgdmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICBzZXQuYWRkKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBldmVyeSh2YWx1ZXMsIHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0ZXN0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICBsZXQgaW5kZXggPSAtMTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICBpZiAoIXRlc3QodmFsdWUsICsraW5kZXgsIHZhbHVlcykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgbGV0IG1heDtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICBpZiAobWluID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodmFsdWUgPj0gdmFsdWUpIG1pbiA9IG1heCA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChtaW4gPiB2YWx1ZSkgbWluID0gdmFsdWU7XG4gICAgICAgICAgaWYgKG1heCA8IHZhbHVlKSBtYXggPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsKSB7XG4gICAgICAgIGlmIChtaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh2YWx1ZSA+PSB2YWx1ZSkgbWluID0gbWF4ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1pbiA+IHZhbHVlKSBtaW4gPSB2YWx1ZTtcbiAgICAgICAgICBpZiAobWF4IDwgdmFsdWUpIG1heCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbbWluLCBtYXhdO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyKHZhbHVlcywgdGVzdCkge1xuICBpZiAodHlwZW9mIHRlc3QgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRlc3QgaXMgbm90IGEgZnVuY3Rpb25cIik7XG4gIGNvbnN0IGFycmF5ID0gW107XG4gIGxldCBpbmRleCA9IC0xO1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgIGlmICh0ZXN0KHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSB7XG4gICAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3B5dGhvbi9jcHl0aG9uL2Jsb2IvYTc0ZWVhMjM4ZjViYWJhMTU3OTdlMmU4YjU3MGQxNTNiYzg2OTBhNy9Nb2R1bGVzL21hdGhtb2R1bGUuYyNMMTQyM1xuZXhwb3J0IGNsYXNzIEFkZGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcGFydGlhbHMgPSBuZXcgRmxvYXQ2NEFycmF5KDMyKTtcbiAgICB0aGlzLl9uID0gMDtcbiAgfVxuICBhZGQoeCkge1xuICAgIGNvbnN0IHAgPSB0aGlzLl9wYXJ0aWFscztcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9uICYmIGogPCAzMjsgaisrKSB7XG4gICAgICBjb25zdCB5ID0gcFtqXSxcbiAgICAgICAgaGkgPSB4ICsgeSxcbiAgICAgICAgbG8gPSBNYXRoLmFicyh4KSA8IE1hdGguYWJzKHkpID8geCAtIChoaSAtIHkpIDogeSAtIChoaSAtIHgpO1xuICAgICAgaWYgKGxvKSBwW2krK10gPSBsbztcbiAgICAgIHggPSBoaTtcbiAgICB9XG4gICAgcFtpXSA9IHg7XG4gICAgdGhpcy5fbiA9IGkgKyAxO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHZhbHVlT2YoKSB7XG4gICAgY29uc3QgcCA9IHRoaXMuX3BhcnRpYWxzO1xuICAgIGxldCBuID0gdGhpcy5fbiwgeCwgeSwgbG8sIGhpID0gMDtcbiAgICBpZiAobiA+IDApIHtcbiAgICAgIGhpID0gcFstLW5dO1xuICAgICAgd2hpbGUgKG4gPiAwKSB7XG4gICAgICAgIHggPSBoaTtcbiAgICAgICAgeSA9IHBbLS1uXTtcbiAgICAgICAgaGkgPSB4ICsgeTtcbiAgICAgICAgbG8gPSB5IC0gKGhpIC0geCk7XG4gICAgICAgIGlmIChsbykgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAobiA+IDAgJiYgKChsbyA8IDAgJiYgcFtuIC0gMV0gPCAwKSB8fCAobG8gPiAwICYmIHBbbiAtIDFdID4gMCkpKSB7XG4gICAgICAgIHkgPSBsbyAqIDI7XG4gICAgICAgIHggPSBoaSArIHk7XG4gICAgICAgIGlmICh5ID09IHggLSBoaSkgaGkgPSB4O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaGk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGNvbnN0IGFkZGVyID0gbmV3IEFkZGVyKCk7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZSkge1xuICAgICAgICBhZGRlci5hZGQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSB7XG4gICAgICAgIGFkZGVyLmFkZCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiArYWRkZXI7XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmVhdGVzdCh2YWx1ZXMsIGNvbXBhcmUgPSBhc2NlbmRpbmcpIHtcbiAgbGV0IG1heDtcbiAgbGV0IGRlZmluZWQgPSBmYWxzZTtcbiAgaWYgKGNvbXBhcmUubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IG1heFZhbHVlO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29tcGFyZShlbGVtZW50KTtcbiAgICAgIGlmIChkZWZpbmVkXG4gICAgICAgICAgPyBhc2NlbmRpbmcodmFsdWUsIG1heFZhbHVlKSA+IDBcbiAgICAgICAgICA6IGFzY2VuZGluZyh2YWx1ZSwgdmFsdWUpID09PSAwKSB7XG4gICAgICAgIG1heCA9IGVsZW1lbnQ7XG4gICAgICAgIG1heFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGRlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKGRlZmluZWRcbiAgICAgICAgICA/IGNvbXBhcmUodmFsdWUsIG1heCkgPiAwXG4gICAgICAgICAgOiBjb21wYXJlKHZhbHVlLCB2YWx1ZSkgPT09IDApIHtcbiAgICAgICAgbWF4ID0gdmFsdWU7XG4gICAgICAgIGRlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4O1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBtYXhJbmRleCBmcm9tIFwiLi9tYXhJbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncmVhdGVzdEluZGV4KHZhbHVlcywgY29tcGFyZSA9IGFzY2VuZGluZykge1xuICBpZiAoY29tcGFyZS5sZW5ndGggPT09IDEpIHJldHVybiBtYXhJbmRleCh2YWx1ZXMsIGNvbXBhcmUpO1xuICBsZXQgbWF4VmFsdWU7XG4gIGxldCBtYXggPSAtMTtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgKytpbmRleDtcbiAgICBpZiAobWF4IDwgMFxuICAgICAgICA/IGNvbXBhcmUodmFsdWUsIHZhbHVlKSA9PT0gMFxuICAgICAgICA6IGNvbXBhcmUodmFsdWUsIG1heFZhbHVlKSA+IDApIHtcbiAgICAgIG1heFZhbHVlID0gdmFsdWU7XG4gICAgICBtYXggPSBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1heDtcbn1cbiIsImltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBncm91cCh2YWx1ZXMsIC4uLmtleXMpIHtcbiAgcmV0dXJuIG5lc3QodmFsdWVzLCBpZGVudGl0eSwgaWRlbnRpdHksIGtleXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JvdXBzKHZhbHVlcywgLi4ua2V5cykge1xuICByZXR1cm4gbmVzdCh2YWx1ZXMsIEFycmF5LmZyb20sIGlkZW50aXR5LCBrZXlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvbGx1cCh2YWx1ZXMsIHJlZHVjZSwgLi4ua2V5cykge1xuICByZXR1cm4gbmVzdCh2YWx1ZXMsIGlkZW50aXR5LCByZWR1Y2UsIGtleXMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm9sbHVwcyh2YWx1ZXMsIHJlZHVjZSwgLi4ua2V5cykge1xuICByZXR1cm4gbmVzdCh2YWx1ZXMsIEFycmF5LmZyb20sIHJlZHVjZSwga2V5cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRleCh2YWx1ZXMsIC4uLmtleXMpIHtcbiAgcmV0dXJuIG5lc3QodmFsdWVzLCBpZGVudGl0eSwgdW5pcXVlLCBrZXlzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4ZXModmFsdWVzLCAuLi5rZXlzKSB7XG4gIHJldHVybiBuZXN0KHZhbHVlcywgQXJyYXkuZnJvbSwgdW5pcXVlLCBrZXlzKTtcbn1cblxuZnVuY3Rpb24gdW5pcXVlKHZhbHVlcykge1xuICBpZiAodmFsdWVzLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKFwiZHVwbGljYXRlIGtleVwiKTtcbiAgcmV0dXJuIHZhbHVlc1swXTtcbn1cblxuZnVuY3Rpb24gbmVzdCh2YWx1ZXMsIG1hcCwgcmVkdWNlLCBrZXlzKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gcmVncm91cCh2YWx1ZXMsIGkpIHtcbiAgICBpZiAoaSA+PSBrZXlzLmxlbmd0aCkgcmV0dXJuIHJlZHVjZSh2YWx1ZXMpO1xuICAgIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBrZXlvZiA9IGtleXNbaSsrXTtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5b2YodmFsdWUsICsraW5kZXgsIHZhbHVlcyk7XG4gICAgICBjb25zdCBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICAgIGlmIChncm91cCkgZ3JvdXAucHVzaCh2YWx1ZSk7XG4gICAgICBlbHNlIGdyb3Vwcy5zZXQoa2V5LCBbdmFsdWVdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZXNdIG9mIGdyb3Vwcykge1xuICAgICAgZ3JvdXBzLnNldChrZXksIHJlZ3JvdXAodmFsdWVzLCBpKSk7XG4gICAgfVxuICAgIHJldHVybiBtYXAoZ3JvdXBzKTtcbiAgfSkodmFsdWVzLCAwKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgYmlzZWN0LCBiaXNlY3RSaWdodCwgYmlzZWN0TGVmdCwgYmlzZWN0Q2VudGVyfSBmcm9tIFwiLi9iaXNlY3QuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBhc2NlbmRpbmd9IGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGJpc2VjdG9yfSBmcm9tIFwiLi9iaXNlY3Rvci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNvdW50fSBmcm9tIFwiLi9jb3VudC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGNyb3NzfSBmcm9tIFwiLi9jcm9zcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGN1bXN1bX0gZnJvbSBcIi4vY3Vtc3VtLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZGVzY2VuZGluZ30gZnJvbSBcIi4vZGVzY2VuZGluZy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRldmlhdGlvbn0gZnJvbSBcIi4vZGV2aWF0aW9uLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgZXh0ZW50fSBmcm9tIFwiLi9leHRlbnQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmc3VtLCBBZGRlcn0gZnJvbSBcIi4vZnN1bS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdyb3VwLCBncm91cHMsIGluZGV4LCBpbmRleGVzLCByb2xsdXAsIHJvbGx1cHN9IGZyb20gXCIuL2dyb3VwLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgYmluLCBkZWZhdWx0IGFzIGhpc3RvZ3JhbX0gZnJvbSBcIi4vYmluLmpzXCI7IC8vIERlcHJlY2F0ZWQ7IHVzZSBiaW4uXG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkRnJlZWRtYW5EaWFjb25pc30gZnJvbSBcIi4vdGhyZXNob2xkL2ZyZWVkbWFuRGlhY29uaXMuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aHJlc2hvbGRTY290dH0gZnJvbSBcIi4vdGhyZXNob2xkL3Njb3R0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdGhyZXNob2xkU3R1cmdlc30gZnJvbSBcIi4vdGhyZXNob2xkL3N0dXJnZXMuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtYXh9IGZyb20gXCIuL21heC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1heEluZGV4fSBmcm9tIFwiLi9tYXhJbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lYW59IGZyb20gXCIuL21lYW4uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBtZWRpYW59IGZyb20gXCIuL21lZGlhbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1lcmdlfSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1pbn0gZnJvbSBcIi4vbWluLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWluSW5kZXh9IGZyb20gXCIuL21pbkluZGV4LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbmljZX0gZnJvbSBcIi4vbmljZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBhaXJzfSBmcm9tIFwiLi9wYWlycy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBlcm11dGV9IGZyb20gXCIuL3Blcm11dGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBxdWFudGlsZSwgcXVhbnRpbGVTb3J0ZWR9IGZyb20gXCIuL3F1YW50aWxlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcXVpY2tzZWxlY3R9IGZyb20gXCIuL3F1aWNrc2VsZWN0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcmFuZ2V9IGZyb20gXCIuL3JhbmdlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGVhc3R9IGZyb20gXCIuL2xlYXN0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGVhc3RJbmRleH0gZnJvbSBcIi4vbGVhc3RJbmRleC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdyZWF0ZXN0fSBmcm9tIFwiLi9ncmVhdGVzdC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGdyZWF0ZXN0SW5kZXh9IGZyb20gXCIuL2dyZWF0ZXN0SW5kZXguanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzY2FufSBmcm9tIFwiLi9zY2FuLmpzXCI7IC8vIERlcHJlY2F0ZWQ7IHVzZSBsZWFzdEluZGV4LlxuZXhwb3J0IHtkZWZhdWx0IGFzIHNodWZmbGUsIHNodWZmbGVyfSBmcm9tIFwiLi9zaHVmZmxlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3VtfSBmcm9tIFwiLi9zdW0uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB0aWNrcywgdGlja0luY3JlbWVudCwgdGlja1N0ZXB9IGZyb20gXCIuL3RpY2tzLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdHJhbnNwb3NlfSBmcm9tIFwiLi90cmFuc3Bvc2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB2YXJpYW5jZX0gZnJvbSBcIi4vdmFyaWFuY2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyB6aXB9IGZyb20gXCIuL3ppcC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGV2ZXJ5fSBmcm9tIFwiLi9ldmVyeS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNvbWV9IGZyb20gXCIuL3NvbWUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmaWx0ZXJ9IGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG1hcH0gZnJvbSBcIi4vbWFwLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcmVkdWNlfSBmcm9tIFwiLi9yZWR1Y2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyByZXZlcnNlfSBmcm9tIFwiLi9yZXZlcnNlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc29ydH0gZnJvbSBcIi4vc29ydC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRpZmZlcmVuY2V9IGZyb20gXCIuL2RpZmZlcmVuY2UuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBkaXNqb2ludH0gZnJvbSBcIi4vZGlzam9pbnQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnNlY3Rpb259IGZyb20gXCIuL2ludGVyc2VjdGlvbi5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHN1YnNldH0gZnJvbSBcIi4vc3Vic2V0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc3VwZXJzZXR9IGZyb20gXCIuL3N1cGVyc2V0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgdW5pb259IGZyb20gXCIuL3VuaW9uLmpzXCI7XG4iLCJpbXBvcnQgc2V0IGZyb20gXCIuL3NldC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlcnNlY3Rpb24odmFsdWVzLCAuLi5vdGhlcnMpIHtcbiAgdmFsdWVzID0gbmV3IFNldCh2YWx1ZXMpO1xuICBvdGhlcnMgPSBvdGhlcnMubWFwKHNldCk7XG4gIG91dDogZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICBmb3IgKGNvbnN0IG90aGVyIG9mIG90aGVycykge1xuICAgICAgaWYgKCFvdGhlci5oYXModmFsdWUpKSB7XG4gICAgICAgIHZhbHVlcy5kZWxldGUodmFsdWUpO1xuICAgICAgICBjb250aW51ZSBvdXQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB2YWx1ZXM7XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFzdCh2YWx1ZXMsIGNvbXBhcmUgPSBhc2NlbmRpbmcpIHtcbiAgbGV0IG1pbjtcbiAgbGV0IGRlZmluZWQgPSBmYWxzZTtcbiAgaWYgKGNvbXBhcmUubGVuZ3RoID09PSAxKSB7XG4gICAgbGV0IG1pblZhbHVlO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB2YWx1ZXMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29tcGFyZShlbGVtZW50KTtcbiAgICAgIGlmIChkZWZpbmVkXG4gICAgICAgICAgPyBhc2NlbmRpbmcodmFsdWUsIG1pblZhbHVlKSA8IDBcbiAgICAgICAgICA6IGFzY2VuZGluZyh2YWx1ZSwgdmFsdWUpID09PSAwKSB7XG4gICAgICAgIG1pbiA9IGVsZW1lbnQ7XG4gICAgICAgIG1pblZhbHVlID0gdmFsdWU7XG4gICAgICAgIGRlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKGRlZmluZWRcbiAgICAgICAgICA/IGNvbXBhcmUodmFsdWUsIG1pbikgPCAwXG4gICAgICAgICAgOiBjb21wYXJlKHZhbHVlLCB2YWx1ZSkgPT09IDApIHtcbiAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICAgIGRlZmluZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWluO1xufVxuIiwiaW1wb3J0IGFzY2VuZGluZyBmcm9tIFwiLi9hc2NlbmRpbmcuanNcIjtcbmltcG9ydCBtaW5JbmRleCBmcm9tIFwiLi9taW5JbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsZWFzdEluZGV4KHZhbHVlcywgY29tcGFyZSA9IGFzY2VuZGluZykge1xuICBpZiAoY29tcGFyZS5sZW5ndGggPT09IDEpIHJldHVybiBtaW5JbmRleCh2YWx1ZXMsIGNvbXBhcmUpO1xuICBsZXQgbWluVmFsdWU7XG4gIGxldCBtaW4gPSAtMTtcbiAgbGV0IGluZGV4ID0gLTE7XG4gIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgKytpbmRleDtcbiAgICBpZiAobWluIDwgMFxuICAgICAgICA/IGNvbXBhcmUodmFsdWUsIHZhbHVlKSA9PT0gMFxuICAgICAgICA6IGNvbXBhcmUodmFsdWUsIG1pblZhbHVlKSA8IDApIHtcbiAgICAgIG1pblZhbHVlID0gdmFsdWU7XG4gICAgICBtaW4gPSBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hcCh2YWx1ZXMsIG1hcHBlcikge1xuICBpZiAodHlwZW9mIHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ2YWx1ZXMgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICBpZiAodHlwZW9mIG1hcHBlciAhPT0gXCJmdW5jdGlvblwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwibWFwcGVyIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICByZXR1cm4gQXJyYXkuZnJvbSh2YWx1ZXMsICh2YWx1ZSwgaW5kZXgpID0+IG1hcHBlcih2YWx1ZSwgaW5kZXgsIHZhbHVlcykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4KHZhbHVlcywgdmFsdWVvZikge1xuICBsZXQgbWF4O1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsXG4gICAgICAgICAgJiYgKG1heCA8IHZhbHVlIHx8IChtYXggPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSB2YWx1ZSkpKSB7XG4gICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICgodmFsdWUgPSB2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSAhPSBudWxsXG4gICAgICAgICAgJiYgKG1heCA8IHZhbHVlIHx8IChtYXggPT09IHVuZGVmaW5lZCAmJiB2YWx1ZSA+PSB2YWx1ZSkpKSB7XG4gICAgICAgIG1heCA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gbWF4O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF4SW5kZXgodmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBtYXg7XG4gIGxldCBtYXhJbmRleCA9IC0xO1xuICBsZXQgaW5kZXggPSAtMTtcbiAgaWYgKHZhbHVlb2YgPT09IHVuZGVmaW5lZCkge1xuICAgIGZvciAoY29uc3QgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICArK2luZGV4O1xuICAgICAgaWYgKHZhbHVlICE9IG51bGxcbiAgICAgICAgICAmJiAobWF4IDwgdmFsdWUgfHwgKG1heCA9PT0gdW5kZWZpbmVkICYmIHZhbHVlID49IHZhbHVlKSkpIHtcbiAgICAgICAgbWF4ID0gdmFsdWUsIG1heEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGxcbiAgICAgICAgICAmJiAobWF4IDwgdmFsdWUgfHwgKG1heCA9PT0gdW5kZWZpbmVkICYmIHZhbHVlID49IHZhbHVlKSkpIHtcbiAgICAgICAgbWF4ID0gdmFsdWUsIG1heEluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtYXhJbmRleDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lYW4odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGxldCBzdW0gPSAwO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgICsrY291bnQsIHN1bSArPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgICsrY291bnQsIHN1bSArPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNvdW50KSByZXR1cm4gc3VtIC8gY291bnQ7XG59XG4iLCJpbXBvcnQgcXVhbnRpbGUgZnJvbSBcIi4vcXVhbnRpbGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIHJldHVybiBxdWFudGlsZSh2YWx1ZXMsIDAuNSwgdmFsdWVvZik7XG59XG4iLCJmdW5jdGlvbiogZmxhdHRlbihhcnJheXMpIHtcbiAgZm9yIChjb25zdCBhcnJheSBvZiBhcnJheXMpIHtcbiAgICB5aWVsZCogYXJyYXk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVyZ2UoYXJyYXlzKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGZsYXR0ZW4oYXJyYXlzKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW4odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBtaW47XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlICE9IG51bGxcbiAgICAgICAgICAmJiAobWluID4gdmFsdWUgfHwgKG1pbiA9PT0gdW5kZWZpbmVkICYmIHZhbHVlID49IHZhbHVlKSkpIHtcbiAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGxcbiAgICAgICAgICAmJiAobWluID4gdmFsdWUgfHwgKG1pbiA9PT0gdW5kZWZpbmVkICYmIHZhbHVlID49IHZhbHVlKSkpIHtcbiAgICAgICAgbWluID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBtaW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaW5JbmRleCh2YWx1ZXMsIHZhbHVlb2YpIHtcbiAgbGV0IG1pbjtcbiAgbGV0IG1pbkluZGV4ID0gLTE7XG4gIGxldCBpbmRleCA9IC0xO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgICsraW5kZXg7XG4gICAgICBpZiAodmFsdWUgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZSwgbWluSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbFxuICAgICAgICAgICYmIChtaW4gPiB2YWx1ZSB8fCAobWluID09PSB1bmRlZmluZWQgJiYgdmFsdWUgPj0gdmFsdWUpKSkge1xuICAgICAgICBtaW4gPSB2YWx1ZSwgbWluSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1pbkluZGV4O1xufVxuIiwiaW1wb3J0IHt0aWNrSW5jcmVtZW50fSBmcm9tIFwiLi90aWNrcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuaWNlKHN0YXJ0LCBzdG9wLCBjb3VudCkge1xuICBsZXQgcHJlc3RlcDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpO1xuICAgIGlmIChzdGVwID09PSBwcmVzdGVwIHx8IHN0ZXAgPT09IDAgfHwgIWlzRmluaXRlKHN0ZXApKSB7XG4gICAgICByZXR1cm4gW3N0YXJ0LCBzdG9wXTtcbiAgICB9IGVsc2UgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICBzdGFydCA9IE1hdGguZmxvb3Ioc3RhcnQgLyBzdGVwKSAqIHN0ZXA7XG4gICAgICBzdG9wID0gTWF0aC5jZWlsKHN0b3AgLyBzdGVwKSAqIHN0ZXA7XG4gICAgfSBlbHNlIGlmIChzdGVwIDwgMCkge1xuICAgICAgc3RhcnQgPSBNYXRoLmNlaWwoc3RhcnQgKiBzdGVwKSAvIHN0ZXA7XG4gICAgICBzdG9wID0gTWF0aC5mbG9vcihzdG9wICogc3RlcCkgLyBzdGVwO1xuICAgIH1cbiAgICBwcmVzdGVwID0gc3RlcDtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9PT0gbnVsbCA/IE5hTiA6ICt4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIG51bWJlcnModmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgeWllbGQgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGxldCBpbmRleCA9IC0xO1xuICAgIGZvciAobGV0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgICAgaWYgKCh2YWx1ZSA9IHZhbHVlb2YodmFsdWUsICsraW5kZXgsIHZhbHVlcykpICE9IG51bGwgJiYgKHZhbHVlID0gK3ZhbHVlKSA+PSB2YWx1ZSkge1xuICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhaXJzKHZhbHVlcywgcGFpcm9mID0gcGFpcikge1xuICBjb25zdCBwYWlycyA9IFtdO1xuICBsZXQgcHJldmlvdXM7XG4gIGxldCBmaXJzdCA9IGZhbHNlO1xuICBmb3IgKGNvbnN0IHZhbHVlIG9mIHZhbHVlcykge1xuICAgIGlmIChmaXJzdCkgcGFpcnMucHVzaChwYWlyb2YocHJldmlvdXMsIHZhbHVlKSk7XG4gICAgcHJldmlvdXMgPSB2YWx1ZTtcbiAgICBmaXJzdCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHBhaXJzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFpcihhLCBiKSB7XG4gIHJldHVybiBbYSwgYl07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzb3VyY2UsIGtleXMpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oa2V5cywga2V5ID0+IHNvdXJjZVtrZXldKTtcbn1cbiIsImltcG9ydCBtYXggZnJvbSBcIi4vbWF4LmpzXCI7XG5pbXBvcnQgbWluIGZyb20gXCIuL21pbi5qc1wiO1xuaW1wb3J0IHF1aWNrc2VsZWN0IGZyb20gXCIuL3F1aWNrc2VsZWN0LmpzXCI7XG5pbXBvcnQgbnVtYmVyLCB7bnVtYmVyc30gZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1YW50aWxlKHZhbHVlcywgcCwgdmFsdWVvZikge1xuICB2YWx1ZXMgPSBGbG9hdDY0QXJyYXkuZnJvbShudW1iZXJzKHZhbHVlcywgdmFsdWVvZikpO1xuICBpZiAoIShuID0gdmFsdWVzLmxlbmd0aCkpIHJldHVybjtcbiAgaWYgKChwID0gK3ApIDw9IDAgfHwgbiA8IDIpIHJldHVybiBtaW4odmFsdWVzKTtcbiAgaWYgKHAgPj0gMSkgcmV0dXJuIG1heCh2YWx1ZXMpO1xuICB2YXIgbixcbiAgICAgIGkgPSAobiAtIDEpICogcCxcbiAgICAgIGkwID0gTWF0aC5mbG9vcihpKSxcbiAgICAgIHZhbHVlMCA9IG1heChxdWlja3NlbGVjdCh2YWx1ZXMsIGkwKS5zdWJhcnJheSgwLCBpMCArIDEpKSxcbiAgICAgIHZhbHVlMSA9IG1pbih2YWx1ZXMuc3ViYXJyYXkoaTAgKyAxKSk7XG4gIHJldHVybiB2YWx1ZTAgKyAodmFsdWUxIC0gdmFsdWUwKSAqIChpIC0gaTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVhbnRpbGVTb3J0ZWQodmFsdWVzLCBwLCB2YWx1ZW9mID0gbnVtYmVyKSB7XG4gIGlmICghKG4gPSB2YWx1ZXMubGVuZ3RoKSkgcmV0dXJuO1xuICBpZiAoKHAgPSArcCkgPD0gMCB8fCBuIDwgMikgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1swXSwgMCwgdmFsdWVzKTtcbiAgaWYgKHAgPj0gMSkgcmV0dXJuICt2YWx1ZW9mKHZhbHVlc1tuIC0gMV0sIG4gLSAxLCB2YWx1ZXMpO1xuICB2YXIgbixcbiAgICAgIGkgPSAobiAtIDEpICogcCxcbiAgICAgIGkwID0gTWF0aC5mbG9vcihpKSxcbiAgICAgIHZhbHVlMCA9ICt2YWx1ZW9mKHZhbHVlc1tpMF0sIGkwLCB2YWx1ZXMpLFxuICAgICAgdmFsdWUxID0gK3ZhbHVlb2YodmFsdWVzW2kwICsgMV0sIGkwICsgMSwgdmFsdWVzKTtcbiAgcmV0dXJuIHZhbHVlMCArICh2YWx1ZTEgLSB2YWx1ZTApICogKGkgLSBpMCk7XG59XG4iLCJpbXBvcnQgYXNjZW5kaW5nIGZyb20gXCIuL2FzY2VuZGluZy5qc1wiO1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vbW91cm5lci9xdWlja3NlbGVjdFxuLy8gSVNDIGxpY2Vuc2UsIENvcHlyaWdodCAyMDE4IFZsYWRpbWlyIEFnYWZvbmtpbi5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHF1aWNrc2VsZWN0KGFycmF5LCBrLCBsZWZ0ID0gMCwgcmlnaHQgPSBhcnJheS5sZW5ndGggLSAxLCBjb21wYXJlID0gYXNjZW5kaW5nKSB7XG4gIHdoaWxlIChyaWdodCA+IGxlZnQpIHtcbiAgICBpZiAocmlnaHQgLSBsZWZ0ID4gNjAwKSB7XG4gICAgICBjb25zdCBuID0gcmlnaHQgLSBsZWZ0ICsgMTtcbiAgICAgIGNvbnN0IG0gPSBrIC0gbGVmdCArIDE7XG4gICAgICBjb25zdCB6ID0gTWF0aC5sb2cobik7XG4gICAgICBjb25zdCBzID0gMC41ICogTWF0aC5leHAoMiAqIHogLyAzKTtcbiAgICAgIGNvbnN0IHNkID0gMC41ICogTWF0aC5zcXJ0KHogKiBzICogKG4gLSBzKSAvIG4pICogKG0gLSBuIC8gMiA8IDAgPyAtMSA6IDEpO1xuICAgICAgY29uc3QgbmV3TGVmdCA9IE1hdGgubWF4KGxlZnQsIE1hdGguZmxvb3IoayAtIG0gKiBzIC8gbiArIHNkKSk7XG4gICAgICBjb25zdCBuZXdSaWdodCA9IE1hdGgubWluKHJpZ2h0LCBNYXRoLmZsb29yKGsgKyAobiAtIG0pICogcyAvIG4gKyBzZCkpO1xuICAgICAgcXVpY2tzZWxlY3QoYXJyYXksIGssIG5ld0xlZnQsIG5ld1JpZ2h0LCBjb21wYXJlKTtcbiAgICB9XG5cbiAgICBjb25zdCB0ID0gYXJyYXlba107XG4gICAgbGV0IGkgPSBsZWZ0O1xuICAgIGxldCBqID0gcmlnaHQ7XG5cbiAgICBzd2FwKGFycmF5LCBsZWZ0LCBrKTtcbiAgICBpZiAoY29tcGFyZShhcnJheVtyaWdodF0sIHQpID4gMCkgc3dhcChhcnJheSwgbGVmdCwgcmlnaHQpO1xuXG4gICAgd2hpbGUgKGkgPCBqKSB7XG4gICAgICBzd2FwKGFycmF5LCBpLCBqKSwgKytpLCAtLWo7XG4gICAgICB3aGlsZSAoY29tcGFyZShhcnJheVtpXSwgdCkgPCAwKSArK2k7XG4gICAgICB3aGlsZSAoY29tcGFyZShhcnJheVtqXSwgdCkgPiAwKSAtLWo7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmUoYXJyYXlbbGVmdF0sIHQpID09PSAwKSBzd2FwKGFycmF5LCBsZWZ0LCBqKTtcbiAgICBlbHNlICsraiwgc3dhcChhcnJheSwgaiwgcmlnaHQpO1xuXG4gICAgaWYgKGogPD0gaykgbGVmdCA9IGogKyAxO1xuICAgIGlmIChrIDw9IGopIHJpZ2h0ID0gaiAtIDE7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5mdW5jdGlvbiBzd2FwKGFycmF5LCBpLCBqKSB7XG4gIGNvbnN0IHQgPSBhcnJheVtpXTtcbiAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgYXJyYXlbal0gPSB0O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgc3RhcnQgPSArc3RhcnQsIHN0b3AgPSArc3RvcCwgc3RlcCA9IChuID0gYXJndW1lbnRzLmxlbmd0aCkgPCAyID8gKHN0b3AgPSBzdGFydCwgc3RhcnQgPSAwLCAxKSA6IG4gPCAzID8gMSA6ICtzdGVwO1xuXG4gIHZhciBpID0gLTEsXG4gICAgICBuID0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKChzdG9wIC0gc3RhcnQpIC8gc3RlcCkpIHwgMCxcbiAgICAgIHJhbmdlID0gbmV3IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2kgPCBuKSB7XG4gICAgcmFuZ2VbaV0gPSBzdGFydCArIGkgKiBzdGVwO1xuICB9XG5cbiAgcmV0dXJuIHJhbmdlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlKHZhbHVlcywgcmVkdWNlciwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJyZWR1Y2VyIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICBjb25zdCBpdGVyYXRvciA9IHZhbHVlc1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIGxldCBkb25lLCBuZXh0LCBpbmRleCA9IC0xO1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcbiAgICAoe2RvbmUsIHZhbHVlfSA9IGl0ZXJhdG9yLm5leHQoKSk7XG4gICAgaWYgKGRvbmUpIHJldHVybjtcbiAgICArK2luZGV4O1xuICB9XG4gIHdoaWxlICgoe2RvbmUsIHZhbHVlOiBuZXh0fSA9IGl0ZXJhdG9yLm5leHQoKSksICFkb25lKSB7XG4gICAgdmFsdWUgPSByZWR1Y2VyKHZhbHVlLCBuZXh0LCArK2luZGV4LCB2YWx1ZXMpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldmVyc2UodmFsdWVzKSB7XG4gIGlmICh0eXBlb2YgdmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbHVlcyBpcyBub3QgaXRlcmFibGVcIik7XG4gIHJldHVybiBBcnJheS5mcm9tKHZhbHVlcykucmV2ZXJzZSgpO1xufVxuIiwiaW1wb3J0IGxlYXN0SW5kZXggZnJvbSBcIi4vbGVhc3RJbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY2FuKHZhbHVlcywgY29tcGFyZSkge1xuICBjb25zdCBpbmRleCA9IGxlYXN0SW5kZXgodmFsdWVzLCBjb21wYXJlKTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGluZGV4O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0KHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzIGluc3RhbmNlb2YgU2V0ID8gdmFsdWVzIDogbmV3IFNldCh2YWx1ZXMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgc2h1ZmZsZXIoTWF0aC5yYW5kb20pO1xuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZXIocmFuZG9tKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzaHVmZmxlKGFycmF5LCBpMCA9IDAsIGkxID0gYXJyYXkubGVuZ3RoKSB7XG4gICAgbGV0IG0gPSBpMSAtIChpMCA9ICtpMCk7XG4gICAgd2hpbGUgKG0pIHtcbiAgICAgIGNvbnN0IGkgPSByYW5kb20oKSAqIG0tLSB8IDAsIHQgPSBhcnJheVttICsgaTBdO1xuICAgICAgYXJyYXlbbSArIGkwXSA9IGFycmF5W2kgKyBpMF07XG4gICAgICBhcnJheVtpICsgaTBdID0gdDtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29tZSh2YWx1ZXMsIHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ICE9PSBcImZ1bmN0aW9uXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ0ZXN0IGlzIG5vdCBhIGZ1bmN0aW9uXCIpO1xuICBsZXQgaW5kZXggPSAtMTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICBpZiAodGVzdCh2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsImltcG9ydCBhc2NlbmRpbmcgZnJvbSBcIi4vYXNjZW5kaW5nLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnQodmFsdWVzLCBjb21wYXJhdG9yID0gYXNjZW5kaW5nKSB7XG4gIGlmICh0eXBlb2YgdmFsdWVzW1N5bWJvbC5pdGVyYXRvcl0gIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcInZhbHVlcyBpcyBub3QgaXRlcmFibGVcIik7XG4gIHJldHVybiBBcnJheS5mcm9tKHZhbHVlcykuc29ydChjb21wYXJhdG9yKTtcbn1cbiIsImltcG9ydCBzdXBlcnNldCBmcm9tIFwiLi9zdXBlcnNldC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJzZXQodmFsdWVzLCBvdGhlcikge1xuICByZXR1cm4gc3VwZXJzZXQob3RoZXIsIHZhbHVlcyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdW0odmFsdWVzLCB2YWx1ZW9mKSB7XG4gIGxldCBzdW0gPSAwO1xuICBpZiAodmFsdWVvZiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWUgPSArdmFsdWUpIHtcbiAgICAgICAgc3VtICs9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBsZXQgaW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSA9ICt2YWx1ZW9mKHZhbHVlLCArK2luZGV4LCB2YWx1ZXMpKSB7XG4gICAgICAgIHN1bSArPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN1bTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1cGVyc2V0KHZhbHVlcywgb3RoZXIpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSB2YWx1ZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBzZXQgPSBuZXcgU2V0KCk7XG4gIGZvciAoY29uc3QgbyBvZiBvdGhlcikge1xuICAgIGlmIChzZXQuaGFzKG8pKSBjb250aW51ZTtcbiAgICBsZXQgdmFsdWUsIGRvbmU7XG4gICAgd2hpbGUgKCh7dmFsdWUsIGRvbmV9ID0gaXRlcmF0b3IubmV4dCgpKSkge1xuICAgICAgaWYgKGRvbmUpIHJldHVybiBmYWxzZTtcbiAgICAgIHNldC5hZGQodmFsdWUpO1xuICAgICAgaWYgKE9iamVjdC5pcyhvLCB2YWx1ZSkpIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBjb3VudCBmcm9tIFwiLi4vY291bnQuanNcIjtcbmltcG9ydCBxdWFudGlsZSBmcm9tIFwiLi4vcXVhbnRpbGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5jZWlsKChtYXggLSBtaW4pIC8gKDIgKiAocXVhbnRpbGUodmFsdWVzLCAwLjc1KSAtIHF1YW50aWxlKHZhbHVlcywgMC4yNSkpICogTWF0aC5wb3coY291bnQodmFsdWVzKSwgLTEgLyAzKSkpO1xufVxuIiwiaW1wb3J0IGNvdW50IGZyb20gXCIuLi9jb3VudC5qc1wiO1xuaW1wb3J0IGRldmlhdGlvbiBmcm9tIFwiLi4vZGV2aWF0aW9uLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcywgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguY2VpbCgobWF4IC0gbWluKSAvICgzLjUgKiBkZXZpYXRpb24odmFsdWVzKSAqIE1hdGgucG93KGNvdW50KHZhbHVlcyksIC0xIC8gMykpKTtcbn1cbiIsImltcG9ydCBjb3VudCBmcm9tIFwiLi4vY291bnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWVzKSB7XG4gIHJldHVybiBNYXRoLmNlaWwoTWF0aC5sb2coY291bnQodmFsdWVzKSkgLyBNYXRoLkxOMikgKyAxO1xufVxuIiwidmFyIGUxMCA9IE1hdGguc3FydCg1MCksXG4gICAgZTUgPSBNYXRoLnNxcnQoMTApLFxuICAgIGUyID0gTWF0aC5zcXJ0KDIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHJldmVyc2UsXG4gICAgICBpID0gLTEsXG4gICAgICBuLFxuICAgICAgdGlja3MsXG4gICAgICBzdGVwO1xuXG4gIHN0b3AgPSArc3RvcCwgc3RhcnQgPSArc3RhcnQsIGNvdW50ID0gK2NvdW50O1xuICBpZiAoc3RhcnQgPT09IHN0b3AgJiYgY291bnQgPiAwKSByZXR1cm4gW3N0YXJ0XTtcbiAgaWYgKHJldmVyc2UgPSBzdG9wIDwgc3RhcnQpIG4gPSBzdGFydCwgc3RhcnQgPSBzdG9wLCBzdG9wID0gbjtcbiAgaWYgKChzdGVwID0gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpKSA9PT0gMCB8fCAhaXNGaW5pdGUoc3RlcCkpIHJldHVybiBbXTtcblxuICBpZiAoc3RlcCA+IDApIHtcbiAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAvIHN0ZXApO1xuICAgIHN0b3AgPSBNYXRoLmZsb29yKHN0b3AgLyBzdGVwKTtcbiAgICB0aWNrcyA9IG5ldyBBcnJheShuID0gTWF0aC5jZWlsKHN0b3AgLSBzdGFydCArIDEpKTtcbiAgICB3aGlsZSAoKytpIDwgbikgdGlja3NbaV0gPSAoc3RhcnQgKyBpKSAqIHN0ZXA7XG4gIH0gZWxzZSB7XG4gICAgc3RlcCA9IC1zdGVwO1xuICAgIHN0YXJ0ID0gTWF0aC5jZWlsKHN0YXJ0ICogc3RlcCk7XG4gICAgc3RvcCA9IE1hdGguZmxvb3Ioc3RvcCAqIHN0ZXApO1xuICAgIHRpY2tzID0gbmV3IEFycmF5KG4gPSBNYXRoLmNlaWwoc3RvcCAtIHN0YXJ0ICsgMSkpO1xuICAgIHdoaWxlICgrK2kgPCBuKSB0aWNrc1tpXSA9IChzdGFydCArIGkpIC8gc3RlcDtcbiAgfVxuXG4gIGlmIChyZXZlcnNlKSB0aWNrcy5yZXZlcnNlKCk7XG5cbiAgcmV0dXJuIHRpY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdGlja0luY3JlbWVudChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHN0ZXAgPSAoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHBvd2VyID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzdGVwKSAvIE1hdGguTE4xMCksXG4gICAgICBlcnJvciA9IHN0ZXAgLyBNYXRoLnBvdygxMCwgcG93ZXIpO1xuICByZXR1cm4gcG93ZXIgPj0gMFxuICAgICAgPyAoZXJyb3IgPj0gZTEwID8gMTAgOiBlcnJvciA+PSBlNSA/IDUgOiBlcnJvciA+PSBlMiA/IDIgOiAxKSAqIE1hdGgucG93KDEwLCBwb3dlcilcbiAgICAgIDogLU1hdGgucG93KDEwLCAtcG93ZXIpIC8gKGVycm9yID49IGUxMCA/IDEwIDogZXJyb3IgPj0gZTUgPyA1IDogZXJyb3IgPj0gZTIgPyAyIDogMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQpIHtcbiAgdmFyIHN0ZXAwID0gTWF0aC5hYnMoc3RvcCAtIHN0YXJ0KSAvIE1hdGgubWF4KDAsIGNvdW50KSxcbiAgICAgIHN0ZXAxID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2coc3RlcDApIC8gTWF0aC5MTjEwKSksXG4gICAgICBlcnJvciA9IHN0ZXAwIC8gc3RlcDE7XG4gIGlmIChlcnJvciA+PSBlMTApIHN0ZXAxICo9IDEwO1xuICBlbHNlIGlmIChlcnJvciA+PSBlNSkgc3RlcDEgKj0gNTtcbiAgZWxzZSBpZiAoZXJyb3IgPj0gZTIpIHN0ZXAxICo9IDI7XG4gIHJldHVybiBzdG9wIDwgc3RhcnQgPyAtc3RlcDEgOiBzdGVwMTtcbn1cbiIsImltcG9ydCBtaW4gZnJvbSBcIi4vbWluLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG1hdHJpeCkge1xuICBpZiAoIShuID0gbWF0cml4Lmxlbmd0aCkpIHJldHVybiBbXTtcbiAgZm9yICh2YXIgaSA9IC0xLCBtID0gbWluKG1hdHJpeCwgbGVuZ3RoKSwgdHJhbnNwb3NlID0gbmV3IEFycmF5KG0pOyArK2kgPCBtOykge1xuICAgIGZvciAodmFyIGogPSAtMSwgbiwgcm93ID0gdHJhbnNwb3NlW2ldID0gbmV3IEFycmF5KG4pOyArK2ogPCBuOykge1xuICAgICAgcm93W2pdID0gbWF0cml4W2pdW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJhbnNwb3NlO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoZCkge1xuICByZXR1cm4gZC5sZW5ndGg7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlvbiguLi5vdGhlcnMpIHtcbiAgY29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuICBmb3IgKGNvbnN0IG90aGVyIG9mIG90aGVycykge1xuICAgIGZvciAoY29uc3QgbyBvZiBvdGhlcikge1xuICAgICAgc2V0LmFkZChvKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNldDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhcmlhbmNlKHZhbHVlcywgdmFsdWVvZikge1xuICBsZXQgY291bnQgPSAwO1xuICBsZXQgZGVsdGE7XG4gIGxldCBtZWFuID0gMDtcbiAgbGV0IHN1bSA9IDA7XG4gIGlmICh2YWx1ZW9mID09PSB1bmRlZmluZWQpIHtcbiAgICBmb3IgKGxldCB2YWx1ZSBvZiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPSBudWxsICYmICh2YWx1ZSA9ICt2YWx1ZSkgPj0gdmFsdWUpIHtcbiAgICAgICAgZGVsdGEgPSB2YWx1ZSAtIG1lYW47XG4gICAgICAgIG1lYW4gKz0gZGVsdGEgLyArK2NvdW50O1xuICAgICAgICBzdW0gKz0gZGVsdGEgKiAodmFsdWUgLSBtZWFuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGV0IGluZGV4ID0gLTE7XG4gICAgZm9yIChsZXQgdmFsdWUgb2YgdmFsdWVzKSB7XG4gICAgICBpZiAoKHZhbHVlID0gdmFsdWVvZih2YWx1ZSwgKytpbmRleCwgdmFsdWVzKSkgIT0gbnVsbCAmJiAodmFsdWUgPSArdmFsdWUpID49IHZhbHVlKSB7XG4gICAgICAgIGRlbHRhID0gdmFsdWUgLSBtZWFuO1xuICAgICAgICBtZWFuICs9IGRlbHRhIC8gKytjb3VudDtcbiAgICAgICAgc3VtICs9IGRlbHRhICogKHZhbHVlIC0gbWVhbik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChjb3VudCA+IDEpIHJldHVybiBzdW0gLyAoY291bnQgLSAxKTtcbn1cbiIsImltcG9ydCB0cmFuc3Bvc2UgZnJvbSBcIi4vdHJhbnNwb3NlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHJhbnNwb3NlKGFyZ3VtZW50cyk7XG59XG4iLCJleHBvcnQgdmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuIiwiaW1wb3J0IHtzbGljZX0gZnJvbSBcIi4vYXJyYXkuanNcIjtcbmltcG9ydCBpZGVudGl0eSBmcm9tIFwiLi9pZGVudGl0eS5qc1wiO1xuXG52YXIgdG9wID0gMSxcbiAgICByaWdodCA9IDIsXG4gICAgYm90dG9tID0gMyxcbiAgICBsZWZ0ID0gNCxcbiAgICBlcHNpbG9uID0gMWUtNjtcblxuZnVuY3Rpb24gdHJhbnNsYXRlWCh4KSB7XG4gIHJldHVybiBcInRyYW5zbGF0ZShcIiArICh4ICsgMC41KSArIFwiLDApXCI7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVkoeSkge1xuICByZXR1cm4gXCJ0cmFuc2xhdGUoMCxcIiArICh5ICsgMC41KSArIFwiKVwiO1xufVxuXG5mdW5jdGlvbiBudW1iZXIoc2NhbGUpIHtcbiAgcmV0dXJuIGQgPT4gK3NjYWxlKGQpO1xufVxuXG5mdW5jdGlvbiBjZW50ZXIoc2NhbGUpIHtcbiAgdmFyIG9mZnNldCA9IE1hdGgubWF4KDAsIHNjYWxlLmJhbmR3aWR0aCgpIC0gMSkgLyAyOyAvLyBBZGp1c3QgZm9yIDAuNXB4IG9mZnNldC5cbiAgaWYgKHNjYWxlLnJvdW5kKCkpIG9mZnNldCA9IE1hdGgucm91bmQob2Zmc2V0KTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGQpIHtcbiAgICByZXR1cm4gK3NjYWxlKGQpICsgb2Zmc2V0O1xuICB9O1xufVxuXG5mdW5jdGlvbiBlbnRlcmluZygpIHtcbiAgcmV0dXJuICF0aGlzLl9fYXhpcztcbn1cblxuZnVuY3Rpb24gYXhpcyhvcmllbnQsIHNjYWxlKSB7XG4gIHZhciB0aWNrQXJndW1lbnRzID0gW10sXG4gICAgICB0aWNrVmFsdWVzID0gbnVsbCxcbiAgICAgIHRpY2tGb3JtYXQgPSBudWxsLFxuICAgICAgdGlja1NpemVJbm5lciA9IDYsXG4gICAgICB0aWNrU2l6ZU91dGVyID0gNixcbiAgICAgIHRpY2tQYWRkaW5nID0gMyxcbiAgICAgIGsgPSBvcmllbnQgPT09IHRvcCB8fCBvcmllbnQgPT09IGxlZnQgPyAtMSA6IDEsXG4gICAgICB4ID0gb3JpZW50ID09PSBsZWZ0IHx8IG9yaWVudCA9PT0gcmlnaHQgPyBcInhcIiA6IFwieVwiLFxuICAgICAgdHJhbnNmb3JtID0gb3JpZW50ID09PSB0b3AgfHwgb3JpZW50ID09PSBib3R0b20gPyB0cmFuc2xhdGVYIDogdHJhbnNsYXRlWTtcblxuICBmdW5jdGlvbiBheGlzKGNvbnRleHQpIHtcbiAgICB2YXIgdmFsdWVzID0gdGlja1ZhbHVlcyA9PSBudWxsID8gKHNjYWxlLnRpY2tzID8gc2NhbGUudGlja3MuYXBwbHkoc2NhbGUsIHRpY2tBcmd1bWVudHMpIDogc2NhbGUuZG9tYWluKCkpIDogdGlja1ZhbHVlcyxcbiAgICAgICAgZm9ybWF0ID0gdGlja0Zvcm1hdCA9PSBudWxsID8gKHNjYWxlLnRpY2tGb3JtYXQgPyBzY2FsZS50aWNrRm9ybWF0LmFwcGx5KHNjYWxlLCB0aWNrQXJndW1lbnRzKSA6IGlkZW50aXR5KSA6IHRpY2tGb3JtYXQsXG4gICAgICAgIHNwYWNpbmcgPSBNYXRoLm1heCh0aWNrU2l6ZUlubmVyLCAwKSArIHRpY2tQYWRkaW5nLFxuICAgICAgICByYW5nZSA9IHNjYWxlLnJhbmdlKCksXG4gICAgICAgIHJhbmdlMCA9ICtyYW5nZVswXSArIDAuNSxcbiAgICAgICAgcmFuZ2UxID0gK3JhbmdlW3JhbmdlLmxlbmd0aCAtIDFdICsgMC41LFxuICAgICAgICBwb3NpdGlvbiA9IChzY2FsZS5iYW5kd2lkdGggPyBjZW50ZXIgOiBudW1iZXIpKHNjYWxlLmNvcHkoKSksXG4gICAgICAgIHNlbGVjdGlvbiA9IGNvbnRleHQuc2VsZWN0aW9uID8gY29udGV4dC5zZWxlY3Rpb24oKSA6IGNvbnRleHQsXG4gICAgICAgIHBhdGggPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiLmRvbWFpblwiKS5kYXRhKFtudWxsXSksXG4gICAgICAgIHRpY2sgPSBzZWxlY3Rpb24uc2VsZWN0QWxsKFwiLnRpY2tcIikuZGF0YSh2YWx1ZXMsIHNjYWxlKS5vcmRlcigpLFxuICAgICAgICB0aWNrRXhpdCA9IHRpY2suZXhpdCgpLFxuICAgICAgICB0aWNrRW50ZXIgPSB0aWNrLmVudGVyKCkuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ0aWNrXCIpLFxuICAgICAgICBsaW5lID0gdGljay5zZWxlY3QoXCJsaW5lXCIpLFxuICAgICAgICB0ZXh0ID0gdGljay5zZWxlY3QoXCJ0ZXh0XCIpO1xuXG4gICAgcGF0aCA9IHBhdGgubWVyZ2UocGF0aC5lbnRlcigpLmluc2VydChcInBhdGhcIiwgXCIudGlja1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiZG9tYWluXCIpXG4gICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiY3VycmVudENvbG9yXCIpKTtcblxuICAgIHRpY2sgPSB0aWNrLm1lcmdlKHRpY2tFbnRlcik7XG5cbiAgICBsaW5lID0gbGluZS5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwibGluZVwiKVxuICAgICAgICAuYXR0cihcInN0cm9rZVwiLCBcImN1cnJlbnRDb2xvclwiKVxuICAgICAgICAuYXR0cih4ICsgXCIyXCIsIGsgKiB0aWNrU2l6ZUlubmVyKSk7XG5cbiAgICB0ZXh0ID0gdGV4dC5tZXJnZSh0aWNrRW50ZXIuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImZpbGxcIiwgXCJjdXJyZW50Q29sb3JcIilcbiAgICAgICAgLmF0dHIoeCwgayAqIHNwYWNpbmcpXG4gICAgICAgIC5hdHRyKFwiZHlcIiwgb3JpZW50ID09PSB0b3AgPyBcIjBlbVwiIDogb3JpZW50ID09PSBib3R0b20gPyBcIjAuNzFlbVwiIDogXCIwLjMyZW1cIikpO1xuXG4gICAgaWYgKGNvbnRleHQgIT09IHNlbGVjdGlvbikge1xuICAgICAgcGF0aCA9IHBhdGgudHJhbnNpdGlvbihjb250ZXh0KTtcbiAgICAgIHRpY2sgPSB0aWNrLnRyYW5zaXRpb24oY29udGV4dCk7XG4gICAgICBsaW5lID0gbGluZS50cmFuc2l0aW9uKGNvbnRleHQpO1xuICAgICAgdGV4dCA9IHRleHQudHJhbnNpdGlvbihjb250ZXh0KTtcblxuICAgICAgdGlja0V4aXQgPSB0aWNrRXhpdC50cmFuc2l0aW9uKGNvbnRleHQpXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGVwc2lsb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gaXNGaW5pdGUoZCA9IHBvc2l0aW9uKGQpKSA/IHRyYW5zZm9ybShkKSA6IHRoaXMuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpOyB9KTtcblxuICAgICAgdGlja0VudGVyXG4gICAgICAgICAgLmF0dHIoXCJvcGFjaXR5XCIsIGVwc2lsb24pXG4gICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24oZCkgeyB2YXIgcCA9IHRoaXMucGFyZW50Tm9kZS5fX2F4aXM7IHJldHVybiB0cmFuc2Zvcm0ocCAmJiBpc0Zpbml0ZShwID0gcChkKSkgPyBwIDogcG9zaXRpb24oZCkpOyB9KTtcbiAgICB9XG5cbiAgICB0aWNrRXhpdC5yZW1vdmUoKTtcblxuICAgIHBhdGhcbiAgICAgICAgLmF0dHIoXCJkXCIsIG9yaWVudCA9PT0gbGVmdCB8fCBvcmllbnQgPT0gcmlnaHRcbiAgICAgICAgICAgID8gKHRpY2tTaXplT3V0ZXIgPyBcIk1cIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCIsXCIgKyByYW5nZTAgKyBcIkgwLjVWXCIgKyByYW5nZTEgKyBcIkhcIiArIGsgKiB0aWNrU2l6ZU91dGVyIDogXCJNMC41LFwiICsgcmFuZ2UwICsgXCJWXCIgKyByYW5nZTEpXG4gICAgICAgICAgICA6ICh0aWNrU2l6ZU91dGVyID8gXCJNXCIgKyByYW5nZTAgKyBcIixcIiArIGsgKiB0aWNrU2l6ZU91dGVyICsgXCJWMC41SFwiICsgcmFuZ2UxICsgXCJWXCIgKyBrICogdGlja1NpemVPdXRlciA6IFwiTVwiICsgcmFuZ2UwICsgXCIsMC41SFwiICsgcmFuZ2UxKSk7XG5cbiAgICB0aWNrXG4gICAgICAgIC5hdHRyKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbihkKSB7IHJldHVybiB0cmFuc2Zvcm0ocG9zaXRpb24oZCkpOyB9KTtcblxuICAgIGxpbmVcbiAgICAgICAgLmF0dHIoeCArIFwiMlwiLCBrICogdGlja1NpemVJbm5lcik7XG5cbiAgICB0ZXh0XG4gICAgICAgIC5hdHRyKHgsIGsgKiBzcGFjaW5nKVxuICAgICAgICAudGV4dChmb3JtYXQpO1xuXG4gICAgc2VsZWN0aW9uLmZpbHRlcihlbnRlcmluZylcbiAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwibm9uZVwiKVxuICAgICAgICAuYXR0cihcImZvbnQtc2l6ZVwiLCAxMClcbiAgICAgICAgLmF0dHIoXCJmb250LWZhbWlseVwiLCBcInNhbnMtc2VyaWZcIilcbiAgICAgICAgLmF0dHIoXCJ0ZXh0LWFuY2hvclwiLCBvcmllbnQgPT09IHJpZ2h0ID8gXCJzdGFydFwiIDogb3JpZW50ID09PSBsZWZ0ID8gXCJlbmRcIiA6IFwibWlkZGxlXCIpO1xuXG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkgeyB0aGlzLl9fYXhpcyA9IHBvc2l0aW9uOyB9KTtcbiAgfVxuXG4gIGF4aXMuc2NhbGUgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc2NhbGUgPSBfLCBheGlzKSA6IHNjYWxlO1xuICB9O1xuXG4gIGF4aXMudGlja3MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGlja0FyZ3VtZW50cyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzKSwgYXhpcztcbiAgfTtcblxuICBheGlzLnRpY2tBcmd1bWVudHMgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja0FyZ3VtZW50cyA9IF8gPT0gbnVsbCA/IFtdIDogc2xpY2UuY2FsbChfKSwgYXhpcykgOiB0aWNrQXJndW1lbnRzLnNsaWNlKCk7XG4gIH07XG5cbiAgYXhpcy50aWNrVmFsdWVzID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tWYWx1ZXMgPSBfID09IG51bGwgPyBudWxsIDogc2xpY2UuY2FsbChfKSwgYXhpcykgOiB0aWNrVmFsdWVzICYmIHRpY2tWYWx1ZXMuc2xpY2UoKTtcbiAgfTtcblxuICBheGlzLnRpY2tGb3JtYXQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja0Zvcm1hdCA9IF8sIGF4aXMpIDogdGlja0Zvcm1hdDtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplSW5uZXIgPSB0aWNrU2l6ZU91dGVyID0gK18sIGF4aXMpIDogdGlja1NpemVJbm5lcjtcbiAgfTtcblxuICBheGlzLnRpY2tTaXplSW5uZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1NpemVJbm5lciA9ICtfLCBheGlzKSA6IHRpY2tTaXplSW5uZXI7XG4gIH07XG5cbiAgYXhpcy50aWNrU2l6ZU91dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHRpY2tTaXplT3V0ZXIgPSArXywgYXhpcykgOiB0aWNrU2l6ZU91dGVyO1xuICB9O1xuXG4gIGF4aXMudGlja1BhZGRpbmcgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodGlja1BhZGRpbmcgPSArXywgYXhpcykgOiB0aWNrUGFkZGluZztcbiAgfTtcblxuICByZXR1cm4gYXhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNUb3Aoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXModG9wLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzUmlnaHQoc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMocmlnaHQsIHNjYWxlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF4aXNCb3R0b20oc2NhbGUpIHtcbiAgcmV0dXJuIGF4aXMoYm90dG9tLCBzY2FsZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBheGlzTGVmdChzY2FsZSkge1xuICByZXR1cm4gYXhpcyhsZWZ0LCBzY2FsZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih4KSB7XG4gIHJldHVybiB4O1xufVxuIiwiZXhwb3J0IHtcbiAgYXhpc1RvcCxcbiAgYXhpc1JpZ2h0LFxuICBheGlzQm90dG9tLFxuICBheGlzTGVmdFxufSBmcm9tIFwiLi9heGlzLmpzXCI7XG4iLCJpbXBvcnQgZGVmaW5lLCB7ZXh0ZW5kfSBmcm9tIFwiLi9kZWZpbmUuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbG9yKCkge31cblxuZXhwb3J0IHZhciBkYXJrZXIgPSAwLjc7XG5leHBvcnQgdmFyIGJyaWdodGVyID0gMSAvIGRhcmtlcjtcblxudmFyIHJlSSA9IFwiXFxcXHMqKFsrLV0/XFxcXGQrKVxcXFxzKlwiLFxuICAgIHJlTiA9IFwiXFxcXHMqKFsrLV0/XFxcXGQqXFxcXC4/XFxcXGQrKD86W2VFXVsrLV0/XFxcXGQrKT8pXFxcXHMqXCIsXG4gICAgcmVQID0gXCJcXFxccyooWystXT9cXFxcZCpcXFxcLj9cXFxcZCsoPzpbZUVdWystXT9cXFxcZCspPyklXFxcXHMqXCIsXG4gICAgcmVIZXggPSAvXiMoWzAtOWEtZl17Myw4fSkkLyxcbiAgICByZVJnYkludGVnZXIgPSBuZXcgUmVnRXhwKFwiXnJnYlxcXFwoXCIgKyBbcmVJLCByZUksIHJlSV0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYlBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXnJnYlxcXFwoXCIgKyBbcmVQLCByZVAsIHJlUF0gKyBcIlxcXFwpJFwiKSxcbiAgICByZVJnYmFJbnRlZ2VyID0gbmV3IFJlZ0V4cChcIl5yZ2JhXFxcXChcIiArIFtyZUksIHJlSSwgcmVJLCByZU5dICsgXCJcXFxcKSRcIiksXG4gICAgcmVSZ2JhUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJecmdiYVxcXFwoXCIgKyBbcmVQLCByZVAsIHJlUCwgcmVOXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlSHNsUGVyY2VudCA9IG5ldyBSZWdFeHAoXCJeaHNsXFxcXChcIiArIFtyZU4sIHJlUCwgcmVQXSArIFwiXFxcXCkkXCIpLFxuICAgIHJlSHNsYVBlcmNlbnQgPSBuZXcgUmVnRXhwKFwiXmhzbGFcXFxcKFwiICsgW3JlTiwgcmVQLCByZVAsIHJlTl0gKyBcIlxcXFwpJFwiKTtcblxudmFyIG5hbWVkID0ge1xuICBhbGljZWJsdWU6IDB4ZjBmOGZmLFxuICBhbnRpcXVld2hpdGU6IDB4ZmFlYmQ3LFxuICBhcXVhOiAweDAwZmZmZixcbiAgYXF1YW1hcmluZTogMHg3ZmZmZDQsXG4gIGF6dXJlOiAweGYwZmZmZixcbiAgYmVpZ2U6IDB4ZjVmNWRjLFxuICBiaXNxdWU6IDB4ZmZlNGM0LFxuICBibGFjazogMHgwMDAwMDAsXG4gIGJsYW5jaGVkYWxtb25kOiAweGZmZWJjZCxcbiAgYmx1ZTogMHgwMDAwZmYsXG4gIGJsdWV2aW9sZXQ6IDB4OGEyYmUyLFxuICBicm93bjogMHhhNTJhMmEsXG4gIGJ1cmx5d29vZDogMHhkZWI4ODcsXG4gIGNhZGV0Ymx1ZTogMHg1ZjllYTAsXG4gIGNoYXJ0cmV1c2U6IDB4N2ZmZjAwLFxuICBjaG9jb2xhdGU6IDB4ZDI2OTFlLFxuICBjb3JhbDogMHhmZjdmNTAsXG4gIGNvcm5mbG93ZXJibHVlOiAweDY0OTVlZCxcbiAgY29ybnNpbGs6IDB4ZmZmOGRjLFxuICBjcmltc29uOiAweGRjMTQzYyxcbiAgY3lhbjogMHgwMGZmZmYsXG4gIGRhcmtibHVlOiAweDAwMDA4YixcbiAgZGFya2N5YW46IDB4MDA4YjhiLFxuICBkYXJrZ29sZGVucm9kOiAweGI4ODYwYixcbiAgZGFya2dyYXk6IDB4YTlhOWE5LFxuICBkYXJrZ3JlZW46IDB4MDA2NDAwLFxuICBkYXJrZ3JleTogMHhhOWE5YTksXG4gIGRhcmtraGFraTogMHhiZGI3NmIsXG4gIGRhcmttYWdlbnRhOiAweDhiMDA4YixcbiAgZGFya29saXZlZ3JlZW46IDB4NTU2YjJmLFxuICBkYXJrb3JhbmdlOiAweGZmOGMwMCxcbiAgZGFya29yY2hpZDogMHg5OTMyY2MsXG4gIGRhcmtyZWQ6IDB4OGIwMDAwLFxuICBkYXJrc2FsbW9uOiAweGU5OTY3YSxcbiAgZGFya3NlYWdyZWVuOiAweDhmYmM4ZixcbiAgZGFya3NsYXRlYmx1ZTogMHg0ODNkOGIsXG4gIGRhcmtzbGF0ZWdyYXk6IDB4MmY0ZjRmLFxuICBkYXJrc2xhdGVncmV5OiAweDJmNGY0ZixcbiAgZGFya3R1cnF1b2lzZTogMHgwMGNlZDEsXG4gIGRhcmt2aW9sZXQ6IDB4OTQwMGQzLFxuICBkZWVwcGluazogMHhmZjE0OTMsXG4gIGRlZXBza3libHVlOiAweDAwYmZmZixcbiAgZGltZ3JheTogMHg2OTY5NjksXG4gIGRpbWdyZXk6IDB4Njk2OTY5LFxuICBkb2RnZXJibHVlOiAweDFlOTBmZixcbiAgZmlyZWJyaWNrOiAweGIyMjIyMixcbiAgZmxvcmFsd2hpdGU6IDB4ZmZmYWYwLFxuICBmb3Jlc3RncmVlbjogMHgyMjhiMjIsXG4gIGZ1Y2hzaWE6IDB4ZmYwMGZmLFxuICBnYWluc2Jvcm86IDB4ZGNkY2RjLFxuICBnaG9zdHdoaXRlOiAweGY4ZjhmZixcbiAgZ29sZDogMHhmZmQ3MDAsXG4gIGdvbGRlbnJvZDogMHhkYWE1MjAsXG4gIGdyYXk6IDB4ODA4MDgwLFxuICBncmVlbjogMHgwMDgwMDAsXG4gIGdyZWVueWVsbG93OiAweGFkZmYyZixcbiAgZ3JleTogMHg4MDgwODAsXG4gIGhvbmV5ZGV3OiAweGYwZmZmMCxcbiAgaG90cGluazogMHhmZjY5YjQsXG4gIGluZGlhbnJlZDogMHhjZDVjNWMsXG4gIGluZGlnbzogMHg0YjAwODIsXG4gIGl2b3J5OiAweGZmZmZmMCxcbiAga2hha2k6IDB4ZjBlNjhjLFxuICBsYXZlbmRlcjogMHhlNmU2ZmEsXG4gIGxhdmVuZGVyYmx1c2g6IDB4ZmZmMGY1LFxuICBsYXduZ3JlZW46IDB4N2NmYzAwLFxuICBsZW1vbmNoaWZmb246IDB4ZmZmYWNkLFxuICBsaWdodGJsdWU6IDB4YWRkOGU2LFxuICBsaWdodGNvcmFsOiAweGYwODA4MCxcbiAgbGlnaHRjeWFuOiAweGUwZmZmZixcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6IDB4ZmFmYWQyLFxuICBsaWdodGdyYXk6IDB4ZDNkM2QzLFxuICBsaWdodGdyZWVuOiAweDkwZWU5MCxcbiAgbGlnaHRncmV5OiAweGQzZDNkMyxcbiAgbGlnaHRwaW5rOiAweGZmYjZjMSxcbiAgbGlnaHRzYWxtb246IDB4ZmZhMDdhLFxuICBsaWdodHNlYWdyZWVuOiAweDIwYjJhYSxcbiAgbGlnaHRza3libHVlOiAweDg3Y2VmYSxcbiAgbGlnaHRzbGF0ZWdyYXk6IDB4Nzc4ODk5LFxuICBsaWdodHNsYXRlZ3JleTogMHg3Nzg4OTksXG4gIGxpZ2h0c3RlZWxibHVlOiAweGIwYzRkZSxcbiAgbGlnaHR5ZWxsb3c6IDB4ZmZmZmUwLFxuICBsaW1lOiAweDAwZmYwMCxcbiAgbGltZWdyZWVuOiAweDMyY2QzMixcbiAgbGluZW46IDB4ZmFmMGU2LFxuICBtYWdlbnRhOiAweGZmMDBmZixcbiAgbWFyb29uOiAweDgwMDAwMCxcbiAgbWVkaXVtYXF1YW1hcmluZTogMHg2NmNkYWEsXG4gIG1lZGl1bWJsdWU6IDB4MDAwMGNkLFxuICBtZWRpdW1vcmNoaWQ6IDB4YmE1NWQzLFxuICBtZWRpdW1wdXJwbGU6IDB4OTM3MGRiLFxuICBtZWRpdW1zZWFncmVlbjogMHgzY2IzNzEsXG4gIG1lZGl1bXNsYXRlYmx1ZTogMHg3YjY4ZWUsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAweDAwZmE5YSxcbiAgbWVkaXVtdHVycXVvaXNlOiAweDQ4ZDFjYyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAweGM3MTU4NSxcbiAgbWlkbmlnaHRibHVlOiAweDE5MTk3MCxcbiAgbWludGNyZWFtOiAweGY1ZmZmYSxcbiAgbWlzdHlyb3NlOiAweGZmZTRlMSxcbiAgbW9jY2FzaW46IDB4ZmZlNGI1LFxuICBuYXZham93aGl0ZTogMHhmZmRlYWQsXG4gIG5hdnk6IDB4MDAwMDgwLFxuICBvbGRsYWNlOiAweGZkZjVlNixcbiAgb2xpdmU6IDB4ODA4MDAwLFxuICBvbGl2ZWRyYWI6IDB4NmI4ZTIzLFxuICBvcmFuZ2U6IDB4ZmZhNTAwLFxuICBvcmFuZ2VyZWQ6IDB4ZmY0NTAwLFxuICBvcmNoaWQ6IDB4ZGE3MGQ2LFxuICBwYWxlZ29sZGVucm9kOiAweGVlZThhYSxcbiAgcGFsZWdyZWVuOiAweDk4ZmI5OCxcbiAgcGFsZXR1cnF1b2lzZTogMHhhZmVlZWUsXG4gIHBhbGV2aW9sZXRyZWQ6IDB4ZGI3MDkzLFxuICBwYXBheWF3aGlwOiAweGZmZWZkNSxcbiAgcGVhY2hwdWZmOiAweGZmZGFiOSxcbiAgcGVydTogMHhjZDg1M2YsXG4gIHBpbms6IDB4ZmZjMGNiLFxuICBwbHVtOiAweGRkYTBkZCxcbiAgcG93ZGVyYmx1ZTogMHhiMGUwZTYsXG4gIHB1cnBsZTogMHg4MDAwODAsXG4gIHJlYmVjY2FwdXJwbGU6IDB4NjYzMzk5LFxuICByZWQ6IDB4ZmYwMDAwLFxuICByb3N5YnJvd246IDB4YmM4ZjhmLFxuICByb3lhbGJsdWU6IDB4NDE2OWUxLFxuICBzYWRkbGVicm93bjogMHg4YjQ1MTMsXG4gIHNhbG1vbjogMHhmYTgwNzIsXG4gIHNhbmR5YnJvd246IDB4ZjRhNDYwLFxuICBzZWFncmVlbjogMHgyZThiNTcsXG4gIHNlYXNoZWxsOiAweGZmZjVlZSxcbiAgc2llbm5hOiAweGEwNTIyZCxcbiAgc2lsdmVyOiAweGMwYzBjMCxcbiAgc2t5Ymx1ZTogMHg4N2NlZWIsXG4gIHNsYXRlYmx1ZTogMHg2YTVhY2QsXG4gIHNsYXRlZ3JheTogMHg3MDgwOTAsXG4gIHNsYXRlZ3JleTogMHg3MDgwOTAsXG4gIHNub3c6IDB4ZmZmYWZhLFxuICBzcHJpbmdncmVlbjogMHgwMGZmN2YsXG4gIHN0ZWVsYmx1ZTogMHg0NjgyYjQsXG4gIHRhbjogMHhkMmI0OGMsXG4gIHRlYWw6IDB4MDA4MDgwLFxuICB0aGlzdGxlOiAweGQ4YmZkOCxcbiAgdG9tYXRvOiAweGZmNjM0NyxcbiAgdHVycXVvaXNlOiAweDQwZTBkMCxcbiAgdmlvbGV0OiAweGVlODJlZSxcbiAgd2hlYXQ6IDB4ZjVkZWIzLFxuICB3aGl0ZTogMHhmZmZmZmYsXG4gIHdoaXRlc21va2U6IDB4ZjVmNWY1LFxuICB5ZWxsb3c6IDB4ZmZmZjAwLFxuICB5ZWxsb3dncmVlbjogMHg5YWNkMzJcbn07XG5cbmRlZmluZShDb2xvciwgY29sb3IsIHtcbiAgY29weTogZnVuY3Rpb24oY2hhbm5lbHMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgdGhpcy5jb25zdHJ1Y3RvciwgdGhpcywgY2hhbm5lbHMpO1xuICB9LFxuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmdiKCkuZGlzcGxheWFibGUoKTtcbiAgfSxcbiAgaGV4OiBjb2xvcl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogY29sb3JfZm9ybWF0SGV4LFxuICBmb3JtYXRIc2w6IGNvbG9yX2Zvcm1hdEhzbCxcbiAgZm9ybWF0UmdiOiBjb2xvcl9mb3JtYXRSZ2IsXG4gIHRvU3RyaW5nOiBjb2xvcl9mb3JtYXRSZ2Jcbn0pO1xuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIZXgoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdEhleCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRIc2woKSB7XG4gIHJldHVybiBoc2xDb252ZXJ0KHRoaXMpLmZvcm1hdEhzbCgpO1xufVxuXG5mdW5jdGlvbiBjb2xvcl9mb3JtYXRSZ2IoKSB7XG4gIHJldHVybiB0aGlzLnJnYigpLmZvcm1hdFJnYigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xvcihmb3JtYXQpIHtcbiAgdmFyIG0sIGw7XG4gIGZvcm1hdCA9IChmb3JtYXQgKyBcIlwiKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIChtID0gcmVIZXguZXhlYyhmb3JtYXQpKSA/IChsID0gbVsxXS5sZW5ndGgsIG0gPSBwYXJzZUludChtWzFdLCAxNiksIGwgPT09IDYgPyByZ2JuKG0pIC8vICNmZjAwMDBcbiAgICAgIDogbCA9PT0gMyA/IG5ldyBSZ2IoKG0gPj4gOCAmIDB4ZikgfCAobSA+PiA0ICYgMHhmMCksIChtID4+IDQgJiAweGYpIHwgKG0gJiAweGYwKSwgKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSwgMSkgLy8gI2YwMFxuICAgICAgOiBsID09PSA4ID8gcmdiYShtID4+IDI0ICYgMHhmZiwgbSA+PiAxNiAmIDB4ZmYsIG0gPj4gOCAmIDB4ZmYsIChtICYgMHhmZikgLyAweGZmKSAvLyAjZmYwMDAwMDBcbiAgICAgIDogbCA9PT0gNCA/IHJnYmEoKG0gPj4gMTIgJiAweGYpIHwgKG0gPj4gOCAmIDB4ZjApLCAobSA+PiA4ICYgMHhmKSB8IChtID4+IDQgJiAweGYwKSwgKG0gPj4gNCAmIDB4ZikgfCAobSAmIDB4ZjApLCAoKChtICYgMHhmKSA8PCA0KSB8IChtICYgMHhmKSkgLyAweGZmKSAvLyAjZjAwMFxuICAgICAgOiBudWxsKSAvLyBpbnZhbGlkIGhleFxuICAgICAgOiAobSA9IHJlUmdiSW50ZWdlci5leGVjKGZvcm1hdCkpID8gbmV3IFJnYihtWzFdLCBtWzJdLCBtWzNdLCAxKSAvLyByZ2IoMjU1LCAwLCAwKVxuICAgICAgOiAobSA9IHJlUmdiUGVyY2VudC5leGVjKGZvcm1hdCkpID8gbmV3IFJnYihtWzFdICogMjU1IC8gMTAwLCBtWzJdICogMjU1IC8gMTAwLCBtWzNdICogMjU1IC8gMTAwLCAxKSAvLyByZ2IoMTAwJSwgMCUsIDAlKVxuICAgICAgOiAobSA9IHJlUmdiYUludGVnZXIuZXhlYyhmb3JtYXQpKSA/IHJnYmEobVsxXSwgbVsyXSwgbVszXSwgbVs0XSkgLy8gcmdiYSgyNTUsIDAsIDAsIDEpXG4gICAgICA6IChtID0gcmVSZ2JhUGVyY2VudC5leGVjKGZvcm1hdCkpID8gcmdiYShtWzFdICogMjU1IC8gMTAwLCBtWzJdICogMjU1IC8gMTAwLCBtWzNdICogMjU1IC8gMTAwLCBtWzRdKSAvLyByZ2IoMTAwJSwgMCUsIDAlLCAxKVxuICAgICAgOiAobSA9IHJlSHNsUGVyY2VudC5leGVjKGZvcm1hdCkpID8gaHNsYShtWzFdLCBtWzJdIC8gMTAwLCBtWzNdIC8gMTAwLCAxKSAvLyBoc2woMTIwLCA1MCUsIDUwJSlcbiAgICAgIDogKG0gPSByZUhzbGFQZXJjZW50LmV4ZWMoZm9ybWF0KSkgPyBoc2xhKG1bMV0sIG1bMl0gLyAxMDAsIG1bM10gLyAxMDAsIG1bNF0pIC8vIGhzbGEoMTIwLCA1MCUsIDUwJSwgMSlcbiAgICAgIDogbmFtZWQuaGFzT3duUHJvcGVydHkoZm9ybWF0KSA/IHJnYm4obmFtZWRbZm9ybWF0XSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIDogZm9ybWF0ID09PSBcInRyYW5zcGFyZW50XCIgPyBuZXcgUmdiKE5hTiwgTmFOLCBOYU4sIDApXG4gICAgICA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHJnYm4obikge1xuICByZXR1cm4gbmV3IFJnYihuID4+IDE2ICYgMHhmZiwgbiA+PiA4ICYgMHhmZiwgbiAmIDB4ZmYsIDEpO1xufVxuXG5mdW5jdGlvbiByZ2JhKHIsIGcsIGIsIGEpIHtcbiAgaWYgKGEgPD0gMCkgciA9IGcgPSBiID0gTmFOO1xuICByZXR1cm4gbmV3IFJnYihyLCBnLCBiLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYkNvbnZlcnQobykge1xuICBpZiAoIShvIGluc3RhbmNlb2YgQ29sb3IpKSBvID0gY29sb3Iobyk7XG4gIGlmICghbykgcmV0dXJuIG5ldyBSZ2I7XG4gIG8gPSBvLnJnYigpO1xuICByZXR1cm4gbmV3IFJnYihvLnIsIG8uZywgby5iLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiKHIsIGcsIGIsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyByZ2JDb252ZXJ0KHIpIDogbmV3IFJnYihyLCBnLCBiLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZ2IociwgZywgYiwgb3BhY2l0eSkge1xuICB0aGlzLnIgPSArcjtcbiAgdGhpcy5nID0gK2c7XG4gIHRoaXMuYiA9ICtiO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKFJnYiwgcmdiLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICBrID0gayA9PSBudWxsID8gYnJpZ2h0ZXIgOiBNYXRoLnBvdyhicmlnaHRlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBSZ2IodGhpcy5yICogaywgdGhpcy5nICogaywgdGhpcy5iICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgZGlzcGxheWFibGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoLTAuNSA8PSB0aGlzLnIgJiYgdGhpcy5yIDwgMjU1LjUpXG4gICAgICAgICYmICgtMC41IDw9IHRoaXMuZyAmJiB0aGlzLmcgPCAyNTUuNSlcbiAgICAgICAgJiYgKC0wLjUgPD0gdGhpcy5iICYmIHRoaXMuYiA8IDI1NS41KVxuICAgICAgICAmJiAoMCA8PSB0aGlzLm9wYWNpdHkgJiYgdGhpcy5vcGFjaXR5IDw9IDEpO1xuICB9LFxuICBoZXg6IHJnYl9mb3JtYXRIZXgsIC8vIERlcHJlY2F0ZWQhIFVzZSBjb2xvci5mb3JtYXRIZXguXG4gIGZvcm1hdEhleDogcmdiX2Zvcm1hdEhleCxcbiAgZm9ybWF0UmdiOiByZ2JfZm9ybWF0UmdiLFxuICB0b1N0cmluZzogcmdiX2Zvcm1hdFJnYlxufSkpO1xuXG5mdW5jdGlvbiByZ2JfZm9ybWF0SGV4KCkge1xuICByZXR1cm4gXCIjXCIgKyBoZXgodGhpcy5yKSArIGhleCh0aGlzLmcpICsgaGV4KHRoaXMuYik7XG59XG5cbmZ1bmN0aW9uIHJnYl9mb3JtYXRSZ2IoKSB7XG4gIHZhciBhID0gdGhpcy5vcGFjaXR5OyBhID0gaXNOYU4oYSkgPyAxIDogTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgYSkpO1xuICByZXR1cm4gKGEgPT09IDEgPyBcInJnYihcIiA6IFwicmdiYShcIilcbiAgICAgICsgTWF0aC5tYXgoMCwgTWF0aC5taW4oMjU1LCBNYXRoLnJvdW5kKHRoaXMucikgfHwgMCkpICsgXCIsIFwiXG4gICAgICArIE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh0aGlzLmcpIHx8IDApKSArIFwiLCBcIlxuICAgICAgKyBNYXRoLm1heCgwLCBNYXRoLm1pbigyNTUsIE1hdGgucm91bmQodGhpcy5iKSB8fCAwKSlcbiAgICAgICsgKGEgPT09IDEgPyBcIilcIiA6IFwiLCBcIiArIGEgKyBcIilcIik7XG59XG5cbmZ1bmN0aW9uIGhleCh2YWx1ZSkge1xuICB2YWx1ZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDI1NSwgTWF0aC5yb3VuZCh2YWx1ZSkgfHwgMCkpO1xuICByZXR1cm4gKHZhbHVlIDwgMTYgPyBcIjBcIiA6IFwiXCIpICsgdmFsdWUudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiBoc2xhKGgsIHMsIGwsIGEpIHtcbiAgaWYgKGEgPD0gMCkgaCA9IHMgPSBsID0gTmFOO1xuICBlbHNlIGlmIChsIDw9IDAgfHwgbCA+PSAxKSBoID0gcyA9IE5hTjtcbiAgZWxzZSBpZiAocyA8PSAwKSBoID0gTmFOO1xuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhzbENvbnZlcnQobykge1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG5ldyBIc2woby5oLCBvLnMsIG8ubCwgby5vcGFjaXR5KTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIENvbG9yKSkgbyA9IGNvbG9yKG8pO1xuICBpZiAoIW8pIHJldHVybiBuZXcgSHNsO1xuICBpZiAobyBpbnN0YW5jZW9mIEhzbCkgcmV0dXJuIG87XG4gIG8gPSBvLnJnYigpO1xuICB2YXIgciA9IG8uciAvIDI1NSxcbiAgICAgIGcgPSBvLmcgLyAyNTUsXG4gICAgICBiID0gby5iIC8gMjU1LFxuICAgICAgbWluID0gTWF0aC5taW4ociwgZywgYiksXG4gICAgICBtYXggPSBNYXRoLm1heChyLCBnLCBiKSxcbiAgICAgIGggPSBOYU4sXG4gICAgICBzID0gbWF4IC0gbWluLFxuICAgICAgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgaWYgKHMpIHtcbiAgICBpZiAociA9PT0gbWF4KSBoID0gKGcgLSBiKSAvIHMgKyAoZyA8IGIpICogNjtcbiAgICBlbHNlIGlmIChnID09PSBtYXgpIGggPSAoYiAtIHIpIC8gcyArIDI7XG4gICAgZWxzZSBoID0gKHIgLSBnKSAvIHMgKyA0O1xuICAgIHMgLz0gbCA8IDAuNSA/IG1heCArIG1pbiA6IDIgLSBtYXggLSBtaW47XG4gICAgaCAqPSA2MDtcbiAgfSBlbHNlIHtcbiAgICBzID0gbCA+IDAgJiYgbCA8IDEgPyAwIDogaDtcbiAgfVxuICByZXR1cm4gbmV3IEhzbChoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHNsKGgsIHMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoc2xDb252ZXJ0KGgpIDogbmV3IEhzbChoLCBzLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmZ1bmN0aW9uIEhzbChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoSHNsLCBoc2wsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IEhzbCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBIc2wodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGggPSB0aGlzLmggJSAzNjAgKyAodGhpcy5oIDwgMCkgKiAzNjAsXG4gICAgICAgIHMgPSBpc05hTihoKSB8fCBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyxcbiAgICAgICAgbCA9IHRoaXMubCxcbiAgICAgICAgbTIgPSBsICsgKGwgPCAwLjUgPyBsIDogMSAtIGwpICogcyxcbiAgICAgICAgbTEgPSAyICogbCAtIG0yO1xuICAgIHJldHVybiBuZXcgUmdiKFxuICAgICAgaHNsMnJnYihoID49IDI0MCA/IGggLSAyNDAgOiBoICsgMTIwLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoLCBtMSwgbTIpLFxuICAgICAgaHNsMnJnYihoIDwgMTIwID8gaCArIDI0MCA6IGggLSAxMjAsIG0xLCBtMiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9LFxuICBkaXNwbGF5YWJsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICgwIDw9IHRoaXMucyAmJiB0aGlzLnMgPD0gMSB8fCBpc05hTih0aGlzLnMpKVxuICAgICAgICAmJiAoMCA8PSB0aGlzLmwgJiYgdGhpcy5sIDw9IDEpXG4gICAgICAgICYmICgwIDw9IHRoaXMub3BhY2l0eSAmJiB0aGlzLm9wYWNpdHkgPD0gMSk7XG4gIH0sXG4gIGZvcm1hdEhzbDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEgPSB0aGlzLm9wYWNpdHk7IGEgPSBpc05hTihhKSA/IDEgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCBhKSk7XG4gICAgcmV0dXJuIChhID09PSAxID8gXCJoc2woXCIgOiBcImhzbGEoXCIpXG4gICAgICAgICsgKHRoaXMuaCB8fCAwKSArIFwiLCBcIlxuICAgICAgICArICh0aGlzLnMgfHwgMCkgKiAxMDAgKyBcIiUsIFwiXG4gICAgICAgICsgKHRoaXMubCB8fCAwKSAqIDEwMCArIFwiJVwiXG4gICAgICAgICsgKGEgPT09IDEgPyBcIilcIiA6IFwiLCBcIiArIGEgKyBcIilcIik7XG4gIH1cbn0pKTtcblxuLyogRnJvbSBGdkQgMTMuMzcsIENTUyBDb2xvciBNb2R1bGUgTGV2ZWwgMyAqL1xuZnVuY3Rpb24gaHNsMnJnYihoLCBtMSwgbTIpIHtcbiAgcmV0dXJuIChoIDwgNjAgPyBtMSArIChtMiAtIG0xKSAqIGggLyA2MFxuICAgICAgOiBoIDwgMTgwID8gbTJcbiAgICAgIDogaCA8IDI0MCA/IG0xICsgKG0yIC0gbTEpICogKDI0MCAtIGgpIC8gNjBcbiAgICAgIDogbTEpICogMjU1O1xufVxuIiwiaW1wb3J0IGRlZmluZSwge2V4dGVuZH0gZnJvbSBcIi4vZGVmaW5lLmpzXCI7XG5pbXBvcnQge0NvbG9yLCByZ2JDb252ZXJ0LCBSZ2IsIGRhcmtlciwgYnJpZ2h0ZXJ9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5pbXBvcnQge2RlZ3JlZXMsIHJhZGlhbnN9IGZyb20gXCIuL21hdGguanNcIjtcblxudmFyIEEgPSAtMC4xNDg2MSxcbiAgICBCID0gKzEuNzgyNzcsXG4gICAgQyA9IC0wLjI5MjI3LFxuICAgIEQgPSAtMC45MDY0OSxcbiAgICBFID0gKzEuOTcyOTQsXG4gICAgRUQgPSBFICogRCxcbiAgICBFQiA9IEUgKiBCLFxuICAgIEJDX0RBID0gQiAqIEMgLSBEICogQTtcblxuZnVuY3Rpb24gY3ViZWhlbGl4Q29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgQ3ViZWhlbGl4KSByZXR1cm4gbmV3IEN1YmVoZWxpeChvLmgsIG8ucywgby5sLCBvLm9wYWNpdHkpO1xuICBpZiAoIShvIGluc3RhbmNlb2YgUmdiKSkgbyA9IHJnYkNvbnZlcnQobyk7XG4gIHZhciByID0gby5yIC8gMjU1LFxuICAgICAgZyA9IG8uZyAvIDI1NSxcbiAgICAgIGIgPSBvLmIgLyAyNTUsXG4gICAgICBsID0gKEJDX0RBICogYiArIEVEICogciAtIEVCICogZykgLyAoQkNfREEgKyBFRCAtIEVCKSxcbiAgICAgIGJsID0gYiAtIGwsXG4gICAgICBrID0gKEUgKiAoZyAtIGwpIC0gQyAqIGJsKSAvIEQsXG4gICAgICBzID0gTWF0aC5zcXJ0KGsgKiBrICsgYmwgKiBibCkgLyAoRSAqIGwgKiAoMSAtIGwpKSwgLy8gTmFOIGlmIGw9MCBvciBsPTFcbiAgICAgIGggPSBzID8gTWF0aC5hdGFuMihrLCBibCkgKiBkZWdyZWVzIC0gMTIwIDogTmFOO1xuICByZXR1cm4gbmV3IEN1YmVoZWxpeChoIDwgMCA/IGggKyAzNjAgOiBoLCBzLCBsLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWJlaGVsaXgoaCwgcywgbCwgb3BhY2l0eSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IGN1YmVoZWxpeENvbnZlcnQoaCkgOiBuZXcgQ3ViZWhlbGl4KGgsIHMsIGwsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEN1YmVoZWxpeChoLCBzLCBsLCBvcGFjaXR5KSB7XG4gIHRoaXMuaCA9ICtoO1xuICB0aGlzLnMgPSArcztcbiAgdGhpcy5sID0gK2w7XG4gIHRoaXMub3BhY2l0eSA9ICtvcGFjaXR5O1xufVxuXG5kZWZpbmUoQ3ViZWhlbGl4LCBjdWJlaGVsaXgsIGV4dGVuZChDb2xvciwge1xuICBicmlnaHRlcjogZnVuY3Rpb24oaykge1xuICAgIGsgPSBrID09IG51bGwgPyBicmlnaHRlciA6IE1hdGgucG93KGJyaWdodGVyLCBrKTtcbiAgICByZXR1cm4gbmV3IEN1YmVoZWxpeCh0aGlzLmgsIHRoaXMucywgdGhpcy5sICogaywgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgZGFya2VyOiBmdW5jdGlvbihrKSB7XG4gICAgayA9IGsgPT0gbnVsbCA/IGRhcmtlciA6IE1hdGgucG93KGRhcmtlciwgayk7XG4gICAgcmV0dXJuIG5ldyBDdWJlaGVsaXgodGhpcy5oLCB0aGlzLnMsIHRoaXMubCAqIGssIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGggPSBpc05hTih0aGlzLmgpID8gMCA6ICh0aGlzLmggKyAxMjApICogcmFkaWFucyxcbiAgICAgICAgbCA9ICt0aGlzLmwsXG4gICAgICAgIGEgPSBpc05hTih0aGlzLnMpID8gMCA6IHRoaXMucyAqIGwgKiAoMSAtIGwpLFxuICAgICAgICBjb3NoID0gTWF0aC5jb3MoaCksXG4gICAgICAgIHNpbmggPSBNYXRoLnNpbihoKTtcbiAgICByZXR1cm4gbmV3IFJnYihcbiAgICAgIDI1NSAqIChsICsgYSAqIChBICogY29zaCArIEIgKiBzaW5oKSksXG4gICAgICAyNTUgKiAobCArIGEgKiAoQyAqIGNvc2ggKyBEICogc2luaCkpLFxuICAgICAgMjU1ICogKGwgKyBhICogKEUgKiBjb3NoKSksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9XG59KSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb25zdHJ1Y3RvciwgZmFjdG9yeSwgcHJvdG90eXBlKSB7XG4gIGNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGZhY3RvcnkucHJvdG90eXBlID0gcHJvdG90eXBlO1xuICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dGVuZChwYXJlbnQsIGRlZmluaXRpb24pIHtcbiAgdmFyIHByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUocGFyZW50LnByb3RvdHlwZSk7XG4gIGZvciAodmFyIGtleSBpbiBkZWZpbml0aW9uKSBwcm90b3R5cGVba2V5XSA9IGRlZmluaXRpb25ba2V5XTtcbiAgcmV0dXJuIHByb3RvdHlwZTtcbn1cbiIsImV4cG9ydCB7ZGVmYXVsdCBhcyBjb2xvciwgcmdiLCBoc2x9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbGFiLCBoY2wsIGxjaCwgZ3JheX0gZnJvbSBcIi4vbGFiLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgY3ViZWhlbGl4fSBmcm9tIFwiLi9jdWJlaGVsaXguanNcIjtcbiIsImltcG9ydCBkZWZpbmUsIHtleHRlbmR9IGZyb20gXCIuL2RlZmluZS5qc1wiO1xuaW1wb3J0IHtDb2xvciwgcmdiQ29udmVydCwgUmdifSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuaW1wb3J0IHtkZWdyZWVzLCByYWRpYW5zfSBmcm9tIFwiLi9tYXRoLmpzXCI7XG5cbi8vIGh0dHBzOi8vb2JzZXJ2YWJsZWhxLmNvbS9AbWJvc3RvY2svbGFiLWFuZC1yZ2JcbmNvbnN0IEsgPSAxOCxcbiAgICBYbiA9IDAuOTY0MjIsXG4gICAgWW4gPSAxLFxuICAgIFpuID0gMC44MjUyMSxcbiAgICB0MCA9IDQgLyAyOSxcbiAgICB0MSA9IDYgLyAyOSxcbiAgICB0MiA9IDMgKiB0MSAqIHQxLFxuICAgIHQzID0gdDEgKiB0MSAqIHQxO1xuXG5mdW5jdGlvbiBsYWJDb252ZXJ0KG8pIHtcbiAgaWYgKG8gaW5zdGFuY2VvZiBMYWIpIHJldHVybiBuZXcgTGFiKG8ubCwgby5hLCBvLmIsIG8ub3BhY2l0eSk7XG4gIGlmIChvIGluc3RhbmNlb2YgSGNsKSByZXR1cm4gaGNsMmxhYihvKTtcbiAgaWYgKCEobyBpbnN0YW5jZW9mIFJnYikpIG8gPSByZ2JDb252ZXJ0KG8pO1xuICB2YXIgciA9IHJnYjJscmdiKG8uciksXG4gICAgICBnID0gcmdiMmxyZ2Ioby5nKSxcbiAgICAgIGIgPSByZ2IybHJnYihvLmIpLFxuICAgICAgeSA9IHh5ejJsYWIoKDAuMjIyNTA0NSAqIHIgKyAwLjcxNjg3ODYgKiBnICsgMC4wNjA2MTY5ICogYikgLyBZbiksIHgsIHo7XG4gIGlmIChyID09PSBnICYmIGcgPT09IGIpIHggPSB6ID0geTsgZWxzZSB7XG4gICAgeCA9IHh5ejJsYWIoKDAuNDM2MDc0NyAqIHIgKyAwLjM4NTA2NDkgKiBnICsgMC4xNDMwODA0ICogYikgLyBYbik7XG4gICAgeiA9IHh5ejJsYWIoKDAuMDEzOTMyMiAqIHIgKyAwLjA5NzEwNDUgKiBnICsgMC43MTQxNzMzICogYikgLyBabik7XG4gIH1cbiAgcmV0dXJuIG5ldyBMYWIoMTE2ICogeSAtIDE2LCA1MDAgKiAoeCAtIHkpLCAyMDAgKiAoeSAtIHopLCBvLm9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JheShsLCBvcGFjaXR5KSB7XG4gIHJldHVybiBuZXcgTGFiKGwsIDAsIDAsIG9wYWNpdHkgPT0gbnVsbCA/IDEgOiBvcGFjaXR5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFiKGwsIGEsIGIsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBsYWJDb252ZXJ0KGwpIDogbmV3IExhYihsLCBhLCBiLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMYWIobCwgYSwgYiwgb3BhY2l0eSkge1xuICB0aGlzLmwgPSArbDtcbiAgdGhpcy5hID0gK2E7XG4gIHRoaXMuYiA9ICtiO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZGVmaW5lKExhYiwgbGFiLCBleHRlbmQoQ29sb3IsIHtcbiAgYnJpZ2h0ZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IExhYih0aGlzLmwgKyBLICogKGsgPT0gbnVsbCA/IDEgOiBrKSwgdGhpcy5hLCB0aGlzLmIsIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIGRhcmtlcjogZnVuY3Rpb24oaykge1xuICAgIHJldHVybiBuZXcgTGFiKHRoaXMubCAtIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLmEsIHRoaXMuYiwgdGhpcy5vcGFjaXR5KTtcbiAgfSxcbiAgcmdiOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgeSA9ICh0aGlzLmwgKyAxNikgLyAxMTYsXG4gICAgICAgIHggPSBpc05hTih0aGlzLmEpID8geSA6IHkgKyB0aGlzLmEgLyA1MDAsXG4gICAgICAgIHogPSBpc05hTih0aGlzLmIpID8geSA6IHkgLSB0aGlzLmIgLyAyMDA7XG4gICAgeCA9IFhuICogbGFiMnh5eih4KTtcbiAgICB5ID0gWW4gKiBsYWIyeHl6KHkpO1xuICAgIHogPSBabiAqIGxhYjJ4eXooeik7XG4gICAgcmV0dXJuIG5ldyBSZ2IoXG4gICAgICBscmdiMnJnYiggMy4xMzM4NTYxICogeCAtIDEuNjE2ODY2NyAqIHkgLSAwLjQ5MDYxNDYgKiB6KSxcbiAgICAgIGxyZ2IycmdiKC0wLjk3ODc2ODQgKiB4ICsgMS45MTYxNDE1ICogeSArIDAuMDMzNDU0MCAqIHopLFxuICAgICAgbHJnYjJyZ2IoIDAuMDcxOTQ1MyAqIHggLSAwLjIyODk5MTQgKiB5ICsgMS40MDUyNDI3ICogeiksXG4gICAgICB0aGlzLm9wYWNpdHlcbiAgICApO1xuICB9XG59KSk7XG5cbmZ1bmN0aW9uIHh5ejJsYWIodCkge1xuICByZXR1cm4gdCA+IHQzID8gTWF0aC5wb3codCwgMSAvIDMpIDogdCAvIHQyICsgdDA7XG59XG5cbmZ1bmN0aW9uIGxhYjJ4eXoodCkge1xuICByZXR1cm4gdCA+IHQxID8gdCAqIHQgKiB0IDogdDIgKiAodCAtIHQwKTtcbn1cblxuZnVuY3Rpb24gbHJnYjJyZ2IoeCkge1xuICByZXR1cm4gMjU1ICogKHggPD0gMC4wMDMxMzA4ID8gMTIuOTIgKiB4IDogMS4wNTUgKiBNYXRoLnBvdyh4LCAxIC8gMi40KSAtIDAuMDU1KTtcbn1cblxuZnVuY3Rpb24gcmdiMmxyZ2IoeCkge1xuICByZXR1cm4gKHggLz0gMjU1KSA8PSAwLjA0MDQ1ID8geCAvIDEyLjkyIDogTWF0aC5wb3coKHggKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbn1cblxuZnVuY3Rpb24gaGNsQ29udmVydChvKSB7XG4gIGlmIChvIGluc3RhbmNlb2YgSGNsKSByZXR1cm4gbmV3IEhjbChvLmgsIG8uYywgby5sLCBvLm9wYWNpdHkpO1xuICBpZiAoIShvIGluc3RhbmNlb2YgTGFiKSkgbyA9IGxhYkNvbnZlcnQobyk7XG4gIGlmIChvLmEgPT09IDAgJiYgby5iID09PSAwKSByZXR1cm4gbmV3IEhjbChOYU4sIDAgPCBvLmwgJiYgby5sIDwgMTAwID8gMCA6IE5hTiwgby5sLCBvLm9wYWNpdHkpO1xuICB2YXIgaCA9IE1hdGguYXRhbjIoby5iLCBvLmEpICogZGVncmVlcztcbiAgcmV0dXJuIG5ldyBIY2woaCA8IDAgPyBoICsgMzYwIDogaCwgTWF0aC5zcXJ0KG8uYSAqIG8uYSArIG8uYiAqIG8uYiksIG8ubCwgby5vcGFjaXR5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxjaChsLCBjLCBoLCBvcGFjaXR5KSB7XG4gIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gaGNsQ29udmVydChsKSA6IG5ldyBIY2woaCwgYywgbCwgb3BhY2l0eSA9PSBudWxsID8gMSA6IG9wYWNpdHkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGNsKGgsIGMsIGwsIG9wYWNpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgPyBoY2xDb252ZXJ0KGgpIDogbmV3IEhjbChoLCBjLCBsLCBvcGFjaXR5ID09IG51bGwgPyAxIDogb3BhY2l0eSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIY2woaCwgYywgbCwgb3BhY2l0eSkge1xuICB0aGlzLmggPSAraDtcbiAgdGhpcy5jID0gK2M7XG4gIHRoaXMubCA9ICtsO1xuICB0aGlzLm9wYWNpdHkgPSArb3BhY2l0eTtcbn1cblxuZnVuY3Rpb24gaGNsMmxhYihvKSB7XG4gIGlmIChpc05hTihvLmgpKSByZXR1cm4gbmV3IExhYihvLmwsIDAsIDAsIG8ub3BhY2l0eSk7XG4gIHZhciBoID0gby5oICogcmFkaWFucztcbiAgcmV0dXJuIG5ldyBMYWIoby5sLCBNYXRoLmNvcyhoKSAqIG8uYywgTWF0aC5zaW4oaCkgKiBvLmMsIG8ub3BhY2l0eSk7XG59XG5cbmRlZmluZShIY2wsIGhjbCwgZXh0ZW5kKENvbG9yLCB7XG4gIGJyaWdodGVyOiBmdW5jdGlvbihrKSB7XG4gICAgcmV0dXJuIG5ldyBIY2wodGhpcy5oLCB0aGlzLmMsIHRoaXMubCArIEsgKiAoayA9PSBudWxsID8gMSA6IGspLCB0aGlzLm9wYWNpdHkpO1xuICB9LFxuICBkYXJrZXI6IGZ1bmN0aW9uKGspIHtcbiAgICByZXR1cm4gbmV3IEhjbCh0aGlzLmgsIHRoaXMuYywgdGhpcy5sIC0gSyAqIChrID09IG51bGwgPyAxIDogayksIHRoaXMub3BhY2l0eSk7XG4gIH0sXG4gIHJnYjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGhjbDJsYWIodGhpcykucmdiKCk7XG4gIH1cbn0pKTtcbiIsImV4cG9ydCBjb25zdCByYWRpYW5zID0gTWF0aC5QSSAvIDE4MDtcbmV4cG9ydCBjb25zdCBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcbiIsInZhciBub29wID0ge3ZhbHVlOiAoKSA9PiB7fX07XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICBmb3IgKHZhciBpID0gMCwgbiA9IGFyZ3VtZW50cy5sZW5ndGgsIF8gPSB7fSwgdDsgaSA8IG47ICsraSkge1xuICAgIGlmICghKHQgPSBhcmd1bWVudHNbaV0gKyBcIlwiKSB8fCAodCBpbiBfKSB8fCAvW1xccy5dLy50ZXN0KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIHR5cGU6IFwiICsgdCk7XG4gICAgX1t0XSA9IFtdO1xuICB9XG4gIHJldHVybiBuZXcgRGlzcGF0Y2goXyk7XG59XG5cbmZ1bmN0aW9uIERpc3BhdGNoKF8pIHtcbiAgdGhpcy5fID0gXztcbn1cblxuZnVuY3Rpb24gcGFyc2VUeXBlbmFtZXModHlwZW5hbWVzLCB0eXBlcykge1xuICByZXR1cm4gdHlwZW5hbWVzLnRyaW0oKS5zcGxpdCgvXnxcXHMrLykubWFwKGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgbmFtZSA9IFwiXCIsIGkgPSB0LmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChpID49IDApIG5hbWUgPSB0LnNsaWNlKGkgKyAxKSwgdCA9IHQuc2xpY2UoMCwgaSk7XG4gICAgaWYgKHQgJiYgIXR5cGVzLmhhc093blByb3BlcnR5KHQpKSB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIHR5cGU6IFwiICsgdCk7XG4gICAgcmV0dXJuIHt0eXBlOiB0LCBuYW1lOiBuYW1lfTtcbiAgfSk7XG59XG5cbkRpc3BhdGNoLnByb3RvdHlwZSA9IGRpc3BhdGNoLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IERpc3BhdGNoLFxuICBvbjogZnVuY3Rpb24odHlwZW5hbWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIF8gPSB0aGlzLl8sXG4gICAgICAgIFQgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIsIF8pLFxuICAgICAgICB0LFxuICAgICAgICBpID0gLTEsXG4gICAgICAgIG4gPSBULmxlbmd0aDtcblxuICAgIC8vIElmIG5vIGNhbGxiYWNrIHdhcyBzcGVjaWZpZWQsIHJldHVybiB0aGUgY2FsbGJhY2sgb2YgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XG4gICAgICB3aGlsZSAoKytpIDwgbikgaWYgKCh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgJiYgKHQgPSBnZXQoX1t0XSwgdHlwZW5hbWUubmFtZSkpKSByZXR1cm4gdDtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiBhIHR5cGUgd2FzIHNwZWNpZmllZCwgc2V0IHRoZSBjYWxsYmFjayBmb3IgdGhlIGdpdmVuIHR5cGUgYW5kIG5hbWUuXG4gICAgLy8gT3RoZXJ3aXNlLCBpZiBhIG51bGwgY2FsbGJhY2sgd2FzIHNwZWNpZmllZCwgcmVtb3ZlIGNhbGxiYWNrcyBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICBpZiAoY2FsbGJhY2sgIT0gbnVsbCAmJiB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBjYWxsYmFjazogXCIgKyBjYWxsYmFjayk7XG4gICAgd2hpbGUgKCsraSA8IG4pIHtcbiAgICAgIGlmICh0ID0gKHR5cGVuYW1lID0gVFtpXSkudHlwZSkgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBjYWxsYmFjayk7XG4gICAgICBlbHNlIGlmIChjYWxsYmFjayA9PSBudWxsKSBmb3IgKHQgaW4gXykgX1t0XSA9IHNldChfW3RdLCB0eXBlbmFtZS5uYW1lLCBudWxsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcbiAgY29weTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvcHkgPSB7fSwgXyA9IHRoaXMuXztcbiAgICBmb3IgKHZhciB0IGluIF8pIGNvcHlbdF0gPSBfW3RdLnNsaWNlKCk7XG4gICAgcmV0dXJuIG5ldyBEaXNwYXRjaChjb3B5KTtcbiAgfSxcbiAgY2FsbDogZnVuY3Rpb24odHlwZSwgdGhhdCkge1xuICAgIGlmICgobiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyKSA+IDApIGZvciAodmFyIGFyZ3MgPSBuZXcgQXJyYXkobiksIGkgPSAwLCBuLCB0OyBpIDwgbjsgKytpKSBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodCA9IHRoaXMuX1t0eXBlXSwgaSA9IDAsIG4gPSB0Lmxlbmd0aDsgaSA8IG47ICsraSkgdFtpXS52YWx1ZS5hcHBseSh0aGF0LCBhcmdzKTtcbiAgfSxcbiAgYXBwbHk6IGZ1bmN0aW9uKHR5cGUsIHRoYXQsIGFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuXy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biB0eXBlOiBcIiArIHR5cGUpO1xuICAgIGZvciAodmFyIHQgPSB0aGlzLl9bdHlwZV0sIGkgPSAwLCBuID0gdC5sZW5ndGg7IGkgPCBuOyArK2kpIHRbaV0udmFsdWUuYXBwbHkodGhhdCwgYXJncyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldCh0eXBlLCBuYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGgsIGM7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAoKGMgPSB0eXBlW2ldKS5uYW1lID09PSBuYW1lKSB7XG4gICAgICByZXR1cm4gYy52YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0KHR5cGUsIG5hbWUsIGNhbGxiYWNrKSB7XG4gIGZvciAodmFyIGkgPSAwLCBuID0gdHlwZS5sZW5ndGg7IGkgPCBuOyArK2kpIHtcbiAgICBpZiAodHlwZVtpXS5uYW1lID09PSBuYW1lKSB7XG4gICAgICB0eXBlW2ldID0gbm9vcCwgdHlwZSA9IHR5cGUuc2xpY2UoMCwgaSkuY29uY2F0KHR5cGUuc2xpY2UoaSArIDEpKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBpZiAoY2FsbGJhY2sgIT0gbnVsbCkgdHlwZS5wdXNoKHtuYW1lOiBuYW1lLCB2YWx1ZTogY2FsbGJhY2t9KTtcbiAgcmV0dXJuIHR5cGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BhdGNoO1xuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGRpc3BhdGNofSBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuIiwiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwiaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcImQzLWRpc3BhdGNoXCI7XG5pbXBvcnQge3NlbGVjdCwgcG9pbnRlcn0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IG5vZHJhZywge3llc2RyYWd9IGZyb20gXCIuL25vZHJhZy5qc1wiO1xuaW1wb3J0IG5vZXZlbnQsIHtub3Byb3BhZ2F0aW9ufSBmcm9tIFwiLi9ub2V2ZW50LmpzXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBEcmFnRXZlbnQgZnJvbSBcIi4vZXZlbnQuanNcIjtcblxuLy8gSWdub3JlIHJpZ2h0LWNsaWNrLCBzaW5jZSB0aGF0IHNob3VsZCBvcGVuIHRoZSBjb250ZXh0IG1lbnUuXG5mdW5jdGlvbiBkZWZhdWx0RmlsdGVyKGV2ZW50KSB7XG4gIHJldHVybiAhZXZlbnQuY3RybEtleSAmJiAhZXZlbnQuYnV0dG9uO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0Q29udGFpbmVyKCkge1xuICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3ViamVjdChldmVudCwgZCkge1xuICByZXR1cm4gZCA9PSBudWxsID8ge3g6IGV2ZW50LngsIHk6IGV2ZW50Lnl9IDogZDtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFRvdWNoYWJsZSgpIHtcbiAgcmV0dXJuIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyB8fCAoXCJvbnRvdWNoc3RhcnRcIiBpbiB0aGlzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyLFxuICAgICAgY29udGFpbmVyID0gZGVmYXVsdENvbnRhaW5lcixcbiAgICAgIHN1YmplY3QgPSBkZWZhdWx0U3ViamVjdCxcbiAgICAgIHRvdWNoYWJsZSA9IGRlZmF1bHRUb3VjaGFibGUsXG4gICAgICBnZXN0dXJlcyA9IHt9LFxuICAgICAgbGlzdGVuZXJzID0gZGlzcGF0Y2goXCJzdGFydFwiLCBcImRyYWdcIiwgXCJlbmRcIiksXG4gICAgICBhY3RpdmUgPSAwLFxuICAgICAgbW91c2Vkb3dueCxcbiAgICAgIG1vdXNlZG93bnksXG4gICAgICBtb3VzZW1vdmluZyxcbiAgICAgIHRvdWNoZW5kaW5nLFxuICAgICAgY2xpY2tEaXN0YW5jZTIgPSAwO1xuXG4gIGZ1bmN0aW9uIGRyYWcoc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uXG4gICAgICAgIC5vbihcIm1vdXNlZG93bi5kcmFnXCIsIG1vdXNlZG93bmVkKVxuICAgICAgLmZpbHRlcih0b3VjaGFibGUpXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuZHJhZ1wiLCB0b3VjaHN0YXJ0ZWQpXG4gICAgICAgIC5vbihcInRvdWNobW92ZS5kcmFnXCIsIHRvdWNobW92ZWQpXG4gICAgICAgIC5vbihcInRvdWNoZW5kLmRyYWcgdG91Y2hjYW5jZWwuZHJhZ1wiLCB0b3VjaGVuZGVkKVxuICAgICAgICAuc3R5bGUoXCJ0b3VjaC1hY3Rpb25cIiwgXCJub25lXCIpXG4gICAgICAgIC5zdHlsZShcIi13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvclwiLCBcInJnYmEoMCwwLDAsMClcIik7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZWRvd25lZChldmVudCwgZCkge1xuICAgIGlmICh0b3VjaGVuZGluZyB8fCAhZmlsdGVyLmNhbGwodGhpcywgZXZlbnQsIGQpKSByZXR1cm47XG4gICAgdmFyIGdlc3R1cmUgPSBiZWZvcmVzdGFydCh0aGlzLCBjb250YWluZXIuY2FsbCh0aGlzLCBldmVudCwgZCksIGV2ZW50LCBkLCBcIm1vdXNlXCIpO1xuICAgIGlmICghZ2VzdHVyZSkgcmV0dXJuO1xuICAgIHNlbGVjdChldmVudC52aWV3KS5vbihcIm1vdXNlbW92ZS5kcmFnXCIsIG1vdXNlbW92ZWQsIHRydWUpLm9uKFwibW91c2V1cC5kcmFnXCIsIG1vdXNldXBwZWQsIHRydWUpO1xuICAgIG5vZHJhZyhldmVudC52aWV3KTtcbiAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICBtb3VzZW1vdmluZyA9IGZhbHNlO1xuICAgIG1vdXNlZG93bnggPSBldmVudC5jbGllbnRYO1xuICAgIG1vdXNlZG93bnkgPSBldmVudC5jbGllbnRZO1xuICAgIGdlc3R1cmUoXCJzdGFydFwiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZW1vdmVkKGV2ZW50KSB7XG4gICAgbm9ldmVudChldmVudCk7XG4gICAgaWYgKCFtb3VzZW1vdmluZykge1xuICAgICAgdmFyIGR4ID0gZXZlbnQuY2xpZW50WCAtIG1vdXNlZG93bngsIGR5ID0gZXZlbnQuY2xpZW50WSAtIG1vdXNlZG93bnk7XG4gICAgICBtb3VzZW1vdmluZyA9IGR4ICogZHggKyBkeSAqIGR5ID4gY2xpY2tEaXN0YW5jZTI7XG4gICAgfVxuICAgIGdlc3R1cmVzLm1vdXNlKFwiZHJhZ1wiLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZXVwcGVkKGV2ZW50KSB7XG4gICAgc2VsZWN0KGV2ZW50LnZpZXcpLm9uKFwibW91c2Vtb3ZlLmRyYWcgbW91c2V1cC5kcmFnXCIsIG51bGwpO1xuICAgIHllc2RyYWcoZXZlbnQudmlldywgbW91c2Vtb3ZpbmcpO1xuICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgIGdlc3R1cmVzLm1vdXNlKFwiZW5kXCIsIGV2ZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoc3RhcnRlZChldmVudCwgZCkge1xuICAgIGlmICghZmlsdGVyLmNhbGwodGhpcywgZXZlbnQsIGQpKSByZXR1cm47XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgYyA9IGNvbnRhaW5lci5jYWxsKHRoaXMsIGV2ZW50LCBkKSxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBiZWZvcmVzdGFydCh0aGlzLCBjLCBldmVudCwgZCwgdG91Y2hlc1tpXS5pZGVudGlmaWVyLCB0b3VjaGVzW2ldKSkge1xuICAgICAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcInN0YXJ0XCIsIGV2ZW50LCB0b3VjaGVzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaG1vdmVkKGV2ZW50KSB7XG4gICAgdmFyIHRvdWNoZXMgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyxcbiAgICAgICAgbiA9IHRvdWNoZXMubGVuZ3RoLCBpLCBnZXN0dXJlO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKGdlc3R1cmUgPSBnZXN0dXJlc1t0b3VjaGVzW2ldLmlkZW50aWZpZXJdKSB7XG4gICAgICAgIG5vZXZlbnQoZXZlbnQpO1xuICAgICAgICBnZXN0dXJlKFwiZHJhZ1wiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hlbmRlZChldmVudCkge1xuICAgIHZhciB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMsXG4gICAgICAgIG4gPSB0b3VjaGVzLmxlbmd0aCwgaSwgZ2VzdHVyZTtcblxuICAgIGlmICh0b3VjaGVuZGluZykgY2xlYXJUaW1lb3V0KHRvdWNoZW5kaW5nKTtcbiAgICB0b3VjaGVuZGluZyA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHRvdWNoZW5kaW5nID0gbnVsbDsgfSwgNTAwKTsgLy8gR2hvc3QgY2xpY2tzIGFyZSBkZWxheWVkIVxuICAgIGZvciAoaSA9IDA7IGkgPCBuOyArK2kpIHtcbiAgICAgIGlmIChnZXN0dXJlID0gZ2VzdHVyZXNbdG91Y2hlc1tpXS5pZGVudGlmaWVyXSkge1xuICAgICAgICBub3Byb3BhZ2F0aW9uKGV2ZW50KTtcbiAgICAgICAgZ2VzdHVyZShcImVuZFwiLCBldmVudCwgdG91Y2hlc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYmVmb3Jlc3RhcnQodGhhdCwgY29udGFpbmVyLCBldmVudCwgZCwgaWRlbnRpZmllciwgdG91Y2gpIHtcbiAgICB2YXIgZGlzcGF0Y2ggPSBsaXN0ZW5lcnMuY29weSgpLFxuICAgICAgICBwID0gcG9pbnRlcih0b3VjaCB8fCBldmVudCwgY29udGFpbmVyKSwgZHgsIGR5LFxuICAgICAgICBzO1xuXG4gICAgaWYgKChzID0gc3ViamVjdC5jYWxsKHRoYXQsIG5ldyBEcmFnRXZlbnQoXCJiZWZvcmVzdGFydFwiLCB7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgICAgdGFyZ2V0OiBkcmFnLFxuICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICBhY3RpdmUsXG4gICAgICAgIHg6IHBbMF0sXG4gICAgICAgIHk6IHBbMV0sXG4gICAgICAgIGR4OiAwLFxuICAgICAgICBkeTogMCxcbiAgICAgICAgZGlzcGF0Y2hcbiAgICAgIH0pLCBkKSkgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgZHggPSBzLnggLSBwWzBdIHx8IDA7XG4gICAgZHkgPSBzLnkgLSBwWzFdIHx8IDA7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gZ2VzdHVyZSh0eXBlLCBldmVudCwgdG91Y2gpIHtcbiAgICAgIHZhciBwMCA9IHAsIG47XG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSBcInN0YXJ0XCI6IGdlc3R1cmVzW2lkZW50aWZpZXJdID0gZ2VzdHVyZSwgbiA9IGFjdGl2ZSsrOyBicmVhaztcbiAgICAgICAgY2FzZSBcImVuZFwiOiBkZWxldGUgZ2VzdHVyZXNbaWRlbnRpZmllcl0sIC0tYWN0aXZlOyAvLyBub2JyZWFrXG4gICAgICAgIGNhc2UgXCJkcmFnXCI6IHAgPSBwb2ludGVyKHRvdWNoIHx8IGV2ZW50LCBjb250YWluZXIpLCBuID0gYWN0aXZlOyBicmVhaztcbiAgICAgIH1cbiAgICAgIGRpc3BhdGNoLmNhbGwoXG4gICAgICAgIHR5cGUsXG4gICAgICAgIHRoYXQsXG4gICAgICAgIG5ldyBEcmFnRXZlbnQodHlwZSwge1xuICAgICAgICAgIHNvdXJjZUV2ZW50OiBldmVudCxcbiAgICAgICAgICBzdWJqZWN0OiBzLFxuICAgICAgICAgIHRhcmdldDogZHJhZyxcbiAgICAgICAgICBpZGVudGlmaWVyLFxuICAgICAgICAgIGFjdGl2ZTogbixcbiAgICAgICAgICB4OiBwWzBdICsgZHgsXG4gICAgICAgICAgeTogcFsxXSArIGR5LFxuICAgICAgICAgIGR4OiBwWzBdIC0gcDBbMF0sXG4gICAgICAgICAgZHk6IHBbMV0gLSBwMFsxXSxcbiAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICB9KSxcbiAgICAgICAgZFxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgZHJhZy5maWx0ZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZmlsdGVyID0gdHlwZW9mIF8gPT09IFwiZnVuY3Rpb25cIiA/IF8gOiBjb25zdGFudCghIV8pLCBkcmFnKSA6IGZpbHRlcjtcbiAgfTtcblxuICBkcmFnLmNvbnRhaW5lciA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjb250YWluZXIgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KF8pLCBkcmFnKSA6IGNvbnRhaW5lcjtcbiAgfTtcblxuICBkcmFnLnN1YmplY3QgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3ViamVjdCA9IHR5cGVvZiBfID09PSBcImZ1bmN0aW9uXCIgPyBfIDogY29uc3RhbnQoXyksIGRyYWcpIDogc3ViamVjdDtcbiAgfTtcblxuICBkcmFnLnRvdWNoYWJsZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh0b3VjaGFibGUgPSB0eXBlb2YgXyA9PT0gXCJmdW5jdGlvblwiID8gXyA6IGNvbnN0YW50KCEhXyksIGRyYWcpIDogdG91Y2hhYmxlO1xuICB9O1xuXG4gIGRyYWcub24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdmFsdWUgPSBsaXN0ZW5lcnMub24uYXBwbHkobGlzdGVuZXJzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbGlzdGVuZXJzID8gZHJhZyA6IHZhbHVlO1xuICB9O1xuXG4gIGRyYWcuY2xpY2tEaXN0YW5jZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGlja0Rpc3RhbmNlMiA9IChfID0gK18pICogXywgZHJhZykgOiBNYXRoLnNxcnQoY2xpY2tEaXN0YW5jZTIpO1xuICB9O1xuXG4gIHJldHVybiBkcmFnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJhZ0V2ZW50KHR5cGUsIHtcbiAgc291cmNlRXZlbnQsXG4gIHN1YmplY3QsXG4gIHRhcmdldCxcbiAgaWRlbnRpZmllcixcbiAgYWN0aXZlLFxuICB4LCB5LCBkeCwgZHksXG4gIGRpc3BhdGNoXG59KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICB0eXBlOiB7dmFsdWU6IHR5cGUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgc291cmNlRXZlbnQ6IHt2YWx1ZTogc291cmNlRXZlbnQsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgc3ViamVjdDoge3ZhbHVlOiBzdWJqZWN0LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHRhcmdldDoge3ZhbHVlOiB0YXJnZXQsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgaWRlbnRpZmllcjoge3ZhbHVlOiBpZGVudGlmaWVyLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIGFjdGl2ZToge3ZhbHVlOiBhY3RpdmUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZX0sXG4gICAgeDoge3ZhbHVlOiB4LCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWV9LFxuICAgIHk6IHt2YWx1ZTogeSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBkeDoge3ZhbHVlOiBkeCwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBkeToge3ZhbHVlOiBkeSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlfSxcbiAgICBfOiB7dmFsdWU6IGRpc3BhdGNofVxuICB9KTtcbn1cblxuRHJhZ0V2ZW50LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgdmFsdWUgPSB0aGlzLl8ub24uYXBwbHkodGhpcy5fLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgPT09IHRoaXMuXyA/IHRoaXMgOiB2YWx1ZTtcbn07XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgZHJhZ30gZnJvbSBcIi4vZHJhZy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGRyYWdEaXNhYmxlLCB5ZXNkcmFnIGFzIGRyYWdFbmFibGV9IGZyb20gXCIuL25vZHJhZy5qc1wiO1xuIiwiaW1wb3J0IHtzZWxlY3R9IGZyb20gXCJkMy1zZWxlY3Rpb25cIjtcbmltcG9ydCBub2V2ZW50IGZyb20gXCIuL25vZXZlbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmlldykge1xuICB2YXIgcm9vdCA9IHZpZXcuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgc2VsZWN0aW9uID0gc2VsZWN0KHZpZXcpLm9uKFwiZHJhZ3N0YXJ0LmRyYWdcIiwgbm9ldmVudCwgdHJ1ZSk7XG4gIGlmIChcIm9uc2VsZWN0c3RhcnRcIiBpbiByb290KSB7XG4gICAgc2VsZWN0aW9uLm9uKFwic2VsZWN0c3RhcnQuZHJhZ1wiLCBub2V2ZW50LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICByb290Ll9fbm9zZWxlY3QgPSByb290LnN0eWxlLk1velVzZXJTZWxlY3Q7XG4gICAgcm9vdC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gXCJub25lXCI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllc2RyYWcodmlldywgbm9jbGljaykge1xuICB2YXIgcm9vdCA9IHZpZXcuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgc2VsZWN0aW9uID0gc2VsZWN0KHZpZXcpLm9uKFwiZHJhZ3N0YXJ0LmRyYWdcIiwgbnVsbCk7XG4gIGlmIChub2NsaWNrKSB7XG4gICAgc2VsZWN0aW9uLm9uKFwiY2xpY2suZHJhZ1wiLCBub2V2ZW50LCB0cnVlKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBzZWxlY3Rpb24ub24oXCJjbGljay5kcmFnXCIsIG51bGwpOyB9LCAwKTtcbiAgfVxuICBpZiAoXCJvbnNlbGVjdHN0YXJ0XCIgaW4gcm9vdCkge1xuICAgIHNlbGVjdGlvbi5vbihcInNlbGVjdHN0YXJ0LmRyYWdcIiwgbnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gcm9vdC5fX25vc2VsZWN0O1xuICAgIGRlbGV0ZSByb290Ll9fbm9zZWxlY3Q7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3Byb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbn1cbiIsImltcG9ydCBmb3JtYXRMb2NhbGUgZnJvbSBcIi4vbG9jYWxlLmpzXCI7XG5cbnZhciBsb2NhbGU7XG5leHBvcnQgdmFyIGZvcm1hdDtcbmV4cG9ydCB2YXIgZm9ybWF0UHJlZml4O1xuXG5kZWZhdWx0TG9jYWxlKHtcbiAgdGhvdXNhbmRzOiBcIixcIixcbiAgZ3JvdXBpbmc6IFszXSxcbiAgY3VycmVuY3k6IFtcIiRcIiwgXCJcIl1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZWZhdWx0TG9jYWxlKGRlZmluaXRpb24pIHtcbiAgbG9jYWxlID0gZm9ybWF0TG9jYWxlKGRlZmluaXRpb24pO1xuICBmb3JtYXQgPSBsb2NhbGUuZm9ybWF0O1xuICBmb3JtYXRQcmVmaXggPSBsb2NhbGUuZm9ybWF0UHJlZml4O1xuICByZXR1cm4gbG9jYWxlO1xufVxuIiwiaW1wb3J0IHtmb3JtYXREZWNpbWFsUGFydHN9IGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4geCA9IGZvcm1hdERlY2ltYWxQYXJ0cyhNYXRoLmFicyh4KSksIHggPyB4WzFdIDogTmFOO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gTWF0aC5hYnMoeCA9IE1hdGgucm91bmQoeCkpID49IDFlMjFcbiAgICAgID8geC50b0xvY2FsZVN0cmluZyhcImVuXCIpLnJlcGxhY2UoLywvZywgXCJcIilcbiAgICAgIDogeC50b1N0cmluZygxMCk7XG59XG5cbi8vIENvbXB1dGVzIHRoZSBkZWNpbWFsIGNvZWZmaWNpZW50IGFuZCBleHBvbmVudCBvZiB0aGUgc3BlY2lmaWVkIG51bWJlciB4IHdpdGhcbi8vIHNpZ25pZmljYW50IGRpZ2l0cyBwLCB3aGVyZSB4IGlzIHBvc2l0aXZlIGFuZCBwIGlzIGluIFsxLCAyMV0gb3IgdW5kZWZpbmVkLlxuLy8gRm9yIGV4YW1wbGUsIGZvcm1hdERlY2ltYWxQYXJ0cygxLjIzKSByZXR1cm5zIFtcIjEyM1wiLCAwXS5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCkge1xuICBpZiAoKGkgPSAoeCA9IHAgPyB4LnRvRXhwb25lbnRpYWwocCAtIDEpIDogeC50b0V4cG9uZW50aWFsKCkpLmluZGV4T2YoXCJlXCIpKSA8IDApIHJldHVybiBudWxsOyAvLyBOYU4sIMKxSW5maW5pdHlcbiAgdmFyIGksIGNvZWZmaWNpZW50ID0geC5zbGljZSgwLCBpKTtcblxuICAvLyBUaGUgc3RyaW5nIHJldHVybmVkIGJ5IHRvRXhwb25lbnRpYWwgZWl0aGVyIGhhcyB0aGUgZm9ybSBcXGRcXC5cXGQrZVstK11cXGQrXG4gIC8vIChlLmcuLCAxLjJlKzMpIG9yIHRoZSBmb3JtIFxcZGVbLStdXFxkKyAoZS5nLiwgMWUrMykuXG4gIHJldHVybiBbXG4gICAgY29lZmZpY2llbnQubGVuZ3RoID4gMSA/IGNvZWZmaWNpZW50WzBdICsgY29lZmZpY2llbnQuc2xpY2UoMikgOiBjb2VmZmljaWVudCxcbiAgICAreC5zbGljZShpICsgMSlcbiAgXTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGdyb3VwaW5nLCB0aG91c2FuZHMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlLCB3aWR0aCkge1xuICAgIHZhciBpID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICB0ID0gW10sXG4gICAgICAgIGogPSAwLFxuICAgICAgICBnID0gZ3JvdXBpbmdbMF0sXG4gICAgICAgIGxlbmd0aCA9IDA7XG5cbiAgICB3aGlsZSAoaSA+IDAgJiYgZyA+IDApIHtcbiAgICAgIGlmIChsZW5ndGggKyBnICsgMSA+IHdpZHRoKSBnID0gTWF0aC5tYXgoMSwgd2lkdGggLSBsZW5ndGgpO1xuICAgICAgdC5wdXNoKHZhbHVlLnN1YnN0cmluZyhpIC09IGcsIGkgKyBnKSk7XG4gICAgICBpZiAoKGxlbmd0aCArPSBnICsgMSkgPiB3aWR0aCkgYnJlYWs7XG4gICAgICBnID0gZ3JvdXBpbmdbaiA9IChqICsgMSkgJSBncm91cGluZy5sZW5ndGhdO1xuICAgIH1cblxuICAgIHJldHVybiB0LnJldmVyc2UoKS5qb2luKHRob3VzYW5kcyk7XG4gIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihudW1lcmFscykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvWzAtOV0vZywgZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIG51bWVyYWxzWytpXTtcbiAgICB9KTtcbiAgfTtcbn1cbiIsImltcG9ydCB7Zm9ybWF0RGVjaW1hbFBhcnRzfSBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5cbmV4cG9ydCB2YXIgcHJlZml4RXhwb25lbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgsIHApIHtcbiAgdmFyIGQgPSBmb3JtYXREZWNpbWFsUGFydHMoeCwgcCk7XG4gIGlmICghZCkgcmV0dXJuIHggKyBcIlwiO1xuICB2YXIgY29lZmZpY2llbnQgPSBkWzBdLFxuICAgICAgZXhwb25lbnQgPSBkWzFdLFxuICAgICAgaSA9IGV4cG9uZW50IC0gKHByZWZpeEV4cG9uZW50ID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQgLyAzKSkpICogMykgKyAxLFxuICAgICAgbiA9IGNvZWZmaWNpZW50Lmxlbmd0aDtcbiAgcmV0dXJuIGkgPT09IG4gPyBjb2VmZmljaWVudFxuICAgICAgOiBpID4gbiA/IGNvZWZmaWNpZW50ICsgbmV3IEFycmF5KGkgLSBuICsgMSkuam9pbihcIjBcIilcbiAgICAgIDogaSA+IDAgPyBjb2VmZmljaWVudC5zbGljZSgwLCBpKSArIFwiLlwiICsgY29lZmZpY2llbnQuc2xpY2UoaSlcbiAgICAgIDogXCIwLlwiICsgbmV3IEFycmF5KDEgLSBpKS5qb2luKFwiMFwiKSArIGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBNYXRoLm1heCgwLCBwICsgaSAtIDEpKVswXTsgLy8gbGVzcyB0aGFuIDF5IVxufVxuIiwiaW1wb3J0IHtmb3JtYXREZWNpbWFsUGFydHN9IGZyb20gXCIuL2Zvcm1hdERlY2ltYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCwgcCkge1xuICB2YXIgZCA9IGZvcm1hdERlY2ltYWxQYXJ0cyh4LCBwKTtcbiAgaWYgKCFkKSByZXR1cm4geCArIFwiXCI7XG4gIHZhciBjb2VmZmljaWVudCA9IGRbMF0sXG4gICAgICBleHBvbmVudCA9IGRbMV07XG4gIHJldHVybiBleHBvbmVudCA8IDAgPyBcIjAuXCIgKyBuZXcgQXJyYXkoLWV4cG9uZW50KS5qb2luKFwiMFwiKSArIGNvZWZmaWNpZW50XG4gICAgICA6IGNvZWZmaWNpZW50Lmxlbmd0aCA+IGV4cG9uZW50ICsgMSA/IGNvZWZmaWNpZW50LnNsaWNlKDAsIGV4cG9uZW50ICsgMSkgKyBcIi5cIiArIGNvZWZmaWNpZW50LnNsaWNlKGV4cG9uZW50ICsgMSlcbiAgICAgIDogY29lZmZpY2llbnQgKyBuZXcgQXJyYXkoZXhwb25lbnQgLSBjb2VmZmljaWVudC5sZW5ndGggKyAyKS5qb2luKFwiMFwiKTtcbn1cbiIsIi8vIFtbZmlsbF1hbGlnbl1bc2lnbl1bc3ltYm9sXVswXVt3aWR0aF1bLF1bLnByZWNpc2lvbl1bfl1bdHlwZV1cbnZhciByZSA9IC9eKD86KC4pPyhbPD49Xl0pKT8oWytcXC0oIF0pPyhbJCNdKT8oMCk/KFxcZCspPygsKT8oXFwuXFxkKyk/KH4pPyhbYS16JV0pPyQvaTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllcikge1xuICBpZiAoIShtYXRjaCA9IHJlLmV4ZWMoc3BlY2lmaWVyKSkpIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgZm9ybWF0OiBcIiArIHNwZWNpZmllcik7XG4gIHZhciBtYXRjaDtcbiAgcmV0dXJuIG5ldyBGb3JtYXRTcGVjaWZpZXIoe1xuICAgIGZpbGw6IG1hdGNoWzFdLFxuICAgIGFsaWduOiBtYXRjaFsyXSxcbiAgICBzaWduOiBtYXRjaFszXSxcbiAgICBzeW1ib2w6IG1hdGNoWzRdLFxuICAgIHplcm86IG1hdGNoWzVdLFxuICAgIHdpZHRoOiBtYXRjaFs2XSxcbiAgICBjb21tYTogbWF0Y2hbN10sXG4gICAgcHJlY2lzaW9uOiBtYXRjaFs4XSAmJiBtYXRjaFs4XS5zbGljZSgxKSxcbiAgICB0cmltOiBtYXRjaFs5XSxcbiAgICB0eXBlOiBtYXRjaFsxMF1cbiAgfSk7XG59XG5cbmZvcm1hdFNwZWNpZmllci5wcm90b3R5cGUgPSBGb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlOyAvLyBpbnN0YW5jZW9mXG5cbmV4cG9ydCBmdW5jdGlvbiBGb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyKSB7XG4gIHRoaXMuZmlsbCA9IHNwZWNpZmllci5maWxsID09PSB1bmRlZmluZWQgPyBcIiBcIiA6IHNwZWNpZmllci5maWxsICsgXCJcIjtcbiAgdGhpcy5hbGlnbiA9IHNwZWNpZmllci5hbGlnbiA9PT0gdW5kZWZpbmVkID8gXCI+XCIgOiBzcGVjaWZpZXIuYWxpZ24gKyBcIlwiO1xuICB0aGlzLnNpZ24gPSBzcGVjaWZpZXIuc2lnbiA9PT0gdW5kZWZpbmVkID8gXCItXCIgOiBzcGVjaWZpZXIuc2lnbiArIFwiXCI7XG4gIHRoaXMuc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IHNwZWNpZmllci5zeW1ib2wgKyBcIlwiO1xuICB0aGlzLnplcm8gPSAhIXNwZWNpZmllci56ZXJvO1xuICB0aGlzLndpZHRoID0gc3BlY2lmaWVyLndpZHRoID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiArc3BlY2lmaWVyLndpZHRoO1xuICB0aGlzLmNvbW1hID0gISFzcGVjaWZpZXIuY29tbWE7XG4gIHRoaXMucHJlY2lzaW9uID0gc3BlY2lmaWVyLnByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogK3NwZWNpZmllci5wcmVjaXNpb247XG4gIHRoaXMudHJpbSA9ICEhc3BlY2lmaWVyLnRyaW07XG4gIHRoaXMudHlwZSA9IHNwZWNpZmllci50eXBlID09PSB1bmRlZmluZWQgPyBcIlwiIDogc3BlY2lmaWVyLnR5cGUgKyBcIlwiO1xufVxuXG5Gb3JtYXRTcGVjaWZpZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmZpbGxcbiAgICAgICsgdGhpcy5hbGlnblxuICAgICAgKyB0aGlzLnNpZ25cbiAgICAgICsgdGhpcy5zeW1ib2xcbiAgICAgICsgKHRoaXMuemVybyA/IFwiMFwiIDogXCJcIilcbiAgICAgICsgKHRoaXMud2lkdGggPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBNYXRoLm1heCgxLCB0aGlzLndpZHRoIHwgMCkpXG4gICAgICArICh0aGlzLmNvbW1hID8gXCIsXCIgOiBcIlwiKVxuICAgICAgKyAodGhpcy5wcmVjaXNpb24gPT09IHVuZGVmaW5lZCA/IFwiXCIgOiBcIi5cIiArIE1hdGgubWF4KDAsIHRoaXMucHJlY2lzaW9uIHwgMCkpXG4gICAgICArICh0aGlzLnRyaW0gPyBcIn5cIiA6IFwiXCIpXG4gICAgICArIHRoaXMudHlwZTtcbn07XG4iLCIvLyBUcmltcyBpbnNpZ25pZmljYW50IHplcm9zLCBlLmcuLCByZXBsYWNlcyAxLjIwMDBrIHdpdGggMS4yay5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHMpIHtcbiAgb3V0OiBmb3IgKHZhciBuID0gcy5sZW5ndGgsIGkgPSAxLCBpMCA9IC0xLCBpMTsgaSA8IG47ICsraSkge1xuICAgIHN3aXRjaCAoc1tpXSkge1xuICAgICAgY2FzZSBcIi5cIjogaTAgPSBpMSA9IGk7IGJyZWFrO1xuICAgICAgY2FzZSBcIjBcIjogaWYgKGkwID09PSAwKSBpMCA9IGk7IGkxID0gaTsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBpZiAoIStzW2ldKSBicmVhayBvdXQ7IGlmIChpMCA+IDApIGkwID0gMDsgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBpMCA+IDAgPyBzLnNsaWNlKDAsIGkwKSArIHMuc2xpY2UoaTEgKyAxKSA6IHM7XG59XG4iLCJpbXBvcnQgZm9ybWF0RGVjaW1hbCBmcm9tIFwiLi9mb3JtYXREZWNpbWFsLmpzXCI7XG5pbXBvcnQgZm9ybWF0UHJlZml4QXV0byBmcm9tIFwiLi9mb3JtYXRQcmVmaXhBdXRvLmpzXCI7XG5pbXBvcnQgZm9ybWF0Um91bmRlZCBmcm9tIFwiLi9mb3JtYXRSb3VuZGVkLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCIlXCI6ICh4LCBwKSA9PiAoeCAqIDEwMCkudG9GaXhlZChwKSxcbiAgXCJiXCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDIpLFxuICBcImNcIjogKHgpID0+IHggKyBcIlwiLFxuICBcImRcIjogZm9ybWF0RGVjaW1hbCxcbiAgXCJlXCI6ICh4LCBwKSA9PiB4LnRvRXhwb25lbnRpYWwocCksXG4gIFwiZlwiOiAoeCwgcCkgPT4geC50b0ZpeGVkKHApLFxuICBcImdcIjogKHgsIHApID0+IHgudG9QcmVjaXNpb24ocCksXG4gIFwib1wiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZyg4KSxcbiAgXCJwXCI6ICh4LCBwKSA9PiBmb3JtYXRSb3VuZGVkKHggKiAxMDAsIHApLFxuICBcInJcIjogZm9ybWF0Um91bmRlZCxcbiAgXCJzXCI6IGZvcm1hdFByZWZpeEF1dG8sXG4gIFwiWFwiOiAoeCkgPT4gTWF0aC5yb3VuZCh4KS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSxcbiAgXCJ4XCI6ICh4KSA9PiBNYXRoLnJvdW5kKHgpLnRvU3RyaW5nKDE2KVxufTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHg7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgZm9ybWF0RGVmYXVsdExvY2FsZSwgZm9ybWF0LCBmb3JtYXRQcmVmaXh9IGZyb20gXCIuL2RlZmF1bHRMb2NhbGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBmb3JtYXRMb2NhbGV9IGZyb20gXCIuL2xvY2FsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGZvcm1hdFNwZWNpZmllciwgRm9ybWF0U3BlY2lmaWVyfSBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25GaXhlZH0gZnJvbSBcIi4vcHJlY2lzaW9uRml4ZWQuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwcmVjaXNpb25QcmVmaXh9IGZyb20gXCIuL3ByZWNpc2lvblByZWZpeC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiLi9wcmVjaXNpb25Sb3VuZC5qc1wiO1xuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5pbXBvcnQgZm9ybWF0R3JvdXAgZnJvbSBcIi4vZm9ybWF0R3JvdXAuanNcIjtcbmltcG9ydCBmb3JtYXROdW1lcmFscyBmcm9tIFwiLi9mb3JtYXROdW1lcmFscy5qc1wiO1xuaW1wb3J0IGZvcm1hdFNwZWNpZmllciBmcm9tIFwiLi9mb3JtYXRTcGVjaWZpZXIuanNcIjtcbmltcG9ydCBmb3JtYXRUcmltIGZyb20gXCIuL2Zvcm1hdFRyaW0uanNcIjtcbmltcG9ydCBmb3JtYXRUeXBlcyBmcm9tIFwiLi9mb3JtYXRUeXBlcy5qc1wiO1xuaW1wb3J0IHtwcmVmaXhFeHBvbmVudH0gZnJvbSBcIi4vZm9ybWF0UHJlZml4QXV0by5qc1wiO1xuaW1wb3J0IGlkZW50aXR5IGZyb20gXCIuL2lkZW50aXR5LmpzXCI7XG5cbnZhciBtYXAgPSBBcnJheS5wcm90b3R5cGUubWFwLFxuICAgIHByZWZpeGVzID0gW1wieVwiLFwielwiLFwiYVwiLFwiZlwiLFwicFwiLFwiblwiLFwiwrVcIixcIm1cIixcIlwiLFwia1wiLFwiTVwiLFwiR1wiLFwiVFwiLFwiUFwiLFwiRVwiLFwiWlwiLFwiWVwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obG9jYWxlKSB7XG4gIHZhciBncm91cCA9IGxvY2FsZS5ncm91cGluZyA9PT0gdW5kZWZpbmVkIHx8IGxvY2FsZS50aG91c2FuZHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogZm9ybWF0R3JvdXAobWFwLmNhbGwobG9jYWxlLmdyb3VwaW5nLCBOdW1iZXIpLCBsb2NhbGUudGhvdXNhbmRzICsgXCJcIiksXG4gICAgICBjdXJyZW5jeVByZWZpeCA9IGxvY2FsZS5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGxvY2FsZS5jdXJyZW5jeVswXSArIFwiXCIsXG4gICAgICBjdXJyZW5jeVN1ZmZpeCA9IGxvY2FsZS5jdXJyZW5jeSA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IGxvY2FsZS5jdXJyZW5jeVsxXSArIFwiXCIsXG4gICAgICBkZWNpbWFsID0gbG9jYWxlLmRlY2ltYWwgPT09IHVuZGVmaW5lZCA/IFwiLlwiIDogbG9jYWxlLmRlY2ltYWwgKyBcIlwiLFxuICAgICAgbnVtZXJhbHMgPSBsb2NhbGUubnVtZXJhbHMgPT09IHVuZGVmaW5lZCA/IGlkZW50aXR5IDogZm9ybWF0TnVtZXJhbHMobWFwLmNhbGwobG9jYWxlLm51bWVyYWxzLCBTdHJpbmcpKSxcbiAgICAgIHBlcmNlbnQgPSBsb2NhbGUucGVyY2VudCA9PT0gdW5kZWZpbmVkID8gXCIlXCIgOiBsb2NhbGUucGVyY2VudCArIFwiXCIsXG4gICAgICBtaW51cyA9IGxvY2FsZS5taW51cyA9PT0gdW5kZWZpbmVkID8gXCLiiJJcIiA6IGxvY2FsZS5taW51cyArIFwiXCIsXG4gICAgICBuYW4gPSBsb2NhbGUubmFuID09PSB1bmRlZmluZWQgPyBcIk5hTlwiIDogbG9jYWxlLm5hbiArIFwiXCI7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllcikge1xuICAgIHNwZWNpZmllciA9IGZvcm1hdFNwZWNpZmllcihzcGVjaWZpZXIpO1xuXG4gICAgdmFyIGZpbGwgPSBzcGVjaWZpZXIuZmlsbCxcbiAgICAgICAgYWxpZ24gPSBzcGVjaWZpZXIuYWxpZ24sXG4gICAgICAgIHNpZ24gPSBzcGVjaWZpZXIuc2lnbixcbiAgICAgICAgc3ltYm9sID0gc3BlY2lmaWVyLnN5bWJvbCxcbiAgICAgICAgemVybyA9IHNwZWNpZmllci56ZXJvLFxuICAgICAgICB3aWR0aCA9IHNwZWNpZmllci53aWR0aCxcbiAgICAgICAgY29tbWEgPSBzcGVjaWZpZXIuY29tbWEsXG4gICAgICAgIHByZWNpc2lvbiA9IHNwZWNpZmllci5wcmVjaXNpb24sXG4gICAgICAgIHRyaW0gPSBzcGVjaWZpZXIudHJpbSxcbiAgICAgICAgdHlwZSA9IHNwZWNpZmllci50eXBlO1xuXG4gICAgLy8gVGhlIFwiblwiIHR5cGUgaXMgYW4gYWxpYXMgZm9yIFwiLGdcIi5cbiAgICBpZiAodHlwZSA9PT0gXCJuXCIpIGNvbW1hID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gVGhlIFwiXCIgdHlwZSwgYW5kIGFueSBpbnZhbGlkIHR5cGUsIGlzIGFuIGFsaWFzIGZvciBcIi4xMn5nXCIuXG4gICAgZWxzZSBpZiAoIWZvcm1hdFR5cGVzW3R5cGVdKSBwcmVjaXNpb24gPT09IHVuZGVmaW5lZCAmJiAocHJlY2lzaW9uID0gMTIpLCB0cmltID0gdHJ1ZSwgdHlwZSA9IFwiZ1wiO1xuXG4gICAgLy8gSWYgemVybyBmaWxsIGlzIHNwZWNpZmllZCwgcGFkZGluZyBnb2VzIGFmdGVyIHNpZ24gYW5kIGJlZm9yZSBkaWdpdHMuXG4gICAgaWYgKHplcm8gfHwgKGZpbGwgPT09IFwiMFwiICYmIGFsaWduID09PSBcIj1cIikpIHplcm8gPSB0cnVlLCBmaWxsID0gXCIwXCIsIGFsaWduID0gXCI9XCI7XG5cbiAgICAvLyBDb21wdXRlIHRoZSBwcmVmaXggYW5kIHN1ZmZpeC5cbiAgICAvLyBGb3IgU0ktcHJlZml4LCB0aGUgc3VmZml4IGlzIGxhemlseSBjb21wdXRlZC5cbiAgICB2YXIgcHJlZml4ID0gc3ltYm9sID09PSBcIiRcIiA/IGN1cnJlbmN5UHJlZml4IDogc3ltYm9sID09PSBcIiNcIiAmJiAvW2JveFhdLy50ZXN0KHR5cGUpID8gXCIwXCIgKyB0eXBlLnRvTG93ZXJDYXNlKCkgOiBcIlwiLFxuICAgICAgICBzdWZmaXggPSBzeW1ib2wgPT09IFwiJFwiID8gY3VycmVuY3lTdWZmaXggOiAvWyVwXS8udGVzdCh0eXBlKSA/IHBlcmNlbnQgOiBcIlwiO1xuXG4gICAgLy8gV2hhdCBmb3JtYXQgZnVuY3Rpb24gc2hvdWxkIHdlIHVzZT9cbiAgICAvLyBJcyB0aGlzIGFuIGludGVnZXIgdHlwZT9cbiAgICAvLyBDYW4gdGhpcyB0eXBlIGdlbmVyYXRlIGV4cG9uZW50aWFsIG5vdGF0aW9uP1xuICAgIHZhciBmb3JtYXRUeXBlID0gZm9ybWF0VHlwZXNbdHlwZV0sXG4gICAgICAgIG1heWJlU3VmZml4ID0gL1tkZWZncHJzJV0vLnRlc3QodHlwZSk7XG5cbiAgICAvLyBTZXQgdGhlIGRlZmF1bHQgcHJlY2lzaW9uIGlmIG5vdCBzcGVjaWZpZWQsXG4gICAgLy8gb3IgY2xhbXAgdGhlIHNwZWNpZmllZCBwcmVjaXNpb24gdG8gdGhlIHN1cHBvcnRlZCByYW5nZS5cbiAgICAvLyBGb3Igc2lnbmlmaWNhbnQgcHJlY2lzaW9uLCBpdCBtdXN0IGJlIGluIFsxLCAyMV0uXG4gICAgLy8gRm9yIGZpeGVkIHByZWNpc2lvbiwgaXQgbXVzdCBiZSBpbiBbMCwgMjBdLlxuICAgIHByZWNpc2lvbiA9IHByZWNpc2lvbiA9PT0gdW5kZWZpbmVkID8gNlxuICAgICAgICA6IC9bZ3Byc10vLnRlc3QodHlwZSkgPyBNYXRoLm1heCgxLCBNYXRoLm1pbigyMSwgcHJlY2lzaW9uKSlcbiAgICAgICAgOiBNYXRoLm1heCgwLCBNYXRoLm1pbigyMCwgcHJlY2lzaW9uKSk7XG5cbiAgICBmdW5jdGlvbiBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHZhciB2YWx1ZVByZWZpeCA9IHByZWZpeCxcbiAgICAgICAgICB2YWx1ZVN1ZmZpeCA9IHN1ZmZpeCxcbiAgICAgICAgICBpLCBuLCBjO1xuXG4gICAgICBpZiAodHlwZSA9PT0gXCJjXCIpIHtcbiAgICAgICAgdmFsdWVTdWZmaXggPSBmb3JtYXRUeXBlKHZhbHVlKSArIHZhbHVlU3VmZml4O1xuICAgICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9ICt2YWx1ZTtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHNpZ24uIC0wIGlzIG5vdCBsZXNzIHRoYW4gMCwgYnV0IDEgLyAtMCBpcyFcbiAgICAgICAgdmFyIHZhbHVlTmVnYXRpdmUgPSB2YWx1ZSA8IDAgfHwgMSAvIHZhbHVlIDwgMDtcblxuICAgICAgICAvLyBQZXJmb3JtIHRoZSBpbml0aWFsIGZvcm1hdHRpbmcuXG4gICAgICAgIHZhbHVlID0gaXNOYU4odmFsdWUpID8gbmFuIDogZm9ybWF0VHlwZShNYXRoLmFicyh2YWx1ZSksIHByZWNpc2lvbik7XG5cbiAgICAgICAgLy8gVHJpbSBpbnNpZ25pZmljYW50IHplcm9zLlxuICAgICAgICBpZiAodHJpbSkgdmFsdWUgPSBmb3JtYXRUcmltKHZhbHVlKTtcblxuICAgICAgICAvLyBJZiBhIG5lZ2F0aXZlIHZhbHVlIHJvdW5kcyB0byB6ZXJvIGFmdGVyIGZvcm1hdHRpbmcsIGFuZCBubyBleHBsaWNpdCBwb3NpdGl2ZSBzaWduIGlzIHJlcXVlc3RlZCwgaGlkZSB0aGUgc2lnbi5cbiAgICAgICAgaWYgKHZhbHVlTmVnYXRpdmUgJiYgK3ZhbHVlID09PSAwICYmIHNpZ24gIT09IFwiK1wiKSB2YWx1ZU5lZ2F0aXZlID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgcHJlZml4IGFuZCBzdWZmaXguXG4gICAgICAgIHZhbHVlUHJlZml4ID0gKHZhbHVlTmVnYXRpdmUgPyAoc2lnbiA9PT0gXCIoXCIgPyBzaWduIDogbWludXMpIDogc2lnbiA9PT0gXCItXCIgfHwgc2lnbiA9PT0gXCIoXCIgPyBcIlwiIDogc2lnbikgKyB2YWx1ZVByZWZpeDtcbiAgICAgICAgdmFsdWVTdWZmaXggPSAodHlwZSA9PT0gXCJzXCIgPyBwcmVmaXhlc1s4ICsgcHJlZml4RXhwb25lbnQgLyAzXSA6IFwiXCIpICsgdmFsdWVTdWZmaXggKyAodmFsdWVOZWdhdGl2ZSAmJiBzaWduID09PSBcIihcIiA/IFwiKVwiIDogXCJcIik7XG5cbiAgICAgICAgLy8gQnJlYWsgdGhlIGZvcm1hdHRlZCB2YWx1ZSBpbnRvIHRoZSBpbnRlZ2VyIOKAnHZhbHVl4oCdIHBhcnQgdGhhdCBjYW4gYmVcbiAgICAgICAgLy8gZ3JvdXBlZCwgYW5kIGZyYWN0aW9uYWwgb3IgZXhwb25lbnRpYWwg4oCcc3VmZml44oCdIHBhcnQgdGhhdCBpcyBub3QuXG4gICAgICAgIGlmIChtYXliZVN1ZmZpeCkge1xuICAgICAgICAgIGkgPSAtMSwgbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICAgICAgaWYgKGMgPSB2YWx1ZS5jaGFyQ29kZUF0KGkpLCA0OCA+IGMgfHwgYyA+IDU3KSB7XG4gICAgICAgICAgICAgIHZhbHVlU3VmZml4ID0gKGMgPT09IDQ2ID8gZGVjaW1hbCArIHZhbHVlLnNsaWNlKGkgKyAxKSA6IHZhbHVlLnNsaWNlKGkpKSArIHZhbHVlU3VmZml4O1xuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGkpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIG5vdCBcIjBcIiwgZ3JvdXBpbmcgaXMgYXBwbGllZCBiZWZvcmUgcGFkZGluZy5cbiAgICAgIGlmIChjb21tYSAmJiAhemVybykgdmFsdWUgPSBncm91cCh2YWx1ZSwgSW5maW5pdHkpO1xuXG4gICAgICAvLyBDb21wdXRlIHRoZSBwYWRkaW5nLlxuICAgICAgdmFyIGxlbmd0aCA9IHZhbHVlUHJlZml4Lmxlbmd0aCArIHZhbHVlLmxlbmd0aCArIHZhbHVlU3VmZml4Lmxlbmd0aCxcbiAgICAgICAgICBwYWRkaW5nID0gbGVuZ3RoIDwgd2lkdGggPyBuZXcgQXJyYXkod2lkdGggLSBsZW5ndGggKyAxKS5qb2luKGZpbGwpIDogXCJcIjtcblxuICAgICAgLy8gSWYgdGhlIGZpbGwgY2hhcmFjdGVyIGlzIFwiMFwiLCBncm91cGluZyBpcyBhcHBsaWVkIGFmdGVyIHBhZGRpbmcuXG4gICAgICBpZiAoY29tbWEgJiYgemVybykgdmFsdWUgPSBncm91cChwYWRkaW5nICsgdmFsdWUsIHBhZGRpbmcubGVuZ3RoID8gd2lkdGggLSB2YWx1ZVN1ZmZpeC5sZW5ndGggOiBJbmZpbml0eSksIHBhZGRpbmcgPSBcIlwiO1xuXG4gICAgICAvLyBSZWNvbnN0cnVjdCB0aGUgZmluYWwgb3V0cHV0IGJhc2VkIG9uIHRoZSBkZXNpcmVkIGFsaWdubWVudC5cbiAgICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgICAgY2FzZSBcIjxcIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHZhbHVlICsgdmFsdWVTdWZmaXggKyBwYWRkaW5nOyBicmVhaztcbiAgICAgICAgY2FzZSBcIj1cIjogdmFsdWUgPSB2YWx1ZVByZWZpeCArIHBhZGRpbmcgKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgICAgY2FzZSBcIl5cIjogdmFsdWUgPSBwYWRkaW5nLnNsaWNlKDAsIGxlbmd0aCA9IHBhZGRpbmcubGVuZ3RoID4+IDEpICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4ICsgcGFkZGluZy5zbGljZShsZW5ndGgpOyBicmVhaztcbiAgICAgICAgZGVmYXVsdDogdmFsdWUgPSBwYWRkaW5nICsgdmFsdWVQcmVmaXggKyB2YWx1ZSArIHZhbHVlU3VmZml4OyBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bWVyYWxzKHZhbHVlKTtcbiAgICB9XG5cbiAgICBmb3JtYXQudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBzcGVjaWZpZXIgKyBcIlwiO1xuICAgIH07XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0UHJlZml4KHNwZWNpZmllciwgdmFsdWUpIHtcbiAgICB2YXIgZiA9IG5ld0Zvcm1hdCgoc3BlY2lmaWVyID0gZm9ybWF0U3BlY2lmaWVyKHNwZWNpZmllciksIHNwZWNpZmllci50eXBlID0gXCJmXCIsIHNwZWNpZmllcikpLFxuICAgICAgICBlID0gTWF0aC5tYXgoLTgsIE1hdGgubWluKDgsIE1hdGguZmxvb3IoZXhwb25lbnQodmFsdWUpIC8gMykpKSAqIDMsXG4gICAgICAgIGsgPSBNYXRoLnBvdygxMCwgLWUpLFxuICAgICAgICBwcmVmaXggPSBwcmVmaXhlc1s4ICsgZSAvIDNdO1xuICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgcmV0dXJuIGYoayAqIHZhbHVlKSArIHByZWZpeDtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBmb3JtYXQ6IG5ld0Zvcm1hdCxcbiAgICBmb3JtYXRQcmVmaXg6IGZvcm1hdFByZWZpeFxuICB9O1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXApIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIC1leHBvbmVudChNYXRoLmFicyhzdGVwKSkpO1xufVxuIiwiaW1wb3J0IGV4cG9uZW50IGZyb20gXCIuL2V4cG9uZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0ZXAsIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1heCgtOCwgTWF0aC5taW4oOCwgTWF0aC5mbG9vcihleHBvbmVudCh2YWx1ZSkgLyAzKSkpICogMyAtIGV4cG9uZW50KE1hdGguYWJzKHN0ZXApKSk7XG59XG4iLCJpbXBvcnQgZXhwb25lbnQgZnJvbSBcIi4vZXhwb25lbnQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc3RlcCwgbWF4KSB7XG4gIHN0ZXAgPSBNYXRoLmFicyhzdGVwKSwgbWF4ID0gTWF0aC5hYnMobWF4KSAtIHN0ZXA7XG4gIHJldHVybiBNYXRoLm1heCgwLCBleHBvbmVudChtYXgpIC0gZXhwb25lbnQoc3RlcCkpICsgMTtcbn1cbiIsImltcG9ydCB2YWx1ZSBmcm9tIFwiLi92YWx1ZS5qc1wiO1xuaW1wb3J0IG51bWJlckFycmF5LCB7aXNOdW1iZXJBcnJheX0gZnJvbSBcIi4vbnVtYmVyQXJyYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gKGlzTnVtYmVyQXJyYXkoYikgPyBudW1iZXJBcnJheSA6IGdlbmVyaWNBcnJheSkoYSwgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljQXJyYXkoYSwgYikge1xuICB2YXIgbmIgPSBiID8gYi5sZW5ndGggOiAwLFxuICAgICAgbmEgPSBhID8gTWF0aC5taW4obmIsIGEubGVuZ3RoKSA6IDAsXG4gICAgICB4ID0gbmV3IEFycmF5KG5hKSxcbiAgICAgIGMgPSBuZXcgQXJyYXkobmIpLFxuICAgICAgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgbmE7ICsraSkgeFtpXSA9IHZhbHVlKGFbaV0sIGJbaV0pO1xuICBmb3IgKDsgaSA8IG5iOyArK2kpIGNbaV0gPSBiW2ldO1xuXG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG5hOyArK2kpIGNbaV0gPSB4W2ldKHQpO1xuICAgIHJldHVybiBjO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJhc2lzKHQxLCB2MCwgdjEsIHYyLCB2Mykge1xuICB2YXIgdDIgPSB0MSAqIHQxLCB0MyA9IHQyICogdDE7XG4gIHJldHVybiAoKDEgLSAzICogdDEgKyAzICogdDIgLSB0MykgKiB2MFxuICAgICAgKyAoNCAtIDYgKiB0MiArIDMgKiB0MykgKiB2MVxuICAgICAgKyAoMSArIDMgKiB0MSArIDMgKiB0MiAtIDMgKiB0MykgKiB2MlxuICAgICAgKyB0MyAqIHYzKSAvIDY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGggLSAxO1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHZhciBpID0gdCA8PSAwID8gKHQgPSAwKSA6IHQgPj0gMSA/ICh0ID0gMSwgbiAtIDEpIDogTWF0aC5mbG9vcih0ICogbiksXG4gICAgICAgIHYxID0gdmFsdWVzW2ldLFxuICAgICAgICB2MiA9IHZhbHVlc1tpICsgMV0sXG4gICAgICAgIHYwID0gaSA+IDAgPyB2YWx1ZXNbaSAtIDFdIDogMiAqIHYxIC0gdjIsXG4gICAgICAgIHYzID0gaSA8IG4gLSAxID8gdmFsdWVzW2kgKyAyXSA6IDIgKiB2MiAtIHYxO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCB7YmFzaXN9IGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlcykge1xuICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLmZsb29yKCgodCAlPSAxKSA8IDAgPyArK3QgOiB0KSAqIG4pLFxuICAgICAgICB2MCA9IHZhbHVlc1soaSArIG4gLSAxKSAlIG5dLFxuICAgICAgICB2MSA9IHZhbHVlc1tpICUgbl0sXG4gICAgICAgIHYyID0gdmFsdWVzWyhpICsgMSkgJSBuXSxcbiAgICAgICAgdjMgPSB2YWx1ZXNbKGkgKyAyKSAlIG5dO1xuICAgIHJldHVybiBiYXNpcygodCAtIGkgLyBuKSAqIG4sIHYwLCB2MSwgdjIsIHYzKTtcbiAgfTtcbn1cbiIsImltcG9ydCBjb25zdGFudCBmcm9tIFwiLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBsaW5lYXIoYSwgZCkge1xuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBhICsgdCAqIGQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV4cG9uZW50aWFsKGEsIGIsIHkpIHtcbiAgcmV0dXJuIGEgPSBNYXRoLnBvdyhhLCB5KSwgYiA9IE1hdGgucG93KGIsIHkpIC0gYSwgeSA9IDEgLyB5LCBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KGEgKyB0ICogYiwgeSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBodWUoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkID4gMTgwIHx8IGQgPCAtMTgwID8gZCAtIDM2MCAqIE1hdGgucm91bmQoZCAvIDM2MCkgOiBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2FtbWEoeSkge1xuICByZXR1cm4gKHkgPSAreSkgPT09IDEgPyBub2dhbW1hIDogZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBiIC0gYSA/IGV4cG9uZW50aWFsKGEsIGIsIHkpIDogY29uc3RhbnQoaXNOYU4oYSkgPyBiIDogYSk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZ2FtbWEoYSwgYikge1xuICB2YXIgZCA9IGIgLSBhO1xuICByZXR1cm4gZCA/IGxpbmVhcihhLCBkKSA6IGNvbnN0YW50KGlzTmFOKGEpID8gYiA6IGEpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgeCA9PiAoKSA9PiB4O1xuIiwiaW1wb3J0IHtjdWJlaGVsaXggYXMgY29sb3JDdWJlaGVsaXh9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGNvbG9yLCB7aHVlfSBmcm9tIFwiLi9jb2xvci5qc1wiO1xuXG5mdW5jdGlvbiBjdWJlaGVsaXgoaHVlKSB7XG4gIHJldHVybiAoZnVuY3Rpb24gY3ViZWhlbGl4R2FtbWEoeSkge1xuICAgIHkgPSAreTtcblxuICAgIGZ1bmN0aW9uIGN1YmVoZWxpeChzdGFydCwgZW5kKSB7XG4gICAgICB2YXIgaCA9IGh1ZSgoc3RhcnQgPSBjb2xvckN1YmVoZWxpeChzdGFydCkpLmgsIChlbmQgPSBjb2xvckN1YmVoZWxpeChlbmQpKS5oKSxcbiAgICAgICAgICBzID0gY29sb3Ioc3RhcnQucywgZW5kLnMpLFxuICAgICAgICAgIGwgPSBjb2xvcihzdGFydC5sLCBlbmQubCksXG4gICAgICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgIHN0YXJ0LmggPSBoKHQpO1xuICAgICAgICBzdGFydC5zID0gcyh0KTtcbiAgICAgICAgc3RhcnQubCA9IGwoTWF0aC5wb3codCwgeSkpO1xuICAgICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgICAgcmV0dXJuIHN0YXJ0ICsgXCJcIjtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY3ViZWhlbGl4LmdhbW1hID0gY3ViZWhlbGl4R2FtbWE7XG5cbiAgICByZXR1cm4gY3ViZWhlbGl4O1xuICB9KSgxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3ViZWhlbGl4KGh1ZSk7XG5leHBvcnQgdmFyIGN1YmVoZWxpeExvbmcgPSBjdWJlaGVsaXgoY29sb3IpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgZCA9IG5ldyBEYXRlO1xuICByZXR1cm4gYSA9ICthLCBiID0gK2IsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gZC5zZXRUaW1lKGEgKiAoMSAtIHQpICsgYiAqIHQpLCBkO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocmFuZ2UpIHtcbiAgdmFyIG4gPSByYW5nZS5sZW5ndGg7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgcmV0dXJuIHJhbmdlW01hdGgubWF4KDAsIE1hdGgubWluKG4gLSAxLCBNYXRoLmZsb29yKHQgKiBuKSkpXTtcbiAgfTtcbn1cbiIsImltcG9ydCB7aGNsIGFzIGNvbG9ySGNsfSBmcm9tIFwiZDMtY29sb3JcIjtcbmltcG9ydCBjb2xvciwge2h1ZX0gZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZnVuY3Rpb24gaGNsKGh1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHZhciBoID0gaHVlKChzdGFydCA9IGNvbG9ySGNsKHN0YXJ0KSkuaCwgKGVuZCA9IGNvbG9ySGNsKGVuZCkpLmgpLFxuICAgICAgICBjID0gY29sb3Ioc3RhcnQuYywgZW5kLmMpLFxuICAgICAgICBsID0gY29sb3Ioc3RhcnQubCwgZW5kLmwpLFxuICAgICAgICBvcGFjaXR5ID0gY29sb3Ioc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5oID0gaCh0KTtcbiAgICAgIHN0YXJ0LmMgPSBjKHQpO1xuICAgICAgc3RhcnQubCA9IGwodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoY2woaHVlKTtcbmV4cG9ydCB2YXIgaGNsTG9uZyA9IGhjbChjb2xvcik7XG4iLCJpbXBvcnQge2hzbCBhcyBjb2xvckhzbH0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IsIHtodWV9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmZ1bmN0aW9uIGhzbChodWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICB2YXIgaCA9IGh1ZSgoc3RhcnQgPSBjb2xvckhzbChzdGFydCkpLmgsIChlbmQgPSBjb2xvckhzbChlbmQpKS5oKSxcbiAgICAgICAgcyA9IGNvbG9yKHN0YXJ0LnMsIGVuZC5zKSxcbiAgICAgICAgbCA9IGNvbG9yKHN0YXJ0LmwsIGVuZC5sKSxcbiAgICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgc3RhcnQuaCA9IGgodCk7XG4gICAgICBzdGFydC5zID0gcyh0KTtcbiAgICAgIHN0YXJ0LmwgPSBsKHQpO1xuICAgICAgc3RhcnQub3BhY2l0eSA9IG9wYWNpdHkodCk7XG4gICAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaHNsKGh1ZSk7XG5leHBvcnQgdmFyIGhzbExvbmcgPSBoc2woY29sb3IpO1xuIiwiaW1wb3J0IHtodWV9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGkgPSBodWUoK2EsICtiKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB2YXIgeCA9IGkodCk7XG4gICAgcmV0dXJuIHggLSAzNjAgKiBNYXRoLmZsb29yKHggLyAzNjApO1xuICB9O1xufVxuIiwiZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlfSBmcm9tIFwiLi92YWx1ZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlQXJyYXl9IGZyb20gXCIuL2FycmF5LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVCYXNpc30gZnJvbSBcIi4vYmFzaXMuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUJhc2lzQ2xvc2VkfSBmcm9tIFwiLi9iYXNpc0Nsb3NlZC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlRGF0ZX0gZnJvbSBcIi4vZGF0ZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlRGlzY3JldGV9IGZyb20gXCIuL2Rpc2NyZXRlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVIdWV9IGZyb20gXCIuL2h1ZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlTnVtYmVyfSBmcm9tIFwiLi9udW1iZXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZU51bWJlckFycmF5fSBmcm9tIFwiLi9udW1iZXJBcnJheS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlT2JqZWN0fSBmcm9tIFwiLi9vYmplY3QuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVJvdW5kfSBmcm9tIFwiLi9yb3VuZC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGludGVycG9sYXRlU3RyaW5nfSBmcm9tIFwiLi9zdHJpbmcuanNcIjtcbmV4cG9ydCB7aW50ZXJwb2xhdGVUcmFuc2Zvcm1Dc3MsIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnfSBmcm9tIFwiLi90cmFuc2Zvcm0vaW5kZXguanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVpvb219IGZyb20gXCIuL3pvb20uanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZVJnYiwgcmdiQmFzaXMgYXMgaW50ZXJwb2xhdGVSZ2JCYXNpcywgcmdiQmFzaXNDbG9zZWQgYXMgaW50ZXJwb2xhdGVSZ2JCYXNpc0Nsb3NlZH0gZnJvbSBcIi4vcmdiLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVIc2wsIGhzbExvbmcgYXMgaW50ZXJwb2xhdGVIc2xMb25nfSBmcm9tIFwiLi9oc2wuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUxhYn0gZnJvbSBcIi4vbGFiLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaW50ZXJwb2xhdGVIY2wsIGhjbExvbmcgYXMgaW50ZXJwb2xhdGVIY2xMb25nfSBmcm9tIFwiLi9oY2wuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeCwgY3ViZWhlbGl4TG9uZyBhcyBpbnRlcnBvbGF0ZUN1YmVoZWxpeExvbmd9IGZyb20gXCIuL2N1YmVoZWxpeC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBpZWNld2lzZX0gZnJvbSBcIi4vcGllY2V3aXNlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgcXVhbnRpemV9IGZyb20gXCIuL3F1YW50aXplLmpzXCI7XG4iLCJpbXBvcnQge2xhYiBhcyBjb2xvckxhYn0gZnJvbSBcImQzLWNvbG9yXCI7XG5pbXBvcnQgY29sb3IgZnJvbSBcIi4vY29sb3IuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGFiKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGwgPSBjb2xvcigoc3RhcnQgPSBjb2xvckxhYihzdGFydCkpLmwsIChlbmQgPSBjb2xvckxhYihlbmQpKS5sKSxcbiAgICAgIGEgPSBjb2xvcihzdGFydC5hLCBlbmQuYSksXG4gICAgICBiID0gY29sb3Ioc3RhcnQuYiwgZW5kLmIpLFxuICAgICAgb3BhY2l0eSA9IGNvbG9yKHN0YXJ0Lm9wYWNpdHksIGVuZC5vcGFjaXR5KTtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICBzdGFydC5sID0gbCh0KTtcbiAgICBzdGFydC5hID0gYSh0KTtcbiAgICBzdGFydC5iID0gYih0KTtcbiAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICByZXR1cm4gc3RhcnQgKyBcIlwiO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSA9ICthLCBiID0gK2IsIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYSAqICgxIC0gdCkgKyBiICogdDtcbiAgfTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgaWYgKCFiKSBiID0gW107XG4gIHZhciBuID0gYSA/IE1hdGgubWluKGIubGVuZ3RoLCBhLmxlbmd0aCkgOiAwLFxuICAgICAgYyA9IGIuc2xpY2UoKSxcbiAgICAgIGk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgZm9yIChpID0gMDsgaSA8IG47ICsraSkgY1tpXSA9IGFbaV0gKiAoMSAtIHQpICsgYltpXSAqIHQ7XG4gICAgcmV0dXJuIGM7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlckFycmF5KHgpIHtcbiAgcmV0dXJuIEFycmF5QnVmZmVyLmlzVmlldyh4KSAmJiAhKHggaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG4iLCJpbXBvcnQgdmFsdWUgZnJvbSBcIi4vdmFsdWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oYSwgYikge1xuICB2YXIgaSA9IHt9LFxuICAgICAgYyA9IHt9LFxuICAgICAgaztcblxuICBpZiAoYSA9PT0gbnVsbCB8fCB0eXBlb2YgYSAhPT0gXCJvYmplY3RcIikgYSA9IHt9O1xuICBpZiAoYiA9PT0gbnVsbCB8fCB0eXBlb2YgYiAhPT0gXCJvYmplY3RcIikgYiA9IHt9O1xuXG4gIGZvciAoayBpbiBiKSB7XG4gICAgaWYgKGsgaW4gYSkge1xuICAgICAgaVtrXSA9IHZhbHVlKGFba10sIGJba10pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjW2tdID0gYltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIGZvciAoayBpbiBpKSBjW2tdID0gaVtrXSh0KTtcbiAgICByZXR1cm4gYztcbiAgfTtcbn1cbiIsImltcG9ydCB7ZGVmYXVsdCBhcyB2YWx1ZX0gZnJvbSBcIi4vdmFsdWUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGllY2V3aXNlKGludGVycG9sYXRlLCB2YWx1ZXMpIHtcbiAgaWYgKHZhbHVlcyA9PT0gdW5kZWZpbmVkKSB2YWx1ZXMgPSBpbnRlcnBvbGF0ZSwgaW50ZXJwb2xhdGUgPSB2YWx1ZTtcbiAgdmFyIGkgPSAwLCBuID0gdmFsdWVzLmxlbmd0aCAtIDEsIHYgPSB2YWx1ZXNbMF0sIEkgPSBuZXcgQXJyYXkobiA8IDAgPyAwIDogbik7XG4gIHdoaWxlIChpIDwgbikgSVtpXSA9IGludGVycG9sYXRlKHYsIHYgPSB2YWx1ZXNbKytpXSk7XG4gIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgdmFyIGkgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihuIC0gMSwgTWF0aC5mbG9vcih0ICo9IG4pKSk7XG4gICAgcmV0dXJuIElbaV0odCAtIGkpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW50ZXJwb2xhdG9yLCBuKSB7XG4gIHZhciBzYW1wbGVzID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSkgc2FtcGxlc1tpXSA9IGludGVycG9sYXRvcihpIC8gKG4gLSAxKSk7XG4gIHJldHVybiBzYW1wbGVzO1xufVxuIiwiaW1wb3J0IHtyZ2IgYXMgY29sb3JSZ2J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IGJhc2lzIGZyb20gXCIuL2Jhc2lzLmpzXCI7XG5pbXBvcnQgYmFzaXNDbG9zZWQgZnJvbSBcIi4vYmFzaXNDbG9zZWQuanNcIjtcbmltcG9ydCBub2dhbW1hLCB7Z2FtbWF9IGZyb20gXCIuL2NvbG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiByZ2JHYW1tYSh5KSB7XG4gIHZhciBjb2xvciA9IGdhbW1hKHkpO1xuXG4gIGZ1bmN0aW9uIHJnYihzdGFydCwgZW5kKSB7XG4gICAgdmFyIHIgPSBjb2xvcigoc3RhcnQgPSBjb2xvclJnYihzdGFydCkpLnIsIChlbmQgPSBjb2xvclJnYihlbmQpKS5yKSxcbiAgICAgICAgZyA9IGNvbG9yKHN0YXJ0LmcsIGVuZC5nKSxcbiAgICAgICAgYiA9IGNvbG9yKHN0YXJ0LmIsIGVuZC5iKSxcbiAgICAgICAgb3BhY2l0eSA9IG5vZ2FtbWEoc3RhcnQub3BhY2l0eSwgZW5kLm9wYWNpdHkpO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBzdGFydC5yID0gcih0KTtcbiAgICAgIHN0YXJ0LmcgPSBnKHQpO1xuICAgICAgc3RhcnQuYiA9IGIodCk7XG4gICAgICBzdGFydC5vcGFjaXR5ID0gb3BhY2l0eSh0KTtcbiAgICAgIHJldHVybiBzdGFydCArIFwiXCI7XG4gICAgfTtcbiAgfVxuXG4gIHJnYi5nYW1tYSA9IHJnYkdhbW1hO1xuXG4gIHJldHVybiByZ2I7XG59KSgxKTtcblxuZnVuY3Rpb24gcmdiU3BsaW5lKHNwbGluZSkge1xuICByZXR1cm4gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgdmFyIG4gPSBjb2xvcnMubGVuZ3RoLFxuICAgICAgICByID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBnID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBiID0gbmV3IEFycmF5KG4pLFxuICAgICAgICBpLCBjb2xvcjtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBjb2xvciA9IGNvbG9yUmdiKGNvbG9yc1tpXSk7XG4gICAgICByW2ldID0gY29sb3IuciB8fCAwO1xuICAgICAgZ1tpXSA9IGNvbG9yLmcgfHwgMDtcbiAgICAgIGJbaV0gPSBjb2xvci5iIHx8IDA7XG4gICAgfVxuICAgIHIgPSBzcGxpbmUocik7XG4gICAgZyA9IHNwbGluZShnKTtcbiAgICBiID0gc3BsaW5lKGIpO1xuICAgIGNvbG9yLm9wYWNpdHkgPSAxO1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICBjb2xvci5yID0gcih0KTtcbiAgICAgIGNvbG9yLmcgPSBnKHQpO1xuICAgICAgY29sb3IuYiA9IGIodCk7XG4gICAgICByZXR1cm4gY29sb3IgKyBcIlwiO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB2YXIgcmdiQmFzaXMgPSByZ2JTcGxpbmUoYmFzaXMpO1xuZXhwb3J0IHZhciByZ2JCYXNpc0Nsb3NlZCA9IHJnYlNwbGluZShiYXNpc0Nsb3NlZCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHJldHVybiBhID0gK2EsIGIgPSArYiwgZnVuY3Rpb24odCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGEgKiAoMSAtIHQpICsgYiAqIHQpO1xuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxudmFyIHJlQSA9IC9bLStdPyg/OlxcZCtcXC4/XFxkKnxcXC4/XFxkKykoPzpbZUVdWy0rXT9cXGQrKT8vZyxcbiAgICByZUIgPSBuZXcgUmVnRXhwKHJlQS5zb3VyY2UsIFwiZ1wiKTtcblxuZnVuY3Rpb24gemVybyhiKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gYjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25lKGIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICByZXR1cm4gYih0KSArIFwiXCI7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcbiAgdmFyIGJpID0gcmVBLmxhc3RJbmRleCA9IHJlQi5sYXN0SW5kZXggPSAwLCAvLyBzY2FuIGluZGV4IGZvciBuZXh0IG51bWJlciBpbiBiXG4gICAgICBhbSwgLy8gY3VycmVudCBtYXRjaCBpbiBhXG4gICAgICBibSwgLy8gY3VycmVudCBtYXRjaCBpbiBiXG4gICAgICBicywgLy8gc3RyaW5nIHByZWNlZGluZyBjdXJyZW50IG51bWJlciBpbiBiLCBpZiBhbnlcbiAgICAgIGkgPSAtMSwgLy8gaW5kZXggaW4gc1xuICAgICAgcyA9IFtdLCAvLyBzdHJpbmcgY29uc3RhbnRzIGFuZCBwbGFjZWhvbGRlcnNcbiAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcblxuICAvLyBDb2VyY2UgaW5wdXRzIHRvIHN0cmluZ3MuXG4gIGEgPSBhICsgXCJcIiwgYiA9IGIgKyBcIlwiO1xuXG4gIC8vIEludGVycG9sYXRlIHBhaXJzIG9mIG51bWJlcnMgaW4gYSAmIGIuXG4gIHdoaWxlICgoYW0gPSByZUEuZXhlYyhhKSlcbiAgICAgICYmIChibSA9IHJlQi5leGVjKGIpKSkge1xuICAgIGlmICgoYnMgPSBibS5pbmRleCkgPiBiaSkgeyAvLyBhIHN0cmluZyBwcmVjZWRlcyB0aGUgbmV4dCBudW1iZXIgaW4gYlxuICAgICAgYnMgPSBiLnNsaWNlKGJpLCBicyk7XG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYnM7XG4gICAgfVxuICAgIGlmICgoYW0gPSBhbVswXSkgPT09IChibSA9IGJtWzBdKSkgeyAvLyBudW1iZXJzIGluIGEgJiBiIG1hdGNoXG4gICAgICBpZiAoc1tpXSkgc1tpXSArPSBibTsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICAgIGVsc2Ugc1srK2ldID0gYm07XG4gICAgfSBlbHNlIHsgLy8gaW50ZXJwb2xhdGUgbm9uLW1hdGNoaW5nIG51bWJlcnNcbiAgICAgIHNbKytpXSA9IG51bGw7XG4gICAgICBxLnB1c2goe2k6IGksIHg6IG51bWJlcihhbSwgYm0pfSk7XG4gICAgfVxuICAgIGJpID0gcmVCLmxhc3RJbmRleDtcbiAgfVxuXG4gIC8vIEFkZCByZW1haW5zIG9mIGIuXG4gIGlmIChiaSA8IGIubGVuZ3RoKSB7XG4gICAgYnMgPSBiLnNsaWNlKGJpKTtcbiAgICBpZiAoc1tpXSkgc1tpXSArPSBiczsgLy8gY29hbGVzY2Ugd2l0aCBwcmV2aW91cyBzdHJpbmdcbiAgICBlbHNlIHNbKytpXSA9IGJzO1xuICB9XG5cbiAgLy8gU3BlY2lhbCBvcHRpbWl6YXRpb24gZm9yIG9ubHkgYSBzaW5nbGUgbWF0Y2guXG4gIC8vIE90aGVyd2lzZSwgaW50ZXJwb2xhdGUgZWFjaCBvZiB0aGUgbnVtYmVycyBhbmQgcmVqb2luIHRoZSBzdHJpbmcuXG4gIHJldHVybiBzLmxlbmd0aCA8IDIgPyAocVswXVxuICAgICAgPyBvbmUocVswXS54KVxuICAgICAgOiB6ZXJvKGIpKVxuICAgICAgOiAoYiA9IHEubGVuZ3RoLCBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG87IGkgPCBiOyArK2kpIHNbKG8gPSBxW2ldKS5pXSA9IG8ueCh0KTtcbiAgICAgICAgICByZXR1cm4gcy5qb2luKFwiXCIpO1xuICAgICAgICB9KTtcbn1cbiIsInZhciBkZWdyZWVzID0gMTgwIC8gTWF0aC5QSTtcblxuZXhwb3J0IHZhciBpZGVudGl0eSA9IHtcbiAgdHJhbnNsYXRlWDogMCxcbiAgdHJhbnNsYXRlWTogMCxcbiAgcm90YXRlOiAwLFxuICBza2V3WDogMCxcbiAgc2NhbGVYOiAxLFxuICBzY2FsZVk6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgdmFyIHNjYWxlWCwgc2NhbGVZLCBza2V3WDtcbiAgaWYgKHNjYWxlWCA9IE1hdGguc3FydChhICogYSArIGIgKiBiKSkgYSAvPSBzY2FsZVgsIGIgLz0gc2NhbGVYO1xuICBpZiAoc2tld1ggPSBhICogYyArIGIgKiBkKSBjIC09IGEgKiBza2V3WCwgZCAtPSBiICogc2tld1g7XG4gIGlmIChzY2FsZVkgPSBNYXRoLnNxcnQoYyAqIGMgKyBkICogZCkpIGMgLz0gc2NhbGVZLCBkIC89IHNjYWxlWSwgc2tld1ggLz0gc2NhbGVZO1xuICBpZiAoYSAqIGQgPCBiICogYykgYSA9IC1hLCBiID0gLWIsIHNrZXdYID0gLXNrZXdYLCBzY2FsZVggPSAtc2NhbGVYO1xuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZVg6IGUsXG4gICAgdHJhbnNsYXRlWTogZixcbiAgICByb3RhdGU6IE1hdGguYXRhbjIoYiwgYSkgKiBkZWdyZWVzLFxuICAgIHNrZXdYOiBNYXRoLmF0YW4oc2tld1gpICogZGVncmVlcyxcbiAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICBzY2FsZVk6IHNjYWxlWVxuICB9O1xufVxuIiwiaW1wb3J0IG51bWJlciBmcm9tIFwiLi4vbnVtYmVyLmpzXCI7XG5pbXBvcnQge3BhcnNlQ3NzLCBwYXJzZVN2Z30gZnJvbSBcIi4vcGFyc2UuanNcIjtcblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2UsIHB4Q29tbWEsIHB4UGFyZW4sIGRlZ1BhcmVuKSB7XG5cbiAgZnVuY3Rpb24gcG9wKHMpIHtcbiAgICByZXR1cm4gcy5sZW5ndGggPyBzLnBvcCgpICsgXCIgXCIgOiBcIlwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNsYXRlKHhhLCB5YSwgeGIsIHliLCBzLCBxKSB7XG4gICAgaWYgKHhhICE9PSB4YiB8fCB5YSAhPT0geWIpIHtcbiAgICAgIHZhciBpID0gcy5wdXNoKFwidHJhbnNsYXRlKFwiLCBudWxsLCBweENvbW1hLCBudWxsLCBweFBhcmVuKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgfHwgeWIpIHtcbiAgICAgIHMucHVzaChcInRyYW5zbGF0ZShcIiArIHhiICsgcHhDb21tYSArIHliICsgcHhQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcm90YXRlKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgaWYgKGEgLSBiID4gMTgwKSBiICs9IDM2MDsgZWxzZSBpZiAoYiAtIGEgPiAxODApIGEgKz0gMzYwOyAvLyBzaG9ydGVzdCBwYXRoXG4gICAgICBxLnB1c2goe2k6IHMucHVzaChwb3AocykgKyBcInJvdGF0ZShcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJyb3RhdGUoXCIgKyBiICsgZGVnUGFyZW4pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNrZXdYKGEsIGIsIHMsIHEpIHtcbiAgICBpZiAoYSAhPT0gYikge1xuICAgICAgcS5wdXNoKHtpOiBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiwgbnVsbCwgZGVnUGFyZW4pIC0gMiwgeDogbnVtYmVyKGEsIGIpfSk7XG4gICAgfSBlbHNlIGlmIChiKSB7XG4gICAgICBzLnB1c2gocG9wKHMpICsgXCJza2V3WChcIiArIGIgKyBkZWdQYXJlbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeGEsIHlhLCB4YiwgeWIsIHMsIHEpIHtcbiAgICBpZiAoeGEgIT09IHhiIHx8IHlhICE9PSB5Yikge1xuICAgICAgdmFyIGkgPSBzLnB1c2gocG9wKHMpICsgXCJzY2FsZShcIiwgbnVsbCwgXCIsXCIsIG51bGwsIFwiKVwiKTtcbiAgICAgIHEucHVzaCh7aTogaSAtIDQsIHg6IG51bWJlcih4YSwgeGIpfSwge2k6IGkgLSAyLCB4OiBudW1iZXIoeWEsIHliKX0pO1xuICAgIH0gZWxzZSBpZiAoeGIgIT09IDEgfHwgeWIgIT09IDEpIHtcbiAgICAgIHMucHVzaChwb3AocykgKyBcInNjYWxlKFwiICsgeGIgKyBcIixcIiArIHliICsgXCIpXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHMgPSBbXSwgLy8gc3RyaW5nIGNvbnN0YW50cyBhbmQgcGxhY2Vob2xkZXJzXG4gICAgICAgIHEgPSBbXTsgLy8gbnVtYmVyIGludGVycG9sYXRvcnNcbiAgICBhID0gcGFyc2UoYSksIGIgPSBwYXJzZShiKTtcbiAgICB0cmFuc2xhdGUoYS50cmFuc2xhdGVYLCBhLnRyYW5zbGF0ZVksIGIudHJhbnNsYXRlWCwgYi50cmFuc2xhdGVZLCBzLCBxKTtcbiAgICByb3RhdGUoYS5yb3RhdGUsIGIucm90YXRlLCBzLCBxKTtcbiAgICBza2V3WChhLnNrZXdYLCBiLnNrZXdYLCBzLCBxKTtcbiAgICBzY2FsZShhLnNjYWxlWCwgYS5zY2FsZVksIGIuc2NhbGVYLCBiLnNjYWxlWSwgcywgcSk7XG4gICAgYSA9IGIgPSBudWxsOyAvLyBnY1xuICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICB2YXIgaSA9IC0xLCBuID0gcS5sZW5ndGgsIG87XG4gICAgICB3aGlsZSAoKytpIDwgbikgc1sobyA9IHFbaV0pLmldID0gby54KHQpO1xuICAgICAgcmV0dXJuIHMuam9pbihcIlwiKTtcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtQ3NzID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VDc3MsIFwicHgsIFwiLCBcInB4KVwiLCBcImRlZylcIik7XG5leHBvcnQgdmFyIGludGVycG9sYXRlVHJhbnNmb3JtU3ZnID0gaW50ZXJwb2xhdGVUcmFuc2Zvcm0ocGFyc2VTdmcsIFwiLCBcIiwgXCIpXCIsIFwiKVwiKTtcbiIsImltcG9ydCBkZWNvbXBvc2UsIHtpZGVudGl0eX0gZnJvbSBcIi4vZGVjb21wb3NlLmpzXCI7XG5cbnZhciBzdmdOb2RlO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ3NzKHZhbHVlKSB7XG4gIGNvbnN0IG0gPSBuZXcgKHR5cGVvZiBET01NYXRyaXggPT09IFwiZnVuY3Rpb25cIiA/IERPTU1hdHJpeCA6IFdlYktpdENTU01hdHJpeCkodmFsdWUgKyBcIlwiKTtcbiAgcmV0dXJuIG0uaXNJZGVudGl0eSA/IGlkZW50aXR5IDogZGVjb21wb3NlKG0uYSwgbS5iLCBtLmMsIG0uZCwgbS5lLCBtLmYpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTdmcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHJldHVybiBpZGVudGl0eTtcbiAgaWYgKCFzdmdOb2RlKSBzdmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICBzdmdOb2RlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCB2YWx1ZSk7XG4gIGlmICghKHZhbHVlID0gc3ZnTm9kZS50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpKSkgcmV0dXJuIGlkZW50aXR5O1xuICB2YWx1ZSA9IHZhbHVlLm1hdHJpeDtcbiAgcmV0dXJuIGRlY29tcG9zZSh2YWx1ZS5hLCB2YWx1ZS5iLCB2YWx1ZS5jLCB2YWx1ZS5kLCB2YWx1ZS5lLCB2YWx1ZS5mKTtcbn1cbiIsImltcG9ydCB7Y29sb3J9IGZyb20gXCJkMy1jb2xvclwiO1xuaW1wb3J0IHJnYiBmcm9tIFwiLi9yZ2IuanNcIjtcbmltcG9ydCB7Z2VuZXJpY0FycmF5fSBmcm9tIFwiLi9hcnJheS5qc1wiO1xuaW1wb3J0IGRhdGUgZnJvbSBcIi4vZGF0ZS5qc1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcbmltcG9ydCBvYmplY3QgZnJvbSBcIi4vb2JqZWN0LmpzXCI7XG5pbXBvcnQgc3RyaW5nIGZyb20gXCIuL3N0cmluZy5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuL2NvbnN0YW50LmpzXCI7XG5pbXBvcnQgbnVtYmVyQXJyYXksIHtpc051bWJlckFycmF5fSBmcm9tIFwiLi9udW1iZXJBcnJheS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihhLCBiKSB7XG4gIHZhciB0ID0gdHlwZW9mIGIsIGM7XG4gIHJldHVybiBiID09IG51bGwgfHwgdCA9PT0gXCJib29sZWFuXCIgPyBjb25zdGFudChiKVxuICAgICAgOiAodCA9PT0gXCJudW1iZXJcIiA/IG51bWJlclxuICAgICAgOiB0ID09PSBcInN0cmluZ1wiID8gKChjID0gY29sb3IoYikpID8gKGIgPSBjLCByZ2IpIDogc3RyaW5nKVxuICAgICAgOiBiIGluc3RhbmNlb2YgY29sb3IgPyByZ2JcbiAgICAgIDogYiBpbnN0YW5jZW9mIERhdGUgPyBkYXRlXG4gICAgICA6IGlzTnVtYmVyQXJyYXkoYikgPyBudW1iZXJBcnJheVxuICAgICAgOiBBcnJheS5pc0FycmF5KGIpID8gZ2VuZXJpY0FycmF5XG4gICAgICA6IHR5cGVvZiBiLnZhbHVlT2YgIT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgYi50b1N0cmluZyAhPT0gXCJmdW5jdGlvblwiIHx8IGlzTmFOKGIpID8gb2JqZWN0XG4gICAgICA6IG51bWJlcikoYSwgYik7XG59XG4iLCJ2YXIgZXBzaWxvbjIgPSAxZS0xMjtcblxuZnVuY3Rpb24gY29zaCh4KSB7XG4gIHJldHVybiAoKHggPSBNYXRoLmV4cCh4KSkgKyAxIC8geCkgLyAyO1xufVxuXG5mdW5jdGlvbiBzaW5oKHgpIHtcbiAgcmV0dXJuICgoeCA9IE1hdGguZXhwKHgpKSAtIDEgLyB4KSAvIDI7XG59XG5cbmZ1bmN0aW9uIHRhbmgoeCkge1xuICByZXR1cm4gKCh4ID0gTWF0aC5leHAoMiAqIHgpKSAtIDEpIC8gKHggKyAxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHpvb21SaG8ocmhvLCByaG8yLCByaG80KSB7XG5cbiAgLy8gcDAgPSBbdXgwLCB1eTAsIHcwXVxuICAvLyBwMSA9IFt1eDEsIHV5MSwgdzFdXG4gIGZ1bmN0aW9uIHpvb20ocDAsIHAxKSB7XG4gICAgdmFyIHV4MCA9IHAwWzBdLCB1eTAgPSBwMFsxXSwgdzAgPSBwMFsyXSxcbiAgICAgICAgdXgxID0gcDFbMF0sIHV5MSA9IHAxWzFdLCB3MSA9IHAxWzJdLFxuICAgICAgICBkeCA9IHV4MSAtIHV4MCxcbiAgICAgICAgZHkgPSB1eTEgLSB1eTAsXG4gICAgICAgIGQyID0gZHggKiBkeCArIGR5ICogZHksXG4gICAgICAgIGksXG4gICAgICAgIFM7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgZm9yIHUwIOKJhSB1MS5cbiAgICBpZiAoZDIgPCBlcHNpbG9uMikge1xuICAgICAgUyA9IE1hdGgubG9nKHcxIC8gdzApIC8gcmhvO1xuICAgICAgaSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB1eDAgKyB0ICogZHgsXG4gICAgICAgICAgdXkwICsgdCAqIGR5LFxuICAgICAgICAgIHcwICogTWF0aC5leHAocmhvICogdCAqIFMpXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhbCBjYXNlLlxuICAgIGVsc2Uge1xuICAgICAgdmFyIGQxID0gTWF0aC5zcXJ0KGQyKSxcbiAgICAgICAgICBiMCA9ICh3MSAqIHcxIC0gdzAgKiB3MCArIHJobzQgKiBkMikgLyAoMiAqIHcwICogcmhvMiAqIGQxKSxcbiAgICAgICAgICBiMSA9ICh3MSAqIHcxIC0gdzAgKiB3MCAtIHJobzQgKiBkMikgLyAoMiAqIHcxICogcmhvMiAqIGQxKSxcbiAgICAgICAgICByMCA9IE1hdGgubG9nKE1hdGguc3FydChiMCAqIGIwICsgMSkgLSBiMCksXG4gICAgICAgICAgcjEgPSBNYXRoLmxvZyhNYXRoLnNxcnQoYjEgKiBiMSArIDEpIC0gYjEpO1xuICAgICAgUyA9IChyMSAtIHIwKSAvIHJobztcbiAgICAgIGkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgIHZhciBzID0gdCAqIFMsXG4gICAgICAgICAgICBjb3NocjAgPSBjb3NoKHIwKSxcbiAgICAgICAgICAgIHUgPSB3MCAvIChyaG8yICogZDEpICogKGNvc2hyMCAqIHRhbmgocmhvICogcyArIHIwKSAtIHNpbmgocjApKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB1eDAgKyB1ICogZHgsXG4gICAgICAgICAgdXkwICsgdSAqIGR5LFxuICAgICAgICAgIHcwICogY29zaHIwIC8gY29zaChyaG8gKiBzICsgcjApXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgaS5kdXJhdGlvbiA9IFMgKiAxMDAwICogcmhvIC8gTWF0aC5TUVJUMjtcblxuICAgIHJldHVybiBpO1xuICB9XG5cbiAgem9vbS5yaG8gPSBmdW5jdGlvbihfKSB7XG4gICAgdmFyIF8xID0gTWF0aC5tYXgoMWUtMywgK18pLCBfMiA9IF8xICogXzEsIF80ID0gXzIgKiBfMjtcbiAgICByZXR1cm4gem9vbVJobyhfMSwgXzIsIF80KTtcbiAgfTtcblxuICByZXR1cm4gem9vbTtcbn0pKE1hdGguU1FSVDIsIDIsIDQpO1xuIiwiaW1wb3J0IHtyYW5nZSBhcyBzZXF1ZW5jZX0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuaW1wb3J0IG9yZGluYWwgZnJvbSBcIi4vb3JkaW5hbC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYW5kKCkge1xuICB2YXIgc2NhbGUgPSBvcmRpbmFsKCkudW5rbm93bih1bmRlZmluZWQpLFxuICAgICAgZG9tYWluID0gc2NhbGUuZG9tYWluLFxuICAgICAgb3JkaW5hbFJhbmdlID0gc2NhbGUucmFuZ2UsXG4gICAgICByMCA9IDAsXG4gICAgICByMSA9IDEsXG4gICAgICBzdGVwLFxuICAgICAgYmFuZHdpZHRoLFxuICAgICAgcm91bmQgPSBmYWxzZSxcbiAgICAgIHBhZGRpbmdJbm5lciA9IDAsXG4gICAgICBwYWRkaW5nT3V0ZXIgPSAwLFxuICAgICAgYWxpZ24gPSAwLjU7XG5cbiAgZGVsZXRlIHNjYWxlLnVua25vd247XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgbiA9IGRvbWFpbigpLmxlbmd0aCxcbiAgICAgICAgcmV2ZXJzZSA9IHIxIDwgcjAsXG4gICAgICAgIHN0YXJ0ID0gcmV2ZXJzZSA/IHIxIDogcjAsXG4gICAgICAgIHN0b3AgPSByZXZlcnNlID8gcjAgOiByMTtcbiAgICBzdGVwID0gKHN0b3AgLSBzdGFydCkgLyBNYXRoLm1heCgxLCBuIC0gcGFkZGluZ0lubmVyICsgcGFkZGluZ091dGVyICogMik7XG4gICAgaWYgKHJvdW5kKSBzdGVwID0gTWF0aC5mbG9vcihzdGVwKTtcbiAgICBzdGFydCArPSAoc3RvcCAtIHN0YXJ0IC0gc3RlcCAqIChuIC0gcGFkZGluZ0lubmVyKSkgKiBhbGlnbjtcbiAgICBiYW5kd2lkdGggPSBzdGVwICogKDEgLSBwYWRkaW5nSW5uZXIpO1xuICAgIGlmIChyb3VuZCkgc3RhcnQgPSBNYXRoLnJvdW5kKHN0YXJ0KSwgYmFuZHdpZHRoID0gTWF0aC5yb3VuZChiYW5kd2lkdGgpO1xuICAgIHZhciB2YWx1ZXMgPSBzZXF1ZW5jZShuKS5tYXAoZnVuY3Rpb24oaSkgeyByZXR1cm4gc3RhcnQgKyBzdGVwICogaTsgfSk7XG4gICAgcmV0dXJuIG9yZGluYWxSYW5nZShyZXZlcnNlID8gdmFsdWVzLnJldmVyc2UoKSA6IHZhbHVlcyk7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoZG9tYWluKF8pLCByZXNjYWxlKCkpIDogZG9tYWluKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoW3IwLCByMV0gPSBfLCByMCA9ICtyMCwgcjEgPSArcjEsIHJlc2NhbGUoKSkgOiBbcjAsIHIxXTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBbcjAsIHIxXSA9IF8sIHIwID0gK3IwLCByMSA9ICtyMSwgcm91bmQgPSB0cnVlLCByZXNjYWxlKCk7XG4gIH07XG5cbiAgc2NhbGUuYmFuZHdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGJhbmR3aWR0aDtcbiAgfTtcblxuICBzY2FsZS5zdGVwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHN0ZXA7XG4gIH07XG5cbiAgc2NhbGUucm91bmQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocm91bmQgPSAhIV8sIHJlc2NhbGUoKSkgOiByb3VuZDtcbiAgfTtcblxuICBzY2FsZS5wYWRkaW5nID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdJbm5lciA9IE1hdGgubWluKDEsIHBhZGRpbmdPdXRlciA9ICtfKSwgcmVzY2FsZSgpKSA6IHBhZGRpbmdJbm5lcjtcbiAgfTtcblxuICBzY2FsZS5wYWRkaW5nSW5uZXIgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocGFkZGluZ0lubmVyID0gTWF0aC5taW4oMSwgXyksIHJlc2NhbGUoKSkgOiBwYWRkaW5nSW5uZXI7XG4gIH07XG5cbiAgc2NhbGUucGFkZGluZ091dGVyID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHBhZGRpbmdPdXRlciA9ICtfLCByZXNjYWxlKCkpIDogcGFkZGluZ091dGVyO1xuICB9O1xuXG4gIHNjYWxlLmFsaWduID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGFsaWduID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgXykpLCByZXNjYWxlKCkpIDogYWxpZ247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBiYW5kKGRvbWFpbigpLCBbcjAsIHIxXSlcbiAgICAgICAgLnJvdW5kKHJvdW5kKVxuICAgICAgICAucGFkZGluZ0lubmVyKHBhZGRpbmdJbm5lcilcbiAgICAgICAgLnBhZGRpbmdPdXRlcihwYWRkaW5nT3V0ZXIpXG4gICAgICAgIC5hbGlnbihhbGlnbik7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRSYW5nZS5hcHBseShyZXNjYWxlKCksIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIHBvaW50aXNoKHNjYWxlKSB7XG4gIHZhciBjb3B5ID0gc2NhbGUuY29weTtcblxuICBzY2FsZS5wYWRkaW5nID0gc2NhbGUucGFkZGluZ091dGVyO1xuICBkZWxldGUgc2NhbGUucGFkZGluZ0lubmVyO1xuICBkZWxldGUgc2NhbGUucGFkZGluZ091dGVyO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcG9pbnRpc2goY29weSgpKTtcbiAgfTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb2ludCgpIHtcbiAgcmV0dXJuIHBvaW50aXNoKGJhbmQuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5wYWRkaW5nSW5uZXIoMSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uc3RhbnRzKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtpbnRlcnBvbGF0ZSBhcyBpbnRlcnBvbGF0ZVZhbHVlLCBpbnRlcnBvbGF0ZU51bWJlciwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQgY29uc3RhbnQgZnJvbSBcIi4vY29uc3RhbnQuanNcIjtcbmltcG9ydCBudW1iZXIgZnJvbSBcIi4vbnVtYmVyLmpzXCI7XG5cbnZhciB1bml0ID0gWzAsIDFdO1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKGEsIGIpIHtcbiAgcmV0dXJuIChiIC09IChhID0gK2EpKVxuICAgICAgPyBmdW5jdGlvbih4KSB7IHJldHVybiAoeCAtIGEpIC8gYjsgfVxuICAgICAgOiBjb25zdGFudChpc05hTihiKSA/IE5hTiA6IDAuNSk7XG59XG5cbmZ1bmN0aW9uIGNsYW1wZXIoYSwgYikge1xuICB2YXIgdDtcbiAgaWYgKGEgPiBiKSB0ID0gYSwgYSA9IGIsIGIgPSB0O1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5tYXgoYSwgTWF0aC5taW4oYiwgeCkpOyB9O1xufVxuXG4vLyBub3JtYWxpemUoYSwgYikoeCkgdGFrZXMgYSBkb21haW4gdmFsdWUgeCBpbiBbYSxiXSBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwYXJhbWV0ZXIgdCBpbiBbMCwxXS5cbi8vIGludGVycG9sYXRlKGEsIGIpKHQpIHRha2VzIGEgcGFyYW1ldGVyIHQgaW4gWzAsMV0gYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmFuZ2UgdmFsdWUgeCBpbiBbYSxiXS5cbmZ1bmN0aW9uIGJpbWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBkMCA9IGRvbWFpblswXSwgZDEgPSBkb21haW5bMV0sIHIwID0gcmFuZ2VbMF0sIHIxID0gcmFuZ2VbMV07XG4gIGlmIChkMSA8IGQwKSBkMCA9IG5vcm1hbGl6ZShkMSwgZDApLCByMCA9IGludGVycG9sYXRlKHIxLCByMCk7XG4gIGVsc2UgZDAgPSBub3JtYWxpemUoZDAsIGQxKSwgcjAgPSBpbnRlcnBvbGF0ZShyMCwgcjEpO1xuICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gcjAoZDAoeCkpOyB9O1xufVxuXG5mdW5jdGlvbiBwb2x5bWFwKGRvbWFpbiwgcmFuZ2UsIGludGVycG9sYXRlKSB7XG4gIHZhciBqID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKSAtIDEsXG4gICAgICBkID0gbmV3IEFycmF5KGopLFxuICAgICAgciA9IG5ldyBBcnJheShqKSxcbiAgICAgIGkgPSAtMTtcblxuICAvLyBSZXZlcnNlIGRlc2NlbmRpbmcgZG9tYWlucy5cbiAgaWYgKGRvbWFpbltqXSA8IGRvbWFpblswXSkge1xuICAgIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpLnJldmVyc2UoKTtcbiAgICByYW5nZSA9IHJhbmdlLnNsaWNlKCkucmV2ZXJzZSgpO1xuICB9XG5cbiAgd2hpbGUgKCsraSA8IGopIHtcbiAgICBkW2ldID0gbm9ybWFsaXplKGRvbWFpbltpXSwgZG9tYWluW2kgKyAxXSk7XG4gICAgcltpXSA9IGludGVycG9sYXRlKHJhbmdlW2ldLCByYW5nZVtpICsgMV0pO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgaSA9IGJpc2VjdChkb21haW4sIHgsIDEsIGopIC0gMTtcbiAgICByZXR1cm4gcltpXShkW2ldKHgpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAucmFuZ2Uoc291cmNlLnJhbmdlKCkpXG4gICAgICAuaW50ZXJwb2xhdGUoc291cmNlLmludGVycG9sYXRlKCkpXG4gICAgICAuY2xhbXAoc291cmNlLmNsYW1wKCkpXG4gICAgICAudW5rbm93bihzb3VyY2UudW5rbm93bigpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybWVyKCkge1xuICB2YXIgZG9tYWluID0gdW5pdCxcbiAgICAgIHJhbmdlID0gdW5pdCxcbiAgICAgIGludGVycG9sYXRlID0gaW50ZXJwb2xhdGVWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIHVudHJhbnNmb3JtLFxuICAgICAgdW5rbm93bixcbiAgICAgIGNsYW1wID0gaWRlbnRpdHksXG4gICAgICBwaWVjZXdpc2UsXG4gICAgICBvdXRwdXQsXG4gICAgICBpbnB1dDtcblxuICBmdW5jdGlvbiByZXNjYWxlKCkge1xuICAgIHZhciBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoKTtcbiAgICBpZiAoY2xhbXAgIT09IGlkZW50aXR5KSBjbGFtcCA9IGNsYW1wZXIoZG9tYWluWzBdLCBkb21haW5bbiAtIDFdKTtcbiAgICBwaWVjZXdpc2UgPSBuID4gMiA/IHBvbHltYXAgOiBiaW1hcDtcbiAgICBvdXRwdXQgPSBpbnB1dCA9IG51bGw7XG4gICAgcmV0dXJuIHNjYWxlO1xuICB9XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6IChvdXRwdXQgfHwgKG91dHB1dCA9IHBpZWNld2lzZShkb21haW4ubWFwKHRyYW5zZm9ybSksIHJhbmdlLCBpbnRlcnBvbGF0ZSkpKSh0cmFuc2Zvcm0oY2xhbXAoeCkpKTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gY2xhbXAodW50cmFuc2Zvcm0oKGlucHV0IHx8IChpbnB1dCA9IHBpZWNld2lzZShyYW5nZSwgZG9tYWluLm1hcCh0cmFuc2Zvcm0pLCBpbnRlcnBvbGF0ZU51bWJlcikpKSh5KSkpO1xuICB9O1xuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBBcnJheS5mcm9tKF8sIG51bWJlciksIHJlc2NhbGUoKSkgOiBkb21haW4uc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyYW5nZSA9IEFycmF5LmZyb20oXyksIHJlc2NhbGUoKSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlUm91bmQgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIHJhbmdlID0gQXJyYXkuZnJvbShfKSwgaW50ZXJwb2xhdGUgPSBpbnRlcnBvbGF0ZVJvdW5kLCByZXNjYWxlKCk7XG4gIH07XG5cbiAgc2NhbGUuY2xhbXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoY2xhbXAgPSBfID8gdHJ1ZSA6IGlkZW50aXR5LCByZXNjYWxlKCkpIDogY2xhbXAgIT09IGlkZW50aXR5O1xuICB9O1xuXG4gIHNjYWxlLmludGVycG9sYXRlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGludGVycG9sYXRlID0gXywgcmVzY2FsZSgpKSA6IGludGVycG9sYXRlO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQsIHUpIHtcbiAgICB0cmFuc2Zvcm0gPSB0LCB1bnRyYW5zZm9ybSA9IHU7XG4gICAgcmV0dXJuIHJlc2NhbGUoKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGludW91cygpIHtcbiAgcmV0dXJuIHRyYW5zZm9ybWVyKCkoaWRlbnRpdHksIGlkZW50aXR5KTtcbn1cbiIsImltcG9ydCB7aW50ZXJwb2xhdGUsIGludGVycG9sYXRlUm91bmQsIHBpZWNld2lzZX0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge2lkZW50aXR5fSBmcm9tIFwiLi9jb250aW51b3VzLmpzXCI7XG5pbXBvcnQge2luaXRJbnRlcnBvbGF0b3J9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXIuanNcIjtcbmltcG9ydCB7bG9nZ2lzaH0gZnJvbSBcIi4vbG9nLmpzXCI7XG5pbXBvcnQge2NvcHl9IGZyb20gXCIuL3NlcXVlbnRpYWwuanNcIjtcbmltcG9ydCB7c3ltbG9naXNofSBmcm9tIFwiLi9zeW1sb2cuanNcIjtcbmltcG9ydCB7cG93aXNofSBmcm9tIFwiLi9wb3cuanNcIjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtZXIoKSB7XG4gIHZhciB4MCA9IDAsXG4gICAgICB4MSA9IDAuNSxcbiAgICAgIHgyID0gMSxcbiAgICAgIHMgPSAxLFxuICAgICAgdDAsXG4gICAgICB0MSxcbiAgICAgIHQyLFxuICAgICAgazEwLFxuICAgICAgazIxLFxuICAgICAgaW50ZXJwb2xhdG9yID0gaWRlbnRpdHksXG4gICAgICB0cmFuc2Zvcm0sXG4gICAgICBjbGFtcCA9IGZhbHNlLFxuICAgICAgdW5rbm93bjtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgcmV0dXJuIGlzTmFOKHggPSAreCkgPyB1bmtub3duIDogKHggPSAwLjUgKyAoKHggPSArdHJhbnNmb3JtKHgpKSAtIHQxKSAqIChzICogeCA8IHMgKiB0MSA/IGsxMCA6IGsyMSksIGludGVycG9sYXRvcihjbGFtcCA/IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHgpKSA6IHgpKTtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChbeDAsIHgxLCB4Ml0gPSBfLCB0MCA9IHRyYW5zZm9ybSh4MCA9ICt4MCksIHQxID0gdHJhbnNmb3JtKHgxID0gK3gxKSwgdDIgPSB0cmFuc2Zvcm0oeDIgPSAreDIpLCBrMTAgPSB0MCA9PT0gdDEgPyAwIDogMC41IC8gKHQxIC0gdDApLCBrMjEgPSB0MSA9PT0gdDIgPyAwIDogMC41IC8gKHQyIC0gdDEpLCBzID0gdDEgPCB0MCA/IC0xIDogMSwgc2NhbGUpIDogW3gwLCB4MSwgeDJdO1xuICB9O1xuXG4gIHNjYWxlLmNsYW1wID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGNsYW1wID0gISFfLCBzY2FsZSkgOiBjbGFtcDtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0b3IgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdG9yID0gXywgc2NhbGUpIDogaW50ZXJwb2xhdG9yO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJhbmdlKGludGVycG9sYXRlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKF8pIHtcbiAgICAgIHZhciByMCwgcjEsIHIyO1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoW3IwLCByMSwgcjJdID0gXywgaW50ZXJwb2xhdG9yID0gcGllY2V3aXNlKGludGVycG9sYXRlLCBbcjAsIHIxLCByMl0pLCBzY2FsZSkgOiBbaW50ZXJwb2xhdG9yKDApLCBpbnRlcnBvbGF0b3IoMC41KSwgaW50ZXJwb2xhdG9yKDEpXTtcbiAgICB9O1xuICB9XG5cbiAgc2NhbGUucmFuZ2UgPSByYW5nZShpbnRlcnBvbGF0ZSk7XG5cbiAgc2NhbGUucmFuZ2VSb3VuZCA9IHJhbmdlKGludGVycG9sYXRlUm91bmQpO1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICB0cmFuc2Zvcm0gPSB0LCB0MCA9IHQoeDApLCB0MSA9IHQoeDEpLCB0MiA9IHQoeDIpLCBrMTAgPSB0MCA9PT0gdDEgPyAwIDogMC41IC8gKHQxIC0gdDApLCBrMjEgPSB0MSA9PT0gdDIgPyAwIDogMC41IC8gKHQyIC0gdDEpLCBzID0gdDEgPCB0MCA/IC0xIDogMTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpdmVyZ2luZygpIHtcbiAgdmFyIHNjYWxlID0gbGluZWFyaXNoKHRyYW5zZm9ybWVyKCkoaWRlbnRpdHkpKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGRpdmVyZ2luZygpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmVyZ2luZ0xvZygpIHtcbiAgdmFyIHNjYWxlID0gbG9nZ2lzaCh0cmFuc2Zvcm1lcigpKS5kb21haW4oWzAuMSwgMSwgMTBdKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGRpdmVyZ2luZ0xvZygpKS5iYXNlKHNjYWxlLmJhc2UoKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRJbnRlcnBvbGF0b3IuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXZlcmdpbmdTeW1sb2coKSB7XG4gIHZhciBzY2FsZSA9IHN5bWxvZ2lzaCh0cmFuc2Zvcm1lcigpKTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGRpdmVyZ2luZ1N5bWxvZygpKS5jb25zdGFudChzY2FsZS5jb25zdGFudCgpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmVyZ2luZ1BvdygpIHtcbiAgdmFyIHNjYWxlID0gcG93aXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgZGl2ZXJnaW5nUG93KCkpLmV4cG9uZW50KHNjYWxlLmV4cG9uZW50KCkpO1xuICB9O1xuXG4gIHJldHVybiBpbml0SW50ZXJwb2xhdG9yLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGl2ZXJnaW5nU3FydCgpIHtcbiAgcmV0dXJuIGRpdmVyZ2luZ1Bvdy5hcHBseShudWxsLCBhcmd1bWVudHMpLmV4cG9uZW50KDAuNSk7XG59XG4iLCJpbXBvcnQge2xpbmVhcmlzaH0gZnJvbSBcIi4vbGluZWFyLmpzXCI7XG5pbXBvcnQgbnVtYmVyIGZyb20gXCIuL251bWJlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpZGVudGl0eShkb21haW4pIHtcbiAgdmFyIHVua25vd247XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6IHg7XG4gIH1cblxuICBzY2FsZS5pbnZlcnQgPSBzY2FsZTtcblxuICBzY2FsZS5kb21haW4gPSBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBBcnJheS5mcm9tKF8sIG51bWJlciksIHNjYWxlKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpZGVudGl0eShkb21haW4pLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgZG9tYWluID0gYXJndW1lbnRzLmxlbmd0aCA/IEFycmF5LmZyb20oZG9tYWluLCBudW1iZXIpIDogWzAsIDFdO1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIiwiZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUJhbmQsXG4gIHBvaW50IGFzIHNjYWxlUG9pbnRcbn0gZnJvbSBcIi4vYmFuZC5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlSWRlbnRpdHlcbn0gZnJvbSBcIi4vaWRlbnRpdHkuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUxpbmVhclxufSBmcm9tIFwiLi9saW5lYXIuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZUxvZ1xufSBmcm9tIFwiLi9sb2cuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVN5bWxvZ1xufSBmcm9tIFwiLi9zeW1sb2cuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZU9yZGluYWwsXG4gIGltcGxpY2l0IGFzIHNjYWxlSW1wbGljaXRcbn0gZnJvbSBcIi4vb3JkaW5hbC5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlUG93LFxuICBzcXJ0IGFzIHNjYWxlU3FydFxufSBmcm9tIFwiLi9wb3cuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVJhZGlhbFxufSBmcm9tIFwiLi9yYWRpYWwuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyBzY2FsZVF1YW50aWxlXG59IGZyb20gXCIuL3F1YW50aWxlLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVRdWFudGl6ZVxufSBmcm9tIFwiLi9xdWFudGl6ZS5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVGhyZXNob2xkXG59IGZyb20gXCIuL3RocmVzaG9sZC5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlVGltZVxufSBmcm9tIFwiLi90aW1lLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVVdGNcbn0gZnJvbSBcIi4vdXRjVGltZS5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHNjYWxlU2VxdWVudGlhbCxcbiAgc2VxdWVudGlhbExvZyBhcyBzY2FsZVNlcXVlbnRpYWxMb2csXG4gIHNlcXVlbnRpYWxQb3cgYXMgc2NhbGVTZXF1ZW50aWFsUG93LFxuICBzZXF1ZW50aWFsU3FydCBhcyBzY2FsZVNlcXVlbnRpYWxTcXJ0LFxuICBzZXF1ZW50aWFsU3ltbG9nIGFzIHNjYWxlU2VxdWVudGlhbFN5bWxvZ1xufSBmcm9tIFwiLi9zZXF1ZW50aWFsLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVTZXF1ZW50aWFsUXVhbnRpbGVcbn0gZnJvbSBcIi4vc2VxdWVudGlhbFF1YW50aWxlLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgc2NhbGVEaXZlcmdpbmcsXG4gIGRpdmVyZ2luZ0xvZyBhcyBzY2FsZURpdmVyZ2luZ0xvZyxcbiAgZGl2ZXJnaW5nUG93IGFzIHNjYWxlRGl2ZXJnaW5nUG93LFxuICBkaXZlcmdpbmdTcXJ0IGFzIHNjYWxlRGl2ZXJnaW5nU3FydCxcbiAgZGl2ZXJnaW5nU3ltbG9nIGFzIHNjYWxlRGl2ZXJnaW5nU3ltbG9nXG59IGZyb20gXCIuL2RpdmVyZ2luZy5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpY2tGb3JtYXRcbn0gZnJvbSBcIi4vdGlja0Zvcm1hdC5qc1wiO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGluaXRSYW5nZShkb21haW4sIHJhbmdlKSB7XG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogYnJlYWs7XG4gICAgY2FzZSAxOiB0aGlzLnJhbmdlKGRvbWFpbik7IGJyZWFrO1xuICAgIGRlZmF1bHQ6IHRoaXMucmFuZ2UocmFuZ2UpLmRvbWFpbihkb21haW4pOyBicmVhaztcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRJbnRlcnBvbGF0b3IoZG9tYWluLCBpbnRlcnBvbGF0b3IpIHtcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiBicmVhaztcbiAgICBjYXNlIDE6IHtcbiAgICAgIGlmICh0eXBlb2YgZG9tYWluID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuaW50ZXJwb2xhdG9yKGRvbWFpbik7XG4gICAgICBlbHNlIHRoaXMucmFuZ2UoZG9tYWluKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICB0aGlzLmRvbWFpbihkb21haW4pO1xuICAgICAgaWYgKHR5cGVvZiBpbnRlcnBvbGF0b3IgPT09IFwiZnVuY3Rpb25cIikgdGhpcy5pbnRlcnBvbGF0b3IoaW50ZXJwb2xhdG9yKTtcbiAgICAgIGVsc2UgdGhpcy5yYW5nZShpbnRlcnBvbGF0b3IpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufVxuIiwiaW1wb3J0IHt0aWNrcywgdGlja0luY3JlbWVudH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQgY29udGludW91cywge2NvcHl9IGZyb20gXCIuL2NvbnRpbnVvdXMuanNcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0LmpzXCI7XG5pbXBvcnQgdGlja0Zvcm1hdCBmcm9tIFwiLi90aWNrRm9ybWF0LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJpc2goc2NhbGUpIHtcbiAgdmFyIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgdmFyIGQgPSBkb21haW4oKTtcbiAgICByZXR1cm4gdGlja3MoZFswXSwgZFtkLmxlbmd0aCAtIDFdLCBjb3VudCA9PSBudWxsID8gMTAgOiBjb3VudCk7XG4gIH07XG5cbiAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHJldHVybiB0aWNrRm9ybWF0KGRbMF0sIGRbZC5sZW5ndGggLSAxXSwgY291bnQgPT0gbnVsbCA/IDEwIDogY291bnQsIHNwZWNpZmllcik7XG4gIH07XG5cbiAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKGNvdW50KSB7XG4gICAgaWYgKGNvdW50ID09IG51bGwpIGNvdW50ID0gMTA7XG5cbiAgICB2YXIgZCA9IGRvbWFpbigpO1xuICAgIHZhciBpMCA9IDA7XG4gICAgdmFyIGkxID0gZC5sZW5ndGggLSAxO1xuICAgIHZhciBzdGFydCA9IGRbaTBdO1xuICAgIHZhciBzdG9wID0gZFtpMV07XG4gICAgdmFyIHByZXN0ZXA7XG4gICAgdmFyIHN0ZXA7XG4gICAgdmFyIG1heEl0ZXIgPSAxMDtcblxuICAgIGlmIChzdG9wIDwgc3RhcnQpIHtcbiAgICAgIHN0ZXAgPSBzdGFydCwgc3RhcnQgPSBzdG9wLCBzdG9wID0gc3RlcDtcbiAgICAgIHN0ZXAgPSBpMCwgaTAgPSBpMSwgaTEgPSBzdGVwO1xuICAgIH1cbiAgICBcbiAgICB3aGlsZSAobWF4SXRlci0tID4gMCkge1xuICAgICAgc3RlcCA9IHRpY2tJbmNyZW1lbnQoc3RhcnQsIHN0b3AsIGNvdW50KTtcbiAgICAgIGlmIChzdGVwID09PSBwcmVzdGVwKSB7XG4gICAgICAgIGRbaTBdID0gc3RhcnRcbiAgICAgICAgZFtpMV0gPSBzdG9wXG4gICAgICAgIHJldHVybiBkb21haW4oZCk7XG4gICAgICB9IGVsc2UgaWYgKHN0ZXAgPiAwKSB7XG4gICAgICAgIHN0YXJ0ID0gTWF0aC5mbG9vcihzdGFydCAvIHN0ZXApICogc3RlcDtcbiAgICAgICAgc3RvcCA9IE1hdGguY2VpbChzdG9wIC8gc3RlcCkgKiBzdGVwO1xuICAgICAgfSBlbHNlIGlmIChzdGVwIDwgMCkge1xuICAgICAgICBzdGFydCA9IE1hdGguY2VpbChzdGFydCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgICAgc3RvcCA9IE1hdGguZmxvb3Ioc3RvcCAqIHN0ZXApIC8gc3RlcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcHJlc3RlcCA9IHN0ZXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNjYWxlO1xuICB9O1xuXG4gIHJldHVybiBzY2FsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGluZWFyKCkge1xuICB2YXIgc2NhbGUgPSBjb250aW51b3VzKCk7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBsaW5lYXIoKSk7XG4gIH07XG5cbiAgaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIiwiaW1wb3J0IHt0aWNrc30gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2Zvcm1hdH0gZnJvbSBcImQzLWZvcm1hdFwiO1xuaW1wb3J0IG5pY2UgZnJvbSBcIi4vbmljZS5qc1wiO1xuaW1wb3J0IHtjb3B5LCB0cmFuc2Zvcm1lcn0gZnJvbSBcIi4vY29udGludW91cy5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcblxuZnVuY3Rpb24gdHJhbnNmb3JtTG9nKHgpIHtcbiAgcmV0dXJuIE1hdGgubG9nKHgpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1FeHAoeCkge1xuICByZXR1cm4gTWF0aC5leHAoeCk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybUxvZ24oeCkge1xuICByZXR1cm4gLU1hdGgubG9nKC14KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtRXhwbih4KSB7XG4gIHJldHVybiAtTWF0aC5leHAoLXgpO1xufVxuXG5mdW5jdGlvbiBwb3cxMCh4KSB7XG4gIHJldHVybiBpc0Zpbml0ZSh4KSA/ICsoXCIxZVwiICsgeCkgOiB4IDwgMCA/IDAgOiB4O1xufVxuXG5mdW5jdGlvbiBwb3dwKGJhc2UpIHtcbiAgcmV0dXJuIGJhc2UgPT09IDEwID8gcG93MTBcbiAgICAgIDogYmFzZSA9PT0gTWF0aC5FID8gTWF0aC5leHBcbiAgICAgIDogZnVuY3Rpb24oeCkgeyByZXR1cm4gTWF0aC5wb3coYmFzZSwgeCk7IH07XG59XG5cbmZ1bmN0aW9uIGxvZ3AoYmFzZSkge1xuICByZXR1cm4gYmFzZSA9PT0gTWF0aC5FID8gTWF0aC5sb2dcbiAgICAgIDogYmFzZSA9PT0gMTAgJiYgTWF0aC5sb2cxMFxuICAgICAgfHwgYmFzZSA9PT0gMiAmJiBNYXRoLmxvZzJcbiAgICAgIHx8IChiYXNlID0gTWF0aC5sb2coYmFzZSksIGZ1bmN0aW9uKHgpIHsgcmV0dXJuIE1hdGgubG9nKHgpIC8gYmFzZTsgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZmxlY3QoZikge1xuICByZXR1cm4gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiAtZigteCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dnaXNoKHRyYW5zZm9ybSkge1xuICB2YXIgc2NhbGUgPSB0cmFuc2Zvcm0odHJhbnNmb3JtTG9nLCB0cmFuc2Zvcm1FeHApLFxuICAgICAgZG9tYWluID0gc2NhbGUuZG9tYWluLFxuICAgICAgYmFzZSA9IDEwLFxuICAgICAgbG9ncyxcbiAgICAgIHBvd3M7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICBsb2dzID0gbG9ncChiYXNlKSwgcG93cyA9IHBvd3AoYmFzZSk7XG4gICAgaWYgKGRvbWFpbigpWzBdIDwgMCkge1xuICAgICAgbG9ncyA9IHJlZmxlY3QobG9ncyksIHBvd3MgPSByZWZsZWN0KHBvd3MpO1xuICAgICAgdHJhbnNmb3JtKHRyYW5zZm9ybUxvZ24sIHRyYW5zZm9ybUV4cG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2Zvcm0odHJhbnNmb3JtTG9nLCB0cmFuc2Zvcm1FeHApO1xuICAgIH1cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBzY2FsZS5iYXNlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGJhc2UgPSArXywgcmVzY2FsZSgpKSA6IGJhc2U7XG4gIH07XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGRvbWFpbihfKSwgcmVzY2FsZSgpKSA6IGRvbWFpbigpO1xuICB9O1xuXG4gIHNjYWxlLnRpY2tzID0gZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgZCA9IGRvbWFpbigpLFxuICAgICAgICB1ID0gZFswXSxcbiAgICAgICAgdiA9IGRbZC5sZW5ndGggLSAxXSxcbiAgICAgICAgcjtcblxuICAgIGlmIChyID0gdiA8IHUpIGkgPSB1LCB1ID0gdiwgdiA9IGk7XG5cbiAgICB2YXIgaSA9IGxvZ3ModSksXG4gICAgICAgIGogPSBsb2dzKHYpLFxuICAgICAgICBwLFxuICAgICAgICBrLFxuICAgICAgICB0LFxuICAgICAgICBuID0gY291bnQgPT0gbnVsbCA/IDEwIDogK2NvdW50LFxuICAgICAgICB6ID0gW107XG5cbiAgICBpZiAoIShiYXNlICUgMSkgJiYgaiAtIGkgPCBuKSB7XG4gICAgICBpID0gTWF0aC5mbG9vcihpKSwgaiA9IE1hdGguY2VpbChqKTtcbiAgICAgIGlmICh1ID4gMCkgZm9yICg7IGkgPD0gajsgKytpKSB7XG4gICAgICAgIGZvciAoayA9IDEsIHAgPSBwb3dzKGkpOyBrIDwgYmFzZTsgKytrKSB7XG4gICAgICAgICAgdCA9IHAgKiBrO1xuICAgICAgICAgIGlmICh0IDwgdSkgY29udGludWU7XG4gICAgICAgICAgaWYgKHQgPiB2KSBicmVhaztcbiAgICAgICAgICB6LnB1c2godCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBmb3IgKDsgaSA8PSBqOyArK2kpIHtcbiAgICAgICAgZm9yIChrID0gYmFzZSAtIDEsIHAgPSBwb3dzKGkpOyBrID49IDE7IC0taykge1xuICAgICAgICAgIHQgPSBwICogaztcbiAgICAgICAgICBpZiAodCA8IHUpIGNvbnRpbnVlO1xuICAgICAgICAgIGlmICh0ID4gdikgYnJlYWs7XG4gICAgICAgICAgei5wdXNoKHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoei5sZW5ndGggKiAyIDwgbikgeiA9IHRpY2tzKHUsIHYsIG4pO1xuICAgIH0gZWxzZSB7XG4gICAgICB6ID0gdGlja3MoaSwgaiwgTWF0aC5taW4oaiAtIGksIG4pKS5tYXAocG93cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHIgPyB6LnJldmVyc2UoKSA6IHo7XG4gIH07XG5cbiAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgICBpZiAoc3BlY2lmaWVyID09IG51bGwpIHNwZWNpZmllciA9IGJhc2UgPT09IDEwID8gXCIuMGVcIiA6IFwiLFwiO1xuICAgIGlmICh0eXBlb2Ygc3BlY2lmaWVyICE9PSBcImZ1bmN0aW9uXCIpIHNwZWNpZmllciA9IGZvcm1hdChzcGVjaWZpZXIpO1xuICAgIGlmIChjb3VudCA9PT0gSW5maW5pdHkpIHJldHVybiBzcGVjaWZpZXI7XG4gICAgaWYgKGNvdW50ID09IG51bGwpIGNvdW50ID0gMTA7XG4gICAgdmFyIGsgPSBNYXRoLm1heCgxLCBiYXNlICogY291bnQgLyBzY2FsZS50aWNrcygpLmxlbmd0aCk7IC8vIFRPRE8gZmFzdCBlc3RpbWF0ZT9cbiAgICByZXR1cm4gZnVuY3Rpb24oZCkge1xuICAgICAgdmFyIGkgPSBkIC8gcG93cyhNYXRoLnJvdW5kKGxvZ3MoZCkpKTtcbiAgICAgIGlmIChpICogYmFzZSA8IGJhc2UgLSAwLjUpIGkgKj0gYmFzZTtcbiAgICAgIHJldHVybiBpIDw9IGsgPyBzcGVjaWZpZXIoZCkgOiBcIlwiO1xuICAgIH07XG4gIH07XG5cbiAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb21haW4obmljZShkb21haW4oKSwge1xuICAgICAgZmxvb3I6IGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHBvd3MoTWF0aC5mbG9vcihsb2dzKHgpKSk7IH0sXG4gICAgICBjZWlsOiBmdW5jdGlvbih4KSB7IHJldHVybiBwb3dzKE1hdGguY2VpbChsb2dzKHgpKSk7IH1cbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2coKSB7XG4gIHZhciBzY2FsZSA9IGxvZ2dpc2godHJhbnNmb3JtZXIoKSkuZG9tYWluKFsxLCAxMF0pO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgbG9nKCkpLmJhc2Uoc2NhbGUuYmFzZSgpKTtcbiAgfTtcblxuICBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmljZShkb21haW4sIGludGVydmFsKSB7XG4gIGRvbWFpbiA9IGRvbWFpbi5zbGljZSgpO1xuXG4gIHZhciBpMCA9IDAsXG4gICAgICBpMSA9IGRvbWFpbi5sZW5ndGggLSAxLFxuICAgICAgeDAgPSBkb21haW5baTBdLFxuICAgICAgeDEgPSBkb21haW5baTFdLFxuICAgICAgdDtcblxuICBpZiAoeDEgPCB4MCkge1xuICAgIHQgPSBpMCwgaTAgPSBpMSwgaTEgPSB0O1xuICAgIHQgPSB4MCwgeDAgPSB4MSwgeDEgPSB0O1xuICB9XG5cbiAgZG9tYWluW2kwXSA9IGludGVydmFsLmZsb29yKHgwKTtcbiAgZG9tYWluW2kxXSA9IGludGVydmFsLmNlaWwoeDEpO1xuICByZXR1cm4gZG9tYWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnVtYmVyKHgpIHtcbiAgcmV0dXJuICt4O1xufVxuIiwiaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcblxuZXhwb3J0IGNvbnN0IGltcGxpY2l0ID0gU3ltYm9sKFwiaW1wbGljaXRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG9yZGluYWwoKSB7XG4gIHZhciBpbmRleCA9IG5ldyBNYXAoKSxcbiAgICAgIGRvbWFpbiA9IFtdLFxuICAgICAgcmFuZ2UgPSBbXSxcbiAgICAgIHVua25vd24gPSBpbXBsaWNpdDtcblxuICBmdW5jdGlvbiBzY2FsZShkKSB7XG4gICAgdmFyIGtleSA9IGQgKyBcIlwiLCBpID0gaW5kZXguZ2V0KGtleSk7XG4gICAgaWYgKCFpKSB7XG4gICAgICBpZiAodW5rbm93biAhPT0gaW1wbGljaXQpIHJldHVybiB1bmtub3duO1xuICAgICAgaW5kZXguc2V0KGtleSwgaSA9IGRvbWFpbi5wdXNoKGQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlWyhpIC0gMSkgJSByYW5nZS5sZW5ndGhdO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbi5zbGljZSgpO1xuICAgIGRvbWFpbiA9IFtdLCBpbmRleCA9IG5ldyBNYXAoKTtcbiAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIF8pIHtcbiAgICAgIGNvbnN0IGtleSA9IHZhbHVlICsgXCJcIjtcbiAgICAgIGlmIChpbmRleC5oYXMoa2V5KSkgY29udGludWU7XG4gICAgICBpbmRleC5zZXQoa2V5LCBkb21haW4ucHVzaCh2YWx1ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAocmFuZ2UgPSBBcnJheS5mcm9tKF8pLCBzY2FsZSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBvcmRpbmFsKGRvbWFpbiwgcmFuZ2UpLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xuXG4gIHJldHVybiBzY2FsZTtcbn1cbiIsImltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXIuanNcIjtcbmltcG9ydCB7Y29weSwgaWRlbnRpdHksIHRyYW5zZm9ybWVyfSBmcm9tIFwiLi9jb250aW51b3VzLmpzXCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuXG5mdW5jdGlvbiB0cmFuc2Zvcm1Qb3coZXhwb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4geCA8IDAgPyAtTWF0aC5wb3coLXgsIGV4cG9uZW50KSA6IE1hdGgucG93KHgsIGV4cG9uZW50KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3FydCh4KSB7XG4gIHJldHVybiB4IDwgMCA/IC1NYXRoLnNxcnQoLXgpIDogTWF0aC5zcXJ0KHgpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1TcXVhcmUoeCkge1xuICByZXR1cm4geCA8IDAgPyAteCAqIHggOiB4ICogeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvd2lzaCh0cmFuc2Zvcm0pIHtcbiAgdmFyIHNjYWxlID0gdHJhbnNmb3JtKGlkZW50aXR5LCBpZGVudGl0eSksXG4gICAgICBleHBvbmVudCA9IDE7XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICByZXR1cm4gZXhwb25lbnQgPT09IDEgPyB0cmFuc2Zvcm0oaWRlbnRpdHksIGlkZW50aXR5KVxuICAgICAgICA6IGV4cG9uZW50ID09PSAwLjUgPyB0cmFuc2Zvcm0odHJhbnNmb3JtU3FydCwgdHJhbnNmb3JtU3F1YXJlKVxuICAgICAgICA6IHRyYW5zZm9ybSh0cmFuc2Zvcm1Qb3coZXhwb25lbnQpLCB0cmFuc2Zvcm1Qb3coMSAvIGV4cG9uZW50KSk7XG4gIH1cblxuICBzY2FsZS5leHBvbmVudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChleHBvbmVudCA9ICtfLCByZXNjYWxlKCkpIDogZXhwb25lbnQ7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvdygpIHtcbiAgdmFyIHNjYWxlID0gcG93aXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgcG93KCkpLmV4cG9uZW50KHNjYWxlLmV4cG9uZW50KCkpO1xuICB9O1xuXG4gIGluaXRSYW5nZS5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcblxuICByZXR1cm4gc2NhbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzcXJ0KCkge1xuICByZXR1cm4gcG93LmFwcGx5KG51bGwsIGFyZ3VtZW50cykuZXhwb25lbnQoMC41KTtcbn1cbiIsImltcG9ydCB7YXNjZW5kaW5nLCBiaXNlY3QsIHF1YW50aWxlU29ydGVkIGFzIHRocmVzaG9sZH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxdWFudGlsZSgpIHtcbiAgdmFyIGRvbWFpbiA9IFtdLFxuICAgICAgcmFuZ2UgPSBbXSxcbiAgICAgIHRocmVzaG9sZHMgPSBbXSxcbiAgICAgIHVua25vd247XG5cbiAgZnVuY3Rpb24gcmVzY2FsZSgpIHtcbiAgICB2YXIgaSA9IDAsIG4gPSBNYXRoLm1heCgxLCByYW5nZS5sZW5ndGgpO1xuICAgIHRocmVzaG9sZHMgPSBuZXcgQXJyYXkobiAtIDEpO1xuICAgIHdoaWxlICgrK2kgPCBuKSB0aHJlc2hvbGRzW2kgLSAxXSA9IHRocmVzaG9sZChkb21haW4sIGkgLyBuKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgcmV0dXJuIGlzTmFOKHggPSAreCkgPyB1bmtub3duIDogcmFuZ2VbYmlzZWN0KHRocmVzaG9sZHMsIHgpXTtcbiAgfVxuXG4gIHNjYWxlLmludmVydEV4dGVudCA9IGZ1bmN0aW9uKHkpIHtcbiAgICB2YXIgaSA9IHJhbmdlLmluZGV4T2YoeSk7XG4gICAgcmV0dXJuIGkgPCAwID8gW05hTiwgTmFOXSA6IFtcbiAgICAgIGkgPiAwID8gdGhyZXNob2xkc1tpIC0gMV0gOiBkb21haW5bMF0sXG4gICAgICBpIDwgdGhyZXNob2xkcy5sZW5ndGggPyB0aHJlc2hvbGRzW2ldIDogZG9tYWluW2RvbWFpbi5sZW5ndGggLSAxXVxuICAgIF07XG4gIH07XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRvbWFpbi5zbGljZSgpO1xuICAgIGRvbWFpbiA9IFtdO1xuICAgIGZvciAobGV0IGQgb2YgXykgaWYgKGQgIT0gbnVsbCAmJiAhaXNOYU4oZCA9ICtkKSkgZG9tYWluLnB1c2goZCk7XG4gICAgZG9tYWluLnNvcnQoYXNjZW5kaW5nKTtcbiAgICByZXR1cm4gcmVzY2FsZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gQXJyYXkuZnJvbShfKSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogdW5rbm93bjtcbiAgfTtcblxuICBzY2FsZS5xdWFudGlsZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhyZXNob2xkcy5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gcXVhbnRpbGUoKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKVxuICAgICAgICAudW5rbm93bih1bmtub3duKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuIiwiaW1wb3J0IHtiaXNlY3R9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhci5qc1wiO1xuaW1wb3J0IHtpbml0UmFuZ2V9IGZyb20gXCIuL2luaXQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVhbnRpemUoKSB7XG4gIHZhciB4MCA9IDAsXG4gICAgICB4MSA9IDEsXG4gICAgICBuID0gMSxcbiAgICAgIGRvbWFpbiA9IFswLjVdLFxuICAgICAgcmFuZ2UgPSBbMCwgMV0sXG4gICAgICB1bmtub3duO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4geCA8PSB4ID8gcmFuZ2VbYmlzZWN0KGRvbWFpbiwgeCwgMCwgbildIDogdW5rbm93bjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2NhbGUoKSB7XG4gICAgdmFyIGkgPSAtMTtcbiAgICBkb21haW4gPSBuZXcgQXJyYXkobik7XG4gICAgd2hpbGUgKCsraSA8IG4pIGRvbWFpbltpXSA9ICgoaSArIDEpICogeDEgLSAoaSAtIG4pICogeDApIC8gKG4gKyAxKTtcbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoW3gwLCB4MV0gPSBfLCB4MCA9ICt4MCwgeDEgPSAreDEsIHJlc2NhbGUoKSkgOiBbeDAsIHgxXTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZSA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChuID0gKHJhbmdlID0gQXJyYXkuZnJvbShfKSkubGVuZ3RoIC0gMSwgcmVzY2FsZSgpKSA6IHJhbmdlLnNsaWNlKCk7XG4gIH07XG5cbiAgc2NhbGUuaW52ZXJ0RXh0ZW50ID0gZnVuY3Rpb24oeSkge1xuICAgIHZhciBpID0gcmFuZ2UuaW5kZXhPZih5KTtcbiAgICByZXR1cm4gaSA8IDAgPyBbTmFOLCBOYU5dXG4gICAgICAgIDogaSA8IDEgPyBbeDAsIGRvbWFpblswXV1cbiAgICAgICAgOiBpID49IG4gPyBbZG9tYWluW24gLSAxXSwgeDFdXG4gICAgICAgIDogW2RvbWFpbltpIC0gMV0sIGRvbWFpbltpXV07XG4gIH07XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogc2NhbGU7XG4gIH07XG5cbiAgc2NhbGUudGhyZXNob2xkcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkb21haW4uc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHF1YW50aXplKClcbiAgICAgICAgLmRvbWFpbihbeDAsIHgxXSlcbiAgICAgICAgLnJhbmdlKHJhbmdlKVxuICAgICAgICAudW5rbm93bih1bmtub3duKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KGxpbmVhcmlzaChzY2FsZSksIGFyZ3VtZW50cyk7XG59XG4iLCJpbXBvcnQgY29udGludW91cyBmcm9tIFwiLi9jb250aW51b3VzLmpzXCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuaW1wb3J0IHtsaW5lYXJpc2h9IGZyb20gXCIuL2xpbmVhci5qc1wiO1xuaW1wb3J0IG51bWJlciBmcm9tIFwiLi9udW1iZXIuanNcIjtcblxuZnVuY3Rpb24gc3F1YXJlKHgpIHtcbiAgcmV0dXJuIE1hdGguc2lnbih4KSAqIHggKiB4O1xufVxuXG5mdW5jdGlvbiB1bnNxdWFyZSh4KSB7XG4gIHJldHVybiBNYXRoLnNpZ24oeCkgKiBNYXRoLnNxcnQoTWF0aC5hYnMoeCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByYWRpYWwoKSB7XG4gIHZhciBzcXVhcmVkID0gY29udGludW91cygpLFxuICAgICAgcmFuZ2UgPSBbMCwgMV0sXG4gICAgICByb3VuZCA9IGZhbHNlLFxuICAgICAgdW5rbm93bjtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgdmFyIHkgPSB1bnNxdWFyZShzcXVhcmVkKHgpKTtcbiAgICByZXR1cm4gaXNOYU4oeSkgPyB1bmtub3duIDogcm91bmQgPyBNYXRoLnJvdW5kKHkpIDogeTtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gc3F1YXJlZC5pbnZlcnQoc3F1YXJlKHkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3F1YXJlZC5kb21haW4oXyksIHNjYWxlKSA6IHNxdWFyZWQuZG9tYWluKCk7XG4gIH07XG5cbiAgc2NhbGUucmFuZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3F1YXJlZC5yYW5nZSgocmFuZ2UgPSBBcnJheS5mcm9tKF8sIG51bWJlcikpLm1hcChzcXVhcmUpKSwgc2NhbGUpIDogcmFuZ2Uuc2xpY2UoKTtcbiAgfTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBzY2FsZS5yYW5nZShfKS5yb3VuZCh0cnVlKTtcbiAgfTtcblxuICBzY2FsZS5yb3VuZCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChyb3VuZCA9ICEhXywgc2NhbGUpIDogcm91bmQ7XG4gIH07XG5cbiAgc2NhbGUuY2xhbXAgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoc3F1YXJlZC5jbGFtcChfKSwgc2NhbGUpIDogc3F1YXJlZC5jbGFtcCgpO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiByYWRpYWwoc3F1YXJlZC5kb21haW4oKSwgcmFuZ2UpXG4gICAgICAgIC5yb3VuZChyb3VuZClcbiAgICAgICAgLmNsYW1wKHNxdWFyZWQuY2xhbXAoKSlcbiAgICAgICAgLnVua25vd24odW5rbm93bik7XG4gIH07XG5cbiAgaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xuXG4gIHJldHVybiBsaW5lYXJpc2goc2NhbGUpO1xufVxuIiwiaW1wb3J0IHtpbnRlcnBvbGF0ZSwgaW50ZXJwb2xhdGVSb3VuZH0gZnJvbSBcImQzLWludGVycG9sYXRlXCI7XG5pbXBvcnQge2lkZW50aXR5fSBmcm9tIFwiLi9jb250aW51b3VzLmpzXCI7XG5pbXBvcnQge2luaXRJbnRlcnBvbGF0b3J9IGZyb20gXCIuL2luaXQuanNcIjtcbmltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXIuanNcIjtcbmltcG9ydCB7bG9nZ2lzaH0gZnJvbSBcIi4vbG9nLmpzXCI7XG5pbXBvcnQge3N5bWxvZ2lzaH0gZnJvbSBcIi4vc3ltbG9nLmpzXCI7XG5pbXBvcnQge3Bvd2lzaH0gZnJvbSBcIi4vcG93LmpzXCI7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybWVyKCkge1xuICB2YXIgeDAgPSAwLFxuICAgICAgeDEgPSAxLFxuICAgICAgdDAsXG4gICAgICB0MSxcbiAgICAgIGsxMCxcbiAgICAgIHRyYW5zZm9ybSxcbiAgICAgIGludGVycG9sYXRvciA9IGlkZW50aXR5LFxuICAgICAgY2xhbXAgPSBmYWxzZSxcbiAgICAgIHVua25vd247XG5cbiAgZnVuY3Rpb24gc2NhbGUoeCkge1xuICAgIHJldHVybiBpc05hTih4ID0gK3gpID8gdW5rbm93biA6IGludGVycG9sYXRvcihrMTAgPT09IDAgPyAwLjUgOiAoeCA9ICh0cmFuc2Zvcm0oeCkgLSB0MCkgKiBrMTAsIGNsYW1wID8gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgeCkpIDogeCkpO1xuICB9XG5cbiAgc2NhbGUuZG9tYWluID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKFt4MCwgeDFdID0gXywgdDAgPSB0cmFuc2Zvcm0oeDAgPSAreDApLCB0MSA9IHRyYW5zZm9ybSh4MSA9ICt4MSksIGsxMCA9IHQwID09PSB0MSA/IDAgOiAxIC8gKHQxIC0gdDApLCBzY2FsZSkgOiBbeDAsIHgxXTtcbiAgfTtcblxuICBzY2FsZS5jbGFtcCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChjbGFtcCA9ICEhXywgc2NhbGUpIDogY2xhbXA7XG4gIH07XG5cbiAgc2NhbGUuaW50ZXJwb2xhdG9yID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKGludGVycG9sYXRvciA9IF8sIHNjYWxlKSA6IGludGVycG9sYXRvcjtcbiAgfTtcblxuICBmdW5jdGlvbiByYW5nZShpbnRlcnBvbGF0ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihfKSB7XG4gICAgICB2YXIgcjAsIHIxO1xuICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoW3IwLCByMV0gPSBfLCBpbnRlcnBvbGF0b3IgPSBpbnRlcnBvbGF0ZShyMCwgcjEpLCBzY2FsZSkgOiBbaW50ZXJwb2xhdG9yKDApLCBpbnRlcnBvbGF0b3IoMSldO1xuICAgIH07XG4gIH1cblxuICBzY2FsZS5yYW5nZSA9IHJhbmdlKGludGVycG9sYXRlKTtcblxuICBzY2FsZS5yYW5nZVJvdW5kID0gcmFuZ2UoaW50ZXJwb2xhdGVSb3VuZCk7XG5cbiAgc2NhbGUudW5rbm93biA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/ICh1bmtub3duID0gXywgc2NhbGUpIDogdW5rbm93bjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgIHRyYW5zZm9ybSA9IHQsIHQwID0gdCh4MCksIHQxID0gdCh4MSksIGsxMCA9IHQwID09PSB0MSA/IDAgOiAxIC8gKHQxIC0gdDApO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkoc291cmNlLCB0YXJnZXQpIHtcbiAgcmV0dXJuIHRhcmdldFxuICAgICAgLmRvbWFpbihzb3VyY2UuZG9tYWluKCkpXG4gICAgICAuaW50ZXJwb2xhdG9yKHNvdXJjZS5pbnRlcnBvbGF0b3IoKSlcbiAgICAgIC5jbGFtcChzb3VyY2UuY2xhbXAoKSlcbiAgICAgIC51bmtub3duKHNvdXJjZS51bmtub3duKCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZXF1ZW50aWFsKCkge1xuICB2YXIgc2NhbGUgPSBsaW5lYXJpc2godHJhbnNmb3JtZXIoKShpZGVudGl0eSkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc2VxdWVudGlhbCgpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbnRpYWxMb2coKSB7XG4gIHZhciBzY2FsZSA9IGxvZ2dpc2godHJhbnNmb3JtZXIoKSkuZG9tYWluKFsxLCAxMF0pO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc2VxdWVudGlhbExvZygpKS5iYXNlKHNjYWxlLmJhc2UoKSk7XG4gIH07XG5cbiAgcmV0dXJuIGluaXRJbnRlcnBvbGF0b3IuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXF1ZW50aWFsU3ltbG9nKCkge1xuICB2YXIgc2NhbGUgPSBzeW1sb2dpc2godHJhbnNmb3JtZXIoKSk7XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb3B5KHNjYWxlLCBzZXF1ZW50aWFsU3ltbG9nKCkpLmNvbnN0YW50KHNjYWxlLmNvbnN0YW50KCkpO1xuICB9O1xuXG4gIHJldHVybiBpbml0SW50ZXJwb2xhdG9yLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VxdWVudGlhbFBvdygpIHtcbiAgdmFyIHNjYWxlID0gcG93aXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc2VxdWVudGlhbFBvdygpKS5leHBvbmVudChzY2FsZS5leHBvbmVudCgpKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbnRpYWxTcXJ0KCkge1xuICByZXR1cm4gc2VxdWVudGlhbFBvdy5hcHBseShudWxsLCBhcmd1bWVudHMpLmV4cG9uZW50KDAuNSk7XG59XG4iLCJpbXBvcnQge2FzY2VuZGluZywgYmlzZWN0LCBxdWFudGlsZX0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2lkZW50aXR5fSBmcm9tIFwiLi9jb250aW51b3VzLmpzXCI7XG5pbXBvcnQge2luaXRJbnRlcnBvbGF0b3J9IGZyb20gXCIuL2luaXQuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VxdWVudGlhbFF1YW50aWxlKCkge1xuICB2YXIgZG9tYWluID0gW10sXG4gICAgICBpbnRlcnBvbGF0b3IgPSBpZGVudGl0eTtcblxuICBmdW5jdGlvbiBzY2FsZSh4KSB7XG4gICAgaWYgKCFpc05hTih4ID0gK3gpKSByZXR1cm4gaW50ZXJwb2xhdG9yKChiaXNlY3QoZG9tYWluLCB4LCAxKSAtIDEpIC8gKGRvbWFpbi5sZW5ndGggLSAxKSk7XG4gIH1cblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gZG9tYWluLnNsaWNlKCk7XG4gICAgZG9tYWluID0gW107XG4gICAgZm9yIChsZXQgZCBvZiBfKSBpZiAoZCAhPSBudWxsICYmICFpc05hTihkID0gK2QpKSBkb21haW4ucHVzaChkKTtcbiAgICBkb21haW4uc29ydChhc2NlbmRpbmcpO1xuICAgIHJldHVybiBzY2FsZTtcbiAgfTtcblxuICBzY2FsZS5pbnRlcnBvbGF0b3IgPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAoaW50ZXJwb2xhdG9yID0gXywgc2NhbGUpIDogaW50ZXJwb2xhdG9yO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRvbWFpbi5tYXAoKGQsIGkpID0+IGludGVycG9sYXRvcihpIC8gKGRvbWFpbi5sZW5ndGggLSAxKSkpO1xuICB9O1xuXG4gIHNjYWxlLnF1YW50aWxlcyA9IGZ1bmN0aW9uKG4pIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7bGVuZ3RoOiBuICsgMX0sIChfLCBpKSA9PiBxdWFudGlsZShkb21haW4sIGkgLyBuKSk7XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBzZXF1ZW50aWFsUXVhbnRpbGUoaW50ZXJwb2xhdG9yKS5kb21haW4oZG9tYWluKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdEludGVycG9sYXRvci5hcHBseShzY2FsZSwgYXJndW1lbnRzKTtcbn1cbiIsImltcG9ydCB7bGluZWFyaXNofSBmcm9tIFwiLi9saW5lYXIuanNcIjtcbmltcG9ydCB7Y29weSwgdHJhbnNmb3JtZXJ9IGZyb20gXCIuL2NvbnRpbnVvdXMuanNcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0LmpzXCI7XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVN5bWxvZyhjKSB7XG4gIHJldHVybiBmdW5jdGlvbih4KSB7XG4gICAgcmV0dXJuIE1hdGguc2lnbih4KSAqIE1hdGgubG9nMXAoTWF0aC5hYnMoeCAvIGMpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtU3ltZXhwKGMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4gTWF0aC5zaWduKHgpICogTWF0aC5leHBtMShNYXRoLmFicyh4KSkgKiBjO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3ltbG9naXNoKHRyYW5zZm9ybSkge1xuICB2YXIgYyA9IDEsIHNjYWxlID0gdHJhbnNmb3JtKHRyYW5zZm9ybVN5bWxvZyhjKSwgdHJhbnNmb3JtU3ltZXhwKGMpKTtcblxuICBzY2FsZS5jb25zdGFudCA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IHRyYW5zZm9ybSh0cmFuc2Zvcm1TeW1sb2coYyA9ICtfKSwgdHJhbnNmb3JtU3ltZXhwKGMpKSA6IGM7XG4gIH07XG5cbiAgcmV0dXJuIGxpbmVhcmlzaChzY2FsZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWxvZygpIHtcbiAgdmFyIHNjYWxlID0gc3ltbG9naXNoKHRyYW5zZm9ybWVyKCkpO1xuXG4gIHNjYWxlLmNvcHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29weShzY2FsZSwgc3ltbG9nKCkpLmNvbnN0YW50KHNjYWxlLmNvbnN0YW50KCkpO1xuICB9O1xuXG4gIHJldHVybiBpbml0UmFuZ2UuYXBwbHkoc2NhbGUsIGFyZ3VtZW50cyk7XG59XG4iLCJpbXBvcnQge2Jpc2VjdH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aHJlc2hvbGQoKSB7XG4gIHZhciBkb21haW4gPSBbMC41XSxcbiAgICAgIHJhbmdlID0gWzAsIDFdLFxuICAgICAgdW5rbm93bixcbiAgICAgIG4gPSAxO1xuXG4gIGZ1bmN0aW9uIHNjYWxlKHgpIHtcbiAgICByZXR1cm4geCA8PSB4ID8gcmFuZ2VbYmlzZWN0KGRvbWFpbiwgeCwgMCwgbildIDogdW5rbm93bjtcbiAgfVxuXG4gIHNjYWxlLmRvbWFpbiA9IGZ1bmN0aW9uKF8pIHtcbiAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA/IChkb21haW4gPSBBcnJheS5mcm9tKF8pLCBuID0gTWF0aC5taW4oZG9tYWluLmxlbmd0aCwgcmFuZ2UubGVuZ3RoIC0gMSksIHNjYWxlKSA6IGRvbWFpbi5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLnJhbmdlID0gZnVuY3Rpb24oXykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gKHJhbmdlID0gQXJyYXkuZnJvbShfKSwgbiA9IE1hdGgubWluKGRvbWFpbi5sZW5ndGgsIHJhbmdlLmxlbmd0aCAtIDEpLCBzY2FsZSkgOiByYW5nZS5zbGljZSgpO1xuICB9O1xuXG4gIHNjYWxlLmludmVydEV4dGVudCA9IGZ1bmN0aW9uKHkpIHtcbiAgICB2YXIgaSA9IHJhbmdlLmluZGV4T2YoeSk7XG4gICAgcmV0dXJuIFtkb21haW5baSAtIDFdLCBkb21haW5baV1dO1xuICB9O1xuXG4gIHNjYWxlLnVua25vd24gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyAodW5rbm93biA9IF8sIHNjYWxlKSA6IHVua25vd247XG4gIH07XG5cbiAgc2NhbGUuY29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aHJlc2hvbGQoKVxuICAgICAgICAuZG9tYWluKGRvbWFpbilcbiAgICAgICAgLnJhbmdlKHJhbmdlKVxuICAgICAgICAudW5rbm93bih1bmtub3duKTtcbiAgfTtcblxuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KHNjYWxlLCBhcmd1bWVudHMpO1xufVxuIiwiaW1wb3J0IHt0aWNrU3RlcH0gZnJvbSBcImQzLWFycmF5XCI7XG5pbXBvcnQge2Zvcm1hdCwgZm9ybWF0UHJlZml4LCBmb3JtYXRTcGVjaWZpZXIsIHByZWNpc2lvbkZpeGVkLCBwcmVjaXNpb25QcmVmaXgsIHByZWNpc2lvblJvdW5kfSBmcm9tIFwiZDMtZm9ybWF0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpY2tGb3JtYXQoc3RhcnQsIHN0b3AsIGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgdmFyIHN0ZXAgPSB0aWNrU3RlcChzdGFydCwgc3RvcCwgY291bnQpLFxuICAgICAgcHJlY2lzaW9uO1xuICBzcGVjaWZpZXIgPSBmb3JtYXRTcGVjaWZpZXIoc3BlY2lmaWVyID09IG51bGwgPyBcIixmXCIgOiBzcGVjaWZpZXIpO1xuICBzd2l0Y2ggKHNwZWNpZmllci50eXBlKSB7XG4gICAgY2FzZSBcInNcIjoge1xuICAgICAgdmFyIHZhbHVlID0gTWF0aC5tYXgoTWF0aC5hYnMoc3RhcnQpLCBNYXRoLmFicyhzdG9wKSk7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25QcmVmaXgoc3RlcCwgdmFsdWUpKSkgc3BlY2lmaWVyLnByZWNpc2lvbiA9IHByZWNpc2lvbjtcbiAgICAgIHJldHVybiBmb3JtYXRQcmVmaXgoc3BlY2lmaWVyLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNhc2UgXCJcIjpcbiAgICBjYXNlIFwiZVwiOlxuICAgIGNhc2UgXCJnXCI6XG4gICAgY2FzZSBcInBcIjpcbiAgICBjYXNlIFwiclwiOiB7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25Sb3VuZChzdGVwLCBNYXRoLm1heChNYXRoLmFicyhzdGFydCksIE1hdGguYWJzKHN0b3ApKSkpKSBzcGVjaWZpZXIucHJlY2lzaW9uID0gcHJlY2lzaW9uIC0gKHNwZWNpZmllci50eXBlID09PSBcImVcIik7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBcImZcIjpcbiAgICBjYXNlIFwiJVwiOiB7XG4gICAgICBpZiAoc3BlY2lmaWVyLnByZWNpc2lvbiA9PSBudWxsICYmICFpc05hTihwcmVjaXNpb24gPSBwcmVjaXNpb25GaXhlZChzdGVwKSkpIHNwZWNpZmllci5wcmVjaXNpb24gPSBwcmVjaXNpb24gLSAoc3BlY2lmaWVyLnR5cGUgPT09IFwiJVwiKSAqIDI7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZvcm1hdChzcGVjaWZpZXIpO1xufVxuIiwiaW1wb3J0IHtiaXNlY3RvciwgdGlja1N0ZXB9IGZyb20gXCJkMy1hcnJheVwiO1xuaW1wb3J0IHt0aW1lWWVhciwgdGltZU1vbnRoLCB0aW1lV2VlaywgdGltZURheSwgdGltZUhvdXIsIHRpbWVNaW51dGUsIHRpbWVTZWNvbmQsIHRpbWVNaWxsaXNlY29uZH0gZnJvbSBcImQzLXRpbWVcIjtcbmltcG9ydCB7dGltZUZvcm1hdH0gZnJvbSBcImQzLXRpbWUtZm9ybWF0XCI7XG5pbXBvcnQgY29udGludW91cywge2NvcHl9IGZyb20gXCIuL2NvbnRpbnVvdXMuanNcIjtcbmltcG9ydCB7aW5pdFJhbmdlfSBmcm9tIFwiLi9pbml0LmpzXCI7XG5pbXBvcnQgbmljZSBmcm9tIFwiLi9uaWNlLmpzXCI7XG5cbnZhciBkdXJhdGlvblNlY29uZCA9IDEwMDAsXG4gICAgZHVyYXRpb25NaW51dGUgPSBkdXJhdGlvblNlY29uZCAqIDYwLFxuICAgIGR1cmF0aW9uSG91ciA9IGR1cmF0aW9uTWludXRlICogNjAsXG4gICAgZHVyYXRpb25EYXkgPSBkdXJhdGlvbkhvdXIgKiAyNCxcbiAgICBkdXJhdGlvbldlZWsgPSBkdXJhdGlvbkRheSAqIDcsXG4gICAgZHVyYXRpb25Nb250aCA9IGR1cmF0aW9uRGF5ICogMzAsXG4gICAgZHVyYXRpb25ZZWFyID0gZHVyYXRpb25EYXkgKiAzNjU7XG5cbmZ1bmN0aW9uIGRhdGUodCkge1xuICByZXR1cm4gbmV3IERhdGUodCk7XG59XG5cbmZ1bmN0aW9uIG51bWJlcih0KSB7XG4gIHJldHVybiB0IGluc3RhbmNlb2YgRGF0ZSA/ICt0IDogK25ldyBEYXRlKCt0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGVuZGFyKHllYXIsIG1vbnRoLCB3ZWVrLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgZm9ybWF0KSB7XG4gIHZhciBzY2FsZSA9IGNvbnRpbnVvdXMoKSxcbiAgICAgIGludmVydCA9IHNjYWxlLmludmVydCxcbiAgICAgIGRvbWFpbiA9IHNjYWxlLmRvbWFpbjtcblxuICB2YXIgZm9ybWF0TWlsbGlzZWNvbmQgPSBmb3JtYXQoXCIuJUxcIiksXG4gICAgICBmb3JtYXRTZWNvbmQgPSBmb3JtYXQoXCI6JVNcIiksXG4gICAgICBmb3JtYXRNaW51dGUgPSBmb3JtYXQoXCIlSTolTVwiKSxcbiAgICAgIGZvcm1hdEhvdXIgPSBmb3JtYXQoXCIlSSAlcFwiKSxcbiAgICAgIGZvcm1hdERheSA9IGZvcm1hdChcIiVhICVkXCIpLFxuICAgICAgZm9ybWF0V2VlayA9IGZvcm1hdChcIiViICVkXCIpLFxuICAgICAgZm9ybWF0TW9udGggPSBmb3JtYXQoXCIlQlwiKSxcbiAgICAgIGZvcm1hdFllYXIgPSBmb3JtYXQoXCIlWVwiKTtcblxuICB2YXIgdGlja0ludGVydmFscyA9IFtcbiAgICBbc2Vjb25kLCAgMSwgICAgICBkdXJhdGlvblNlY29uZF0sXG4gICAgW3NlY29uZCwgIDUsICA1ICogZHVyYXRpb25TZWNvbmRdLFxuICAgIFtzZWNvbmQsIDE1LCAxNSAqIGR1cmF0aW9uU2Vjb25kXSxcbiAgICBbc2Vjb25kLCAzMCwgMzAgKiBkdXJhdGlvblNlY29uZF0sXG4gICAgW21pbnV0ZSwgIDEsICAgICAgZHVyYXRpb25NaW51dGVdLFxuICAgIFttaW51dGUsICA1LCAgNSAqIGR1cmF0aW9uTWludXRlXSxcbiAgICBbbWludXRlLCAxNSwgMTUgKiBkdXJhdGlvbk1pbnV0ZV0sXG4gICAgW21pbnV0ZSwgMzAsIDMwICogZHVyYXRpb25NaW51dGVdLFxuICAgIFsgIGhvdXIsICAxLCAgICAgIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICBob3VyLCAgMywgIDMgKiBkdXJhdGlvbkhvdXIgIF0sXG4gICAgWyAgaG91ciwgIDYsICA2ICogZHVyYXRpb25Ib3VyICBdLFxuICAgIFsgIGhvdXIsIDEyLCAxMiAqIGR1cmF0aW9uSG91ciAgXSxcbiAgICBbICAgZGF5LCAgMSwgICAgICBkdXJhdGlvbkRheSAgIF0sXG4gICAgWyAgIGRheSwgIDIsICAyICogZHVyYXRpb25EYXkgICBdLFxuICAgIFsgIHdlZWssICAxLCAgICAgIGR1cmF0aW9uV2VlayAgXSxcbiAgICBbIG1vbnRoLCAgMSwgICAgICBkdXJhdGlvbk1vbnRoIF0sXG4gICAgWyBtb250aCwgIDMsICAzICogZHVyYXRpb25Nb250aCBdLFxuICAgIFsgIHllYXIsICAxLCAgICAgIGR1cmF0aW9uWWVhciAgXVxuICBdO1xuXG4gIGZ1bmN0aW9uIHRpY2tGb3JtYXQoZGF0ZSkge1xuICAgIHJldHVybiAoc2Vjb25kKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdE1pbGxpc2Vjb25kXG4gICAgICAgIDogbWludXRlKGRhdGUpIDwgZGF0ZSA/IGZvcm1hdFNlY29uZFxuICAgICAgICA6IGhvdXIoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TWludXRlXG4gICAgICAgIDogZGF5KGRhdGUpIDwgZGF0ZSA/IGZvcm1hdEhvdXJcbiAgICAgICAgOiBtb250aChkYXRlKSA8IGRhdGUgPyAod2VlayhkYXRlKSA8IGRhdGUgPyBmb3JtYXREYXkgOiBmb3JtYXRXZWVrKVxuICAgICAgICA6IHllYXIoZGF0ZSkgPCBkYXRlID8gZm9ybWF0TW9udGhcbiAgICAgICAgOiBmb3JtYXRZZWFyKShkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpY2tJbnRlcnZhbChpbnRlcnZhbCwgc3RhcnQsIHN0b3ApIHtcbiAgICBpZiAoaW50ZXJ2YWwgPT0gbnVsbCkgaW50ZXJ2YWwgPSAxMDtcblxuICAgIC8vIElmIGEgZGVzaXJlZCB0aWNrIGNvdW50IGlzIHNwZWNpZmllZCwgcGljayBhIHJlYXNvbmFibGUgdGljayBpbnRlcnZhbFxuICAgIC8vIGJhc2VkIG9uIHRoZSBleHRlbnQgb2YgdGhlIGRvbWFpbiBhbmQgYSByb3VnaCBlc3RpbWF0ZSBvZiB0aWNrIHNpemUuXG4gICAgLy8gT3RoZXJ3aXNlLCBhc3N1bWUgaW50ZXJ2YWwgaXMgYWxyZWFkeSBhIHRpbWUgaW50ZXJ2YWwgYW5kIHVzZSBpdC5cbiAgICBpZiAodHlwZW9mIGludGVydmFsID09PSBcIm51bWJlclwiKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gTWF0aC5hYnMoc3RvcCAtIHN0YXJ0KSAvIGludGVydmFsLFxuICAgICAgICAgIGkgPSBiaXNlY3RvcihmdW5jdGlvbihpKSB7IHJldHVybiBpWzJdOyB9KS5yaWdodCh0aWNrSW50ZXJ2YWxzLCB0YXJnZXQpLFxuICAgICAgICAgIHN0ZXA7XG4gICAgICBpZiAoaSA9PT0gdGlja0ludGVydmFscy5sZW5ndGgpIHtcbiAgICAgICAgc3RlcCA9IHRpY2tTdGVwKHN0YXJ0IC8gZHVyYXRpb25ZZWFyLCBzdG9wIC8gZHVyYXRpb25ZZWFyLCBpbnRlcnZhbCk7XG4gICAgICAgIGludGVydmFsID0geWVhcjtcbiAgICAgIH0gZWxzZSBpZiAoaSkge1xuICAgICAgICBpID0gdGlja0ludGVydmFsc1t0YXJnZXQgLyB0aWNrSW50ZXJ2YWxzW2kgLSAxXVsyXSA8IHRpY2tJbnRlcnZhbHNbaV1bMl0gLyB0YXJnZXQgPyBpIC0gMSA6IGldO1xuICAgICAgICBzdGVwID0gaVsxXTtcbiAgICAgICAgaW50ZXJ2YWwgPSBpWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RlcCA9IE1hdGgubWF4KHRpY2tTdGVwKHN0YXJ0LCBzdG9wLCBpbnRlcnZhbCksIDEpO1xuICAgICAgICBpbnRlcnZhbCA9IG1pbGxpc2Vjb25kO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGludGVydmFsLmV2ZXJ5KHN0ZXApO1xuICAgIH1cblxuICAgIHJldHVybiBpbnRlcnZhbDtcbiAgfVxuXG4gIHNjYWxlLmludmVydCA9IGZ1bmN0aW9uKHkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoaW52ZXJ0KHkpKTtcbiAgfTtcblxuICBzY2FsZS5kb21haW4gPSBmdW5jdGlvbihfKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPyBkb21haW4oQXJyYXkuZnJvbShfLCBudW1iZXIpKSA6IGRvbWFpbigpLm1hcChkYXRlKTtcbiAgfTtcblxuICBzY2FsZS50aWNrcyA9IGZ1bmN0aW9uKGludGVydmFsKSB7XG4gICAgdmFyIGQgPSBkb21haW4oKSxcbiAgICAgICAgdDAgPSBkWzBdLFxuICAgICAgICB0MSA9IGRbZC5sZW5ndGggLSAxXSxcbiAgICAgICAgciA9IHQxIDwgdDAsXG4gICAgICAgIHQ7XG4gICAgaWYgKHIpIHQgPSB0MCwgdDAgPSB0MSwgdDEgPSB0O1xuICAgIHQgPSB0aWNrSW50ZXJ2YWwoaW50ZXJ2YWwsIHQwLCB0MSk7XG4gICAgdCA9IHQgPyB0LnJhbmdlKHQwLCB0MSArIDEpIDogW107IC8vIGluY2x1c2l2ZSBzdG9wXG4gICAgcmV0dXJuIHIgPyB0LnJldmVyc2UoKSA6IHQ7XG4gIH07XG5cbiAgc2NhbGUudGlja0Zvcm1hdCA9IGZ1bmN0aW9uKGNvdW50LCBzcGVjaWZpZXIpIHtcbiAgICByZXR1cm4gc3BlY2lmaWVyID09IG51bGwgPyB0aWNrRm9ybWF0IDogZm9ybWF0KHNwZWNpZmllcik7XG4gIH07XG5cbiAgc2NhbGUubmljZSA9IGZ1bmN0aW9uKGludGVydmFsKSB7XG4gICAgdmFyIGQgPSBkb21haW4oKTtcbiAgICByZXR1cm4gKGludGVydmFsID0gdGlja0ludGVydmFsKGludGVydmFsLCBkWzBdLCBkW2QubGVuZ3RoIC0gMV0pKVxuICAgICAgICA/IGRvbWFpbihuaWNlKGQsIGludGVydmFsKSlcbiAgICAgICAgOiBzY2FsZTtcbiAgfTtcblxuICBzY2FsZS5jb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvcHkoc2NhbGUsIGNhbGVuZGFyKHllYXIsIG1vbnRoLCB3ZWVrLCBkYXksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kLCBtaWxsaXNlY29uZCwgZm9ybWF0KSk7XG4gIH07XG5cbiAgcmV0dXJuIHNjYWxlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKCkge1xuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KGNhbGVuZGFyKHRpbWVZZWFyLCB0aW1lTW9udGgsIHRpbWVXZWVrLCB0aW1lRGF5LCB0aW1lSG91ciwgdGltZU1pbnV0ZSwgdGltZVNlY29uZCwgdGltZU1pbGxpc2Vjb25kLCB0aW1lRm9ybWF0KS5kb21haW4oW25ldyBEYXRlKDIwMDAsIDAsIDEpLCBuZXcgRGF0ZSgyMDAwLCAwLCAyKV0pLCBhcmd1bWVudHMpO1xufVxuIiwiaW1wb3J0IHtjYWxlbmRhcn0gZnJvbSBcIi4vdGltZS5qc1wiO1xuaW1wb3J0IHt1dGNGb3JtYXR9IGZyb20gXCJkMy10aW1lLWZvcm1hdFwiO1xuaW1wb3J0IHt1dGNZZWFyLCB1dGNNb250aCwgdXRjV2VlaywgdXRjRGF5LCB1dGNIb3VyLCB1dGNNaW51dGUsIHV0Y1NlY29uZCwgdXRjTWlsbGlzZWNvbmR9IGZyb20gXCJkMy10aW1lXCI7XG5pbXBvcnQge2luaXRSYW5nZX0gZnJvbSBcIi4vaW5pdC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1dGNUaW1lKCkge1xuICByZXR1cm4gaW5pdFJhbmdlLmFwcGx5KGNhbGVuZGFyKHV0Y1llYXIsIHV0Y01vbnRoLCB1dGNXZWVrLCB1dGNEYXksIHV0Y0hvdXIsIHV0Y01pbnV0ZSwgdXRjU2Vjb25kLCB1dGNNaWxsaXNlY29uZCwgdXRjRm9ybWF0KS5kb21haW4oW0RhdGUuVVRDKDIwMDAsIDAsIDEpLCBEYXRlLlVUQygyMDAwLCAwLCAyKV0pLCBhcmd1bWVudHMpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgXCJsZW5ndGhcIiBpbiB4XG4gICAgPyB4IC8vIEFycmF5LCBUeXBlZEFycmF5LCBOb2RlTGlzdCwgYXJyYXktbGlrZVxuICAgIDogQXJyYXkuZnJvbSh4KTsgLy8gTWFwLCBTZXQsIGl0ZXJhYmxlLCBzdHJpbmcsIG9yIGFueXRoaW5nIGVsc2Vcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB4O1xuICB9O1xufVxuIiwiaW1wb3J0IGNyZWF0b3IgZnJvbSBcIi4vY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNlbGVjdCBmcm9tIFwiLi9zZWxlY3QuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICByZXR1cm4gc2VsZWN0KGNyZWF0b3IobmFtZSkuY2FsbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKTtcbn1cbiIsImltcG9ydCBuYW1lc3BhY2UgZnJvbSBcIi4vbmFtZXNwYWNlLmpzXCI7XG5pbXBvcnQge3hodG1sfSBmcm9tIFwiLi9uYW1lc3BhY2VzLmpzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0b3JJbmhlcml0KG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBkb2N1bWVudCA9IHRoaXMub3duZXJEb2N1bWVudCxcbiAgICAgICAgdXJpID0gdGhpcy5uYW1lc3BhY2VVUkk7XG4gICAgcmV0dXJuIHVyaSA9PT0geGh0bWwgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm5hbWVzcGFjZVVSSSA9PT0geGh0bWxcbiAgICAgICAgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHVyaSwgbmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0b3JGaXhlZChmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obmFtZSkge1xuICB2YXIgZnVsbG5hbWUgPSBuYW1lc3BhY2UobmFtZSk7XG4gIHJldHVybiAoZnVsbG5hbWUubG9jYWxcbiAgICAgID8gY3JlYXRvckZpeGVkXG4gICAgICA6IGNyZWF0b3JJbmhlcml0KShmdWxsbmFtZSk7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgY3JlYXRlfSBmcm9tIFwiLi9jcmVhdGUuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBjcmVhdG9yfSBmcm9tIFwiLi9jcmVhdG9yLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbG9jYWx9IGZyb20gXCIuL2xvY2FsLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbWF0Y2hlcn0gZnJvbSBcIi4vbWF0Y2hlci5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIG5hbWVzcGFjZX0gZnJvbSBcIi4vbmFtZXNwYWNlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgbmFtZXNwYWNlc30gZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHBvaW50ZXJ9IGZyb20gXCIuL3BvaW50ZXIuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBwb2ludGVyc30gZnJvbSBcIi4vcG9pbnRlcnMuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3R9IGZyb20gXCIuL3NlbGVjdC5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHNlbGVjdEFsbH0gZnJvbSBcIi4vc2VsZWN0QWxsLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgc2VsZWN0aW9ufSBmcm9tIFwiLi9zZWxlY3Rpb24vaW5kZXguanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3Rvcn0gZnJvbSBcIi4vc2VsZWN0b3IuanNcIjtcbmV4cG9ydCB7ZGVmYXVsdCBhcyBzZWxlY3RvckFsbH0gZnJvbSBcIi4vc2VsZWN0b3JBbGwuanNcIjtcbmV4cG9ydCB7c3R5bGVWYWx1ZSBhcyBzdHlsZX0gZnJvbSBcIi4vc2VsZWN0aW9uL3N0eWxlLmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgd2luZG93fSBmcm9tIFwiLi93aW5kb3cuanNcIjtcbiIsInZhciBuZXh0SWQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2NhbCgpIHtcbiAgcmV0dXJuIG5ldyBMb2NhbDtcbn1cblxuZnVuY3Rpb24gTG9jYWwoKSB7XG4gIHRoaXMuXyA9IFwiQFwiICsgKCsrbmV4dElkKS50b1N0cmluZygzNik7XG59XG5cbkxvY2FsLnByb3RvdHlwZSA9IGxvY2FsLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IExvY2FsLFxuICBnZXQ6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgaWQgPSB0aGlzLl87XG4gICAgd2hpbGUgKCEoaWQgaW4gbm9kZSkpIGlmICghKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpKSByZXR1cm47XG4gICAgcmV0dXJuIG5vZGVbaWRdO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKG5vZGUsIHZhbHVlKSB7XG4gICAgcmV0dXJuIG5vZGVbdGhpcy5fXSA9IHZhbHVlO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gdGhpcy5fIGluIG5vZGUgJiYgZGVsZXRlIG5vZGVbdGhpcy5fXTtcbiAgfSxcbiAgdG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl87XG4gIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0Y2hlcyhzZWxlY3Rvcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZE1hdGNoZXIoc2VsZWN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgfTtcbn1cblxuIiwiaW1wb3J0IG5hbWVzcGFjZXMgZnJvbSBcIi4vbmFtZXNwYWNlcy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBwcmVmaXggPSBuYW1lICs9IFwiXCIsIGkgPSBwcmVmaXguaW5kZXhPZihcIjpcIik7XG4gIGlmIChpID49IDAgJiYgKHByZWZpeCA9IG5hbWUuc2xpY2UoMCwgaSkpICE9PSBcInhtbG5zXCIpIG5hbWUgPSBuYW1lLnNsaWNlKGkgKyAxKTtcbiAgcmV0dXJuIG5hbWVzcGFjZXMuaGFzT3duUHJvcGVydHkocHJlZml4KSA/IHtzcGFjZTogbmFtZXNwYWNlc1twcmVmaXhdLCBsb2NhbDogbmFtZX0gOiBuYW1lOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xufVxuIiwiZXhwb3J0IHZhciB4aHRtbCA9IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHN2ZzogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICB4aHRtbDogeGh0bWwsXG4gIHhsaW5rOiBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIixcbiAgeG1sOiBcImh0dHA6Ly93d3cudzMub3JnL1hNTC8xOTk4L25hbWVzcGFjZVwiLFxuICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiXG59O1xuIiwiaW1wb3J0IHNvdXJjZUV2ZW50IGZyb20gXCIuL3NvdXJjZUV2ZW50LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGV2ZW50LCBub2RlKSB7XG4gIGV2ZW50ID0gc291cmNlRXZlbnQoZXZlbnQpO1xuICBpZiAobm9kZSA9PT0gdW5kZWZpbmVkKSBub2RlID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgaWYgKG5vZGUpIHtcbiAgICB2YXIgc3ZnID0gbm9kZS5vd25lclNWR0VsZW1lbnQgfHwgbm9kZTtcbiAgICBpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG4gICAgICB2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcbiAgICAgIHBvaW50LnggPSBldmVudC5jbGllbnRYLCBwb2ludC55ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgIHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG5vZGUuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcbiAgICAgIHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG4gICAgfVxuICAgIGlmIChub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIFtldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gbm9kZS5jbGllbnRMZWZ0LCBldmVudC5jbGllbnRZIC0gcmVjdC50b3AgLSBub2RlLmNsaWVudFRvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBbZXZlbnQucGFnZVgsIGV2ZW50LnBhZ2VZXTtcbn1cbiIsImltcG9ydCBwb2ludGVyIGZyb20gXCIuL3BvaW50ZXIuanNcIjtcbmltcG9ydCBzb3VyY2VFdmVudCBmcm9tIFwiLi9zb3VyY2VFdmVudC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihldmVudHMsIG5vZGUpIHtcbiAgaWYgKGV2ZW50cy50YXJnZXQpIHsgLy8gaS5lLiwgaW5zdGFuY2VvZiBFdmVudCwgbm90IFRvdWNoTGlzdCBvciBpdGVyYWJsZVxuICAgIGV2ZW50cyA9IHNvdXJjZUV2ZW50KGV2ZW50cyk7XG4gICAgaWYgKG5vZGUgPT09IHVuZGVmaW5lZCkgbm9kZSA9IGV2ZW50cy5jdXJyZW50VGFyZ2V0O1xuICAgIGV2ZW50cyA9IGV2ZW50cy50b3VjaGVzIHx8IFtldmVudHNdO1xuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGV2ZW50cywgZXZlbnQgPT4gcG9pbnRlcihldmVudCwgbm9kZSkpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb24sIHJvb3R9IGZyb20gXCIuL3NlbGVjdGlvbi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzZWxlY3Rvcikge1xuICByZXR1cm4gdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiXG4gICAgICA/IG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKV1dLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbW3NlbGVjdG9yXV0sIHJvb3QpO1xufVxuIiwiaW1wb3J0IGFycmF5IGZyb20gXCIuL2FycmF5LmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbiwgcm9vdH0gZnJvbSBcIi4vc2VsZWN0aW9uL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCJcbiAgICAgID8gbmV3IFNlbGVjdGlvbihbZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcildLCBbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50XSlcbiAgICAgIDogbmV3IFNlbGVjdGlvbihbc2VsZWN0b3IgPT0gbnVsbCA/IFtdIDogYXJyYXkoc2VsZWN0b3IpXSwgcm9vdCk7XG59XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBjcmVhdGUgPSB0eXBlb2YgbmFtZSA9PT0gXCJmdW5jdGlvblwiID8gbmFtZSA6IGNyZWF0b3IobmFtZSk7XG4gIHJldHVybiB0aGlzLnNlbGVjdChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IG5hbWVzcGFjZSBmcm9tIFwiLi4vbmFtZXNwYWNlLmpzXCI7XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmUobmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGF0dHJSZW1vdmVOUyhmdWxsbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVOUyhmdWxsbmFtZS5zcGFjZSwgZnVsbG5hbWUubG9jYWwpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyQ29uc3RhbnQobmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYXR0ckNvbnN0YW50TlMoZnVsbG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdmFsdWUpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBhdHRyRnVuY3Rpb25OUyhmdWxsbmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSB0aGlzLnJlbW92ZUF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCk7XG4gICAgZWxzZSB0aGlzLnNldEF0dHJpYnV0ZU5TKGZ1bGxuYW1lLnNwYWNlLCBmdWxsbmFtZS5sb2NhbCwgdik7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gIHZhciBmdWxsbmFtZSA9IG5hbWVzcGFjZShuYW1lKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbm9kZSA9IHRoaXMubm9kZSgpO1xuICAgIHJldHVybiBmdWxsbmFtZS5sb2NhbFxuICAgICAgICA/IG5vZGUuZ2V0QXR0cmlidXRlTlMoZnVsbG5hbWUuc3BhY2UsIGZ1bGxuYW1lLmxvY2FsKVxuICAgICAgICA6IG5vZGUuZ2V0QXR0cmlidXRlKGZ1bGxuYW1lKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmVhY2goKHZhbHVlID09IG51bGxcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0clJlbW92ZU5TIDogYXR0clJlbW92ZSkgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gKGZ1bGxuYW1lLmxvY2FsID8gYXR0ckZ1bmN0aW9uTlMgOiBhdHRyRnVuY3Rpb24pXG4gICAgICA6IChmdWxsbmFtZS5sb2NhbCA/IGF0dHJDb25zdGFudE5TIDogYXR0ckNvbnN0YW50KSkpKGZ1bGxuYW1lLCB2YWx1ZSkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHZhciBjYWxsYmFjayA9IGFyZ3VtZW50c1swXTtcbiAgYXJndW1lbnRzWzBdID0gdGhpcztcbiAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJmdW5jdGlvbiBjbGFzc0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5zcGxpdCgvXnxcXHMrLyk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzTGlzdChub2RlKSB7XG4gIHJldHVybiBub2RlLmNsYXNzTGlzdCB8fCBuZXcgQ2xhc3NMaXN0KG5vZGUpO1xufVxuXG5mdW5jdGlvbiBDbGFzc0xpc3Qobm9kZSkge1xuICB0aGlzLl9ub2RlID0gbm9kZTtcbiAgdGhpcy5fbmFtZXMgPSBjbGFzc0FycmF5KG5vZGUuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgfHwgXCJcIik7XG59XG5cbkNsYXNzTGlzdC5wcm90b3R5cGUgPSB7XG4gIGFkZDogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHRoaXMuX25hbWVzLnB1c2gobmFtZSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciBpID0gdGhpcy5fbmFtZXMuaW5kZXhPZihuYW1lKTtcbiAgICBpZiAoaSA+PSAwKSB7XG4gICAgICB0aGlzLl9uYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl9ub2RlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIHRoaXMuX25hbWVzLmpvaW4oXCIgXCIpKTtcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5zOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSkgPj0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY2xhc3NlZEFkZChub2RlLCBuYW1lcykge1xuICB2YXIgbGlzdCA9IGNsYXNzTGlzdChub2RlKSwgaSA9IC0xLCBuID0gbmFtZXMubGVuZ3RoO1xuICB3aGlsZSAoKytpIDwgbikgbGlzdC5hZGQobmFtZXNbaV0pO1xufVxuXG5mdW5jdGlvbiBjbGFzc2VkUmVtb3ZlKG5vZGUsIG5hbWVzKSB7XG4gIHZhciBsaXN0ID0gY2xhc3NMaXN0KG5vZGUpLCBpID0gLTEsIG4gPSBuYW1lcy5sZW5ndGg7XG4gIHdoaWxlICgrK2kgPCBuKSBsaXN0LnJlbW92ZShuYW1lc1tpXSk7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZWRUcnVlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkQWRkKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZhbHNlKG5hbWVzKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBjbGFzc2VkUmVtb3ZlKHRoaXMsIG5hbWVzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xhc3NlZEZ1bmN0aW9uKG5hbWVzLCB2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgKHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgPyBjbGFzc2VkQWRkIDogY2xhc3NlZFJlbW92ZSkodGhpcywgbmFtZXMpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICB2YXIgbmFtZXMgPSBjbGFzc0FycmF5KG5hbWUgKyBcIlwiKTtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgbGlzdCA9IGNsYXNzTGlzdCh0aGlzLm5vZGUoKSksIGkgPSAtMSwgbiA9IG5hbWVzLmxlbmd0aDtcbiAgICB3aGlsZSAoKytpIDwgbikgaWYgKCFsaXN0LmNvbnRhaW5zKG5hbWVzW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuZWFjaCgodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY2xhc3NlZEZ1bmN0aW9uIDogdmFsdWVcbiAgICAgID8gY2xhc3NlZFRydWVcbiAgICAgIDogY2xhc3NlZEZhbHNlKShuYW1lcywgdmFsdWUpKTtcbn1cbiIsImZ1bmN0aW9uIHNlbGVjdGlvbl9jbG9uZVNoYWxsb3coKSB7XG4gIHZhciBjbG9uZSA9IHRoaXMuY2xvbmVOb2RlKGZhbHNlKSwgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlO1xuICByZXR1cm4gcGFyZW50ID8gcGFyZW50Lmluc2VydEJlZm9yZShjbG9uZSwgdGhpcy5uZXh0U2libGluZykgOiBjbG9uZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0aW9uX2Nsb25lRGVlcCgpIHtcbiAgdmFyIGNsb25lID0gdGhpcy5jbG9uZU5vZGUodHJ1ZSksIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgcmV0dXJuIHBhcmVudCA/IHBhcmVudC5pbnNlcnRCZWZvcmUoY2xvbmUsIHRoaXMubmV4dFNpYmxpbmcpIDogY2xvbmU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGRlZXApIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGRlZXAgPyBzZWxlY3Rpb25fY2xvbmVEZWVwIDogc2VsZWN0aW9uX2Nsb25lU2hhbGxvdyk7XG59XG4iLCJpbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcbmltcG9ydCB7RW50ZXJOb2RlfSBmcm9tIFwiLi9lbnRlci5qc1wiO1xuaW1wb3J0IGFycmF5IGZyb20gXCIuLi9hcnJheS5qc1wiO1xuaW1wb3J0IGNvbnN0YW50IGZyb20gXCIuLi9jb25zdGFudC5qc1wiO1xuXG5mdW5jdGlvbiBiaW5kSW5kZXgocGFyZW50LCBncm91cCwgZW50ZXIsIHVwZGF0ZSwgZXhpdCwgZGF0YSkge1xuICB2YXIgaSA9IDAsXG4gICAgICBub2RlLFxuICAgICAgZ3JvdXBMZW5ndGggPSBncm91cC5sZW5ndGgsXG4gICAgICBkYXRhTGVuZ3RoID0gZGF0YS5sZW5ndGg7XG5cbiAgLy8gUHV0IGFueSBub24tbnVsbCBub2RlcyB0aGF0IGZpdCBpbnRvIHVwZGF0ZS5cbiAgLy8gUHV0IGFueSBudWxsIG5vZGVzIGludG8gZW50ZXIuXG4gIC8vIFB1dCBhbnkgcmVtYWluaW5nIGRhdGEgaW50byBlbnRlci5cbiAgZm9yICg7IGkgPCBkYXRhTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICBub2RlLl9fZGF0YV9fID0gZGF0YVtpXTtcbiAgICAgIHVwZGF0ZVtpXSA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVudGVyW2ldID0gbmV3IEVudGVyTm9kZShwYXJlbnQsIGRhdGFbaV0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFB1dCBhbnkgbm9uLW51bGwgbm9kZXMgdGhhdCBkb27igJl0IGZpdCBpbnRvIGV4aXQuXG4gIGZvciAoOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kS2V5KHBhcmVudCwgZ3JvdXAsIGVudGVyLCB1cGRhdGUsIGV4aXQsIGRhdGEsIGtleSkge1xuICB2YXIgaSxcbiAgICAgIG5vZGUsXG4gICAgICBub2RlQnlLZXlWYWx1ZSA9IG5ldyBNYXAsXG4gICAgICBncm91cExlbmd0aCA9IGdyb3VwLmxlbmd0aCxcbiAgICAgIGRhdGFMZW5ndGggPSBkYXRhLmxlbmd0aCxcbiAgICAgIGtleVZhbHVlcyA9IG5ldyBBcnJheShncm91cExlbmd0aCksXG4gICAgICBrZXlWYWx1ZTtcblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggbm9kZS5cbiAgLy8gSWYgbXVsdGlwbGUgbm9kZXMgaGF2ZSB0aGUgc2FtZSBrZXksIHRoZSBkdXBsaWNhdGVzIGFyZSBhZGRlZCB0byBleGl0LlxuICBmb3IgKGkgPSAwOyBpIDwgZ3JvdXBMZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlID0gZ3JvdXBbaV0pIHtcbiAgICAgIGtleVZhbHVlc1tpXSA9IGtleVZhbHVlID0ga2V5LmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApICsgXCJcIjtcbiAgICAgIGlmIChub2RlQnlLZXlWYWx1ZS5oYXMoa2V5VmFsdWUpKSB7XG4gICAgICAgIGV4aXRbaV0gPSBub2RlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZUJ5S2V5VmFsdWUuc2V0KGtleVZhbHVlLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDb21wdXRlIHRoZSBrZXkgZm9yIGVhY2ggZGF0dW0uXG4gIC8vIElmIHRoZXJlIGEgbm9kZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBrZXksIGpvaW4gYW5kIGFkZCBpdCB0byB1cGRhdGUuXG4gIC8vIElmIHRoZXJlIGlzIG5vdCAob3IgdGhlIGtleSBpcyBhIGR1cGxpY2F0ZSksIGFkZCBpdCB0byBlbnRlci5cbiAgZm9yIChpID0gMDsgaSA8IGRhdGFMZW5ndGg7ICsraSkge1xuICAgIGtleVZhbHVlID0ga2V5LmNhbGwocGFyZW50LCBkYXRhW2ldLCBpLCBkYXRhKSArIFwiXCI7XG4gICAgaWYgKG5vZGUgPSBub2RlQnlLZXlWYWx1ZS5nZXQoa2V5VmFsdWUpKSB7XG4gICAgICB1cGRhdGVbaV0gPSBub2RlO1xuICAgICAgbm9kZS5fX2RhdGFfXyA9IGRhdGFbaV07XG4gICAgICBub2RlQnlLZXlWYWx1ZS5kZWxldGUoa2V5VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbnRlcltpXSA9IG5ldyBFbnRlck5vZGUocGFyZW50LCBkYXRhW2ldKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYW55IHJlbWFpbmluZyBub2RlcyB0aGF0IHdlcmUgbm90IGJvdW5kIHRvIGRhdGEgdG8gZXhpdC5cbiAgZm9yIChpID0gMDsgaSA8IGdyb3VwTGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKG5vZGVCeUtleVZhbHVlLmdldChrZXlWYWx1ZXNbaV0pID09PSBub2RlKSkge1xuICAgICAgZXhpdFtpXSA9IG5vZGU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRhdHVtKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuX19kYXRhX187XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLCBkYXR1bSk7XG5cbiAgdmFyIGJpbmQgPSBrZXkgPyBiaW5kS2V5IDogYmluZEluZGV4LFxuICAgICAgcGFyZW50cyA9IHRoaXMuX3BhcmVudHMsXG4gICAgICBncm91cHMgPSB0aGlzLl9ncm91cHM7XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJmdW5jdGlvblwiKSB2YWx1ZSA9IGNvbnN0YW50KHZhbHVlKTtcblxuICBmb3IgKHZhciBtID0gZ3JvdXBzLmxlbmd0aCwgdXBkYXRlID0gbmV3IEFycmF5KG0pLCBlbnRlciA9IG5ldyBBcnJheShtKSwgZXhpdCA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICB2YXIgcGFyZW50ID0gcGFyZW50c1tqXSxcbiAgICAgICAgZ3JvdXAgPSBncm91cHNbal0sXG4gICAgICAgIGdyb3VwTGVuZ3RoID0gZ3JvdXAubGVuZ3RoLFxuICAgICAgICBkYXRhID0gYXJyYXkodmFsdWUuY2FsbChwYXJlbnQsIHBhcmVudCAmJiBwYXJlbnQuX19kYXRhX18sIGosIHBhcmVudHMpKSxcbiAgICAgICAgZGF0YUxlbmd0aCA9IGRhdGEubGVuZ3RoLFxuICAgICAgICBlbnRlckdyb3VwID0gZW50ZXJbal0gPSBuZXcgQXJyYXkoZGF0YUxlbmd0aCksXG4gICAgICAgIHVwZGF0ZUdyb3VwID0gdXBkYXRlW2pdID0gbmV3IEFycmF5KGRhdGFMZW5ndGgpLFxuICAgICAgICBleGl0R3JvdXAgPSBleGl0W2pdID0gbmV3IEFycmF5KGdyb3VwTGVuZ3RoKTtcblxuICAgIGJpbmQocGFyZW50LCBncm91cCwgZW50ZXJHcm91cCwgdXBkYXRlR3JvdXAsIGV4aXRHcm91cCwgZGF0YSwga2V5KTtcblxuICAgIC8vIE5vdyBjb25uZWN0IHRoZSBlbnRlciBub2RlcyB0byB0aGVpciBmb2xsb3dpbmcgdXBkYXRlIG5vZGUsIHN1Y2ggdGhhdFxuICAgIC8vIGFwcGVuZENoaWxkIGNhbiBpbnNlcnQgdGhlIG1hdGVyaWFsaXplZCBlbnRlciBub2RlIGJlZm9yZSB0aGlzIG5vZGUsXG4gICAgLy8gcmF0aGVyIHRoYW4gYXQgdGhlIGVuZCBvZiB0aGUgcGFyZW50IG5vZGUuXG4gICAgZm9yICh2YXIgaTAgPSAwLCBpMSA9IDAsIHByZXZpb3VzLCBuZXh0OyBpMCA8IGRhdGFMZW5ndGg7ICsraTApIHtcbiAgICAgIGlmIChwcmV2aW91cyA9IGVudGVyR3JvdXBbaTBdKSB7XG4gICAgICAgIGlmIChpMCA+PSBpMSkgaTEgPSBpMCArIDE7XG4gICAgICAgIHdoaWxlICghKG5leHQgPSB1cGRhdGVHcm91cFtpMV0pICYmICsraTEgPCBkYXRhTGVuZ3RoKTtcbiAgICAgICAgcHJldmlvdXMuX25leHQgPSBuZXh0IHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlID0gbmV3IFNlbGVjdGlvbih1cGRhdGUsIHBhcmVudHMpO1xuICB1cGRhdGUuX2VudGVyID0gZW50ZXI7XG4gIHVwZGF0ZS5fZXhpdCA9IGV4aXQ7XG4gIHJldHVybiB1cGRhdGU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLnByb3BlcnR5KFwiX19kYXRhX19cIiwgdmFsdWUpXG4gICAgICA6IHRoaXMubm9kZSgpLl9fZGF0YV9fO1xufVxuIiwiaW1wb3J0IGRlZmF1bHRWaWV3IGZyb20gXCIuLi93aW5kb3cuanNcIjtcblxuZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChub2RlLCB0eXBlLCBwYXJhbXMpIHtcbiAgdmFyIHdpbmRvdyA9IGRlZmF1bHRWaWV3KG5vZGUpLFxuICAgICAgZXZlbnQgPSB3aW5kb3cuQ3VzdG9tRXZlbnQ7XG5cbiAgaWYgKHR5cGVvZiBldmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZXZlbnQgPSBuZXcgZXZlbnQodHlwZSwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xuICAgIGlmIChwYXJhbXMpIGV2ZW50LmluaXRFdmVudCh0eXBlLCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUpLCBldmVudC5kZXRhaWwgPSBwYXJhbXMuZGV0YWlsO1xuICAgIGVsc2UgZXZlbnQuaW5pdEV2ZW50KHR5cGUsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaENvbnN0YW50KHR5cGUsIHBhcmFtcykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoRXZlbnQodGhpcywgdHlwZSwgcGFyYW1zKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hGdW5jdGlvbih0eXBlLCBwYXJhbXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkaXNwYXRjaEV2ZW50KHRoaXMsIHR5cGUsIHBhcmFtcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHJldHVybiB0aGlzLmVhY2goKHR5cGVvZiBwYXJhbXMgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBkaXNwYXRjaEZ1bmN0aW9uXG4gICAgICA6IGRpc3BhdGNoQ29uc3RhbnQpKHR5cGUsIHBhcmFtcykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY2FsbGJhY2spIHtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgY2FsbGJhY2suY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLm5vZGUoKTtcbn1cbiIsImltcG9ydCBzcGFyc2UgZnJvbSBcIi4vc3BhcnNlLmpzXCI7XG5pbXBvcnQge1NlbGVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgU2VsZWN0aW9uKHRoaXMuX2VudGVyIHx8IHRoaXMuX2dyb3Vwcy5tYXAoc3BhcnNlKSwgdGhpcy5fcGFyZW50cyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBFbnRlck5vZGUocGFyZW50LCBkYXR1bSkge1xuICB0aGlzLm93bmVyRG9jdW1lbnQgPSBwYXJlbnQub3duZXJEb2N1bWVudDtcbiAgdGhpcy5uYW1lc3BhY2VVUkkgPSBwYXJlbnQubmFtZXNwYWNlVVJJO1xuICB0aGlzLl9uZXh0ID0gbnVsbDtcbiAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB0aGlzLl9fZGF0YV9fID0gZGF0dW07XG59XG5cbkVudGVyTm9kZS5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBFbnRlck5vZGUsXG4gIGFwcGVuZENoaWxkOiBmdW5jdGlvbihjaGlsZCkgeyByZXR1cm4gdGhpcy5fcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgdGhpcy5fbmV4dCk7IH0sXG4gIGluc2VydEJlZm9yZTogZnVuY3Rpb24oY2hpbGQsIG5leHQpIHsgcmV0dXJuIHRoaXMuX3BhcmVudC5pbnNlcnRCZWZvcmUoY2hpbGQsIG5leHQpOyB9LFxuICBxdWVyeVNlbGVjdG9yOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpOyB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbihzZWxlY3RvcikgeyByZXR1cm4gdGhpcy5fcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpOyB9XG59O1xuIiwiaW1wb3J0IHNwYXJzZSBmcm9tIFwiLi9zcGFyc2UuanNcIjtcbmltcG9ydCB7U2VsZWN0aW9ufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24odGhpcy5fZXhpdCB8fCB0aGlzLl9ncm91cHMubWFwKHNwYXJzZSksIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICBpZiAodHlwZW9mIG1hdGNoICE9PSBcImZ1bmN0aW9uXCIpIG1hdGNoID0gbWF0Y2hlcihtYXRjaCk7XG5cbiAgZm9yICh2YXIgZ3JvdXBzID0gdGhpcy5fZ3JvdXBzLCBtID0gZ3JvdXBzLmxlbmd0aCwgc3ViZ3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzdWJncm91cCA9IHN1Ymdyb3Vwc1tqXSA9IFtdLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKChub2RlID0gZ3JvdXBbaV0pICYmIG1hdGNoLmNhbGwobm9kZSwgbm9kZS5fX2RhdGFfXywgaSwgZ3JvdXApKSB7XG4gICAgICAgIHN1Ymdyb3VwLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImZ1bmN0aW9uIGh0bWxSZW1vdmUoKSB7XG4gIHRoaXMuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gaHRtbENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlubmVySFRNTCA9IHZhbHVlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBodG1sRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLmlubmVySFRNTCA9IHYgPT0gbnVsbCA/IFwiXCIgOiB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aFxuICAgICAgPyB0aGlzLmVhY2godmFsdWUgPT0gbnVsbFxuICAgICAgICAgID8gaHRtbFJlbW92ZSA6ICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgID8gaHRtbEZ1bmN0aW9uXG4gICAgICAgICAgOiBodG1sQ29uc3RhbnQpKHZhbHVlKSlcbiAgICAgIDogdGhpcy5ub2RlKCkuaW5uZXJIVE1MO1xufVxuIiwiaW1wb3J0IHNlbGVjdGlvbl9zZWxlY3QgZnJvbSBcIi4vc2VsZWN0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX3NlbGVjdEFsbCBmcm9tIFwiLi9zZWxlY3RBbGwuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQgZnJvbSBcIi4vc2VsZWN0Q2hpbGQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4gZnJvbSBcIi4vc2VsZWN0Q2hpbGRyZW4uanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZmlsdGVyIGZyb20gXCIuL2ZpbHRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW50ZXIgZnJvbSBcIi4vZW50ZXIuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZXhpdCBmcm9tIFwiLi9leGl0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2pvaW4gZnJvbSBcIi4vam9pbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9tZXJnZSBmcm9tIFwiLi9tZXJnZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vcmRlciBmcm9tIFwiLi9vcmRlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zb3J0IGZyb20gXCIuL3NvcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fY2FsbCBmcm9tIFwiLi9jYWxsLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGVzIGZyb20gXCIuL25vZGVzLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX25vZGUgZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zaXplIGZyb20gXCIuL3NpemUuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZW1wdHkgZnJvbSBcIi4vZW1wdHkuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fZWFjaCBmcm9tIFwiLi9lYWNoLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2F0dHIgZnJvbSBcIi4vYXR0ci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9zdHlsZSBmcm9tIFwiLi9zdHlsZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9wcm9wZXJ0eSBmcm9tIFwiLi9wcm9wZXJ0eS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbGFzc2VkIGZyb20gXCIuL2NsYXNzZWQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fdGV4dCBmcm9tIFwiLi90ZXh0LmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2h0bWwgZnJvbSBcIi4vaHRtbC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9yYWlzZSBmcm9tIFwiLi9yYWlzZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9sb3dlciBmcm9tIFwiLi9sb3dlci5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9hcHBlbmQgZnJvbSBcIi4vYXBwZW5kLmpzXCI7XG5pbXBvcnQgc2VsZWN0aW9uX2luc2VydCBmcm9tIFwiLi9pbnNlcnQuanNcIjtcbmltcG9ydCBzZWxlY3Rpb25fcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9jbG9uZSBmcm9tIFwiLi9jbG9uZS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kYXR1bSBmcm9tIFwiLi9kYXR1bS5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9vbiBmcm9tIFwiLi9vbi5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9kaXNwYXRjaCBmcm9tIFwiLi9kaXNwYXRjaC5qc1wiO1xuaW1wb3J0IHNlbGVjdGlvbl9pdGVyYXRvciBmcm9tIFwiLi9pdGVyYXRvci5qc1wiO1xuXG5leHBvcnQgdmFyIHJvb3QgPSBbbnVsbF07XG5cbmV4cG9ydCBmdW5jdGlvbiBTZWxlY3Rpb24oZ3JvdXBzLCBwYXJlbnRzKSB7XG4gIHRoaXMuX2dyb3VwcyA9IGdyb3VwcztcbiAgdGhpcy5fcGFyZW50cyA9IHBhcmVudHM7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oW1tkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRdXSwgcm9vdCk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdGlvbl9zZWxlY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzO1xufVxuXG5TZWxlY3Rpb24ucHJvdG90eXBlID0gc2VsZWN0aW9uLnByb3RvdHlwZSA9IHtcbiAgY29uc3RydWN0b3I6IFNlbGVjdGlvbixcbiAgc2VsZWN0OiBzZWxlY3Rpb25fc2VsZWN0LFxuICBzZWxlY3RBbGw6IHNlbGVjdGlvbl9zZWxlY3RBbGwsXG4gIHNlbGVjdENoaWxkOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGQsXG4gIHNlbGVjdENoaWxkcmVuOiBzZWxlY3Rpb25fc2VsZWN0Q2hpbGRyZW4sXG4gIGZpbHRlcjogc2VsZWN0aW9uX2ZpbHRlcixcbiAgZGF0YTogc2VsZWN0aW9uX2RhdGEsXG4gIGVudGVyOiBzZWxlY3Rpb25fZW50ZXIsXG4gIGV4aXQ6IHNlbGVjdGlvbl9leGl0LFxuICBqb2luOiBzZWxlY3Rpb25fam9pbixcbiAgbWVyZ2U6IHNlbGVjdGlvbl9tZXJnZSxcbiAgc2VsZWN0aW9uOiBzZWxlY3Rpb25fc2VsZWN0aW9uLFxuICBvcmRlcjogc2VsZWN0aW9uX29yZGVyLFxuICBzb3J0OiBzZWxlY3Rpb25fc29ydCxcbiAgY2FsbDogc2VsZWN0aW9uX2NhbGwsXG4gIG5vZGVzOiBzZWxlY3Rpb25fbm9kZXMsXG4gIG5vZGU6IHNlbGVjdGlvbl9ub2RlLFxuICBzaXplOiBzZWxlY3Rpb25fc2l6ZSxcbiAgZW1wdHk6IHNlbGVjdGlvbl9lbXB0eSxcbiAgZWFjaDogc2VsZWN0aW9uX2VhY2gsXG4gIGF0dHI6IHNlbGVjdGlvbl9hdHRyLFxuICBzdHlsZTogc2VsZWN0aW9uX3N0eWxlLFxuICBwcm9wZXJ0eTogc2VsZWN0aW9uX3Byb3BlcnR5LFxuICBjbGFzc2VkOiBzZWxlY3Rpb25fY2xhc3NlZCxcbiAgdGV4dDogc2VsZWN0aW9uX3RleHQsXG4gIGh0bWw6IHNlbGVjdGlvbl9odG1sLFxuICByYWlzZTogc2VsZWN0aW9uX3JhaXNlLFxuICBsb3dlcjogc2VsZWN0aW9uX2xvd2VyLFxuICBhcHBlbmQ6IHNlbGVjdGlvbl9hcHBlbmQsXG4gIGluc2VydDogc2VsZWN0aW9uX2luc2VydCxcbiAgcmVtb3ZlOiBzZWxlY3Rpb25fcmVtb3ZlLFxuICBjbG9uZTogc2VsZWN0aW9uX2Nsb25lLFxuICBkYXR1bTogc2VsZWN0aW9uX2RhdHVtLFxuICBvbjogc2VsZWN0aW9uX29uLFxuICBkaXNwYXRjaDogc2VsZWN0aW9uX2Rpc3BhdGNoLFxuICBbU3ltYm9sLml0ZXJhdG9yXTogc2VsZWN0aW9uX2l0ZXJhdG9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzZWxlY3Rpb247XG4iLCJpbXBvcnQgY3JlYXRvciBmcm9tIFwiLi4vY3JlYXRvci5qc1wiO1xuaW1wb3J0IHNlbGVjdG9yIGZyb20gXCIuLi9zZWxlY3Rvci5qc1wiO1xuXG5mdW5jdGlvbiBjb25zdGFudE51bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCBiZWZvcmUpIHtcbiAgdmFyIGNyZWF0ZSA9IHR5cGVvZiBuYW1lID09PSBcImZ1bmN0aW9uXCIgPyBuYW1lIDogY3JlYXRvcihuYW1lKSxcbiAgICAgIHNlbGVjdCA9IGJlZm9yZSA9PSBudWxsID8gY29uc3RhbnROdWxsIDogdHlwZW9mIGJlZm9yZSA9PT0gXCJmdW5jdGlvblwiID8gYmVmb3JlIDogc2VsZWN0b3IoYmVmb3JlKTtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShjcmVhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKSwgc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgbnVsbCk7XG4gIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qKCkge1xuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIGogPSAwLCBtID0gZ3JvdXBzLmxlbmd0aDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBpID0gMCwgbiA9IGdyb3VwLmxlbmd0aCwgbm9kZTsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkgeWllbGQgbm9kZTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKG9uZW50ZXIsIG9udXBkYXRlLCBvbmV4aXQpIHtcbiAgdmFyIGVudGVyID0gdGhpcy5lbnRlcigpLCB1cGRhdGUgPSB0aGlzLCBleGl0ID0gdGhpcy5leGl0KCk7XG4gIGVudGVyID0gdHlwZW9mIG9uZW50ZXIgPT09IFwiZnVuY3Rpb25cIiA/IG9uZW50ZXIoZW50ZXIpIDogZW50ZXIuYXBwZW5kKG9uZW50ZXIgKyBcIlwiKTtcbiAgaWYgKG9udXBkYXRlICE9IG51bGwpIHVwZGF0ZSA9IG9udXBkYXRlKHVwZGF0ZSk7XG4gIGlmIChvbmV4aXQgPT0gbnVsbCkgZXhpdC5yZW1vdmUoKTsgZWxzZSBvbmV4aXQoZXhpdCk7XG4gIHJldHVybiBlbnRlciAmJiB1cGRhdGUgPyBlbnRlci5tZXJnZSh1cGRhdGUpLm9yZGVyKCkgOiB1cGRhdGU7XG59XG4iLCJmdW5jdGlvbiBsb3dlcigpIHtcbiAgaWYgKHRoaXMucHJldmlvdXNTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMsIHRoaXMucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmVhY2gobG93ZXIpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdGlvbikge1xuICBpZiAoIShzZWxlY3Rpb24gaW5zdGFuY2VvZiBTZWxlY3Rpb24pKSB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG1lcmdlXCIpO1xuXG4gIGZvciAodmFyIGdyb3VwczAgPSB0aGlzLl9ncm91cHMsIGdyb3VwczEgPSBzZWxlY3Rpb24uX2dyb3VwcywgbTAgPSBncm91cHMwLmxlbmd0aCwgbTEgPSBncm91cHMxLmxlbmd0aCwgbSA9IE1hdGgubWluKG0wLCBtMSksIG1lcmdlcyA9IG5ldyBBcnJheShtMCksIGogPSAwOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAwID0gZ3JvdXBzMFtqXSwgZ3JvdXAxID0gZ3JvdXBzMVtqXSwgbiA9IGdyb3VwMC5sZW5ndGgsIG1lcmdlID0gbWVyZ2VzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cDBbaV0gfHwgZ3JvdXAxW2ldKSB7XG4gICAgICAgIG1lcmdlW2ldID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb3IgKDsgaiA8IG0wOyArK2opIHtcbiAgICBtZXJnZXNbal0gPSBncm91cHMwW2pdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24obWVyZ2VzLCB0aGlzLl9wYXJlbnRzKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IDAsIG0gPSBncm91cHMubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgZm9yICh2YXIgZ3JvdXAgPSBncm91cHNbal0sIGkgPSAwLCBuID0gZ3JvdXAubGVuZ3RoOyBpIDwgbjsgKytpKSB7XG4gICAgICB2YXIgbm9kZSA9IGdyb3VwW2ldO1xuICAgICAgaWYgKG5vZGUpIHJldHVybiBub2RlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKHRoaXMpO1xufVxuIiwiZnVuY3Rpb24gY29udGV4dExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gIHJldHVybiBmdW5jdGlvbihldmVudCkge1xuICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQsIHRoaXMuX19kYXRhX18pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZXMpIHtcbiAgcmV0dXJuIHR5cGVuYW1lcy50cmltKCkuc3BsaXQoL158XFxzKy8pLm1hcChmdW5jdGlvbih0KSB7XG4gICAgdmFyIG5hbWUgPSBcIlwiLCBpID0gdC5pbmRleE9mKFwiLlwiKTtcbiAgICBpZiAoaSA+PSAwKSBuYW1lID0gdC5zbGljZShpICsgMSksIHQgPSB0LnNsaWNlKDAsIGkpO1xuICAgIHJldHVybiB7dHlwZTogdCwgbmFtZTogbmFtZX07XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvblJlbW92ZSh0eXBlbmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uID0gdGhpcy5fX29uO1xuICAgIGlmICghb24pIHJldHVybjtcbiAgICBmb3IgKHZhciBqID0gMCwgaSA9IC0xLCBtID0gb24ubGVuZ3RoLCBvOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAobyA9IG9uW2pdLCAoIXR5cGVuYW1lLnR5cGUgfHwgby50eXBlID09PSB0eXBlbmFtZS50eXBlKSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9uWysraV0gPSBvO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoKytpKSBvbi5sZW5ndGggPSBpO1xuICAgIGVsc2UgZGVsZXRlIHRoaXMuX19vbjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gb25BZGQodHlwZW5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb24gPSB0aGlzLl9fb24sIG8sIGxpc3RlbmVyID0gY29udGV4dExpc3RlbmVyKHZhbHVlKTtcbiAgICBpZiAob24pIGZvciAodmFyIGogPSAwLCBtID0gb24ubGVuZ3RoOyBqIDwgbTsgKytqKSB7XG4gICAgICBpZiAoKG8gPSBvbltqXSkudHlwZSA9PT0gdHlwZW5hbWUudHlwZSAmJiBvLm5hbWUgPT09IHR5cGVuYW1lLm5hbWUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciwgby5vcHRpb25zKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKG8udHlwZSwgby5saXN0ZW5lciA9IGxpc3RlbmVyLCBvLm9wdGlvbnMgPSBvcHRpb25zKTtcbiAgICAgICAgby52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcih0eXBlbmFtZS50eXBlLCBsaXN0ZW5lciwgb3B0aW9ucyk7XG4gICAgbyA9IHt0eXBlOiB0eXBlbmFtZS50eXBlLCBuYW1lOiB0eXBlbmFtZS5uYW1lLCB2YWx1ZTogdmFsdWUsIGxpc3RlbmVyOiBsaXN0ZW5lciwgb3B0aW9uczogb3B0aW9uc307XG4gICAgaWYgKCFvbikgdGhpcy5fX29uID0gW29dO1xuICAgIGVsc2Ugb24ucHVzaChvKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odHlwZW5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB0eXBlbmFtZXMgPSBwYXJzZVR5cGVuYW1lcyh0eXBlbmFtZSArIFwiXCIpLCBpLCBuID0gdHlwZW5hbWVzLmxlbmd0aCwgdDtcblxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcbiAgICB2YXIgb24gPSB0aGlzLm5vZGUoKS5fX29uO1xuICAgIGlmIChvbikgZm9yICh2YXIgaiA9IDAsIG0gPSBvbi5sZW5ndGgsIG87IGogPCBtOyArK2opIHtcbiAgICAgIGZvciAoaSA9IDAsIG8gPSBvbltqXTsgaSA8IG47ICsraSkge1xuICAgICAgICBpZiAoKHQgPSB0eXBlbmFtZXNbaV0pLnR5cGUgPT09IG8udHlwZSAmJiB0Lm5hbWUgPT09IG8ubmFtZSkge1xuICAgICAgICAgIHJldHVybiBvLnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIG9uID0gdmFsdWUgPyBvbkFkZCA6IG9uUmVtb3ZlO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgKytpKSB0aGlzLmVhY2gob24odHlwZW5hbWVzW2ldLCB2YWx1ZSwgb3B0aW9ucykpO1xuICByZXR1cm4gdGhpcztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgaiA9IC0xLCBtID0gZ3JvdXBzLmxlbmd0aDsgKytqIDwgbTspIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgaSA9IGdyb3VwLmxlbmd0aCAtIDEsIG5leHQgPSBncm91cFtpXSwgbm9kZTsgLS1pID49IDA7KSB7XG4gICAgICBpZiAobm9kZSA9IGdyb3VwW2ldKSB7XG4gICAgICAgIGlmIChuZXh0ICYmIG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24obmV4dCkgXiA0KSBuZXh0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG5leHQpO1xuICAgICAgICBuZXh0ID0gbm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn1cbiIsImZ1bmN0aW9uIHByb3BlcnR5UmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGRlbGV0ZSB0aGlzW25hbWVdO1xuICB9O1xufVxuXG5mdW5jdGlvbiBwcm9wZXJ0eUNvbnN0YW50KG5hbWUsIHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzW25hbWVdID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdmFsdWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAodiA9PSBudWxsKSBkZWxldGUgdGhpc1tuYW1lXTtcbiAgICBlbHNlIHRoaXNbbmFtZV0gPSB2O1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDFcbiAgICAgID8gdGhpcy5lYWNoKCh2YWx1ZSA9PSBudWxsXG4gICAgICAgICAgPyBwcm9wZXJ0eVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgPyBwcm9wZXJ0eUZ1bmN0aW9uXG4gICAgICAgICAgOiBwcm9wZXJ0eUNvbnN0YW50KShuYW1lLCB2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpW25hbWVdO1xufVxuIiwiZnVuY3Rpb24gcmFpc2UoKSB7XG4gIGlmICh0aGlzLm5leHRTaWJsaW5nKSB0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5lYWNoKHJhaXNlKTtcbn1cbiIsImZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcbiAgaWYgKHBhcmVudCkgcGFyZW50LnJlbW92ZUNoaWxkKHRoaXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZWFjaChyZW1vdmUpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3IgZnJvbSBcIi4uL3NlbGVjdG9yLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdCkge1xuICBpZiAodHlwZW9mIHNlbGVjdCAhPT0gXCJmdW5jdGlvblwiKSBzZWxlY3QgPSBzZWxlY3RvcihzZWxlY3QpO1xuXG4gIGZvciAodmFyIGdyb3VwcyA9IHRoaXMuX2dyb3VwcywgbSA9IGdyb3Vwcy5sZW5ndGgsIHN1Ymdyb3VwcyA9IG5ldyBBcnJheShtKSwgaiA9IDA7IGogPCBtOyArK2opIHtcbiAgICBmb3IgKHZhciBncm91cCA9IGdyb3Vwc1tqXSwgbiA9IGdyb3VwLmxlbmd0aCwgc3ViZ3JvdXAgPSBzdWJncm91cHNbal0gPSBuZXcgQXJyYXkobiksIG5vZGUsIHN1Ym5vZGUsIGkgPSAwOyBpIDwgbjsgKytpKSB7XG4gICAgICBpZiAoKG5vZGUgPSBncm91cFtpXSkgJiYgKHN1Ym5vZGUgPSBzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpKSB7XG4gICAgICAgIGlmIChcIl9fZGF0YV9fXCIgaW4gbm9kZSkgc3Vibm9kZS5fX2RhdGFfXyA9IG5vZGUuX19kYXRhX187XG4gICAgICAgIHN1Ymdyb3VwW2ldID0gc3Vibm9kZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzdWJncm91cHMsIHRoaXMuX3BhcmVudHMpO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5pbXBvcnQgYXJyYXkgZnJvbSBcIi4uL2FycmF5LmpzXCI7XG5pbXBvcnQgc2VsZWN0b3JBbGwgZnJvbSBcIi4uL3NlbGVjdG9yQWxsLmpzXCI7XG5cbmZ1bmN0aW9uIGFycmF5QWxsKHNlbGVjdCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdyb3VwID0gc2VsZWN0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGdyb3VwID09IG51bGwgPyBbXSA6IGFycmF5KGdyb3VwKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0KSB7XG4gIGlmICh0eXBlb2Ygc2VsZWN0ID09PSBcImZ1bmN0aW9uXCIpIHNlbGVjdCA9IGFycmF5QWxsKHNlbGVjdCk7XG4gIGVsc2Ugc2VsZWN0ID0gc2VsZWN0b3JBbGwoc2VsZWN0KTtcblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzdWJncm91cHMgPSBbXSwgcGFyZW50cyA9IFtdLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzdWJncm91cHMucHVzaChzZWxlY3QuY2FsbChub2RlLCBub2RlLl9fZGF0YV9fLCBpLCBncm91cCkpO1xuICAgICAgICBwYXJlbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTZWxlY3Rpb24oc3ViZ3JvdXBzLCBwYXJlbnRzKTtcbn1cbiIsImltcG9ydCB7Y2hpbGRNYXRjaGVyfSBmcm9tIFwiLi4vbWF0Y2hlci5qc1wiO1xuXG52YXIgZmluZCA9IEFycmF5LnByb3RvdHlwZS5maW5kO1xuXG5mdW5jdGlvbiBjaGlsZEZpbmQobWF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmaW5kLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjaGlsZEZpcnN0KCkge1xuICByZXR1cm4gdGhpcy5maXJzdEVsZW1lbnRDaGlsZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obWF0Y2gpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZWN0KG1hdGNoID09IG51bGwgPyBjaGlsZEZpcnN0XG4gICAgICA6IGNoaWxkRmluZCh0eXBlb2YgbWF0Y2ggPT09IFwiZnVuY3Rpb25cIiA/IG1hdGNoIDogY2hpbGRNYXRjaGVyKG1hdGNoKSkpO1xufVxuIiwiaW1wb3J0IHtjaGlsZE1hdGNoZXJ9IGZyb20gXCIuLi9tYXRjaGVyLmpzXCI7XG5cbnZhciBmaWx0ZXIgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyO1xuXG5mdW5jdGlvbiBjaGlsZHJlbigpIHtcbiAgcmV0dXJuIHRoaXMuY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNoaWxkcmVuRmlsdGVyKG1hdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmlsdGVyLmNhbGwodGhpcy5jaGlsZHJlbiwgbWF0Y2gpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihtYXRjaCkge1xuICByZXR1cm4gdGhpcy5zZWxlY3RBbGwobWF0Y2ggPT0gbnVsbCA/IGNoaWxkcmVuXG4gICAgICA6IGNoaWxkcmVuRmlsdGVyKHR5cGVvZiBtYXRjaCA9PT0gXCJmdW5jdGlvblwiID8gbWF0Y2ggOiBjaGlsZE1hdGNoZXIobWF0Y2gpKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgbGV0IHNpemUgPSAwO1xuICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcykgKytzaXplOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiBzaXplO1xufVxuIiwiaW1wb3J0IHtTZWxlY3Rpb259IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbXBhcmUpIHtcbiAgaWYgKCFjb21wYXJlKSBjb21wYXJlID0gYXNjZW5kaW5nO1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmVOb2RlKGEsIGIpIHtcbiAgICByZXR1cm4gYSAmJiBiID8gY29tcGFyZShhLl9fZGF0YV9fLCBiLl9fZGF0YV9fKSA6ICFhIC0gIWI7XG4gIH1cblxuICBmb3IgKHZhciBncm91cHMgPSB0aGlzLl9ncm91cHMsIG0gPSBncm91cHMubGVuZ3RoLCBzb3J0Z3JvdXBzID0gbmV3IEFycmF5KG0pLCBqID0gMDsgaiA8IG07ICsraikge1xuICAgIGZvciAodmFyIGdyb3VwID0gZ3JvdXBzW2pdLCBuID0gZ3JvdXAubGVuZ3RoLCBzb3J0Z3JvdXAgPSBzb3J0Z3JvdXBzW2pdID0gbmV3IEFycmF5KG4pLCBub2RlLCBpID0gMDsgaSA8IG47ICsraSkge1xuICAgICAgaWYgKG5vZGUgPSBncm91cFtpXSkge1xuICAgICAgICBzb3J0Z3JvdXBbaV0gPSBub2RlO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0Z3JvdXAuc29ydChjb21wYXJlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFNlbGVjdGlvbihzb3J0Z3JvdXBzLCB0aGlzLl9wYXJlbnRzKS5vcmRlcigpO1xufVxuXG5mdW5jdGlvbiBhc2NlbmRpbmcoYSwgYikge1xuICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IGEgPj0gYiA/IDAgOiBOYU47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbih1cGRhdGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSh1cGRhdGUubGVuZ3RoKTtcbn1cbiIsImltcG9ydCBkZWZhdWx0VmlldyBmcm9tIFwiLi4vd2luZG93LmpzXCI7XG5cbmZ1bmN0aW9uIHN0eWxlUmVtb3ZlKG5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlQ29uc3RhbnQobmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlLCBwcmlvcml0eSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0eWxlRnVuY3Rpb24obmFtZSwgdmFsdWUsIHByaW9yaXR5KSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdiA9IHZhbHVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHYgPT0gbnVsbCkgdGhpcy5zdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICBlbHNlIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdiwgcHJpb3JpdHkpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgcHJpb3JpdHkpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAxXG4gICAgICA/IHRoaXMuZWFjaCgodmFsdWUgPT0gbnVsbFxuICAgICAgICAgICAgPyBzdHlsZVJlbW92ZSA6IHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICA/IHN0eWxlRnVuY3Rpb25cbiAgICAgICAgICAgIDogc3R5bGVDb25zdGFudCkobmFtZSwgdmFsdWUsIHByaW9yaXR5ID09IG51bGwgPyBcIlwiIDogcHJpb3JpdHkpKVxuICAgICAgOiBzdHlsZVZhbHVlKHRoaXMubm9kZSgpLCBuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0eWxlVmFsdWUobm9kZSwgbmFtZSkge1xuICByZXR1cm4gbm9kZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpXG4gICAgICB8fCBkZWZhdWx0Vmlldyhub2RlKS5nZXRDb21wdXRlZFN0eWxlKG5vZGUsIG51bGwpLmdldFByb3BlcnR5VmFsdWUobmFtZSk7XG59XG4iLCJmdW5jdGlvbiB0ZXh0UmVtb3ZlKCkge1xuICB0aGlzLnRleHRDb250ZW50ID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gdGV4dENvbnN0YW50KHZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRleHRGdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHYgPSB2YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudGV4dENvbnRlbnQgPSB2ID09IG51bGwgPyBcIlwiIDogdjtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGhcbiAgICAgID8gdGhpcy5lYWNoKHZhbHVlID09IG51bGxcbiAgICAgICAgICA/IHRleHRSZW1vdmUgOiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICA/IHRleHRGdW5jdGlvblxuICAgICAgICAgIDogdGV4dENvbnN0YW50KSh2YWx1ZSkpXG4gICAgICA6IHRoaXMubm9kZSgpLnRleHRDb250ZW50O1xufVxuIiwiZnVuY3Rpb24gbm9uZSgpIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gIHJldHVybiBzZWxlY3RvciA9PSBudWxsID8gbm9uZSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiZnVuY3Rpb24gZW1wdHkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHNlbGVjdG9yID09IG51bGwgPyBlbXB0eSA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZXZlbnQpIHtcbiAgbGV0IHNvdXJjZUV2ZW50O1xuICB3aGlsZSAoc291cmNlRXZlbnQgPSBldmVudC5zb3VyY2VFdmVudCkgZXZlbnQgPSBzb3VyY2VFdmVudDtcbiAgcmV0dXJuIGV2ZW50O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24obm9kZSkge1xuICByZXR1cm4gKG5vZGUub3duZXJEb2N1bWVudCAmJiBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIC8vIG5vZGUgaXMgYSBOb2RlXG4gICAgICB8fCAobm9kZS5kb2N1bWVudCAmJiBub2RlKSAvLyBub2RlIGlzIGEgV2luZG93XG4gICAgICB8fCBub2RlLmRlZmF1bHRWaWV3OyAvLyBub2RlIGlzIGEgRG9jdW1lbnRcbn1cbiIsImltcG9ydCBmb3JtYXRMb2NhbGUgZnJvbSBcIi4vbG9jYWxlLmpzXCI7XG5cbnZhciBsb2NhbGU7XG5leHBvcnQgdmFyIHRpbWVGb3JtYXQ7XG5leHBvcnQgdmFyIHRpbWVQYXJzZTtcbmV4cG9ydCB2YXIgdXRjRm9ybWF0O1xuZXhwb3J0IHZhciB1dGNQYXJzZTtcblxuZGVmYXVsdExvY2FsZSh7XG4gIGRhdGVUaW1lOiBcIiV4LCAlWFwiLFxuICBkYXRlOiBcIiUtbS8lLWQvJVlcIixcbiAgdGltZTogXCIlLUk6JU06JVMgJXBcIixcbiAgcGVyaW9kczogW1wiQU1cIiwgXCJQTVwiXSxcbiAgZGF5czogW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl0sXG4gIHNob3J0RGF5czogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICBtb250aHM6IFtcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuICBzaG9ydE1vbnRoczogW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVmYXVsdExvY2FsZShkZWZpbml0aW9uKSB7XG4gIGxvY2FsZSA9IGZvcm1hdExvY2FsZShkZWZpbml0aW9uKTtcbiAgdGltZUZvcm1hdCA9IGxvY2FsZS5mb3JtYXQ7XG4gIHRpbWVQYXJzZSA9IGxvY2FsZS5wYXJzZTtcbiAgdXRjRm9ybWF0ID0gbG9jYWxlLnV0Y0Zvcm1hdDtcbiAgdXRjUGFyc2UgPSBsb2NhbGUudXRjUGFyc2U7XG4gIHJldHVybiBsb2NhbGU7XG59XG4iLCJleHBvcnQge2RlZmF1bHQgYXMgdGltZUZvcm1hdERlZmF1bHRMb2NhbGUsIHRpbWVGb3JtYXQsIHRpbWVQYXJzZSwgdXRjRm9ybWF0LCB1dGNQYXJzZX0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIHRpbWVGb3JtYXRMb2NhbGV9IGZyb20gXCIuL2xvY2FsZS5qc1wiO1xuZXhwb3J0IHtkZWZhdWx0IGFzIGlzb0Zvcm1hdH0gZnJvbSBcIi4vaXNvRm9ybWF0LmpzXCI7XG5leHBvcnQge2RlZmF1bHQgYXMgaXNvUGFyc2V9IGZyb20gXCIuL2lzb1BhcnNlLmpzXCI7XG4iLCJpbXBvcnQge3V0Y0Zvcm1hdH0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZS5qc1wiO1xuXG5leHBvcnQgdmFyIGlzb1NwZWNpZmllciA9IFwiJVktJW0tJWRUJUg6JU06JVMuJUxaXCI7XG5cbmZ1bmN0aW9uIGZvcm1hdElzb05hdGl2ZShkYXRlKSB7XG4gIHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7XG59XG5cbnZhciBmb3JtYXRJc28gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZ1xuICAgID8gZm9ybWF0SXNvTmF0aXZlXG4gICAgOiB1dGNGb3JtYXQoaXNvU3BlY2lmaWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0SXNvO1xuIiwiaW1wb3J0IHtpc29TcGVjaWZpZXJ9IGZyb20gXCIuL2lzb0Zvcm1hdC5qc1wiO1xuaW1wb3J0IHt1dGNQYXJzZX0gZnJvbSBcIi4vZGVmYXVsdExvY2FsZS5qc1wiO1xuXG5mdW5jdGlvbiBwYXJzZUlzb05hdGl2ZShzdHJpbmcpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZShzdHJpbmcpO1xuICByZXR1cm4gaXNOYU4oZGF0ZSkgPyBudWxsIDogZGF0ZTtcbn1cblxudmFyIHBhcnNlSXNvID0gK25ldyBEYXRlKFwiMjAwMC0wMS0wMVQwMDowMDowMC4wMDBaXCIpXG4gICAgPyBwYXJzZUlzb05hdGl2ZVxuICAgIDogdXRjUGFyc2UoaXNvU3BlY2lmaWVyKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFyc2VJc287XG4iLCJpbXBvcnQge1xuICB0aW1lRGF5LFxuICB0aW1lU3VuZGF5LFxuICB0aW1lTW9uZGF5LFxuICB0aW1lVGh1cnNkYXksXG4gIHRpbWVZZWFyLFxuICB1dGNEYXksXG4gIHV0Y1N1bmRheSxcbiAgdXRjTW9uZGF5LFxuICB1dGNUaHVyc2RheSxcbiAgdXRjWWVhclxufSBmcm9tIFwiZDMtdGltZVwiO1xuXG5mdW5jdGlvbiBsb2NhbERhdGUoZCkge1xuICBpZiAoMCA8PSBkLnkgJiYgZC55IDwgMTAwKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgtMSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCk7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkLnkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZShkLnksIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpO1xufVxuXG5mdW5jdGlvbiB1dGNEYXRlKGQpIHtcbiAgaWYgKDAgPD0gZC55ICYmIGQueSA8IDEwMCkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoLTEsIGQubSwgZC5kLCBkLkgsIGQuTSwgZC5TLCBkLkwpKTtcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGQueSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKGQueSwgZC5tLCBkLmQsIGQuSCwgZC5NLCBkLlMsIGQuTCkpO1xufVxuXG5mdW5jdGlvbiBuZXdEYXRlKHksIG0sIGQpIHtcbiAgcmV0dXJuIHt5OiB5LCBtOiBtLCBkOiBkLCBIOiAwLCBNOiAwLCBTOiAwLCBMOiAwfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9jYWxlKGxvY2FsZSkge1xuICB2YXIgbG9jYWxlX2RhdGVUaW1lID0gbG9jYWxlLmRhdGVUaW1lLFxuICAgICAgbG9jYWxlX2RhdGUgPSBsb2NhbGUuZGF0ZSxcbiAgICAgIGxvY2FsZV90aW1lID0gbG9jYWxlLnRpbWUsXG4gICAgICBsb2NhbGVfcGVyaW9kcyA9IGxvY2FsZS5wZXJpb2RzLFxuICAgICAgbG9jYWxlX3dlZWtkYXlzID0gbG9jYWxlLmRheXMsXG4gICAgICBsb2NhbGVfc2hvcnRXZWVrZGF5cyA9IGxvY2FsZS5zaG9ydERheXMsXG4gICAgICBsb2NhbGVfbW9udGhzID0gbG9jYWxlLm1vbnRocyxcbiAgICAgIGxvY2FsZV9zaG9ydE1vbnRocyA9IGxvY2FsZS5zaG9ydE1vbnRocztcblxuICB2YXIgcGVyaW9kUmUgPSBmb3JtYXRSZShsb2NhbGVfcGVyaW9kcyksXG4gICAgICBwZXJpb2RMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3BlcmlvZHMpLFxuICAgICAgd2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHdlZWtkYXlMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3dlZWtkYXlzKSxcbiAgICAgIHNob3J0V2Vla2RheVJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0V2Vla2RheXMpLFxuICAgICAgc2hvcnRXZWVrZGF5TG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9zaG9ydFdlZWtkYXlzKSxcbiAgICAgIG1vbnRoUmUgPSBmb3JtYXRSZShsb2NhbGVfbW9udGhzKSxcbiAgICAgIG1vbnRoTG9va3VwID0gZm9ybWF0TG9va3VwKGxvY2FsZV9tb250aHMpLFxuICAgICAgc2hvcnRNb250aFJlID0gZm9ybWF0UmUobG9jYWxlX3Nob3J0TW9udGhzKSxcbiAgICAgIHNob3J0TW9udGhMb29rdXAgPSBmb3JtYXRMb29rdXAobG9jYWxlX3Nob3J0TW9udGhzKTtcblxuICB2YXIgZm9ybWF0cyA9IHtcbiAgICBcImFcIjogZm9ybWF0U2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBmb3JtYXRXZWVrZGF5LFxuICAgIFwiYlwiOiBmb3JtYXRTaG9ydE1vbnRoLFxuICAgIFwiQlwiOiBmb3JtYXRNb250aCxcbiAgICBcImNcIjogbnVsbCxcbiAgICBcImRcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImVcIjogZm9ybWF0RGF5T2ZNb250aCxcbiAgICBcImZcIjogZm9ybWF0TWljcm9zZWNvbmRzLFxuICAgIFwiZ1wiOiBmb3JtYXRZZWFySVNPLFxuICAgIFwiR1wiOiBmb3JtYXRGdWxsWWVhcklTTyxcbiAgICBcIkhcIjogZm9ybWF0SG91cjI0LFxuICAgIFwiSVwiOiBmb3JtYXRIb3VyMTIsXG4gICAgXCJqXCI6IGZvcm1hdERheU9mWWVhcixcbiAgICBcIkxcIjogZm9ybWF0TWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBmb3JtYXRNb250aE51bWJlcixcbiAgICBcIk1cIjogZm9ybWF0TWludXRlcyxcbiAgICBcInBcIjogZm9ybWF0UGVyaW9kLFxuICAgIFwicVwiOiBmb3JtYXRRdWFydGVyLFxuICAgIFwiUVwiOiBmb3JtYXRVbml4VGltZXN0YW1wLFxuICAgIFwic1wiOiBmb3JtYXRVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogZm9ybWF0U2Vjb25kcyxcbiAgICBcInVcIjogZm9ybWF0V2Vla2RheU51bWJlck1vbmRheSxcbiAgICBcIlVcIjogZm9ybWF0V2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogZm9ybWF0V2Vla051bWJlcklTTyxcbiAgICBcIndcIjogZm9ybWF0V2Vla2RheU51bWJlclN1bmRheSxcbiAgICBcIldcIjogZm9ybWF0V2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogbnVsbCxcbiAgICBcIlhcIjogbnVsbCxcbiAgICBcInlcIjogZm9ybWF0WWVhcixcbiAgICBcIllcIjogZm9ybWF0RnVsbFllYXIsXG4gICAgXCJaXCI6IGZvcm1hdFpvbmUsXG4gICAgXCIlXCI6IGZvcm1hdExpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgdmFyIHV0Y0Zvcm1hdHMgPSB7XG4gICAgXCJhXCI6IGZvcm1hdFVUQ1Nob3J0V2Vla2RheSxcbiAgICBcIkFcIjogZm9ybWF0VVRDV2Vla2RheSxcbiAgICBcImJcIjogZm9ybWF0VVRDU2hvcnRNb250aCxcbiAgICBcIkJcIjogZm9ybWF0VVRDTW9udGgsXG4gICAgXCJjXCI6IG51bGwsXG4gICAgXCJkXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgXCJlXCI6IGZvcm1hdFVUQ0RheU9mTW9udGgsXG4gICAgXCJmXCI6IGZvcm1hdFVUQ01pY3Jvc2Vjb25kcyxcbiAgICBcImdcIjogZm9ybWF0VVRDWWVhcklTTyxcbiAgICBcIkdcIjogZm9ybWF0VVRDRnVsbFllYXJJU08sXG4gICAgXCJIXCI6IGZvcm1hdFVUQ0hvdXIyNCxcbiAgICBcIklcIjogZm9ybWF0VVRDSG91cjEyLFxuICAgIFwialwiOiBmb3JtYXRVVENEYXlPZlllYXIsXG4gICAgXCJMXCI6IGZvcm1hdFVUQ01pbGxpc2Vjb25kcyxcbiAgICBcIm1cIjogZm9ybWF0VVRDTW9udGhOdW1iZXIsXG4gICAgXCJNXCI6IGZvcm1hdFVUQ01pbnV0ZXMsXG4gICAgXCJwXCI6IGZvcm1hdFVUQ1BlcmlvZCxcbiAgICBcInFcIjogZm9ybWF0VVRDUXVhcnRlcixcbiAgICBcIlFcIjogZm9ybWF0VW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogZm9ybWF0VW5peFRpbWVzdGFtcFNlY29uZHMsXG4gICAgXCJTXCI6IGZvcm1hdFVUQ1NlY29uZHMsXG4gICAgXCJ1XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXksXG4gICAgXCJWXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJJU08sXG4gICAgXCJ3XCI6IGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IGZvcm1hdFVUQ1dlZWtOdW1iZXJNb25kYXksXG4gICAgXCJ4XCI6IG51bGwsXG4gICAgXCJYXCI6IG51bGwsXG4gICAgXCJ5XCI6IGZvcm1hdFVUQ1llYXIsXG4gICAgXCJZXCI6IGZvcm1hdFVUQ0Z1bGxZZWFyLFxuICAgIFwiWlwiOiBmb3JtYXRVVENab25lLFxuICAgIFwiJVwiOiBmb3JtYXRMaXRlcmFsUGVyY2VudFxuICB9O1xuXG4gIHZhciBwYXJzZXMgPSB7XG4gICAgXCJhXCI6IHBhcnNlU2hvcnRXZWVrZGF5LFxuICAgIFwiQVwiOiBwYXJzZVdlZWtkYXksXG4gICAgXCJiXCI6IHBhcnNlU2hvcnRNb250aCxcbiAgICBcIkJcIjogcGFyc2VNb250aCxcbiAgICBcImNcIjogcGFyc2VMb2NhbGVEYXRlVGltZSxcbiAgICBcImRcIjogcGFyc2VEYXlPZk1vbnRoLFxuICAgIFwiZVwiOiBwYXJzZURheU9mTW9udGgsXG4gICAgXCJmXCI6IHBhcnNlTWljcm9zZWNvbmRzLFxuICAgIFwiZ1wiOiBwYXJzZVllYXIsXG4gICAgXCJHXCI6IHBhcnNlRnVsbFllYXIsXG4gICAgXCJIXCI6IHBhcnNlSG91cjI0LFxuICAgIFwiSVwiOiBwYXJzZUhvdXIyNCxcbiAgICBcImpcIjogcGFyc2VEYXlPZlllYXIsXG4gICAgXCJMXCI6IHBhcnNlTWlsbGlzZWNvbmRzLFxuICAgIFwibVwiOiBwYXJzZU1vbnRoTnVtYmVyLFxuICAgIFwiTVwiOiBwYXJzZU1pbnV0ZXMsXG4gICAgXCJwXCI6IHBhcnNlUGVyaW9kLFxuICAgIFwicVwiOiBwYXJzZVF1YXJ0ZXIsXG4gICAgXCJRXCI6IHBhcnNlVW5peFRpbWVzdGFtcCxcbiAgICBcInNcIjogcGFyc2VVbml4VGltZXN0YW1wU2Vjb25kcyxcbiAgICBcIlNcIjogcGFyc2VTZWNvbmRzLFxuICAgIFwidVwiOiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXksXG4gICAgXCJVXCI6IHBhcnNlV2Vla051bWJlclN1bmRheSxcbiAgICBcIlZcIjogcGFyc2VXZWVrTnVtYmVySVNPLFxuICAgIFwid1wiOiBwYXJzZVdlZWtkYXlOdW1iZXJTdW5kYXksXG4gICAgXCJXXCI6IHBhcnNlV2Vla051bWJlck1vbmRheSxcbiAgICBcInhcIjogcGFyc2VMb2NhbGVEYXRlLFxuICAgIFwiWFwiOiBwYXJzZUxvY2FsZVRpbWUsXG4gICAgXCJ5XCI6IHBhcnNlWWVhcixcbiAgICBcIllcIjogcGFyc2VGdWxsWWVhcixcbiAgICBcIlpcIjogcGFyc2Vab25lLFxuICAgIFwiJVwiOiBwYXJzZUxpdGVyYWxQZXJjZW50XG4gIH07XG5cbiAgLy8gVGhlc2UgcmVjdXJzaXZlIGRpcmVjdGl2ZSBkZWZpbml0aW9ucyBtdXN0IGJlIGRlZmVycmVkLlxuICBmb3JtYXRzLnggPSBuZXdGb3JtYXQobG9jYWxlX2RhdGUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLlggPSBuZXdGb3JtYXQobG9jYWxlX3RpbWUsIGZvcm1hdHMpO1xuICBmb3JtYXRzLmMgPSBuZXdGb3JtYXQobG9jYWxlX2RhdGVUaW1lLCBmb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy54ID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5YID0gbmV3Rm9ybWF0KGxvY2FsZV90aW1lLCB1dGNGb3JtYXRzKTtcbiAgdXRjRm9ybWF0cy5jID0gbmV3Rm9ybWF0KGxvY2FsZV9kYXRlVGltZSwgdXRjRm9ybWF0cyk7XG5cbiAgZnVuY3Rpb24gbmV3Rm9ybWF0KHNwZWNpZmllciwgZm9ybWF0cykge1xuICAgIHJldHVybiBmdW5jdGlvbihkYXRlKSB7XG4gICAgICB2YXIgc3RyaW5nID0gW10sXG4gICAgICAgICAgaSA9IC0xLFxuICAgICAgICAgIGogPSAwLFxuICAgICAgICAgIG4gPSBzcGVjaWZpZXIubGVuZ3RoLFxuICAgICAgICAgIGMsXG4gICAgICAgICAgcGFkLFxuICAgICAgICAgIGZvcm1hdDtcblxuICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSBkYXRlID0gbmV3IERhdGUoK2RhdGUpO1xuXG4gICAgICB3aGlsZSAoKytpIDwgbikge1xuICAgICAgICBpZiAoc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSkgPT09IDM3KSB7XG4gICAgICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgICAgICBpZiAoKHBhZCA9IHBhZHNbYyA9IHNwZWNpZmllci5jaGFyQXQoKytpKV0pICE9IG51bGwpIGMgPSBzcGVjaWZpZXIuY2hhckF0KCsraSk7XG4gICAgICAgICAgZWxzZSBwYWQgPSBjID09PSBcImVcIiA/IFwiIFwiIDogXCIwXCI7XG4gICAgICAgICAgaWYgKGZvcm1hdCA9IGZvcm1hdHNbY10pIGMgPSBmb3JtYXQoZGF0ZSwgcGFkKTtcbiAgICAgICAgICBzdHJpbmcucHVzaChjKTtcbiAgICAgICAgICBqID0gaSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc3RyaW5nLnB1c2goc3BlY2lmaWVyLnNsaWNlKGosIGkpKTtcbiAgICAgIHJldHVybiBzdHJpbmcuam9pbihcIlwiKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbmV3UGFyc2Uoc3BlY2lmaWVyLCBaKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgdmFyIGQgPSBuZXdEYXRlKDE5MDAsIHVuZGVmaW5lZCwgMSksXG4gICAgICAgICAgaSA9IHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nICs9IFwiXCIsIDApLFxuICAgICAgICAgIHdlZWssIGRheTtcbiAgICAgIGlmIChpICE9IHN0cmluZy5sZW5ndGgpIHJldHVybiBudWxsO1xuXG4gICAgICAvLyBJZiBhIFVOSVggdGltZXN0YW1wIGlzIHNwZWNpZmllZCwgcmV0dXJuIGl0LlxuICAgICAgaWYgKFwiUVwiIGluIGQpIHJldHVybiBuZXcgRGF0ZShkLlEpO1xuICAgICAgaWYgKFwic1wiIGluIGQpIHJldHVybiBuZXcgRGF0ZShkLnMgKiAxMDAwICsgKFwiTFwiIGluIGQgPyBkLkwgOiAwKSk7XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgdXRjUGFyc2UsIG5ldmVyIHVzZSB0aGUgbG9jYWwgdGltZXpvbmUuXG4gICAgICBpZiAoWiAmJiAhKFwiWlwiIGluIGQpKSBkLlogPSAwO1xuXG4gICAgICAvLyBUaGUgYW0tcG0gZmxhZyBpcyAwIGZvciBBTSwgYW5kIDEgZm9yIFBNLlxuICAgICAgaWYgKFwicFwiIGluIGQpIGQuSCA9IGQuSCAlIDEyICsgZC5wICogMTI7XG5cbiAgICAgIC8vIElmIHRoZSBtb250aCB3YXMgbm90IHNwZWNpZmllZCwgaW5oZXJpdCBmcm9tIHRoZSBxdWFydGVyLlxuICAgICAgaWYgKGQubSA9PT0gdW5kZWZpbmVkKSBkLm0gPSBcInFcIiBpbiBkID8gZC5xIDogMDtcblxuICAgICAgLy8gQ29udmVydCBkYXktb2Ytd2VlayBhbmQgd2Vlay1vZi15ZWFyIHRvIGRheS1vZi15ZWFyLlxuICAgICAgaWYgKFwiVlwiIGluIGQpIHtcbiAgICAgICAgaWYgKGQuViA8IDEgfHwgZC5WID4gNTMpIHJldHVybiBudWxsO1xuICAgICAgICBpZiAoIShcIndcIiBpbiBkKSkgZC53ID0gMTtcbiAgICAgICAgaWYgKFwiWlwiIGluIGQpIHtcbiAgICAgICAgICB3ZWVrID0gdXRjRGF0ZShuZXdEYXRlKGQueSwgMCwgMSkpLCBkYXkgPSB3ZWVrLmdldFVUQ0RheSgpO1xuICAgICAgICAgIHdlZWsgPSBkYXkgPiA0IHx8IGRheSA9PT0gMCA/IHV0Y01vbmRheS5jZWlsKHdlZWspIDogdXRjTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB1dGNEYXkub2Zmc2V0KHdlZWssIChkLlYgLSAxKSAqIDcpO1xuICAgICAgICAgIGQueSA9IHdlZWsuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgICBkLm0gPSB3ZWVrLmdldFVUQ01vbnRoKCk7XG4gICAgICAgICAgZC5kID0gd2Vlay5nZXRVVENEYXRlKCkgKyAoZC53ICsgNikgJSA3O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlZWsgPSBsb2NhbERhdGUobmV3RGF0ZShkLnksIDAsIDEpKSwgZGF5ID0gd2Vlay5nZXREYXkoKTtcbiAgICAgICAgICB3ZWVrID0gZGF5ID4gNCB8fCBkYXkgPT09IDAgPyB0aW1lTW9uZGF5LmNlaWwod2VlaykgOiB0aW1lTW9uZGF5KHdlZWspO1xuICAgICAgICAgIHdlZWsgPSB0aW1lRGF5Lm9mZnNldCh3ZWVrLCAoZC5WIC0gMSkgKiA3KTtcbiAgICAgICAgICBkLnkgPSB3ZWVrLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgZC5tID0gd2Vlay5nZXRNb250aCgpO1xuICAgICAgICAgIGQuZCA9IHdlZWsuZ2V0RGF0ZSgpICsgKGQudyArIDYpICUgNztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcIldcIiBpbiBkIHx8IFwiVVwiIGluIGQpIHtcbiAgICAgICAgaWYgKCEoXCJ3XCIgaW4gZCkpIGQudyA9IFwidVwiIGluIGQgPyBkLnUgJSA3IDogXCJXXCIgaW4gZCA/IDEgOiAwO1xuICAgICAgICBkYXkgPSBcIlpcIiBpbiBkID8gdXRjRGF0ZShuZXdEYXRlKGQueSwgMCwgMSkpLmdldFVUQ0RheSgpIDogbG9jYWxEYXRlKG5ld0RhdGUoZC55LCAwLCAxKSkuZ2V0RGF5KCk7XG4gICAgICAgIGQubSA9IDA7XG4gICAgICAgIGQuZCA9IFwiV1wiIGluIGQgPyAoZC53ICsgNikgJSA3ICsgZC5XICogNyAtIChkYXkgKyA1KSAlIDcgOiBkLncgKyBkLlUgKiA3IC0gKGRheSArIDYpICUgNztcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYSB0aW1lIHpvbmUgaXMgc3BlY2lmaWVkLCBhbGwgZmllbGRzIGFyZSBpbnRlcnByZXRlZCBhcyBVVEMgYW5kIHRoZW5cbiAgICAgIC8vIG9mZnNldCBhY2NvcmRpbmcgdG8gdGhlIHNwZWNpZmllZCB0aW1lIHpvbmUuXG4gICAgICBpZiAoXCJaXCIgaW4gZCkge1xuICAgICAgICBkLkggKz0gZC5aIC8gMTAwIHwgMDtcbiAgICAgICAgZC5NICs9IGQuWiAlIDEwMDtcbiAgICAgICAgcmV0dXJuIHV0Y0RhdGUoZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgYWxsIGZpZWxkcyBhcmUgaW4gbG9jYWwgdGltZS5cbiAgICAgIHJldHVybiBsb2NhbERhdGUoZCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU3BlY2lmaWVyKGQsIHNwZWNpZmllciwgc3RyaW5nLCBqKSB7XG4gICAgdmFyIGkgPSAwLFxuICAgICAgICBuID0gc3BlY2lmaWVyLmxlbmd0aCxcbiAgICAgICAgbSA9IHN0cmluZy5sZW5ndGgsXG4gICAgICAgIGMsXG4gICAgICAgIHBhcnNlO1xuXG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICBpZiAoaiA+PSBtKSByZXR1cm4gLTE7XG4gICAgICBjID0gc3BlY2lmaWVyLmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgIGlmIChjID09PSAzNykge1xuICAgICAgICBjID0gc3BlY2lmaWVyLmNoYXJBdChpKyspO1xuICAgICAgICBwYXJzZSA9IHBhcnNlc1tjIGluIHBhZHMgPyBzcGVjaWZpZXIuY2hhckF0KGkrKykgOiBjXTtcbiAgICAgICAgaWYgKCFwYXJzZSB8fCAoKGogPSBwYXJzZShkLCBzdHJpbmcsIGopKSA8IDApKSByZXR1cm4gLTE7XG4gICAgICB9IGVsc2UgaWYgKGMgIT0gc3RyaW5nLmNoYXJDb2RlQXQoaisrKSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGo7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVBlcmlvZChkLCBzdHJpbmcsIGkpIHtcbiAgICB2YXIgbiA9IHBlcmlvZFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLnAgPSBwZXJpb2RMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2hvcnRXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gc2hvcnRXZWVrZGF5UmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQudyA9IHNob3J0V2Vla2RheUxvb2t1cC5nZXQoblswXS50b0xvd2VyQ2FzZSgpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGQsIHN0cmluZywgaSkge1xuICAgIHZhciBuID0gd2Vla2RheVJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLncgPSB3ZWVrZGF5TG9va3VwLmdldChuWzBdLnRvTG93ZXJDYXNlKCkpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNob3J0TW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBzaG9ydE1vbnRoUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICAgIHJldHVybiBuID8gKGQubSA9IHNob3J0TW9udGhMb29rdXAuZ2V0KG5bMF0udG9Mb3dlckNhc2UoKSksIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gICAgdmFyIG4gPSBtb250aFJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgICByZXR1cm4gbiA/IChkLm0gPSBtb250aExvb2t1cC5nZXQoblswXS50b0xvd2VyQ2FzZSgpKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX2RhdGVUaW1lLCBzdHJpbmcsIGkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VMb2NhbGVEYXRlKGQsIHN0cmluZywgaSkge1xuICAgIHJldHVybiBwYXJzZVNwZWNpZmllcihkLCBsb2NhbGVfZGF0ZSwgc3RyaW5nLCBpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTG9jYWxlVGltZShkLCBzdHJpbmcsIGkpIHtcbiAgICByZXR1cm4gcGFyc2VTcGVjaWZpZXIoZCwgbG9jYWxlX3RpbWUsIHN0cmluZywgaSk7XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfc2hvcnRXZWVrZGF5c1tkLmdldERheSgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFdlZWtkYXkoZCkge1xuICAgIHJldHVybiBsb2NhbGVfd2Vla2RheXNbZC5nZXREYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRTaG9ydE1vbnRoKGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0TW9udGhzW2QuZ2V0TW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9tb250aHNbZC5nZXRNb250aCgpXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZvcm1hdFBlcmlvZChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9wZXJpb2RzWysoZC5nZXRIb3VycygpID49IDEyKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRRdWFydGVyKGQpIHtcbiAgICByZXR1cm4gMSArIH5+KGQuZ2V0TW9udGgoKSAvIDMpO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDU2hvcnRXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3Nob3J0V2Vla2RheXNbZC5nZXRVVENEYXkoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENXZWVrZGF5KGQpIHtcbiAgICByZXR1cm4gbG9jYWxlX3dlZWtkYXlzW2QuZ2V0VVRDRGF5KCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDU2hvcnRNb250aChkKSB7XG4gICAgcmV0dXJuIGxvY2FsZV9zaG9ydE1vbnRoc1tkLmdldFVUQ01vbnRoKCldO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDTW9udGgoZCkge1xuICAgIHJldHVybiBsb2NhbGVfbW9udGhzW2QuZ2V0VVRDTW9udGgoKV07XG4gIH1cblxuICBmdW5jdGlvbiBmb3JtYXRVVENQZXJpb2QoZCkge1xuICAgIHJldHVybiBsb2NhbGVfcGVyaW9kc1srKGQuZ2V0VVRDSG91cnMoKSA+PSAxMildO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9ybWF0VVRDUXVhcnRlcihkKSB7XG4gICAgcmV0dXJuIDEgKyB+fihkLmdldFVUQ01vbnRoKCkgLyAzKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0OiBmdW5jdGlvbihzcGVjaWZpZXIpIHtcbiAgICAgIHZhciBmID0gbmV3Rm9ybWF0KHNwZWNpZmllciArPSBcIlwiLCBmb3JtYXRzKTtcbiAgICAgIGYudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBmO1xuICAgIH0sXG4gICAgcGFyc2U6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIHAgPSBuZXdQYXJzZShzcGVjaWZpZXIgKz0gXCJcIiwgZmFsc2UpO1xuICAgICAgcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIHA7XG4gICAgfSxcbiAgICB1dGNGb3JtYXQ6IGZ1bmN0aW9uKHNwZWNpZmllcikge1xuICAgICAgdmFyIGYgPSBuZXdGb3JtYXQoc3BlY2lmaWVyICs9IFwiXCIsIHV0Y0Zvcm1hdHMpO1xuICAgICAgZi50b1N0cmluZyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc3BlY2lmaWVyOyB9O1xuICAgICAgcmV0dXJuIGY7XG4gICAgfSxcbiAgICB1dGNQYXJzZTogZnVuY3Rpb24oc3BlY2lmaWVyKSB7XG4gICAgICB2YXIgcCA9IG5ld1BhcnNlKHNwZWNpZmllciArPSBcIlwiLCB0cnVlKTtcbiAgICAgIHAudG9TdHJpbmcgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHNwZWNpZmllcjsgfTtcbiAgICAgIHJldHVybiBwO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHBhZHMgPSB7XCItXCI6IFwiXCIsIFwiX1wiOiBcIiBcIiwgXCIwXCI6IFwiMFwifSxcbiAgICBudW1iZXJSZSA9IC9eXFxzKlxcZCsvLCAvLyBub3RlOiBpZ25vcmVzIG5leHQgZGlyZWN0aXZlXG4gICAgcGVyY2VudFJlID0gL14lLyxcbiAgICByZXF1b3RlUmUgPSAvW1xcXFxeJCorP3xbXFxdKCkue31dL2c7XG5cbmZ1bmN0aW9uIHBhZCh2YWx1ZSwgZmlsbCwgd2lkdGgpIHtcbiAgdmFyIHNpZ24gPSB2YWx1ZSA8IDAgPyBcIi1cIiA6IFwiXCIsXG4gICAgICBzdHJpbmcgPSAoc2lnbiA/IC12YWx1ZSA6IHZhbHVlKSArIFwiXCIsXG4gICAgICBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICByZXR1cm4gc2lnbiArIChsZW5ndGggPCB3aWR0aCA/IG5ldyBBcnJheSh3aWR0aCAtIGxlbmd0aCArIDEpLmpvaW4oZmlsbCkgKyBzdHJpbmcgOiBzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiByZXF1b3RlKHMpIHtcbiAgcmV0dXJuIHMucmVwbGFjZShyZXF1b3RlUmUsIFwiXFxcXCQmXCIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRSZShuYW1lcykge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIG5hbWVzLm1hcChyZXF1b3RlKS5qb2luKFwifFwiKSArIFwiKVwiLCBcImlcIik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExvb2t1cChuYW1lcykge1xuICByZXR1cm4gbmV3IE1hcChuYW1lcy5tYXAoKG5hbWUsIGkpID0+IFtuYW1lLnRvTG93ZXJDYXNlKCksIGldKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla2RheU51bWJlclN1bmRheShkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLncgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtkYXlOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDEpKTtcbiAgcmV0dXJuIG4gPyAoZC51ID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VXZWVrTnVtYmVyU3VuZGF5KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuVSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlV2Vla051bWJlcklTTyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlYgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVdlZWtOdW1iZXJNb25kYXkoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5XID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGdWxsWWVhcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNCkpO1xuICByZXR1cm4gbiA/IChkLnkgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC55ID0gK25bMF0gKyAoK25bMF0gPiA2OCA/IDE5MDAgOiAyMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVpvbmUoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gL14oWil8KFsrLV1cXGRcXGQpKD86Oj8oXFxkXFxkKSk/Ly5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLlogPSBuWzFdID8gMCA6IC0oblsyXSArIChuWzNdIHx8IFwiMDBcIikpLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlUXVhcnRlcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IChkLnEgPSBuWzBdICogMyAtIDMsIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNb250aE51bWJlcihkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLm0gPSBuWzBdIC0gMSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZURheU9mTW9udGgoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5kID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXlPZlllYXIoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDMpKTtcbiAgcmV0dXJuIG4gPyAoZC5tID0gMCwgZC5kID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VIb3VyMjQoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSwgaSArIDIpKTtcbiAgcmV0dXJuIG4gPyAoZC5IID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VNaW51dGVzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGksIGkgKyAyKSk7XG4gIHJldHVybiBuID8gKGQuTSA9ICtuWzBdLCBpICsgblswXS5sZW5ndGgpIDogLTE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMikpO1xuICByZXR1cm4gbiA/IChkLlMgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pbGxpc2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMykpO1xuICByZXR1cm4gbiA/IChkLkwgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1pY3Jvc2Vjb25kcyhkLCBzdHJpbmcsIGkpIHtcbiAgdmFyIG4gPSBudW1iZXJSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgNikpO1xuICByZXR1cm4gbiA/IChkLkwgPSBNYXRoLmZsb29yKG5bMF0gLyAxMDAwKSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZUxpdGVyYWxQZXJjZW50KGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IHBlcmNlbnRSZS5leGVjKHN0cmluZy5zbGljZShpLCBpICsgMSkpO1xuICByZXR1cm4gbiA/IGkgKyBuWzBdLmxlbmd0aCA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVVuaXhUaW1lc3RhbXAoZCwgc3RyaW5nLCBpKSB7XG4gIHZhciBuID0gbnVtYmVyUmUuZXhlYyhzdHJpbmcuc2xpY2UoaSkpO1xuICByZXR1cm4gbiA/IChkLlEgPSArblswXSwgaSArIG5bMF0ubGVuZ3RoKSA6IC0xO1xufVxuXG5mdW5jdGlvbiBwYXJzZVVuaXhUaW1lc3RhbXBTZWNvbmRzKGQsIHN0cmluZywgaSkge1xuICB2YXIgbiA9IG51bWJlclJlLmV4ZWMoc3RyaW5nLnNsaWNlKGkpKTtcbiAgcmV0dXJuIG4gPyAoZC5zID0gK25bMF0sIGkgKyBuWzBdLmxlbmd0aCkgOiAtMTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF5T2ZNb250aChkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXREYXRlKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyMjQoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0SG91cnMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIxMihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRIb3VycygpICUgMTIgfHwgMTIsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXlPZlllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKDEgKyB0aW1lRGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pbGxpc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNaWxsaXNlY29uZHMoKSwgcCwgMyk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pY3Jvc2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBmb3JtYXRNaWxsaXNlY29uZHMoZCwgcCkgKyBcIjAwMFwiO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRNb250aE51bWJlcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRNb250aCgpICsgMSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdE1pbnV0ZXMoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0TWludXRlcygpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U2Vjb25kcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRTZWNvbmRzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyTW9uZGF5KGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXkgPT09IDAgPyA3IDogZGF5O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVyU3VuZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh0aW1lU3VuZGF5LmNvdW50KHRpbWVZZWFyKGQpIC0gMSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBkSVNPKGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0RGF5KCk7XG4gIHJldHVybiAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHRpbWVUaHVyc2RheShkKSA6IHRpbWVUaHVyc2RheS5jZWlsKGQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrTnVtYmVySVNPKGQsIHApIHtcbiAgZCA9IGRJU08oZCk7XG4gIHJldHVybiBwYWQodGltZVRodXJzZGF5LmNvdW50KHRpbWVZZWFyKGQpLCBkKSArICh0aW1lWWVhcihkKS5nZXREYXkoKSA9PT0gNCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRXZWVrZGF5TnVtYmVyU3VuZGF5KGQpIHtcbiAgcmV0dXJuIGQuZ2V0RGF5KCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFdlZWtOdW1iZXJNb25kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHRpbWVNb25kYXkuY291bnQodGltZVllYXIoZCkgLSAxLCBkKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0RnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFllYXJJU08oZCwgcCkge1xuICBkID0gZElTTyhkKTtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAsIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRGdWxsWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRGdWxsWWVhcigpICUgMTAwMDAsIHAsIDQpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRGdWxsWWVhcklTTyhkLCBwKSB7XG4gIHZhciBkYXkgPSBkLmdldERheSgpO1xuICBkID0gKGRheSA+PSA0IHx8IGRheSA9PT0gMCkgPyB0aW1lVGh1cnNkYXkoZCkgOiB0aW1lVGh1cnNkYXkuY2VpbChkKTtcbiAgcmV0dXJuIHBhZChkLmdldEZ1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFpvbmUoZCkge1xuICB2YXIgeiA9IGQuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgcmV0dXJuICh6ID4gMCA/IFwiLVwiIDogKHogKj0gLTEsIFwiK1wiKSlcbiAgICAgICsgcGFkKHogLyA2MCB8IDAsIFwiMFwiLCAyKVxuICAgICAgKyBwYWQoeiAlIDYwLCBcIjBcIiwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0RheU9mTW9udGgoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRGF0ZSgpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDSG91cjI0KGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0hvdXJzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENIb3VyMTIoZCwgcCkge1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDRGF5T2ZZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZCgxICsgdXRjRGF5LmNvdW50KHV0Y1llYXIoZCksIGQpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWlsbGlzZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01pbGxpc2Vjb25kcygpLCBwLCAzKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWljcm9zZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIGZvcm1hdFVUQ01pbGxpc2Vjb25kcyhkLCBwKSArIFwiMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ01vbnRoTnVtYmVyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ01vbnRoKCkgKyAxLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDTWludXRlcyhkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENNaW51dGVzKCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENTZWNvbmRzKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ1NlY29uZHMoKSwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtkYXlOdW1iZXJNb25kYXkoZCkge1xuICB2YXIgZG93ID0gZC5nZXRVVENEYXkoKTtcbiAgcmV0dXJuIGRvdyA9PT0gMCA/IDcgOiBkb3c7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1dlZWtOdW1iZXJTdW5kYXkoZCwgcCkge1xuICByZXR1cm4gcGFkKHV0Y1N1bmRheS5jb3VudCh1dGNZZWFyKGQpIC0gMSwgZCksIHAsIDIpO1xufVxuXG5mdW5jdGlvbiBVVENkSVNPKGQpIHtcbiAgdmFyIGRheSA9IGQuZ2V0VVRDRGF5KCk7XG4gIHJldHVybiAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHV0Y1RodXJzZGF5KGQpIDogdXRjVGh1cnNkYXkuY2VpbChkKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla051bWJlcklTTyhkLCBwKSB7XG4gIGQgPSBVVENkSVNPKGQpO1xuICByZXR1cm4gcGFkKHV0Y1RodXJzZGF5LmNvdW50KHV0Y1llYXIoZCksIGQpICsgKHV0Y1llYXIoZCkuZ2V0VVRDRGF5KCkgPT09IDQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDV2Vla2RheU51bWJlclN1bmRheShkKSB7XG4gIHJldHVybiBkLmdldFVUQ0RheSgpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRVVENXZWVrTnVtYmVyTW9uZGF5KGQsIHApIHtcbiAgcmV0dXJuIHBhZCh1dGNNb25kYXkuY291bnQodXRjWWVhcihkKSAtIDEsIGQpLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDWWVhcihkLCBwKSB7XG4gIHJldHVybiBwYWQoZC5nZXRVVENGdWxsWWVhcigpICUgMTAwLCBwLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VVRDWWVhcklTTyhkLCBwKSB7XG4gIGQgPSBVVENkSVNPKGQpO1xuICByZXR1cm4gcGFkKGQuZ2V0VVRDRnVsbFllYXIoKSAlIDEwMCwgcCwgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0Z1bGxZZWFyKGQsIHApIHtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ0Z1bGxZZWFySVNPKGQsIHApIHtcbiAgdmFyIGRheSA9IGQuZ2V0VVRDRGF5KCk7XG4gIGQgPSAoZGF5ID49IDQgfHwgZGF5ID09PSAwKSA/IHV0Y1RodXJzZGF5KGQpIDogdXRjVGh1cnNkYXkuY2VpbChkKTtcbiAgcmV0dXJuIHBhZChkLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDAwMCwgcCwgNCk7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVUQ1pvbmUoKSB7XG4gIHJldHVybiBcIiswMDAwXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdExpdGVyYWxQZXJjZW50KCkge1xuICByZXR1cm4gXCIlXCI7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVuaXhUaW1lc3RhbXAoZCkge1xuICByZXR1cm4gK2Q7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVuaXhUaW1lc3RhbXBTZWNvbmRzKGQpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoK2QgLyAxMDAwKTtcbn1cbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuaW1wb3J0IHtkdXJhdGlvbkRheSwgZHVyYXRpb25NaW51dGV9IGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5cbnZhciBkYXkgPSBpbnRlcnZhbChcbiAgZGF0ZSA9PiBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApLFxuICAoZGF0ZSwgc3RlcCkgPT4gZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgc3RlcCksXG4gIChzdGFydCwgZW5kKSA9PiAoZW5kIC0gc3RhcnQgLSAoZW5kLmdldFRpbWV6b25lT2Zmc2V0KCkgLSBzdGFydC5nZXRUaW1lem9uZU9mZnNldCgpKSAqIGR1cmF0aW9uTWludXRlKSAvIGR1cmF0aW9uRGF5LFxuICBkYXRlID0+IGRhdGUuZ2V0RGF0ZSgpIC0gMVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZGF5O1xuZXhwb3J0IHZhciBkYXlzID0gZGF5LnJhbmdlO1xuIiwiZXhwb3J0IHZhciBkdXJhdGlvblNlY29uZCA9IDFlMztcbmV4cG9ydCB2YXIgZHVyYXRpb25NaW51dGUgPSA2ZTQ7XG5leHBvcnQgdmFyIGR1cmF0aW9uSG91ciA9IDM2ZTU7XG5leHBvcnQgdmFyIGR1cmF0aW9uRGF5ID0gODY0ZTU7XG5leHBvcnQgdmFyIGR1cmF0aW9uV2VlayA9IDYwNDhlNTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuaW1wb3J0IHtkdXJhdGlvbkhvdXIsIGR1cmF0aW9uTWludXRlLCBkdXJhdGlvblNlY29uZH0gZnJvbSBcIi4vZHVyYXRpb24uanNcIjtcblxudmFyIGhvdXIgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VGltZShkYXRlIC0gZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGUuZ2V0U2Vjb25kcygpICogZHVyYXRpb25TZWNvbmQgLSBkYXRlLmdldE1pbnV0ZXMoKSAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uSG91cik7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25Ib3VyO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRIb3VycygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGhvdXI7XG5leHBvcnQgdmFyIGhvdXJzID0gaG91ci5yYW5nZTtcbiIsImV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZUludGVydmFsXG59IGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZU1pbGxpc2Vjb25kLFxuICBtaWxsaXNlY29uZHMgYXMgdGltZU1pbGxpc2Vjb25kcyxcbiAgZGVmYXVsdCBhcyB1dGNNaWxsaXNlY29uZCxcbiAgbWlsbGlzZWNvbmRzIGFzIHV0Y01pbGxpc2Vjb25kc1xufSBmcm9tIFwiLi9taWxsaXNlY29uZC5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHRpbWVTZWNvbmQsXG4gIHNlY29uZHMgYXMgdGltZVNlY29uZHMsXG4gIGRlZmF1bHQgYXMgdXRjU2Vjb25kLFxuICBzZWNvbmRzIGFzIHV0Y1NlY29uZHNcbn0gZnJvbSBcIi4vc2Vjb25kLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZU1pbnV0ZSxcbiAgbWludXRlcyBhcyB0aW1lTWludXRlc1xufSBmcm9tIFwiLi9taW51dGUuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lSG91cixcbiAgaG91cnMgYXMgdGltZUhvdXJzXG59IGZyb20gXCIuL2hvdXIuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lRGF5LFxuICBkYXlzIGFzIHRpbWVEYXlzXG59IGZyb20gXCIuL2RheS5qc1wiO1xuXG5leHBvcnQge1xuICBzdW5kYXkgYXMgdGltZVdlZWssXG4gIHN1bmRheXMgYXMgdGltZVdlZWtzLFxuICBzdW5kYXkgYXMgdGltZVN1bmRheSxcbiAgc3VuZGF5cyBhcyB0aW1lU3VuZGF5cyxcbiAgbW9uZGF5IGFzIHRpbWVNb25kYXksXG4gIG1vbmRheXMgYXMgdGltZU1vbmRheXMsXG4gIHR1ZXNkYXkgYXMgdGltZVR1ZXNkYXksXG4gIHR1ZXNkYXlzIGFzIHRpbWVUdWVzZGF5cyxcbiAgd2VkbmVzZGF5IGFzIHRpbWVXZWRuZXNkYXksXG4gIHdlZG5lc2RheXMgYXMgdGltZVdlZG5lc2RheXMsXG4gIHRodXJzZGF5IGFzIHRpbWVUaHVyc2RheSxcbiAgdGh1cnNkYXlzIGFzIHRpbWVUaHVyc2RheXMsXG4gIGZyaWRheSBhcyB0aW1lRnJpZGF5LFxuICBmcmlkYXlzIGFzIHRpbWVGcmlkYXlzLFxuICBzYXR1cmRheSBhcyB0aW1lU2F0dXJkYXksXG4gIHNhdHVyZGF5cyBhcyB0aW1lU2F0dXJkYXlzXG59IGZyb20gXCIuL3dlZWsuanNcIjtcblxuZXhwb3J0IHtcbiAgZGVmYXVsdCBhcyB0aW1lTW9udGgsXG4gIG1vbnRocyBhcyB0aW1lTW9udGhzXG59IGZyb20gXCIuL21vbnRoLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdGltZVllYXIsXG4gIHllYXJzIGFzIHRpbWVZZWFyc1xufSBmcm9tIFwiLi95ZWFyLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjTWludXRlLFxuICB1dGNNaW51dGVzIGFzIHV0Y01pbnV0ZXNcbn0gZnJvbSBcIi4vdXRjTWludXRlLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjSG91cixcbiAgdXRjSG91cnMgYXMgdXRjSG91cnNcbn0gZnJvbSBcIi4vdXRjSG91ci5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y0RheSxcbiAgdXRjRGF5cyBhcyB1dGNEYXlzXG59IGZyb20gXCIuL3V0Y0RheS5qc1wiO1xuXG5leHBvcnQge1xuICB1dGNTdW5kYXkgYXMgdXRjV2VlayxcbiAgdXRjU3VuZGF5cyBhcyB1dGNXZWVrcyxcbiAgdXRjU3VuZGF5IGFzIHV0Y1N1bmRheSxcbiAgdXRjU3VuZGF5cyBhcyB1dGNTdW5kYXlzLFxuICB1dGNNb25kYXkgYXMgdXRjTW9uZGF5LFxuICB1dGNNb25kYXlzIGFzIHV0Y01vbmRheXMsXG4gIHV0Y1R1ZXNkYXkgYXMgdXRjVHVlc2RheSxcbiAgdXRjVHVlc2RheXMgYXMgdXRjVHVlc2RheXMsXG4gIHV0Y1dlZG5lc2RheSBhcyB1dGNXZWRuZXNkYXksXG4gIHV0Y1dlZG5lc2RheXMgYXMgdXRjV2VkbmVzZGF5cyxcbiAgdXRjVGh1cnNkYXkgYXMgdXRjVGh1cnNkYXksXG4gIHV0Y1RodXJzZGF5cyBhcyB1dGNUaHVyc2RheXMsXG4gIHV0Y0ZyaWRheSBhcyB1dGNGcmlkYXksXG4gIHV0Y0ZyaWRheXMgYXMgdXRjRnJpZGF5cyxcbiAgdXRjU2F0dXJkYXkgYXMgdXRjU2F0dXJkYXksXG4gIHV0Y1NhdHVyZGF5cyBhcyB1dGNTYXR1cmRheXNcbn0gZnJvbSBcIi4vdXRjV2Vlay5qc1wiO1xuXG5leHBvcnQge1xuICBkZWZhdWx0IGFzIHV0Y01vbnRoLFxuICB1dGNNb250aHMgYXMgdXRjTW9udGhzXG59IGZyb20gXCIuL3V0Y01vbnRoLmpzXCI7XG5cbmV4cG9ydCB7XG4gIGRlZmF1bHQgYXMgdXRjWWVhcixcbiAgdXRjWWVhcnMgYXMgdXRjWWVhcnNcbn0gZnJvbSBcIi4vdXRjWWVhci5qc1wiO1xuIiwidmFyIHQwID0gbmV3IERhdGUsXG4gICAgdDEgPSBuZXcgRGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3SW50ZXJ2YWwoZmxvb3JpLCBvZmZzZXRpLCBjb3VudCwgZmllbGQpIHtcblxuICBmdW5jdGlvbiBpbnRlcnZhbChkYXRlKSB7XG4gICAgcmV0dXJuIGZsb29yaShkYXRlID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCA/IG5ldyBEYXRlIDogbmV3IERhdGUoK2RhdGUpKSwgZGF0ZTtcbiAgfVxuXG4gIGludGVydmFsLmZsb29yID0gZnVuY3Rpb24oZGF0ZSkge1xuICAgIHJldHVybiBmbG9vcmkoZGF0ZSA9IG5ldyBEYXRlKCtkYXRlKSksIGRhdGU7XG4gIH07XG5cbiAgaW50ZXJ2YWwuY2VpbCA9IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICByZXR1cm4gZmxvb3JpKGRhdGUgPSBuZXcgRGF0ZShkYXRlIC0gMSkpLCBvZmZzZXRpKGRhdGUsIDEpLCBmbG9vcmkoZGF0ZSksIGRhdGU7XG4gIH07XG5cbiAgaW50ZXJ2YWwucm91bmQgPSBmdW5jdGlvbihkYXRlKSB7XG4gICAgdmFyIGQwID0gaW50ZXJ2YWwoZGF0ZSksXG4gICAgICAgIGQxID0gaW50ZXJ2YWwuY2VpbChkYXRlKTtcbiAgICByZXR1cm4gZGF0ZSAtIGQwIDwgZDEgLSBkYXRlID8gZDAgOiBkMTtcbiAgfTtcblxuICBpbnRlcnZhbC5vZmZzZXQgPSBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgcmV0dXJuIG9mZnNldGkoZGF0ZSA9IG5ldyBEYXRlKCtkYXRlKSwgc3RlcCA9PSBudWxsID8gMSA6IE1hdGguZmxvb3Ioc3RlcCkpLCBkYXRlO1xuICB9O1xuXG4gIGludGVydmFsLnJhbmdlID0gZnVuY3Rpb24oc3RhcnQsIHN0b3AsIHN0ZXApIHtcbiAgICB2YXIgcmFuZ2UgPSBbXSwgcHJldmlvdXM7XG4gICAgc3RhcnQgPSBpbnRlcnZhbC5jZWlsKHN0YXJ0KTtcbiAgICBzdGVwID0gc3RlcCA9PSBudWxsID8gMSA6IE1hdGguZmxvb3Ioc3RlcCk7XG4gICAgaWYgKCEoc3RhcnQgPCBzdG9wKSB8fCAhKHN0ZXAgPiAwKSkgcmV0dXJuIHJhbmdlOyAvLyBhbHNvIGhhbmRsZXMgSW52YWxpZCBEYXRlXG4gICAgZG8gcmFuZ2UucHVzaChwcmV2aW91cyA9IG5ldyBEYXRlKCtzdGFydCkpLCBvZmZzZXRpKHN0YXJ0LCBzdGVwKSwgZmxvb3JpKHN0YXJ0KTtcbiAgICB3aGlsZSAocHJldmlvdXMgPCBzdGFydCAmJiBzdGFydCA8IHN0b3ApO1xuICAgIHJldHVybiByYW5nZTtcbiAgfTtcblxuICBpbnRlcnZhbC5maWx0ZXIgPSBmdW5jdGlvbih0ZXN0KSB7XG4gICAgcmV0dXJuIG5ld0ludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgIGlmIChkYXRlID49IGRhdGUpIHdoaWxlIChmbG9vcmkoZGF0ZSksICF0ZXN0KGRhdGUpKSBkYXRlLnNldFRpbWUoZGF0ZSAtIDEpO1xuICAgIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICAgIGlmIChkYXRlID49IGRhdGUpIHtcbiAgICAgICAgaWYgKHN0ZXAgPCAwKSB3aGlsZSAoKytzdGVwIDw9IDApIHtcbiAgICAgICAgICB3aGlsZSAob2Zmc2V0aShkYXRlLCAtMSksICF0ZXN0KGRhdGUpKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG4gICAgICAgIH0gZWxzZSB3aGlsZSAoLS1zdGVwID49IDApIHtcbiAgICAgICAgICB3aGlsZSAob2Zmc2V0aShkYXRlLCArMSksICF0ZXN0KGRhdGUpKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBpZiAoY291bnQpIHtcbiAgICBpbnRlcnZhbC5jb3VudCA9IGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICAgIHQwLnNldFRpbWUoK3N0YXJ0KSwgdDEuc2V0VGltZSgrZW5kKTtcbiAgICAgIGZsb29yaSh0MCksIGZsb29yaSh0MSk7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihjb3VudCh0MCwgdDEpKTtcbiAgICB9O1xuXG4gICAgaW50ZXJ2YWwuZXZlcnkgPSBmdW5jdGlvbihzdGVwKSB7XG4gICAgICBzdGVwID0gTWF0aC5mbG9vcihzdGVwKTtcbiAgICAgIHJldHVybiAhaXNGaW5pdGUoc3RlcCkgfHwgIShzdGVwID4gMCkgPyBudWxsXG4gICAgICAgICAgOiAhKHN0ZXAgPiAxKSA/IGludGVydmFsXG4gICAgICAgICAgOiBpbnRlcnZhbC5maWx0ZXIoZmllbGRcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbihkKSB7IHJldHVybiBmaWVsZChkKSAlIHN0ZXAgPT09IDA7IH1cbiAgICAgICAgICAgICAgOiBmdW5jdGlvbihkKSB7IHJldHVybiBpbnRlcnZhbC5jb3VudCgwLCBkKSAlIHN0ZXAgPT09IDA7IH0pO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gaW50ZXJ2YWw7XG59XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcblxudmFyIG1pbGxpc2Vjb25kID0gaW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIC8vIG5vb3Bcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQgLSBzdGFydDtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG5taWxsaXNlY29uZC5ldmVyeSA9IGZ1bmN0aW9uKGspIHtcbiAgayA9IE1hdGguZmxvb3Ioayk7XG4gIGlmICghaXNGaW5pdGUoaykgfHwgIShrID4gMCkpIHJldHVybiBudWxsO1xuICBpZiAoIShrID4gMSkpIHJldHVybiBtaWxsaXNlY29uZDtcbiAgcmV0dXJuIGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldFRpbWUoTWF0aC5mbG9vcihkYXRlIC8gaykgKiBrKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBrKTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gaztcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWxsaXNlY29uZDtcbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmQucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCB7ZHVyYXRpb25NaW51dGUsIGR1cmF0aW9uU2Vjb25kfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG52YXIgbWludXRlID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFRpbWUoZGF0ZSAtIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlLmdldFNlY29uZHMoKSAqIGR1cmF0aW9uU2Vjb25kKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRUaW1lKCtkYXRlICsgc3RlcCAqIGR1cmF0aW9uTWludXRlKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbk1pbnV0ZTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1pbnV0ZTtcbmV4cG9ydCB2YXIgbWludXRlcyA9IG1pbnV0ZS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuXG52YXIgbW9udGggPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0RGF0ZSgxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRNb250aChkYXRlLmdldE1vbnRoKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRNb250aCgpIC0gc3RhcnQuZ2V0TW9udGgoKSArIChlbmQuZ2V0RnVsbFllYXIoKSAtIHN0YXJ0LmdldEZ1bGxZZWFyKCkpICogMTI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1vbnRoKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9udGg7XG5leHBvcnQgdmFyIG1vbnRocyA9IG1vbnRoLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQge2R1cmF0aW9uU2Vjb25kfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG52YXIgc2Vjb25kID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFRpbWUoZGF0ZSAtIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25TZWNvbmQpO1xufSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICByZXR1cm4gKGVuZCAtIHN0YXJ0KSAvIGR1cmF0aW9uU2Vjb25kO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENTZWNvbmRzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2Vjb25kO1xuZXhwb3J0IHZhciBzZWNvbmRzID0gc2Vjb25kLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQge2R1cmF0aW9uRGF5fSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG52YXIgdXRjRGF5ID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkRheTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0VVRDRGF0ZSgpIC0gMTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNEYXk7XG5leHBvcnQgdmFyIHV0Y0RheXMgPSB1dGNEYXkucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcbmltcG9ydCB7ZHVyYXRpb25Ib3VyfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG52YXIgdXRjSG91ciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRVVENNaW51dGVzKDAsIDAsIDApO1xufSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICBkYXRlLnNldFRpbWUoK2RhdGUgKyBzdGVwICogZHVyYXRpb25Ib3VyKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIChlbmQgLSBzdGFydCkgLyBkdXJhdGlvbkhvdXI7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0hvdXJzKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdXRjSG91cjtcbmV4cG9ydCB2YXIgdXRjSG91cnMgPSB1dGNIb3VyLnJhbmdlO1xuIiwiaW1wb3J0IGludGVydmFsIGZyb20gXCIuL2ludGVydmFsLmpzXCI7XG5pbXBvcnQge2R1cmF0aW9uTWludXRlfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG52YXIgdXRjTWludXRlID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ1NlY29uZHMoMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VGltZSgrZGF0ZSArIHN0ZXAgKiBkdXJhdGlvbk1pbnV0ZSk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25NaW51dGU7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB1dGNNaW51dGU7XG5leHBvcnQgdmFyIHV0Y01pbnV0ZXMgPSB1dGNNaW51dGUucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcblxudmFyIHV0Y01vbnRoID0gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICBkYXRlLnNldFVUQ0RhdGUoMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDTW9udGgoZGF0ZS5nZXRVVENNb250aCgpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0VVRDTW9udGgoKSAtIHN0YXJ0LmdldFVUQ01vbnRoKCkgKyAoZW5kLmdldFVUQ0Z1bGxZZWFyKCkgLSBzdGFydC5nZXRVVENGdWxsWWVhcigpKSAqIDEyO1xufSwgZnVuY3Rpb24oZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRVVENNb250aCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y01vbnRoO1xuZXhwb3J0IHZhciB1dGNNb250aHMgPSB1dGNNb250aC5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuaW1wb3J0IHtkdXJhdGlvbldlZWt9IGZyb20gXCIuL2R1cmF0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIHV0Y1dlZWtkYXkoaSkge1xuICByZXR1cm4gaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIChkYXRlLmdldFVUQ0RheSgpICsgNyAtIGkpICUgNyk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIHN0ZXAgKiA3KTtcbiAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiAoZW5kIC0gc3RhcnQpIC8gZHVyYXRpb25XZWVrO1xuICB9KTtcbn1cblxuZXhwb3J0IHZhciB1dGNTdW5kYXkgPSB1dGNXZWVrZGF5KDApO1xuZXhwb3J0IHZhciB1dGNNb25kYXkgPSB1dGNXZWVrZGF5KDEpO1xuZXhwb3J0IHZhciB1dGNUdWVzZGF5ID0gdXRjV2Vla2RheSgyKTtcbmV4cG9ydCB2YXIgdXRjV2VkbmVzZGF5ID0gdXRjV2Vla2RheSgzKTtcbmV4cG9ydCB2YXIgdXRjVGh1cnNkYXkgPSB1dGNXZWVrZGF5KDQpO1xuZXhwb3J0IHZhciB1dGNGcmlkYXkgPSB1dGNXZWVrZGF5KDUpO1xuZXhwb3J0IHZhciB1dGNTYXR1cmRheSA9IHV0Y1dlZWtkYXkoNik7XG5cbmV4cG9ydCB2YXIgdXRjU3VuZGF5cyA9IHV0Y1N1bmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjTW9uZGF5cyA9IHV0Y01vbmRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjVHVlc2RheXMgPSB1dGNUdWVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNXZWRuZXNkYXlzID0gdXRjV2VkbmVzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB1dGNUaHVyc2RheXMgPSB1dGNUaHVyc2RheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjRnJpZGF5cyA9IHV0Y0ZyaWRheS5yYW5nZTtcbmV4cG9ydCB2YXIgdXRjU2F0dXJkYXlzID0gdXRjU2F0dXJkYXkucmFuZ2U7XG4iLCJpbXBvcnQgaW50ZXJ2YWwgZnJvbSBcIi4vaW50ZXJ2YWwuanNcIjtcblxudmFyIHV0Y1llYXIgPSBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG59LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCk7XG59LCBmdW5jdGlvbihzdGFydCwgZW5kKSB7XG4gIHJldHVybiBlbmQuZ2V0VVRDRnVsbFllYXIoKSAtIHN0YXJ0LmdldFVUQ0Z1bGxZZWFyKCk7XG59LCBmdW5jdGlvbihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG59KTtcblxuLy8gQW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIGZvciB0aGlzIHNpbXBsZSBjYXNlLlxudXRjWWVhci5ldmVyeSA9IGZ1bmN0aW9uKGspIHtcbiAgcmV0dXJuICFpc0Zpbml0ZShrID0gTWF0aC5mbG9vcihrKSkgfHwgIShrID4gMCkgPyBudWxsIDogaW50ZXJ2YWwoZnVuY3Rpb24oZGF0ZSkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoTWF0aC5mbG9vcihkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgLyBrKSAqIGspO1xuICAgIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gICAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgfSwgZnVuY3Rpb24oZGF0ZSwgc3RlcCkge1xuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgc3RlcCAqIGspO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHV0Y1llYXI7XG5leHBvcnQgdmFyIHV0Y1llYXJzID0gdXRjWWVhci5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuaW1wb3J0IHtkdXJhdGlvbk1pbnV0ZSwgZHVyYXRpb25XZWVrfSBmcm9tIFwiLi9kdXJhdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiB3ZWVrZGF5KGkpIHtcbiAgcmV0dXJuIGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAoZGF0ZS5nZXREYXkoKSArIDcgLSBpKSAlIDcpO1xuICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIH0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBzdGVwICogNyk7XG4gIH0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gKGVuZCAtIHN0YXJ0IC0gKGVuZC5nZXRUaW1lem9uZU9mZnNldCgpIC0gc3RhcnQuZ2V0VGltZXpvbmVPZmZzZXQoKSkgKiBkdXJhdGlvbk1pbnV0ZSkgLyBkdXJhdGlvbldlZWs7XG4gIH0pO1xufVxuXG5leHBvcnQgdmFyIHN1bmRheSA9IHdlZWtkYXkoMCk7XG5leHBvcnQgdmFyIG1vbmRheSA9IHdlZWtkYXkoMSk7XG5leHBvcnQgdmFyIHR1ZXNkYXkgPSB3ZWVrZGF5KDIpO1xuZXhwb3J0IHZhciB3ZWRuZXNkYXkgPSB3ZWVrZGF5KDMpO1xuZXhwb3J0IHZhciB0aHVyc2RheSA9IHdlZWtkYXkoNCk7XG5leHBvcnQgdmFyIGZyaWRheSA9IHdlZWtkYXkoNSk7XG5leHBvcnQgdmFyIHNhdHVyZGF5ID0gd2Vla2RheSg2KTtcblxuZXhwb3J0IHZhciBzdW5kYXlzID0gc3VuZGF5LnJhbmdlO1xuZXhwb3J0IHZhciBtb25kYXlzID0gbW9uZGF5LnJhbmdlO1xuZXhwb3J0IHZhciB0dWVzZGF5cyA9IHR1ZXNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHdlZG5lc2RheXMgPSB3ZWRuZXNkYXkucmFuZ2U7XG5leHBvcnQgdmFyIHRodXJzZGF5cyA9IHRodXJzZGF5LnJhbmdlO1xuZXhwb3J0IHZhciBmcmlkYXlzID0gZnJpZGF5LnJhbmdlO1xuZXhwb3J0IHZhciBzYXR1cmRheXMgPSBzYXR1cmRheS5yYW5nZTtcbiIsImltcG9ydCBpbnRlcnZhbCBmcm9tIFwiLi9pbnRlcnZhbC5qc1wiO1xuXG52YXIgeWVhciA9IGludGVydmFsKGZ1bmN0aW9uKGRhdGUpIHtcbiAgZGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbn0sIGZ1bmN0aW9uKGRhdGUsIHN0ZXApIHtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwKTtcbn0sIGZ1bmN0aW9uKHN0YXJ0LCBlbmQpIHtcbiAgcmV0dXJuIGVuZC5nZXRGdWxsWWVhcigpIC0gc3RhcnQuZ2V0RnVsbFllYXIoKTtcbn0sIGZ1bmN0aW9uKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbn0pO1xuXG4vLyBBbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gZm9yIHRoaXMgc2ltcGxlIGNhc2UuXG55ZWFyLmV2ZXJ5ID0gZnVuY3Rpb24oaykge1xuICByZXR1cm4gIWlzRmluaXRlKGsgPSBNYXRoLmZsb29yKGspKSB8fCAhKGsgPiAwKSA/IG51bGwgOiBpbnRlcnZhbChmdW5jdGlvbihkYXRlKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihNYXRoLmZsb29yKGRhdGUuZ2V0RnVsbFllYXIoKSAvIGspICogayk7XG4gICAgZGF0ZS5zZXRNb250aCgwLCAxKTtcbiAgICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICB9LCBmdW5jdGlvbihkYXRlLCBzdGVwKSB7XG4gICAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkgKyBzdGVwICogayk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeWVhcjtcbmV4cG9ydCB2YXIgeWVhcnMgPSB5ZWFyLnJhbmdlO1xuIiwiLy8gdjAuMC44XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsYXN0aWNTVkcoc2VsZWN0b3IsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cblx0Ly8gY29udGFpbmluZyBET00gZWxlbWVudCwgd2hpY2ggZGVmYXVsdHMgdG8gYm9keVxuXHR2YXIgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvciB8fCBcImJvZHlcIik7XG5cblx0aWYgKCFwYXJlbnQgfHwgIXBhcmVudC5sZW5ndGgpIHtcblx0XHRjb25zb2xlLmxvZyhcIkNvdWxkbid0IGZpbmQgYSBwYXJlbnQgZm9yIGVsYXN0aWNTVkcgbWFraW5nIHRoZSBzZWxlY3RvciAnXCIgKyBzZWxlY3RvciArIFwiJ1wiKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRwYXJlbnQgPSBwYXJlbnRbMF07XG5cblx0Ly8geW91IGNhbiBzcGVjaWZ5IGEgd2lkdGggaWYgeW91IGxpa2UsIG9yIHdlJ2xsIHNuYXAgdG8gc2l6ZSBvZiBjb250YWluZXJcblx0dmFyIGJhc2UgPSB7XG5cdFx0d2lkdGg6IHR5cGVvZiBvcHRzLndpZHRoICE9PSBcInVuZGVmaW5lZFwiID8gb3B0cy53aWR0aCA6IHBhcmVudC5jbGllbnRXaWR0aCxcblx0XHRzY2FsZTogMVxuXHR9O1xuXG5cdC8vIHdlIG5lZWQgdG8gcmVtZW1iZXIgdGhlIG9yaWdpbmFsIHdpZHRoIGZvciBzY2FsaW5nIHB1cnBvc2VzXG5cdGJhc2Uub3JpZ2luYWxfd2lkdGggPSBiYXNlLndpZHRoO1xuXG5cdC8vIHlvdSBjYW4gZWl0aGVyIHNwZWNpZnkgdGhlIGhlaWdodCBvciB0aGUgYXNwZWN0IHJhdGlvLiBJZiBuZWl0aGVyIGlzIHNwZWNpZmllZCwgcmVmYXVsdHMgdG8gcm91Z2hseSB0aGUgZ29sZGVuIHJhdGlvXG5cdC8vIHNwZWNpZnlpbmcgdGhlIGhlaWdodCBrZWVwcyB0aGUgc3ZnIGF0IGEgc3RhbmRhcmQgaGVpZ2h0IGFuZCBvbmx5IHJlc2l6ZXMgdGhlIHdpZHRoXG5cdC8vIHNwZWNpZnlpbmcgdGhlIGFzcGVjdCByYXRpbyByZXNpemVzIGJvdGhcbiAgICBpZiAodHlwZW9mIG9wdHMuaGVpZ2h0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgXHRiYXNlLmhlaWdodCA9IG9wdHMuaGVpZ2h0O1xuICAgIFx0YmFzZS5hc3BlY3QgPSBiYXNlLmhlaWdodCAvIGJhc2Uud2lkdGg7XG4gICAgfSBlbHNlIHtcblx0ICAgIG9wdHMuYXNwZWN0ID0gdHlwZW9mIG9wdHMuYXNwZWN0ICE9PSBcInVuZGVmaW5lZFwiID8gb3B0cy5hc3BlY3QgOiAwLjYxODtcblx0XHRiYXNlLmhlaWdodCA9IGJhc2Uud2lkdGggKiBvcHRzLmFzcGVjdDtcbiAgICB9XG5cblx0Ly8gY3JlYXRlIGEgbmV3IFNWRyBlbGVtZW50XG4gICAgdmFyIHhtbG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIFwic3ZnXCIpO1xuXHRzdmcuc2V0QXR0cmlidXRlTlMobnVsbCwgXCJ3aWR0aFwiLCBiYXNlLndpZHRoKTtcblx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIGJhc2UuaGVpZ2h0KTtcblx0cGFyZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cdFxuXHQvLyBzZXR0aW5nIHJlc2l6ZSB0byBcImF1dG9cIiBzZXRzIHRoZSB2aWV3cG9ydCB0byB0aGUgb3JpZ2luYWwgd2lkdGggYW5kIGhlaWdodCBzbyB0aGF0IHRoZSBTVkcgYWx3YXlzIHNjYWxlc1xuICAgIGlmIChvcHRzLnJlc2l6ZSAmJiBvcHRzLnJlc2l6ZSA9PSBcImF1dG9cIikge1xuXHRcdHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyBiYXNlLndpZHRoICsgXCIgXCIgKyBiYXNlLmhlaWdodCk7XG4gICAgfVxuXG5cdC8vIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHRoZSB3aW5kb3cgcmVzaXplc1x0XHRcblx0ZnVuY3Rpb24gcmVzaXplKCkgeyBcblx0XHRiYXNlLndpZHRoID0gcGFyZW50LmNsaWVudFdpZHRoO1xuXHRcdHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIGJhc2Uud2lkdGgpO1xuXG5cdFx0Ly8gb25seSByZXNpemUgdGhlIGhlaWdodCBpZiBhc3BlY3Qgd2FzIHNwZWNpZmllZCBpbnN0ZWFkIG9mIGhlaWdodFxuXHRcdGlmIChvcHRzLmFzcGVjdCkge1xuXHRcdCAgICBiYXNlLmhlaWdodCA9IGJhc2Uud2lkdGggKiBvcHRzLmFzcGVjdDtcblx0XHRcdHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcImhlaWdodFwiLCBiYXNlLmhlaWdodCk7XG5cdFx0fVxuXG5cdCAgICBiYXNlLnNjYWxlID0gYmFzZS53aWR0aCAvIGJhc2Uub3JpZ2luYWxfd2lkdGg7XG5cblx0XHQvLyBvcHRpb25hbCBjYWxsYmFja1xuXHRcdGlmIChvcHRzLm9uUmVzaXplKSB7XG5cdFx0XHRvcHRzLm9uUmVzaXplKGJhc2Uud2lkdGgsIGJhc2UuaGVpZ2h0LCBiYXNlLnNjYWxlLCBzdmcpO1xuXHRcdH1cblx0fVxuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHJlc2l6ZSgpO1xuXHR9KTtcblxuXHRyZXNpemUoKTsgLy8gY2FsbCB0aGlzIG9uIGxvYWQgc2luY2Ugc29tZXRpbWVzIHRoZSBpbml0aWFsIGNvbmRpdGlvbnMgYXJlIHdpZGVyIHRoYW4gY29udGFpbmVyXG5cblx0Ly8gbWV0aG9kc1xuXHRiYXNlLnNldFJlc2l6ZSA9IGZ1bmN0aW9uKGYpIHtcblx0XHRvcHRzLm9uUmVzaXplID0gZjtcblx0fVxuXG5cdGJhc2UuY2hhbmdlQXNwZWN0ID0gZnVuY3Rpb24oYXNwZWN0KSB7XG5cdFx0b3B0cy5hc3BlY3QgPSBhc3BlY3Q7XG5cdFx0YmFzZS5oZWlnaHQgPSBiYXNlLndpZHRoICogb3B0cy5hc3BlY3Q7XG5cdFx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIGJhc2UuaGVpZ2h0KTtcblx0fVxuXG5cdC8qXG5cdGJhc2UuY2hhbmdlV2lkdGggPSBmdW5jdGlvbih3aWR0aCkge1xuICAgIFx0YmFzZS53aWR0aCA9IHdpZHRoO1xuICAgIFx0aWYgKG9wdHMuYXNwZWN0KSB7XG5cdCAgICBcdG9wdHMuYXNwZWN0ID0gYmFzZS5oZWlnaHQgLyBiYXNlLndpZHRoO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0b3B0cy53aWR0aCA9IHdpZHRoO1xuXHQgICAgfVxuXHRcdHN2Zy5zZXRBdHRyaWJ1dGVOUyhudWxsLCBcIndpZHRoXCIsIGJhc2Uud2lkdGgpO1xuXHR9XG5cdCovXG5cblx0YmFzZS5jaGFuZ2VIZWlnaHQgPSBmdW5jdGlvbihoZWlnaHQpIHtcbiAgICBcdGJhc2UuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIFx0aWYgKG9wdHMuYXNwZWN0KSB7XG5cdCAgICBcdG9wdHMuYXNwZWN0ID0gYmFzZS5oZWlnaHQgLyBiYXNlLndpZHRoO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0b3B0cy5oZWlnaHQgPSBoZWlnaHQ7XG5cdCAgICB9XG5cdFx0c3ZnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwiaGVpZ2h0XCIsIGJhc2UuaGVpZ2h0KTtcblx0fVxuXG5cdGJhc2UudHJpZ2dlclJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlc2l6ZSgpO1xuXHR9XG5cblx0YmFzZS5zdmcgPSBzdmc7XG5cdHJldHVybiBiYXNlO1xufSIsImltcG9ydCB7IHNlbGVjdCwgZXZlbnQsIG1vdXNlLCBwb2ludGVyIH0gZnJvbSBcImQzLXNlbGVjdGlvblwiO1xuaW1wb3J0IHsgcmFuZ2UgfSBmcm9tIFwiZDMtYXJyYXlcIjtcbmltcG9ydCB7IHNjYWxlTGluZWFyIH0gZnJvbSBcImQzLXNjYWxlXCI7XG5pbXBvcnQgeyBheGlzQm90dG9tIH0gZnJvbSBcImQzLWF4aXNcIjtcbmltcG9ydCB7IGRyYWcgfSBmcm9tIFwiZDMtZHJhZ1wiO1xuaW1wb3J0IGVsYXN0aWNTVkcgZnJvbSAnZWxhc3RpYy1zdmcnO1xuXG5yZXF1aXJlKFwiLi9zbGlkZXIuc2Nzc1wiKTtcblxuY29uc3QgaW1hZ2VzID0gcmVxdWlyZShcIi4vaW1nL2ltYWdlcy5qc29uXCIpO1xuXG5mdW5jdGlvbiBkM3NsaWRlcihjb250YWluZXIsIG15T3B0cykge1xuXHRsZXQgdmFsdWUsIGVsZW1lbnQ7IC8vIGN1cnJlbnQgdmFsdWUgb2Ygc2xpZGVyIGF0IGFsbCB0aW1lc1xuXG5cdC8vIGJ1aWxkIHNsaWRlclxuXHRpZiAoIWNvbnRhaW5lcikge1xuXHRcdGNvbnNvbGUubG9nKFwiWW91IG11c3Qgc3VwcGx5IHNsaWRlciBhIGNvbnRhaW5lciBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gZDNzbGlkZXIuXCIpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZWxlbWVudCA9IHNlbGVjdChjb250YWluZXIpLmFwcGVuZChcImRpdlwiKS5jbGFzc2VkKFwiZDNzbGlkZXJcIiwgdHJ1ZSk7XG5cblx0Ly8gdmFyIHN2ZyA9IGVsZW1lbnQuYXBwZW5kKCdzdmcnKTtcblx0Ly8gc3ZnXG5cdC8vIFx0LmF0dHIoJ3dpZHRoJywgb3B0cy53aWR0aClcblx0Ly8gXHQuYXR0cignaGVpZ2h0Jywgb3B0cy5oZWlnaHQpXG5cblx0Y29uc3Qgb3B0cyA9IHtcblx0XHR0eXBlOiAnbGluZWFyJyxcblx0XHQvLyBkb21haW46IFswLCAxXSxcblx0XHQvLyBmdWxsX3dpZHRoOiBlbGVtZW50Lm5vZGUoKS5jbGllbnRXaWR0aCxcblx0XHQvLyBmdWxsX2hlaWdodDogZWxlbWVudC5ub2RlKCkuY2xpZW50SGVpZ2h0LFxuXHRcdG1hcmdpbjogeyBsZWZ0OiAyMCwgcmlnaHQ6IDIwLCB0b3A6IDI1LCBib3R0b206IDAgfVxuXHR9O1xuXG5cdC8vIG1hbnVhbCBkZWVwIGNsb25lXG5cdGlmIChteU9wdHMuaGFzT3duUHJvcGVydHkoXCJtYXJnaW5cIikpIHtcblx0XHRPYmplY3QuYXNzaWduKG9wdHMubWFyZ2luLCBteU9wdHMubWFyZ2luKTtcblx0XHRkZWxldGUgbXlPcHRzLm1hcmdpbjtcblx0fVxuXG5cdE9iamVjdC5hc3NpZ24ob3B0cywgbXlPcHRzKTtcblxuXHRpZiAob3B0cy5wbGF5QnV0dG9uICYmIG15T3B0cy5oYXNPd25Qcm9wZXJ0eShcIm1hcmdpblwiKSAmJiBteU9wdHMubWFyZ2luLmhhc093blByb3BlcnR5KFwibGVmdFwiKSkge1xuXHRcdG9wdHMubWFyZ2luLmxlZnQgKz0gNDA7XG5cdH1cblxuXHRvcHRzLmhlaWdodCA9IG9wdHMuaGVpZ2h0IHx8IDYwO1xuXG5cdGxldCBiID0gZWxhc3RpY1NWRyhjb250YWluZXIgKyBcIiAuZDNzbGlkZXJcIiwge1xuXHRcdGhlaWdodDogb3B0cy5oZWlnaHRcblx0fSk7XG5cblx0bGV0IHN2ZyA9IHNlbGVjdChiLnN2Zyk7XG5cblx0b3B0cy5kb21haW4gPSBvcHRzLmRvbWFpbiB8fCBbMCwgMTAwXTtcblx0b3B0cy50aWNrSW50ZXJ2YWwgPSBvcHRzLnRpY2tJbnRlcnZhbCB8fCAxMDtcblx0b3B0cy50aHVtYm5haWxTdHlsZSA9IG9wdHMudGh1bWJuYWlsU3R5bGUgfHwgXCJjaXJjbGVcIjtcblxuXHQvLyBkZWZhdWx0IHRvIDI1IHN0ZXBzIGlmIG5vdCBzcGVjaWZpZWRcblx0b3B0cy5wbGF5SW50ZXJ2YWwgPSBvcHRzLnBsYXlJbnRlcnZhbCB8fCAob3B0cy5pbnRlcnZhbCA/IG9wdHMuaW50ZXJ2YWwgOiAob3B0cy5kb21haW5bMV0gLSBvcHRzLmRvbWFpblswXSkgLyAyMCk7XG5cdG9wdHMuc3RhcnRWYWx1ZSA9IG9wdHMuc3RhcnRWYWx1ZSB8fCBvcHRzLmRvbWFpblswXTtcblx0b3B0cy52YWx1ZSAgPSBvcHRzLmhhc093blByb3BlcnR5KFwidmFsdWVcIik/IG9wdHMudmFsdWUgOiBvcHRzLmRvbWFpblswXTtcblx0b3B0cy5zcGVlZCA9IG9wdHMuc3BlZWQgfHwgMTAwMDtcblx0b3B0cy5sb29wID0gdHlwZW9mIG9wdHMubG9vcCA9PSBcInVuZGVmaW5lZFwiID8gdHJ1ZTogb3B0cy5sb29wO1xuXHRvcHRzLmxvY2tlZCA9IG9wdHMubG9ja2VkIHx8IGZhbHNlO1xuXHRvcHRzLmNvbG9yID0gb3B0cy5jb2xvciB8fCBcIiNDQzAwMDBcIjtcblx0b3B0cy5zbmFwVG9UaWNrID0gb3B0cy5zbmFwVG9UaWNrIHx8IGZhbHNlO1xuXHRvcHRzLmJ1dHRvbkNvbG9yID0gb3B0cy5idXR0b25Db2xvciA/IG9wdHMuYnV0dG9uQ29sb3IgOiBcImdyYXlcIjtcblx0b3B0cy5zaXplID0gb3B0cy5zaXplIHx8IDEyO1xuXG5cdGlmIChvcHRzLmJ1dHRvbkNvbG9yID09IFwid2hpdGVcIikge1xuXHRcdGltYWdlcy5wbGF5ID0gaW1hZ2VzLnBsYXlfd2hpdGU7XG5cdFx0aW1hZ2VzLnN0b3AgPSBpbWFnZXMuc3RvcF93aGl0ZTtcblx0fSBlbHNlIGlmIChvcHRzLmJ1dHRvbkNvbG9yID09IFwiaG9sbG93XCIpIHtcblx0XHRpbWFnZXMucGxheSA9IGltYWdlcy5wbGF5X2hvbGxvdztcblx0XHRpbWFnZXMuc3RvcCA9IGltYWdlcy5wYXVzZV9ob2xsb3c7XG5cdH0gZWxzZSB7XG5cdFx0aW1hZ2VzLnBsYXkgPSBpbWFnZXMucGxheV9ncmF5O1xuXHRcdGltYWdlcy5zdG9wID0gaW1hZ2VzLnN0b3BfZ3JheTtcblx0fVxuXG5cdGlmIChvcHRzLnRleHRCb3gpIHtcblx0XHRvcHRzLm1hcmdpbi50b3AgKz0gMjA7XG5cdFx0b3B0cy5oZWlnaHQgKz0gMjA7XG5cdH1cblxuXHRpZiAob3B0cy5sb2NrZWQpIHtcblx0XHRlbGVtZW50LmNsYXNzZWQoXCJsb2NrZWRcIiwgdHJ1ZSk7XG5cdH1cblxuXHR2YWx1ZSA9IG9wdHMudmFsdWU7XG5cblx0Ly8gcHV0IHNvbWV0aGluZyBpbiBoZXJlIHNvIHRoYXQgd2UgZG9uJ3QgY29sbGFwc2UgdG8gYW4gMHgwIGRpdlxuXHQvLyBlbGVtZW50Lmh0bWwoXCImbmJzcDtcIik7XG5cblx0b3B0cy53aWR0aCA9IG9wdHMud2lkdGggfHwgZWxlbWVudC5ub2RlKCkub2Zmc2V0V2lkdGg7IC8vcGFyc2VJbnQoZWxlbWVudC5zdHlsZSgnd2lkdGgnKSwgMTApO1xuXG5cdC8vIGVsZW1lbnQuaHRtbChcIlwiKTtcblxuXHRpZiAob3B0cy5wbGF5QnV0dG9uKXtcblx0XHR2YXIgY29udHJvbHMgPSBlbGVtZW50LmFwcGVuZChcImRpdlwiKS5hdHRyKFwiaWRcIiwgXCJjb250cm9sLXBhbmVsXCIpXG5cdFx0Y29udHJvbHMuYXBwZW5kKFwiaW1nXCIpXG5cdFx0XHQuYXR0cihcImlkXCIsIFwicGxheUJ1dHRvblwiKVxuXHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcInBsYXlCdXR0b25cIilcblx0XHRcdC5hdHRyKFwic3JjXCIsIGltYWdlcy5wbGF5KTtcblx0fVxuXG5cdHZhciBkYXRhX2xheWVyID0gc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwiZGF0YV9sYXllclwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgb3B0cy5tYXJnaW4ubGVmdCArIFwiLFwiICsgb3B0cy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXHR2YXIgYXhlc19sYXllciA9IHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyBvcHRzLm1hcmdpbi5sZWZ0ICsgXCIsXCIgKyBvcHRzLm1hcmdpbi50b3AgKyBcIilcIik7XG5cdHZhciB0aHVtYl9sYXllciA9IHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInRodW1ibmFpbF9sYXllclwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgb3B0cy5tYXJnaW4ubGVmdCArIFwiLFwiICsgb3B0cy5tYXJnaW4udG9wICsgXCIpXCIpO1xuXG5cdHZhciB4QXhpcyA9IGF4ZXNfbGF5ZXIuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJzbGlkZXItYXhpc1wiKTtcblx0dmFyIHhTY2FsZSA9IHNjYWxlTGluZWFyKCkuZG9tYWluKG9wdHMuZG9tYWluKTtcblxuXHQvLyBNYWtlIGFkanVzdG1lbnRzIHRvIHJhbmdlIGFuZCBwb3NpdGlvbiBvZiBheGlzIGlmIHBsYXkgYnV0dG9uXG5cdHhTY2FsZS5yYW5nZShbMCwgb3B0cy53aWR0aCAtIG9wdHMubWFyZ2luLnJpZ2h0IC0gb3B0cy5tYXJnaW4ubGVmdCBdKTtcblxuXHQvLyBheGlzXG5cdHZhciB4ID0gYXhpc0JvdHRvbSgpLnNjYWxlKHhTY2FsZSk7XG5cblx0dmFyIHRpY2tzID0gb3B0cy50aWNrVmFsdWVzIHx8IHJhbmdlKG9wdHMuZG9tYWluWzBdLCBvcHRzLmRvbWFpblsxXSArIDEsIG9wdHMudGlja0ludGVydmFsKTtcblxuXHR4LnRpY2tWYWx1ZXModGlja3MpO1xuXHR4LnRpY2tTaXplKG9wdHMuaGFzT3duUHJvcGVydHkoXCJ0aWNrU2l6ZVwiKSA/IG9wdHMudGlja1NpemUgOiAxMiwgMCk7XG5cdHgudGlja3MoMyk7XG5cblx0eC50aWNrRm9ybWF0KGZ1bmN0aW9uKGQsIGkpIHtcblx0XHRyZXR1cm4gb3B0cy50aWNrRm9ybWF0PyBvcHRzLnRpY2tGb3JtYXQoZCkgOiBkO1xuXHR9KTtcblxuXHR4QXhpcy5jYWxsKHgpXG5cblx0Ly8gc2VlIGJlbG93XG5cdHZhciBwcmV2aW91c19zbmFwID0gbnVsbDtcblxuXHQvLyBmaXJlIHdoZW4gd2UndmUgbW92ZWQgdGhlIHRodW1ibmFpbFxuXHRmdW5jdGlvbiBjbGlja2VkT3JEcmFnZ2VkKGUpIHtcblx0XHRpZiAob3B0cy5sb2NrZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgY29vcmRzID0gcG9pbnRlcihlLCBzdmcuc2VsZWN0KFwiLmRvbWFpblwiKS5ub2RlKCkpO1xuXHRcdC8vIGNvbnNvbGUubG9nKGUpO1xuXG5cdFx0aWYgKCFjb29yZHNbMF0gJiYgIWNvb3Jkc1sxXSkge1xuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJGYWxsaW5nIGJhY2sgb24gZXZlbnRcIik7XG5cdFx0XHRjb29yZHMgPSBbZS54LCBlLnldO1xuXHRcdH07XG5cblxuXHRcdGxldCBkeCA9IE1hdGgubWluKHguc2NhbGUoKS5yYW5nZSgpWzFdLCBNYXRoLm1heCh4LnNjYWxlKCkucmFuZ2UoKVswXSwgY29vcmRzWzBdKSk7XG5cblx0XHR2YWx1ZSA9IHguc2NhbGUoKS5pbnZlcnQoZHgpO1xuXG5cdFx0Ly8gaWYgc25hcFRvVGljaywgcm91bmQgdGhlIHZhbHVlIHRvIHRoZSBuZWFyZXN0IHRpY2tcblx0XHRpZiAob3B0cy5zbmFwVG9UaWNrKSB7XG5cdFx0XHR2YXIgZGlzdGFuY2UgPSBJbmZpbml0eSxcblx0XHRcdFx0dGljayA9IG51bGw7XG5cblx0XHRcdGZvciAodmFyIHQgPSAwOyB0IDwgdGlja3MubGVuZ3RoOyB0ICs9IDEpIHtcblx0XHRcdFx0dmFyIGQgPSBNYXRoLmFicyh2YWx1ZSAtIHRpY2tzW3RdKTtcblx0XHRcdFx0aWYgKGQgPCBkaXN0YW5jZSkge1xuXHRcdFx0XHRcdGRpc3RhbmNlID0gZDtcblx0XHRcdFx0XHR0aWNrID0gdGlja3NbdF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dmFsdWUgPSB0aWNrO1xuXHRcdFx0dmFyIHNuYXAgPSB4U2NhbGUodmFsdWUpO1x0XHRcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyByb3VuZCB0aGUgdmFsdWUgdG8gdGhlIG5lYXJlc3QgaW50ZXJ2YWxcblx0XHRcdHZhbHVlID0gb3B0cy5wbGF5SW50ZXJ2YWwgPyBNYXRoLm1heChvcHRzLmRvbWFpblswXSwgTWF0aC5yb3VuZCh2YWx1ZSAvIG9wdHMucGxheUludGVydmFsKSAqIG9wdHMucGxheUludGVydmFsKSA6IE1hdGgubWF4KG9wdHMuZG9tYWluWzBdLCB2YWx1ZSk7XG5cdFx0XHR2YXIgc25hcCA9IHhTY2FsZSh2YWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9wdHMudGV4dEJveCkge1xuXHRcdFx0ZWxlbWVudC5zZWxlY3QoXCIuYXJyb3dfYm94X2NvbnRhaW5lclwiKS5zdHlsZShcImxlZnRcIiwgKG9wdHMubWFyZ2luLmxlZnQgKyB4U2NhbGUodmFsdWUpICsgKG9wdHMucGxheUJ1dHRvbj8gMCA6IDApKSArIFwicHhcIik7XG5cdFx0XHRlbGVtZW50LnNlbGVjdChcIi5hcnJvd19ib3hcIikuaHRtbChvcHRzLnRleHRCb3hGb3JtYXQgPyBvcHRzLnRleHRCb3hGb3JtYXQodmFsdWUpIDogKG9wdHMuZm9ybWF0PyBvcHRzLmZvcm1hdCh2YWx1ZSkgOiB2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdC8vIHdlIG9ubHkgd2FudCB0byBmaXJlIHRoZSBjYWxsYmFjayBpZiB3ZSdyZSBtb3ZpbmcgdG8gYSBuZXcgdGlja1xuXHRcdGlmIChzbmFwICE9PSBwcmV2aW91c19zbmFwKSB7XG5cdFx0XHRzZWxlY3QoY29udGFpbmVyICsgXCIgZGl2LmQzc2xpZGVyID4gc3ZnID4gLnRodW1ibmFpbF9sYXllciA+ICN0aHVtYlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeFNjYWxlKHZhbHVlKSArIFwiLDApXCIpO1xuXHRcdFx0b3B0cy5vbkRyYWcgJiYgb3B0cy5vbkRyYWcodmFsdWUsIHRydWUpO1xuXHRcdFx0cHJldmlvdXNfc25hcCA9IHNuYXA7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlID49IG9wdHMuZG9tYWluWzFdKSB7XG5cdFx0XHRpZiAob3B0cy5vbkZpbmlzaCkge1xuXHRcdFx0XHRvcHRzLm9uRmluaXNoKCk7XG5cdFx0XHR9XHRcdFx0XG5cdFx0fVxuXG5cdFx0Ly8gY2FuY2VsIHBsYXlpbmcgd2hlbiBtYW51YWxseSBtb3ZlZFxuXHRcdGlmIChwbGF5aW5nKSB7XG5cdFx0XHRwbGF5aW5nID0gZmFsc2U7XG5cdFx0XHRzZWxlY3QoY29udGFpbmVyICsgXCIgI3BsYXlCdXR0b25cIikuYXR0cihcInNyY1wiLCBpbWFnZXMucGxheSk7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0aWYgKG9wdHMub25TdG9wKSB7XG5cdFx0XHRcdG9wdHMub25TdG9wKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gZXZlbnRzXG5cdGxldCBkcmFnZ2VkID0gZHJhZygpLm9uKFwiZHJhZ1wiLCBmdW5jdGlvbihlLCBkKSB7XG5cdFx0Y2xpY2tlZE9yRHJhZ2dlZChlKTtcblx0fSk7XG5cblx0bGV0IHRodW1iID0gdGh1bWJfbGF5ZXIuYXBwZW5kKFwiZ1wiKVxuXHRcdC5hdHRyKFwiY2xhc3NcIiwgXCJ0aHVtYlwiKVxuXHRcdC5hdHRyKFwiaWRcIiwgXCJ0aHVtYlwiKVxuXHRcdC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeC5zY2FsZSgpLnJhbmdlKClbMF0gKyBcIiwwKVwiKTtcblxuXHRpZiAob3B0cy50aHVtYm5haWxTdHlsZSA9PSBcImJhclwiKSB7XG5cdFx0dGh1bWIuYXBwZW5kKFwibGluZVwiKVxuXHRcdFx0LmF0dHIoXCJ4MVwiLCAxKVxuXHRcdFx0LmF0dHIoXCJ4MlwiLCAxKVxuXHRcdFx0LmF0dHIoXCJ5MVwiLCAwKVxuXHRcdFx0LmF0dHIoXCJ5MlwiLCAtb3B0cy5oZWlnaHQgKyA0MCk7XG5cblx0XHR0aHVtYi5hcHBlbmQoXCJpbWFnZVwiKVxuXHRcdFx0LmF0dHIoXCJocmVmXCIsIGltYWdlcy5oYW5kbGUpXG5cdFx0XHQuYXR0cihcIndpZHRoXCIsIDI3KVxuXHRcdFx0LmF0dHIoXCJoZWlnaHRcIiwgMzcpXG5cdFx0XHQuYXR0cihcInhcIiwgLTEzKVxuXHRcdFx0LmF0dHIoXCJ5XCIsIC1vcHRzLmhlaWdodCArIDIyKTtcblxuXHR9IGVsc2Uge1xuXHRcdHRodW1iLmFwcGVuZChcImNpcmNsZVwiKVxuXHRcdFx0LmF0dHIoXCJyXCIsIG9wdHMuc2l6ZSlcblx0XHRcdC5hdHRyKFwiY3hcIiwgMClcblx0XHRcdC5hdHRyKFwiY3lcIiwgMClcblx0XHRcdC5zdHlsZShcImZpbGxcIiwgb3B0cy5jb2xvcik7XG5cdH1cblxuXHRpZiAob3B0cy50ZXh0Qm94KSB7XG5cdFx0ZWxlbWVudFxuXHRcdFx0LmFwcGVuZChcImRpdlwiKVxuXHRcdFx0LmF0dHIoXCJjbGFzc1wiLCBcImFycm93X2JveF9jb250YWluZXJcIilcblx0XHRcdC5zdHlsZShcImxlZnRcIiwgKG9wdHMubWFyZ2luLmxlZnQgKyB4U2NhbGUob3B0cy52YWx1ZSkgKyAob3B0cy5wbGF5QnV0dG9uPyAwIDogMCkpICsgXCJweFwiKVxuXHRcdFx0LnN0eWxlKFwidG9wXCIsIChvcHRzLm1hcmdpbi50b3AgLSA0MCkgKyBcInB4XCIpXG5cdFx0XHQuYXBwZW5kKFwiZGl2XCIpXG5cdFx0XHQuYXR0cihcImNsYXNzXCIsIFwiYXJyb3dfYm94XCIpXG5cdFx0XHQuaHRtbChvcHRzLnRleHRCb3hGb3JtYXQgPyBvcHRzLnRleHRCb3hGb3JtYXQob3B0cy52YWx1ZSkgOiAob3B0cy5mb3JtYXQ/IG9wdHMuZm9ybWF0KG9wdHMudmFsdWUpIDogb3B0cy52YWx1ZSkpO1xuXHR9XG5cblx0c2VsZWN0KGNvbnRhaW5lciArIFwiIGRpdi5kM3NsaWRlciA+IHN2ZyA+IC50aHVtYm5haWxfbGF5ZXIgPiAjdGh1bWJcIikuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHhTY2FsZShvcHRzLnZhbHVlKSArIFwiLDApXCIpO1xuXG5cdHRodW1iLmNhbGwoZHJhZ2dlZCk7XG5cblx0ZnVuY3Rpb24gcmVzaXplKCkge1xuXHRcdG9wdHMud2lkdGggPSBwYXJzZUludChzdmcuc3R5bGUoJ3dpZHRoJyksIDEwKSAtIG9wdHMubWFyZ2luLnJpZ2h0IC0gb3B0cy5tYXJnaW4ubGVmdDtcblxuXHRcdC8vIFVwZGF0ZSBzY2FsZVxuXHRcdHhTY2FsZS5yYW5nZShbMCwgb3B0cy53aWR0aF0pO1xuXHRcdHguc2NhbGUoeFNjYWxlKVxuXHRcdHgudGlja3Mob3B0cy53aWR0aCA8IDUwMCA/IDMgOiAxMCk7XG5cdFx0eEF4aXMuY2FsbCh4KTtcblxuXHRcdC8vIHN2Zy5hdHRyKFwid2lkdGhcIiwgb3B0cy53aWR0aCk7XG5cdFx0c2VsZWN0KGNvbnRhaW5lciArIFwiIGRpdi5kM3NsaWRlciA+IHN2ZyA+IC50aHVtYm5haWxfbGF5ZXIgPiAjdGh1bWJcIikuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHhTY2FsZSh2YWx1ZSkgKyBcIiwwKVwiKTtcblxuXHRcdGlmIChvcHRzLnRleHRCb3gpIHtcblx0XHRcdGVsZW1lbnQuc2VsZWN0KFwiLmFycm93X2JveF9jb250YWluZXJcIikuc3R5bGUoXCJsZWZ0XCIsIChvcHRzLm1hcmdpbi5sZWZ0ICsgeFNjYWxlKHZhbHVlKSArIChvcHRzLnBsYXlCdXR0b24/IDAgOiAwKSkgKyBcInB4XCIpO1xuXHRcdFx0Ly8gZWxlbWVudC5zZWxlY3QoXCIuYXJyb3dfYm94XCIpLmh0bWwob3B0cy50ZXh0Qm94Rm9ybWF0ID8gb3B0cy50ZXh0Qm94Rm9ybWF0KHZhbHVlKSA6IChvcHRzLmZvcm1hdD8gb3B0cy5mb3JtYXQodmFsdWUpIDogdmFsdWUpKTtcblx0XHR9XG5cblx0XHQvLyBvcHRpb25hbCBjYWxsYmFja1xuXHRcdGlmIChvcHRzLm9uUmVzaXplKSB7XG5cdFx0XHRvcHRzLm9uUmVzaXplKG9wdHMud2lkdGgpO1xuXHRcdH1cblx0fVxuXG5cdGxldCByZXNpemVUaW1lciwgdWlkID0gczUoKTsgLy8gbmVlZGVkIGZvciBuYW1lc3BhY2luZyB0aGUgcmVzaXplIGV2ZW50XG5cblx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMzM5ODI1L3doYXQtaXMtdGhlLWJlc3QtcHJhY3Rpc2UtdG8tbm90LXRvLW92ZXJyaWRlLW90aGVyLWJvdW5kLWZ1bmN0aW9ucy10by13aW5kb3ctb25yXG5cdGZ1bmN0aW9uIGFkZFJlc2l6ZUV2ZW50KGZ1bmMsIGR1cikge1xuXHRcdHZhciByZXNpemVUaW1lcjtcblxuXHRcdHNlbGVjdCh3aW5kb3cpLm9uKFwicmVzaXplLlwiICsgdWlkLCBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG5cblx0XHRcdGlmICh0eXBlb2Ygb2xkUmVzaXplID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdG9sZFJlc2l6ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNpemVUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZ1bmMoKTtcblx0XHRcdH0sIGR1ciB8fCAyNTApO1xuXHRcdH0pO1xuXHR9XG5cdGFkZFJlc2l6ZUV2ZW50KHJlc2l6ZSwgMTAwKTtcblxuXHQvLyBwbGF5IGJ1dHRvbiBjb250cm9sc1xuXHRsZXQgdGltZXIsIHBsYXlpbmcgPSBmYWxzZTtcblxuXHRmdW5jdGlvbiBzZXQodiwgdXBkYXRlKSB7XG5cdFx0Ly8gYm91bmQgaW5wdXQgdG8gZG9tYWluXG5cdFx0dmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih2LCBvcHRzLmRvbWFpblsxXSksIG9wdHMuZG9tYWluWzBdKTtcblx0XHRzZWxlY3QoY29udGFpbmVyICsgXCIgZGl2LmQzc2xpZGVyID4gc3ZnID4gLnRodW1ibmFpbF9sYXllciA+ICN0aHVtYlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeFNjYWxlKHZhbHVlKSArIFwiLDApXCIpO1xuXG5cdFx0aWYgKG9wdHMudGV4dEJveCkge1xuXHRcdFx0ZWxlbWVudC5zZWxlY3QoXCIuYXJyb3dfYm94X2NvbnRhaW5lclwiKS5zdHlsZShcImxlZnRcIiwgKG9wdHMubWFyZ2luLmxlZnQgKyB4U2NhbGUodmFsdWUpICsgKG9wdHMucGxheUJ1dHRvbj8gMCA6IDApKSArIFwicHhcIik7XG5cdFx0XHRlbGVtZW50LnNlbGVjdChcIi5hcnJvd19ib3hcIikuaHRtbChvcHRzLnRleHRCb3hGb3JtYXQgPyBvcHRzLnRleHRCb3hGb3JtYXQodmFsdWUpIDogKG9wdHMuZm9ybWF0PyBvcHRzLmZvcm1hdCh2YWx1ZSkgOiB2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdGlmICh1cGRhdGUgIT09IGZhbHNlKSB7XG5cdFx0XHRvcHRzLm9uRHJhZyAmJiBvcHRzLm9uRHJhZyh2YWx1ZSwgZmFsc2UpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldCgpIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHZhbHVlICs9IG9wdHMucGxheUludGVydmFsO1xuXHRcdHZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAvIG9wdHMucGxheUludGVydmFsKSAqIG9wdHMucGxheUludGVydmFsO1xuXG5cdFx0aWYgKG9wdHMuc25hcFRvVGljaykge1xuXHRcdFx0dmFyIGRpc3RhbmNlID0gSW5maW5pdHksXG5cdFx0XHRcdHRpY2sgPSBudWxsO1xuXG5cdFx0XHRmb3IgKHZhciB0ID0gMDsgdCA8IHRpY2tzLmxlbmd0aDsgdCArPSAxKSB7XG5cdFx0XHRcdHZhciBkID0gTWF0aC5hYnModmFsdWUgLSB0aWNrc1t0XSk7XG5cdFx0XHRcdGlmIChkIDwgZGlzdGFuY2UgJiYgdmFsdWUgPD0gdGlja3NbdF0pIHtcblx0XHRcdFx0XHRkaXN0YW5jZSA9IGQ7XG5cdFx0XHRcdFx0dGljayA9IHRpY2tzW3RdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICghdGljaykge1xuXHRcdFx0XHR2YWx1ZSA9IHRpY2tzWzBdIC0gb3B0cy5wbGF5SW50ZXJ2YWw7XG5cdFx0XHRcdGFkdmFuY2UoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YWx1ZSA9IHRpY2s7XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID09IG9wdHMuZG9tYWluWzFdICYmICFvcHRzLmxvb3ApIHtcblx0XHRcdHBsYXlpbmcgPSBmYWxzZTtcblx0XHRcdHNlbGVjdChjb250YWluZXIgKyBcIiAjcGxheUJ1dHRvblwiKS5hdHRyKFwic3JjXCIsIGltYWdlcy5wbGF5KTtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cblx0XHRcdHNlbGVjdChjb250YWluZXIgKyBcIiBkaXYuZDNzbGlkZXIgPiBzdmcgPiAudGh1bWJuYWlsX2xheWVyID4gI3RodW1iXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4U2NhbGUodmFsdWUpICsgXCIsMClcIik7XG5cblx0XHRcdGlmIChvcHRzLnRleHRCb3gpIHtcblx0XHRcdFx0ZWxlbWVudC5zZWxlY3QoXCIuYXJyb3dfYm94X2NvbnRhaW5lclwiKS5zdHlsZShcImxlZnRcIiwgKG9wdHMubWFyZ2luLmxlZnQgKyB4U2NhbGUodmFsdWUpICsgKG9wdHMucGxheUJ1dHRvbj8gMCA6IDApKSArIFwicHhcIik7XG5cdFx0XHRcdGVsZW1lbnQuc2VsZWN0KFwiLmFycm93X2JveFwiKS5odG1sKG9wdHMudGV4dEJveEZvcm1hdCA/IG9wdHMudGV4dEJveEZvcm1hdCh2YWx1ZSkgOiAob3B0cy5mb3JtYXQ/IG9wdHMuZm9ybWF0KHZhbHVlKSA6IHZhbHVlKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNlbGVjdChjb250YWluZXIgKyBcIiBkaXYuZDNzbGlkZXIgPiBzdmcgPiAudGh1bWJuYWlsX2xheWVyID4gI3RodW1iXCIpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB4U2NhbGUodmFsdWUpICsgXCIsMClcIik7XG5cdFx0XHRvcHRzLm9uRHJhZyAmJiBvcHRzLm9uRHJhZyh2YWx1ZSwgZmFsc2UpO1xuXG5cdFx0XHRpZiAob3B0cy5vbkZpbmlzaCkge1xuXHRcdFx0XHRvcHRzLm9uRmluaXNoKCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA+IG9wdHMuZG9tYWluWzFdICYmIG9wdHMubG9vcCkge1xuXHRcdFx0dmFsdWUgPSBvcHRzLmRvbWFpblswXSAtIG9wdHMucGxheUludGVydmFsO1xuXHRcdFx0YWR2YW5jZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChvcHRzLnRleHRCb3gpIHtcblx0XHRcdGVsZW1lbnQuc2VsZWN0KFwiLmFycm93X2JveF9jb250YWluZXJcIikuc3R5bGUoXCJsZWZ0XCIsIChvcHRzLm1hcmdpbi5sZWZ0ICsgeFNjYWxlKHZhbHVlKSArIChvcHRzLnBsYXlCdXR0b24/IDAgOiAwKSkgKyBcInB4XCIpO1xuXHRcdFx0ZWxlbWVudC5zZWxlY3QoXCIuYXJyb3dfYm94XCIpLmh0bWwob3B0cy50ZXh0Qm94Rm9ybWF0ID8gb3B0cy50ZXh0Qm94Rm9ybWF0KHZhbHVlKSA6IChvcHRzLmZvcm1hdD8gb3B0cy5mb3JtYXQodmFsdWUpIDogdmFsdWUpKTtcblx0XHR9XHRcdFx0XG5cblx0XHRzZWxlY3QoY29udGFpbmVyICsgXCIgZGl2LmQzc2xpZGVyID4gc3ZnID4gLnRodW1ibmFpbF9sYXllciA+ICN0aHVtYlwiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgeFNjYWxlKHZhbHVlKSArIFwiLDApXCIpO1xuXHRcdG9wdHMub25EcmFnICYmIG9wdHMub25EcmFnKHZhbHVlLCBmYWxzZSk7XG5cdH1cblxuXHRzZWxlY3QoY29udGFpbmVyICsgXCIgI3BsYXlCdXR0b25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKG9wdHMubG9ja2VkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHZhbHVlID49IG9wdHMuZG9tYWluWzFdKSB7XG5cdFx0XHR2YWx1ZSA9IG9wdHMuZG9tYWluWzBdIC0gb3B0cy5wbGF5SW50ZXJ2YWw7XG5cdFx0fVxuXG5cblx0XHRpZiAoIXBsYXlpbmcpIHtcblx0XHRcdHBsYXlpbmcgPSB0cnVlO1xuXHRcdFx0c2VsZWN0KGNvbnRhaW5lciArIFwiICNwbGF5QnV0dG9uXCIpLmF0dHIoXCJzcmNcIiwgaW1hZ2VzLnN0b3ApO1xuXHRcdFx0YWR2YW5jZSgpO1xuXHRcdFx0dGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcblx0XHRcdFx0YWR2YW5jZSgpO1xuXHRcdFx0fSwgb3B0cy5zcGVlZCk7XG5cblx0XHRcdGlmIChvcHRzLm9uU3RhcnQpIHtcblx0XHRcdFx0b3B0cy5vblN0YXJ0KCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBsYXlpbmcgPSBmYWxzZTtcblx0XHRcdHNlbGVjdChjb250YWluZXIgKyBcIiAjcGxheUJ1dHRvblwiKS5hdHRyKFwic3JjXCIsIGltYWdlcy5wbGF5KTtcblx0XHRcdGNsZWFyVGltZW91dCh0aW1lcik7XG5cblx0XHRcdGlmIChvcHRzLm9uU3RvcCkge1xuXHRcdFx0XHRvcHRzLm9uU3RvcCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpOyAvLyBvdGhlcndpc2UgY2xpY2tpbmcgdGhlIHBsYXkgYnV0dG9uIHRyaWdnZXJzIHRoZSBmb2xsb3dpbmcgaGFuZGxlciBhbmQgcmVzZXRzIHRoZSB2YWx1ZSB0byB0aGUgbWluXG5cdH0pO1xuXG5cdGVsZW1lbnQub24oXCJjbGlja1wiLCBmdW5jdGlvbihlLCBkKSB7XG5cdFx0Y2xpY2tlZE9yRHJhZ2dlZChlKTtcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRvcHRpb25zOiBvcHRzLFxuXHRcdGhlaWdodDogIG9wdHMuaGVpZ2h0LFxuXHRcdHdpZHRoOiAgIG9wdHMud2lkdGgsXG5cdFx0YXhlc19sYXllcjpcdCBheGVzX2xheWVyLFxuXHRcdGRhdGFfbGF5ZXI6IGRhdGFfbGF5ZXIsXG5cdFx0c2NhbGU6ICAgeFNjYWxlLFxuXHRcdGF4aXM6IHgsXG5cdFx0Ly8gYWR2YW5jZTogYWR2YW5jZSxcblx0XHRkb21haW46ICBvcHRzLmRvbWFpbixcblx0XHRzZXRWYWx1ZTogc2V0LFxuXHRcdGdldFZhbHVlOiBnZXQsXG5cdFx0cmVzaXplOiByZXNpemUsXG5cdFx0cGxheWluZzogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gcGxheWluZ1xuXHRcdH0sXHRcdFxuXHRcdHN0YXJ0OiBmdW5jdGlvbihzdGFydFZhbHVlKSB7XG5cdFx0XHRwbGF5aW5nID0gdHJ1ZTtcblx0XHRcdHNlbGVjdChjb250YWluZXIgKyBcIiAjcGxheUJ1dHRvblwiKS5hdHRyKFwic3JjXCIsIGltYWdlcy5zdG9wKTtcblx0XHRcdGlmIChzdGFydFZhbHVlKSB7XG5cdFx0XHRcdHNldChzdGFydFZhbHVlKTtcdFx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHQvLyBhZHZhbmNlKCk7XG5cdFx0XHR0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRhZHZhbmNlKCk7XG5cdFx0XHR9LCBvcHRzLnNwZWVkKTtcblxuXHRcdFx0aWYgKG9wdHMub25TdGFydCkge1xuXHRcdFx0XHRvcHRzLm9uU3RhcnQoKTtcblx0XHRcdH1cdFx0XHRcdFxuXHRcdH0sXG5cdFx0c3RvcDogZnVuY3Rpb24oKSB7XG5cdFx0XHRwbGF5aW5nID0gZmFsc2U7XG5cdFx0XHRzZWxlY3QoY29udGFpbmVyICsgXCIgI3BsYXlCdXR0b25cIikuYXR0cihcInNyY1wiLCBpbWFnZXMucGxheSk7XG5cdFx0XHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHRcdFx0aWYgKG9wdHMub25TdG9wKSB7XG5cdFx0XHRcdG9wdHMub25TdG9wKCk7XG5cdFx0XHR9XG5cdFx0fSxcdFx0XG5cdFx0bG9jazogZnVuY3Rpb24oKSB7XG5cdFx0XHRvcHRzLmxvY2tlZCA9IHRydWU7XG5cdFx0XHRlbGVtZW50LmNsYXNzZWQoXCJsb2NrZWRcIiwgdHJ1ZSk7XG5cdFx0fSxcblx0XHR1bmxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0b3B0cy5sb2NrZWQgPSBmYWxzZTtcblx0XHRcdGVsZW1lbnQuY2xhc3NlZChcImxvY2tlZFwiLCBmYWxzZSk7XHRcdFx0XHRcblx0XHR9LFxuXHRcdHNldEJ1dHRvbkNvbG9yOiBmdW5jdGlvbihjb2xvcikge1xuXHRcdFx0aWYgKGNvbG9yID09IFwid2hpdGVcIikge1xuXHRcdFx0XHRpbWFnZXMucGxheSA9IGltYWdlcy5wbGF5X3doaXRlO1xuXHRcdFx0XHRpbWFnZXMuc3RvcCA9IGltYWdlcy5zdG9wX3doaXRlO1xuXHRcdFx0fSBlbHNlIGlmIChjb2xvciA9PSBcImhvbGxvd1wiKSB7XG5cdFx0XHRcdGltYWdlcy5wbGF5ID0gaW1hZ2VzLnBsYXlfaG9sbG93O1xuXHRcdFx0XHRpbWFnZXMuc3RvcCA9IGltYWdlcy5wYXVzZV9ob2xsb3c7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpbWFnZXMucGxheSA9IGltYWdlcy5wbGF5X2dyYXk7XG5cdFx0XHRcdGltYWdlcy5zdG9wID0gaW1hZ2VzLnN0b3BfZ3JheTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG9wdHMucGxheUJ1dHRvbiAmJiBwbGF5aW5nKSB7XG5cdFx0XHRcdHNlbGVjdChjb250YWluZXIgKyBcIiAjcGxheUJ1dHRvblwiKS5hdHRyKFwic3JjXCIsIGltYWdlcy5zdG9wKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGVjdChjb250YWluZXIgKyBcIiAjcGxheUJ1dHRvblwiKS5hdHRyKFwic3JjXCIsIGltYWdlcy5wbGF5KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gczUoKSB7XG5cdHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMClcblx0XHQudG9TdHJpbmcoMTYpXG5cdFx0LnN1YnN0cmluZygxKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZDNzbGlkZXIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8ubnBtLWdsb2JhbC9saWIvbm9kZV9tb2R1bGVzL2J1bmRsZS1tb2R1bGUvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy5ucG0tZ2xvYmFsL2xpYi9ub2RlX21vZHVsZXMvYnVuZGxlLW1vZHVsZS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLm5wbS1nbG9iYWwvbGliL25vZGVfbW9kdWxlcy9idW5kbGUtbW9kdWxlL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LTMhLi9zbGlkZXIuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==