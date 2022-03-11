# meet

This app is for those needing help with finding things to do in a city. The user is able to search a city they're interested in and then have a list of events displayed. The user will also have the ability to see the latest searched info in the event they are offline.



FEATURES

  SHOW/HIDE AN EVENT'S DETAILS
    -As a user, I should be able to show/hide event details so that I can
    see more/less info about an event.

    Scenario 1: GIVEN user searched for events in a city
                WHEN the user selects the event of choice
                THEN the event displays a quick glance of event

    Scenario 2: GIVEN event has been displayed
                WHEN the user selects the event from search results
                THEN user clicks on arrow to expand more event details

    Scenario 3: GIVEN event details are shown
                WHEN user expands the details upon search
                THEN user can click on arrow to hide event details

  SPECIFY NUMBER OF EVENTS
    -As a user, I should be able to specify the number of events I want to 
    view in the app so that I can see more or fewer events in the events 
    list at once.

    Scenario 1: GIVEN the user hasn't changed the default event return settings
                WHEN the user searches for events in a city
                THEN then the list of events in the city are listed, 32 for default

    Scenario 2: GIVEN given the default of events is listed (32)
                WHEN the user searches for events in a city
                THEN the user can adjust the number of events listed from default number

  USE THE APP WHEN OFFLINE
    -As a user, I should be able to use the app when offline so that I can 
    see the events I viewd the last time I was online.

    Scenario 1: GIVEN the user can see prior searches
                WHEN they are offline while using app
                THEN user can browse through details of events 

    Scenario 2: GIVEN the user is offline and see last events searched 
                WHEN user goes to create a new search
                THEN the user is met with an error

  DATA VISUALIZATION
    -As a user, I should be able to see a chart showing the upcoming events
    in each city so that I know what events are organized in which city.

    Scenario 1: GIVEN is on home page
                WHEN searches for a city and selects it
                THEN a chart of with the number of upcoming events is shown
