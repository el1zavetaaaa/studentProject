import {charactersFactory} from "../factory/charactersFactory.js"
import {characters} from "../entity/charatcers.js"
import {actionsAndAbilitiesFacade} from "../facade/actionsAndAbilitiesFacade.js"


const chrctrs = new charactersFactory();
let thief = chrctrs.createCharacter(characters.thief);

const character = new actionsAndAbilitiesFacade(characters.magician);

console.log(thief);
console.log(character);
character.makeAction();
character.useAbility();
