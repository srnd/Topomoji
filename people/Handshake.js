"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHandshake = function SvgHandshake(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "handshake_svg__a",
    cx: 28.203,
    cy: 37.655,
    r: 22.042,
    gradientTransform: "matrix(1.0009 0 0 1.0853 -.644 -10.85)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.686,
    stopColor: "#fecb64"
  }), _react["default"].createElement("stop", {
    offset: 0.797,
    stopColor: "#fac65d"
  }), _react["default"].createElement("stop", {
    offset: 0.88,
    stopColor: "#f4bd50"
  }), _react["default"].createElement("stop", {
    offset: 0.903,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#handshake_svg__a)",
    d: "M10.77 9.901C7.753 7.933.098 25.91 3.421 27.189c1.764.677 6.249 3.232 7.402 5.258 6.208 10.913 25.816 23.71 29.438 14.889 2.95.51 4.918-.622 5.02-3.28 2.432-.34 4.633-2.228 4.631-4.207 3.198-.147 2.989-3.689 2.045-5.972-3.63-8.765-11.621-19.306-23.003-21.458-4.19-.8-10.876 2.26-18.184-2.518z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M10.17 32.818c-.992-1.745-5.167-4.218-7.018-4.928C-.738 26.394 6.134 9 10.265 9c.331 0 .638.092.915.273 7.039 4.601 13.71 1.604 17.915 2.409 11.585 2.19 19.765 12.753 23.557 21.907 1.536 3.717.377 6.461-2.054 6.932-.369 1.908-2.262 3.628-4.62 4.169-.466 3.202-3.308 3.681-5.27 3.467-4.641 8.834-24.443-4.627-30.538-15.339zm.18-22.289c-2.645 0-8.84 15.117-6.658 15.959 1.676.645 6.454 3.251 7.785 5.588 5.788 10.178 25.593 23.582 28.319 14.418 0 0 5.093 1.49 4.759-3.095 2.069-.136 4.932-1.651 4.605-4.267 3.548.239 2.791-3.306 2.103-4.969-3.641-8.792-11.45-18.929-22.448-21.007-3.885-.746-10.938 2.285-18.455-2.628l-.01.001z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M40.189 48.102c-.063-.028-6.368-2.938-12.803-7.595l.88-1.215c6.31 4.564 12.487 7.417 12.549 7.445l-.626 1.365zM44.909 44.647c-.05-.038-5.08-3.872-13.173-8.453l.738-1.305c8.192 4.636 13.296 8.527 13.347 8.565l-.912 1.193zM49.423 40.327c-.037-.043-3.775-4.39-13.045-9.209l.692-1.331c9.567 4.974 13.345 9.389 13.501 9.574l-1.148.966z"
  }), _react["default"].createElement("radialGradient", {
    id: "handshake_svg__b",
    cx: 40.376,
    cy: 28.944,
    r: 21.701,
    gradientTransform: "matrix(.9394 -.3746 .2231 .6577 -4.617 16.652)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.376,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.614,
    stopColor: "#fdc962"
  }), _react["default"].createElement("stop", {
    offset: 0.862,
    stopColor: "#f7c155"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#handshake_svg__b)",
    d: "M53.13 12.611c2.871-2.217 10.673 15.007 7.349 16.285-1.762.68-6.848 4.138-8.002 6.165-5.87-9.611-21.343-14.865-22.804-12.795-6.623 9.385-11.943 2.858-9.656.553 4.585-4.625 5.479-8.105 8.079-8.315 3.342-.272 7.67-.973 16.711 1.912.806.256 4.773-1.062 8.323-3.805z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M53.699 11.664c-.916 0-7.354 4.431-8.663 4.036-7.163-2.157-12.62-2.569-17.002-1.944-3.347.478-3.548 3.488-8.55 8.535-3.306 3.329 3.986 10.423 10.79.422.669-.983 15.063 2.099 22.225 13.825 2.039-3.577 7.068-6.486 8.249-6.941 4.074-1.568-2.731-17.933-7.049-17.933zm6.298 16.586c-1.669.644-5.592 3.345-7.479 5.5-6.14-8.876-21.47-14.871-23.459-11.916-5.479 8.145-10.304 3.318-8.508 1.514 4.798-4.842 5.438-7.883 7.605-8.097 1.004-.1 6.706-1.225 16.668 1.913 1.707.537 7.443-3.243 8.72-3.955 2.063-1.151 9.478 13.877 6.453 15.041z"
  }), _react["default"].createElement("radialGradient", {
    id: "handshake_svg__c",
    cx: 13.775,
    cy: 76.144,
    r: 3.904,
    gradientTransform: "matrix(.9991 .0643 -.0557 1.018 8.375 -39.597)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#fdc962"
  }), _react["default"].createElement("stop", {
    offset: 0.869,
    stopColor: "#f7c156"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#handshake_svg__c)",
    d: "M15.542 37.145c-.659.763-1.49 2.02-1.959 2.789-1.189 1.955.679 6.238 4.463 3.889.77-.479 2.065-2.11 2.614-3.101 1.459-2.627-3.246-5.731-5.118-3.577z"
  }), _react["default"].createElement("radialGradient", {
    id: "handshake_svg__d",
    cx: -40.054,
    cy: 99.801,
    r: 4.807,
    gradientTransform: "matrix(.9046 .0919 -.0899 1.04 67.698 -58.24)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#fdc962"
  }), _react["default"].createElement("stop", {
    offset: 0.869,
    stopColor: "#f7c156"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#handshake_svg__d)",
    d: "M20.736 40.768c-.704.646-2.723 3.238-3.176 4.013-1.259 2.146.818 6.112 3.902 4.095.716-.468 4.27-4.008 4.809-5.005 1.425-2.646-3.364-5.099-5.535-3.103z"
  }), _react["default"].createElement("radialGradient", {
    id: "handshake_svg__e",
    cx: -31.741,
    cy: 104.335,
    r: 4.13,
    gradientTransform: "matrix(.9008 .0915 -.0901 1.0424 71.053 -58.424)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#fdc962"
  }), _react["default"].createElement("stop", {
    offset: 0.869,
    stopColor: "#f7c156"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#handshake_svg__e)",
    d: "M31.748 46.705c-.708.637-2.64 2.783-3.093 3.56-1.349 2.317 1.442 5.176 3.933 3.473 1.467-1.002 2.608-2.649 3.075-3.703 1.275-2.872-1.27-5.721-3.915-3.33z"
  }), _react["default"].createElement("radialGradient", {
    id: "handshake_svg__f",
    cx: -28.601,
    cy: 100.842,
    r: 5.127,
    gradientTransform: "matrix(.913 .0928 -.0879 1.017 62.99 -55.198)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.436,
    stopColor: "#fc6"
  }), _react["default"].createElement("stop", {
    offset: 0.654,
    stopColor: "#fdc962"
  }), _react["default"].createElement("stop", {
    offset: 0.869,
    stopColor: "#f7c156"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2ba4b"
  })), _react["default"].createElement("path", {
    fill: "url(#handshake_svg__f)",
    d: "M26.975 43.272c-.715.618-3.927 4.142-4.382 4.898-1.681 2.782 2.01 5.456 4.341 3.928 1.957-1.285 4.045-4.543 4.692-5.416 1.657-2.237-1.978-5.733-4.651-3.41z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M12.942 39.544c.511-.841 1.351-2.103 2.032-2.891 2.426-2.79 8.25.991 6.342 4.434-.56 1.01-1.924 2.781-2.873 3.372-4.596 2.854-7.033-2.397-5.501-4.915zm3.167-1.906c-.581.669-1.365 1.831-1.885 2.686-.736 1.212.298 4.802 3.426 2.862.583-.363 1.793-1.815 2.353-2.827 1.01-1.818-2.627-4.183-3.894-2.721z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M16.912 44.4c.501-.853 2.566-3.498 3.316-4.187 2.749-2.526 8.557.575 6.703 4.012-.626 1.16-4.282 4.771-5.059 5.277-3.786 2.477-6.607-2.293-4.96-5.102zm4.332-3.081c-.632.58-2.61 3.114-3.035 3.84-.813 1.386.375 4.703 2.842 3.089.65-.426 4.107-3.896 4.56-4.734.968-1.797-2.755-3.674-4.367-2.195zM28.006 49.888c.525-.898 2.545-3.115 3.239-3.74 3.04-2.748 6.829.309 5.104 4.19-.551 1.241-1.796 2.965-3.339 4.019-3.086 2.116-6.786-1.406-5.004-4.469zm4.245-2.626c-.678.611-2.544 2.69-2.947 3.381-.951 1.635 1.106 3.675 2.859 2.476 1.293-.883 2.365-2.375 2.814-3.388.836-1.885-.544-4.439-2.726-2.469z"
  }), _react["default"].createElement("path", {
    fill: "#D9A640",
    d: "M21.949 47.783c.509-.846 3.785-4.431 4.533-5.078 3.088-2.681 8.287.997 5.746 4.424-.097.131-3.108 4.433-4.882 5.597-3.045 1.995-7.466-1.515-5.397-4.943zm5.518-3.944c-.71.614-3.838 4.063-4.231 4.719-1.308 2.168 1.749 3.922 3.287 2.913 1.532-1.006 4.396-5.096 4.5-5.234 1.488-2.011-1.804-3.922-3.556-2.398z"
  }));
};

var _default = SvgHandshake;
exports["default"] = _default;