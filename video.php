<?php

    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }

?>

<section class="video-section">
    <div class="container">
        <div class="video-iframe">
            <img src="./images/vide-bg.jpg" alt="video background">
            <button class="video-play-button" data-id="<?php echo YOUTUBE_VIDEO_ID ?>"><?php Icon::play() ?></button>
        </div>
    </div>
</section>