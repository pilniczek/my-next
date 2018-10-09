webpackHotUpdate("static\\development\\pages\\portfolio.js",{

/***/ "./components/CardExtended.jsx":
/*!*************************************!*\
  !*** ./components/CardExtended.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Iterator */ "./components/Iterator.jsx");
var _jsxFileName = "G:\\_TPI\\next\\components\\CardExtended.jsx";




var CardExtended = function CardExtended(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      content = _ref.content,
      links = _ref.links,
      influence = _ref.influence;
  var colors = {
    'Omnio Digital': 'warning',
    Zaraguza: 'danger',
    SiteOne: 'info',
    ShopUP: 'success'
  };
  var chosenColor = colors[subtitle] || '';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card mb-4 border-".concat(chosenColor),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-subtitle text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-".concat(chosenColor),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, subtitle), ", ".concat(influence, " influence"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "card-text mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Iterator__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: links.map(function (item) {
      return {
        href: item.href,
        label: item.label
      };
    }),
    Component: function Component(_ref2) {
      var href = _ref2.href,
          label = _ref2.label;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "card-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, label);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))));
};

CardExtended.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  subtitle: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired,
  links: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__["arrayOf"])(prop_types__WEBPACK_IMPORTED_MODULE_1__["object"]).isRequired,
  influence: prop_types__WEBPACK_IMPORTED_MODULE_1__["string"].isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CardExtended);

/***/ })

})
//# sourceMappingURL=portfolio.js.2303fc24f888ec4d988b.hot-update.js.map