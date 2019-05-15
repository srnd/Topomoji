"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSnowman = function SvgSnowman(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "snowman_svg__a",
    cx: 29.474,
    cy: 72.418,
    r: 18.26,
    gradientTransform: "matrix(1 0 0 1.0597 0 -33.971)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.271,
    stopColor: "#fbfbfc"
  }), _react["default"].createElement("stop", {
    offset: 0.556,
    stopColor: "#eef1f3"
  }), _react["default"].createElement("stop", {
    offset: 0.847,
    stopColor: "#d9e0e5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4db"
  })), _react["default"].createElement("path", {
    fill: "url(#snowman_svg__a)",
    d: "M49.162 48.053C49.162 60.921 41.479 62 32 62s-17.162-1.079-17.162-13.947c0-10.045 7.684-16.188 17.162-16.188 9.479 0 17.162 6.143 17.162 16.188z"
  }), _react["default"].createElement("radialGradient", {
    id: "snowman_svg__b",
    cx: 28.496,
    cy: 50.411,
    r: 12.345,
    gradientTransform: "matrix(1.0617 0 0 1.0568 -.874 -33.121)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#f8f9fa"
  }), _react["default"].createElement("stop", {
    offset: 0.652,
    stopColor: "#e3e8ec"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4db"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#snowman_svg__b)",
    cx: 32,
    cy: 23.527,
    rx: 13.107,
    ry: 13.047
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M27.617 21.893c0 2.654-4 2.654-4 0-.001-2.656 4-2.656 4 0zM40.385 21.893c0 2.654-4 2.654-4 0 0-2.656 4-2.656 4 0zM32 45.131c-2.666 0-2.666-3.979 0-3.979 2.666-.001 2.666 3.979 0 3.979zM32 54.743c-2.666 0-2.666-3.979 0-3.979 2.666.001 2.666 3.979 0 3.979zM29.727 14.051c-3.435.767-11.306-.753-10.812 1.461.423 1.91 4.547 3.387 11.543 1.826 6.995-1.559 10.104-4.649 9.68-6.558-.493-2.217-6.976 2.503-10.411 3.271z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M29.612 13.527c-6.097 1.362-10.902.147-10.502 1.941.338 1.522 4.621 3.036 11.279 1.552 6.656-1.484 9.892-4.676 9.552-6.195-.398-1.797-4.232 1.344-10.329 2.702z"
  }), _react["default"].createElement("radialGradient", {
    id: "snowman_svg__c",
    cx: 172.002,
    cy: -167.668,
    r: 7.616,
    gradientTransform: "matrix(.9138 -.2038 1.1773 5.2936 68.884 931.83)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1626"
  }), _react["default"].createElement("stop", {
    offset: 0.193,
    stopColor: "#1d1929"
  }), _react["default"].createElement("stop", {
    offset: 0.323,
    stopColor: "#262232"
  }), _react["default"].createElement("stop", {
    offset: 0.435,
    stopColor: "#353141"
  }), _react["default"].createElement("stop", {
    offset: 0.497,
    stopColor: "#413d4d"
  }), _react["default"].createElement("stop", {
    offset: 0.709,
    stopColor: "#413d4d"
  }), _react["default"].createElement("stop", {
    offset: 0.723,
    stopColor: "#3d3949"
  }), _react["default"].createElement("stop", {
    offset: 0.814,
    stopColor: "#2a2636"
  }), _react["default"].createElement("stop", {
    offset: 0.906,
    stopColor: "#1e1a2a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#snowman_svg__c)",
    d: "M34.926 2.365a195.27 195.27 0 0 0-14.857 3.313c.003-.001 1.294 3.024 2.491 7.732.023 2.835 7.273 1.103 7.279 1.15-.011-.047 7.288-1.559 6.106-4.135-.91-4.772-1.025-8.059-1.019-8.06z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M35.945 10.427c.506 1.646-4.059 2.79-6.288 3.313-2.237.475-6.857 1.379-7.098-.328-.206.173.336 1.564.625 2.449.241.708 3.087 1.253 7.028.37 3.941-.876 6.287-2.577 6.207-3.321-.112-.926-.214-2.414-.474-2.483z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.069 5.679c.344 1.083 15.005-2.183 14.857-3.313-.223-1.473-15.28 1.883-14.857 3.313z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.252 5.837c1.618.527 13.332-2.086 14.574-3.25-2.326 1.146-11.984 3.301-14.574 3.25z"
  }), _react["default"].createElement("path", {
    fill: "#9E6C49",
    d: "M54.299 33.502h-2.391M55.908 28.939L44.779 40.015c-.516.512 1.176 2.195 1.693 1.68C48.369 39.809 57.6 30.623 57.6 30.623l-1.692-1.684z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M54.662 35.643c-1.33-.1-3.904-2.703-3.762-3.99.545-5.063 8.512 4.355 3.762 3.99z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M60.879 26.496c-4.076-3.439-6.076 3.861-6.289 1.037-.137-1.846-1.516-2.424-2.268.326-.736 2.701 1.172 6.051 4.051 6.145 2.822.09 7.883-4.66 4.506-7.508z"
  }), _react["default"].createElement("path", {
    fill: "#9E6C49",
    d: "M9.701 33.502h2.391M8.094 28.939l11.127 11.076c.516.512-1.176 2.195-1.693 1.68-1.897-1.886-11.126-11.072-11.126-11.072l1.692-1.684z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M9.338 35.643c1.33-.1 3.904-2.703 3.762-3.99-.545-5.063-8.512 4.355-3.762 3.99z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M3.122 26.496c4.076-3.439 6.076 3.861 6.289 1.037.137-1.846 1.518-2.424 2.268.326.736 2.701-1.172 6.051-4.051 6.145-2.823.09-7.883-4.66-4.506-7.508z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M14.375 16.823c0 3.979-6 3.979-6 0 0-3.981 6-3.981 6 0zM9.402 48.425c0 3.981-6 3.981-6 0s6-3.982 6 0zM51.998 54.045c0 3.979-6 3.979-6 0 0-3.982 6-3.982 6 0zM59.082 43.458c0 2.655-4 2.655-4 0 0-2.654 4-2.654 4 0zM12.471 56.486c0 2.654-4 2.654-4 0 0-2.653 4-2.653 4 0zM53.998 14.732c0 2.654-4 2.654-4 0 0-2.653 4-2.653 4 0z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M42.943 30.338c-2.586 2.175-19.301 2.175-21.887 0-1.443-1.215-1.128 5.143-.419 5.584 4.093 2.548 18.632 2.548 22.726 0 .709-.442 1.024-6.799-.42-5.584z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M21.837 30.761c-.319-.13-.598-.269-.781-.423-1.443-1.215-1.128 5.143-.419 5.584.329.205.745.387 1.2.558v-5.719zM26.367 31.688a31.005 31.005 0 0 1-1.952-.261v5.743c.615.124 1.27.227 1.952.316v-5.798zM30.781 31.944a73.528 73.528 0 0 1-1.914-.064v5.832c.629.041 1.27.068 1.914.087v-5.855zM42.943 30.354c-.156.133-.385.252-.643.368v5.721c.398-.156.768-.32 1.063-.504.709-.442 1.024-6.798-.42-5.585zM33.201 31.961v5.854c.65-.018 1.297-.044 1.932-.086v-5.833c-.633.032-1.279.051-1.932.065z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M44.059 45.566c-3.406-.753-4.707 1.615-5.459.354-2.791-4.688-1.082-14.044-2.281-14.104.355-.732 5.822-1.779 5.51.46-1.487 10.663 4.112 13.706 2.23 13.29z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M36.783 33.329c1.658-.124 3.314-.253 4.973-.347.025-.238.039-.459.072-.706.313-2.239-5.227-1.802-5.51-.46.293.015.412.59.465 1.513zM41.666 37.742c-.082-.854-.082-1.793-.045-2.814-1.607.115-3.199.356-4.785.665.01.868.025 1.833.072 2.83 1.567-.334 3.156-.485 4.758-.681zM42.934 42.732s-.625-1.561-.879-2.608c-1.654.317-3.232.765-4.893 1.065 0 .839.324 2.211.576 2.744 1.602-.607 3.401-1.009 5.196-1.201z"
  }), _react["default"].createElement("radialGradient", {
    id: "snowman_svg__d",
    cx: 32.946,
    cy: 53.799,
    r: 2.551,
    gradientTransform: "matrix(.9496 0 0 2.6419 .714 -118.4)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd500"
  }), _react["default"].createElement("stop", {
    offset: 0.909,
    stopColor: "#f80"
  })), _react["default"].createElement("path", {
    fill: "url(#snowman_svg__d)",
    d: "M34.297 25.884c0 1.696-1.207 5.007-2.297 5.009-1.09-.002-2.295-3.432-2.295-5.009 0-2.631 4.592-2.838 4.592 0z"
  }));
};

var _default = SvgSnowman;
exports["default"] = _default;