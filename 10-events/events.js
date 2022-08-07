$(document).ready(function () {
    let circles = $("#circles");

    $('#btnStart').on('click', () => {
        circles.empty();

        for (let i = 0; i < parseInt($('#noOfCircles').val()); i++) {
            const circle = $("<div id=" + "'circle" + i + "'" + " class='circle'></div>");
            const color = randColor();
            circle.css({
                width: $('#width').val() + 'px',
                height: $('#width').val() + 'px',
                backgroundColor: color
            });
            const posx = Math.floor(Math.random() * $(document).width());
            const posy = Math.floor(Math.random() * $(document).height());
            circle.offset({
                top: posx,
                left: posy
            });
            const interval = setInterval(animate, parseInt($('#rate').val()), circle);

            circle.on('click', () => {
                clearInterval(interval);
                circle.remove();
            });

            circles.append(circle);
        }
    });

    function animate(objCircle) {
        objCircle.css({
            width: (objCircle.width() + parseInt($('#amount').val())) + 'px',
            height: (objCircle.height() + parseInt($('#amount').val())) + 'px',
        });
        objCircle.offset({
            top: objCircle.offsetX,
            left: objCircle.offsetY
        });
    }

    $('#btnClear').on('click', () => {
        circles.children().each((i, e) => {
            $(e).click();
        });
    });

    function randColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});