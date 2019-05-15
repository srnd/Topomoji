"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSunset = function SvgSunset(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 61,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.098,
    stopColor: "#ff9e00"
  }), _react["default"].createElement("stop", {
    offset: 0.338,
    stopColor: "#ff8500"
  }), _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#ff7c00"
  }), _react["default"].createElement("stop", {
    offset: 0.678,
    stopColor: "#e96100"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bf2d00"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__a)",
    d: "M2 2h60v59H2z"
  }), _react["default"].createElement("radialGradient", {
    id: "sunset_svg__b",
    cx: 37.938,
    cy: 28.368,
    r: 27.564,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.345,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__b)",
    d: "M2 2h60v59H2z"
  }), _react["default"].createElement("radialGradient", {
    id: "sunset_svg__c",
    cx: 38,
    cy: 27,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd500"
  }), _react["default"].createElement("stop", {
    offset: 0.381,
    stopColor: "#ffd200"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#ffc700"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffb700"
  })), _react["default"].createElement("circle", {
    fill: "url(#sunset_svg__c)",
    cx: 38,
    cy: 27,
    r: 10
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 45.824,
    y1: 44.154,
    x2: 45.824,
    y2: 21.349
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.004,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#b33700"
  }), _react["default"].createElement("stop", {
    offset: 0.781,
    stopColor: "#9c2800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#942300"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__d)",
    d: "M42.157 21.349h7.334v22.806h-7.334z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 51.49,
    y1: 44.154,
    x2: 51.49,
    y2: 21.349
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.322,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.616,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__e)",
    d: "M48.824 21.349h5.333v22.806h-5.333z"
  }), _react["default"].createElement("path", {
    fill: "#A83200",
    d: "M36.205 32.86h6.498v1.401h-6.498z"
  }), _react["default"].createElement("path", {
    fill: "#821800",
    d: "M40.93 32.86h3.545v1.401H40.93z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 38.568,
    y1: 60.587,
    x2: 38.568,
    y2: 33.984
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.004,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#b33700"
  }), _react["default"].createElement("stop", {
    offset: 0.781,
    stopColor: "#9c2800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#942300"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__f)",
    d: "M34.434 33.984h8.27v26.603h-8.27z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 44.179,
    y1: 60.587,
    x2: 44.179,
    y2: 33.984
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.322,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.616,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__g)",
    d: "M42.111 33.984h4.135v26.603h-4.135z"
  }), _react["default"].createElement("path", {
    fill: "#821800",
    d: "M12.234 16h10v2h-10z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 10.234,
    y1: 26.5,
    x2: 24.234,
    y2: 26.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.322,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.616,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__h)",
    d: "M10.234 17h14v19h-14z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 9.234,
    y1: 42,
    x2: 25.234,
    y2: 42
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.232,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.444,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.614,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 0.721,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__i)",
    d: "M9.234 32h16v20h-16z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 17.234,
    y1: 61,
    x2: 17.234,
    y2: 45
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.322,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.616,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__j)",
    d: "M8.234 45h18v16h-18z"
  }), _react["default"].createElement("path", {
    fill: "#A83200",
    d: "M46.795 41.396h10.643v2H46.795z"
  }), _react["default"].createElement("path", {
    fill: "#821800",
    d: "M55.158 41.396h2.561v2h-2.561z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: 50.977,
    y1: 62,
    x2: 50.977,
    y2: 43
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.004,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#b33700"
  }), _react["default"].createElement("stop", {
    offset: 0.781,
    stopColor: "#9c2800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#942300"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__k)",
    d: "M44.516 43h12.922v19H44.516z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__l",
    gradientUnits: "userSpaceOnUse",
    x1: 57.838,
    y1: 62,
    x2: 57.838,
    y2: 43
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.322,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.616,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__l)",
    d: "M55.678 43h4.32v19h-4.32z"
  }), _react["default"].createElement("path", {
    fill: "#FF7C30",
    d: "M51.763 44.5h2v1h-2z"
  }), _react["default"].createElement("path", {
    fill: "#FFAC30",
    d: "M38.454 36h2v1h-2zM36.184 39.667h2v1h-2zM39.454 47.092h2v1h-2zM46.017 29.655h2v1h-2zM43.179 24.905h2v1h-2zM19.991 19.03h2v1h-2zM15.391 28.655h2v1h-2zM19.991 24.905h2v1h-2zM12.149 22.474h2v1h-2zM12.149 33.762h2v1h-2zM18.626 37.168h2v1h-2zM12.149 39.167h2v1h-2zM15.897 42h2v1h-2zM17.234 48.646h2v1h-2zM14.391 54.959h2v1h-2zM37.184 52.863h2v1h-2z"
  }), _react["default"].createElement("path", {
    fill: "#FF7C30",
    d: "M49.824 46.785h2v1h-2zM52.157 52.129h2v1h-2zM46.246 55.625h2v1h-2z"
  }), _react["default"].createElement("path", {
    fill: "#A83200",
    d: "M22.26 41.037h8.809v1.372H22.26z"
  }), _react["default"].createElement("path", {
    fill: "#821800",
    d: "M30.334 41.037h4.404v1.372h-4.404z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__m",
    gradientUnits: "userSpaceOnUse",
    x1: 26.43,
    y1: 61.333,
    x2: 26.43,
    y2: 42.138
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.004,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#b33700"
  }), _react["default"].createElement("stop", {
    offset: 0.781,
    stopColor: "#9c2800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#942300"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__m)",
    d: "M20.791 42.138h11.277v19.195H20.791z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__n",
    gradientUnits: "userSpaceOnUse",
    x1: 33.638,
    y1: 61.333,
    x2: 33.638,
    y2: 42.138
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b84400"
  }), _react["default"].createElement("stop", {
    offset: 0.322,
    stopColor: "#872e00"
  }), _react["default"].createElement("stop", {
    offset: 0.616,
    stopColor: "#611e00"
  }), _react["default"].createElement("stop", {
    offset: 0.852,
    stopColor: "#4a1400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#421000"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__n)",
    d: "M31.068 42.138h5.139v19.195h-5.139z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__o",
    gradientUnits: "userSpaceOnUse",
    x1: 7.739,
    y1: 61,
    x2: 7.739,
    y2: 47.502
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.004,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#b33700"
  }), _react["default"].createElement("stop", {
    offset: 0.781,
    stopColor: "#9c2800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#942300"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__o)",
    d: "M4 47.502h7.479V61H4z"
  }), _react["default"].createElement("linearGradient", {
    id: "sunset_svg__p",
    gradientUnits: "userSpaceOnUse",
    x1: 11.178,
    y1: 61,
    x2: 11.178,
    y2: 47.502
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d95000"
  }), _react["default"].createElement("stop", {
    offset: 0.126,
    stopColor: "#bd4100"
  }), _react["default"].createElement("stop", {
    offset: 0.318,
    stopColor: "#972e00"
  }), _react["default"].createElement("stop", {
    offset: 0.472,
    stopColor: "#802100"
  }), _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#781d00"
  })), _react["default"].createElement("path", {
    fill: "url(#sunset_svg__p)",
    d: "M8.799 47.502h4.758V61H8.799z"
  }), _react["default"].createElement("path", {
    fill: "#942300",
    d: "M49 59c-6 2.496-13 0-14 0-3.182 0-6.176 2.159-8 2-1.896-.165-5.096-2-7-2-.828 0-2.969 1.352-5 1-.889-.154-5.1-2-6-2-1.375 0-7 2-7 2v2h60v-3s-4.666-2-6-2c-1.125 0-5.152 1.232-7 2z"
  }), _react["default"].createElement("path", {
    fill: "#FF7C30",
    d: "M22.554 43.654h2v1h-2zM27.013 47.916h2v1h-2zM5.739 54.459h2v1h-2zM4.739 50.735h2v1h-2zM23.554 53.625h2v1h-2z"
  }));
};

var _default = SvgSunset;
exports["default"] = _default;