"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _Navigation = _interopRequireDefault(require("../context/Navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Route(_ref) {
  var path = _ref.path,
      children = _ref.children;

  var _useContext = (0, _react.useContext)(_Navigation["default"]),
      currentPath = _useContext.currentPath;

  if (path === currentPath) {
    return children;
  }

  return null;
}

var _default = Route;
exports["default"] = _default;
//# sourceMappingURL=Route.dev.js.map
