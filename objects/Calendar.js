"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCalendar = function SvgCalendar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "calendar_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 26,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f33"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#ee2125"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf000a"
  })), _react["default"].createElement("path", {
    fill: "url(#calendar_svg__a)",
    d: "M62 3.5c0-.825-.675-1.5-1.5-1.5h-57C2.675 2 2 2.675 2 3.5V26h60V3.5z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2 26v34.5c0 .825.675 1.5 1.5 1.5h57c.825 0 1.5-.675 1.5-1.5V26H2z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M53 7.5h3v3h-3zM48 7.5h3v3h-3zM43 7.5h3v3h-3zM53 12.5h3v3h-3zM48 12.5h3v3h-3zM43 12.5h3v3h-3zM53 17.5h3v3h-3zM48 17.5h3v3h-3zM43 17.5h3v3h-3zM5.835 16.238c-.017-.234.107-.356.328-.356h1.085c.206 0 .33.122.359.341.109 1.065.8 1.472 1.745 1.472 1.044 0 1.767-.497 1.767-1.585V8.95c0-.22.122-.339.345-.339h1.076c.223 0 .343.119.343.339v7.159c0 2.244-1.711 3.279-3.53 3.279-1.737.001-3.365-.938-3.518-3.15zM14.731 15.987V8.95c0-.22.122-.339.345-.339h1.076c.223 0 .345.119.345.339v6.932c0 1.164.723 1.813 2.073 1.813 1.352 0 2.074-.648 2.074-1.813V8.95c0-.22.124-.339.348-.339h1.073c.223 0 .347.119.347.339v7.037c0 2.214-1.713 3.401-3.842 3.401-2.126.001-3.839-1.187-3.839-3.401zM30.481 17.871v.981c0 .219-.124.339-.348.339H24.757c-.221 0-.346-.12-.346-.339V8.95c0-.22.125-.339.346-.339h1.075c.226 0 .348.119.348.339v8.58h3.953c.224 0 .348.12.348.341zM38.102 9.02l-3.341 5.406v4.427c0 .219-.122.339-.345.339H33.34c-.223 0-.345-.12-.345-.339v-4.44L29.662 9.02c-.145-.236-.039-.408.229-.408h1.244a.43.43 0 0 1 .406.233l2.339 3.917 2.339-3.917a.437.437 0 0 1 .406-.233h1.244c.271-.001.378.171.233.408z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M23.428 31.484h3.495c.545 0 .85.307.85.85v23.332c0 .545-.305.85-.85.85h-3.219c-.545 0-.85-.305-.85-.85V36.438l-4.836 2.654c-.58.341-1.018.061-1.018-.58v-3.119c0-.448.178-.787.579-1.019l4.794-2.621c.34-.203.65-.269 1.055-.269zM31.666 31.484h14.482c.547 0 .852.307.852.85v2.79c0 .377-.074.688-.207 1.055l-8.001 19.692c-.169.446-.509.645-.982.645h-3.441c-.617 0-.886-.377-.645-.985l7.848-19.326h-9.905c-.543 0-.847-.303-.847-.846v-3.024c-.001-.544.303-.851.846-.851z"
  }));
};

var _default = SvgCalendar;
exports["default"] = _default;