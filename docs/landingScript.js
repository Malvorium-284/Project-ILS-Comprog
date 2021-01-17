
window.onload = function() {
    $(this).scrollTop(0); // scroll at top when refreshed
    AOS.init(); // initialize AOS library
    $("#pc-image-carousel").carousel("cycle"); // tells carousel to cycle automatically

}