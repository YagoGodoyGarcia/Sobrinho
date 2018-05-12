// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
function openModal() {
    modal.style.display = "block";    
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
function myFunction() {
    var x = document.createElement("DIV");
    var t = document.createTextNode("This is a div element.");
    x.setAttribute("class", "card card-3");
    x.appendChild(t);
    document.body.appendChild(x);
}
*/
