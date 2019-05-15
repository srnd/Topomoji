"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBlowfish = function SvgBlowfish(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#80502D",
    d: "M28.286 11.305c-3.03 0-.487-7.305-.487-7.305s4.586 7.305.487 7.305zM10.4 23.193c-1.84 2.377-6.167-4.056-6.167-4.056s8.656.838 6.167 4.056zM20.42 13.322c-2.85 1.011-2.953-6.715-2.953-6.715s6.813 5.346 2.953 6.715zM14.056 17.694c-2.384 1.843-4.936-5.46-4.936-5.46s8.165 2.964 4.936 5.46zM35.876 12.596c2.85 1.011 2.953-6.715 2.953-6.715s-6.813 5.346-2.953 6.715zM42.241 16.968c2.384 1.844 4.936-5.458 4.936-5.458s-8.166 2.962-4.936 5.458z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 51.422,
    y1: 22.757,
    x2: 61.865,
    y2: 22.726
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#80502d"
  }), _react["default"].createElement("stop", {
    offset: 0.13,
    stopColor: "#895a33"
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#a07344"
  }), _react["default"].createElement("stop", {
    offset: 0.623,
    stopColor: "#c69d60"
  }), _react["default"].createElement("stop", {
    offset: 0.842,
    stopColor: "#e8c379"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__a)",
    d: "M59.421 15.483c-1.202-.611-2.897.946-4.617 2.451-1.161.816-3.773 1.713-10.383-4.168l7.505 16.937c-.135-1.914 1.521-2.6 3.36-1.121v-.001c1.551 1.356 3.045 2.585 4.135 2.03 3.439-1.746 3.439-14.38 0-16.128z"
  }), _react["default"].createElement("radialGradient", {
    id: "blowfish_svg__b",
    cx: 25.078,
    cy: 34.371,
    r: 21.783,
    gradientTransform: "matrix(1.0005 0 0 1 .256 .139)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#b07a53"
  }), _react["default"].createElement("stop", {
    offset: 0.557,
    stopColor: "#a5704b"
  }), _react["default"].createElement("stop", {
    offset: 0.81,
    stopColor: "#93613c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#80502d"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__b)",
    d: "M28.286 56.59c-31.703 0-31.703-48.285 0-48.285 31.701 0 31.701 48.285 0 48.285z"
  }), _react["default"].createElement("radialGradient", {
    id: "blowfish_svg__c",
    cx: 26.156,
    cy: 26.092,
    r: 24.706,
    gradientTransform: "matrix(1.0005 0 0 1 .256 .139)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.454,
    stopColor: "#f3cd9e"
  }), _react["default"].createElement("stop", {
    offset: 0.677,
    stopColor: "#eec598"
  }), _react["default"].createElement("stop", {
    offset: 0.85,
    stopColor: "#e4b88c"
  }), _react["default"].createElement("stop", {
    offset: 0.996,
    stopColor: "#d6a67d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d6a57c"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__c)",
    d: "M28.286 56.59c-16.434 0-24.35-12.976-23.744-25.473 12.466 9.6 48.849-8.533 47.338 4.496-1.268 10.928-9.131 20.977-23.594 20.977z"
  }), _react["default"].createElement("path", {
    fill: "#D6A57C",
    d: "M19.178 25.715c0 5.754-8.731 5.754-8.731 0 0-5.752 8.731-5.752 8.731 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M17.814 25.715c0 4-6.003 4-6.003 0 0-3.998 6.003-3.998 6.003 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M14.742 24.578c0 1.41-2.001 1.41-2.001 0 0-1.409 2.001-1.409 2.001 0z"
  }), _react["default"].createElement("path", {
    fill: "#D6A57C",
    d: "M5.384 29.309c-4.432-.787-3.552 3.984-2.649 3.705 2.255-.695 2.044.558.023.964-.652.132-.92 3.185 2.832 2.117.443-.126.993-6.574-.206-6.786zM47.981 38.646c1.298-2.705 6.887 2.697 6.887 2.697s-8.642.965-6.887-2.697zM30.31 52.695c3.03 0 .485 7.305.485 7.305s-4.585-7.305-.485-7.305zM38.175 50.678c2.851-1.01 2.954 6.715 2.954 6.715s-6.814-5.346-2.954-6.715zM44.539 46.307c2.386-1.843 4.936 5.457 4.936 5.457s-8.164-2.961-4.936-5.457z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 47.624,
    y1: 42.129,
    x2: 41.579,
    y2: 38.21
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__d)",
    d: "M41.567 37.904c1.843-2.375 6.16 4.064 6.16 4.064s-8.655-.849-6.16-4.064z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 43.207,
    y1: 33.195,
    x2: 50.624,
    y2: 33.195
  }, _react["default"].createElement("stop", {
    offset: 0.164,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f5cfa0"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__e)",
    d: "M43.235 32.826c.414-2.963 7.389.525 7.389.525s-7.949 3.491-7.389-.525z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 40.713,
    y1: 26.679,
    x2: 48.13,
    y2: 26.679
  }, _react["default"].createElement("stop", {
    offset: 0.164,
    stopColor: "#b47d56",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b47d56"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__f)",
    d: "M40.741 26.311c.414-2.965 7.389.523 7.389.523s-7.949 3.49-7.389-.523z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 50.175,
    y1: 18.754,
    x2: 43.172,
    y2: 21.13
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#b47d56",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__g)",
    d: "M43.108 20.852c-.718-2.907 7.065-2.194 7.065-2.194s-6.096 6.131-7.065 2.194z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 42.408,
    y1: 48.615,
    x2: 37.616,
    y2: 43.156
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__h)",
    d: "M37.745 42.99c2.385-1.846 4.942 5.453 4.942 5.453s-8.169-2.953-4.942-5.453z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: 40.571,
    y1: 41.92,
    x2: 34.861,
    y2: 35.751
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__i)",
    d: "M35.097 35.629c2.384-1.846 5.591 6.151 5.591 6.151s-8.819-3.651-5.591-6.151z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 28.669,
    y1: 47.045,
    x2: 27.044,
    y2: 38.876
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__j)",
    d: "M27.299 38.742c3.015-.305 1.494 8.307 1.494 8.307s-5.571-7.891-1.494-8.307z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: 15.971,
    y1: 44.678,
    x2: 18.929,
    y2: 36.844
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__k)",
    d: "M19.149 36.892c2.752 1.25-2.926 7.913-2.926 7.913s-.801-9.603 2.926-7.913z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__l",
    gradientUnits: "userSpaceOnUse",
    x1: 18.149,
    y1: 13.197,
    x2: 21.462,
    y2: 20.821
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#b47d56",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__l)",
    d: "M21.124 20.728c-2.884.912-3.097-7.478-3.097-7.478s7.001 6.239 3.097 7.478z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__m",
    gradientUnits: "userSpaceOnUse",
    x1: 30.751,
    y1: 11.362,
    x2: 29.126,
    y2: 19.861
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#b47d56",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__m)",
    d: "M28.917 19.859c-2.933-.747 1.475-8.35 1.475-8.35s2.495 9.36-1.475 8.35z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__n",
    gradientUnits: "userSpaceOnUse",
    x1: 40.943,
    y1: 16.046,
    x2: 35.568,
    y2: 22.922
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b47d56"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#b47d56",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__n)",
    d: "M35.384 22.666c-2.142-2.115 5.429-6.524 5.429-6.524s-2.527 9.387-5.429 6.524z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__o",
    gradientUnits: "userSpaceOnUse",
    x1: 35.41,
    y1: 53.375,
    x2: 32.869,
    y2: 46.583
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__o)",
    d: "M33.07 46.404c2.911-.828 2.515 6.887 2.515 6.887s-6.456-5.766-2.515-6.887z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__p",
    gradientUnits: "userSpaceOnUse",
    x1: 26.327,
    y1: 54.408,
    x2: 26.743,
    y2: 47.033
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__p)",
    d: "M26.99 47.072c3.005.379-.453 7.309-.453 7.309s-3.615-7.82.453-7.309z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__q",
    gradientUnits: "userSpaceOnUse",
    x1: 20.561,
    y1: 45.088,
    x2: 17.729,
    y2: 51.837
  }, _react["default"].createElement("stop", {
    offset: 0.164,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f5cfa0"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__q)",
    d: "M20.759 45.221c2.718 1.322-2.827 6.767-2.827 6.767s-.852-8.554 2.827-6.767z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__r",
    gradientUnits: "userSpaceOnUse",
    x1: 10.014,
    y1: 46.5,
    x2: 14.577,
    y2: 40.781
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5cfa0"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#f5cfa0",
    stopOpacity: 0
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__r)",
    d: "M14.75 40.939c2.253 2.003-4.581 5.756-4.581 5.756s1.531-8.463 4.581-5.756z"
  }), _react["default"].createElement("path", {
    fill: "#D6A57C",
    d: "M9.583 44.077c-1.981-2.264-4.692 3.507-4.692 3.507s7.371-.441 4.692-3.507zM21.416 52.514c-2.975-.559-1.858 7.088-1.858 7.088s5.886-6.331 1.858-7.088zM15.189 48.518c-2.646-1.455-4.014 6.152-4.014 6.152s7.598-4.184 4.014-6.152z"
  }), _react["default"].createElement("linearGradient", {
    id: "blowfish_svg__s",
    gradientUnits: "userSpaceOnUse",
    x1: 23.756,
    y1: 28.4,
    x2: 36.345,
    y2: 35.654
  }, _react["default"].createElement("stop", {
    offset: 0.073,
    stopColor: "#b47b53"
  }), _react["default"].createElement("stop", {
    offset: 0.235,
    stopColor: "#b88056"
  }), _react["default"].createElement("stop", {
    offset: 0.434,
    stopColor: "#c38f5e"
  }), _react["default"].createElement("stop", {
    offset: 0.652,
    stopColor: "#d5a86b"
  }), _react["default"].createElement("stop", {
    offset: 0.836,
    stopColor: "#e8c379"
  })), _react["default"].createElement("path", {
    fill: "url(#blowfish_svg__s)",
    d: "M23.018 29.434c-10.431 2.605 14.767 17.365 13.629 2.691-.72-9.244-7.328-4.266-13.629-2.691z"
  }), _react["default"].createElement("path", {
    fill: "#B47D56",
    d: "M23.984 28.566c3.63 1.605 7.606 1.702 7.319 1.253-.758-1.188-7.319-1.253-7.319-1.253zM22.426 31.113c2.154 2.712 5.528 4.158 5.549 3.648.065-1.352-5.549-3.648-5.549-3.648zM22.316 29.553c3.676 2.655 9.217 4.036 8.995 3.49-.586-1.446-8.995-3.49-8.995-3.49z"
  }), _react["default"].createElement("path", {
    fill: "#87532F",
    d: "M52.222 26.201c3.346 2.059 7.01 2.184 6.746 1.607-.699-1.525-6.746-1.607-6.746-1.607zM52.292 21.49c3.928-.047 7.092-1.902 6.561-2.247-1.408-.914-6.561 2.247-6.561 2.247zM58.479 23.803c-1.032-1.324-6.936-.018-6.936-.018 3.729 1.236 7.325.516 6.936.018z"
  }));
};

var _default = SvgBlowfish;
exports["default"] = _default;