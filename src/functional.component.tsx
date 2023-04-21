import React from 'react';
import styled, { CSSProperties } from 'styled-components';

interface IProps {
	predicate: boolean;
	children: React.ReactNode;
}

interface IWhenProps {
	children: React.ReactNode;
	predicate: boolean | string | undefined;
}

type PaddingProps = {
	padding?: CSSProperties['padding'];
	paddingTop?: CSSProperties['paddingTop'];
	paddingRight?: CSSProperties['paddingRight'];
	paddingBottom?: CSSProperties['paddingBottom'];
	paddingLeft?: CSSProperties['paddingLeft'];
	paddingInline?: CSSProperties['paddingInline'];
	paddingBlock?: CSSProperties['paddingBlock'];
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

const If: React.FC<IProps> = ({ predicate, children }) => {
	const childrenArray = React.Children.toArray(children);

	return (
		<>
			{childrenArray.map(child => {
				return React.cloneElement(child as React.ReactElement, {
					predicate
				});
			})}
		</>
	);
};

const Else: React.FC<IProps> = ({ predicate, children }) => {
	return !predicate ? <> {children} </> : <></>;
};

const Then: React.FC<IProps> = ({ predicate, children }) => {
	return predicate ? <> {children} </> : <></>;
};

const When: React.FC<IWhenProps> = ({ children, predicate }) => {
	return !predicate ? <></> : <>{children}</>;
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

export { If, Else, Then, When, Flex, Grid, Padding };
