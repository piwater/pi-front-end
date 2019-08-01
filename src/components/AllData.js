import React, { useState, useEffect } from 'react';
import SERVER_URL from '../constant/server';


export default function AllData() {
  
  //Set status
  const [readings, setReadings] = useState([]);

  //Convert timestamp from epoch to readable date
  const convert = (cur) => {
    cur.timestamp = new Date(cur.timestamp * 1000);
    return cur.toLocaleString();
  }

  //get readings from the API
  const _getReadings = () => {
    
    // fetch from API
    fetch(`${SERVER_URL}/data`)
    .then( data => data.json())
    .then(readingList => {
       readingList.reverse();
       setReadings(readingList);
    })

    .catch( console.error );
  };

  useEffect(_getReadings, []);
  
  return (
    <>
    <h2>Times the plant was watered:</h2>
    <ul>
    {readings.map( (reading, index) =>
      <li key={index}>
        <p>{convert(reading).timestamp.toString()}</p>
      </li>
    )}
  </ul>
  </>
  )
  
}
