import React from "react";
import Search from "../components/Search.jsx";
import InfoCard from "../components/InfoCard.jsx";
import Footer from "../components/Footer.jsx";

import Chrome from "-!svg-react-loader?name=Chrome!../../img/chrome.svg";

class Plugin extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Search history={this.props.history} />
				<div className="home-wrapper">
					<InfoCard classModifier="info-card--large info-card--title info-card--column">
						<h1>Plugins</h1>
						<span>These plugins are built using the OpenLaw NZ API.</span>
					</InfoCard>
					<div className="container main">
						<div className="content">
							<h2>OpenLaw NZ chrome extension</h2>
							<p>
								Use this plugin to find out how judges talk about a piece of legislation, and how it is
								applied in practice.
							</p>
							<p>
								When looking at a section of legislation on{" "}
								<a href="https://legislation.govt.nz">legislation.govt.nz</a>, this Chrome Extension
								inserts a button that, when clicked, will give you cases that refer to that section, and
								tell you how many times it is mentioned in each case.
							</p>
							<p>
								It queries our database of 30,000 cases from 2004 onwards - and queries the data
								generated by our legislation algorithm.
							</p>
							<p>
								<Chrome className="icon icon-medium link" alt="Chrome" />{" "}
								<a href="https://chrome.google.com/webstore/detail/openlaw-nz-legislation-he/abobmobdjckkdplcdjicelmejdmlleof?hl=en-US">
									Download from the Chrome Web Store.
								</a>
							</p>

							<p>
								The{" "}
								<a href="https://github.com/openlawnz/openlawnz-browser-extension">
									source code is on GitHub
								</a>
								, if you&apos;d like to improve or contribute.
							</p>

							<p>
								<video controls autoPlay loop>
									<source
										src="https://s3-ap-southeast-2.amazonaws.com/assets.openlaw.nz/chromeextension.mp4"
										type="video/mp4"
									/>
									<img src="https://s3-ap-southeast-2.amazonaws.com/assets.openlaw.nz/chromescreenshot1.png" />
								</video>
							</p>
							<p>If you build something with our platform, get in touch and we&apos;ll list it here.</p>
						</div>
					</div>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default Plugin;
