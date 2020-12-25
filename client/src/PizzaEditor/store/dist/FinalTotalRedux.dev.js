"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FinalTotalRedux = void 0;

var _PizzaStoreRedux = _interopRequireWildcard(require("./PizzaStoreRedux"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var pizzaData10 = function pizzaData10() {
  return _PizzaStoreRedux.store.getState().pizzaServData[0];
};

var FinalTotalRedux = function FinalTotalRedux(_ref) {
  var dough, size, sauce, cheese, vegetables, meat, pizzaData1, pizzaData, doughPrice, sizePrice, saucePrice, cheesePrice, vegetablesPrice, meatPrice;
  return regeneratorRuntime.async(function FinalTotalRedux$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dough = _ref.dough, size = _ref.size, sauce = _ref.sauce, cheese = _ref.cheese, vegetables = _ref.vegetables, meat = _ref.meat;
          _context.next = 3;
          return regeneratorRuntime.awrap(pizzaData10());

        case 3:
          pizzaData1 = _context.sent;
          console.log(pizzaData1);
          pizzaData = (0, _PizzaStoreRedux["default"])()[0]; // console.log(PizzaServData)

          doughPrice = pizzaData.dough[dough].price;
          sizePrice = pizzaData.size[size].price;
          saucePrice = pizzaData.sauce[sauce].price;
          cheesePrice = cheese.reduce(function (price, cheese) {
            return price + pizzaData.cheese[cheese].price;
          }, 0);
          vegetablesPrice = vegetables.reduce(function (price, vegetables) {
            return price + pizzaData.vegetables[vegetables].price;
          }, 0);
          meatPrice = meat.reduce(function (price, meat) {
            return price + pizzaData.meat[meat].price;
          }, 0);
          return _context.abrupt("return", doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.FinalTotalRedux = FinalTotalRedux;