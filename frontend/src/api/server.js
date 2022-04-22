import axios from "axios";

const Server = axios.create({
  baseURL: "http://localhost:4000",
});

export default Server;
