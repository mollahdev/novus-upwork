<?php

    if(!defined('ABSPATH')) {
        die('Direct access not permitted');
    }

    $solution_data = [
        'solution_1' => [
            'icon'          => 'Icon::message_typing',
            'title'         => 'Free Consultancy',
            'description'   => 'Years of experience in web development gives us the ability to deliver our knowledge, and optimize our idea' 
        ],

        'solution_2' => [
            'icon'          => 'Icon::shield',
            'title'         => 'Issue preventing QA',
            'description'   => 'Find functional/performance/security isuues before your users find theme preventing QA' 
        ],

        'solution_3' => [
            'icon'          => 'Icon::user_plus',
            'title'         => 'Increase Retention',
            'description'   => "Find functional/performance/security isuues before your users find theme preventing QA" 
        ],

        'solution_4' => [
            'icon'          => 'Icon::wallet',
            'title'         => 'Money saving',
            'description'   => 'Decrease spending money in-house developers, designers and QA' 
        ],

        'solution_5' => [
            'icon'          => 'Icon::send',
            'title'         => 'Boost with Novus Cerebrum',
            'description'   => 'Bring your idea, or new features of your existing product to make faster without major problems' 
        ],

        'solution_6' => [
            'icon'          => 'Icon::smile',
            'title'         => 'No Headache',
            'description'   => 'While you focus on your business, we focus on your code' 
        ]
    ]

?>

<section id="solution" class="solution-section">
    <div class="container">
        <div class="solution">
            <div class="section-header left">
                <h3 class="section-header--subtitle">Solution</h3>
                <h2 class="section-header--title">How we can help you?</h2>
            </div>

            <div class="solution__content">
                <?php foreach( $solution_data as $key => $value ): ?>
                <div class="solution-card">
                    <span class="solution-card--icon"><?php call_user_func($value['icon']); ?></span>
                    <h3 class="solution-card--title"><?php echo $value['title'] ?></h3>
                    <p class="solution-card--description"><?php echo $value['description'] ?></p>
                </div>
                <?php endforeach; ?>
            </div>

        </div>
    </div>
</section>