"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBrain = function SvgBrain(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "brain_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 44.084,
    y1: 40.863,
    x2: 49.006,
    y2: 55.188
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bf5858"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#c15b5b"
  }), _react["default"].createElement("stop", {
    offset: 0.693,
    stopColor: "#c66666"
  }), _react["default"].createElement("stop", {
    offset: 0.8,
    stopColor: "#c96b6b"
  })), _react["default"].createElement("path", {
    fill: "url(#brain_svg__a)",
    d: "M34.6 46.612c1.973 7.969 20.947 14.305 22.697-.718-8.684-6.008-18.902-1.698-22.697.718z"
  }), _react["default"].createElement("linearGradient", {
    id: "brain_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 16.723,
    y1: 13.013,
    x2: 43.875,
    y2: 46.115
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffb3b3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f99"
  })), _react["default"].createElement("path", {
    fill: "url(#brain_svg__b)",
    d: "M15.08 40.038C-.121 47.315-5.641 20.86 18.307 11.715c5.01-4.529 17.408-2.397 18.682-.71 10.699-1.243 14.945 7.191 14.945 7.191 8.406 2.486 7.982 11.925 7.982 11.925 5.094 8.612.34 21.99-9.766 15.864 0 0-8.406-1.156-13.842 2.041-8.958 5.271-19.701 4.995-21.228-7.988z"
  }), _react["default"].createElement("path", {
    fill: "#D67171",
    d: "M15.08 40.038C4.391 45.156-1.512 33.595 4.258 23.095c-6.115 18.889 9.285 21.563 17.881 9.487 1.564 1.689 12.713-3.478 12.295-5.611 1.012 3.149 5.533.878 7.344-2.077.486 6.346-16.803 6.56-25.088 14.592.713 15.199 15.57 11.126 18.162 6.971 9.512-3.398 13.279-1.545 15.611-3.002 2.422 5.066 14.549 2.723 9.453-13.333 5.094 8.612.459 22.267-9.646 16.141 0 0-8.518-1.128-13.953 2.069-8.96 5.271-19.71 4.689-21.237-8.294z"
  }), _react["default"].createElement("path", {
    fill: "#D67171",
    d: "M30.086 26.042c-.1-7.208 7.031-9.716 6.902-15.037-1.355 5.898-9.849 7.933-6.902 15.037zM14.336 21.644l.674-.093c-2.422-4.861 3.086-4.721 3.297-9.835-1.635 4.518-6.657 4.973-3.971 9.928z"
  }), _react["default"].createElement("path", {
    fill: "#D67171",
    d: "M7.307 24.743c4.498-5.738 6.207-.18 11.559-3.592-5.167 1.522-8.364-3.03-11.559 3.592zM35.574 21.855l.988.287c3.98-7.086 7.021-.75 13.211-4.634-6.345 1.842-10.271-3.663-14.199 4.347zM13.086 40.522l-.047-.848c-6.527-1.15-2.477-5.261-7.141-9.009 3.135 4.434-.037 9.004 7.188 9.857zM25.752 33.336l-.264-.743c-5.477 1.674-3.361-3.705-8.057-5.144 3.665 2.688 2.37 8.121 8.321 5.887zM59.916 30.121c-4.955 4.349-8.289-1.674-13.117-.958l-.217.736c5.348-.496 9.023 6.115 13.334.222z"
  }), _react["default"].createElement("path", {
    fill: "#D67171",
    d: "M47.061 25.5c-1.611 3.874.344 6.189-4.424 8.378-6.178 2.84-15.398 2.142-20.498 7.43l.51.676c5.602-4.816 15.047-4.57 20.822-7.429 4.951-2.449 3.115-5.378 3.59-9.055zM13.084 32.007c1.17-8.036 6.984-4.958 10.475-8.489l-.162-1.011c-4.461 3.818-10.043.437-11.137 9.229l.824.271zM29.852 12.444l-.563-.184c-.225 5.974-4.197 3.814-6.441 7.189v.996c3.115-3.73 7.127-1.729 7.004-8.001zM44.49 18.2l-.143.693c6.563-.323 4.65 4.635 8.594 6.987l1.092-.101c-4.431-3.354-2.693-8.34-9.543-7.579zM28.25 27.439s-3.146-2.696-4.254 1.645c1.781-2.29 4.254-1.645 4.254-1.645zM38.225 24.87s.078-5.146-4.762-2.973c3.469.04 4.762 2.973 4.762 2.973z"
  }), _react["default"].createElement("path", {
    fill: "#D67171",
    d: "M55.588 24.104s-4.652.439-2.16 4.918c-.348-3.37 2.16-4.918 2.16-4.918zM28.309 10.641s.359 3.782 3.682 1.77c-2.511.272-3.682-1.77-3.682-1.77zM15.064 34.292s-1.225-5.182-4.877-1.519c3.018-1.027 4.877 1.519 4.877 1.519zM22.439 44.081s2.15-3.611-2.109-4.195c2.402 1.547 2.109 4.195 2.109 4.195zM33.5 36.968c.273-1.15 2.512-.075 2.248 4.25-1.037-3.41-2.523-3.098-2.248-4.25zM35.557 47.126c-.342 1.313-2.883.021-2.471-4.93 1.102 3.937 2.814 3.617 2.471 4.93zM49.865 44.905c-1.262-.449.211-2.914 5.045-2.104-3.959.802-3.779 2.557-5.045 2.104zM33.42 29.28c.514 1.176 2.701-.447 1.59-5.014-.455 3.862-2.106 3.842-1.59 5.014zM17.104 14.314l-.414.982c7.232 1.17 5.242 8.181 8.188 12.402l.77-.499c-3.224-5.284-.777-11.353-8.544-12.885zM49.186 40.58c4.748-4.279 7.318.938 11.49.759l.381-.717c-4.994-.197-7.252-5.467-12.314-.679l.443.637z"
  }), _react["default"].createElement("path", {
    fill: "#D67171",
    d: "M49.457 43.118s1.674-3.891-2.676-3.722c2.617 1.093 2.676 3.722 2.676 3.722zM26.33 43.278c4.5 3.041-1.9 4.546-2.031 7.219l1.025.387c.428-2.354 6.676-5.359 1.006-7.606zM43.623 33.743l-.586.479c3.529 3.998-2.174 4.105-1.783 8.533 1.131-4.003 6.584-4.814 2.369-9.012zM38.441 13.869c3.578-1.28 5.723 2.09 9.371.871-3.173.31-5.148-3.808-9.371-.871z"
  }));
};

var _default = SvgBrain;
exports["default"] = _default;