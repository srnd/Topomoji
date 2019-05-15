"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBroom = function SvgBroom(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "broom_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 76.97,
    y1: 63.518,
    x2: 79.405,
    y2: 63.518,
    gradientTransform: "rotate(45.001 109.604 -1.174)"
  }, _react["default"].createElement("stop", {
    offset: 0.345,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#995f34"
  })), _react["default"].createElement("path", {
    fill: "url(#broom_svg__a)",
    d: "M22.547 43.177l-1.722-1.723S55.201 7.079 59.938 2.34c1.078-1.076 2.798.646 1.721 1.721-4.898 4.9-39.112 39.116-39.112 39.116z"
  }), _react["default"].createElement("linearGradient", {
    id: "broom_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 76.11,
    y1: 86.023,
    x2: 80.264,
    y2: 86.023,
    gradientTransform: "rotate(45.001 109.604 -1.174)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f0cb6e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fbb041"
  })), _react["default"].createElement("path", {
    fill: "url(#broom_svg__b)",
    d: "M25.828 41.11l-2.938-2.936 3.297-2.199 1.838 1.838z"
  }), _react["default"].createElement("linearGradient", {
    id: "broom_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 78.186,
    y1: 93.919,
    x2: 78.186,
    y2: 86.609,
    gradientTransform: "rotate(45.001 109.604 -1.174)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fdd674"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fbb855"
  })), _react["default"].createElement("path", {
    fill: "url(#broom_svg__c)",
    d: "M25.318 38.683a7.311 7.311 0 0 0-10.338 0L25.318 49.02a7.31 7.31 0 0 0 0-10.337z"
  }), _react["default"].createElement("linearGradient", {
    id: "broom_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 78.186,
    y1: 111.688,
    x2: 78.186,
    y2: 93.919,
    gradientTransform: "rotate(45.001 109.604 -1.174)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e39b32"
  }), _react["default"].createElement("stop", {
    offset: 0.179,
    stopColor: "#e9a840"
  }), _react["default"].createElement("stop", {
    offset: 0.717,
    stopColor: "#f7c966"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdd674"
  })), _react["default"].createElement("path", {
    fill: "url(#broom_svg__d)",
    d: "M15.632 62a15.916 15.916 0 0 1-1.876-.864c-.03-.017 1.46-2.092 1.43-2.109-.037-.021-1.596 2.02-1.635 1.998-1.341-.745-2.708-1.71-4.017-2.814-.033-.029.29-.467.257-.496-.052-.045-.463.319-.517.274a31.712 31.712 0 0 1-4.114-4.296c-.033-.041 1.172-1.143 1.14-1.184-.027-.035-1.293.99-1.318.955a24.632 24.632 0 0 1-1.688-2.465c-.037-.063.341-.478.306-.541-.03-.051-.476.252-.505.201A16.474 16.474 0 0 1 2 48.369c2.96-2.61 12.98-9.687 12.98-9.687L25.318 49.02S18.241 59.04 15.632 62z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#D99025",
    d: "M24.597 48.152s-9.923 12.95-9.835 12.978c2.633-2.936 9.896-12.769 9.896-12.769 1.304-1.304 2.066-2.913 2.281-4.517-.294 1.521-1.081 3.046-2.342 4.308zM15.848 39.403c1.263-1.26 2.788-2.049 4.308-2.342-1.604.214-3.214.977-4.517 2.279 0 0-9.833 7.265-12.77 9.896.029.09 12.979-9.833 12.979-9.833zM23.552 46.523c1.229-1.229 2.626-5.062 2.626-5.062s-1.468 3.479-2.573 4.585c0 0-11.266 13.757-11.133 13.821 3.116-3.437 11.08-13.344 11.08-13.344zM22.539 37.823s-3.831 1.396-5.062 2.625c0 0-9.906 7.964-13.346 11.082.065.131 13.823-11.135 13.823-11.135 1.105-1.105 4.585-2.572 4.585-2.572zM21.905 44.876c1.23-1.229 3.215-3.711 3.725-5.061-.604 1.18-2.566 3.479-3.671 4.585 0 0-12.136 13.528-12.003 13.593 3.117-3.438 11.949-13.117 11.949-13.117zM23.217 41.319s-12.24 13.436-12.107 13.5c3.143-3.414 8.253-8.38 12.107-13.5zM23.897 43.503s-10.056 11.285-9.931 11.355c2.587-2.865 6.839-6.984 9.931-11.355zM26.498 43.487s-12.02 15.267-11.881 15.319c3.09-3.883 8.134-9.59 11.881-15.319zM7.219 50.45s14.212-11.327 14.094-11.413c-3.646 2.875-9.477 6.967-14.094 11.413zM6.126 48.515s11.806-9.592 11.705-9.663c-3.028 2.432-7.876 5.905-11.705 9.663zM24.185 38.372c-1.349.51-3.831 2.494-5.062 3.723 0 0-9.679 8.834-13.116 11.951.064.131 13.594-12.004 13.594-12.004 1.106-1.104 3.403-3.068 4.584-3.67z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M9.16 42.868c-.136.1-.273.2-.41.303.894 1.885 10.194 11.187 12.081 12.082.101-.139.202-.275.304-.413-1.813-.87-11.105-10.161-11.975-11.972z"
  }), _react["default"].createElement("linearGradient", {
    id: "broom_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 78.136,
    y1: 94.404,
    x2: 78.136,
    y2: 93.628,
    gradientTransform: "rotate(45.001 109.604 -1.174)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.107,
    stopColor: "#a8b6bb"
  }), _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#bec9ce"
  }), _react["default"].createElement("stop", {
    offset: 0.482,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#broom_svg__e)",
    d: "M25.076 49.464l-10.611-10.61.548-.548 10.612 10.609z"
  }), _react["default"].createElement("linearGradient", {
    id: "broom_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 78.186,
    y1: 85.381,
    x2: 78.186,
    y2: 84.867,
    gradientTransform: "rotate(45.001 109.604 -1.174)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.107,
    stopColor: "#a8b6bb"
  }), _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#bec9ce"
  }), _react["default"].createElement("stop", {
    offset: 0.482,
    stopColor: "#cbd4d9"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#broom_svg__f)",
    d: "M27.333 38.959l-2.292-2.291.436-.29 2.145 2.145z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M10.702 41.747c-.139.099-.274.199-.415.301.794 1.597 10.07 10.871 11.668 11.664l.299-.413c-1.514-.762-10.789-10.034-11.552-11.552zM23.068 52.171l.3-.417c-1.201-.631-10.49-9.919-11.122-11.122-.135.099-.273.199-.417.301.669 1.285 9.954 10.57 11.239 11.238z"
  }));
};

var _default = SvgBroom;
exports["default"] = _default;