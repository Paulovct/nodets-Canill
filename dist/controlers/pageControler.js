"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const createMenuObject_1 = require("../helpers/createMenuObject");
const pet_1 = require("../models/pet");
const home = (req, res) => {
    res.render("pages/page", {
        list: pet_1.Pet.getAll(),
        menu: (0, createMenuObject_1.createMenuObject)("all"),
        banner: {
            title: "Todos os animais",
            background: "/images/allanimals.jpg"
        }
    });
};
exports.home = home;
const dogs = (req, res) => {
    res.render("pages/page", {
        list: pet_1.Pet.getFromType("dog"),
        menu: (0, createMenuObject_1.createMenuObject)("dog"),
        banner: {
            title: "Cachorros",
            background: "/images/banner_dog.jpg"
        }
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    res.render("pages/page", {
        list: pet_1.Pet.getFromType("cat"),
        menu: (0, createMenuObject_1.createMenuObject)("cat"),
        banner: {
            title: "Gatos",
            background: "/images/banner_cat.jpg"
        }
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    res.render("pages/page", {
        list: pet_1.Pet.getFromType("fish"),
        menu: (0, createMenuObject_1.createMenuObject)("fish"),
        banner: {
            title: "Peixes",
            background: "/images/banner_fish.jpg"
        }
    });
};
exports.fishes = fishes;
