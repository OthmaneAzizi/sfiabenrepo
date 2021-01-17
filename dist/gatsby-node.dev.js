"use strict";

var path = require('path');

exports.onCreateWebpackConfig = function (_ref) {
  var actions = _ref.actions;
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    }
  });
};

exports.createPages = function _callee(_ref2) {
  var graphql, actions, createPage, _ref3, data;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          graphql = _ref2.graphql, actions = _ref2.actions;
          createPage = actions.createPage;
          _context.next = 4;
          return regeneratorRuntime.awrap(graphql("\n    {\n      allShopifyProduct {\n        edges {\n          node {\n            shopifyId\n            handle\n          }\n        }\n      }\n    }\n  "));

        case 4:
          _ref3 = _context.sent;
          data = _ref3.data;
          data.allShopifyProduct.edges.forEach(function (_ref4) {
            var node = _ref4.node;
            createPage({
              path: "products/".concat(node.handle),
              context: {
                shopifyId: node.shopifyId
              },
              component: path.resolve('./src/templates/ProductTemplate/index.js')
            });
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};