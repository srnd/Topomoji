"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgViolin = function SvgViolin(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M56.372 6.294L53.1 3.024l.825-.827 3.274 3.27zM59.521 10.634L56.766 7.88l.825-.826 2.756 2.752z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M58.059 10.31l1.876.872.963-.964-.873-1.875zM55.882 12.543l1.847.844.896-.896-1.483-1.208zM54.649 8.638l-3.273-3.271.828-.83 3.273 3.272z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M53.816 5.013l-1.857-.852-.962.963.851 1.855zM55.849 2.98l-1.858-.851-.894.895 1.49 1.216zM57.797 13.32l-3.264-3.264.829-.828 3.263 3.264z"
  }), _react["default"].createElement("path", {
    fill: "#AB5C10",
    d: "M57.074 3.351l3.574 3.574L62 4.968l-2.971-2.971z"
  }), _react["default"].createElement("linearGradient", {
    id: "violin_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 34.36,
    y1: 29.58,
    x2: 37.256,
    y2: 32.475,
    gradientTransform: "translate(21.875 -24.714)"
  }, _react["default"].createElement("stop", {
    offset: 0.164,
    stopColor: "#ea8800"
  }), _react["default"].createElement("stop", {
    offset: 0.353,
    stopColor: "#e48402"
  }), _react["default"].createElement("stop", {
    offset: 0.604,
    stopColor: "#d37806"
  }), _react["default"].createElement("stop", {
    offset: 0.889,
    stopColor: "#b8650d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ab5c10"
  })), _react["default"].createElement("path", {
    fill: "url(#violin_svg__a)",
    d: "M52.564 8.536l3.908-2.903.411-1.102 3.824-2.53 1.291 1.287-2.531 3.824-1.105.411-2.901 3.908z"
  }), _react["default"].createElement("path", {
    fill: "#AB5C10",
    d: "M53.607 8.437l5.43-4.497 1.018 1.017-4.496 5.427z"
  }), _react["default"].createElement("radialGradient", {
    id: "violin_svg__b",
    cx: 2.63,
    cy: 64.164,
    r: 22.519,
    gradientTransform: "translate(21.875 -24.714)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.164,
    stopColor: "#ea8800"
  }), _react["default"].createElement("stop", {
    offset: 0.353,
    stopColor: "#e48402"
  }), _react["default"].createElement("stop", {
    offset: 0.604,
    stopColor: "#d37806"
  }), _react["default"].createElement("stop", {
    offset: 0.889,
    stopColor: "#b8650d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ab5c10"
  })), _react["default"].createElement("path", {
    fill: "url(#violin_svg__b)",
    d: "M7.646 37.267c2.827-.273 3.646-1.648 3.775-2.561.47-3.279 1.555-2.59 1.896-1.893 1.863 3.805 5.875.76 6.753.105 3.157-2.357.991-6.334.991-6.334 4.642.328 4.401-3.529 5.484-5.48 4.923-8.873 12.272-1.291 14.919 1.356 2.649 2.647 10.235 9.991 1.358 14.912-1.947 1.083-5.814.847-5.482 5.485 0 0-3.979-2.166-6.336.988-.656.877-3.7 4.887.106 6.75.693.342 1.383 1.424-1.896 1.895-.912.133-2.367.928-2.56 3.773-.459 6.821-9.863 8.5-18.688-.318-8.925-8.924-6.828-18.051-.32-18.678z"
  }), _react["default"].createElement("linearGradient", {
    id: "violin_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 85.858,
    y1: 261.993,
    x2: 107.206,
    y2: 261.993,
    gradientTransform: "rotate(45.001 331.087 60.251)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff9400"
  }), _react["default"].createElement("stop", {
    offset: 0.126,
    stopColor: "#fb9200",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.727,
    stopColor: "#ea8800",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#violin_svg__c)",
    d: "M27.265 21.928c-1.063 1.794-.53 5.664-4.656 5.599 0 0 1.357 4.191-1.577 6.449-.816.628-6.071 4.364-7.547 1.062-.27-.606-1.204-1.168-1.783 1.781-.162.82-1.714 1.334-4.249 1.718-5.841.879-5.869 9.072 1.645 16.586 5.44 5.44 39.95-23.125 31.543-31.532-2.147-2.146-8.545-9.824-13.376-1.663z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M28.736 39.786c.329-.115.825-.197 1.179.158 2.674 2.672-6.266 7.045-4.498 8.813.39.389.733.287.921.18a.717.717 0 0 1 .196-.615.733.733 0 0 1 1.039 0 .726.726 0 1 1-.897 1.133c-.31.213-1.105.623-1.844-.115-2.525-2.521 6.143-7.238 4.535-8.847-.104-.101-.258-.112-.391-.095a.73.73 0 0 1-.203.453.734.734 0 1 1-1.04-1.039.727.727 0 0 1 1.003-.026zM24.195 35.247c.114-.328.195-.824-.16-1.18-2.672-2.672-7.047 6.264-8.815 4.496-.39-.389-.288-.732-.18-.92a.728.728 0 0 0 .616-.195.735.735 0 0 0-1.041-1.039.72.72 0 0 0-.094.896c-.214.311-.623 1.105.113 1.842 2.524 2.523 7.244-6.139 8.853-4.531.103.104.112.258.097.39a.738.738 0 0 0-.454.202.735.735 0 1 0 1.04 1.041.732.732 0 0 0 .025-1.002z"
  }), _react["default"].createElement("linearGradient", {
    id: "violin_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 96.849,
    y1: 238.197,
    x2: 102.369,
    y2: 238.197,
    gradientTransform: "rotate(45.001 331.087 60.251)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#505760"
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#322e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.648,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#violin_svg__d)",
    d: "M26.635 33.444l3.906 3.901 25.018-26.961-1.952-1.947z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M19.134 38.998l5.658 5.656-.707.707-5.658-5.656z"
  }), _react["default"].createElement("path", {
    fill: "#D6A57C",
    d: "M20.29 47.153l-.329-.377 3.721-3.254L58.438 6.193l.237.237-34.646 37.452zM16.826 43.69l3.256-3.718L57.559 5.314l.237.238-37.354 34.767-3.239 3.702zM17.871 44.745l2.826-3.441L57.866 5.622l.238.237-37.041 35.783-2.805 3.421zM19.234 46.108l-.318-.386 3.443-2.825L58.131 5.886l.235.236-35.667 37.143z"
  }), _react["default"].createElement("linearGradient", {
    id: "violin_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -11.133,
    y1: 72.865,
    x2: -6.046,
    y2: 77.952,
    gradientTransform: "translate(21.875 -24.714)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#505760"
  }), _react["default"].createElement("stop", {
    offset: 0.627,
    stopColor: "#322e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.648,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#violin_svg__e)",
    d: "M21.113 47.952s-2.103 1.256-2.862 1.541c-.683.258-2.204.299-2.843.65-2.049 1.133-6.623 6.619-6.623 6.619l-1.576-1.574s5.488-4.572 6.621-6.619c.354-.639.395-2.16.652-2.842.285-.762 1.544-2.861 1.544-2.861l5.087 5.086z"
  }), _react["default"].createElement("path", {
    fill: "#FFE1BD",
    d: "M49.97 60.541l-46.488-46.5 1.053-1.052 46.487 46.5z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M7.822 18.38l-4.338-4.338 1.051-1.051 4.337 4.339z"
  }), _react["default"].createElement("path", {
    fill: "#AB5C10",
    d: "M44.038 49.665L5.951 11.577l1.055-1.055L45.093 48.61z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M48.082 53.708l3.33 3.343 1.061-1.061-3.337-3.337z"
  }), _react["default"].createElement("path", {
    fill: "#AB5C10",
    d: "M51.621 57.24l2.28 2.293 1.058-1.056-2.287-2.288z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M44.038 49.664l4.037 4.05 1.061-1.061-4.043-4.044z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.915 58.486l3.518 3.517 2.064-4.988-2.055-2.056z"
  }), _react["default"].createElement("path", {
    fill: "#AB5C10",
    d: "M5.538 16.098L2.021 12.58l4.981-2.06 2.056 2.055z"
  }));
};

var _default = SvgViolin;
exports["default"] = _default;