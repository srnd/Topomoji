"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGameDie = function SvgGameDie(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "game-die_svg__a",
    cx: 29.398,
    cy: 26.48,
    r: 31.777,
    gradientTransform: "matrix(1 0 0 .7174 0 7.483)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#e9eff3"
  }), _react["default"].createElement("stop", {
    offset: 0.689,
    stopColor: "#e0e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.933,
    stopColor: "#d1d9de"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("path", {
    fill: "url(#game-die_svg__a)",
    d: "M61.77 36.938c-.319-.147-34.534-34.334-34.706-34.705-.24-.514-2.459.016-4.959 1.182s-4.332 2.525-4.094 3.039c.115.248-9.191 41.664-9.357 41.832-.4.4.855 2.305 2.805 4.256 1.951 1.951 3.855 3.207 4.258 2.807.203-.205 41.518-9.504 41.831-9.359.512.24 1.875-1.594 3.039-4.092 1.167-2.502 1.694-4.722 1.183-4.96z"
  }), _react["default"].createElement("linearGradient", {
    id: "game-die_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 39.673,
    y1: 62.209,
    x2: 32.923,
    y2: 35.208
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bac3c6"
  }), _react["default"].createElement("stop", {
    offset: 0.343,
    stopColor: "#bec7ca"
  }), _react["default"].createElement("stop", {
    offset: 0.672,
    stopColor: "#c9d2d5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#dde4e8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#dde4e8"
  })), _react["default"].createElement("path", {
    fill: "url(#game-die_svg__b)",
    d: "M56.326 41.246l-19.719-5.953c-2.68-.811-6.364.043-8.227 1.906L14.679 50.9c-1.863 1.863-1.199 4.031 1.482 4.84l19.719 5.953c2.678.811 6.363-.043 8.225-1.904l13.703-13.705c1.862-1.861 1.2-4.029-1.482-4.838z"
  }), _react["default"].createElement("linearGradient", {
    id: "game-die_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 27.756,
    x2: 29.013,
    y2: 27.756
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#dbe3e6"
  }), _react["default"].createElement("stop", {
    offset: 0.882,
    stopColor: "#f2f8fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f6fbff"
  })), _react["default"].createElement("path", {
    fill: "url(#game-die_svg__c)",
    d: "M4.212 19.895c-1.863 1.863-2.717 5.545-1.906 8.227L8.261 47.84c.809 2.682 2.975 3.344 4.838 1.48L26.8 35.619c1.863-1.863 2.717-5.546 1.906-8.226L22.753 7.672c-.809-2.68-2.977-3.344-4.838-1.48L4.212 19.895z"
  }), _react["default"].createElement("linearGradient", {
    id: "game-die_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 33.898,
    y1: 30.104,
    x2: 52.306,
    y2: 11.695
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f6fbff"
  }), _react["default"].createElement("stop", {
    offset: 0.118,
    stopColor: "#f2f8fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#dbe3e6"
  })), _react["default"].createElement("path", {
    fill: "url(#game-die_svg__d)",
    d: "M54.957 15.739c-.92-2.777-3.92-5.775-6.693-6.695L27.835 2.27c-2.777-.92-4.281.586-3.361 3.363l6.773 20.426c.918 2.777 3.917 5.775 6.694 6.695l20.428 6.771c2.775.92 4.281-.586 3.361-3.361l-6.773-20.425z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M40.16 16.745c-1.061 0-1.838.408-2.072 1.219-.479 1.621 1.387 4.248 4.154 5.871 1.385.814 2.732 1.219 3.795 1.219 1.061 0 1.838-.404 2.078-1.219.477-1.623-1.385-4.25-4.156-5.871-1.381-.811-2.732-1.219-3.799-1.219z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M27.718 49.793c.818.289 1.303.813 1.262 1.498-.078 1.375-2.223 2.883-4.789 3.371-1.283.244-2.426.189-3.242-.104-.814-.287-1.301-.813-1.26-1.496.078-1.373 2.223-2.883 4.789-3.375 1.285-.242 2.43-.185 3.24.106zM40.137 47.002c.816.289 1.299.811 1.264 1.498-.082 1.373-2.219 2.881-4.789 3.371-1.281.242-2.428.186-3.24-.104-.813-.289-1.299-.813-1.26-1.5.078-1.373 2.221-2.881 4.786-3.371 1.28-.244 2.426-.185 3.239.106zM52.043 44.568c.814.291 1.301.811 1.262 1.5-.078 1.375-2.219 2.883-4.785 3.369-1.285.246-2.43.188-3.244-.102s-1.297-.811-1.26-1.498c.076-1.375 2.221-2.881 4.783-3.371 1.285-.245 2.433-.185 3.244.102z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.972 25.024c.734-.576 1.494-.715 2.098-.283 1.205.865 1.342 3.691.307 6.313-.518 1.313-1.232 2.322-1.969 2.9-.734.576-1.49.715-2.098.279-1.203-.863-1.342-3.685-.307-6.308.522-1.313 1.235-2.325 1.969-2.901zM9.605 21.563c.734-.576 1.492-.717 2.096-.285 1.205.865 1.344 3.691.307 6.313-.518 1.311-1.232 2.322-1.965 2.9-.738.574-1.494.715-2.096.281-1.211-.865-1.348-3.688-.311-6.311.52-1.312 1.233-2.32 1.969-2.898z"
  }));
};

var _default = SvgGameDie;
exports["default"] = _default;