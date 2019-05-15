"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMapleLeaf = function SvgMapleLeaf(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "maple-leaf_svg__a",
    cx: 30.058,
    cy: 45.144,
    r: 27.008,
    gradientTransform: "matrix(.9813 0 0 1.2617 2.505 -11.813)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.134,
    stopColor: "#fb8100"
  }), _react["default"].createElement("stop", {
    offset: 0.336,
    stopColor: "#f16c00"
  }), _react["default"].createElement("stop", {
    offset: 0.58,
    stopColor: "#e14a00"
  }), _react["default"].createElement("stop", {
    offset: 0.856,
    stopColor: "#ca1b00"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bd0000"
  })), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#maple-leaf_svg__a)",
    d: "M60 37.443c-2.743-3.051-13.725-3.168-13.725-3.168-1.025-3.317 8.699-6.086 10.648-8.919-5.606-2.046-1.706-7.858-.204-11.146.376-.822-8.499 4.348-10.046-.163-3.014 6.738-9.031 11.411-9.031 11.411-2.132-2.026 4.43-9.786 2.046-14.767C34.228 15.328 33.387 3.429 32 2c-1.387 1.429-2.228 13.328-7.688 8.691-2.384 4.98 3.178 12.74 1.046 14.767 0 0-5.018-4.673-8.031-11.411-1.548 4.511-10.423-.659-10.047.163 1.502 3.288 5.401 9.101-.204 11.146 1.949 2.833 9.379 5.886 8.648 8.919 0 0-8.981.117-11.725 3.168 2.272 3.275 12.083 2.23 6.763 8.246 3.55-.004 7.355-.625 9.931.365-.702 1.92-1.408 4.442-1.783 6.694 4.07.374 8.147-2.598 13.09-7.766 4.942 5.168 9.02 8.14 13.09 7.766-.375-2.252-1.081-4.774-1.783-6.694 2.575-.99 6.381-.369 9.931-.365-5.321-6.015 4.49-4.97 6.762-8.246z"
  }), _react["default"].createElement("radialGradient", {
    id: "maple-leaf_svg__b",
    cx: 34.205,
    cy: 54.825,
    r: 40.915,
    gradientTransform: "matrix(1.0362 0 0 1.0345 -3.055 -8.947)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bd0000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#bd0000"
  })), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "url(#maple-leaf_svg__b)",
    d: "M60 37.443c-14.89 3.237-20.937 2.942-27.471 7.641 10.1-18.629 13.396-17.232 23.633-30.429-8.513 9.94-14.699 12.335-23.701 28.903 0 0-2.626-21.777-.461-40.317-3.564 15.627-.312 40.172-.312 40.172S22.232 27.391 7.765 14.596c5.834 5.904 15.946 17.675 23.706 30.17C24.772 41.355 12.88 40.02 4 37.443c9.58 4.4 21.896 3.815 27.77 8.631.722 7.57 3.434 14.152 4.978 15.926 1.468-.09 1.628-1.115 1.628-1.115-.82-2.716-2.804-1.881-5.872-14.8C39.98 40.354 54.489 40.902 60 37.443z"
  }));
};

var _default = SvgMapleLeaf;
exports["default"] = _default;