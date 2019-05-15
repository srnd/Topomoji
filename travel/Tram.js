"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTram = function SvgTram(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M41.894 2H22.106c-1.559 0-2.825 1.278-2.825 2.855 0 .393.317.713.709.713a.71.71 0 0 0 .707-.713 1.42 1.42 0 0 1 1.411-1.428h3.845c1.646 0 1.808.792 2.085 2.102.082.395.181 1.968.363 2.407h1.72c-.372-.229-.519-1.82-.699-2.7-.117-.552-.257-1.221-.599-1.809h6.358c-.344.588-.482 1.258-.597 1.809-.186.88-.332 2.471-.703 2.7h1.717c.183-.438.283-2.013.365-2.407.275-1.31.441-2.102 2.084-2.102h3.848c.777 0 1.412.639 1.412 1.428 0 .393.318.713.709.713a.71.71 0 0 0 .705-.713C44.719 3.278 43.453 2 41.894 2z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M39.025 36.757h-14.05L13.874 62h36.252z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M46.717 62h1.725L32.864 24.686z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M50.126 62H54L32.864 24.686z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.557 62h1.726l13.855-37.314z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M13.874 62H10l21.138-37.314z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M14.399 43.111c0 2.223 2.2 8.889 3.301 8.889h28.6c1.101 0 3.301-6.666 3.301-8.889v-5.556H14.399v5.556z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M14.399 32v6.666c0 2.223 2.2 8.89 5.5 8.89H44.1c3.3 0 5.5-6.667 5.5-8.89V32H14.399z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -162,
    y1: 124.666,
    x2: -162,
    y2: 162.444,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.513,
    stopColor: "#dce3e7"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#tram_svg__a)",
    d: "M43 7.556H21c-5.082 0-6.601 3.385-6.601 5.556V32L21 36.444c5.337 3.594 4.4 8.89 8.8 8.89h4.4c4.399 0 4.693-6.125 8.8-8.89L49.601 32V13.111c0-2.17-1.519-5.555-6.601-5.555z"
  }), _react["default"].createElement("ellipse", {
    fill: "#FFF",
    cx: 19.899,
    cy: 42,
    rx: 2.201,
    ry: 2.223
  }), _react["default"].createElement("ellipse", {
    fill: "#FFF",
    cx: 44.101,
    cy: 42,
    rx: 2.199,
    ry: 2.223
  }), _react["default"].createElement("path", {
    fill: "#013366",
    d: "M34.2 49.777h-4.4L28.7 52h6.6l-1.1-2.223z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M44.101 12H19.899c-3.3 0-2.199 7.778-2.199 7.778h28.6S47.4 12 44.101 12z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -162,
    y1: 132.445,
    x2: -162,
    y2: 156.889,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.236,
    stopColor: "#41424f"
  }), _react["default"].createElement("stop", {
    offset: 0.74,
    stopColor: "#616b76"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#tram_svg__b)",
    d: "M44.101 13.111H19.899c-2.199 0-2.199 6.667-2.199 6.667s.652 11.771 3.3 14.445c4.4 4.443 17.6 4.443 22 0 2.646-2.672 3.3-14.445 3.3-14.445s0-6.667-2.199-6.667z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M42.494 18.879H21.509c-2.924 0-2.924-4.869 0-4.869h20.985c2.923 0 2.923 4.869 0 4.869z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M27.817 17.133c-.004-.074.034-.113.103-.113h.413c.064 0 .1.039.111.109.03.265.188.368.436.368.279 0 .441-.133.441-.397v-2.151c0-.07.039-.109.107-.109h.409c.069 0 .108.039.108.109V17.1c0 .693-.518 1.012-1.066 1.012-.525-.001-1.015-.288-1.062-.979zM30.347 16.444c0-.938.734-1.666 1.65-1.666.915 0 1.65.729 1.65 1.666 0 .938-.735 1.667-1.65 1.667-.916 0-1.65-.729-1.65-1.667zm2.675 0c0-.616-.45-1.052-1.025-1.052-.577 0-1.026.436-1.026 1.052 0 .617.449 1.053 1.026 1.053.575 0 1.025-.436 1.025-1.053zM36.166 14.97l-.966 1.655v1.316c0 .069-.039.108-.108.108h-.408c-.069 0-.108-.039-.108-.108v-1.317l-.966-1.654c-.043-.076-.01-.131.072-.131h.475c.061 0 .1.026.127.077l.604 1.1.604-1.1c.028-.051.066-.077.127-.077h.474c.083 0 .117.055.073.131z"
  }));
};

var _default = SvgTram;
exports["default"] = _default;