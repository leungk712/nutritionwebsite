const nutritionFactsDiv = document.querySelector('nutrition-facts');
const nutritionFactsContent = document.querySelector('.nutrition-facts-content');
let dayInMilliseconds = 1000 * 60 * 60 * 24;
let thirtySeconds = 1000 * 30;

const nutritionFactArray = [
    'It is a myth that all carbohydrates are unhealthy! ',
    'Weight loss goes beyond just calories in and calories out. There are biochemical and psychological factors as well.',
    '1 cup of chickpeas (garbanzo beans) contains about 14 grams of protein and 12 grams of fiber!',
    'Antioxidants can be found in Vitamin C and Vitamin E foods.',
    'Certain foods such as fried fast food, cakes, cookies, pies can still have trans fats!',
    'Omega-3 fatty acid sources: salmon, mackerel, cod, oysters, tuna, flaxseed, seaweed, walnuts, edamame',
]

/* Random generator from facts array */

function returnRandomFact(array){
    let nutritionFact = Math.floor(Math.random() * array.length);
    return array[nutritionFact];
}

/* Set interval for random fact to display */

function factInterval(fn, t) {
    fn();
    return(setInterval(fn, t));
}

factInterval(showFact, thirtySeconds);

/* Display fact in nutrition span */

function showFact(){
    nutritionFactsContent.textContent = returnRandomFact(nutritionFactArray);
}

