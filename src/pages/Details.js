import React, { useEffect, useState } from 'react'
import "../styles/Details.css"

const Details = ({}) => {

  const [details, setDetails] = useState([])

useEffect(()=> {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6a2c45b0c7msh9003a768797bbe7p19e221jsna0f7ed43603d',
      'X-RapidAPI-Host': 'dog-breeds2.p.rapidapi.com'
    }
  };
  
  fetch('https://dog-breeds2.p.rapidapi.com/dog_breeds/breed/Cretan%20Hound', options)
    .then(response => response.json())
    .then(response => setDetails(response))
    .catch(err => console.error(err));
},[])

  return (
    <div className='details'>{details.map ((detail,key) => (
      <li key={key}>{detail.breed}</li>
    ))}</div>
  )
}

export default Details