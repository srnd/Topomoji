"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTelephone = function SvgTelephone(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M21.895 34.186c-.15.17-.376 1.065-.486 1.683.687.064 4.027-.063 3.763-4.418-.937 1.524-2.993 2.414-3.277 2.735zM42.105 34.186c-.285-.32-2.342-1.211-3.278-2.735-.264 4.355 3.077 4.482 3.765 4.418-.112-.618-.336-1.514-.487-1.683z"
  }), _react["default"].createElement("path", {
    fill: "#800303",
    d: "M30.804 24.686h2.393s.01-.802-.027-1.001c-.088-.443-2.254-.43-2.336 0-.041.199-.03 1.001-.03 1.001z"
  }), _react["default"].createElement("radialGradient", {
    id: "telephone_svg__a",
    cx: 43.984,
    cy: 33.781,
    r: 6.742,
    gradientTransform: "matrix(.901 0 0 .9963 -29.572 -.554)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.036,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e30000"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__a)",
    d: "M2.274 32.318s.06 2.002 1.66 3.875c1.88 2.198 13.689.286 13.884-3.641.124-2.507-.27-3.469-.27-3.469L2.274 32.318z"
  }), _react["default"].createElement("radialGradient", {
    id: "telephone_svg__b",
    cx: 92.689,
    cy: 33.781,
    r: 6.741,
    gradientTransform: "matrix(.901 0 0 .9963 -29.572 -.554)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.036,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e30000"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__b)",
    d: "M46.451 29.084s-.393.962-.27 3.469c.195 3.927 12.004 5.839 13.883 3.641 1.601-1.873 1.661-3.875 1.661-3.875l-15.274-3.235z"
  }), _react["default"].createElement("radialGradient", {
    id: "telephone_svg__c",
    cx: 68.704,
    cy: 28.436,
    r: 32.426,
    gradientTransform: "matrix(.901 0 0 .3004 -29.572 19.234)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#e30000"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__c)",
    d: "M32 16C20.442 16-.646 18.547 2.274 32.318c.812 3.826 15.352.697 15.274-3.234-.057-3.013 1.142-3.427 1.775-3.743 2.485-1.236 9.335-1.477 12.676-1.477s10.19.24 12.675 1.477c.637.316 1.835.73 1.776 3.743-.074 3.932 14.463 7.061 15.274 3.234C64.645 18.547 43.557 16 32 16z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M29.8 25.744h4.399s.021-.803-.05-1.002c-.158-.443-4.146-.43-4.301 0-.068.199-.048 1.002-.048 1.002z"
  }), _react["default"].createElement("path", {
    fill: "#800303",
    d: "M31.999 25.537c-6.621 0-9.049-.778-9.049-.778.762 5.627 17.337 5.627 18.099 0 0 0-2.427.778-9.05.778z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M23.403 26.56c2.961 4.788 14.231 4.788 17.192 0H23.403z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M40.904 22.335c0 5.401-3.249 5.923-8.905 5.923-5.654 0-8.904-.521-8.904-5.923 0-1.522-3.281-1.522-3.281 0v4.655c0 .983.942 1.923 2.037 1.923h1.84c.741 0 1.234.368 1.234 1.371 3.723 1.084 10.428 1.084 14.149 0 0-1.003.494-1.371 1.234-1.371h1.84c1.096 0 2.037-.939 2.037-1.923v-4.655c.001-1.522-3.281-1.522-3.281 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "telephone_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 37.848,
    x2: 32.001,
    y2: 30.285
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.238,
    stopColor: "#de0004"
  }), _react["default"].createElement("stop", {
    offset: 0.71,
    stopColor: "#f6000b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__d)",
    d: "M39.629 33.354c-.428-.714-.555-3.069-.555-3.069H24.925s-.127 2.355-.555 3.069c-.51.851-2.962 1.921-2.962 2.515 0 2.64 21.184 2.64 21.184 0 0-.595-2.452-1.665-2.963-2.515z"
  }), _react["default"].createElement("linearGradient", {
    id: "telephone_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 37.2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 0.238,
    stopColor: "#de0004"
  }), _react["default"].createElement("stop", {
    offset: 0.71,
    stopColor: "#f6000b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__e)",
    d: "M58.346 56.414c-.246-.866-2.522-5.997-3.795-7.734-.561-.765-7.62-1.842-12.371-11.479H21.82C17.068 46.838 10.009 47.915 9.448 48.68c-1.272 1.737-3.549 6.868-3.794 7.734-.403 1.422-.568 2.997-.635 4.111C4.967 61.407 5.53 62 7.505 62h48.989c1.975 0 2.539-.593 2.485-1.475-.066-1.114-.231-2.689-.633-4.111z"
  }), _react["default"].createElement("linearGradient", {
    id: "telephone_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 54.961,
    x2: 32,
    y2: 35.868
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff543d"
  }), _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#ff4c39"
  }), _react["default"].createElement("stop", {
    offset: 0.479,
    stopColor: "#ff362c"
  }), _react["default"].createElement("stop", {
    offset: 0.834,
    stopColor: "#ff1319"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__f)",
    d: "M42.592 35.868H21.408C19.022 50.028 6.929 54.961 6.929 54.961H57.07s-12.093-4.933-14.478-19.093z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M41.839 45.856c0 11.203-19.785 11.203-19.785 0 0-11.2 19.785-11.2 19.785 0z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M41.839 44.971c0 11.202-19.785 11.202-19.785 0 0-11.2 19.785-11.2 19.785 0z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M40.616 50.883v-1.534l1.33-1.637v1.496z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M38.204 46.425l-.592.744 3.004 2.371 1.33-1.828z"
  }), _react["default"].createElement("radialGradient", {
    id: "telephone_svg__g",
    cx: 29.497,
    cy: 29.322,
    r: 7.476,
    gradientTransform: "matrix(.9938 0 0 1.0347 2.563 11.63)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.2,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.846,
    stopColor: "#a8b5bb"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#telephone_svg__g)",
    d: "M37.536 44.131c0 6.839-11.178 6.839-11.178 0 0-6.216 11.178-6.216 11.178 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M38.884 49.937c0 2.143-3.331 2.143-3.331 0 0-2.141 3.331-2.141 3.331 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M38.85 49.616c-.313-1.807-2.956-1.807-3.269 0 .543-1.296 2.729-1.296 3.269 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M35.687 51.446c0 2.143-3.33 2.143-3.33 0-.001-2.14 3.33-2.14 3.33 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M35.651 51.126c-.312-1.807-2.956-1.807-3.268 0 .543-1.296 2.728-1.296 3.268 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M32.028 51.481c0 2.141-3.332 2.141-3.332 0 0-2.142 3.332-2.142 3.332 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M31.994 51.161c-.313-1.807-2.957-1.807-3.27 0 .544-1.296 2.729-1.296 3.27 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M28.725 50.21c0 2.076-3.331 2.076-3.331 0 0-2.074 3.331-2.074 3.331 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M28.69 49.899c-.313-1.75-2.957-1.75-3.27 0 .544-1.254 2.73-1.254 3.27 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M26.407 47.778c0 1.953-3.33 1.953-3.33 0s3.33-1.953 3.33 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M26.373 47.485c-.312-1.647-2.955-1.647-3.268 0 .543-1.18 2.728-1.18 3.268 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M25.605 44.793c0 1.836-3.214 1.836-3.214 0 .001-1.835 3.214-1.835 3.214 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M25.572 44.518c-.301-1.548-2.852-1.548-3.153 0 .523-1.111 2.633-1.111 3.153 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M26.284 41.821c0 1.807-3.107 1.807-3.107 0 0-1.805 3.107-1.805 3.107 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M26.252 41.552c-.291-1.523-2.758-1.523-3.048 0 .506-1.094 2.545-1.094 3.048 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M28.415 39.517c0 1.695-3.105 1.695-3.105 0s3.105-1.696 3.105 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M28.384 39.262c-.291-1.43-2.757-1.43-3.049 0 .507-1.025 2.545-1.025 3.049 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M31.566 38.237c0 1.643-3.151 1.643-3.151 0s3.151-1.643 3.151 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M31.535 37.991c-.296-1.386-2.798-1.386-3.093 0 .514-.994 2.581-.994 3.093 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M35.018 38.217c0 1.642-3.151 1.642-3.151 0-.001-1.644 3.151-1.644 3.151 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M34.986 37.971c-.296-1.387-2.799-1.387-3.094 0 .513-.994 2.583-.994 3.094 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M38.297 39.517c0 1.697-3.215 1.697-3.215 0s3.215-1.697 3.215 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M38.264 39.263c-.301-1.431-2.853-1.431-3.155 0 .524-1.027 2.633-1.027 3.155 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M40.592 41.878c0 1.795-3.315 1.795-3.315 0-.001-1.797 3.315-1.797 3.315 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M40.558 41.608c-.311-1.515-2.941-1.515-3.253 0 .54-1.086 2.715-1.086 3.253 0z"
  }));
};

var _default = SvgTelephone;
exports["default"] = _default;