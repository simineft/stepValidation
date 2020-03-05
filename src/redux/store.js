import {createStore} from  "redux";
import  reducer   from "./reducer";

const  store = createStore(reducer)

// const counterReducer = (state, action) => {
//   if(action.type === "inc") {
//     return { ...state, counter: state.counter + 1 }
//   }
//   return state;
// }

// const createStore = (reducer) => {
//   let nextState = {};
//   let preState = {};
//   return {
//     dispatch: (action) => {
//       nextState = reducer(preState, action)
//     },
//     getState: () => { return nextState; },
//     subscribe: () => {}
//   }
// }

// let store = createStore(counterReducer);

// store.dispatch()
// store.getState();
// store.subscribe();

console.log(store,"store")

export default store