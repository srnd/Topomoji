"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRibbon = function SvgRibbon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 33.145,
    y1: 20.811,
    x2: 11.162,
    y2: 52.928
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9e003e"
  }), _react["default"].createElement("stop", {
    offset: 0.074,
    stopColor: "#b00749"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#cc125b"
  }), _react["default"].createElement("stop", {
    offset: 0.366,
    stopColor: "#e21b69"
  }), _react["default"].createElement("stop", {
    offset: 0.532,
    stopColor: "#f12172"
  }), _react["default"].createElement("stop", {
    offset: 0.724,
    stopColor: "#fa2578"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fd267a"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__a)",
    d: "M33.189 18.95c-.333 13.497-11.571 24.456-12.3 39.05-3.492-6.568-6.271-12.74-6.271-12.74S6.095 47.54 2 51.035C6.095 32.857 22.118 29.65 24.999 18.594c2.481-1.294 8.048-.145 8.19.356z"
  }), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -31.395,
    y1: 20.811,
    x2: -53.378,
    y2: 52.928,
    gradientTransform: "matrix(-1 0 0 1 -.54 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#590023"
  }), _react["default"].createElement("stop", {
    offset: 0.042,
    stopColor: "#6d052d"
  }), _react["default"].createElement("stop", {
    offset: 0.135,
    stopColor: "#930d42"
  }), _react["default"].createElement("stop", {
    offset: 0.236,
    stopColor: "#b41553"
  }), _react["default"].createElement("stop", {
    offset: 0.343,
    stopColor: "#cf1b61"
  }), _react["default"].createElement("stop", {
    offset: 0.46,
    stopColor: "#e3206c"
  }), _react["default"].createElement("stop", {
    offset: 0.591,
    stopColor: "#f22374"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#fa2579"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fd267a"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__b)",
    d: "M30.81 18.95C31.143 32.447 42.381 43.406 43.111 58c3.492-6.568 6.27-12.74 6.27-12.74S57.905 47.54 62 51.035C57.905 32.857 41.881 29.65 39 18.594c-2.48-1.294-8.048-.145-8.19.356z"
  }), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 21.425,
    x2: 28.762,
    y2: 21.425
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fd267a"
  }), _react["default"].createElement("stop", {
    offset: 0.276,
    stopColor: "#fa2578"
  }), _react["default"].createElement("stop", {
    offset: 0.468,
    stopColor: "#f12172"
  }), _react["default"].createElement("stop", {
    offset: 0.634,
    stopColor: "#e21b69"
  }), _react["default"].createElement("stop", {
    offset: 0.786,
    stopColor: "#cc125b"
  }), _react["default"].createElement("stop", {
    offset: 0.926,
    stopColor: "#b00749"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9e003e"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__c)",
    d: "M28.256 14.935c-2.69.099-13.403-12.761-21.65-7.793C2.123 9.843.189 24.276 4.131 35.223c2.319 6.439 15.161-8.366 23.825-7.438 1.618.173.3-12.85.3-12.85z"
  }), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 15.952,
    y1: 38,
    x2: 15.952,
    y2: 25.701
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a80042"
  }), _react["default"].createElement("stop", {
    offset: 0.201,
    stopColor: "#a40040"
  }), _react["default"].createElement("stop", {
    offset: 0.41,
    stopColor: "#97003b"
  }), _react["default"].createElement("stop", {
    offset: 0.622,
    stopColor: "#830033"
  }), _react["default"].createElement("stop", {
    offset: 0.835,
    stopColor: "#660028"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4a001d"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__d)",
    d: "M4.248 35.401c2.516 7.901 16.702-4.439 23.708-7.616-12.504-5.06-26.223-.285-23.708 7.616z"
  }), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 35.237,
    y1: 21.425,
    x2: 62,
    y2: 21.425
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9e003e"
  }), _react["default"].createElement("stop", {
    offset: 0.074,
    stopColor: "#b00749"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#cc125b"
  }), _react["default"].createElement("stop", {
    offset: 0.366,
    stopColor: "#e21b69"
  }), _react["default"].createElement("stop", {
    offset: 0.532,
    stopColor: "#f12172"
  }), _react["default"].createElement("stop", {
    offset: 0.724,
    stopColor: "#fa2578"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fd267a"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__e)",
    d: "M35.744 14.935c2.689.099 13.403-12.761 21.649-7.793 4.483 2.702 6.417 17.134 2.476 28.081-2.32 6.439-15.16-8.367-23.826-7.438-1.617.173-.299-12.85-.299-12.85z"
  }), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 48.048,
    y1: 38,
    x2: 48.048,
    y2: 25.701
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a80042"
  }), _react["default"].createElement("stop", {
    offset: 0.201,
    stopColor: "#a40040"
  }), _react["default"].createElement("stop", {
    offset: 0.41,
    stopColor: "#97003b"
  }), _react["default"].createElement("stop", {
    offset: 0.622,
    stopColor: "#830033"
  }), _react["default"].createElement("stop", {
    offset: 0.835,
    stopColor: "#660028"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4a001d"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__f)",
    d: "M59.752 35.401c-2.516 7.901-16.703-4.439-23.709-7.616 12.505-5.06 26.224-.285 23.709 7.616z"
  }), _react["default"].createElement("linearGradient", {
    id: "ribbon_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 28.448,
    x2: 32.001,
    y2: 13.393
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cc0050"
  }), _react["default"].createElement("stop", {
    offset: 0.269,
    stopColor: "#ef4184"
  }), _react["default"].createElement("stop", {
    offset: 0.412,
    stopColor: "#ff5e9c"
  }), _react["default"].createElement("stop", {
    offset: 0.53,
    stopColor: "#fe4a90"
  }), _react["default"].createElement("stop", {
    offset: 0.685,
    stopColor: "#fe3684"
  }), _react["default"].createElement("stop", {
    offset: 0.842,
    stopColor: "#fd2a7c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fd267a"
  })), _react["default"].createElement("path", {
    fill: "url(#ribbon_svg__g)",
    d: "M36.445 28.006c-.847 1.021-2.58-.17-4.334-.148-1.826.023-3.675 1.213-4.557.148-1.835-2.216-1.668-11.61 0-14.104.799-1.192 2.674.081 4.532.101 1.8.018 3.585-1.256 4.358-.101 1.669 2.494 1.836 11.888.001 14.104z"
  }));
};

var _default = SvgRibbon;
exports["default"] = _default;