<?php
    /**
     * 
     * 
     * file : header.php
     * description: This file contains necessary assets for the project
     * @since 1.0.0 
     * 
     */ 
    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"">
    <title><?php echo SITE_TITLE ?></title>
    <link rel="shortcut icon" type="image/png" href="<?php echo FAVICON ?>"/>
    <link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <link rel="stylesheet" href="./css/magnific-popup.css">
    <link rel="stylesheet" href="./css/master.css">

    <script src="./js/libs/jquery-3.6.0.min.js" defer></script>
    <script src="./js/libs/swiper-bundle.min.js" defer></script>
    <script src="./js/libs/jquery.magnific-popup.min.js" defer></script>
    <script src="./js/header.js" defer></script>
    <script src="./js/main.js" defer></script>

</head>
<body>
