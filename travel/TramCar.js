"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTramCar = function SvgTramCar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M17 54.998h30v4H17v-4z"
  }), _react["default"].createElement("path", {
    fill: "#594640",
    d: "M17 52.998h30v4H17v-4z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 19.313,
    cy: 57.003,
    r: 5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 19.315,
    cy: 57.003,
    r: 4
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M21.315 57.003a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 44.688,
    cy: 57.003,
    r: 5
  }), _react["default"].createElement("circle", {
    fill: "#302C3B",
    cx: 44.688,
    cy: 57.003,
    r: 4.001
  }), _react["default"].createElement("circle", {
    fill: "#4E5E67",
    cx: 44.686,
    cy: 57.003,
    r: 2
  }), _react["default"].createElement("radialGradient", {
    id: "tram-car_svg__a",
    cx: 32,
    cy: 44.498,
    r: 28.336,
    gradientTransform: "matrix(1 0 0 10 0 -400.482)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#ffe600"
  }), _react["default"].createElement("stop", {
    offset: 0.752,
    stopColor: "#ffe300"
  }), _react["default"].createElement("stop", {
    offset: 0.844,
    stopColor: "#fedb00"
  }), _react["default"].createElement("stop", {
    offset: 0.919,
    stopColor: "#fccd01"
  }), _react["default"].createElement("stop", {
    offset: 0.985,
    stopColor: "#fab902"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f9b302"
  })), _react["default"].createElement("path", {
    fill: "url(#tram-car_svg__a)",
    d: "M3.5 37.998h57v13h-57z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M3 37.998h58v.5H3zM3 50.498h58v.5H3z"
  }), _react["default"].createElement("path", {
    fill: "#594640",
    d: "M7.5 54.998h13c0 2-1 3-3 3h-10v-3z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M54.895 17.998H9.105c-3.832 0-6.105 3-6.105 3h58s-2.273-3-6.105-3z"
  }), _react["default"].createElement("radialGradient", {
    id: "tram-car_svg__b",
    cx: 32,
    cy: 29.498,
    r: 28.419,
    gradientTransform: "matrix(1 0 0 10 0 -265.482)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.74,
    stopColor: "#e3e9ed"
  }), _react["default"].createElement("stop", {
    offset: 0.824,
    stopColor: "#dbe1e5"
  }), _react["default"].createElement("stop", {
    offset: 0.893,
    stopColor: "#cdd3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.954,
    stopColor: "#b9c0c6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#a4adb3"
  })), _react["default"].createElement("path", {
    fill: "url(#tram-car_svg__b)",
    d: "M3.5 20.998h57v17h-57z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M2 50.998h60v3H2v-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -182,
    y1: 133.002,
    x2: -182,
    y2: 145.002,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__c)",
    d: "M13.5 36.498c0 .275-.225.5-.5.5h-2a.501.501 0 0 1-.5-.5v-11c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v11z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -177,
    y1: 133.002,
    x2: -177,
    y2: 145.002,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__d)",
    d: "M18.5 36.498c0 .275-.225.5-.5.5h-2a.501.501 0 0 1-.5-.5v-11c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v11z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M14.25 22.998h.5v15h-.5zM19.5 22.998h.5v15h-.5zM9 22.998h.5v15H9z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M14.25 37.998h.5v13h-.5zM19.5 37.998h.5v13h-.5zM9 37.998h.5v13H9z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M13.5 46.998c0 .275-.225.5-.5.5h-2a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v7zM18.5 46.998c0 .275-.225.5-.5.5h-2a.501.501 0 0 1-.5-.5v-7c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v7z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M3 22.498h58v.5H3z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.327 15.013l-.341-.342L59.19 2.466l.341.342z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M46.68 15.999l-.682-.682 1.366-1.365.681.682zM48.683 13.998L48 13.317l1.363-1.363.682.681zM59.85 2.829c-.453.454-1.135-.228-.682-.683.455-.453 1.137.229.682.683z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M40.094 14.498h6v1h-6z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M40.094 13.998h.5v2h-.5zM41.094 13.998h.5v2h-.5zM42.094 13.998h.5v2h-.5zM43.094 13.998h.5v2h-.5zM44.094 13.998h.5v2h-.5zM45.094 16.998h8v1h-8z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M33.094 15.998h12v2h-12z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M33.094 17.498h12v.5h-12z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M50.094 16.498h4v.5h-4z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M45.094 13.998h2v4h-2z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M47.75 26.346v9.652h7v-9.652c-1.454-1.791-5.537-1.802-7 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -142.75,
    y1: 134.502,
    x2: -142.75,
    y2: 144.502,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__e)",
    d: "M48.25 26.521v8.977h6v-8.977c-1.109-1.364-4.891-1.364-6 0z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M47.75 29.498h7v.5h-7zM39 26.346v9.652h7v-9.652c-1.454-1.791-5.537-1.802-7 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -151.5,
    y1: 134.502,
    x2: -151.5,
    y2: 144.502,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__f)",
    d: "M39.5 26.521v8.977h6v-8.977c-1.109-1.364-4.891-1.364-6 0z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M39 29.498h7v.5h-7zM30.25 26.346v9.652h7v-9.652c-1.454-1.791-5.537-1.802-7 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: -160.25,
    y1: 134.502,
    x2: -160.25,
    y2: 144.502,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__g)",
    d: "M30.75 26.521v8.977h6v-8.977c-1.109-1.364-4.891-1.364-6 0z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M30.25 29.498h7v.5h-7zM21.5 26.346v9.652h7v-9.652c-1.454-1.791-5.537-1.802-7 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: -169,
    y1: 134.502,
    x2: -169,
    y2: 144.502,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__h)",
    d: "M22 26.521v8.977h6v-8.977c-1.109-1.364-4.891-1.364-6 0z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M21.5 29.498h7v.5h-7z"
  }), _react["default"].createElement("path", {
    fill: "#594640",
    d: "M56.5 54.998h-13c0 2 1 3 3 3h10v-3z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M3 53.998h58v2H3v-2z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M7.5 26.346c-.728-.896-2.363-1.347-4-1.347v10.999h4v-9.652z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: -188.75,
    y1: 134.502,
    x2: -188.75,
    y2: 144.502,
    gradientTransform: "matrix(1 0 0 -1 194 170)"
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
    fill: "url(#tram-car_svg__i)",
    d: "M7 26.521c-.555-.683-2.027-1.023-3.5-1.023v10H7v-8.977z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M3.5 29.498h4v.5h-4zM56.5 26.346c.728-.896 2.363-1.347 4-1.347v10.999h-4v-9.652z"
  }), _react["default"].createElement("linearGradient", {
    id: "tram-car_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: -229.754,
    y1: 134.502,
    x2: -229.754,
    y2: 144.502,
    gradientTransform: "rotate(180 -85.502 85)"
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
    fill: "url(#tram-car_svg__j)",
    d: "M57 26.521c.555-.683 2.027-1.023 3.5-1.023v10H57v-8.977z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M56.5 29.498h4v.5h-4z"
  }));
};

var _default = SvgTramCar;
exports["default"] = _default;