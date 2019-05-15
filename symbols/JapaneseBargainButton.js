"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseBargainButton = function SvgJapaneseBargainButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-bargain-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-bargain-button_svg__a)",
    d: "M2 32C2 15.436 15.439 2 32 2c16.572 0 30 13.436 30 30 0 16.57-13.428 30-30 30C15.439 62 2 48.57 2 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M22.239 22.815c-1.908 3.311-5.219 6.575-8.231 8.784.652 1.203 1.756 3.914 2.006 4.969a40.892 40.892 0 0 0 3.164-2.861v15.059h4.418v-20.18a33.436 33.436 0 0 0 2.762-4.165l-4.119-1.606zM25.753 16.841l-4.166-1.707c-1.506 2.359-4.467 5.221-7.025 6.928.6.954 1.606 2.911 1.957 3.915 3.162-2.208 6.828-5.873 9.234-9.136zM43.323 35.765v-1.758h3.764v-3.814H26.308v3.814h12.297v1.758H25.403v3.914h4.619l-2.459 1.608c1.504 1.506 3.26 3.563 4.064 4.971l3.363-2.41c-.703-1.205-2.209-2.813-3.564-4.168h7.178v4.52c0 .451-.15.602-.65.602-.504 0-1.959 0-3.465-.051.551 1.154 1.205 2.861 1.355 4.117 2.561 0 4.367-.051 5.721-.703 1.406-.652 1.758-1.809 1.758-3.865v-4.619h4.668v-3.914h-4.668zM46.335 16.188H27.761v12.55h18.574v-12.55zm-4.969 9.487h-8.885v-1.756h8.885v1.756zm0-4.668h-8.885v-1.705h8.885v1.705z"
  }));
};

var _default = SvgJapaneseBargainButton;
exports["default"] = _default;