"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVictoryHand = function SvgVictoryHand(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "victory-hand_svg__a",
    cx: 47.159,
    cy: 43.167,
    r: 23.336,
    gradientTransform: "matrix(.9834 0 0 .9813 -9.05 -1.558)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.449,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.733,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.87,
    stopColor: "#fac65c"
  }), _react["default"].createElement("stop", {
    offset: 0.975,
    stopColor: "#f4bd4f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#victory-hand_svg__a)",
    d: "M13.446 36.283c-2.889 20.386 11.217 24.892 18.729 24.965 6.504.063 15.798-2.592 18.562-14.104 5.256-21.911-32.676-18.404-37.291-10.861z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M12.709 36.178C9.748 56.461 23.499 61.914 32.179 62c4.676 0 16.112-1.431 19.292-14.682 5.755-23.98-37.598-19.106-38.762-11.14zm37.303 10.791C47.081 59.182 36.5 60.5 32.179 60.5c-8.886-.086-20.525-5.672-18.009-23.95 4.619-6.863 40.816-10.308 35.842 10.419z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M42.542 41.194l-1.013-1.264c-4.217-.85-12.294 3.838-13.725 11.602 2.106-6.828 10.733-11.367 14.738-10.338zM52.854 8.673c1.457-6.542-8.357-8.86-9.972-1.992-1.98 8.432-4.254 17.34-5.133 18.961-.801-1.754-2.621-11.197-3.805-19.469-.932-6.517-10.86-5.028-9.993 1.879 1.404 11.193 3.738 22.314 3.74 22.32 3.7 2.962 11.639-1.788 20.537 4.725-.468-7.532 1.571-12.721 4.626-26.424z"
  }), _react["default"].createElement("linearGradient", {
    id: "victory-hand_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 37.627,
    y1: 34.465,
    x2: 38.985,
    y2: -11.364
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f2ba4b"
  }), _react["default"].createElement("stop", {
    offset: 0.038,
    stopColor: "#f4bd4f"
  }), _react["default"].createElement("stop", {
    offset: 0.202,
    stopColor: "#fac55c"
  }), _react["default"].createElement("stop", {
    offset: 0.415,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.855,
    stopColor: "#fc6"
  })), _react["default"].createElement("path", {
    fill: "url(#victory-hand_svg__b)",
    d: "M44.222 7.12c-1.982 8.432-4.473 20.523-6.518 20.51-.967-.006-2.455-2.268-5.116-20.822-.754-5.261-7.822-3.989-7.16 1.281 1.404 11.193 4.047 23.639 4.047 23.639.357 1.818 5.511-3.175 17.197 2.23-.239-7.538 1.934-12.714 4.686-25.424 1.091-5.048-5.956-6.44-7.136-1.414z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M11.047 31.714c-.828-7.316 9.379-8.268 10.129-.971l.707 6.123c.822 7.242-9.379 8.164-10.137.934l-.699-6.086z"
  }), _react["default"].createElement("radialGradient", {
    id: "victory-hand_svg__c",
    cx: -231.002,
    cy: 29.315,
    r: 5.592,
    gradientTransform: "matrix(.8309 -.0853 .129 1.1847 205.153 -22.896)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#fdc961"
  }), _react["default"].createElement("stop", {
    offset: 0.906,
    stopColor: "#f6bf53"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#victory-hand_svg__c)",
    d: "M12.54 31.521c-.586-5.256 6.566-5.947 7.16-.686l.691 6.199c.59 5.236-6.572 5.898-7.165.66l-.686-6.173z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M19.36 28.091c-.828-7.316 9.381-8.27 10.129-.971l.707 6.123c.822 7.242-9.377 8.164-10.135.932l-.701-6.084z"
  }), _react["default"].createElement("radialGradient", {
    id: "victory-hand_svg__d",
    cx: -221.024,
    cy: 25.129,
    r: 5.593,
    gradientTransform: "matrix(.8309 -.0853 .129 1.1847 205.715 -20.71)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#fdc961"
  }), _react["default"].createElement("stop", {
    offset: 0.906,
    stopColor: "#f6bf53"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#victory-hand_svg__d)",
    d: "M20.852 27.897c-.586-5.258 6.568-5.947 7.16-.686l.693 6.197c.588 5.236-6.572 5.9-7.164.66l-.689-6.171z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M35.866 31.585c-1.718-.01-5.791 1.555-11.57 1.725-2.531.072-2.95 4.328.881 6.203 5.335 2.605 13.567-.795 16.037 4.939.608 1.412 9.513-2.266 8.46-4.982-2.652-6.846-12.609-7.879-13.808-7.885z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M40.547 44.757c-2.301-5.342-10.65-2.111-15.683-4.566-4.699-2.301-3.941-7.533-.587-7.629 3.563-.105 8.566-1.928 11.621-1.928 3.374 0 9.438.805 13.298 4.867 1.646 1.733-.15 2.121-1.34.814-2.833-3.106-8.646-4.32-11.958-4.32-3.338 0-7.881 1.955-11.581 2.064-1.504.043-2.227 3.111 1.174 4.775 5.175 2.527 13.656-1.037 16.391 5.313l-1.335.61z"
  }));
};

var _default = SvgVictoryHand;
exports["default"] = _default;