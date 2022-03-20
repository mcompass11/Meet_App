import React, { Component } from "react";

// export const extractEvent = (events) => {
//   var extractEvent = events.map((mockData) => mockData);
//   var event = [...new Set(extractEvent)];
//   console.log(event);
//   return event;
// };

export const extractEvent = (events) => {
  var extractSummary = events.map((event) => event.summary);
  var summary = [...new Set(extractSummary)];
  alert(summary);
  return summary;
};

class Event extends Component {
  state = {
    collapsed: true,
    event: [],
    numberOfEvents: []
  };

  handleItemClicked = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;

    return (
      <div className="event">
        <h3 className="summary">{event.summary}</h3>

        <p className="start-date">
          {event.dateTime} ({event.timeZone})
        </p>

        <button className={`${collapsed ? "show" : "close"}-details`} onClick={this.handleItemClicked}>
          {collapsed ? "Show Details" : "Close Details"}
        </button>

        {!collapsed &&
        <div className={`extra-details ${this.state.collapsed ? "close" : "show"}`}>
          <h3>More Details:</h3>
          <a href={event.htmlLink} rel="noreferrer" target="_blank">
            See details in Google Calendar
          </a>
          <p className="event-description">{event.description}</p>
        </div>}
      </div>
    );
    }
}

export default Event;