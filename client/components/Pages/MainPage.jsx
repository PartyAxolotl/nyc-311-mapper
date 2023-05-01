import React, { useState, useEffect } from "react";

// submit button sends request to server, then app receives the data and stores as props app component and passing it to maps
// button also need to change state so it reveals the map component.

function MainPage(props) {
  const [showMap, setShowMap] = useState(false);
  const [partySpots, setPartySpots] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // extract value from form.
    const borough = event.target.value.boroughSelect.value;
    const day = event.target.value.day.value;

    // construct the request body.
    const requestBody = {
      borough : borough,
      day : day,
    }

    fetch("/party/party-spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        setPartySpots(data);
        setShowMap(true);
      })
      .catch((error) => {
        console.error("Error fetching party spots:", error);
      });
  }

  // if showMap is true, return MapPage component.
  if (showMap) {
    return <MapPage partySpots={partySpots} />
  }

  // otherwise return the contents of MainPage.
  return (
    <>
      <h1>Main Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boroughBox">Show me party spots in </label>
        <select id="boroughSelect">
          <option value="MANHATTAN">Manhattan</option>
          <option value="BROOKLYN">Brooklyn</option>
          <option value="BRONX">The Bronx</option>
          <option value="QUEENS">Queens</option>
          <option value="STATENISLAND">Staten Island</option>
          <option value="ALL">ALL OF NYC!!!</option>
        </select>
        <label htmlFor="daySelect"> on </label>
        <select id="daySelect">
          <option value="MON">Mondays.</option>
          <option value="TUE">Tuesdays.</option>
          <option value="WED">Wednesdays.</option>
          <option value="THU">Thursdays.</option>
          <option value="FRI">FRIDAYS!</option>
          <option value="SAT">SATURDAYS!</option>
          <option value="SUN">Sundays?</option>
          <option value='ALL'>ALL WEEK!!!</option>
        </select>
        <button type="submit" form="form1" value="Submit">
          Go!
        </button>
      </form>
    </>
  );
}

export default MainPage;
