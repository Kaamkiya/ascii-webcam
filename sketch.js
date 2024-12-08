const density = "Ñ@#W$9876543210?!abc;:+=-,._             ";

let video;
let asciiDiv;

function setup() {
  noCanvas();

  video = createCapture(VIDEO);
  // video.size(70, 50);
  video.size(140, 100);
  video.hide();

  asciiDiv = createDiv();
}

function draw() {
  video.loadPixels();

  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];

      const avg = (r + g + b) / 3;
      const charIndex = floor(map(avg, 0, 255, density.length, 0));

      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += density[charIndex];
    }
    asciiImage += "<br/>";
  }
  asciiDiv.html(asciiImage);
}
