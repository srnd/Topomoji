"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRollOfPaper = function SvgRollOfPaper(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M18.681 42.609l27.902-2.997C40.457 3.346 12.949 6.4 18.681 42.609z"
  }), _react["default"].createElement("linearGradient", {
    id: "roll-of-paper_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 36.473,
    y1: 62,
    x2: 36.473,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c1cccf"
  }), _react["default"].createElement("stop", {
    offset: 0.508,
    stopColor: "#d6dee1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#roll-of-paper_svg__a)",
    d: "M57.325 28.248c.991-18.16-7.313-26.877-16.329-26.213-7.093.522-27.05 3.05-27.05 3.05 16.552 2.808 16.292 22.159 15.381 35.251-.862 12.38.666 21.664.666 21.664s3.081-1.166 4.157-1.355c.686-.121 2.31.114 3 .031.962-.115.896-.458 1.844-.656.807-.169 3.844-.875 4.344-.656l.531-.766.125.609c1.219-.594 8.789-1.641 9.344-1.781.131-.033.391-1.328.391-1.328l.188 1.156c.569-.119 5.083-1.309 5.083-1.309s-2.626-10.242-1.675-27.697z"
  }), _react["default"].createElement("linearGradient", {
    id: "roll-of-paper_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 5,
    y1: 23.787,
    x2: 28.936,
    y2: 23.787
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c1cccf"
  })), _react["default"].createElement("path", {
    fill: "url(#roll-of-paper_svg__b)",
    d: "M28.732 22.604C27.525 12.229 21.281 4.349 14.783 5.003c-6.499.653-10.787 9.593-9.58 19.968s7.451 18.256 13.949 17.601c6.499-.653 10.787-9.592 9.58-19.968z"
  }), _react["default"].createElement("path", {
    fill: "#A89588",
    d: "M11.63 24.278c.202 4.328 2.552 7.116 5.785 7.301 2.705.154 4.471-3.979 3.973-8.281-.55-4.747-3.229-8.016-5.894-7.528-2.906.531-4.094 3.593-3.864 8.508z"
  }), _react["default"].createElement("linearGradient", {
    id: "roll-of-paper_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 11.858,
    y1: 23.653,
    x2: 21.21,
    y2: 23.653
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a89588"
  }), _react["default"].createElement("stop", {
    offset: 0.105,
    stopColor: "#9d8a7d"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#786557"
  }), _react["default"].createElement("stop", {
    offset: 0.803,
    stopColor: "#614e40"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#594638"
  })), _react["default"].createElement("path", {
    fill: "url(#roll-of-paper_svg__c)",
    d: "M11.885 24.246c.191 4.102 2.418 6.743 5.481 6.918 2.563.146 4.236-3.771 3.765-7.847-.521-4.498-3.06-7.596-5.585-7.134-2.754.505-3.879 3.406-3.661 8.063z"
  }), _react["default"].createElement("path", {
    opacity: 0.4,
    fill: "#B3C2C6",
    d: "M23.145 29.157c.8-1.494.8-6.449 0-7.941.488 1.999.488 5.942 0 7.941zM10.216 22.016c-.699 1.719.417 6.636 1.79 7.883-1.083-1.84-1.972-5.754-1.79-7.883zM10.533 12.394c-1.301 1.303-2.837 6.453-2.461 8.255.107-2.231 1.329-6.332 2.461-8.255zM24.338 15.606c-.291-2.187-4.332-6.653-6.478-7.159 2.198 1.29 5.414 4.845 6.478 7.159zM11.682 36.988c.446 1.252 3.392 3.403 4.719 3.447-1.458-.499-3.801-2.21-4.719-3.447zM16.834 36.869c1.086.813 3.781.097 4.319-1.148-.92.916-3.065 1.488-4.319 1.148zM16.97 14.381c-.92-1.018-3.182-.555-3.626.744.767-.896 2.567-1.264 3.626-.744zM36.061 14.059c-1.512-.076-6.277.889-7.638 1.548 1.876-.615 5.67-1.383 7.638-1.548zM37.807 13.123c-1.506-.152-6.314.57-7.706 1.159 1.904-.518 5.732-1.094 7.706-1.159zM52.746 29.961c-1.828-.274-7.738.326-9.472.964 2.356-.522 7.06-1 9.472-.964zM54.982 29.032c-1.813-.365-7.746-.064-9.509.484 2.379-.402 7.101-.641 9.509-.484zM43.973 45.558c-2.136-.32-9.035.382-11.06 1.126 2.75-.609 8.242-1.167 11.06-1.126zM46.583 44.475c-2.117-.427-9.044-.076-11.103.565 2.777-.47 8.291-.75 11.103-.565zM42.791 42.526c-2.117-.426-9.044-.075-11.103.565 2.777-.468 8.291-.748 11.103-.565z"
  }));
};

var _default = SvgRollOfPaper;
exports["default"] = _default;