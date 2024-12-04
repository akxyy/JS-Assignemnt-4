// 4.Make a form with fields name, phone number, place, company name, pin code
// if any of the field is empty on submitting it should show corresponding error messages on below of all the required fields.

// pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.

// Minimum length of phone number should be 10, otherwise show corresponding error msg below the mobile no. field. 

// On submit of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).

// Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise the button will be disabled.

// Note: The page shouldn't refresh on submitting the form in any of the questions and show error messages below the appropriate fields only.

document.getElementById("traineeDetails").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const place = document.getElementById("place").value;
    const mobile = document.getElementById("mobile").value;
    const company = document.getElementById("company").value;
    const pin = document.getElementById("pin").value;

    let valid = true;

    document.getElementById("nameErrorBox").textContent = "";
    document.getElementById("placeErrorBox").textContent = "";
    document.getElementById("mobileErrorBox").textContent = "";
    document.getElementById("companyErrorBox").textContent = "";
    document.getElementById("pinErrorBox").textContent = "";

    if (name.length === 0) {
        document.getElementById("nameErrorBox").textContent = "Enter a valid name";
        valid = false;
    }

    if (place.length === 0) {
        document.getElementById("placeErrorBox").textContent = "Enter a valid place name";
        valid = false;
    }

    if (mobile.length !== 10) {
        document.getElementById("mobileErrorBox").textContent = "Enter a valid mobile number";
        valid = false;
    } else if (!/^\d+$/.test(mobile)) {
        document.getElementById("mobileErrorBox").textContent = "Only numbers are allowed in mobile number";
        valid = false;
    }

    if (company.length === 0) {
        document.getElementById("companyErrorBox").textContent = "Enter a valid company name";
        valid = false;
    }

    if (pin.length === 0) {
        document.getElementById("pinErrorBox").textContent = "Enter a valid PIN code";
        valid = false;
    } else if (!/^\d+$/.test(pin)) {
        document.getElementById("pinErrorBox").textContent = "Only numbers are allowed in PIN code";
        valid = false;
    }

    function clearForm() {
        document.getElementById("traineeDetails").reset();
    }

    if (valid) {
        const traineeDetails = { name, place, mobile, company, pin };
        localStorage.setItem("traineeDetails", JSON.stringify(traineeDetails));
        clearForm();
        alert("Form Submitted");
        document.getElementById("prepopulateButton").disabled = false;
    }

});

function regenerate() {
    const traineeData = localStorage.getItem("traineeDetails");
    if (traineeData) {
        const data = JSON.parse(traineeData);
        document.getElementById("name").value = data.name;
        document.getElementById("place").value = data.place;
        document.getElementById("mobile").value = data.mobile;
        document.getElementById("company").value = data.company;
        document.getElementById("pin").value = data.pin;
        document.getElementById("prepopulateButton").disabled = true;
    }
}