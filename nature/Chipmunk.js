"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChipmunk = function SvgChipmunk(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#5E4433",
    d: "M31.292 60.57c-1.164-.844 0-4.896 0-4.896h-3.195s1.168 2.998 0 3.844c-.793.574-3.259-.123-4.382-.123-2.793 0-5.063 2.605-5.063 2.605h12.64s.797-.854 0-1.43z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M38.381 60.57c-1.166-.844 0-4.896 0-4.896h-3.195s1.168 2.998 0 3.844c-.791.574-3.26-.123-4.385-.123-2.791 0-5.058 2.605-5.058 2.605h12.639c-.001 0 .796-.854-.001-1.43z"
  }), _react["default"].createElement("radialGradient", {
    id: "chipmunk_svg__a",
    cx: 46.329,
    cy: 27.655,
    r: 10.831,
    gradientTransform: "matrix(.9929 -.1232 .2688 2.3375 -7.106 -28.34)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d49042"
  }), _react["default"].createElement("stop", {
    offset: 0.055,
    stopColor: "#cd8a40"
  }), _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#9e6234"
  }), _react["default"].createElement("stop", {
    offset: 0.814,
    stopColor: "#80492c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#754029"
  })), _react["default"].createElement("path", {
    fill: "url(#chipmunk_svg__a)",
    d: "M40.624 55.294c.738 3.783 4.219 4.301 5.271 2.229.967-1.905 5.238-.537 4.949-3.489-.336-3.45 5.02-1.03 4.742-4.292-.213-2.489 2.605-3.448 2.041-5.661-.746-2.936 3.914-3.086 3.074-5.625-.912-2.762 2.008-4.287.434-6.319-1.98-2.554 2.963-6.761-.256-7.08-3.002-.298.545-5.254-2.328-5.311-3.43-.069-.121-8.08-3.551-6.347-1.578.799-2.238-3.483-4.238-2.207-3.201 2.042-5.174-5.948-6.889-2.142-1.07 2.375-6.794.333-5.534 3.4 1.386 3.375 5.376 2.586 5.245 5.882-.117 2.938 5.936 3.211 4.514 6.725-1.008 2.493 4.078 2.538 1.385 7.092-1.123 1.899-.041 7.433-2.037 9.099.694 4.877-6.166 9.929-6.822 14.046z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M3.691 29.551c-3.354.527-.756 9.01 2.123 8.604 2.59-.364 2.09-9.268-2.123-8.604z"
  }), _react["default"].createElement("linearGradient", {
    id: "chipmunk_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 3.399,
    y1: 20.762,
    x2: 25.691,
    y2: 20.762
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#754029"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d49042"
  })), _react["default"].createElement("path", {
    fill: "url(#chipmunk_svg__b)",
    d: "M20.264 14.518c.359-7.85-5.154-9.252-7.08-.645-8.534 1.594-8.131 10.791-9.69 14.856-1.148 1.229 8.269 9.391 18.662 1.174 1.896-1.499 7.838-10.889-1.892-15.385z"
  }), _react["default"].createElement("linearGradient", {
    id: "chipmunk_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 4.549,
    y1: 27.382,
    x2: 24.323,
    y2: 27.382
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9b080"
  }), _react["default"].createElement("stop", {
    offset: 0.314,
    stopColor: "#f0c99b"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#ffdaad"
  })), _react["default"].createElement("path", {
    fill: "url(#chipmunk_svg__c)",
    d: "M23.869 21.457c3.812 12.975-17.615 14.242-19.32 8.854 2.404-5.2 13.631.232 19.32-8.854z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M15.518 18.041c-1.963 1.844-2.047 5.098-5.689 5.48.761-3.46 3.726-5.068 5.689-5.48z"
  }), _react["default"].createElement("path", {
    fill: "#F5CFA0",
    d: "M11.9 18.453c.416 2.127-.813 5.564-5.172 6.412-1.673-5.051 3.711-4.918 5.172-6.412z"
  }), _react["default"].createElement("path", {
    fill: "#F5CFA0",
    d: "M21.311 18.217c-5.738 2.947-8.828 12.193-14.582 6.648 4.962 0 5.943-6.687 14.582-6.648z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M11.207 21.961c.682 2.797-1.793 4.479-4.479 2.904-.207-2.742 2.729-4.258 4.479-2.904zM4.02 26.775c.701.768.471 3.07.877 4.223-1.758-.631-2.038-3.158-.877-4.223z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M8.504 23.465c0 .844-1.201.844-1.201 0s1.201-.844 1.201 0z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M18.982 13.637c-1.041 2.018-1.977 4.955-3.252-.818-1.533-6.946 5.784-4.092 3.252.818z"
  }), _react["default"].createElement("linearGradient", {
    id: "chipmunk_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 39.163,
    x2: 48.667,
    y2: 39.163
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#754029"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d49042"
  })), _react["default"].createElement("path", {
    fill: "url(#chipmunk_svg__d)",
    d: "M25.55 20.401s-.019 8.668-7.474 11.812c-3.107 1.311-8.715-.021-10.563-1.352-3.404-2.453.832 1.672-2.318.709-5.475-1.676 1.822 1.605-2.064.879-3.564-.668 2.607 1.727.723 1.607-2.408-.152-1.553.791.557.791 4.289 0 9.609 4.93 16.365 4.93 9.25 5.455 2.402 17.711 16.633 18.178 17.625-5.059 15.202-38.731-11.859-37.554z"
  }), _react["default"].createElement("linearGradient", {
    id: "chipmunk_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 8.947,
    y1: 47.371,
    x2: 37.408,
    y2: 47.371
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9b080"
  }), _react["default"].createElement("stop", {
    offset: 0.314,
    stopColor: "#f0c99b"
  }), _react["default"].createElement("stop", {
    offset: 0.503,
    stopColor: "#ffdaad"
  })), _react["default"].createElement("path", {
    fill: "url(#chipmunk_svg__e)",
    d: "M27.71 37.813c-6.83 3.586-13.791-.238-18.763-1.734 5.033 2.348 9.199 4.918 12.961 4.811-3.137 7.959 6.675 20.951 15.5 17.066-8.192-.278-13.193-13.958-9.698-20.143z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M28.962 22.979c-1.471-.275-3.451-.098-1.938.543 13.021 5.5 18.021 15.838 15.283 29.436-.375 1.859 1.879-.578 2.736-3.426 3.741-12.409-1.663-23.866-16.081-26.553z"
  }), _react["default"].createElement("linearGradient", {
    id: "chipmunk_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 24.753,
    y1: 38.803,
    x2: 44.411,
    y2: 38.803
  }, _react["default"].createElement("stop", {
    offset: 0.497,
    stopColor: "#ffdaad"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#f0c99b"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9b080"
  })), _react["default"].createElement("path", {
    fill: "url(#chipmunk_svg__f)",
    d: "M26.503 23.162c-1.218-.395-2.552 1.064-1.15 1.703 12.07 5.5 17.638 15.035 15.099 28.633-.348 1.861 2.17 1.09 2.846-1.791 3.629-15.459-1.527-23.582-16.795-28.545z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M25.844 24.865c-1.191-.398.041 1.104 1.324 1.91 11.768 7.398 12.335 10.473 12.583 24.482.033 1.891.572 4.232 1.236 1.352 3.754-16.277-2.712-23.591-15.143-27.744z"
  }));
};

var _default = SvgChipmunk;
exports["default"] = _default;