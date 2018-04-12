import React from 'react';
import PropTypes from 'prop-types';

const HouseCard = ({house}) => {
  const founded = house.founded.length >= 1 ? house.founded : 'N/A';
  const seats = house.seats.map((seat, idx) => {
    return <li key={idx}>{seat}</li>;
  });
  const titles = house.titles.map((title, idx) => {
    return <li key={idx}>{title}</li>;
  });
  const weapons = house.ancestralWeapons.map((weapon, idx) => {
    return <li key={idx}>{weapon}</li>;
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
  );
};

HouseCard.propTypes = {
  house: PropTypes.object
};

export default HouseCard;