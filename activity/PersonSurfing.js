"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgPersonSurfing = function SvgPersonSurfing(props) {
  return _react["default"].createElement("svg", _extends({
    width: 64,
    height: 64
  }, props), _react["default"].createElement("linearGradient", {
    id: "person-surfing_svg__a",
    gradientUnits: "userSpaceOnUse",
    x1: 13.557,
    y1: 56.307,
    x2: 49.091,
    y2: 52.6
  }, _react["default"].createElement("stop", {
    offset: 0,
    stopColor: "#b9f44c"
  }), _react["default"].createElement("stop", {
    offset: 0.176,
    stopColor: "#95e76c"
  }), _react["default"].createElement("stop", {
    offset: 0.321,
    stopColor: "#7ede81"
  }), _react["default"].createElement("stop", {
    offset: 0.413,
    stopColor: "#76db88"
  }), _react["default"].createElement("stop", {
    offset: 0.637,
    stopColor: "#4ac5a3"
  }), _react["default"].createElement("stop", {
    offset: 0.877,
    stopColor: "#20b0bc"
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#10a8c6"
  })), _react["default"].createElement("path", {
    fill: "url(#person-surfing_svg__a)",
    d: "M59.429 51.284c-.124-.59 1.906-1.492.735-2.368-12.496-4.448-43.393-.775-57.854 7.497-.41.236-.253.953.004 1.053 6.633 2.595 15.388 3.62 24.206 3.528 14.7-.15 29.581-3.404 35.107-7.666 1.256-.967-1.629-1.214-2.198-2.044z"
  }), _react["default"].createElement("radialGradient", {
    id: "person-surfing_svg__b",
    cx: 31.875,
    cy: 53.38,
    r: 30.223,
    gradientTransform: "matrix(.9976 -.0698 .0147 .2105 -.708 44.367)",
    gradientUnits: "userSpaceOnUse"
  }, _react["default"].createElement("stop", {
    offset: 0.632,
    stopColor: "#fff",
    stopOpacity: 0.3
  }), _react["default"].createElement("stop", {
    offset: 0.713,
    stopColor: "#e5e5e6",
    stopOpacity: 0.328
  }), _react["default"].createElement("stop", {
    offset: 0.859,
    stopColor: "#a3a1a7",
    stopOpacity: 0.388
  }), _react["default"].createElement("stop", {
    offset: 1,
    stopColor: "#393644",
    stopOpacity: 0.475
  })), _react["default"].createElement("path", {
    opacity: 0.25,
    fill: "url(#person-surfing_svg__b)",
    d: "M59.429 51.284c-.124-.59 1.906-1.492.735-2.368-12.496-4.448-43.393-.775-57.854 7.497-.41.236-.253.953.004 1.053 6.633 2.595 15.388 3.62 24.206 3.528 14.7-.15 29.581-3.404 35.107-7.666 1.256-.967-1.629-1.214-2.198-2.044z"
  }), _react["default"].createElement("path", {
    fill: "#A6DD3A",
    d: "M13.37 55.468c-.375-.778.449-1.577 1.857-1.788 1.394-.206 2.841.254 3.215 1.032.377.778-.462 1.578-1.855 1.786-1.409.209-2.84-.253-3.217-1.03zm-.843.125c.498 1.037 2.412 1.653 4.284 1.375 1.86-.277 2.976-1.345 2.477-2.382-.502-1.036-2.428-1.65-4.287-1.374-1.874.277-2.975 1.345-2.474 2.381z"
  }), _react["default"].createElement("path", {
    fill: "#A6DD3A",
    d: "M16.065 54.664c.028.06-.013.102-.127.119l-.336.051c-.113.016-.186-.008-.217-.068l-.295-.609c-.028-.063.013-.104.127-.121l.166-.025c1.072-.16 2.182.195 2.468.791.142.291.059.594-.214.849-.047.054-.128.067-.236.035l-.446-.147c-.107-.032-.129-.075-.065-.132.141-.144.194-.314.113-.48-.131-.271-.564-.454-1.039-.468l.101.205z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M55.166 22.788c-.229-.718-2.546-.525-5.113 0-2.419.491-4.295-.694-6.454-.655l-5.489-2.009c-.352 1.203-.421 2.842-.792 4.037 2.076.652 4.058.717 5.275.955 2.76.629 7.656-.486 7.656-.486 4.152.728 4.479.624 2.787-.217-.033-.342 1.213-.351 2.62-.437 2.784-.172-.49-1.188-.49-1.188zM5.289 29.838c-.11-.743 2.063-1.55 4.607-2.163 2.4-.58 3.563-2.44 5.526-3.322l3.956-3.911c.851.937.665 2.862 1.532 3.782-1.581 1.466-2.612 1.586-3.604 2.314-2.21 1.737-6.768 2.88-6.768 2.88-3.419 2.413-3.759 2.457-2.607.983-.122-.323-1.251.198-2.558.716-2.583 1.022-.084-1.279-.084-1.279z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#7AB51D",
    d: "M40.405 34.271c-.431-.297-4.628-2.529-7.928-3.069-.358-.957 2.417-4.015 2.884-7.59 0 0 1.226.247 1.956.55 0 0 1.26-2.156.819-4.037-1.018-.702-2.593-2.069-4.995-2.56-.999-.202-4.38-.758-5.478-.747-3.036.026-5.786.485-8.285 3.624.326 2.128 1.532 3.782 1.532 3.782s1.817-1.246 2.81-1.548c1.621 7.969-6.314 9.948.82 17.621 5.058-1.355 5.941-.829 5.058-3.247 2.092.51 2.124 1.211 7.416 2.146 1.456.258 4.374-4.247 3.391-4.925z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#89CC14",
    d: "M23.721 22.676c1.337 7.707-5.784 9.401 1.534 16.968.236-.064.323-.625.541-.681-6.521-7.348.297-9.673-2.075-16.287z"
  }), _react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    fill: "#FC6",
    d: "M42.8 38.413c.123-1.55.195-3.036-2.395-4.143-2.273-.254-3.95 3.678-3.391 4.926.496.228 1.757.619 1.757.619-.358 2.911 1.855 4.891 2.322 8.297.244 1.792-.73 2.919 1.698 3.337 1.665.288 3.001 2.111 5.679.263 1.299-.898-3.953-1.241-4.942-3.594-.394-.936-.841-8.31-.728-9.705zM29.474 42.616c.995-1.25 1.199-2.991.399-4.626-2.265-.706-5.03.337-5.331 2.307.328.482.586.94.586.94-1.979 2.271-.827 4.936-2.328 8.109-.79 1.67-2.329 2.062-.324 3.836 1.374 1.217 1.396 3.791 4.915 3.779 1.704-.007-2.942-3.363-2.525-5.947.168-1.028 3.716-7.277 4.608-8.398z"
  }), _react["default"].createElement("path", {
    fill: "#89CC14",
    d: "M38.225 20.731c-1.017-.699-2.135-2.854-5.565-3.619-.995-.222-3.891-.563-4.987-.554-3.036.028-5.733 1.053-8.233 4.191 0 0 .007.435.2.82 1.53-1.861 3.105-3.084 4.801-3.694 1.008.397 4.385 1.993 5.925 6.011 2.004-3.723 4.179-4.51 5.057-4.684 1.168.87 2.12 1.945 2.761 2.389-.002 0 .145-.415.041-.86z"
  }), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M27.912 17.421c0 2.459 4.773 2.459 4.773 0v-2.55h-4.773v2.55zM24.529 9.321c-1.93-.347-.424 5.046 1.087 3.559.7-.689-.185-3.395-1.087-3.559zM36.069 9.321c-.902.164-1.788 2.87-1.086 3.559 1.511 1.487 3.017-3.905 1.086-3.559z"
  }), _react["default"].createElement("path", {
    fill: "#FC6",
    d: "M30.299 3c-3.989 0-5.913 3.017-5.671 7.212.048.844.57 3.597 1.064 4.583.508 1.013 2.198 2.569 3.236 2.891.654.205 2.088.205 2.742 0 1.038-.321 2.728-1.878 3.235-2.891.495-.986 1.017-3.739 1.065-4.583C36.214 6.017 34.29 3 30.299 3z"
  }), _react["default"].createElement("path", {
    fill: "#E6A400",
    d: "M30.299 14.42c-.897-.264-2.227.125-2.227.125.507.552.877 1.267 2.227 1.267 1.546 0 1.81-.811 2.228-1.267-.001 0-1.332-.391-2.228-.125z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M28.411 14.64c.941.788 2.842.792 3.789 0a56.986 56.986 0 0 1-3.789 0z"
  }), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M31.537 12.938c0 .805-2.475.805-2.475 0 .001-.186 2.475-.186 2.475 0z"
  }), _react["default"].createElement("path", {
    fill: "#594640",
    d: "M30.299 3c-2.744 0-4.402.906-5.118.558 0 0-.078.468.202.773 0 0-.296.255-.772-.177-.457 1.478.895 2.331 5.688 2.331 4.795 0 3.649-1.166 6.008.882C36.074 4.843 34.469 3 30.299 3z"
  }), _react["default"].createElement("path", {
    fill: "#453631",
    d: "M32.329 5.201c-2.64.975-3.605-.782-6.095-.954 1.187.561 1.764 1.421 2.736 2.043-2.117-.709-3.672-1.927-3.79-2.729 0 0-.353 1.169 1.044 2.042-1.337.124-1.614-1.445-1.614-1.445-.677 1.088-.582 4.592.168 7.188.125-.927-.16-1.31.269-2.427 1.285-3.342.459-1.938 5.254-1.938 4.793 0 3.93-1.279 5.251 1.938.395.958.144 1.5.27 2.427 1.575-5.861-.691-7.177-3.493-6.145z"
  }), _react["default"].createElement("path", {
    fill: "#FFF",
    d: "M34.571 10.536c-.533 1.394-2.702 1.191-3.1.214.302-1.568 2.806-1.702 3.1-.214zM26.028 10.536c.53 1.394 2.702 1.191 3.099.214-.301-1.569-2.809-1.704-3.099-.214z"
  }), _react["default"].createElement("path", {
    fill: "#C1873C",
    d: "M34.792 8.857c-.913-.451-2.657-.475-3.308-.157-.14.059-.048.488.069.448.906-.336 2.368-.344 3.217.029.116.048.162-.256.022-.32zM25.806 8.857c.912-.451 2.658-.475 3.309-.157.139.059.048.488-.07.448-.907-.336-2.367-.344-3.22.029-.111.048-.158-.256-.019-.32z"
  }), _react["default"].createElement("path", {
    fill: "#613F34",
    d: "M32.025 10.388c0 1.225 1.771 1.225 1.771 0 .001-1.137-1.771-1.137-1.771 0z"
  }), _react["default"].createElement("path", {
    fill: "#7D5037",
    d: "M32.201 10.779c0 .702 1.422.702 1.422 0 0-.651-1.422-.651-1.422 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M32.542 10.407c0 .506.736.506.736 0 0-.471-.736-.471-.736 0z"
  }), _react["default"].createElement("path", {
    fill: "#AB968C",
    d: "M32.292 10.258c0 .256.37.256.37 0 0-.237-.37-.237-.37 0z"
  }), _react["default"].createElement("path", {
    fill: "#613F34",
    d: "M26.801 10.388c0 1.225 1.772 1.225 1.772 0 0-1.137-1.772-1.137-1.772 0z"
  }), _react["default"].createElement("path", {
    fill: "#7D5037",
    d: "M26.976 10.778c0 .703 1.422.703 1.422 0 0-.65-1.422-.65-1.422 0z"
  }), _react["default"].createElement("path", {
    fill: "#1A1626",
    d: "M27.319 10.407c0 .506.736.506.736 0 .001-.471-.736-.471-.736 0z"
  }), _react["default"].createElement("path", {
    fill: "#AB968C",
    d: "M27.069 10.258c0 .256.37.256.37 0 .001-.237-.37-.237-.37 0z"
  }), _react["default"].createElement("path", {
    fill: "#E6B045",
    d: "M34.571 10.525c0-1.497-3.1-1.497-3.1.237.445-1.422 2.658-1.422 3.1-.237zM26.028 10.525c0-1.497 3.099-1.497 3.099.237-.443-1.423-2.657-1.423-3.099-.237z"
  }));
};

var _default = SvgPersonSurfing;
exports["default"] = _default;