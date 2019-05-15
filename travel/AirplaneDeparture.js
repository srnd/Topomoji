"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAirplaneDeparture = function SvgAirplaneDeparture(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#B8E866",
    d: "M9.699 59c.834-2.014 6.875-3.557 8.418 0 1.125-2.375 5.541-2.889 7.07-.207 2.027-2.209 5.918-2.891 8.59-.141 2.211-2.666 7.797-2.125 9.154.348 1.352-2.148 5.164-3.139 8.453 0C55.783 56.027 62 60 62 60H2s2.324-4.807 7.699-1z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M2 60h60v2H2z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M56.221 59.229c-1.25-.939-6.262-1.227-8.125-.371-2-.855-7.375-.658-9.285.428-2.027-1.309-7.508-1.57-11.147-.428-3.818-1.143-9.131-1.143-11.631 0-1.25-.492-4.875-1.33-8.625.283C4.783 58.021 2 60 2 60h60s-2.34-1.264-5.779-.771z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M11.158 6.745l6.801 9.432s12.154-1.244 11.584-5.383c-4.865.143-7.572 1.098-15.045-4.59-.719-.549-3.34.541-3.34.541z"
  }), _react["default"].createElement("linearGradient", {
    id: "airplane-departure_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 147.387,
    y1: 237.353,
    x2: 195.179,
    y2: 237.353,
    gradientTransform: "rotate(-20.004 -536.89 499.132)"
  }, _react["default"].createElement("stop", {
    offset: 0.297,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.588,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.932,
    stopColor: "#d3dbe0"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#airplane-departure_svg__a)",
    d: "M16.792 16.139c-1.549 1.064-.734 1.639.006 1.758 5.209.834 14.238-.223 19.551-2.154l21.09-7.676c.676-.246 3.689-1.848 3.953-2.223.898-1.264.791-2.102-.256-2.553-.885-.379-3.604-1.105-4.162-1.248-.563-.141-3.014.063-4.688.557-4.204 1.24-30.304 9.971-35.494 13.539z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M58.203 3.553c.973.182 1.141-.434 1.621-.711a47.334 47.334 0 0 0-1.076-.316l-.77.281c-.148.051.063.715.225.746z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M14.136 13.139l-2.66.969 7.385 2.867 4.781-1.742c.344-.123-.094-1.313-.48-1.316-3.397-.047-9.026-.778-9.026-.778z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M14.136 13.139l-2.66.969 2.729-.768 9.438 1.893c.344-.123-.094-1.313-.48-1.316-3.398-.047-9.027-.778-9.027-.778z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M53.912 5.622c-.455.166-.871-.973-.416-1.141.457-.164.873.975.416 1.141zM52.281 6.213c-.455.168-.869-.973-.416-1.137.455-.165.871.975.416 1.137zM50.65 6.809c-.457.166-.871-.975-.414-1.141.453-.164.869.975.414 1.141zM49.018 7.403c-.455.166-.867-.975-.414-1.139.455-.166.871.971.414 1.139zM36.969 11.79c-.453.164-.869-.975-.414-1.141s.869.975.414 1.141zM35.34 12.381c-.459.166-.871-.973-.416-1.139.453-.163.869.975.416 1.139zM33.707 12.975c-.455.166-.87-.973-.416-1.139.457-.166.871.975.416 1.139zM32.076 13.569c-.455.166-.871-.975-.414-1.139.453-.166.867.975.414 1.139zM30.445 14.163c-.457.166-.873-.973-.416-1.139.455-.164.869.973.416 1.139z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M49.35 7.088c-5.363-.402-20.276-1.146-20.276-1.146-2.691-1.457-4.438-2.432-4.986-1.852.049.598 2.9 3.699 4.447 4.557 3.883 2.146 15.522 3.461 15.522 3.461l6.441-2.344c.891-.324-.121-2.599-1.148-2.676z"
  }), _react["default"].createElement("path", {
    fill: "#018BC9",
    d: "M29.164 6.188c1.125.662 15.717 1.65 21.459 2.076-.318-.877-.885-1.148-1.273-1.176-5.363-.402-19.338-1.002-20.147-1.471-4.238-2.463-5.137-1.803-5.115-1.527-.001 0 .898-.363 5.076 2.098z"
  }), _react["default"].createElement("linearGradient", {
    id: "airplane-departure_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 178.773,
    y1: 242.071,
    x2: 178.773,
    y2: 238.85,
    gradientTransform: "rotate(-20.004 -536.89 499.132)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.059,
    stopColor: "#d3dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.606,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#airplane-departure_svg__b)",
    d: "M48.973 9.106s-3.346.373-4.49 2.199l.572 1.572c2.057.672 4.867-1.18 4.867-1.18l-.949-2.591z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M49.146 9.034l.947 2.594-.179.065-.947-2.593zM44.481 11.305l.572 1.573-.175.064-.572-1.573z"
  }), _react["default"].createElement("linearGradient", {
    id: "airplane-departure_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 174.141,
    y1: 238.332,
    x2: 174.141,
    y2: 235.111,
    gradientTransform: "rotate(-20.004 -536.89 499.132)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.059,
    stopColor: "#d3dbe0"
  }), _react["default"].createElement("stop", {
    offset: 0.355,
    stopColor: "#e1e7eb"
  }), _react["default"].createElement("stop", {
    offset: 0.606,
    stopColor: "#e6ebef"
  })), _react["default"].createElement("path", {
    fill: "url(#airplane-departure_svg__c)",
    d: "M43.342 7.174s-3.348.379-4.49 2.201l.572 1.574c2.055.67 4.865-1.18 4.865-1.18l-.947-2.595z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M43.519 7.111l.945 2.592-.176.064-.946-2.592zM38.85 9.374l.572 1.574-.175.064-.573-1.574z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M6.216 26.45c-.764.082 20.338-5.709 20.338-5.709S16.447 25.346 6.216 26.45zM3.634 20.922c-.582.063 15.525-4.357 15.525-4.357s-7.714 3.516-15.525 4.357zM2.763 11.413c-.461.049 12.277-3.445 12.277-3.445s-6.101 2.781-12.277 3.445zM5.541 16.219c-.348.037 9.271-2.602 9.271-2.602s-4.607 2.1-9.271 2.602zM13.498 10.766c-.584.063 15.525-4.357 15.525-4.357s-7.717 3.515-15.525 4.357z"
  }));
};

var _default = SvgAirplaneDeparture;
exports["default"] = _default;