export const RECEIVE_COFFEES ='coffees/RECEIVE_COFFEES'
export const RECEIVE_COFFEE = 'coffees/RECEIVE_COFFEE';
export const REMOVE_COFFEE = 'coffees/REMOVE_COFFEE'

//action creator function
const receiveCoffees = (coffees) => ({
    type: RECEIVE_COFFEES,
    payload: coffees
})

const receiveCoffee = (coffee) =>({
    type: RECEIVE_COFFEE,
    payload: coffee
})

const removeCoffee = (coffeeId) => ({
    type: REMOVE_COFFEE,
    payload: coffeeId
})