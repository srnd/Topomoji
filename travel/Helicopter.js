"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHelicopter = function SvgHelicopter(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M47.85 14H3.198c-.568 0-1.546 1-1.071 1h44.651c.471 0 1.635-1 1.072-1z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M24.219 17.293h1.563v1.5h-1.563z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M23.787 14.618h2.426v3.025h-2.426z"
  }), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M21 13h8v3h-8z"
  }), _react["default"].createElement("g", {
    fill: "#302C3B"
  }, _react["default"].createElement("path", {
    d: "M60.264 26.652c0 .215-10.48.215-10.48 0-.001-.216 10.48-.216 10.48 0z"
  }), _react["default"].createElement("path", {
    d: "M55.023 31.768c-.221 0-.221-10.23 0-10.23.223-.001.223 10.23 0 10.23z"
  }), _react["default"].createElement("path", {
    d: "M58.729 30.268c-.158.152-7.566-7.078-7.41-7.234.158-.151 7.568 7.081 7.41 7.234z"
  }), _react["default"].createElement("path", {
    d: "M51.318 30.268c-.156-.152 7.254-7.387 7.41-7.234.159.154-7.251 7.388-7.41 7.234z"
  })), _react["default"].createElement("ellipse", {
    fill: "#E81C27",
    cx: 55.024,
    cy: 26.652,
    rx: 1.392,
    ry: 1.359
  }), _react["default"].createElement("linearGradient", {
    id: "helicopter_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 35.223,
    y1: 25.209,
    x2: 35.223,
    y2: 20.875
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#99a8ae"
  }), _react["default"].createElement("stop", {
    offset: 0.099,
    stopColor: "#a6b4bb"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#bccbd3"
  }), _react["default"].createElement("stop", {
    offset: 0.528,
    stopColor: "#cad8e1"
  }), _react["default"].createElement("stop", {
    offset: 0.703,
    stopColor: "#cfdde6"
  })), _react["default"].createElement("path", {
    fill: "url(#helicopter_svg__a)",
    d: "M33.152 22.14c.062-.776 3.787-1.292 3.996-1.264.21.029.235 3.353-.13 3.353-.366 0-3.632.323-3.736.91s-.156-2.676-.13-2.999z"
  }), _react["default"].createElement("path", {
    fill: "#B00505",
    d: "M50.002 24.684c-7.704 1.161-15.623.573-15.623.573v-2.332c0-.982-1.984-2.063-1.984-2.785 0-.645-.069-1.566-.279-1.566H19.75c-.916 0-1.392 1.98-6.129 3.743 3.147 10.392 29.408 6.826 36.381 5.896v-3.529z"
  }), _react["default"].createElement("linearGradient", {
    id: "helicopter_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 27.858,
    y1: 43.851,
    x2: 27.858,
    y2: 21.296
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c40000"
  }), _react["default"].createElement("stop", {
    offset: 0.066,
    stopColor: "#ce0002"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#e40008"
  }), _react["default"].createElement("stop", {
    offset: 0.443,
    stopColor: "#f3000b"
  }), _react["default"].createElement("stop", {
    offset: 0.672,
    stopColor: "#fc000d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#helicopter_svg__b)",
    d: "M6.479 40.763c7.142 6.297 26.57 2.081 28.128-4.742.313-1.372 15.74-5.56 15.74-5.56l-.346-3.704s-12.694 1.43-15.518 1.068c-2.168-2.333-6.688-5.479-10.19-6.116-.688-.126-7.678-1.42-12.728 1.334-3.983 3.387-8.273 13.068-5.086 17.72z"
  }), _react["default"].createElement("linearGradient", {
    id: "helicopter_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 7.409,
    y1: 40.763,
    x2: 7.409,
    y2: 23.044
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#454754"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#636d78"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#helicopter_svg__c)",
    d: "M11.566 23.043c-1.764 1.302-14.02 11.818-5.087 17.72-.376-5.206 2.543-15.056 5.087-17.72z"
  }), _react["default"].createElement("linearGradient", {
    id: "helicopter_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 55.243,
    y1: 32.572,
    x2: 55.243,
    y2: 13
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#c40000"
  }), _react["default"].createElement("stop", {
    offset: 0.066,
    stopColor: "#ce0002"
  }), _react["default"].createElement("stop", {
    offset: 0.245,
    stopColor: "#e40008"
  }), _react["default"].createElement("stop", {
    offset: 0.443,
    stopColor: "#f3000b"
  }), _react["default"].createElement("stop", {
    offset: 0.672,
    stopColor: "#fc000d"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#ff000e"
  })), _react["default"].createElement("path", {
    fill: "url(#helicopter_svg__d)",
    d: "M58.314 20.875c-.547-.555.201-6.969 1.025-6.969.264 0 .412-.906.158-.906-2.855 0-5.191.832-5.525 1.617-2.656 6.258-5.838 11.531-5.455 15.551.457.803 2.607 2.404 6.508 2.404 3.203 0 6.467-3.384 6.854-4.521.193-.57.127-1.946 0-2.407-.201-.73-1.373-2.551-3.565-4.769zm-3.291 9.63c-2.18 0-3.945-1.724-3.945-3.853s1.766-3.852 3.945-3.852 3.947 1.723 3.947 3.852-1.767 3.853-3.947 3.853z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M19.158 31.904c-.102-.274-.183-.496-.944-.148l-.799.365c-.763.348-.682.568-.58.843.061.164 2.384-.896 2.323-1.06z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M16.608 49.428c-.053.433-1.472.615-1.412.175.321-2.383-.106-5.676-.99-7.727-.124-.286 1.229-.557 1.365-.268.805 1.715 1.308 5.612 1.037 7.82zM30.281 49.512c-.111.488-1.686.697-1.552.208.862-3.173-.229-7.573-1.244-9.937-.142-.331 1.343-.646 1.498-.313.919 1.974 2.078 6.635 1.298 10.042z"
  }), _react["default"].createElement("linearGradient", {
    id: "helicopter_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 22.421,
    y1: 52.48,
    x2: 21.966,
    y2: 49.017
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#343040"
  }), _react["default"].createElement("stop", {
    offset: 0.082,
    stopColor: "#3c3b49"
  }), _react["default"].createElement("stop", {
    offset: 0.356,
    stopColor: "#525a64"
  }), _react["default"].createElement("stop", {
    offset: 0.509,
    stopColor: "#5b666e"
  })), _react["default"].createElement("path", {
    fill: "url(#helicopter_svg__e)",
    d: "M36.75 49.299H9.836c-1.088 0-1.482-1.363-1.822-3.128-.162-.843-1.893-.198-1.744.602C6.706 49.115 7.43 51 8.872 51h27.832c1.044 0 1.075-1.701.046-1.701z"
  }), _react["default"].createElement("g", null, _react["default"].createElement("path", {
    fill: "#BF0505",
    d: "M9.437 40.014c-.759 0-1.18-.13-1.281-.396-.142-.371-.457-2.79.058-4.967l.24.056c-.495 2.091-.197 4.482-.066 4.826.058.153.509.29 1.58.223 3.089-.194 9.207-1.913 9.491-3.117.367-1.551.467-5.161.326-7.431l.247-.016c.141 2.287.038 5.93-.333 7.501-.341 1.438-6.806 3.119-9.716 3.303-.199.012-.38.018-.546.018z"
  })), _react["default"].createElement("linearGradient", {
    id: "helicopter_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 14.069,
    y1: 35.477,
    x2: 14.069,
    y2: 23.513
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#302c3b"
  }), _react["default"].createElement("stop", {
    offset: 0.293,
    stopColor: "#454754"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#636d78"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#6e7b85"
  })), _react["default"].createElement("path", {
    fill: "url(#helicopter_svg__f)",
    d: "M11.366 24.704C10.5 25.845 7.995 34.813 8.099 35.43c.105.618 11.953-5.123 11.944-5.748-.016-1.165-.016-5.099-1.286-5.982-.82-.572-6.842.283-7.391 1.004z"
  }));
};

var _default = SvgHelicopter;
exports["default"] = _default;