import React, { Component } from 'react';
import './App.css';
import {EventList} from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { WarningAlert } from './Alert';
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 8,
    currentLocation: 'all',

  }

  async componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });

    if (!navigator.onLine) {
      this.setState({
        infoText: 'You are not connected to the Internet!'
      });
    } else {
      this.setState({
        infoText:''
      });
    }
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      {
        numberOfEvents
      },
      this.updateEvents(this.state.currentLocation)
    );
  };

  updateEvents = (location) => {

    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events : events.filter((event) => event.location === location);

      this.setState({
        events: locationEvents
      });
    });
    }

  render() {
    return (
      <div className="App">
        <WarningAlert text={this.state.infoText} />
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <NumberOfEvents updateNumberOfEvents={(number) => {
          this.updateNumberOfEvents(number);}} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events} numberOfEvents={this.state.numberOfEvents} updateEvents={this.updateEvents}/>
      </div>
    );
  }
}

export default App;