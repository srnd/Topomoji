"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEndArrow = function SvgEndArrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "end-arrow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 20,
    x2: 61,
    y2: 20
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.32,
    stopColor: "#41444e"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#343240"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#end-arrow_svg__a)",
    d: "M3 20L19 4v10h42v12H19v10z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.397 57.617v1.86c0 .335-.188.522-.523.522H15.786c-.336 0-.522-.188-.522-.522v-14.36c0-.336.187-.523.522-.523H23.765c.335 0 .522.188.522.523v1.859c0 .336-.188.522-.522.522H18.29v3.296h4.924c.336 0 .522.188.522.522v1.794c0 .335-.187.522-.522.522H18.29v3.461h5.584c.335.002.523.189.523.524zM35.389 44.594h1.982c.334 0 .521.188.521.523v14.36c0 .335-.188.522-.521.522H36c-.275 0-.5-.104-.645-.336l-5.771-9.183v8.996c0 .335-.187.522-.521.522h-1.981c-.336 0-.522-.188-.522-.522v-14.36c0-.336.187-.523.522-.523h1.37c.275 0 .501.105.644.336l5.772 9.184v-8.996c-.001-.336.187-.523.521-.523zM54.736 52.297c0 4.33-3.18 7.703-7.428 7.703H41.282c-.336 0-.521-.188-.521-.522v-14.36c0-.336.186-.523.521-.523h6.025c4.25-.001 7.429 3.372 7.429 7.702zm-2.916 0c0-2.845-1.838-4.798-4.512-4.798h-3.521v9.596h3.521c2.674 0 4.512-1.953 4.512-4.798z"
  }));
};

var _default = SvgEndArrow;
exports["default"] = _default;