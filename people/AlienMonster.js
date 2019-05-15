"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlienMonster = function SvgAlienMonster(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "alien-monster_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 49,
    y1: 14,
    x2: 49,
    y2: 8
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#288677"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#18a891"
  })), _react["default"].createElement("path", {
    fill: "url(#alien-monster_svg__a)",
    d: "M46 8h6v6h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "alien-monster_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 15,
    y1: 14,
    x2: 15,
    y2: 8
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#288677"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#18a891"
  })), _react["default"].createElement("path", {
    fill: "url(#alien-monster_svg__b)",
    d: "M12 8h6v6h-6z"
  }), _react["default"].createElement("linearGradient", {
    id: "alien-monster_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 14.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#288677"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#18a891"
  })), _react["default"].createElement("path", {
    fill: "url(#alien-monster_svg__c)",
    d: "M56 20v12h-4v-6h-6V14h-6v6H24v-6h-6v12h-6v6H8V20H2v18h6v12h12v6h-6v6h12V50h12v12h12v-6h-6v-6h12V38h6V20z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M20 32h6v10h-6zM38 32h6v10h-6z"
  }));
};

var _default = SvgAlienMonster;
exports["default"] = _default;