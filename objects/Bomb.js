"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBomb = function SvgBomb(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "bomb_svg__a",
    cx: 19.579,
    cy: 29.989,
    r: 23.276,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.769,
    stopColor: "#3a3a47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#bomb_svg__a)",
    d: "M24.578 16.478C12.113 16.478 2.001 26.673 2 39.239 2.001 51.812 12.112 62 24.579 62c12.47 0 22.577-10.188 22.579-22.761-.002-12.566-10.107-22.761-22.58-22.761z"
  }), _react["default"].createElement("radialGradient", {
    id: "bomb_svg__b",
    cx: 40.037,
    cy: 21.291,
    r: 7.696,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.769,
    stopColor: "#3a3a47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#bomb_svg__b)",
    d: "M39.547 16.667l-3.361 3.389c-1.68 1.695 6.555 9.996 8.234 8.3l3.361-3.387-8.234-8.302z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M47.781 24.969c-1.68 1.694-9.914-6.608-8.234-8.302 1.682-1.694 9.916 6.608 8.234 8.302z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M46.199 23.007c-.842.848-5.547-3.897-4.707-4.744.842-.847 5.547 3.898 4.707 4.744z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M44.1 22.087c1.164-1.123 5.209-8.004 7.295-10.2.814-.856-.924-1.933-1.361-1.548-2.43 2.136-6.316 9.307-7.354 10.361.631.828 1.42 1.387 1.42 1.387z"
  }), _react["default"].createElement("path", {
    fill: "#EF4E16",
    d: "M50.41 7.382l1.561-4.695.773 4.781 3.84-4.71-1.494 5.631L62 7.282l-6.221 3.877 5.846 3.064-6.691-.315 3.433 5.328-5.019-3.301-1.799 6.675-2.676-9.075-7.125-3.596 5.902-.792L45.691 2z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M49.297 10.095l-1.379-3.94 2.937 2.896.932-2.575.647 2.488 2.252-2.475-.909 3.076 3.496-.457-3.146 1.893 3.193 1.989-3.879-.3 1.977 3.342-2.91-1.906-.891 4.422-1.453-5.981-3.941-1.844z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M50.561 10.778l-.584-1.668 1.246 1.226.394-1.089.272 1.053.953-1.047-.383 1.301 1.479-.193-1.331.801 1.352.843-1.645-.126.838 1.414-1.232-.805-.445 1.624-.606-2.183-1.611-.883z"
  }));
};

var _default = SvgBomb;
exports["default"] = _default;