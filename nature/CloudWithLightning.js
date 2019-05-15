"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCloudWithLightning = function SvgCloudWithLightning(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cloud-with-lightning_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 17.775,
    y1: 46.5,
    x2: 44.225,
    y2: 46.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#ffa113"
  }), _react["default"].createElement("stop", {
    offset: 0.543,
    stopColor: "#ffc32b"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#ffd83a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffdf40"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud-with-lightning_svg__a)",
    d: "M44.225 38.264H32.018L34.699 31h-10.49l-6.434 14.046h12.886L25.235 62z"
  }), _react["default"].createElement("radialGradient", {
    id: "cloud-with-lightning_svg__b",
    cx: 30.661,
    cy: 41.037,
    r: 13.536,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff5bf"
  }), _react["default"].createElement("stop", {
    offset: 0.161,
    stopColor: "#fff4ba"
  }), _react["default"].createElement("stop", {
    offset: 0.351,
    stopColor: "#fff1ac"
  }), _react["default"].createElement("stop", {
    offset: 0.556,
    stopColor: "#ffeb94"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#ffe373"
  }), _react["default"].createElement("stop", {
    offset: 0.992,
    stopColor: "#ffd949"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd947"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud-with-lightning_svg__b)",
    d: "M40.834 39.62H29.982L33.328 31H25.86l-5.372 12.689h12.207l-4.747 13.564z"
  }), _react["default"].createElement("linearGradient", {
    id: "cloud-with-lightning_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.002,
    y1: 30.571,
    x2: 32.002,
    y2: 3.428
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9f5ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud-with-lightning_svg__c)",
    d: "M18.195 30.571a8.051 8.051 0 0 1-2.404-.362c-3.143-.968-5.256-3.693-5.256-6.779 0-2.06.959-4.021 2.627-5.38a7.6 7.6 0 0 1 1.402-.906l-.025-.003.51-1.652c1.268-4.125 5.365-7.006 9.965-7.006.459 0 .93.035 1.48.108.422.058.84.136 1.246.24l.203-.343c1.855-3.121 5.385-5.061 9.205-5.061 5.803 0 10.523 4.4 10.523 9.811 0 .266-.018.523-.043.782l-.014.19c.445.159.881.354 1.303.581 2.805 1.507 4.549 4.314 4.549 7.323 0 3.962-2.893 7.352-7.033 8.235a9.678 9.678 0 0 1-2.035.221H18.195z"
  }), _react["default"].createElement("linearGradient", {
    id: "cloud-with-lightning_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 32,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffec8c"
  }), _react["default"].createElement("stop", {
    offset: 0.014,
    stopColor: "#eae298"
  }), _react["default"].createElement("stop", {
    offset: 0.041,
    stopColor: "#c9d4ab"
  }), _react["default"].createElement("stop", {
    offset: 0.068,
    stopColor: "#b0c9b9"
  }), _react["default"].createElement("stop", {
    offset: 0.095,
    stopColor: "#9dc0c4"
  }), _react["default"].createElement("stop", {
    offset: 0.125,
    stopColor: "#93bcca"
  }), _react["default"].createElement("stop", {
    offset: 0.158,
    stopColor: "#8fbacc"
  }), _react["default"].createElement("stop", {
    offset: 0.373,
    stopColor: "#9cc6d8"
  }), _react["default"].createElement("stop", {
    offset: 0.716,
    stopColor: "#abd4e6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b0d9eb"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud-with-lightning_svg__d)",
    d: "M37.148 4.856c4.965 0 8.988 3.753 8.988 8.382 0 .227-.018.445-.037.664-2.074.151-3.965.923-5.449 2.123a7.914 7.914 0 0 1 3.748-.935 7.817 7.817 0 0 1 3.752.94c2.262 1.212 3.783 3.479 3.783 6.085 0 3.336-2.496 6.127-5.842 6.844a8.042 8.042 0 0 1-1.693.187H18.195c-.67 0-1.316-.106-1.92-.294-2.443-.75-4.205-2.893-4.205-5.422 0-1.721.813-3.258 2.102-4.304a6.284 6.284 0 0 1 2.008-1.092 6.617 6.617 0 0 1 2.016-.32c1.977 0 3.729.874 4.852 2.229h.057c-1.301-2.232-3.734-3.809-6.584-4.062 1.061-3.443 4.459-5.97 8.494-5.97.43 0 .85.038 1.262.094a9.32 9.32 0 0 1 2.332.623c2.719 1.131 4.705 3.501 5.146 6.341 0-.016.004-.034.004-.049 0-3.233-1.781-6.08-4.477-7.739 1.536-2.577 4.48-4.325 7.866-4.325m0-2.856c-4.133 0-7.969 1.98-10.178 5.213-.084-.014-.168-.024-.254-.037a12.844 12.844 0 0 0-1.703-.121c-5.279 0-9.982 3.305-11.439 8.04l-.35 1.128a8.76 8.76 0 0 0-1.072.754C10.15 18.604 9 20.956 9 23.43c0 3.705 2.537 6.974 6.314 8.136a9.708 9.708 0 0 0 2.881.434h26.203c.789 0 1.59-.085 2.385-.258C51.621 30.706 55 26.748 55 22.115c0-3.52-2.035-6.802-5.314-8.563-.158-.083-.32-.165-.48-.241v-.072C49.205 7.041 43.795 2 37.148 2z"
  }));
};

var _default = SvgCloudWithLightning;
exports["default"] = _default;