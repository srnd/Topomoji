"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPhilippines = function SvgPhilippines(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M33 32L11.3 53.7C16.68 58.84 23.97 62 32 62c16.57 0 30-13.43 30-30H33z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M62 32C62 15.43 48.57 2 32 2c-8.03 0-15.32 3.16-20.7 8.3L33 32h29z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M11.3 10.3C5.57 15.76 2 23.46 2 32s3.57 16.24 9.3 21.7L33 32 11.3 10.3z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M12.99 13.61l-.76 1.42 1.1 1.07-1.55-.22-.74 1.43-.2-1.55-1.55-.2 1.43-.74-.22-1.54 1.08 1.09zM13.23 48l-1.1 1.17.78 1.33-1.44-.62-1.08 1.19.21-1.55-1.45-.59 1.57-.35.19-1.55.76 1.34zM30.5 32l-1.54.46.01 1.54-.94-1.25-1.53.49.96-1.24-.96-1.24 1.53.49.94-1.25-.01 1.54zM23.69 30.48l-.6-.43-6.55 1.43.06-.05 6.13-1.63-.71-.52-5.23 1.99 4.32-3.61-.09-.88-4.46 4.58-.07.03 4.49-5.04-.07-.74-.73.06-4.11 5.37.01-.08 3.67-5.26-.87.07-2.75 4.94 1.02-5.58-.63-.62-.52 6.42-.04.07.25-6.79-.52-.52-.52.52.25 6.8-.04-.07-.52-6.42-.62.62 1.02 5.58-2.75-4.94-.87-.07 3.66 5.26.01.08-4.11-5.37-.73-.06-.07.74 4.49 5.04-.07-.03-4.46-4.58-.09.88 4.32 3.61-5.23-1.99-.71.52 6.13 1.63.06.05-6.55-1.43-.59.43.4.61 6.63.93-.07.03-6.31-.59.49.73 5.59-.06-5.27 1.89-.22.86 5.73-2.75h.08l-5.92 3.18-.18.72.71.2 5.67-3.62-.04.07-5.21 3.66.84.24 4.25-3.69-2.84 4.89.38.8 2.65-5.85.06-.05-2.52 6.3.32.67.67-.31 2.06-6.47.01.08-1.67 6.21.79-.37.92-5.6.92 5.6.79.37-1.67-6.21.01-.08 2.06 6.47.67.31.32-.67-2.52-6.3.06.05 2.65 5.85.38-.8-2.84-4.89 4.25 3.69.84-.24-5.21-3.66-.04-.07 5.67 3.62.71-.2-.18-.72-5.92-3.18h.08l5.73 2.75-.22-.86-5.27-1.89 5.59.05.49-.73-6.31.6-.07-.03 6.63-.93.39-.62zm-8.82 1.59l-.05-.01.05-.02.04.01-.04.02zm.09-.57l-.04-.04.05.01.03.04-.04-.01zm.2 1.07l-.04.03.02-.05.04-.02-.02.04zm.23-1.45v-.05l.03.04v.04l-.03-.03zm.3 1.69l-.01-.05.01-.04.01.04-.01.05zm.3-1.69l-.03.03v-.04l.03-.04v.05zm.23 1.45l-.02-.04.04.02.02.05-.04-.03zm.2-1.07l-.04.01.03-.04.05-.01-.04.04zm.09.57l-.04-.02.04-.01.05.02-.05.01z"
  }), _react["default"].createElement("circle", {
    fill: "#FFE12C",
    cx: 15.69,
    cy: 32,
    r: 4.5
  }), _react["default"].createElement("linearGradient", {
    id: "philippines_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 62,
    x2: 32,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#philippines_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgPhilippines;
exports["default"] = _default;