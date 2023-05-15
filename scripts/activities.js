"use strict";

console.log("Loading activities.js");

// ESAMPLE ACTIVITY:
// category: "Adventures", 
// id: "A101", 
// name: "Valley Hot Air Balloons", 
// description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
// location: "121 S. Main Street",
// price: 265.00 

const activityDetailRow = document.getElementById("activityDetailRow");
const paymentDetailRow = document.getElementById("paymentDetailRow");
const activitySelectionRow = document.getElementById("activitySelectionRow");

const categorySelect = document.getElementById("categorySelect");
const activitySelect = document.getElementById("activitySelect");

window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;
    activitySelect.onchange = onActivitySelectChange;

    hideActivitySelect();
    hideActivityDetail();
    hideCheckout();
};


function onCategorySelectChange(){
    let currentCategory = categorySelect.value;
    console.log(`The ${currentCategory} value has been selected for Category.`)

    //populate Activity List with only activities that belong to this Category.
    populateActivitySelect(currentCategory);

    //Display the Activity Selection area so that an activity can be selected.
    showActivitySelect();

}


function populateActivitySelect(selectedCategory){
    // This function should populate the second dropdown with only the 
    // activities that exist in the selected category.

    // todo...
}

function onActivitySelectChange(){
    // populate all of the fields in the activity detail area with values that pertain
    // to the selected activity

    // todo ...

    // Display the activity detail row
    showActivityDetail();

    // IF (the cost of this activity is > 0 )
    // THEN showcheckout()
    // otherwise hideCheckout()
}


function hideActivityDetail() {
    activityDetailRow.style.display = 'none';
}

function showActivityDetail() {
    activityDetailRow.style.display = 'block';
}


function hideCheckout() {
    paymentDetailRow.style.display = 'none';
}

function showCheckout() {
    paymentDetailRow.style.display = 'block';
}

function hideActivitySelect() {
    activitySelectionRow.style.display = "none";
}

function showActivitySelect() {
    activitySelectionRow.style.display = "block";
}