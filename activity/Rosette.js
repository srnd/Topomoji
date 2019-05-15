"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRosette = function SvgRosette(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#EA8800",
    d: "M46.534 31.187l-2.775-8.33S52.3 10.529 49.085 8.252c-3.213-2.277-12.594 9.455-12.594 9.455h-8.983S18.129 5.975 14.914 8.252s5.328 14.605 5.328 14.605l-2.775 8.33S3.129 36.265 4.356 39.951c1.229 3.686 15.887-.43 15.887-.43l7.266 5.15s.518 14.872 4.492 14.872c3.973 0 4.491-14.872 4.491-14.872l7.268-5.15s14.658 4.115 15.885.43c1.227-3.686-13.111-8.764-13.111-8.764z"
  }), _react["default"].createElement("radialGradient", {
    id: "rosette_svg__a",
    cx: 32,
    cy: 32,
    r: 29.017,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa8003"
  }), _react["default"].createElement("stop", {
    offset: 0.277,
    stopColor: "#faa103"
  }), _react["default"].createElement("stop", {
    offset: 0.555,
    stopColor: "#fabb03"
  }), _react["default"].createElement("stop", {
    offset: 0.805,
    stopColor: "#facb03"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fad103"
  })), _react["default"].createElement("path", {
    fill: "url(#rosette_svg__a)",
    d: "M58.226 24.157c-.814-2.445 2.6-10.955-7.188-7.852-4.188 1.327-8.148 3.298-11.182 5.514 1.223-3.611 1.947-7.852 1.947-11.913 0-10.039-7.24-4.242-9.875-4.242s-9.875-5.797-9.875 4.242c0 4.31.817 8.821 2.18 12.567-3.045-2.455-7.043-4.638-11.271-5.978-9.787-3.104-6.373 5.406-7.188 7.85-.813 2.445-8.703 7.371 1.084 10.473 4.146 1.313 8.558 1.957 12.401 1.888-3.114 2.152-6.251 5.18-8.786 8.583-6.049 8.121 3.301 7.582 5.434 9.094 2.133 1.51 4.496 10.351 10.545 2.23 2.782-3.735 4.763-8.099 5.676-12.032.927 3.902 2.898 8.216 5.651 11.913 6.049 8.12 8.414-.719 10.543-2.229 2.133-1.514 11.484-.973 5.436-9.096-2.735-3.673-6.172-6.909-9.525-9.078 3.959.357 8.581-.095 12.91-1.467 9.786-3.098 1.897-8.023 1.083-10.467z"
  }), _react["default"].createElement("radialGradient", {
    id: "rosette_svg__b",
    cx: 32.224,
    cy: 34.494,
    r: 14.275,
    gradientTransform: "matrix(1 0 0 1.2 0 -6.899)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.194,
    stopColor: "#fa9903"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#faa303"
  }), _react["default"].createElement("stop", {
    offset: 0.447,
    stopColor: "#fac103"
  }), _react["default"].createElement("stop", {
    offset: 0.64,
    stopColor: "#fad703"
  }), _react["default"].createElement("stop", {
    offset: 0.827,
    stopColor: "#fae403"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fae803"
  })), _react["default"].createElement("path", {
    fill: "url(#rosette_svg__b)",
    d: "M41.451 31.53c9.63-5.211-4.995-17.704-8.61-5.316-2.114-11.305-18.041-3.25-8.916 5.208-12.355.617-4.209 15.834 2.851 8.623-4.113 11.127 13.567 11.002 9.677.01 8.472 8.405 15.915-7.782 4.998-8.525z"
  }), _react["default"].createElement("path", {
    fill: "#FFF8D6",
    d: "M37 33.752a4.998 4.998 0 0 1-5 4.998 5 5 0 1 1 0-9.999 4.998 4.998 0 0 1 5 5.001z"
  }));
};

var _default = SvgRosette;
exports["default"] = _default;