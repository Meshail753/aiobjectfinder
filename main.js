status="";
input="";
function setup(){
    canvas = createCanvas(250,250);
    canvas.position(640,500);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,250,250)
    if(status !="")
    {
        objectdetector.detect(video, gotresult);
    }
}
function start(){
    objectdetector=ml5.objectDetector("cocossd",modeloaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input = document.getElementById("input").value;
}

function modeloaded(){
    console.log("cocossd linked.")
    status=true;
}
function gotresult(error,results){
if(error){
    console.log(error);
}
else{

console.log(results);
}

}
