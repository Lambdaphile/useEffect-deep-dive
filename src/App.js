import React from "react";

import "./styles.css";

const UPDATE_COUNTER = "UPDATE_COUNTER";
const initialState = {
  count: 0
};

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_COUNTER:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: UPDATE_COUNTER });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // const [count, setCount] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className="App">
      <p>count: {state.count}</p>
    </div>
  );
}
