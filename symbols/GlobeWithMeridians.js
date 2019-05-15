"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlobeWithMeridians = function SvgGlobeWithMeridians(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "globe-with-meridians_svg__a",
    cx: 32.167,
    cy: 18.333,
    r: 34.086,
    gradientTransform: "matrix(-1 -.0094 .0121 -1.28 64.11 42.104)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0dacd0"
  }), _react["default"].createElement("stop", {
    offset: 0.15,
    stopColor: "#0ca6cd"
  }), _react["default"].createElement("stop", {
    offset: 0.342,
    stopColor: "#0997c4"
  }), _react["default"].createElement("stop", {
    offset: 0.556,
    stopColor: "#037cb6"
  }), _react["default"].createElement("stop", {
    offset: 0.66,
    stopColor: "#006dae"
  }), _react["default"].createElement("stop", {
    offset: 0.847,
    stopColor: "#0064a3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#015996"
  })), _react["default"].createElement("path", {
    fill: "url(#globe-with-meridians_svg__a)",
    d: "M32 2C18.099 2 2 15.433 2 32c0 16.568 13.432 30 30 30 13.901 0 30-13.433 30-30C62 15.432 48.568 2 32 2zM6.085 34h8.981c.229 3.919 1.109 7.635 2.382 11h-7.95a25.794 25.794 0 0 1-3.413-11zM34 15V7.285c1.785 1.481 4.143 4.155 6.22 7.715H34zm8.238 4c1.395 3.241 2.427 6.958 2.69 11H34V19h8.238zM30 7.285V15h-6.22c2.077-3.56 4.435-6.233 6.22-7.715zM30 19v11H19.072c.263-4.042 1.295-7.759 2.69-11H30zM15.065 30h-8.98a25.795 25.795 0 0 1 3.414-11h7.949c-1.273 3.365-2.153 7.081-2.383 11zm4.007 4H30v11h-8.238c-1.394-3.241-2.426-6.958-2.69-11zM30 49v7.715c-1.785-1.482-4.143-4.155-6.22-7.715H30zm4 7.715V49h6.22c-2.077 3.56-4.435 6.233-6.22 7.715zM34 45V34h10.928c-.263 4.042-1.295 7.759-2.69 11H34zm14.935-11h8.981a25.795 25.795 0 0 1-3.414 11h-7.949c1.272-3.365 2.152-7.081 2.382-11zm0-4c-.229-3.919-1.109-7.635-2.382-11h7.949a25.808 25.808 0 0 1 3.414 11h-8.981zm2.712-15h-6.864c-1.574-3.102-3.43-5.786-5.286-7.893A26.039 26.039 0 0 1 51.647 15zM24.502 7.107C22.646 9.214 20.79 11.898 19.216 15h-6.864a26.054 26.054 0 0 1 12.15-7.893zM12.353 49h6.864c1.574 3.103 3.43 5.786 5.286 7.894A26.053 26.053 0 0 1 12.353 49zm27.145 7.894c1.856-2.107 3.712-4.791 5.286-7.894h6.864a26.058 26.058 0 0 1-12.15 7.894z"
  }));
};

var _default = SvgGlobeWithMeridians;
exports["default"] = _default;