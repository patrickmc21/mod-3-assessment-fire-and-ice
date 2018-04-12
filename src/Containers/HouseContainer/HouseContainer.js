import React from 'react';
import { connect } from 'react-redux';
import HouseCard from '../../components/HouseCard/HouseCard';
import wolf from './images/wolf.gif';

export const HouseContainer = (props) => {
  const { houses } = props;
  const houseCards = houses.map(house => {
    return (<HouseCard key={house.name} house={house} />);
  })
  return (
    <div className='Container'>
      {houses.length < 1 && <img src={wolf} id='Wolf' />}
      {houses.length >= 1 && houseCards}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  houses: state.houses
});


export default connect(mapStateToProps, null)(HouseContainer);