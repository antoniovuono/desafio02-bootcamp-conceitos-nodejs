const express = require("express");
const { uuid } = require("uuidv4");
const cors = require("cors");


const app = express();


app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
  const { title } = request.query;

  return response.json(repositories);

});

app.post("/repositories", (request, response) => {
    const { title, url, techs } = request.body;

    const repositorie = { id: uuid(), title, url, techs };

    repositories.push(repositorie);

    return response.json(repositorie);

  });

app.put("/repositories/:id", (request, response) => {
  // TODO
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repositoreIndex = repositories.findIndex(repositorie => repositorie.id === id);

  if (repositoreIndex < 0) {
    return response.status(400).json({ error:  "Repositorie not found!"})
  }

  const repositorie = {
    title,
    url,
    techs,
  }

    repositories[repositoreIndex] = repositorie;

    return response.json([repositorie]);

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
