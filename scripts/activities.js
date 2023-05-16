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

const activityName = document.getElementById("activityName");
const activityId = document.getElementById("activityId");
const activityDesc = document.getElementById("activityDesc");
const activityLocation = document.getElementById("activityLocation");
const activityPrice = document.getElementById("activityPrice");

window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;
    activitySelect.onchange = onActivitySelectChange;

    hideActivitySelect();
    hideActivityDetail();

};


function onCategorySelectChange() {
    let currentCategory = categorySelect.value;

    if (currentCategory == "") {
        hideActivitySelect();

    }
    else {
        console.log(`The ${currentCategory} value has been selected for Category.`)

        //populate Activity List with only activities that belong to this Category.
        populateActivitySelect(activities, currentCategory);

        //Display the Activity Selection area so that an activity can be selected.
        showActivitySelect();

    }

    hideActivityDetail();



}

//ASSIGNMENT TODO:
// Re-write the below function so that it uses a new 
// function named getActivitiesInCategory (defined and created below)
// to get an array with only the activities that need to be listed.
// then loop through those activities and list them.


function getActivitiesInCategory(fullListOfActivities, category) {
    let result = [];

    //This is the solution using an index (i)

    // for (let i = 0; i < fullListOfActivities.length; i++){
    //     if(fullListOfActivities[i].category == category){
    //         result.push(fullListOfActivities[i])
    //     } 
    // }


    // for (let i = 0; i < fullListOfActivities.length; i++){
    //     let thisActivity = fullListOfActivities[i];
    //     if(thisActivity.category == category){
    //         result.push(thisActivity)
    //     } 
    // }

    //This is the solution without using an index.

    for (let thisActivity of fullListOfActivities) {
        if (thisActivity.category == category) {
            result.push(thisActivity)
        }
    }

    // Return the result that now contains each of the values that we identified as a match.
    return result;
}

function populateActivitySelect(fullListOfActivities, selectedCategory) {
    // This function should populate the second dropdown with only the 
    // activities that exist in the selected category.

    activitySelect.innerHTML = "";

    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    let activitiesIsCategory = getActivitiesInCategory(fullListOfActivities, selectedCategory);

    for (let thisActivity of activitiesIsCategory) {
        let theOption = new Option(thisActivity.name, thisActivity.id);
        activitySelect.appendChild(theOption);
        console.log("The new option has been added to the dropdown")
    }

}


function populateActivitySelectOld(fullListOfActivities, selectedCategory) {
    // This function should populate the second dropdown with only the 
    // activities that exist in the selected category.

    activitySelect.innerHTML = "";

    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    for (let thisActivity of fullListOfActivities) {
        if (thisActivity.category == selectedCategory) {

            let theOption = new Option(thisActivity.name, thisActivity.id);
            activitySelect.appendChild(theOption);
            console.log("The new option has been added to the dropdown")
        }
    }

}



function onActivitySelectChange() {
    // populate all of the fields in the activity detail area with values that pertain
    // to the selected activity

    // get the id of the selected activity:

    let selectedActivityId = activitySelect.value;

    if (selectedActivityId == "") {
        hideActivityDetail();

    }
    else {

        let selectedActivity = getActivityById(selectedActivityId);

        activityName.innerHTML = selectedActivity.name;
        activityId.innerHTML = selectedActivity.id;
        activityDesc.innerHTML = selectedActivity.description;
        activityLocation.innerHTML = selectedActivity.location;
        activityPrice.innerHTML = selectedActivity.price;



        // Display the activity detail row
        showActivityDetail();

        if (selectedActivity.price > 0) {
            showCheckout();
        }
        else {
            hideCheckout();
        }

    }

}

function getActivityById(id) {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity;
        }

    }
}


function hideActivityDetail() {
    activityDetailRow.style.display = 'none';
    hideCheckout();
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