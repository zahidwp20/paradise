<?php

/**
 * paradise_htb_scripts description
 * @return [type] [description]
 */
function paradise_htb_scripts() {

    /**
     * all css files
    */

    wp_enqueue_style( 'paradise-htb-fonts', paradise_htb_fonts_url(), array(), time() );
    if( is_rtl() ){
        wp_enqueue_style( 'bootstrap-rtl', PARADISE_HTB_CSS_DIR.'bootstrap.rtl.min.css', array() );
    }else{
        wp_enqueue_style( 'bootstrap', PARADISE_HTB_CSS_DIR.'bootstrap.min.css', array() );
    }
    wp_enqueue_style( 'day-menu', PARADISE_HTB_CSS_DIR . 'day_menu.css', [] );
    wp_enqueue_style( 'flex_slider', PARADISE_HTB_CSS_DIR . 'flex_slider.css', [] );
    wp_enqueue_style( 'vendors-style', PARADISE_HTB_CSS_DIR . 'vendors.min.css', [] );
	wp_enqueue_style( 'paradise-core', PARADISE_HTB_CSS_DIR . 'paradise-core.css', [] );
	wp_enqueue_style( 'paradise-custom', PARADISE_HTB_CSS_DIR . 'paradise-custom.css', [] );
    wp_enqueue_style( 'paradise-htb-style', get_stylesheet_uri() );

    // all js
    wp_enqueue_script( 'common-scripts', PARADISE_HTB_JS_DIR . 'common_scripts.js', [ 'jquery' ], '', true );
    wp_enqueue_script( 'common-functions', PARADISE_HTB_JS_DIR . 'common_functions', [ 'jquery' ], false, true );
    wp_enqueue_script( 'datepicker-inline', PARADISE_HTB_JS_DIR . 'datepicker_inline.js', [ 'jquery' ], false, true );
    wp_enqueue_script( 'datepicker-search', PARADISE_HTB_JS_DIR . 'datepicker_search.js', [ 'jquery' ], false, true );
    wp_enqueue_script( 'day-menu', PARADISE_HTB_JS_DIR . 'day_menu.js', [ 'jquery' ], false, true );
    wp_enqueue_script( 'isotope-min', PARADISE_HTB_JS_DIR . 'isotope.min.js', [ 'jquery' ], false, true );
    wp_enqueue_script( 'jquery-cookiebar', PARADISE_HTB_JS_DIR . 'jquery.cookiebar.js', [ 'jquery' ], '', true );
    wp_enqueue_script( 'jquery-flexslider', PARADISE_HTB_JS_DIR . 'jquery.flexslider.min.js', [ 'jquery' ], '', true );
    wp_enqueue_script( 'modal-popup', PARADISE_HTB_JS_DIR . 'modal_popup', [ 'jquery' ], '', true );
    wp_enqueue_script( 'slider', PARADISE_HTB_JS_DIR . 'slider.js', [ 'jquery' ], false, true );
    wp_enqueue_script( 'isotope-pkgd', PARADISE_HTB_JS_DIR . 'isotope-pkgd.js', [ 'imagesloaded' ], false, true );
    wp_enqueue_script( 'slider-func', PARADISE_HTB_JS_DIR . 'slider_func.js', [ 'jquery' ], false, true );
    wp_enqueue_script( 'paradise-htb-main', PARADISE_HTB_JS_DIR . 'main.js', [ 'jquery' ], time(), true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'paradise_htb_scripts' );

/*
Register Fonts
 */
function paradise_htb_fonts_url() {
    $font_url = '';

    /*
    Translators: If there are characters in your language that are not supported
    by chosen font(s), translate this to 'off'. Do not translate into your own language.
     */
    if ( 'off' !== _x( 'on', 'Google font: on or off', 'paradise_htb' ) ) {
        $font_url = 'https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&family=Montserrat:wght@300;400;500;600;700&display=swap';
    }
    return $font_url;
}