(function() {
   ('.scroll-down').click (function() {
     ('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
     return false;
   });
 });

 var rellax = new Rellax('.rellax', {
    speed: -2,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// AOS.init();

tippy('.chalk', {
  content: "Press on this chalk to draw!",
  placement: 'top',
  arrow: false,
  animation: 'fade',
  interactive: false,
  theme: 'myTheme',
});

tippy('.pic1_note', {
  content: "Welcome to the projects space! this is the note that will help you to understand what is going on",
  placement: 'bottom-start',
  arrow: false,
  animation: 'fade',
  interactive: true,
  theme: 'myTheme',
});

tippy('.pic4_cloud, .pic5_airplane', {
  content: "The audio project that ...",
  placement: 'left',
  arrow: false,
  animation: 'fade',
  interactive: true,
  theme: 'myTheme',
});

tippy('.pic7_bark, .pic8_ball', {
  content: "The comix project that ...",
  placement: 'top',
  arrow: false,
  animation: 'fade',
  interactive: true,
  theme: 'myTheme',
});

tippy('.pic6_headphones', {
  content: "The first project that ...",
  placement: 'right',
  arrow: false,
  animation: 'fade',
  interactive: true,
  theme: 'myTheme',
});

// const template = document.getElementById('template');

tippy('.pic2_map', {
  content:  "It is an interactive website - our version of treasure hunt. Go there and do exciti",
  // allowHTML: true,
  placement: 'bottom-start',
  arrow: false,
  animation: 'fade',
  interactive: true,
  theme: 'myTheme',
});



const chalk_click = document.getElementById('chalk');
var check=false;

chalk_click.addEventListener("click", function(){
	check=true;
});

var canvas;
function setup() {
  canvas=createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style("z-index", "0");
}

function draw() {
  background(45, 108, 81, 0);
  if (check === true && mouseIsPressed === true) {
    sprayPaint()
  }
}

// prevents touch gestures on touch screens from dragging the page around
function touchMoved() {
  return false
}

function sprayPaint() {
	// set the color and brush style
  stroke(255, 255, 255, 255)
  strokeWeight(1)

	// find the speed of the mouse movement
  const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

	// set minimum radius and spray density of spraypaint brush
	const minRadius = 10;
	const sprayDensity = 50

  // find radius of the spray paint brush and radius squared
  const r = speed + minRadius;
  const rSquared = r * r;

	// set the number of times we lerp the points in the for loop
	const lerps = 10

  // repeat the random points with lerping
  for (let i = 0; i < lerps; i++) {

    // find the lerped X and Y coordinates
    const lerpX = lerp(mouseX, pmouseX, i / lerps)
    const lerpY = lerp(mouseY, pmouseY, i / lerps)

    // draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {

      // pick a random position within the circle
      const randX = random(-r, r)
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX)

      // draw the random point
      point(lerpX + randX, lerpY + randY)
    }
  }
}