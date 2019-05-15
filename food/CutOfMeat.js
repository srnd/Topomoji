"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCutOfMeat = function SvgCutOfMeat(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cut-of-meat_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 38.241,
    x2: 62.001,
    y2: 38.241
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.504,
    stopColor: "#e6bf8e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#dbb381"
  })), _react["default"].createElement("path", {
    fill: "url(#cut-of-meat_svg__a)",
    d: "M3.09 47.754c-2.359 2.15-.764 11.799 3.564 13.352 14.068 5.05 19.639-12.631 40.851-19.283 4.249-1.333 11.98-7.444 13.402-10.688 1.487-3.391 2.306-9.815-3.35-15.771-6.599-6.952-51.245 29.45-54.467 32.39z"
  }), _react["default"].createElement("path", {
    fill: "#FDE0DA",
    d: "M47.128 10.863C32.004 8.95 35.182 4.761 24.233 3.162c-4.563-.667-10.67.701-13.256 14.57-.939 5.031 2.643 13.271-.506 17.75-4.767 6.78-6.24 7.837-8.101 13.178C.062 55.287 12.75 60.717 28.09 46c8.021-7.693 22.102-7.895 28.458-14.682 13.197-14.09-4.539-19.837-9.42-20.455z"
  }), _react["default"].createElement("linearGradient", {
    id: "cut-of-meat_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 13.358,
    y1: 53.353,
    x2: 13.358,
    y2: 2.134,
    gradientTransform: "matrix(1.0315 0 0 1 17.566 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c21413"
  }), _react["default"].createElement("stop", {
    offset: 0.056,
    stopColor: "#c51313"
  }), _react["default"].createElement("stop", {
    offset: 0.669,
    stopColor: "#e8050f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f5000d"
  })), _react["default"].createElement("path", {
    fill: "url(#cut-of-meat_svg__b)",
    d: "M46.712 11.24c-15.124-1.914-11.53-7.452-22.479-9.051-4.563-.667-11.119 4.766-12.557 15.384-.686 5.069 1.551 10.125-.784 16.02-3.03 7.652-6.619 9.741-8.521 15.068-1.463 4.092 9.841 9.983 25.181-4.734 8.022-7.693 22.034-6.396 28.397-13.177 12.438-13.254-4.356-18.893-9.237-19.51z"
  }), _react["default"].createElement("path", {
    fill: "#FDE0DA",
    d: "M43.974 8.873c-4.259 1.554-6.044-.106-6.934-2.665-3.624-1.412-11.995-5.63-15.651-3.72 6.195-1.226 14.025 5.516 11.706 8.091C21.142 23.841 22.821 28.246 6.536 44.131c-3.609 3.521 7.262-2.273 19.715-18.691 3.789-4.995 7.939-13.883 13.858-12.057 6.945 2.143 14.608-1.152 20.26 7.479.712-5.497-11.598-12.021-16.395-11.989z"
  }), _react["default"].createElement("path", {
    fill: "#FDE0DA",
    d: "M32.737 17.228c-.411 4.062 27.588 7.086 26.665 9.179 5.369-4.853-25.48-5.729-26.665-9.179zM31.542 21.554c-.41 4.063 10.766 7.703 8.851 12.038 6.067-4.804-7.666-8.588-8.851-12.038zM54.286 17.459c-.516-2.325-7.398-2.56-7.127-5.276-2.494 3.644 5.836 3.548 7.127 5.276zM49.819 20.146c-.597-4.137-13.311-5.201-12.182-10.031-5.963 6.467 9.842 6.951 12.182 10.031zM20.594 44.398C15.634 42.972 8.295 55.26 3.375 52c4.463 8.247 12.624-7.012 17.219-7.602zM26.935 40.258c-3.378.855-4.104 7.208-8.366 10.385 5.719 3.205 5.972-8.502 8.366-10.385zM29.602 35.482c2.355-3.69-4.383-11.112-.736-14.52-7.064 2.373 1.561 10.839.736 14.52zM13.989 9.292c3.699-2.835 4.393 1.388 13.707.044-2.42-2.958-10.292-.685-9.811-4.941-1.439.482-3.669 3.933-3.896 4.897zM22.711 11.856c-.355-1.569-6.52 5.633 3.867 2.455 8.078-2.472-3.267.192-3.867-2.455zM15.307 26.833c-.24-2.49-8.863 6.802 4.58 5.205 2.203-4.303-4.201-1.285-4.58-5.205z"
  }));
};

var _default = SvgCutOfMeat;
exports["default"] = _default;