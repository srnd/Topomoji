"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgBadger = function SvgBadger(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#4E5E67",
    d: "M12.543 46.654c-3.52.107-4.764 1.965-6.133.801-2.035-1.732 1.801-2.717 6.133-.801z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M11.089 45.795c-3.52.107-2.156 1.17-4.089 1.797-2.411-1.168-.243-3.713 4.089-1.797z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#1A1626",
    d: "M20.517 49.904c-2.724.883-3.414 2.594-5.186 4.279-1.669 1.592-1.438 6.527.325 6.549 1.331-.885 1.198-2.889 2.416-3.916 1.752-.656.496-3.707 12.283-3.344-3.087-5.736-9.838-3.568-9.838-3.568z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M9.039 37.264l4.504-.375c2.219-2.526-3.165-5.153-4.504.375z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#1A1626",
    d: "M38.063 52.684c6.801 6.502-2.04 5.268-2.04 9.316h5.063c1.028 0 5.688-4.432 5.454-10.076 0 0-9.151.113-8.477.76z"
  }), _react["default"].createElement("linearGradient", {
    id: "badger_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 32.283,
    y1: 59.794,
    x2: 32.283,
    y2: 34.947
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#46545c"
  }), _react["default"].createElement("stop", {
    offset: 0.288,
    stopColor: "#4d5b63"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#5a6a70"
  })), _react["default"].createElement("path", {
    fill: "url(#badger_svg__a)",
    d: "M24.791 53.533c-6.641.156-5.92-7.016-14.493-6.783-5.396.146-6.481-.049-7.733-1.494 3.104-2.463 3.639-8.486 10.184-10.033 4.24-1.004 7.188 2.709 11.653 2.027 5.682-.865 9.001-2.303 15.518-2.303 13.844 0 18.397 6.607 18.144 13.561-.119 3.283 1.637 9.014 3.783 10.291 1.139.678-4.277 3.621-8.303-5.463-.686 1.352-5.702 1.375-7.556-.563-4.211 2.518-12.469 1.785-15.717 1.203-.792 2.948-4.12 2.321-5.48-.443z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M55.684 47.959s-.186 3.014-2.141 5.377c0 0 1.105 3.51 3.688 5.238-4.265-4.711-1.563-5.779-1.547-10.615z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#302C3B",
    d: "M43.402 47.939c-.508-1.326.874 2.061 2.718 4.838 0 0-2.483 1.783-8.416 1.754 2.261-.57 7.859-.963 5.698-6.592zM30.26 50.076c-.203 1.826-.047 2.006-.003 3.893 0 0 2.011.416 3.269.416-3.746-.651-3.05-6.25-3.266-4.309zM25.061 54.021c-.438-1.348-1.079-6.652-1.134-5.283-.123 3.127.747 4.838-2.504 4.055 1.459.971 3.638 1.228 3.638 1.228z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#302C3B",
    d: "M24.506 52.684c2.885 8.922-2.147 5.193-2.229 9.316h6.5c1.126 0 1.805-3.449 1.555-9.004-.55 1.871-4.233 2.426-5.826-.312zM45.083 51.32c5.691 9.092-1.023 7.311-.838 10.68h6.073c1.596-.521 1.082-2.205 1.366-4.066.255-1.682 2.038-4.568 2.724-5.92-1.245 1.531-6.601 1.701-9.325-.694z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M4.589 43.635c8.961-13.619 18.262-6.6 20.472 2.736-8.301-8.346-16.338.072-20.472-2.736z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M4.794 43.633c2.662-1.408 2.619-5.65 8.687-7.014 3.436-.773 1.447 2.658 1.732 2.643 1.786-.1 3.524-5.242-1.358-4.166-1.115.246-4.657.93-9.158 7.359-3.766.869-2.132 2.797-2.132 2.797 2.395 3.377 13.613-1.926 22.496 1.119-6.244-10.049-17.765-.781-20.267-2.738z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#1A1626",
    d: "M8.922 40.24s1.222-.342 1.901.598c0 0-.469 1.307-1.597.996-.61-.168-.304-1.594-.304-1.594z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M9.354 40.604c.021.436-.294.428-.313-.006-.018-.334.296-.328.313.006z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M3.311 43.006c.509-.018-.024 1.955-.746 2.246-.542-.395-1.212-2.18.746-2.246z"
  }), _react["default"].createElement("path", {
    fill: "#6E8189",
    d: "M49.231 42.186c1.06-.996 4.659-.637 5.842 3.342-2.677-2.294-7.528-1.76-5.842-3.342zM33.036 43.295c.793-.945 3.86-1 5.252 2.232-2.48-1.664-6.516-.736-5.252-2.232zM50.056 46.943c1.058-.635 3.976.313 4.241 3.826-1.807-2.384-5.923-2.82-4.241-3.826zM45.312 37.828c.729-1.158 4.096-1.686 6.116 1.66-2.983-1.455-7.28.184-6.116-1.66zM36.591 47.658c1.104-.549 3.938.629 3.924 4.148-1.612-2.519-5.68-3.277-3.924-4.148zM28.727 46.998c.969-.76 3.982-.178 4.676 3.275-2.085-2.144-6.222-2.07-4.676-3.275zM24.447 40.322c.988-.734 3.986-.082 4.597 3.387-2.032-2.193-6.171-2.217-4.597-3.387zM41.245 45.227c1.151-1.156 5.208-.885 6.684 3.537-3.091-2.477-8.52-1.7-6.684-3.537zM29.554 37.895c.803-.938 3.87-.961 5.23 2.285-2.465-1.69-6.509-.799-5.23-2.285zM39.451 40.525c.853-1.078 4.271-1.24 5.929 2.318-2.821-1.775-7.286-.603-5.929-2.318zM37.11 36.287c.74-.988 3.797-1.221 5.374 1.928-2.574-1.52-6.547-.358-5.374-1.928z"
  }));
};

var _default = SvgBadger;
exports["default"] = _default;