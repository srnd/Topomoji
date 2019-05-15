"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgIceHockey = function SvgIceHockey(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "ice-hockey_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 42,
    y1: 57,
    x2: 57,
    y2: 57
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#ice-hockey_svg__a)",
    d: "M49.5 52c-4.141 0-7.5 1.318-7.5 2.949v4.102C42 60.682 45.359 62 49.5 62s7.5-1.318 7.5-2.949v-4.102C57 53.318 53.641 52 49.5 52z"
  }), _react["default"].createElement("path", {
    opacity: 0.3,
    fill: "#1A1626",
    d: "M49.813 61.99h.313v-4.111c-.107 0-.205 0-.313.01v4.101zM49.188 61.99c.107.01.205.01.312.01v-4.111h-.313v4.101zM50.438 61.971c.107 0 .205-.01.313-.01V57.85c-.107.01-.205.01-.313.02v4.101zM48.563 61.971c.107.01.205.01.313.02V57.88c-.107 0-.205-.01-.313-.01v4.101zM52.313 61.785l.313-.059v-4.102c-.107.02-.205.039-.313.049v4.112zM51.688 61.873c.107-.01.205-.029.313-.049v-4.102c-.107.01-.205.029-.313.039v4.112zM47.938 61.932c.107.01.205.02.313.029V57.85c-.107-.01-.205-.01-.313-.02v4.102zM51.063 61.932c.107-.01.205-.02.313-.029v-4.102c-.107 0-.205.02-.313.029v4.102zM52.938 61.668c.107-.02.205-.039.313-.068v-4.102c-.107.02-.205.039-.313.068v4.102zM44.188 61.131c.098.039.205.078.313.117v-4.111c-.107-.039-.215-.068-.313-.107v4.101zM42.938 60.477c.098.068.205.137.313.205V56.57a3.659 3.659 0 0 1-.313-.195v4.102zM47.313 61.873c.107.01.205.02.313.029V57.8c-.107-.02-.205-.02-.313-.039v4.112zM42.313 55.789v4.102c.088.117.195.234.313.342v-4.111a2.425 2.425 0 0 1-.313-.333zM43.563 60.848c.098.049.205.098.313.156v-4.111c-.107-.049-.215-.098-.313-.146v4.101zM44.813 61.355c.098.029.205.059.313.088v-4.111a14.46 14.46 0 0 1-.313-.088v4.111zM46.063 61.668l.313.059v-4.102l-.313-.059v4.102zM46.688 61.785c.107.02.205.029.313.039v-4.102c-.107-.02-.205-.029-.313-.049v4.112zM45.438 61.531c.098.02.205.049.313.068v-4.102c-.107-.029-.215-.049-.313-.078v4.112zM56.688 55.789v4.102c.205-.264.312-.547.312-.84v-4.102c0 .293-.107.567-.312.84zM54.188 61.355c.107-.039.205-.078.313-.107v-4.111c-.107.039-.205.078-.313.107v4.111zM54.813 61.131c.107-.039.205-.088.313-.127v-4.111c-.107.049-.205.088-.313.137v4.101zM55.438 60.848c.107-.059.215-.107.313-.166V56.57c-.098.059-.205.117-.313.176v4.102zM56.063 60.477c.117-.078.215-.156.313-.244v-4.111a4.296 4.296 0 0 1-.313.254v4.101zM53.563 61.531c.107-.029.205-.059.313-.088v-4.111c-.107.029-.205.059-.313.088v4.111z"
  }), _react["default"].createElement("linearGradient", {
    id: "ice-hockey_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 45.602,
    y1: 58.69,
    x2: 53.397,
    y2: 50.896
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.769,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#ice-hockey_svg__b)",
    d: "M56.775 54.793c0 1.543-3.262 2.793-7.275 2.793s-7.275-1.25-7.275-2.793S45.486 52 49.5 52s7.275 1.25 7.275 2.793z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#E6EBEF",
    d: "M49.5 52.996c2.588 0 4.688.781 4.688 1.758 0 .967-2.1 1.758-4.688 1.758s-4.688-.791-4.688-1.758c.001-.977 2.1-1.758 4.688-1.758zm0-.586c-3.447 0-6.25 1.045-6.25 2.344 0 1.289 2.803 2.344 6.25 2.344s6.25-1.055 6.25-2.344c0-1.299-2.803-2.344-6.25-2.344z"
  }), _react["default"].createElement("path", {
    opacity: 0.2,
    fill: "#E6EBEF",
    d: "M50.75 54.988c-.205 0-.313-.039-.313-.117v-.234c0-.078.107-.117.313-.117h2.031c.205 0 .313.039.313.117v.117c0 .742-1.611 1.348-3.594 1.348-.967 0-1.875-.146-2.539-.4-.146-.049-.146-.107 0-.166l.664-.244a.567.567 0 0 1 .439 0 4.38 4.38 0 0 0 1.436.225c.908 0 1.67-.225 1.934-.527h-.684z"
  }), _react["default"].createElement("path", {
    fill: "#FDD674",
    d: "M31.318 51.599l-2.924-2.039c-3.163 4.646-9.216 6.175-11.494 5.91-3.555-.407-7.655-1.352-11.763-2.519-3.183-.853-4.568 7.607-1.146 7.912 7.556.672 16.167 1.263 19 1.023 3.146-.265 3.933-2.47 8.327-10.287z"
  }), _react["default"].createElement("path", {
    fill: "#FF000E",
    d: "M31.318 51.599l19.6-30.779-2.621-1.68-19.902 30.42s1.126 1.58 2.923 2.039z"
  }), _react["default"].createElement("path", {
    fill: "#F5C755",
    d: "M30.791 51.427c-4.395 7.816-4.904 9.527-8.048 9.793-2.833.24-11.444-.352-19-1.023-.734-.064-1.235-.518-1.556-1.16.267.994.839 1.741 1.806 1.827 7.556.672 16.167 1.263 19 1.023 3.144-.266 3.931-2.471 8.326-10.288l-.528-.172z"
  }), _react["default"].createElement("path", {
    fill: "#DB0000",
    d: "M50.439 20.513L30.791 51.427c.358.125.527.172.527.172l19.6-30.779-.479-.307z"
  }), _react["default"].createElement("linearGradient", {
    id: "ice-hockey_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 43.304,
    y1: 90.417,
    x2: 40.293,
    y2: 84.34,
    gradientTransform: "rotate(32.552 77.938 26.465)"
  }, _react["default"].createElement("stop", {
    offset: 0.115,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.331,
    stopColor: "#363442"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#464955"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#ice-hockey_svg__c)",
    d: "M8.009 53.647S6.8 57.359 6.37 61.093c5.841.604 12.146.96 15.971.889l.132-7.698c-3.703 1.314-8.673.436-14.464-.637z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20.568 62l-.809-.035.316-7.117.819-.145zM18.184 61.933l-.808-.032.31-6.96h.749zM15.625 61.82l-.812-.046.721-6.955.905.071zM13.123 61.67l-.873-.063.982-7.065.798.11zM10.659 61.488l-.978-.083L11 54.186l.788.133zM8.247 61.278l-.89-.086 1.585-7.374.805.148z"
  }), _react["default"].createElement("linearGradient", {
    id: "ice-hockey_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 24.299,
    y1: 1.912,
    x2: 27.573,
    y2: 1.912,
    gradientTransform: "rotate(33.417 22.942 54.932) scale(.9999)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#ice-hockey_svg__d)",
    d: "M50.684 21.296c-1.885-.446-2.59-2.019-2.59-2.019L58.846 3.229l2.234 1.485-10.396 16.582z"
  }), _react["default"].createElement("linearGradient", {
    id: "ice-hockey_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 25.77,
    y1: -7.454,
    x2: 25.77,
    y2: -9.421,
    gradientTransform: "rotate(33.417 22.942 54.932) scale(.9999)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.769,
    stopColor: "#515862"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#ice-hockey_svg__e)",
    d: "M60.951 5.023c-.293.172-2.389-1.284-2.334-1.554.072-.367.322-1.339.727-1.467.224-.07 2.65 1.561 2.656 1.768.012.43-.748 1.077-1.049 1.253z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M51.23 20.345l-.439.671c-1.85-1.158-1.889-2.928-1.889-2.928l.436-.671c0 .001.385 2.079 1.892 2.928zM52.748 17.997l-.432.689c-1.896-1.192-1.93-2.831-1.93-2.831l.516-.771s.293 2.031 1.846 2.913zM54.195 15.565l-.436.669c-1.852-1.159-1.83-2.681-1.83-2.681l.537-.803c.001 0 .223 1.964 1.729 2.815zM55.732 13.212l-.439.67c-1.85-1.157-1.793-2.673-1.793-2.673l.531-.791s.194 1.944 1.701 2.794zM57.236 10.841l-.42.673c-1.852-1.159-1.787-2.586-1.787-2.586l.467-.697s.233 1.76 1.74 2.61zM58.715 8.487l-.408.653c-1.852-1.161-1.615-2.694-1.615-2.694l.467-.697c-.001.001.048 1.887 1.556 2.738zM60.221 6.084l-.422.673c-1.852-1.159-1.531-2.665-1.531-2.665l.457-.676c0 .001-.012 1.818 1.496 2.668z"
  }));
};

var _default = SvgIceHockey;
exports["default"] = _default;