"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSauropod = function SvgSauropod(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M34.205 52.042c3.317 4.068 4.547 7.411 3.752 7.694-1.458.519-2.919 2.264-1.193 2.264h5.322c1.006 0-.277-6.838-2.273-12.205-1.583-4.254-9.388-2.389-5.608 2.247zM13.631 48.729c-1.249 7.697-1.701 10.727-2.497 11.009C9.677 60.256 8.216 62 9.941 62h5.322c1.006 0 .868-1.796 1.281-4.171.417-2.391 2.714-2.186 4.226-6.081 3.106-8-5.948-10.361-7.139-3.019z"
  }), _react["default"].createElement("linearGradient", {
    id: "sauropod_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 31.57,
    x2: 62.001,
    y2: 31.57
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#56a134"
  }), _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#549d34"
  }), _react["default"].createElement("stop", {
    offset: 0.464,
    stopColor: "#4e9132"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#447c31"
  }), _react["default"].createElement("stop", {
    offset: 0.938,
    stopColor: "#36602e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#32572d"
  })), _react["default"].createElement("path", {
    fill: "url(#sauropod_svg__a)",
    d: "M39.332 53.606c-11.681 2.109-27.721-2.953-29.82-14.926-.933-2.788-4.188-4.808.698-22.438.35-2.346 1.175-8.344-1.524-8.926-1.004.629-6.165.598-6.22-.579-1.171-.093-.049-2.098 2.396-2.657-1.078-2.285 2.441-2.677 4.303-1.229 12.217 4.203 3.219 23.137 6.633 30.024 7.991-1.846 26.152 4.738 28.662 11.337 3.76 2.793 15.246 5.816 17.3 11.317.942 2.521-.472 5.612-11.459 5.612-5.036 0 12.872-1.757 6.472-5.935-5.787-3.772-12.496-2.493-17.441-1.6z"
  }), _react["default"].createElement("linearGradient", {
    id: "sauropod_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 7.532,
    y1: 33.473,
    x2: 59.658,
    y2: 33.473
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#8ac131"
  }), _react["default"].createElement("stop", {
    offset: 0.757,
    stopColor: "#73aa2d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#649c2b"
  })), _react["default"].createElement("path", {
    fill: "url(#sauropod_svg__b)",
    d: "M51.588 60.425c3.816-.609 12.123-2.483 5.723-6.661-5.785-3.774-12.004-3.815-16.948-2.922-11.682 2.109-26.901-1.51-29-13.481-.933-2.788-2.559-3.255.188-21.339.636-4.189.313-8.081-2.146-9.501-.229.47-.707.802-.707.802 2.478 1.004 1.896 6.614 1.228 8.886-4.387 14.912-1.58 19.736-.647 22.523 2.1 11.975 18.406 17.133 30.088 15.023 4.944-.894 11.413-2.245 17.198 1.527 4.671 3.05-4.977 5.143-4.977 5.143z"
  }), _react["default"].createElement("path", {
    fill: "#38702C",
    d: "M38.83 52.768c4.49-4.038 2.813-7.518 2.813-7.518 3.093 4.866-2.813 7.518-2.813 7.518z"
  }), _react["default"].createElement("path", {
    fill: "#38702C",
    d: "M37.586 52.622c5.816-1.636 5.857-5.497 5.857-5.497.615 5.73-5.857 5.497-5.857 5.497zM23.703 48.545c5.69 4.102 10.217 2.111 10.217 2.111-6.281 3.529-10.217-2.111-10.217-2.111zM27.435 48.051c3.908 3.723 7.569 2.68 7.569 2.68-5.16 2.032-7.569-2.68-7.569-2.68zM18.74 40.367s-3.15 3.889 1.306 10.312c0 0-6.656-5.099-1.306-10.312zM12.54 36.658c.115-3.57 3.258-3.782 3.258-3.782-2.327 1.333-3.258 3.782-3.258 3.782z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M6.721 6.52c-2.469 1.187-4.255.218-4.255.218 1.911.329 4.255-.218 4.255-.218z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M7.265 4.089c0 1.015-1.525 1.015-1.525 0 0-1.014 1.525-1.014 1.525 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M6.426 3.751c0 .305-.458.305-.458 0 .001-.304.458-.304.458 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "sauropod_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 29.53,
    y1: 53.295,
    x2: 40.973,
    y2: 53.295
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#56a134"
  }), _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#549d34"
  }), _react["default"].createElement("stop", {
    offset: 0.464,
    stopColor: "#4e9132"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#447c31"
  }), _react["default"].createElement("stop", {
    offset: 0.938,
    stopColor: "#36602e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#32572d"
  })), _react["default"].createElement("path", {
    fill: "url(#sauropod_svg__c)",
    d: "M32.32 49.546c.772 8.464-.019 9.907-.814 10.19-1.458.519-2.919 2.264-1.193 2.264h5.322c1.006 0 .756-1.803.756-4.214 0-2.799 2.553-2.6 4.064-6.494 3.106-8.001-8.811-9.153-8.135-1.746z"
  }), _react["default"].createElement("linearGradient", {
    id: "sauropod_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 36.684,
    y1: 53.382,
    x2: 36.684,
    y2: 43.963
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#32572d"
  }), _react["default"].createElement("stop", {
    offset: 0.055,
    stopColor: "#345b2d"
  }), _react["default"].createElement("stop", {
    offset: 0.373,
    stopColor: "#3d702b"
  }), _react["default"].createElement("stop", {
    offset: 0.69,
    stopColor: "#427c2a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#44802a"
  })), _react["default"].createElement("path", {
    fill: "url(#sauropod_svg__d)",
    d: "M39.316 53.382c5.254-10.843-7.764-11.491-6.739-.257-4.111-13.456 14.91-10.987 6.739.257z"
  }), _react["default"].createElement("linearGradient", {
    id: "sauropod_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 16.92,
    y1: 52.236,
    x2: 26.25,
    y2: 52.236
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#56a134"
  }), _react["default"].createElement("stop", {
    offset: 0.23,
    stopColor: "#549d34"
  }), _react["default"].createElement("stop", {
    offset: 0.464,
    stopColor: "#4e9132"
  }), _react["default"].createElement("stop", {
    offset: 0.701,
    stopColor: "#447c31"
  }), _react["default"].createElement("stop", {
    offset: 0.938,
    stopColor: "#36602e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#32572d"
  })), _react["default"].createElement("path", {
    fill: "url(#sauropod_svg__e)",
    d: "M18.407 47.515c2.05 8.245 1.284 11.939.488 12.223-1.457.517-2.918 2.262-1.193 2.262h5.322c1.006 0 .756-1.802.756-4.214 0-2.799 2.355-4.822 2.466-9.157.233-9.09-9.286-6.935-7.839-1.114z"
  }), _react["default"].createElement("linearGradient", {
    id: "sauropod_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 22.332,
    y1: 52.505,
    x2: 22.332,
    y2: 41.584
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#32572d"
  }), _react["default"].createElement("stop", {
    offset: 0.055,
    stopColor: "#345b2d"
  }), _react["default"].createElement("stop", {
    offset: 0.373,
    stopColor: "#3d702b"
  }), _react["default"].createElement("stop", {
    offset: 0.69,
    stopColor: "#427c2a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#44802a"
  })), _react["default"].createElement("path", {
    fill: "url(#sauropod_svg__f)",
    d: "M25.486 52.505c3.417-12.251-8.566-12.708-6.33-1.542-5.544-12.477 11.935-13.038 6.33 1.542z"
  }), _react["default"].createElement("path", {
    fill: "#38702C",
    d: "M17.665 35.198c-1.348-.01-1.338 1.861.011 1.872 1.349.009 1.34-1.863-.011-1.872zM19.87 38.159c-.777-.007-.771 1.071.007 1.077s.771-1.073-.007-1.077zM28.49 39.936c-.778-.009-.772 1.071.004 1.077.777.006.773-1.075-.004-1.077zM19.871 33.367c-.777-.006-.772 1.073.006 1.078.777.007.769-1.074-.006-1.078zM37.264 39.265c-.777-.006-.771 1.073.006 1.078.777.007.769-1.074-.006-1.078zM34.359 37.395c-.777-.007-.771 1.072.007 1.078.778.005.771-1.076-.007-1.078zM25.158 34.181c-.968-.008-.961 1.335.008 1.342.966.006.959-1.336-.008-1.342zM27.332 36.592c-.968-.008-.961 1.335.008 1.342.966.006.959-1.336-.008-1.342zM21.824 35.464c-.968-.008-.961 1.335.008 1.342.966.007.959-1.336-.008-1.342zM32.866 39.804c-.968-.008-.961 1.335.009 1.342.965.006.958-1.336-.009-1.342zM24.429 38.198c-1.348-.012-1.338 1.861.012 1.87 1.348.01 1.338-1.862-.012-1.87zM30.532 36.327c-1.349-.011-1.338 1.861.011 1.871 1.349.011 1.339-1.864-.011-1.871z"
  }));
};

var _default = SvgSauropod;
exports["default"] = _default;