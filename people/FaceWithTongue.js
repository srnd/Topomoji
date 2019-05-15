"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceWithTongue = function SvgFaceWithTongue(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "face-with-tongue_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
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
    fill: "url(#face-with-tongue_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.877 37c-.32 0-6.65 2-15.875 2-9.227 0-15.555-2-15.875-2-.734 0-1.125.508-1.125 1 0 7.271 5.959 15 17 15s17-7.729 17-15c0-.492-.391-1-1.125-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "face-with-tongue_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 41.46,
    x2: 32.002,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b32e24"
  }), _react["default"].createElement("stop", {
    offset: 0.01,
    stopColor: "#b63026"
  }), _react["default"].createElement("stop", {
    offset: 0.112,
    stopColor: "#d14136"
  }), _react["default"].createElement("stop", {
    offset: 0.224,
    stopColor: "#e54f42"
  }), _react["default"].createElement("stop", {
    offset: 0.35,
    stopColor: "#f4594b"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#fc5e50"
  }), _react["default"].createElement("stop", {
    offset: 0.739,
    stopColor: "#ff6052"
  })), _react["default"].createElement("path", {
    fill: "url(#face-with-tongue_svg__b)",
    d: "M22.002 44.85v3.994c0 8.758 4.479 13.152 10 13.156 5.521-.004 10-4.398 10-13.156V44.85c0-5.233-10-2.847-10-2.847s-10-2.387-10 2.847z"
  }), _react["default"].createElement("path", {
    fill: "#B81B1B",
    d: "M30.58 41.734l1.422 13.055 1.418-13.055c-.855.135-1.418.269-1.418.269s-.566-.134-1.422-.269z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 22,
    cy: 24.5,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 42,
    cy: 24.5,
    rx: 4.5,
    ry: 6
  }));
};

var _default = SvgFaceWithTongue;
exports["default"] = _default;