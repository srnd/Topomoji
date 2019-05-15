"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgEvergreenTree = function SvgEvergreenTree(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "evergreen-tree_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 26,
    y1: 55.376,
    x2: 38,
    y2: 55.376
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#91632e"
  }), _react["default"].createElement("stop", {
    offset: 0.199,
    stopColor: "#8c5f2c"
  }), _react["default"].createElement("stop", {
    offset: 0.441,
    stopColor: "#7d5425"
  }), _react["default"].createElement("stop", {
    offset: 0.704,
    stopColor: "#65421b"
  }), _react["default"].createElement("stop", {
    offset: 0.982,
    stopColor: "#43290c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#40270b"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__a)",
    d: "M36.721 48.752h-9.44S26 55.576 26 59.049c0 3.935 12 3.935 12 0 0-2.08-1.279-10.297-1.279-10.297z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__b",
    cx: 32,
    cy: 35.525,
    r: 22.875,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#83b52d"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#72a127"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#466c17"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#325410"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__b)",
    d: "M60 54.921S48.244 51.39 32.07 26.856C30.472 24.433 24.385 44.153 4 54.921c0 0 6.043 1.444 16.568-1.134 1.088-.265-1.723 3.504-1.723 3.504s7.637-3.021 10.431-2.841c2.377.153 8.29 4.076 8.29 4.076s1.961-4.946 2.902-4.537c3.434 1.496 9.451 2.763 9.451 2.763s-4.1-3.453-2.99-3.453c1.108 0 13.071 1.622 13.071 1.622z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__c",
    cx: 32,
    cy: 27.782,
    r: 23.395,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#8ec531"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#83b92c"
  }), _react["default"].createElement("stop", {
    offset: 0.706,
    stopColor: "#6fa425"
  }), _react["default"].createElement("stop", {
    offset: 0.944,
    stopColor: "#54881c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4d8019"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__c)",
    d: "M60 48.781s-11.756-3.893-27.93-30.918C30.472 15.193 24.385 36.918 4 48.781c0 0 6.043 1.59 16.568-1.249 1.088-.294-1.723 3.859-1.723 3.859s7.637-3.327 10.431-3.13c2.377.172 8.002 4.048 8.002 4.048s.953-4.896 1.895-4.445c3.434 1.65 10.746 2.934 10.746 2.934s-4.1-3.804-2.99-3.804c1.108 0 13.071 1.787 13.071 1.787z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__d",
    cx: 32.001,
    cy: 23.59,
    r: 18.907,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#83b52d"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#72a127"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#466c17"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#325410"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__d)",
    d: "M10.129 41.544s9.307-3.228 21.941-25.636c1.249-2.214 5.879 15.801 21.803 25.636 0 0-4.305 1.434-12.527-.92-.85-.244.221 3.462.221 3.462s-5.133-3.138-7.314-2.973c-1.858.141-6.805 4.865-6.805 4.865s-2.087-5.668-2.824-5.295c-2.682 1.367-6.619 2.532-6.619 2.532s3.201-3.153 2.336-3.153-10.212 1.482-10.212 1.482z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__e",
    cx: 32.001,
    cy: 17.579,
    r: 18.991,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#8ec531"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#83b92c"
  }), _react["default"].createElement("stop", {
    offset: 0.706,
    stopColor: "#6fa425"
  }), _react["default"].createElement("stop", {
    offset: 0.944,
    stopColor: "#54881c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4d8019"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__e)",
    d: "M10.129 35.434s9.307-3.228 21.941-25.639c1.249-2.213 5.879 15.803 21.803 25.639 0 0-4.721 1.319-12.941-1.034-.85-.246 1.346 3.198 1.346 3.198s-4.705-2.555-6.887-2.39c-1.857.143-7.211 5.059-7.211 5.059s-1.047-5.969-1.781-5.593c-2.684 1.368-8.395 2.431-8.395 2.431s3.201-3.152 2.336-3.152-10.211 1.481-10.211 1.481z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__f",
    cx: 32.485,
    cy: 14.421,
    r: 15.052,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#83b52d"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#72a127"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#466c17"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#325410"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__f)",
    d: "M50.826 29.413s-8.162-2.276-18.756-18.079c-1.047-1.559-4.572 11.145-17.925 18.079 0 0 3.959.93 10.854-.729.711-.173-1.129 2.257-1.129 2.257s5.328-1.77 7.158-1.652c1.557.099 5.415 3.172 5.415 3.172s.814-3.586 1.432-3.321c2.248.964 6.35 1.452 6.35 1.452s-2.684-2.223-1.959-2.223c.724-.001 8.56 1.044 8.56 1.044z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__g",
    cx: 32.485,
    cy: 9.545,
    r: 14.494,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#8ec531"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#83b92c"
  }), _react["default"].createElement("stop", {
    offset: 0.706,
    stopColor: "#6fa425"
  }), _react["default"].createElement("stop", {
    offset: 0.944,
    stopColor: "#54881c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4d8019"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__g)",
    d: "M50.027 24.814s-7.824-2.276-17.958-18.078c-1-1.562-4.355 11.143-17.126 18.078 0 0 3.785.93 10.381-.732.68-.169-1.416 3.384-1.416 3.384s5.648-2.88 7.396-2.765c1.49.1 4.092 2.765 4.092 2.765s.994-3.451 1.584-3.186c2.15.962 6.732 1.714 6.732 1.714s-2.568-2.225-1.875-2.225c.696 0 8.19 1.045 8.19 1.045z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__h",
    cx: 32.001,
    cy: 6.217,
    r: 10.405,
    gradientTransform: "matrix(1 0 0 .9836 0 7.646)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#83b52d"
  }), _react["default"].createElement("stop", {
    offset: 0.255,
    stopColor: "#72a127"
  }), _react["default"].createElement("stop", {
    offset: 0.776,
    stopColor: "#466c17"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#325410"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__h)",
    d: "M19.787 19.327s5.227-1.703 12.283-13.538c.697-1.166 3.252 8.346 12.145 13.538 0 0-1.195.536-5.785-.705-.475-.128-.689 1.847-.689 1.847s-2.195-1.935-3.414-1.847c-1.037.071-4.055 3.211-4.055 3.211s-.988-3.104-1.4-2.909c-1.498.725-4.98 2.286-4.98 2.286s2.082-2.664 1.598-2.664c-.484-.001-5.703.781-5.703.781z"
  }), _react["default"].createElement("radialGradient", {
    id: "evergreen-tree_svg__i",
    cx: 32.001,
    cy: 1.976,
    r: 9.626,
    gradientTransform: "matrix(1 0 0 1.9672 0 5.703)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#92c932"
  }), _react["default"].createElement("stop", {
    offset: 0.231,
    stopColor: "#8ec531"
  }), _react["default"].createElement("stop", {
    offset: 0.467,
    stopColor: "#83b92c"
  }), _react["default"].createElement("stop", {
    offset: 0.706,
    stopColor: "#6fa425"
  }), _react["default"].createElement("stop", {
    offset: 0.944,
    stopColor: "#54881c"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#4d8019"
  })), _react["default"].createElement("path", {
    fill: "url(#evergreen-tree_svg__i)",
    d: "M20.785 15.634s4.807-1.702 11.285-13.536c.641-1.166 2.981 8.344 11.147 13.536 0 0-1.129.347-5.344-.896-.436-.129-.604 2.042-.604 2.042s-2.533-1.746-3.652-1.66c-.952.077-2.846 2.06-2.846 2.06s-1.268-2.142-1.643-1.946c-1.377.723-4.304 1.285-4.304 1.285s1.641-1.665 1.197-1.665-5.236.78-5.236.78z"
  }));
};

var _default = SvgEvergreenTree;
exports["default"] = _default;