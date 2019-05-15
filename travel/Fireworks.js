"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFireworks = function SvgFireworks(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "fireworks_svg__a",
    cx: 31.838,
    cy: 31.94,
    r: 15,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.176,
    stopColor: "#fa0",
    stopOpacity: 0.7
  }), _react["default"].createElement("stop", {
    offset: 0.939,
    stopColor: "#fa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#fireworks_svg__a)",
    d: "M16.837 31.932c0 20.016 30 20.006 30 0 .001-19.989-30-19.989-30 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFE3EF",
    d: "M30.337 31.939c0 2.002 3 2.001 3 0 .001-1.999-3-1.999-3 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFB700",
    d: "M25.865 51.217c.238-.646 4.34-14.646 4.34-14.646s-5.629 13.061-5.938 13.908c-.631 1.694 1.045 2.233 1.598.738zM12.361 37.209c.676-.146 14.627-4.241 14.627-4.241S13 35.264 12.123 35.461c-1.764.383-1.311 2.089.238 1.748zM16.81 18.615c.492.484 11.543 9.965 11.543 9.965s-9.57-10.498-10.217-11.126c-1.287-1.272-2.459.043-1.326 1.161zM37.508 12.486c-.211.66-3.639 14.842-3.639 14.842s5-13.319 5.268-14.18c.551-1.724-1.149-2.182-1.629-.662zM51.02 26.302c-.674.147-14.605 4.3-14.605 4.3s13.98-2.354 14.855-2.558c1.759-.387 1.3-2.091-.25-1.742zM46.666 45c-.494-.48-11.605-9.889-11.605-9.889S44.7 45.545 45.348 46.169c1.293 1.265 2.457-.056 1.318-1.169z"
  }), _react["default"].createElement("path", {
    fill: "#FF7B00",
    d: "M54.514 37.958c-.646-.206-14.535-3.495-14.535-3.495s13.053 4.848 13.898 5.104c1.689.531 2.127-1.144.637-1.609zM48.15 14.718c-.484.474-9.941 11.197-9.941 11.197s10.43-9.25 11.053-9.875c1.267-1.243.004-2.421-1.112-1.322zM8.958 25.758c.641.212 14.502 3.616 14.502 3.616S10.447 24.42 9.605 24.159c-1.686-.548-2.135 1.124-.647 1.599zM25.062 37.912S14.56 47.08 13.931 47.7c-1.277 1.231-.021 2.423 1.1 1.33.49-.467 10.031-11.118 10.031-11.118z"
  }), _react["default"].createElement("path", {
    fill: "#FF4D00",
    d: "M46.693 7.462c-.529.802-10.48 18.453-10.48 18.453S47.938 10.02 48.627 8.97c1.383-2.093-.713-3.356-1.934-1.508zM16.791 56.298c.551-.787 10.998-18.147 10.998-18.147S15.619 53.709 14.9 54.734c-1.44 2.057.617 3.377 1.891 1.564z"
  }), _react["default"].createElement("path", {
    fill: "red",
    d: "M57.492 20.629c2.252-1.093 1.09-3.253-.898-2.286-.863.419-18.385 10.515-18.385 10.515s18.158-7.678 19.283-8.229zM5.949 42.913c-2.285 1.028-1.186 3.223.83 2.313.873-.396 18.682-9.974 18.682-9.974S7.089 42.398 5.949 42.913z"
  }), _react["default"].createElement("path", {
    fill: "#FF4D00",
    d: "M60.385 30.376c-.957-.045-21.156.39-21.156.39s19.604 1.991 20.854 2.049c2.499.123 2.509-2.333.302-2.439zM3.861 30.973c-2.504 0-2.396 2.451-.188 2.451.959 0 21.113-1.41 21.113-1.41S5.111 30.973 3.861 30.973z"
  }), _react["default"].createElement("path", {
    fill: "red",
    d: "M57.469 44.796c-.828-.481-18.984-9.377-18.984-9.377s16.52 10.779 17.605 11.406c2.166 1.259 3.293-.919 1.379-2.029zM6.474 19.201c.83.48 18.986 9.377 18.986 9.377S8.939 17.798 7.857 17.172c-2.168-1.258-3.295.919-1.383 2.029z"
  }), _react["default"].createElement("path", {
    fill: "#FF4D00",
    d: "M35.207 38.602s7.26 18.388 7.781 19.527c1.041 2.284 3.219 1.166 2.297-.852-.398-.875-10.078-18.675-10.078-18.675zM18.623 6.576c.398.877 10.039 18.697 10.039 18.697s-7.221-18.401-7.74-19.545c-1.038-2.287-3.217-1.171-2.299.848z"
  }), _react["default"].createElement("path", {
    fill: "red",
    d: "M31.103 60.131c0 2.514 2.444 2.406 2.444.188-.002-.961-1.405-21.193-1.405-21.193s-1.039 19.75-1.039 21.005zM32.511 3.852c-.029-2.512-2.471-2.373-2.443-.156.01.96 1.66 21.177 1.66 21.177s.799-19.766.783-21.021z"
  }));
};

var _default = SvgFireworks;
exports["default"] = _default;