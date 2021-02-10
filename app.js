const express = require('express');
const path = require('path');
const animals = require("./animals.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/animals", (req, res) => {
    const {orderBy} = req.query;
    res.send({animals, orderBy});
});

app.get("/animals/:id", (req, res) => {
    const {id} = req.params;

    res.send(animals.get(id));
});

app.get("/animals/:species", (req, res) => {
    const {species} = req.params;

    res.send(animals.getBySpecies(id));
});

app.get("/animals/:intakereason", (req, res) => {
    const {intakereason} = req.params;

    res.send(animals.getByIntakeReason(intakereason));
});

app.post("/animals", (req, res) => {
    const {name, age} = req.body;
    const animal = animals.create(name, age);
    res.send(animal);
});

app.put("/animals/:id", (req, res, next) => {
    const {id} = req.params;
    const {name = "", age = ""} = req.body;
    const {animal, err} = animals.update(id, age, name);
    if (err) { return next() };
    res.send(animal);
});

app.delete("/animals/:id", (req, res) => {
    const {id} = req.params;

    res.send(animals.delete(id));
});

app.listen(3000, () => console.log('Listening on port 3000'));
