function preload(){

}
function setup(){
    canvas=createCanvas(360, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(360, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modeloaded);
    poseNet.on("pose", getposes);
}
function modeloaded(){
    console.log("POSENET HAS BEEN INITIALIZED.");
}
function draw(){
    image(video, 0, 0, 360, 300);
}
function ApplyFilter(){
    save("sillyIMG.png");
}
function getposes(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x = "+results[0].pose.nose.x);
        console.log("nose_y = "+results[0].pose.nose.y);
    }
}