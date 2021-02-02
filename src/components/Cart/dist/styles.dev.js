"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CartWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyledLink = require("../StyledLink");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  color: black;\n position : absolute;\n right : 10px;\n\n  text-decoration: none;\n  padding-right: 20px;\n  padding-top: 25px;\n  \n  > svg {\n    margin: auto 0;\n  }\n\n  > div:last-child {\n    padding-left: 8px;\n    margin: auto 0;\n  }\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CartWrapper = (0, _styledComponents["default"])(_StyledLink.StyledLink).attrs(function () {
  return {
    to: '/cart'
  };
})(_templateObject());
exports.CartWrapper = CartWrapper;