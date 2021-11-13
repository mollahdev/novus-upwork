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
                <a href="<?php echo HOME_URL ?>">
                    <img src="./images/logo.svg" alt="main logo">
                </a>
            </div>

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
        
            <div class="navbar--button">
                <a class="secondary-btn whatsapp-btn" href="tel:+1234567989">
                    <?php Icon::whatsapp() ?>
                    <span>Contact us</span>
                </a>
                <?php Components::Ripple_Button('On Upwork', UPWORK_PROFILE_URL, 'style-2') ?>
            </div>
            
        </div>

    </div>
</header>