import React from 'react'
import { useState } from 'react'
//import { LogicalOperator } from 'typescript';
import styled, {createGlobalStyle,css} from 'styled-component';


const Country=() => {

  const[name,setName] = useState({countryName : ""});
  const[submitted,setSubmitted] = useState(false);
  const[valid,setValid] = useState(false);

  const handleChange = (event:any) => {   //needed to convert into typescript **event
    setName({...name, countryName : event.target.value})

  }

  const handleSubmit =(event:any) => {  //needed to convert into typescript **event
    event.preventDefault();
    if(name.countryName  )
    {
      setValid(true);
    }
    setSubmitted(true);

     //write  submit code here

  }

  return (
    <form className='country-weather-app' onSubmit = {handleSubmit}>

      <div>

      {submitted?<div className = "Thank you Message">Thank you for using our app</div>:null} 

        <label htmlFor='Country Name' >
          <h1>Weather App</h1>
          <h4>Type country Name</h4>
        </label>
        
        
      
        <input 
         type = 'text' 
         name='countryName'
         placeholder='Country Name' 
         value = {name.countryName}
         onChange = {handleChange} />

        {/**{submitted ? && !valid?<span className='error message'> Country name cannot be empty!!</span>:null}**/}
    
        <input
        type='submit' 
        value='submit' /> 
        
      </div> 

    </form>
  )
}

export default Country