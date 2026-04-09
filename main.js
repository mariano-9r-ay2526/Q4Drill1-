function checkEnergy() {
    var x = document.getElementById("userInput").value;
    var error = document.getElementById("errorMsg");

    if (x < 0) {
        error.style.visibility = "visible";
    } 
    else if (x === "") {
        alert("Please input a number!");
    }
    else {
        error.style.visibility = "hidden";

        var message = "";
        if (x < 100) {
            message = "Average Consumption: Low electricity usage.";
        } else if (x >= 100 && x <= 500) {
            message = "Average Consumption: Typical electricity usage.";
        } else {
            message = "Average Consumption: High electricity usage.";
        }
        
        alert(message)
    }
}