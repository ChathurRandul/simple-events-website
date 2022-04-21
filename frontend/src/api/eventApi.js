import Server from "./server";

export const getEvents = async () => {
  try {
    const res = await Server.get("/event");
    console.log("response", res);
  } catch (err) {
    console.log(err);
  }
};
