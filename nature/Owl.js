"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgOwl = function SvgOwl(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M16.308 35.983c11.575 2.877-7.411 7.834-2.378 19.472-11.09-6.485-4.562-19.609 2.378-19.472z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M19.866 36.056c11.634 3.204-7.339 8.235-2.162 20.67-11.19-7.032-4.795-20.903 2.162-20.67zM47.692 35.983c-11.575 2.877 7.409 7.834 2.378 19.472 11.09-6.485 4.562-19.609-2.378-19.472z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M44.135 36.056c-11.633 3.204 7.338 8.235 2.161 20.67 11.19-7.032 4.797-20.903-2.161-20.67z"
  }), _react["default"].createElement("radialGradient", {
    id: "owl_svg__a",
    cx: 21.894,
    cy: 53.883,
    r: 8.737,
    gradientTransform: "matrix(1.0153 0 0 1 -.72 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#916958"
  }), _react["default"].createElement("stop", {
    offset: 0.218,
    stopColor: "#8c6554"
  }), _react["default"].createElement("stop", {
    offset: 0.474,
    stopColor: "#7e594a"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#664639"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4a2f24"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__a)",
    d: "M25.837 56.717c-.218-1.556-.056-3.1.273-4.502h-2.523c-.809 6.494-4.065 5.817-3.927 6.591-.648.959-6.053.075-6.08 1.324-2.281 1.333-1.76 1.407-.075.889 1.124.182 8.599.47 9.048-.506.561.997.981 1.487 1.461 1.487.397 0 .914-1.088 1.523-1.632 2.444.816 3.772-.245 5.429.363-.359-1.801-4.62-.363-5.129-4.014z"
  }), _react["default"].createElement("radialGradient", {
    id: "owl_svg__b",
    cx: 42.56,
    cy: 53.883,
    r: 8.737,
    gradientTransform: "matrix(1.0153 0 0 1 -.72 0)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#916958"
  }), _react["default"].createElement("stop", {
    offset: 0.218,
    stopColor: "#8c6554"
  }), _react["default"].createElement("stop", {
    offset: 0.474,
    stopColor: "#7e594a"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#664639"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4a2f24"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__b)",
    d: "M50.42 60.13c-.027-1.249-5.432-.365-6.08-1.324.139-.773-3.117-.097-3.928-6.591h-2.521c.328 1.402.491 2.946.272 4.502-.509 3.651-4.77 2.213-5.129 4.015 1.655-.608 2.984.453 5.43-.363.609.543 1.125 1.631 1.522 1.631.479 0 .9-.49 1.462-1.487.448.976 7.923.688 9.049.506 1.683.518 2.204.444-.077-.889z"
  }), _react["default"].createElement("linearGradient", {
    id: "owl_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.921,
    y1: 57.016,
    x2: 32.921,
    y2: 25.959,
    gradientTransform: "matrix(1.1471 0 0 1.0444 -5.764 -.464)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffdaad"
  }), _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#f4cea0"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#d9b080"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__c)",
    d: "M16.19 26.647c-1.422 3.771-11.342 32.435 15.809 32.435 27.155 0 17.233-28.664 15.81-32.435H16.19z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#302C3B",
    d: "M34.051 33.233c.467 2.189 3.275 2.263 3.859.101-1.156.479-2.729.436-3.859-.101zM42.014 33.233c.466 2.189 3.274 2.263 3.857.101-1.155.479-2.729.436-3.857-.101zM26.089 33.233c.467 2.189 3.276 2.263 3.859.101-1.156.479-2.73.437-3.859-.101zM18.128 33.233c.466 2.189 3.276 2.263 3.858.101-1.154.479-2.73.437-3.858-.101zM37.759 37.713c.466 2.189 3.275 2.263 3.858.101-1.155.478-2.729.435-3.858-.101zM45.446 37.713c.466 2.189 3.275 2.263 3.858.101-1.155.478-2.729.435-3.858-.101zM22.383 37.713c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM14.696 37.713c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM30.071 37.713c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM34.051 42.192c.467 2.189 3.275 2.263 3.859.101-1.156.478-2.729.436-3.859-.101zM42.014 42.192c.466 2.189 3.274 2.263 3.857.101-1.155.478-2.729.436-3.857-.101zM26.089 42.192c.467 2.189 3.276 2.263 3.859.101-1.156.478-2.73.437-3.859-.101zM18.128 42.192c.466 2.189 3.276 2.263 3.858.101-1.154.478-2.73.437-3.858-.101zM45.446 46.671c.466 2.189 3.275 2.263 3.858.101-1.155.478-2.729.435-3.858-.101zM14.696 46.671c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM37.759 46.672c.466 2.189 3.275 2.263 3.858.101-1.155.478-2.729.435-3.858-.101zM22.383 46.672c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM30.071 46.672c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM38.941 55.631c.466 2.189 3.275 2.263 3.858.101-1.154.478-2.729.435-3.858-.101zM21.2 55.631c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM30.071 55.631c.467 2.19 3.276 2.263 3.859.102-1.156.477-2.73.437-3.859-.102zM34.051 51.151c.467 2.189 3.275 2.263 3.859.101-1.156.478-2.729.436-3.859-.101zM42.014 51.151c.466 2.189 3.274 2.263 3.857.101-1.155.478-2.729.436-3.857-.101zM26.089 51.151c.467 2.189 3.276 2.263 3.859.101-1.156.478-2.73.437-3.859-.101zM18.128 51.151c.466 2.189 3.276 2.263 3.858.101-1.154.478-2.73.437-3.858-.101z"
  }), _react["default"].createElement("linearGradient", {
    id: "owl_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 51.624,
    y1: 55.385,
    x2: 51.624,
    y2: 17.614,
    gradientTransform: "matrix(.9187 .0006 -.0007 .9813 1.782 1.373)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#91612a"
  }), _react["default"].createElement("stop", {
    offset: 0.571,
    stopColor: "#a97b47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bd915f"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__d)",
    d: "M44.749 18.86c-11.483 9.15 10.205 12.844 8.281 36.896 9.893-15.968-.937-39.31-8.281-36.896z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M43.675 24.586c-.605 3.998 6.924 6.599 10.098 20.959.263-10.135-8.233-19.076-10.098-20.959zM55.452 34.331c-.615-5.699-3.818-10.594-6.885-14.09-2.617 2.684 1.885.148 6.885 14.09z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M44.739 22.663c.781 2.574 10.244 7.396 10.4 24.963 2.003-14.516-5.937-23.722-10.4-24.963z"
  }), _react["default"].createElement("linearGradient", {
    id: "owl_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 235.523,
    y1: 64.782,
    x2: 235.523,
    y2: 27.011,
    gradientTransform: "matrix(-.9187 .0006 .0007 .9813 231.157 -7.958)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#91612a"
  }), _react["default"].createElement("stop", {
    offset: 0.571,
    stopColor: "#a97b47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bd915f"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__e)",
    d: "M19.252 18.86c11.475 9.149-10.205 12.843-8.281 36.896-9.892-15.969.928-39.31 8.281-36.896z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M20.317 24.586c.615 3.998-6.914 6.599-10.088 20.959-.264-10.135 8.232-19.077 10.088-20.959zM8.549 34.332c.605-5.7 3.809-10.595 6.885-14.091 2.617 2.685-1.885.148-6.885 14.091z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M19.262 22.663c-.781 2.575-10.244 7.396-10.4 24.963-2.002-14.516 5.937-23.722 10.4-24.963z"
  }), _react["default"].createElement("linearGradient", {
    id: "owl_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 32.281,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bd915f"
  }), _react["default"].createElement("stop", {
    offset: 0.429,
    stopColor: "#a97b47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#91612a"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__f)",
    d: "M52.563 20.386C54.058 14.037 52.729 2 31.999 2 11.272 2 9.942 14.038 11.438 20.386 13.059 27.272 26.347 32.281 32 32.281c5.655 0 18.94-5.009 20.563-11.895z"
  }), _react["default"].createElement("radialGradient", {
    id: "owl_svg__g",
    cx: 32.46,
    cy: 17.061,
    r: 21.074,
    gradientTransform: "matrix(1.0153 0 0 .7334 -.72 4.55)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffdaad"
  }), _react["default"].createElement("stop", {
    offset: 0.28,
    stopColor: "#fad4a7"
  }), _react["default"].createElement("stop", {
    offset: 0.657,
    stopColor: "#ebc496"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9b080"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__g)",
    d: "M50.695 22.728c1.36-5.191.153-15.032-18.697-15.032-18.846 0-20.055 9.842-18.694 15.032 1.474 5.63 13.556 10.49 18.696 10.49 5.141 0 17.222-4.861 18.695-10.49z"
  }), _react["default"].createElement("radialGradient", {
    id: "owl_svg__h",
    cx: 32,
    cy: 15.132,
    r: 17.868,
    gradientTransform: "matrix(1 0 0 .6941 0 4.629)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.054,
    stopColor: "#ffdaad"
  }), _react["default"].createElement("stop", {
    offset: 0.288,
    stopColor: "#d8af7f"
  }), _react["default"].createElement("stop", {
    offset: 0.552,
    stopColor: "#b28551"
  }), _react["default"].createElement("stop", {
    offset: 0.755,
    stopColor: "#9a6b35"
  }), _react["default"].createElement("stop", {
    offset: 0.873,
    stopColor: "#91612a"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__h)",
    d: "M49.578 2.73C37.333 2.73 32 7.484 32 7.484S26.667 2.73 14.422 2.73c.797 8.475 11.732 5.375 15.54 11.375 1.068 1.682 3.009 1.682 4.076 0 3.808-5.999 14.739-2.901 15.54-11.375z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M49.578 2.73c-3.529 4.505-13.207 5.795-15.54 11.375 3.808-5.999 14.739-2.901 15.54-11.375zM14.422 2.73c3.529 4.505 13.207 5.795 15.54 11.375-3.807-5.999-14.739-2.901-15.54-11.375z"
  }), _react["default"].createElement("radialGradient", {
    id: "owl_svg__i",
    cx: 31.755,
    cy: -9.756,
    r: 2.37,
    gradientTransform: "matrix(1.2717 0 0 3.608 -8.435 56.04)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#916958"
  }), _react["default"].createElement("stop", {
    offset: 0.218,
    stopColor: "#8c6554"
  }), _react["default"].createElement("stop", {
    offset: 0.474,
    stopColor: "#7e594a"
  }), _react["default"].createElement("stop", {
    offset: 0.749,
    stopColor: "#664639"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4a2f24"
  })), _react["default"].createElement("path", {
    fill: "url(#owl_svg__i)",
    d: "M29.437 23.089c.226 1.202 1.729 6.242 2.563 6.242.836 0 2.335-5.04 2.563-6.242.579-3.064-5.701-3.068-5.126 0z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M46.885 17.811a6 6 0 1 0-12 0c0 3.316 2.686 6 5.998 6s6.002-2.684 6.002-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "owl_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 36.053,
    y1: 17.811,
    x2: 45.902,
    y2: 17.811,
    gradientTransform: "matrix(1.0153 0 0 1 -.72 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffc800"
  }), _react["default"].createElement("stop", {
    offset: 0.033,
    stopColor: "#ffc500"
  }), _react["default"].createElement("stop", {
    offset: 0.394,
    stopColor: "#ffad00"
  }), _react["default"].createElement("stop", {
    offset: 0.726,
    stopColor: "#ff9e00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f90"
  })), _react["default"].createElement("circle", {
    fill: "url(#owl_svg__j)",
    cx: 40.885,
    cy: 17.811,
    r: 5
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 40.885,
    cy: 17.811,
    rx: 3,
    ry: 2.955
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M40.491 16.993c0 1.09-1.326 1.09-1.326 0 0-1.092 1.326-1.092 1.326 0z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M29.409 17.811a6 6 0 1 0-12 0c0 3.316 2.686 6 5.998 6s6.002-2.684 6.002-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "owl_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: 18.84,
    y1: 17.811,
    x2: 28.689,
    y2: 17.811,
    gradientTransform: "matrix(1.0153 0 0 1 -.72 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffc800"
  }), _react["default"].createElement("stop", {
    offset: 0.033,
    stopColor: "#ffc500"
  }), _react["default"].createElement("stop", {
    offset: 0.394,
    stopColor: "#ffad00"
  }), _react["default"].createElement("stop", {
    offset: 0.726,
    stopColor: "#ff9e00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f90"
  })), _react["default"].createElement("circle", {
    fill: "url(#owl_svg__k)",
    cx: 23.409,
    cy: 17.811,
    r: 5
  }), _react["default"].createElement("ellipse", {
    fill: "#302C3B",
    cx: 23.409,
    cy: 17.811,
    rx: 3,
    ry: 2.955
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M23.015 16.993c0 1.09-1.326 1.09-1.326 0 0-1.092 1.326-1.092 1.326 0z"
  }), _react["default"].createElement("path", {
    fill: "#735138",
    d: "M41.314 9.049c14.115 3.624 10.18 18.124-1.486 22.316 16.039-3.267 14.852-23.67 1.486-22.316zM22.686 9.049c-14.115 3.624-10.18 18.124 1.486 22.316C8.133 28.098 9.321 7.695 22.686 9.049z"
  }));
};

var _default = SvgOwl;
exports["default"] = _default;