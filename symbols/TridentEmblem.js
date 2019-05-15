"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTridentEmblem = function SvgTridentEmblem(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "trident-emblem_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 32,
    x2: 32,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffc800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe14d"
  })), _react["default"].createElement("path", {
    fill: "url(#trident-emblem_svg__a)",
    d: "M22.992 21.93l6.179-4.691-3.033 19.584c-8.416-.121-12.922.616-12.922.616s-1.494-5.212-1.027-9.567c.375-3.523 2.715-3.957 2.715-3.957l3.51 3.037c-2.168-9.83.826-18.266.826-18.266S9.97 17.379 6.955 24.592C3.859 32 2 40.818 2 40.818l6.4 5.914s5.648-1.664 9.963-1.998c4.129-.318 7.906-.398 7.906-.398v8.48L32 62V2l-9.008 19.93z"
  }), _react["default"].createElement("linearGradient", {
    id: "trident-emblem_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -2057.37,
    y1: 32,
    x2: -2027.37,
    y2: 32,
    gradientTransform: "matrix(-1 0 0 1 -1995.37 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe14d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fc0"
  })), _react["default"].createElement("path", {
    fill: "url(#trident-emblem_svg__b)",
    d: "M41.008 21.93l-6.179-4.691 3.032 19.584c8.416-.121 12.923.616 12.923.616s1.493-5.212 1.026-9.567c-.375-3.523-2.715-3.957-2.715-3.957l-3.51 3.037c2.168-9.83-.826-18.266-.826-18.266s9.27 8.693 12.285 15.906C60.141 32 62 40.818 62 40.818l-6.4 5.914s-5.647-1.664-9.963-1.998c-4.129-.318-7.906-.398-7.906-.398v8.48L32 62V2l9.008 19.93z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M29.475 14.864l-4.997 3.78-1.486 3.286 6.179-4.691zM34.525 14.864l.304 2.375 6.179 4.691-1.486-3.286zM12.437 26.497c-.006.053-.008.108-.013.162.706-2.413 2.48-2.744 2.48-2.744l3.51 3.037a32.547 32.547 0 0 1-.5-2.962l-2.796-2.45s-2.311 1.434-2.681 4.957zM48.883 21.54l-2.797 2.45c-.122.97-.277 1.956-.5 2.962l3.51-3.037s1.775.331 2.48 2.744c-.005-.054-.007-.109-.013-.162-.37-3.523-2.68-4.957-2.68-4.957zM55.305 45.357s-5.577-1.664-9.838-1.998c-4.078-.318-7.736-.398-7.736-.398v1.375s3.777.08 7.906.398c4.315.334 9.963 1.998 9.963 1.998l6.4-5.914s-.115-.544-.333-1.47l-6.362 6.009zM26.269 42.961s-3.658.08-7.736.398c-4.261.334-9.838 1.998-9.838 1.998l-6.362-6.009c-.218.926-.333 1.47-.333 1.47l6.4 5.914s5.648-1.664 9.963-1.998c4.129-.318 7.906-.398 7.906-.398v-1.375zM26.269 50.104v2.712L32 62l5.73-9.184v-2.712L32 59.288z"
  }));
};

var _default = SvgTridentEmblem;
exports["default"] = _default;