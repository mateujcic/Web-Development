<?php require("includes/configuration.inc.php"); ?>
<!doctype html>
<html lang="en">

<head>
  <title>Preparation</title>
  <?php include($meta); ?>
  <?php include($bootstrapCss); ?>
  <?php include($addOns); ?>

</head>

<body>

  <?php include($navigation); ?>
  <div id="jumbotron-image5" class="jumbotron jumbotron-fluid  shadow-header ">
    <div class="container">
      <h1 class="display-5 jumbotron-text">Tea Preparation</h1>
    </div>
  </div>

  <div class="container">
    <h3 class="text-center pb-2">Matcha tea:</h3>
    <div data-aos="zoom-in" class="embed-responsive embed-responsive-16by9 content-images">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4kLV-uIzr8U" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h3 class="text-center mt-5 pb-2">Bubble tea:</h3>
    <div data-aos="zoom-in" class="embed-responsive  embed-responsive-16by9   content-images">

      <iframe width="560" height="315" src="https://www.youtube.com/embed/xebewT6lh2k" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h3 class="text-center mt-5 pb-2">Iced tea:</h3>

    <div data-aos="zoom-in" class="embed-responsive embed-responsive-16by9   content-images">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/PVv20GDSIeY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h3 class="text-center mt-5 pb-2">Chai tea:</h3>

    <div data-aos="zoom-in" class="embed-responsive  embed-responsive-16by9   content-images">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JuK-RtjLOfc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>

  <?php include($footerAndButton); ?>
  <?php include($bootstrapScripts); ?>

</body>

</html>