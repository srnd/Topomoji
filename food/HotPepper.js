"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHotPepper = function SvgHotPepper(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#449C00",
    d: "M51.04 3.083c-.771-.678 1.557-1.567 2.422-.767 9.756 9.057 4.365 17.174 3.57 16.812-5.525-2.514 3.508-7.691-5.992-16.045z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M55.511 13.18c-6.076-3.528-15.324-2.067-15.324-.533 0 0 5.135 9.42 21.115 15.017 1.562-.27.861-10.621-5.791-14.484z"
  }), _react["default"].createElement("radialGradient", {
    id: "hot-pepper_svg__a",
    cx: 39.062,
    cy: 25.768,
    r: 26.333,
    gradientTransform: "matrix(.7756 .6932 -1.0808 1.124 22.983 -25.403)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#f5000d"
  }), _react["default"].createElement("stop", {
    offset: 0.578,
    stopColor: "#f2000d"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#ea020d"
  }), _react["default"].createElement("stop", {
    offset: 0.79,
    stopColor: "#db050e"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#c6080e"
  }), _react["default"].createElement("stop", {
    offset: 0.957,
    stopColor: "#ab0d0f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99100f"
  })), _react["default"].createElement("path", {
    fill: "url(#hot-pepper_svg__a)",
    d: "M21.122 48.358c9.71-8.916 9.927-16.251 10.771-24.277.68-6.479 4.592-10.571 8.293-11.643 2.152-.392 8.951-.687 6.699 1.296-2.225 1.957 8.109.367 8.117 4.56.01 2.976 2.65-.569 5.646 6.851 2.119 4.957-.523 12.52-4.443 17.835C48.503 53.423 26.813 69.038 5.54 58.493c-10.955-5.427 6.156-1.486 15.582-10.135z"
  }), _react["default"].createElement("radialGradient", {
    id: "hot-pepper_svg__b",
    cx: 194.881,
    cy: -253.077,
    r: 7.828,
    gradientTransform: "matrix(.1066 -.7698 -1.1788 -.3713 -276.388 77.906)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff7a70"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff7a70",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#hot-pepper_svg__b)",
    d: "M43.546 15.828c-5.098-1.605-9.602-.209-10.061 3.119-.463 3.329 3.297 7.328 8.393 8.934 5.098 1.605 9.602.209 10.063-3.12.462-3.328-3.297-7.328-8.395-8.933z"
  }));
};

var _default = SvgHotPepper;
exports["default"] = _default;