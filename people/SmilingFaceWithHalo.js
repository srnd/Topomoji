"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSmilingFaceWithHalo = function SvgSmilingFaceWithHalo(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "smiling-face-with-halo_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 4
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffa027"
  }), _react["default"].createElement("stop", {
    offset: 0.272,
    stopColor: "#ffc151"
  }), _react["default"].createElement("stop", {
    offset: 0.763,
    stopColor: "#ffc93f"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffe261"
  })), _react["default"].createElement("circle", {
    fill: "url(#smiling-face-with-halo_svg__a)",
    cx: 32,
    cy: 33,
    r: 29
  }), _react["default"].createElement("radialGradient", {
    id: "smiling-face-with-halo_svg__b",
    cx: 14.19,
    cy: 38.254,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f18d84"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#f29180",
    stopOpacity: 0.749
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#f49e73",
    stopOpacity: 0.488
  }), _react["default"].createElement("stop", {
    offset: 0.775,
    stopColor: "#f8b25f",
    stopOpacity: 0.225
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#smiling-face-with-halo_svg__b)",
    cx: 14.189,
    cy: 38.254,
    r: 10
  }), _react["default"].createElement("radialGradient", {
    id: "smiling-face-with-halo_svg__c",
    cx: 49.81,
    cy: 38,
    r: 10,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f18d84"
  }), _react["default"].createElement("stop", {
    offset: 0.251,
    stopColor: "#f29180",
    stopOpacity: 0.749
  }), _react["default"].createElement("stop", {
    offset: 0.512,
    stopColor: "#f49e73",
    stopOpacity: 0.488
  }), _react["default"].createElement("stop", {
    offset: 0.775,
    stopColor: "#f8b25f",
    stopOpacity: 0.225
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fdca47",
    stopOpacity: 0
  })), _react["default"].createElement("circle", {
    fill: "url(#smiling-face-with-halo_svg__c)",
    cx: 49.811,
    cy: 38,
    r: 10
  }), _react["default"].createElement("linearGradient", {
    id: "smiling-face-with-halo_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 17.277,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0.412,
    stopColor: "#00d0ff"
  }), _react["default"].createElement("stop", {
    offset: 0.988,
    stopColor: "#0174c7"
  })), _react["default"].createElement("path", {
    fill: "url(#smiling-face-with-halo_svg__d)",
    d: "M2 9.639c0 4.22 10.158 7.639 30 7.639 19.84 0 30-3.419 30-7.639S51.84 2 32 2C12.158 2 2 5.419 2 9.639zm10.625-1.803c0-1.126 4.215-1.876 9.912-2.256C25.486 4.562 28.703 4 32 4s6.473.562 9.422 1.58c5.697.38 9.953 1.13 9.953 2.256 0 3.394-38.75 3.394-38.75 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M36.084 31.91c3.649-4.065 9.323-4.067 12.975 0 .559.622.891-.05.713-.578-3.547-10.496-10.855-10.496-14.403 0-.179.528.154 1.2.715.578zM14.943 31.91c3.651-4.065 9.323-4.067 12.975 0 .559.622.894-.05.714-.578-3.548-10.496-10.856-10.496-14.403 0-.178.528.154 1.2.714.578zM40.945 42.059c-5.449 4.659-12.447 4.656-17.894 0-.771-.658-1.232.053-.985.611 4.183 9.5 15.685 9.498 19.867 0 .246-.559-.213-1.27-.988-.611z"
  }));
};

var _default = SvgSmilingFaceWithHalo;
exports["default"] = _default;