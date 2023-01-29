export class magician {
    health;

    constructor() {

        this.health = 80;
    }

    makeAction() {
        console.log("FireBall");
        this.health -= 100;
    }

    useAbility() {
        console.log("Bewitch");
    }
}