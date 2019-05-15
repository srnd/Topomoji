"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgJoystick = function SvgJoystick(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "joystick_svg__a",
    cx: 31.333,
    cy: 35.292,
    r: 40.769,
    gradientTransform: "matrix(1 0 0 .4761 0 18.488)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.298,
    stopColor: "#32303e"
  }), _react["default"].createElement("stop", {
    offset: 0.568,
    stopColor: "#393b48"
  }), _react["default"].createElement("stop", {
    offset: 0.825,
    stopColor: "#444d58"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#joystick_svg__a)",
    d: "M56.609 51.587c.291-2.039.506-4.096.322-4.816-.711-2.808-3.234-9.332-4.795-11.919-2.295-3.803-37.984-3.801-40.277 0-1.561 2.589-4.088 9.111-4.797 11.919-.174.685.041 2.758.324 4.816h49.223z"
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 31.996,
    y1: 62,
    x2: 31.996,
    y2: 46.948
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.262,
    stopColor: "#333240"
  }), _react["default"].createElement("stop", {
    offset: 0.597,
    stopColor: "#3d424e"
  }), _react["default"].createElement("stop", {
    offset: 0.972,
    stopColor: "#4d5c65"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#joystick_svg__b)",
    d: "M7.031 46.948c-.252 1.748 1.135 9.556 1.135 9.556.418 2.336 3.66 3.928 5.393 4.246 9.035 1.667 27.807 1.667 36.84 0 1.734-.318 4.977-1.91 5.393-4.246 0 0 1.426-7.689 1.168-9.531-.001 5.469-49.929 5.96-49.929-.025z"
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 24.131,
    y1: 40.895,
    x2: 47.906,
    y2: 40.895
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.031,
    stopColor: "#6a7d84"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#5b6970"
  }), _react["default"].createElement("stop", {
    offset: 0.388,
    stopColor: "#505b62"
  }), _react["default"].createElement("stop", {
    offset: 0.618,
    stopColor: "#49535a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#475157"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#joystick_svg__c)",
    cx: 36.019,
    cy: 40.896,
    rx: 11.888,
    ry: 4.484
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 25.383,
    y1: 37.906,
    x2: 46.656,
    y2: 37.906
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.141,
    stopColor: "#64757c"
  }), _react["default"].createElement("stop", {
    offset: 0.433,
    stopColor: "#546168"
  }), _react["default"].createElement("stop", {
    offset: 0.722,
    stopColor: "#4a555b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#475157"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#joystick_svg__d)",
    cx: 36.02,
    cy: 37.907,
    rx: 10.637,
    ry: 3.539
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 26.633,
    y1: 35.468,
    x2: 45.404,
    y2: 35.468
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#617178"
  }), _react["default"].createElement("stop", {
    offset: 0.719,
    stopColor: "#4e5a60"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#475157"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#joystick_svg__e)",
    cx: 36.019,
    cy: 35.47,
    rx: 9.386,
    ry: 3.066
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 32.154,
    y1: 26.299,
    x2: 39.764,
    y2: 26.299
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.18,
    stopColor: "#cad3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.405,
    stopColor: "#bac3c8"
  }), _react["default"].createElement("stop", {
    offset: 0.653,
    stopColor: "#a1aaaf"
  }), _react["default"].createElement("stop", {
    offset: 0.916,
    stopColor: "#7e888d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#joystick_svg__f)",
    d: "M39.764 17.13h-7.609v16.947c0 1.855 7.609 1.855 7.609 0V17.13z"
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 13.961,
    y1: 37.01,
    x2: 24.131,
    y2: 37.01
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#joystick_svg__g)",
    d: "M24.131 35.067h-10.17v2.246c1.797 2.184 8.373 2.184 10.17 0v-2.246z"
  }), _react["default"].createElement("linearGradient", {
    id: "joystick_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 13.961,
    y1: 35.066,
    x2: 24.131,
    y2: 35.066
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#joystick_svg__h)",
    d: "M24.131 35.067c0 1.24-2.279 2.246-5.084 2.246-2.809 0-5.086-1.006-5.086-2.246 0-1.244 2.277-2.249 5.086-2.249 2.805.001 5.084 1.005 5.084 2.249z"
  }), _react["default"].createElement("radialGradient", {
    id: "joystick_svg__i",
    cx: 54.78,
    cy: -105.136,
    r: 11.143,
    gradientTransform: "translate(-35.188 137.459) scale(1.2353)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.318,
    stopColor: "#f4000b"
  }), _react["default"].createElement("stop", {
    offset: 0.876,
    stopColor: "#d60002"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf0000"
  })), _react["default"].createElement("path", {
    fill: "url(#joystick_svg__i)",
    d: "M35.96 2c-5.803 0-10.5 4.699-10.5 10.5 0 5.798 4.697 10.5 10.5 10.5 5.8 0 10.5-4.702 10.5-10.5 0-5.801-4.7-10.5-10.5-10.5z"
  }));
};

var _default = SvgJoystick;
exports["default"] = _default;