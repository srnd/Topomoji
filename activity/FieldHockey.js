"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFieldHockey = function SvgFieldHockey(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "field-hockey_svg__a",
    cx: 20.175,
    cy: 67.953,
    r: 9.257,
    gradientTransform: "translate(18.414 -7.056) scale(.8889)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fad103"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#fac603"
  }), _react["default"].createElement("stop", {
    offset: 0.583,
    stopColor: "#faa803"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa8003"
  })), _react["default"].createElement("path", {
    fill: "url(#field-hockey_svg__a)",
    d: "M38 47.999c-3.869 0-7 3.135-7 7A7 7 0 1 0 45 55a7.001 7.001 0 0 0-7-7.001z"
  }), _react["default"].createElement("linearGradient", {
    id: "field-hockey_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 51.895,
    y1: 84.805,
    x2: 68.173,
    y2: 84.805,
    gradientTransform: "rotate(40.929 102.35 11.641)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#field-hockey_svg__b)",
    d: "M43.129 21.457L17.798 49.088l-5.675 6.308c-.955 1.113-2.652 1.207-3.789.211s-1.287-2.706-.328-3.82c.95-1.107.803-2.819-.336-3.814-1.141-.995-2.833-.902-3.786.208-2.86 3.327-2.413 8.465.994 11.452 3.351 2.937 7.566 3.219 10.261.415l9.186-10.844L45.236 24.26l-2.107-2.803z"
  }), _react["default"].createElement("path", {
    fill: "#D9E617",
    d: "M24.324 49.203s.354-3.849.799-5.028c1.512-4.001 18.329-22.431 18.329-22.431l-1.292-.188-22.214 25.045c-.252 7.363-4.808 13.446-4.808 13.446 1.647-1.52 9.186-10.844 9.186-10.844z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M19.946 46.601s-1.212 1.377-2.148 2.487c1.438 4.077-2.659 10.959-2.659 10.959s6.708-8.559 4.807-13.446z"
  }), _react["default"].createElement("linearGradient", {
    id: "field-hockey_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 63.372,
    y1: 46.786,
    x2: 67.475,
    y2: 46.786,
    gradientTransform: "rotate(40.929 102.35 11.641)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#field-hockey_svg__c)",
    d: "M45.053 24.482c-2.27-.862-2.893-2.926-2.893-2.926L58.164 3.438l2.537 2.209-15.648 18.835z"
  }), _react["default"].createElement("linearGradient", {
    id: "field-hockey_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 65.268,
    y1: 35.066,
    x2: 65.268,
    y2: 32.605,
    gradientTransform: "rotate(40.929 102.35 11.641)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.769,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#field-hockey_svg__d)",
    d: "M60.49 6.008c-.393.165-2.762-1.984-2.65-2.309.15-.443.619-1.607 1.142-1.699.291-.05 3.047 2.371 3.018 2.626-.057.536-1.105 1.213-1.51 1.382z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M45.891 23.396l-.653.76c-2.116-1.74-1.878-3.938-1.878-3.938l.653-.76c0-.001.141 2.637 1.878 3.938zM48.164 20.733l-.65.783c-2.168-1.787-1.941-3.824-1.941-3.824l.77-.87c-.001.001.029 2.564 1.821 3.911zM50.361 17.959l-.652.758c-2.115-1.74-1.842-3.623-1.842-3.623l.801-.906s-.044 2.469 1.693 3.771zM52.658 15.296l-.655.758c-2.114-1.739-1.796-3.606-1.796-3.606l.789-.894c0 .001-.076 2.441 1.662 3.742zM54.918 12.606l-.634.764c-2.114-1.74-1.804-3.497-1.804-3.497l.695-.787c.001 0 .005 2.219 1.743 3.52zM57.141 9.932l-.615.741c-2.113-1.742-1.571-3.602-1.571-3.602l.696-.788c-.001.001-.249 2.347 1.49 3.649zM59.408 7.202l-.635.766c-2.115-1.74-1.471-3.555-1.471-3.555l.676-.762c.001 0-.306 2.249 1.43 3.551z"
  }));
};

var _default = SvgFieldHockey;
exports["default"] = _default;