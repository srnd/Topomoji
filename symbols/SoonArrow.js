"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSoonArrow = function SvgSoonArrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "soon-arrow_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 20,
    x2: 61,
    y2: 20
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e585e"
  }), _react["default"].createElement("stop", {
    offset: 0.32,
    stopColor: "#41444e"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#343240"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#soon-arrow_svg__a)",
    d: "M61 20L45 4v10H3v12h42v10z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M3.001 55.5c-.022-.359.178-.545.508-.545h1.953c.309 0 .477.17.53.506.185 1.05 1.051 1.59 2.516 1.59 1.52 0 2.234-.666 2.234-1.558 0-1.095-1.212-1.573-2.65-2.091-2.181-.781-4.842-1.655-4.842-4.93C3.25 45.524 5.652 44 8.173 44c2.5 0 4.842 1.393 5.09 4.418.022.357-.178.545-.508.545h-1.953c-.309 0-.476-.171-.529-.5-.18-1.018-.932-1.514-2.1-1.514-1.228 0-1.948.638-1.948 1.523 0 1.134 1.044 1.635 2.44 2.156 2.197.805 5.053 1.613 5.053 4.864 0 2.955-2.396 4.507-5.209 4.507C5.701 60 3.25 58.58 3.001 55.5zM14.855 52c0-4.5 3.5-8 7.867-8 4.365 0 7.866 3.5 7.866 8s-3.501 8-7.866 8c-4.367 0-7.867-3.5-7.867-8zm12.757 0c0-2.961-2.143-5.051-4.891-5.051-2.749 0-4.89 2.09-4.89 5.051s2.141 5.051 4.89 5.051c2.749 0 4.891-2.09 4.891-5.051zM32.004 52c0-4.5 3.5-8 7.866-8s7.866 3.5 7.866 8-3.5 8-7.866 8-7.866-3.5-7.866-8zm12.758 0c0-2.961-2.145-5.051-4.892-5.051-2.749 0-4.891 2.09-4.891 5.051s2.142 5.051 4.891 5.051c2.747 0 4.892-2.09 4.892-5.051zM58.538 44.297h1.948c.329 0 .514.188.514.523v14.36c0 .336-.185.522-.514.522h-1.348c-.271 0-.492-.104-.633-.336l-5.675-9.182v8.995c0 .336-.185.522-.515.522H50.37c-.331 0-.515-.187-.515-.522V44.82c0-.336.184-.523.515-.523h1.347c.27 0 .492.105.633.336l5.675 9.184V44.82c-.001-.336.184-.523.513-.523z"
  }));
};

var _default = SvgSoonArrow;
exports["default"] = _default;