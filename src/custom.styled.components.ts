import styled, { CSSObject, CSSProperties, css } from 'styled-components';

type PaddingProps = {
	width?: CSSProperties['width'];
	height?: CSSProperties['height'];
	padding?: CSSProperties['padding'];
	paddingTop?: CSSProperties['paddingTop'];
	paddingRight?: CSSProperties['paddingRight'];
	paddingBottom?: CSSProperties['paddingBottom'];
	paddingLeft?: CSSProperties['paddingLeft'];
	paddingInline?: CSSProperties['paddingInline'];
	paddingBlock?: CSSProperties['paddingBlock'];
	media?: CSSObject;
};

type MarginProps = {
	width?: CSSProperties['width'];
	height?: CSSProperties['height'];
	margin?: CSSProperties['margin'];
	marginTop?: CSSProperties['marginTop'];
	marginRight?: CSSProperties['marginRight'];
	marginBottom?: CSSProperties['marginBottom'];
	marginLeft?: CSSProperties['marginLeft'];
	marginInline?: CSSProperties['marginInline'];
	marginBlock?: CSSProperties['marginBlock'];
	media?: CSSObject;
};

type FlexProps = {
	width?: CSSProperties['width'];
	height?: CSSProperties['height'];
	flexDirection?: CSSProperties['flexDirection'];
	justifyContent?: CSSProperties['justifyContent'];
	alignItems?: CSSProperties['alignItems'];
	alignContent?: CSSProperties['alignContent'];
	flexWrap?: CSSProperties['flexWrap'];
	gap?: CSSProperties['gap'];
	media?: CSSObject;
};

type GridProps = {
	width?: CSSProperties['width'];
	height?: CSSProperties['height'];
	gridTemplateColumns?: CSSProperties['gridTemplateColumns'];
	gridTemplateRows?: CSSProperties['gridTemplateRows'];
	gridTemplateAreas?: CSSProperties['gridTemplateAreas'];
	gridAutoColumns?: CSSProperties['gridAutoColumns'];
	gridAutoRows?: CSSProperties['gridAutoRows'];
	gridAutoFlow?: CSSProperties['gridAutoFlow'];
	gridPlaceItems?: CSSProperties['placeItems'];
	gap?: CSSProperties['gap'];
	media?: CSSObject;
};

type Text = {
	fontSize?: string;
	fontWeight?: number | string;
	color?: string;
	textTransform?: string;
};

const Flex = styled.div<FlexProps>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	display: flex;
	flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || 'stretch'};
	align-content: ${({ alignContent }) => alignContent || 'stretch'};
	flex-wrap: ${({ flexWrap }) => flexWrap || 'nowrap'};
	gap: ${({ gap }) => gap || '0'};
	${({ media }) =>
		media &&
		css`
			${media}
		`}
`;

const Grid = styled.div<GridProps>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	display: grid;
	grid-template-columns: ${({ gridTemplateColumns }) =>
		gridTemplateColumns || 'none'};
	grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || 'none'};
	grid-template-areas: ${({ gridTemplateAreas }) =>
		gridTemplateAreas || 'none'};
	grid-auto-columns: ${({ gridAutoColumns }) => gridAutoColumns || 'auto'};
	grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows || 'auto'};
	grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow || 'row'};
	place-items: ${({ gridPlaceItems }) => gridPlaceItems || 'auto'};
	gap: ${({ gap }) => gap || '0'};
	${({ media }) =>
		media &&
		css`
			${media}
		`}
`;

const Padding = styled.div<PaddingProps>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	padding: ${({ padding }) => padding};
	padding-top: ${({ paddingTop }) => paddingTop};
	padding-right: ${({ paddingRight }) => paddingRight};
	padding-bottom: ${({ paddingBottom }) => paddingBottom};
	padding-left: ${({ paddingLeft }) => paddingLeft};
	padding-inline: ${({ paddingInline }) => paddingInline};
	padding-block: ${({ paddingBlock }) => paddingBlock};
	${({ media }) =>
		media &&
		css`
			${media}
		`}
`;

const Margin = styled.div<MarginProps>`
	width: ${({ width }) => width || 'auto'};
	height: ${({ height }) => height || 'auto'};
	margin: ${({ margin }) => margin};
	margin-top: ${({ marginTop }) => marginTop};
	margin-right: ${({ marginRight }) => marginRight};
	margin-bottom: ${({ marginBottom }) => marginBottom};
	margin-left: ${({ marginLeft }) => marginLeft};
	margin-inline: ${({ marginInline }) => marginInline};
	margin-block: ${({ marginBlock }) => marginBlock};
	${({ media }) =>
		media &&
		css`
			${media}
		`}
`;

const Text = styled.p<Text>`
	font-size: ${({ fontSize }) => fontSize || '1rem'};
	font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
	color: ${({ color }) => color || '#000'};
	text-transform: ${({ textTransform }) => textTransform || 'normal'};
`;

export { Flex, Grid, Padding, Margin, Text };
