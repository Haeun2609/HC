let vid = [];
let img = [];
let fade = [];
let num = 0;
let pNum= 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 2; i++) {
    vid[i] = createVideo("video" + String(i) + ".mp4");
    vid[i].size(windowWidth, windowHeight);
    vid[i].loop();
    vid[i].hide();
    fade[i] = 0;
  }
}
function draw() {
  background(255);
  for (let i = 0; i < 2; i++) {
    img[i] = vid[i].get();
  }
  tint(255,fade[pNum])
  image(img[pNum],0,0)
  if(fade[pNum] >=0){fade[pNum] --;}
  tint(255,fade[num])
  image(img[num], 0, 0);
  if(fade[num]<255){fade[num] ++;}
}
function keyPressed() {
  if (key == "1") {
    pNum = num;
    num = 0;
  }
  if (key == "2") {
    pNum = num;
    num = 1;
  }
}
