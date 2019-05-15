"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTicket = function SvgTicket(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#75D6FF",
    d: "M60 17H45.543c0 1.658-2.486 1.658-2.486 0H4c-1.1 0-2 .899-2 2v26c0 1.1.9 2 2 2h39.057c0-1.658 2.486-1.658 2.486 0H60c1.1 0 2-.9 2-2V19c0-1.101-.9-2-2-2zM43.057 43.25c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0zm0-3.75c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0zm0-3.75c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0zm0-3.75c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0zm0-3.75c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0zm0-3.75c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0zm0-3.75c0-1.658 2.486-1.658 2.486 0s-2.486 1.658-2.486 0z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M59 20v24H48.543V20H59m1-1H47.543v26H60V19zM40.057 19.808v24H5v-24h35.057m1-1H4v26h37.057v-26z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M7 22.856h8v2H7zM7 26.856h6v2H7zM7 30.857h4v2H7zM7 34.857h8v2H7zM7 38.759h6v2H7zM52.09 36.517c-.346-.339-.52-.77-.52-1.293 0-.7.231-1.212.696-1.535.261-.18.522-.275.784-.288v.879a1.189 1.189 0 0 0-.456.216c-.183.155-.274.388-.274.695 0 .313.129.561.387.74.258.182.622.271 1.094.271s.825-.096 1.061-.285a.9.9 0 0 0 .353-.729c0-.301-.102-.531-.302-.688-.109-.088-.271-.161-.489-.218v-.873c.46.075.832.268 1.119.576.287.311.431.707.431 1.191 0 .598-.194 1.068-.582 1.41-.39.343-.925.514-1.604.514-.735.001-1.301-.194-1.698-.583zM52.413 25.105v2.225h.893v-2.042h.73v2.042h1.082v-2.328h.756v3.187h-4.205v-3.084h.744zM55.874 37.837v.873h-4.205v-.873h4.205zM51.669 32.636v-.865h1.732l-1.732-1.625v-1.135l1.729 1.725 2.476-1.813v1.13l-1.836 1.296.43.423h1.406v.865h-4.205zM51.669 39.593h.744v1.258h3.461v.885h-3.461V43h-.744v-3.407zM51.669 21h.744v1.258h3.461v.885h-3.461v1.264h-.744V21zM27.528 24.308c4.136 0 7.5 3.365 7.5 7.5s-3.364 7.5-7.5 7.5-7.5-3.365-7.5-7.5 3.365-7.5 7.5-7.5zm0-2.5c-5.522 0-10 4.479-10 10 0 5.525 4.478 10 10 10s10-4.475 10-10c0-5.522-4.477-10-10-10z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M29.529 32.81c-.337 0-.502-.164-.502-.5v-1.001c0-.335.165-.499.502-.499h3.248c.337 0 .502.164.502.499v.499a5.75 5.75 0 0 1-9.816 4.068c-.236-.24-.236-.473-.002-.709l1.063-1.061c.235-.237.469-.237.704 0a3.257 3.257 0 0 0 5.395-1.297h-1.094z"
  }));
};

var _default = SvgTicket;
exports["default"] = _default;