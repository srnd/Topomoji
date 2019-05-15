"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgShip = function SvgShip(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M50.732 28.067c-.138-.526-.701-.958-1.25-.958H31.961c-.551 0-1.158.418-1.35.928l-3.457 9.184 26.4 1.615-2.822-10.769z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M32.981 34.305h-4.729l1.883-5.001h2.846z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.981 33.451h-3.407l1.239-3.291h2.168z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M34.981 29.304h5v5h-5z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.82 30.16h3.324v3.292H35.82z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M41.981 29.304h5v5h-5z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M42.819 30.16h3.323v3.292h-3.323z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M57.096 50.15s-24.57 3.723-37.482-1.951l4.302-11.428c.192-.51.8-.928 1.349-.928h27.084c.549 0 1.112.432 1.25.957l3.497 13.35z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M26.695 44.496h-5.687l2.258-6h3.429z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M25.695 43.475h-4.303l1.491-3.959h2.812z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M28.695 38.496h6v6h-6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M29.695 39.496h4v4h-4z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M36.695 38.496h6v6h-6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M37.695 39.496h4v4h-4z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M44.695 38.496h6v6h-6z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M45.695 39.496h4v4h-4z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M61.863 13.536c-.832.11-1.316-.346-1.886.166-.365-.195-.877-.37-1.154-.042-.355-.646-1.875-.588-2.531-.016-2.484-1.47-13.094.278-13.234 5.544 2.515.629 5.556.841 6 0 1.708.156 2.156-1.305 2.156-1.305s1.594.527 2.844-.619c.493.478 2.796-.381 3.167-1.183.663.466 1.727.243 2-.662.798.276 1.284-.289 1.284-.733 1.018.118 1.821-1.213 1.354-1.15z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M61.65 6.017c-1.212.457-2.305-.215-2.807.88-.71-.235-1.415.036-1.6.711-.858-.481-1.795-.414-2.355.106-1.618-1.683-4.236-1.74-5.088-.4-.666-.385-1.697-.462-2.227.155-1.448-.911-3.314-.258-3.558 1.201-1.573-.506-3.319.282-3.511 2.163-.66.159-1.066.741-1.097 1.504-1.224-.446-3.404.561-3.021 3.266-1.456-.4-3.974 1.519-3.316 3.585 4.375.353 6 0 6 0s1.627-.875 1.964-1.455c.85.36 3.838.149 3.901-1.501.818.205 1.808-.13 2.018-.855.561.312 1.847-.097 1.938-.709 1.258 1.053 3.817.352 4.022-.86 1.123.705 3.449-.224 3.43-1.777 1.377.628 2.861-.098 2.611-1.811 1.448.252 1.778-.917 1.446-1.717 1.675-.099 1.929-2.74 1.25-2.486z"
  }), _react["default"].createElement("linearGradient", {
    id: "ship_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 43.058,
    y1: 23.148,
    x2: 49.058,
    y2: 23.148
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.061,
    stopColor: "#576169"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#32333c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#23212b"
  })), _react["default"].createElement("path", {
    fill: "url(#ship_svg__a)",
    d: "M43.058 19.188h6v7.921h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "ship_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 43.058,
    y1: 25.128,
    x2: 49.058,
    y2: 25.128
  }, _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.324,
    stopColor: "#f4000d"
  }), _react["default"].createElement("stop", {
    offset: 0.56,
    stopColor: "#d80009"
  }), _react["default"].createElement("stop", {
    offset: 0.867,
    stopColor: "#aa0003"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#940000"
  })), _react["default"].createElement("path", {
    fill: "url(#ship_svg__b)",
    d: "M43.058 23.148h6v3.961h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "ship_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 33.072,
    y1: 23.148,
    x2: 39.072,
    y2: 23.148
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.061,
    stopColor: "#576169"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#32333c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#23212b"
  })), _react["default"].createElement("path", {
    fill: "url(#ship_svg__c)",
    d: "M33.072 19.188h6v7.921h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "ship_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 33.072,
    y1: 25.128,
    x2: 39.072,
    y2: 25.128
  }, _react["default"].createElement("stop", {
    offset: 0.188,
    stopColor: "#ff000e"
  }), _react["default"].createElement("stop", {
    offset: 0.324,
    stopColor: "#f4000d"
  }), _react["default"].createElement("stop", {
    offset: 0.56,
    stopColor: "#d80009"
  }), _react["default"].createElement("stop", {
    offset: 0.867,
    stopColor: "#aa0003"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#940000"
  })), _react["default"].createElement("path", {
    fill: "url(#ship_svg__d)",
    d: "M33.072 23.148h6v3.961h-6z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M31.49 47.146H62v.496H31.49z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M61.5 47.146h.5v1.98h-.5zM57.166 47.146h.5v1.98h-.5zM52.832 47.146h.5v1.98h-.5zM48.497 47.146h.5v1.98h-.5zM44.162 47.146h.5v1.98h-.5zM39.828 47.146h.5v1.98h-.5zM35.494 47.146h.5v1.98h-.5z"
  }), _react["default"].createElement("linearGradient", {
    id: "ship_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 59.482,
    x2: 32.001,
    y2: 46.156
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c6cfd4"
  }), _react["default"].createElement("stop", {
    offset: 0.183,
    stopColor: "#cfd7db"
  }), _react["default"].createElement("stop", {
    offset: 0.652,
    stopColor: "#e0e6ea"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#ship_svg__e)",
    d: "M62 49.127H33.838l-2.766-2.971H2s1.097 3.314 3.699 6.91c15.04 11.74 55.209 3.777 55.209 3.777L62 49.127z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M30.523 47.146l2.766 2.971h28.57l.141-.99H33.838l-2.766-2.971H2s.124.371.381.99h28.142z"
  }), _react["default"].createElement("linearGradient", {
    id: "ship_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 5.698,
    y1: 57.532,
    x2: 60.908,
    y2: 57.532
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#566169"
  }), _react["default"].createElement("stop", {
    offset: 0.066,
    stopColor: "#4d555e"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#40434f"
  }), _react["default"].createElement("stop", {
    offset: 0.356,
    stopColor: "#373643"
  }), _react["default"].createElement("stop", {
    offset: 0.562,
    stopColor: "#322e3d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#ship_svg__f)",
    d: "M22.002 62H56l4.908-5.156c-40.92 0-48.754.33-55.21-3.779C9.696 59.441 15.863 62 22.002 62z"
  }));
};

var _default = SvgShip;
exports["default"] = _default;