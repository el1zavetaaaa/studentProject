import {warrior} from "./warrior.js"
import {thief} from "./thief.js"
import {magician} from "./magician.js"

export const characters = {
    magician: String("magician"),
    thief: String("thief"),
    warrior: String("warrior")
};
Object.freeze(characters);

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
