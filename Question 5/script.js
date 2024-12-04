// 5.Create a form with a text field which when submitted, will change the tab title to whatever is entered, limit the field to 50 characters, otherwise show error message, stay on the same page when submitted(it shouldn't refresh).
document.getElementById("submitForm").addEventListener("submit", function (event) {

    const input = document.getElementById("input").value;
    const error = document.getElementById("error");

    if (input.length == 0) {
        error.textContent = "Enter a valid title";
    }
    else if (input.length > 50) {
        error.textContent = "It is invalid because of the higher amount of letters";
    }
    else {
        document.title = input;
    }
    event.preventDefault();
});