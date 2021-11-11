<?php 
    /**
     * 
     * Global Constants 
     * 
     */ 
    define('ABSPATH', TRUE);
    define('HOME_URL', "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'] );
    define('UPWORK_PROFILE_URL', 'https://www.upwork.com/');


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

    /**
     * 
     * Include Navigation markup 
     * 
     */ 

    include './navbar.php';

    ?>

        <div class="container">
            <h1>
                We deliver web development, design and QA for your business growth.
            </h1>
        </div>

    <?php 

    /**
     * 
     * Load footer script and footer markup
     *  
     */ 
    include './footer.php';

?>

