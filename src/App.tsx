import React, { Dispatch } from "react"
import { AnyAction, createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from './store'
import counterSlice from "./counterSlice";

// const reducer = (state: any, action: any) => {
//   if (action.type === "up") {
//     return { ...state, value: state.value + action.step }
//   }
//   return state
// }
// const initialState = { value: 0 }
// const store = createStore(reducer, initialState)

type State = {
  counter: {
    value: number
  }
}

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state: State) => {
    return state.counter.value
  })
  return <>
    <button onClick={() => {
      // dispatch({ type: 'counterSlice/up', step: 2 })
      dispatch(counterSlice.actions.up(2))
    }}>+</button>{count}
  </>
}

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
