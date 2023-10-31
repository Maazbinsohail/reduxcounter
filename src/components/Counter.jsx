import React from 'react'
// import {increment, decrement, incrementByAmount} from '../reducers/counter'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../slices/Counter';
function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();
    // const [count, setCount] = React.useState(3)
    const amount = 2; 
  return (
    <>
    <div>
      <button onClick={ () => dispatch(increment())}>Increment</button>
      <button onClick={ () => dispatch(decrement())}>Decrement</button>
      <button onClick={ () => dispatch(incrementByAmount(amount))} >Increment by Amount</button>
      <div>{count}</div>
    </div>
    </>
  )
}

export default Counter
