import Server from "./server";

export const getEvents = async () => {
  try {
    const res = await Server.get("/events");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
