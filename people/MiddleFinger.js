"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMiddleFinger = function SvgMiddleFinger(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "middle-finger_svg__a",
    cx: 89.535,
    cy: 19.342,
    r: 23.818,
    gradientTransform: "matrix(1.0806 0 0 1.4925 -62.474 -6.824)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.449,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.733,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.87,
    stopColor: "#fac65c"
  }), _react["default"].createElement("stop", {
    offset: 0.975,
    stopColor: "#f4bd4f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#middle-finger_svg__a)",
    d: "M45.847 27.923c-3.268-4.712-9.233-2.85-9.233-2.85V7.715c0-6.605-11.043-6.605-11.043 0v16.918c-3.187-3.093-9.407-.369-9.82 3.388-.135 1.216-.223 4.137-.275 5.239h-.002c-6.396-.821-7.744 13.719 5.313 19.193.971.406 1.905 2.197 1.905 5.475 0 4.588 23.962 4.24 23.962 0 0-8.35 4.579-5.162 6.393-19.313 1.209-9.425-3.203-11.676-7.2-10.692z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M21.944 57.92c0-3.064-.864-4.539-1.445-4.781-13.46-5.645-12.352-20.368-5.739-20.665 0 0 .143-3.598.248-4.543.424-3.863 5.999-6.731 9.815-4.76V7.708c0-7.611 12.543-7.611 12.543 0v16.42c1.913-.336 6.069-.54 8.8 2.953 4.317-.781 8.867 1.966 7.627 11.624-1.797 14.01-6.387 11.291-6.387 19.215 0 5.035-25.462 5.832-25.462 0zm-.865-6.164c1.48.619 2.365 2.775 2.365 6.018 0 3.664 22.463 3.395 22.463 0 0-8.498 4.605-5.275 6.398-19.26 1.523-11.878-5.797-10.095-6.778-9.747 0 0-2.618-5.065-9.66-2.686l-.001-18.373c0-5.634-9.543-5.634-9.543 0v18.69c-3.539-4.828-9.497-1.277-9.825 1.696-.099.894-.311 6.005-.311 6.005-5.854-2.191-8.105 12.208 4.892 17.657z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M46.767 34.436l-1.484-.221c.006-.035.511-3.522-.161-6.103l1.45-.379c.75 2.881.216 6.548.195 6.703zM35.863 25.073h1.5v10.153h-1.5zM24.82 24.633h1.5v11.199h-1.5zM14.748 32.529h1.5v6.311h-1.5z"
  }));
};

var _default = SvgMiddleFinger;
exports["default"] = _default;