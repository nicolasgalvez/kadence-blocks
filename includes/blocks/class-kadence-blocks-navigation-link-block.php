<?php
/**
 * Class to Build the Navigation Link Block.
 *
 * @package Kadence Blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class to Build the Navigation Link Block.
 *
 * @category class
 */
class Kadence_Blocks_Navigation_Link_Block extends Kadence_Blocks_Abstract_Block {

	/**
	 * Instance of this class
	 *
	 * @var null
	 */
	private static $instance = null;

	/**
	 * Block name within this namespace.
	 *
	 * @var string
	 */
	protected $block_name = 'navigation-link';

	/**
	 * Block determines in scripts need to be loaded for block.
	 *
	 * @var string
	 */
	protected $has_script = false;

	protected $has_style = false;

	/**
	 * Instance of this class
	 *
	 * @var null
	 */
	private static $seen_refs = array();

	/**
	 * Instance Control
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Builds CSS for block.
	 *
	 * @param array $attributes the blocks attributes.
	 * @param Kadence_Blocks_CSS $css the css class for blocks.
	 * @param string $unique_id the blocks attr ID.
	 * @param string $unique_style_id the blocks alternate ID for queries.
	 */
	public function build_css( $attributes, $css, $unique_id, $unique_style_id ) {

		$css->set_style_id( 'kb-' . $this->block_name . $unique_style_id );

		return $css->css_output();
	}
	/**
	 * Build HTML for dynamic blocks
	 *
	 * @param $attributes
	 * @param $unique_id
	 * @param $content
	 * @param WP_Block $block_instance The instance of the WP_Block class that represents the block being rendered.
	 *
	 * @return mixed
	 */
	public function build_html( $attributes, $unique_id, $content, $block_instance ) {

		// Prevent a nav block from being rendered inside itself.
		if ( isset( self::$seen_refs[ $attributes['id'] ] ) ) {
			// WP_DEBUG_DISPLAY must only be honored when WP_DEBUG. This precedent
			// is set in `wp_debug_mode()`.
			$is_debug = WP_DEBUG && WP_DEBUG_DISPLAY;

			return $is_debug ?
				// translators: Visible only in the front end, this warning takes the place of a faulty block.
				__( '[block rendering halted]', 'kadence-blocks' ) :
				'';
		}
		self::$seen_refs[ $attributes['id'] ] = true;

		$nav_attributes = $this->merge_defaults( $attributes );

		// Handle embeds for nav block.
		global $wp_embed;
		$content = $wp_embed->run_shortcode( $content );
		$content = $wp_embed->autoembed( $content );
		$content = do_blocks( $content );

		unset( self::$seen_refs[ $attributes['id'] ] );

		$label = ! empty( $attributes['label'] ) ? $attributes['label'] : '';
		$url = ! empty( $attributes['url'] ) ? $attributes['url'] : '';

		$wrapper_classes = array();
		$wrapper_classes[] = 'wp-block-kadence-navigation-link' . $unique_id;

		$name = ! empty( $attributes['name'] ) ? $attributes['name'] : '';

		$wrapper_attributes = get_block_wrapper_attributes(
			array(
				'class'      => implode( ' ', $wrapper_classes ),
				'aria-label' => $name,
			)
		);

		$has_children = ! empty( $content );

		$down_arrow_icon = '<svg class="kadence-svg-icon kadence-arrow-down-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">';
		$down_arrow_icon .= '<title>' . esc_html__( 'Expand', 'kadence' ) . '</title>';
		$down_arrow_icon .= '<path d="M5.293 9.707l6 6c0.391 0.391 1.024 0.391 1.414 0l6-6c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>';
		$down_arrow_icon .= '</svg>';

		$sub_menu_content = $has_children ? '<ul class="sub-menu">' . $content . '</ul>' : '';

		return sprintf(
			'<li %1$s><div class="link-drop-wrap"><a href="' . esc_url( $url ) . '"><span class="link-drop-title-wrap">' . esc_html( $label ) . '<span class="title-dropdown-nav-toggle">%2$s</span></span></a></div>%3$s</li>',
			$wrapper_attributes,
			$has_children ? $down_arrow_icon : '',
			$sub_menu_content
		);
	}

	/**
	 * Merges in default values from the cpt registration to the meta attributes from the database.
	 *
	 * @param array $attributes The database attribtues.
	 * @return array
	 */
	private function merge_defaults( $attributes ) {
		// $meta_keys = get_registered_meta_keys( 'post', 'kadence_navigation' );
		// $meta_prefix = '_kad_navigation_';
		$default_attributes = array();

		// foreach ( $meta_keys as $key => $value ) {
		// 	if ( str_starts_with( $key, $meta_prefix ) && array_key_exists( 'default', $value ) ) {
		// 		$attr_name = str_replace( $meta_prefix, '', $key );
		// 		$default_attributes[ $attr_name ] = $value['default'];
		// 	}
		// }

		return array_merge( $default_attributes, $attributes );
	}

	/**
	 * Get the value for a responsive attribute considering inheritance.
	 *
	 * @param mixed  $value The desktop value.
	 * @param mixed  $value_tablet The tablet value.
	 * @param mixed  $value_mobile The mobile value.
	 * @param string $size The mobile value.
	 * @return mixed
	 */
	public function get_inherited_value( $value, $value_tablet, $value_mobile, $size = 'Desktop' ) {
		if ( $size === 'Mobile' ) {
			if ( ! empty( $value_mobile ) ) {
				return $value_mobile;
			} else if ( ! empty( $value_tablet ) ) {
				return $value_tablet;
			}
		} else if ( $size === 'Tablet' ) {
			if ( ! empty( $value_tablet ) ) {
				return $value_tablet;
			}
		}
		return $value;
	}

	/**
	 * Builds an html attribute string from an array of keys and values.
	 *
	 * @param array $attributes The database attribtues.
	 * @return array
	 */
	public function build_html_attributes( $attributes ) {
		if ( empty( $attributes ) ) {
			return '';
		}

		$normalized_attributes = array();
		foreach ( $attributes as $key => $value ) {
			$normalized_attributes[] = $key . '="' . esc_attr( $value ) . '"';
		}

		return implode( ' ', $normalized_attributes );
	}

}

Kadence_Blocks_Navigation_Link_Block::get_instance();
