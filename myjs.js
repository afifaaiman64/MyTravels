"use strict";
$(document).ready(function(){
$("input").focus(function(){
$(this).css("background-color", "rgb(190, 217, 240)");
$(this).css("color", "black");
});
  
var detls =$(".content");
detls.on("click", function(){
$(this).find("p").slideToggle(600);
});

var clickbtn = $(".btn");
clickbtn.on("click", function(){
 $(this).fadeOut(2000).fadeIn(1000);
});

$('#effects').hide(400, function(){
});
$('#effects').show(2000, function(){
});
 });

var mbtns = document.querySelector('.mbtn');
var nlinks = document.querySelector('.nlink');
mbtns.addEventListener('click', function () {
nlinks.classList.toggle('mobmenu');
});
//text 
//reset
function message() {
    alert("This will erase the form details");
}
var type = new Typed('.text', {
  strings: [
    'Hey, Travel With Us!!'],
  //stringsElement: null,
  typeSpeed: 100,
  startDelay: 0,
  backSpeed:100,
  backDelay: 700,
});
