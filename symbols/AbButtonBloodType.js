"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAbButtonBloodType = function SvgAbButtonBloodType(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ab-button-blood-type_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 2,
    x2: 32,
    y2: 62.001
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
    fill: "url(#ab-button-blood-type_svg__a)",
    d: "M62 54c0 4.399-3.601 8-8 8H10c-4.4 0-8-3.601-8-8V10c0-4.4 3.6-8 8-8h44c4.399 0 8 3.6 8 8v44z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M31.386 42.438c.186.549-.08.864-.637.864h-3.237c-.429 0-.735-.194-.864-.638l-1.089-3.415h-8.673l-1.088 3.415c-.129.443-.436.638-.864.638h-3.237c-.557 0-.823-.315-.638-.864l7.185-21.101c.129-.42.46-.638.888-.638h4.182c.428 0 .759.218.888.638l7.184 21.101zm-7.154-7.354l-3.009-9.445-3.01 9.445h6.019zM53.001 36.117c0 4.068-3.035 7.184-7.137 7.184H34.636c-.493 0-.768-.273-.768-.766v-21.07c0-.492.274-.767.768-.767H43.265c3.867 0 6.668 2.608 6.668 6.103 0 .99-.303 1.944-.818 2.758 2.361 1.229 3.886 3.635 3.886 6.558zM38.309 24.863v3.827h6.503a2.357 2.357 0 0 0 .682-1.647c0-1.267-.855-2.179-2.229-2.179l-4.956-.001zm10.252 11.012c0-1.824-1.058-3.262-3.229-3.262H38.31v6.522h6.99c2.195.001 3.261-1.444 3.261-3.26z"
  }));
};

var _default = SvgAbButtonBloodType;
exports["default"] = _default;