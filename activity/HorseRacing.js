"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgHorseRacing = function SvgHorseRacing(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("path", {
    fill: "#856050",
    d: "M48.532 38.396c1.059 15.764-4.706 10.285-5.592 17.551-.112.916 3.851 1.286 3.975.038-.81-4.04 3.594-2.593 6.004-9.196.425-1.164-3.788-4.959-4.387-8.393zM4.63 21.303c.121.768-.207 1.662-.031 1.653.173-.009 1.553-1.675.031-1.653zM6.056 25.605c-.26-.296-.26-.296-.623-.444 2.722-3.42 2.423-3.087.623.444z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M59.36 34.368C60.973 26.408 46.671 24 48 33.139c10.265-2.229 1.515 10.339 14 14.432-3.829-5.446-3.725-7.846-2.64-13.203z"
  }), _react["default"].createElement("path", {
    fill: "#856050",
    d: "M15.44 55.429c.839.22 3.007-.036 1.29-3.772-1.104-2.402 5.502-5.133 7.265-10.482-9.638 1.505-13.013 9.786-8.555 14.254z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M16.73 51.656s-.436 2.09-1.29 3.772c-.129.255 2.497 1.517 3.308 1.447-.162-1.691.753-6.733-2.018-5.219zM46.915 55.985c-2.312.71-3.143-.507-3.975-.038-.196.109-1.394 2.102.688 3.843.258.214 3.921-1.597 3.287-3.805z"
  }), _react["default"].createElement("linearGradient", {
    id: "horse-racing_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 31.487,
    y1: 62,
    x2: 31.487,
    y2: 11.975
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#916958"
  }), _react["default"].createElement("stop", {
    offset: 0.537,
    stopColor: "#ae7b65"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#c2886f"
  })), _react["default"].createElement("path", {
    fill: "url(#horse-racing_svg__a)",
    d: "M60 57.19c-.354-.341.176-1.474 0-1.925-.438-1.126-3.305-1.886-4-2.886-.574-.823-.021-3.534-1-3.849-3-.961-6-3.848-6-4.81 0-1.684 2-3.608 2-6.734 0-3.607-2.375-7.696-7-7.696-4 0-7.438 1.653-10 2.887-6 .961-7.791-2.067-9-6.734-1.068-4.123-2.5-13.469-10-13.469-3 0-4.879 2.286-6.055 3.707-1.25 1.512-4.796 4.559-4.899 5.598-.262 2.627-.75 3.729 1.833 3.93-.115.732 1.937 1.107 2.188-.367.271-1.595 3.375-.25 5.04-2.619C14.774 28.455 12 31.215 12 36.025c0 1.529.306 2.779.811 3.816-2.567-.361-4.911-.915-5.811-.915-1.104 0-1.715.884-2 1.91-.582 2.089-3 7.115-3 9.625 0 3.897 3 5.768 4 5.768.625 0 .528-4.93-.334-5.553C3.858 49.37 6.742 44.941 8 43.732c1.414-1.357 4 1.913 8 1.913 1.247 0 2.192-.62 2.911-1.478 2.043.488 4.018.516 5.089.516 5.166 0 10.5-1.924 14-1.924 2.945 0 4.85 5.406 10 6.734 2.16.557 4.215 1.704 5 2.886.957 1.443 3 9.62 7 9.62 2 .001.354-4.469 0-4.809z"
  }), _react["default"].createElement("path", {
    fill: "#38434A",
    d: "M5.666 50.676S5 53.342 4 55.266c-.15.292 1.159 2.335 3.233 1.846-.109-2.932 2.219-6.436-1.567-6.436z"
  }), _react["default"].createElement("path", {
    fill: "#7AB51D",
    d: "M29.427 15.906c-.495 1.047-1.953 5.03-5.094 6.413 3.453 4.416 6.561-3.839 5.094-6.413z"
  }), _react["default"].createElement("path", {
    fill: "#94989B",
    d: "M38.795 20.846c-7.067 5.111-9.237 6.779-7.631 9.696 6.344 2.375 4.388-1.338 7.631-9.696z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M11.943 16.283c-.18-.263-3.377-1.016-1.848 1.313.724-.821 2.03-1.05 1.848-1.313zM5.505 18.879c1.322 1.677 2.308 3.391 3.003 5.379.207.588 1.162.336.955-.258-.725-2.067-1.735-3.864-3.104-5.611-.413-.535-1.161.101-.854.49zM38.139 36.148s.704 4.625-1.044 6.75c0 0 1.847-.188 2.621.428 1.568-3.782.549-7.779.548-7.782l-2.125.604zM29.826 34.674s-1.622 4.988-.177 9.639c0 0-1.509.094-2.621.428-1.233-5.941.477-10.154.478-10.158l2.32.091z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M24.656 26.735s-1.319 11.001 10.128 11.337c7.003.207 9.875-8.825 7.271-8.975-3.292-.19-11.812 5.452-17.399-2.362z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M26 28.329s1.778 7.819 8.784 7.819c3.211 0 6.115-3.101 6.115-6.949-3.388.446-8.812 2.764-14.899-.87zM25.248 22.748c0-4.979-2.248-7.888-5.689-7.888L20 16.784c2.221 2.137 2.615 4.104 3 5.772 1 4.329 3 5.772 3 5.772s-.752-3.518-.752-5.58z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M22.127 19.01c1.504-4.164-1.127-6.695-4.654-6.695 0 0-.645 1.879.467 3.826.941 1.654 2.17 2.603 2.17 5.332.001 3.548 1.89 3.97 1.89 3.97s-1-3.307.127-6.433z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M17 16.784c0-3.026-2-5.772-2-5.772 4.502 0 4.59 4.887 4 7.697-.406 1.93 0 3.848 0 3.848s-2-.962-2-5.773zM13 11.012c-1.5 0-3.553 1.393-2 2.887.969.932 2.082.962 3 2.886 0 0 .916-1.042 0-1.924-2.824-2.716-1-3.849-1-3.849z"
  }), _react["default"].createElement("path", {
    fill: "#C2886F",
    d: "M12 8.126s0 5.772 1.418 5.772c3.103 0 4.252-3.847-1.418-5.772z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M19.302 23.748c-3.328.154-6.987-.511-10.372-1.576-.728-.232-1.199.657-.467.889 3.538 1.116 7.344 1.954 10.839 1.809v-1.122z"
  }), _react["default"].createElement("path", {
    fill: "#856050",
    d: "M13 10.051s0 2.886 1 2.886c.957 0 1-1.925-1-2.886z"
  }), _react["default"].createElement("path", {
    fill: "#99A8AE",
    d: "M9.163 22.632c0 1.519-2.369 1.519-2.369 0s2.369-1.519 2.369 0z"
  }), _react["default"].createElement("path", {
    fill: "#F7C259",
    d: "M28.114 15.916c.978-1.125 1.279.797 2.3.963 0 0 .237-1.633 2.755-2.939 0 0-.818-.883-1.813-2.469-2.16-4.641-3.242 4.445-3.242 4.445z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M21.42 9.338c.067.785.374 1.325.832 1.875.711.845.516 1.537.128 2.563-.369.972.7 1.131 1.443.744.266.142.396.516.396.516s.792.154.733 1.181c.891.271.357 1.794 1.856 1.097 1.464-.68 2.81-2.688 2.974-3.16.258-.746-.368-2.345-.368-2.345 1.027.524 1.839-1.677.977-3.421-1.431-2.894-5.925-5.575-8.971.95z"
  }), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M28.478 9.963c-.374-.678-.123-1.557.451-1.852 0 0-.545 1.307.301 2.268-.001 0-.498.056-.752-.416z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M25.342 11.186c-.187.594-1.027 1.242-1.374 1.316-1.798-1.898.435-2.039 1.374-1.316z"
  }), _react["default"].createElement("path", {
    fill: "#45332C",
    d: "M24.007 12.491c.894-.413-.695-2.546-.724-1.007.07.239.543 1.092.724 1.007z"
  }), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M25.342 11.186c-.649-.767-2.504-.729-2.059.299-.005-.655 1.264-.776 2.059-.299z"
  }), _react["default"].createElement("path", {
    fill: "#F5F5F5",
    d: "M23.571 11.391c.104.213.421.066.316-.145-.098-.197-.415-.053-.316.145z"
  }), _react["default"].createElement("path", {
    fill: "#C1873C",
    d: "M24.731 9.662c-.841-.154-2.044.375-2.333.892-.069.104.205.496.264.418.457-.616 1.45-1.087 2.21-.989.099.011-.016-.301-.141-.321z"
  }), _react["default"].createElement("path", {
    fill: "#E6A400",
    d: "M24.399 15.336c.371.045.292.438.292.438-.138.063.058.536.261.442 1.011-.47 1.076-1.287 1.173-1.772-1.14.457-2.519.432-1.726.892z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M24.399 15.336s.211.4.292.438c.222-.102.958-.654 1.255-1.158l-1.547.72z"
  }), _react["default"].createElement("path", {
    fill: "#594640",
    d: "M29.925 3.828c-1.231-.853-2.98-.968-5.394.151-2.224 1.03-3.212 2.368-3.928 2.362 0 0 .06.412.356.648-.302.157-.582.045-.581.049-.049.436.018 1.486 1.041 2.299 2.885-2.903 3.686-1.802 4.963-1.221.294.137.203 1.39 1.62 1.96-.901-2.306 1.893-3.347 2.529-1.286.408 1.319.098 2.1-.072 2.523.585-.083 1.058.408 1.058.408 2.508-1.162.534-7.463-1.592-7.893z"
  }), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M24.289 13.83c.043.354-.367.659-.641.785-.367.17-.804.161-1.09-.016-.011-.37 1.158.015 1.731-.769z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M31.156 7.107s-.932-.117-.886.094c.191.878-.147 3.07-.147 3.07s-2.569-.904-3.894-3.112c-.111-.189-.681.354-.682.569-.006 1.316 4.354 3.555 4.354 3.555s-.72 3.637-1.519 4.818c3.076-1.406 2.774-8.994 2.774-8.994z"
  }), _react["default"].createElement("path", {
    fill: "#E81C27",
    d: "M25.343 2.137c-3.572.715-5.885 4.023-5.168 7.388.197.928 3.805-1.03 6.394-1.548 2.36-.472 6.78.105 6.536-1.035-.716-3.366-4.191-5.518-7.762-4.805z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M21.978 23.362l-.905.052c-.788-.509-1.58-.176-2.425-.205-.432-.014-.983.287-.86.555l.639.131c-.386.41-1.162 1.112-.551 1.326 1.116.39.937.994 2.277 1.199.487.074 1.237-.466 1.485-.795l.895-.113-.555-2.15z"
  }), _react["default"].createElement("path", {
    fill: "#92C932",
    d: "M28.052 22.174s-3.735.797-6.563 1.047c0 0 .832 1.691.462 2.521 0 0 6.29-.172 7.976-1.149 1.527-.886 3.88-5.379 3.88-5.379l4.988 1.633s3.638-.494 6.428-3.388c0 0-3.759-4.356-13.051-4.774 0 0-1.294.902-2.407 3.09-.811 1.918-.416 3.694-1.713 6.399z"
  }), _react["default"].createElement("path", {
    fill: "#D0D0D0",
    d: "M38.795 20.846s-4.896 4.58-5.915 7.451c-.689 1.945 1.605 4.65 2.048 5.541 0 0 2.252.094 3.448-1.252 0 0 .021-1.025-1.721-3.48 0 0 5.655-2.326 7.822-4.414 2.164-2.088 2.641-4.04.745-7.233l-6.427 3.387z"
  }), _react["default"].createElement("path", {
    fill: "#594640",
    d: "M36.638 38.314s-3.282 2.525-3.348 3.137c-.069.613.767.725.767.725s3.265-.229 6.619-1.73l-2.732-9.667s-1.145 1.474-3.991 2.204l2.685 5.331z"
  }), _react["default"].createElement("path", {
    fill: "#38434A",
    d: "M60 57.19s-.336 2.405-2.672 3.484C57.328 60.675 58 62 60 62s1.707-4.81 0-4.81z"
  }), _react["default"].createElement("path", {
    fill: "#302C3B",
    d: "M35.146 37.324s-.049 2.053.957 4.631c0 0-.923.576-1.929.412-1.09-2.637-.834-5.043-.834-5.043h1.806z"
  }));
};

var _default = SvgHorseRacing;
exports["default"] = _default;