"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n \n  width: 100%\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderWrapper = _styledComponents["default"].header(_templateObject());

exports.HeaderWrapper = HeaderWrapper;