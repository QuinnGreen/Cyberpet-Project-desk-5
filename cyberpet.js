class Cyberpet {
    constructor(name,hunger, thirst, codingProgress) {
        //properties
        this.name = name
        this.hunger = hunger, //hunger stat
        this.thirst = thirst,
        this.codingProgress = codingProgress
    }
    //methods
    eats() {
        this.hunger += 10
        this.thirst -= 5
        console.log(`nom nom, hunger is now ${this.hunger}`)
        if (this.hunger > 100) {
            this.hunger = 100 
        }
        isAlive()

    }

    drinks() {
        this.thirst += 20
        this.hunger -= 7
        console.log(`slurp slurp, thirst is now ${this.thirst}`)
        if (this.thirst > 100) {
            this.thirst = 100 
        }
        isAlive()
    }

    codes() {
        this.codingProgress += Math.floor((Math.random() * 10) + 1);
        console.log(`Clickety Clack, your project is now ${this.codingProgress}% done`)
        if (this.codingProgress > 100) {
            this.codingProgress = 100 
        }
        this.hunger -= 5
        this.thirst -= 5
        isAlive()
    }
    
}

class CutesyCoder extends Cyberpet {
    constructor(name, hunger, thirst, codingProgress, squish) {
        super (name, hunger, thirst, codingProgress)
        this.squish = squish
    }
    cuddlestuffie(){
        console.log("So soft")
        this.squish += 50
        isAlive()
    }
    reset() {
        this.hunger = 100
        this.thirst = 100
        this.codingProgress = 0
        this.squish = 0
    }

}

const isAlive = () => {
        if(this.thirst <= 0){
            console.log("died of thirst")
            itDied()
        } 
        else if(this.hunger <= 0){
            console.log("died of thirst")
            itDied()
        } 
        else if(this.squish <= 0){
            console.log("died of lack of Squish")
            itDied()
        } 
}

const itDied = () => {}

const petNew = () => {
    const newPet = new CutesyCoder("Dave",100,100,0,0)
}


document.getElementById

document.getElementById("hunger").textContent = this.hunger



const newPet = new CutesyCoder("Dave",100,100,0,0)

// newPet.eats()
// newPet.drinks()
// newPet.codes()
// newPet.codes()
// newPet.cuddlestuffie()
// newPet.reset()