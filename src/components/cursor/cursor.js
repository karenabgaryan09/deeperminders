let trigger = true;
var timeout;

document.addEventListener("mousemove", function () {
    trigger = true;

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => (trigger = false), 10);
});
$(document).ready(function () {
    var mousePos = {};

    function getRandomInt(min, max) {
        return Math.round(Math.random() * (max - min + 1)) + min;
    }

    $(window).mousemove(function (e) {
        mousePos.x = e.pageX;
        mousePos.y = e.pageY;
    });

    $(window).mouseleave(function (e) {
        mousePos.x = -1;
        mousePos.y = -1;
    });

    var draw = setInterval(function () {
        if (!trigger) return;
        if (mousePos.x > 0 && mousePos.y > 0) {
            var range = 20;

            var color =
                // "background: rgb(" +
                // getRandomInt(0, 255) +
                // "," +
                // getRandomInt(0, 255) +
                // "," +
                // getRandomInt(0, 255) +
                // ");";
                // "background: rgb(255,255,255); ";
                // "background: rgba(128,185,228,1); ";
                ''

            var sizeInt = getRandomInt(10, 5);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

            var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

            var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

            var style = left + top + color + size;
            $("<div class='ball' style='" + style + "'></div>")
                .appendTo("body")
                .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        $(this).remove();
                    }
                );
        }
    }, 20);
});