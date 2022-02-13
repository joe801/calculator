
 var button1 = document.getElementById("btn1");
 var button2 = document.getElementById("btn2");
 var button3 = document.getElementById("btn3");
function theme1() {
  document.body.classList.add("body");
  document.body.classList.remove("theme2");
  document.body.classList.remove("theme3");
  document.getElementById("btn2").style.opacity = "0.1";
  document.getElementById("btn3").style.opacity = "0.1";
  document.getElementById("btn1").style.opacity = "0.9";
}

function theme2() {
  document.body.classList.add("theme2");
  document.body.classList.remove("body");
  document.body.classList.remove("theme3");
  document.getElementById("btn1").style.opacity = "0.1";
  document.getElementById("btn3").style.opacity = "0.1";
  document.getElementById("btn2").style.opacity = "0.9";
}

function theme3() {
  document.body.classList.add("theme3");
  document.body.classList.remove("theme2");
  document.body.classList.remove("body");
  document.getElementById("btn2").style.opacity = "0.1";
  document.getElementById("btn1").style.opacity = "0.1";
  document.getElementById("btn3").style.opacity = "0.9";
   document.getElementById("equalTo").style.color = "black";
}

button1.onclick =function() {
  theme1();
  
}

button2.onclick =function() {
  theme2();
  
}

button3.onclick =function() {
  theme3();
 
}