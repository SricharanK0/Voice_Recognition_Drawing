
x=0;
y=0;
draw_circle="";
draw_rec="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System Is listening Please Speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech Has Been Recognized As: "+content;
    console.log(content);
    if(content=="Circle."){
        console.log("circle");
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="Started Drawing Circle";
        draw_circle="set";
    }
    if(content=="Rectangle."){
        x=Math.floor(Math.random()*800);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Started Drawing Rectangle";
        draw_rec="set";
    }
}
function setup(){
    canvas=createCanvas(900,600);
}
function draw(){
    if(draw_circle=="set"){
        console.log("circle");
        radius=Math.floor(Math.random()*200);
        fill("white");
        circle(x,y,radius);
        document.getElementById("status").innerHTML="Circle Is Drawn";
        draw_circle="";
    }
    if(draw_rec=="set"){
        Width=Math.floor(Math.random()*200);
        Height=Math.floor(Math.random()*100);
        rect(x,y,Width,Height);
        document.getElementById("status").innerHTML="Rectangle Is Drawn";
        draw_rec="";
    }
}