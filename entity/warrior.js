export class warrior {
    health;


    constructor() {
        this.health = 200;
    }

    makeAction() {
        console.log("Sword Strike");
        this.health -= 50;
    }

    useAbility() {
        console.log("Protection");
    }
}