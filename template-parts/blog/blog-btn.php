<?php

/**
 * Template part for displaying post btn
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package paradise_htb
 */

$paradise_htb_blog_btn = get_theme_mod( 'paradise_htb_blog_btn', 'Read More' );
$paradise_htb_blog_btn_switch = get_theme_mod( 'paradise_htb_blog_btn_switch', true );

?>

<?php if ( !empty( $paradise_htb_blog_btn_switch ) ): ?>
<div class="postbox__read-more">
    <a href="<?php the_permalink();?>" class="tp-btn"><?php print esc_html( $paradise_htb_blog_btn );?></a>
</div>
<?php endif;?>