"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgThoughtBalloon = function SvgThoughtBalloon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "thought-balloon_svg__a",
    cx: 14.911,
    cy: 49.968,
    r: 8.809,
    gradientTransform: "matrix(.9346 .3557 -.3098 .814 16.454 3.99)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.408,
    stopColor: "#e2e8ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("path", {
    fill: "url(#thought-balloon_svg__a)",
    d: "M9.899 50.871c-1.941 6.086 10.281 9.912 12.224 3.826 1.768-5.547-10.456-9.375-12.224-3.826z"
  }), _react["default"].createElement("radialGradient", {
    id: "thought-balloon_svg__b",
    cx: 6.192,
    cy: 57.893,
    r: 4.582,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.344,
    stopColor: "#e6ebf0"
  }), _react["default"].createElement("stop", {
    offset: 0.82,
    stopColor: "#d4dce0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("path", {
    fill: "url(#thought-balloon_svg__b)",
    d: "M5.138 56.752c-2.873 2.178.736 6.861 3.609 4.684 2.574-1.952-1.034-6.633-3.609-4.684z"
  }), _react["default"].createElement("radialGradient", {
    id: "thought-balloon_svg__c",
    cx: 28,
    cy: 20.469,
    r: 35.169,
    gradientTransform: "matrix(1 0 0 .7806 0 4.492)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ecf1f5"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#e9eff3"
  }), _react["default"].createElement("stop", {
    offset: 0.689,
    stopColor: "#e0e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.933,
    stopColor: "#d1d9de"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("path", {
    fill: "url(#thought-balloon_svg__c)",
    d: "M59.028 16.138c.17-5.531-4.785-9.187-8.465-8.169-3.346-5.633-9.746-5.436-13.418-2.828C31.285-.633 21.864 1.99 19.491 9.46 10.554 4.291 1.247 15.013 5.04 21.976c-8.016 8.412 1.205 22.788 11.607 18.999 1.748 7.529 14.846 11.27 20.107 2.746 3.83 4.078 12.361.836 11.867-4.301 6.748 2.416 12.408-4.332 10.342-10.157 3.833-2.774 4.237-10.045.065-13.125z"
  }));
};

var _default = SvgThoughtBalloon;
exports["default"] = _default;