"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRacingCar = function SvgRacingCar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#E8000D",
    d: "M62 41.781h-9.667v2.743c1.229.647 0 1.458 0 1.458v6.542H62v-6.542s-1.188-.898 0-1.458v-2.743z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 39.903h-8.653c-.705 0-1.014.324-1.014 1.063v.814H62v-1.877zM52.333 44.524H62v1.458h-9.667z"
  }), _react["default"].createElement("path", {
    fill: "#900",
    d: "M9.224 57.094l-6.411 2.078.28-.906 6.425-2.735z"
  }), _react["default"].createElement("path", {
    fill: "#E8000D",
    d: "M11.063 60c-1.359-1.391-1.669-3.278-1.669-3.278s-4.025 1.171-6.974 2.284C1.985 59.17 2 60 2 60h9.063z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M26.057 49.679h-.981v-3.655c0-.256.981-.256.981 0v3.655z"
  }), _react["default"].createElement("path", {
    fill: "#E8000D",
    d: "M33.087 46.579v-3.302c0-.358 2.818.063 2.818-.304V41.31c0-.387-1.406-.454-1.406-.68v-3.631c4.397 0 6.768 2.807 7.87 3.876-1.102 4.872-9.282 5.704-9.282 5.704z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M33.087 46.579s7.711-2.688 9.282-5.703c0 0 4.71 4.871 8.449 7.477-2.674 2.876-17.731-1.774-17.731-1.774z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M38.715 42.889c-2.107.606-3.433 1.02-3.433.669v-3.116c0-.483 1.034.043 3.433 1.339.251.135.275 1.028 0 1.108zM15.042 49.251c4.459-1.654 5.905-3.641 8.375-3.641.189 1.406 1.583 1.828 3.293 1.828 2.406 0 7.381-1.36 9.44-1.36 5.642 0 16.084 1.074 20.164 6.509-4.306 9.285-17.462 1.945-41.272-3.336z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M23.105 46.534h-.979l.299-1.406h.98z"
  }), _react["default"].createElement("path", {
    fill: "#E8000D",
    d: "M24.814 45.081V43.37c0-.72-2.562-.131-2.56.479v1.219c.001.255 2.56.608 2.56.013zM3.813 57.028c-.193.161-1.127 1.632-.813 1.493 15.678-6.97 22.37-1.989 22.37-1.989v3.062h30.003c0-4.302-10.123-13.762-39.133-9.739-3.665.896-9.407 4.645-12.427 7.173z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M32.44 60h-7.678v-5.903c0-.912 1.092-.221 7.678 3.597.538.311.633 2.306 0 2.306z"
  }), _react["default"].createElement("linearGradient", {
    id: "racing-car_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 39.09,
    y1: 53.007,
    x2: 47.184,
    y2: 61.101
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c40000"
  }), _react["default"].createElement("stop", {
    offset: 0.262,
    stopColor: "#ce0002"
  }), _react["default"].createElement("stop", {
    offset: 0.71,
    stopColor: "#ea0009"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#racing-car_svg__a)",
    d: "M48.69 59.593h-9.6v-6.587c5.279.625 9.601 3.016 9.601 3.016v3.571z"
  }), _react["default"].createElement("radialGradient", {
    id: "racing-car_svg__b",
    cx: -24.716,
    cy: 96.626,
    r: 6.073,
    gradientTransform: "translate(45.44 -56.37) scale(1.1526)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.3,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.839,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#343040"
  })), _react["default"].createElement("circle", {
    fill: "url(#racing-car_svg__b)",
    cx: 16.951,
    cy: 55,
    r: 7
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 16.951,
    cy: 55,
    r: 4.375
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M20.844 54.563c-.016-.147-.027-.296-.061-.438h-1.719l1.213-1.213c-.078-.127-.169-.241-.261-.357l-1.571 1.57h-.619v-.619l1.57-1.57a3.836 3.836 0 0 0-.356-.262l-1.214 1.214v-1.72c-.142-.033-.29-.045-.438-.061v2.218l-.438.437-.438-.438v-2.217c-.147.016-.296.027-.438.061v1.719l-1.213-1.213c-.126.079-.241.17-.356.262l1.569 1.57v.619h-.619l-1.57-1.569c-.092.115-.183.23-.262.356l1.213 1.213h-1.719c-.032.142-.045.29-.061.438h2.217l.44.437-.438.438h-2.218c.017.147.028.296.062.438h1.719l-1.213 1.213c.078.127.169.241.261.357l1.571-1.57h.619v.619l-1.569 1.57c.115.093.23.184.356.262l1.213-1.213v1.719c.142.033.29.045.438.061v-2.217l.438-.438.438.437v2.218c.147-.016.296-.027.438-.061v-1.72l1.214 1.215c.127-.079.241-.17.357-.262l-1.571-1.571v-.619h.619l1.571 1.57c.092-.115.183-.23.262-.356l-1.214-1.214h1.72c.032-.142.044-.29.061-.438h-2.218l-.44-.438.438-.438h2.217z"
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 16.951,
    cy: 55.001,
    r: 1.75
  }), _react["default"].createElement("circle", {
    fill: "#B3C2C6",
    cx: 16.952,
    cy: 55.001,
    r: 1.313
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M16.95 51.063c-2.175 0-3.937 1.763-3.937 3.938a3.937 3.937 0 1 0 7.875 0 3.937 3.937 0 0 0-3.938-3.938zm0 7.437c-1.933 0-3.499-1.567-3.499-3.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-3.501 3.5z"
  }), _react["default"].createElement("radialGradient", {
    id: "racing-car_svg__c",
    cx: 5.752,
    cy: 96.626,
    r: 6.073,
    gradientTransform: "translate(45.44 -56.37) scale(1.1526)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.3,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.839,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#343040"
  })), _react["default"].createElement("circle", {
    fill: "url(#racing-car_svg__c)",
    cx: 52.068,
    cy: 55,
    r: 7
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 52.068,
    cy: 55,
    r: 4.375
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M55.961 54.563c-.016-.147-.027-.296-.061-.438h-1.719l1.213-1.213c-.078-.127-.169-.241-.261-.357l-1.571 1.57h-.619v-.619l1.57-1.57a3.836 3.836 0 0 0-.356-.262l-1.214 1.214v-1.72c-.142-.033-.29-.045-.438-.061v2.218l-.438.437-.438-.438v-2.217c-.147.016-.296.027-.438.061v1.719l-1.213-1.213c-.126.079-.241.17-.356.262l1.569 1.57v.619h-.619l-1.57-1.569c-.092.115-.183.23-.262.356l1.213 1.213h-1.719c-.032.142-.045.29-.061.438h2.217l.44.437-.438.438h-2.218c.017.147.028.296.062.438h1.719l-1.213 1.213c.078.127.169.241.261.357l1.571-1.57h.619v.619l-1.569 1.57c.115.093.23.184.356.262l1.213-1.213v1.719c.142.033.29.045.438.061v-2.217l.438-.438.438.437v2.218c.147-.016.296-.027.438-.061v-1.72l1.214 1.215c.127-.079.241-.17.357-.262l-1.571-1.571v-.619h.619l1.571 1.57c.092-.115.183-.23.262-.356l-1.214-1.214h1.72c.032-.142.044-.29.061-.438h-2.218L53.307 55l.438-.438h2.216z"
  }), _react["default"].createElement("circle", {
    fill: "#99A8AE",
    cx: 52.068,
    cy: 55.001,
    r: 1.75
  }), _react["default"].createElement("circle", {
    fill: "#B3C2C6",
    cx: 52.069,
    cy: 55.001,
    r: 1.313
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M52.067 51.063c-2.175 0-3.937 1.763-3.937 3.938a3.937 3.937 0 1 0 7.875 0 3.937 3.937 0 0 0-3.938-3.938zm0 7.437c-1.933 0-3.499-1.567-3.499-3.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-3.501 3.5z"
  }));
};

var _default = SvgRacingCar;
exports["default"] = _default;