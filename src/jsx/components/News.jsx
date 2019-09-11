import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getNews } from "../../js/ApiNews";
import NewsContext from "../NewsContext.jsx";

const selectNews = (news = [], qty = 3) => news.slice(0, qty);

class NewsSpotlight extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	async componentDidMount() {
		if (!this.context.data) {
			const data = await getNews();
			this.context.updateData(data.items);
			console.log(selectNews(data.items))
			this.setState({ data: selectNews(data.items) });
		} else {
			this.setState({ data: selectNews(this.context.data) });
		}
	}

	render() {
		console.log(this.state);
		return (
			<div className="news-container">
				<div className="news-items">
					<h1>News</h1>
					<div className="news-cards-wrapper">
						{this.state.data.map(({ id, title, image_url, summary }) => (
							<div key={id} className="news-card">
								{image_url && (
									<div className="picture">
										<img src={image_url} alt={title} />
									</div>
								)}
								<div>
									<h2>{title}</h2>
									<p>{summary}</p>

									<Link to={"/news/" + id} className="link">
										Find out more
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}

NewsSpotlight.contextType = NewsContext;

export default NewsSpotlight;
