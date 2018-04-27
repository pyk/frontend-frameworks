// Start the server
import * as express from "express";

const app = express();

app.get("/", (req, res) => {
    console.log("hello");
})

app.listen(3000);

