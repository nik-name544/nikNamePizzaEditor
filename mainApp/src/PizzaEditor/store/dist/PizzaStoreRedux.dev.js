"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.FinalTotalRedux = exports.addressReducer = exports.cardNumReducer = exports.finalTotalReducer = exports.pizzaNameReducer = exports.pizzaDataReducer = void 0;

var _redux = require("redux");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pizzaDataReducer = function pizzaDataReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : PizzaDataStore();
  return state;
};

exports.pizzaDataReducer = pizzaDataReducer;

var pizzaNameReducer = function pizzaNameReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    toppings: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "set_name":
      return {
        toppings: action.payload
      };

    default:
      return state;
  }
};

exports.pizzaNameReducer = pizzaNameReducer;

var finalTotalReducer = function finalTotalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    total: 200
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "total":
      return {
        total: action.payload
      };

    default:
      return state;
  }
};

exports.finalTotalReducer = finalTotalReducer;

var cardNumReducer = function cardNumReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    cardnum: ""
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "set_card":
      return {
        username: action.payload
      };

    default:
      return state;
  }
};

exports.cardNumReducer = cardNumReducer;

var addressReducer = function addressReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    address: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "set_address":
      return {
        toppings: action.payload
      };

    default:
      return state;
  }
};

exports.addressReducer = addressReducer;

var FinalTotalRedux = function FinalTotalRedux(_ref) {
  var dough = _ref.dough,
      size = _ref.size,
      sauce = _ref.sauce,
      cheese = _ref.cheese,
      vegetables = _ref.vegetables,
      meat = _ref.meat;
  var pizzaData = PizzaDataStore()[0];
  var doughPrice = pizzaData.dough[dough].price;
  var sizePrice = pizzaData.size[size].price;
  var saucePrice = pizzaData.sauce[sauce].price;
  var cheesePrice = cheese.reduce(function (price, cheese) {
    return price + pizzaData.cheese[cheese].price;
  }, 0);
  var vegetablesPrice = vegetables.reduce(function (price, vegetables) {
    return price + pizzaData.vegetables[vegetables].price;
  }, 0);
  var meatPrice = meat.reduce(function (price, meat) {
    return price + pizzaData.meat[meat].price;
  }, 0);
  return doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200;
};

exports.FinalTotalRedux = FinalTotalRedux;
var rootReducer = (0, _redux.combineReducers)({
  PizzaData: pizzaDataReducer,
  PizzaName: pizzaNameReducer,
  CardNum: cardNumReducer,
  Address: addressReducer,
  FinalTotal: finalTotalReducer
});
var store = (0, _redux.createStore)(rootReducer);
exports.store = store;
store.subscribe(function () {
  return console.log(store.getState());
});

function PizzaDataStore() {
  return [{
    dough: {
      thin: {
        name: 'thin',
        price: 25
      },
      fluffy: {
        name: 'fluffy',
        price: 40
      }
    },
    size: {
      small: {
        name: 'small',
        price: 25
      },
      big: {
        name: 'big',
        price: 50
      }
    },
    sauce: {
      tomatoSauce: {
        name: 'tomato sauce',
        price: 15
      },
      whiteSauce: {
        name: 'white sauce',
        price: 20
      },
      spicySauce: {
        name: 'spicy sauce',
        price: 25
      }
    },
    cheese: {
      mozzarella: {
        name: 'mozzarella',
        price: 35
      },
      cheddar: {
        name: 'cheddar',
        price: 30
      },
      dorBlue: {
        name: 'dor-blue',
        price: 20
      }
    },
    vegetables: {
      tomato: {
        name: 'tomato',
        price: 20
      },
      mushrooms: {
        name: 'mushrooms',
        price: 40
      },
      pepper: {
        name: 'pepper',
        price: 30
      }
    },
    meat: {
      bacon: {
        name: 'bacon',
        price: 30
      },
      pepperoni: {
        name: 'pepperoni',
        price: 35
      },
      ham: {
        name: 'ham',
        price: 20
      }
    }
  }];
}