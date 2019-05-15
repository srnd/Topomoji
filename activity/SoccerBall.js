"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSoccerBall = function SvgSoccerBall(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "soccer-ball_svg__a",
    cx: 30.894,
    cy: 57.086,
    r: 32.617,
    gradientTransform: "translate(-5.887 -35.018) scale(1.0506)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.273,
    stopColor: "#fafdff"
  }), _react["default"].createElement("stop", {
    offset: 0.494,
    stopColor: "#f7fafc"
  }), _react["default"].createElement("stop", {
    offset: 0.673,
    stopColor: "#edf2f4"
  }), _react["default"].createElement("stop", {
    offset: 0.838,
    stopColor: "#dce3e7"
  }), _react["default"].createElement("stop", {
    offset: 0.927,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("circle", {
    fill: "url(#soccer-ball_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M22.089 12.359c-5.816-2.115-10.272-1.484-10.316-1.477l-.111-.742c.189-.027 4.69-.666 10.684 1.514l-.257.705zM57.338 20.422c-8.84-5.251-16.208-4.502-16.283-4.496l-.082-.745c.311-.036 7.698-.779 16.748 4.597l-.383.644zM40.483 43.646c-1.695-5.545-7.154-19.301-7.209-19.439l.697-.277c.055.139 5.525 13.924 7.229 19.498l-.717.218zM52.075 43.568l-.498-.562c5.986-5.302 7.555-12.46 7.569-12.53l.734.154c-.063.303-1.627 7.466-7.805 12.938zM33.951 52.506c-12.639-.529-19.337-4.51-19.616-4.679l.389-.642c.066.041 6.831 4.051 19.259 4.571l-.032.75zM9.924 37.555l-.664-.348c.039-.076 4.082-7.719 12.847-16.59l.533.527C13.954 29.938 9.964 37.48 9.924 37.555zM32.871 7.1c.015-.034 1.338-2.917 2.978-4.846-.293-.037-.586-.078-.883-.106-1.551 1.965-2.717 4.509-2.778 4.642l.683.31zM49.341 54.146c.773.237 1.681.354 2.424.411.264-.23.522-.466.777-.706-.748-.029-2.006-.123-2.98-.422l-.221.717zM39.702 57.297l-.721-.206c-.012.04-1.056 3.517-5.087 4.843a29.524 29.524 0 0 0 2.22-.223c2.774-1.732 3.577-4.377 3.588-4.414zM2.721 33.654l.742-.107c-.79-5.471-.126-9.804.699-12.729a29.764 29.764 0 0 0-1.769 6.346 34.33 34.33 0 0 0 .328 6.49z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M52.898 42.232c-1.242-.051-10.063-.896-13.209-1.938-1.053 1.244-8.396 9.688-10.584 11.416.771 1.035 4.313 5.938 8.661 8.188 1.377-.189 7.923-1.25 13.402-5.791 1.844-5.252 2.063-8.187 1.73-11.875zM43.621 15.55c-.843-1.243-6.344-8.375-10.219-10.063-1.668.273-9.891 1.891-14.641 5.406-.255 2.906-.273 9.702.469 13.515 1.534.283 9.686 1.771 15.73 2.865 1.438-2 7.07-9.584 8.661-11.723zM13.33 8.526a30.082 30.082 0 0 0-9.024 11.929c1.553-2.67 6.073-8.867 8.394-9.937-.126-1.046.371-1.64.63-1.992zM11.611 34.107c-3.25-.396-8.07-2.117-8.714-2.5-.566 1.166-.686 1.943-.814 2.498.551 7.951 4.199 15.047 9.748 20.092.149-1.861 4.884-4.689 5.649-5.258-2.875-4.187-5.496-13.353-5.869-14.832zM54.294 11.929c1.187 1.684 1.03 4.012-.532 6.323 3.438 5.531 4.93 13.691 5.037 14.652 1.391-.484 2.963.113 3.15.797a29.885 29.885 0 0 0-7.655-21.772z"
  }), _react["default"].createElement("radialGradient", {
    id: "soccer-ball_svg__b",
    cx: 555.934,
    cy: -16.032,
    r: 22.068,
    gradientTransform: "matrix(.3583 .4654 -.7924 .61 -189.208 -228.648)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#soccer-ball_svg__b)",
    d: "M30.595 30.574c-9.658 7.435-21.027 8.863-25.393 3.19-4.368-5.673-.08-16.298 9.578-23.732s21.026-8.863 25.393-3.19c4.369 5.673.08 16.298-9.578 23.732z"
  }));
};

var _default = SvgSoccerBall;
exports["default"] = _default;