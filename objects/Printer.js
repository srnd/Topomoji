"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPrinter = function SvgPrinter(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M48 11H16c-1.1 0-2 .899-2 2v16h36V13c0-1.101-.9-2-2-2z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M48 11.25H16c-.549 0-1 .45-1 1v15h34v-15c0-.55-.449-1-1-1z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M18 6h28v23H18z"
  }), _react["default"].createElement("path", {
    fill: "#566873",
    d: "M2 47.47v5.832c0 1.069.9 1.944 2 1.944h56c1.1 0 2-.875 2-1.944V47.47c-8.8-10.89-50.102-9.9-60 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "printer_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 47.47,
    x2: 32.001,
    y2: 27
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.548,
    stopColor: "#70838b"
  }), _react["default"].createElement("stop", {
    offset: 0.783,
    stopColor: "#758a92"
  }), _react["default"].createElement("stop", {
    offset: 0.958,
    stopColor: "#80969f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#839aa3"
  })), _react["default"].createElement("path", {
    fill: "url(#printer_svg__a)",
    d: "M60.223 27H3.778C2.752 27 2 47.47 2 47.47h60S61.248 27 60.223 27z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M12 51.357v6.833c0 1.068.864 1.943 1.92 1.943h36.159c1.056 0 1.921-.875 1.921-1.943v-6.833H12z"
  }), _react["default"].createElement("linearGradient", {
    id: "printer_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32,
    y1: 47.47,
    x2: 32,
    y2: 27
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.542,
    stopColor: "#506069"
  }), _react["default"].createElement("stop", {
    offset: 0.786,
    stopColor: "#556770"
  }), _react["default"].createElement("stop", {
    offset: 0.97,
    stopColor: "#5f727d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#617580"
  })), _react["default"].createElement("path", {
    fill: "url(#printer_svg__b)",
    d: "M55.848 27H8.153c-.41 0-1.311 20.47-1.311 20.47h50.317c-.001 0-.901-20.47-1.311-20.47z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M52 51.357v-1.943c0-1.069-.9-1.944-2-1.944H14c-1.1 0-2 .875-2 1.944v1.943h40z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M15 51.357h34v6.833H15z"
  }), _react["default"].createElement("linearGradient", {
    id: "printer_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 54.357
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.276,
    stopColor: "#4c5b64"
  }), _react["default"].createElement("stop", {
    offset: 0.496,
    stopColor: "#45515b"
  }), _react["default"].createElement("stop", {
    offset: 0.696,
    stopColor: "#38404c"
  }), _react["default"].createElement("stop", {
    offset: 0.884,
    stopColor: "#272937"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#printer_svg__c)",
    d: "M47 54.357H17l-2 3.878S15.656 62 20.143 62h23.714C48.343 62 49 58.235 49 58.235l-2-3.878z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M30.426 44.375l.14.14c.003.003.005.007.005.01a.016.016 0 0 1-.005.011l-.14.139a.012.012 0 0 1-.01.005c-.003 0-.008-.002-.01-.005l-.14-.139a.017.017 0 0 1 0-.021l.14-.14c.006-.006.016-.006.02 0zM32.572 44.767c.207 0 .378.175.378.398 0 .226-.171.4-.378.4a.313.313 0 0 1-.266-.129v.378c.001.01-.002.019-.01.025a.025.025 0 0 1-.024.009h-.096a.023.023 0 0 1-.024-.009.028.028 0 0 1-.01-.025v-.993c-.001-.01.002-.019.01-.025a.027.027 0 0 1 .024-.009h.096a.023.023 0 0 1 .024.009.026.026 0 0 1 .01.024v.075a.316.316 0 0 1 .268-.129h-.002zm-.025.642c.136 0 .239-.101.239-.242s-.104-.242-.239-.242c-.137 0-.24.1-.24.24 0 .142.103.244.24.244zm.532.137a.031.031 0 0 1-.026-.009c-.006-.006-.01-.016-.008-.024v-.693a.026.026 0 0 1 .008-.024c.008-.007.017-.011.026-.009h.095c.01-.002.02.002.025.009.008.006.01.016.01.024v.69c0 .01-.002.02-.01.025a.033.033 0 0 1-.025.01h-.095zm.835-.041c.015.023.004.041-.023.041h-.1a.052.052 0 0 1-.041-.022l-.148-.231-.147.231a.048.048 0 0 1-.041.022h-.099c-.027 0-.039-.018-.023-.041l.224-.35-.208-.327c-.017-.022-.006-.041.021-.041h.1c.017 0 .032.009.041.023l.133.208.134-.208a.047.047 0 0 1 .041-.023h.1c.026 0 .038.019.022.041l-.209.327.223.35zm.401-.737c.228 0 .376.183.376.4 0 .014 0 .025-.002.037 0 .01-.004.019-.011.024s-.017.009-.024.008h-.566c.025.124.117.188.233.188a.206.206 0 0 0 .165-.073.059.059 0 0 1 .041-.021h.098c.025 0 .038.016.029.037-.057.124-.181.198-.336.198a.382.382 0 0 1-.4-.399c0-.226.16-.4.397-.399zm-.228.335h.439c-.021-.13-.114-.186-.212-.186a.218.218 0 0 0-.228.184v.002zm.724.443a.03.03 0 0 1-.025-.009c-.006-.006-.01-.016-.008-.024v-1.024a.027.027 0 0 1 .008-.025c.007-.007.017-.011.025-.009h.096c.01-.002.02.002.025.009.006.006.01.016.01.025v1.024a.033.033 0 0 1-.01.024.03.03 0 0 1-.025.009h-.096zm.406-.546c0 .152.42.042.42.332 0 .149-.13.233-.297.233-.156 0-.28-.075-.297-.219-.002-.01 0-.021.007-.026.007-.008.017-.012.026-.01h.095c.021 0 .028.012.036.03.013.054.065.076.133.076.078 0 .133-.027.133-.085 0-.15-.42-.044-.42-.333 0-.147.13-.232.287-.232.141 0 .264.074.279.219.003.01 0 .019-.007.026a.033.033 0 0 1-.026.01h-.094c-.021 0-.029-.012-.035-.032-.014-.053-.064-.075-.117-.075-.069 0-.123.028-.123.086zM30.459 44.787a.026.026 0 0 1 .025.009c.006.007.01.016.009.024v.755c0 .199-.093.296-.276.296-.01 0-.02-.003-.025-.011a.03.03 0 0 1-.009-.025v-.09a.03.03 0 0 1 .009-.025.033.033 0 0 1 .025-.01c.076-.003.112-.041.112-.135v-.755a.027.027 0 0 1 .009-.024.027.027 0 0 1 .025-.009h.096zm.529.778a.4.4 0 0 1-.398-.4.398.398 0 1 1 .682.284.394.394 0 0 1-.284.116zm0-.16a.237.237 0 0 0 .223-.146.237.237 0 0 0-.049-.262.24.24 0 0 0-.41.168.234.234 0 0 0 .066.172.234.234 0 0 0 .17.068zm.916-.591c.006-.017.021-.029.039-.027h.104c.024 0 .036.014.028.038l-.342.996a.036.036 0 0 1-.039.027h-.104c-.024 0-.036-.014-.028-.039l.094-.273-.279-.711c-.01-.022.002-.039.026-.039h.104c.018-.002.032.01.038.027l.193.495.166-.494zM29.084 44.602a.542.542 0 1 1 0 1.084.542.542 0 0 1 0-1.084zm0-.181a.723.723 0 1 0 0 1.445.723.723 0 0 0 0-1.445z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M29.229 45.215a.028.028 0 0 1-.027-.009.029.029 0 0 1-.008-.026v-.073a.028.028 0 0 1 .008-.026c.008-.007.018-.011.027-.009h.235c.01-.002.021.002.027.009s.011.018.009.026v.037a.418.418 0 0 1-.256.384.418.418 0 0 1-.453-.09c-.008-.007-.014-.016-.014-.026 0-.01.006-.02.014-.025l.076-.077c.006-.008.016-.013.025-.013s.02.005.025.013a.233.233 0 0 0 .221.062.228.228 0 0 0 .168-.155h-.077z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60.146 42.255c0 1-1.5 1-1.5 0 0-.999 1.5-.999 1.5 0z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M60.521 45.151c0 1.333-2 1.333-2 0s2-1.333 2 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M31.625 53.499v6.355c0 .455.75.455.75 0v-6.355h-.75zM26.599 53.499l-.969 6.298c-.07.449.675.544.741.114l.987-6.412h-.759zM21.564 53.499l-1.922 6.244c-.133.432.595.615.717.221l1.99-6.465h-.785zM36.643 53.499l.986 6.412c.066.43.812.335.742-.114l-.97-6.298h-.758zM42.436 53.499h-.784l1.99 6.465c.122.395.85.211.717-.221l-1.923-6.244z"
  }));
};

var _default = SvgPrinter;
exports["default"] = _default;