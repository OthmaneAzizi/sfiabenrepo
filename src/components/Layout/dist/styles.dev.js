"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 auto;\n  max-width: 1200px;\n  box-sizing: border-box;\n  padding: 0 20px 40px 20px;\n \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LayoutWrapper = _styledComponents["default"].div(_templateObject());

exports.LayoutWrapper = LayoutWrapper;