/**
 * 
 * Author   : Ashraf
 * Version  : 1.0.0
 * suppport : mollah.dev@gmail.com
 * File     : main script file for the project 
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
                breakpoints: {
                    // when window width is >= 320px
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0
                    },
                    // when window width is >= 450
                    500: {
                      slidesPerView: 2,
                      spaceBetween: 10
                    },
                    // when window width is >= 640px
                    660: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    }
                },

                autoplay: {
                    delay: 3000,
                },
              
                // If we need pagination
                pagination: {
                  el: swiperPagination,
                  clickable: true
                },
              
                // Navigation arrows
                navigation: {
                  nextEl: swiperBtnNext,
                  prevEl: swiperBtnPrev,
                },
              
              });
        },

        /**
         * 
         * 
         * Contact Form
         *  
         */

        contactForm: function( $scope ) {
           const submit     = $scope.find('#submit-btn');
           const form       = $scope.find('#contact-form');
           const name       = $scope.find('#name');
           const email      = $scope.find('#email');
           const phone      = $scope.find('#phone');
           const country    = $scope.find('#country');
           const message    = $scope.find('#message');
           const response   = $scope.find('#response');
           const action     = form.attr('action');

           const error = (message = false) => {
                if( message === false ) {
                    response.html('');
                    submit.addClass('loading');

                } else {
                    response[0].scrollIntoView({
                        behavior: 'smooth',
                        block  : 'center'
                    })
                    response.html(`<p>${message}</p>`);
                }
           }

           const success= () => {
               form.html(
                    `<div class="success-markup">
                        <span class="check-icon">&check;</span>
                        <p>Your message has successfully submitted</p>
                    </div>`
               )
           }

           const validateEmail = (emailAddress) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(emailAddress).toLowerCase());
            }

            

           submit.on('click', () => {
                const nameValue = name.val().trim();
                const emailValue = email.val().trim();

                if( nameValue.length === 0 || emailValue.length === 0 ) {
                    error('Name or Email field is empty!');
                    return false;
                }

                if( !validateEmail(emailValue) ) {
                    error('Please enter a valid email address');
                    return false;
                }

                const data = {
                    name    : nameValue,
                    email   : emailValue,
                    phone   : phone.val().trim(),
                    country : country.val().trim(),
                    message : message.val().trim()
                }
                // send ajax request

                const url = new URL( action );
                url.search = new URLSearchParams( data );

                fetch(url.href)
                .then(response => {

                    setTimeout(()=>{
                        success();
                        console.log(response)
                    },2000)

                } )
            
            error();
           
            return false;
           })

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

        /***
         * 
         * Popup video 
         * 
         */ 
        $('.open-popup-link').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
        });

        /***
         * 
         * contact form 
         * 
         */

        $.fn.contactForm($('.form-container'));

        /***
         * 
         * Header Script 
         * 
         */
        $.fn.headerScript()


    }) // end of jquery document function

} ( jQuery ) )