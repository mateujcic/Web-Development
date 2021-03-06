<?php require("includes/configuration.inc.php"); ?>
<!doctype html>
<html lang="en">

<head>
  <title>Rubrics</title>
  <?php include($meta); ?>
  <?php include($bootstrapCss); ?>
  <?php include($addOns); ?>

</head>

<body>

  <?php include($navigation); ?>

  <div id="jumbotron-image6" class="jumbotron jumbotron-fluid  shadow-header ">
    <div class="container">
      <h1 class="display-5 jumbotron-text">Rubrics</h1>
    </div>
  </div>

  <div class="container">

    <h3>Rubrics for final:</h3>

    <h4>Javascript component</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <p> <span class="font-weight-bold"> Go-To Top Button</span> - A button that displays when user scrolls down, and when the button is clicked, it brings the screen to the top of the webpage.</p>
        <p><span class="font-weight-bold">Located: </span>On every page</p>
      </div>
    </div>
    <h4>DHTML Component</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <p> <span class="font-weight-bold"> Loading screen</span> - I used JavaScript to display a loading animation while images are being loaded. The animation is done by changing images using setInterval; image names are stored in an array and as the time goes on the images are chnaged which then makes the animation.</p>
        <p><span class="font-weight-bold">Located: </span>On <a href="index.php">Homepage</a></p>
      </div>
    </div>
    <h4>Corrections from midterm project</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <p>I made the referneces webpage responsive by creating a class that forces the text to break up (word-wrap: break-word;). <a href="references.php"> References Link</a></p>
        <p>I made my JavaScript more readble and added comments which help explain when different parts of code start and end.</p>
        <p>I corrected the span element in navbar.</p>
      </div>
    </div>
    <h4>Extras:</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        <p>I used a library called AOS which makes certain divisions animated. The animations can be found on every webpage.</p>
        <p>I used @keyframes rule for animating the loading screen tea mug (The tea mug moves from top to the center of the page). The animation can be found on the loading screen.<a href="index.php"> Homepage Link</a></p>
        <p>I used WebKit engine to make animations made with @keyframes available on safari (and iOS devices). The animation can be found on the loading screen. <a href="index.php"> Homepage Link</a></p>
        <p>I compressed images to make the loading times quicker.</p>
      </div>

    </div>


  </div>

  <hr>



  <div class="container">

    <h3>Rubrics for midterm:</h3>

    <h4>Content</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        The content of the website is written throughly and clearly, it's clear and logically connected.
      </div>
    </div>
    <h4>Navigation</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        The navigation fits in well with the website. At first it is almost completely trasnparent, but as the user scrolls, the navigation bar turns black so the user can see the links.
      </div>
    </div>
    <h4>Organization</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        The content is nicely organised. The website is split into 6 main pages and 2 pages that contain the requirements.
      </div>
    </div>
    <h4>Design</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        Design is pleasing and the colour scheme fits the theme. Design is minimal and clean.
      </div>
    </div>
    <h4>HTML/CSS</h4>
    <div class="card shadow-sm mb-4">
      <div class="card-body">
        All the HTML files and the CSS file are validated.
      </div>
    </div>


  </div>



  <?php include($footerAndButton); ?>
  <?php include($bootstrapScripts); ?>

</body>

</html>