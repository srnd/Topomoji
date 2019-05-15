"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgAlbania = function SvgAlbania(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("circle", {
    fill: "#E81C27",
    cx: 32,
    cy: 32,
    r: 30
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M48.917 41.887c-.904-1.605-3.42-.406-4.72-.361.651-.551 2.537-1.885 3.495-1.92-.664-.555-2.025-.119-2.519.469-1.793 2.141-2.949.98-5.543.227 2.106-2.18-6.007-3.756-3.426-5.555.54-.375 1.436 3.076 2.841 2.518.604-.24-2.326-2.461-.782-3.004.54-.189 2.544 5.711 3.935 3.311.521-.896-3.089-1.684-2.073-3.49-.737 1.313 8.813 6.186 7.583 3.02-.575-1.482-6.358-.408-5.857-4.32-.135 1.047 6.742 4.213 5.971 1.252-.17-.652-6.888-.191-5.712-3.371.181-.49 5.895 3.867 5.689.654-.075-1.172-6.079-.262-5.484-2.92.012-.051 6.213 2.578 5.479-.182-.101-.381-6.87.379-5.632-1.961-.574 1.084 8.115.553 5.527-1.572-.898-.738-4.729 2.703-5.459-.32.099.404 7.498-.594 5.414-2.725-.544-.557-5.168 3.088-5.341.701-.034-.465 6.201-3.355 5.256-4.877-1.141-1.836-7.186 3.178-7.901 3.512-4.666 2.17.047.902-2.328 3.689-1.385 1.627-2.461-.924-2.069-1.996.844-2.309 5.58-2.049 5.802-3.516-.715.453-1.377.438-1.985-.047.098-.008 5.055-.744 3.415-1.414-.189-.078-.751.254-1.383.568.101-2.436-6.432-.584-7.082-.539 2.72 2.285-2.173.967.61 2.152a3.703 3.703 0 0 0-1.883.939c1.291.234-.755 1.656-.755 1.656s-2.046-1.422-.754-1.656a3.688 3.688 0 0 0-1.882-.939c2.783-1.186-2.109.133.61-2.152-.65-.045-7.184-1.896-7.082.539-.633-.314-1.193-.646-1.383-.568-1.64.67 3.316 1.406 3.415 1.414-.608.484-1.271.5-1.985.047.221 1.467 4.958 1.207 5.801 3.516.393 1.072-.685 3.623-2.069 1.996-2.374-2.787 2.339-1.52-2.328-3.689-.715-.334-6.76-5.348-7.901-3.512-.945 1.521 5.291 4.412 5.257 4.877-.173 2.387-4.797-1.258-5.341-.701-2.084 2.131 5.315 3.129 5.413 2.725-.729 3.023-4.561-.418-5.458.32-2.588 2.125 6.101 2.656 5.526 1.572 1.238 2.34-5.53 1.58-5.632 1.961-.734 2.76 5.468.131 5.479.182.596 2.658-5.409 1.748-5.483 2.92-.205 3.213 5.508-1.145 5.688-.654 1.177 3.18-5.542 2.719-5.712 3.371-.771 2.961 6.105-.205 5.971-1.252.502 3.912-5.281 2.838-5.856 4.32-1.229 3.166 8.319-1.707 7.582-3.02 1.017 1.807-2.594 2.594-2.073 3.49 1.391 2.4 3.396-3.5 3.936-3.311 1.544.543-1.386 2.764-.782 3.004 1.404.559 2.301-2.893 2.84-2.518 2.582 1.799-5.531 3.375-3.425 5.555-2.594.754-3.75 1.914-5.543-.227-.493-.588-1.855-1.023-2.52-.469.959.035 2.845 1.369 3.495 1.92-1.299-.045-3.814-1.244-4.72.361 1.13-.463 3.601.023 4.705.098-1.205 1.023-3.387.291-2.981 2.758.6-1.994 6.595-3.529 7.305-.65.721-1.279-2.123-2.004-2.736-2.178.416-.135 5.085-.127 5.085-.127s2.596-5.137 3.762-3.865c2.791 3.045-4.647 4.654-4.898 5.271-.778 1.922 3.756.184 3.624.063 1.247 1.146-3.028 2.061-3.019 2.434.051 2.078 3.49-.813 3.652-.775 1.633.375-2.294 2.844-2.25 2.545-.329 2.238 3.396-.686 3.337-1.186.388.555.369 1.145-.057 1.77C29.27 50.371 30.508 50.619 32 53c1.492-2.381 2.731-2.629 1.389-4.957-.425-.625-.443-1.215-.057-1.77-.06.5 3.667 3.424 3.337 1.186.044.299-3.882-2.17-2.25-2.545.162-.037 3.603 2.854 3.653.775.009-.373-4.266-1.287-3.019-2.434-.133.121 4.402 1.859 3.623-.063-.25-.617-7.688-2.227-4.897-5.271 1.165-1.271 3.761 3.865 3.761 3.865s4.669-.008 5.086.127c-.613.174-3.457.898-2.737 2.178.711-2.879 6.705-1.344 7.305.65.406-2.467-1.775-1.734-2.98-2.758 1.103-.073 3.573-.559 4.703-.096zm-7.921-23.576c-.578.281-1.199.527-1.644.42.386-.483 1.146-.983 1.644-.42zm-3.175-.446c1.016.221 1.016.459 0 .715-1.01-.24-1.01-.478 0-.715zm-14.817.446c.499-.563 1.258-.063 1.645.42-.445.107-1.067-.139-1.645-.42zm3.176.269c-1.017-.256-1.017-.494 0-.715 1.01.237 1.01.475 0 .715z"
  }), _react["default"].createElement("linearGradient", {
    id: "albania_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 62,
    x2: 32.001,
    y2: 2.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#1a1a1a"
  }), _react["default"].createElement("stop", {
    offset: 0.102,
    stopColor: "#393939",
    stopOpacity: 0.949
  }), _react["default"].createElement("stop", {
    offset: 0.347,
    stopColor: "#7f7f7f",
    stopOpacity: 0.826
  }), _react["default"].createElement("stop", {
    offset: 0.569,
    stopColor: "#b6b6b6",
    stopOpacity: 0.716
  }), _react["default"].createElement("stop", {
    offset: 0.758,
    stopColor: "#dedede",
    stopOpacity: 0.621
  }), _react["default"].createElement("stop", {
    offset: 0.908,
    stopColor: "#f6f6f6",
    stopOpacity: 0.546
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff",
    stopOpacity: 0.5
  })), _react["default"].createElement("circle", {
    opacity: 0.1,
    fill: "url(#albania_svg__a)",
    cx: 32,
    cy: 32,
    r: 30
  }));
};

var _default = SvgAlbania;
exports["default"] = _default;