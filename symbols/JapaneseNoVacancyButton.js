"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseNoVacancyButton = function SvgJapaneseNoVacancyButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-no-vacancy-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#fb3737"
  }), _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#f02b2a"
  }), _react["default"].createElement("stop", {
    offset: 0.789,
    stopColor: "#dd1616"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c90100"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-no-vacancy-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M39.822 27.537v2.575h11.24V47.15c0 2.232-.43 3.391-1.883 4.078-1.453.686-3.504.729-6.41.729-.084-1.242-.598-3.047-1.154-4.248 1.582.086 3.418.086 3.975.086.557-.043.727-.215.727-.688V34.533h-7.051v6.826h2.094v-5.066h2.949v10.17H41.36v-1.416h-7.734v2.49h-3.033V36.293h3.033v5.066h1.922v-6.826h-6.709V52h-4.486V30.112h10.598v-2.575H23.07v-4.463h6.793v-3.177h-5.471v-4.421h5.471V12h4.744v3.477h5.725V12h4.916v3.477h5.557v4.421h-5.557v3.177H52v4.463H39.822zm-5.215-4.463h5.725v-3.177h-5.725v3.177zM19.605 32c-1.58-1.373-4.957-3.134-7.606-4.205l2.693-3.861c2.605.814 6.025 2.401 7.734 3.775L19.605 32z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M13.113 48.523c1.92-3.305 4.656-8.711 6.836-13.732l4.016 3.047c-1.922 4.592-4.144 9.527-6.367 13.691l-4.485-3.006zM17.043 12.3c2.521 1.16 5.727 3.049 7.35 4.551l-3.162 4.033c-1.453-1.502-4.613-3.646-7.18-4.892l2.992-3.692z"
  }));
};

var _default = SvgJapaneseNoVacancyButton;
exports["default"] = _default;