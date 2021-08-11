video = "";
status = "";

function preload() {
   video = createVideo('danger.mp3');
   video.hide();
   image = loadimg('baby image.jpg')
}

function setup() {
  canvas = createCanvas(480, 340);
  canvas.center();
}

function draw() {
  image(video, 0, 0, 480, 340);
  image(img, 0, 0, 480, 340);
}

function start() {
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects"
}

function modelLoaded() {
  console.log('modelLoaded');
  status = true;
  video.loop()
  video.speed(1);
  video.volume(1);
}