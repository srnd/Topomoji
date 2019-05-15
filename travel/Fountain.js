"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgFountain = function SvgFountain(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    opacity: 0.5,
    fill: "#B1E5FD",
    d: "M22 5.342h20v17.341H22zM12 23.338h40v23.643H12z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M53.414 56.981V53.48H10.586v3.501c4.074 6.697 38.734 6.687 42.828 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2,
    y1: 52.621,
    x2: 62,
    y2: 52.621
  }, _react["default"].createElement("stop", {
    offset: 0.145,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#c3cdd2"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#a3b0b6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#fountain_svg__a)",
    d: "M2 44.741c0 4.009 6.516 10.258 10 12.025 9.814 4.979 30.186 4.979 40 0 3.484-1.768 10-8.017 10-12.025H2z"
  }), _react["default"].createElement("ellipse", {
    fill: "#CFD8DD",
    cx: 32,
    cy: 44.742,
    rx: 30,
    ry: 4.008
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 3.611,
    y1: 44.269,
    x2: 60.389,
    y2: 44.269
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.149,
    stopColor: "#6dd2fe"
  }), _react["default"].createElement("stop", {
    offset: 0.379,
    stopColor: "#57c7fd"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#34b5fb"
  }), _react["default"].createElement("stop", {
    offset: 0.983,
    stopColor: "#039bf7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#fountain_svg__b)",
    cx: 32,
    cy: 44.269,
    rx: 28.389,
    ry: 3.205
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M60.389 44.27c0-1.772-12.711-3.206-28.389-3.206S3.611 42.497 3.611 44.27c0 .296.363.583 1.03.855C6.25 43.531 17.882 42.297 32 42.297s25.75 1.234 27.358 2.828c.667-.272 1.031-.56 1.031-.855z"
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 23.133,
    y1: 36.319,
    x2: 40.867,
    y2: 36.319
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.387,
    stopColor: "#bdc8cd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#fountain_svg__c)",
    d: "M36.841 26.765h-9.682c1.186 1.674 2.307 3.75 2.307 6.547 0 5.947-6.333 8.433-6.333 10.86 0 2.27 17.734 2.27 17.734 0 0-2.428-6.333-4.913-6.333-10.86 0-2.797 1.121-4.874 2.307-6.547z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M28.651 32.977c.097.557.201 1.109.315 1.661a15.22 15.22 0 0 0 6.066 0 54.03 54.03 0 0 0 .315-1.661c-.206-.483-6.488-.482-6.696 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 12,
    y1: 28.603,
    x2: 52,
    y2: 28.603
  }, _react["default"].createElement("stop", {
    offset: 0.145,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#c3cdd2"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#a3b0b6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#fountain_svg__d)",
    d: "M12 23.501c0 2.595 4.344 6.643 6.667 7.786 6.543 3.224 20.125 3.224 26.667 0C47.656 30.144 52 26.096 52 23.501H12z"
  }), _react["default"].createElement("path", {
    opacity: 0.75,
    fill: "#B1E5FD",
    d: "M52 23.684V45.22c-.466.083-.967.161-1.498.237V23.684H52zM43.887 23.684v22.434c-.49.034-.988.065-1.499.095V23.684h1.499zM41.334 23.684V46.27l-.75.035V23.684h.75zM48.535 23.684v22.022c-.689.079-1.417.151-2.18.22V23.684h2.18zM38.711 23.684V46.38c-.494.017-.993.032-1.499.046V23.684h1.499zM30.597 23.684V46.49c-.504-.004-1.003-.01-1.499-.018V23.684h1.499zM28.044 23.684v22.771l-.75-.017V23.684h.75zM35.246 23.684v22.783c-.717.012-1.443.02-2.18.024V23.684h2.18zM26.122 23.684v22.723c-.506-.015-1.005-.031-1.499-.05V23.684h1.499zM18.008 23.684v22.272a85.655 85.655 0 0 1-1.499-.138V23.684h1.499zM13.499 23.684v21.773A44.539 44.539 0 0 1 12 45.22V23.684h1.499zM15.456 23.684v22.021a60.305 60.305 0 0 1-.75-.088V23.684h.75zM22.658 23.684v22.584c-.746-.037-1.474-.079-2.18-.125V23.684h2.18z"
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__e",
    gradientUnits: "userSpaceOnUse",
    x1: 12,
    y1: 23.5,
    x2: 52,
    y2: 23.5
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.149,
    stopColor: "#6dd2fe"
  }), _react["default"].createElement("stop", {
    offset: 0.379,
    stopColor: "#57c7fd"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#34b5fb"
  }), _react["default"].createElement("stop", {
    offset: 0.983,
    stopColor: "#039bf7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#fountain_svg__e)",
    cx: 32,
    cy: 23.5,
    rx: 20,
    ry: 2.596
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__f",
    gradientUnits: "userSpaceOnUse",
    x1: 25.175,
    y1: 17.084,
    x2: 38.825,
    y2: 17.084
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.387,
    stopColor: "#bdc8cd"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#fountain_svg__f)",
    d: "M35.726 9.537h-7.451c.914 1.519 1.773 3.405 1.773 5.942 0 5.401-4.873 5.749-4.873 7.954 0 1.597 13.65 1.597 13.65 0 0-2.205-4.873-2.553-4.873-7.954 0-2.537.861-4.423 1.774-5.942z"
  }), _react["default"].createElement("path", {
    fill: "#CFD8DD",
    d: "M30.049 15.925c-.137.242-.276.483-.424.718.066.276.143.548.224.822 1.426.199 2.877.199 4.303 0 .081-.274.157-.546.224-.822a18.51 18.51 0 0 1-.424-.718 14.095 14.095 0 0 1-3.903 0zM28.449 10.048c.103.409.214.818.334 1.224 2.137.301 4.296.301 6.433 0 .12-.405.232-.814.334-1.224-.216-.357-6.884-.353-7.101 0z"
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__g",
    gradientUnits: "userSpaceOnUse",
    x1: 22,
    y1: 7.901,
    x2: 42,
    y2: 7.901
  }, _react["default"].createElement("stop", {
    offset: 0.145,
    stopColor: "#cfd8dd"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#c3cdd2"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#a3b0b6"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#99a8ae"
  })), _react["default"].createElement("path", {
    fill: "url(#fountain_svg__g)",
    d: "M22 5.315c0 1.315 2.172 3.366 3.333 3.945 3.272 1.634 10.062 1.634 13.335 0C39.828 8.682 42 6.631 42 5.315H22z"
  }), _react["default"].createElement("path", {
    opacity: 0.75,
    fill: "#B1E5FD",
    d: "M22 5.315v19.482c.393.041.797.079 1.214.116V5.315H22zM28.569 5.315v19.901c.397.012.806.019 1.213.026V5.315h-1.213zM30.635 5.315v19.941c.201.003.404.003.607.004V5.315h-.607zM24.805 5.315v19.721c.572.037 1.16.072 1.766.102V5.315h-1.766zM32.759 5.315V25.26c.407-.002.814-.005 1.214-.012V5.315h-1.214zM39.327 5.315v19.711c.414-.028.819-.059 1.214-.092V5.315h-1.214zM41.394 5.315v19.546l.606-.063V5.315h-.606zM35.563 5.315v19.896a94.804 94.804 0 0 0 1.765-.069V5.315h-1.765z"
  }), _react["default"].createElement("linearGradient", {
    id: "fountain_svg__h",
    gradientUnits: "userSpaceOnUse",
    x1: 22,
    y1: 5.315,
    x2: 42,
    y2: 5.315
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#75d6ff"
  }), _react["default"].createElement("stop", {
    offset: 0.149,
    stopColor: "#6dd2fe"
  }), _react["default"].createElement("stop", {
    offset: 0.379,
    stopColor: "#57c7fd"
  }), _react["default"].createElement("stop", {
    offset: 0.661,
    stopColor: "#34b5fb"
  }), _react["default"].createElement("stop", {
    offset: 0.983,
    stopColor: "#039bf7"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#009af7"
  })), _react["default"].createElement("ellipse", {
    fill: "url(#fountain_svg__h)",
    cx: 32,
    cy: 5.315,
    rx: 10,
    ry: 1.315
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M32.642 4.583c0 .556-1.711.556-1.711 0 0-3.444 1.711-3.444 1.711 0z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M39.5 5.082c0 .556-1.711.556-1.711 0 0-3.444 1.711-3.444 1.711 0z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M28.069 5.082c0 .556-1.711.556-1.711 0 0-3.444 1.711-3.444 1.711 0zM36.785 5.721c0 .37-.854.37-.854 0 0-2.296.854-2.296.854 0z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M29.927 5.721c0 .37-.854.37-.854 0-.001-2.296.854-2.296.854 0zM25.355 5.038c0 .37-.855.37-.855 0 0-2.296.855-2.296.855 0zM34.5 4.611c0 .37-.854.37-.854 0 0-2.296.854-2.296.854 0zM12.77 45.874c-2.708-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.506.021.641zM17.464 46.406c-2.708-.641-2.64-2.433-.021-.641 1.516-1.661 3.043-.506.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M25.822 25.67c-2.708-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M29.233 25.762c-2.708-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M33.5 25.67c-2.707-.641-2.639-2.433-.02-.641 1.516-1.662 3.042-.507.02.641z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M36.5 25.67c-2.707-.641-2.639-2.433-.02-.641 1.516-1.662 3.042-.507.02.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M40.068 25.367c-2.707-.641-2.639-2.433-.02-.641 1.516-1.662 3.043-.506.02.641z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M21.823 46.813c-2.708-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M25.569 46.929c-2.708-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M29.678 46.929c-2.708-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M34.396 47.142c-2.708-.641-2.64-2.433-.021-.641 1.517-1.662 3.043-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M37.834 47.003c-2.707-.641-2.64-2.433-.021-.641 1.516-1.662 3.042-.507.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M41.046 46.664c-1.732-.41-1.688-1.557-.013-.41.969-1.064 1.946-.324.013.41zM41.783 25.141c-1.732-.41-1.689-1.557-.014-.41.971-1.064 1.948-.325.014.41zM31.025 25.611c-1.732-.41-1.689-1.557-.013-.41.969-1.063 1.946-.324.013.41z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M22.693 25.141c-1.732-.41-1.689-1.557-.013-.41.97-1.064 1.946-.325.013.41z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M27.756 46.775c-1.732-.41-1.689-1.557-.013-.41.97-1.063 1.946-.324.013.41zM15.048 45.928c-1.732-.41-1.689-1.557-.013-.41.97-1.064 1.946-.325.013.41z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M43.271 46.737c-2.707-.641-2.64-2.433-.021-.641 1.517-1.661 3.043-.506.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#7ED2FC",
    d: "M47.662 46.455c-2.707-.641-2.64-2.433-.021-.641 1.516-1.662 3.043-.506.021.641z"
  }), _react["default"].createElement("path", {
    fill: "#B1E5FD",
    d: "M51.385 45.86c-2.707-.641-2.639-2.433-.02-.641 1.516-1.661 3.042-.506.02.641z"
  }));
};

var _default = SvgFountain;
exports["default"] = _default;