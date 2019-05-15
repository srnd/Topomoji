"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgZebra = function SvgZebra(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M27.985 9.579c2.127 3.259 24.487 41.865 29.505 46.699C70.342 42.37 54.091 3.037 27.985 9.579z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M20.744 4.352c-.173-1.632 9.496 4.684 9.886 15.525.033.696-4.501.056-7.271-2.363 0 0-1.996-7.239-2.615-13.162z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M21.747 6.981c-.099-1.146 6.361 4.532 6.521 12.044.016.482-3.036-.583-4.883-2.627 0 0-1.277-5.255-1.638-9.417z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M51.993 17.606c-1.2 4.765-4.842 7.625-4.842 7.625l6.492 10.284c3.377-2.912 5.263-6.979 5.263-6.979-2.422-6.415-6.913-10.93-6.913-10.93zM60.547 33.17c-1.383 4.377-5.129 6.703-5.129 6.703l2.117 9.738c2.897-2.477 4.445-5.877 4.445-5.877.215-6-1.433-10.564-1.433-10.564zM40.012 18.464s.263-4.886-1.515-9.092c0 0 3.86.602 7.815 3.349 0 0 .604 4.357-1.179 10.228l-5.121-4.485z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M23.715 27.601S42.039-2.42 17.872 14.778c3.734 6.178 5.843 12.823 5.843 12.823z"
  }), _react["default"].createElement("linearGradient", {
    id: "zebra_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 43.41,
    y1: 62,
    x2: 43.41,
    y2: 36.171
  }, _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#d7dfe3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#zebra_svg__a)",
    d: "M31.651 14.953c-5.264 8.905-.605 29.596-.605 29.596C38.564 46.361 32.113 62 37.066 62c14.06 0 20.424-5.723 20.424-5.723 2.169-20.431-15.026-40.57-25.839-41.324z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M55.418 39.873c-1.831 9.91-3.268 15.417-6.485 20.541 2.502-.728 4.45-1.59 5.837-2.342.845-2.487 1.974-5.179 2.766-8.461-.001-3.115-.929-7.115-2.118-9.738zM47.151 25.23c-3.976 19.229-1.173 19.224-6.206 36.604a43.605 43.605 0 0 0 3.604-.43c1.661-5.543 6.509-17.551 9.094-25.89-1.326-3.768-4.088-8.102-6.492-10.284zM40.012 18.464c.651 7.05-3.862 17.295-6.467 27.703 2.08 2.77 1.327 8.161 1.443 11.881 1.592-9.896 9.226-25.745 10.146-35.099-1.313-2.078-3.416-3.62-5.122-4.485z"
  }), _react["default"].createElement("linearGradient", {
    id: "zebra_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 31.305,
    y1: 41.244,
    x2: 41.513,
    y2: 45.962
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626",
    stopOpacity: 0.6
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#zebra_svg__b)",
    d: "M37.372 25.76c-9.696-.786-6.327 18.789-6.327 18.789C38.564 46.361 32.113 62 37.066 62c-1.857-11.178 8.044-21.537.306-36.24z"
  }), _react["default"].createElement("linearGradient", {
    id: "zebra_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 27.153,
    y1: 54.452,
    x2: 21.224,
    y2: 35.937
  }, _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.609,
    stopColor: "#d7dfe3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#zebra_svg__c)",
    d: "M36.146 16.813C35.649 14.382 33.2 4.71 28.054 2.006c-.622-.327-1.148 12.275-1.148 12.275-10.703 8.997-22.93 24.1-24.402 26.829-1.461 2.708 3.793 9.646 3.793 9.646 1.573.201 3.533 1.646 4.335 2.261 1.482 1.141 5.081-3.273 9.116-4.091 15.185-3.085 18.195-8.528 18.7-13.657 1.179-11.956-2.302-18.456-2.302-18.456z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M14.73 26.155C8.47 32.961 3.16 39.432 2.247 41.125c-1.462 2.708 4.05 9.63 4.05 9.63 1.573.201 3.493 1.972 4.296 2.587 1.481 1.142 5.422-3.281 9.155-4.417 4.83-6.933-8.066-11.958-5.018-22.77z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M6.398 44.197c-.524.401-1.803.701-2.189.158-.388-.544.267-1.727.788-2.127a1.15 1.15 0 0 1 1.644.261c.388.542.278 1.31-.243 1.708zM16.203 41.225c-.119 2.521-1.291 4.996-3.092 6.792a9.672 9.672 0 0 1-3.146 2.069 9.213 9.213 0 0 1-3.598.662c2.309-.759 4.406-1.82 6.057-3.479.832-.812 1.554-1.75 2.181-2.764.611-1.025 1.169-2.106 1.598-3.28z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M28.071 3.865c.163-1.138 5.143 6.075 3.604 13.402-.098.473-3.761-.838-4.142-3.839.001 0-.051-5.434.538-9.563z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M5.164 40.107c-.532.352-.438.569.028.381.468-.188 2.749-.813 2.939 1.794 0 0 .129 1.167.418.009.286-1.165-.397-4.168-3.385-2.184z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M26.55 27.17c0 4.237-4.737 4.237-4.737 0s4.737-4.236 4.737 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M24.122 26.09a.731.731 0 0 1-1.457 0 .731.731 0 0 1 1.457 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.634 20.142c2.598 12.155-4.102 10.999.812 24.309 0 0 2.797-1.644 3.662-3.156-3.856-8.125 1.217-13.154-4.474-21.153zM30.37 45.592c-4.087-5.076-3.499-11.389-12.718-10.607 8.205 2.162 4.702 8.125 7.211 12.686 0-.001 3.275-.812 5.507-2.079zM22.44 17.702c2.862.848 2.093 5.173 6.703 7.125-3.186-3.507-.478-7.437-4.538-10.068-1.095 1.206-2.165 2.943-2.165 2.943zM13.576 31.854c1.022-3.397 9.93-2.854 6.716-11.483 0 0-1.573 1.521-2.124 2.146-.372 3.424-2.479 4.292-4.292 6.867-.32.451-.3 2.47-.3 2.47z"
  }));
};

var _default = SvgZebra;
exports["default"] = _default;