// 2.Create a select box with numbers 1 to 10,  when selected 9, you should change the selection to 10 and show a message that "9 is fully occupied please select another number", when selected any number other than 9 it should show a message as "you selected 'particular number' " in a div, on hovering the div it should change the background color of the div into a highlighting shade, while the mouse pointer leaves the message area the background color should go back to as before (don't use CSS to attain the hovering functionality)
function selectionIssue(){
    const message=document.getElementById("showMessage");
    const selected_value=document.getElementById("numSelect").value;

    if(selected_value==9){
        message.textContent="sorry 9 Is occupied.Please select another number";
        numSelect.value=10;
    }
    else{
        message.textContent=`You have selected ${selected_value}`;
    }
}