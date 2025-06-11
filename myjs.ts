import Typed from 'typed.js';
import $ from "jquery";
declare let global: any;
global.jquery = $;

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

const mbtns = document.querySelector('.mbtn') as HTMLButtonElement
const nlinks = document.querySelector('.nlink') as HTMLButtonElement

mbtns.addEventListener('click',()=>{
  nlinks.classList.toggle('mobmenu')
})

//text 


//reset
function message() {
  alert("This will erase the form details");
}


const type = new Typed('.text', {
  strings: [
    'Hey, Travel With Us!!'],
  //stringsElement: null,
  typeSpeed: 100,
  startDelay: 0,
  backSpeed: 100,
  backDelay: 700,
});


