# sobel

> [Sobel Filter](https://en.wikipedia.org/wiki/Sobel_operator) algorithm in JavaScript.

Sobel Filter is an algorithm often used for [edge detection](https://en.wikipedia.org/wiki/Edge_detection);

<img src="./example/images/valve.png" width="250">
<img src="./example/images/valve-output.png" width="250">

[![NPM](https://nodei.co/npm/sobel.png)](https://nodei.co/npm/sobel)

# Demo

[http://lab.moogs.io/sobel](http://lab.moogs.io/sobel)

# Install

```bash
npm install sobel
```

```bash
bower install sobel
```

# Usage

```javascript
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var image = new Image();
image.src = 'images/valve.png';
image.onload = drawImage;

function drawImage(event) {
  var w = image.width;
  var h = image.height;

  canvas.width = w;
  canvas.height = h;

  context.drawImage(image, 0, 0);
  var imageData = context.getImageData(0, 0, w, h);

  var sobelImageData = Sobel(imageData);
  context.putImageData(sobelImageData, 0, 0);
}
```

# License

MIT
