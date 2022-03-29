/**
 * Measure Component
 *
 */

import { PopColorControl } from '@kadence/components';

/**
 * Import External
 */
import map from 'lodash/map';

/**
 * Internal block libraries
 */
import { __ } from '@wordpress/i18n';
import { Fragment } from '@wordpress/element';
import {
	Button,
	ButtonGroup,
	Tooltip,
} from '@wordpress/components';

// @todo: Replace with icon from @kadence/icons once created
let icons = {};
icons.outlinetop = <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
	<rect x="2.714" y="5.492" width="1.048" height="9.017" fill="#555d66" />
	<rect x="16.265" y="5.498" width="1.023" height="9.003" fill="#555d66" />
	<rect x="5.518" y="2.186" width="8.964" height="2.482" fill="#272b2f" />
	<rect x="5.487" y="16.261" width="9.026" height="1.037" fill="#555d66" />
</svg>;
icons.outlineright = <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
	<rect x="2.714" y="5.492" width="1.046" height="9.017" fill="#555d66" />
	<rect x="15.244" y="5.498" width="2.518" height="9.003" fill="#272b2f" />
	<rect x="5.518" y="2.719" width="8.964" height="0.954" fill="#555d66" />
	<rect x="5.487" y="16.308" width="9.026" height="0.99" fill="#555d66" />
</svg>;
icons.outlinebottom = <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
	<rect x="2.714" y="5.492" width="1" height="9.017" fill="#555d66" />
	<rect x="16.261" y="5.498" width="1.027" height="9.003" fill="#555d66" />
	<rect x="5.518" y="2.719" width="8.964" height="0.968" fill="#555d66" />
	<rect x="5.487" y="15.28" width="9.026" height="2.499" fill="#272b2f" />
</svg>;
icons.outlineleft = <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414">
	<rect x="2.202" y="5.492" width="2.503" height="9.017" fill="#272b2f" />
	<rect x="16.276" y="5.498" width="1.012" height="9.003" fill="#555d66" />
	<rect x="5.518" y="2.719" width="8.964" height="0.966" fill="#555d66" />
	<rect x="5.487" y="16.303" width="9.026" height="0.995" fill="#555d66" />
</svg>;
icons.percent = <svg width="24" height="24"
					 xmlns="http://www.w3.org/2000/svg"
					 fillRule="evenodd"
					 strokeLinejoin="round"
					 strokeMiterlimit="2"
					 clipRule="evenodd"
					 viewBox="0 0 20 20"
>
	<path
		fillRule="nonzero"
		d="M5.689 7.831c0 .246.017.476.053.69.035.215.092.401.17.559.079.158.182.283.309.375a.775.775 0 00.467.138.803.803 0 00.473-.138.978.978 0 00.315-.375 2.11 2.11 0 00.178-.559c.039-.214.059-.444.059-.69 0-.219-.015-.433-.046-.644a1.995 1.995 0 00-.164-.565 1.076 1.076 0 00-.316-.401.794.794 0 00-.499-.151.797.797 0 00-.5.151 1.02 1.02 0 00-.308.401 1.992 1.992 0 00-.152.565 5.253 5.253 0 00-.039.644zm1.012 2.616c-.394 0-.732-.07-1.012-.21a1.899 1.899 0 01-.684-.566 2.316 2.316 0 01-.381-.828 4.148 4.148 0 01-.118-1.012c0-.35.042-.685.125-1.005.083-.32.215-.598.394-.835.18-.236.408-.425.684-.565.276-.14.606-.21.992-.21s.716.07.992.21c.276.14.504.329.684.565.179.237.311.515.394.835.083.32.125.655.125 1.005 0 .36-.039.697-.118 1.012a2.3 2.3 0 01-.382.828 1.887 1.887 0 01-.683.566c-.28.14-.618.21-1.012.21zm5.586 1.722c0 .245.017.475.053.69.035.214.092.401.17.558.079.158.182.283.309.375a.775.775 0 00.467.138.803.803 0 00.473-.138.978.978 0 00.315-.375c.079-.157.138-.344.178-.558.039-.215.059-.445.059-.69 0-.219-.015-.434-.046-.644a1.992 1.992 0 00-.164-.566 1.065 1.065 0 00-.316-.4.795.795 0 00-.499-.152.798.798 0 00-.5.152 1.01 1.01 0 00-.308.4 1.99 1.99 0 00-.152.566c-.026.21-.039.425-.039.644zm1.012 2.615c-.394 0-.732-.07-1.012-.21a1.885 1.885 0 01-.683-.565 2.317 2.317 0 01-.382-.828 4.16 4.16 0 01-.118-1.012c0-.351.042-.686.125-1.006.083-.32.215-.598.394-.834.18-.237.408-.425.684-.566.276-.14.606-.21.992-.21s.716.07.992.21c.276.141.504.329.684.566.179.236.311.514.394.834.083.32.125.655.125 1.006 0 .359-.039.696-.118 1.012a2.332 2.332 0 01-.381.828 1.897 1.897 0 01-.684.565c-.28.14-.618.21-1.012.21zm-1.341-9.7h.999l-5.086 9.832H6.846l5.112-9.832z"
	></path>
</svg>;

/**
 * Build the Measure controls
 * @returns {object} Measure settings.
 */
export default function BorderColorControls( {
												 label,
												 values,
												 control,
												 onChange,
												 onControl,
												 colorDefault = '',
												 controlTypes = [
													 { key: 'linked', name: __( 'Linked' ), icon: icons.linked },
													 { key: 'individual', name: __( 'Individual' ), icon: icons.individual },
												 ],
												 firstIcon = icons.outlinetop,
												 secondIcon = icons.outlineright,
												 thirdIcon = icons.outlinebottom,
												 fourthIcon = icons.outlineleft,
											 } ) {
	return [
		onChange && onControl && (
			<Fragment>
				<ButtonGroup className="kt-size-type-options kt-outline-control" aria-label={ __( 'Color Control Type' ) }>
					{ map( controlTypes, ( { name, key, icon } ) => (
						<Tooltip text={ name }>
							<Button
								key={ key }
								className="kt-size-btn"
								isSmall
								isPrimary={ control === key }
								aria-pressed={ control === key }
								onClick={ () => onControl( key ) }
							>
								{ icon }
							</Button>
						</Tooltip>
					) ) }
				</ButtonGroup>
				{ control && control !== 'individual' && (
					<Fragment>
						<p className="kt-setting-label">{ label }</p>
						<PopColorControl
							label={ icons.linked }
							value={ ( values && values[ 0 ] ? values[ 0 ] : '' ) }
							default={ colorDefault }
							onChange={ ( value ) => onChange( [ value, value, value, value ] ) }
						/>
					</Fragment>
				) }
				{ control && control === 'individual' && (
					<div className="kt-border-color-array-control">
						<p className="kt-setting-label">{ label }</p>
						<PopColorControl
							label={ firstIcon }
							value={ ( values && values[ 0 ] ? values[ 0 ] : '' ) }
							default={ colorDefault }
							onChange={ ( value ) => onChange( [ value, values[ 1 ], values[ 2 ], values[ 3 ] ] ) }
						/>
						<PopColorControl
							label={ secondIcon }
							value={ ( values && values[ 0 ] ? values[ 0 ] : '' ) }
							default={ colorDefault }
							onChange={ ( value ) => onChange( [ values[ 0 ], value, values[ 2 ], values[ 3 ] ] ) }
						/>
						<PopColorControl
							label={ thirdIcon }
							value={ ( values && values[ 0 ] ? values[ 0 ] : '' ) }
							default={ colorDefault }
							onChange={ ( value ) => onChange( [ values[ 0 ], values[ 1 ], value, values[ 3 ] ] ) }
						/>
						<PopColorControl
							label={ fourthIcon }
							value={ ( values && values[ 0 ] ? values[ 0 ] : '' ) }
							default={ colorDefault }
							onChange={ ( value ) => onChange( [ values[ 0 ], values[ 1 ], values[ 2 ], value ] ) }
						/>
					</div>
				) }
			</Fragment>
		),
	];
}
