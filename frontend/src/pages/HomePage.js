import React, { useEffect, useState } from "react";
import styled from "styled-components";

import EventCard from "../components/EventCard";
import { getEvents } from "../api/eventApi";

const HomePage = () => {
  const [eventsData, setEventsData] = useState([]);

  const fetchEventData = async () => {
    const resp = await getEvents();
    setEventsData(resp);
  };

  useEffect(() => {
    fetchEventData();
  }, []);

  if (eventsData?.length === 0) {
    return <h1>No events available</h1>;
  }

  return (
    <Container>
      <TitleWrapper>
        <PageTitle>Popular Groups</PageTitle>
        <Subtitle>UPCOMING EVENTS</Subtitle>
      </TitleWrapper>

      <DataWrapper>
        <DataSection>
          {eventsData?.map((item) => (
            <EventCard key={item._id} data={item} />
          ))}
        </DataSection>
      </DataWrapper>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const TitleWrapper = styled.div`
  padding: 20px;
`;

const PageTitle = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Lobster+Two&display=swap");
  font-family: "Lobster Two", cursive;
  font-size: 48px;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

const Subtitle = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@600&display=swap");
  font-family: "Rubik", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: grey;
  text-align: center;
  padding: 20px;
  margin: 0;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

const DataSection = styled.div`
  padding: 20px;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
