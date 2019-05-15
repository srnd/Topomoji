"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTrolleybus = function SvgTrolleybus(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M21.879 19.011h-1.17c3.438-4.168 7.128-7.266 7.128-7.266l.235.478s-2.972 3.098-6.193 6.788z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M16.854 18.62l-.326-.379c.147-.128 15.095-12.824 38.804-14.56l.037.498C31.831 5.903 17.001 18.493 16.854 18.62z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M26.947 12.682c.929-.515 1.832-.98 2.634-1.354l-.556-1.195c-.888.413-1.896.938-2.932 1.52.274.351.558.695.854 1.029zM15.14 18.414l3.487-1.841-.556-1.195-2.931 1.519z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M53.594 4.457c2.031.044 3.371-.607 3.675-1.438.267-.729-.754-1.44-1.034-.719-.438 1.125-1.953 1.381-2.844 1.469l.203.688zM18.469 18.414H15.14c4.424-4.295 12.348-7.911 12.348-7.911l.885 1.793c-.001 0-5.144 2.437-9.904 6.118z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M31.168 17.979h-17.5c-.916 0-1.668.75-1.668 1.666h20.834c0-.916-.75-1.666-1.666-1.666z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M34.168 19h-23.5C9.752 19 9 19.75 9 20.666h26.834c0-.916-.75-1.666-1.666-1.666z"
  }), _react["default"].createElement("linearGradient", {
    id: "trolleybus_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 56,
    x2: 32.001,
    y2: 40.739
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#77b516"
  }), _react["default"].createElement("stop", {
    offset: 0.975,
    stopColor: "#99d334"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9ad435"
  })), _react["default"].createElement("path", {
    fill: "url(#trolleybus_svg__a)",
    d: "M2 42v11.001C2 54.932 3.057 56 4.475 56H57.35C59 56 62 51.847 62 51.19V42H2z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M59.957 20H7.316c-1.326 0-2.221 1.044-3.001 2.975L2 43h60V22.975v-1.261c0-.998-.752-1.714-2.043-1.714z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M2 43.542h3.475v3H2v-3z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M22.287 49.625h8v5h-8v-5z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M22.287 49.625h.47v5h-.47v-5zM23.229 49.625h.47v5h-.47v-5zM24.17 49.625h.47v5h-.47v-5zM25.111 49.625h.47v5h-.47v-5zM26.052 49.625h.471v5h-.471v-5zM26.993 49.625h.471v5h-.471v-5zM27.935 49.625h.47v5h-.47v-5zM28.876 49.625h.47v5h-.47v-5zM29.817 49.625h.47v5h-.47v-5z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M35.245 53h2v2h-2v-2z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M35.37 53.125h1.75v.75h-1.75v-.75z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M7.475 43.542c.551 0-.449 3-1 3h-1v-3h2z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M4.314 22.975S2.199 26.608 2 43h2.825c4.109 0 10.501-5.288 10.501-5.288h43.398c1.186 0 1.523-1.023 1.523-1.529V22.975H4.314z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M3 47l-1 .25h3.475V56h.25v-8.75h15.75V56h.25v-8.75h9.125V56h.25v-8.75h10.125V56h.25v-8.75h15.75V56h.25v-8.75H62V47z"
  }), _react["default"].createElement("linearGradient", {
    id: "trolleybus_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 8.089,
    y1: 41,
    x2: 8.089,
    y2: 24.975
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
    fill: "url(#trolleybus_svg__b)",
    d: "M3.639 24.975h10.504v10.737S7.95 41 3.84 41H2.035c0-11.258 1.604-16.025 1.604-16.025z"
  }), _react["default"].createElement("linearGradient", {
    id: "trolleybus_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 22.66,
    y1: 35.712,
    x2: 22.66,
    y2: 24.975
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
    fill: "url(#trolleybus_svg__c)",
    d: "M16.143 24.975h13.035v10.737H16.143z"
  }), _react["default"].createElement("linearGradient", {
    id: "trolleybus_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 37.695,
    y1: 35.712,
    x2: 37.695,
    y2: 24.975
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
    fill: "url(#trolleybus_svg__d)",
    d: "M31.178 24.975h13.035v10.737H31.178z"
  }), _react["default"].createElement("linearGradient", {
    id: "trolleybus_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 52.23,
    y1: 35.712,
    x2: 52.23,
    y2: 24.975
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
    fill: "url(#trolleybus_svg__e)",
    d: "M46.213 24.975v10.737h10.512c1.186 0 1.523-1.023 1.523-1.529v-9.208H46.213z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M5.256 21.79v5.385l1.469.8V21.79c0-.997-1.469-.993-1.469 0z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M5.256 34.038c0 .275.225.5.5.5H8.26c.275 0 .5-.225.5-.5v-6.363c0-.275-.225-.5-.5-.5H5.256v6.863z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M13.597 49A6.994 6.994 0 0 0 6.6 55.993V56h14c0-3.869-3.134-7-7.003-7z"
  }), _react["default"].createElement("radialGradient", {
    id: "trolleybus_svg__f",
    cx: -27.624,
    cy: 97.494,
    r: 5.205,
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
    fill: "url(#trolleybus_svg__f)",
    cx: 13.6,
    cy: 56,
    r: 6
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 13.6,
    cy: 56,
    r: 4.2
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M17.188 57.22a3.752 3.752 0 0 0 0-2.439L15.079 56l2.109 1.22zM14.338 54.718l2.109-1.217a3.783 3.783 0 0 0-2.109-1.222v2.439zM10.01 54.78a3.736 3.736 0 0 0 0 2.439L12.12 56l-2.11-1.22zM14.338 57.28v2.44a3.789 3.789 0 0 0 2.112-1.222l-2.112-1.218zM12.858 54.72v-2.44a3.784 3.784 0 0 0-2.109 1.222l2.109 1.218zM12.858 57.282l-2.109 1.217a3.8 3.8 0 0 0 2.109 1.222v-2.439z"
  }), _react["default"].createElement("circle", {
    fill: "#CFD8DD",
    cx: 13.598,
    cy: 56,
    r: 3.092
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M13.854 53.716c0 .336-.507.336-.507 0 0-.338.507-.338.507 0zM13.854 58.284c0 .338-.507.338-.507 0 0-.336.507-.336.507 0zM15.705 55.073c-.289.166-.539-.266-.251-.433.287-.164.539.267.251.433zM11.745 57.359c-.287.167-.539-.267-.247-.435.288-.165.536.268.247.435zM15.454 57.358c-.288-.166-.038-.6.248-.433.288.168.039.599-.248.433zM11.495 55.073c-.289-.166-.037-.598.25-.433.289.168.038.599-.25.433z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M15.878 56a2.28 2.28 0 0 1-2.281 2.276 2.276 2.276 0 0 1 0-4.552A2.28 2.28 0 0 1 15.878 56z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M49.347 49a6.994 6.994 0 0 0-6.997 6.993V56h14c0-3.869-3.134-7-7.003-7z"
  }), _react["default"].createElement("radialGradient", {
    id: "trolleybus_svg__g",
    cx: 3.393,
    cy: 97.494,
    r: 5.205,
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
    fill: "url(#trolleybus_svg__g)",
    cx: 49.35,
    cy: 56,
    r: 6
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M53.55 56a4.199 4.199 0 1 1-8.399 0 4.199 4.199 0 1 1 8.399 0z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M52.938 57.22a3.762 3.762 0 0 0 0-2.439L50.826 56l2.112 1.22zM50.088 54.718l2.109-1.217a3.783 3.783 0 0 0-2.109-1.222v2.439zM45.76 54.78a3.736 3.736 0 0 0 0 2.439L47.87 56l-2.11-1.22zM50.088 57.28v2.44a3.789 3.789 0 0 0 2.112-1.222l-2.112-1.218zM48.608 54.72v-2.44a3.784 3.784 0 0 0-2.109 1.222l2.109 1.218zM48.608 57.282l-2.109 1.217a3.8 3.8 0 0 0 2.109 1.222v-2.439z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M52.44 56a3.09 3.09 0 0 1-3.094 3.091A3.092 3.092 0 1 1 52.44 56z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M49.604 53.716c0 .336-.507.336-.507 0 0-.338.507-.338.507 0zM49.604 58.284c0 .338-.507.338-.507 0 0-.336.507-.336.507 0zM51.452 55.073c-.289.166-.539-.266-.248-.433.287-.164.536.267.248.433zM47.495 57.359c-.287.167-.539-.267-.25-.435.288-.165.539.268.25.435zM51.201 57.358c-.288-.166-.038-.6.251-.433.288.168.039.599-.251.433zM47.245 55.073c-.289-.166-.037-.598.25-.433.289.168.038.599-.25.433z"
  }), _react["default"].createElement("circle", {
    fill: "#E6EBEF",
    cx: 49.349,
    cy: 56,
    r: 2.277
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M61 44v3c0 .55.451 1 1 1v-5c-.549 0-1 .45-1 1z"
  }));
};

var _default = SvgTrolleybus;
exports["default"] = _default;