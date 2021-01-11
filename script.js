
window.onload = function() {
    if (window.jQuery) {
        alert("SysCheck: jQuery is working!");
    } else {
        alert("SysCheck Alert: jQuery not detected/not working.");
    }

    $("#enterBTN").click(function() {
        console.log("Button was clicked.");
        console.log($(".moneyInput").text());
        // debug; check if it prints to the console for verification

        let inputValue = parseInt($(".moneyInput").text());
        console.log(inputValue);
        console.log(typeof inputValue);

        if (isNaN(inputValue)) {
            $("#errorMsg").text("Please type a whole number");
            $(".grid_Money").css({"border": "4px red solid"});
        } else {
            $("#errorMsg").text("Operation is successful.");
            $(".grid_Money").css({"border": "2px blue solid"});
        }
    });

        



}