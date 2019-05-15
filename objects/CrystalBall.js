"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCrystalBall = function SvgCrystalBall(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#EA8800",
    d: "M33.695 58.527l-.746-.603L36 50h-8l3.051 7.924-.746.603.695.68-1 2.189.44.604h3.119l.441-.604-1-2.189z"
  }), _react["default"].createElement("radialGradient", {
    id: "crystal-ball_svg__a",
    cx: 24.876,
    cy: 20.951,
    r: 26.401,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#aa5bef"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#a858ee"
  }), _react["default"].createElement("stop", {
    offset: 0.66,
    stopColor: "#a250e9"
  }), _react["default"].createElement("stop", {
    offset: 0.803,
    stopColor: "#9641e1"
  }), _react["default"].createElement("stop", {
    offset: 0.931,
    stopColor: "#872cd7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#7c1dcf"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__a)",
    d: "M32 2C17.101 2 5 14.095 5 29.01 5 43.928 17.101 56 32 56s27-12.072 27-26.99C59 14.095 46.899 2 32 2z"
  }), _react["default"].createElement("radialGradient", {
    id: "crystal-ball_svg__b",
    cx: 533.03,
    cy: 31.866,
    r: 37.178,
    gradientTransform: "matrix(.3583 .4654 -.7152 .5506 -151.418 -257.493)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__b)",
    d: "M31.199 27.326c-7.589 5.847-16.822 6.578-20.619 1.64-3.807-4.942-.738-13.68 6.851-19.521 7.589-5.847 16.822-6.578 20.629-1.64 3.806 4.943.728 13.685-6.861 19.521z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 48,
    x2: 32.001,
    y2: 44
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.258,
    stopColor: "#ffc000"
  }), _react["default"].createElement("stop", {
    offset: 0.669,
    stopColor: "#ffd000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__c)",
    d: "M10.402 48H53.6c2.717 0 2.717-4 0-4H10.402c-2.718 0-2.718 4 0 4z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 51.215,
    y1: 62,
    x2: 51.215,
    y2: 45.316
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.009,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.559,
    stopColor: "#f8a301"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f59e01"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__d)",
    d: "M54.679 58.607l-.574-.59s1.677-4.813 1.403-7.682l-2.695-4.621-5.92-.398 1.476 4.373c3.272 2.32 4.273 8.328 4.273 8.328l-.574.59.535.664-.77 2.139.339.59h2.402l.339-.59-.77-2.139.536-.664z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 50.637,
    y1: 51.226,
    x2: 50.637,
    y2: 43.999
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.258,
    stopColor: "#ffc000"
  }), _react["default"].createElement("stop", {
    offset: 0.669,
    stopColor: "#ffd000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__e)",
    d: "M50.654 44.191c-6.113-1.424-6.47 5.516-1.998 5.832 1.18.084 2.335 1.758 2.455 1.01.368-2.289-3.634-5.289-3.634-5.289s3.32 1.434 4.837 4.363c.772 1.494 1.654 1.27 1.805.27.257-1.719-1.516-3.514-1.516-3.514s1.522.439 2.075 2.676c.25 1.012.754.975.829.797.489-1.168-.257-5.072-4.853-6.145z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M53.935 52.01c.479 2.969-.224 6.096-.224 6.096s.326-2.303-1.38-5.18c1.233 3.119.866 5.221.866 5.221l-.556-.129-.574.59s1.595 1.031 2.611 0l-.574-.59s.809-2.881-.169-6.008zM54.144 59.271v1.327l-.266-1.153-.432 1.569-.073-1.598-.77-.145-.77 2.139h3.08z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 12.785,
    y1: 62,
    x2: 12.785,
    y2: 45.316
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.009,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.559,
    stopColor: "#f8a301"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f59e01"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__f)",
    d: "M9.321 58.607l.574-.59s-1.677-4.813-1.403-7.682l2.695-4.621 5.92-.398-1.476 4.373c-3.272 2.32-4.273 8.328-4.273 8.328l.574.59-.535.664.77 2.139-.339.59H9.426l-.339-.59.77-2.139-.536-.664z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 13.363,
    y1: 51.226,
    x2: 13.363,
    y2: 43.999
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb300"
  }), _react["default"].createElement("stop", {
    offset: 0.258,
    stopColor: "#ffc000"
  }), _react["default"].createElement("stop", {
    offset: 0.669,
    stopColor: "#ffd000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffd500"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__g)",
    d: "M13.346 44.191c6.113-1.424 6.47 5.516 1.998 5.832-1.18.084-2.335 1.758-2.455 1.01-.368-2.289 3.634-5.289 3.634-5.289s-3.32 1.434-4.837 4.363c-.772 1.494-1.654 1.27-1.805.27-.257-1.719 1.516-3.514 1.516-3.514s-1.522.439-2.075 2.676c-.25 1.012-.754.975-.829.797-.489-1.168.257-5.072 4.853-6.145z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M10.065 52.01c-.479 2.969.224 6.096.224 6.096s-.326-2.303 1.38-5.18c-1.233 3.119-.866 5.221-.866 5.221l.556-.129.574.59s-1.595 1.031-2.611 0l.574-.59s-.809-2.881.169-6.008zM9.856 59.271v1.327l.266-1.153.432 1.569.073-1.598.77-.145.77 2.139h-3.08z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: -209.593,
    y1: 275.292,
    x2: -209.593,
    y2: 275.6,
    gradientTransform: "matrix(42 0 0 -52 8843 14357.094)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f90"
  }), _react["default"].createElement("stop", {
    offset: 0.022,
    stopColor: "#ff9c03"
  }), _react["default"].createElement("stop", {
    offset: 0.274,
    stopColor: "#ffb91d"
  }), _react["default"].createElement("stop", {
    offset: 0.524,
    stopColor: "#ffce31"
  }), _react["default"].createElement("stop", {
    offset: 0.768,
    stopColor: "#ffdb3c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffdf40"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__h)",
    d: "M40.084 25.917c-.56 6.224-1.695 7.345-6.463 7.999 4.768.656 5.903 1.777 6.463 8 .559-6.223 1.693-7.344 6.461-8-4.768-.654-5.903-1.775-6.461-7.999z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: -205.396,
    y1: 268.292,
    x2: -205.396,
    y2: 268.792,
    gradientTransform: "matrix(24 0 0 -26 4973 6997)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6fad00"
  }), _react["default"].createElement("stop", {
    offset: 0.039,
    stopColor: "#73b202"
  }), _react["default"].createElement("stop", {
    offset: 0.263,
    stopColor: "#87cc0f"
  }), _react["default"].createElement("stop", {
    offset: 0.493,
    stopColor: "#96de17"
  }), _react["default"].createElement("stop", {
    offset: 0.734,
    stopColor: "#9ee91c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a1ed1e"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__i)",
    d: "M43.5 8.404c-.521 5.059-1.574 5.967-5.998 6.5 4.424.533 5.478 1.44 5.998 6.5.521-5.06 1.574-5.967 5.998-6.5-4.424-.533-5.477-1.441-5.998-6.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "crystal-ball_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 52.067,
    y1: 32.999,
    x2: 52.067,
    y2: 20
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff45ab"
  }), _react["default"].createElement("stop", {
    offset: 0.227,
    stopColor: "#ff5db6"
  }), _react["default"].createElement("stop", {
    offset: 0.478,
    stopColor: "#ff71be"
  }), _react["default"].createElement("stop", {
    offset: 0.734,
    stopColor: "#ff7cc3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff80c5"
  })), _react["default"].createElement("path", {
    fill: "url(#crystal-ball_svg__j)",
    d: "M52.067 20c-.519 5.057-1.573 5.967-6 6.5 4.427.533 5.481 1.444 6 6.5.519-5.056 1.572-5.967 6-6.5-4.427-.533-5.481-1.443-6-6.5z"
  }));
};

var _default = SvgCrystalBall;
exports["default"] = _default;