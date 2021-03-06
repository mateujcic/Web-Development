<?php require("includes/configuration.inc.php"); ?>
<!doctype html>
<html lang="en">

<head>
  <title>Tea</title>
  <?php include($meta); ?>
  <?php include($bootstrapCss); ?>
  <?php include($addOns); ?>

</head>

<body onload="myFunction()">
  <div id="loader">
    <img class="img-fluid animate-top" id="tea" src="assets/media/icons/1.png" alt="">
  </div>
  <div id="loading" class="animate-bottom">

    <?php include($navigation); ?>


    <div id="carouselExampleIndicators" class="carousel slide h-25 align-self-center" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner ">
        <div class="carousel-item active ">
          <img class="d-block w-100" src="assets/media/images/joanna-kosinska-mr_Tg4SI66A-unsplash.jpg" alt="First slide">
          <div class="carousel-caption ">

            <h2 id="carouseltitle" class="slidetitle">T e a</h2>

            <p>Discover why tea is one of the world's most widely consumed beverages.</p>
          </div>
        </div>
        <div class="carousel-item ">
          <img class="d-block w-100 " src="assets/media/images/man-sitting-on-knee-in-house-1576399.jpg" alt="Third slide">
          <div class="carousel-caption d-md-block">
            <h2 class="slidetitle ">Tea Culture</h2>
            <p>Learn about worldwide tea traditions and ceremonies!</p>
            <a class="btn button-color carousel-button" href="culture.html">Check out</a>
          </div>
        </div>
        <div class="carousel-item ">
          <img class="d-block w-100 " src="assets/media/images/matcha-and-co-pC16vUGYCL4-unsplash.jpg" alt="Third slide">
          <div class="carousel-caption  d-md-block">
            <h2 class=" slidetitle ">Tea Preparation</h2>
            <p>Disocver how different types of tea are prepared!</p>
            <a class="btn button-color" href="preparation.html">Check out</a>

          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>


    <div class="container">
      <div data-aos="zoom-out-right" class="row">
        <div class="col-lg-5 ">
          <img class="img-fluid rounded shadow-lg p-3 mb-5" src="assets/media/images/zino-de-groot-4xOrnJeN4l0-unsplash.jpg" alt="">
        </div>
        <div data-aos="fade-up" id="intro" class="col-lg-7">
          <h2>Welcome!</h2>
          Hello, if you are interested in tea then you’ve come to the right website! Here you can learn all sorts of things about tea. Like where tea originates from and how it spread to different continents. On the second website called types, you can learn about different types of tea and their origin. Under cultivation, the process behind growing and preparing tea for consumption is explained. On the culture webpage, you can discover how tea has incorporated into different cultures around the world. On the last webpage, you can find educational videos that explain how different types of tea are prepared.
          <blockquote class="blockquote text-center">
            <p class="mb-0">I frequently dream of having tea with the Queen.</p>
            <footer class="blockquote-footer"><cite title="Source Title">Hugh Grant</cite></footer>
          </blockquote>

        </div>
      </div>

    </div>



    <div class="m-3 cards-top">
      <div class="card-deck ">
        <div class="card shadow">
          <img src="assets/media/images/debby-hudson-FO4gzqI2t84-unsplash.jpg" class="card-img-top" alt="...">
          <div class="card-body ">
            <h5 class="card-title">Where tea originated from?</h5>
            <p class="card-text ">Find out where tea was first created and how it spread throughout the world.</p>
          </div>
          <div class="card-footer text-center">
            <a class="btn button-color carousel-button" href="history.html">Find out</a>
          </div>
        </div>
        <div class="card shadow">
          <img src="assets/media/images/jason-leung-f3uWanPu_rU-unsplash.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Discover how to prepare matcha tea.</h5>
            <p class="card-text">If you never prepared matcha tea, here you can find a vidoe tutorial on how to make it yourself.</p>
          </div>
          <div class="card-footer text-center">
            <a class="btn button-color carousel-button" href="preparation.html">Find out</a>
          </div>
        </div>
        <div class="card shadow">
          <img src="assets/media/images/bhupesh-talwar--lk96OJC_qc-unsplash.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Learn what climates are best suited for tea cultivation.</h5>
            <p class="card-text">Find out where tea is cultivated today and what conditions need to be met for it to grow effectively.</p>
          </div>
          <div class="card-footer text-center">

            <a class="btn button-color carousel-button" href="cultivation.html">Find out</a>

          </div>
        </div>
      </div>
    </div>

    <?php include($footerAndButton); ?>
    <?php include($bootstrapScripts); ?>

</body>
</div>

</html>