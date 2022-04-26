nose_x=0
nose_y=0
function preload(){
clown_nose= loadImage('https://i.postimg.cc/hPsRthnL/imgbin-clown-drawing-laughter-clown-W5-TMw-Wms-TPmd-MYe-Wt-Eqe-FDgi-E-t.jpg');
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);

}

function draw(){
    image(video,0,0,300,300);
   // fill(255,0,0);
   // stroke(255,0,0);
    //circle(nose_x,nose_y,20);
    image( clown_nose,nose_x-15,nose_y-15,30,30);


}

function take_snapshot(){
    save('myImageFile.png');
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        console.log("nose x="+ nose_x);
        console.log("nose y="+nose_y);
    
        
        
    }
}
