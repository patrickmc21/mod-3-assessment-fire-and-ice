import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import getHouses from '../../Api/apiCalls/getHouses';
import HouseContainer from '../HouseContainer/HouseContainer';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    const houses = await getHouses();
    this.props.addHouses(houses);
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
