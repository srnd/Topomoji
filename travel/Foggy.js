"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFoggy = function SvgFoggy(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M2 62.001h60V16.472c-24.666 9.9-39.115-8.91-60 0v45.529z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 62.001H2V23.315c24.664 9.149 39.113-8.236 60 0v38.686z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2 62.001h60v-32.1c-24.666 9.899-39.115-8.912-60 0v32.1z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 48.432,
    y1: 46.334,
    x2: 48.432,
    y2: 13.501
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bd0000",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.558,
    stopColor: "#bd0000"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__a)",
    d: "M34.863 15.099v4.078a62.447 62.447 0 0 0 4.656 3.97v23.188h1.182V24.026a74.574 74.574 0 0 0 3.551 2.476v19.832h1.182V27.242a75.17 75.17 0 0 0 3.547 2.103v16.989h1.184V29.97a64.647 64.647 0 0 0 3.549 1.752v14.612h1.182V32.226c1.205.514 2.396.981 3.549 1.369v12.739h1.184V33.962c.814.247 1.602.444 2.373.618v-2.156c-8.846-2.004-20.156-9.377-27.139-17.325z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 48.432,
    y1: 34.787,
    x2: 48.432,
    y2: 14.092
  }, _react["default"].createElement("stop", {
    offset: 0.151,
    stopColor: "#cf5700",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eb6300"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__b)",
    d: "M34.863 15.099v2.462C41.846 25.51 53.156 32.41 62 34.275v-1.852c-8.844-2.003-20.154-9.376-27.137-17.324z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 31.999,
    y1: 46.334,
    x2: 31.999,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bd0000",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.558,
    stopColor: "#bd0000"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__c)",
    d: "M28.451 12v34.334h7.096V12h-7.096zm3.37 22.066h-2.288V22.622h2.288v11.444z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 34.287,
    y1: 46.334,
    x2: 34.287,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0.151,
    stopColor: "#cf5700",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eb6300"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__d)",
    d: "M33.027 12v34.334h2.52V12h-2.52z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 30.256,
    y1: 34.078,
    x2: 30.256,
    y2: 22.634
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#eb6300"
  }), _react["default"].createElement("stop", {
    offset: 0.203,
    stopColor: "#e85f00"
  }), _react["default"].createElement("stop", {
    offset: 0.403,
    stopColor: "#de5300"
  }), _react["default"].createElement("stop", {
    offset: 0.604,
    stopColor: "#ce3f00"
  }), _react["default"].createElement("stop", {
    offset: 0.802,
    stopColor: "#b82400"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9c0000"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__e)",
    d: "M29.524 22.634v11.444h1.464V22.634h-1.464z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 16.999,
    y1: 46.334,
    x2: 16.999,
    y2: 13.621
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bd0000",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.558,
    stopColor: "#bd0000"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__f)",
    d: "M30.391 13.62c-6.818 8.494-19 16.679-28.392 18.807v2.153a34.382 34.382 0 0 0 2.374-.618v12.372h1.182V33.595a48.583 48.583 0 0 0 3.547-1.369v14.108h1.186V31.722a65.314 65.314 0 0 0 3.547-1.752v16.364h1.183V29.345a74.067 74.067 0 0 0 3.55-2.103v19.092h1.182V26.502a75.516 75.516 0 0 0 3.548-2.476v22.308h1.183V23.146c2.834-2.187 5.418-4.523 7.52-6.886v-2.64h-1.61z"
  }), _react["default"].createElement("linearGradient", {
    id: "foggy_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 16.999,
    y1: 35.143,
    x2: 16.999,
    y2: 13.621
  }, _react["default"].createElement("stop", {
    offset: 0.151,
    stopColor: "#cf5700",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#eb6300"
  })), _react["default"].createElement("path", {
    fill: "url(#foggy_svg__g)",
    d: "M2 32.5v1.98c12.64-2.795 25.274-12.859 29.999-18.22v-2.64C24.725 23.14 11.633 30.613 2 32.5z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 62.001H2V39.954c24.664 7.986 39.113-7.189 60 0v22.047z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M62 62.001H2V49.419c24.029-7.424 37.937 8.104 60 0v12.582z"
  }));
};

var _default = SvgFoggy;
exports["default"] = _default;