import styled from "styled-components";

import { Link, } from "react-router-dom";

import { 
	Container, 
	FullWidthImg,
	PageWrapper,
	TileWrapper,
} from "src/components/common";

import Head from "src/components/common/Head";

import * as mixins from "../style/mixins";
import * as vars from "../style/vars";

import Data from "src/data";

// --------------------------------------------------

const OneTwoWrapper = styled(Container)`
	display: flex;
	flex-wrap: wrap;

	> div {
		&:first-child {
			flex-basis: 33.33%;
			${ mixins.xs`flex-basis: 100%` };

			h1 {
				margin-top: 0;
			}
		}

		&:nth-child(2) {
			flex-basis: 66.67%;
			${ mixins.xs`flex-basis: 100%` };

			p {
				margin-top: 0.5em;
			}	
		}
	}
`;

const ThirdsWrapper = styled(Container)`
	display: flex;
	flex-wrap: wrap;

	> div {
		flex-basis: 33.33%;
		${ mixins.xs`flex-basis: 100%` };
		font-size: 0.9em;

		a {
			&,
			&:hover,
			&:visited,
			&:active {
				color: ${ vars.colors.link };
			}

			&:hover,
			&:active {
				color: ${ vars.colors.linkHover };
			}
		}
	}
`;

// --------------------------------------------------

const Home = () => (
	<PageWrapper>
		<Head/>

		<FullWidthImg 
			src = { Data.homeImage.url }
		/>

		<OneTwoWrapper>
			<TileWrapper>
				<h1>
					Global Advisor.<br/>
					Chairman.<br/>
					Speaker.<br/>
					Moderator.<br/>
				</h1>
			</TileWrapper>

			<TileWrapper>
				<p>{ Data.homeDescription }</p>
			</TileWrapper>
		</OneTwoWrapper>

		<ThirdsWrapper>
			<TileWrapper>
				<h3>For Cities</h3>

				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.</p>

				<p><Link to = "/for-cities">Find out more →</Link></p>
			</TileWrapper>

			<TileWrapper>
				<h3>For Events</h3>

				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.</p>

				<p><Link to = "/for-events">Find out more →</Link></p>
			</TileWrapper>

			<TileWrapper>
				<h3>For Media</h3>

				<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis.</p>

				<p><Link to = "/for-media">Find out more →</Link></p>
			</TileWrapper>
		</ThirdsWrapper>
	</PageWrapper>
);

export default Home;