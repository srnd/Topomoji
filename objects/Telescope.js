"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTelescope = function SvgTelescope(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 985.108,
    y1: 95.95,
    x2: 985.108,
    y2: 93.841,
    gradientTransform: "rotate(-75.001 474.124 661.265)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.392,
    stopColor: "#312e3d"
  }), _react["default"].createElement("stop", {
    offset: 0.619,
    stopColor: "#363744"
  }), _react["default"].createElement("stop", {
    offset: 0.803,
    stopColor: "#3f4551"
  }), _react["default"].createElement("stop", {
    offset: 0.964,
    stopColor: "#4b5862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__a)",
    d: "M58.481 20.132l-.355 1.354c-.134.508 1.882 1.104 2.028.553l.357-1.354c.134-.508-1.883-1.106-2.03-.553z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 983.637,
    y1: 96.087,
    x2: 983.637,
    y2: 93.714,
    gradientTransform: "rotate(-75.001 474.124 661.265)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.509,
    stopColor: "#3e4350"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__b)",
    d: "M58.001 21.435l-.399 1.522c-.149.571 2.118 1.243 2.281.623l.4-1.522c.152-.572-2.117-1.242-2.282-.623z"
  }), _react["default"].createElement("path", {
    fill: "#464352",
    d: "M57.84 27.602l-1.775-.482 1.146-4.345 2.102.573z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M57.84 27.603l1.145-4.344 3.015.822z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -101.192,
    y1: 145.455,
    x2: -101.192,
    y2: 141.674,
    gradientTransform: "rotate(14.999 428.15 682.423)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.509,
    stopColor: "#3e4350"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__c)",
    d: "M57.525 23.306l-1.496-.408c-1.478-.402-2.487 3.234-.962 3.65l1.495.407c1.48.402 2.49-3.233.963-3.649z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M55.713 23.054l-2.484-.678-.842 3.199 2.484.677c1.296.353 2.181-2.834.842-3.198z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: -32.523,
    y1: -25.168,
    x2: -32.523,
    y2: -21.25,
    gradientTransform: "rotate(14.999 -169.443 326.59)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#3e4350"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__d)",
    d: "M54.581 22.503l-2.486-.677-.962 3.649 2.484.677c1.295.353 2.301-3.285.964-3.649z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M53.709 28.129c-.242-.124-1.723-1.188-1.809-1.411-.337-.873.595-2.168 1.534-2.06.096.011 1.534.889 1.6.925 1.201.676-.014 3.217-1.325 2.546z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M53.973 28.115c-1.354-.438.285-3.031 1.246-2.171.665.594-.204 2.507-1.246 2.171zM7.599 61.999h2.085l15.538-29.241-3.045.001zM48.285 62L33.709 32.758l-3.047.001 15.539 29.24z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M49.869 30.62l-12.621-2.966c-.739-.172-1.163 1.331-.449 1.583l12.243 4.304c1.529.539 2.406-2.552.827-2.921z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M43.226 31.497l5.816 2.044c.342.121.646.042.9-.13l-6.716-1.914zM49.869 30.62l-5.995-1.409 6.687 2.006c-.124-.285-.342-.515-.692-.597zM50.473 32.771a2.14 2.14 0 0 0 .205-.728l-7.127-1.69 6.922 2.418z"
  }), _react["default"].createElement("path", {
    fill: "#464352",
    d: "M36.707 28.748l-9.148-2.674c-.501-.146-.296-.88.209-.73l9.144 2.674c.504.147.3.878-.205.73z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M28.904 61.999h-1.923L26.5 29.544h2.883z"
  }), _react["default"].createElement("path", {
    fill: "#464352",
    d: "M24.099 28.901l-1.922 3.858 5.766 1.286 5.766-1.287-1.923-3.857-3.843-.642z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M33.709 32.758l-1.923-3.857-3.843-.642-3.844.642 3.844.645v4.499z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M26.02 22.476v6.475c2.158.366 1.699.365 3.844 0v-6.475H26.02z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M23.45 21.944c-.777-.205-.411-1.628.363-1.458l8.863 1.971c.84.174.498 1.65-.331 1.466l-8.866-1.971a.696.696 0 0 1-.029-.008z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 51.647,
    y1: 19.888,
    x2: 49.929,
    y2: 26.003,
    gradientTransform: "translate(1.285 .904)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.382,
    stopColor: "#444e59"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__e)",
    d: "M53.465 21.017l-2.018-.629a216.011 216.011 0 0 1-1.895 6.192l2.274.505c1.431-.334 2.947-4.847 1.639-6.068z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -73.546,
    y1: -211.735,
    x2: -74.956,
    y2: -216.998,
    gradientTransform: "matrix(.9501 .3119 -.2273 .6924 68.941 187.625)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebed"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__f)",
    d: "M51.27 18.59l-9.155-2.709.796-2.402 8.982 3.227c.599.471.136 1.857-.623 1.884z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: -77.748,
    y1: -212.358,
    x2: -78.74,
    y2: -216.061,
    gradientTransform: "matrix(.9501 .3119 -.2273 .6924 68.941 187.625)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.262,
    stopColor: "#343241"
  }), _react["default"].createElement("stop", {
    offset: 0.626,
    stopColor: "#3f4450"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__g)",
    d: "M44.587 14.039l-1.929-.642c-.694-.228-1.488 2.174-.796 2.402l1.867.578c.939.292 1.796-2.046.858-2.338z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M41.844 15.645c.686-.234 1.029-1.668.707-2.134-.629.214-1.017 1.688-.707 2.134z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: -71.523,
    y1: -212.57,
    x2: -72.409,
    y2: -215.875,
    gradientTransform: "matrix(.9501 .3119 -.2273 .6924 68.941 187.625)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.262,
    stopColor: "#343241"
  }), _react["default"].createElement("stop", {
    offset: 0.626,
    stopColor: "#3f4450"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__h)",
    d: "M47.637 17.515l2.395.709c.672-.066 1.108-1.327.733-1.924l-2.293-.824c.361.62-.047 1.76-.835 2.039z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: -68.908,
    y1: -291.043,
    x2: -69.871,
    y2: -294.635,
    gradientTransform: "matrix(.9501 .3119 -.2057 .6267 57.593 222.952)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.262,
    stopColor: "#343241"
  }), _react["default"].createElement("stop", {
    offset: 0.626,
    stopColor: "#3f4450"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4e5e67"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__i)",
    d: "M50.99 18.507l.847.534c.707-.058 1.386-1.565.746-2.419l-.897.008c.308.464-.099 1.749-.696 1.877z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M49.947 20.124l-1.575-.522-.101-1.942c.113-.309 1.685.216 1.574.525l.102 1.939z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 32.864,
    y1: 13.854,
    x2: 31.067,
    y2: 22.186,
    gradientTransform: "translate(1.285 .904)"
  }, _react["default"].createElement("stop", {
    offset: 0.242,
    stopColor: "#e6ebed"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c6cfd4"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__j)",
    d: "M52.099 20.54L15.789 9.155l-2.547 9.666 36.902 7.961c2.043-.425 2.857-5.443 1.955-6.242z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: -71.133,
    y1: -28.192,
    x2: -71.133,
    y2: -17.705,
    gradientTransform: "rotate(14.999 -169.443 326.59)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#3e4350"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__k)",
    d: "M18.499 9.936l-4.143-1.278-2.581 9.797 4.043.95c2.384.608 5.071-8.862 2.681-9.469z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M14.826 8.604c-.063.012-2.779 10.073-2.729 10.122 2.432 2.218 6.111-10.789 2.729-10.122z"
  }), _react["default"].createElement("linearGradient", {
    id: "telescope_svg__l",
    gradientUnits: "userSpaceOnUse",
    x1: -78.487,
    y1: -28.44,
    x2: -78.487,
    y2: -17.427,
    gradientTransform: "rotate(14.999 -169.443 326.59)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#3e4350"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#telescope_svg__l)",
    d: "M14.951 8.64L5.967 6.035c-2.722-.724-5.59 9.908-2.87 10.632l9.001 2.059c2.337.59 5.193-9.496 2.853-10.086z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M2.825 15.96c1.815-1.108 3.583-7.551 2.548-9.451-2.098 1.284-3.721 7.31-2.548 9.451z"
  }));
};

var _default = SvgTelescope;
exports["default"] = _default;