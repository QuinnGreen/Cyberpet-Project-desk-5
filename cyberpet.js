class Cyberpet {
    constructor(name,hunger, thirst, codingProgress) {
        //properties
        this.name = name
        this.hunger = hunger, //hunger stat
        this.thirst = thirst,
        this.codingProgress = codingProgress

        // Set up a timer to decrease hunger over time
        setInterval(() => {
            this.decreaseStatsOverTime();
            
        }, 1000); // Adjust the interval as needed (e.g., every 1000 milliseconds)
    }
    //methods
    
    decreaseStatsOverTime() {
        // Adjust the value by which stats decreases over time
        const decreaseAmountH = 2;
        const decreaseAmountT = 5;
        const decreaseAmountS = 1;
        const decreaseAmountSl = 1;
        const decreaseAmountTh = 1;

        // Decrease stats
        this.hunger -= decreaseAmountH;
        this.thirst -= decreaseAmountT;
        this.squish -= decreaseAmountS;
        this.sleep -= decreaseAmountSl;
        this.think -= decreaseAmountTh;

        // Ensure hunger doesn't go below 0
        // if (this.hunger < 0) {
        //     this.hunger = 0;
        // }

        // Update the  UI
        this.updateStats()
       
        this.isAlive();
    }
    
    updateStats(){
        
        document.getElementById("hunger").textContent = this.hunger
        document.getElementById("thirst").textContent = this.thirst
        document.getElementById("codeprogress").textContent = this.codingProgress
        document.getElementById("varStatValue").textContent = this.squish || this.sleep || this.thinking || "";
    }

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
        document.getElementById("varStatValue").textContent = "You Died"
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
        this.updateStats()

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
        this.updateStats()

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
        this.updateStats()
        this.isAlive()
    }
    
    reset() {
        this.hunger = 100
        this.thirst = 100
        this.codingProgress = 0
        this.squish = 100
        this.updateStats()
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
        this.updateStats()

        this.isAlive()
    }
}
class SleepyCoder extends Cyberpet {
    constructor(name, hunger, thirst, codingProgress, sleep) {
        super (name, hunger, thirst, codingProgress)
        this.sleep = sleep
    }
    coffee(){
        console.log("Glug Glug")
        this.sleep += 50
        if (this.sleep > 100) {
            this.sleep = 100 
        }
        this.updateStats()

        this.isAlive()
    }
}

class ThinkyCoder extends Cyberpet {
    constructor(name, hunger, thirst, codingProgress, thinking) {
        super (name, hunger, thirst, codingProgress)
        this.thinking = thinking
    }
    think(){
        console.log("big brain time")
        this.thinking += 50
        if (this.thinking > 100) {
            this.thinking = 100 
        }
        this.updateStats()

        this.isAlive()
    }
}
createNewCutePet = () => {
    var nameInput = document.getElementById("nameInput1").value;
    document.getElementById("nameC").textContent = nameInput;
    newPet = new CutesyCoder(nameInput, 100, 100, 0, 100);
    newPet.updateStats();
    document.getElementById("nameC").textContent = nameInput
    document.getElementById("varStat").textContent = "Squish"
}
createNewThinkyPet = () => {
    var nameInput = document.getElementById("nameInput2").value;
    document.getElementById("nameT").textContent = nameInput;
    newPet = new ThinkyCoder(nameInput, 100, 100, 0, 100);
    newPet.updateStats();
    document.getElementById("nameT").textContent = nameInput
    document.getElementById("varStat").textContent = "Thinking"
}
createNewSleepyPet = () => {
    var nameInput = document.getElementById("nameInput3").value;
    document.getElementById("nameS").textContent = nameInput;
    newPet = new SleepyCoder(nameInput, 100, 100, 0, 100);
    newPet.updateStats();
    document.getElementById("nameS").textContent = nameInput
    document.getElementById("varStat").textContent = "Sleep"
}
// const newPet = new CutesyCoder(nameInput,100,100,0,100)









// document.getElementById("hunger").textContent = this.hunger




// newPet.eats()
// newPet.drinks()
// newPet.codes()
// newPet.codes()
// newPet.cuddlestuffie()
// newPet.reset()