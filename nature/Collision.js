"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCollision = function SvgCollision(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "collision_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d90100"
  }), _react["default"].createElement("stop", {
    offset: 0.117,
    stopColor: "#e01313"
  }), _react["default"].createElement("stop", {
    offset: 0.366,
    stopColor: "#ee3535"
  }), _react["default"].createElement("stop", {
    offset: 0.603,
    stopColor: "#f74d4d"
  }), _react["default"].createElement("stop", {
    offset: 0.821,
    stopColor: "#fd5c5c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff6161"
  })), _react["default"].createElement("path", {
    fill: "url(#collision_svg__a)",
    d: "M43.908 35.201L62 25.168l-20.301.883 6.03-12.455-10.997 7.824L38.09 4.242l-8 14.156L18.047 2l5.176 20.43-18.065-5.996 14.397 13.15L2 33l16.828 3.832-9.437 16.84 15.445-9.326L25.473 62l6.326-16.125 8.512 12.76-.471-15.324 14.654 5.595z"
  }), _react["default"].createElement("linearGradient", {
    id: "collision_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 31.809,
    y1: 47.68,
    x2: 31.809,
    y2: 15.323
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f80"
  }), _react["default"].createElement("stop", {
    offset: 0.211,
    stopColor: "#ffa113"
  }), _react["default"].createElement("stop", {
    offset: 0.543,
    stopColor: "#ffc32b"
  }), _react["default"].createElement("stop", {
    offset: 0.818,
    stopColor: "#ffd83a"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ffdf40"
  })), _react["default"].createElement("path", {
    fill: "url(#collision_svg__b)",
    d: "M38.652 33.674l10.594-4.912-11.748-.348 3.15-6.986-6.224 3.566.232-9.5-4.179 7.92-6.295-8.092 2.75 10.199-10.487-2.656 8.571 7.395-10.645 2.502 9.742 2.242-6.867 10.533 10.529-7.131.288 9.274 3.783-8.473 4.275 6.33-.072-7.672 7.697 3.375z"
  }), _react["default"].createElement("linearGradient", {
    id: "collision_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 31.808,
    y1: 38.352,
    x2: 31.808,
    y2: 24.651
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fff1a3"
  }), _react["default"].createElement("stop", {
    offset: 0.16,
    stopColor: "#fff4b6"
  }), _react["default"].createElement("stop", {
    offset: 0.527,
    stopColor: "#fffade"
  }), _react["default"].createElement("stop", {
    offset: 0.82,
    stopColor: "#fffef6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#collision_svg__c)",
    d: "M34.705 32.42l4.486-2.08-4.974-.147 1.334-2.957-2.635 1.51.098-4.023-1.77 3.353-2.666-3.426 1.166 4.319-4.441-1.125 3.629 3.131-4.508 1.06 4.125.949-2.906 4.459 4.457-3.019.123 3.928 1.601-3.588 1.811 2.679-.031-3.248 3.259 1.43z"
  }));
};

var _default = SvgCollision;
exports["default"] = _default;