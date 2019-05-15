"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGear = function SvgGear(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "gear_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 10.789,
    y1: 10.789,
    x2: 53.214,
    y2: 53.214
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#gear_svg__a)",
    d: "M60.951 39.15l-6.649-4.231c.254-1.923.262-3.887.007-5.839l6.645-4.228c.913-.58 1.304-1.914.87-2.965l-1.582-3.82c-.436-1.051-1.657-1.717-2.713-1.482l-7.694 1.711a22.371 22.371 0 0 0-4.125-4.135l1.707-7.688c.237-1.057-.432-2.277-1.48-2.712l-3.82-1.583c-1.053-.436-2.387-.044-2.965.869l-4.231 6.65a22.488 22.488 0 0 0-5.842-.006L24.852 3.05c-.58-.911-1.916-1.306-2.965-.868l-3.822 1.582c-1.049.434-1.715 1.655-1.481 2.711l1.711 7.692a22.315 22.315 0 0 0-4.135 4.126l-7.686-1.709c-1.056-.235-2.274.431-2.709 1.481l-1.582 3.82c-.438 1.051-.048 2.385.866 2.966l6.648 4.231a22.488 22.488 0 0 0-.006 5.842L3.047 39.15c-.914.58-1.305 1.912-.868 2.965l1.584 3.82c.434 1.049 1.653 1.716 2.711 1.481l7.693-1.709a22.39 22.39 0 0 0 4.125 4.133l-1.709 7.686c-.237 1.055.431 2.275 1.479 2.711l3.822 1.582c1.051.436 2.385.045 2.967-.867l4.228-6.65c1.927.254 3.892.262 5.845.006l4.227 6.646c.58.912 1.916 1.303 2.967.867l3.82-1.582c1.049-.436 1.716-1.654 1.48-2.711l-1.711-7.696a22.344 22.344 0 0 0 4.132-4.123l7.688 1.708c1.055.236 2.277-.431 2.711-1.481l1.584-3.82c.433-1.053.042-2.386-.871-2.966zm-21.868 5.117c-6.775 3.911-15.44 1.592-19.352-5.184-3.911-6.775-1.589-15.438 5.186-19.349 6.773-3.911 15.438-1.59 19.35 5.186 3.911 6.773 1.589 15.436-5.184 19.347z"
  }), _react["default"].createElement("linearGradient", {
    id: "gear_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 19.98,
    y1: 19.98,
    x2: 44.02,
    y2: 44.02
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#gear_svg__b)",
    d: "M23.502 17.283c-8.127 4.692-10.912 15.087-6.221 23.213 4.693 8.128 15.088 10.913 23.216 6.222 8.128-4.692 10.913-15.086 6.221-23.213-4.693-8.13-15.087-10.915-23.216-6.222zm13.277 22.994c-4.572 2.639-10.418 1.072-13.057-3.498-2.641-4.571-1.074-10.417 3.498-13.056 4.57-2.64 10.418-1.072 13.056 3.498 2.641 4.572 1.075 10.418-3.497 13.056z"
  }), _react["default"].createElement("linearGradient", {
    id: "gear_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 22.808,
    y1: 22.808,
    x2: 41.194,
    y2: 41.194
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#gear_svg__c)",
    d: "M25.5 20.745c-6.217 3.588-8.346 11.539-4.758 17.753 3.59 6.217 11.539 8.348 17.757 4.759 6.217-3.589 8.346-11.54 4.758-17.756-3.589-6.215-11.54-8.346-17.757-4.756zm10.499 18.183a8 8 0 0 1-10.927-2.929A7.995 7.995 0 0 1 28 25.075a8 8 0 1 1 7.999 13.853z"
  }));
};

var _default = SvgGear;
exports["default"] = _default;