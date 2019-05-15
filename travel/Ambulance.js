"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAmbulance = function SvgAmbulance(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M22.767 23.552h1.625c0-.473-1.625-.869-1.625 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "ambulance_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 44.5,
    y1: 55,
    x2: 44.5,
    y2: 17
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#d4dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#ambulance_svg__a)",
    d: "M61 18c0-.55-.449-1-1-1H29c-.549 0-1 .45-1 1v37h33V18z"
  }), _react["default"].createElement("linearGradient", {
    id: "ambulance_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 15.5,
    y1: 52,
    x2: 15.5,
    y2: 23.377
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#d4dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#ambulance_svg__b)",
    d: "M22.841 23.377c-3.26 0-7.393 8.135-10.188 10.584C10.718 35.657 3 36.981 3 39v13h25V23.377h-5.159z"
  }), _react["default"].createElement("linearGradient", {
    id: "ambulance_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 38.107,
    y1: 55,
    x2: 38.107,
    y2: 51
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.229,
    stopColor: "#d4dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.564,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.861,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#ambulance_svg__c)",
    d: "M61 51H14.216v4H61c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1z"
  }), _react["default"].createElement("linearGradient", {
    id: "ambulance_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 6.525,
    y1: 55,
    x2: 6.525,
    y2: 49
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.214,
    stopColor: "#33303f"
  }), _react["default"].createElement("stop", {
    offset: 0.446,
    stopColor: "#3e3d4b"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#4f5360"
  }), _react["default"].createElement("stop", {
    offset: 0.931,
    stopColor: "#66717c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#ambulance_svg__d)",
    d: "M11.05 49H3c0 .826-1 1.033-1 2v3c0 .55.451 1 1 1h8.05v-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "ambulance_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 3,
    y1: 41,
    x2: 61,
    y2: 41
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e66000"
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#f17200"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f80"
  })), _react["default"].createElement("path", {
    fill: "url(#ambulance_svg__e)",
    d: "M3 39h58v4H3v-4z"
  }), _react["default"].createElement("path", {
    opacity: 0.1,
    fill: "#1A1626",
    d: "M27.75 23.377H28V55h-.25V23.377z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M42.814 24.139h3.375v12h-3.375v-12z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M48.446 25.313l1.937 2.765-9.829 6.883-1.935-2.763 9.827-6.885z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M38.617 28.079l1.936-2.766 9.83 6.882-1.936 2.766-9.83-6.882z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M12.998 47A7.995 7.995 0 0 0 5 54.991V55h16c0-4.422-3.58-8-8.002-8z"
  }), _react["default"].createElement("path", {
    opacity: 0.1,
    fill: "#1A1626",
    d: "M27.125 53.125H21.67l-.022-.098a8.82 8.82 0 0 0-8.645-6.9h-.038l-.087-.058-.003-.069V34.943l.043-.037c1.021-.895 2.202-2.621 3.454-4.449 2.216-3.236 4.506-6.582 6.628-6.582h4.125v29.25zm-5.256-.25h5.006v-28.75H23c-1.99 0-4.345 3.438-6.422 6.473-1.243 1.817-2.419 3.534-3.453 4.459v10.821a9.07 9.07 0 0 1 8.744 6.997z"
  }), _react["default"].createElement("linearGradient", {
    id: "ambulance_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 20.234,
    y1: 35.19,
    x2: 20.234,
    y2: 24.58
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#454754"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#636d78"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#ambulance_svg__f)",
    d: "M26.361 35.189v-10.61h-2.656c-2.227 0-4.859 3.846-7.183 7.24-.84 1.227-1.648 2.396-2.415 3.37h12.254z"
  }), _react["default"].createElement("radialGradient", {
    id: "ambulance_svg__g",
    cx: -28.144,
    cy: 96.626,
    r: 6.073,
    gradientTransform: "translate(45.44 -56.37) scale(1.1526)",
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
  })), _react["default"].createElement("circle", {
    fill: "url(#ambulance_svg__g)",
    cx: 13,
    cy: 55,
    r: 7
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 13.001,
    cy: 55,
    r: 4.375
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M13.438 51.913c0 .577-.875.577-.875 0 0-.584.875-.584.875 0zM13.438 58.087c0 .584-.875.584-.875 0 0-.577.875-.577.875 0zM15.894 53.828c-.502.293-.933-.459-.431-.749.496-.287.929.464.431.749zM10.543 56.919c-.497.287-.93-.462-.432-.748.499-.291.933.459.432.748zM15.457 56.919c-.495-.289-.065-1.039.435-.749.498.287.065 1.036-.435.749zM10.111 53.828c-.5-.286-.065-1.033.431-.747.5.288.068 1.037-.431.747z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M16.063 55A3.06 3.06 0 0 1 13 58.063 3.063 3.063 0 1 1 16.063 55z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M15.189 55c0 1.209-.987 2.188-2.193 2.188s-2.182-.979-2.182-2.188.976-2.188 2.182-2.188 2.193.979 2.193 2.188z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M50.998 47A7.995 7.995 0 0 0 43 54.991V55h16c0-4.422-3.58-8-8.002-8z"
  }), _react["default"].createElement("radialGradient", {
    id: "ambulance_svg__h",
    cx: 4.825,
    cy: 96.626,
    r: 6.073,
    gradientTransform: "translate(45.44 -56.37) scale(1.1526)",
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
  })), _react["default"].createElement("circle", {
    fill: "url(#ambulance_svg__h)",
    cx: 51,
    cy: 55,
    r: 7
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 51.001,
    cy: 55,
    r: 4.375
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M51.438 51.913c0 .577-.875.577-.875 0 0-.584.875-.584.875 0zM51.438 58.087c0 .584-.875.584-.875 0 0-.577.875-.577.875 0zM53.894 53.828c-.502.293-.933-.459-.431-.749.496-.287.929.464.431.749zM48.543 56.919c-.497.287-.93-.462-.432-.748.499-.291.933.459.432.748zM53.457 56.919c-.495-.289-.065-1.039.435-.749.498.287.065 1.036-.435.749zM48.111 53.828c-.5-.286-.065-1.033.431-.747.5.288.068 1.037-.431.747z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M54.063 55A3.06 3.06 0 0 1 51 58.063 3.063 3.063 0 1 1 54.063 55z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M53.189 55c0 1.209-.987 2.188-2.193 2.188s-2.182-.979-2.182-2.188.976-2.188 2.182-2.188 2.193.979 2.193 2.188z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M3 42h4l-1 3H3c-.348 0-.348-3 0-3z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M7 42c.551 0-.449 3-1 3H5v-3h2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M60 42c-.549 0-1 .45-1 1v1c0 .55.451 1 1 1h1v-3h-1z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M26.218 40.131c0-.304 0-.551-.982-.551h-1.032c-.985 0-.985.247-.985.551-.001.182 2.999.182 2.999 0z"
  }), _react["default"].createElement("path", {
    fill: "#900",
    d: "M33.5 20.5c0 .275-.225.5-.5.5h-3a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M30.567 20.712l-.934-1.212.934-1.212h1.866l.934 1.212-.934 1.212z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M38.5 20.5c0 .275-.225.5-.5.5h-3a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v2z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M35.567 20.712l-.934-1.212.934-1.212h1.866l.934 1.212-.934 1.212z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M54.5 20.5c0 .275-.225.5-.5.5h-3a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v2z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M51.567 20.712l-.934-1.212.934-1.212h1.866l.934 1.212-.934 1.212z"
  }), _react["default"].createElement("path", {
    fill: "#900",
    d: "M59.5 20.5c0 .275-.225.5-.5.5h-3a.501.501 0 0 1-.5-.5v-2c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v2z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M56.567 20.712l-.934-1.212.934-1.212h1.866l.934 1.212-.934 1.212z"
  }), _react["default"].createElement("path", {
    fill: "#F66257",
    d: "M32.149 19.5c0 .867-1.3.867-1.3 0 .001-.866 1.3-.866 1.3 0z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M37.15 19.5c0 .867-1.301.867-1.301 0s1.301-.867 1.301 0zM53.15 19.5c0 .866-1.301.866-1.301 0s1.301-.866 1.301 0z"
  }), _react["default"].createElement("path", {
    fill: "#F66257",
    d: "M58.15 19.5c0 .866-1.301.866-1.301 0s1.301-.866 1.301 0z"
  }), _react["default"].createElement("path", {
    fill: "#900",
    d: "M27.287 18c-.203 0-.368.225-.368.5v2c0 .275.165.5.368.5H28v-3h-.713z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M27.607 18.288l-.59 1.212.59 1.212H28v-2.424z"
  }), _react["default"].createElement("path", {
    fill: "#F66257",
    d: "M28 20.15v-1.3c-.639.001-.639 1.3 0 1.3z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M16.697 35.73l-.002-2.442c.001-1.03-2.833-.192-2.833.679l.002 1.742c0 .365 2.833.869 2.833.021z"
  }));
};

var _default = SvgAmbulance;
exports["default"] = _default;