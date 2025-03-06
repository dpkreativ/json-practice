const data = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;

const superHeroes = JSON.parse(data);

console.log(superHeroes);

console.log(superHeroes.homeTown);
console.log(superHeroes["members"][1]["powers"][2]);

/**
 * Use bracket notation to access the following details about "Eternal Flame".
 * - Superhero's name
 * - Superhero's top three powers (hint: use slice method)
 */
console.log(superHeroes["members"][2]["name"]);
console.log(superHeroes["members"][2]["powers"]["slice"](0, 3));

const newData = `
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]`;

const newSupes = JSON.parse(newData);
console.log(newSupes);

const supeName = newSupes[0].name;
const supePowers = newSupes[0].powers[2];

console.log
("I love Madame Uppercut because she has Superhuman reflexes");

const concatExample = "I love " + supeName + 
" because she has " + supePowers;

console.log(concatExample);

const tsExample = `I love ${supeName} because she has ${supePowers}`;

console.log(tsExample);

const classArray = [
  {
    id: 1,
    firstName: "Divine",
    lastName: "Onuwa",
    laptop: "HP EliteBook",
  },
  {
    id: 2,
    firstName: "Divine",
    lastName: "Chizoba",
    laptop: "Dell",
  },
  {
    id: 3,
    firstName: "Divine",
    lastName: "Odinaka",
    laptop: "MacBook Pro",
  },
];

const getDivineOnuwaByUniqueIdentifier = classArray.find((el) => el.id === 2);
