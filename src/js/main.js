
let a = 0;

function openBlock(){
    const alertJS = document.getElementById("alert"); //activate the block
    alertJS.style.display = "block";


    const alertBlockJS = document.getElementById("alert_block");

    //block the closing of the window in case of a click on it
    alertBlockJS.addEventListener("click", function(event){
        event.stopPropagation();
    }, false);


    alertJS.addEventListener("click", function(event){
        alertJS.style.display = "none";
    }, false);

    //activating the button to close the window and reset cookies
    if(a >= 5){
        const cancelButton = document.getElementById("cancel_button");
        cancelButton.style.display = "block";

        cancelButton.addEventListener("click", function(){
            a = 0;
            cancelButton.style.display = "none";
            alertJS.style.display = "none";
            
            localStorage.clear('user'); // reset cookies
        }, false);
    }
}
//Сode start
function openWindow(){
    a = Number(localStorage.getItem('user')); //assign the stored value to the variable in cookies
    a++;
    localStorage.setItem('user', a.toString()); //save new value in cookies
    document.getElementById("items").innerHTML = localStorage.getItem('user');
    openBlock();
}