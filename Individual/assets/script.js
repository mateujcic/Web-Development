/*Page loader STARTS*/
let img = document.getElementById("tea");
let imgSrc = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"]; //Array of image names//
let t = setInterval; //Declaring an interval for changing omages
let visited = 0;

$(document).ready(function () {
  let numberOfLoadedImages = 0;
  let totalNoImages = $("img").length; // Counting how many images are present on the website

  //When an img is loaded, it's added to the count of all images and if the numbers are equal, the allImagesLoaded function is started.

  $("img").on("load", function (event) {
    numberOfLoadedImages++;
    if (numberOfLoadedImages == totalNoImages) {
      allImagesLoaded();
    }
  });

  function allImagesLoaded() {
    clearInterval(t);
    document.getElementById("loader").style.display = "none";
    document.getElementById("loading").style.display = "block";
    console.log("All images loaded");
    visited = 1;
  }
});

function myFunction() {
  t = setInterval(changeImg, 450);
}

let i = 0;

function changeImg() {
  img.src = "assets/media/icons/" + imgSrc[i];
  console.log(imgSrc[i]);
  i++;
  console.log("Run");
  if (i == 7) {
    i = 0;
  }
}
/*Page loader ENDS*/

/*AOS plugin refresh STARTS*/
let scrollRef = 0;

window.addEventListener("scroll", function () {
  // increase value up to 10, then refresh AOS
  scrollRef <= 10 ? scrollRef++ : AOS.refresh();
});
/*AOS plugin refresh ENDS*/

/*Stikcy navbar STARTS*/
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
$(document).ready(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if (scroll > 60) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});
/*Stikcy navbar ENDS*/

/*Go To Top button STARTS*/
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*Go To Top button ENDS*/

/*Form validation STARTS*/
function validateForm() {
  const form = document.forms["commentForm"];

  const nameInput = form["name"];
  const name = nameInput.value;

  const surnameInput = form["surname"];
  const surname = surnameInput.value;

  const commentInput = form["comment"];
  const comment = commentInput.value;

  const emailInput = form["email"];
  const email = emailInput.value;

  if (name === "") {
    alert("Name field must be filled out.");
    return false;
  }

  if (name.trim().length === 0) {
    alert("Name field can't be empty");
    return false;
  }

  if (surname === "") {
    alert("Surname field must be filled out.");
    return false;
  }

  if (surname.trim().length === 0) {
    alert("Surname field can't be empty");
    return false;
  }

  if (comment === "") {
    alert("Comment field must be filled out.");
    return false;
  }

  if (comment.trim().length === 0) {
    alert("Comment field can't be empty.");
    return false;
  }

  let validateEmail = /\S+@\S+\.\S+/;

  if (validateEmail.test(email) == false) {
    alert("Email must be correctly inputted.");
    return false;
  }

  if (email.trim().length === 0) {
    alert("Email can't be empty");
    return false;
  }

  return true;
}
/*Form validation ENDS*/
