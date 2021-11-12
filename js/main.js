/**
 * 
 * Author   : Ashraf
 * Version  : 1.0.0
 * suppport : mollah.dev@gmail.com
 * File     : main script file forthe project 
 * 
 */ 

( function ( $ ) {
    'use strict';

    /**
     * 
     * Helper function 
     * 
     */ 

     $.fn.extend({
        /**
         * 
         * 
         * Ripple Button Script 
         * 
         */ 
        rippleEffectButton: function ( $scope ) {

            let prefix  = 'ripple_effect';
            let btn     = $scope.find(`.${prefix}`);
            let shape   = $scope.find('.ripple_effect__shape');
           
            btn.on('mouseenter', function( ev ) { 
                
                    let self = $(this);
                    let offset = self.offset();
                    let x = ev.pageX - offset.left;
                    let y = ev.pageY - offset.top;
         
                    shape.css({
                        top: y + 'px',
                        left: x + 'px'
                    });
        
                    shape.addClass(`${prefix}__active`);    
            });
            
            btn.on('mouseleave', () => shape.removeClass(`${prefix}__active`) );
        },
        
        /**
         * 
         * 
         * Portfolio tab Script 
         * 
         */ 

        portfolioTab: function( $scope ) {
            const navbar = $scope.find('.portfolio__nav');
            const content= $scope.find('.portfolio__tab');
            const active = navbar.find('.active').data('target');

            if( active ) {
                $(active).addClass('active');
            }

            $(navbar).on('click', '.portfolio__nav--btn', ev => {
                ev.preventDefault()
                ev.stopPropagation()
                navbar.find('.portfolio__nav--btn').removeClass('active');
                content.find('.portfolio__tab-grid').removeClass('active');
                ev.target.classList.add('active')
                $(ev.target.dataset.target).addClass('active');
            });
        },

        /**
         * 
         * 
         * Endorsment script
         *  
         */ 

        endorsmentSlider: function( $scope ) {
            const swiperSlider      = $scope.find('.swiper')[0];
            const swiperPagination  = $scope.find('.swiper-pagination')[0];
            const swiperBtnPrev     = $scope.find('.swiper-button-prev')[0];
            const swiperBtnNext     = $scope.find('.swiper-button-next')[0];

            const swiper = new Swiper( swiperSlider, {
                // Optional parameters
                loop: true,
              
                // If we need pagination
                pagination: {
                  el: swiperPagination,
                },
              
                // Navigation arrows
                navigation: {
                  nextEl: swiperBtnPrev,
                  prevEl: swiperBtnNext,
                },
              
              });
        }

     });



    /**
     * 
     * Jquery Start when document is ready 
     * 
     */ 
    $( document ).ready( function () {
        
        /**
         * 
         * Initalize Ripple button effect script 
         * 
         */ 
        $('.primary-button').each( (_, item) => {
             $.fn.rippleEffectButton($(item))
        });

        /**
         * 
         * Initalize Portfolio Tab 
         * 
         */ 
        $('.portfolio__content').each( (_, item) => {
            $.fn.portfolioTab($(item))
        });
        
        /**
         * 
         * Endorsement slider 
         * 
         */ 

        $.fn.endorsmentSlider($('.endorsement-section'));


    }) // end of jquery document function

} ( jQuery ) )