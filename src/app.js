const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");


const app = express();


app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO


});

app.post("/repositories", (request, response) => {
    const { title, url, techs } = request.body;

    const repositorie = { id: uuid(), title, url, techs };

    repositories.push(repositorie);

    return response.json(repositorie);

  });

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
