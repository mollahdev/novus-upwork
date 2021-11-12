<?php

    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }

?>

<section id="cta" class="cta-section">
    <div class="container">
        <div class="cta">
            <div class="cta__content">
                <h3 class="cta__content--title">Hire us through Upwork.</h3>
                <p class="cta__content--description">A secure and convinient system for you to use.</p>
                <a href="<?php echo UPWORK_PROFILE_URL ?>" target="_blank" class="cta__content--link">Click here and redirect <?php Icon::arrow_right() ?></a>
            </div>
            <div class="cta--icon">
                <?php Icon::upwork() ?>
            </div>
        </div>
    </div>
</section>