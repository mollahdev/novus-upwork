<?php
    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }

    /**
     * 
     * Navbar Menu 
     * 
     */ 
    $navbar_menu = [
        'menu_1' => [
            'label' => 'Home',
            'href'  => '#banner'
        ],

        'menu_2' => [
            'label' => 'Services',
            'href'  => '#service'
        ],

        'menu_3' => [
            'label' => 'Solutions',
            'href'  => '#solution'
        ],

        'menu_4' => [
            'label' => 'Portfolio',
            'href'  => '#portfolio'
        ],

        'menu_5' => [
            'label' => 'Endorsment',
            'href'  => '#endorsement'
        ],
    ];


?>

<header id="header" class="navbar-section">
    <div class="container">
        <div class="navbar">
            
            <div class="navbar--logo">
                <a class="navbar--main-logo" href="<?php echo HOME_URL ?>">
                    <img src="./images/logo.svg" alt="main logo">
                </a>
            </div>

            <div class="navbar--main-container">
                <nav class="navbar__menu">
                    <ul class="navbar__menu__list">
                        <?php 
                            /**
                             * 
                             * 
                             * Print navbar menu 
                             * 
                             */ 
                            foreach( $navbar_menu as $key => $value ): ?>
                            <li class="navbar__menu__list--item <?php echo $key ?>">
                                <a 
                                    href="<?php echo $value['href'] ?>"
                                    class="navbar__menu__list--link">
                                    <?php echo $value['label'] ?>
                                </a>
                            </li>
                        <?php endforeach;?>

                    </ul>
                </nav>
            </div>
        
            <div class="navbar--button">
                <a class="secondary-btn whatsapp-btn" href="tel:+1234567989">
                    <?php Icon::whatsapp() ?>
                    <span>Contact us</span>
                </a>
                <?php Components::Ripple_Button('On Upwork', UPWORK_PROFILE_URL, 'style-2') ?>
            </div>

            <div class="navbar--hamburger">
                <button class="hamburger-button"><?php echo Icon::hamburger() ?></button>
            </div>
            
        </div>

    </div>
</header>

<section id="responsive-main-menu-container" style="display:none">
    <div class="container">
        <div class="responsive-header" style="opacity:0; top:100px">
            
            <div class="responsive-header--head">
                <label>Navigation</label>
                <button class="hamburger-close-btn"><?php Icon::cross() ?></button>
            </div>
            <!-- menu markup is dynamic  -->
            <div class="responsive-header--menu"></div>

            <div class="responsive-header--footer">
                <?php Components::Ripple_Button('Book a call', '#contact', 'style-2', false) ?>
                <a class="secondary-btn whatsapp-btn" href="tel:+1234567989">
                    <?php Icon::whatsapp() ?>
                    <span>Contact us</span>
                </a>
            </div>

            <div class="footer">

                <div class="col">
                    <a class="footer--social-profile linkedin" href="#" target="_blank"> <?php Icon::linkedin() ?> </a>
                    <a class="footer--social-profile" href="<?php echo UPWORK_PROFILE_URL ?>" target="_blank"> <?php Icon::upwork() ?> </a>
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
    </div>
</section>
