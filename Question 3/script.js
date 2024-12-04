// 3.Consider an array with name of 10 programming languages, make 10 buttons by iterating this array, when clicked on each button the name of the programming language should be shown in a corresponding div. 
const languages = ["Python", "JavaScript", "C", "Java", "Kotlin", "C++", "Go", "Ruby", "PHP", "Swift"];

function createButton() {
    const buttons = document.getElementById("buttons");

    languages.forEach((item) => {
        const button = document.createElement("button");
        button.textContent = item;
        button.onclick = function () {
            displayLanguage(item);
        }
        buttons.append(button);
    })
}

function displayLanguage(item) {
    const output = document.getElementById("output");
    output.textContent = `You have selected ${item}`;
}

createButton();