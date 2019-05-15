"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgNotebookWithDecorativeCover = function SvgNotebookWithDecorativeCover(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#FFE982",
    d: "M57 4s0-2-2-2H15c-9.546 9.546 0 54 0 54s42 10.786 42-2V4z"
  }), _react["default"].createElement("path", {
    fill: "#FFEFA1",
    d: "M15 4h42v4H15zM15 12h42v4H15zM15 20h42v4H15zM15 28h42v4H15zM15 36h42v4H15zM15 44h42v4H15zM15 52h42v4H15z"
  }), _react["default"].createElement("linearGradient", {
    id: "notebook-with-decorative-cover_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 15,
    y1: 30,
    x2: 7,
    y2: 30
  }, _react["default"].createElement("stop", {
    offset: 0.3,
    stopColor: "#f9c802"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f0a000"
  })), _react["default"].createElement("path", {
    fill: "url(#notebook-with-decorative-cover_svg__a)",
    d: "M7 58V4c0-2 2-2 2-2h6v54l-8 2z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M55 56H9s-2 0-2 2v2c0 2 2 2 2 2h46s2 0 2-2v-6c0 2-2 2-2 2z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M55 57H9c-1 0-1 1-1 1v2s0 1 1 1h46a1 1 0 0 0 1-1v-3.25c-.5.25-1 .25-1 .25z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M8 58.752v.496L55.625 59zM8.037 57.752A1.333 1.333 0 0 0 8 58v.248L55.625 58l-47.588-.248zM8 59.752V60s.003.107.037.248L55.625 60 8 59.752z"
  }), _react["default"].createElement("linearGradient", {
    id: "notebook-with-decorative-cover_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 50,
    y1: 62,
    x2: 50,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0.097,
    stopColor: "#d98301"
  }), _react["default"].createElement("stop", {
    offset: 0.145,
    stopColor: "#f59e01"
  })), _react["default"].createElement("path", {
    fill: "url(#notebook-with-decorative-cover_svg__b)",
    d: "M49 2h2v60h-2z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M27.016 15.586h.344c.097 0 .146.051.146.146v4.535c0 .094-.051.145-.146.145h-.254c-.078 0-.14-.029-.176-.094l-2.131-3.475v3.424c0 .094-.051.145-.146.145h-.344c-.096 0-.146-.051-.146-.145v-4.535c0-.096.051-.146.146-.146h.254c.08 0 .139.029.176.094l2.132 3.475v-3.422c-.003-.096.048-.147.145-.147zM28.284 18a2.48 2.48 0 0 1 2.5-2.5c1.4 0 2.5 1.109 2.5 2.5 0 1.389-1.1 2.5-2.5 2.5a2.481 2.481 0 0 1-2.5-2.5zm4.362 0c0-1.061-.807-1.881-1.861-1.881-1.057 0-1.861.82-1.861 1.881 0 1.059.806 1.879 1.861 1.879 1.054 0 1.861-.82 1.861-1.879zM36.597 15.732v.314c0 .094-.053.145-.145.145h-1.141v4.076c0 .094-.051.145-.145.145h-.346c-.096 0-.146-.051-.146-.145v-4.076h-1.139c-.094 0-.145-.051-.145-.145v-.314c0-.096.051-.146.145-.146H36.449c.095 0 .148.051.148.146zM40.03 19.953v.314c0 .094-.051.145-.148.145h-2.5c-.094 0-.146-.051-.146-.145v-4.535c0-.096.053-.146.146-.146h2.467c.094 0 .146.051.146.146v.314c0 .094-.055.145-.146.145h-1.975v1.484h1.803c.094 0 .146.053.146.146v.309c0 .096-.055.146-.146.146h-1.803v1.529h2.008c.097.002.148.052.148.148zM40.542 19.139c-.008-.104.047-.154.143-.154h.35c.09 0 .139.049.146.145.066.492.48.75 1.068.75.557 0 .949-.281.949-.719 0-.465-.469-.666-1.002-.861-.719-.266-1.541-.523-1.541-1.492 0-.84.725-1.307 1.494-1.307.775 0 1.471.439 1.543 1.283.006.102-.047.154-.141.154H43.2c-.088 0-.139-.051-.148-.141-.061-.445-.422-.678-.902-.678-.484 0-.855.256-.855.688 0 .488.432.684.967.885.721.271 1.576.535 1.576 1.469 0 .846-.746 1.34-1.588 1.34-.88-.001-1.636-.468-1.708-1.362z"
  }));
};

var _default = SvgNotebookWithDecorativeCover;
exports["default"] = _default;