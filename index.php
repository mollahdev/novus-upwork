<?php 
    /**
     * 
     * Global Constants 
     * 
     */ 
    define('ABSPATH', TRUE);
    define('HOME_URL', "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] );
    define('UPWORK_PROFILE_URL', 'https://www.upwork.com/workwith/sergeybruh');
    define('SITE_TITLE', 'Novus Cerebrum');
    define('FAVICON', './images/favicon.png');

    /**
     * 
     * Load Header assets and header markup
     *  
     */ 
    include './header.php';

    /**
     * 
     * include some reusable markup 
     *  
     */ 
    include './components.php';
    include './icon.php';

    /**
     * 
     * Include body content
     * 
     */ 

    include './navbar.php';
    include './banner.php';
    include './cta.php';
    include './service.php';
    include './solution.php';
    include './portfolio.php';
    include './endorsement.php';
    include './team.php';
    include './contact.php';

    /**
     * 
     * Load footer script and footer markup
     *  
     */ 
    include './footer.php';
    