import { createAction,createReducer } from "@reduxjs/toolkit";


const initialState = {
    value : 0
}

//actions generators
const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");
const incrementByAmount = createAction("counter/incrementByAmount");


//reducers

const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state) => {
        state.value++; // ye reducer ki state hai
        //return required nh hota is m ye khud return krdyta hai
        //yhn py state mutate seems krta h lkn wo nh hotya hai(copy banadyta hai)
        //immer library
    })

    builder.addCase(decrement, (state) => {
        state.value--;
    })

    builder.addCase(incrementByAmount, (state, action) => {
        state.value += action.payload
    })
})

export {increment,decrement,incrementByAmount}
export default counterReducer;