const flashcards = [
    { term: "HTML", definition: "HyperText Markup Language" },
    { term: "CSS", definition: "Cascading Style Sheets" },
    { term: "JavaScript", definition: "Programming language of the web" }
];

// You can use flashcards.length to get the length of the array

// These two variables will come in handy
let currentIndex = 0;
let showingTerm = true;

// Start with this function to simply display the card
function displayCard() {
  
    if(showingTerm == true){
        getContents.innerText = flashcards[currentIndex].term

    }

    else{
        getContents.innerText = flashcards[currentIndex].definition
    }

}

// The rest of the code you will write is apart of event listeners

//switching between def and term
let getContents = document.getElementById("card-content")
getContents.addEventListener("click", () => {
    if(showingTerm){
        showingTerm = false
         console.log(`hi`)
    }
    else{
        showingTerm = true
         console.log(`hello`)
    }

    displayCard() //recalling the method
    
  
    

})

//nextButton
let nextButton = document.getElementById("next-btn")
nextButton.addEventListener("click", () => {
    if(currentIndex == flashcards.length-1){
        currentIndex = 0
    }

    else {
        currentIndex++
    }

    displayCard() //recalling the method
    
})

//prevButton
let prevButton = document.getElementById("prev-btn")
prevButton.addEventListener("click", () => {
    if(currentIndex == 0){
        currentIndex = flashcards.length-1
    }
    else{
        currentIndex--
    }

    displayCard() //recalling the method
})

//adding terms
let inputTerm = document.getElementById("new-term")
let inputDef = document.getElementById("new-definition")



let addButton = document.getElementById("add-card-btn")
addButton.addEventListener("click", () => {
    let newTerm = inputTerm.value
    let newDef = inputDef.value  
    flashcards.push({term: newTerm, definition: newDef });
    currentIndex = flashcards.length-1
    inputTerm.value = "";
    inputDef.value = "";


    displayCard() //recalling the method
})



 
window.onload = displayCard;
 

