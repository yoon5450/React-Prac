import { useReducer } from "react";

type State = { count: number };

const INITIAL: State = { count: 0 };

//  action { type:string, payload:unknown }
type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "set"; payload: number }
  | { type: "reset" };

function reducer(state: State, action: Action) {
  // conditional action ...
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return { count: action.payload };
    case "reset":
      return INITIAL;
    default:
      return state;
  }
}

export function CounterReducer() {
  // reducer = dispatch
  const [state, dispatch] = useReducer(reducer, INITIAL);

  return (
    <div>
      <p>count : {state.count}</p>
      <button
        type="button"
        className="px-2 py-1 border border-accent m-1 rounded"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        type="button"
        className="px-2 py-1 border border-accent m-1 rounded"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
      <hr />
      <button
        type="button"
        className="px-2 py-1 border border-accent m-1 rounded"
        onClick={() => dispatch({type:'set', payload:10})}
      >
        10으로 변경
      </button>
      <hr />
      <button
        type="button"
        className="px-2 py-1 border border-accent m-1 rounded"
        onClick={() => dispatch({type:'reset'})}
      >
        리셋
      </button>
    </div>
  );
}

export default CounterReducer;
