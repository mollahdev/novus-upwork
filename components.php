<?php 

class Components {
    /**
     * 
     * 
     * Ripple Button Markup 
     * 
     */ 
    public static function Ripple_Button( String $label, String $url, String $classes = 'style-1', $new = true ) {
        ?>  
            <div class="primary-button <?php echo $classes ?>">
                <a 
                    href="<?php echo $url ?>"
                    <?php if( $new ): ?>
                        target="_blank"
                    <?php endif; ?>
                    class="on-upwork-button ripple_effect">
                    
                    <span class="ripple_button__text">
                        <?php echo $label ?>
                    </span>

                    <span class="ripple_effect__shape"></span>
                </a>
            </div> 
        <?php 
    }
}