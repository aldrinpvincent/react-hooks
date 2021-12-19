// existing hook in react, custom implementation

function useReducer<T>(reducer: (state : T, action: string) => T, initialState: T): [T, (action: string) => void] {
  const [state, setState] = React.useState();
  function dispatch(action:string) {
    setState(reducer(state, action));
  }

  return [state, dispatch];
}


// const initialState = { count: 0 };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// const [state, dispatch] = useReducer(reducer, initialState);
// dispatch({type: 'decrement'})
