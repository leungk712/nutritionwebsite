const nutritionFactsDiv = document.querySelector('nutrition-facts');
const nutritionFactsContent = document.querySelector('.nutrition-facts-content');
let dayInMilliseconds = 1000 * 60 * 60 * 24;

const nutritionFactArray = [
    'Did you know...',
    'Hello...',
    'Whatsup...',
    'How are you?...',
]

function returnRandomFact(array){
    let nutritionFact = Math.floor(Math.random() * array.length);
    return array[nutritionFact];
}

function setIntervalAndExecute(fn, t) {
    fn();
    return(setInterval(fn, t));
}

setIntervalAndExecute(showFact, dayInMilliseconds);

function showFact(){
    nutritionFactsContent.textContent = returnRandomFact(nutritionFactArray);
}

