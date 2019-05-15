"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLevelSlider = function SvgLevelSlider(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "level-slider_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#93a1a8"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#a8b4bb"
  }), _react["default"].createElement("stop", {
    offset: 0.483,
    stopColor: "#bec8ce"
  }), _react["default"].createElement("stop", {
    offset: 0.752,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#level-slider_svg__a)",
    d: "M50 58c0 2.199-1.801 4-4 4H18c-2.2 0-4-1.801-4-4V6c0-2.2 1.8-4 4-4h28c2.199 0 4 1.8 4 4v52z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M48 57.5c0 1.375-1.125 2.5-2.5 2.5h-27a2.507 2.507 0 0 1-2.5-2.5v-51C16 5.125 17.125 4 18.5 4h27C46.875 4 48 5.125 48 6.5v51z"
  }), _react["default"].createElement("radialGradient", {
    id: "level-slider_svg__b",
    cx: 32,
    cy: 32,
    r: 17.205,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.331,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.743,
    stopColor: "#9fadb3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#92a0a6"
  })), _react["default"].createElement("path", {
    fill: "url(#level-slider_svg__b)",
    d: "M36 52.303c0 4.93-8 4.93-8 0V11.698c0-4.93 8-4.93 8 0v40.605z"
  }), _react["default"].createElement("linearGradient", {
    id: "level-slider_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 30,
    y1: 32,
    x2: 34,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1f1c26"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#221f29"
  }), _react["default"].createElement("stop", {
    offset: 0.486,
    stopColor: "#2a2933"
  }), _react["default"].createElement("stop", {
    offset: 0.688,
    stopColor: "#383b44"
  }), _react["default"].createElement("stop", {
    offset: 0.879,
    stopColor: "#4b535b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#level-slider_svg__c)",
    d: "M34 51.707c0 3.057-4 3.057-4 0V12.292c0-3.056 4-3.056 4 0v39.415z"
  }), _react["default"].createElement("path", {
    fill: "#A6E639",
    d: "M44.096 54H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2zM44.096 48H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2zM44.096 36H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2zM44.096 42H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2zM44.096 30H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M44.096 18H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2zM44.096 24H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2zM44.096 12H40.01c-.609 0-.609-2 0-2h4.086c.609 0 .609 2 0 2z"
  }), _react["default"].createElement("path", {
    fill: "#A6E639",
    d: "M19.905 54h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2zM19.905 48h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2zM19.905 42h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2zM19.905 36h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2zM19.905 30h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M19.905 18h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2zM19.905 24h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2zM19.905 12h4.086c.609 0 .609-2 0-2h-4.086c-.61 0-.61 2 0 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "level-slider_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 30,
    x2: 32.001,
    y2: 22
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1f1c26"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#221f29"
  }), _react["default"].createElement("stop", {
    offset: 0.486,
    stopColor: "#2a2933"
  }), _react["default"].createElement("stop", {
    offset: 0.688,
    stopColor: "#383b44"
  }), _react["default"].createElement("stop", {
    offset: 0.879,
    stopColor: "#4b535b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#level-slider_svg__d)",
    d: "M42.5 28c0 1.1-.9 2-2 2h-17c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h17c1.1 0 2 .9 2 2v4z"
  }), _react["default"].createElement("linearGradient", {
    id: "level-slider_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 29,
    x2: 32.001,
    y2: 23
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#475157"
  }), _react["default"].createElement("stop", {
    offset: 0.271,
    stopColor: "#4d595f"
  }), _react["default"].createElement("stop", {
    offset: 0.69,
    stopColor: "#5e6d75"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#level-slider_svg__e)",
    d: "M41.5 28c0 .55-.449 1-1 1h-17c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h17c.551 0 1 .45 1 1v4z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#302C3B",
    d: "M23.75 23h.5v6h-.5zM25.75 23h.5v6h-.5zM27.75 23h.5v6h-.5zM29.75 23h.5v6h-.5zM31.75 23h.5v6h-.5zM33.75 23h.5v6h-.5zM35.75 23h.5v6h-.5zM37.75 23h.5v6h-.5zM39.75 23h.5v6h-.5z"
  }));
};

var _default = SvgLevelSlider;
exports["default"] = _default;