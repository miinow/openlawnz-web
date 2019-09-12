import React, { Component } from "react";
import { withRouter, BrowserRouter as Router, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import MainNav from "./components/MainNav.jsx";
import Home from "./pages/Home.jsx";
import Search from "./pages/Search.jsx";
import News from "./pages/News.jsx";
import Spotlight from "./pages/Spotlight.jsx";
import Volunteers from "./pages/Volunteers.jsx";
import Sponsors from "./pages/Sponsors.jsx";
import SingleCase from "./pages/SingleCase.jsx";
import Plugins from "./pages/Plugins.jsx";
import Developers from "./pages/Developers.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

import "semantic-ui-css/semantic.min.css";
import "../scss/App.scss";

class App extends Component {
	render() {
		const MainNavWithRouter = withRouter(props => <MainNav {...props} />);

		return (
			<Router>
				<div>
					<MainNavWithRouter />
					<div className="content-wrapper">
						<Route exact path="/" component={Home} />
						<Route exact path="/search" component={Search} />
						<Route exact path="/case/:id" component={SingleCase} />
						<Route exact path="/developers" component={Developers} />
						<Route exact path="/plugin" component={Plugins} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/news" component={News} />
						<Route exact path="/spotlight" component={Spotlight} />
						<Route exact path="/volunteers" component={Volunteers} />
						<Route exact path="/sponsors" component={Sponsors} />
						<Route exact path="/about" component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default hot(module)(App);
