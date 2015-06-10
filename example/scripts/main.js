'use strict';

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var canvasSobel = document.getElementById('canvas-sobel');
var contextSobel = canvasSobel.getContext('2d');

var image = new Image();
image.src = 'images/valve.png';
image.onload = drawImage;

function drawImage(event) {
  var w = image.width;
  var h = image.height;

  canvas.width = canvasSobel.width = w;
  canvas.height = canvasSobel.height = h;

  context.drawImage(image, 0, 0);
  var imageData = context.getImageData(0, 0, w, h);

  var sobelImageData = Sobel(imageData);
  contextSobel.putImageData(sobelImageData, 0, 0);
}
