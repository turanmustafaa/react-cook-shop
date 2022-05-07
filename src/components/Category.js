import React from 'react'
import {FaPizzaSlice , FaHamburger} from 'react-icons/fa'
import {GiNoodles , GiChopsticks} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom';


function Category() {
  return (
    <List>
        <NavLink className={"div"} to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
        </NavLink>
        <NavLink className={"div"} to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
        </NavLink>
        <NavLink className={"div"} to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai Food</h4>
        </NavLink>
        <NavLink className={"div"} to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
    align-items: center;
    
    .div {
        margin: 0rem 2rem;
        text-decoration: none;
        padding: 20px;
        background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,1));
        border-radius: 50%;
        width: 120px;
        height: 120px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        &.active {
          background: linear-gradient(#f27121 ,#e94057);
        }
    }
    h4{
      color: white;
    }
`

export default Category