"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSnowboarder = function SvgSnowboarder(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "snowboarder_svg__a",
    cx: 31.981,
    cy: 51.741,
    r: 28.215,
    gradientTransform: "matrix(1.0074 0 0 .9864 -.218 -2.436)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fac703"
  }), _react["default"].createElement("stop", {
    offset: 0.351,
    stopColor: "#fac103"
  }), _react["default"].createElement("stop", {
    offset: 0.799,
    stopColor: "#fab203"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#faa803"
  })), _react["default"].createElement("path", {
    fill: "url(#snowboarder_svg__a)",
    d: "M9.459 55.026c-4.9 1.603 3.692 9.135 8.786 6.369C34.762 52.427 52.549 43.75 53.79 42.827c5.783-4.291-.805-11.248-8.042-5.367-3.53 2.871-22.142 12.939-36.289 17.566z"
  }), _react["default"].createElement("path", {
    opacity: 0.7,
    fill: "#FFE600",
    d: "M29.133 46.796v8.803c.877-.458 1.744-.91 2.604-1.356v-8.739c-.85.427-1.719.858-2.604 1.292zM22.212 50.022v9.234a940.254 940.254 0 0 1 4.314-2.289v-8.922a194.68 194.68 0 0 1-4.314 1.977zM46.463 36.917v9.767c.545-.277 1.062-.542 1.557-.796v-9.883c-.511.244-1.031.541-1.557.912zM42.081 39.878v9.043c1.169-.598 2.28-1.164 3.314-1.692v-9.5c-.731.545-1.87 1.282-3.314 2.149z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M27.797 19.785c6.681-7.597 14.341-2.957 18.134-5.273 1.577-.962.691 3.948 1.329 7.244.485 2.486-10.244-4.928-16.233 1.248.001 0-3.845-2.522-3.23-3.219z"
  }), _react["default"].createElement("path", {
    fill: "#4F5E66",
    d: "M27.899 22.101c-1.343-2.138 2.582-3.555 3.636-1.842.971 1.575 3.014 3.419 3.29 4.305 2.6.243 3.197 1.026 4.954 1.103l.648 3.177s-6.187-.65-7.952-1.499c-1.635-.788-3.699-3.852-4.576-5.244z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M22.341 52.757c-.167 1.51.086 3.155 3.837 2.395 6.173-1.251 2.481-4.963 2.481-4.963-1.456-2.079-5.958-.657-6.318 2.568z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M26.026 52.277c-1.545.349-2.494 3.067-3.686.479-.622 2.984 1.488 3.65 3.704 2.672 3.227-1.301 5.392-1.919 2.616-5.24 1.308 4.084-1.228 1.774-2.634 2.089z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M36.653 46.004c1.074 1.69 9.078-1.017 7.517-2.159-1.089-.798-2.017-1.223-2.017-1.223-2.64-2.732-6.329 2.08-5.5 3.382z"
  }), _react["default"].createElement("path", {
    fill: "#014D87",
    d: "M36.653 46.004c-.231.894 2.812 1.108 4.604 1.108 4.292 0 4.238-2.783 2.913-3.268-3.718-1.361.203 3.527-7.517 2.16z"
  }), _react["default"].createElement("path", {
    fill: "#1A1726",
    d: "M42.153 42.622s-1.104-7.462-3.402-9.727c-1.096-1.081-3.458-2.629-6.213-3.64-4.989.497-5.862 1.759-10.69 3.756-.048 4.721 2.446 5.922 1.751 9.61-1.304 6.91-1.257 10.135-1.257 10.135 1.276-3.766 5.246-3.766 6.319-2.568 0 0 .992-3.646 1.726-7.566.316-1.694-.817-5.232-1.146-7.299 2.027.076 4.216 1.296 4.662 1.801 1.18 1.34.727 7.879 2.753 8.88 1.452-3.382 3.331-4.828 5.497-3.382z"
  }), _react["default"].createElement("path", {
    fill: "#036",
    d: "M35.109 42.597c.279 1.582.691 2.986 1.544 3.407 1.455-3.382 3.334-4.828 5.5-3.382v-.002c-.361-2.414-3.358-3.521-5.292-1.943a9.2 9.2 0 0 0-1.752 1.92zM22.546 49.609c-.219 2.124-.206 3.147-.206 3.147 1.276-3.766 5.246-3.766 6.319-2.568 0 0 .449-1.649.965-3.92-1.075-.45-2.469-.484-3.794-.213-1.779.364-3.102 1.812-3.284 3.554z"
  }), _react["default"].createElement("path", {
    fill: "#006DAE",
    d: "M33.031 29.462c-2.101-3.849.107-6.693-2.162-9.677-3.15-4.142-11.36 2.483-11.36 2.483.298 5.877 1.782 5.654 2.345 11.565.246 2.6 12.841-1.316 11.177-4.371z"
  }), _react["default"].createElement("path", {
    fill: "#F5BC2C",
    d: "M18.304 13.12c-2.265-.431-.496 6.252 1.276 4.409.822-.855-.217-4.207-1.276-4.409zM31.851 13.12c-1.059.202-2.1 3.554-1.276 4.409 1.771 1.844 3.538-4.84 1.276-4.409z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M25.077 5.974c-4.684 0-6.939 3.41-6.656 8.15.056.954.67 4.064 1.25 5.181.594 1.141 2.579 2.901 3.795 3.266.769.23 2.452.23 3.219 0 1.217-.365 3.203-2.125 3.797-3.266.582-1.116 1.195-4.227 1.252-5.181.284-4.741-1.974-8.15-6.657-8.15z"
  }), _react["default"].createElement("path", {
    fill: "#E81C26",
    d: "M27.861 4.533c-.022 3.048-5.564 3.201-5.545.152-.001-3.528 5.545-3.58 5.545-.152z"
  }), _react["default"].createElement("path", {
    fill: "#1A1726",
    d: "M32.398 10.835c-.046 3.442-14.686 3.46-14.639.018 0-9.508 14.639-9.328 14.639-.018z"
  }), _react["default"].createElement("path", {
    fill: "#E6A400",
    d: "M25.077 18.879c-1.055-.299-2.614.141-2.614.141.594.623 1.031 1.431 2.614 1.431 1.816 0 2.124-.917 2.615-1.431 0 .001-1.563-.441-2.615-.141z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M22.861 19.125c1.104.892 3.334.897 4.446 0-1.178.048-3.26.049-4.446 0z"
  }), _react["default"].createElement("path", {
    fill: "#E6A400",
    d: "M26.53 17.203c0 .91-2.905.91-2.905 0 0-.209 2.905-.209 2.905 0z"
  }), _react["default"].createElement("path", {
    fill: "#E81C26",
    d: "M31.838 13.254a52.603 52.603 0 0 0-13.525.017c-.882.121-1.538-2.284-.553-2.419 5.472-1.498 8.8-1.601 14.639-.018.982.132.32 2.539-.561 2.42z"
  }), _react["default"].createElement("path", {
    fill: "#036",
    d: "M31.545 12.535c-.186-.459-.638-.826-1.24-.955-4.558-.985-6.091-.985-10.649 0-.603.13-1.056.496-1.241.955h-.928v.372c0 .537.28 1.009.704 1.296l-.164 1.716c-.036.377.183.741.574.954 0 0 2.772 1.009 3.744 1.236.489.114 1.04-.077 1.306-.424.231-.302.599-.9.988-1.251a.547.547 0 0 1 .682 0c.39.351.757.95.989 1.251.267.347.817.538 1.306.424.972-.227 3.742-1.236 3.742-1.236.391-.213.611-.577.574-.954l-.153-1.615c.524-.265.886-.787.886-1.397v-.372h-1.12z"
  }), _react["default"].createElement("linearGradient", {
    id: "snowboarder_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 78.546,
    y1: -90.474,
    x2: 83.225,
    y2: -98.579,
    gradientTransform: "matrix(1 0 0 -1 -56 -80)"
  }, _react["default"].createElement("stop", {
    offset: 0.064,
    stopColor: "#008cc9"
  }), _react["default"].createElement("stop", {
    offset: 0.33,
    stopColor: "#bcebff"
  }), _react["default"].createElement("stop", {
    offset: 0.612,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.803,
    stopColor: "#abe6ff"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#75d6ff"
  })), _react["default"].createElement("path", {
    fill: "url(#snowboarder_svg__b)",
    d: "M27.326 17.589c-.166 0-.56-.37-.636-.477-.45-.642-.867-1.189-1.412-1.407a.804.804 0 0 0-.591-.001c-.545.216-.962.765-1.414 1.408-.075.107-.31.519-.634.477-.858-.112-2.883-.905-3.69-1.198-.162-.104-.251-.265-.235-.43l.291-3.06c.037-.373.371-.689.831-.789 2.274-.492 3.204-.719 5.147-.719s2.875.229 5.147.719c.461.1.795.416.83.789l.292 3.06c.015.166-.073.327-.235.43-.809.293-2.851 1.015-3.589 1.187l-.102.011z"
  }), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "#FFF",
    d: "M24.981 11.395c-.237 0-.446.007-.656.015l-5.526 3.63-.088.922c-.016.166.073.327.235.431l.098.037 7.552-4.961a15.839 15.839 0 0 0-1.615-.074z"
  }), _react["default"].createElement("path", {
    opacity: 0.47,
    fill: "#006EAD",
    d: "M19.003 13.771c.036-.372.37-.688.833-.788 2.272-.491 3.203-.72 5.146-.72 1.942 0 2.873.229 5.147.72.463.099.797.417.83.788 0 0 .301 2.278.293 2.192l-.293-3.059c-.033-.372-.367-.688-.83-.789-2.272-.491-3.204-.719-5.147-.719-1.942 0-2.873.229-5.146.719-.463.1-.797.417-.833.789l-.291 3.059c-.009.086.291-2.192.291-2.192z"
  }), _react["default"].createElement("path", {
    fill: "#4F5E66",
    d: "M19.448 21.76c2.725-1.418 4.922 2.104 2.737 3.223-2.007 1.026-4.286 3.07-5.441 3.4-.107 2.429-1.396 3.116-1.004 6.494l-4.208-.951s.359-5.789 1.339-7.495c.91-1.58 4.801-3.744 6.577-4.671z"
  }), _react["default"].createElement("path", {
    fill: "#E81C26",
    d: "M30.483 19.303c-3.646 4.579-8.463 3.085-10.812 0 0 0-.325 1.422-.115 2.939.463 2.132 5.668 4.195 9.6 1.772.641-.395 1.329-.91 1.859-1.511.769-.874.813-2.18.057-3.066-.238-.278-.468-.415-.589-.134zM11.586 33.198l4.083.743c1.89 2.899 1.839 3.976.73 3.685 0 0 .338 2.479-.882 2.711-.768.146-1.396-.605-1.396-.605-2.551-.219-3.591-2.704-2.535-6.534zM44.605 29.206c.317-1.901-1.429-3.377-4.828-3.54l-.458 3.047c2.051 2.071 3.113 2.509 3.091 1.634 0 0 1.998.846 2.431.019.27-.519-.236-1.16-.236-1.16z"
  }), _react["default"].createElement("path", {
    fill: "#008CC9",
    d: "M32.047 25.928c-1.625 3.898-7.835 5.007-10.906 3.862.284 1.009.542 2.239.713 4.043.246 2.6 12.841-1.316 11.177-4.371-.697-1.275-.913-2.439-.984-3.534z"
  }));
};

var _default = SvgSnowboarder;
exports["default"] = _default;