class Cyberpet {
    constructor(hunger, thirst, codingProgress) {
        //properties
        this.hunger = hunger,
        this.thirst = thirst,
        this.codingProgress = codingProgress
    }
    //methods
    eats() {
        this.hunger += 10
        this.thirst -= 5
        console.log(`num num, hunger is now ${this.hunger}`)
    }

    drinks() {
        this.thirst += 20
        this.hunger -= 7
        console.log(`slurp slurp, thirst is now ${this.thirst}`)
    }

    codes() {
        this.codingProgress += Math.floor((Math.random() * 10) + 1);
        console.log(`Clickety Clack, your project is now ${this.codingProgress}% done`)
    }
}

class CutesyCoder extends Cyberpet {
    constructor(hunger, thirst, codingProgress, squish) {
        super (hunger, thirst, codingProgress)
        this.squish = squish
    }
    cuddlestuffie(){
        console.log("So soft")
        this.squish += 50
    }

}

const newPet = new CutesyCoder(100,100,0,0)

newPet.eats()
newPet.drinks()
newPet.codes()
newPet.codes()
newPet.cuddlestuffie()