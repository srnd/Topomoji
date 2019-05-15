"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPizza = function SvgPizza(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#874C14",
    d: "M57.864 28.687C47.569 26.242 6.144 49.194 6.652 61.92c1.039.717 4.943-3.479 12.777-7.533 4.02-2.077 17.367-8.771 19.962-10.739 8.25-6.263 17.463-8.389 18.512-11.899.239-.801-.039-3.062-.039-3.062z"
  }), _react["default"].createElement("path", {
    fill: "#FFCB63",
    d: "M9.453 10.722s-1.24 9.602-1.037 13.883c.238 5.003-.883 11.835-.883 11.835l-.899 12.006c-1.095 11.066-.781 15.411 1.014 12.74 1.004-1.492 2.434-2.49 2.434-2.49l11.977-7.542s4.127-3.725 8.764-3.725c1.945 0 2.542-4.578 6.427-4.963 3.088-.305 2.811-3.142 5.277-3.944 5.227-1.7 8.314-5.487 8.314-5.487C53.007 19.544 22.925 3.382 9.453 10.722z"
  }), _react["default"].createElement("path", {
    fill: "#B00000",
    d: "M30.087 27.228c3.687-10.484 21.281-.516 14.603 7.873-6.658 8.362-18.149 2.21-14.603-7.873z"
  }), _react["default"].createElement("linearGradient", {
    id: "pizza_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.959,
    y1: 29.833,
    x2: 38.098,
    y2: 15.715,
    gradientTransform: "translate(1.99 8.31)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db4d27"
  }), _react["default"].createElement("stop", {
    offset: 0.227,
    stopColor: "#d54121"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#c52111"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b50000"
  })), _react["default"].createElement("path", {
    fill: "url(#pizza_svg__a)",
    d: "M30.458 27.431c3.458-9.836 19.966-.483 13.701 7.387-6.246 7.845-17.029 2.074-13.701-7.387z"
  }), _react["default"].createElement("path", {
    fill: "#B00000",
    d: "M11.017 17.012c5.82-10.05 22.052-.675 15.004 8.091-6.883 8.555-20.344 1.127-15.004-8.091z"
  }), _react["default"].createElement("linearGradient", {
    id: "pizza_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 14.113,
    y1: 19.694,
    x2: 19.405,
    y2: 5.156,
    gradientTransform: "translate(1.99 8.31)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db4d27"
  }), _react["default"].createElement("stop", {
    offset: 0.227,
    stopColor: "#d54121"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#c52111"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b50000"
  })), _react["default"].createElement("path", {
    fill: "url(#pizza_svg__b)",
    d: "M11.435 17.071c5.506-9.506 20.861-.637 14.193 7.654-6.511 8.094-19.246 1.068-14.193-7.654z"
  }), _react["default"].createElement("path", {
    fill: "#B00000",
    d: "M14.521 40.372c.709-9.392 15.287-9.16 14.58.23-.709 9.389-15.287 9.159-14.58-.23z"
  }), _react["default"].createElement("linearGradient", {
    id: "pizza_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: -5.926,
    y1: 73.107,
    x2: -1.432,
    y2: 60.758,
    gradientTransform: "matrix(.8941 -.465 .4636 .8962 -5.804 -21.21)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db4d27"
  }), _react["default"].createElement("stop", {
    offset: 0.227,
    stopColor: "#d54121"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#c52111"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b50000"
  })), _react["default"].createElement("path", {
    fill: "url(#pizza_svg__c)",
    d: "M15.033 40.378c.672-8.895 14.479-8.675 13.809.219-.673 8.89-14.479 8.673-13.809-.219z"
  }), _react["default"].createElement("path", {
    fill: "#B00000",
    d: "M7.533 36.44c6.141 2.002 5.389 10.842-.898 12.006M10.082 58.695c.508.273 11.879-6.774 11.977-7.542-5.534-6.658-16.474.485-11.977 7.542z"
  }), _react["default"].createElement("path", {
    fill: "#FAC150",
    d: "M30.888 18.33c1.732-1.056 3.429 1.372 1.695 2.427-1.734 1.057-3.427-1.37-1.695-2.427zM37.021 19.666c1.605-.978 3.174 1.271 1.57 2.246-1.604.978-3.174-1.27-1.57-2.246zM34.53 17.409c1.137-.691 2.25.902 1.113 1.597-1.136.692-2.249-.902-1.113-1.597zM47.45 30.854c1.305-.795 2.584 1.035 1.275 1.83-1.304.797-2.583-1.031-1.275-1.83zM25.392 31.153c-1.822-1.021-.18-3.574 1.643-2.553 1.824 1.024.183 3.577-1.643 2.553zM10.75 13.38c-1.197-.67-.117-2.347 1.078-1.677 1.197.672.119 2.349-1.078 1.677zM27.933 16.276c-1.375-.771-.139-2.696 1.236-1.926 1.375.77.139 2.696-1.236 1.926zM28.845 24.685c-.846-.474-.084-1.659.762-1.186.848.477.086 1.662-.762 1.186zM12.3 34.715c.797-1.288 2.865-.173 2.068 1.116-.796 1.287-2.865.173-2.068-1.116zM31.505 39.854c.904-1.461 3.25-.197 2.345 1.264-.901 1.461-3.247.196-2.345-1.264zM9.841 31.185c.834-1.35 3.006-.18 2.172 1.172-.836 1.351-3.01.179-2.172-1.172zM29.644 44.36c.42-.678 1.508-.092 1.088.588-.418.678-1.508.09-1.088-.588zM22.783 31.013c.539-.873 1.941-.115 1.402.756-.539.875-1.943.118-1.402-.756zM16.701 31.124c.383-.617 1.377-.083.992.535-.383.618-1.373.083-.992-.535zM12.316 45.392c.785-1.27 2.822-.174 2.037 1.096-.783 1.267-2.82.169-2.037-1.096zM7.638 49.937c.584-.945 2.1-.129 1.516.816-.584.943-2.098.129-1.516-.816z"
  }), _react["default"].createElement("radialGradient", {
    id: "pizza_svg__d",
    cx: -20.674,
    cy: -98.612,
    r: 37.455,
    gradientTransform: "matrix(.8775 .4931 -.1891 .3107 31.426 60.507)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.491,
    stopColor: "#995b11"
  }), _react["default"].createElement("stop", {
    offset: 0.733,
    stopColor: "#cc8533"
  })), _react["default"].createElement("path", {
    fill: "url(#pizza_svg__d)",
    d: "M9.453 10.722c8.918-3.686 20.705 2.717 24.201 3.674 3.836 1.05 14.957 9.353 17.188 18.639 0 0 3.113-5.326 7.023-4.348-5.454-14.752-14.716-18.566-19.817-20.639C33.882 6.354 22.515-.376 12.22 2.875c-6.775 3.165-2.767 7.847-2.767 7.847z"
  }), _react["default"].createElement("linearGradient", {
    id: "pizza_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 8.995,
    y1: 48.29,
    x2: 8.995,
    y2: 37.251
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db4d27"
  }), _react["default"].createElement("stop", {
    offset: 0.227,
    stopColor: "#d54121"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#c52111"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b50000"
  })), _react["default"].createElement("path", {
    fill: "url(#pizza_svg__e)",
    d: "M7.472 37.251c-.801 5.266-.736 11.039-.736 11.039 5.305-1.174 6.426-9.023.736-11.039z"
  }), _react["default"].createElement("linearGradient", {
    id: "pizza_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 15.584,
    y1: 58.404,
    x2: 15.584,
    y2: 48.681
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#db4d27"
  }), _react["default"].createElement("stop", {
    offset: 0.227,
    stopColor: "#d54121"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#c52111"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b50000"
  })), _react["default"].createElement("path", {
    fill: "url(#pizza_svg__f)",
    d: "M10.291 58.404s5.98-4.423 11.438-7.141c-5.423-6.436-15.235.376-11.438 7.141z"
  }), _react["default"].createElement("path", {
    opacity: 0.07,
    fill: "#FFF",
    d: "M21.257 23.313c-1.822-1.021-.182-3.574 1.643-2.553 1.822 1.022.182 3.576-1.643 2.553zM16.435 17.649c.795-1.287 2.863-.172 2.068 1.117-.796 1.288-2.865.172-2.068-1.117zM13.847 22.284c.852-1.379 3.068-.184 2.217 1.195-.854 1.381-3.072.186-2.217-1.195zM23.781 19.817c.383-.617 1.375-.083.992.535s-1.375.084-.992-.535zM34.97 29.775c-.266 2.071-3.248 1.502-2.98-.57.267-2.073 3.247-1.505 2.98.57zM40.515 30.413c-1.49-.258-1.229-2.593.264-2.336 1.492.258 1.23 2.594-.264 2.336zM39.782 34.942c-1.217-.209-1.004-2.117.213-1.907 1.221.21 1.006 2.118-.213 1.907zM41.712 33.442c-.715-.125-.592-1.246.127-1.121.715.125.59 1.244-.127 1.121zM20.779 42.548c-.268 2.072-3.248 1.502-2.982-.57.267-2.074 3.249-1.505 2.982.57zM13.98 54.731c-.266 2.072-3.248 1.502-2.98-.57.267-2.074 3.248-1.506 2.98.57zM24.642 43.43c-1.492-.258-1.23-2.593.264-2.336 1.49.258 1.23 2.594-.264 2.336zM16.884 52.841c-1.492-.258-1.23-2.592.264-2.336 1.49.258 1.23 2.594-.264 2.336zM18.054 38.848c-1.012-.173-.832-1.758.178-1.583 1.012.173.834 1.758-.178 1.583zM22.998 36.87c-1.012-.174-.832-1.758.178-1.584 1.011.174.833 1.76-.178 1.584zM8.513 41.47c-1.01-.174-.832-1.758.178-1.584 1.014.174.836 1.76-.178 1.584zM26.355 39.418c-.986-.172-.814-1.718.174-1.546s.814 1.717-.174 1.546zM8.898 45.157c-1.4-.244-1.156-2.439.248-2.195 1.402.244 1.156 2.437-.248 2.195z"
  }));
};

var _default = SvgPizza;
exports["default"] = _default;