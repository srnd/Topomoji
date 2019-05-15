"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRelievedFace = function SvgRelievedFace(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "relieved-face_svg__a",
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
    fill: "url(#relieved-face_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M54.221 21.311c-3.863-3.551-9.855-5.695-13.393-5.019-.748.144-1.418 2.808-.779 2.769 4.898-.299 10.107 1.016 13.883 4.063.504.409.869-1.28.289-1.813zM9.781 21.313c3.861-3.554 9.854-5.696 13.393-5.021.745.142 1.416 2.809.777 2.768-4.898-.297-10.107 1.016-13.881 4.063-.506.414-.871-1.277-.289-1.81z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M27.55 26.932c-3.647 3.965-10.198 5.119-14.981 2.641-.731-.38-1.022.222-.744.604 5.563 7.596 14.002 6.107 16.629-2.933.134-.454-.345-.92-.904-.312zM51.433 29.573c-4.784 2.478-11.334 1.323-14.981-2.644-.558-.606-1.037-.141-.906.314 2.63 9.039 11.068 10.527 16.631 2.932.278-.38-.011-.982-.744-.602zM44.924 43.591c-7.873 5.242-17.982 5.239-25.85 0-1.115-.74-1.251.06-.907.688 5.825 10.687 21.843 10.685 27.668 0 .342-.629.206-1.428-.911-.688z"
  }));
};

var _default = SvgRelievedFace;
exports["default"] = _default;