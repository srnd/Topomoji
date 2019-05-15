"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMusicalScore = function SvgMusicalScore(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "musical-score_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 32,
    x2: 62,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4a575c"
  }), _react["default"].createElement("stop", {
    offset: 0.087,
    stopColor: "#505e63"
  }), _react["default"].createElement("stop", {
    offset: 0.4,
    stopColor: "#617178"
  }), _react["default"].createElement("stop", {
    offset: 0.708,
    stopColor: "#6b7d85"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#musical-score_svg__a)",
    d: "M62 13v-2H2v42h60v-2H10v-8h52v-2H10v-8h52v-2H10v-8h52v-2H10v-8z"
  }), _react["default"].createElement("linearGradient", {
    id: "musical-score_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 35.836,
    y1: 62,
    x2: 35.836,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.183,
    stopColor: "#2b2639"
  }), _react["default"].createElement("stop", {
    offset: 0.421,
    stopColor: "#3a354a"
  }), _react["default"].createElement("stop", {
    offset: 0.681,
    stopColor: "#433d54"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#464057"
  })), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#musical-score_svg__b)",
    d: "M39.11 3.198c8.919-6.037 12.705 12.16-1.59 22.783.341 1.605.639 3.254.935 4.9 8.027-.789 11.929 8.857 7.574 14.16-1.071 1.305-2.618 2.166-4.487 2.814.731 4.156 2.479 9.189-.374 12.07-3.698 3.732-13.587 2.387-13.09-3.721.198-2.443 2.248-4.285 4.675-4.176 4.149.188 5.479 6.652.748 7.443 1.922 1.232 5.456.129 6.357-1.451 1.268-2.227.544-4.574-.561-9.531-5.411.588-9.123-1.27-11.875-4.084-2.145-2.195-3.852-5.445-3.553-9.26.271-3.471 2.229-6.109 4.114-8.258 2.019-2.303 4.27-4.066 6.451-5.992-2.346-7.396-.479-14.207 4.676-17.697zm2.049 5.508c-2.713-3.014-5.893 4.475-4.854 10.83 5.881-4.857 6.107-9.439 4.854-10.83zm-5.695 18.727c-3.173 2.535-8.693 6.418-8.041 12.072.51 4.428 5.109 7.9 11.5 6.898 0 0-1.193-6.889-1.776-10.348-2.643.715-4.127 3.766-2.431 5.99.674.883 2.334 1.064 2.244 1.998-.1 1.031-1.604.475-2.244.182-.851-.391-1.646-.959-2.057-1.361-3.867-3.795-.846-10.305 3.553-11.527-.21-1.34-.748-3.904-.748-3.904zm5.61 18.336c5.177-1.754 3.361-9.723-1.684-9.895l1.684 9.895z"
  }));
};

var _default = SvgMusicalScore;
exports["default"] = _default;