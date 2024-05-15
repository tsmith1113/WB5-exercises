"use strict";



const toyCategoryDropdown = document.getElementById("toyCategoryDropdown")
const toyList = document.getElementById("toyList")
const toyDetailRow = document.getElementById("toyDetailRow")
const toyName = document.getElementById("toyName")
const toyMaunfacturer = document.getElementById("toyMaunfacturer")
const toyAge = document.getElementById("toyAge")


window.onload = () => {
    toyCategoryDropdown.onchange = onToyCategoryDropdownChange;
    toyList.onchange = onToyListChange;
}

function onToyCategoryDropdownChange(){
    // hide the detail to hide previous results
    hideDetailRow();

    // figure out what value was selected (which category)
    let selectedCategory = toyCategoryDropdown.value;
    console.log(selectedCategory);
    // clear out toyList from previous selection
    toyList.options.length = 0;
   
    // loop through the correct array an add values to the toyList one at a time
    let toysInCategory = getToysForCategory(selectedCategory);
    

console.log(toysInCategory);

toysInCategory.forEach(addToyToToyList)

function addToyToToyList(toy){
    let newOption = document.createElement("option");
    newOption.value = toy.Toyname;
    newOption.innerHTML = toy.Toyname;
    toyList.appendChild(newOption);
}
}

function getToysForCategory(categoryCode){
if(categoryCode == "action_figures"){
        return toys.Toys["Action Figures"];
    }
    
    else if(categoryCode == "educational_toys"){
        return toys.Toys["Educational Toys"];
    }
    
    else if(categoryCode == "outdoor_toys"){
        return toys.Toys["Outdoor Toys"];
    }
    
    else{
        console.log("unrecongized category")
    }

    return [];
}

function getToyByName(toyName){
    let selectedCategory = toyCategoryDropdown.value;
    let toys = getToysForCategory(selectedCategory);

    return toys.find((toy) => toy.name == toyName);
    
}

function onToyListChange(){
    
    let selectedToyName = toyList.value;
    console.log(selectedToyName);
    // look up selected toy
    let selectedToy = getToyByName(selectedToyName);
   
    //set detail row element to represent this toy
    toyName.innerHTML = selectedToy.name;
    toyMaunfacturer.innerHTML = selectedToy.manufacturer;
    toyAge.innerHTML = selectedToy.age_range;

     // show deatil row
    showDeatilRow();
}

function showDeatilRow(){
    toyDetailRow.style.display = "block";
}

function hideDetailRow(){
toyDetailRow.style.display = "none";
toyName.innerHTML = " ";
    toyMaunfacturer.innerHTML = " ";
    toyAge.innerHTML = " ";
}