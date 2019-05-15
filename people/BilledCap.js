"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBilledCap = function SvgBilledCap(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M4.009 57.326c-5.046-3.268 3.567-7.277 11.341-4.684-6.045-.552-8.368 6.612-11.341 4.684z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M46.215 20.081c-.506.335-4.146-.218-4.357-.806-.963-2.696 6.285-.473 4.357.806z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M15.1 45.508c-5.818 4.516-13.408 7.416-12.85 9.385.729 2.563-1.696-2.883 10.002-2.43 10.423.404 29.848 21.391 43.575-1.143C43.463 36.523 19.963 35.369 15.1 45.508z"
  }), _react["default"].createElement("linearGradient", {
    id: "billed-cap_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 25.45,
    y1: 24.349,
    x2: 53.511,
    y2: 56.642
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#019be0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#0174a8"
  })), _react["default"].createElement("path", {
    fill: "url(#billed-cap_svg__a)",
    d: "M15.1 45.508c16.955-7.254 32.363 5.813 45.91 7.014C70.131 9.955 13.221 8.097 15.1 45.508z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M55.68 51.561c2.814-14.766-.992-27.705-10.709-31.804C54.199 24.652 57.1 36.539 55.68 51.561z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M55.1 51.012c1.787-14.953-2.359-27.542-10.943-31.378 8.481 4.617 12.09 16.387 10.943 31.378z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M12.494 51.113c-6.154-.779-14.334 3.075-8.485 6.213-3.242-2.883.886-4.707 7.704-4.396 7.572.348 24.114 14.295 35.843 6.924-14.456 5.64-22.779-7.188-35.062-8.741z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M8.955 49.828c15.998-2.016 30.176 21.879 45.663 1.412-15.897 19.748-29.466-4.179-45.663-1.412z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M11.167 48.766c15.021-1.896 28.388 19.066 42.053 2.049-14.181 16.216-26.845-4.653-42.053-2.049z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M14.02 47.826c13.635-1.756 25.081 15.617 37.662 2.482-13.28 12.497-23.859-4.894-37.662-2.482z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M15.1 44.576c17.094-7.076 32.363 6.039 45.91 7.24-15.879-2.753-28.576-14.541-45.91-7.24z"
  }));
};

var _default = SvgBilledCap;
exports["default"] = _default;