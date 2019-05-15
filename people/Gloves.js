"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgGloves = function SvgGloves(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#369",
    d: "M48.343 31.819c-3.933 1.875-2.376 2.536-4.956 2.314l7.228-21.078c1.477-4.318-5.054-6.328-6.55-1.956l-5.757 16.795c-.158-.062-.313-.12-.477-.179l2.507-19.047c.614-4.647-6.61-5.463-7.224-.815l-2.402 18.262a24.735 24.735 0 0 0-.926-.079l.464-16.903c.12-4.584-6.952-4.709-7.083-.125l-.466 17.033c-.223.021-.463.055-.718.091L20.42 12.524c-.5-4.333-6.917-3.614-6.421.723 0 0 2.17 13.293 1.931 16.807-.101 1.488-2.23 9.317-.525 14.774 2.802 8.984 22.673 13.508 30.944-.311 1.646-2.75 5.456-6.021 8.112-8.467 6.048-3.417.199-7.377-6.118-4.231z"
  }), _react["default"].createElement("path", {
    fill: "#069",
    d: "M37.254 61.308c-2.377 1.792-19.71-.206-21.523-2.425-1.83-2.249-.465-8.021.742-11.865 0 0 14.771.258 23.18 4.024.067 3.86-.304 8.689-2.399 10.266z"
  }), _react["default"].createElement("path", {
    fill: "#004669",
    d: "M16.256 58.504s11.905-1.104 20.313 2.661c-4.659 1.054-18.719-1.022-20.313-2.661z"
  }), _react["default"].createElement("linearGradient", {
    id: "gloves_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 29.669,
    y1: 50.975,
    x2: 29.669,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0174a8"
  }), _react["default"].createElement("stop", {
    offset: 0.168,
    stopColor: "#0183be"
  }), _react["default"].createElement("stop", {
    offset: 0.368,
    stopColor: "#0191d1"
  }), _react["default"].createElement("stop", {
    offset: 0.573,
    stopColor: "#0198dc"
  }), _react["default"].createElement("stop", {
    offset: 0.794,
    stopColor: "#019be0"
  })), _react["default"].createElement("path", {
    fill: "url(#gloves_svg__a)",
    d: "M43.562 27.649c-3.678 2.279-2.05 2.77-4.643 2.825L43.5 8.788c.935-4.44-5.811-5.743-6.758-1.245l-3.646 17.281a13.692 13.692 0 0 0-.494-.126l.134-19.169c.038-4.677-7.248-4.719-7.283-.041l-.127 18.377c-.302 0-.624.013-.934.021l-1.63-16.821c-.447-4.564-7.496-3.936-7.06.628l1.646 16.951c-.219.046-.452.103-.702.168l-3.239-13.34c-1.034-4.248-7.325-2.853-6.293 1.4 0 0 3.8 12.961 3.996 16.476.085 1.485-1.064 9.483 1.308 14.717 3.896 8.618 24.216 10.993 30.73-3.6 1.297-2.903 4.681-6.554 7.018-9.266 5.593-4.033-.712-7.344-6.604-3.55z"
  }), _react["default"].createElement("linearGradient", {
    id: "gloves_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 25.371,
    y1: 59.553,
    x2: 25.371,
    y2: 45.82
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#0174a8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#019be0"
  })), _react["default"].createElement("path", {
    fill: "url(#gloves_svg__b)",
    d: "M36.184 58.093c-2.143 2.032-19.629 1.896-21.704-.116-2.099-2.036-1.456-7.909-.729-11.852 0 0 14.718-1.317 23.547 1.525.544 3.828.773 8.657-1.114 10.443z"
  }), _react["default"].createElement("path", {
    fill: "#1A5187",
    d: "M14.957 57.546s11.703-2.364 20.53.48c-4.505 1.542-18.744.976-20.53-.48z"
  }));
};

var _default = SvgGloves;
exports["default"] = _default;