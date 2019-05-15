"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGemStone = function SvgGemStone(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "gem-stone_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 32,
    x2: 62,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#57e5ff"
  }), _react["default"].createElement("stop", {
    offset: 0.194,
    stopColor: "#52e0fd"
  }), _react["default"].createElement("stop", {
    offset: 0.422,
    stopColor: "#45d2f8"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#2fbaef"
  }), _react["default"].createElement("stop", {
    offset: 0.925,
    stopColor: "#1199e2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#078ede"
  })), _react["default"].createElement("path", {
    fill: "url(#gem-stone_svg__a)",
    d: "M49 4H15L2 20.057 32 60l30-39.943z"
  }), _react["default"].createElement("linearGradient", {
    id: "gem-stone_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 18.77,
    y1: 40.028,
    x2: 44.48,
    y2: 40.028
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#26aeff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#56e4ff"
  })), _react["default"].createElement("path", {
    fill: "url(#gem-stone_svg__b)",
    d: "M32 60l12.48-39.943H18.77z"
  }), _react["default"].createElement("linearGradient", {
    id: "gem-stone_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 7.539,
    y1: 5.255,
    x2: 11.914,
    y2: 28.005
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#56e4ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#26aeff"
  })), _react["default"].createElement("path", {
    fill: "url(#gem-stone_svg__c)",
    d: "M2 20.057h16.77L15 4z"
  }), _react["default"].createElement("linearGradient", {
    id: "gem-stone_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 44.48,
    y1: 12.028,
    x2: 62,
    y2: 12.028
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#56e4ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#26aeff"
  })), _react["default"].createElement("path", {
    fill: "url(#gem-stone_svg__d)",
    d: "M49 4l-4.52 16.057H62z"
  }), _react["default"].createElement("path", {
    fill: "#BFF3FF",
    d: "M31.625 4L18.77 20.057h25.71z"
  }));
};

var _default = SvgGemStone;
exports["default"] = _default;