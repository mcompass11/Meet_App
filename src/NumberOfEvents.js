import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state={
    numberOfEvents: 8,
    errorText: ''
  }

  handleInputChanged = (event) => {
    const number = event.target.value;

    if (number < 1) {
        console.log('Try choosing a number from 1 to 8.')
    } else {
      this.setState({
        numberOfEvents: number,
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
          value={this.state.numberOfEvents}
          className='number'
          onChange={(e) => this.handleInputChanged(e)}
        />
      </div>
    );
  }
}

export default NumberOfEvents;