// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById('fish-btn');
let charSelect = document.getElementById('character-select');
let resultImg = document.getElementById('result-img');
let numCodSpan = document.getElementById('num-cod');
let numSalmonSpan = document.getElementById('num-salmon');
let numTropicalSpan = document.getElementById('num-tropical');
let numPufferSpan = document.getElementById('num-puffer');

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener('click', fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  //check Character
  let character = charSelect.value;
  if(character === "steve"){
    catchFish(0.7, 0.9, 0.95);
  }else if(character === "alex"){
    catchFish(0.1, 0.2, 0.5);
  }else if(character ==="villager"){
    catchFish(0.25, 0.50, 0.75);
  }
}


//catch fish Function
function catchFish(Prob, Prob2, Prob3){
    let randNum = Math.random();
    if(randNum < Prob){
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = "img/Raw-Cod.png";
    } else if(randNum < Prob2){
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = "img/Raw-Salmon.png";
    } else if(randNum < Prob3){
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = "img/Tropical-Fish.png";
    } else{
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = "img/Pufferfish.png"
    }
}