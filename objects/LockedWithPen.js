"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLockedWithPen = function SvgLockedWithPen(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 20,
    y1: 32,
    x2: 20,
    y2: 4
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bec8cc"
  }), _react["default"].createElement("stop", {
    offset: 0.261,
    stopColor: "#bbc5c9"
  }), _react["default"].createElement("stop", {
    offset: 0.443,
    stopColor: "#b2bcc0"
  }), _react["default"].createElement("stop", {
    offset: 0.601,
    stopColor: "#a3adb1"
  }), _react["default"].createElement("stop", {
    offset: 0.745,
    stopColor: "#8e979b"
  }), _react["default"].createElement("stop", {
    offset: 0.878,
    stopColor: "#737c7f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#535b5e"
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__a)",
    d: "M20 4C12.819 4 7 9.904 7 17.188V32h5.443V17.188c0-10.252 15.112-10.252 15.112 0V32h5.443V17.188C32.999 9.904 27.178 4 20 4z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 13.981,
    y1: 32,
    x2: 13.981,
    y2: 4.742
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fafdff",
    stopOpacity: 0.7
  }), _react["default"].createElement("stop", {
    offset: 0.897,
    stopColor: "#fafdff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__b)",
    d: "M20.481 4.742c-7.181 0-13 5.906-13 13.189V32H9.15V17.932c0-8.586 6.26-12.61 11.331-13.19z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -109.369,
    y1: 32,
    x2: -109.369,
    y2: 4.742,
    gradientTransform: "matrix(-1 0 0 1 -83.456 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0b0c0d",
    stopOpacity: 0.3
  }), _react["default"].createElement("stop", {
    offset: 0.897,
    stopColor: "#0b0c0d",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__c)",
    d: "M19.413 4.742c7.181 0 13 5.906 13 13.189V32h-1.67V17.932c0-8.586-6.259-12.61-11.33-13.19z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 10.566,
    y1: 19.822,
    x2: 29.433,
    y2: 19.822
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0b0c0d",
    stopOpacity: 0.3
  }), _react["default"].createElement("stop", {
    offset: 0.099,
    stopColor: "#242526",
    stopOpacity: 0.32
  }), _react["default"].createElement("stop", {
    offset: 0.727,
    stopColor: "#bcbfc1",
    stopOpacity: 0.445
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fafdff",
    stopOpacity: 0.5
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__d)",
    d: "M29.433 32V17.523c0-13.172-18.866-13.172-18.866 0V32h1.293V16.748c0-10.557 16.28-10.557 16.28 0V32h1.293z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 45.56,
    x2: 37.999,
    y2: 45.56
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffd231"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#db7600"
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__e)",
    d: "M37.999 58.898c0 .605-.496 1.102-1.102 1.102H3.102A1.105 1.105 0 0 1 2 58.898V32.225c0-.605.496-1.104 1.102-1.104h33.796c.605 0 1.102.498 1.102 1.104v26.673z"
  }), _react["default"].createElement("path", {
    fill: "#C46A12",
    d: "M37.081 31.121c0 1.557-34.163 1.557-34.163 0h34.163z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M23.381 54.781c3.801-.713 6.334-1.87 19.512-3.168.561-.078.574-12.072.008-12.152-13.175-1.27-15.702-2.41-19.505-3.117-.674-.103-7.875 7.529-12.824 9.123-.105.109-.105.109 0 .226 4.946 1.582 12.128 9.185 12.809 9.088z"
  }), _react["default"].createElement("radialGradient", {
    id: "locked-with-pen_svg__f",
    cx: -841.537,
    cy: 265.961,
    r: 10.128,
    gradientTransform: "matrix(0 1.0027 -4.2262 0 1133.481 889.48)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.648,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.74,
    stopColor: "#cad4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.841,
    stopColor: "#bdc8cd"
  }), _react["default"].createElement("stop", {
    offset: 0.948,
    stopColor: "#a7b4ba"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__f)",
    d: "M23.118 55.109c4.092-.737 6.813-1.933 20.993-3.282 1.471-.194 1.479-12.386.009-12.587-14.179-1.314-16.896-2.496-20.985-3.229-.726-.106-1.439.189-1.97.799-1.77 2.035-6.354 6.725-11.503 8.494l13.908.002c.13-1.016.966-1.812 2.017-1.813a2.068 2.068 0 0 1 0 4.135c-1.055 0-1.883-.794-2.016-1.809l-13.909.003c5.18 1.73 9.71 6.447 11.488 8.492.529.61 1.241.901 1.968.795z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 182.834,
    y1: 1195.572,
    x2: 182.834,
    y2: 1217.637,
    gradientTransform: "rotate(180 116.916 626.08)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.641,
    stopColor: "#49555f"
  }), _react["default"].createElement("stop", {
    offset: 0.87,
    stopColor: "#3a3d4a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__g)",
    d: "M62 36.267l-17.414.681c-3.229.132-4.584 3.992-4.584 8.612 0 4.626 1.354 8.483 4.584 8.615L62 54.857v-18.59z"
  }), _react["default"].createElement("linearGradient", {
    id: "locked-with-pen_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 187.394,
    y1: 1215.899,
    x2: 187.394,
    y2: 1197.318,
    gradientTransform: "rotate(180 116.916 626.08)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#717b80"
  }), _react["default"].createElement("stop", {
    offset: 0.218,
    stopColor: "#aab9bd"
  }), _react["default"].createElement("stop", {
    offset: 0.25,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#ced7dc"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#locked-with-pen_svg__h)",
    d: "M44.586 54.175c2.406 1.359 3.668.251 6.45.257 0 0-2.864-1.707-2.864-8.846.001-7.138 2.864-8.892 2.864-8.892-2.783.005-4.046-1.104-6.45.253 0 0-2.745 2.712-2.745 8.64.001 5.926 2.745 8.588 2.745 8.588z"
  }));
};

var _default = SvgLockedWithPen;
exports["default"] = _default;