let time = document.querySelector('.time')
let underscore = document.querySelector('.underscore')


// time.innerText = ''
// time.style.color = "red"
// time.style.fontSize = "16px"

let date = new Date()
let hours = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
console.log(time)
if(sec > 10) {
    console.log(sec)
} 

// setInterval(function(){
//   time.innerHTML = date.toDateString()
//   // time.innerHTML= `${new Date().getHours()}:${new Date().getMinutes()}:0${new Date().getSeconds()}`;
// // console.log(time)
// }, 1000);

// project constructor function

function Project(title,img,txt,links) {
  this.title = title;
  this.img = img;
  this.txt = txt;
  this.links = links;
}

let project1 = new Project('To Do List', `url('#')`, `<p>This was the first project I did where I really put all the tutorials aside, and rolled up my sleaves and dove in to JavaScript.</p>`, '<a href="#">Live Preview</a> <a href="#">Code</a>' )

console.log(project1.txt)
console.log(project1.title)

let projh2 = document.querySelector(".project h2")
// projh2.textContent = project1.title;

// sticky nav
window.onscroll = function() {myFunction()};

let navbar = document.getElementById("nav-container");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  
//   if (window.scroll(0,0)) {
//       navbar.classList.remove("sticky")
//       }

  
  else {
    navbar.classList.remove("sticky");
    console.log("!sticky nav")
  }
}

function toggleNav() {
    let x = document.getElementById('nav');
    let y = document.getElementById('soc')
    x.classList.toggle('responsive')
    y.classList.toggle('responsive')
}