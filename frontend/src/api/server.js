import axios from "axios";

const Server = axios.create({
  baseURL: "localhost:4000",
});

export default Server;
