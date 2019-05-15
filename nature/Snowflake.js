"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSnowflake = function SvgSnowflake(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "snowflake_svg__a",
    cx: 32,
    cy: 32,
    r: 22.594,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#82eaff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00c4ff"
  })), _react["default"].createElement("path", {
    fill: "url(#snowflake_svg__a)",
    d: "M33.999 45.318V18.68l8.402-8.254a2 2 0 0 0-2.803-2.853l-5.6 5.5V4a2 2 0 1 0-4 0v9.074L24.4 7.572a2 2 0 1 0-2.803 2.853l8.4 8.256v26.637l-8.4 8.254a1.999 1.999 0 0 0-.025 2.828 1.995 1.995 0 0 0 2.828.026l5.598-5.5V60a2 2 0 0 0 4 0v-9.074l5.6 5.5a1.999 1.999 0 0 0 2.828-.026 2.001 2.001 0 0 0-.025-2.828l-8.402-8.254z"
  }), _react["default"].createElement("radialGradient", {
    id: "snowflake_svg__b",
    cx: 32,
    cy: 31.999,
    r: 24.315,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#82eaff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00c4ff"
  })), _react["default"].createElement("path", {
    fill: "url(#snowflake_svg__b)",
    d: "M57.501 26.367l-7.727-2.1 8.029-4.535c.979-.553 1.313-1.775.748-2.732s-1.816-1.287-2.793-.732l-8.029 4.537 2.006-7.6c.283-1.068-.373-2.16-1.467-2.436-1.09-.279-2.207.367-2.49 1.436l-3.012 11.402-23.578 13.32-11.597-3.148c-1.088-.297-2.213.328-2.516 1.391-.303 1.064.336 2.168 1.424 2.463l7.729 2.098-8.031 4.537A1.978 1.978 0 0 0 5.448 47c.379.641 1.066 1 1.771 1 .348 0 .699-.086 1.02-.268l8.031-4.537-2.006 7.598c-.285 1.07.373 2.16 1.467 2.438.172.043.342.063.512.063.91 0 1.74-.598 1.979-1.498l3.012-11.404 23.576-13.32 11.6 3.148c.182.051.367.074.547.074.895 0 1.719-.582 1.969-1.467.302-1.063-.337-2.165-1.425-2.46z"
  }), _react["default"].createElement("radialGradient", {
    id: "snowflake_svg__c",
    cx: 32,
    cy: 32,
    r: 24.315,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#82eaff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00c4ff"
  })), _react["default"].createElement("path", {
    fill: "url(#snowflake_svg__c)",
    d: "M57.804 44.268l-8.029-4.537 7.727-2.098c1.088-.295 1.727-1.398 1.424-2.463-.301-1.063-1.422-1.688-2.516-1.391l-11.598 3.148-23.578-13.32-3.012-11.402c-.283-1.068-1.398-1.715-2.49-1.436-1.094.275-1.752 1.367-1.467 2.438l2.006 7.598-8.031-4.537c-.977-.553-2.227-.225-2.792.732s-.229 2.18.748 2.732l8.031 4.537-7.729 2.098c-1.088.295-1.727 1.396-1.424 2.461.25.887 1.072 1.467 1.969 1.467.18 0 .365-.023.547-.074l11.6-3.148 23.576 13.32 3.012 11.402c.238.902 1.068 1.5 1.979 1.5.168 0 .34-.021.512-.064 1.094-.275 1.75-1.367 1.467-2.436l-2.006-7.6 8.029 4.537A2.07 2.07 0 0 0 56.78 48c.705 0 1.393-.359 1.771-1a1.975 1.975 0 0 0-.747-2.732z"
  }));
};

var _default = SvgSnowflake;
exports["default"] = _default;