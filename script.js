var canvas = document.getElementById('display');
var ctx = canvas.getContext('2d');
var image = new Image();
image.onload = function () {
  console.log("onLoad event triggered, attempt to draw")
  ctx.drawImage(image, 100,100);
}
console.log("Attempt to load image")
image.src = "./images/Svg_example_square.svg"