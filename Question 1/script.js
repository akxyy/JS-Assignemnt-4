// Q1.Create a div with background color red, create buttons
// a.to hide the div
// b.to change the background color of the div
// c.to show your basic details on the div, the details should hide/show, on the click.

function toggleDiv() {
    const div = document.getElementById("redBlock");
    const style=window.getComputedStyle(div);
    if (style.display === "block") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}

function changeBackgroundColor() {
    const div = document.getElementById("redBlock");
    const style=window.getComputedStyle(div);
    if (style.backgroundColor == "rgb(255, 0, 0)"){
        div.style.backgroundColor = "green";
    }
    else {
        div.style.backgroundColor = "red";
    }
}

function showDetails() {
    const div = document.getElementById("basicDetails");
    const style=window.getComputedStyle(div);
    if (style.display === "block") {
        div.style.display = "none";
    }
    else {
        div.style.display = "block";
    }
}
