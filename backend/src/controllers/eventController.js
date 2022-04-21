import mongoose from "mongoose";
import { EventSchema } from "../models/eventModel";

const Event = mongoose.model("Event", EventSchema);

export const addNewEvent = (req, res) => {
  let newEvent = new Event(req.body);

  newEvent.save((err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

export const getEvents = (req, res) => {
  Event.find({}, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

export const getEventByID = (req, res) => {
  Event.findById(req.params.eventID, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

export const updateEvent = (req, res) => {
  Event.findOneAndUpdate(
    { _id: req.params.eventID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, event) => {
      if (err) {
        res.send(err);
      }
      res.json(event);
    }
  );
};

export const deleteEvent = (req, res) => {
  Event.deleteOne({ _id: req.params.eventID }, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfully deleted" });
  });
};
