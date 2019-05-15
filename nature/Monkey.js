"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMonkey = function SvgMonkey(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M19.678 46.506c-.806-1.229-1.869-1.597-1.869-1.597 1.005 1.925.123 4.542.123 4.542-.567-1.678-1.461-2.031-1.461-2.031.076 1.912-1.098 3.122-1.098 3.122-.481-1.757-2.214-2.548-2.214-2.548l4.937-6.99c1.732 2.892 1.582 5.502 1.582 5.502z"
  }), _react["default"].createElement("linearGradient", {
    id: "monkey_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 43.764,
    y1: 55.2,
    x2: 61.681,
    y2: 14.533
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#785647"
  }), _react["default"].createElement("stop", {
    offset: 0.238,
    stopColor: "#7d5a4a"
  }), _react["default"].createElement("stop", {
    offset: 0.535,
    stopColor: "#8d6553"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#a67762"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3806a"
  })), _react["default"].createElement("path", {
    fill: "url(#monkey_svg__a)",
    d: "M50.229 59.813c-2.563 0-4.748-1.262-5.633-1.773-.924-.533.939-4.018 1.863-3.482 2.236 1.295 3.922 1.592 5.307.934 1.613-.766 3.865-3.334 5.449-11.217 1.418-7.066 1.521-16.486-1.596-20.473-.953-1.221-2.15-1.816-3.66-1.816-3.674 0-4.654 2.621-4.654 4.168 0 .375.076 2.24 1.588 2.24.285 0 .734-.146 1.059-.555.314-.4.41-.941.283-1.607-.585-3.021 3.177-3.805 3.756-.781.355 1.838-.029 3.584-1.076 4.914-.996 1.26-2.498 2.01-4.021 2.01-3.139 0-5.416-2.615-5.416-6.221 0-2.043.768-4.057 2.109-5.527C46.677 19.426 48.669 18 51.96 18c2.66 0 4.953 1.137 6.633 3.285 4.197 5.371 3.902 16.176 2.371 23.799-1.555 7.746-4.043 12.334-7.605 14.029a7.187 7.187 0 0 1-3.13.7z"
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__b",
    cx: 27.763,
    cy: 44.965,
    r: 19.762,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#785647"
  }), _react["default"].createElement("stop", {
    offset: 0.369,
    stopColor: "#825d4d"
  }), _react["default"].createElement("stop", {
    offset: 0.985,
    stopColor: "#9b6f5d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9c705d"
  })), _react["default"].createElement("path", {
    fill: "url(#monkey_svg__b)",
    d: "M29.467 25.93l-1.962 14.137c-4.938 0-6.234 9.674-4.751 18.463.135.807 5.615 1.768 5.615 1.768-1.016-5.594.371-8.375.371-8.375C28.387 56.879 29 62 37.257 62c7.584 0 11.799-2.758 12.203-10.078C50.728 28.838 29.467 25.93 29.467 25.93z"
  }), _react["default"].createElement("path", {
    fill: "#EBBB96",
    d: "M22.815 57.518C20.4 58.561 14.26 59.092 15.762 62h12.082c2.038-2.875-1.696-5.924-5.029-4.482zM38.092 53.805s-1.952-11.83-10.589-13.738c-8.586-1.895-3.474-4.816.919-3.82 10.701 2.423 9.67 17.558 9.67 17.558z"
  }), _react["default"].createElement("linearGradient", {
    id: "monkey_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 14.863,
    y1: 36.978,
    x2: 18.738,
    y2: 43.229
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3806a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#785647"
  })), _react["default"].createElement("path", {
    fill: "url(#monkey_svg__c)",
    d: "M31.704 28.91l-12.218 4.809S7.379 41.936 3.555 52.627c-1.051 2.938 4.72 3.646 5.36 2.221 4.613-10.287 22.51-15.634 22.789-25.938z"
  }), _react["default"].createElement("path", {
    fill: "#EBBB96",
    d: "M8.916 54.848c.438-1.369-3.866-5.268-4.642-4.086C2.406 53.61.69 61.095 3.428 62H12c2.389-5.209-4.891-1.503-3.084-7.152z"
  }), _react["default"].createElement("circle", {
    fill: "#785647",
    cx: 31.704,
    cy: 18.308,
    r: 5.242
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__d",
    cx: 1078.66,
    cy: -919.196,
    r: 4.754,
    gradientTransform: "matrix(0 .9308 1.1711 0 1110.977 -985.635)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#ebbb96"
  }), _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#e7b792"
  }), _react["default"].createElement("stop", {
    offset: 0.729,
    stopColor: "#daaa85"
  }), _react["default"].createElement("stop", {
    offset: 0.98,
    stopColor: "#c69470"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c4926e"
  })), _react["default"].createElement("circle", {
    opacity: 0.7,
    fill: "url(#monkey_svg__d)",
    cx: 31.704,
    cy: 18.308,
    r: 3.812
  }), _react["default"].createElement("circle", {
    fill: "#785647",
    cx: 7.243,
    cy: 18.308,
    r: 5.242
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__e",
    cx: 232.523,
    cy: 288.884,
    r: 4.754,
    gradientTransform: "matrix(0 -.9308 -1.1711 0 342.759 234.668)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#ebbb96"
  }), _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#e7b792"
  }), _react["default"].createElement("stop", {
    offset: 0.729,
    stopColor: "#daaa85"
  }), _react["default"].createElement("stop", {
    offset: 0.98,
    stopColor: "#c69470"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c4926e"
  })), _react["default"].createElement("circle", {
    opacity: 0.7,
    fill: "url(#monkey_svg__e)",
    cx: 7.243,
    cy: 18.309,
    r: 3.812
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M27.045 27.409c0-9.611-15.143-9.611-15.143 0s15.143 9.611 15.143 0zM25.972 4.922s-1.475-1.163-3.153-.307c0 0-.145-.886 1.011-1.658 0 0-2.207-.396-3.765.981 0 0-.231-.918.428-1.938 0 0-2.752.185-4.001 2.431 0 0-1.308-.524-2.335.262 1.027.229.997.706.997.706l9.951.737c-.001 0-.234-1.049.867-1.214z"
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__f",
    cx: 21.175,
    cy: 35.236,
    r: 14.56,
    gradientTransform: "matrix(1.004 0 0 .9643 -1.786 -15.104)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3806a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#785647"
  })), _react["default"].createElement("path", {
    fill: "url(#monkey_svg__f)",
    d: "M30.87 15.818c0-7.711-5.867-11.523-11.396-11.523-5.53 0-11.397 3.813-11.397 11.523 0 2.344-2.621 4.315-2.639 7.45-.04 8.081 7.019 10.184 14.036 10.184s14.078-2.099 14.034-10.185c-.017-3.134-2.638-5.105-2.638-7.449z"
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__g",
    cx: 257.93,
    cy: -912.716,
    r: 7.402,
    gradientTransform: "matrix(1.3077 0 0 -.8853 -317.821 -781.89)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ebbb96"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebbb96"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#monkey_svg__g)",
    cx: 19.474,
    cy: 26.137,
    rx: 9.902,
    ry: 6.398
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__h",
    cx: 1328.506,
    cy: 41.225,
    r: 6.094,
    gradientTransform: "matrix(-1 0 0 .9524 1352.23 -20.966)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ebbb96"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebbb96"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#monkey_svg__h)",
    cx: 23.724,
    cy: 18.296,
    rx: 6.234,
    ry: 5.667
  }), _react["default"].createElement("radialGradient", {
    id: "monkey_svg__i",
    cx: 1337.008,
    cy: 41.225,
    r: 6.093,
    gradientTransform: "matrix(-1 0 0 .9524 1352.23 -20.966)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ebbb96"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebbb96"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#monkey_svg__i)",
    cx: 15.223,
    cy: 18.296,
    rx: 6.234,
    ry: 5.667
  }), _react["default"].createElement("linearGradient", {
    id: "monkey_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 110.435,
    y1: 11.029,
    x2: 109.266,
    y2: 17.697,
    gradientTransform: "translate(-85.436)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9a17a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebbb96"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#monkey_svg__j)",
    cx: 23.724,
    cy: 18.296,
    rx: 5.152,
    ry: 4.66
  }), _react["default"].createElement("linearGradient", {
    id: "monkey_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: 1338.281,
    y1: 11.029,
    x2: 1337.112,
    y2: 17.697,
    gradientTransform: "matrix(-1 0 0 1 1352.23 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9a17a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebbb96"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#monkey_svg__k)",
    cx: 15.223,
    cy: 18.296,
    rx: 5.151,
    ry: 4.66
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M16.871 22.661c-.263-1.117 2.362.754 2.008.883-.64.234-1.798 0-2.008-.883zM22.075 22.661c.264-1.117-2.361.754-2.009.883.642.234 1.799 0 2.009-.883zM23.762 26.819a.533.533 0 0 0-.46-.535 19.935 19.935 0 0 0-3.828-.348c-1.664 0-2.955.177-3.829.348a.535.535 0 0 0-.461.535c0 1.883 1.416 3.777 4.29 3.777 2.873.001 4.288-1.894 4.288-3.777z"
  }), _react["default"].createElement("linearGradient", {
    id: "monkey_svg__l",
    gradientUnits: "userSpaceOnUse",
    x1: 19.474,
    y1: 30.072,
    x2: 19.474,
    y2: 29.274
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d63324"
  }), _react["default"].createElement("stop", {
    offset: 0.08,
    stopColor: "#dc3f31"
  }), _react["default"].createElement("stop", {
    offset: 0.247,
    stopColor: "#e75346"
  }), _react["default"].createElement("stop", {
    offset: 0.435,
    stopColor: "#ee6155"
  }), _react["default"].createElement("stop", {
    offset: 0.657,
    stopColor: "#f3695d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f46c60"
  })), _react["default"].createElement("path", {
    fill: "url(#monkey_svg__l)",
    d: "M17.667 29.684a4.206 4.206 0 0 0 1.807.389c.683 0 1.284-.144 1.807-.389 0 0-.906-.718-1.807-.252-.903-.466-1.807.252-1.807.252z"
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 24.292,
    cy: 18.878,
    rx: 1.698,
    ry: 2.55
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 14.657,
    cy: 18.878,
    rx: 1.7,
    ry: 2.55
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M14.612 18.059a.559.559 0 0 1-1.115 0 .559.559 0 0 1 1.115 0zM24.203 18.059a.558.558 0 0 1-1.113 0 .558.558 0 0 1 1.113 0z"
  }));
};

var _default = SvgMonkey;
exports["default"] = _default;