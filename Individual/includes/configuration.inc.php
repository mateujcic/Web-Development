<?php  
  ini_set('display_errors', 1);
  ini_set('display_startup_errors', 1);
  error_reporting(E_ALL);

  $dir = __DIR__;

  $bootstrapPath = "{$dir}/bootstrap/";
  $navigationPath = "{$dir}/navigation/";
  $htmlPath = "{$dir}/html/";
  $addOnsPath="{$dir}/add-ons/";
  $footeraBPath="{$dir}/footer-and-button/";
  $commentsPath="{$dir}/comments/";


  $bootstrapCss = "{$bootstrapPath}bootstrap-css.inc.php";
  $bootstrapScripts = "{$bootstrapPath}bootstrap-scripts.inc.php";
  $navigation = "{$navigationPath}navigation.inc.php";
  $meta = "{$htmlPath}html-meta.inc.php";
  $addOns = "{$addOnsPath}fonts-and-icons.inc.php";
  $footerAndButton = "{$footeraBPath}footer-and-topButton.inc.php";
  $getComments = "{$commentsPath}getComments.inc.php";

  ?>
