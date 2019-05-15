"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgVirgo = function SvgVirgo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "virgo_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bc2af7"
  }), _react["default"].createElement("stop", {
    offset: 0.216,
    stopColor: "#b928f3"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#b121e6"
  }), _react["default"].createElement("stop", {
    offset: 0.668,
    stopColor: "#a217d2"
  }), _react["default"].createElement("stop", {
    offset: 0.896,
    stopColor: "#8e08b5"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#8400a6"
  })), _react["default"].createElement("path", {
    fill: "url(#virgo_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M50.226 45.308a7.303 7.303 0 0 1-3.342-.812c3.145-3.577 4.773-8.65 4.773-12.807 0-2.57-.592-4.799-1.712-6.446-1.339-1.969-3.332-3.01-5.762-3.01-1.518 0-2.864.398-3.991 1.161V21.92c0-2.047-.798-3.83-2.246-5.019-1.215-.997-2.847-1.547-4.595-1.547-1.964 0-3.994.715-5.41 2.082a6.25 6.25 0 0 0-.566-.536c-1.216-.997-2.848-1.546-4.598-1.546-1.899 0-3.859.672-5.268 1.954-.841-1.093-1.974-1.908-3.306-2.254-.947-.245-1.913.354-2.151 1.344-.237.989.34 1.991 1.29 2.238 1.071.278 2.153 1.496 2.153 3.284v19.06c0 1.02.795 1.846 1.774 1.846s1.773-.827 1.773-1.846V21.92c0-2.093 2.29-2.874 3.733-2.874.942 0 1.817.275 2.4.753.604.495.896 1.188.896 2.12v19.06c0 1.02.795 1.846 1.774 1.846s1.773-.827 1.773-1.846v-19.06c0-2.093 2.287-2.874 3.73-2.874.94 0 1.814.275 2.397.753.603.495.896 1.188.896 2.121l-.041 9.849c0 4.489 1.697 9.261 4.564 12.642a8.415 8.415 0 0 1-3.803.896c-.98 0-1.774.827-1.774 1.846 0 1.02.794 1.846 1.774 1.846 2.547 0 4.769-.75 6.652-1.988C45.84 48.26 47.934 49 50.226 49c.98 0 1.774-.826 1.774-1.846 0-1.019-.794-1.846-1.774-1.846zM40.193 32.593v-1.577c.093-1.473.44-2.745 1.03-3.611.679-.996 1.648-1.479 2.961-1.479 1.264 0 2.202.475 2.865 1.451.685 1.004 1.06 2.537 1.06 4.313 0 3.383-1.414 7.685-4.076 10.539-2.288-2.594-3.64-6.383-3.84-9.636z"
  }));
};

var _default = SvgVirgo;
exports["default"] = _default;