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

                <a class="footer--social-profile" href="<?php echo UPWORK_PROFILE_URL ?>" target="_blank"> <?php Icon::upwork() ?> </a>

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