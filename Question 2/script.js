function selectionIssue() {
    const message = document.getElementById("showMessage");
    const selected_value = document.getElementById("numSelect").value;

    if (selected_value == 9) {
        message.textContent = "Sorry, 9 is fully occupied. Please select another number.";
        document.getElementById("numSelect").value = 10;
    } else {
        message.textContent = `You have selected ${selected_value}`;
    }

    message.onmouseover = function() {
        message.style.backgroundColor = "#ffeb3b";
    };

    message.onmouseout = function() {
        message.style.backgroundColor = ""; 
    };
}
