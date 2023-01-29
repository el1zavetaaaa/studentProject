import {characters, charactersFactory} from "./charactersFactory.js"


const chrctrs = new charactersFactory();
let thief = chrctrs.createCharacter(characters.thief);

console.log(thief)
