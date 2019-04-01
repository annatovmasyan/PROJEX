$(".menu__burger").click(function () {
    $(".navigation").toggleClass("burger__menu");
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// $(window).on('load',function(){
//     modal.style.display = "block";
// });

window.setTimeout(function () {
        modal.style.display = "block";
},2000);


window.setTimeout(function () {
    modal.style.display = "none";
},10000);


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