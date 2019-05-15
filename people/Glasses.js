"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGlasses = function SvgGlasses(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "#CAE8F0",
    d: "M28.538 25.935c-5.215-2.421-22.834-2.48-23.246-1.413-.742 1.917-.719 11.295 2.703 14.687 3.084 3.058 13.791 1.506 16.834-.547 3.406-2.299 5.084-12.089 3.709-12.727z"
  }), _react["default"].createElement("linearGradient", {
    id: "glasses_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 16.59,
    y1: 25.121,
    x2: 16.59,
    y2: 32.964
  }, _react["default"].createElement("stop", {
    offset: 0.339,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#glasses_svg__a)",
    d: "M25.783 28.004c-3.462-1.995-15.64-2.877-17.669-1.686-2.487 1.462-.925 9.793.994 11.083 2.408 1.619 10.963 2.017 13.869.021 3.254-2.233 4.074-8.689 2.806-9.418z"
  }), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "#CAE8F0",
    d: "M35.462 25.935c5.215-2.421 22.834-2.48 23.246-1.413.742 1.918.719 11.296-2.703 14.688-3.084 3.058-13.791 1.506-16.834-.547-3.406-2.3-5.084-12.09-3.709-12.728z"
  }), _react["default"].createElement("linearGradient", {
    id: "glasses_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 841.742,
    y1: 25.121,
    x2: 841.742,
    y2: 32.964,
    gradientTransform: "matrix(-1 0 0 1 889.152 0)"
  }, _react["default"].createElement("stop", {
    offset: 0.339,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#glasses_svg__b)",
    d: "M38.217 28.004c3.462-1.995 15.64-2.877 17.669-1.686 2.487 1.462.925 9.793-.994 11.083-2.408 1.619-10.963 2.017-13.869.021-3.254-2.233-4.074-8.689-2.806-9.418z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M59.928 22.308c-1.03-.139-4.262-.308-8.182-.308-4.498 0-8.086.703-11.621 1.383-3.506.674-5.842 1.148-8.125 1.148-2.285 0-4.619-.475-8.125-1.148C20.338 22.703 16.752 22 12.254 22c-3.92 0-7.152.169-8.184.308C2 22.586 2 22.586 2 25.086c0 3.652.383 4.288.545 4.508.219.295.834.703 1.033 1.016.293.457.398 1.869.539 2.685C5.234 39.76 6.775 42 15.566 42c8.184 0 12.217-2.661 13.756-9.234.115-.49.318-2.589.443-3.077.049-.192.211-.483.637-.553.568-.061 1.086-.088 1.598-.088s1.027.027 1.598.088c.424.069.588.36.637.553.123.488.328 2.587.443 3.077C36.217 39.339 40.25 42 48.434 42c8.791 0 10.332-2.24 11.447-8.706.141-.815.248-2.228.541-2.685.199-.313.813-.721 1.033-1.016.162-.219.545-.855.545-4.507 0-2.5 0-2.5-2.072-2.778zm-32.106 7.954a46.27 46.27 0 0 1-.432 1.927c-1.102 4.556-3.535 7.589-11.824 7.589-8.033 0-8.746-1.836-9.502-6.989-.281-1.921-.887-4.05-.195-5.838.385-.994 1.047-2.39 3.371-2.39 1.697 0 10.094.12 15.256 1.339 1.506.355 3.957.974 3.326 4.362zm30.112 2.526c-.756 5.153-1.467 6.989-9.5 6.989-8.291 0-10.723-3.033-11.824-7.589a53.944 53.944 0 0 1-.434-1.927c-.629-3.388 1.822-4.007 3.328-4.362 5.162-1.219 13.559-1.339 15.256-1.339 2.322 0 2.986 1.396 3.369 2.39.693 1.788.088 3.917-.195 5.838z"
  }));
};

var _default = SvgGlasses;
exports["default"] = _default;