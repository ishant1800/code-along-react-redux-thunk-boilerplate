import React, { useReducer } from "react";
import { initialState, reducer } from './Reducers';

const LikeCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementCounter = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default LikeCounter;
