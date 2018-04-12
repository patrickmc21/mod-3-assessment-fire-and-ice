import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import getHouses from '../../Api/apiCalls/getHouses';
import getSwornMember from '../../Api/apiCalls/getSwornMember';
import HouseContainer from '../HouseContainer/HouseContainer';

export class App extends Component {

  async componentDidMount() {
    try {
      const houses = await getHouses();
      const housesWithMembers = await this.addSwornMembersToHouse(houses);
      this.props.addHouses(housesWithMembers);
    } catch (error) {
      this.setState({errorStatus: error.message});
    }
  }

  addSwornMembersToHouse = (houses) => {
    const members =  houses.map(async house => {
      const swornMembers = await this.getSwornMembers(house);
      return {...house, swornMembers};
    });

    return Promise.all(members);
  }

  getSwornMembers = (house) => {
    const members = house.swornMembers.map(member => {
      const id = this.cleanMemberEndPoint(member);
      return getSwornMember(id);
    });
    return Promise.all(members);
  }

  cleanMemberEndPoint = (url) => {
    const cleanPoint = 'https://www.anapioficeandfire.com/api/characters/';
    const cleanedEndPoint = url.split(cleanPoint);
    return cleanedEndPoint[1];
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          <HouseContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  addHouses: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({ 
  addHouses: houses => dispatch(actions.addHouses(houses))
});
export default connect(null, mapDispatchToProps)(App);
