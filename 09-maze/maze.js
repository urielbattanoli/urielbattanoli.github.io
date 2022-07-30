$(document).ready(function () {
    "use strict";
    const startButton = $("#start");
    const boundaryDiv = $(".boundary");
    const endButton = $("#end");
    const status = $("#status");
    let isStarted = false;

    function resetDiv() {
        boundaryDiv.css('background-color', '#eeeeee');
        isStarted = false;
    }

    function lost() {
        if (isStarted) {
            boundaryDiv.css('background-color', 'red');
            status.html("Sorry, you lost. :[").css("color", "red");
            isStarted = false;
        }
    }

    boundaryDiv.mousemove(function (e) {
        lost();
    })

    startButton.click(function () {
        resetDiv();
        isStarted = true;
        status.html("Reach the end area to win...").css("color", "blue");
    })


    endButton.mousemove(function (e) {
        if (isStarted) {
            status.html("You win! :]").css("color", "green");
            resetDiv();
        }
    })

    $("#maze").parent().mousemove(function (e) {
        const left = e.pageX < startButton.offset().left;
        const right = e.pageX > endButton.offset().right;
        if (left || right)
            lost();
    })
});