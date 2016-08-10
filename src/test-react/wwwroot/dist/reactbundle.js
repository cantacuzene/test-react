/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const React = __webpack_require__(339);
	const ReactDOM = __webpack_require__(340);
	const Hello_1 = __webpack_require__(341);
	ReactDOM.render(React.createElement(Hello_1.Hello, {compiler: "TypeScript", framework: "React"}), document.getElementById("example"));


/***/ },

/***/ 339:
/***/ function(module, exports) {

	module.exports = React;

/***/ },

/***/ 340:
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// A '.tsx' file enables JSX support in the TypeScript compiler, 
	// for more information see the following page on the TypeScript wiki:
	// https://github.com/Microsoft/TypeScript/wiki/JSX
	const React = __webpack_require__(339);
	class Hello extends React.Component {
	    render() {
	        return React.createElement("h1", null, "Hello from ", this.props.compiler, " and ", this.props.framework, "!");
	    }
	}
	exports.Hello = Hello;


/***/ }

/******/ });
//# sourceMappingURL=reactBundle.js.map