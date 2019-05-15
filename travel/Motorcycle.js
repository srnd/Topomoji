"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMotorcycle = function SvgMotorcycle(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.102 30.87l-.146 2.107.846 1.088 3.222.323s-.825 2.276-1.497 2.345c-9.909 1.01-5.923-4.095-2.425-5.863z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M18.484 28.344s0-2.563-.813-4.344c-7.499 2.5-7.499 8.448-7.499 8.448s3.031-2.698 8.312-4.104z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M10.98 48.572a4.447 4.447 0 1 0 0 8.894 4.447 4.447 0 0 0 0-8.894zm0 8.157a3.708 3.708 0 1 1 0-7.418 3.708 3.708 0 1 1 0 7.418z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M12.113 53.331l1.996-.844 3.361-.185-.105-.324-3.047.167-.156-.482 2.563-1.656-.104-.324-2.828 1.826L11.68 52l-.186-2.16.863-3.254h-.34l-.783 2.95h-.508l-.783-2.95h-.34l.863 3.254L10.28 52l-2.112-.491-2.827-1.826-.105.324 2.563 1.656-.156.482-3.048-.167-.105.324 3.361.185 1.997.844-1.119 1.857-2.611 2.125.275.2 2.367-1.927.411.299-1.101 2.847.275.2 1.215-3.14 1.42-1.639 1.42 1.639 1.214 3.14.276-.2-1.102-2.848.411-.298 2.367 1.927.276-.2-2.611-2.125-1.118-1.857z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 10.98,
    cy: 53.02,
    r: 1.627
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M10.98 44.538a8.482 8.482 0 1 0 .001 16.963 8.482 8.482 0 0 0-.001-16.963zm0 14.292a5.811 5.811 0 1 1 0-11.623 5.811 5.811 0 0 1 0 11.623z"
  }), _react["default"].createElement("radialGradient", {
    id: "motorcycle_svg__a",
    cx: 10.98,
    cy: 53.02,
    r: 8.98,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.644,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.918,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#343040"
  })), _react["default"].createElement("path", {
    fill: "url(#motorcycle_svg__a)",
    d: "M10.98 44.039a8.98 8.98 0 1 0 .002 17.96 8.98 8.98 0 0 0-.002-17.96zm0 15.133a6.153 6.153 0 1 1 .002-12.306 6.153 6.153 0 0 1-.002 12.306z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M54.09 52.303l-17.484 2.916v-3.43l16.373-3.667z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M53.877 35.512s1.969-.687 2.006-.856c.314-1.442 2.322-2.694 2.094-2.776-2.247-.804-4.643 2.179-4.1 3.632z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.422 38.256c3.84-1.247 7.979-.865 8.986-.732.793.105-.092 1.926 3.813 5.766 2.486 2.444-1.883-3.337-1.572-6.432.025-.266-4.352-.883-4.285-1.422.262-2.061 3.049-3.136 3.232-3.688.326-.976-7.885-.158-10.174 6.508z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M58.473 36.767v1.287c.857 0 .857-1.287 0-1.287z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M53.436 52.615l1.998-.844 3.361-.185-.105-.324-3.049.167-.156-.482 2.564-1.656-.105-.324-2.828 1.826-2.111.491-.186-2.16.863-3.254h-.342l-.783 2.95h-.508l-.781-2.95h-.342l.863 3.254-.186 2.16-2.111-.491-2.828-1.826-.105.324 2.564 1.656-.158.482-3.047-.167-.105.324 3.361.185 1.998.844-1.121 1.857-2.611 2.125.277.2 2.367-1.927.41.299-1.102 2.847.277.2 1.213-3.14 1.42-1.639 1.42 1.639 1.215 3.14.275-.2-1.1-2.847.41-.299 2.367 1.927.275-.2-2.611-2.125-1.117-1.857z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M52.303 43.822a8.481 8.481 0 1 0 .003 16.961 8.481 8.481 0 0 0-.003-16.961zm0 14.292c-3.209 0-5.809-2.602-5.809-5.811a5.81 5.81 0 1 1 11.62 0 5.811 5.811 0 0 1-5.811 5.811z"
  }), _react["default"].createElement("radialGradient", {
    id: "motorcycle_svg__b",
    cx: 52.304,
    cy: 52.304,
    r: 9.696,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.644,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.918,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#343040"
  })), _react["default"].createElement("path", {
    fill: "url(#motorcycle_svg__b)",
    d: "M52.303 42.607c-5.354 0-9.695 4.342-9.695 9.696S46.949 62 52.303 62C57.658 62 62 57.658 62 52.304s-4.342-9.697-9.697-9.697zm0 15.849c-3.396 0-6.152-2.755-6.152-6.152s2.756-6.152 6.152-6.152a6.152 6.152 0 0 1 0 12.304z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M34.787 56.314h5.282c.356-6.734 2.087-11.776 4.575-15.588-9.846-4.205-18.631 8.615-9.857 15.588z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M39.462 52.682l12.444 2.449.153-.326-12.597-2.406zM52.375 49.67l-11.797.236-.152-.326 11.949-.192z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M52.303 49.303a3 3 0 1 0 .003 6 3 3 0 0 0-.003-6z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M52.303 49.803a2.5 2.5 0 1 0 .003 5 2.5 2.5 0 0 0-.003-5z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M44.32 46.737c-2.082 0-5.553 1.813-5.553 1.813l.694 3.111L53.974 53.7l.26-1.527c0 .001-8.177-5.436-9.914-5.436zm-2.363 3.482s1.453-1.485 3.883-1.182c1.34.168 4.68 2.694 4.68 2.694l-8.563-1.512z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 52.304,
    cy: 52.304,
    r: 0.911
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M36.606 52.567c.036.493 2.62 1.143 2.807.717.29-.648 1.354-2.453 2.885-4.129.208-.227-1.35-.246-1.885 0-1.387.635-3.841 2.942-3.807 3.412z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.027 54.955c3.256-.234 5.205-.532 6.852-1.254.309-.136.58-2.428.585-3.309.006-1.106-2.685-1.712-.407-8.449-3.592-3.976-14.234-7.949-19.181-2.354 9.046 8.221 5.824 14.92 12.151 15.366z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M26.949 49.412c.853-1.504 4.826-2.599 7.162-2.172.412.075 2.857 3.006 2.957 3.451.143.641-.109 2.564-.267 2.621-2.987 1.091-13.341 4.337-9.852-3.9z"
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 30.354,
    cy: 51.672,
    r: 2.802
  }), _react["default"].createElement("circle", {
    fill: "#B3C2C6",
    cx: 30.355,
    cy: 51.672,
    r: 1.261
  }), _react["default"].createElement("radialGradient", {
    id: "motorcycle_svg__c",
    cx: 28.8,
    cy: 35.877,
    r: 6.843,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.403,
    stopColor: "#f4000b"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#d80005"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c40000"
  })), _react["default"].createElement("path", {
    fill: "url(#motorcycle_svg__c)",
    d: "M19.592 38.028s18.113.943 18.417.813c-.54-4.166-8.54-7.988-15.25-4.7-2.026.993-3.146 3.746-3.167 3.887z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M25.123 38.31s7.477 1.166 12.813 3.617c.435.199 8.255-1.463 8.563-1.696 7.734-5.857 4.416-5.206 10.338-8.287 1.727-.897-7.311.108-7.527.868-.924 3.233-4.709 5.294-6.92 6.043-10.954-1.218-17.267-.545-17.267-.545z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M37.446 36.876c-1.366.647-2.577.729-1.737 1.696.071.082 2.445.375 6.66.639.992.062 4.752-2.518 4.693-2.851-.164-.902-1.926.332-4.377.684-3.499.502-4.609-.466-5.239-.168zM48.713 31.803c.283-.694 8.355-1.473 8.398-.475.031.717-6.152.453-7.52 1.949-.685.75-2.632 2.845-.878-1.474z"
  }), _react["default"].createElement("radialGradient", {
    id: "motorcycle_svg__d",
    cx: 12.856,
    cy: 47.223,
    r: 6.185,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.403,
    stopColor: "#f4000b"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#d80005"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c40000"
  })), _react["default"].createElement("path", {
    fill: "url(#motorcycle_svg__d)",
    d: "M5.167 45.099s1.911.789 5.708.789c5.641 0 6.318 4.82 9.67 5.505-.584-7.896-9.906-10.613-15.378-6.294z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M22.162 33.799c-.791-1.605-2.896-.944-2.896-.944L10.4 53.02l.855.484 7.596-15.602 1.488.115.629-1.877c.001.001 2.105-.494 1.194-2.341z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M22.063 34.521c0 1.486-2.229 1.486-2.229 0 0-1.485 2.229-1.485 2.229 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "motorcycle_svg__e",
    cx: 20.927,
    cy: 71.826,
    r: 14.114,
    gradientTransform: "matrix(1 0 0 1.0445 0 -32.272)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.403,
    stopColor: "#f4000b"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#d80005"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c40000"
  })), _react["default"].createElement("path", {
    fill: "url(#motorcycle_svg__e)",
    d: "M6.533 38.024c1.036.664 1.475 1.971 1.475 1.971s5.293 1.955 7.631 3.059c5.31 2.506 7.12 8.006 4.701 13.731-.083.195.515.438.717.408 5.368-.781 13.73-.918 13.73-.918s-.761-2.107-2.071-2.107h-3.135c-1.733 0-3.008-3.735-.911-7.136.326-.527 5.002-2.795 6.605-3.96.195-.142-.277-.477-.635-.459-.259.012-4.51.774-5.336.317-3.709-2.057-9.344-3.173-9.625-4.186 0 0 5.428-.533 4.76-.924-3.832-2.246-11.859-1.887-12.104-3.146 0 0 3.623-4.946 6.442-6.201.965-.427-9.402-.827-12.244 9.551z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M13.477 28.311c.153 1.259-1.426 2.259-1.322 2.386.082.102.238.466.238.466s-.547.567-.412.728c.094.112 2.182-1.231 2.109-1.415-.072-.189-.803.119-.803.119s-.215-.19-.179-.261c.569-1.139 1.485-1.328 1.485-1.328s-1.148-.959-1.116-.695z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M13.477 28.311c0 .282.729.85.729.85s2.051.368 1.998-.131c-.033-.304-.084-1.885-.361-2.433-.097-.189-.388-.597-.599-.597-.431 0-1.767 1.605-1.767 2.311z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M8.008 39.995l14.751-2.582-10.663-1.921s-2.634.517-4.088 4.503z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M13.09 35.203l-.754-.527s-3.854 1.145-5.803 3.349c-.321.363.255 2.669 1.475 1.971.863-1.632 2.832-4.214 5.082-4.793z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 10.98,
    cy: 53.02,
    r: 0.911
  }));
};

var _default = SvgMotorcycle;
exports["default"] = _default;