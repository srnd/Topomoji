"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOm = function SvgOm(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "om_svg__a",
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
    fill: "url(#om_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FFF",
    d: "M48.829 30.402c-1.244-2.052-3.351-4.239-6.6-4.217-4.57.031-6.354 3.665-7.879 6.709-.476.948-1.236 2.412-2.307 2.62-1.271.247-1.982-.483-2.818-.831 1.748-1.415 3.316-3.066 3.586-5.687.433-4.222-2.174-6.877-5.637-7.156-3.351-.271-6.049.648-8.201 1.853-.58.325-1.756 1.033-1.795 1.598-.027.408 1.449 2.392 2.629 5.175 1.527-.982 3.692-2.777 6.149-3.003 4.27-.391 4.607 3.756.387 4.537-1.752.323-3.301-.13-4.742-.383.811 1.866-.42 5.377 1.025 6.645 1.357 1.191 3.262-.24 4.805-.191 2.244.071 3.83 2.541 2.756 4.984-1.383 3.142-6.723 3.931-9.932 1.917-6.133-3.85-5.029-11.118-6.15-11.118-1.48 0-2.172 18.147 11.02 18.147 5.279 0 9.725-3.969 9.289-9.584-.125-1.634-.746-3.083-1.152-4.345 1.086.117 2.152.023 3.141-.127-1.355 2.323-.471 6.688.703 8.434 1.762 2.619 5.959 3.521 9.035 1.47 2.551-1.702 4.244-4.5 4.484-8.435.218-3.622-.411-6.732-1.796-9.012zm-6.854 12.269c-3.039.322-4.965-1.27-5.191-4.792 2.543-1.046 3.383-5.468 6.471-7.285 2.674-1.572 4.182 1.621 4.357 3.898.33 4.278-1.996 7.792-5.637 8.179zM36.817 19.668s3.689-2.539 3.684-3.866C40.495 14.486 36.817 12 36.817 12s-3.678 2.475-3.686 3.802c-.003 1.339 3.686 3.866 3.686 3.866z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FFF",
    d: "M35.887 24.971c5.248 1.181 11.916-2.908 11.916-4.281 0-1.75-3.152-3.414-3.715-4.153-1.691 2.176-4.74 4.945-8.65 3.897-3.906-1.047-5.51-6.198-5.51-6.198-.527 1.665-.52 3.679.064 5.24.878 2.339 3.395 4.933 5.895 5.495z"
  }));
};

var _default = SvgOm;
exports["default"] = _default;