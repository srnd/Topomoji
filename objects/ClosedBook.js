"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgClosedBook = function SvgClosedBook(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#7A0000",
    d: "M11 52s-2 0-2 4 2 4 2 4h6v-8h-6z"
  }), _react["default"].createElement("path", {
    fill: "#8F0000",
    d: "M17 52v8h36s2 0 2-2v-8l-38 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "closed-book_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.253,
    y1: 59,
    x2: 32.253,
    y2: 50
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
    fill: "url(#closed-book_svg__a)",
    d: "M17 53h-6s-1 0-1 3 1 3 1 3h41.506s2 0 2-2v-7L17 53z"
  }), _react["default"].createElement("path", {
    fill: "#A6141C",
    d: "M53 53H17v-6h38v4c0 2-2 2-2 2z"
  }), _react["default"].createElement("linearGradient", {
    id: "closed-book_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 36,
    y1: 52,
    x2: 36,
    y2: 4
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cf0000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#closed-book_svg__b)",
    d: "M55 6s0-2-2-2H17v48h36s2 0 2-2V6z"
  }), _react["default"].createElement("linearGradient", {
    id: "closed-book_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 9,
    y1: 30,
    x2: 17,
    y2: 30
  }, _react["default"].createElement("stop", {
    offset: 0.218,
    stopColor: "#870000"
  }), _react["default"].createElement("stop", {
    offset: 0.488,
    stopColor: "#9d0000"
  }), _react["default"].createElement("stop", {
    offset: 0.779,
    stopColor: "#ad0000"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b30000"
  })), _react["default"].createElement("path", {
    fill: "url(#closed-book_svg__c)",
    d: "M11 52s-2 0-2 4V8c0-4 2-4 2-4h6v48h-6z"
  }), _react["default"].createElement("path", {
    fill: "#8F0000",
    d: "M35 12.75a2.247 2.247 0 0 1 2.246 2.252A2.247 2.247 0 0 1 35 17.252a2.25 2.25 0 1 1 0-4.502zm0-.75a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
  }), _react["default"].createElement("path", {
    fill: "#8F0000",
    d: "M35.598 15.298a.123.123 0 0 1-.111-.036.13.13 0 0 1-.037-.112v-.301a.13.13 0 0 1 .037-.11.13.13 0 0 1 .111-.039h.979c.038-.007.082.009.111.039s.041.071.037.11v.153a1.726 1.726 0 0 1-2.945 1.218.128.128 0 0 1-.053-.107c0-.041.019-.08.053-.104l.318-.321c.024-.035.066-.051.107-.051s.08.017.104.051a.977.977 0 0 0 1.616-.389h-.327z"
  }), _react["default"].createElement("path", {
    fill: "#BEC3CF",
    d: "M10.237 58.041c.057.184.12.332.185.451l42.941-.225-43.126-.226zM10.058 57.109c.019.164.041.316.066.453l43.239-.227-43.305-.226zM10.004 56.176c.002.16.006.313.015.455l43.345-.227-43.36-.228zM10.027 55.244c-.01.143-.017.295-.021.455l43.357-.227-43.336-.228zM10.147 54.313a6.088 6.088 0 0 0-.075.455l43.291-.227-43.216-.228zM10.495 53.383a2.17 2.17 0 0 0-.214.451l43.082-.227-42.868-.224z"
  }), _react["default"].createElement("path", {
    fill: "#8F0000",
    d: "M24.558 22.353l-1.051-3.083c-.023-.073.014-.12.089-.12h.364c.059 0 .101.026.12.087l.83 2.564.83-2.564c.019-.062.061-.087.12-.087h.364c.075 0 .113.047.089.12l-1.05 3.083a.12.12 0 0 1-.12.087h-.465a.12.12 0 0 1-.12-.087zM28.701 21.269c0 .04-.003.078-.006.115-.007.068-.049.099-.112.099H26.832c.077.385.364.583.721.583.225 0 .41-.094.511-.226.038-.04.073-.063.13-.063l.301-.002c.077 0 .119.047.089.113-.172.383-.558.613-1.037.613-.75 0-1.24-.531-1.24-1.236 0-.695.496-1.236 1.231-1.236.702-.001 1.163.563 1.163 1.24zm-.512-.205c-.066-.4-.352-.573-.654-.573-.38 0-.637.222-.706.573h1.36zM30.316 20.155v.333c0 .066-.028.104-.078.104-.308.007-.599.176-.599.64v1.102c0 .069-.038.106-.106.106h-.296c-.068 0-.105-.037-.105-.106v-2.139c0-.068.037-.105.105-.105h.296c.068 0 .106.037.106.105v.247a.682.682 0 0 1 .569-.388c.07-.01.108.033.108.101zM32.372 21.779c0 .463-.404.721-.924.721-.481 0-.864-.23-.917-.677-.006-.073.036-.111.104-.111h.293c.063 0 .089.036.111.094.041.169.205.238.409.238.247 0 .417-.087.417-.266 0-.468-1.305-.134-1.305-1.03 0-.458.404-.721.888-.721.44 0 .818.23.87.677.007.073-.035.11-.104.11h-.291c-.064 0-.09-.035-.113-.096-.037-.167-.195-.235-.362-.235-.212 0-.38.087-.38.266 0 .473 1.304.132 1.304 1.03zM32.854 19.607v-.353c0-.068.037-.106.105-.106h.296c.068 0 .106.038.106.106v.353c0 .068-.038.106-.106.106h-.296c-.068 0-.105-.038-.105-.106zm0 2.726v-2.139c0-.068.037-.105.105-.105h.296c.068 0 .106.037.106.105v2.139c0 .069-.038.106-.106.106h-.296c-.068 0-.105-.037-.105-.106zM33.818 21.264c0-.698.553-1.236 1.241-1.236s1.241.538 1.241 1.236-.553 1.236-1.241 1.236-1.241-.538-1.241-1.236zm1.975 0a.722.722 0 0 0-.733-.743c-.413 0-.733.315-.733.743s.32.743.733.743a.722.722 0 0 0 .733-.743zM38.709 20.926v1.408c0 .069-.038.106-.105.106h-.297c-.068 0-.105-.037-.105-.106v-1.377c0-.303-.184-.454-.43-.454-.266 0-.506.158-.506.588v1.243c0 .069-.037.106-.105.106h-.296c-.068 0-.106-.037-.106-.106v-2.139c0-.068.038-.105.106-.105h.296c.068 0 .105.037.105.105v.161c.15-.229.381-.327.668-.327.436-.001.775.333.775.897zM42.788 21.45v.291c0 .068-.038.106-.106.106h-.27v.486c0 .069-.038.106-.105.106h-.334c-.068 0-.105-.037-.105-.106v-.486h-1.535c-.068 0-.105-.038-.105-.106v-.329c0-.047.009-.087.03-.132l1.064-2.056a.127.127 0 0 1 .124-.075h.36c.079 0 .112.052.075.127l-1.069 2.068h1.056v-.75c0-.068.037-.106.105-.106h.334c.067 0 .105.038.105.106v.75h.27c.068 0 .106.038.106.106zM43.15 22.333v-.376c0-.068.039-.105.106-.105h.376c.068 0 .105.037.105.105v.376c0 .069-.037.106-.105.106h-.376c-.067 0-.106-.037-.106-.106zM46.5 21.445c0 .688-.545 1.055-1.152 1.055-.572 0-1.092-.329-1.146-.945-.004-.073.035-.11.104-.11h.334c.063 0 .096.035.107.101.043.273.275.428.602.428.369 0 .611-.2.611-.529s-.242-.529-.611-.529h-.885c-.068 0-.108-.04-.104-.11l.111-1.556c.006-.063.045-.101.109-.101h1.673c.068 0 .106.038.106.106v.296c0 .068-.038.106-.106.106h-1.271l-.052.733h.442c.607 0 1.128.366 1.128 1.055z"
  }));
};

var _default = SvgClosedBook;
exports["default"] = _default;