function validateInput(){
  const formName = document.forms["registerForm"];

  const firstName = formName["firstName"].value;
  const lastName = formName["lastName"].value;
  const email = formName["email"].value;
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const password = formName["password"].value;
  const passwordConfirm = formName["passwordConfirm"].value;

  let array = new Array();
  array.push(firstName, lastName, email, password, passwordConfirm);

  for(let i=0; i<array.length; i++){
    if(array[i].length==0){
       alert('Please fill in fields that are empty.');
       return false;
    }
  }

  if(password !== passwordConfirm){
    alert('The confirmation password is not the same as the password.');
    return false;
  }

  if(!email.match(emailPattern)){
    alert('Email is not valid');
    return false;
  }

  alert('Dear ' + firstName + ' ' + lastName + ', thank You for registering!');
  return true;
}

let navbar = document.getElementById("navbar");
      let sticky = navbar.offsetTop;
       $(document).ready(function(){
        
  $(window).scroll(function(){
  	let scroll = $(window).scrollTop();
	  if (scroll > 60) {
	    navbar.classList.add("sticky")
	  }

	  else{
		  navbar.classList.remove("sticky")  	
	  }
  })
})

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

let topbutton = document.getElementById("top-button");

// When the window is scrolled: 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

//Scroll to the top of the document when clicked
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;}