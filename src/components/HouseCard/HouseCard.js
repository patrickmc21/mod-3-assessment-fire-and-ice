import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  handleClick = () => {
    let selected = !this.state.selected;
    this.setState({ selected });
  }

  renderFounded = (house) => {
    return house.founded.length >= 1 ? house.founded : 'N/A';
  }

  renderSeats = (house) => {
    return house.seats.map((seat, idx) => {
      return <li key={idx}>{seat}</li>;
    });
  }

  renderTitles = (house) => {
    return house.titles.map((title, idx) => {
      return <li key={idx}>{title}</li>;
    });
  }

  renderWeapons = (house) => {
    return house.ancestralWeapons.map((weapon, idx) => {
      return <li key={idx}>{weapon}</li>;
    });
  }

  renderSwornMembers = (house) => {
    return house.swornMembers.map((member, idx) => {
      const secondTitle = member.titles[1] ? member.titles[1] : '';
      const status = member.died.length < 1 ? 'Alive' : `Died ${member.died}`; 
      return (
        <li 
          key={idx}>
          Name: {member.titles[0]} {member.name} {secondTitle} Status: {status}
        </li>
      );
    });
  }

  render() {
    const { house } = this.props;
    const { selected } = this.state;
    const founded = this.renderFounded(house);
    const seats = this.renderSeats(house);
    const titles = this.renderTitles(house);
    const weapons = this.renderWeapons(house);
    const swornMembers = this.renderSwornMembers(house);
    return (
      <article 
        onClick={this.handleClick}
        className='Card'>
        <h3>{house.name}</h3>
        {house.words.length > 0 &&
          <h4>{house.words}</h4>
        }
        <h4>Founded: {founded}</h4>
        <ul> 
          <h5>Seats:</h5>
          {seats}
        </ul>
        <ul>
          <h5>Titles:</h5>
          {titles}
        </ul>
        <h5>Coat of Arms:</h5>
        <p>{house.coatOfArms}</p>
        <ul> 
          <h5>Ancestral Weapons:</h5>
          {weapons}
        </ul>
        {selected && 
          <ul>
            <h5>Sworn Members:</h5>
            {swornMembers}
          </ul>}
      </article>
    );
  }
}

HouseCard.propTypes = {
  house: PropTypes.object
};

export default HouseCard;