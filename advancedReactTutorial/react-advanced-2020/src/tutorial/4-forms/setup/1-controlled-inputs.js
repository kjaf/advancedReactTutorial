import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange



const ControlledInputs = () => {

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const [number,setNumber] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(firstName && email){
      const person = {id:new Date().getTime.toString(), firstName, email};
      setPeople((people)=>{
        return[...people,person]
      });
      setFirstName('');
      setEmail('');
    }else{
      console.log('empty value');
    }
  }

  const checkNumber = (e) =>{
    console.log(e.target.value);
    setNumber(e.target.value);
    if(e.target.value.match(/^[0-9a-z]+$/)){
      console.log("we gots a letter");
    }
  }


  return <>
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="email">email :</label>
          <input type="text" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="form-control">
          <label>Number test: </label>
          <input type="number" id="number" name="number" value={number} onChange={checkNumber} />
        </div>
        <button type="submit">add person</button>
      </form>
      {
        people.map((person)=>{
          const{id,firstName,email}=person
          return <div className='item' key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        })
      }
    </article>
  </>;
};

export default ControlledInputs;
