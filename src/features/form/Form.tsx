import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { decremented, incremented, incrementedByAmount, selectForm } from './formSlice';

export function FormComponent() {
  const count = useAppSelector(selectForm);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(incremented())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decremented())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementedByAmount(2))}>Increment by 2</button>
      </div>
    </div>
  );
}


export default FormComponent