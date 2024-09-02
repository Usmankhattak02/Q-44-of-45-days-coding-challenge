
// // Question 44:
// //  Sandwiches: Summarize sandwich orders with varying ingredients.

// // Explain & TIP: Utilizing rest parameters allows functions to accept an indefinite number of arguments,
// //  useful for handling lists of data like sandwich ingredients.

function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
};
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");

// ********************OR

function make_sandwiches(...ingredients:string[]){
    ingredients.forEach(ingredient =>{
        console.log(` your sandwich includes ${ingredient}`)
    });
    
    console.log("enjoy your sandwich!\n");    
};
make_sandwiches("Tomato","cheese","lettuce");
make_sandwiches("mayo","lettuce","garlic");
make_sandwiches("tomato","chilli","turkey");