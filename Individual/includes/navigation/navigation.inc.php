<?php
$pages = array(
  "index.php" => "Home",
  "history.php" => "History",
  "types.php" => "Types",
  "cultivation.php" => "Cultivation",
  "culture.php" => "Culture",
  "preparation.php" => "Preparation",
  "rubrics.php" => "Rubrics",
  "references.php" => "References",
  "comments.php" => "Comments"
);

$currentPage = $_SERVER['REQUEST_URI'];

function isActive($url)
{
  global $currentPage;
  $urlParts = explode("/", $currentPage);
  $currentPageUrl = end($urlParts);
  return $url === $currentPageUrl ? 'active' : '';
}
?>

<nav id="navbar" class="navbar navbar-expand-lg nav-bg-color navbar-dark bg-lignt">
  <a class="navbar-brand white-text" href="index.php"><img class="icon" src="assets/media/icons/mug.png" alt=""></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto ">
      <?php
      foreach ($pages as $url => $title) {
        $isActive = isActive($url);

        $link = "
          <li class='nav-item $isActive'>
            <a class='nav-link white-text' href='$url'>$title</a>
          </li>
        ";
        echo $link;
      }
      ?>
    </ul>
  </div>
</nav>