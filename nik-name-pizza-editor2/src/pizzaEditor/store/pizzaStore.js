import { observable, action, computed } from 'mobx';

class PizzaStore {
    @observable pizzaData = pizzaDataStore()

    @observable defoultP = 225

    @observable defoultSauce = 0

    @observable sum = this.defoultP + this.defoultSauce
    // @observable defoultSauce = this.defoultP

    @observable topings = []

    @action total(newP) {
        this.defoultP += newP
        console.log(this.defoultP)
        console.log(this.defoultP + this.defoultSauce)
    } 

    @action radioTotal(sauce) { 
        this.defoultSauce = this.pizzaData[0][sauce]   
        console.log(this.defoultP)
        console.log(this.defoultP + this.defoultSauce) 
    }

    @action siiiim() {
        // const siiiimP = this.defoultP +  this.defoultSauce
        console.log(this.defoultP)
    }

}


export default new PizzaStore()

function pizzaDataStore() {
    return [
        {
            size30: 25,
            size35: 50,

            thin: 25,
            fluffy: 40,

            tomatoSauce: 15,
            whiteSauce: 20,
            spicySauce: 25,

            mozzarella: 35,
            cheddar: 30,
            dorBlue: 20,

            tomato: 20,
            mushrooms: 40,
            pepper: 30,

            bacon: 30,
            pepperoni: 35,
            ham: 20

        }, 
        {
            tomato: false,
            mushrooms: false,
            pepper: false,
            size30: true,
            size35: false,
            thin: true,
            fluffy: false,
            tomatoSauce: false,
            whiteSauce: false,
            spicySauce: false,
            mozzarella: false,
            cheddar: false,
            dorBlue: false,
            bacon: false,
            pepperoni: false,
            ham: false,
        },
    ]
}

