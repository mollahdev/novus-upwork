<?php

    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }

?>

<section id="contact" class="contact-section">
    <div class="col">

        <div class="form-container">
            <div class="container">
                <div class="section-header left">
                    <h2 class="section-header--title">Need a solution?</h2>
                    <p class="section-header--description">Write as a message and we will get back to you shortly.</p>
                </div>
                <!-- message response -->
                <div id="response"></div>
                <!-- form start -->
                <form id="contact-form" action="<?php echo HOME_URL . 'inc/mail.php' ?>">
                    <input id="name" name="name" placeholder="Full name *" type="text">
                    <input id="email" name="email" placeholder="Email *" type="text">
                    
                    <div class="row">
                        <input id="phone" min="0" name="phone" placeholder="Phone number" type="number">
                        <input id="country" name="country" placeholder="Country" type="text">
                    </div>

                    <textarea placeholder="Your message" name="message" id="message" cols="30" rows="6"></textarea>
                    <button type="submit" id="submit-btn"> Submit <i class="spinner"></i> </button>
                </form>
                <!-- form end -->
            </div>
        </div>

    </div>
    <div class="col">
        <img class="contact-map" src="./images/map.svg" alt="map">
    </div>
</section>