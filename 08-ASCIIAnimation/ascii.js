$(document).ready(function() { 

    let interval;
    let i = 0;
    let delay = 250;
    let text;

    $("#stop").prop("disabled", true);

    $("#animation").change(function() {
        const animation = this.value;
        $("#text-area").val(ANIMATIONS[animation]);
    });
    
    $("#fontsize").change(function() {
        const size = this.value;
        $("#text-area").css("font-size", size);
    });
    
    $("#start").click(function() {
        text = $("#text-area").val().split("=====\n");
        this.disabled = true;
        $("#animation").prop("disabled", true);
        $("#stop").prop("disabled", false);
        interval = setInterval(animate, delay);
    });
    
    $("#stop").click(function() {
        clearInterval(interval);
        i = 0;
        text = text.join("=====\n");
        $("#text-area").val(text);
        $("#start").prop("disabled", false);
        $("#animation").prop("disabled", false);
        this.disabled = true;
    });
    
    $("#turbo").click(function() {
        delay = this.checked ? 50 : 250;
        if (interval === undefined) { return; }
        clearInterval(interval);
        interval = setInterval(animate, delay);
    });

    function animate() {
        if (text === undefined) { return; }
        if (i == text.length) { i = 0; }
        $("#text-area").val(text[i]);
        i++;
    }
});