"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgChequeredFlag = function SvgChequeredFlag(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M62 45c-4.666-1.5-9.332-1.875-13.999-1.688L40.568 36 34 45c-4.667.75-9.333 1.5-14 1.688 0 0-3-7.688-14-2.688V5c4.667 1.5 9.333 1.875 14 1.688 0 0 4.938.645 7.407.313C29.604 6.706 34 5 34 5c4.667-.75 9.33-1.688 14-1.688C48 3.313 52 7 61 6c0 3.333 1 9 1 9v30z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M34 15c-4.667.75-9.333 1.5-14 1.688v-10C24.667 6.5 29.333 5.75 34 5v10zM62 15c-4.667-1.5-9.333-1.875-14-1.688v-10c4.843 0 9.333.188 14 1.688v10zM20 26.688c-4.667.187-9.333-.188-14-1.688V15c4.667 1.5 9.333 1.875 14 1.688v10zM48 23.313c-4.667.187-9.333.937-14 1.687V15c4.667-.75 9.333-1.5 14-1.688v10.001zM34 35c-4.667.75-9.333 1.5-14 1.688v-10c4.667-.188 9.333-.938 14-1.688v10zM62 35c-4.667-1.5-9.333-1.875-14-1.688v-10c4.667-.187 9.333.188 14 1.688v10zM20 46.688c-4.667.187-9.333-.188-14-1.688V35c4.667 1.5 9.333 1.875 14 1.688v10zM48 43.313c-4.667.187-9.333.937-14 1.687V35c4.667-.75 9.333-1.5 14-1.688v10.001z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M2 4.117v57.881L6 62V4.121c-.001-2.826-4.001-2.828-4-.004z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M2.995 2.271c.566.323 1.001.909 1.001 1.823l.007 57.879L6 61.975V4.094c-.001-1.91-1.821-2.498-3.005-1.823z"
  }));
};

var _default = SvgChequeredFlag;
exports["default"] = _default;