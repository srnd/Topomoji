"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBustsInSilhouette = function SvgBustsInSilhouette(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M58.72 42.578c-2.202-2.652-13.425-5.585-13.559-8.768-.08-1.638 6.785-3.063 8.355-14.519 3.166-23.05-30.198-23.063-27.033.001 1.574 11.455 8.439 12.876 8.353 14.518-.178 3.235-11.349 6.117-13.556 8.768C18.281 46.185 18 52 18 52h44s-.283-5.809-3.28-9.422z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M42.72 52.578c-2.202-2.652-13.425-5.585-13.559-8.768-.08-1.638 6.785-3.063 8.355-14.519 3.166-23.05-30.198-23.063-27.033.001 1.574 11.455 8.439 12.876 8.353 14.518-.178 3.235-11.349 6.117-13.556 8.768C2.281 56.185 2 62 2 62h44s-.283-5.809-3.28-9.422z"
  }));
};

var _default = SvgBustsInSilhouette;
exports["default"] = _default;