"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJapaneseOpenForBusinessButton = function SvgJapaneseOpenForBusinessButton(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "japanese-open-for-business-button_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.287,
    stopColor: "#ff9500"
  }), _react["default"].createElement("stop", {
    offset: 0.585,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.887,
    stopColor: "#ff7400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6a00"
  })), _react["default"].createElement("path", {
    fill: "url(#japanese-open-for-business-button_svg__a)",
    d: "M62 54c0 4.4-3.6 8-8 8H10c-4.4 0-8-3.6-8-8V10c0-4.4 3.6-8 8-8h44c4.4 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M33.773 35.201a28.25 28.25 0 0 1-.98 2.338h12.49V50H40.83v-1.266H23.133V50h-4.264V37.539h9.471c.188-.766.416-1.57.564-2.338h-6.867v-9.393h19.699v9.393h-7.963zm7.057 6.248H23.133v3.336H40.83v-3.336zm-14.64-9.584h11.207v-2.684H26.19v2.684z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M48 20.057v8.168h-4.34V23.93H20.076v4.295H16v-8.168h4.566c-.68-1.225-1.623-2.608-2.49-3.756l3.887-1.688c1.244 1.457 2.717 3.49 3.357 4.908l-1.207.535h5.813c-.529-1.379-1.549-3.258-2.455-4.715L31.396 14c1.094 1.496 2.34 3.682 2.867 5.061l-2.641.996h6.188c1.209-1.646 2.642-3.986 3.359-5.787L46 15.803c-1.096 1.457-2.227 2.99-3.283 4.254H48z"
  }));
};

var _default = SvgJapaneseOpenForBusinessButton;
exports["default"] = _default;