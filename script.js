const pet1 = document.getElementById(`pet1`);
const pet2 = document.getElementById(`pet2`);
const pet3 = document.getElementById(`pet3`);
const petSelector = document.getElementById(`selectorCont`);

let currentSelection = "c";


petSelector.addEventListener("click", (e) => {
    
    const a = e.target;
    const b= a.id;
    doThing(b)
    console.log(b);
})

const doThing = (id) => {

    const selectedItem = document.getElementById(id)

    if (selectedItem.id === "selector") {
        document.getElementById(`selectorCont`).style.display = "none";
    } else;

    switch(true) {
        case currentSelection === "c" && selectedItem.id === "selL":

            console.log(`GO TO PET 1 FROM PET 2`);

            pet1.style.left = "830px";
            pet1.style.zIndex = "1";

            pet2.style.zIndex = "-1";
            pet2.style.left = "-830px";  

            document.getElementById(`selL`).style.zIndex = "-1";

            currentSelection = "l";   

        break;

        case currentSelection === "c" && selectedItem.id === "selR":

            pet2.style.zIndex = "-1";
            pet2.style.left = "830px";

            pet3.style.zIndex = "1";
            pet3.style.left = "-830px";

            document.getElementById(`selR`).style.zIndex = "-1";

            currentSelection = "r";   

            break;

            case currentSelection === "l" && selectedItem.id === "selR":

            pet1.style.zIndex = "-1";
            pet1.style.left = "-830px";

            pet2.style.zIndex = "1";
            pet2.style.left = "0px";    

            document.getElementById(`selL`).style.zIndex = "1";
            document.getElementById(`selR`).style.zIndex = "1";

            currentSelection = "c";   

            break;

            case currentSelection === "r" && selectedItem.id === "selL":

            pet2.style.zIndex = "1";
            pet2.style.left = "0px";

            pet3.style.zIndex = "-1";
            pet3.style.left = "830px";

            document.getElementById(`selL`).style.zIndex = "1";
            document.getElementById(`selR`).style.zIndex = "1";

            currentSelection = "c";   

            break;

    };
}


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
           
            // this.isAlive();
        }
        
        updateStats(){
            
            let hungerBar = document.getElementById("eatProg")
            hungerBar.style.width = this.hunger+ "px"
            let thirstBar = document.getElementById("drinkProg")
            thirstBar.style.width = this.thirst+ "px"
            let codeBar = document.getElementById("codeProg")
            codeBar.style.width = this.codingProgress+ "px"
            let varBar = document.getElementById("varProg")
            varBar.style.width = this.squish+ "px"

            if (this.thirst > 100) {
                this.thirst = 100 
            }
            if (this.hunger > 100) {
                this.hunger = 100 
            }
            if (this.thirst < 0) {
                this.thirst = 0 
            }
            if (this.hunger < 0) {
                this.hunger = 0 
            }
            // document.getElementById("codeprogress").textContent = this.codingProgress
            // document.getElementById("varStatValue").textContent = this.squish || this.sleep || this.thinking || "";
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
            let hungerBar = document.getElementById("eatProg")
            hungerBar.style.width = "0px"
            let thirstBar = document.getElementById("drinkProg")
            thirstBar.style.width = "0px"
            let codeBar = document.getElementById("codeProg")
            codeBar.style.width = "0px"
            let varBar = document.getElementById("varProg")
            varBar.style.width = "0px"
            let a = document.getElementById("infoCont").textContent
            a = "itDied"
        }
        eats() {
            this.hunger += 10
            this.thirst -= 2
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
            this.thirst += 10
            this.hunger -= 2
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
            this.hunger -= 0
            this.thirst -= 0
            if (this.thirst < 0) {
                this.thirst = 0 
            }
            if (this.hunger < 0) {
                this.hunger = 0 
            }
            this.updateStats()
            this.isAlive()
            if (this.codingProgress == 100) {
                console.log("testproject100");
                let infoCont = document.getElementById("infoCont");
                let currentProjectsFinished = parseInt(infoCont.textContent.replace("Projects Finished =", "").trim()) || 0;
                let newProjectsFinished = currentProjectsFinished + 1;
                infoCont.textContent = "Projects Finished = " + newProjectsFinished;
                this.codingProgress = 0;
            }
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
        // var nameInput = document.getElementById("nameInput1").value;
        // document.getElementById("nameC").textContent = nameInput;
        newPet = new CutesyCoder("nameInput", 100, 100, 0, 100);
        newPet.updateStats();
        // document.getElementById("nameC").textContent = nameInput
        // document.getElementById("varStat").textContent = "Squish"
    }
    createNewThinkyPet = () => {
        // var nameInput = document.getElementById("nameInput2").value;
        // document.getElementById("nameT").textContent = nameInput;
        newPet = new ThinkyCoder("nameInput", 100, 100, 0, 100);
        newPet.updateStats();
        // document.getElementById("nameT").textContent = nameInput
        // document.getElementById("varStat").textContent = "Thinking"
    }
    createNewSleepyPet = () => {
        // var nameInput = document.getElementById("nameInput3").value;
        // document.getElementById("nameS").textContent = nameInput;
        newPet = new SleepyCoder("nameInput", 100, 100, 0, 100);
        newPet.updateStats();
        // document.getElementById("nameS").textContent = nameInput
        // document.getElementById("varStat").textContent = "Sleep"
    }

    let drink = document.getElementById("drink");
    drink.addEventListener("click", function() {
        newPet.drinks();
        
});

    let eat = document.getElementById("eat");
    eat.addEventListener("click", function() {
        newPet.eats();
        
});

    let code = document.getElementById("code");     
    code.addEventListener("click", function() {
        newPet.codes();
        
});

    let varBar = document.getElementById("var");     
    varBar.addEventListener("click", function() {
         newPet.cuddlestuffie();
    
});


