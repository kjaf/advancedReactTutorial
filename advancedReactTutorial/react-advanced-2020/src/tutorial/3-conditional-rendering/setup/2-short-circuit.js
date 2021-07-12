import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState('');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [isError, setIsError] = useState(false);





  return <>
    <h1>{text || 'john doe'}</h1>
    <button className="btn" onClick={()=>{setIsError(!isError)}}>toggle error</button>
    {isError && <h1>Error...</h1>}
    {isError ? <p>there is an error</p> : <p>you good bro</p>}
  </>;
};

export default ShortCircuit;
