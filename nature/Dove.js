"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDove = function SvgDove(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M11.349 16.811c-2.003 2.968-3.213 6.72-3.678 10.455-.515 3.858-.059 7.939 2.001 11.682a.75.75 0 0 1 .076-.025c-.998-3.855-1.707-7.717-1.382-11.538.145-1.69.451-3.339.882-4.937.281-1.126.672-2.226 1.101-3.281.158-.387 1.177-2.055 1-2.356z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M8.278 24.846C8.549 19.82 2 19.254 2 19.254c1.658 5.805 6.278 5.592 6.278 5.592z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M2 19.254c1.38 6.102 6.278 5.591 6.278 5.591S6.106 21.538 2 19.254z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M9.148 21.788C11.104 17.15 5.132 14.4 5.132 14.4c-.403 6.024 4.016 7.388 4.016 7.388z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M5.132 14.4c-.766 6.209 4.016 7.387 4.016 7.387S8.224 17.94 5.132 14.4z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M10.02 19.413c-1.955-4.637 4.016-7.387 4.016-7.387.403 6.023-4.016 7.387-4.016 7.387z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M14.035 12.025c.766 6.209-4.016 7.387-4.016 7.387s.925-3.847 4.016-7.387z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M8.937 22.848c3.3-3.799 8.398.351 8.398.351-5.227 3.017-8.398-.351-8.398-.351z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M17.335 23.199c-5.234 3.424-8.398-.351-8.398-.351s3.86-.866 8.398.351z"
  }), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M8.077 27.478c3.299-3.799 8.398.351 8.398.351-5.227 3.017-8.398-.351-8.398-.351z"
  }), _react["default"].createElement("path", {
    fill: "#56AB15",
    d: "M16.475 27.829c-5.234 3.424-8.398-.351-8.398-.351s3.86-.866 8.398.351z"
  }), _react["default"].createElement("path", {
    fill: "#EA8800",
    d: "M10.47 30.4s-4.747 1.92-5.074 3.497c3.529-.733 5.575.235 6.476-.717L10.47 30.4z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M20.52 29.917c.337-8.036 12.964-14.561 19.598-24.852 2.861-4.436 5.342-2.086 3.618 5.953 11.529 1.873-8.944 24.523-13.065 26.167L20.52 29.917z"
  }), _react["default"].createElement("linearGradient", {
    id: "dove_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 22.64,
    y1: 21.431,
    x2: 62,
    y2: 21.431
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.413,
    stopColor: "#e9eef3"
  }), _react["default"].createElement("stop", {
    offset: 0.72,
    stopColor: "#e0e6eb"
  }), _react["default"].createElement("stop", {
    offset: 0.993,
    stopColor: "#d0d8dd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#dove_svg__a)",
    d: "M22.64 32.724c.338-8.035 15.893-14.184 23.827-21.662C63.621-5.107 65.65 4.119 57.035 10.027c11.531 1.876-2.685 8.623-2.685 8.623 12.657.605-.966 6.687-.966 6.687 10.596 1.841-3.367 5.177-3.367 5.177 7.023 2.352-2.859 4.814-2.859 4.814 5.006 3.527-4.92 3.891-9.042 5.535L22.64 32.724z"
  }), _react["default"].createElement("radialGradient", {
    id: "dove_svg__b",
    cx: 35.268,
    cy: 35.368,
    r: 30.381,
    gradientTransform: "matrix(.894 .4473 -.2283 .4567 11.746 3.439)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.413,
    stopColor: "#e9eef3"
  }), _react["default"].createElement("stop", {
    offset: 0.72,
    stopColor: "#e0e6eb"
  }), _react["default"].createElement("stop", {
    offset: 0.993,
    stopColor: "#d0d8dd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#dove_svg__b)",
    d: "M57.576 51.628c-2.189-2.817-9.477-.454-13.796-5.584-7.37-8.756-17.552-18.474-27.7-18.474-3.758 0-6.302 2.454-6.337 4.406-.02 1.082 3.002 2.144 3.702 3.025 1.31 1.65-2.575 8.277 17.72 12.535 12.057 2.525 8.635 10.967 12.812 13.771 3.099 2.079 4.552-1.183 4.552-1.183 6.44 2.18 4.703-2.936 4.703-2.936 5.354 1.592 2.551-2.68 2.551-2.68s3.363-.859 1.793-2.88z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M14.322 31.904c-1.985 0-1.985-3.008 0-3.008 1.986 0 1.986 3.008 0 3.008z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M13.729 30.251c-.531 0-.531-.801 0-.801.529.001.529.801 0 .801z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M40.988 22.862C38.315 23.976 56.371 12.952 62 3.564c-.146 5.869-18.235 18.139-21.012 19.298zM40.012 27.373c-2.434.647 14.36-8.271 20.84-13.207-1.392 2.744-18.366 12.548-20.84 13.207zM39.764 31.007c-2.436.25 5.906-1.607 19.008-8.929-3.632 3.632-16.901 8.714-19.008 8.929zM39.383 33.513c3.244-1.081 7.914-1.817 17.572-5.712-3.68 3.316-19.205 6.257-17.572 5.712zM38.995 36.907c1.925-.517 5.199-.653 12.409-3.213-3.4 2.338-14.082 3.662-12.409 3.213zM48.527 60.124s-.984-2.562-3.856-4.66c-1.399-1.023 3.233 4.947 2.593 6.129 0 0 1.078-.735 1.263-1.469zM53.23 57.188s-2.311-1.578-4.98-2.916c-1.578-.789 5.664 4.075 5.023 5.256 0 0 .506-1.298-.043-2.34zM55.781 54.509s-.433 0-2.176-1.134c-1.463-.951 2.84 1.269 4.273-.233.001 0-.386 1.047-2.097 1.367z"
  }));
};

var _default = SvgDove;
exports["default"] = _default;