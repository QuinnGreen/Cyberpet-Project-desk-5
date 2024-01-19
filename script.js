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


















    // if (currentSelection === "c" && selectedItem.id  === "selL")  {

    // const currentSelection = "l";   

    //      2L Moves 3 left & under, 1 right and over, which shows 1 

    // document.getElementById(`pet3`).style.zIndex = "1";
    // document.getElementById(`pet3`).style.left = "-300px";
    // document.getElementById(`pet1`).style.left = "300px";
    // document.getElementById(`pet1`).style.zIndex = "3";

    // document.getElementById(`selL`).style.zIndex = "-1";


    //     console.log(currentSelection);

    // } else if (currentSelection === "c" && selectedItem.id === "selR") {

    // const currentSelection = "r";   


    //      2R Moves 1 right and under, 3 left and over, which shows 3

    // document.getElementById(`pet1`).style.left = "300px";
    // document.getElementById(`pet1`).style.zIndex = "1";
    // document.getElementById(`pet3`).style.zIndex = "3";
    // document.getElementById(`pet3`).style.left = "-300px";
    // document.getElementById(`selR`).style.zIndex = "-1";

    //     console.log(currentSelection);

    // } else if (currentSelection === "r" && selectedItem.id === "selL") {

    //      1R Moves 1 left & under, 3 left & under, which shows 2 

    // document.getElementById(`pet1`).style.zIndex = "-1";
    // document.getElementById(`pet1`).style.left = "0px";
    // document.getElementById(`pet3`).style.zIndex = "-1";
    // document.getElementById(`pet3`).style.left = "-300px";

    //     console.log(currentSelection);

    // } else if (currentSelection === "l" && selectedItem.id === "selR") {
       
    //      3L Moves 3 left & under, 1 right & under, which shows 2 

    // document.getElementById(`pet3`).style.zIndex = "-1";
    // document.getElementById(`pet3`).style.left = "0px";  

    // document.getElementById(`pet1`).style.zIndex = "-1";
    // document.getElementById(`pet1`).style.left = "300px";     

    //     console.log(`3L selected`);

    // } else if (selectedItem.id  === "selector") {

      
    //     let test = document.getElementById((selectedItem.id));
    //     let parentDiv = test.parentDiv;

    //     console.log(parentDiv);

    //     const lookForPet = document.getElementById(id);
    //     console.log(lookForPet);
    //     const lookDeeperForPet = document.getElementById(`petName`);
    //     console.log(lookDeeperForPet);

    // } else return false;
};
