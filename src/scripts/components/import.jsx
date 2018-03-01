import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

let EventEmitter = require('wolfy87-eventemitter');

window.ee = new EventEmitter();

let db = [
  {
    "_id": 1,
    categories: "latest, recommended",
    city: "Dubai",
    action: "Music",
    keyword: "Dance, Music",
    imagesrc: "content/music__1.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 5,
    price: "",
    raitingScore: 1165
  },
  {
    "_id": 2,
    categories: "latest, recommended",
    city: "Kazan",
    action: "Shoping",
    keyword: "",
    imagesrc: "content/girl__1.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 1,
    price: "",
    raitingScore: 1165
  },
  {
    "_id": 3,
    categories: "latest, recommended, highlights",
    city: "Moscow",
    action: "Education",
    keyword: "",
    imagesrc: "content/knowledge__1.png",
    name: "Moscow school of JavaScript",
    location: "Kremlin",
    raiting: 2,
    price: "",
    raitingScore: 2215
  },
  {
    "_id": 4,
    categories: "latest",
    city: "Dubai",
    action: "Travel",
    keyword: "Big ban",
    imagesrc: "content/travel__1.png",
    name: "Aliquam quis pulvinar purus",
    location: "Bus trans",
    raiting: 4,
    price: "",
    raitingScore: 365
  },
  {
    "_id": 5,
    categories: "latest, recommended, highlights",
    city: "New York",
    action: "Apartment",
    keyword: "",
    imagesrc: "content/apartment__1.png",
    name: "2 bedroom house for rent in New York",
    location: "Vision Agency",
    raiting: 4,
    price: "$2,990",
    raitingScore: 365
  },
  {
    "_id": 6,
    categories: "latest, recommended",
    city: "London",
    action: "Music",
    keyword: "Dance, Music",
    imagesrc: "content/music__2.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 3,
    price: "",
    raitingScore: 1165
  },
  {
    "_id": 7,
    categories: "latest, recommended, highlights",
    city: "Kazan",
    action: "Apartment",
    keyword: "",
    imagesrc: "content/apartment__2.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 5,
    price: "$3300",
    raitingScore: 1165
  },
  {
    "_id": 8,
    categories: "latest, recommended",
    city: "Moscow",
    action: "Shoping",
    keyword: "",
    imagesrc: "content/girl__2.png",
    name: "Moscow school of JavaScript",
    location: "Kremlin",
    raiting: 1,
    price: "",
    raitingScore: 2215
  },
  {
    "_id": 9,
    categories: "latest, recommended, highlights",
    city: "London",
    action: "Education",
    keyword: "Big ban",
    imagesrc: "content/knowledge__2.png",
    name: "Aliquam quis pulvinar purus",
    location: "Bus trans",
    raiting: 4,
    price: "",
    raitingScore: 365
  },
  {
    "_id": 10,
    categories: "latest, recommended, highlights",
    city: "New York",
    action: "Travel",
    keyword: "",
    imagesrc: "content/travel__2.png",
    name: "2 bedroom house for rent in New York",
    location: "Vision Agency",
    raiting: 0,
    price: "",
    raitingScore: 365
  },
  {
    "_id": 11,
    categories: "latest, recommended",
    city: "Kazan",
    action: "Music",
    keyword: "Dance, Music",
    imagesrc: "content/music__1.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 5,
    price: "",
    raitingScore: 1165
  },
  {
    "_id": 12,
    categories: "latest, recommended",
    city: "Moscow",
    action: "Shoping",
    keyword: "",
    imagesrc: "content/girl__1.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 1,
    price: "",
    raitingScore: 1165
  },
  {
    "_id": 13,
    categories: "latest, recommended, highlights",
    city: "Dubai",
    action: "Education",
    keyword: "",
    imagesrc: "content/knowledge__1.png",
    name: "Moscow school of JavaScript",
    location: "Kremlin",
    raiting: 2,
    price: "",
    raitingScore: 2215
  },
  {
    "_id": 14,
    categories: "latest",
    city: "London",
    action: "Travel",
    keyword: "Big ban",
    imagesrc: "content/travel__1.png",
    name: "Aliquam quis pulvinar purus",
    location: "Bus trans",
    raiting: 4,
    price: "",
    raitingScore: 365
  },
  {
    "_id": 15,
    categories: "latest, recommended, highlights",
    city: "Dubai",
    action: "Apartment",
    keyword: "",
    imagesrc: "content/apartment__1.png",
    name: "2 bedroom house for rent in New York",
    location: "Vision Agency",
    raiting: 4,
    price: "$2,990",
    raitingScore: 365
  },
  {
    "_id": 16,
    categories: "latest, recommended",
    city: "New York",
    action: "Music",
    keyword: "Dance, Music",
    imagesrc: "content/music__2.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 3,
    price: "",
    raitingScore: 1165
  },
  {
    "_id": 17,
    categories: "latest, recommended, highlights",
    city: "Moscow",
    action: "Apartment",
    keyword: "",
    imagesrc: "content/apartment__2.png",
    name: "Party beatch festival 2018",
    location: "Logn Beach",
    raiting: 5,
    price: "$3300",
    raitingScore: 1165
  },
  {
    "_id": 18,
    categories: "latest, recommended",
    city: "Kazan",
    action: "Shoping",
    keyword: "",
    imagesrc: "content/girl__2.png",
    name: "Moscow school of JavaScript",
    location: "Kremlin",
    raiting: 1,
    price: "",
    raitingScore: 2215
  },
  {
    "_id": 19,
    categories: "latest, recommended, highlights",
    city: "New York",
    action: "Education",
    keyword: "Big ban",
    imagesrc: "content/knowledge__2.png",
    name: "Aliquam quis pulvinar purus",
    location: "Bus trans",
    raiting: 4,
    price: "",
    raitingScore: 365
  },
  {
    "_id": 20,
    categories: "latest, recommended, highlights",
    city: "Moscow",
    action: "Travel",
    keyword: "",
    imagesrc: "content/travel__2.png",
    name: "2 bedroom house for rent in New York",
    location: "Vision Agency",
    raiting: 0,
    price: "",
    raitingScore: 365
  }
]
