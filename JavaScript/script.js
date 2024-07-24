// Hamburguer manu
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});

// Get the button back to the top:
let mybutton = document.getElementById("myBottonTop");

// When the user scrolls down 60px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}