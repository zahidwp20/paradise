<?php
/**
 * paradise_htb customizer
 *
 * @package paradise_htb
 */

// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Added Panels & Sections
 */
function paradise_htb_customizer_panels_sections( $wp_customize ) {

    //Add panel
    $wp_customize->add_panel( 'paradise_htb_customizer', [
        'priority' => 10,
        'title'    => esc_html__( 'Paradise Customizer', 'paradise_htb' ),
    ] );

    /**
     * Customizer Section
     */
    $wp_customize->add_section( 'header_top_setting', [
        'title'       => esc_html__( 'Header Info Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 10,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'header_social', [
        'title'       => esc_html__( 'Header Social', 'paradise_htb' ),
        'description' => '',
        'priority'    => 11,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'section_header_logo', [
        'title'       => esc_html__( 'Header Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 12,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'blog_setting', [
        'title'       => esc_html__( 'Blog Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 13,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'header_side_setting', [
        'title'       => esc_html__( 'Side Info', 'paradise_htb' ),
        'description' => '',
        'priority'    => 14,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'breadcrumb_setting', [
        'title'       => esc_html__( 'Breadcrumb Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 15,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'blog_setting', [
        'title'       => esc_html__( 'Blog Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 16,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'footer_setting', [
        'title'       => esc_html__( 'Footer Settings', 'paradise_htb' ),
        'description' => '',
        'priority'    => 16,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'color_setting', [
        'title'       => esc_html__( 'Color Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 17,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( '404_page', [
        'title'       => esc_html__( '404 Page', 'paradise_htb' ),
        'description' => '',
        'priority'    => 18,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'tutor_course_settings', [
        'title'       => esc_html__( 'Tutor Course Settings ', 'paradise_htb' ),
        'description' => '',
        'priority'    => 19,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'learndash_course_settings', [
        'title'       => esc_html__( 'Learndash Course Settings ', 'paradise_htb' ),
        'description' => '',
        'priority'    => 20,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'typo_setting', [
        'title'       => esc_html__( 'Typography Setting', 'paradise_htb' ),
        'description' => '',
        'priority'    => 21,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );

    $wp_customize->add_section( 'slug_setting', [
        'title'       => esc_html__( 'Slug Settings', 'paradise_htb' ),
        'description' => '',
        'priority'    => 22,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );
    $wp_customize->add_section( 'tutor_course_settings', [
        'title'       => esc_html__( 'Tutor Course Settings ', 'paradise_htb' ),
        'description' => '',
        'priority'    => 23,
        'capability'  => 'edit_theme_options',
        'panel'       => 'paradise_htb_customizer',
    ] );
}

add_action( 'customize_register', 'paradise_htb_customizer_panels_sections' );

function _header_top_fields( $fields ) {
    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_topbar_switch',
        'label'    => esc_html__( 'Topbar Swicher', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_preloader',
        'label'    => esc_html__( 'Preloader On/Off', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];


    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_backtotop',
        'label'    => esc_html__( 'Back To Top On/Off', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_header_right',
        'label'    => esc_html__( 'Header Right On/Off', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_search',
        'label'    => esc_html__( 'Header Search On/Off', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_header_lang',
        'label'    => esc_html__( 'language On/Off', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    // button
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_button_text',
        'label'    => esc_html__( 'Button Text', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( 'Get A Quote', 'paradise_htb' ),
        'priority' => 10,
        'active_callback' => [
            [
                'setting'  => 'paradise_htb_header_right',
                'operator' => '==',
                'value'    => true,
            ],
        ],
    ];

    $fields[] = [
        'type'     => 'link',
        'settings' => 'paradise_htb_button_link',
        'label'    => esc_html__( 'Button URL', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
        'active_callback' => [
            [
                'setting'  => 'paradise_htb_header_right',
                'operator' => '==',
                'value'    => true,
            ],
        ],
    ];


    // phone
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_phone_num',
        'label'    => esc_html__( 'Phone Number', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( '+(088) 234 567 899', 'paradise_htb' ),
        'priority' => 10,
    ];    

    // email
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_mail_id',
        'label'    => esc_html__( 'Mail ID', 'paradise_htb' ),
        'section'  => 'paradise_htb_mail_id',
        'default'  => esc_html__( 'info@paradise_htb.com', 'paradise_htb' ),
        'priority' => 10,
    ];    

    // email
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_address',
        'label'    => esc_html__( 'Address', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( 'Moon ave, New York, 2020 NY US', 'paradise_htb' ),
        'priority' => 10,
    ];    

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_address_url',
        'label'    => esc_html__( 'Address URL', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( 'https://goo.gl/maps/qzqY2PAcQwUz1BYN9', 'paradise_htb' ),
        'priority' => 10,
    ];    

    // Login
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_acc_button_text',
        'label'    => esc_html__( 'Login', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( 'Login', 'paradise_htb' ),
        'priority' => 10,
    ];    

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_acc_button_link',
        'label'    => esc_html__( 'Account URL', 'paradise_htb' ),
        'section'  => 'header_top_setting',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];

    return $fields;

}
add_filter( 'kirki/fields', '_header_top_fields' );

/*
Header Social
 */
function _header_social_fields( $fields ) {
    // header section social
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_topbar_fb_url',
        'label'    => esc_html__( 'Facebook Url', 'paradise_htb' ),
        'section'  => 'header_social',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_topbar_twitter_url',
        'label'    => esc_html__( 'Twitter Url', 'paradise_htb' ),
        'section'  => 'header_social',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_topbar_linkedin_url',
        'label'    => esc_html__( 'Linkedin Url', 'paradise_htb' ),
        'section'  => 'header_social',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_topbar_instagram_url',
        'label'    => esc_html__( 'Instagram Url', 'paradise_htb' ),
        'section'  => 'header_social',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_topbar_youtube_url',
        'label'    => esc_html__( 'Youtube Url', 'paradise_htb' ),
        'section'  => 'header_social',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];


    return $fields;
}
add_filter( 'kirki/fields', '_header_social_fields' );

/*
Header Settings
 */
function _header_header_fields( $fields ) {
    $fields[] = [
        'type'        => 'radio-image',
        'settings'    => 'choose_default_header',
        'label'       => esc_html__( 'Select Header Style', 'paradise_htb' ),
        'section'     => 'section_header_logo',
        'placeholder' => esc_html__( 'Select an option...', 'paradise_htb' ),
        'priority'    => 10,
        'multiple'    => 1,
        'choices'     => [
            'header-style-1'   => get_template_directory_uri() . '/inc/img/header/header-1.png',
            'header-style-2' => get_template_directory_uri() . '/inc/img/header/header-2.png',
            'header-style-3'  => get_template_directory_uri() . '/inc/img/header/header-3.png'
        ],
        'default'     => 'header-style-1',
    ];

    $fields[] = [
        'type'        => 'image',
        'settings'    => 'logo',
        'label'       => esc_html__( 'Header Logo', 'paradise_htb' ),
        'description' => esc_html__( 'Upload Your Logo.', 'paradise_htb' ),
        'section'     => 'section_header_logo',
        'default'     => get_template_directory_uri() . '/assets/img/logo/logo.png',
    ];

    $fields[] = [
        'type'        => 'image',
        'settings'    => 'seconday_logo',
        'label'       => esc_html__( 'Header Secondary Logo', 'paradise_htb' ),
        'description' => esc_html__( 'Header Logo Black', 'paradise_htb' ),
        'section'     => 'section_header_logo',
        'default'     => get_template_directory_uri() . '/assets/img/logo/logo-2.png',
    ];

    $fields[] = [
        'type'        => 'image',
        'settings'    => 'preloader_logo',
        'label'       => esc_html__( 'Preloader Logo', 'paradise_htb' ),
        'description' => esc_html__( 'Upload Preloader Logo.', 'paradise_htb' ),
        'section'     => 'section_header_logo',
        'default'     => get_template_directory_uri() . '/assets/img/favicon.png',
    ];

    return $fields;
}
add_filter( 'kirki/fields', '_header_header_fields' );

/*
Header Side Info
 */
function _header_side_fields( $fields ) {
    // side info settings
    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_side_hide',
        'label'    => esc_html__( 'Side Info On/Off', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];  
    $fields[] = [
        'type'        => 'image',
        'settings'    => 'paradise_htb_side_logo',
        'label'       => esc_html__( 'Logo Side', 'paradise_htb' ),
        'description' => esc_html__( 'Logo Side', 'paradise_htb' ),
        'section'     => 'header_side_setting',
        'default'     => get_template_directory_uri() . '/assets/img/logo/logo.png',
    ];
    $fields[] = [
        'type'     => 'textarea',
        'settings' => 'paradise_htb_extra_about_text',
        'label'    => esc_html__( 'Side Description Text', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => esc_html__( 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system and expound the actual teachings of the great explore', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'textarea',
        'settings' => 'paradise_htb_extra_map',
        'label'    => esc_html__( 'Map Address Iframe', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => esc_html__( '#', 'paradise_htb' ),
        'priority' => 10,
    ];

    // contact
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_contact_title',
        'label'    => esc_html__( 'Contact Title', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => esc_html__( 'Contact Title', 'paradise_htb' ),
        'priority' => 10,
    ];
    $fields[] = [
        'type'     => 'textarea',
        'settings' => 'paradise_htb_extra_address',
        'label'    => esc_html__( 'Office Address', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => esc_html__( '12/A, Mirnada City Tower, NYC', 'paradise_htb' ),
        'priority' => 10,
    ];
    $fields[] = [
        'type'     => 'textarea',
        'settings' => 'paradise_htb_extra_phone',
        'label'    => esc_html__( 'Phone Number', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => esc_html__( '+0989 7876 9865 9', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'textarea',
        'settings' => 'paradise_htb_extra_email',
        'label'    => esc_html__( 'Email ID', 'paradise_htb' ),
        'section'  => 'header_side_setting',
        'default'  => esc_html__( 'info@themepure.net', 'paradise_htb' ),
        'priority' => 10,
    ];
    return $fields;
}
add_filter( 'kirki/fields', '_header_side_fields' );

/*
_header_page_title_fields
 */
function _header_page_title_fields( $fields ) {
    // Breadcrumb Setting
    $fields[] = [
        'type'        => 'image',
        'settings'    => 'breadcrumb_bg_img',
        'label'       => esc_html__( 'Breadcrumb Background Image', 'paradise_htb' ),
        'description' => esc_html__( 'Breadcrumb Background Image', 'paradise_htb' ),
        'section'     => 'breadcrumb_setting',
        'default'     => get_template_directory_uri() . '/assets/img/page-title/page-title.jpg',
    ];
    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_breadcrumb_bg_color',
        'label'       => __( 'Breadcrumb BG Color', 'paradise_htb' ),
        'description' => esc_html__( 'This is a Breadcrumb bg color control.', 'paradise_htb' ),
        'section'     => 'breadcrumb_setting',
        'default'     => '#f4f9fc',
        'priority'    => 10,
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'breadcrumb_info_switch',
        'label'    => esc_html__( 'Breadcrumb Info switch', 'paradise_htb' ),
        'section'  => 'breadcrumb_setting',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    return $fields;
}
add_filter( 'kirki/fields', '_header_page_title_fields' );

/*
Header Social
 */
function _header_blog_fields( $fields ) {
// Blog Setting
    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_blog_btn_switch',
        'label'    => esc_html__( 'Blog BTN On/Off', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_blog_cat',
        'label'    => esc_html__( 'Blog Category Meta On/Off', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_blog_author',
        'label'    => esc_html__( 'Blog Author Meta On/Off', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];
    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_blog_date',
        'label'    => esc_html__( 'Blog Date Meta On/Off', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];
    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_blog_comments',
        'label'    => esc_html__( 'Blog Comments Meta On/Off', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_blog_btn',
        'label'    => esc_html__( 'Blog Button text', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => esc_html__( 'Read More', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'breadcrumb_blog_title',
        'label'    => esc_html__( 'Blog Title', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => esc_html__( 'Blog', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'breadcrumb_blog_title_details',
        'label'    => esc_html__( 'Blog Details Title', 'paradise_htb' ),
        'section'  => 'blog_setting',
        'default'  => esc_html__( 'Blog Details', 'paradise_htb' ),
        'priority' => 10,
    ];
    return $fields;
}
add_filter( 'kirki/fields', '_header_blog_fields' );

/*
Footer
 */
function _header_footer_fields( $fields ) {
    // Footer Setting
    $fields[] = [
        'type'        => 'radio-image',
        'settings'    => 'choose_default_footer',
        'label'       => esc_html__( 'Choose Footer Style', 'paradise_htb' ),
        'section'     => 'footer_setting',
        'default'     => '5',
        'placeholder' => esc_html__( 'Select an option...', 'paradise_htb' ),
        'priority'    => 10,
        'multiple'    => 1,
        'choices'     => [
            'footer-style-1'   => get_template_directory_uri() . '/inc/img/footer/footer-1.png',
            'footer-style-2' => get_template_directory_uri() . '/inc/img/footer/footer-2.png',
            'footer-style-3' => get_template_directory_uri() . '/inc/img/footer/footer-3.png',
            'footer-style-4' => get_template_directory_uri() . '/inc/img/footer/footer-4.png',
        ],
        'default'     => 'footer-style-1',
    ];

    $fields[] = [
        'type'        => 'select',
        'settings'    => 'footer_widget_number',
        'label'       => esc_html__( 'Widget Number', 'paradise_htb' ),
        'section'     => 'footer_setting',
        'default'     => '4',
        'placeholder' => esc_html__( 'Select an option...', 'paradise_htb' ),
        'priority'    => 10,
        'multiple'    => 1,
        'choices'     => [
            '4' => esc_html__( 'Widget Number 4', 'paradise_htb' ),
            '3' => esc_html__( 'Widget Number 3', 'paradise_htb' ),
            '2' => esc_html__( 'Widget Number 2', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'        => 'image',
        'settings'    => 'paradise_htb_footer_bg',
        'label'       => esc_html__( 'Footer Background Image.', 'paradise_htb' ),
        'description' => esc_html__( 'Footer Background Image.', 'paradise_htb' ),
        'section'     => 'footer_setting',
    ];

    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_footer_bg_color',
        'label'       => __( 'Footer BG Color', 'paradise_htb' ),
        'description' => esc_html__( 'This is a Footer bg color control.', 'paradise_htb' ),
        'section'     => 'footer_setting',
        'default'     => '#f4f9fc',
        'priority'    => 10,
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'footer_style_2_switch',
        'label'    => esc_html__( 'Footer Style 2 On/Off', 'paradise_htb' ),
        'section'  => 'footer_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'footer_style_3_switch',
        'label'    => esc_html__( 'Footer Style 3 On/Off', 'paradise_htb' ),
        'section'  => 'footer_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'footer_style_4_switch',
        'label'    => esc_html__( 'Footer Style 4 On/Off', 'paradise_htb' ),
        'section'  => 'footer_setting',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_copyright',
        'label'    => esc_html__( 'Copy Right', 'paradise_htb' ),
        'section'  => 'footer_setting',
        'default'  => esc_html__( 'Copyright &copy; 2024 - by Eric', 'paradise_htb' ),
        'priority' => 10,
    ];
    return $fields;
}
add_filter( 'kirki/fields', '_header_footer_fields' );

// color
function paradise_htb_color_fields( $fields ) {
    // Color Settings
    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_color_option',
        'label'       => __( 'Theme Color', 'paradise_htb' ),
        'description' => esc_html__( 'This is a Theme color control.', 'paradise_htb' ),
        'section'     => 'color_setting',
        'default'     => '#2b4eff',
        'priority'    => 10,
    ];
    // Color Settings
    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_color_option_2',
        'label'       => __( 'Primary Color', 'paradise_htb' ),
        'description' => esc_html__( 'This is a Primary color control.', 'paradise_htb' ),
        'section'     => 'color_setting',
        'default'     => '#f2277e',
        'priority'    => 10,
    ];
     // Color Settings
    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_color_option_3',
        'label'       => __( 'Secondary Color', 'paradise_htb' ),
        'description' => esc_html__( 'This is a Secondary color control.', 'paradise_htb' ),
        'section'     => 'color_setting',
        'default'     => '#30a820',
        'priority'    => 10,
    ];
     // Color Settings
    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_color_option_3_2',
        'label'       => __( 'Secondary Color 2', 'paradise_htb' ),
        'description' => esc_html__( 'This is a Secondary color 2 control.', 'paradise_htb' ),
        'section'     => 'color_setting',
        'default'     => '#ffb352',
        'priority'    => 10,
    ];
     // Color Settings
    $fields[] = [
        'type'        => 'color',
        'settings'    => 'paradise_htb_color_scrollup',
        'label'       => __( 'ScrollUp Color', 'paradise_htb' ),
        'description' => esc_html__( 'This is a ScrollUp colo control.', 'paradise_htb' ),
        'section'     => 'color_setting',
        'default'     => '#2b4eff',
        'priority'    => 10,
    ];

    return $fields;
}
add_filter( 'kirki/fields', 'paradise_htb_color_fields' );

// 404
function paradise_htb_404_fields( $fields ) {
    // 404 settings
    $fields[] = [
        'type'        => 'image',
        'settings'    => 'paradise_htb_404_bg',
        'label'       => esc_html__( '404 Image.', 'paradise_htb' ),
        'description' => esc_html__( '404 Image.', 'paradise_htb' ),
        'section'     => '404_page',
    ];
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_error_title',
        'label'    => esc_html__( 'Not Found Title', 'paradise_htb' ),
        'section'  => '404_page',
        'default'  => esc_html__( 'Page not found', 'paradise_htb' ),
        'priority' => 10,
    ];
    $fields[] = [
        'type'     => 'textarea',
        'settings' => 'paradise_htb_error_desc',
        'label'    => esc_html__( '404 Description Text', 'paradise_htb' ),
        'section'  => '404_page',
        'default'  => esc_html__( 'Oops! The page you are looking for does not exist. It might have been moved or deleted', 'paradise_htb' ),
        'priority' => 10,
    ];
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_error_link_text',
        'label'    => esc_html__( '404 Link Text', 'paradise_htb' ),
        'section'  => '404_page',
        'default'  => esc_html__( 'Back To Home', 'paradise_htb' ),
        'priority' => 10,
    ];
    return $fields;
}
add_filter( 'kirki/fields', 'paradise_htb_404_fields' );

// course_settings
function paradise_htb_learndash_fields( $fields ) {

    $fields[] = [
        'type'     => 'number',
        'settings' => 'paradise_htb_learndash_post_number',
        'label'    => esc_html__( 'Learndash Post Per page', 'paradise_htb' ),
        'section'  => 'learndash_course_settings',
        'default'  => 6,
        'priority' => 10,
    ];

    $fields[] = [
        'type'        => 'select',
        'settings'    => 'paradise_htb_learndash_order',
        'label'       => esc_html__( 'Post Order', 'paradise_htb' ),
        'section'     => 'learndash_course_settings',
        'default'     => 'DESC',
        'placeholder' => esc_html__( 'Select an option...', 'paradise_htb' ),
        'priority'    => 10,
        'multiple'    => 1,
        'choices'     => [
            'ASC' => esc_html__( 'ASC', 'paradise_htb' ),
            'DESC' => esc_html__( 'DESC', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_learndash_related',
        'label'    => esc_html__( 'Show Related?', 'paradise_htb' ),
        'section'  => 'learndash_course_settings',
        'default'  => 1,
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    return $fields;

}

if ( class_exists( 'SFWD_LMS' ) ) {
add_filter( 'kirki/fields', 'paradise_htb_learndash_fields' );
}


// tutor_course_settings
function paradise_htb_tutor_course_fields( $fields ) {
    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_tutor_course_details_author_meta_switch',
        'label'    => esc_html__( 'Tutor Course Details Author Meta', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_tutor_course_details_payment_switch',
        'label'    => esc_html__( 'Tutor Course Details Payment', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_tutor_course_desc_tab_switch',
        'label'    => esc_html__( 'Tutor Course Description Tab Swicher', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_tutor_course_curriculum_tab_switch',
        'label'    => esc_html__( 'Tutor Course Curriculum Tab Swicher', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_tutor_course_reviews_tab_switch',
        'label'    => esc_html__( 'Tutor Course Reviews Tab Swicher', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'paradise_htb_tutor_course_instructor_tab_switch',
        'label'    => esc_html__( 'Tutor Course Instructor Tab Swicher', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '1',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
    ];
    return $fields;
}

if (  function_exists('tutor') ) {
    add_filter( 'kirki/fields', 'paradise_htb_tutor_course_fields' );
}


/**
 * Added Fields
 */
function paradise_htb_typo_fields( $fields ) {
    // typography settings
    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_body_setting',
        'label'       => esc_html__( 'Body Font', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'body',
            ],
        ],
    ];

    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_h_setting',
        'label'       => esc_html__( 'Heading h1 Fonts', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'h1',
            ],
        ],
    ];

    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_h2_setting',
        'label'       => esc_html__( 'Heading h2 Fonts', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'h2',
            ],
        ],
    ];

    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_h3_setting',
        'label'       => esc_html__( 'Heading h3 Fonts', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'h3',
            ],
        ],
    ];

    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_h4_setting',
        'label'       => esc_html__( 'Heading h4 Fonts', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'h4',
            ],
        ],
    ];

    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_h5_setting',
        'label'       => esc_html__( 'Heading h5 Fonts', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'h5',
            ],
        ],
    ];

    $fields[] = [
        'type'        => 'typography',
        'settings'    => 'typography_h6_setting',
        'label'       => esc_html__( 'Heading h6 Fonts', 'paradise_htb' ),
        'section'     => 'typo_setting',
        'default'     => [
            'font-family'    => '',
            'variant'        => '',
            'font-size'      => '',
            'line-height'    => '',
            'letter-spacing' => '0',
            'color'          => '',
        ],
        'priority'    => 10,
        'transport'   => 'auto',
        'output'      => [
            [
                'element' => 'h6',
            ],
        ],
    ];
    return $fields;
}

add_filter( 'kirki/fields', 'paradise_htb_typo_fields' );


// course_settings
function paradise_htb_course_fields( $fields ) {

    $fields[] = [
        'type'        => 'radio-image',
        'settings'    => 'course_style',
        'label'       => esc_html__( 'Select Course Style', 'paradise_htb' ),
        'section'     => 'tutor_course_settings',
        'default'     => '5',
        'placeholder' => esc_html__( 'Select an option...', 'paradise_htb' ),
        'priority'    => 10,
        'multiple'    => 1,
        'choices'     => [
            'standard'   => get_template_directory_uri() . '/inc/img/course/course-1.jpg',
            'course_with_sidebar' => get_template_directory_uri() . '/inc/img/course/course-2.jpg',
            'course_solid'  => get_template_directory_uri() . '/inc/img/course/course-3.jpg',
        ],
        'default'     => 'standard',
    ];

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'course_search_switch',
        'label'    => esc_html__( 'Show search?', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
        'active_callback' => [
            [
                'setting'  => 'course_with_sidebar',
                'operator' => '==',
                'value'    => true,
            ],
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'course_latest_post_switch',
        'label'    => esc_html__( 'Show latest post?', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
        'active_callback' => [
            [
                'setting'  => 'course_with_sidebar',
                'operator' => '==',
                'value'    => true,
            ],
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'course_category_switch',
        'label'    => esc_html__( 'Show category filter?', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
        'active_callback' => [
            [
                'setting'  => 'course_with_sidebar',
                'operator' => '==',
                'value'    => true,
            ],
        ],
    ];    

    $fields[] = [
        'type'     => 'switch',
        'settings' => 'course_skill_switch',
        'label'    => esc_html__( 'Show skill filter?', 'paradise_htb' ),
        'section'  => 'tutor_course_settings',
        'default'  => '0',
        'priority' => 10,
        'choices'  => [
            'on'  => esc_html__( 'Enable', 'paradise_htb' ),
            'off' => esc_html__( 'Disable', 'paradise_htb' ),
        ],
        'active_callback' => [
            [
                'setting'  => 'course_with_sidebar',
                'operator' => '==',
                'value'    => true,
            ],
        ],
    ];

    return $fields;

}

add_filter( 'kirki/fields', 'paradise_htb_course_fields' );




/**
 * Added Fields
 */
function paradise_htb_slug_setting( $fields ) {
    // slug settings
    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_ev_slug',
        'label'    => esc_html__( 'Event Slug', 'paradise_htb' ),
        'section'  => 'slug_setting',
        'default'  => esc_html__( 'ourevent', 'paradise_htb' ),
        'priority' => 10,
    ];

    $fields[] = [
        'type'     => 'text',
        'settings' => 'paradise_htb_port_slug',
        'label'    => esc_html__( 'Portfolio Slug', 'paradise_htb' ),
        'section'  => 'slug_setting',
        'default'  => esc_html__( 'ourportfolio', 'paradise_htb' ),
        'priority' => 10,
    ];

    return $fields;
}

add_filter( 'kirki/fields', 'paradise_htb_slug_setting' );


/**
 * This is a short hand function for getting setting value from customizer
 *
 * @param string $name
 *
 * @return bool|string
 */
function paradise_htb_THEME_option( $name ) {
    $value = '';
    if ( class_exists( 'paradise_htb' ) ) {
        $value = Kirki::get_option( paradise_htb_get_theme(), $name );
    }

    return apply_filters( 'paradise_htb_THEME_option', $value, $name );
}

/**
 * Get config ID
 *
 * @return string
 */
function paradise_htb_get_theme() {
    return 'paradise_htb';
}