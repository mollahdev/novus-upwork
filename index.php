<?php 
    /**
     * 
     * Global Constants 
     * 
     */ 
    define('ABSPATH', TRUE);
    define('HOME_URL', "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] );
    define('FAVICON', './images/favicon.png');
    define('YOUTUBE_VIDEO_ID', 'e6rrkF9emcw');

    define('SITE_TITLE', 'Novus Cerebrum');
    define('UPWORK_PROFILE_URL', 'https://www.upwork.com/workwith/sergeybruh');
    define('LINKEDIN_PROFILE_URL', 'https://www.linkedin.com/in/kushnir-maryan');
    define('TALK', "https://calendly.com/marian-kushnir/30min");
    define('PHONE_NUMBER', "+380976119980");
    
    define('WHATSAPP_CHAT', "https://wa.me/".PHONE_NUMBER."/?text=Let's chat");


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
    include './video.php';
    include './service.php';
    include './solution.php';
    include './portfolio.php';
    include './endorsement.php';
    include './team.php';
    include './cta.php';
    include './contact.php';

    /**
     * 
     * Load footer script and footer markup
     *  
     */ 
    include './footer.php';
    