
window.onload = function() {
    if (window.jQuery) {
        console.log("Jquery is working properly.");
    } else {
        alert("SysCheck Alert: jQuery not detected/not working.");
    }

    var global_Balance;

    const components = { // add data about different components here
        processor: {    
            
        },

        graphicsCard: {

        },

        RAM: {

        },

        StorageDrive: {

        }
    }

    $(".grid_Item").addClass("ContentHidden");

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
        } else if (inputValue < 10000) {
            $("#errorMsg").text("Value has to be > 10000.");
            $(".grid_Money").css({"border": "4px red solid"});
        } else {
            $("#errorMsg").text("Operation successful.");
            inputValid();
            global_Balance = inputValue;
            console.log(`Balance: ${inputValue}, global variable`);
            $("#budgetContent").html(`P ${inputValue} <br> - Current Budget - <br> Items available to you is based on current budget`);
        }
    });

    function inputValid() {
        $(".grid_Item").removeClass("ContentHidden").addClass("ContentVisible");
        /*
        I used an alternative to showing elements as opposed to show()
        since I wanted an animation on the grid container
        */
        $(".grid_Money").css({"border": "2px blue solid"});
    }
  

}