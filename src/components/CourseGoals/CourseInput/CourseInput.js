import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import styled from 'styled-components';

const FormControl=styled.div`
  margin: 0.5rem 0;

#label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color:${props=> props.invalid ? "red":"black"
  }
}

#input {
  display: block;
  width: 100%;
  border: 1px solid ${props=>props.invalid? "red":"#ccc"
  };
  // border: 1px solid #ccc;
  background:${props=>
    props.invalid ? "#fad0ec" :"transparent"
  }
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

// &.invalid input {
//   border-color: red;
//   background: #fad0ec;
// }
// &.invalid label {
//   color: red;
// }

`
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true)

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length>0){
      setIsValid(true)
      setEnteredValue(event.target.value);
    }
    else{
      setIsValid(false)
      setEnteredValue("")
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length===0){
      setIsValid(false)
      return  ;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue("")
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
      {/* <FormControl className={`form-control ${!isValid? "invalid":""}`}> */}
        <label id="label">Course Goal</label>
        <input id="input" type="text" onChange={goalInputChangeHandler} value ={enteredValue}/>
        </FormControl>
     
      {/* <div className={`form-control ${!isValid? "invalid":""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value ={enteredValue}/>
      </div> */}
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
