"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgSteamingBowl = function SvgSteamingBowl(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "steaming-bowl_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 49.5,
    x2: 52,
    y2: 49.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#e6ebef"
  }), _react["default"].createElement("stop", {
    offset: 0.286,
    stopColor: "#e2e8ec"
  }), _react["default"].createElement("stop", {
    offset: 0.56,
    stopColor: "#d7dfe3"
  }), _react["default"].createElement("stop", {
    offset: 0.83,
    stopColor: "#c3cfd3"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#b3c2c6"
  })), _react["default"].createElement("path", {
    fill: "url(#steaming-bowl_svg__a)",
    d: "M27 37H2c0 20.418 15.209 25 25 25s25-4.582 25-25H27z"
  }), _react["default"].createElement("linearGradient", {
    id: "steaming-bowl_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 44.084,
    x2: 52,
    y2: 44.084
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#f5000d"
  }), _react["default"].createElement("stop", {
    offset: 0.271,
    stopColor: "#f2010d"
  }), _react["default"].createElement("stop", {
    offset: 0.509,
    stopColor: "#e7060f"
  }), _react["default"].createElement("stop", {
    offset: 0.734,
    stopColor: "#d50d11"
  }), _react["default"].createElement("stop", {
    offset: 0.903,
    stopColor: "#c21413"
  })), _react["default"].createElement("path", {
    fill: "url(#steaming-bowl_svg__b)",
    d: "M52 37c0 9.75-8.223 14.168-25 14.168C10.225 51.168 2 46.75 2 37h50z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M27 26.595c13.809 0 25 4.423 25 10.405 0 5.984-11.191 10.834-25 10.834-13.807 0-25-4.85-25-10.834 0-5.982 11.193-10.405 25-10.405z"
  }), _react["default"].createElement("linearGradient", {
    id: "steaming-bowl_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 3.666,
    y1: 37.001,
    x2: 50.334,
    y2: 37.001
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b3c2c6"
  }), _react["default"].createElement("stop", {
    offset: 0.252,
    stopColor: "#c0ccd0"
  }), _react["default"].createElement("stop", {
    offset: 0.618,
    stopColor: "#cbd5da"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#cfd8dd"
  })), _react["default"].createElement("path", {
    fill: "url(#steaming-bowl_svg__c)",
    d: "M27.002 27.834c-12.887 0-23.336 4.104-23.336 9.166s10.449 9.168 23.336 9.168S50.334 42.062 50.334 37s-10.445-9.166-23.332-9.166z"
  }), _react["default"].createElement("path", {
    fill: "#E3BB59",
    d: "M27.002 31.168c-11.438 0-20.945 3.233-22.941 7.5 1.996 4.264 11.504 7.5 22.941 7.5 11.436 0 20.943-3.236 22.939-7.5-1.996-4.267-11.502-7.5-22.939-7.5z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M40.795 37.174c-1.723.572-4.221 1.477-5.803 1.154-.916-.186-.492-.803.412-1.054.877-.242 1.951-.299 2.865-.382.746-.067 1.576-.259 2.008-.793.324-.401.074-.887-.309-1.188-.617-.482-1.602-.582-2.418-.596-.479-.007-.477.593 0 .602.469.006 2.299.123 2.119.813-.17.657-2.014.61-2.611.687-1.063.134-2.719.417-3.291 1.266-.475.704.521 1.102 1.232 1.168 2.014.19 4.178-.498 5.994-1.1.437-.145.247-.724-.198-.577zM23.689 42.374c-1.723.571-4.225 1.476-5.805 1.154-.914-.186-.492-.803.412-1.052.877-.244 1.949-.3 2.865-.382.746-.068 1.576-.26 2.008-.795.324-.403.074-.887-.309-1.188-.617-.482-1.602-.583-2.418-.595-.479-.008-.479.591 0 .599.469.008 2.299.124 2.119.816-.17.655-2.014.608-2.613.685-1.061.134-2.719.417-3.291 1.266-.475.703.523 1.101 1.234 1.169 2.012.189 4.178-.499 5.996-1.101.435-.144.246-.722-.198-.576z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M42.207 34.547c-3.045-1.985-9.557-1.968-13.582-1.699-2.48.166-7.805.573-8.74 2.979-.793 2.035 4.102 1.645 5.107.538.283-.312-.277-.548-.639-.303-1.736 1.169-5.111.733-3.221-.749.719-.566 1.83-.881 2.742-1.131 2.621-.723 5.484-.84 8.229-.864 2.539-.022 5.107.21 7.527.843.861.225 4.176 1.553 1.848 2.114-.461.109-.273.65.195.578.997-.156 2.442-1.061.534-2.306z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M16.217 33.358c1.721-.572 4.225-1.476 5.803-1.155.914.188.492.804-.412 1.055-.879.241-1.949.298-2.865.381-.746.068-1.576.259-2.006.793-.324.403-.076.888.307 1.188.617.482 1.604.582 2.418.596.48.008.479-.593 0-.6-.469-.008-2.299-.123-2.119-.815.17-.657 2.014-.61 2.613-.685 1.063-.135 2.719-.418 3.291-1.267.473-.703-.523-1.103-1.234-1.169-2.014-.189-4.176.498-5.994 1.101-.437.145-.246.724.198.577z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M14.025 37.265c3.043 1.986 9.557 1.97 13.582 1.701 2.48-.166 7.805-.574 8.742-2.98.793-2.033-4.102-1.645-5.109-.538-.285.313.277.547.641.302 1.734-1.166 5.107-.733 3.219.751-.719.566-1.83.879-2.744 1.13-2.617.722-5.484.84-8.227.864-2.539.023-5.105-.21-7.527-.842-.861-.225-4.176-1.554-1.846-2.114.459-.11.271-.652-.197-.578-.996.154-2.442 1.06-.534 2.304z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M22.938 36.442c.93.311 2.939.313 4.377.206 2.363-.178 4.734-.659 6.855-1.533.426-.176.803.342.375.518-2.922 1.202-6.33 1.811-9.602 1.602-.58-.038-3.852-.005-3.217-1.411.723-1.597 4.848-.604 7.068-.604.939 0 2.365-.229 2.365-1.228 0-.649-1.498-.924-2.252-1.016-.877-.106-2.457-.317-3.293.107-.816.417 1.17.791 2.799.791.477 0 .494.601 0 .601-.932 0-3.303.032-3.793-.871-.313-.566.303-.957.918-1.138 1.594-.472 7.002-.17 6.426 1.675-.559 1.781-2.998 1.881-5.986 1.447-2.763-.397-4.55.351-3.04.854zM44.832 39.979c-.992.945-2.396 2.383-3.701 2.465-.756.048-.736-.626-.191-1.075.527-.435 1.285-.744 1.916-1.04.514-.243 1.031-.62 1.094-1.219.049-.45-.359-.839-.781-1.026-.676-.299-1.443-.152-2.045.03-.354.107-.072.664.281.555.346-.105 1.738-.438 1.93.246.184.648-1.186 1.049-1.588 1.263-.713.379-1.793 1.04-1.814 1.964-.016.766.898.894 1.449.785 1.561-.308 2.82-1.465 3.867-2.459.251-.24-.161-.731-.417-.489z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M43.461 37.804c-3.152-1.108-7.904.473-10.723 1.689-1.734.748-5.436 2.404-4.992 4.859.371 2.072 3.766.537 3.984-.731.061-.354-.459-.439-.609-.124-.723 1.498-3.393 1.906-2.705.078.262-.696.928-1.254 1.477-1.704 1.576-1.299 3.615-2.098 5.609-2.778 1.846-.633 3.832-1.033 5.896-1.03.736 0 3.779.437 2.34 1.514-.283.214.105.67.414.489.655-.382 1.289-1.569-.691-2.262zM26.652 44.074c-1.424-2.265-5.924-3.383-8.793-3.849-1.764-.288-5.576-.858-7.037 1.082-1.238 1.639 2.271 2.151 3.342 1.36.301-.224-.006-.527-.34-.376-1.594.718-3.773-.248-1.967-1.217.688-.37 1.559-.449 2.275-.51 2.051-.174 4.066.222 5.969.678 1.76.42 3.451 1.072 4.906 2.046.521.346 2.354 2.085.557 2.169-.354.017-.408.521-.061.539.741.04 2.046-.501 1.149-1.922z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M38.748 39.456c-.826-.063-2.297.416-3.297.861-1.645.733-3.152 1.748-4.295 3.067-.229.264-.744-.124-.514-.39a12.029 12.029 0 0 1 6.27-3.79c.439-.104 2.816-.921 3.01.533.219 1.654-3.26 1.725-4.883 2.26-.686.225-1.623.778-1.154 1.702.305.603 1.527.497 2.119.399.691-.112 1.947-.295 2.357-.891.4-.58-1.225-.452-2.416-.059-.35.113-.643-.438-.281-.556.682-.224 2.4-.824 3.182-.106.492.45.227.96-.139 1.274-.945.82-5.041 1.841-5.482-.006-.424-1.783 1.313-2.462 3.699-2.779 2.209-.293 3.162-1.416 1.824-1.519zM10.813 35.878c1.846-.215 4.545-.599 5.979.026.832.36.232.876-.719.938-.924.063-1.98-.094-2.895-.194-.744-.08-1.607-.06-2.186.374-.438.326-.342.845-.063 1.213.451.589 1.379.879 2.164 1.053.463.103.643-.479.182-.581-.451-.099-2.191-.571-1.807-1.209.365-.602 2.137-.192 2.742-.148 1.068.08 2.762.132 3.576-.577.67-.589-.176-1.172-.844-1.377-1.895-.58-4.201-.341-6.145-.116-.467.055-.457.654.016.598z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M7.701 39.303c2.348 2.524 8.668 3.794 12.652 4.326 2.455.329 7.74.983 9.381-1.165 1.385-1.814-3.479-2.404-4.793-1.529-.369.246.104.587.531.42 2.037-.79 5.174.297 2.895 1.362-.869.406-2.043.492-3.004.556-2.758.183-5.572-.269-8.24-.785-2.469-.479-4.887-1.211-7.043-2.301-.77-.389-3.576-2.332-1.15-2.415.48-.017.463-.578-.014-.601-1.014-.045-2.687.547-1.215 2.132z"
  }), _react["default"].createElement("path", {
    fill: "#8A6859",
    d: "M62 9.219l-.736 1.134-38.547-6.947-.047-1.291L62 7.749z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M61.264 8.466L62 7.749 22.686 2l-.875.438z"
  }), _react["default"].createElement("path", {
    fill: "#ED9D00",
    d: "M24 4.749v15c0 .966 1 .966 1 0v-15h-1zM26.383 4.047v10c0 .966 1 .966 1 0v-10h-1zM30 4.749v20c0 .966 1 .966 1 0v-19.2l-1-.8z"
  }), _react["default"].createElement("path", {
    fill: "#8A6859",
    d: "M59 15.293l-1.018 1.188L20.357 3.522v-1L59 13.749z"
  }), _react["default"].createElement("path", {
    fill: "#785647",
    d: "M59 13.749L21.107 2.081l-.75.441 37.625 12.249z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M21 8.613v20.136c0 .967 1 .967 1 0V8.918c0-6.644 3-5.669 3-5.669 0-.523-4-2.378-4 5.364zM27 8.673V21.75c0 .967 1 .967 1 0v-12c0-4.001 1.264-5.203 3-4.623.004-.673-4-2.596-4 3.546z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M26.029 6.203c-.266-1.078-.119-2.442 1.031-3.672.391-.416 1.18-.375 1.094.269-.891.325-1.275 3.497-1.275 3.497-.152.613-.748.317-.85-.094z"
  }), _react["default"].createElement("path", {
    fill: "#FDCA47",
    d: "M24.66 5.607c-.289-.983-.174-2.216.941-3.303.379-.368 1.164-.313 1.094.269-.879.273-1.188 3.139-1.188 3.139-.136.552-.736.27-.847-.105z"
  }), _react["default"].createElement("linearGradient", {
    id: "steaming-bowl_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 15.889,
    y1: 35.419,
    x2: 15.889,
    y2: 12.673
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
    fill: "url(#steaming-bowl_svg__d)",
    d: "M16.846 35.419s2.58-4.146-2.961-9.863c-6.08-6.287 2.961-8.706 2.961-12.883 0 0 1.459 1.663-.58 5.604-2.901 5.573 9.189 6.461.58 17.142z"
  }), _react["default"].createElement("linearGradient", {
    id: "steaming-bowl_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 8.435,
    y1: 35.119,
    x2: 8.435,
    y2: 18.577
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
    fill: "url(#steaming-bowl_svg__e)",
    d: "M9.135 35.119s1.9-2.915-2.219-7.176c-4.48-4.632 2.219-6.327 2.219-9.367 0 0 1.09 1.21-.439 4.074-2.171 4.053 6.9 4.694.439 12.469z"
  }), _react["default"].createElement("linearGradient", {
    id: "steaming-bowl_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 25.562,
    y1: 35.119,
    x2: 25.562,
    y2: 18.577
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
    fill: "url(#steaming-bowl_svg__f)",
    d: "M24.865 18.576s-1.881 2.937 2.221 7.176c4.479 4.632-2.221 6.327-2.221 9.367 0 0-1.09-1.21.439-4.074 2.161-4.053-6.909-4.704-.439-12.469z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M25.257 36.487s.043 1.937 2.37 1.314l.082-.605c-2.06.154-2.032-1.102-2.452-.709zM33.416 42.815c-1.391 1.508-2.441.54-2.416 1.121-.001.001 1.687 1.438 2.871-.607l-.455-.514zM39.679 38.418c.15-1.939 1.399-1.492 1.068-2.009 0-.002-1.939-.614-1.658 1.729l.59.28zM18.305 40.336l-.912-.106c-.102 1.881-2.018 1.794-1.484 2.198-.002.001 2.974.055 2.396-2.092zM8.466 37.298l.584.638c1.231-1.277 2.542-.034 2.411-.651.002-.001-2.082-1.873-2.995.013zM45.348 37.377l-.553.417c1.863 1.062.838 2.009 1.508 1.948.002 0 1.511-1.512-.955-2.365z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M14.111 36.744c-.191.12-1.941-.408-2.094-.723-.065-.134.195-1.208.461-1.337.215-.104 1.984.422 2.095.724.109.301-.231 1.192-.462 1.336zM10.441 39.889c-.063.217-1.725.979-2.047.845-.138-.057-.654-1.034-.54-1.307.091-.221 1.766-.998 2.048-.846.282.154.617 1.047.539 1.308zM22.599 38.146c-.063.217-1.725.979-2.047.845-.138-.057-.654-1.034-.54-1.307.091-.221 1.766-.998 2.048-.846.281.154.616 1.047.539 1.308zM34.473 41.146c-.138.179-1.963.283-2.214.04-.107-.103-.232-1.201-.026-1.413.165-.173 2.008-.286 2.215-.041.205.247.192 1.201.025 1.414zM43.163 41.064c-.03.223-1.558 1.227-1.897 1.143-.144-.035-.801-.924-.729-1.21.057-.232 1.595-1.253 1.896-1.145.302.111.768.944.73 1.212zM36.246 37.17c-.224-.024-1.262-1.529-1.186-1.871.032-.144.905-.821 1.192-.757.234.052 1.289 1.566 1.188 1.87-.103.306-.924.79-1.194.758zM30.025 34.985c-.197.108-1.909-.533-2.042-.857-.056-.137.273-1.191.546-1.303.222-.091 1.953.549 2.043.856.09.31-.307 1.177-.547 1.304zM24.946 43.955c-.225-.011-1.347-1.454-1.29-1.8.023-.146.856-.872 1.146-.824.236.039 1.377 1.49 1.292 1.8-.084.31-.877.842-1.148.824z"
  }));
};

var _default = SvgSteamingBowl;
exports["default"] = _default;