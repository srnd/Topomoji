"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWhiteQuestionMark = function SvgWhiteQuestionMark(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "white-question-mark_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 54.626,
    y1: 52.808,
    x2: 10.962,
    y2: 52.808
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a2aaad"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#b9c0c4"
  }), _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#cbd2d6"
  }), _react["default"].createElement("stop", {
    offset: 0.71,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9e0e4"
  })), _react["default"].createElement("path", {
    fill: "url(#white-question-mark_svg__a)",
    d: "M35.255 47.614h-6.923c-1.112 0-1.731.62-1.731 1.731v6.923c0 1.112.619 1.731 1.731 1.731h6.923c1.111 0 1.73-.619 1.73-1.731v-6.923c0-1.111-.619-1.731-1.73-1.731z"
  }), _react["default"].createElement("linearGradient", {
    id: "white-question-mark_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 54.627,
    y1: 23.437,
    x2: 10.96,
    y2: 23.437
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a2aaad"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#b9c0c4"
  }), _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#cbd2d6"
  }), _react["default"].createElement("stop", {
    offset: 0.71,
    stopColor: "#d6dde1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9e0e4"
  })), _react["default"].createElement("path", {
    fill: "url(#white-question-mark_svg__b)",
    d: "M32.741 6c-8.964 0-16.945 4.701-17.783 14.631-.073 1.184.601 1.804 1.712 1.804h6.577c1.039 0 1.604-.565 1.84-1.622.656-3.37 3.48-5.047 7.325-5.047 4.19 0 6.614 1.913 6.614 5.302 0 6.706-10.659 9.767-12.062 18.002-.237 1.13.492 1.804 1.603 1.804h6.687c1.039 0 1.494-.51 1.84-1.494 1.768-5.611 11.952-9.109 11.952-19.076C49.047 10.956 40.958 6 32.741 6z"
  }));
};

var _default = SvgWhiteQuestionMark;
exports["default"] = _default;