<?php

$recepient = "marian.kushnir@novuscerebrum.com";
$sitename = "Novus Cerebrum - UPWROK";

$name = trim($_GET["name"]);
$email = trim($_GET["email"]);
$phone = trim($_GET["phone"]);
$country = trim($_GET["country"]);
$text = trim($_GET["message"]);

$pagetitle = "New form application \"$sitename\"";
$message = "Fullname: $name \nEmail: $email \nPhone: $phone \nCountry: $country \nMessage: $message";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");