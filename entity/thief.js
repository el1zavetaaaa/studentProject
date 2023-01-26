class thief{
    health;
    indestructibility;

    constructor() {
        this.health = 100;
        this.indestructibility = true;
    }

    bowShot(){
        this.health -= 25;
    }

    runAway(){
        this.indestructibility = false;
    }
}