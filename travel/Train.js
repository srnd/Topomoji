"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrain = function SvgTrain(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15 51h34v4H15zM10 58h44v4H10z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M11.001 62L32 18.442 2 62z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M12.001 62L32 18.442 8 62z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M32 18.442L53.002 62H62z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M32 18.442L52.002 62H56z"
  }), _react["default"].createElement("linearGradient", {
    id: "train_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 15.414,
    y1: 49.674,
    x2: 48.586,
    y2: 49.674
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#2289c7"
  }), _react["default"].createElement("stop", {
    offset: 0.252,
    stopColor: "#2086c3"
  }), _react["default"].createElement("stop", {
    offset: 0.501,
    stopColor: "#1a7cb7"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#0f6da3"
  }), _react["default"].createElement("stop", {
    offset: 0.996,
    stopColor: "#005688"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#005687"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__a)",
    d: "M15.414 43.348C15.414 47.565 21.172 56 32 56c10.827 0 16.586-8.435 16.586-12.652H15.414z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M32 2C17 2 12 12.25 12 17v18c0 6 6.943 18 20 18s20-12 20-18V17c0-4.75-5-15-20-15"
  }), _react["default"].createElement("radialGradient", {
    id: "train_svg__b",
    cx: 32,
    cy: 27.5,
    r: 16.246,
    gradientTransform: "matrix(1 0 0 2.1857 0 -32.606)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.382,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.94,
    stopColor: "#d3dbe0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__b)",
    d: "M32 2C17 2 12 12.25 12 17v18c0 6 6.943 18 20 18s20-12 20-18V17c0-4.75-5-15-20-15"
  }), _react["default"].createElement("linearGradient", {
    id: "train_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 30.161,
    x2: 32.001,
    y2: 6.724
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#454754"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#636d78"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__c)",
    d: "M19.551 10.34c4.76-4.821 20.139-4.821 24.898 0 2.693 2.727.931 14.385.224 16.407-.78 2.234-3.699 3.414-8.263 3.414h-8.82c-4.563 0-7.48-1.18-8.262-3.414-.707-2.022-2.471-13.681.223-16.407z"
  }), _react["default"].createElement("linearGradient", {
    id: "train_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 46.617,
    y1: 28.941,
    x2: 52,
    y2: 28.941
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#2289c7"
  }), _react["default"].createElement("stop", {
    offset: 0.252,
    stopColor: "#2086c3"
  }), _react["default"].createElement("stop", {
    offset: 0.501,
    stopColor: "#1a7cb7"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#0f6da3"
  }), _react["default"].createElement("stop", {
    offset: 0.996,
    stopColor: "#005688"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#005687"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__d)",
    d: "M52 20c-1.507 9.69-5.383 16.543-5.383 17.722 0 .719 3.751-1 5.383-4.722V20z"
  }), _react["default"].createElement("linearGradient", {
    id: "train_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -861.119,
    y1: 28.94,
    x2: -866.501,
    y2: 28.94,
    gradientTransform: "matrix(-1 0 0 1 -849.12 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#005687"
  }), _react["default"].createElement("stop", {
    offset: 0.004,
    stopColor: "#005688"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#0f6da3"
  }), _react["default"].createElement("stop", {
    offset: 0.499,
    stopColor: "#1a7cb7"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#2086c3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#2289c7"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__e)",
    d: "M12 20c1.507 9.69 5.383 16.543 5.383 17.722 0 .719-3.751-1-5.383-4.722V20z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M43.48 44.07c.512.503 1.615.231 2.465-.605.853-.839 1.128-1.927.617-2.43-.511-.504-1.639-.378-2.465.605-.767.915-1.126 1.926-.617 2.43"
  }), _react["default"].createElement("radialGradient", {
    id: "train_svg__f",
    cx: 43.481,
    cy: 42.223,
    r: 1.337,
    gradientTransform: "rotate(45.001 65.087 51.84) scale(1 1.3978)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe600"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#fde100"
  }), _react["default"].createElement("stop", {
    offset: 0.438,
    stopColor: "#f7d200"
  }), _react["default"].createElement("stop", {
    offset: 0.699,
    stopColor: "#edba00"
  }), _react["default"].createElement("stop", {
    offset: 0.975,
    stopColor: "#df9800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#de9400"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__f)",
    d: "M46.182 40.94c-.381-.387-1.205-.178-1.839.467-.636.644-.843 1.481-.46 1.867.328.331 1.271.106 1.84-.466.636-.642.84-1.481.459-1.868"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M20.52 44.07c-.512.503-1.615.231-2.465-.605-.853-.839-1.128-1.927-.617-2.43.511-.504 1.639-.378 2.465.605.767.915 1.126 1.926.617 2.43"
  }), _react["default"].createElement("radialGradient", {
    id: "train_svg__g",
    cx: -862.817,
    cy: 42.223,
    r: 1.337,
    gradientTransform: "matrix(-.7071 .7071 .9884 .9884 -632.57 610.011)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe600"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#fde100"
  }), _react["default"].createElement("stop", {
    offset: 0.438,
    stopColor: "#f7d200"
  }), _react["default"].createElement("stop", {
    offset: 0.699,
    stopColor: "#edba00"
  }), _react["default"].createElement("stop", {
    offset: 0.975,
    stopColor: "#df9800"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#de9400"
  })), _react["default"].createElement("path", {
    fill: "url(#train_svg__g)",
    d: "M17.818 40.94c.381-.387 1.205-.178 1.839.467.636.644.843 1.481.46 1.867-.328.331-1.271.106-1.84-.466-.636-.642-.839-1.481-.459-1.868"
  }));
};

var _default = SvgTrain;
exports["default"] = _default;