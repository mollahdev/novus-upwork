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
               $('.section-header--description').hide();
               form.html(
                    `<div class="success-markup">
                        <span class="check-icon"><svg class="icon icon-check-circle"><use xlink:href="#icon-check-circle"><symbol id="icon-check-circle" viewBox="0 0 24 28">
                        <path d="M20.062 11.469c0-0.266-0.094-0.531-0.281-0.719l-1.422-1.406c-0.187-0.187-0.438-0.297-0.703-0.297s-0.516 0.109-0.703 0.297l-6.375 6.359-3.531-3.531c-0.187-0.187-0.438-0.297-0.703-0.297s-0.516 0.109-0.703 0.297l-1.422 1.406c-0.187 0.187-0.281 0.453-0.281 0.719s0.094 0.516 0.281 0.703l5.656 5.656c0.187 0.187 0.453 0.297 0.703 0.297 0.266 0 0.531-0.109 0.719-0.297l8.484-8.484c0.187-0.187 0.281-0.438 0.281-0.703zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z"></path>
                        </symbol></use></svg></span>
                        <div>
                            <p>Your message has been sent successfully!</p>
                            <small>You will be notified as soon as we proceed with your request</small>
                        </div>
                    </div>`
               )
           };

           const validateEmail = (emailAddress) => {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(emailAddress).toLowerCase());
            }

           submit.on('click', () => {
                const nameValue = name.val().trim();
                const emailValue = email.val().trim();

                if( nameValue.length === 0 || emailValue.length === 0 ) {
                    error('<span>x</span> Your email address or name is invalid');
                    return false;
                }

                if( !validateEmail(emailValue) ) {
                    error('<span>x</span> Please enter a valid email address');
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
                    },1000)

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