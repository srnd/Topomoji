"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCloud = function SvgCloud(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "cloud_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 50.096,
    x2: 32.001,
    y2: 13.905
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d9f5ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud_svg__a)",
    d: "M13.994 50.096c-1.065 0-2.122-.16-3.138-.484-4.099-1.29-6.855-4.924-6.855-9.039 0-2.746 1.252-5.36 3.427-7.172a9.856 9.856 0 0 1 1.829-1.209l-.033-.004.665-2.203c1.653-5.5 6.998-9.34 12.997-9.34.599 0 1.213.046 1.933.144.55.076 1.094.181 1.626.32l.263-.457c2.422-4.161 7.025-6.747 12.009-6.747 7.568 0 13.725 5.868 13.725 13.08 0 .355-.023.697-.056 1.043l-.018.255c.581.211 1.148.472 1.7.774C57.725 31.065 60 34.809 60 38.819c0 5.283-3.772 9.802-9.174 10.981-.883.195-1.778.295-2.654.295H13.994z"
  }), _react["default"].createElement("linearGradient", {
    id: "cloud_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 52,
    x2: 32.001,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#8fbacc"
  }), _react["default"].createElement("stop", {
    offset: 0.256,
    stopColor: "#9cc6d8"
  }), _react["default"].createElement("stop", {
    offset: 0.663,
    stopColor: "#abd4e6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b0d9eb"
  })), _react["default"].createElement("path", {
    fill: "url(#cloud_svg__b)",
    d: "M38.716 15.809c6.475 0 11.724 5.004 11.724 11.176 0 .303-.023.595-.049.887a12.586 12.586 0 0 0-7.107 2.83 10.141 10.141 0 0 1 4.887-1.246 10.014 10.014 0 0 1 4.896 1.252C56.015 32.324 58 35.347 58 38.819c0 4.448-3.257 8.171-7.621 9.126-.711.156-1.447.248-2.207.248H13.994a8.244 8.244 0 0 1-2.505-.392c-3.187-.999-5.485-3.856-5.485-7.229 0-2.294 1.061-4.344 2.74-5.738a8.159 8.159 0 0 1 2.62-1.454 8.403 8.403 0 0 1 2.63-.429c2.578 0 4.863 1.166 6.326 2.973h.075c-1.698-2.978-4.871-5.079-8.587-5.415 1.383-4.593 5.814-7.96 11.077-7.96.563 0 1.108.051 1.647.125 1.071.148 2.088.427 3.042.83 3.546 1.508 6.136 4.669 6.713 8.454l.003-.064c0-4.312-2.321-8.106-5.837-10.319 2.006-3.435 5.844-5.766 10.263-5.766m0-3.809c-5.392 0-10.396 2.641-13.275 6.951-.109-.019-.221-.033-.333-.049a16.313 16.313 0 0 0-2.222-.162c-6.885 0-13.021 4.406-14.92 10.72l-.455 1.503c-.489.299-.958.636-1.4 1.005C3.501 34.139 2 37.274 2 40.572c0 4.94 3.31 9.299 8.234 10.848 1.21.385 2.478.58 3.76.58H48.17c1.029 0 2.076-.113 3.111-.344C57.592 50.274 62 44.998 62 38.819c0-4.692-2.656-9.067-6.934-11.416a16.116 16.116 0 0 0-.627-.323v-.096C54.439 18.723 47.384 12 38.716 12z"
  }));
};

var _default = SvgCloud;
exports["default"] = _default;