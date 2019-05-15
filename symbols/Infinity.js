"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgInfinity = function SvgInfinity(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "infinity_svg__a",
    cx: 32,
    cy: 16.015,
    r: 30.167,
    gradientTransform: "matrix(1 0 0 .9027 0 17.545)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#444a53"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#infinity_svg__a)",
    d: "M47.721 18.002c-7.822.097-11.438 5.357-15.721 9.25-4.282-3.893-7.898-9.153-15.72-9.25C7.591 17.895 2.066 24.23 2 32c.066 7.77 5.591 14.105 14.28 13.998 7.822-.096 11.438-5.357 15.72-9.25 4.282 3.893 7.898 9.154 15.721 9.25C56.409 46.105 61.936 39.77 62 32c-.064-7.77-5.591-14.105-14.279-13.998zM16.28 40.57c-5.666 0-8.854-3.75-8.917-8.57.063-4.82 3.251-8.569 8.917-8.569 5.637 0 9.094 4.861 12.125 8.569-3.031 3.709-6.488 8.57-12.125 8.57zm31.441 0c-5.638 0-9.095-4.861-12.126-8.57 3.031-3.709 6.488-8.569 12.126-8.569 5.666 0 8.854 3.749 8.917 8.569-.064 4.82-3.251 8.57-8.917 8.57z"
  }));
};

var _default = SvgInfinity;
exports["default"] = _default;