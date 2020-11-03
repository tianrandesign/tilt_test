let counter = 0;
const updateRate = 10;
const limit = 45;
const tiltable = document.getElementById("tiltable");

function updateNow() {
    return counter++ % updateRate === 0;
};

window.addEventListener("deviceorientation", function(event) {
  if (updateNow()) {
    let position = Math.round(event.gamma);
    if (Math.abs(position) > limit) {
       if (position > limit) {
            position = limit;
        } else {
            position = -limit;
                }
        }
    position = position / -100;
    let style = "rotateY(" + position + "deg)";
    tiltable.style.transform = style;
    }
});