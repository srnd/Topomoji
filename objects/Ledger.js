"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLedger = function SvgLedger(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M13.011 52s-2 0-2 4 2 4 2 4h6v-8h-6zM19.011 52v8h36.001s2 0 2-2v-8l-38.001 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 34.265,
    y1: 7,
    x2: 34.265,
    y2: 15.958,
    gradientTransform: "matrix(1 0 0 -1 0 66)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), _react["default"].createElement("stop", {
    offset: 0.226,
    stopColor: "#f5f6f7"
  }), _react["default"].createElement("stop", {
    offset: 0.607,
    stopColor: "#dbdfe2"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b9c2c7"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__a)",
    d: "M18.991 53h-5.937a.382.382 0 0 0-.107.011c-.221.061-.936.452-.936 2.989 0 2.331.604 2.851.873 2.967.059.025.12.033.184.033h41.449s2 0 2-2v-6.455a.502.502 0 0 0-.543-.501L19.03 52.998a.484.484 0 0 1-.039.002z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M55.012 53H19.011v-6h38.001v4c0 2-2 2-2 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 11.136,
    y1: 30,
    x2: 24.141,
    y2: 30
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f59e01"
  }), _react["default"].createElement("stop", {
    offset: 0.7,
    stopColor: "#f9c802"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__b)",
    d: "M55.012 4H13.011s-2 0-2 4v48c0-4 2-4 2-4h42.001s2 0 2-2V6s0-2-2-2z"
  }), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M12.248 58.041c.057.184.12.332.185.451l42.941-.226-43.126-.225zM12.069 57.109c.019.164.041.315.066.453l43.239-.228-43.305-.225zM12.015 56.176c.002.16.006.313.015.455l43.345-.227-43.36-.228zM12.038 55.244c-.01.143-.017.295-.021.455l43.357-.228-43.336-.227zM12.158 54.313a6.057 6.057 0 0 0-.075.454l43.292-.227-43.217-.227zM12.506 53.383a2.196 2.196 0 0 0-.214.451l43.082-.227-42.868-.224z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.012 7.5c1.998 0 1.998 3 0 3-2.002 0-2.002-3 0-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 7.971,
    y1: 11.967,
    x2: 14.332,
    y2: 5.606
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.139,
    stopColor: "#81929a"
  }), _react["default"].createElement("stop", {
    offset: 0.42,
    stopColor: "#b2bec4"
  }), _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.741,
    stopColor: "#b9c4ca"
  }), _react["default"].createElement("stop", {
    offset: 0.85,
    stopColor: "#9fadb3"
  }), _react["default"].createElement("stop", {
    offset: 0.967,
    stopColor: "#7a8c93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__c)",
    d: "M7.011 8.876c-.272 3.082 2.068 4.271 4 4.271v-1.844c-1.155 0-2.266-.959-2.122-2.232.313-2.751 5.122-2.799 5.122-.071 0 1.111 2 1.111 2 0 0-5.454-8.553-5.187-9-.124z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.012 17.502c1.998 0 1.998 3 0 3-2.002 0-2.002-3 0-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 7.971,
    y1: 21.969,
    x2: 14.332,
    y2: 15.608
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.139,
    stopColor: "#81929a"
  }), _react["default"].createElement("stop", {
    offset: 0.42,
    stopColor: "#b2bec4"
  }), _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.741,
    stopColor: "#b9c4ca"
  }), _react["default"].createElement("stop", {
    offset: 0.85,
    stopColor: "#9fadb3"
  }), _react["default"].createElement("stop", {
    offset: 0.967,
    stopColor: "#7a8c93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__d)",
    d: "M7.011 18.877c-.272 3.082 2.068 4.271 4 4.271v-1.844c-1.155 0-2.266-.959-2.122-2.232.313-2.75 5.122-2.799 5.122-.07 0 1.111 2 1.111 2 0 0-5.455-8.553-5.188-9-.125z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.012 27.503c1.998 0 1.998 3 0 3-2.002 0-2.002-3 0-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 7.971,
    y1: 31.97,
    x2: 14.332,
    y2: 25.61
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.139,
    stopColor: "#81929a"
  }), _react["default"].createElement("stop", {
    offset: 0.42,
    stopColor: "#b2bec4"
  }), _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.741,
    stopColor: "#b9c4ca"
  }), _react["default"].createElement("stop", {
    offset: 0.85,
    stopColor: "#9fadb3"
  }), _react["default"].createElement("stop", {
    offset: 0.967,
    stopColor: "#7a8c93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__e)",
    d: "M7.011 28.879c-.272 3.082 2.068 4.271 4 4.271v-1.844c-1.155 0-2.266-.959-2.122-2.232.313-2.75 5.122-2.798 5.122-.07 0 1.111 2 1.111 2 0 0-5.455-8.553-5.189-9-.125z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.012 37.504c1.998 0 1.998 3 0 3-2.002 0-2.002-3 0-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 7.971,
    y1: 41.972,
    x2: 14.332,
    y2: 35.611
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.139,
    stopColor: "#81929a"
  }), _react["default"].createElement("stop", {
    offset: 0.42,
    stopColor: "#b2bec4"
  }), _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.741,
    stopColor: "#b9c4ca"
  }), _react["default"].createElement("stop", {
    offset: 0.85,
    stopColor: "#9fadb3"
  }), _react["default"].createElement("stop", {
    offset: 0.967,
    stopColor: "#7a8c93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__f)",
    d: "M7.011 38.881c-.272 3.082 2.068 4.27 4 4.27v-1.844c-1.155 0-2.266-.959-2.122-2.232.313-2.75 5.122-2.797 5.122-.07 0 1.111 2 1.111 2 0 0-5.454-8.553-5.189-9-.124z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M15.012 47.506c1.998 0 1.998 3 0 3-2.002 0-2.002-3 0-3z"
  }), _react["default"].createElement("linearGradient", {
    id: "ledger_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 7.971,
    y1: 51.973,
    x2: 14.332,
    y2: 45.612
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#6e8189"
  }), _react["default"].createElement("stop", {
    offset: 0.139,
    stopColor: "#81929a"
  }), _react["default"].createElement("stop", {
    offset: 0.42,
    stopColor: "#b2bec4"
  }), _react["default"].createElement("stop", {
    offset: 0.57,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.645,
    stopColor: "#c9d3d8"
  }), _react["default"].createElement("stop", {
    offset: 0.741,
    stopColor: "#b9c4ca"
  }), _react["default"].createElement("stop", {
    offset: 0.85,
    stopColor: "#9fadb3"
  }), _react["default"].createElement("stop", {
    offset: 0.967,
    stopColor: "#7a8c93"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#ledger_svg__g)",
    d: "M7.011 48.882c-.272 3.082 2.068 4.271 4 4.271v-1.844c-1.155 0-2.266-.959-2.122-2.232.313-2.75 5.122-2.798 5.122-.07 0 1.111 2 1.111 2 0 0-5.455-8.553-5.189-9-.125z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M26.402 21.192v.319c0 .096-.053.148-.149.148h-2.451c-.097 0-.149-.053-.149-.148v-4.605c0-.097.052-.148.149-.148h.35c.096 0 .149.052.149.148v4.138h1.952c.097 0 .149.053.149.148zM29.884 21.192v.319c0 .096-.053.148-.148.148h-2.539c-.096 0-.148-.053-.148-.148v-4.605c0-.097.053-.148.148-.148h2.504c.097 0 .148.052.148.148v.318c0 .097-.052.149-.148.149h-2.004v1.508h1.829c.097 0 .149.052.149.148v.312c0 .097-.053.149-.149.149h-1.829v1.553h2.039c.096.001.148.054.148.149zM35.053 19.209c0 1.36-.978 2.451-2.331 2.451h-1.899c-.098 0-.149-.053-.149-.148v-4.605c0-.097.052-.148.149-.148h1.898c1.354-.001 2.332 1.09 2.332 2.45zm-.627 0c0-1.035-.69-1.835-1.704-1.835h-1.4v3.67h1.4c1.013 0 1.704-.801 1.704-1.835zM40.44 19.284v2.227c0 .096-.053.148-.149.148h-.332c-.096 0-.148-.053-.148-.148v-.564c-.368.541-1.014.801-1.729.801-1.445 0-2.504-1.128-2.504-2.539s1.066-2.539 2.539-2.539c1.039 0 1.938.618 2.268 1.493.036.104-.016.17-.121.17h-.391a.184.184 0 0 1-.177-.11c-.267-.546-.878-.923-1.579-.923-1.121 0-1.891.834-1.891 1.909 0 1.093.78 1.926 1.891 1.926.886 0 1.668-.471 1.688-1.407h-1.439c-.096 0-.148-.053-.148-.149v-.294c0-.097.053-.148.148-.148h1.926c.096-.001.148.051.148.147zM44.221 21.192v.319c0 .096-.053.148-.148.148h-2.54c-.096 0-.148-.053-.148-.148v-4.605c0-.097.053-.148.148-.148h2.504c.097 0 .148.052.148.148v.318c0 .097-.052.149-.148.149h-2.004v1.508h1.829c.097 0 .149.052.149.148v.312c0 .097-.053.149-.149.149h-1.829v1.553h2.039c.096.001.149.054.149.149zM48.743 21.66h-.435a.222.222 0 0 1-.186-.084l-1.537-1.789h-.928v1.725c0 .096-.053.148-.148.148h-.351c-.097 0-.149-.053-.149-.148v-4.605c0-.097.053-.148.149-.148h1.637c.843 0 1.523.681 1.523 1.523 0 .647-.426 1.212-1.021 1.42l1.528 1.773c.083.096.044.185-.082.185zm-3.085-2.466h1.138c.481 0 .876-.409.876-.913 0-.51-.395-.914-.876-.914h-1.138v1.827z"
  }));
};

var _default = SvgLedger;
exports["default"] = _default;