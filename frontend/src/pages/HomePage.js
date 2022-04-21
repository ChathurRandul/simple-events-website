import React, { useEffect } from "react";
import { getEvents } from "../api/eventApi";

const HomePage = () => {
  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <h1>Popular Groups</h1>
      <h2>Upcoming Events</h2>
    </>
  );
};

export default HomePage;
