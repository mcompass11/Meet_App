import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state={
    numberOfEvents: 8,
    errorText: ''
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 8) {
        console.log('Try choosing a number between 1 and 8.')
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
    }
  };

  render() {
    return(
      <div className='NumberOfEvents'>
        <p>Number of Events:</p>
        <input 
          type = 'number'
          className='number'
          value={this.props.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;