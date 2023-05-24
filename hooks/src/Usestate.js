import { useState } from 'react'

function Usestate() {
  // const [state, setState] = useState({count: 4, theme: 'blue'});
  // const count = state.count;
  // const theme = state.theme;
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('blue');


 function increment() {
    // setState(prevState => {
    //   return {...prevState, count: prevState.count + 1}
    // })
    setCount(prevCount => prevCount + 1);
    setTheme('red');
  }

  function decrement() {
    // setState(prevState => {
    //   return {...prevState, count: prevState.count - 1}
    // })
    setCount(prevCount => prevCount - 1);
    setTheme('blue');
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{count}{theme}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Usestate;
