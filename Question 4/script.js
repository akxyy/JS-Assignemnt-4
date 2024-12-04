// 4.Make a form with fields name, phone number, place, company name, pin code
// if any of the field is empty on submitting it should show corresponding error messages on below of all the required fields.

// pin code and mobile number fields should not be submitted with non-integer values, if so, then show an error msg stating only numbers are allowed.

// Minimum length of phone number should be 10, otherwise show corresponding error msg below the mobile no. field. 

// On submit of the form, store the details in the local storage and clear the form. (it should stay on the same page don't refresh the page).

// Make a prepopulate button, which when clicked will populate the form with values in the local storage if it exists, otherwise the button will be disabled.

// Note: The page shouldn't refresh on submitting the form in any of the questions and show error messages below the appropriate fields only.4

document.getElementById("traineeDetails").addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const place = document.getElementById("place").value;
    const mobile = document.getElementById("mobile").value;
    const company = document.getElementById("company").value;
    const pin = document.getElementById("pin").value;

    let valid = true;
    const Errordiv1 = document.getElementById("nameErrorBox");
    const Errordiv2 = document.getElementById("placeErrorBox");
    const Errordiv3 = document.getElementById("mobileErrorBox");
    const Errordiv4 = document.getElementById("companyErrorBox");
    const Errordiv5 = document.getElementById("pinErrorBox");

    if (name.length == 0) {
        Errordiv1.textContent = "enter a valid name";
        valid = false;
    } else {
        valid = true;
    }

    if (place.length == 0) {
        Errordiv2.textContent = "Enter a valid Place name";
        valid = false;
    } else {
        valid = true;
    }

    if (mobile.length !== 10) {
        Errordiv3.textContent = "Enter a valid mob no";
        valid = false;
    } else if (!/^\d+$/.test(mobile)) {
        Errordiv3.textContent = "Only numbers are allowed";
    } else {
        valid = true;
    }

    if (company.length == 0) {
        Errordiv4.textContent = "Enter a valid company name";
        valid = false;
    } else {
        valid = true;
    }

    if (pin.length == 0) {
        Errordiv5.textContent = "Enter a valid PIN code";
        valid = false;
    } else if (!/^\d+$/.test(pin)) {
        Errordiv5.textContent = "Only numbers are allowed";
    }
    else {
        valid = true;
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

    function regenerate() {
        const traineedata = localStorage.getItem("traineeDetails");
        if (traineedata) {
            const data = JSON.parse("traineedata");

            document.getElementById("name").value = data.name;
            document.getElementById("place").value = data.place;
            document.getElementById("mobile").value = data.mobile;
            document.getElementById("company").value = data.company;
            document.getElementById("id").value = data.id;

            document.getElementById("prepopulateButton").disabled = true;
        }
    }
});