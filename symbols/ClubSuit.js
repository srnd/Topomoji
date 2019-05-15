"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClubSuit = function SvgClubSuit(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "club-suit_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 19.66,
    y1: 12.189,
    x2: 45.274,
    y2: 56.553
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#545061"
  }), _react["default"].createElement("stop", {
    offset: 0.279,
    stopColor: "#464253"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#211d2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#club-suit_svg__a)",
    d: "M44.5 21.063c-.036 0-.071.006-.107.006.063-.516.107-1.035.107-1.568C44.5 12.597 38.904 7 32 7c-6.902 0-12.5 5.597-12.5 12.5 0 .533.046 1.053.109 1.568-.038 0-.072-.006-.109-.006-6.902 0-12.5 5.597-12.5 12.5s5.598 12.5 12.5 12.5c4.007 0 7.563-1.893 9.851-4.823l-.476 4.042c-.42 2.99-2.493 5.727-5.469 6.25l-3.906.782V57h25v-4.688l-3.906-.781c-2.974-.523-5.047-3.258-5.469-6.25l-.476-4.042c2.289 2.931 5.845 4.823 9.851 4.823 6.904 0 12.5-5.597 12.5-12.5s-5.596-12.499-12.5-12.499z"
  }));
};

var _default = SvgClubSuit;
exports["default"] = _default;