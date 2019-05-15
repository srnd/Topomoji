"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCarrot = function SvgCarrot(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M44 18.511s-3.875 6.664-8.625 7.702l2.313 3.913s3.623-6.75 7.844-9.125L44 18.511z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M40.665 32.072c2.851-2.227 3.224-6.18.83-8.832-2.392-2.653-6.646-3-9.495-.773l8.665 9.605z"
  }), _react["default"].createElement("radialGradient", {
    id: "carrot_svg__a",
    cx: -14.598,
    cy: -9.605,
    r: 9.362,
    gradientTransform: "rotate(45.001 -90.092 47.193) scale(1 4.4355)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffac30"
  }), _react["default"].createElement("stop", {
    offset: 0.206,
    stopColor: "#fba62c"
  }), _react["default"].createElement("stop", {
    offset: 0.478,
    stopColor: "#ef9621"
  }), _react["default"].createElement("stop", {
    offset: 0.785,
    stopColor: "#dc7a0f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc6300"
  })), _react["default"].createElement("path", {
    fill: "url(#carrot_svg__a)",
    d: "M32.975 20c-5.904 0-15.787 18.791-20.939 24.473C7.021 49.999 2 59.699 2 61.843c0 .902 8.309-2.202 12.484-6.431C18.663 51.186 44 37.254 44 30.264 44 26.09 37.652 20 32.975 20z"
  }), _react["default"].createElement("path", {
    fill: "#D46A06",
    d: "M30.25 29.363s7.402 5.793 5.384 9.691c2.94-1.806.328-7.202-5.384-9.691zM21.286 37.993s6.482 5.073 4.715 8.487c2.575-1.581.287-6.308-4.715-8.487zM11.1 48.622s5.076 2.564 3.514 5.975c2.149-2.063.467-5.483-3.514-5.975zM5.394 54.699s4.162 2.329 3.297 4.604c1.451-1.256-.184-3.859-3.297-4.604zM38.23 29.758s-5.792-7.401-9.691-5.384c1.807-2.94 7.203-.327 9.691 5.384zM28.605 39.159s-5.074-6.482-8.488-4.715c1.582-2.575 6.309-.287 8.488 4.715zM18.794 48.574s-2.565-5.076-5.974-3.514c2.062-2.15 5.482-.466 5.974 3.514zM11.599 55.177s-1.857-3.843-4.46-2.593c1.593-1.68 4.152-.446 4.46 2.593z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M61.882 8.26c.703-.656-1.897-.648-3.397-.648C57.186 7.611 60 4 59 4c-1.115 0-3.83 3.977-4.193 3.768C54.438 7.559 55.656 2 54.74 2c-.825 0-3.152 6.42-3.646 7.268-.494.846-1.121-6.002-1.754-5.418-.777.717-.652 6.998-1.359 6.349-.453-.417-1.76-4.155-2.64-4.155-.474 0 .456 8.575-.62 7.072-1.074-1.506-1.572-4.436-2.347-4.436-.696 0-.394 13.32.681 13.32 2.51 0 12.736-.836 13.088-1.439.35-.605-4.121-.593-4.974-1.08-.854-.49 8.272-1.183 8.029-2.09-.247-.906-6.097-1.804-4.94-2.108C55.422 14.967 61 12.689 61 12c0-.794-5.93-.268-4.816-.92 1.111-.653 4.689-1.874 5.698-2.82z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M55.208 17.016l-6.858.832s.811-1.952 6.858-.832z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M44.127 21L56.342 8.611C49.258 12.348 44.127 21 44.127 21z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M43.072 14.807l1.705 3.633c0-.002 1.642-.829-1.705-3.633zM46.545 18.826s-.475 1.684 4.008 1.316l-4.008-1.316zM46.963 10.021l.363 5.416c0 .001 1.89-.791-.363-5.416zM49.105 8.287l.361 4.15c.003.001 1.891-.605-.361-4.15zM51.436 14.738l5.576-1.539c-5.428-.39-5.576 1.539-5.576 1.539z"
  }));
};

var _default = SvgCarrot;
exports["default"] = _default;