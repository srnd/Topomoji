"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgKissingFaceWithSmilingEyes = function SvgKissingFaceWithSmilingEyes(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "kissing-face-with-smiling-eyes_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
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
    fill: "url(#kissing-face-with-smiling-eyes_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M37.575 27.772c2.987-4.798 8.768-5.817 13.218-2.331.682.534.899-.211.623-.716-5.499-10.057-12.945-8.744-14.674 2.587-.086.57.373 1.195.833.46zM16.038 31.57c2.99-4.798 8.768-5.818 13.218-2.331.682.533.901-.211.624-.717-5.5-10.056-12.945-8.743-14.675 2.588-.086.57.374 1.195.833.46zM44.668 48.61c1.273-1.89-2.315-2.603-2.82-5.466-.502-2.859 2.626-4.758.782-6.095-2.205-1.604-6.014.575-8.994-1.594.374 2.12 2.559 4.118 5.883 3.533 0 0-2.098 1.308-1.479 4.827.623 3.521 3.042 4.033 3.042 4.033-3.324.586-4.691 3.211-4.319 5.33 2.058-3.051 6.382-2.309 7.905-4.568z"
  }));
};

var _default = SvgKissingFaceWithSmilingEyes;
exports["default"] = _default;