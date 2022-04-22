import React from "react";
import styled from "styled-components";
import {
  BsFillCalendarCheckFill,
  BsFillClockFill,
  BsPeopleFill,
} from "react-icons/bs";

const EventCard = ({ data }) => {
  console.log("data", data);
  return (
    <Container>
      <ImageContainer>
        <img src={data?.imgUrl} alt={data?.name} />
      </ImageContainer>
      <DataContainer>
        <EventName>{data?.name}</EventName>
        <EventDetail>
          <BsFillCalendarCheckFill color="grey" />
          &ensp;
          {data?.date}
        </EventDetail>
        <EventDetail>
          <BsFillClockFill color="grey" />
          &ensp;
          {data?.time}
        </EventDetail>
        <EventDetail>
          <BsPeopleFill color="grey" />
          &ensp;
          {data?.seats} Seats
        </EventDetail>
        <EventName>{data?.charge}</EventName>
      </DataContainer>
    </Container>
  );
};

export default EventCard;

const Container = styled.div`
  width: 300px;
  height: 450px;
  border: 1px #e6e6e6 solid;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  height: max-content;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.205);
`;

const ImageContainer = styled.div`
  img {
    width: 300px;
    height: 140px;
    object-fit: fill;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;

const DataContainer = styled.div`
  padding: 5px 10px;
`;

const EventName = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
  font-family: "Questrial", sans-serif;
  font-size: 16px;
  text-align: left;
`;

const EventDetail = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Questrial&display=swap");
  font-family: "Questrial", sans-serif;
  font-size: 12px;
  text-align: left;
  style="color:red;"
`;
