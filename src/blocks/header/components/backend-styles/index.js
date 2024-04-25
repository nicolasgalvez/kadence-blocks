import {
	KadenceBlocksCSS,
	getFontSizeOptionOutput,
	getPreviewSize,
	getSpacingOptionOutput,
	KadenceColorOutput,
	useElementHeight,
} from '@kadence/helpers';

export default function BackendStyles(props) {
	const { attributes, isSelected, previewDevice, metaAttributes, currentRef } = props;

	const { uniqueID } = attributes;

	const {
		padding,
		tabletPadding,
		mobilePadding,
		paddingUnit,
		margin,
		tabletMargin,
		mobileMargin,
		marginUnit,
		border,
		borderTablet,
		borderMobile,
		borderUnit,
		borderHover,
		borderHoverTablet,
		borderHoverMobile,
		borderHoverUnit,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		borderRadiusUnit,
		borderRadiusHover,
		borderRadiusHoverTablet,
		borderRadiusHoverMobile,
		borderRadiusHoverUnit,
		borderTransparent,
		borderTransparentTablet,
		borderTransparentMobile,
		borderTransparentUnit,
		borderTransparentHover,
		borderTransparentHoverTablet,
		borderTransparentHoverMobile,
		borderTransparentHoverUnit,
		borderRadiusTransparent,
		borderRadiusTransparentTablet,
		borderRadiusTransparentMobile,
		borderRadiusTransparentUnit,
		borderRadiusTransparentHover,
		borderRadiusTransparentHoverTablet,
		borderRadiusTransparentHoverMobile,
		borderRadiusTransparentHoverUnit,
		borderSticky,
		borderStickyTablet,
		borderStickyMobile,
		borderStickyUnit,
		borderStickyHover,
		borderStickyHoverTablet,
		borderStickyHoverMobile,
		borderStickyHoverUnit,
		borderRadiusSticky,
		borderRadiusStickyTablet,
		borderRadiusStickyMobile,
		borderRadiusStickyUnit,
		borderRadiusStickyHover,
		borderRadiusStickyHoverTablet,
		borderRadiusStickyHoverMobile,
		borderRadiusStickyHoverUnit,
		flex,
		className,
		anchor,
		background,
		backgroundHover,
		backgroundTransparent,
		backgroundTransparentHover,
		backgroundSticky,
		backgroundStickyHover,
		typography,
		linkColor,
		linkHoverColor,
		height,
		heightUnit,
		width,
		widthUnit,
		isSticky,
		isStickyTablet,
		isStickyMobile,
		isTransparent,
		isTransparentTablet,
		isTransparentMobile,
		autoTransparentSpacing,
	} = metaAttributes;

	const css = new KadenceBlocksCSS();

	const previewMarginTop = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[0] : '',
		undefined !== tabletMargin ? tabletMargin[0] : '',
		undefined !== mobileMargin ? mobileMargin[0] : ''
	);
	const previewMarginRight = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[1] : '',
		undefined !== tabletMargin ? tabletMargin[1] : '',
		undefined !== mobileMargin ? mobileMargin[1] : ''
	);
	const previewMarginBottom = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[2] : '',
		undefined !== tabletMargin ? tabletMargin[2] : '',
		undefined !== mobileMargin ? mobileMargin[2] : ''
	);
	const previewMarginLeft = getPreviewSize(
		previewDevice,
		undefined !== margin ? margin[3] : '',
		undefined !== tabletMargin ? tabletMargin[3] : '',
		undefined !== mobileMargin ? mobileMargin[3] : ''
	);

	const previewPaddingTop = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[0] : '',
		undefined !== tabletPadding ? tabletPadding[0] : '',
		undefined !== mobilePadding ? mobilePadding[0] : ''
	);
	const previewPaddingRight = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[1] : '',
		undefined !== tabletPadding ? tabletPadding[1] : '',
		undefined !== mobilePadding ? mobilePadding[1] : ''
	);
	const previewPaddingBottom = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[2] : '',
		undefined !== tabletPadding ? tabletPadding[2] : '',
		undefined !== mobilePadding ? mobilePadding[2] : ''
	);
	const previewPaddingLeft = getPreviewSize(
		previewDevice,
		undefined !== padding ? padding[3] : '',
		undefined !== tabletPadding ? tabletPadding[3] : '',
		undefined !== mobilePadding ? mobilePadding[3] : ''
	);

	const previewBorderTopLeftRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[0] : '',
		undefined !== borderRadiusTablet ? borderRadiusTablet[0] : '',
		undefined !== borderRadiusMobile ? borderRadiusMobile[0] : ''
	);
	const previewBorderTopRightRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[1] : '',
		undefined !== borderRadiusTablet ? borderRadiusTablet[1] : '',
		undefined !== borderRadiusMobile ? borderRadiusMobile[1] : ''
	);
	const previewBorderBottomRightRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[2] : '',
		undefined !== borderRadiusTablet ? borderRadiusTablet[2] : '',
		undefined !== borderRadiusMobile ? borderRadiusMobile[2] : ''
	);
	const previewBorderBottomLeftRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadius ? borderRadius[3] : '',
		undefined !== borderRadiusTablet ? borderRadiusTablet[3] : '',
		undefined !== borderRadiusMobile ? borderRadiusMobile[3] : ''
	);
	const previewborderHoverTopLeftRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusHover ? borderRadiusHover[0] : '',
		undefined !== borderRadiusHoverTablet ? borderRadiusHoverTablet[0] : '',
		undefined !== borderRadiusHoverMobile ? borderRadiusHoverMobile[0] : ''
	);
	const previewborderHoverTopRightRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusHover ? borderRadiusHover[1] : '',
		undefined !== borderRadiusHoverTablet ? borderRadiusHoverTablet[1] : '',
		undefined !== borderRadiusHoverMobile ? borderRadiusHoverMobile[1] : ''
	);
	const previewborderHoverBottomRightRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusHover ? borderRadiusHover[2] : '',
		undefined !== borderRadiusHoverTablet ? borderRadiusHoverTablet[2] : '',
		undefined !== borderRadiusHoverMobile ? borderRadiusHoverMobile[2] : ''
	);
	const previewborderHoverBottomLeftRadius = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusHover ? borderRadiusHover[3] : '',
		undefined !== borderRadiusHoverTablet ? borderRadiusHoverTablet[3] : '',
		undefined !== borderRadiusHoverMobile ? borderRadiusHoverMobile[3] : ''
	);
	const previewBorderTopLeftRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparent ? borderRadiusTransparent[0] : '',
		undefined !== borderRadiusTransparentTablet ? borderRadiusTransparentTablet[0] : '',
		undefined !== borderRadiusTransparentMobile ? borderRadiusTransparentMobile[0] : ''
	);
	const previewBorderTopRightRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparent ? borderRadiusTransparent[1] : '',
		undefined !== borderRadiusTransparentTablet ? borderRadiusTransparentTablet[1] : '',
		undefined !== borderRadiusTransparentMobile ? borderRadiusTransparentMobile[1] : ''
	);
	const previewBorderBottomRightRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparent ? borderRadiusTransparent[2] : '',
		undefined !== borderRadiusTransparentTablet ? borderRadiusTransparentTablet[2] : '',
		undefined !== borderRadiusTransparentMobile ? borderRadiusTransparentMobile[2] : ''
	);
	const previewBorderBottomLeftRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparent ? borderRadiusTransparent[3] : '',
		undefined !== borderRadiusTransparentTablet ? borderRadiusTransparentTablet[3] : '',
		undefined !== borderRadiusTransparentMobile ? borderRadiusTransparentMobile[3] : ''
	);
	const previewborderHoverTopLeftRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparentHover ? borderRadiusTransparentHover[0] : '',
		undefined !== borderRadiusTransparentHoverTablet ? borderRadiusTransparentHoverTablet[0] : '',
		undefined !== borderRadiusTransparentHoverMobile ? borderRadiusTransparentHoverMobile[0] : ''
	);
	const previewborderHoverTopRightRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparentHover ? borderRadiusTransparentHover[1] : '',
		undefined !== borderRadiusTransparentHoverTablet ? borderRadiusTransparentHoverTablet[1] : '',
		undefined !== borderRadiusTransparentHoverMobile ? borderRadiusTransparentHoverMobile[1] : ''
	);
	const previewborderHoverBottomRightRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparentHover ? borderRadiusTransparentHover[2] : '',
		undefined !== borderRadiusTransparentHoverTablet ? borderRadiusTransparentHoverTablet[2] : '',
		undefined !== borderRadiusTransparentHoverMobile ? borderRadiusTransparentHoverMobile[2] : ''
	);
	const previewborderHoverBottomLeftRadiusTransparent = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusTransparentHover ? borderRadiusTransparentHover[3] : '',
		undefined !== borderRadiusTransparentHoverTablet ? borderRadiusTransparentHoverTablet[3] : '',
		undefined !== borderRadiusTransparentHoverMobile ? borderRadiusTransparentHoverMobile[3] : ''
	);
	const previewBorderTransparentTop = css.render_border(
		borderTransparent,
		borderTransparentTablet,
		borderTransparentMobile,
		previewDevice,
		'top'
	);
	const previewBorderTransparentLeft = css.render_border(
		borderTransparent,
		borderTransparentTablet,
		borderTransparentMobile,
		previewDevice,
		'left'
	);
	const previewBorderTransparentRight = css.render_border(
		borderTransparent,
		borderTransparentTablet,
		borderTransparentMobile,
		previewDevice,
		'right'
	);
	const previewBorderTransparentBottom = css.render_border(
		borderTransparent,
		borderTransparentTablet,
		borderTransparentMobile,
		previewDevice,
		'bottom'
	);
	const previewBorderTransparentHoverTop = css.render_border(
		borderTransparentHover,
		borderTransparentHoverTablet,
		borderTransparentHoverMobile,
		previewDevice,
		'top'
	);
	const previewBorderTransparentHoverLeft = css.render_border(
		borderTransparentHover,
		borderTransparentHoverTablet,
		borderTransparentHoverMobile,
		previewDevice,
		'left'
	);
	const previewBorderTransparentHoverRight = css.render_border(
		borderTransparentHover,
		borderTransparentHoverTablet,
		borderTransparentHoverMobile,
		previewDevice,
		'right'
	);
	const previewBorderTransparentHoverBottom = css.render_border(
		borderTransparentHover,
		borderTransparentHoverTablet,
		borderTransparentHoverMobile,
		previewDevice,
		'bottom'
	);
	const previewBorderTopLeftRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusSticky ? borderRadiusSticky[0] : '',
		undefined !== borderRadiusStickyTablet ? borderRadiusStickyTablet[0] : '',
		undefined !== borderRadiusStickyMobile ? borderRadiusStickyMobile[0] : ''
	);
	const previewBorderTopRightRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusSticky ? borderRadiusSticky[1] : '',
		undefined !== borderRadiusStickyTablet ? borderRadiusStickyTablet[1] : '',
		undefined !== borderRadiusStickyMobile ? borderRadiusStickyMobile[1] : ''
	);
	const previewBorderBottomRightRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusSticky ? borderRadiusSticky[2] : '',
		undefined !== borderRadiusStickyTablet ? borderRadiusStickyTablet[2] : '',
		undefined !== borderRadiusStickyMobile ? borderRadiusStickyMobile[2] : ''
	);
	const previewBorderBottomLeftRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusSticky ? borderRadiusSticky[3] : '',
		undefined !== borderRadiusStickyTablet ? borderRadiusStickyTablet[3] : '',
		undefined !== borderRadiusStickyMobile ? borderRadiusStickyMobile[3] : ''
	);
	const previewborderHoverTopLeftRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusStickyHover ? borderRadiusStickyHover[0] : '',
		undefined !== borderRadiusStickyHoverTablet ? borderRadiusStickyHoverTablet[0] : '',
		undefined !== borderRadiusStickyHoverMobile ? borderRadiusStickyHoverMobile[0] : ''
	);
	const previewborderHoverTopRightRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusStickyHover ? borderRadiusStickyHover[1] : '',
		undefined !== borderRadiusStickyHoverTablet ? borderRadiusStickyHoverTablet[1] : '',
		undefined !== borderRadiusStickyHoverMobile ? borderRadiusStickyHoverMobile[1] : ''
	);
	const previewborderHoverBottomRightRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusStickyHover ? borderRadiusStickyHover[2] : '',
		undefined !== borderRadiusStickyHoverTablet ? borderRadiusStickyHoverTablet[2] : '',
		undefined !== borderRadiusStickyHoverMobile ? borderRadiusStickyHoverMobile[2] : ''
	);
	const previewborderHoverBottomLeftRadiusSticky = getPreviewSize(
		previewDevice,
		undefined !== borderRadiusStickyHover ? borderRadiusStickyHover[3] : '',
		undefined !== borderRadiusStickyHoverTablet ? borderRadiusStickyHoverTablet[3] : '',
		undefined !== borderRadiusStickyHoverMobile ? borderRadiusStickyHoverMobile[3] : ''
	);
	const previewBorderStickyTop = css.render_border(
		borderSticky,
		borderStickyTablet,
		borderStickyMobile,
		previewDevice,
		'top'
	);
	const previewBorderStickyLeft = css.render_border(
		borderSticky,
		borderStickyTablet,
		borderStickyMobile,
		previewDevice,
		'left'
	);
	const previewBorderStickyRight = css.render_border(
		borderSticky,
		borderStickyTablet,
		borderStickyMobile,
		previewDevice,
		'right'
	);
	const previewBorderStickyBottom = css.render_border(
		borderSticky,
		borderStickyTablet,
		borderStickyMobile,
		previewDevice,
		'bottom'
	);
	const previewBorderStickyHoverTop = css.render_border(
		borderStickyHover,
		borderStickyHoverTablet,
		borderStickyHoverMobile,
		previewDevice,
		'top'
	);
	const previewBorderStickyHoverLeft = css.render_border(
		borderStickyHover,
		borderStickyHoverTablet,
		borderStickyHoverMobile,
		previewDevice,
		'left'
	);
	const previewBorderStickyHoverRight = css.render_border(
		borderStickyHover,
		borderStickyHoverTablet,
		borderStickyHoverMobile,
		previewDevice,
		'right'
	);
	const previewBorderStickyHoverBottom = css.render_border(
		borderStickyHover,
		borderStickyHoverTablet,
		borderStickyHoverMobile,
		previewDevice,
		'bottom'
	);

	// Header font options
	const previewFontSize = getPreviewSize(
		previewDevice,
		undefined !== typography?.size?.[0] ? typography.size[0] : '',
		undefined !== typography?.size?.[1] ? typography.size[1] : '',
		undefined !== typography?.size?.[2] ? typography.size[2] : ''
	);
	const previewLineHeight = getPreviewSize(
		previewDevice,
		undefined !== typography?.lineHeight?.[0] ? typography.lineHeight[0] : '',
		undefined !== typography?.lineHeight?.[1] ? typography.lineHeight[1] : '',
		undefined !== typography?.lineHeight?.[2] ? typography.lineHeight[2] : ''
	);

	const previewLetterSpacing = getPreviewSize(
		previewDevice,
		undefined !== typography?.letterSpacing?.[0] ? typography.letterSpacing[0] : '',
		undefined !== typography?.letterSpacing?.[1] ? typography.letterSpacing[1] : '',
		undefined !== typography?.letterSpacing?.[2] ? typography.letterSpacing[2] : ''
	);

	// Flex direction options
	const previewDirection = getPreviewSize(
		previewDevice,
		undefined !== flex?.direction?.[0] ? flex.direction[0] : '',
		undefined !== flex?.direction?.[1] ? flex.direction[1] : '',
		undefined !== flex?.direction?.[2] ? flex.direction[2] : ''
	);

	const previewJustifyContent = getPreviewSize(
		previewDevice,
		undefined !== flex?.justifyContent?.[0] ? flex.justifyContent[0] : '',
		undefined !== flex?.justifyContent?.[1] ? flex.justifyContent[1] : '',
		undefined !== flex?.justifyContent?.[2] ? flex.justifyContent[2] : ''
	);

	const previewVerticalAlignment = getPreviewSize(
		previewDevice,
		undefined !== flex?.verticalAlignment?.[0] ? flex.verticalAlignment[0] : '',
		undefined !== flex?.verticalAlignment?.[1] ? flex.verticalAlignment[1] : '',
		undefined !== flex?.verticalAlignment?.[2] ? flex.verticalAlignment[2] : ''
	);

	const previewHeight = getPreviewSize(
		previewDevice,
		undefined !== height?.[0] ? height[0] : '',
		undefined !== height?.[1] ? height[1] : '',
		undefined !== height?.[2] ? height[2] : ''
	);

	const previewWidth = getPreviewSize(
		previewDevice,
		undefined !== width?.[0] ? width[0] : '',
		undefined !== width?.[1] ? width[1] : '',
		undefined !== width?.[2] ? width[2] : ''
	);

	const previewIsSticky = getPreviewSize(previewDevice, isSticky, isStickyTablet, isStickyMobile);
	const previewIsTransparent = getPreviewSize(
		previewDevice,
		isTransparent == '1',
		isTransparentTablet == '1',
		isTransparentMobile == '1'
	);

	//const elementHeight = useElementHeight(currentRef, [isSelected]);
	const elementHeight = currentRef?.current?.clientHeight;

	if (isSelected) {
		css.set_selector(
			`.block-editor-block-popover__inbetween-container .block-editor-block-list__insertion-point.is-with-inserter`
		);
		css.add_property('display', 'none');
	}

	css.set_selector(
		`.wp-block-kadence-header${uniqueID} > .wp-block-kadence-header-desktop, .wp-block-kadence-header${uniqueID} > .wp-block-kadence-header-tablet`
	);
	css.add_property('display', 'flex');
	css.add_property('flex-wrap', 'wrap');
	css.add_property('flex-basis', '0');

	if (previewDirection === 'horizontal') {
		css.add_property('flex-direction', 'row');
	} else if (previewDirection === 'horizontal-reverse') {
		css.add_property('flex-direction', 'row-reverse');
	} else if (previewDirection === 'vertical-reverse') {
		css.add_property('flex-direction', 'column-reverse');
	} else {
		css.add_property('flex-direction', 'column');
	}

	if (previewDirection === 'vertical-reverse' || previewDirection === 'vertical') {
		css.add_property('justify-content', previewVerticalAlignment);
	}
	css.add_property('align-items', previewVerticalAlignment);
	css.add_property('color', KadenceColorOutput(typography.color));
	css.add_property('font-size', getFontSizeOptionOutput(previewFontSize, typography.sizeType));
	css.add_property('letter-spacing', getSpacingOptionOutput(previewLetterSpacing, typography.letterType));
	css.add_property('text-transform', typography.textTransform);
	css.add_property('font-family', typography.family);
	css.add_property('font-style', typography.style);
	css.add_property('font-weight', typography.weight);
	css.add_property('line-height', getSpacingOptionOutput(previewLineHeight, typography.lineType));
	if (previewIsTransparent != '1') {
		if ('normal' === background?.type && background?.image) {
			css.add_property('background-image', background.image);
			css.add_property('background-size', background.size);
			css.add_property('background-repeat', background.repeat);
			css.add_property('background-attachment', background.attachment);
			css.add_property('background-position', background.position);
		}
		if ('normal' === background?.type && background?.color) {
			css.add_property('background-color', KadenceColorOutput(background.color));
		}
		if ('gradient' === background?.type && background?.gradient) {
			css.add_property('background', background.gradient);
		}
	}
	if (previewIsTransparent == '1') {
		if ('normal' === backgroundTransparent?.type && backgroundTransparent?.image) {
			css.add_property('background-image', backgroundTransparent.image);
			css.add_property('background-size', backgroundTransparent.imageSize);
			css.add_property('background-repeat', backgroundTransparent.imageRepeat);
			css.add_property('background-attachment', backgroundTransparent.imageAttachment);
			css.add_property('background-position', backgroundTransparent.imagePosition);
		}
		if ('normal' === backgroundTransparent?.type && backgroundTransparent?.color) {
			css.add_property('background-color', KadenceColorOutput(backgroundTransparent.color));
		}
		if ('gradient' === backgroundTransparent?.type && backgroundTransparent?.gradient) {
			css.add_property('background', backgroundTransparent.gradient);
		}
	}
	if (previewIsSticky == '1') {
		if ('normal' === backgroundSticky?.type && backgroundSticky?.image) {
			css.add_property('background-image', backgroundSticky.image);
			css.add_property('background-size', backgroundSticky.imageSize);
			css.add_property('background-repeat', backgroundSticky.imageRepeat);
			css.add_property('background-attachment', backgroundSticky.imageAttachment);
			css.add_property('background-position', backgroundSticky.imagePosition);
		}
		if ('normal' === backgroundSticky?.type && backgroundSticky?.color) {
			css.add_property('background-color', KadenceColorOutput(backgroundSticky.color));
		}
		if ('gradient' === backgroundSticky?.type && backgroundSticky?.gradient) {
			css.add_property('background', backgroundSticky.gradient);
		}
	}

	css.add_property('margin-top', getSpacingOptionOutput(previewMarginTop, marginUnit));
	css.add_property('margin-right', getSpacingOptionOutput(previewMarginRight, marginUnit));
	css.add_property('margin-bottom', getSpacingOptionOutput(previewMarginBottom, marginUnit));
	css.add_property('margin-left', getSpacingOptionOutput(previewMarginLeft, marginUnit));
	css.add_property('padding-top', getSpacingOptionOutput(previewPaddingTop, paddingUnit));
	css.add_property('padding-right', getSpacingOptionOutput(previewPaddingRight, paddingUnit));
	css.add_property('padding-bottom', getSpacingOptionOutput(previewPaddingBottom, paddingUnit));
	css.add_property('padding-left', getSpacingOptionOutput(previewPaddingLeft, paddingUnit));
	css.add_property('border-top', css.render_border(border, borderTablet, borderMobile, previewDevice, 'top'));
	css.add_property('border-right', css.render_border(border, borderTablet, borderMobile, previewDevice, 'right'));
	css.add_property('border-bottom', css.render_border(border, borderTablet, borderMobile, previewDevice, 'bottom'));
	css.add_property('border-left', css.render_border(border, borderTablet, borderMobile, previewDevice, 'left'));
	css.add_property('border-top-left-radius', getSpacingOptionOutput(previewBorderTopLeftRadius, borderRadiusUnit));
	css.add_property('border-top-right-radius', getSpacingOptionOutput(previewBorderTopRightRadius, borderRadiusUnit));
	css.add_property(
		'border-bottom-right-radius',
		getSpacingOptionOutput(previewBorderBottomRightRadius, borderRadiusUnit)
	);
	css.add_property(
		'border-bottom-left-radius',
		getSpacingOptionOutput(previewBorderBottomLeftRadius, borderRadiusUnit)
	);
	//Transparent border
	if (previewIsTransparent == '1') {
		css.add_property('border-top', previewBorderTransparentTop);
		css.add_property('border-right', previewBorderTransparentRight);
		css.add_property('border-bottom', previewBorderTransparentBottom);
		css.add_property('border-left', previewBorderTransparentLeft);
		css.add_property(
			'border-top-left-radius',
			getSpacingOptionOutput(previewBorderTopLeftRadiusTransparent, borderRadiusTransparentUnit)
		);
		css.add_property(
			'border-top-right-radius',
			getSpacingOptionOutput(previewBorderTopRightRadiusTransparent, borderRadiusTransparentUnit)
		);
		css.add_property(
			'border-bottom-right-radius',
			getSpacingOptionOutput(previewBorderBottomRightRadiusTransparent, borderRadiusTransparentUnit)
		);
		css.add_property(
			'border-bottom-left-radius',
			getSpacingOptionOutput(previewBorderBottomLeftRadiusTransparent, borderRadiusTransparentUnit)
		);
	}
	//Sticky border
	if (previewIsSticky == '1') {
		css.add_property('border-top', previewBorderStickyTop);
		css.add_property('border-right', previewBorderStickyRight);
		css.add_property('border-bottom', previewBorderStickyBottom);
		css.add_property('border-left', previewBorderStickyLeft);
		css.add_property(
			'border-top-left-radius',
			getSpacingOptionOutput(previewBorderTopLeftRadiusSticky, borderRadiusStickyUnit)
		);
		css.add_property(
			'border-top-right-radius',
			getSpacingOptionOutput(previewBorderTopRightRadiusSticky, borderRadiusStickyUnit)
		);
		css.add_property(
			'border-bottom-right-radius',
			getSpacingOptionOutput(previewBorderBottomRightRadiusSticky, borderRadiusStickyUnit)
		);
		css.add_property(
			'border-bottom-left-radius',
			getSpacingOptionOutput(previewBorderBottomLeftRadiusSticky, borderRadiusStickyUnit)
		);
	}
	css.add_property('min-height', getSpacingOptionOutput(previewHeight, heightUnit));
	css.add_property('max-width', getSpacingOptionOutput(previewWidth, widthUnit));

	css.set_selector(`wp-block-kadence-header${uniqueID} > div:hover`);

	if (previewIsTransparent != '1') {
		if ('normal' === backgroundHover?.type && backgroundHover?.image) {
			css.add_property('background-image', backgroundHover.image);
			css.add_property('background-size', backgroundHover.imageSize);
			css.add_property('background-repeat', backgroundHover.imageRepeat);
			css.add_property('background-attachment', backgroundHover.imageAttachment);
			css.add_property('background-position', backgroundHover.imagePosition);
		}

		if ('normal' === backgroundHover?.type && backgroundHover?.color) {
			css.add_property('background-color', backgroundHover.color);
		}

		if ('gradient' === backgroundHover?.type && backgroundHover?.gradient) {
			css.add_property('background', backgroundHover.gradient);
		}
	}
	if (previewIsTransparent == '1') {
		if ('normal' === backgroundTransparentHover?.type && backgroundTransparentHover?.image) {
			css.add_property('background-image', backgroundTransparentHover.image);
			css.add_property('background-size', backgroundTransparentHover.imageSize);
			css.add_property('background-repeat', backgroundTransparentHover.imageRepeat);
			css.add_property('background-attachment', backgroundTransparentHover.imageAttachment);
			css.add_property('background-position', backgroundTransparentHover.imagePosition);
		}

		if ('normal' === backgroundTransparentHover?.type && backgroundTransparentHover?.color) {
			css.add_property('background-color', backgroundTransparentHover.color);
		}

		if ('gradient' === backgroundTransparentHover?.type && backgroundTransparentHover?.gradient) {
			css.add_property('background', backgroundTransparentHover.gradient);
		}
	}
	if (previewIsSticky == '1') {
		if ('normal' === backgroundStickyHover?.type && backgroundStickyHover?.image) {
			css.add_property('background-image', backgroundStickyHover.image);
			css.add_property('background-size', backgroundStickyHover.imageSize);
			css.add_property('background-repeat', backgroundStickyHover.imageRepeat);
			css.add_property('background-attachment', backgroundStickyHover.imageAttachment);
			css.add_property('background-position', backgroundStickyHover.imagePosition);
		}

		if ('normal' === backgroundStickyHover?.type && backgroundStickyHover?.color) {
			css.add_property('background-color', backgroundStickyHover.color);
		}

		if ('gradient' === backgroundStickyHover?.type && backgroundStickyHover?.gradient) {
			css.add_property('background', backgroundStickyHover.gradient);
		}
	}

	css.add_property(
		'border-top',
		css.render_border(borderHover, borderHoverTablet, borderHoverMobile, previewDevice, 'top')
	);
	css.add_property(
		'border-right',
		css.render_border(borderHover, borderHoverTablet, borderHoverMobile, previewDevice, 'right')
	);
	css.add_property(
		'border-bottom',
		css.render_border(borderHover, borderHoverTablet, borderHoverMobile, previewDevice, 'bottom')
	);
	css.add_property(
		'border-left',
		css.render_border(borderHover, borderHoverTablet, borderHoverMobile, previewDevice, 'left')
	);

	css.add_property(
		'border-top-left-radius',
		getSpacingOptionOutput(previewborderHoverTopLeftRadius, borderRadiusHoverUnit)
	);
	css.add_property(
		'border-top-right-radius',
		getSpacingOptionOutput(previewborderHoverTopRightRadius, borderRadiusHoverUnit)
	);
	css.add_property(
		'border-bottom-right-radius',
		getSpacingOptionOutput(previewborderHoverBottomRightRadius, borderRadiusHoverUnit)
	);
	css.add_property(
		'border-bottom-left-radius',
		getSpacingOptionOutput(previewborderHoverBottomLeftRadius, borderRadiusHoverUnit)
	);

	//Transparent hover border
	if (previewIsTransparent == '1') {
		css.add_property('border-top', previewBorderTransparentHoverTop);
		css.add_property('border-right', previewBorderTransparentHoverRight);
		css.add_property('border-bottom', previewBorderTransparentHoverBottom);
		css.add_property('border-left', previewBorderTransparentHoverLeft);

		css.add_property(
			'border-top-left-radius',
			getSpacingOptionOutput(previewborderHoverTopLeftRadiusTransparent, borderRadiusTransparentHoverUnit)
		);
		css.add_property(
			'border-top-right-radius',
			getSpacingOptionOutput(previewborderHoverTopRightRadiusTransparent, borderRadiusTransparentHoverUnit)
		);
		css.add_property(
			'border-bottom-right-radius',
			getSpacingOptionOutput(previewborderHoverBottomRightRadiusTransparent, borderRadiusTransparentHoverUnit)
		);
		css.add_property(
			'border-bottom-left-radius',
			getSpacingOptionOutput(previewborderHoverBottomLeftRadiusTransparent, borderRadiusTransparentHoverUnit)
		);
	}

	//Sticky hover border
	if (previewIsSticky == '1') {
		css.add_property('border-top', previewBorderStickyHoverTop);
		css.add_property('border-right', previewBorderStickyHoverRight);
		css.add_property('border-bottom', previewBorderStickyHoverBottom);
		css.add_property('border-left', previewBorderStickyHoverLeft);

		css.add_property(
			'border-top-left-radius',
			getSpacingOptionOutput(previewborderHoverTopLeftRadiusSticky, borderRadiusStickyHoverUnit)
		);
		css.add_property(
			'border-top-right-radius',
			getSpacingOptionOutput(previewborderHoverTopRightRadiusSticky, borderRadiusStickyHoverUnit)
		);
		css.add_property(
			'border-bottom-right-radius',
			getSpacingOptionOutput(previewborderHoverBottomRightRadiusSticky, borderRadiusStickyHoverUnit)
		);
		css.add_property(
			'border-bottom-left-radius',
			getSpacingOptionOutput(previewborderHoverBottomLeftRadiusSticky, borderRadiusStickyHoverUnit)
		);
	}

	css.set_selector(`wp-block-kadence-header${uniqueID} a`);
	css.add_property('color', KadenceColorOutput(linkColor));

	css.set_selector(`wp-block-kadence-header${uniqueID} a:hover`);
	css.add_property('color', KadenceColorOutput(linkHoverColor));

	if (previewIsTransparent == '1') {
		css.set_selector(`.wp-block-kadence-header${uniqueID} > div`);
		css.add_property('top', '0px');

		//apply auto padding to the next block after the header
		if (autoTransparentSpacing && elementHeight) {
			css.set_selector(`.kb-header-transparent-placeholder + *`);
			css.add_property('padding-top', elementHeight + 'px');
		}
	}

	const cssOutput = css.css_output();

	return <style>{`${cssOutput}`}</style>;
}
