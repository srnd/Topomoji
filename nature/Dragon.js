"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgDragon = function SvgDragon(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M13.398 48.123l.005.001c-.106.553.739 1.541 1.315 1.98-1.409.576-2.236 1.252-1.17 1.913 0 0 .005-.001.004-.004.099.969 2.194 2.77 1.763 1.725-.229-.564.043-1.331-.001-1.837l.005.001c1.469-.176 4.743-1.611 6.026 1.091-.033.56 1.132 1.233 1.337 2.037.265 1.041.851-.984.603-2.111.005-.005.005-.004.007-.005.396-.307.176-1.906-1.182-3.144-5.577-5.086-9.012-2.929-8.712-1.647zm4.181 1.089c-.823.205-1.688.45-2.44.727-.132-.396-.047-.878.001-1.3.281.258.976-.73 2.439.573zM25.944 27.838l-.001.006c-.514-.103-1.463.573-1.888 1.035-.507-1.175-1.122-1.874-1.767-1.01 0 0 0 .004.003.004-.912.058-2.649 1.743-1.659 1.412.534-.179 1.25.066 1.723.043l-.001.002c.131 1.214 1.396 3.95-1.167 4.943-.523-.04-1.184.903-1.942 1.053-.983.193.901.725 1.967.548.004.001.002.001.003.005.278.334 1.783.19 2.977-.897 4.903-4.478 2.963-7.361 1.752-7.144zm-1.12 3.419a18.652 18.652 0 0 0-.624-2.027c.374-.099.826-.019 1.219.032-.248.225.661.821-.595 1.995z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M60.241 27.389c1.29-1.928.602-3.138 1.312-4.085 0 0-.78.375-1.293 1.137 0 0-.164-1.969 1.74-4.249 0 0-2.9.835-3.47 3.21 0 0-.5-.497-.674-1.292 0 0-1.124 1.061-.74 2.666 0 0-.451-.021-.669-1.074-2.248 5.062 2.424 5.734 3.794 3.687z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M59.766 25.686s-.315.169-.583.189c0 0-.13-1.601.39-2.573 0 0-1.505.272-1.907 2.422 0 0-.636-.216-.951-.581-.529 2.939 3.055 3.454 3.051.543z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M57.872 27.701c-.056 1.07-.705 2.189-.705 2.189l.825-.149-.9 2.443 1.202-.643-1.059 3.583 1.473-.927-2.245 3.836 2.011-.634-3.305 4.036 2.159-.364-4.493 2.966 2.166.255-4.708 2.011 2.219.419-5.377.931 1.633 1.219-4.94-.205 1.627 1.429-4.055-.663.117 1.295-3.096-.805-.363.953-2.29-1.291-1.095.833-1.413-1.996-1.832.101.659-2.118-1.603-1.095 2.005-.813-.668-2.882 1.591 1.302.161-3.426 1.133 2.177.683-4.004.704 2.737.936-3.965.431 2.727 1.066-4.039.294 3.186 1.133-4.493.582 3.076.582-4.468.813 3.099.294-4.723 1.282 3.181-.326-4.701 1.656 2.836-.915-4.55 2.09 2.671-2.022-4.771 3.304 1.985-3.506-4.056 3.688 2.217-2.987-3.801 2.661.955-3.39-3.098 3.152 1.178-3.868-3.286 3.016.802-4.491-3.205 3.443.68-4.96-2.637 2.937-.222-4.211-1.736 2.46-.517-4.204-1.006 3.184-.971-5.163-.509 2.426-1.163-4.498-.352 2.331-1.282-4.926.247 1.856-1.965-4.345 1.28 1.53-2.357-4.451 1.769L26.106 2l-3.527 2.042.227-1.973-2.455 3.088-.769-1.061s-8.195 9.791-3.615 9.1c11.412-1.725 29.306-1.198 15.141 23.486-8.02 4.516-3.958 25.107 20.17 11.714 6.433-3.758 10.792-10.33 6.594-20.695z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: -42.063,
    y1: 122.976,
    x2: 0.103,
    y2: 122.976,
    gradientTransform: "rotate(-57.643 -74.115 29.38)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#84bd2e"
  }), _react["default"].createElement("stop", {
    offset: 0.842,
    stopColor: "#5e9d23"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#529320"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__a)",
    d: "M58.861 27.586c-.538-1.191-1.622-1.182-1.287-.292 6.796 18.023-10.998 25.073-21.387 23.974-7.385-.782-9.707-7.627-1.614-14.238C52.352 22.507 32.92 1.667 18.129 7.497c.27 4.039.633 8.159 1.43 12.163 6.866-3.841 19.929 2.371 4.568 14.77-13.222 10.675 1.375 24.385 12.696 23.423 15.814-1.35 29.74-13.103 22.038-30.267z"
  }), _react["default"].createElement("path", {
    fill: "#F9C802",
    d: "M18.665 13.716c.221 1.995.505 3.985.894 5.947 5.93-3.321 16.482.868 9.326 10.073 10.214-11.333-1.103-17.68-10.22-16.02zM23.095 35.332C7.131 50.212 34.57 66.07 50.018 53.96c-15.788 8.227-37.623-5.144-26.923-18.628z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M15.771 13.722c.438-2.407-2.553-5.327-.513-8.206-3.782.037-4.373 6.382.513 8.206z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M16.922 13.446c1.125-2.121-1.533-5.865 1.299-7.964-3.719-1.064-5.565 4.842-1.299 7.964z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M17.561 14.548c1.416-1.92.127-6.455 3.254-8.114-3.581-1.561-7.097 4.461-3.254 8.114z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M18.139 15.507c1.952-1.366 1.727-6.421 5.276-7.035-3.046-2.52-7.964 2.488-5.276 7.035z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M18.067 16.53c2.266-.825 3.927-6.069 7.591-5.789-2.41-3.138-9.153.812-7.591 5.789z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M17.963 17.376c2.325-.661 4.921-5.129 8.576-4.601-2.204-3.276-9.805-.443-8.576 4.601z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M17.563 17.657c2.477.235 6.616-3.457 9.95-1.666-.957-3.759-9.345-3.344-9.95 1.666z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M16.615 18.607c2.459.479 7.201-2.52 10.369-.421-.589-3.806-9.27-4.464-10.369.421z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M15.188 19.613c2.418.734 7.371-1.65 10.327.756-.19-3.815-8.702-5.455-10.327-.756z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M12.896 20.299c2.272 1.168 7.39-.461 9.885 2.426.528-3.723-7.382-6.661-9.885-2.426z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M11.427 20.955c2.071 1.523 5.696.101 7.706 3.334 1.156-3.531-4.492-7.025-7.706-3.334z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M9.055 21.116c1.849 1.798 5.689.95 7.219 4.407 1.678-3.275-3.456-7.533-7.219-4.407z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M10.717 18.51c-2.741-1.256-2.72 2.116-7.539 2.741 4.873 1.87 5.055-1.653 7.539-2.741z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: -2.724,
    y1: 68.274,
    x2: -0.727,
    y2: 69.395,
    gradientTransform: "rotate(-19.999 -169.628 -4.993)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#bd915f"
  }), _react["default"].createElement("stop", {
    offset: 0.429,
    stopColor: "#a97b47"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#91612a"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__b)",
    d: "M13.967 5.988c-.67-.013-1.144-.568-1.211-.584-.086-.024-.014.775.669 1.204-.903 1.368-1.556 2.168-1.89 3.652 0 0 .569.906 2.395-.07-.388-2.613 2.349-4.791.483-6.824-.517-.559.793.866-.446 2.622z"
  }), _react["default"].createElement("radialGradient", {
    id: "dragon_svg__c",
    cx: 5.994,
    cy: 66.98,
    r: 9.437,
    gradientTransform: "matrix(1.1472 -.5363 .102 .1778 .65 8.606)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#fa0"
  }), _react["default"].createElement("stop", {
    offset: 0.134,
    stopColor: "#fda003"
  }), _react["default"].createElement("stop", {
    offset: 0.363,
    stopColor: "#f9840a"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#f25717"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e81c27"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__c)",
    d: "M15.252 18.465l-1.638-2.857c-7.237 2.067-5.021 5.891-11.228 7.218 4.427 1.462 6.842-3.676 12.866-4.361z"
  }), _react["default"].createElement("radialGradient", {
    id: "dragon_svg__d",
    cx: -2.119,
    cy: 79.683,
    r: 9.188,
    gradientTransform: "matrix(1.0593 -.352 .2479 .6219 -9.832 -33.067)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.363,
    stopColor: "#90c731"
  }), _react["default"].createElement("stop", {
    offset: 0.573,
    stopColor: "#87c02f"
  }), _react["default"].createElement("stop", {
    offset: 0.744,
    stopColor: "#79b42b"
  }), _react["default"].createElement("stop", {
    offset: 0.893,
    stopColor: "#66a325"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#529320"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__d)",
    d: "M17.208 12.574c-1.099.033-1.255-1.716-2.668-1.871-.212-.023-.423-.714-.616-.632-.643.275-1.866.33-2.434-.163-.089-.077-.286 1.363-.406 1.393-2.612.624-3.934 2.09-2.67 3.552-1.349-.363-3.112.714-3.425 1.111-1.813-.901-4.44 1.266-2.003 3.428 0 0 7.517-2.241 11.365-4.536-.305 3.741-7.986 7.692-8.199 8.33-1.056 1.068.532 1.85 1.109 1.423 4.956-3.681 6.655-3.902 9.153-5.614 2.08-1.427 2.578-2.824 2.48-4.356-1.151-.056-1.512-1.266-1.686-2.065z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M3.957 16.481c.397.054-.271 1.943-.695 1.877-1.173-.181-.857-2.087.695-1.877z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: -16.074,
    y1: 79.39,
    x2: -3.076,
    y2: 79.39,
    gradientTransform: "rotate(-19.999 -169.628 -4.993)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ff4747"
  }), _react["default"].createElement("stop", {
    offset: 0.238,
    stopColor: "#eb3939"
  }), _react["default"].createElement("stop", {
    offset: 0.725,
    stopColor: "#b61716"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#960100"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__e)",
    d: "M14.275 14.461c-3.7 2.179-9.529 3.838-11.723 4.483-.162.049.266.476.434.446 2.307-.397 10.035-3.563 11.225-4.329-1.107 4.497-7.215 6.397-8.433 8.305-.084.133-.228.714.178.952 1.199-2.599 8.26-4.54 8.801-9.636.017-.196-.291-.332-.482-.221z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M11.403 13.365c.606 1.523-1.989 2.386-2.597.862-.61-1.525 1.989-2.388 2.597-.862z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M10.55 13.652c.448 1.13-1.343 1.719-1.789.589-.45-1.131 1.341-1.722 1.789-.589z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M10.231 13.583c.148.373-.486.586-.64.211-.148-.376.49-.586.64-.211z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M8.003 10.439s-1.979 2.66-.6 3.532c1.38.87 4.111-3.297 7.585-2.791 0 0-1.021-.814-1.947-.597 0 0 .207-.417.98-.858 0 0-1.406-.526-2.411 1.137 0 0-.264-.676.106-1.283 0 0-1.272.624-1.681 1.805 0 0-.444.014-.465-1.014 0 0-.688.723-.927 1.658.002 0-.541-.344-.64-1.589zM5.367 17.576c-.236.001-.391-.356-.074-.847.316-.492 1.04-1.142 2.841-.889 1.801.255 3.021.504 3.612-.741.592-1.24 1.339-1.378 1.916-1.411 0 0-1.034.287-1.339 1.151-.305.861-1.15 1.948-2.563 1.787-1.411-.161-2.968-.33-3.516.02s-.42.927-.877.93z"
  }), _react["default"].createElement("path", {
    fill: "#F0D6B6",
    d: "M13.542 16.05c-4.897 2.643-10.23 3.751-10.23 3.751l-.336-.567s6.703-1.813 10.309-3.795c.18-.101.356.559.257.611z"
  }), _react["default"].createElement("path", {
    fill: "#F0D6B6",
    d: "M5.659 22.928c2.255-2.305 5.716-2.935 7.947-6.89.084-.146.647.264.558.404-2.411 3.771-5.434 4.491-8.003 6.959-.146.141-.58-.395-.502-.473z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: -15.31,
    y1: 77.893,
    x2: -13.375,
    y2: 77.893,
    gradientTransform: "rotate(-19.999 -169.628 -4.993)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffedd9"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#fbe8d3"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#eed9c2"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#d9c0a5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9c0a5"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__f)",
    d: "M3.372 19.124s2.147 2.777 1.81 1.402c-.276-1.141.232-1.288.049-1.953-1.438-.076-1.859.551-1.859.551z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: -9.401,
    y1: 77.782,
    x2: -7.919,
    y2: 77.782,
    gradientTransform: "rotate(-19.999 -169.628 -4.993)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffedd9"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#fbe8d3"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#eed9c2"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#d9c0a5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9c0a5"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__g)",
    d: "M8.998 17.307s1.604 2.082 1.337.994c-.218-.902.192-.999.047-1.525-1.138-.061-1.384.531-1.384.531z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: -5.123,
    y1: 77.457,
    x2: -3.616,
    y2: 77.457,
    gradientTransform: "rotate(-19.999 -169.628 -4.993)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffedd9"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#fbe8d3"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#eed9c2"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#d9c0a5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9c0a5"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__h)",
    d: "M12.937 15.617s2.072 1.857 1.607.828c-.384-.852-.036-1.077-.282-1.573-1.135.108-1.325.745-1.325.745z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__i",
    gradientUnits: "userSpaceOnUse",
    x1: -13.638,
    y1: 80.481,
    x2: -12.006,
    y2: 80.481,
    gradientTransform: "rotate(-19.999 -169.628 -4.993)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ffedd9"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#fbe8d3"
  }), _react["default"].createElement("stop", {
    offset: 0.6,
    stopColor: "#eed9c2"
  }), _react["default"].createElement("stop", {
    offset: 0.995,
    stopColor: "#d9c0a5"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#d9c0a5"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__i)",
    d: "M6.577 23.02s-1.161-2.892-.262-2.027c.748.716 1.181.543 1.607.975-.624.939-1.345 1.052-1.345 1.052z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M7.3 24.416c1.161 2.472 4.571.985 6.136 2.514-.427-2.422-3.686-1.58-4.113-3.775-1.439-.079-2.257.764-2.023 1.261z"
  }), _react["default"].createElement("path", {
    fill: "#297124",
    d: "M8.761 23.119c1.163 2.474 5.646 2.121 7.213 3.65-.431-2.422-4.762-2.715-5.189-4.912-1.439-.076-2.257.768-2.024 1.262z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M10.602 22.141c1.166 2.474 3.953.954 5.522 2.482-.433-2.423-3.07-1.547-3.496-3.745-1.442-.075-2.256.769-2.026 1.263zM20.812 26.708c1.268.271 3.195-1.358 2.743 1.041-.294 1.554-4.32-1.374-2.743-1.041zM28.037 20.916c-.44 2.206-1.549.281-2.747.185-1.485-.125 3.027-1.612 2.747-.185zM24.508 21.359c1.948 1.311-.384 1.437-.985 2.412-.75 1.207-.272-3.256.985-2.412z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__j",
    gradientUnits: "userSpaceOnUse",
    x1: 3.863,
    y1: 44.332,
    x2: 8.954,
    y2: 44.332,
    gradientTransform: "rotate(11.068 118.947 135.293)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#84bd2e"
  }), _react["default"].createElement("stop", {
    offset: 0.842,
    stopColor: "#5e9d23"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#529320"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__j)",
    d: "M27.978 27.421c.625-4.399-3.025-7.231-3.991-6.108.521.046.66 1.585.66 1.585-.059.414 1.512.215.938 2.82-.18.819 2.217 2.934 2.393 1.703z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__k",
    gradientUnits: "userSpaceOnUse",
    x1: 2.243,
    y1: 161.399,
    x2: 14.702,
    y2: 161.399,
    gradientTransform: "rotate(75.96 104.487 106.509)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.291,
    stopColor: "#84bd2e"
  }), _react["default"].createElement("stop", {
    offset: 0.842,
    stopColor: "#5e9d23"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#529320"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__k)",
    d: "M33.711 28.917c-1.46-.072-6.111.03-5.408-2.628.66-2.503 1.488-7.059-.594-5.917.21.298.024 1.146-.669 1.538-.479 1.309-.552 4.689-3.698 4.574.061 1.317-.931 1.407-.781 1.667.119.471 1.724.933 3.522.396 1.506 3.098 7.198 3.213 7.198 3.213 2.644-1.114.43-2.843.43-2.843z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M24.044 58.099c1.788-1.494 1.413.665 2.296 1.432 1.094.945-3.448-.468-2.296-1.432z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__l",
    gradientUnits: "userSpaceOnUse",
    x1: 62.182,
    y1: 31.867,
    x2: 67.209,
    y2: 31.867,
    gradientTransform: "rotate(-66.309 65.684 73.086)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#529320"
  }), _react["default"].createElement("stop", {
    offset: 0.158,
    stopColor: "#5e9d23"
  }), _react["default"].createElement("stop", {
    offset: 0.709,
    stopColor: "#84bd2e"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#92c932"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__l)",
    d: "M31.113 56.25c-4.443-1.533-8.189 1.187-7.229 2.314.16-.466 1.793-.257 1.793-.257.417.146.553-1.334 3.142-.241.812.342 3.536-1.387 2.294-1.816z"
  }), _react["default"].createElement("path", {
    fill: "#225E1E",
    d: "M34.345 61.121c-.623-1.07-3.199-1.347-.98-2.615 1.435-.823 1.757 3.943.98 2.615zM24.932 59.876c2.056-1.149 1.249.903 1.966 1.809.881 1.127-3.295-1.063-1.966-1.809z"
  }), _react["default"].createElement("linearGradient", {
    id: "dragon_svg__m",
    gradientUnits: "userSpaceOnUse",
    x1: 66.013,
    y1: 37.23,
    x2: 78.6,
    y2: 37.23,
    gradientTransform: "rotate(-55.466 69.112 87.354)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#529320"
  }), _react["default"].createElement("stop", {
    offset: 0.235,
    stopColor: "#5b9b23"
  }), _react["default"].createElement("stop", {
    offset: 0.617,
    stopColor: "#73af29"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#92c932"
  })), _react["default"].createElement("path", {
    fill: "url(#dragon_svg__m)",
    d: "M27.576 50.592c.909 1.074 4.068 4.277 1.477 5.541-2.439 1.191-6.631 3.624-4.34 4.334.101-.347.902-.777 1.673-.548 1.364-.531 4.116-2.716 6.105-.43 1.014-.912 1.742-.274 1.852-.552.297-.396-.396-1.828-2.016-2.739 1.48-3.108-2.193-7.186-2.193-7.186-2.641-1.119-2.558 1.58-2.558 1.58z"
  }));
};

var _default = SvgDragon;
exports["default"] = _default;