"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgArtistPalette = function SvgArtistPalette(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#BA8952",
    d: "M60.695 25.839c-4.063-4.025-10.104 5.137-12.234.902-2.217-4.41 7.361-6.836 4.877-15.008L42.119 30.171 2.01 33.786c0 17.643 18.244 27.049 31.675 24.916 24.874-3.961 31.495-28.418 27.01-32.863z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__a",
    cx: 31.435,
    cy: 27.997,
    r: 33.622,
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fddf98"
  }), _react["default"].createElement("stop", {
    offset: 0.32,
    stopColor: "#fadc95"
  }), _react["default"].createElement("stop", {
    offset: 0.583,
    stopColor: "#f2d48b"
  }), _react["default"].createElement("stop", {
    offset: 0.826,
    stopColor: "#e4c679"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d6b768"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__a)",
    d: "M60.553 25.03c-4.063-4.027-10.223 4.965-12.354.729-2.216-4.407 9.362-8.827 4.052-16.019C49.6 6.149 35.036 2.761 23.817 6.904 10.262 11.907.989 23.802 2.088 35.03c1.516 15.45 18.165 24.286 31.597 22.15 24.873-3.958 31.351-27.704 26.868-32.15zm-28.732-4.134c-.972-6.194 10.408-8.526 11.378-2.336.97 6.193-10.407 8.528-11.378 2.336z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#C79852",
    d: "M4.729 22.86c-1.005 1.905-1.757 3.875-2.212 5.869 8.003 3.685 26.526 24.493 24.717 26.303-1.825 1.825-12.634-5.984-24.8-17.752 1.01 5.021 3.656 9.253 7.229 12.527 2.962-.79 8.884 2.083 15.286 7.302 2.94.481 5.91.523 8.737.074a40.954 40.954 0 0 0 2.839-.566C29.377 49.59 10.446 29.916 4.729 22.86zM8.067 17.879c7.002 7.198 26.706 28.747 25.508 29.945-.356.355-1.293.08-2.684-.703a360.186 360.186 0 0 1 8.395 8.742 35.812 35.812 0 0 0 5.24-2.092c-5.913-6.094-10.019-11.196-9.411-11.803.631-.631 6.098 3.801 12.493 10.077a33.11 33.11 0 0 0 1.266-.843L11.748 14.078a33.744 33.744 0 0 0-3.681 3.801zM40.498 23.533a7.952 7.952 0 0 1-3.332.987c5.049 4.463 11.005 10.075 17.249 16.319.821.82 1.616 1.629 2.412 2.437a31.365 31.365 0 0 0 1.918-3.081s-12.239-8.029-18.247-16.662zM22.51 14.1c.665-.666 4.123 1.581 9.265 5.807.02-.346.08-.676.175-.991-3.558-2.589-7.737-6.122-12.085-10.294a38.286 38.286 0 0 0-5.28 3.188c9.225 9.223 27.931 28.415 36.433 37.751a32.413 32.413 0 0 0 2.486-2.289C43.435 38.901 21.279 15.331 22.51 14.1zM60.308 36.823c.731-1.885 1.201-3.694 1.417-5.321a396.17 396.17 0 0 1-6.536-6.787c-1.749.786-3.457 1.937-4.822 2.167l9.941 9.941zM43.199 18.563c.064.413.07.808.032 1.185l4.69 4.69c.078-1.492 1.364-3.016 2.702-4.677-6.277-6.965-10.521-12.378-11.335-14.57a41.203 41.203 0 0 0-4.766-.177c2.773 3.196 4.337 5.341 4.014 5.664-.375.375-3.209-1.794-7.299-5.456a35.54 35.54 0 0 0-2.219.311l9.392 9.393c2.296.021 4.397 1.13 4.789 3.637z"
  }), _react["default"].createElement("path", {
    fill: "#BA8952",
    d: "M43.223 19.14c.041-7.045-11.767-5.023-11.458.889 1.493-4.508 9.981-5.749 11.458-.889z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__b",
    cx: 18.218,
    cy: 32.991,
    r: 8.238,
    gradientTransform: "matrix(.9008 0 0 .857 33.206 4.718)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.265,
    stopColor: "#fafbfc"
  }), _react["default"].createElement("stop", {
    offset: 0.56,
    stopColor: "#edf0f2"
  }), _react["default"].createElement("stop", {
    offset: 0.868,
    stopColor: "#d7dee2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cbd4d9"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__b)",
    d: "M50.301 31.146c-1.4.256-2.629-.55-3.456 1.232-.805 1.735-1.968 2.709-1.823 4.84.21 3.077 5.616 4.327 7.718 3.642 1.665-.542 5.263-5.172 4.754-7.309-.627-2.636-5.484-2.716-7.193-2.405z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__c",
    cx: -0.524,
    cy: 13.274,
    r: 8.316,
    gradientTransform: "matrix(.9325 0 0 .7122 20.558 3.82)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f20fea"
  }), _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#e80ee1"
  }), _react["default"].createElement("stop", {
    offset: 0.647,
    stopColor: "#cf0dc8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b30bad"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__c)",
    d: "M27.274 14.808c-.224-1.317-5.034-3.562-6.104-2.979-2.704 1.466-5.051-.778-5.784 3.563-1.379 8.194 13.031 6.177 11.888-.584z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__d",
    cx: 644.869,
    cy: 102.516,
    r: 5.146,
    gradientTransform: "matrix(.1384 .5683 -.9023 .2527 23.857 -377.05)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.4,
    fill: "url(#artist-palette_svg__d)",
    d: "M21.325 18.246c-2.564.72-4.963-.009-5.355-1.623-.392-1.615 1.367-3.509 3.93-4.227 2.566-.718 4.964.011 5.357 1.625.394 1.617-1.367 3.51-3.932 4.225z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__e",
    cx: 12.045,
    cy: 22.632,
    r: 7.464,
    gradientTransform: "matrix(1 0 0 1.0311 0 -.703)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.212,
    stopColor: "#ff3b3b"
  }), _react["default"].createElement("stop", {
    offset: 0.418,
    stopColor: "#f63131"
  }), _react["default"].createElement("stop", {
    offset: 0.771,
    stopColor: "#de1615"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cc0100"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__e)",
    d: "M19.006 26.105c-.893-4.929-2.327-1.646-5.515-3.429-1.843-1.031-2.575-.925-3.636.957-.685 1.216-2.946 1.506-3.193 2.867-.936 5.191 13.781 7.533 12.344-.395z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__f",
    cx: 667.793,
    cy: 93.283,
    r: 4.591,
    gradientTransform: "matrix(.1484 .5683 -.9676 .2527 3.538 -377.05)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#artist-palette_svg__f)",
    d: "M13.077 28.625c-2.454.643-4.749-.008-5.124-1.448s1.309-3.13 3.76-3.771c2.456-.641 4.749.01 5.125 1.45.377 1.442-1.307 3.131-3.761 3.769z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__g",
    cx: 10.93,
    cy: 35.868,
    r: 8.38,
    gradientTransform: "matrix(1 0 0 .7546 0 8.804)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffe357"
  }), _react["default"].createElement("stop", {
    offset: 0.184,
    stopColor: "#ffdf51"
  }), _react["default"].createElement("stop", {
    offset: 0.432,
    stopColor: "#ffd440"
  }), _react["default"].createElement("stop", {
    offset: 0.716,
    stopColor: "#ffc123"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fa0"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__g)",
    d: "M18.769 38.03c-.18-.994-1.591-1.085-2.215-1.625-1.495-1.297-.634-2.438-3.086-2.676-2.72-.262-6.847 1.98-7.379 4.933-.814 4.512 2.801 4.138 6.192 4.398 2.403.185 7.063-1.871 6.488-5.03z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__h",
    cx: 685.231,
    cy: 97.031,
    r: 4.31,
    gradientTransform: "matrix(.1484 .5683 -.9676 .2527 3.538 -377.05)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#artist-palette_svg__h)",
    d: "M11.997 39.321c-2.304.604-4.459-.008-4.811-1.36-.352-1.352 1.229-2.938 3.529-3.539 2.306-.603 4.459.009 4.812 1.361.355 1.353-1.227 2.939-3.53 3.538z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__i",
    cx: 21.496,
    cy: 44.025,
    r: 7.383,
    gradientTransform: "matrix(1 0 0 .8927 0 4.726)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#2289c7"
  }), _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#1a7eb9"
  }), _react["default"].createElement("stop", {
    offset: 0.842,
    stopColor: "#066093"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#005687"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__i)",
    d: "M29.017 46.018c-.836-3.169-1.699-4.566-5.567-3.72-3.85.843-6.568 1.466-6.995 5.711-.519 5.167 3.353 2.476 6.18 3.998 3.254 1.751 7.276-2.611 6.382-5.989z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__j",
    cx: 704.783,
    cy: 88.699,
    r: 5.462,
    gradientTransform: "matrix(.1484 .5683 -.9676 .2527 3.538 -377.05)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "url(#artist-palette_svg__j)",
    d: "M23.129 48.982c-2.919.765-5.648-.009-6.095-1.723-.445-1.713 1.557-3.723 4.473-4.484 2.921-.762 5.648.012 6.096 1.725.449 1.715-1.555 3.724-4.474 4.482z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__k",
    cx: 13.368,
    cy: 43.474,
    r: 9.657,
    gradientTransform: "matrix(.9201 0 0 .8354 25.811 7.155)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.267,
    stopColor: "#91d422"
  }), _react["default"].createElement("stop", {
    offset: 0.747,
    stopColor: "#78b423"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69a123"
  })), _react["default"].createElement("path", {
    fill: "url(#artist-palette_svg__k)",
    d: "M39.171 41.11c-4.048.724-6.458 2.452-5.889 7.258.313 2.644 1.769 1.13 3.309 1.656 1.632.56 1.591 2.432 3.627 1.173 1.539-.952 7.18-3.966 6.512-6.712-.656-2.701-5.582-3.727-7.559-3.375z"
  }), _react["default"].createElement("radialGradient", {
    id: "artist-palette_svg__l",
    cx: 698.99,
    cy: 96.613,
    r: 5.461,
    gradientTransform: "matrix(.1366 .5683 -.8902 .2527 29.066 -377.05)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.921,
    stopColor: "#fff",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "url(#artist-palette_svg__l)",
    d: "M39.257 47.69c-2.686.765-5.197-.009-5.607-1.723-.41-1.713 1.432-3.723 4.115-4.484 2.687-.762 5.196.012 5.607 1.725.414 1.715-1.43 3.724-4.115 4.482z"
  }));
};

var _default = SvgArtistPalette;
exports["default"] = _default;