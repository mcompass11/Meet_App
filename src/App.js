import React, { Component } from 'react';
import './App.css';
import {EventList} from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 8

  }

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents
      },
      this.updateEvents(this.state.location, numberOfEvents)
    );
  };

  updateEvents = (location, eventCount) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents = (location === 'all' && eventCount === 0) ?
      events : location !== 'all' && eventCount === 0 ?
       events.filter((event) => event.location === location) :
       events.slice(0, eventCount);
      if (this.mounted) {
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
      });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents}/>
        <NumberOfEvents updateNumberOfEvents={(number) => {
          this.updateNumberOfEvents(number);}}/>
      </div>
    );
  }
}

export default App;