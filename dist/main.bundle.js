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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/MyFile.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/MyFile.js":
/*!**********************!*\
  !*** ./js/MyFile.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/js/MyFile.js: 'import' and 'export' may only appear at the top level (30:4)\\n\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m\\u001b[36mconst\\u001b[39m \\u001b[33mSliderManager\\u001b[39m \\u001b[33m=\\u001b[39m () \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 30 | \\u001b[39m    \\u001b[36mimport\\u001b[39m slider_manager from \\u001b[32m\\\"../js\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 31 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 32 | \\u001b[39m    \\u001b[90m// document.addEventListener(\\\"DOMContentLoaded\\\", (e) => {\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 33 | \\u001b[39m    \\u001b[90m//     e.preventDefault();\\u001b[39m\\u001b[0m\\n    at Object._raise (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:723:17)\\n    at Object.raiseWithData (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:716:17)\\n    at Object.raise (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:710:17)\\n    at Object.parseStatementContent (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10973:18)\\n    at Object.parseStatement (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10882:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11456:25)\\n    at Object.parseBlockBody (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11443:10)\\n    at Object.parseBlock (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11427:10)\\n    at Object.parseFunctionBody (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10435:24)\\n    at Object.parseArrowExpression (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10404:10)\\n    at Object.parseParenAndDistinguishExpression (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10030:12)\\n    at Object.parseExprAtom (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:9786:21)\\n    at Object.parseExprAtom (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:4543:20)\\n    at Object.parseExprSubscripts (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:9451:23)\\n    at Object.parseMaybeUnary (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:9431:21)\\n    at Object.parseExprOps (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:9301:23)\\n    at Object.parseMaybeConditional (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:9274:23)\\n    at Object.parseMaybeAssign (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:9229:21)\\n    at Object.parseVar (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11538:26)\\n    at Object.parseVarStatement (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11350:10)\\n    at Object.parseStatementContent (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10949:21)\\n    at Object.parseStatement (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10882:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11456:25)\\n    at Object.parseBlockBody (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:11443:10)\\n    at Object.parseTopLevel (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:10813:10)\\n    at Object.parse (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:12425:10)\\n    at parse (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/parser/lib/index.js:12476:38)\\n    at parser (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/dariuszk/Dokumenty/Programowanie/Moje_Projekty/MyProjects_ReactRout/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2pzL015RmlsZS5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/MyFile.js\n");

/***/ })

/******/ });