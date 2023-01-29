export class thief {
    health;
    indestructibility;

    constructor() {
        this.health = 100;
        this.indestructibility = true;
    }

    makeAction() {
        console.log("BowShot");
        this.health -= 25;
    }

    useAbility() {
        console.log("Run Away");
        this.indestructibility = false;
    }
}