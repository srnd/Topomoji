"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSkis = function SvgSkis(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M45.042 46.002l-.16-1.924-.959.348z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M40.957 44.709c.463 1.271 6.844-1.043 6.38-2.313-.465-1.273-6.845 1.042-6.38 2.313z"
  }), _react["default"].createElement("linearGradient", {
    id: "skis_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 38.787,
    y1: 27.231,
    x2: 37.706,
    y2: 27.621
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0068a6"
  }), _react["default"].createElement("stop", {
    offset: 0.021,
    stopColor: "#006da9"
  }), _react["default"].createElement("stop", {
    offset: 0.162,
    stopColor: "#0088ba"
  }), _react["default"].createElement("stop", {
    offset: 0.315,
    stopColor: "#009dc8"
  }), _react["default"].createElement("stop", {
    offset: 0.486,
    stopColor: "#00acd2"
  }), _react["default"].createElement("stop", {
    offset: 0.688,
    stopColor: "#00b4d7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00b7d9"
  })), _react["default"].createElement("path", {
    fill: "url(#skis_svg__a)",
    d: "M43.605 43.553c.17.471 1.128.121.957-.348L32.774 10.942l-.956.346c0 .001 8.96 24.53 11.787 32.265z"
  }), _react["default"].createElement("linearGradient", {
    id: "skis_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.018,
    y1: 7.825,
    x2: 30.172,
    y2: 8.496
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4a575c"
  }), _react["default"].createElement("stop", {
    offset: 0.165,
    stopColor: "#58676d"
  }), _react["default"].createElement("stop", {
    offset: 0.389,
    stopColor: "#64767d"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#6c7e86"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#skis_svg__b)",
    d: "M31.395 12.221c.569 1.944 3.125 1.016 2.306-.836a30.677 30.677 0 0 1-2.688-7.363c-.569-1.943-3.123-1.018-2.306.835a30.888 30.888 0 0 1 2.688 7.364z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.478 10.713c2.66.262-1.263-10.292-5.849-7.513 5.779-.538 4.104 7.342 5.849 7.513zm-.033.458c-3.751-.506-.407-6.846-6.241-7.752 4.187-5.916 12.162 8.643 6.241 7.752z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M2.35 19.168c4.09 5.827 16.624 17.568 31.85 38.568 5.856 8.076 15.979 2.619 14.34-.582C36.516 69.85 8.999 16.825 2.35 19.168z"
  }), _react["default"].createElement("radialGradient", {
    id: "skis_svg__c",
    cx: 22.893,
    cy: 36.31,
    r: 32.995,
    fx: 21.824,
    fy: 36.63,
    gradientTransform: "matrix(.6721 .7427 -.465 .4177 24.056 4.143)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.184,
    stopColor: "#98dc22"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#8ecf22"
  }), _react["default"].createElement("stop", {
    offset: 0.576,
    stopColor: "#7dba23"
  }), _react["default"].createElement("stop", {
    offset: 0.751,
    stopColor: "#69a123"
  }), _react["default"].createElement("stop", {
    offset: 0.808,
    stopColor: "#6ea723"
  }), _react["default"].createElement("stop", {
    offset: 0.883,
    stopColor: "#7bb823"
  }), _react["default"].createElement("stop", {
    offset: 0.97,
    stopColor: "#92d422"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9be022"
  })), _react["default"].createElement("path", {
    fill: "url(#skis_svg__c)",
    d: "M2.35 19.168c1.55 3.171 15.669 15.4 32.289 38.084 5.404 7.375 14.898 3.192 13.989.099-.494-1.68-3.888.064-7.861-4.449-17.445-19.813-32.454-34.287-33.2-35.648C5.781 14 .621 15.632 2.35 19.168z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M13.043 17.191c4.781 4.429 18.25 12.53 35.91 28.398 6.793 6.103 14.792-.711 12.711-3.262-8.307 13.652-43.125-28.503-48.621-25.136z"
  }), _react["default"].createElement("radialGradient", {
    id: "skis_svg__d",
    cx: -11.017,
    cy: 7.082,
    r: 30.178,
    fx: -11.994,
    fy: 7.374,
    gradientTransform: "matrix(.8136 .5857 -.3666 .5055 45.979 31.527)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.184,
    stopColor: "#98dc22"
  }), _react["default"].createElement("stop", {
    offset: 0.378,
    stopColor: "#8ecf22"
  }), _react["default"].createElement("stop", {
    offset: 0.576,
    stopColor: "#7dba23"
  }), _react["default"].createElement("stop", {
    offset: 0.751,
    stopColor: "#69a123"
  }), _react["default"].createElement("stop", {
    offset: 0.808,
    stopColor: "#6ea723"
  }), _react["default"].createElement("stop", {
    offset: 0.883,
    stopColor: "#7bb823"
  }), _react["default"].createElement("stop", {
    offset: 0.97,
    stopColor: "#92d422"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#9be022"
  })), _react["default"].createElement("path", {
    fill: "url(#skis_svg__d)",
    d: "M13.043 17.191c1.996 2.539 16.978 10.775 36.211 27.883 6.252 5.563 13.937.008 12.527-2.586-.766-1.408-3.464.801-7.887-2.476-19.415-14.383-35.623-24.456-36.553-25.53-2.225-2.569-6.525-.123-4.298 2.709z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M12.188 62l-.223-2.436 1.273.223z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M17.011 59.488c-.3 1.689-8.787.199-8.487-1.492.299-1.689 8.787-.199 8.487 1.492z"
  }), _react["default"].createElement("linearGradient", {
    id: "skis_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 17.177,
    y1: 37.389,
    x2: 15.903,
    y2: 37.176
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0068a6"
  }), _react["default"].createElement("stop", {
    offset: 0.021,
    stopColor: "#006da9"
  }), _react["default"].createElement("stop", {
    offset: 0.162,
    stopColor: "#0088ba"
  }), _react["default"].createElement("stop", {
    offset: 0.315,
    stopColor: "#009dc8"
  }), _react["default"].createElement("stop", {
    offset: 0.486,
    stopColor: "#00acd2"
  }), _react["default"].createElement("stop", {
    offset: 0.688,
    stopColor: "#00b4d7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#00b7d9"
  })), _react["default"].createElement("path", {
    fill: "url(#skis_svg__e)",
    d: "M13.443 58.625c-.109.623-1.383.398-1.275-.223 1.818-10.256 7.599-42.916 7.599-42.916l1.272.224-7.596 42.915z"
  }), _react["default"].createElement("linearGradient", {
    id: "skis_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 22.326,
    y1: 11.8,
    x2: 19.813,
    y2: 11.423
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4a575c"
  }), _react["default"].createElement("stop", {
    offset: 0.165,
    stopColor: "#58676d"
  }), _react["default"].createElement("stop", {
    offset: 0.389,
    stopColor: "#64767d"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#6c7e86"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#skis_svg__f)",
    d: "M21.774 16.784c-.28 2.554-3.68 1.957-3.066-.538a39.03 39.03 0 0 0 1.733-9.795c.281-2.554 3.68-1.958 3.066.539a39.118 39.118 0 0 0-1.733 9.794z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M21.988 5.12C15.64 2.654 13.07 16.707 16.34 15.795c2.139-.597-1.697-10.079 5.648-10.675zm.578.181c-7.091 2.413-1.511 9.602-6.086 11.059-7.202 2.412-.456-17.536 6.086-11.059z"
  }));
};

var _default = SvgSkis;
exports["default"] = _default;