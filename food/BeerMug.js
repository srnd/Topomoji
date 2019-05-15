"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBeerMug = function SvgBeerMug(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B8CAD9",
    d: "M40.683 13.776v9.162s1.104-2.222 1.663-2.452c.937-.38 7.364-.281 8.126.089 1.486.725 1.365 10.317-.113 18.675-.326 1.844-3.408 4.527-6.544 5.744-1.573.611-3.132-2.52-3.132-2.52l.988 13.302s1.313-3.039 2.111-3.865c2.357-2.438 8.621-4.294 10.625-7.616 2.678-4.438 3.717-22.589.996-26.495-2.195-3.151-4.24-2.56-13.09-2.56-.945-.016-1.63-1.464-1.63-1.464z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M42.349 20.486c.936-.38 7.363-.281 8.125.089.676.329 1.016 2.496 1.051 5.536.045-3.647-.291-6.333-1.051-6.703-.762-.37-5.91-.089-8.125-.089-.762 0-1.664-2.548-1.664-2.548v6.167s1.103-2.222 1.664-2.452zM54.409 43.13c-1.848 3.063-10.559 4.523-12.984 9.305l.248 3.343s1.314-3.039 2.111-3.865c2.357-2.438 8.621-4.294 10.625-7.616 1.629-2.699 2.65-10.473 2.588-17.028-.06 6.284-1.055 13.32-2.588 15.861z"
  }), _react["default"].createElement("path", {
    fill: "#C5D7E8",
    d: "M42.082 47.159V6.958c0-1.277-33.164-1.277-33.164 0v40.201C8.918 50.19 7 59.149 7 59.149c0 3.801 37 3.801 37 0 0 0-1.918-8.959-1.918-11.99z"
  }), _react["default"].createElement("linearGradient", {
    id: "beer-mug_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 25.5,
    y1: 53.632,
    x2: 25.5,
    y2: 14.77
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.375,
    stopColor: "#f39b01"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#eb9203"
  }), _react["default"].createElement("stop", {
    offset: 0.881,
    stopColor: "#dd8205"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d47706"
  })), _react["default"].createElement("path", {
    fill: "url(#beer-mug_svg__a)",
    d: "M10 15.793s1.207 35.334 2.439 35.958h.017c1.022 1.268 7.06 1.895 13.044 1.881 5.986.014 12.021-.613 13.044-1.881h.017C39.793 51.128 41 15.793 41 15.793c-.162-1.365-30.838-1.365-31 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFE8C9",
    d: "M10 7.358v8.435c11.438-.333 19.563-.333 31 0V7.358c0-.967-31-.967-31 0z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M24.925 43.12c0 3.332-5 3.332-5 0 0-3.334 5-3.334 5 0zM21.175 35.272c0 2-3 2-3 0s3-2 3 0zM25.675 32.271c0 2.667-4 2.667-4 0 0-2.666 4-2.667 4 0zM20.675 26.646c0 1.333-2 1.333-2 0s2-1.333 2 0z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M10.409 54.562c12.143 4.432 14.516 5.307 28.403-.234-10.499 1.237-18.624 1.872-28.403.234z"
  }), _react["default"].createElement("path", {
    fill: "#96AAB0",
    d: "M14.84 57.485c7.907 2.92 16.807 2.174 25.069-1.254-8.43.36-16.591 1.774-25.069 1.254z"
  }), _react["default"].createElement("linearGradient", {
    id: "beer-mug_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 14.207,
    y1: 48.071,
    x2: 14.207,
    y2: 7.913
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.114,
    stopColor: "#fff",
    stopOpacity: 0.114
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "url(#beer-mug_svg__b)",
    d: "M12.169 12.797c.207 12.086.905 24.474.126 33.937-.108 1.312 3.814 2.144 3.862.126.224-9.241-.049-22.89-.137-34.063h-3.851z"
  }), _react["default"].createElement("path", {
    fill: "#FFF3E3",
    d: "M8.333 8.986c.19-3.789 2.165-3.559 4.229-4.015 2.115-.468 2.703-1.654 5.934-2.617 4.426-1.319 8.167 1.542 11.75.583 6.881-1.84 14.182 3.588 11.836 6.227-.822-1.251-3.24-2.935-5.488.625-1.5 2.375.116 6.096.116 8.688 0 3.502-2.741 3.097-2.741 0 0-2.757 1.24-6.499-.85-7.775-5.025-3.069-7.786 3.75-10.695.277-4.096-4.889-5.393 2.716-8.424-1.94-1.75-2.688-5.811 2.83-5.667-.053z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.355 5.873s-3.559-.26-4.152 1.667 3.051-.667 4.152-1.667zM34.919 16.437s-1.292 1.839-.16 3.481c.687.993.16-3.481.16-3.481zM17.431 5.986c2.523-.237 2.305.518 4.957.518 3.369 0 4.123-1.856 7.677-1.551 0 0-3.638-1.509-8.522.449 0 0-.021-.51 1.12-1.387-2.666.163-3.174 1.449-5.232 1.971z"
  }));
};

var _default = SvgBeerMug;
exports["default"] = _default;