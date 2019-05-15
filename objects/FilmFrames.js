"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFilmFrames = function SvgFilmFrames(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "film-frames_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 32,
    x2: 62.001,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#484d58"
  }), _react["default"].createElement("stop", {
    offset: 0.47,
    stopColor: "#3b3b48"
  }), _react["default"].createElement("stop", {
    offset: 0.722,
    stopColor: "#33303e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#film-frames_svg__a)",
    d: "M2 12v9s12 11 0 22v9h60.001v-9c-12-11 0-22 0-22v-9H2zm2 3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-3zm4 34c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3zm2.5-34c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4 34c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3zM17 15c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4 34c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3zm2.5-34c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4.001 34c0 .55-.451 1-1.001 1h-2c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h2c.55 0 1.001.45 1.001 1v3zM30 15c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4.001 34c0 .55-.451 1-1 1h-2c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h2c.549 0 1 .45 1 1v3zM36.5 15c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4.001 34c0 .55-.451 1-1 1h-2c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h2c.549 0 1 .45 1 1v3zM43 15c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4.001 34c0 .55-.451 1-1 1h-2c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h2c.549 0 1 .45 1 1v3zM49.5 15c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4.001 34c0 .55-.451 1-1 1h-2c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h2c.549 0 1 .45 1 1v3zM56 15c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-3zm4.001 34c0 .55-.451 1-1 1h-2c-.551 0-1-.45-1-1v-3c0-.55.449-1 1-1h2c.549 0 1 .45 1 1v3z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M13.5 21H2v22h11.5c.274 0 .5-.225.5-.5v-21c0-.275-.226-.5-.5-.5zM50.501 21c-.275 0-.5.225-.5.5v21c0 .275.225.5.5.5h11.5V21h-11.5zM46 42.5c0 .275-.226.5-.5.5h-27a.501.501 0 0 1-.5-.5v-21c0-.275.225-.5.5-.5h27c.274 0 .5.225.5.5v21z"
  }));
};

var _default = SvgFilmFrames;
exports["default"] = _default;