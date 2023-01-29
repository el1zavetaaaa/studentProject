import {warrior} from "../entity/warrior.js"
import {thief} from "../entity/thief.js"
import {magician} from "../entity/magician.js"
import {characters} from "../entity/charatcers.js"

export class charactersFactory {
    createCharacter(typeOfCharacter) {
        switch (typeOfCharacter) {
            case characters.magician:
                return new magician();
            case characters.warrior:
                return new warrior();
            case  characters.thief:
                return new thief();
        }
    }
}
