import React from "react";
import styled from "styled-components";

import { Fade } from "react-awesome-reveal";

export default function Section({
	title,
	description,
	backgroundImg,
	leftButtonText,
	rightButtonText,
}) {
	return (
		<Wrap bgImg={backgroundImg}>
			<Fade>
				<ItemText>
					<h1>{title}</h1>
					{description ? (
						<p>{description}</p>
					) : (
						<p>
							Order Online for <a href="/">Touchless Delivery</a>
						</p>
					)}
				</ItemText>
			</Fade>
			<Fade>
				<Buttons delay={500}>
					<LeftButton>
						<p>{leftButtonText}</p>
					</LeftButton>
					{rightButtonText && (
						<RightButton>
							<p>{rightButtonText}</p>
						</RightButton>
					)}
				</Buttons>
			</Fade>
		</Wrap>
	);
}

const Wrap = styled.div`
	min-height: 100vh;
	width: 100%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-image: ${({ bgImg }) => `url(${bgImg})`};
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	z-index: 3;
	scroll-snap-align: start;
`;

const ItemText = styled.div`
	position: relative;
	top: 120px;
	text-align: center;

	h1 {
		font-size: 40px;
		line-height: 48px;
		font-weight: 500;
	}
	p {
		color: #5c5d61;
		font-weight: 300;
		line-height: 19.796px;
		font-size: 14px;
	}
	a {
		text-decoration: none;
		position: relative;

		&::after {
			content: "";
			display: block;
			position: absolute;
			height: 1px;
			background-color: #5c5d61;
			bottom: -2px;
			left: 0;
			right: 0;
			transition: 500ms ease;
		}
	}
	a:hover::after {
		background-color: #000;
		height: 2px;
		bottom: -3px;
	}
`;

const Buttons = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.button`
	border: none;
	background-color: #000;
	width: 250px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
	border-radius: 20px;
	opacity: 0.75;
	text-transform: uppercase;
	cursor: pointer;
	p {
		color: #fff;
		font-weight: 500;
		font-size: 13px;
	}

	@media (max-width: 600px) {
		width: calc(100vw - 10vw);
	}
`;
const RightButton = styled(LeftButton)`
	background-color: #fff;
	opacity: 0.7;
	p {
		color: #000;
	}
`;
