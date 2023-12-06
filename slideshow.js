var slide=document.querySelectorAll("#slideshow>img");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var current=0;
showSlide(current);
prev.onclick=prevSlide;
next.onclick=nextSlide;
function showSlide(n){
    for(var i=0; i<slide.length; i++){
        slide[i].style.display="none";
    }
    slide[n].style.display="block" ;
}
function prevSlide(){
    if(current>0) current-=1;
    else current = slide.length -1;
        showSlide(current);
}
function nextSlide(){
    if(current<slide.length-1) current +=1;
    else current=0;
        showSlide(current);s
}