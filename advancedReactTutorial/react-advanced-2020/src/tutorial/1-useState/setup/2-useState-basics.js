import React, { useState } from 'react';



const UseStateBasics = () => {
  //console.log(useState());
//  console.log(useState('hello world'));
  // const value = useState("hello")[0];
   //console.log(value);
  // const handler = useState(1)[1];
  // console.log(value, handler)
  const [text, setText] = useState('random title');

  const handleClick = () =>{
    if(text === "random title"){
      setText('hello world');
    }else{
      setText("random title");
    }
    
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}> Change Title</button>
    </React.Fragment>;
};

export default UseStateBasics;
