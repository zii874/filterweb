noseX=0;
noseY=0;
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/MH2KpFK6/green-heart.jpg');

}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
video.size(300 ,300)
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initiaized');
}

function draw() {
image(video,0, 0, 300, 300);
//circle(noseX, noseY, 20),
fill(250,0,0);
stroke(255,0,0);
image(clown_nose, 10, 10, 30, 30);
image(clown_nose, 270, 10, 30, 30);
image(clown_nose, 10, 270, 30, 30);
image(clown_nose, 270, 270, 30, 30);
}


function take_snapshot(){
    save('myFilterImage.png')
}

function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}