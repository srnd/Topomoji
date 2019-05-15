"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLeo = function SvgLeo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "leo_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#leo_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M47.805 40.865c-1.211 0-2.195.994-2.195 2.221 0 3.088-1.871 4.47-3.727 4.47-.961 0-1.85-.363-2.502-1.022-.783-.789-1.195-1.981-1.195-3.448 0-2.32 1.129-4.508 2.436-7.043 1.66-3.22 3.543-6.87 3.648-11.805.096-4.531-1.908-8.36-5.498-10.505-3.816-2.282-8.742-2.314-12.547-.079-3.586 2.106-5.607 5.958-5.545 10.567.037 2.658.617 4.556 1.414 6.018-4.528.403-8.094 4.27-8.094 8.972 0 4.97 3.98 9.013 8.873 9.013 4.892 0 8.873-4.043 8.873-9.013 0-4.81-2.131-6.976-3.844-8.715-1.555-1.582-2.785-2.831-2.832-6.336-.053-3.847 1.797-5.747 3.357-6.663 2.416-1.418 5.676-1.394 8.113.062 1.568.937 3.42 2.84 3.34 6.584-.084 3.896-1.643 6.92-3.152 9.845-1.443 2.796-2.934 5.689-2.934 9.099 0 3.378 1.352 5.451 2.484 6.595A7.842 7.842 0 0 0 41.883 52C45.916 52 50 48.939 50 43.086c0-1.227-.982-2.221-2.195-2.221zM22.873 43.78c-2.471 0-4.483-2.05-4.483-4.569s2.012-4.569 4.483-4.569 4.482 2.05 4.482 4.569c0 2.52-2.011 4.569-4.482 4.569z"
  }));
};

var _default = SvgLeo;
exports["default"] = _default;