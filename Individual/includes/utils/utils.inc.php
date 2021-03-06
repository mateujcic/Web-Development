<?php

  function checkIfValid($value, $validation, $errorMessage, &$errors) {
    if(!filter_var($value, $validation)) {
      array_push($errors, $errorMessage);
    }
  }
