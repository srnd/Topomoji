"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaceWithRaisedEyebrow = function SvgFaceWithRaisedEyebrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "face-with-raised-eyebrow_svg__a",
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
    fill: "url(#face-with-raised-eyebrow_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#917524",
    d: "M11.316 21.788c7.516-3.538 13.432 2.343 16.141.504.682-.464 1.477 1.093.82 1.593-3.529 2.688-10.111-2.521-15.701.899-.767.47-2.088-2.606-1.26-2.996zM35.672 18.375c9.51-3.941 10.494-9.875 17.061-1.803.545.672-2.051 2.186-2.615 1.527-4.773-5.547-4.596-.59-13.719 1.889-.917.249-1.315-1.369-.727-1.613z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 22,
    cy: 30.6,
    r: 4.5
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 41.999,
    cy: 29.1,
    rx: 4.5,
    ry: 6
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M37.106 48H26.894c-2.524 0-2.524-4 0-4h10.212c2.524 0 2.524 4 0 4z"
  }));
};

var _default = SvgFaceWithRaisedEyebrow;
exports["default"] = _default;