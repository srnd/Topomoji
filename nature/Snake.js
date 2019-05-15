"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSnake = function SvgSnake(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "snake_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -389.079,
    y1: 339.017,
    x2: -369.049,
    y2: 339.017,
    gradientTransform: "matrix(-.6558 -.7549 .9568 -.8312 -546.702 44.392)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#3b7510"
  }), _react["default"].createElement("stop", {
    offset: 0.243,
    stopColor: "#559015"
  }), _react["default"].createElement("stop", {
    offset: 0.501,
    stopColor: "#6aa41a"
  }), _react["default"].createElement("stop", {
    offset: 0.755,
    stopColor: "#76b11c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7ab51d"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__a)",
    d: "M44.071 37.182c-14.56-3.74-35.99 5.395-34.969 24.568 6.53-22.15 28.911-19.134 34.021-16.678 5.04 2.422 4.404-7.006.948-7.89z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 37.387,
    y1: 51.957,
    x2: 37.387,
    y2: 29.823
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7ab51d"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#76b11c"
  }), _react["default"].createElement("stop", {
    offset: 0.499,
    stopColor: "#6aa41a"
  }), _react["default"].createElement("stop", {
    offset: 0.757,
    stopColor: "#559015"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#3b7510"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__b)",
    d: "M27.036 49.145c36.873 13.22 38.987-24.803 15.034-18.641-7.028 1.809-12.424 2.072-16.861 2.055-12.959-.05-9.362 12.573 1.827 16.586zm5.391-7.304c6.703-1.013 10.785-4.261 13.466-2.832 3.708 1.973-5.948 6.051-13.466 2.832z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 13.412,
    y1: 25.602,
    x2: 38.405,
    y2: 25.602
  }, _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#7ab51d"
  }), _react["default"].createElement("stop", {
    offset: 0.553,
    stopColor: "#75b11d"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#67a51e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#529320"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__c)",
    d: "M36.746 6.742c-.01-.011-.021-.017-.03-.027-3.757-4.607-8.341-6.121-15.338-3.27-3.665 1.492-4.544 2.917-7.688 4.655-.751.415.167 2.683 1.01 2.858.591 1.386 7.561 1.966 12.839 1.528 0 0-15.637 23.994-2.834 36.492 1.822 1.778 6.809-7.612 6.809-7.612-11.398-8.073 13.319-25.94 5.232-34.624z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 29.558,
    y1: 39.719,
    x2: 49.715,
    y2: 39.719
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#8cc920"
  }), _react["default"].createElement("stop", {
    offset: 0.372,
    stopColor: "#8fd11e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#93d91c"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__d)",
    d: "M36.628 42.928c6.507 2.15 15.096-2.557 12.666-5.344-3.883-4.454-11.619 1.666-19.736 1.837.984 1.707 2.869 2.42 2.869 2.42 6.087.146 10.5-4.014 13.255-2.444 2.02 1.15-4.765 4.274-9.054 3.531z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 16.318,
    y1: 33.293,
    x2: 57.82,
    y2: 33.293
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#93d91c"
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#8fd11e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#8cc920"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__e)",
    d: "M57.82 39.742c0 11.534-12.187 15.6-24.686 14.188-4.777-.539-9.939-1.201-13.751-6.662-9.233-13.229 5.121-26.777 7.37-34.725 2.105.321 4.254-.154 4.254-.154-2.168 11.285-14.914 21.337-7.347 32.693 6.068 9.106 32.583 9.083 34.16-5.34z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M27.038 6.87c0 2.359-3.377 2.359-3.377 0 0-1.522 3.377-1.522 3.377 0z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M17.291 8.876c.789 1.366-1.701 1.628-1.701.57-.001-.401 1.502-.913 1.701-.57z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M24.926 6.742c0 .59-.844.59-.844 0 0-.588.844-.588.844 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 14.7,
    y1: 11.869,
    x2: 34.709,
    y2: 11.869
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#93d91c"
  }), _react["default"].createElement("stop", {
    offset: 0.336,
    stopColor: "#8ed11c"
  }), _react["default"].createElement("stop", {
    offset: 0.869,
    stopColor: "#80ba1c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7cb31c"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__f)",
    d: "M34.709 10.607c-4.833 2.45-13.306.559-18.11.545-1.22.211-1.899-.193-1.899-.193.731 1.712 10.272 2.876 16.271 1.688 2.43-.483 3.738-2.04 3.738-2.04z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M5.25 12.807s5.859 2.38 9.45-1.848c0 0 .674.167 1.899.193-5.004 4.27-6.877 3.092-8.676 7.258.055-2.409 1.143-4.077 1.143-4.077s-3.155 0-3.816-1.526z"
  }), _react["default"].createElement("radialGradient", {
    id: "snake_svg__g",
    cx: 39.824,
    cy: 41.068,
    r: 39.727,
    gradientTransform: "matrix(.9735 0 0 .5469 -6.498 18.748)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7ab51d"
  }), _react["default"].createElement("stop", {
    offset: 0.52,
    stopColor: "#78b31d"
  }), _react["default"].createElement("stop", {
    offset: 0.723,
    stopColor: "#71ad1e"
  }), _react["default"].createElement("stop", {
    offset: 0.869,
    stopColor: "#65a31f"
  }), _react["default"].createElement("stop", {
    offset: 0.989,
    stopColor: "#549520"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#529320"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__g)",
    d: "M33.01 61.75c22.72 0 29.716-8.753 23.938-17.078-3.412 7.285-11.374 8.571-23.938 8.21-14.392-.413-23.402-10.314-16.104-10.562 0 0-1.316-4.154.147-9.778-2.245.136-4.282.532-6.3 1.541C-2.335 40.629 7.674 61.75 33.01 61.75z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 15.148,
    y1: 53.336,
    x2: 59,
    y2: 53.336
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#93d91c"
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#8fd11e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#8cc920"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__h)",
    d: "M56.947 44.672c5.108 7.827-4.813 15.835-25.819 15.835-6.453 0-11.645-1.002-15.98-3.153C19.714 59.999 25.796 62 33.082 62c22.72 0 29.931-9.252 23.865-17.328z"
  }), _react["default"].createElement("linearGradient", {
    id: "snake_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 12.948,
    y1: 44.834,
    x2: 21.695,
    y2: 44.834
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#93d91c"
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#8fd11e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#8cc920"
  })), _react["default"].createElement("path", {
    fill: "url(#snake_svg__i)",
    d: "M21.695 50.417c-11.772-3.766-9.63-10.793-5.297-11.167.25 1.442.632 3.063.632 3.063-1.832.007-4.787 3.692 4.665 8.104z"
  }));
};

var _default = SvgSnake;
exports["default"] = _default;