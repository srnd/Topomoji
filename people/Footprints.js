"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFootprints = function SvgFootprints(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "footprints_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 18.246,
    y1: 48.013,
    x2: 18.246,
    y2: 2.136
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#73422f"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#94553c"
  })), _react["default"].createElement("path", {
    fill: "url(#footprints_svg__a)",
    d: "M25.4 13.556c3.698 4.497-5.06 8.168-4.636 12.865.531 5.923 5.321 3.928 6.449 10.515 2.445 14.28-11.604 13.636-12.225 3.139-.718-12.136-7.551-15.771-5.67-19.885C14.74 8.349 22.286 9.77 25.4 13.556z"
  }), _react["default"].createElement("path", {
    fill: "#94553C",
    d: "M22.515 2.003c5.764.323 4.723 10.469.156 8.479-2.355-1.028-3.252-8.653-.156-8.479z"
  }), _react["default"].createElement("path", {
    fill: "#94553C",
    d: "M17.584 4.048c2.78-.496 2.74 3.952.289 3.783-.8-.056-2.883-3.32-.289-3.783zM13.901 6.473c2.746-.649 2.741 3.95.286 3.783-.799-.057-3.747-2.968-.286-3.783zM10.167 10.074c2.223-1.329 3.671 2.81 1.448 3.326-.725.169-4.249-1.647-1.448-3.326zM8.451 17.217c-2.616-.165-1.296-3.711.826-2.987.693.237 2.469 3.193-.826 2.987z"
  }), _react["default"].createElement("linearGradient", {
    id: "footprints_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 45.755,
    y1: 62,
    x2: 45.755,
    y2: 16.622
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#73422f"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#94553c"
  })), _react["default"].createElement("path", {
    fill: "url(#footprints_svg__b)",
    d: "M38.6 27.735c-3.697 4.497 5.061 8.168 4.637 12.865-.531 5.923-5.321 3.928-6.449 10.515-2.445 14.28 11.604 13.636 12.225 3.139.718-12.136 7.551-15.771 5.67-19.885-5.422-11.841-12.968-10.42-16.083-6.634z"
  }), _react["default"].createElement("path", {
    fill: "#94553C",
    d: "M41.485 16.183c-5.764.324-4.723 10.469-.157 8.479 2.357-1.028 3.252-8.653.157-8.479z"
  }), _react["default"].createElement("path", {
    fill: "#94553C",
    d: "M46.416 18.228c-2.78-.496-2.741 3.952-.289 3.783.801-.056 2.884-3.321.289-3.783zM50.1 20.652c-2.746-.649-2.741 3.95-.287 3.783.798-.056 3.748-2.967.287-3.783zM53.833 24.254c-2.223-1.329-3.671 2.81-1.449 3.326.725.169 4.251-1.647 1.449-3.326zM55.55 31.396c2.616-.165 1.296-3.711-.827-2.987-.693.237-2.468 3.194.827 2.987z"
  }));
};

var _default = SvgFootprints;
exports["default"] = _default;