import React from 'react';
import { connect } from 'react-redux';
import HouseCard from '../../components/HouseCard/HouseCard';

export const HouseContainer = (props) => {
  const { houses } = props;
  const houseCards = houses.map(house => {
    return (<HouseCard house={house} />);
  })
  return (
    <div className='Container'>
      {houseCards}
    </div>
  );
};

export const mapStateToProps = (state) => ({
  houses: state.houses;
});


export default connect(mapStateToProps, null)(HouseContainer);