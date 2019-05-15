"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgTearOffCalendar = function SvgTearOffCalendar(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M2.492 46v14.5c0 .825.675 1.5 1.5 1.5h56c.825 0 1.5-.675 1.5-1.5V46h-59z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M2.492 60v.5c0 .825.675 1.5 1.5 1.5l56-.25-56-.25c-.825 0-1.5-.675-1.5-1.5z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M2.492 58.668v.5c0 .825.675 1.5 1.5 1.5l56-.25-56-.25c-.825 0-1.5-.675-1.5-1.5z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M3.992 59.334l56-.25-56-.25c-.825 0-1.5-.675-1.5-1.5v.5c0 .825.675 1.5 1.5 1.5z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2.492 24v32.5c0 .825.675 1.5 1.5 1.5h56c.825 0 1.5-.675 1.5-1.5V24h-59z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M2.492 9h59v15h-59z"
  }), _react["default"].createElement("linearGradient", {
    id: "tear-off-calendar_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 52.642,
    y1: 77.398,
    x2: 52.642,
    y2: 46.552
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6",
    stopOpacity: 0
  }), _react["default"].createElement("stop", {
    offset: 0.5,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.607,
    stopColor: "#aebdc1"
  }), _react["default"].createElement("stop", {
    offset: 0.739,
    stopColor: "#a0adb2"
  }), _react["default"].createElement("stop", {
    offset: 0.885,
    stopColor: "#889499"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#717b80"
  })), _react["default"].createElement("path", {
    fill: "url(#tear-off-calendar_svg__a)",
    d: "M43.799 57.98c17.686-4.408 17.686-16.133 17.686-16.133v8.572c-2.692 8.632-17.686 7.561-17.686 7.561z"
  }), _react["default"].createElement("linearGradient", {
    id: "tear-off-calendar_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 56.861,
    y1: 53.634,
    x2: 51.972,
    y2: 48.744
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b8bfc4"
  }), _react["default"].createElement("stop", {
    offset: 0.065,
    stopColor: "#c1c7cc"
  }), _react["default"].createElement("stop", {
    offset: 0.292,
    stopColor: "#dce0e2"
  }), _react["default"].createElement("stop", {
    offset: 0.522,
    stopColor: "#f0f1f2"
  }), _react["default"].createElement("stop", {
    offset: 0.756,
    stopColor: "#fbfcfc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), _react["default"].createElement("path", {
    fill: "url(#tear-off-calendar_svg__b)",
    d: "M61.484 40.848c0 10.572-5.754 17.133-17.686 17.133 0 0 8.178-2.086 8.178-9.242 10.323-.001 9.508-7.891 9.508-7.891z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.57 30.002h3.03c.473 0 .736.266.736.736v20.221c0 .473-.264.736-.736.736h-2.789c-.473 0-.736-.264-.736-.736V34.295l-4.191 2.301c-.505.295-.884.052-.884-.504v-2.703c0-.389.154-.682.502-.883l4.154-2.271c.295-.176.565-.233.914-.233zM31.711 30.002h12.551c.475 0 .738.266.738.736v2.418c0 .326-.064.596-.18.914l-6.934 17.066c-.146.387-.441.559-.852.559h-2.982c-.535 0-.768-.326-.559-.854l6.801-16.75H31.71c-.471 0-.734-.262-.734-.732v-2.621c.001-.47.264-.736.735-.736z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M16.994 19.076c-.016-.217.1-.33.305-.33h1.006c.191 0 .307.113.334.316.102.988.742 1.365 1.619 1.365.969 0 1.639-.461 1.639-1.471v-6.643c0-.203.113-.314.32-.314h.998c.207 0 .318.111.318.314v6.643c0 2.082-1.588 3.043-3.275 3.043-1.612.001-3.121-.87-3.264-2.923zM25.248 18.844v-6.529c0-.203.113-.314.32-.314h.998c.207 0 .32.111.32.314v6.432c0 1.08.67 1.682 1.924 1.682s1.924-.602 1.924-1.682v-6.432c0-.203.115-.314.322-.314h.996c.207 0 .322.111.322.314v6.529c0 2.055-1.59 3.156-3.564 3.156-1.972 0-3.562-1.102-3.562-3.156zM39.861 20.592v.91c0 .203-.115.314-.322.314h-4.988c-.205 0-.32-.111-.32-.314v-9.188c0-.203.115-.314.32-.314h.998c.209 0 .322.111.322.314v7.961h3.668c.207 0 .322.112.322.317zM46.932 12.379l-3.1 5.016v4.107c0 .203-.113.314-.32.314h-.998c-.207 0-.32-.111-.32-.314v-4.119l-3.092-5.004c-.135-.219-.038-.379.212-.379h1.154a.4.4 0 0 1 .377.217l2.17 3.635 2.17-3.635a.406.406 0 0 1 .378-.217h1.154c.25 0 .349.16.215.379z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M2.344 8.98V10h7.801l.478-.291.186.291h12.08l.123-.229.371.229h14.765l.217-.182.18.182h9.613l.387-.182.402.182h7.537l.295-.135.307.135h4.572V8.98z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M2.203 8.104v1.52h9.945l.291-.131.436.131h18.807l.623-.25.638.25h11.094l.502-.25.201.25h13.182l.349-.25.725.25h2.801v-1.52z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M61.893 8.261V9.28h-7.864l-.484-.291-.186.291H41.186l-.125-.228-.373.228H25.803l-.217-.181-.182.181h-9.689l-.389-.181-.406.181H7.324l-.297-.134-.31.134H2.109V8.261z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M62 7.346v1.518h-3.014l-.293-.131-.437.131H41.32l-.627-.25-.644.25H22.881l-.506-.25-.201.25H10.902l-.353-.25-.731.25H2V7.346z"
  }), _react["default"].createElement("linearGradient", {
    id: "tear-off-calendar_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 32.001,
    y1: 8.5,
    x2: 32.001,
    y2: 2
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f33"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#ee2125"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cf000a"
  })), _react["default"].createElement("path", {
    fill: "url(#tear-off-calendar_svg__c)",
    d: "M60.5 2h-57C2.675 2 2 2.675 2 3.5v5h2.818l.73-.25.354.25h13.271l.201-.25.506.25h11.168l.645-.25.627.25h18.936l.438-.131.292.131H62v-5c0-.825-.675-1.5-1.5-1.5z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M24.573 5.261c0 1.999-3.001 1.999-3.001 0 0-2.001 3.001-2.001 3.001 0zM42.427 5.261c0 1.999-3 1.999-3 0 0-2.001 3-2.001 3 0z"
  }), _react["default"].createElement("radialGradient", {
    id: "tear-off-calendar_svg__d",
    cx: -127.585,
    cy: -770.609,
    r: 9.361,
    gradientTransform: "matrix(.8573 0 0 -.1973 141.38 -146.78)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.346,
    stopColor: "#e3e9ed"
  }), _react["default"].createElement("stop", {
    offset: 0.587,
    stopColor: "#dae1e5"
  }), _react["default"].createElement("stop", {
    offset: 0.795,
    stopColor: "#cbd5d9"
  }), _react["default"].createElement("stop", {
    offset: 0.985,
    stopColor: "#b5c4c8"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#tear-off-calendar_svg__d)",
    d: "M39.828 6.091H24.173c-.422 0-.422-1.66 0-1.66h15.655c.422 0 .422 1.66 0 1.66z"
  }));
};

var _default = SvgTearOffCalendar;
exports["default"] = _default;