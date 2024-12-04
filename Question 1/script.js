// Q1.Create a div with background color red, create buttons
// a.to hide the div
// b.to change the background color of the div
// c.to show your basic details on the div, the details should hide/show, on the click.

function toggleDiv() {
    const div = document.getElementById("redBlock");
    if (div.style.display === "block") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}

function changeBackgroundColor() {
    const div = document.getElementById("redBlock");
    if (div.style.backgroundColor == "red") {
        div.style.backgroundColor = "green";
    }
    else {
        div.style.backgroundColor = "red";
    }
}

function showDetails() {
    const div = document.getElementById("basicDetails");
    if (div.style.display == "block") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}