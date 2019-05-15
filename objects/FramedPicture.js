"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFramedPicture = function SvgFramedPicture(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "framed-picture_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 4,
    y1: 32,
    x2: 60,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fada72"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebaf3d"
  })), _react["default"].createElement("path", {
    fill: "url(#framed-picture_svg__a)",
    d: "M4 60V4h56z"
  }), _react["default"].createElement("linearGradient", {
    id: "framed-picture_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 4,
    y1: 32,
    x2: 60,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ebaf3d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fada72"
  })), _react["default"].createElement("path", {
    fill: "url(#framed-picture_svg__b)",
    d: "M60 60H4L60 4z"
  }), _react["default"].createElement("linearGradient", {
    id: "framed-picture_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 8,
    y1: 32,
    x2: 56,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ebaf3d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fada72"
  })), _react["default"].createElement("path", {
    fill: "url(#framed-picture_svg__c)",
    d: "M8 56V8h48z"
  }), _react["default"].createElement("linearGradient", {
    id: "framed-picture_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 8,
    y1: 32,
    x2: 56,
    y2: 32
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fada72"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ebaf3d"
  })), _react["default"].createElement("path", {
    fill: "url(#framed-picture_svg__d)",
    d: "M56 56H8L56 8z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M10 10h44v44H10z"
  }), _react["default"].createElement("radialGradient", {
    id: "framed-picture_svg__e",
    cx: 95.939,
    cy: 93.384,
    r: 22.422,
    gradientTransform: "matrix(.8375 0 0 .8739 -48.048 -48.818)",
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
    fill: "url(#framed-picture_svg__e)",
    d: "M14 14h36v19.878H14z"
  }), _react["default"].createElement("linearGradient", {
    id: "framed-picture_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 41.755,
    x2: 32.001,
    y2: 25.905
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
  })), _react["default"].createElement("ellipse", {
    fill: "url(#framed-picture_svg__f)",
    cx: 32,
    cy: 33.83,
    rx: 7.8,
    ry: 7.925
  }), _react["default"].createElement("radialGradient", {
    id: "framed-picture_svg__g",
    cx: 95.849,
    cy: 92.476,
    r: 35.355,
    gradientTransform: "matrix(.8375 0 0 .5788 -48.048 -21.531)",
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
    fill: "url(#framed-picture_svg__g)",
    d: "M14 33.879h36v16.122H14z"
  }), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "#FEEC9A",
    d: "M30.198 42.899c0 1.029 3.604 0 3.604 0s-3.604-1.029-3.604 0zM28.851 41.071s6.299 1.027 6.299 0c-.001-1.03-6.299 0-6.299 0zM32.9 39.698s4.499 1.029 4.499 0-4.499 0-4.499 0zM39.198 35.583s-14.396-2.058-14.396 0c0 2.057 14.396 0 14.396 0zM26.601 37.869s11.699 2.057 11.699 0-11.699 0-11.699 0zM26.601 39.698c0 1.029 5.399 0 5.399 0s-5.399-1.029-5.399 0z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M16.775 27.745c1.305-.75 2.618-1.727 4.459-1.451 2.117.319 3.094.733 4.222-.193 1.13-.926 2.051 1.088 3.601 1.459 1.548.37 5.001.659 3.019.871-2.454.264-17.869.864-17.229 0 .22-.297 1.201-.267 1.928-.686zM46.418 31.407c-1.029-.332-2.066-.766-3.52-.643-1.669.142-2.438.326-3.328-.085-.891-.41-1.618.482-2.841.648-1.223.163-3.945.292-2.382.386 1.937.116 14.097.384 13.591 0-.173-.132-.946-.12-1.52-.306zM27.421 31.623c.423-.743 1.151-.923 1.727-.411-.266-.771-1.378-.809-1.728-.114-.35-.697-1.464-.659-1.729.112.577-.513 1.307-.331 1.73.413zM25.69 32.548c.255-.447.693-.557 1.042-.248-.161-.464-.83-.487-1.042-.068-.21-.42-.88-.396-1.039.066.346-.308.786-.198 1.039.25zM29.147 32.453c.167-.291.453-.362.68-.161-.104-.304-.542-.317-.68-.045-.138-.274-.574-.26-.678.044.226-.202.513-.13.678.162z"
  }), _react["default"].createElement("path", {
    fill: "#FFE463",
    d: "M22.583 31.042c.228-.401.619-.498.93-.223-.143-.415-.742-.435-.93-.062-.189-.375-.789-.354-.933.062.311-.276.704-.177.933.223zM23.325 31.859c.146-.253.394-.315.592-.14-.091-.264-.47-.277-.592-.04-.118-.237-.499-.225-.59.039.198-.174.448-.113.59.141z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#1A1626",
    d: "M14 14v36.001h.817V14.832H50V14z"
  }));
};

var _default = SvgFramedPicture;
exports["default"] = _default;