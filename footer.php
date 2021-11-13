<?php
    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }
?>

<footer id="footer" class="footer-section">
    <div class="container">
        <div class="footer">

            <div class="col">
                <a class="footer--logo" href="<?php echo HOME_URL ?>">
                    <img src="./images/logo.svg" alt="main logo">
                </a>

                <a class="footer--social-profile linkedin" href="#" target="_blank"> <?php Icon::linkedin() ?> </a>
                <a class="footer--social-profile" href="#" target="_blank"> <?php Icon::upwork() ?> </a>

            </div>
            <div class="col">
                <a href="tel:+380977546123" class="footer--phone">+380977546123</a>
            </div>
            <div class="col">
                <span class="footer--copyright"> 
                    &copy; <?php echo date("Y"); ?> Novus Cerebrum. All Rights Reserved
                </span>
            </div>
        </div>
    </div>
</footer>


</body>
</html>