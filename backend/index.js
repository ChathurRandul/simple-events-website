import express from "express";
import routes from "./src/routes/appRoutes";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 4000;
const dbUrl =
  "mongodb+srv://user:user@simple-events-app.lpnvk.mongodb.net/simple-events-app?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

// mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server runnning on port ${PORT}`);
});

app.listen(PORT, () => console.log(`Your server is runnning on port ${PORT}`));
