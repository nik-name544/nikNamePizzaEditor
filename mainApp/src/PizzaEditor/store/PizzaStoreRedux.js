 
import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
 

const setQuote = (data) => {
    const data2 = []
    const data1 = [...data]
    const dataS = [{
        dough: {
            'thin': {},
            'fluffy': {}
        },
        size: {
            'small': {},
            'big': {},
        },
        sauce: {
            'tomatoSauce': {},
            'whiteSauce': {},
            'spicySauce': {},
        },
        cheese: {
            'mozzarella': {},
            'cheddar': {},
            'dorBlue': {}
        },
        vegetables: {
            'tomato': {},
            'mushrooms': {},
            'pepper': {},
        },
        meat: {
            'bacon': {},
            'pepperoni': {},
            'ham': {},
        }
    }]
    const newNewData = dataS;
    function toppings(itemNew) {

        if (itemNew.category === "dough") {
            const name = itemNew.name
            const price = itemNew.price
            newNewData[0].dough[name] = ({ name, price })
        } else if (itemNew.category === "size") {
            const name = itemNew.name
            const price = itemNew.price
            newNewData[0].size[name] = ({ name, price })
        }
        else if (itemNew.category === "sauce") {
            const name = itemNew.name
            const price = itemNew.price
            newNewData[0].sauce[name] = ({ name, price })

        } else if (itemNew.category === "cheese") {
            const name = itemNew.name
            const price = itemNew.price
            newNewData[0].cheese[name] = ({ name, price })

        } else if (itemNew.category === "vegetables") {
            const name = itemNew.name
            const price = itemNew.price
            newNewData[0].vegetables[name] = ({ name, price })
        } else if (itemNew.category === "meat") {
            const name = itemNew.name
            const price = itemNew.price
            newNewData[0].meat[name] = ({ name, price })

        }
    }

    let newData = data1.map((item, i) => {
        const itemNew = item
        toppings(itemNew)
    })

    data2.push(...newNewData)
    return data2
}

export const fetchdata = createAsyncThunk("pizza/fetchdata", async () => {
    const result = await fetch(`http://localhost:4000/ingredients`)
        .then((res) => res.json())
        .then((data) => setQuote(data))
    return result
});

const initialState = {
    toppings: [],
    address: [],
    cardnum: "",
    total: 200,
    registered: false,
    pizzaServData: [],
    orderList: []
};

const pizzaLogic = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        pizzaName: (state, action) => {
            state.toppings = action.payload
        },
        finalTotal: (state, action) => {
            state.total = action.payload
        },
        cardNum: (state, action) => {
            state.cardnum = action.payload
        },
        address: (state, action) => {
            state.address = action.payload
        },
        registered: (state, action) => {
            state.registered = action.payload
        },
        orderList: (state, action) => {
            state.orderList = action.payload
        },
    },
    extraReducers: {
        [fetchdata.fulfilled]: (state, action) => {
            state.pizzaServData = action.payload;
        }
    }
})

export const FinalTotalRedux = (values, PizzaServData) => { 
    let pizzaData = PizzaServData || PizzaDataStore()[0] 
    const doughPrice = Number(pizzaData.dough[values.dough].price);
    const sizePrice = Number(pizzaData.size[values.size].price);
    const saucePrice = Number(pizzaData.sauce[values.sauce].price);
    const cheesePrice = values.cheese.reduce(
        (price, cheese) => price + Number(pizzaData.cheese[cheese].price),
        0
    );
    const vegetablesPrice = values.vegetables.reduce(
        (price, vegetables) => price + Number(pizzaData.vegetables[vegetables].price),
        0
    );
    const meatPrice = values.meat.reduce(
        (price, meat) => price + Number(pizzaData.meat[meat].price),
        0
    ); 

 
 
    return doughPrice + sizePrice + saucePrice + cheesePrice + vegetablesPrice + meatPrice + 200;
}


 
export const store = configureStore({ reducer: pizzaLogic.reducer });
 
store.dispatch(fetchdata());


 
  

store.subscribe(() => console.log(store.getState()));







function PizzaDataStore() { 
    return [
        {
            dough: {
                thin: { name: 'thin', price: 25 },
                fluffy: { name: 'fluffy', price: 40 },
            },

            size: {
                small: { name: 'small', price: 25 },
                big: { name: 'big', price: 50 },
            },

            sauce: {
                tomatoSauce: { name: 'tomato sauce', price: 15 },
                whiteSauce: { name: 'white sauce', price: 20 },
                spicySauce: { name: 'spicy sauce', price: 25 },
            },

            cheese: {
                mozzarella: { name: 'mozzarella', price: 35 },
                cheddar: { name: 'cheddar', price: 30 },
                dorBlue: { name: 'dor-blue', price: 20 },
            },

            vegetables: {
                tomato: { name: 'tomato', price: 20 },
                mushrooms: { name: 'mushrooms', price: 40 },
                pepper: { name: 'pepper', price: 30 },
            },

            meat: {
                bacon: { name: 'bacon', price: 30 },
                pepperoni: { name: 'pepperoni', price: 35 },
                ham: { name: 'ham', price: 20 },
            },


        },
    ]
}

