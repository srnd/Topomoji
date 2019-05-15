"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgRooster = function SvgRooster(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#DE8F01",
    d: "M27.304 51.463c1.623 7.624-1.189 6.884-1.101 7.37-.341.482-3.088.072-3.104.699-1.199.668-.888.887-.003.627.594.092 4.532.236 4.771-.254.296.5.517.744.771.744.208 0 .478-.545.802-.816 1.291.408 1.988-.123 2.86.182-.189-.904-2.731-.888-3.06-2.711-.591-3.268 1.924-2.195 1.825-3.432-.401.241-3.009.945-1.443-2.549-1.394-.529-2.318.14-2.318.14z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M22.053 52.683c1.136 5.117-2.593 6.608-2.495 7.18-.37.566-3.329.086-3.344.823-1.297.786-.962 1.042-.006.737.641.107 4.886.277 5.14-.299.32.588.558.876.833.876.224 0 .517-.642.862-.962 1.392.48 2.145-.145 3.084.215-.203-1.064-2.457-.417-2.746-2.571-.411-3.044 2.591-1.607 2.384-2.88-.433.283-2.849.588-1.012-2.958-1.501-.622-2.7-.161-2.7-.161z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M23.902 50.552c5.299 5.953 7.305-.289 6.728-2.389-.74-2.702-7.133 1.934-6.728 2.389z"
  }), _react["default"].createElement("linearGradient", {
    id: "rooster_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.124,
    y1: 53.41,
    x2: 32.124,
    y2: 16.497
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bac2c7"
  }), _react["default"].createElement("stop", {
    offset: 0.37,
    stopColor: "#d2d8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.715,
    stopColor: "#e1e6ea"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#rooster_svg__a)",
    d: "M60 27.669c-5.795-14.846-24.003-14.32-27.459-1.835-2.781 10.024-12.704 3.291-12.938-1.055 0 0-5.546-2.115-12.628.97-8.491 11.211 5.509 17.429 6.057 18.536 2.347 4.74 6.384 5.391 6.999 6.424 1.821 3.054 4.254 4.172 7.079-.156 1.024-1.566 8.241-2.256 11.408-9.455 2.708 0 3.827 1.514 4.76 3.322 1.313-4.094-1.414-8.563-1.414-8.563 2.12 1.478 5.414 3.346 6.404 6.948.896-4.439-.036-9.019-2.167-11.208 2.455 1.241 9.133 3.377 10.88 6.842-.548-6.07-3.828-11.611-6.838-13.801.001 0 6.667.431 9.857 3.031z"
  }), _react["default"].createElement("linearGradient", {
    id: "rooster_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 11.729,
    y1: 30.394,
    x2: 32.748,
    y2: 49.843
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.396,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.875,
    stopColor: "#d2dadf"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cdd6db"
  })), _react["default"].createElement("path", {
    fill: "url(#rooster_svg__b)",
    d: "M30.13 43.399c2.728 1.053 5.512 1.719 8.034 1.741-12.136-8.123-15.016-18.643-19.904-17.468-1.579.38-7.921 2.918-8.907 3.155-10.374 2.498 7.757 17.359 19.906 17.468a45.322 45.322 0 0 1-5.416-4.273c3.638 1.801 7.584 3.033 11.049 3.064a44.436 44.436 0 0 1-4.762-3.687z"
  }), _react["default"].createElement("linearGradient", {
    id: "rooster_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 17.958,
    y1: 33.732,
    x2: 3.206,
    y2: 16.958
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.081,
    stopColor: "#d2dbdf"
  }), _react["default"].createElement("stop", {
    offset: 0.584,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#rooster_svg__c)",
    d: "M8.084 13.229c.727-2.747 6.527-4.001 9.645 3.011 3.009 6.769.564 9.492 5.223 13.102-1.224.021-4.142-.266-4.142-.266l.281 2.813-3.75-1.438-.5 3.219-3.337-1.813-1.318 4.313-2.563-3.313s-2.119 2.527-2.373 4.521c-5.612-12.737 9.938-15.596 2.834-24.149z"
  }), _react["default"].createElement("path", {
    fill: "#C21413",
    d: "M8.817 20.917c-.562 5.599-7.037 3.043-4.02-1.502 2.723-4.099 7.102-6.12 7.102-6.12s-2.814 4.935-3.082 7.622z"
  }), _react["default"].createElement("path", {
    fill: "#D47706",
    d: "M10.092 14.699s-3.762-1.086-5.744 1.553c1.786-.892 5.131 1.637 5.744-1.553z"
  }), _react["default"].createElement("path", {
    fill: "#F59E01",
    d: "M9.781 15.435c1.19-1.19-.479-3.211-2.011-2.913-3.17.618-3.522 3.854-3.522 3.854 2.148-1.807 3.901.693 5.533-.941z"
  }), _react["default"].createElement("path", {
    fill: "#C41C27",
    d: "M14.418 14.22c0 1.566-1.468 2.835-3.279 2.835-1.808 0-3.277-1.269-3.277-2.835s1.47-2.835 3.277-2.835c1.811-.001 3.279 1.268 3.279 2.835z"
  }), _react["default"].createElement("linearGradient", {
    id: "rooster_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 148.339,
    y1: 59.813,
    x2: 148.339,
    y2: 47.805,
    gradientTransform: "scale(-1 1) rotate(-27.426 -.253 361.12)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5000d"
  }), _react["default"].createElement("stop", {
    offset: 0.576,
    stopColor: "#d90b10"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c21413"
  })), _react["default"].createElement("path", {
    fill: "url(#rooster_svg__d)",
    d: "M7.017 20.9c-3.881 4.357 2.771 6.602 4.064 1.453 1.169-4.643-.458-8.842-.458-8.842s-1.741 5.3-3.606 7.389z"
  }), _react["default"].createElement("linearGradient", {
    id: "rooster_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 14.04,
    y1: 13.89,
    x2: 14.04,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0.097,
    stopColor: "#c21413"
  }), _react["default"].createElement("stop", {
    offset: 0.266,
    stopColor: "#d50d11"
  }), _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#e7060f"
  }), _react["default"].createElement("stop", {
    offset: 0.729,
    stopColor: "#f2010d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f5000d"
  })), _react["default"].createElement("path", {
    fill: "url(#rooster_svg__e)",
    d: "M17.807 9.56c.474-1.615-1.311-3.296 2.599-5.578 0 0-6.088-.611-7.138 4.185C11.444 5.498 13.979 2 13.979 2S7.736 3.051 8.704 9.462c-1.826-1.24-1.301-4.417-1.301-4.417S4.431 7.674 5.281 10.9c.496 1.88 2.396 3.775 4.015 2.208.487-.474 1.707-1.224 2.449-1.433.552-.156 1.94-.095 2.808.541.802.587 1.391 1.617 2.557 1.668 4.944.217 5.842-6.04 5.842-6.04s-2.377 1.76-5.145 1.716z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M10.562 14.611c-1.548 0-1.548-2.419 0-2.419 1.544 0 1.544 2.419 0 2.419z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M10.354 12.979c0 .421-.647.421-.647 0-.001-.422.647-.422.647 0z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M37.269 27.669c11.365-6.406 22.731 0 22.731 0s-13.024-11.698-22.731 0zM36.726 31.18c10.959-1.5 20.256 7.259 20.256 7.259S49.394 25.68 36.726 31.18z"
  }), _react["default"].createElement("path", {
    fill: "#C7CFD4",
    d: "M34.144 35.638c10.958-1.5 14.229 7.25 14.229 7.25s-1.563-12.75-14.229-7.25zM34.352 40.138c7.458 1.396 8.927 4.281 8.927 4.281s-.268-5.981-8.927-4.281z"
  }));
};

var _default = SvgRooster;
exports["default"] = _default;