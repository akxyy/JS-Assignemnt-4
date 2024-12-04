// 6.When control+enter key is pressed show an alert message. 
document.addEventListener("keydown",function(event){
    if(event.ctrlKey && event.key=="Enter"){
        alert("You clicked ctrl+enter key simultaneously");
    }
});