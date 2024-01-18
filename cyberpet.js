class Cyberpet {
    constructor(name,hunger, thirst, codingProgress) {
        //properties
        this.name = name
        this.hunger = hunger, //hunger stat
        this.thirst = thirst,
        this.codingProgress = codingProgress
    }
    //methods
    
    isAlive() {
    if(this.thirst <= 0){
        console.log("died of thirst")
        this.itDied()
    } 
    else if(this.hunger <= 0){
        console.log("died of thirst")
        this.itDied()
    } 
    else if(this.squish <= 0){
        console.log("died of lack of Squish")
        this.itDied()
        } 
    }

    itDied() {
        document.getElementById("hunger").textContent = "You Died"
        document.getElementById("thirst").textContent = "You Died"
        document.getElementById("codeprogress").textContent = "You Died"
        document.getElementById("squish").textContent = "You Died"
    }
    eats() {
        this.hunger += 10
        this.thirst -= 5
        console.log(`nom nom, hunger is now ${this.hunger}`)
        if (this.hunger > 100) {
            this.hunger = 100 
        }
        if (this.thirst < 0) {
            this.thirst = 0 
        }
        document.getElementById("hunger").textContent = this.hunger
        document.getElementById("thirst").textContent = this.thirst
        document.getElementById("codeprogress").textContent = this.codingProgress
        document.getElementById("squish").textContent = this.squish

        this.isAlive()

    }

    drinks() {
        this.thirst += 20
        this.hunger -= 7
        console.log(`slurp slurp, thirst is now ${this.thirst}`)
        if (this.thirst > 100) {
            this.thirst = 100 
        }
        if (this.hunger < 0) {
            this.hunger = 0 
        }
        document.getElementById("hunger").textContent = this.hunger
        document.getElementById("thirst").textContent = this.thirst
        document.getElementById("codeprogress").textContent = this.codingProgress
        document.getElementById("squish").textContent = this.squish

        this.isAlive()
    }

    codes() {
        this.codingProgress += Math.floor((Math.random() * 10) + 1);
        console.log(`Clickety Clack, your project is now ${this.codingProgress}% done`)
        if (this.codingProgress > 100) {
            this.codingProgress = 100 
        }
        this.hunger -= 5
        this.thirst -= 5
        if (this.thirst < 0) {
            this.thirst = 0 
        }
        if (this.hunger < 0) {
            this.hunger = 0 
        }
        document.getElementById("hunger").textContent = this.hunger
        document.getElementById("thirst").textContent = this.thirst
        document.getElementById("codeprogress").textContent = this.codingProgress
        document.getElementById("squish").textContent = this.squish
        this.isAlive()
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
        if (this.squish > 100) {
            this.squish = 100 
        }
        document.getElementById("hunger").textContent = this.hunger
        document.getElementById("thirst").textContent = this.thirst
        document.getElementById("codeprogress").textContent = this.codingProgress
        document.getElementById("squish").textContent = this.squish

        this.isAlive()
    }
    reset() {
        this.hunger = 100
        this.thirst = 100
        this.codingProgress = 0
        this.squish = 0
        document.getElementById("hunger").textContent = this.hunger
        document.getElementById("thirst").textContent = this.thirst
        document.getElementById("codeprogress").textContent = this.codingProgress
        document.getElementById("squish").textContent = this.squish
    }

}
const newPet = new CutesyCoder("Dave",100,100,0,0)




const petNew = () => {
    const newPet = new CutesyCoder("Dave",100,100,0,0)
}




// document.getElementById("hunger").textContent = this.hunger




// newPet.eats()
// newPet.drinks()
// newPet.codes()
// newPet.codes()
// newPet.cuddlestuffie()
// newPet.reset()