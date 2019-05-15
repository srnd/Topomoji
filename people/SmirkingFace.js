"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSmirkingFace = function SvgSmirkingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "smirking-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -211.915,
    y1: 275.918,
    x2: -211.915,
    y2: 276.918,
    gradientTransform: "matrix(60 0 0 -60 12746.906 16617.063)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#smirking-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M26.659 50.002c7.75 2.006 17.272-1.016 21.293-7.303.329-.516-.183-1.064-.7-.654-4.201 3.316-13.118 5.785-19.648 3.875-2.5-.731-3.586 3.398-.945 4.082zM29.196 29.917c-3.35-3.887-13.57-2.729-17.043 3.106-.232.391.077.867.61.539 3.354-2.062 7.571-1.958 7.571-1.958.008 2.808 2.227 5.083 4.967 5.083 3.97.001 5.86-4.49 3.895-6.77zM54.529 29.917c-3.35-3.887-13.57-2.729-17.043 3.106-.232.391.077.867.61.539 3.354-2.062 7.571-1.958 7.571-1.958.008 2.808 2.227 5.083 4.967 5.083 3.97.001 5.86-4.49 3.895-6.77z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M57.813 23.807c-3.188-4.168-8.717-7.32-12.318-7.269-.76.012-1.883 2.519-1.248 2.592 4.877.558 9.777 2.756 12.965 6.412.429.491 1.079-1.108.601-1.735zM6.189 23.811c3.186-4.172 8.715-7.322 12.314-7.271.762.01 1.885 2.52 1.248 2.591-4.875.56-9.777 2.756-12.965 6.412-.425.493-1.077-1.107-.597-1.732z"
  }));
};

var _default = SvgSmirkingFace;
exports["default"] = _default;