"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPageWithCurl = function SvgPageWithCurl(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "page-with-curl_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -306.831,
    y1: 60.999,
    x2: -306.831,
    y2: 2,
    gradientTransform: "matrix(-1 0 0 1 -277.331 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b9c2c7"
  }), _react["default"].createElement("stop", {
    offset: 0.241,
    stopColor: "#d2d9dc"
  }), _react["default"].createElement("stop", {
    offset: 0.412,
    stopColor: "#e6ebed"
  })), _react["default"].createElement("path", {
    fill: "url(#page-with-curl_svg__a)",
    d: "M3.799 56.719L57 60.999V2H2v50.688c0 2.554.745 3.831 1.799 4.031z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M7 9h12v1H7zM7 13h45v1H7zM7 17h45v1H7zM7 21h45v1H7zM7 25h28v1H7zM7 29h45v1H7zM7 33h45v1H7zM7 36.999h45v1H7zM7 40.999h16v1H7zM7 44.999h45v1H7zM7 48.999h45v1H7zM7 52.999h45v1H7z"
  }), _react["default"].createElement("linearGradient", {
    id: "page-with-curl_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -310.231,
    y1: 43.5,
    x2: -310.231,
    y2: 18.399,
    gradientTransform: "matrix(-1 -.0875 0 1 -277.331 -11.466)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3bbbf"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#dbdfe1"
  }), _react["default"].createElement("stop", {
    offset: 0.387,
    stopColor: "#f5f6f7"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#page-with-curl_svg__b)",
    d: "M8.492 41.999L62 52.471c-.244 5.51-1.158 9.807-4.615 9.516-18.43-1.555-53.586-5.268-53.586-5.268 4.849-.531 4.693-6.622 4.693-14.72z"
  }));
};

var _default = SvgPageWithCurl;
exports["default"] = _default;