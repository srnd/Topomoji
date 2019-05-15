"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLink = function SvgLink(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "link_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -335.546,
    y1: 208.764,
    x2: -312.579,
    y2: 185.796,
    gradientTransform: "rotate(45.001 76.973 554.172)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#707b7d"
  }), _react["default"].createElement("stop", {
    offset: 0.099,
    stopColor: "#939c9f"
  }), _react["default"].createElement("stop", {
    offset: 0.205,
    stopColor: "#b2b9bc"
  }), _react["default"].createElement("stop", {
    offset: 0.295,
    stopColor: "#c5cbce"
  }), _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#ccd1d4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#707b7d"
  })), _react["default"].createElement("path", {
    fill: "url(#link_svg__a)",
    d: "M33.64 30.363c-4.547-4.547-6.172-12.125-.487-17.81l6.919-6.919c5.687-5.687 13.263-4.061 17.81.485 4.545 4.544 6.171 12.122.484 17.809l-6.919 6.919c-5.686 5.686-13.263 4.06-17.807-.484zm19.667-19.669c-1.698-1.698-5.436-3.712-8.661-.485l-6.918 6.918c-3.227 3.227-1.213 6.963.485 8.662 1.698 1.698 5.435 3.71 8.66.484l6.918-6.92c3.227-3.224 1.214-6.959-.484-8.659z"
  }), _react["default"].createElement("linearGradient", {
    id: "link_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -336.999,
    y1: 236.197,
    x2: -311.127,
    y2: 236.197,
    gradientTransform: "rotate(45.001 76.973 554.172)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#707b7d"
  }), _react["default"].createElement("stop", {
    offset: 0.099,
    stopColor: "#939c9f"
  }), _react["default"].createElement("stop", {
    offset: 0.205,
    stopColor: "#b2b9bc"
  }), _react["default"].createElement("stop", {
    offset: 0.295,
    stopColor: "#c5cbce"
  }), _react["default"].createElement("stop", {
    offset: 0.358,
    stopColor: "#ccd1d4"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#707b7d"
  })), _react["default"].createElement("path", {
    fill: "url(#link_svg__b)",
    d: "M6.122 57.881c-4.547-4.546-6.175-12.122-.487-17.81l6.916-6.916c5.688-5.688 13.265-4.061 17.81.485 4.545 4.544 6.172 12.121.484 17.809l-6.916 6.916c-5.688 5.688-13.264 4.06-17.807-.484zm19.665-19.666c-1.698-1.698-5.436-3.713-8.662-.486l-6.916 6.917c-3.227 3.227-1.213 6.962.486 8.661 1.698 1.698 5.434 3.712 8.659.485l6.917-6.917c3.227-3.227 1.215-6.961-.484-8.66z"
  }), _react["default"].createElement("linearGradient", {
    id: "link_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -327.758,
    y1: 216.739,
    x2: -320.365,
    y2: 216.739,
    gradientTransform: "rotate(45.001 76.973 554.172)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#707b7d"
  }), _react["default"].createElement("stop", {
    offset: 0.081,
    stopColor: "#939c9f"
  }), _react["default"].createElement("stop", {
    offset: 0.167,
    stopColor: "#b2b9bc"
  }), _react["default"].createElement("stop", {
    offset: 0.24,
    stopColor: "#c5cbce"
  }), _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#ccd1d4"
  }), _react["default"].createElement("stop", {
    offset: 0.751,
    stopColor: "#707b7d"
  })), _react["default"].createElement("path", {
    fill: "url(#link_svg__c)",
    d: "M21.48 42.521c-1.446-1.446-1.589-3.639-.326-4.901l16.465-16.465c1.265-1.265 3.455-1.118 4.9.326 1.442 1.443 1.591 3.638.327 4.901L26.381 42.849c-1.263 1.261-3.458 1.116-4.901-.328z"
  }));
};

var _default = SvgLink;
exports["default"] = _default;