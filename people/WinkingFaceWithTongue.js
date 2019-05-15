"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWinkingFaceWithTongue = function SvgWinkingFaceWithTongue(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "winking-face-with-tongue_svg__a",
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
    fill: "url(#winking-face-with-tongue_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.875 37c-.32 0-6.65 2-15.875 2-9.227 0-15.557-2-15.877-2-.732 0-1.125.508-1.125 1 0 7.271 5.961 15 17.002 15s17-7.729 17-15c0-.492-.391-1-1.125-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "winking-face-with-tongue_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 41.46,
    x2: 32,
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
    fill: "url(#winking-face-with-tongue_svg__b)",
    d: "M22 44.85v3.994C22 57.602 26.479 61.996 32 62c5.521-.004 10-4.398 10-13.156V44.85c0-5.233-10-2.847-10-2.847s-10-2.387-10 2.847z"
  }), _react["default"].createElement("path", {
    fill: "#B81B1B",
    d: "M30.578 41.734L32 54.789l1.418-13.055c-.855.135-1.418.269-1.418.269s-.566-.134-1.422-.269z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M52.25 24.925c0 5.247-4.257 9.5-9.5 9.5a9.5 9.5 0 1 1 9.5-9.5z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 42.75,
    cy: 24.925,
    r: 4.5
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M13.546 30.729c-.534.152-.759-.283-.294-.615 3.522-2.52 7.205-2.945 7.205-3.425 0-.368-2.745-2.167-7-3.276-.503-.131-.384-.66.192-.653C22.662 22.878 28 28.017 28 28.641c0 .544-6.976-.037-14.454 2.088z"
  }));
};

var _default = SvgWinkingFaceWithTongue;
exports["default"] = _default;