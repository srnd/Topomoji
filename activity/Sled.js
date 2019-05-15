"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSled = function SvgSled(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M4.812 41.684c.09 10.197 5.014 13.359 14.262 6.334 1.253-.953 28.373-19.029 28.839-19.347.205-.14 1.421.795 1.421.904 0 1.143-28.818 19.558-29.774 20.317-9.676 7.703-16.814 1.965-17.556-7.861-.129-1.707 2.797-1.808 2.808-.347z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M4.812 41.684c.371 10.189 6.105 14.053 15.353 7.027 1.255-.953 28.422-19.001 28.928-19.228.508-.226.508 1.763.196 2.034-.313.271-27.682 18.309-28.635 19.068-9.677 7.703-16.816 1.965-17.559-7.863-.127-1.704 1.676-2.216 1.717-1.038z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M18.303 36.832c.769.49 13.556 8.908 15.285 9.994.21.135.364 1.672.194 1.832-.229.217-1.121.904-1.214.814-3.554-3.422-14.763-10.865-15.727-11.5-.408-.267.959-1.461 1.462-1.14zM39.559 22.681c.768.49 13.554 8.909 15.283 9.996.212.131.363 1.67.195 1.831-.228.217-1.121.904-1.215.813-3.553-3.42-14.761-10.866-15.727-11.499-.407-.268.961-1.462 1.464-1.141z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M17.31 49.525c.089 10.197 5.012 13.359 14.26 6.334 1.253-.953 28.373-19.027 28.84-19.348.204-.139 1.42.795 1.42.905 0 1.142-28.82 19.558-29.773 20.317-9.676 7.705-16.816 1.965-17.556-7.863-.129-1.704 2.794-1.807 2.809-.345z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M61.59 37.324c-.155.07-2.845 1.832-6.522 4.263l-1.304-7.884-1.303.549 1.314 8.189c-6.968 4.609-16.554 10.994-19.92 13.283l-1.288-7.822-1.299.547 1.393 8.102c-9.246 7.027-14.982 3.164-15.352-7.025-.043-1.178-1.845-.668-1.718 1.039.741 9.828 7.882 15.566 17.557 7.861.954-.76 28.324-18.797 28.637-19.066.313-.273.313-2.26-.195-2.036z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M32.568 49.473c.187.129.013-1.756-.199-1.887-1.73-1.086-14.519-9.506-15.284-9.995-.505-.322-.459 1.322-.049 1.591.859.563 8.609 5.625 13.112 8.645l1.322 8.082 1.19.643-1.197-7.838c.433.294.807.55 1.105.759zM53.624 33.436c-1.73-1.087-14.518-9.506-15.284-9.995-.505-.322-.457 1.323-.05 1.59.854.562 8.542 5.582 13.054 8.606l1.253 8.093 1.179.712-1.116-7.918c.457.31.852.58 1.163.798.186.13.013-1.754-.199-1.886z"
  }), _react["default"].createElement("linearGradient", {
    id: "sled_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 40.626,
    y1: 40.437,
    x2: 28.517,
    y2: 30.84
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#916958"
  }), _react["default"].createElement("stop", {
    offset: 0.265,
    stopColor: "#976d5b"
  }), _react["default"].createElement("stop", {
    offset: 0.613,
    stopColor: "#a77763"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c2886f"
  })), _react["default"].createElement("path", {
    fill: "url(#sled_svg__a)",
    d: "M44.123 20.008c-.768.49-28.214 18.875-29.944 19.961-.213.133-.197 1.108-.174 1.341.492 4.955 6.099 9.949 13.652 9.162 3.878-3.035 30.161-21.816 30.161-21.816s-13.192-8.969-13.695-8.648z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M57.818 28.657S29.228 47.844 27.496 48.93c-4.367 1-12.999-2.936-13.4-8.838-1.62 5.842 7.496 12.01 13.562 10.381 3.113-2.178 28.946-19.496 29.996-20.186.409-.268.164-1.63.164-1.63z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M46.564 21.278L14.799 42.801l.099.328 32.03-21.628zM50.063 23.496L17.136 45.859l.099.329 33.148-22.483zM53.799 25.956L20.821 48.383l.099.328 33.252-22.507z"
  }));
};

var _default = SvgSled;
exports["default"] = _default;