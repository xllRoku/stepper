import styled, { CSSProperties } from 'styled-components';

type PaddingProps = {
	padding?: CSSProperties['padding'];
	paddingTop?: CSSProperties['paddingTop'];
	paddingRight?: CSSProperties['paddingRight'];
	paddingBottom?: CSSProperties['paddingBottom'];
	paddingLeft?: CSSProperties['paddingLeft'];
	paddingInline?: CSSProperties['paddingInline'];
	paddingBlock?: CSSProperties['paddingBlock'];
};

type MarginProps = {
	margin?: CSSProperties['margin'];
	marginTop?: CSSProperties['marginTop'];
	marginRight?: CSSProperties['marginRight'];
	marginBottom?: CSSProperties['marginBottom'];
	marginLeft?: CSSProperties['marginLeft'];
	marginInline?: CSSProperties['marginInline'];
	marginBlock?: CSSProperties['marginBlock'];
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
`;

const Padding = styled.div<PaddingProps>`
	width: 100%;
	height: 100%;
	padding: ${({ padding }) => padding};
	padding-top: ${({ paddingTop }) => paddingTop};
	padding-right: ${({ paddingRight }) => paddingRight};
	padding-bottom: ${({ paddingBottom }) => paddingBottom};
	padding-left: ${({ paddingLeft }) => paddingLeft};
	padding-inline: ${({ paddingInline }) => paddingInline};
	padding-bottom: ${({ paddingBlock }) => paddingBlock};
`;

const Margin = styled.div<MarginProps>`
	width: 100%;
	height: 100%;
	margin: ${({ margin }) => margin};
	margin-top: ${({ marginTop }) => marginTop};
	margin-right: ${({ marginRight }) => marginRight};
	margin-bottom: ${({ marginBottom }) => marginBottom};
	margin-left: ${({ marginLeft }) => marginLeft};
	margin-inline: ${({ marginInline }) => marginInline};
	margin-bottom: ${({ marginBlock }) => marginBlock};
`;

const breakpoints = {
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px'
};

export const getMediaQuery = (key: keyof typeof breakpoints): string =>
	`@media (min-width: ${breakpoints[key]})`;

export { Flex, Grid, Padding, Margin };
