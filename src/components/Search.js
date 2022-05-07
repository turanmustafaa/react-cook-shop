import React, { useState } from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {

  const [input,setInput] =useState('')  
    const navigate =useNavigate();

  let onchangeFnc = (e) => {
    setInput(e.target.value)
  }  

let onSubmitFnc = (e) => {

    navigate('/searched/' + input)
    e.preventDefault();
}

  return (
    <FormStyle onSubmit={onSubmitFnc}>
        <FaSearch />
        <input placeholder='search what u wanna cook...' onChange={onchangeFnc} type='text' value={input}/>
    </FormStyle>
  )
}

const FormStyle = styled.form`
position: relative;
width: 80%;
margin: auto;

input {
    border: none;
    background: linear-gradient(35deg, #494949 , #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
}

svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
}
`

export default Search