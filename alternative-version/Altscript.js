
window.onload = function() {
    if (window.jQuery) {
        console.log("Jquery is working properly.");
    } else {
        alert("SysCheck Alert: jQuery not detected/not working.");
    }

    $("#enterBTN").click(function() {
        console.log("Button was clicked.");
        console.log($(".moneyInput").text());
        // debug; check if it prints to the console for verification

        let inputValue = parseInt($(".moneyInput").text(), 10);
        console.log(inputValue);
        console.log("Input Data Type: " + typeof inputValue);

        if (isNaN(inputValue)) {
            $("#errorMsg").text("Please type a whole number");
            $(".grid_Money").css({"border": "4px red solid"});
        } else if (inputValue < 10000) {
            $("#errorMsg").text("Value has to be > 10000.");
            $(".grid_Money").css({"border": "4px red solid"});
        } else {
            $("#errorMsg").text("Operation successful.");
            global_balance = inputValue;
            inputValid();
            console.log(`Balance: ${inputValue}, global variable`);
            $("#number_Money").text(`${inputValue}`);
            
        }
    });

   
  

}