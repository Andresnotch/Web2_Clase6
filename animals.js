//const animals_db = require("./data.json");
const fs = require("fs");
const animals = JSON.parse(fs.readFileSync("./data.json"));

function get(id) {
    return animals.find(animal => animal.id == id);
};

function getByIntakeReason(intakereason) {
    return animals.find(animal => animal.intakereason == intakereason);
};

function getBySpecies(species) {
    return animals.find(animal => animal.species == species);
};

function create(name, age) {
    const id = animals.length + 1;
    animals.push({id, animalname:name, animalage:age});
    return animals[animals.length - 1];
};

function deleteAnimal(id) {
    const index = animals.findIndex(animal => animal.id == id);
    console.log(index);
    animal = animals.slice(index, index + 1);
    console.log(animal);
    return animal;
};

function update(id, age, name) {
    try {
        const animal = animals.find(animal => animal.id == id);
        animal.animalname = name.length == 0 ? animal.animalage: name;
        animal.animalage = age.length == 0 ? animal.animalname: age;
        return {animal, err:null};
    } catch (err) {
        return {err, user: null};
    }
};

module.exports = {
    animals,
    create,
    delete: deleteAnimal, 
    update,
    get,
    getByIntakeReason,
    getBySpecies
};