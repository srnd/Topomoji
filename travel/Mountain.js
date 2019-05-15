"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgMountain = function SvgMountain(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#474D2C",
    d: "M52.458 31.708s-5.141-9.206-5.844-10.218c-.168-.245-2.016-4.56-2.785-5.385-.176-.053-6.211 9.135-7.443 9.437 4.773 7.202 14.889 16.539 20.457 19.232-.123-1.179-4.385-13.066-4.385-13.066z"
  }), _react["default"].createElement("path", {
    fill: "#737057",
    d: "M34.874 27.281c1.563-1.454 8.604-1.438 8.826-2.916.111-.74 3.125 1.708 3.125 1.708-.002-1.161-2.83-5.953-2.83-5.953-.402-.598.189-2.68-.166-4.015-.246-.075-7.683 8.535-8.955 11.176zM19.483 20.527c-.645.614-1.453 2.293-1.596 2.478-.584.766-3.926 6.732-4.443 8.752-1.004 3.478-4.51 9.49-4.639 10.863 4.717-1.826 13.215-8.681 17.18-14.144-1.057-.311-6.352-7.979-6.502-7.949z"
  }), _react["default"].createElement("path", {
    fill: "#474D2C",
    d: "M19.483 20.527c-.281 1.045.254 2.738-.08 3.189 0 0-3.051 3.89-3.035 4.815 0 0 2.393-1.768 2.5-1.173.213 1.19-3.26 5.932-3.047 6.448.863 2.091 10.127-5.108 11.484-3.859-1.127-2.176-7.611-9.463-7.822-9.42z"
  }), _react["default"].createElement("linearGradient", {
    id: "mountain_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 61.999,
    x2: 32.001,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#288f28"
  }), _react["default"].createElement("stop", {
    offset: 0.085,
    stopColor: "#3f8636"
  }), _react["default"].createElement("stop", {
    offset: 0.198,
    stopColor: "#567c45"
  }), _react["default"].createElement("stop", {
    offset: 0.32,
    stopColor: "#66754f"
  }), _react["default"].createElement("stop", {
    offset: 0.455,
    stopColor: "#707155"
  }), _react["default"].createElement("stop", {
    offset: 0.63,
    stopColor: "#737057"
  })), _react["default"].createElement("path", {
    fill: "url(#mountain_svg__a)",
    d: "M35.8 16.698C34.81 14.025 34.009 12 33.858 12c-.209 0-1.592 1.964-3.809 3.682-4.07 6.298-12.64 16.278-12.64 16.278-4.787 5.459-9.928 12.393-15.371 18.867-.705.84 8.521 5.666 8.521 5.666l8.814 1.5c2.135 2.539 10.354 4.006 10.354 4.006l10.657-2.924s9.012-.666 11.387-2.082c1.875-2.084 9.125-3.584 10.23-6.166L35.8 16.698z"
  }), _react["default"].createElement("path", {
    fill: "#474D2C",
    d: "M29.405 25.088L21.86 30.68l-2.065 5.836-14.38 12.762 16.123-9.328 2.263-7.377z"
  }), _react["default"].createElement("path", {
    fill: "#3B5216",
    d: "M10.559 56.493l8.814 1.5s-2.418-9.508 0-12.08c-5.8 2.965-8.814 10.58-8.814 10.58z"
  }), _react["default"].createElement("linearGradient", {
    id: "mountain_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 42.086,
    y1: 61.999,
    x2: 42.086,
    y2: 12.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a5e1a"
  }), _react["default"].createElement("stop", {
    offset: 0.057,
    stopColor: "#22591c"
  }), _react["default"].createElement("stop", {
    offset: 0.218,
    stopColor: "#324e20"
  }), _react["default"].createElement("stop", {
    offset: 0.398,
    stopColor: "#3c4722"
  }), _react["default"].createElement("stop", {
    offset: 0.63,
    stopColor: "#3f4523"
  })), _react["default"].createElement("path", {
    fill: "url(#mountain_svg__b)",
    d: "M62.001 50.827c-.234-2.795-4.594-6.795-7.203-11.648-2.156-2.063-7.115-7.604-7.115-7.604s-7.08-11.35-9.814-14.624c-1.135-.893-2.705-3.924-4.01-4.95-.107 5.012-.983 6.325-2.284 11.448l4.584-4.916v10.125l-3.709-3-4.508 7.574-5.77 9.611 9.52-9.969-4.387 11.416-1.32 8.529 7.641-8.529-3.899 17.709 10.657-2.924V46.276l11.387 10.717L40.56 38.466l-.727-6.123 9.689 7.68c0-.001 5.788 10.345 12.479 10.804z"
  }));
};

var _default = SvgMountain;
exports["default"] = _default;