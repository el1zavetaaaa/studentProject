import {charactersFactory} from "../factory/charactersFactory.js"

export class actionsAndAbilitiesFacade {
    typeOfCharacter;
    charsFactory = new charactersFactory();
    character;

    constructor(typeOfCharacter) {
        this.typeOfCharacter = typeOfCharacter;
        this.character = this.charsFactory.createCharacter(typeOfCharacter);
    }

    makeAction() {
        this.character.makeAction();
    }

    useAbility() {
        this.character.useAbility();
    }
}