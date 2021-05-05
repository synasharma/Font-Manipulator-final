left_wrist="";
right_wrist="";
difference=""
function preload()
{

}

function setup()
{
    if(windowWidth<=800)
    {
        canvas=createCanvas(350,250);
        canvas.position(910,50);
        video=createCapture(VIDEO);
        video.position(200,150);
    }
    else
    {
        canvas=createCanvas(500,400);
        canvas.position(1100,250);
        video=createCapture(VIDEO);
        video.position(300,250);
    }
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getposes);
}

function modelLoaded()
{
    console.log("Posenet is initialized!");
}
function draw()
{
background ('lightslategray');
textSize(difference);
fill('white');
text('Complete your HW',100,150);
document.getElementById("font").innerHTML=difference;
}

function getposes(results)
{
if (results.length>0)
{
    console.log(results);
    left_wrist=results[0].pose.leftWrist.x;
    right_wrist=results[0].pose.rightWrist.x;
    difference=floor(left_wrist-right_wrist);
}
else
{
console.log("Reload and check camera settings");
}
}
