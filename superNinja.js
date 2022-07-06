class Ninja {
    constructor(name, health=0, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(this.name)
    
    showStats = () => console.log(this.name,"Health:", this.health,"Speed:", this.speed,"Strength:", this.strength)
    
    drinkSake = () => this.health += 10
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }
    speakWisdom = () => {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    senseiStats = () => console.log(this.name,"Health:", this.health,"Speed:", this.speed,"Strength:", this.strength,"Wisdom:", this.wisdom)
    
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
superSensei.senseiStats();