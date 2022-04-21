import {
  addNewEvent,
  getEvents,
  getEventByID,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController";

const routes = (app) => {
  app
    .route("/event")

    .get((req, res, next) => {
      next();
    }, getEvents)

    // post endpoint
    .post(addNewEvent);

  app
    .route("/event/:eventID")

    // get a specific event
    .get(getEventByID)

    // update a specific event
    .put(updateEvent)

    // delete a specific event
    .delete(deleteEvent);
};

export default routes;
