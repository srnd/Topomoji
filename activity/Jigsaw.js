"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJigsaw = function SvgJigsaw(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFB79D",
    d: "M59.099 32.593c-.121-.088-6.521 1.365-7.498.474-.646-5.224 2.012-11.98 4.488-15.666.076-.115.025-.143-.018-.186-.654-.631-.979-1.055-.979-1.055-3.434 2.68-16.102 3.355-17.154-1.344-.627-2.797 2.641-3.18 2.988-5.564.264-1.799-.953-4.117-2.5-5.279C33.214 17.677 21.415 19.845 6.45 24.72c.418 1.336 1.361 2.404 2.027 2.383.766-.025 3.656-2.674 5.736-2.289C25.179 38.835 2.751 52.999 2.751 52.999c8.738 5.709 18.535 5.525 18.92 3.77.416-1.908-2.979-3.242-1.123-7.045 1.541-3.166 6.502-3.701 9.717-1.727 5.303-.387 4.584 9.852-1.354 10.559 2.043 2.873 13.242 3.984 19.441 3.199.236-.031.271-.211.219-.393-2.684-9.143-1.117-17.193 2.342-17.578 2.313-.26 3.064 3.1 6.422 2.625 5.021-.709 6.559-10.398 1.764-13.816z"
  }), _react["default"].createElement("defs", null, _react["default"].createElement("path", {
    id: "jigsaw_svg__a",
    d: "M55.069 16.298c-3.643 5.516-7.154 18.433-2.689 16.414 11.395-5.164 10.852 11.681 3.797 12.677-3.355.473-4.107-2.887-6.42-2.627-3.461.387-5.205 8.664-2.521 17.809.068.232-.023.367-.242.395-6.4.838-17.541-.559-18.252-2.709-.691-2.092 4.146-2.092 3.512-6.166-1.1-7.086-10.258-7.342-12.527-2.684-1.855 3.803 1.438 4.576 1.021 6.484-.379 1.738-8.723 2.434-17.904-2.828a.647.647 0 0 1-.313-.418C.728 39.342 3.957 33.977 5.687 33.885c2.49-.133 3.031 3.504 5.971 2.854 2.32-.514 4.041-4.191 3.934-6.384-.523-10.684-7.004-3.816-8.004-4.074-1.596-.41-3.832-7.799 2.818-17.553.055-.08.369-.164.479-.123 5.021 1.908 18.85 7.201 16.326 2.371C21.03-.84 41.433-.252 40.165 8.441c-.324 2.242-3.346 2.699-3.145 5.072.445 5.178 13.869 3.162 17.85 2.623.152-.019.313-.01.199.162z"
  })), _react["default"].createElement("clipPath", {
    id: "jigsaw_svg__b"
  }, _react["default"].createElement("use", {
    xlinkHref: "#jigsaw_svg__a",
    overflow: "visible"
  })), _react["default"].createElement("radialGradient", {
    id: "jigsaw_svg__c",
    cx: -95.198,
    cy: 171.606,
    r: 31.066,
    gradientTransform: "rotate(11.572 653.573 735.823)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.342,
    stopColor: "#ffa700"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#ff9d00"
  }), _react["default"].createElement("stop", {
    offset: 0.823,
    stopColor: "#ff8d00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff7b00"
  })), _react["default"].createElement("path", {
    clipPath: "url(#jigsaw_svg__b)",
    fill: "url(#jigsaw_svg__c)",
    d: "M9.756-3.536L68.092 8.412l-6.57 32.083L3.186 28.548z"
  }), _react["default"].createElement("linearGradient", {
    id: "jigsaw_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -95.694,
    y1: 186.301,
    x2: -95.694,
    y2: 160.497,
    gradientTransform: "rotate(11.572 653.573 735.823)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb700"
  }), _react["default"].createElement("stop", {
    offset: 0.285,
    stopColor: "#ffc700"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#ffd200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    clipPath: "url(#jigsaw_svg__b)",
    fill: "url(#jigsaw_svg__d)",
    d: "M34.943 21.884c6.979 1.429 11.479 8.247 10.05 15.226-1.43 6.979-8.248 11.481-15.229 10.053-6.979-1.432-11.479-8.249-10.049-15.229 1.43-6.979 8.246-11.479 15.228-10.05z"
  }), _react["default"].createElement("radialGradient", {
    id: "jigsaw_svg__e",
    cx: -95.322,
    cy: 170.27,
    r: 50.144,
    gradientTransform: "matrix(.9797 .2006 -.1329 .6489 149.357 -59.828)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.061,
    stopColor: "#fee29a"
  }), _react["default"].createElement("stop", {
    offset: 0.098,
    stopColor: "#f8e09c"
  }), _react["default"].createElement("stop", {
    offset: 0.148,
    stopColor: "#e6daa1"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#cacfaa"
  }), _react["default"].createElement("stop", {
    offset: 0.269,
    stopColor: "#a2c1b6"
  }), _react["default"].createElement("stop", {
    offset: 0.338,
    stopColor: "#6fafc6"
  }), _react["default"].createElement("stop", {
    offset: 0.409,
    stopColor: "#3199d9"
  }), _react["default"].createElement("stop", {
    offset: 0.461,
    stopColor: "#0087e8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#004c78"
  })), _react["default"].createElement("path", {
    clipPath: "url(#jigsaw_svg__b)",
    fill: "url(#jigsaw_svg__e)",
    d: "M3.186 28.548l58.336 11.947-5.376 26.252L-2.19 54.8z"
  }), _react["default"].createElement("path", {
    opacity: 0.7,
    clipPath: "url(#jigsaw_svg__b)",
    fill: "#FEEC9A",
    d: "M26.476 48.388c-.335 1.641 5.834 1.193 5.834 1.193s-5.498-2.834-5.834-1.193zM24.885 45.023s9.874 3.729 10.21 2.09c.334-1.64-10.21-2.09-10.21-2.09zM31.896 44.181s6.955 3.133 7.291 1.491c.336-1.64-7.291-1.491-7.291-1.491zM43.448 39.706s-22.662-8.058-23.334-4.776c-.672 3.281 23.334 4.776 23.334 4.776zM22.283 39.173s18.288 7.163 18.96 3.882c.673-3.283-18.96-3.882-18.96-3.882zM21.687 42.09c-.335 1.64 8.752 1.79 8.752 1.79s-8.417-3.432-8.752-1.79z"
  }), _react["default"].createElement("path", {
    clipPath: "url(#jigsaw_svg__b)",
    fill: "#F9B700",
    d: "M9.671 19.769c2.357-.763 4.806-1.887 7.701-.835 3.324 1.211 4.771 2.196 6.902 1.095 2.131-1.103 2.965 2.414 5.355 3.521 2.391 1.104 7.89 2.71 4.608 2.392-4.063-.397-29.237-4.554-27.919-5.72.458-.401 2.035-.027 3.353-.453zM56.507 35.445c-1.559-.87-3.098-1.909-5.492-2.192-2.75-.33-4.057-.292-5.365-1.242-1.309-.95-2.778.231-4.814.088-2.034-.144-6.488-.842-3.985-.172 3.1.827 22.717 5.287 22.023 4.509-.241-.269-1.497-.505-2.367-.991zM25.653 29.485c.93-1.044 2.167-1.091 2.933-.083-.176-1.318-1.967-1.748-2.763-.757-.336-1.227-2.156-1.535-2.838-.393 1.102-.627 2.226-.093 2.668 1.233zM22.548 30.384c.562-.627 1.307-.656 1.768-.05-.108-.793-1.186-1.051-1.665-.456-.2-.734-1.295-.923-1.704-.235.66-.376 1.335-.057 1.601.741zM28.181 31.382c.367-.41.854-.428 1.154-.032-.069-.518-.773-.687-1.087-.297-.132-.482-.845-.604-1.112-.155.431-.246.872-.037 1.045.484z"
  }), _react["default"].createElement("path", {
    clipPath: "url(#jigsaw_svg__b)",
    fill: "#FFE463",
    d: "M18.002 26.952c.502-.561 1.168-.587 1.58-.044-.096-.71-1.06-.941-1.487-.408-.182-.66-1.162-.827-1.528-.212.591-.337 1.199-.052 1.435.664zM18.941 28.501c.317-.355.741-.371 1.003-.027-.061-.449-.673-.596-.944-.258-.113-.418-.736-.525-.97-.134.376-.214.76-.034.911.419z"
  }));
};

var _default = SvgJigsaw;
exports["default"] = _default;