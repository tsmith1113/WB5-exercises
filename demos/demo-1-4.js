"use strict";

let menu = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},

   ];
   // find a single element matching a condition
   let searchId = 3;
   let matching = null;
   let numItems = menu.length;


// old way to loop
//    for(let i = 0; i < numItems; i++) {
//     if (menu[i].id == searchId) {
//     matching = menu[i];
//     break; // you've found it! stop looking!
//     }
//    }

   //new way to loop
//    for(let menuObject of menu){
//     if(menuObject.id == searchId){
//         matching = menuObject;
//         break;
//     }
//    }

/// without the function
matching = menu.find((m) => m.id == searchId);

   if (matching != null) {
    console.log(matching.item + " costs $" + matching.price);
   }
   else {
    console.log("Item " + searchId + " not found!");
   }

//    with the function
//    function getMenuObjectById(menuObjects, id){
//     for( let menuObject of menuObjects){
//         if(menuObject.id == id){
//                 return menuObjects;
//         }
//     }
//     return null;
//    }

