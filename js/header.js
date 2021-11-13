/**
 * 
 * Author   : Ashraf
 * Version  : 1.0.0
 * suppport : mollah.dev@gmail.com
 * File     : header script file for the project 
 * 
 */ 

jQuery( function( $) {

    'use strict';
    
    let header_config = {
        header     : $('.navbar-section'),
        tabletMenu : $('.responsive-header--menu'),
        mainMenu   : $('.navbar--main-container'), // main menu container on desktop device
        menu       : $('.navbar__menu'),
        markup     : `
        <div class="responsive-menu-container"></div>`,
    }

    let _self = $.extend(header_config, {
        
        init : function() {
            _self.novus_nav_markup();
            _self.novus_menu_toggle();
            _self.novus_dropdown_toggle();
        },


        /**
         * --------------------------------
         * tablet  menu markup setup
         * --------------------------------
         */

        novus_nav_markup: function() {

             // check screen size 
            const resizeObserver = new ResizeObserver( entries => {

                const config = entries[0]
                const screenWidth = Math.ceil(config.contentRect.width);

                if( screenWidth <= 1080 && !_self.tabletMenu.children().length) {
                    _self.tabletMenu.html(_self.markup)
                    $('.responsive-menu-container').html(_self.menu)
                }

                if( screenWidth > 1080 && !_self.mainMenu.children().length ) {
                    _self.mainMenu.html(_self.menu)
                    $('.responsive-menu-container').remove()
                    $('#responsive-main-menu-container').fadeOut()
                }

            }) 

            if( _self.header.length ) {
                const navbar = _self.header.find('.navbar__menu');
                if( navbar.children().length > 0 ) {
                    resizeObserver.observe(_self.header[0]) // run when header markup is found
                } else {
                    _self.header.find('.navbar--hamburger').css({
                        'display': 'none',
                    })
                }
            }
        },


        /**
         * --------------------------------
         * tablet menu open and close 
         * --------------------------------
         */

         novus_menu_toggle: function() {
 
            const openBtn   = $('.hamburger-button');
            const closeBtn  = $('.hamburger-close-btn');
            const wrapper   = $('#responsive-main-menu-container');
            const tabletMenu = $('.responsive-header');

            if( openBtn.length && wrapper.length ) {    
                // open drwaer
                openBtn.on( 'click', () => {
                    wrapper.fadeIn(200, () => {
                        $('body').css({overflow: 'hidden'})
                        tabletMenu.animate({ 'top': 0, 'opacity': '1' }, 300)
                    })
                })
                // close drwaer
                closeBtn.on('click', () => {
                    $('body').css({overflow: 'unset'})
                    tabletMenu.animate({ 'top': '100px', 'opacity': '0' }, 300, () => wrapper.fadeOut(300));
                })
            }
            
        },

        /**
         * --------------------------------
         * Tablet open drop down
         * --------------------------------
         */
        novus_dropdown_toggle: function() {

            const wrapper = $('#responsive-main-menu-container');
            const tabletMenu  = $('.responsive-header');

            if( tabletMenu ) {
                const link = wrapper.find('a');
                $(wrapper).on('click', link, (ev) => {

                    ev.preventDefault();
                    ev.stopPropagation();
    
                    const btn = $( ev.target ).closest('a');

                    if( btn.length ) {
                        if( btn.attr('href').indexOf('#') !== -1 ) {
                            $('body').css({overflow: 'unset'})
                            tabletMenu.animate({ 'top': '100px', 'opacity': '0' }, 300, () => wrapper.fadeOut(300));
                        }
                        window.location.href = btn.attr('href');
                    }
    
                })
            }
        }
    })


    $.fn.extend({
        headerScript : _self.init,
    })

} );