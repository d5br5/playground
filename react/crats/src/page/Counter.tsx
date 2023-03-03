import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";
import { decrement, increment, incrementByAmount } from "../store/counter";

const Counter = () => {
  // const counter = useSelector((state: RootState) => state.counter.value);
  const counter = useSelector(({ counter }: RootState) => counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <div>
        <div>current counter : {counter.value}</div>
        <div>isDone : {`${counter.isDone}`}</div>
        <div>isLoading : {`${counter.isLoading}`}</div>
        <div>error : {`${counter.error}`}</div>
      </div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Change by Value
      </button>
    </div>
  );
};

export default Counter;
