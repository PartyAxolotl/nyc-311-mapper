import React, { useState, useEffect } from "react";

function MainPage(props) {
  return (
    <>
      <h1>Main Page</h1>
      <form>
        <label for="daySelect">Day:</label>
        <select id="daySelect">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">FRIDAY!</option>
          <option value="Saturday">SATURDAY!</option>
          <option value="Sunday">Sunday?</option>
        </select>
        <label for="zipcodeBox">Where?</label>
        <input type="text" id="zipcodeBox" placeholder='Enter zip code here.'></input>
      </form>
    </>
  );
}

export default MainPage;
