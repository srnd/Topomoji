"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPotOfFood = function SvgPotOfFood(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "pot-of-food_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 5.757,
    y1: 48.414,
    x2: 59.238,
    y2: 48.414
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#4e5e67"
  }), _react["default"].createElement("stop", {
    offset: 0.545,
    stopColor: "#3c404d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#302c3b"
  })), _react["default"].createElement("path", {
    fill: "url(#pot-of-food_svg__a)",
    d: "M32.498 44.309c-13.195 0-24.204-4.069-26.741-9.479C10.396 48.887 7.627 62 32.498 62S54.6 48.887 59.238 34.827c-2.535 5.409-13.545 9.482-26.74 9.482z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M20.154 20.466c14.135-3.891 46.494 1.972 39.439 15.414 3.861 4.379 5.297 9.058-13.334 8.808C17.667 51.439-5.922 37.464 4.52 27.021 2 21.896 7.514 19.285 20.154 20.466z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M32.498 43.673c12.489 0 22.905-3.854 25.309-8.974.16-.483.314-.975.459-1.469.043-.263.064-.521.064-.791 0-6.199-11.564-11.231-25.833-11.231-14.267 0-25.831 5.033-25.831 11.231 0 .27.021.529.063.791.146.494.299.984.459 1.47 2.402 5.118 12.822 8.973 25.31 8.973z"
  }), _react["default"].createElement("radialGradient", {
    id: "pot-of-food_svg__b",
    cx: 32.498,
    cy: 35.96,
    r: 25.104,
    gradientTransform: "matrix(1 0 0 .5005 0 17.96)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d66904"
  }), _react["default"].createElement("stop", {
    offset: 0.411,
    stopColor: "#a94102"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6b0b00"
  })), _react["default"].createElement("path", {
    fill: "url(#pot-of-food_svg__b)",
    d: "M32.498 43.673c12.489 0 22.905-3.854 25.309-8.974.053-.155.104-.311.15-.465-2.086-5.291-12.689-9.32-25.459-9.32-12.771 0-23.372 4.029-25.458 9.32l.149.465c2.401 5.119 12.821 8.974 25.309 8.974z"
  }), _react["default"].createElement("path", {
    fill: "#854619",
    d: "M42 31.791c0-2.344-2.043-5.833-3-6.791-.828-.828-5.246-3.107-8.25-3.122-1.364-.005-2.583 1.845-2.75 2.122-.533.889-.896 8.2.119 8.875C30.75 34.625 42 33 42 31.791z"
  }), _react["default"].createElement("path", {
    fill: "#C4763E",
    d: "M31.998 33.636c4.24.098 10.002-.98 10.002-1.845 0-2.344-2.043-5.833-3-6.791-.828-.828-5.246-3.107-8.25-3.122-.819.819.621 10.627 1.248 11.758z"
  }), _react["default"].createElement("path", {
    fill: "#B06128",
    d: "M40.9 30.574s-3.918-.561-6.094.263c-2.174.823 1.348 1.215 6.094-.263zM39.9 28.107s-3.783-1.162-6.061-.688c-2.275.476 1.143 1.411 6.061.688zM38.785 25.76s-3.488-1.869-5.815-1.843c-2.324.026.85 1.604 5.815 1.843z"
  }), _react["default"].createElement("path", {
    fill: "#FFE8BB",
    d: "M10.328 32.066s4.558 4.293 12.141 1.332c5.269-2.059-2.75-8.711-5.643-8.711-1.232.001-6.498 3.422-6.498 7.379z"
  }), _react["default"].createElement("path", {
    fill: "#F5CFA0",
    d: "M22.469 33.398c5.269-2.059-2.75-8.711-5.643-8.711 3.656 3.656-.39 11.338-6.498 7.379 0 0 4.558 4.293 12.141 1.332z"
  }), _react["default"].createElement("path", {
    fill: "#77B516",
    d: "M18.152 35.479s.107 1.172.262 1.74c-1.297-.461-1.338-2.779-1.338-2.779s-.871.521-.791 1.404c-1.43-1.15-2.646-.611-2.646-.611s1.813 1.02 2.063 1.707c-1.018.08-1.61.432-1.957 1.25 0 .008 2.012-.957 3.5-.262-.588.479-.295 1.68-.295 1.68 2.379-2.521 3.939-.25 4.961-.875-.855-1.188-2.188-1.355-2.188-1.355-.395-1.125-1.571-1.899-1.571-1.899z"
  }), _react["default"].createElement("path", {
    fill: "#F5CFA0",
    d: "M43.334 30.389c0 .736 4.527 3.701 8.316 1.59 2.379-1.328-1.42-6.158-2.789-6.211-.818-.032-5.527 2.071-5.527 4.621z"
  }), _react["default"].createElement("path", {
    fill: "#FFE8BB",
    d: "M49 26l.045-.191c-.063-.017-.127-.039-.184-.041-.818-.031-5.527 2.071-5.527 4.621 0 .62 3.209 2.809 6.484 2.229C50.727 31.168 47.279 26 49 26z"
  }), _react["default"].createElement("path", {
    fill: "#77B516",
    d: "M55.646 32.616c-.566-.685-1.234-.853-2.232-.636.041-.73 1.486-2.229 1.486-2.229s-1.32-.167-2.359 1.348c-.178-.869-1.16-1.121-1.16-1.121s.625 2.235-.486 3.049c-.014-.592-.248-1.745-.248-1.745s-.9 1.079-.961 2.271c0 0-1.229.542-1.705 1.924 1.154.308 2.002-2.315 5.002-.582 0 0-.063-1.232-.764-1.523 1.226-1.095 3.427-.747 3.427-.756z"
  }), _react["default"].createElement("path", {
    fill: "#FFE8BB",
    d: "M30.505 40.175s-5.064 4.173-10.29-.914c0 0 1.096-3.759 4.207-3.759 1.511 0 5.835.759 6.083 4.673z"
  }), _react["default"].createElement("path", {
    fill: "#F5CFA0",
    d: "M26.105 41.769c2.578-.109 4.398-1.594 4.398-1.594-.246-3.914-4.572-4.673-6.083-4.673.001 0 3.783 2.759 1.685 6.267z"
  }), _react["default"].createElement("path", {
    fill: "#E36C16",
    d: "M52.574 34.438c-.969-1.256-10.975 1.359-16.555.642-3.867-.498-4.119 3.62-4.119 3.62s.652 3.116 6.528 3.116c8.892 0 14.978-6.302 14.146-7.378z"
  }), _react["default"].createElement("path", {
    fill: "#FF9400",
    d: "M52.574 34.438c-.439-.569-2.742-.342-5.643.008.609 1.414-.016 3.416-.016 3.416-.313-1.539-.961-2.545-1.658-3.211-.473.057-.953.113-1.439.168.697 1.418.033 3.535.033 3.535-.334-1.646-1.049-2.688-1.801-3.352-.471.044-.941.081-1.406.112.871 1.407.145 3.729.145 3.729-.393-1.92-1.301-3.013-2.18-3.645-.924.012-1.803-.019-2.59-.12 2.02.26 4.77 3.765 2.408 6.738 8.606 0 14.979-6.302 14.147-7.378z"
  }), _react["default"].createElement("path", {
    fill: "#77B516",
    d: "M29.611 34.442c.436-1.111.049-2.465.049-2.465s-.684.959-.938 1.492c-.684-1.195.803-2.98.803-2.98s-1-.172-1.518.549c-.332-1.804-1.605-2.189-1.605-2.189s.709 1.953.447 2.639c-.82-.604-1.502-.725-2.296-.332-.004.008 2.146.589 2.82 2.088-.758-.02-1.318 1.08-1.318 1.08 3.447-.357 3.148 2.381 4.33 2.572.126-1.458-.774-2.454-.774-2.454z"
  }), _react["default"].createElement("linearGradient", {
    id: "pot-of-food_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 30.888,
    y1: 24,
    x2: 30.888,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a9b0b3"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#bdc4c7"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#eff6fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2f9ff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#pot-of-food_svg__c)",
    d: "M31.845 24s2.581-4.01-2.961-9.54C22.804 8.38 31.845 6.04 31.845 2c0 0 1.459 1.609-.58 5.42-2.9 5.391 9.19 6.25.58 16.58z"
  }), _react["default"].createElement("linearGradient", {
    id: "pot-of-food_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 23.435,
    y1: 23.71,
    x2: 23.435,
    y2: 7.71
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a9b0b3"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#bdc4c7"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#eff6fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2f9ff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#pot-of-food_svg__d)",
    d: "M24.134 23.71s1.9-2.819-2.22-6.94c-4.479-4.479 2.22-6.119 2.22-9.06 0 0 1.09 1.17-.439 3.94-2.17 3.92 6.9 4.539.439 12.06z"
  }), _react["default"].createElement("linearGradient", {
    id: "pot-of-food_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 40.563,
    y1: 23.71,
    x2: 40.563,
    y2: 7.71
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#a9b0b3"
  }), _react["default"].createElement("stop", {
    offset: 0.316,
    stopColor: "#bdc4c7"
  }), _react["default"].createElement("stop", {
    offset: 0.961,
    stopColor: "#eff6fc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#f2f9ff"
  })), _react["default"].createElement("path", {
    opacity: 0.6,
    fill: "url(#pot-of-food_svg__e)",
    d: "M39.865 7.71s-1.881 2.84 2.22 6.94c4.479 4.479-2.22 6.119-2.22 9.06 0 0-1.09-1.17.439-3.94 2.161-3.92-6.909-4.55-.439-12.06z"
  }));
};

var _default = SvgPotOfFood;
exports["default"] = _default;