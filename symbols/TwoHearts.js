"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTwoHearts = function SvgTwoHearts(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "two-hearts_svg__a",
    cx: -403.922,
    cy: -434.143,
    r: 9.31,
    gradientTransform: "matrix(2.6335 1.228 -1.3054 2.7993 527.32 1738.52)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#two-hearts_svg__a)",
    d: "M28.941 29.715c-1.459-12.604-19.916-16.554-25.65-4.254C-.557 33.713 4.56 42.819 13.886 62c20.688-5.184 30.958-7.115 34.806-15.367 5.736-12.3-9.157-23.901-19.751-16.918z"
  }), _react["default"].createElement("radialGradient", {
    id: "two-hearts_svg__b",
    cx: -558.669,
    cy: -452.921,
    r: 5.078,
    gradientTransform: "matrix(2.6335 -1.228 1.3054 2.7993 2109.216 588.747)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#ff1c23"
  }), _react["default"].createElement("stop", {
    offset: 0.621,
    stopColor: "#f6151b"
  }), _react["default"].createElement("stop", {
    offset: 0.952,
    stopColor: "#dd0404"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d90100"
  })), _react["default"].createElement("path", {
    fill: "url(#two-hearts_svg__b)",
    d: "M47.303 8.39c-5.777-3.809-13.898 2.518-10.771 9.226 2.099 4.5 7.697 5.556 18.981 8.383 5.088-10.462 7.881-15.43 5.782-19.931C58.168-.64 48.1 1.515 47.303 8.39z"
  }));
};

var _default = SvgTwoHearts;
exports["default"] = _default;