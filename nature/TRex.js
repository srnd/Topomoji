"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTRex = function SvgTRex(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#436618",
    d: "M23.605 33.645c-2.374 2.297-2 10.188-.438 12.5 1.959 2.9 7.784 4.761 5.097 9.674-.955 1.744-2.262.154-4.085 2.652-1.432 1.963 1.578 1.225 3.439.222-.283 2.519 3.15 1.188 3.401-.614.511 2.191 4.595 1.605 2.443-1.949-2.396-3.955-.019-5.621-1.196-6.924-5.474-6.061 8.058-14.284-8.661-15.561z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M25.094 57.968c-1.428.025-2.036 1.145-2.29 2.294 1.761-1.15 3.957-.162 2.29-2.294zM28.615 58.288c-1.426.025-2.036 1.149-2.289 2.297 1.762-1.147 3.957-.163 2.289-2.297z"
  }), _react["default"].createElement("path", {
    fill: "#436618",
    d: "M18.172 24.931c-1.348.354-5.939 2.927-6.882 4.633-.494-.356-1.681-.528-2.778-1.13-1.169-.643-1.854-1.557-2.802-1.395-.521.09.29.162 1.063.714.434.308-1.541-.411-1.631 1.119-.011.19.377-.545 1.305-.234.379.127-.846.371-.516 1.341.104.298.33-.576.856-.573.486.002.879.208 1.486-.145.439-.253 3.411 2.818 3.938 2.261 2.046-2.176 9.633-2.38 5.961-6.591z"
  }), _react["default"].createElement("radialGradient", {
    id: "t-rex_svg__a",
    cx: 26.716,
    cy: 43.709,
    r: 45.606,
    gradientTransform: "matrix(.8444 .5193 -.2826 .4314 20.01 -11.052)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7db03f"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#76a839"
  }), _react["default"].createElement("stop", {
    offset: 0.632,
    stopColor: "#62912a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4b7518"
  })), _react["default"].createElement("path", {
    fill: "url(#t-rex_svg__a)",
    d: "M61.342 8.189c.997-.9-16.146 6.666-7.604 21.397 4.769 8.222-6.233 4.183-12.295-3.754-6.606-8.652-18.626-5.478-18.02-11.397.605-5.907-2.477-8.18-10.12-7.629 1.334 3.213 2.108 6.452 2.755 9.595-.78.935-4.364 2.294-6.287 3.072 7.497 1.521 3.999 5.423 9.481 13.461 6.395 10.322 14.161 8.443 17.443 9.086 6.559 4.69 27.764 5.301 25.07-8.192-2.238-11.218-14.836-12.64-.423-25.639z"
  }), _react["default"].createElement("linearGradient", {
    id: "t-rex_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 8.864,
    y1: 38.182,
    x2: 8.864,
    y2: 24.824,
    gradientTransform: "rotate(-12.592 -72.745 20.949)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#7db03f"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#76a839"
  }), _react["default"].createElement("stop", {
    offset: 0.632,
    stopColor: "#62912a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4b7518"
  })), _react["default"].createElement("path", {
    fill: "url(#t-rex_svg__b)",
    d: "M16.377 13.751c-.795-.945-.067-1.785.043-2.833.277-2.627-1.238-2.275-2.048-3.497-1.826-2.756-4.452-1.115-5.53 1.623-2.738 1.554-4.559 2.46-5.627 3.553-.894.334-1.447 1.338-1.121 2.186-.155.902-.094 2.022.151 3.518.207.104.453.183.728.242.178 1.171 1.012 2.556 2.232 2.561 1.835.006 4.573-1.82 7.322-1.909 4.782-.154 5.306-3.712 3.85-5.444z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M3.341 18.556c.407.703 1.095 1.078 1.802 1.071-1.224-1.462.349-1.03-1.802-1.071zM4.886 18.512c.406.704 1.093 1.078 1.802 1.072-1.224-1.462.341-1.536-1.802-1.072z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M6.228 18.104c.387.663 1.034 1.016 1.704 1.012-1.157-1.379.32-1.45-1.704-1.012z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M7.507 17.834c.458.506 1.09.699 1.668.576-1.264-.994.007-1.314-1.668-.576zM8.624 17.172c.372.397.876.542 1.333.435-1.019-.774-.014-1.043-1.333-.435z"
  }), _react["default"].createElement("path", {
    fill: "#013D1E",
    d: "M2.245 18.301c2.488 1.129 8.536-.341 9.42-3.866-2.078 3.219-7.408 4.26-9.42 3.866z"
  }), _react["default"].createElement("path", {
    fill: "#436618",
    d: "M9.763 10.679c.9 1.178 4.257 1.523 3.871-2.439-1.095-.814-3.7-1.311-3.871 2.439z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M10.633 10.433c.563.521 2.617.382 2.555-1.501-.719-.34-2.551-.369-2.555 1.501z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M12.401 9.612c.249 1.074-1.151 1.376-1.399.303-.248-1.078 1.152-1.38 1.399-.303z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M11.263 9.339c.31-.066.415.39.105.457-.305.066-.41-.39-.105-.457z"
  }), _react["default"].createElement("path", {
    fill: "#436618",
    d: "M4.315 13.406s-1.314.687-.885 1.898c-1.379-.881-.385-2.592.885-1.898z"
  }), _react["default"].createElement("linearGradient", {
    id: "t-rex_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 44.759,
    y1: 59.725,
    x2: 29.974,
    y2: 28.251
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#365411"
  }), _react["default"].createElement("stop", {
    offset: 0.021,
    stopColor: "#385612"
  }), _react["default"].createElement("stop", {
    offset: 0.392,
    stopColor: "#547c23"
  }), _react["default"].createElement("stop", {
    offset: 0.692,
    stopColor: "#65932d"
  }), _react["default"].createElement("stop", {
    offset: 0.88,
    stopColor: "#6b9b31"
  })), _react["default"].createElement("path", {
    fill: "url(#t-rex_svg__c)",
    d: "M28.444 32.691c1.022 2.799-1.105 11.194 1.143 13.051 2.701 2.225 11.23 5.783 8.323 11.1-1.033 1.888-2.448.167-4.421 2.871-1.55 2.124 1.707 1.325 3.722.239-.307 2.725 3.408 1.286 3.681-.665.553 2.372 4.972 1.737 2.644-2.108-2.593-4.28.14-6.246-1.295-7.493-1.922-1.672.728-4.147-3.169-4.991-1.721-3.852 3.334-5.025 2.375-9.509 6.082-14.713-18.11-16.487-13.003-2.495z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M34.478 59.168c-1.545.027-2.204 1.238-2.478 2.481 1.906-1.243 4.282-.173 2.478-2.481zM38.288 59.515c-1.543.027-2.203 1.243-2.477 2.485 1.907-1.242 4.282-.176 2.477-2.485zM42.574 58.728c-1.545.029-1.969 1.769-1.661 2.922 2.067-.891 3.23-1.116 1.661-2.922z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32.461 57.721c-1.388.027-1.769 1.59-1.492 2.625 1.858-.8 2.901-1.002 1.492-2.625z"
  }), _react["default"].createElement("linearGradient", {
    id: "t-rex_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 20.749,
    y1: 44.184,
    x2: 6.383,
    y2: 55.394,
    gradientTransform: "rotate(-12.592 -72.745 20.949)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6b9b31"
  }), _react["default"].createElement("stop", {
    offset: 0.507,
    stopColor: "#527922"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#365411"
  })), _react["default"].createElement("path", {
    fill: "url(#t-rex_svg__d)",
    d: "M22.411 29.097c8.29-6.669-4.911-10.354-3.751-2.522-1.542 2.365-2.545 4.544-1.987 6.068-.592.081-2.185 2.146-3.37 2.471-1.264.344-2.369.148-2.931.936-.309.432.315-.084 1.24-.221.516-.074-1.374.781-.399 1.976.122.146-.102-.668.766-1.093.356-.17-.344.872.548 1.355.272.146-.156-.659.216-1.024.345-.341.71-.304.901-.989.139-.5 3.191-1.307 4.779-1.572.676-.113.708-2.748 3.988-5.385z"
  }), _react["default"].createElement("path", {
    fill: "#609122",
    d: "M27.001 18.323c.64 2.056 1.146 3.52.151 6.796 1.957-2.266 2.139-3.992 1.664-6.26l-1.815-.536z"
  }), _react["default"].createElement("path", {
    fill: "#5B8A20",
    d: "M47.468 31.557l-1.956-1.494c.603 1.935.631 3.544.079 6.396 1.422-1.646 1.9-3.412 1.877-4.902zM53.146 34.098s-.84-.139-1.381-.292c.176 1.159.098 2.44-.486 4.362 1.331-1.541 1.827-2.688 1.867-4.07z"
  }), _react["default"].createElement("path", {
    fill: "#56821E",
    d: "M54.66 33.611c.843.401 1.775.925 2.847 1.947-.795-1.929-1.46-2.96-2.72-3.615 0 0 .241 1.118-.127 1.668z"
  }), _react["default"].createElement("path", {
    fill: "#609122",
    d: "M23.649 16.066c-.771 1.572-1.632 2.355-4.054 4.262 2.627-.668 4.145-1.309 5.254-2.958 0 0-.681-.551-1.2-1.304zM23.459 12.179c-2.161-.272-3.786-.444-6.504-.151 2.266-1.957 3.829-2.171 6.098-1.696 0-.001.406.871.406 1.847zM28.489 29.083c.456 1.162 8.026-5.209 13.364 2.171-3.643-9.869-13.821-3.337-13.364-2.171z"
  }), _react["default"].createElement("path", {
    fill: "#5B8A20",
    d: "M29.299 35.031c.254.956 7.551-3.266 11.274 3.053-1.961-8.095-11.529-4.012-11.274-3.053z"
  }), _react["default"].createElement("path", {
    fill: "#56821E",
    d: "M28.822 42.298c.339.6 4.509-3.521 8.124.077-2.741-5.104-8.463-.678-8.124-.077z"
  }));
};

var _default = SvgTRex;
exports["default"] = _default;