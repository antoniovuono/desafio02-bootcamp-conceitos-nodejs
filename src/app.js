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

    const repository = { id: uuid(), title, url, techs, likes: 0 };

    repositories.push(repository);

    return response.json(repository);

  });

app.put("/repositories/:id", (request, response) => {
  // TODO
  const { id } = request.params;
  const { title, url, techs, likes } = request.body;

  const repositoreIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoreIndex < 0) {
    return response.status(400).json({ error:  "Repositorie not found!"})
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repositoreIndex].likes,
  }

    repositories[repositoreIndex] = repository;

    return response.json([repository]);

});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  const { id } = request.params;

  const repositoreIndex = repositories.findIndex(repository => repository.id === id);

  if (repositoreIndex < 0) {
    return response.status(400).json({ error:  "Repository not found!"})
  }

  repositories.splice(repositoreIndex, 1);

  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  // TODO

  const { id } = request.params;

  const repository = repositories.find((repository) => repository.id === id);

  if (!repository) {
    return response.status(400).json({ error: 'Repository not found!😢' });
  }

  repository.likes += 1;

  return response.json(repository);


});

module.exports = app;
