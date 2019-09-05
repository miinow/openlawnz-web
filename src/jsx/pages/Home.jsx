import React, { Component } from "react";
import Search from "../components/Search.jsx";
import Mission from "../components/Mission.jsx";
import Footer from "../components/Footer.jsx";
import InfoCard from "../components/InfoCard.jsx";
import InfoCardUnit from "../components/InfoCardUnit.jsx";
import ContactUs from "../components/ContactUs.jsx";
import News from "../components/News.jsx";

class Home extends Component {
	render() {
		return (
			<React.Fragment>
				<Search />
				<div className="home-wrapper">
					<InfoCard>
						<InfoCardUnit one="17,605" two="CASES" />
						<div className="border"></div>
						<InfoCardUnit one="20,261" two="CASE-TO-CASE RELATIONSHIPS" />
						<div className="border"></div>
						<InfoCardUnit one="190,324" two="CASE-TO-LEGISLATION RELATIONSHIPS" />
					</InfoCard>
					<Mission />
					<News />
					<ContactUs />
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default Home;

{
	/* <Header as="h1">Welcome</Header>
				<p>OpenLaw NZ is a new, free legal research platform for New Zealand.</p>

				<h1 className="is-text-center">Our Mission</h1>
				<p className="is-text-center">OpenLaw NZ is an open-source platform that any country can copy and use for the betterment of their citizens.</p>

				<div className='horizontal-container horizontal-container--spaced'>
					<div className='horizontal-container__item horizontal-container__item--small'>
						<div className='card'>
							<MissionAccessLogo className='mission-icon' />
							<p>Improve access to justive and education for all New Zealanders</p>
						</div>
					</div>

					<div className='horizontal-container__item horizontal-container__item--small'>
						<div className='card'>
							<MissionInnovationLogo className='mission-icon' />
							<p>Spur innovation with a freely available relational database</p>
						</div>
					</div>

					<div className='horizontal-container__item horizontal-container__item--small'>
						<div className='card'>
							<MissionFundLogo className='mission-icon' />
							<p>Fund future development by providing services  using the OpenLaw NZ platform</p>
						</div>
					</div>
				</div>
				<br />
				<p>
					<em>
						OpenLaw NZ is an open-source platform that any country can copy and use for the betterment of
						their citizens.
					</em>
				</p>
				<br />
				<Segment>
					<Statistic.Group widths="three">
						<Statistic>
							<Statistic.Value>17,605</Statistic.Value>
							<Statistic.Label>Cases</Statistic.Label>
						</Statistic>
						<Statistic>
							<Statistic.Value>20,261</Statistic.Value>
							<Statistic.Label>Case-to-Case relationships</Statistic.Label>
						</Statistic>
						<Statistic>
							<Statistic.Value>190,324</Statistic.Value>
							<Statistic.Label>Case-to-Legislation relationships</Statistic.Label>
						</Statistic>
					</Statistic.Group>
				</Segment> */
}
