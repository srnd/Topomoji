"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHoneyPot = function SvgHoneyPot(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M58 28.567c0-3.003-1.752-5.905-5.054-7.508-8.41-4.103-33.533-4.103-41.941 0C7.701 22.662 6 25.564 6 28.567v17.517C6 55.494 13.707 62 32.025 62 50.344 62 58 55.393 58 46.084V28.567z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M51.132 21.36c0 6.607-38.264 6.607-38.264 0-.099-3.604 38.264-3.604 38.264 0z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M52.43 15.154H11.569v7.608c0 7.606 40.861 7.606 40.861 0v-7.608z"
  }), _react["default"].createElement("ellipse", {
    fill: "#F59E01",
    cx: 31.949,
    cy: 15.555,
    rx: 20.48,
    ry: 5.206
  }), _react["default"].createElement("path", {
    fill: "#99480E",
    d: "M46.837 15.554c-4.066-4.068-25.708-4.068-29.773 0 4.062 4.069 25.71 4.069 29.773 0z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M6 29.67v14.41c0 14.211 52 14.229 52 .018V29.87c0 11.21-52 11.011-52-.2z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M22.259 10.45c-2.498-.2-3.198 2.401.798 3.804 2.499.801 5.795.5 8.592-.5 3.697-1.302 5.695 1.301 11.191.6 2.396-.301 5.893-1.901.1-3.504-8.493-2.503-13.288-1.1-20.681-.4z"
  }), _react["default"].createElement("path", {
    fill: "#FEEC9A",
    d: "M21.96 11.55c-2.098-1.201 2.398 0 6.093-.9 2.798-.602-2.997 2.803-6.093.9zM44.238 12.05c2.798 1.803-3.597-.7-9.491-.899-4.295-.2 5.294-1.803 9.491.899z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M46.735 19.258l4.796-9.409-4.594-2.402-6.094 11.811z"
  }), _react["default"].createElement("radialGradient", {
    id: "honey-pot_svg__a",
    cx: 49.313,
    cy: 4.608,
    r: 6.725,
    gradientTransform: "matrix(1.001 0 0 1 -.031 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 0.349,
    stopColor: "#b07952"
  }), _react["default"].createElement("stop", {
    offset: 0.716,
    stopColor: "#a36c46"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#945d37"
  })), _react["default"].createElement("path", {
    fill: "url(#honey-pot_svg__a)",
    d: "M55.028 9.348c-3.097 5.906-11.889 1.302-8.892-4.604s11.889-1.301 8.892 4.604z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M19.163 14.154c.2-3.404-10.79-3.203-8.593 8.808.5 2.703 2.398-3.203 3.997-3.104 1.598.102-3.097 10.111 2.497 12.814 5.595 2.701 1.1-11.011 4.896-11.812 3.796-.801 5.894-.801 5.094-2.603-.698-1.702-10.09-.901-7.891-4.103z"
  }), _react["default"].createElement("path", {
    fill: "#FEEC9A",
    d: "M12.968 14.253c2.298-1.502-.999 2.402-1.498 6.406-.401 3.004-1.998-4.104 1.498-6.406zM18.663 16.355c-4.596-1.802-3.097 4.204-2.197 2.603 1.098-2.103 3.896-1.902 2.197-2.603zM15.866 30.168c1.797 2.203-.201-2.702.5-7.107.499-3.203-3.198 3.805-.5 7.107z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M29.951 18.257c-1.498 1.301-.598 3.003 1.599 4.404 4.297 2.803-2.797 13.313 3.298 16.415 4.096 2.104-2.599-14.713 4.494-16.214 4.896-1.002-2.997 6.307 2.897 8.507 4.995 1.803.399-10.709 3.996-10.31 2.599.301-1.898 13.814 3.297 13.314 4.195-.4-2.696-9.81 2.197-14.314 1.399-1.301 1.799-3.304.999-5.005-.698-1.602-1.896-2.203-3.695-.701-8.992 6.206-15.585.701-19.082 3.904z"
  }), _react["default"].createElement("path", {
    fill: "#FEEC9A",
    d: "M34.849 17.556c2.297.3-1.6.601-3.597 2.603-1.6 1.502-2.499-3.604 3.597-2.603zM51.231 14.553c-2.897-1.301-2.098 2.603-1.499 1.603.8-1.303 2.598-1.102 1.499-1.603zM33.549 36.975c1.497 2.203-.101-2.602.799-6.706.598-2.903-3.097 3.502-.799 6.706zM48.334 33.473c1.099 1.6-.299-2.002 0-5.206.2-2.302-1.698 2.801 0 5.206zM40.642 29.668c.799 1.802.201-2.002 1.099-5.105.698-2.202-2.299 2.502-1.099 5.105z"
  }));
};

var _default = SvgHoneyPot;
exports["default"] = _default;