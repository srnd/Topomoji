"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgWavingHand = function SvgWavingHand(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "waving-hand_svg__a",
    cx: 382.593,
    cy: -671.977,
    r: 46.136,
    gradientTransform: "matrix(.7109 .7199 -.5521 .5591 -619.223 120.93)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.797,
    stopColor: "#fac65d"
  }), _react["default"].createElement("stop", {
    offset: 0.88,
    stopColor: "#f4bd50"
  }), _react["default"].createElement("stop", {
    offset: 0.903,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#waving-hand_svg__a)",
    d: "M49.982 12.256c-5.934 6.246-.643 12.669-3.805 13.037-.822.093-3.168-2.602-3.168-2.602-4.031-4.242-9.648-10.017-17.977-18.448-4.188-4.244-10.426 2.065-6.232 6.314l-3.227-3.271c-4.186-4.238-10.459 2.039-6.234 6.313 1.129 1.144 2.197 2.228 3.229 3.271-4.184-4.235-10.418 2.078-6.236 6.312.893.905 2.945 2.981 5.367 5.437-4.352-4.04-9.428 1.284-5.395 5.657 4.59 4.974 14.027 14.989 19.082 20.091 7.246 7.316 18.063 9.85 25.932 1.57 17.109-17.998.375-26.264 4.678-43.599.531-2.147-3.051-3.196-6.014-.082z"
  }), _react["default"].createElement("path", {
    fill: "#0FB4D4",
    d: "M43.021 15.578c-3.895-7.869-10.709-9.911-10.778-9.931-1.354-.392-.932-1.884.422-1.488.305.087 7.534 2.255 11.729 10.726.602 1.219-.734 1.985-1.373.693zM45.043 10.355c-1.896-4.781-6.688-6.781-6.736-6.801-1.318-.536-.748-1.971.572-1.438.221.089 5.443 2.251 7.586 7.662.492 1.238-.895 1.91-1.422.577zM17.003 51.854c-7.568-1.094-9.748-8.502-9.838-8.816-.387-1.367 1.082-1.793 1.475-.428.08.275 2.012 6.762 8.576 7.711 1.375.198 1.006 1.711-.213 1.533zM15.992 57.021C7.47 55.944 4.261 48.604 4.13 48.294c-.563-1.322.844-1.934 1.408-.613.029.07 3.016 6.838 10.643 7.803 1.371.171 1.027 1.691-.189 1.537z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M45.307 25.021c-2.965 3.249-2.676 13.277 3.254 18.768-4.768-5.576-4.1-15.647-1.088-18.616l-2.166-.152z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M49.422 11.72c-5.627 5.803-1.787 12.515-3.248 12.806-.594.118-1.949-1.992-20.604-20.829-3.656-3.692-8.818-.537-8.928 3.584l-.533-.54c-4.92-4.968-12.27 2.407-7.32 7.406l.541.549c-4.008.109-7.225 5.311-3.549 9.033l2.646 2.68c-3.869.028-6.051 4.755-2.691 8.397 4.559 4.939 13.984 14.945 19.1 20.109 9.508 9.6 20.182 8.762 27.04 1.568 17.502-18.359.627-26.908 4.857-43.957.706-2.858-3.547-4.685-7.311-.806zm5.822.43c-4.379 17.658 12.344 25.558-4.482 43.255-5.834 6.133-15.381 7.965-24.84-1.584-5.104-5.154-14.512-15.14-19.063-20.073-3.383-3.667.711-7.903 4.314-4.561l11.961 12.108L24.22 40.2 6.869 22.635c-2.674-2.705-.148-6.393 2.59-6.391.914 0 1.799.406 2.557 1.173L29.37 34.983l1.086-1.095-20.58-20.835c-3.469-3.501 1.688-8.709 5.145-5.22l20.583 20.835 1.086-1.095L19.279 9.941c-3.428-3.604 1.797-8.592 5.205-5.15 19.26 19.445 19.987 21.496 21.774 21.273 4.313-.541-1.535-7.284 4.271-13.271 2.356-2.428 5.037-1.949 4.715-.643z"
  }));
};

var _default = SvgWavingHand;
exports["default"] = _default;