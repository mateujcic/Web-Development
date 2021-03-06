<?php
$con = new mysqli(
  'localhost',
  'mu8687',
  'kenyalifted',
  'mu8687',
  8889
);
$query = "select * from comments";

$result = $con->query($query);
?>

<?php
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {

?>

<div class="panel-body p-2 container w-75 comment pb-0" >
      <div class="media">
        <img src="assets/media/icons/53571.png" class="mr-3 icon-user img-fluid w-5" alt="...">
        <div class="media-body word-wrap">
          <p class="name word-wrap">
            <?php echo $row["name"]; ?> <?php echo $row["surname"]; ?>
            <span class="normal-text"> (<?php echo $row["email"]; ?>)</span>
            <span class="normal-text"> commented:</span>
          </p>
          <span class="word-wrap"><?php echo $row["comment"]; ?></span>
        </div>
      </div>
    </div>

<?php
  }
} ?>
</div>
</div>