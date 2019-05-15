"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBird = function SvgBird(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "bird_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 44.815,
    y1: 40.96,
    x2: 55.815,
    y2: 19.085
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0068a6"
  }), _react["default"].createElement("stop", {
    offset: 0.157,
    stopColor: "#0079b1"
  }), _react["default"].createElement("stop", {
    offset: 0.511,
    stopColor: "#009bc7"
  }), _react["default"].createElement("stop", {
    offset: 0.805,
    stopColor: "#00b0d4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00b7d9"
  })), _react["default"].createElement("path", {
    fill: "url(#bird_svg__a)",
    d: "M59.812 22.265s1.092-6.168-3.536-3.441c0 0-.449-6.322-4.33-1.863 0 0-2.076-3.854-4.387-.271-3.115 4.83-5.186 12.367-3.176 24.987l3.754-2.49c2.699-7.906 12.36-8.758 13.677-13.053.945-3.078-2.002-3.869-2.002-3.869z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#006A8C",
    d: "M53.541 20.231c-2.209 4.419-3.689 8.75-4.545 12.767 1.959-3.25 4.584-6.469 8.042-9.453-3.009 3.637-5.405 7.664-7.188 11.725 0 0-2.147-1.462-4.885-1.83.361-3.666 1.658-8.101 3.91-13.53-1.301 4.791-1.789 9.062-1.655 12.7 1.247-3.728 3.27-7.876 6.321-12.379z"
  }), _react["default"].createElement("path", {
    fill: "#DE8F01",
    d: "M29.161 49.421c1.615 9.415-1.144 8.815-1.054 9.415-.342.596-3.089-.059-3.107.715-1.193.824-.907.931-.027.609.591.113 4.511.293 4.748-.313.295.617.516.92.768.92.207 0 .475-.674.798-1.01 1.285.504 1.979-.152 2.849.225-.189-1.117-2.73-.65-3.057-2.902-.587-4.035.391-7.832.391-7.832l-2.309.173z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M23.585 49.248c.607 10.521-2.49 9.483-2.387 10.244-.39.756-3.63.061-3.646 1.043-1.37 1.047-1.055 1.104-.046.699.676.143 5.159.369 5.427-.399.337.782.59 1.167.878 1.167.237 0 .546-.854.912-1.28 1.468.64 2.264-.192 3.256.284-.215-1.416-2.77-.284-3.075-3.153-.435-4.054 1.624-8.042 1.624-8.042-1.565-.092-2.943-.563-2.943-.563z"
  }), _react["default"].createElement("radialGradient", {
    id: "bird_svg__b",
    cx: 30.568,
    cy: 19.433,
    r: 29.876,
    gradientTransform: "matrix(1 0 0 1.1999 0 -3.885)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00b7d9"
  }), _react["default"].createElement("stop", {
    offset: 0.312,
    stopColor: "#00b4d7"
  }), _react["default"].createElement("stop", {
    offset: 0.514,
    stopColor: "#00acd2"
  }), _react["default"].createElement("stop", {
    offset: 0.685,
    stopColor: "#009dc8"
  }), _react["default"].createElement("stop", {
    offset: 0.838,
    stopColor: "#0088ba"
  }), _react["default"].createElement("stop", {
    offset: 0.979,
    stopColor: "#006da9"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0068a6"
  })), _react["default"].createElement("path", {
    fill: "url(#bird_svg__b)",
    d: "M54.041 34.195c-11.953 0-15.796-3.835-20.358-8.77-1.183-1.278-1.526-8.668-7.352-10.152 1.477-2.444 5.578-3.395 5.578-3.395s-4.351-1.487-7.814-.512c1.972-2.062 4.691-3.355 4.691-3.355s-12.436-.682-15.971 8.835c-4.651 2.265-6.652 10.682-2.319 15.307-2.833 11 7.189 19.574 20.235 19.574 19.214 0 27.168-17.532 23.31-17.532z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 15.053,
    cy: 22.925,
    r: 2.5
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M14.213 21.912c0 .834-1 .834-1 0s1-.834 1 0z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M2.838 26.448s4.037-.603 5.766-1.775c.438.155 1.466 1.464 1.281 1.891-.931 2.15-5.856 1.687-7.047-.116z"
  }), _react["default"].createElement("linearGradient", {
    id: "bird_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 23.549,
    x2: 10.955,
    y2: 23.549
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffc800"
  }), _react["default"].createElement("stop", {
    offset: 0.354,
    stopColor: "#fab201"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#f6a301"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f59e01"
  })), _react["default"].createElement("path", {
    fill: "url(#bird_svg__c)",
    d: "M9.886 26.563c-1.437.487-4.454-3.062-7.886-3.79.745-1.866 5.561-2.627 7.26-2.139 1.288.67 2.735 2.664.626 5.929z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M7.698 21.336c-.49.597 1.381.309 1.381.309.489-.597-.891-.906-1.381-.309z"
  }), _react["default"].createElement("linearGradient", {
    id: "bird_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 41.654,
    y1: 34.226,
    x2: 31.654,
    y2: 48.601
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#00b7d9"
  }), _react["default"].createElement("stop", {
    offset: 0.222,
    stopColor: "#00b3d6"
  }), _react["default"].createElement("stop", {
    offset: 0.449,
    stopColor: "#00a7ce"
  }), _react["default"].createElement("stop", {
    offset: 0.678,
    stopColor: "#0092c1"
  }), _react["default"].createElement("stop", {
    offset: 0.907,
    stopColor: "#0076af"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0068a6"
  })), _react["default"].createElement("path", {
    fill: "url(#bird_svg__d)",
    d: "M44.096 45.431s3.868 1.894 8.365 2.241c-8.591-5.864-8.934-13.281-15.766-17.426-7.822-4.746-16.916.417-14.215 7.961 2.889 8.07 9.906 13.527 21.723 11.631-4.982-.601-7.035-3.361-7.035-3.361 5.968 3.428 13.376 2.338 13.376 2.338-3.47-.934-6.448-3.384-6.448-3.384z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#006A8C",
    d: "M31.307 40.029c1.526 1.748 4.066.41 3.49-1.836-.787 1.01-2.211 1.759-3.49 1.836zM26.964 39.098c1.526 1.747 4.065.41 3.489-1.836-.787 1.009-2.211 1.758-3.489 1.836zM36.622 39.516c1.325 1.518 3.53.355 3.029-1.594-.682.877-1.919 1.526-3.029 1.594zM29.756 43.678c1.326 1.517 3.53.355 3.029-1.595-.682.877-1.919 1.526-3.029 1.595zM33.328 36.015c1.326 1.517 3.53.356 3.029-1.595-.682.877-1.919 1.527-3.029 1.595zM28.441 35.438c1.324 1.518 3.529.355 3.029-1.594-.683.877-1.919 1.527-3.029 1.594zM23.75 35.188c1.325 1.518 3.53.355 3.029-1.594-.682.877-1.919 1.527-3.029 1.594zM35.359 43.27c1.324 1.518 3.529.356 3.029-1.594-.683.877-1.919 1.527-3.029 1.594z"
  }));
};

var _default = SvgBird;
exports["default"] = _default;