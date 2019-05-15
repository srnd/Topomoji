"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPie = function SvgPie(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "pie_svg__a",
    cx: 7.425,
    cy: 47.049,
    r: 28.956,
    gradientTransform: "matrix(1.0479 -.0148 .0161 1.1166 16.239 .35)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c8d0d6"
  }), _react["default"].createElement("stop", {
    offset: 0.091,
    stopColor: "#c0c8ce"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#8d9599"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#798185"
  })), _react["default"].createElement("path", {
    fill: "url(#pie_svg__a)",
    d: "M4.469 43.823c.654 3.791 3.552 8.969 4.266 10.045 7.21 10.843 39.019 10.843 46.229 0 .713-1.076 3.611-6.254 4.268-10.045H4.469z"
  }), _react["default"].createElement("path", {
    fill: "#C46D14",
    d: "M60.609 39.673c0 8.108-12.875 14.689-28.76 14.689-15.883 0-28.76-6.581-28.76-14.689 0-8.115 12.877-14.69 28.76-14.69 15.885-.001 28.76 6.575 28.76 14.69z"
  }), _react["default"].createElement("path", {
    fill: "#E39834",
    d: "M31.854 24.982c-3.25 0-6.371.272-9.284.779a187.319 187.319 0 0 0-18.058 9.34c-.918 1.441-1.418 2.976-1.418 4.571 0 .327.024.662.066.989 9.709-6.074 20.248-11.301 31.46-15.611a51.558 51.558 0 0 0-2.766-.068z"
  }), _react["default"].createElement("path", {
    fill: "#F5AA47",
    d: "M38.146 25.335c-12.414 4.516-24.005 10.15-34.642 16.824.407 1.219 1.109 2.388 2.07 3.488 12.201-7.719 25.713-14.016 40.312-18.803a48.55 48.55 0 0 0-7.74-1.509z"
  }), _react["default"].createElement("path", {
    fill: "#F5AA47",
    d: "M48.352 27.636C33.308 32.38 19.155 38.838 6.589 46.693c.99.928 2.17 1.8 3.515 2.591 13.077-8.053 27.889-14.554 43.617-19.155-1.577-.941-3.381-1.781-5.369-2.493z"
  }), _react["default"].createElement("path", {
    fill: "#E39834",
    d: "M55.346 31.192c-15.889 4.485-30.596 10.806-43.849 18.86a34.414 34.414 0 0 0 4.656 1.93C29.039 44.43 43.297 38.516 58.674 34.36c-.858-1.132-1.979-2.19-3.328-3.168z"
  }), _react["default"].createElement("path", {
    fill: "#F5AA47",
    d: "M59.516 35.64c-14.968 3.972-28.914 9.631-41.597 16.886 1.886.532 3.898.965 6.013 1.274 11.3-6.074 23.582-10.886 36.676-14.381-.045-1.305-.42-2.573-1.092-3.779z"
  }), _react["default"].createElement("path", {
    fill: "#E39834",
    d: "M27.113 53.633l.369.563c1.424.105 2.885.167 4.371.167 1.06 0 2.106-.03 3.136-.086 7.345-3.377 15.069-6.247 23.106-8.585 1.3-1.479 2.135-3.081 2.411-4.77-11.809 3.161-23.009 7.423-33.393 12.711z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M47.634 33.549a187.21 187.21 0 0 1 5.354-1.67 189.416 189.416 0 0 0-8.65-4.515 202.088 202.088 0 0 0-5.335 1.886 185.897 185.897 0 0 1 8.631 4.299z"
  }), _react["default"].createElement("path", {
    fill: "#FFCA7A",
    d: "M38.137 25.335a56.2 56.2 0 0 0-8.849-.297c1.546.619 3.079 1.262 4.6 1.918a182.023 182.023 0 0 1 4.249-1.621z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M59.53 35.695c-.592-.364-1.192-.724-1.79-1.076a184.991 184.991 0 0 0-5.338 1.559 176.344 176.344 0 0 1 8.063 4.899c.086-.464.133-.935.133-1.404 0-1.38-.374-2.709-1.068-3.978z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M24.778 29.164a189.062 189.062 0 0 1 8.989 3.729 202.106 202.106 0 0 1 5.188-2.017 193.002 193.002 0 0 0-9.018-3.946 218.317 218.317 0 0 0-5.159 2.234z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M52.193 37.755a176.028 176.028 0 0 0-8.281-4.466c-1.741.613-3.469 1.25-5.18 1.912a172.306 172.306 0 0 1 8.241 4.255 161.467 161.467 0 0 1 5.22-1.701z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M56.792 40.489a173.48 173.48 0 0 0-5.202 1.596 157.985 157.985 0 0 1 6.247 3.872c.997-1.076 1.747-2.221 2.211-3.421a190.496 190.496 0 0 0-3.256-2.047z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M22.569 25.762s-2.04.328-4.409.983c.435.148.866.304 1.302.458 1.029-.488 2.062-.971 3.107-1.441z"
  }), _react["default"].createElement("path", {
    fill: "#FFCA7A",
    d: "M11.269 35.906c3.027.977 6.005 2.028 8.934 3.142 1.603-.804 3.226-1.59 4.864-2.356a181.707 181.707 0 0 0-8.985-3.347 196.15 196.15 0 0 0-4.813 2.561z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M38.327 42.679a174.799 174.799 0 0 0-8.257-3.885c-1.64.73-3.26 1.479-4.865 2.252a169.676 169.676 0 0 1 8.222 3.687 177.717 177.717 0 0 1 4.9-2.054zM42.989 45.115A181.645 181.645 0 0 0 38.1 47.07a161.751 161.751 0 0 1 9.01 5.047 34.724 34.724 0 0 0 4.687-1.867 157.665 157.665 0 0 0-8.808-5.135z"
  }), _react["default"].createElement("path", {
    fill: "#FFCA7A",
    d: "M10.753 31.601c-.691-.216-1.382-.433-2.078-.637-1.376.952-2.531 1.991-3.429 3.104.237.063.47.137.704.205 1.581-.91 3.182-1.8 4.803-2.672z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M12.174 43.365a176.966 176.966 0 0 0-9.044-2.814c.192 1.664.929 3.254 2.118 4.732.646.216 1.427.501 2.304.822a161.516 161.516 0 0 1 4.622-2.74z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M12.364 47.918c2.658 1.026 5.541 2.152 8.12 3.173a165.21 165.21 0 0 1 4.943-2.592 170.053 170.053 0 0 0-8.227-3.334 174.198 174.198 0 0 0-4.836 2.753z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M30.137 50.646a170.732 170.732 0 0 0-4.765 2.388c1.861.748 3.053 1.225 3.053 1.225 1.12.067 2.257.104 3.411.104 1.775 0 3.513-.08 5.197-.241a162.161 162.161 0 0 0-6.896-3.476z"
  }), _react["default"].createElement("path", {
    fill: "#FFCA7A",
    d: "M24.977 35.09a188.382 188.382 0 0 1 8.606 3.711c1.665-.699 3.346-1.38 5.043-2.035a178.258 178.258 0 0 0-8.645-3.915 180.931 180.931 0 0 0-5.004 2.239z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M51.396 43.625a173.421 173.421 0 0 0-7.954-4.435 164.741 164.741 0 0 0-5.036 1.93 171.01 171.01 0 0 1 7.927 4.237 187 187 0 0 1 5.063-1.732zM24.824 30.76a193.383 193.383 0 0 0-9.092-3.26c-1.994.687-3.808 1.503-5.402 2.419 3.216.989 6.377 2.06 9.486 3.197 1.652-.803 3.321-1.59 5.008-2.356z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M55.853 46.371c-1.695.52-3.376 1.058-5.043 1.627.809.495 1.608.989 2.405 1.497 1.36-.768 2.565-1.614 3.585-2.523-.314-.204-.632-.403-.947-.601z"
  }), _react["default"].createElement("path", {
    fill: "#FFBD59",
    d: "M38.024 48.586a163.936 163.936 0 0 0-7.946-3.872c-1.587.729-3.157 1.49-4.708 2.27a166.534 166.534 0 0 1 7.901 3.681 188.322 188.322 0 0 1 4.753-2.079zM11.965 41.813c2.896.983 5.748 2.029 8.552 3.148 1.551-.816 3.12-1.602 4.707-2.375a175.485 175.485 0 0 0-8.601-3.34c-1.57.835-3.123 1.694-4.658 2.567z"
  }), _react["default"].createElement("path", {
    fill: "#FFC873",
    d: "M42.55 51.041a171.523 171.523 0 0 0-4.75 1.979c.512.278 1.023.557 1.53.835a47.998 47.998 0 0 0 6.009-1.212 159.757 159.757 0 0 0-2.789-1.602z"
  }), _react["default"].createElement("path", {
    fill: "#FFCA7A",
    d: "M11.445 37.477a184.347 184.347 0 0 0-7.088-2.152c-.72 1.188-1.151 2.443-1.254 3.736 1.24.353 2.47.717 3.695 1.095a174.066 174.066 0 0 1 4.647-2.679z"
  }), _react["default"].createElement("radialGradient", {
    id: "pie_svg__b",
    cx: 31.015,
    cy: 37.401,
    r: 29.624,
    gradientTransform: "matrix(1 0 0 .5016 0 18.642)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffea9e"
  }), _react["default"].createElement("stop", {
    offset: 0.196,
    stopColor: "#fde79b"
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#f7dd93"
  }), _react["default"].createElement("stop", {
    offset: 0.483,
    stopColor: "#eecd84"
  }), _react["default"].createElement("stop", {
    offset: 0.61,
    stopColor: "#e0b670"
  }), _react["default"].createElement("stop", {
    offset: 0.732,
    stopColor: "#ce9856"
  }), _react["default"].createElement("stop", {
    offset: 0.848,
    stopColor: "#b87335"
  }), _react["default"].createElement("stop", {
    offset: 0.959,
    stopColor: "#9f4810"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#943600"
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#pie_svg__b)",
    d: "M60.609 39.673c0 8.108-12.875 14.689-28.76 14.689-15.883 0-28.76-6.581-28.76-14.689 0-8.115 12.877-14.69 28.76-14.69 15.885-.001 28.76 6.575 28.76 14.69z"
  }), _react["default"].createElement("radialGradient", {
    id: "pie_svg__c",
    cx: 36.173,
    cy: -11.06,
    r: 30.523,
    gradientTransform: "matrix(1.0271 0 0 .53 -5.07 45.698)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.521,
    stopColor: "#ffd073"
  }), _react["default"].createElement("stop", {
    offset: 0.716,
    stopColor: "#fecf71"
  }), _react["default"].createElement("stop", {
    offset: 0.797,
    stopColor: "#fcc96a"
  }), _react["default"].createElement("stop", {
    offset: 0.858,
    stopColor: "#f8c05d"
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f3b34c"
  }), _react["default"].createElement("stop", {
    offset: 0.951,
    stopColor: "#eca235"
  }), _react["default"].createElement("stop", {
    offset: 0.989,
    stopColor: "#e38e19"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e08710"
  })), _react["default"].createElement("path", {
    fill: "url(#pie_svg__c)",
    d: "M62 39.809c0-2.251-2.076-3.012-2.396-5.406-.418-3.117-4.935-3.29-6.615-5.511-1.723-2.276-5.878-2.072-9.006-3.557-2.91-1.386-5.646.18-10.421-1.175-2.24-.637-4.61.878-9.073.223-2.565-.377-5.297 2.091-8.837 2.264-3.381.167-3.374 2.895-7.554 3.662-2.183.396-4.107 2.826-4.087 4.867C4.029 37.105 2 37.304 2 40.161c0 2.252 1.624 2.456 1.485 4.868-.238 4.144 5.601 3.309 6.634 5.87 1.5 3.704 6.651 1.28 9.148 3.605 3.513 3.284 6.148-.903 10.207 1.855 2.504 1.701 5.593-2.221 9.789-.631 3.313 1.262 5.426-2.722 8.956-2.412 4.214.365 4.261-3.062 8.152-4.701 1.773-.748 3.948-1.941 3.702-3.934C59.839 42.766 62 42.66 62 39.809zM28.856 52.448c-3.635 1.33-5.742-1.601-9.805-1.357-6.053.362-6.342-3.156-9.737-4.279-5.738-1.897-3.262-4.568-5.033-7.255-1.088-1.649 2.043-4.382 2.152-5.561.155-1.669 1.926-3.198 4.835-3.907 2.7-.658 3.68-2.702 6.309-2.971 3.06-.313 4.485-2.008 10.526-1.583 1.874.132 6.059-.708 9.231.097 3.318.842 5.957-.005 8.447 1.732 2.443 1.704 4.947 1.104 6.813 2.921 1.675 1.632 5.083 2.25 5.697 4.182.555 1.745 1.977 2.979 1.453 4.578-.675 2.063.156 3.229-1.797 4.422-1.795 1.097-3.5 5.214-7.813 5.817-3.656.512-5.021 2.605-10.542 3.376-3.963.554-8.218-1.134-10.736-.212z"
  }), _react["default"].createElement("linearGradient", {
    id: "pie_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 30.971,
    y1: 23.07,
    x2: 30.971,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a9b0b3"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#bdc4c7"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#eff6fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2f9ff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#pie_svg__d)",
    d: "M31.857 23.07s2.39-3.84-2.743-9.137C23.482 8.109 31.857 5.869 31.857 2c0 0 1.351 1.541-.538 5.19-2.686 5.164 8.513 5.987.538 15.88z"
  }), _react["default"].createElement("linearGradient", {
    id: "pie_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 24.066,
    y1: 22.792,
    x2: 24.066,
    y2: 7.469
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a9b0b3"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#bdc4c7"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#eff6fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2f9ff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#pie_svg__e)",
    d: "M24.714 22.792s1.761-2.7-2.056-6.646c-4.149-4.291 2.056-5.861 2.056-8.677 0 0 1.01 1.12-.406 3.773-2.011 3.754 6.391 4.348.406 11.55z"
  }), _react["default"].createElement("linearGradient", {
    id: "pie_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 39.932,
    y1: 22.792,
    x2: 39.932,
    y2: 7.469
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a9b0b3"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#bdc4c7"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#eff6fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2f9ff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#pie_svg__f)",
    d: "M39.286 7.469s-1.743 2.72 2.056 6.646c4.149 4.291-2.056 5.861-2.056 8.677 0 0-1.01-1.12.406-3.773 2.001-3.755-6.4-4.358-.406-11.55z"
  }));
};

var _default = SvgPie;
exports["default"] = _default;