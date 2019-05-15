"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDoughnut = function SvgDoughnut(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("radialGradient", {
    id: "doughnut_svg__a",
    cx: 28.167,
    cy: 64.45,
    r: 23.864,
    gradientTransform: "matrix(1 0 0 .8158 0 -8.941)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fac37d"
  }), _react["default"].createElement("stop", {
    offset: 0.44,
    stopColor: "#f8c17b"
  }), _react["default"].createElement("stop", {
    offset: 0.638,
    stopColor: "#f2ba75"
  }), _react["default"].createElement("stop", {
    offset: 0.788,
    stopColor: "#e7ad6b"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#d79b5c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c7894d"
  })), _react["default"].createElement("path", {
    fill: "url(#doughnut_svg__a)",
    d: "M2 38.034C2 50.242 12.766 62 32 62c19.231 0 30-11.76 30-23.966 0-14.926-13.434-27.023-30-27.023-16.568 0-30 12.097-30 27.023zm18.924 2.497c0-4.336 4.959-7.852 11.076-7.852 6.113 0 11.072 3.516 11.072 7.852 0 4.335-4.959 7.853-11.072 7.853-6.117 0-11.076-3.518-11.076-7.853z"
  }), _react["default"].createElement("radialGradient", {
    id: "doughnut_svg__b",
    cx: 32.084,
    cy: 51.145,
    r: 28.872,
    gradientTransform: "matrix(1 0 0 .7109 0 -7.902)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.485,
    stopColor: "#4f3225"
  }), _react["default"].createElement("stop", {
    offset: 0.653,
    stopColor: "#7c5849"
  }), _react["default"].createElement("stop", {
    offset: 0.746,
    stopColor: "#8f6858"
  }), _react["default"].createElement("stop", {
    offset: 0.964,
    stopColor: "#4f3225"
  })), _react["default"].createElement("path", {
    fill: "url(#doughnut_svg__b)",
    d: "M2 30.744c0 2.186.234 4.263.693 6.219.604 2.576.979 7.112 2.346 9.231.68 1.052 2.162-.389 3.361-.389 2.232 0 2.615 5.542 5.271 5.542 3.984 0 2.102 3.81 7.615 3.81 2.947 0 4.229-3.117 5.746-3.117 3.816 0 3.627 5.811 7.254 5.811 3.803 0 3.605-6.869 7.064-6.869 3.375 0 4.078 3.542 6.73 3.542 2.813 0 2.105-10.5 5.227-10.5 3.594 0 5.602-1.625 6.354-3.136C61.168 37.865 62 34.458 62 30.744 62 18.669 48.566 8 32 8S2 18.669 2 30.744zm18.924.36c0-1.409 1.326-2.407 2.242-3.549.67-.837 1.186-3.019 2.227-3.631 1.916-1.12 3.613 2.821 6.291 2.821 1.381 0 4.252-2.786 5.473-2.459 2.047.55 1.156 2.029 2.416 3.269 1.313 1.29 3.502 1.837 3.502 3.549 0 4.337-2.438 7.852-11.074 7.852-8.64-.001-11.077-3.517-11.077-7.852z"
  }), _react["default"].createElement("path", {
    fill: "#18B5F8",
    d: "M11.021 29.538l-3.891-.426c-.628-.07-.519-1.12.11-1.05l3.889.428c.627.067.518 1.116-.108 1.048z"
  }), _react["default"].createElement("path", {
    fill: "#FF1F2B",
    d: "M48.259 40.687l-3.465-1.819c-.56-.294-.074-1.231.486-.937l3.463 1.82c.559.29.074 1.227-.484.936z"
  }), _react["default"].createElement("path", {
    fill: "#ED1EE4",
    d: "M41.505 44.716l-.584-3.872c-.096-.625.946-.786 1.043-.161l.583 3.874c.094.625-.946.786-1.042.159z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M14.2 34.661l-3.504 1.755c-.564.284-1.038-.657-.473-.941l3.505-1.755c.564-.284 1.037.656.472.941z"
  }), _react["default"].createElement("path", {
    fill: "#89CC14",
    d: "M15.14 17.511l-3.788.993c-.611.161-.875-.859-.264-1.021l3.789-.993c.611-.162.874.859.263 1.021z"
  }), _react["default"].createElement("path", {
    fill: "#18B5F8",
    d: "M41.707 13.145l-3.897-.354c-.629-.058-.54-1.109.09-1.051l3.896.354c.628.055.538 1.107-.089 1.051z"
  }), _react["default"].createElement("path", {
    fill: "#FF1F2B",
    d: "M23.137 18.625l-3.027-2.481c-.489-.4.175-1.221.665-.819l3.025 2.481c.489.397-.175 1.216-.663.819z"
  }), _react["default"].createElement("path", {
    fill: "#ED1EE4",
    d: "M34.228 18.712l-3.638-1.45c-.587-.233-.201-1.214.388-.981l3.639 1.451c.585.234.2 1.214-.389.98z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M31.579 10.433l-3.34 2.053c-.537.331-1.09-.566-.553-.897l3.341-2.053c.537-.332 1.09.565.552.897z"
  }), _react["default"].createElement("path", {
    fill: "#89CC14",
    d: "M29.833 42.861l-3.007 2.509c-.485.405-1.158-.406-.672-.812l3.007-2.509c.485-.405 1.156.406.672.812z"
  }), _react["default"].createElement("path", {
    fill: "#18B5F8",
    d: "M22.277 41.216l-1.835 3.457c-.297.557-1.232.067-.934-.491l1.836-3.454c.293-.558 1.228-.069.933.488z"
  }), _react["default"].createElement("path", {
    fill: "#FF1F2B",
    d: "M50.446 16.915l-3.437-1.874c-.555-.303-.056-1.232.501-.929l3.434 1.875c.555.299.055 1.228-.498.928z"
  }), _react["default"].createElement("path", {
    fill: "#ED1EE4",
    d: "M56.538 23.048l-3.917.019c-.632.004-.642-1.05-.009-1.056l3.918-.018c.631-.003.641 1.051.008 1.055z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M49.918 26.255l-3.776 1.053c-.607.171-.893-.844-.283-1.015l3.775-1.053c.608-.171.892.843.284 1.015z"
  }), _react["default"].createElement("path", {
    fill: "#89CC14",
    d: "M45.269 19.144l-3.141 2.338c-.506.379-1.133-.469-.627-.848l3.143-2.339c.505-.379 1.13.469.625.849z"
  }), _react["default"].createElement("path", {
    fill: "#18B5F8",
    d: "M58.289 34.999l-3.355-2.016c-.541-.326-.003-1.234.539-.907l3.353 2.016c.541.323.003 1.23-.537.907z"
  }), _react["default"].createElement("path", {
    fill: "#FF1F2B",
    d: "M20.811 36.614l-3.829.812c-.618.132-.843-.899-.224-1.03l3.828-.811c.616-.134.84.897.225 1.029z"
  }), _react["default"].createElement("path", {
    fill: "#ED1EE4",
    d: "M16.419 26.121l-2.639-2.893c-.427-.467.349-1.18.777-.714l2.64 2.895c.425.467-.35 1.181-.778.712z"
  }), _react["default"].createElement("path", {
    fill: "#FFE12C",
    d: "M34.604 43.541l-2.495-3.022c-.403-.486.409-1.158.812-.672l2.496 3.023c.402.486-.408 1.157-.813.671z"
  }), _react["default"].createElement("path", {
    fill: "#89CC14",
    d: "M50.875 34.375l-3.898-.367c-.63-.059-.527-1.107.103-1.049l3.899.367c.629.058.526 1.107-.104 1.049z"
  }));
};

var _default = SvgDoughnut;
exports["default"] = _default;