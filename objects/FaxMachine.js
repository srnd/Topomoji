"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFaxMachine = function SvgFaxMachine(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#445159",
    d: "M4 53.639v4.854c0 1.074.97 1.953 2.154 1.953h51.691c1.186 0 2.154-.879 2.154-1.953v-4.854c-9.476-10.936-45.339-9.942-55.999 0z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M18.939 54.645v4.723c0 .738.864 1.344 1.92 1.344h32.158c1.057 0 1.922-.605 1.922-1.344v-4.723h-36z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M19.939 54.645h34v4.723h-34z"
  }), _react["default"].createElement("linearGradient", {
    id: "fax-machine_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 36.94,
    y1: 62,
    x2: 36.94,
    y2: 56.717
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.276,
    stopColor: "#4c5b64"
  }), _react["default"].createElement("stop", {
    offset: 0.496,
    stopColor: "#45515b"
  }), _react["default"].createElement("stop", {
    offset: 0.696,
    stopColor: "#38404c"
  }), _react["default"].createElement("stop", {
    offset: 0.884,
    stopColor: "#272937"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#1a1626"
  })), _react["default"].createElement("path", {
    fill: "url(#fax-machine_svg__a)",
    d: "M51.939 56.717h-30l-2 2.682s.656 2.602 5.143 2.602h23.713c4.486 0 5.145-2.602 5.145-2.602l-2.001-2.682z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M36.564 56.123v4.393c0 .316.75.316.75 0v-4.393h-.75zM31.537 56.123l-.969 4.354c-.07.311.676.377.742.08l.986-4.434h-.759zM26.504 56.123l-1.923 4.316c-.133.299.595.426.717.152l1.99-4.469h-.784zM41.582 56.123l.986 4.434c.066.297.811.23.742-.08l-.971-4.354h-.757zM47.375 56.123h-.785l1.99 4.469c.123.273.85.146.717-.152l-1.922-4.317z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M49.938 19.021H23.36c-.912 0-1.709.904-1.77 2.009-.218 4.018-.434 8.034-.65 12.052h32L51.79 21.03c-.106-1.105-.94-2.008-1.852-2.009z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M49.959 19.272H23.348c-.456.001-.854.451-.882 1.005l-.55 11.047h29.975l-1.008-11.047c-.051-.552-.465-1.005-.924-1.005z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M49.385 33.082h-24.89L25.207 14h22.674l1.504 19.082z"
  }), _react["default"].createElement("linearGradient", {
    id: "fax-machine_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 53.639,
    x2: 32.001,
    y2: 30.07
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.542,
    stopColor: "#506069"
  }), _react["default"].createElement("stop", {
    offset: 0.786,
    stopColor: "#556770"
  }), _react["default"].createElement("stop", {
    offset: 0.97,
    stopColor: "#5f727d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#617580"
  })), _react["default"].createElement("path", {
    fill: "url(#fax-machine_svg__b)",
    d: "M55.254 30.069H8.747c-1.064 0-1.99.452-2.058 1.003L4 53.639h56l-2.689-22.566c-.067-.552-.993-1.005-2.057-1.004z"
  }), _react["default"].createElement("path", {
    fill: "#445159",
    d: "M43.844 44.818c4.141 0 4.607 5.166.316 5.164-4.291 0-4.457-5.164-.316-5.164z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M43.869 45.248c3.461 0 3.83 4.305.264 4.305-3.565 0-3.723-4.305-.264-4.305z"
  }), _react["default"].createElement("path", {
    fill: "#445159",
    d: "M51.922 44.389c4.814 0 5.641 6.025.621 6.025-5.022 0-5.438-6.025-.621-6.025z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M51.965 44.818c4.141 0 4.824 5.166.533 5.164-4.291 0-4.674-5.164-.533-5.164z"
  }), _react["default"].createElement("path", {
    fill: "#566873",
    d: "M16.34 53.049c-.335 5.811-12.614 5.811-11.879 0l2.446-20.814c.521-4.12 11.062-4.12 10.824 0L16.34 53.049z"
  }), _react["default"].createElement("path", {
    fill: "#404D54",
    d: "M7.938 32.026c-.466 6.761-1.174 13.519-2.202 20.281-.673 3.928 9.418 3.928 9.468 0 .217-6.762.756-13.52 1.536-20.281.53-4.693-8.469-4.693-8.802 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "fax-machine_svg__c",
    cx: 30.252,
    cy: 60.487,
    r: 5.099,
    gradientTransform: "matrix(.8896 0 0 3.049 -15.596 -149.17)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#839aa3"
  }), _react["default"].createElement("stop", {
    offset: 0.421,
    stopColor: "#7d939c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e8189"
  })), _react["default"].createElement("path", {
    fill: "url(#fax-machine_svg__c)",
    d: "M8.463 30.907c-.506 6.972-1.23 13.943-2.243 20.915-.66 4.053 8.501 4.053 8.589 0 .27-6.973.833-13.943 1.612-20.915.529-4.84-7.597-4.84-7.958 0z"
  }), _react["default"].createElement("path", {
    fill: "#445159",
    d: "M35.047 35.129c.045 2.018-3.396 2.018-3.393 0s3.346-2.018 3.393 0zM35.131 39.453c.045 2.02-3.475 2.02-3.471 0 .004-2.015 3.424-2.015 3.471 0zM35.215 43.777c.047 2.02-3.553 2.02-3.549 0 .004-2.017 3.504-2.017 3.549 0zM35.301 48.104c.045 2.018-3.633 2.018-3.629 0 .002-2.018 3.58-2.018 3.629 0zM30.201 35.129c-.008 2.018-3.449 2.018-3.393 0 .058-2.018 3.399-2.018 3.393 0zM30.172 39.453c-.006 2.02-3.526 2.02-3.47 0 .056-2.015 3.478-2.015 3.47 0zM30.145 43.777c-.008 2.02-3.607 2.02-3.55 0 .057-2.017 3.555-2.017 3.55 0zM30.115 48.104c-.006 2.018-3.685 2.018-3.627 0 .056-2.018 3.635-2.018 3.627 0zM25.355 35.129c-.06 2.018-3.501 2.018-3.392 0 .11-2.018 3.452-2.018 3.392 0zM25.214 39.453c-.06 2.02-3.581 2.02-3.471 0 .109-2.015 3.531-2.015 3.471 0zM25.073 43.777c-.06 2.02-3.66 2.02-3.55 0 .11-2.017 3.609-2.017 3.55 0zM24.932 48.104c-.059 2.018-3.738 2.018-3.628 0 .108-2.018 3.687-2.018 3.628 0z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M34.787 35.129c.039 1.711-2.877 1.711-2.875 0 .004-1.709 2.836-1.709 2.875 0zM34.855 39.453c.039 1.699-2.924 1.699-2.92 0 .003-1.695 2.881-1.695 2.92 0zM34.936 43.777c.041 1.701-2.994 1.701-2.992 0 .003-1.699 2.954-1.699 2.992 0zM35.014 48.104c.039 1.697-3.059 1.697-3.055 0 .002-1.7 3.014-1.7 3.055 0zM29.941 35.129c-.004 1.711-2.921 1.711-2.875 0 .05-1.709 2.881-1.709 2.875 0zM29.896 39.453c-.006 1.699-2.967 1.699-2.919 0 .048-1.695 2.925-1.695 2.919 0zM29.865 43.777c-.006 1.701-3.039 1.701-2.992 0 .049-1.699 2.998-1.699 2.992 0zM29.828 48.104c-.004 1.697-3.102 1.697-3.054 0 .048-1.7 3.062-1.7 3.054 0zM25.096 35.129c-.051 1.709-2.965 1.709-2.873 0 .092-1.707 2.923-1.707 2.873 0zM24.938 39.453c-.05 1.697-3.01 1.697-2.918 0 .091-1.695 2.968-1.695 2.918 0zM24.792 43.777c-.05 1.701-3.082 1.701-2.99 0 .094-1.699 3.04-1.699 2.99 0zM24.644 48.104c-.049 1.697-3.145 1.697-3.053 0 .092-1.698 3.102-1.698 3.053 0z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M38.916 32.286l.123 6.025h16.234l-.625-6.025z"
  }), _react["default"].createElement("path", {
    fill: "#A6E639",
    d: "M40.896 33.791l.081 3.014h12.218l-.312-3.014z"
  }));
};

var _default = SvgFaxMachine;
exports["default"] = _default;