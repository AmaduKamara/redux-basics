const redux = require("redux");

// The reducer is a pure function that takes a state and action and returns a new state. 
// State must always have a default value
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  } 
  return state;
};

// Create the store by calling createStore() which takes a reducer and that reducer 
// holds the state, which is the value passed to st
const store = redux.createStore(counterReducer);

// console.log(store.getState());

// A subscriber is responsible for fetching data from the store
// Subscribes to the store to get state data
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe() subscribes for data in the store
// Subscribe function wants a subscriber function
store.subscribe(counterSubscriber);

// Dispatch an action to the store
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
