var canvas = document.getElementById('staticBackground');
var context = canvas.getContext('2d');

// Size the canvas to the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Update canvas size when window is resized
window.onresize = function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var phoneNumberDiv = document.getElementById("phoneNumber");
    phoneNumberDiv.style.top = window.innerHeight / 2 + "px";
    phoneNumberDiv.style.left = window.innerWidth / 2 + "px";
};

// Create static effect
function renderStatic() {
    var imageData = context.createImageData(canvas.width, canvas.height);
    var data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
        data[i] = Math.random() * 255; // red
        data[i + 1] = Math.random() * 255; // green
        data[i + 2] = Math.random() * 255; // blue
        data[i + 3] = 255; // alpha
    }
    context.putImageData(imageData, 0, 0);
}

// Re-render static every 100ms
setInterval(renderStatic, 100);
