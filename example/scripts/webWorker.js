importScripts('/sobel.js');

self.postMessage('Starting worker.');

self.onmessage = function(event) {
  self.postMessage('Calculating Sobel data.');
  var sobelData = Sobel(event.data);

  self.postMessage('Sending Sobel data.');
  self.postMessage(sobelData);
};
