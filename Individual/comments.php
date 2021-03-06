<?php require("includes/configuration.inc.php"); ?>
<!doctype html>
<html lang="en">

<head>
  <title>Comments</title>
  <?php include($meta); ?>
  <?php include($bootstrapCss); ?>
  <?php include($addOns); ?>

</head>

<body>

  <?php include($navigation); ?>

  <div id="jumbotron-comments" class="jumbotron jumbotron-fluid  shadow-header  ">
    <div class="container">
      <h1 class="display-5 jumbotron-text">Comments</h1>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-lg-7">

        <form method="POST" action="assets/comment.php" name="commentForm" onsubmit="return validateForm();" target="frame">

          <div class="form-group row">
            <label class="col-md-3 col-form-label">Name:</label>
            <div class="col-md-9">
              <input type="name" class="form-control" name="name" placeholder="Enter your name">
            </div>
          </div>
          <div class="form-group row word-wrap">
            <label class="col-md-3 col-form-label">Surname:</label>
            <div class="col-md-9">
              <input type="lastname" class="form-control" name="surname" placeholder="Enter your surname">
            </div>
          </div>
          <div class="form-group row word-wrap">
            <label class="col-md-3 col-form-label">Email:</label>
            <div class="col-md-9">
              <input type="email" class="form-control" name="email" placeholder="Enter your email">
            </div>
          </div>
          <div class="form-group row word-wrap">
            <label class="col-md-3 col-form-label">Comment:</label>
            <div class="col-md-9">
              <textarea class="form-control" name="comment" rows="3"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Post</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


  <iframe id="iframeComments" name="frame"></iframe>

  
  <?php include($getComments); ?>
  <?php include($footerAndButton); ?>
  <?php include($bootstrapScripts); ?>

</body>

</html>