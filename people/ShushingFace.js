"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShushingFace = function SvgShushingFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "shushing-face_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 58,
    x2: 32.001,
    y2: 2.001
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
    fill: "url(#shushing-face_svg__a)",
    cx: 32,
    cy: 30,
    r: 28
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 22.666,
    cy: 21.867,
    rx: 4.199,
    ry: 5.6
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 41.332,
    cy: 21.867,
    rx: 4.199,
    ry: 5.6
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M39.062 38.422c0 3.688-9.213 3.688-9.213 0 0-3.683 9.213-3.683 9.213 0z"
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M48.846 12.57c-3.621-2.787-8.98-4.193-12-3.338-.637.184-1.016 2.543-.465 2.461 4.227-.631 8.846.115 12.35 2.473.472.316.66-1.178.115-1.596zM15.156 12.574c3.619-2.791 8.98-4.195 11.998-3.34.639.18 1.018 2.543.467 2.459-4.227-.629-8.846.115-12.35 2.473-.47.318-.66-1.176-.115-1.592z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M33.465 32.463c0 4.106-2.64 11.563-2.64 11.563l8.715-.458s1.504-5.851 1.764-10.978c.311-6.095-7.839-6.332-7.839-.127z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M38.105 41.78l-4.591.242s1.811-5.065 1.811-9.56c0-3.644 4.227-3.619 4.118.072-.147 4.967-1.338 9.246-1.338 9.246z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M38.65 39.475c-4.188 0-9.657 2.346-11.289 8.953-3.617 13.867 14.263 17.996 17.813 8.221 1.305-3.685 2.955-5.419 4.159-6.685 4.357-3.97-.294-7.827-2.975-6.904-1.304-2.173-4.223-3.585-7.708-3.585z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M49.191 46.801c-.009 1.514-3.508 2.709-5.815 9.226-2.636 7.444-17.148 4.591-14.25-7.153 2.468-9.998 14.997-8.713 15.994-3.836.295 1.43-1.399 2.148-1.408 2.134a6.906 6.906 0 0 0-6.697-3.3c3.795.047 9.339 5.608 4.647 6.684-2.731-3.138-6.109-3.108-7.834-2.892 4.06.199 6.244 1.805 7.105 3.729.828 1.856-.626 4.763-2.501 2.767-1.25-1.332-2.706-2.063-5.019-2.001 2.365.63 3.673 1.413 4.771 2.943 1.945 2.718 4.987-.916 3.897-3.563 2.001-.617 2.51-2.089 2.025-3.406 1.675-.839 1.896-1.972 1.813-2.714 1.373-1.487 3.281-.015 3.272 1.382z"
  }));
};

var _default = SvgShushingFace;
exports["default"] = _default;