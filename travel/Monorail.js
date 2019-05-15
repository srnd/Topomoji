"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMonorail = function SvgMonorail(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M54 38h6v24h-6V38zM4 38h6v24H4zM2 26h60v8H2v-8z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 42,
    x2: 32.001,
    y2: 32.001
  }, _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.469,
    stopColor: "#96a4ab"
  }), _react["default"].createElement("stop", {
    offset: 0.65,
    stopColor: "#8c9aa0"
  }), _react["default"].createElement("stop", {
    offset: 0.823,
    stopColor: "#7b878f"
  }), _react["default"].createElement("stop", {
    offset: 0.99,
    stopColor: "#646e77"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#626c75"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__a)",
    d: "M2 32v10s13.432-5 30-5 30 5 30 5V32H2z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 38,
    y1: 34,
    x2: 38,
    y2: 26
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#d4dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__b)",
    d: "M14 26c4.266 0 5 8 12 8h36v-8H14z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 34,
    y1: 28,
    x2: 34,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#d4dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__c)",
    d: "M38 2C31 2 6 15.25 6 22c0 1.25 3.274 4 6 4 5.016 0 5 2 10 2h40V2H38z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 39,
    y1: 19,
    x2: 39,
    y2: 4
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.103,
    stopColor: "#3c3c4a"
  }), _react["default"].createElement("stop", {
    offset: 0.325,
    stopColor: "#525764"
  }), _react["default"].createElement("stop", {
    offset: 0.549,
    stopColor: "#626b76"
  }), _react["default"].createElement("stop", {
    offset: 0.773,
    stopColor: "#6b7781"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__d)",
    d: "M62 19V4H38c-6.936 0-22 8.934-22 12.199 0 2.904 4.252 2.8 8 2.8L62 19z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 20.248,
    y1: 21,
    x2: 62,
    y2: 21
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c40000"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__e)",
    d: "M28.273 22H62v-2H21c-3.08 0 4.086 2 7.273 2z"
  }), _react["default"].createElement("path", {
    opacity: 0.15,
    fill: "#1A1626",
    d: "M52.375 28h.25V2h-.25v26zM40 25.125h-6A2.127 2.127 0 0 1 31.875 23V8c0-1.172.953-2.125 2.125-2.125h6c1.172 0 2.125.953 2.125 2.125v15A2.127 2.127 0 0 1 40 25.125zm-6-19A1.877 1.877 0 0 0 32.125 8v15c0 1.034.841 1.875 1.875 1.875h6A1.877 1.877 0 0 0 41.875 23V8A1.877 1.877 0 0 0 40 6.125h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 47.5,
    y1: 17,
    x2: 47.5,
    y2: 6
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#3b3845"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4b4854"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__f)",
    d: "M43 16c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v9z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 37,
    y1: 15,
    x2: 37,
    y2: 7.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#3b3845"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4b4854"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__g)",
    d: "M33.5 14c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V8.5c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1V14z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 57.5,
    y1: 17,
    x2: 57.5,
    y2: 6
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#3b3845"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4b4854"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__h)",
    d: "M54 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8V6h-8z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 39l3 2v21H2zM62 62h-3V41l3-2z"
  }), _react["default"].createElement("linearGradient", {
    id: "monorail_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 22.231,
    y1: 18.442,
    x2: 22.231,
    y2: 2.102
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.103,
    stopColor: "#3c3c4a"
  }), _react["default"].createElement("stop", {
    offset: 0.325,
    stopColor: "#525764"
  }), _react["default"].createElement("stop", {
    offset: 0.549,
    stopColor: "#626b76"
  }), _react["default"].createElement("stop", {
    offset: 0.773,
    stopColor: "#6b7781"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#monorail_svg__i)",
    d: "M36.798 2.102c-6.795 0-23.857 7.371-29.135 16.341C21.148 6.515 36.798 2.102 36.798 2.102z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M56.5 27h-8c-.55 0-1 .45-1 1h10c0-.55-.45-1-1-1z"
  }));
};

var _default = SvgMonorail;
exports["default"] = _default;