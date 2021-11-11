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
            'href'  => HOME_URL
        ],

        'menu_2' => [
            'label' => 'Portfolio',
            'href'  => '#portfolio_section'
        ],

        'menu_3' => [
            'label' => 'Team',
            'href'  => '#team_section'
        ],

        'menu_4' => [
            'label' => 'Blog',
            'href'  => '#blog_section'
        ],

        'menu_5' => [
            'label' => 'Carrers',
            'href'  => '#carrers_section'
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
                <?php Components::Ripple_Button('On Upwork', UPWORK_PROFILE_URL, 'style-1') ?>
            </div>
            
        </div>

    </div>
</header>