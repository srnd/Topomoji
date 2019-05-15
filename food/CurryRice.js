"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCurryRice = function SvgCurryRice(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "curry-rice_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 2.007,
    y1: 51.438,
    x2: 61.993,
    y2: 51.438
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
    fill: "url(#curry-rice_svg__a)",
    d: "M2.007 40.875C2.007 48.97 10.104 62 32 62s29.993-13.03 29.993-21.125H2.007z"
  }), _react["default"].createElement("path", {
    fill: "#E6EBEF",
    d: "M32 24.008c16.569 0 30 7.675 30 16.867 0 6.242-7.467 16.368-30 16.368S2 47.121 2 40.875c0-9.192 13.433-16.867 30-16.867z"
  }), _react["default"].createElement("path", {
    fill: "#B3C2C6",
    d: "M32 24.954c15.345 0 27.782 6.732 27.782 14.797 0 5.477-6.915 14.359-27.782 14.359S4.218 45.23 4.218 39.751c0-8.064 12.439-14.797 27.782-14.797z"
  }), _react["default"].createElement("radialGradient", {
    id: "curry-rice_svg__b",
    cx: 37.246,
    cy: 44.044,
    r: 34.006,
    gradientTransform: "matrix(.9998 0 0 .5441 .013 18.718)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#d47706"
  }), _react["default"].createElement("stop", {
    offset: 0.406,
    stopColor: "#d27607"
  }), _react["default"].createElement("stop", {
    offset: 0.58,
    stopColor: "#cb7109"
  }), _react["default"].createElement("stop", {
    offset: 0.711,
    stopColor: "#be6a0d"
  }), _react["default"].createElement("stop", {
    offset: 0.819,
    stopColor: "#ac5e12"
  }), _react["default"].createElement("stop", {
    offset: 0.912,
    stopColor: "#96501a"
  }), _react["default"].createElement("stop", {
    offset: 0.996,
    stopColor: "#7a3f22"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#783e23"
  })), _react["default"].createElement("path", {
    fill: "url(#curry-rice_svg__b)",
    d: "M32 26.99c-15.087 0-27.319 6.397-27.319 14.059 0 .673.115 1.398.357 2.153C7.395 48.317 15.144 54.11 32 54.11s24.605-5.796 26.963-10.91a7.064 7.064 0 0 0 .357-2.151c0-7.661-12.231-14.059-27.32-14.059z"
  }), _react["default"].createElement("path", {
    fill: "#C74900",
    d: "M22.114 43.059c8.638 0 2.609 6.147 2.609 6.147l-2.609-6.147z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M17.814 47.079c.628 1.804 6.909 2.129 6.909 2.129s-.961-6.147-2.611-6.147c-1.353-.002-4.772 2.658-4.298 4.018zM52.821 38.722c7.679 0 2.322 5.466 2.322 5.466l-2.322-5.466z"
  }), _react["default"].createElement("path", {
    fill: "#C74900",
    d: "M49.001 42.295c.56 1.605 6.143 1.893 6.143 1.893s-.854-5.466-2.322-5.466c-1.205 0-4.242 2.362-3.821 3.573z"
  }), _react["default"].createElement("path", {
    fill: "#EA8C00",
    d: "M31.114 46.077c8.637 0 2.61 6.433 2.61 6.433l-2.61-6.433z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M26.814 50.283c.631 1.892 6.91 2.227 6.91 2.227s-.959-6.433-2.61-6.433c-1.355 0-4.773 2.783-4.3 4.206z"
  }), _react["default"].createElement("path", {
    fill: "#EA8C00",
    d: "M43.064 40.626c5.994 0 1.812 4.464 1.812 4.464l-1.812-4.464z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M40.08 43.545c.438 1.313 4.796 1.545 4.796 1.545s-.666-4.464-1.812-4.464c-.941 0-3.313 1.932-2.984 2.919z"
  }), _react["default"].createElement("path", {
    fill: "#EA8C00",
    d: "M12.646 42.249c-7.675 0-2.32 5.721-2.32 5.721l2.32-5.721z"
  }), _react["default"].createElement("path", {
    fill: "#F9B700",
    d: "M16.47 45.988c-.561 1.682-6.144 1.981-6.144 1.981s.853-5.721 2.32-5.721c1.206.001 4.243 2.475 3.824 3.74zM44.007 29.712c7.677 0 2.32 5.719 2.32 5.719l-2.32-5.719z"
  }), _react["default"].createElement("path", {
    fill: "#EA8C00",
    d: "M40.185 33.451c.56 1.679 6.143 1.979 6.143 1.979s-.854-5.719-2.32-5.719c-1.207.001-4.244 2.474-3.823 3.74z"
  }), _react["default"].createElement("linearGradient", {
    id: "curry-rice_svg__c",
    gradientUnits: "userSpaceOnUse",
    x1: 10.766,
    y1: 43.857,
    x2: 10.766,
    y2: 22.001,
    gradientTransform: "matrix(.9333 0 0 1 12.52 0)"
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#ced6d9"
  }), _react["default"].createElement("stop", {
    offset: 0.317,
    stopColor: "#d7dee1"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#e7ecf0"
  })), _react["default"].createElement("path", {
    fill: "url(#curry-rice_svg__c)",
    d: "M22.423 41.78c5.681 1.685 15.273 0 16.103-3.122.006-1.819.173-3.749-.735-5.123-.753-1.14-.604-2.71-1.523-3.567-1.402-1.306-1.881-3.449-3.514-4.216-1.845-.862-3.348-2.815-5.445-2.969-1.598-.113-3.13-1.057-4.748-.705-1.583.341-3.327-.116-4.653.676-1.107.661-2.738.753-3.738 1.688-.952.889-2.931 1.755-3.717 3.229-.762 1.432-2.253 2.597-2.573 4.286-.23 1.222-1.176 2.332-1.024 3.614.121 1.025-.238 2.018-.259 3.074 3.626 4.543 10.248 1.484 15.826 3.135z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M23.748 32.551c-.776-.951-5.732.438-5.696 1.837.995 1.145 5.696-.66 5.696-1.837zM20.08 28.252c.599-1.063-2.718-4.856-4.039-4.265-.696 1.334 2.915 4.738 4.039 4.265zM19.161 36.87c-.441-1.131-5.603-1.235-6.01.11.592 1.378 5.641 1.012 6.01-.11zM25.428 41.239c-.047-1.194-4.962-2.896-5.8-1.765.106 1.473 5.07 2.699 5.8 1.765zM28.063 29.886c-.442-1.132-5.602-1.233-6.009.11.591 1.378 5.641 1.012 6.009-.11zM35.396 30.866c.092-1.204-4.555-3.365-5.511-2.306-.062 1.491 4.687 3.179 5.511 2.306zM28.147 41.749c.695-1.006-2.253-5.071-3.627-4.597-.814 1.272 2.463 4.971 3.627 4.597zM29.479 28.415c.693-1.006-2.253-5.07-3.627-4.596-.815 1.269 2.462 4.971 3.627 4.596zM12.32 40.794c.415-1.142-3.49-4.349-4.7-3.555-.465 1.426 3.668 4.202 4.7 3.555zM35.023 38.269c.693-1.008-2.252-5.071-3.625-4.595-.817 1.267 2.46 4.967 3.625 4.595zM29.169 39.239c.691-1.008-2.254-5.073-3.627-4.597-.815 1.269 2.461 4.971 3.627 4.597zM37.785 37.977c.978-.765-.56-5.473-2.021-5.404-1.18.982.792 5.435 2.021 5.404z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M20.749 31.033c1.256-.053 2.956-4.728 1.746-5.515-1.55.115-2.745 4.833-1.746 5.515zM13.517 39.053c.575-1.064-2.835-4.817-4.149-4.22-.668 1.335 3.029 4.698 4.149 4.22zM9.928 32.759c1.26-.054 2.954-4.728 1.747-5.515-1.55.114-2.748 4.832-1.747 5.515zM30.969 40.651c.768.942 5.793-.426 5.778-1.813-.986-1.134-5.76.648-5.778 1.813z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M29.61 41.455c1.257-.023 3.076-4.655 1.889-5.471-1.551.075-2.872 4.763-1.889 5.471zM22.952 34.949c1.101.602 5.124-2.467 4.527-3.75-1.381-.699-5 2.661-4.527 3.75zM18.806 24.896c.785.943 5.727-.488 5.68-1.889-1.006-1.135-5.691.71-5.68 1.889zM12.683 30.51c1.246.227 3.993-3.914 2.985-4.941-1.546-.238-3.807 4.056-2.985 4.941zM13.917 40.233c.786.945 5.728-.486 5.683-1.887-1.008-1.134-5.691.711-5.683 1.887zM7.839 35.849c1.028.704 5.365-1.951 4.915-3.286-1.297-.833-5.267 2.155-4.915 3.286zM28.066 24.446c-.336 1.163 3.775 4.157 4.93 3.296.367-1.446-3.942-3.996-4.93-3.296zM22.593 25.317c-.337 1.164 3.774 4.156 4.929 3.298.368-1.449-3.942-3.996-4.929-3.298zM30.176 30.74c-.335 1.165 3.778 4.157 4.93 3.299.367-1.449-3.942-3.998-4.93-3.299zM16.73 27.792c-.639 1.039 2.526 4.951 3.87 4.407.748-1.307-2.729-4.839-3.87-4.407zM19.18 35.269c-.336 1.165 3.775 4.157 4.93 3.298.367-1.45-3.944-3.999-4.93-3.298z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M15.313 30.098c-1.275-.023-3.346 4.475-2.185 5.323 1.575-.018 3.144-4.588 2.185-5.323zM29.162 29.691c-1.178.424-1.286 5.373.116 5.762 1.439-.567 1.054-5.408-.116-5.762z"
  }), _react["default"].createElement("path", {
    fill: "#F2F5F7",
    d: "M16.579 29.95c-1.181.422-1.288 5.371.115 5.762 1.438-.567 1.054-5.408-.115-5.762z"
  }), _react["default"].createElement("path", {
    fill: "#77B516",
    d: "M37.442 44.766c0 .68-2.449.68-2.449 0 0-1.608 2.449-1.608 2.449 0z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M38.666 50.007c0 .68-2.448.68-2.448 0 0-1.608 2.448-1.608 2.448 0z"
  }), _react["default"].createElement("path", {
    fill: "#77B516",
    d: "M50.185 45.624c0 .679-2.448.679-2.448 0-.001-1.608 2.448-1.608 2.448 0z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M43.687 38.325c0 .679-2.448.679-2.448 0-.001-1.608 2.448-1.608 2.448 0z"
  }), _react["default"].createElement("path", {
    fill: "#77B516",
    d: "M53.578 35.622c0 .68-2.448.68-2.448 0 0-1.608 2.448-1.608 2.448 0zM24.135 49.824c0 .68-2.449.68-2.449 0 0-1.608 2.449-1.608 2.449 0z"
  }), _react["default"].createElement("path", {
    fill: "#529320",
    d: "M18.848 43.652c0 .679-2.448.679-2.448 0-.001-1.608 2.448-1.608 2.448 0z"
  }), _react["default"].createElement("path", {
    fill: "#C74900",
    d: "M47.343 34.438c-5.722 0-1.729 4.264-1.729 4.264l1.729-4.264z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M50.192 37.225c-.419 1.252-4.579 1.477-4.579 1.477s.637-4.264 1.729-4.264c.897 0 3.164 1.844 2.85 2.787z"
  }), _react["default"].createElement("path", {
    fill: "#C74900",
    d: "M43.391 44.753c-8.635 0-2.609 6.434-2.609 6.434l2.609-6.434z"
  }), _react["default"].createElement("path", {
    fill: "#FF6A00",
    d: "M47.691 48.959c-.633 1.89-6.91 2.228-6.91 2.228s.961-6.434 2.609-6.434c1.354 0 4.775 2.783 4.301 4.206z"
  }));
};

var _default = SvgCurryRice;
exports["default"] = _default;