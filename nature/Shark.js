"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShark = function SvgShark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "shark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 45.008,
    y1: 15.024,
    x2: 45.008,
    y2: 2.367
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#shark_svg__a)",
    d: "M31.381 8.69l18.317 6.334C47.976 4.765 61.131 4.742 58.211 3.778 43.055-1.226 31.381 8.69 31.381 8.69z"
  }), _react["default"].createElement("linearGradient", {
    id: "shark_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 30.723,
    y1: 32.729,
    x2: 30.723,
    y2: 18.276
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#shark_svg__b)",
    d: "M27.596 18.276s1.627 7.364-7.3 12.826c-4.987 3.052 17.944 2.172 21.56-5.756l-14.26-7.07z"
  }), _react["default"].createElement("linearGradient", {
    id: "shark_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 2.117,
    y1: 32,
    x2: 61.05,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.123,
    stopColor: "#798b92"
  }), _react["default"].createElement("stop", {
    offset: 0.391,
    stopColor: "#8b9ba2"
  }), _react["default"].createElement("stop", {
    offset: 0.676,
    stopColor: "#96a5ab"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#shark_svg__c)",
    d: "M2.271 7.055c-1.242.912 5.228 8.65 11.287 10.98.588 3.729 9.893 3.928 18.747 9.146 8.959 5.279 17.917 15.704 7.066 23.956-14.02-5.338-23.722-.273-20.438.475 25.472 5.801.917 9.469 1.513 9.609 10.821 2.561 17.047-1.828 18.094-4.012 25.19-.67 28.116-29.258 14.348-43.538C41.592 1.956 14.846-2.183 2.271 7.055z"
  }), _react["default"].createElement("radialGradient", {
    id: "shark_svg__d",
    cx: 27.119,
    cy: 44.27,
    r: 32.066,
    gradientTransform: "matrix(.9842 0 0 1 1.498 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.739,
    stopColor: "#cbd4db"
  }), _react["default"].createElement("stop", {
    offset: 0.856,
    stopColor: "#d3dce2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e4ecf2"
  })), _react["default"].createElement("path", {
    fill: "url(#shark_svg__d)",
    d: "M2.271 7.055c-1.473.441 3.154 8.51 11.287 10.98.588 3.729 10.156 4.453 19.013 9.672 8.959 5.279 26.429 22.5 5.97 29.502 22.202 1.023 23.147-25.01 9.379-39.29C36.625 6.206 18.962 2.04 2.271 7.055z"
  }), _react["default"].createElement("linearGradient", {
    id: "shark_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 53.568,
    y1: 28.081,
    x2: 53.568,
    y2: 13.873
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.123,
    stopColor: "#798b92"
  }), _react["default"].createElement("stop", {
    offset: 0.391,
    stopColor: "#8b9ba2"
  }), _react["default"].createElement("stop", {
    offset: 0.676,
    stopColor: "#96a5ab"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#shark_svg__e)",
    d: "M45.596 14.686c-2.095 2.988 2.956 8.957 15.455 13.279 5.111 1.816-11.921-18.32-15.455-13.279z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M32.571 13.684s1.426-1.857 1.468-3.377c.049-1.541.572-4.805-1.337-5.785 0 0 2.443.396 2.328 4.129-.109 3.738-1.207 4.207-2.459 5.033zM35.777 14.686s1.426-1.857 1.469-3.375c.048-1.543.57-4.805-1.338-5.787 0 0 2.443.396 2.328 4.129-.11 3.74-1.208 4.207-2.459 5.033zM38.951 15.565s1.427-1.857 1.469-3.377c.049-1.541.572-4.805-1.337-5.785 0 0 2.443.396 2.328 4.129-.109 3.738-1.207 4.207-2.46 5.033z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 21.278,
    cy: 5.526,
    rx: 1.992,
    ry: 2.004
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M20.862 4.601c0 .697-.83.697-.83 0 0-.699.83-.699.83 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.559 18.036c-2.022-6.672 9.524-.303 17.822-6.672-6.534 2.502-28.28-2.932-17.822 6.672z"
  }), _react["default"].createElement("radialGradient", {
    id: "shark_svg__f",
    cx: 19.403,
    cy: 15.024,
    r: 7,
    gradientTransform: "matrix(.9842 0 0 1 1.498 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5000d"
  }), _react["default"].createElement("stop", {
    offset: 0.222,
    stopColor: "#f2000d"
  }), _react["default"].createElement("stop", {
    offset: 0.417,
    stopColor: "#e7000b"
  }), _react["default"].createElement("stop", {
    offset: 0.602,
    stopColor: "#d50009"
  }), _react["default"].createElement("stop", {
    offset: 0.78,
    stopColor: "#bc0106"
  }), _react["default"].createElement("stop", {
    offset: 0.953,
    stopColor: "#9b0101"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#910100"
  })), _react["default"].createElement("path", {
    fill: "url(#shark_svg__f)",
    d: "M27.861 12.012s-1.165.334-1.598 1.627c-.286-.148-.911-1.531-.911-1.531s-1.406.23-1.916 2.053c-.341-.213-1.102-2.072-1.102-2.072s-1.453.574-1.709 2.246c-.34-.34-1.013-2.301-1.013-2.301s-1.445.877-1.336 2.313c-.369-.268-1.544-2.324-1.544-2.324s-.915.871-.655 2.459c-.418-.158-2.156-2.291-2.156-2.291s-.464 1.34-.162 2.906c-1.405-.691-2.358-2.162-2.358-2.162s.192 1.572.919 2.848c0 0-.35.143-1.007-.24.533.994 1.576 2.014 2.245 2.494-1.659-5.668 8.259-.924 16.317-5.668.009-.007-1.127.296-2.014-.357z"
  }));
};

var _default = SvgShark;
exports["default"] = _default;