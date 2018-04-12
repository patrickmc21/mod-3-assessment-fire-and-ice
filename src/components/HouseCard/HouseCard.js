import React from 'react';

const HouseCard = ({house}) => {
  const founded = house.founded ? house.founded : 'N/A';
  const seats = house.seats.map(seat => {
    return <li>{seat}</li>
  });
  const titles = house.titles.map(title => {
    return <li>{title}</li>
  });
  const weapons = house.ancestralWeapons.map(weapon => {
    return <li>{weapon}</li>
  });

  return (
    <article className='Card'>
      <h3>{house.name}</h3>
      {house.words.length > 0 &&
        <h4>{house.words}</h4>
      }
      <h4>Founded: {founded}</h4>
      <ul> 
        <p>Seats:</p>
        {seats}
      </ul>
      <ul>
        <p>Titles:</p>
        {titles}
      </ul>
      <p>Coat of Arms: {house.coatOfArms}</p>
      <ul> 
        <p>Ancestral Weapons:</p>
        {weapons}
      </ul>

    </article>
  )
};

export default HouseCard;