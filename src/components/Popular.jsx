import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
function Popular() {

  const getPopular = async () => {

    const check = localStorage.getItem('popular')

    if(check) {
      setPopular(JSON.parse(check))

    }
    else {
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`)
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes))

      setPopular(data.recipes)  
    }

   
}

  const [popular , setPopular] = useState([])

  useEffect(()=> {
    getPopular();
  },[])

  
    
  return (
    <Wrapper>
    <h3>Popular Picks</h3>
    <Splide options={{perPage : 4 , gap: 50}}>
    {popular.map(recipe => {
      return (
        <SplideSlide key={recipe.id}>
        <Card>
        <Link to={'/recipe/' +recipe.id} >
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
          <Gradient />
          </Link> 
        </Card>
        </SplideSlide>
      )
    })}
    </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin : 4rem 0rem ;

`
const Card = styled.div`
position: relative;
min-height : 25rem;
border-radius : 2rem;
overflow :hidden;

p {
  position: absolute;
  bottom: 10%;
  z-index: 10;
  left: 50%;
  transform: translate(-50%,0%);
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  border-radius: 2rem;
  object-fit: cover;
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
}

`

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0) ,rgba(0,0,0,0.7));
`
export default Popular