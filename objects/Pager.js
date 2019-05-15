"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPager = function SvgPager(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pager_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 52,
    x2: 32.001,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#5b666e"
  }), _react["default"].createElement("stop", {
    offset: 0.008,
    stopColor: "#58626a"
  }), _react["default"].createElement("stop", {
    offset: 0.06,
    stopColor: "#464a55"
  }), _react["default"].createElement("stop", {
    offset: 0.115,
    stopColor: "#3a3947"
  }), _react["default"].createElement("stop", {
    offset: 0.175,
    stopColor: "#322f3e"
  }), _react["default"].createElement("stop", {
    offset: 0.25,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.825,
    stopColor: "#322f3e"
  }), _react["default"].createElement("stop", {
    offset: 0.885,
    stopColor: "#3a3947"
  }), _react["default"].createElement("stop", {
    offset: 0.94,
    stopColor: "#464a55"
  }), _react["default"].createElement("stop", {
    offset: 0.992,
    stopColor: "#58626a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#pager_svg__a)",
    d: "M60.9 17.161a6.67 6.67 0 0 0-3.873-3.792c-4.879-1.826-45.176-1.826-50.055 0a6.668 6.668 0 0 0-3.873 3.792c-1.466 3.621-1.466 26.056 0 29.677a6.667 6.667 0 0 0 3.873 3.793c4.879 1.826 45.176 1.826 50.055 0a6.667 6.667 0 0 0 3.873-3.793c1.466-3.621 1.466-26.056 0-29.677z"
  }), _react["default"].createElement("linearGradient", {
    id: "pager_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.004,
    y1: 33.455,
    x2: 32.004,
    y2: 21.456
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#9be022"
  }), _react["default"].createElement("stop", {
    offset: 0.407,
    stopColor: "#99de22"
  }), _react["default"].createElement("stop", {
    offset: 0.608,
    stopColor: "#93d622"
  }), _react["default"].createElement("stop", {
    offset: 0.762,
    stopColor: "#89c922"
  }), _react["default"].createElement("stop", {
    offset: 0.894,
    stopColor: "#7ab723"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#69a123"
  })), _react["default"].createElement("path", {
    fill: "url(#pager_svg__b)",
    d: "M57.004 31.456c0 1.1-.9 1.999-2 1.999h-46c-1.1 0-2-.899-2-1.999v-8c0-1.1.9-2 2-2h46c1.1 0 2 .9 2 2v8z"
  }), _react["default"].createElement("path", {
    fill: "#014F27",
    d: "M15.197 28.775c0 1.464-1.158 2.244-2.449 2.244-1.219 0-2.322-.7-2.438-2.009-.01-.155.074-.235.219-.235h.711c.135 0 .205.075.229.215.09.58.586.91 1.279.91.785 0 1.301-.425 1.301-1.125s-.516-1.125-1.301-1.125h-1.883c-.145 0-.23-.085-.221-.235l.24-3.308c.01-.135.096-.215.23-.215h3.557c.146 0 .227.08.227.225v.63c0 .145-.08.225-.227.225h-2.703l-.109 1.56h.939c1.29 0 2.399.779 2.399 2.243zM20.748 28.775c0 1.464-1.16 2.244-2.449 2.244-1.219 0-2.324-.7-2.439-2.009-.01-.155.076-.235.221-.235h.709c.135 0 .205.075.23.215.09.58.584.91 1.279.91.785 0 1.299-.425 1.299-1.125s-.514-1.125-1.299-1.125h-1.885c-.145 0-.229-.085-.219-.235l.24-3.308c.01-.135.094-.215.229-.215h3.559c.145 0 .225.08.225.225v.63c0 .145-.08.225-.225.225H17.52l-.111 1.56h.939c1.291 0 2.4.779 2.4 2.243zM26.123 28.775c0 1.464-1.16 2.244-2.449 2.244-1.219 0-2.324-.7-2.439-2.009-.01-.155.076-.235.221-.235h.709c.135 0 .205.075.23.215.09.58.584.91 1.279.91.785 0 1.299-.425 1.299-1.125s-.514-1.125-1.299-1.125h-.439c-.146 0-.225-.08-.225-.225v-.38a.45.45 0 0 1 .094-.28l1.334-1.794h-2.703c-.145 0-.225-.08-.225-.225v-.63c0-.145.08-.225.225-.225h3.848c.145 0 .225.08.225.225v.6a.454.454 0 0 1-.094.28l-1.309 1.749c.966.232 1.718.932 1.718 2.03zM27.176 28.146v-.589c0-.145.08-.225.225-.225h3.248c.145 0 .225.08.225.225v.589c0 .145-.08.225-.225.225H27.4c-.144 0-.224-.08-.224-.225zM36.771 28.63c0 1.409-1.023 2.389-2.473 2.389-1.455 0-2.475-.979-2.475-2.389 0-.544.152-1.024.422-1.408l-.002-.001 2.113-3.183a.304.304 0 0 1 .271-.145h.814c.18 0 .244.12.145.27l-1.414 2.081.125-.002c1.451 0 2.474.979 2.474 2.388zm-1.148 0c0-.795-.564-1.299-1.324-1.299-.766 0-1.324.5-1.324 1.299 0 .799.559 1.299 1.324 1.299.76.001 1.324-.504 1.324-1.299zM42.223 28.63c0 1.409-1.025 2.389-2.475 2.389-1.453 0-2.473-.979-2.473-2.389 0-.544.15-1.024.422-1.408l-.002-.001 2.113-3.183a.299.299 0 0 1 .27-.145h.814c.18 0 .244.12.145.27l-1.412 2.081.123-.002c1.449 0 2.475.979 2.475 2.388zm-1.151 0c0-.795-.564-1.299-1.324-1.299-.764 0-1.324.5-1.324 1.299 0 .799.561 1.299 1.324 1.299.76.001 1.324-.504 1.324-1.299zM47.697 28.775c0 1.464-1.16 2.244-2.449 2.244-1.219 0-2.322-.7-2.438-2.009-.01-.155.074-.235.219-.235h.711c.135 0 .203.075.229.215.09.58.586.91 1.279.91.785 0 1.301-.425 1.301-1.125s-.516-1.125-1.301-1.125h-1.883c-.146 0-.23-.085-.221-.235l.24-3.308c.01-.135.096-.215.23-.215h3.557c.146 0 .225.08.225.225v.63c0 .145-.078.225-.225.225h-2.703l-.109 1.56h.939c1.29 0 2.399.779 2.399 2.243zM53.697 28.785v.62c0 .145-.08.225-.225.225h-.576v1.034c0 .145-.08.225-.225.225h-.709c-.145 0-.225-.08-.225-.225V29.63h-3.264c-.145 0-.225-.08-.225-.225v-.699c0-.1.02-.185.064-.28l2.264-4.373c.055-.11.141-.16.266-.16h.764c.17 0 .24.11.16.27l-2.273 4.397h2.244v-1.594c0-.145.08-.225.225-.225h.709c.145 0 .225.08.225.225v1.594h.576c.145.001.225.081.225.225z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M18.116 46.5h-2.442c-1.285 0-3.01-.711-3.927-1.619L6.352 39.52c-.74-.732-.659-1.309-.545-1.586s.462-.742 1.503-.742h8.715c1.39 0 2.745 1.057 3.085 2.406l1.071 4.252c.172.682.047 1.359-.344 1.861s-1.018.789-1.721.789zM35.195 46.5H26.48c-1.39 0-2.746-1.057-3.087-2.406l-1.07-4.252c-.172-.682-.046-1.361.345-1.861.391-.502 1.018-.789 1.721-.789h8.715c1.369 0 2.753 1.08 3.086 2.406l1.07 4.252c.171.684.045 1.363-.347 1.863-.39.5-1.017.787-1.718.787zM47.244 46.5h-2.44c-1.369 0-2.753-1.08-3.086-2.406l-1.07-4.252c-.171-.684-.045-1.363.347-1.863.391-.5 1.017-.787 1.718-.787h13.684c.862 0 1.548.428 1.788 1.115.216.617.008 1.293-.53 1.723l-6.368 5.061c-.997.79-2.772 1.409-4.043 1.409z"
  }), _react["default"].createElement("linearGradient", {
    id: "pager_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 12.995,
    y1: 46,
    x2: 12.995,
    y2: 37.691
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 0.001,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 0.054,
    stopColor: "#515562"
  }), _react["default"].createElement("stop", {
    offset: 0.111,
    stopColor: "#454455"
  }), _react["default"].createElement("stop", {
    offset: 0.173,
    stopColor: "#3e3a4d"
  }), _react["default"].createElement("stop", {
    offset: 0.25,
    stopColor: "#3c374a"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#3c374a"
  }), _react["default"].createElement("stop", {
    offset: 0.827,
    stopColor: "#3e3a4d"
  }), _react["default"].createElement("stop", {
    offset: 0.889,
    stopColor: "#454455"
  }), _react["default"].createElement("stop", {
    offset: 0.946,
    stopColor: "#515562"
  }), _react["default"].createElement("stop", {
    offset: 0.999,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#616d75"
  })), _react["default"].createElement("path", {
    fill: "url(#pager_svg__c)",
    d: "M19.695 43.971c.283 1.115-.43 2.029-1.579 2.029h-2.442c-1.148 0-2.758-.664-3.575-1.475l-5.395-5.359c-.817-.811-.544-1.475.605-1.475h8.715c1.15 0 2.319.914 2.601 2.027l1.07 4.253z"
  }), _react["default"].createElement("linearGradient", {
    id: "pager_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 29.791,
    y1: 46,
    x2: 29.791,
    y2: 37.691
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 0.001,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 0.054,
    stopColor: "#515562"
  }), _react["default"].createElement("stop", {
    offset: 0.111,
    stopColor: "#454455"
  }), _react["default"].createElement("stop", {
    offset: 0.173,
    stopColor: "#3e3a4d"
  }), _react["default"].createElement("stop", {
    offset: 0.25,
    stopColor: "#3c374a"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#3c374a"
  }), _react["default"].createElement("stop", {
    offset: 0.827,
    stopColor: "#3e3a4d"
  }), _react["default"].createElement("stop", {
    offset: 0.889,
    stopColor: "#454455"
  }), _react["default"].createElement("stop", {
    offset: 0.946,
    stopColor: "#515562"
  }), _react["default"].createElement("stop", {
    offset: 0.999,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#616d75"
  })), _react["default"].createElement("path", {
    fill: "url(#pager_svg__d)",
    d: "M36.774 43.971c.28 1.115-.43 2.029-1.579 2.029H26.48c-1.15 0-2.32-.914-2.603-2.029l-1.069-4.252c-.281-1.113.431-2.027 1.58-2.027h8.715c1.15 0 2.321.914 2.601 2.027l1.07 4.252z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M16.371 41.846c0 2.092-3.136 2.092-3.136 0s3.136-2.092 3.136 0z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M32.982 41.846l-5.505-1.377v2.754z"
  }), _react["default"].createElement("linearGradient", {
    id: "pager_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 49.42,
    y1: 46,
    x2: 49.42,
    y2: 37.691
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 0.001,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 0.054,
    stopColor: "#515562"
  }), _react["default"].createElement("stop", {
    offset: 0.111,
    stopColor: "#454455"
  }), _react["default"].createElement("stop", {
    offset: 0.173,
    stopColor: "#3e3a4d"
  }), _react["default"].createElement("stop", {
    offset: 0.25,
    stopColor: "#3c374a"
  }), _react["default"].createElement("stop", {
    offset: 0.75,
    stopColor: "#3c374a"
  }), _react["default"].createElement("stop", {
    offset: 0.827,
    stopColor: "#3e3a4d"
  }), _react["default"].createElement("stop", {
    offset: 0.889,
    stopColor: "#454455"
  }), _react["default"].createElement("stop", {
    offset: 0.946,
    stopColor: "#515562"
  }), _react["default"].createElement("stop", {
    offset: 0.999,
    stopColor: "#616d75"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#616d75"
  })), _react["default"].createElement("path", {
    fill: "url(#pager_svg__e)",
    d: "M50.974 44.699c-.901.715-2.579 1.301-3.73 1.301h-2.44c-1.15 0-2.321-.914-2.601-2.029l-1.07-4.252c-.279-1.113.431-2.027 1.579-2.027h13.684c1.374 0 1.767 1.293.946 1.945l-6.368 5.062z"
  }), _react["default"].createElement("path", {
    fill: "#A6E639",
    d: "M50.145 42.652h-5.081c-1.104 0-1.104-1.613 0-1.613h5.081c1.104 0 1.104 1.613 0 1.613z"
  }));
};

var _default = SvgPager;
exports["default"] = _default;