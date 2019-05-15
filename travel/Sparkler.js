"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSparkler = function SvgSparkler(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M17.563 9.785c.026.336-5.972.834-6 .495-.026-.335 5.974-.833 6-.495z"
  }), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M15.849 7.283c.304.146-2.27 5.645-2.571 5.499-.303-.143 2.27-5.643 2.571-5.499z"
  }), _react["default"].createElement("linearGradient", {
    id: "sparkler_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -127.265,
    y1: 56.916,
    x2: -124.46,
    y2: 56.916,
    gradientTransform: "rotate(-45.001 -58.979 -153.77)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.281,
    stopColor: "#b1bfc7"
  }), _react["default"].createElement("stop", {
    offset: 0.61,
    stopColor: "#c7d5de"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#cfdde6"
  })), _react["default"].createElement("path", {
    fill: "url(#sparkler_svg__a)",
    d: "M62 60.2L60.219 62 23.406 24.801l1.782-1.799z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M25.775 25.423c-.881.89-18.117-18.307-18.117-18.307s18.993 17.422 18.117 18.307z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M25.773 25.424c-.88-.889 16.947-17.126 16.947-17.126S26.651 26.311 25.773 25.424z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M25.773 25.424c.877.887-16.27 16.438-16.27 16.438s15.391-17.327 16.27-16.438z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M25.773 25.424c-1.245.001.005-22.325.005-22.325s1.236 22.324-.005 22.325z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M25.773 25.424c1.241-.002-.004 22.323-.004 22.323s-1.24-22.322.004-22.323z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M25.773 25.424c0-1.257 22.093-.005 22.093-.005s-22.094 1.258-22.093.005z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M25.773 25.424c-.001 1.253-22.093.004-22.093.004s22.094-1.261 22.093-.004z"
  }), _react["default"].createElement("path", {
    fill: "#FF9901",
    d: "M12.52 14.771c.791-1.003 13.254 10.652 13.254 10.652S11.729 15.777 12.52 14.771zM39.024 36.072c-.79 1.005-13.251-10.65-13.251-10.65s14.044 9.647 13.251 10.65z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M36.32 12.026c.993.8-10.548 13.397-10.548 13.397s9.552-14.196 10.548-13.397z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M15.227 38.819c-.995-.799 10.547-13.396 10.547-13.396-.001.001-9.553 14.195-10.547 13.396z"
  }), _react["default"].createElement("path", {
    fill: "#FF9901",
    d: "M23.86 8.418c1.262-.146 1.913 17.005 1.913 17.005S22.597 8.564 23.86 8.418z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M27.686 42.427c-1.26.146-1.913-17.005-1.913-17.005s3.176 16.86 1.913 17.005z"
  }), _react["default"].createElement("path", {
    fill: "#FF9901",
    d: "M42.603 23.481c.142 1.275-16.831 1.941-16.83 1.941 0 0 16.684-3.216 16.83-1.941z"
  }), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M8.944 27.365c-.145-1.276 16.83-1.941 16.829-1.942-.001 0-16.685 3.218-16.829 1.942z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M5.518 16.527c.661-1.536 20.256 8.897 20.256 8.897S4.856 18.063 5.518 16.527z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M46.031 34.319c-.662 1.535-20.258-8.897-20.258-8.897s20.919 7.362 20.258 8.897z"
  }), _react["default"].createElement("path", {
    fill: "#FF9901",
    d: "M34.587 4.95c1.519.667-8.815 20.474-8.814 20.473-.001 0 7.293-21.141 8.814-20.473zM16.96 45.897c-1.519-.666 8.813-20.474 8.813-20.474 0 .001-7.294 21.14-8.813 20.474z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M17.682 4.655c1.542-.615 8.091 20.768 8.091 20.768S16.14 5.27 17.682 4.655z"
  }), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M33.865 46.192c-1.542.613-8.092-20.771-8.092-20.771s9.633 20.155 8.092 20.771z"
  }), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M46.33 17.237c.605 1.558-20.559 8.186-20.558 8.186.001-.001 19.949-9.744 20.558-8.186z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M5.215 33.608c-.605-1.556 20.559-8.185 20.557-8.186 0 .001-19.949 9.748-20.557 8.186z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M6.932 22.582c.21-1.428 18.843 2.841 18.843 2.841S6.721 24.009 6.932 22.582z"
  }), _react["default"].createElement("path", {
    fill: "#FF9901",
    d: "M44.617 28.264c-.213 1.427-18.844-2.842-18.844-2.842s19.053 1.413 18.844 2.842z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M28.592 6.381c1.414.213-2.819 19.043-2.82 19.042 0 0 1.408-19.255 2.82-19.042z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M22.954 44.465c-1.413-.212 2.821-19.042 2.821-19.042-.001.001-1.407 19.257-2.821 19.042z"
  }), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M14.443 9.948c1.149-.858 11.329 15.475 11.329 15.475S13.294 10.808 14.443 9.948z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M37.105 40.897c-1.15.857-11.332-15.476-11.332-15.476s12.479 14.617 11.332 15.476z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M41.092 13.967c.849 1.161-15.32 11.457-15.319 11.456 0-.001 14.467-12.616 15.319-11.456z"
  }), _react["default"].createElement("path", {
    fill: "#FF9901",
    d: "M10.455 36.878c-.85-1.16 15.32-11.455 15.317-11.455 0 0-14.466 12.617-15.317 11.455z"
  }), _react["default"].createElement("path", {
    fill: "#FFE600",
    d: "M40.334 40.109S24.835 26.126 24.47 25.756c-1.342-1.355.319-3.034 1.661-1.678.366.37 14.203 16.031 14.203 16.031z"
  }), _react["default"].createElement("radialGradient", {
    id: "sparkler_svg__b",
    cx: -124.408,
    cy: 31.415,
    r: 6.57,
    gradientTransform: "matrix(.7071 -.7145 .7071 .7145 91.456 -86.019)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffff57"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#fff94b"
  }), _react["default"].createElement("stop", {
    offset: 0.58,
    stopColor: "#ffea2b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#sparkler_svg__b)",
    d: "M28.196 27.84l-.647 4.347-2.743-3.443-4.053 1.575 1.559-4.096-3.408-2.772 4.302-.653.646-4.347 2.743 3.443 4.054-1.574-1.559 4.095 3.408 2.772z"
  }), _react["default"].createElement("radialGradient", {
    id: "sparkler_svg__c",
    cx: -124.408,
    cy: 31.416,
    r: 4.641,
    gradientTransform: "matrix(.7071 -.7145 .7071 .7145 91.456 -86.019)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.123,
    stopColor: "#fffff9",
    stopOpacity: 0.877
  }), _react["default"].createElement("stop", {
    offset: 0.284,
    stopColor: "#ffffe9",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.468,
    stopColor: "#ffffcd",
    stopOpacity: 0.532
  }), _react["default"].createElement("stop", {
    offset: 0.667,
    stopColor: "#ffffa7",
    stopOpacity: 0.333
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#ff7",
    stopOpacity: 0.123
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffff57",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#sparkler_svg__c)",
    d: "M27.463 27.099l-.457 3.07-1.938-2.432-2.861 1.113 1.1-2.892L20.9 24l3.038-.462.457-3.07 1.938 2.432 2.863-1.112-1.102 2.892 2.407 1.958z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M43.58 11.617c-.362.097-2.117-6.507-1.752-6.605.36-.095 2.117 6.506 1.752 6.605z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M45.973 9.2c-.1.371-6.635-1.403-6.537-1.771.095-.367 6.632 1.407 6.537 1.771z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M10.41 45.198c-.368.098-2.15-6.607-1.779-6.707.367-.097 2.149 6.608 1.779 6.707z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M12.839 42.745c-.101.373-6.737-1.427-6.637-1.799.097-.373 6.735 1.428 6.637 1.799zM27.834 4.371c-.129.226-4.164-2.128-4.033-2.356.129-.223 4.166 2.129 4.033 2.356z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M27.835 2.015c.132.229-3.905 2.583-4.034 2.357-.13-.227 3.907-2.58 4.034-2.357z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M28.264 49.205c-.16.278-5.153-2.634-4.991-2.915.161-.277 5.153 2.633 4.991 2.915z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M28.265 46.29c.162.283-4.832 3.195-4.993 2.914-.161-.279 4.834-3.191 4.993-2.914z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M46.169 28.077c-.291-.172 2.752-5.5 3.046-5.328.293.17-2.752 5.5-3.046 5.328z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M49.215 28.076c-.295.171-3.341-5.158-3.046-5.328.294-.17 3.337 5.158 3.046 5.328zM2.021 28.107c-.306-.18 2.881-5.758 3.189-5.578.304.179-2.88 5.759-3.189 5.578z"
  }), _react["default"].createElement("path", {
    fill: "#FC0",
    d: "M5.21 28.107c-.309.18-3.497-5.399-3.189-5.578.306-.18 3.493 5.401 3.189 5.578z"
  }));
};

var _default = SvgSparkler;
exports["default"] = _default;