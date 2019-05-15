"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBackArrow = function SvgBackArrow(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "back-arrow_svg__a",
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
    fill: "url(#back-arrow_svg__a)",
    d: "M3 20L19 4v10h42v12H19v10z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M16.76 54.806c0 2.772-2.069 4.897-4.863 4.897H4.243c-.336 0-.522-.188-.522-.523V44.82c0-.335.187-.522.522-.522h5.881c2.636 0 4.545 1.776 4.545 4.159 0 .675-.207 1.325-.558 1.88 1.61.837 2.649 2.476 2.649 4.469zM6.747 47.137v2.606h4.432c.299-.299.465-.713.465-1.121 0-.864-.583-1.485-1.519-1.485H6.747zm6.987 7.504c0-1.243-.721-2.223-2.201-2.223H6.747v4.445h4.765c1.496 0 2.222-.984 2.222-2.222zM30.606 59.703H28.4c-.292 0-.501-.132-.589-.436l-.741-2.327h-5.911l-.742 2.327c-.088.304-.297.436-.589.436h-2.206c-.38 0-.562-.216-.436-.589l4.897-14.383c.088-.286.313-.435.604-.435h2.851c.291 0 .517.148.604.435l4.898 14.383c.128.373-.054.589-.434.589zm-4.44-5.601l-2.051-6.438-2.051 6.438h4.102zM31.323 52c0-4.501 3.361-8 8.027-8 3.438 0 6.377 2.118 7.324 5.211.093.357-.095.588-.452.588h-2.141c-.291 0-.468-.143-.594-.413-.688-1.496-2.283-2.437-4.138-2.437-3.021 0-5.001 2.09-5.001 5.051 0 2.96 1.98 5.051 5.001 5.051 1.854 0 3.45-.941 4.138-2.438.126-.27.303-.413.594-.413h2.141c.357 0 .55.215.457.545C45.766 57.843 42.812 60 39.351 60c-4.666 0-8.028-3.5-8.028-8zM59.839 59.703h-2.316c-.27 0-.479-.094-.634-.319l-5.265-6.917v6.714c0 .335-.188.522-.522.522H49.12c-.336 0-.521-.188-.521-.522V44.82c0-.336.186-.523.521-.523h1.981c.335 0 .522.188.522.523v6.287l5.045-6.492c.17-.219.357-.318.627-.318h2.316c.424 0 .589.287.324.633l-5.227 6.863 5.447 7.277c.25.352.108.633-.316.633z"
  }));
};

var _default = SvgBackArrow;
exports["default"] = _default;