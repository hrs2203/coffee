import React from 'react'
import {
	news_file_data_ent_file1,
	news_file_data_gov_file1,
	news_file_data_tech_file1,
	news_file_data_othe_file1
} from '../components/LocalDataLoad.js'

class NewsComponent extends React.Component {

	constructor() {
		super()
		this.state = {
			expanded: false
		}
		this.expandNews = this.expandNews.bind(this);
	}

	expandNews() {
		this.setState({
			expanded: !this.state.expanded
		})
	}

	render() {
		var newsHeader = `${this.props.newsHeader}`;
		var newsBody = `${this.props.newsBody}`;
		var newsLocation = `${this.props.newsLocation}`;
		var newTime = `${this.props.newTime}`;

		if (this.state.expanded) {
			newsBody = `${newsBody}${newsBody}${newsBody}${newsBody}`
		}

		return (
			<div className="">
				<div className="card mb-3" >
					<div className="card-header">
						{newsHeader}
					</div>
					<div className="card-body">
						<ul class="col list-group mb-3">
							<li class="list-group-item">
								<div className="row">
									<div className='col-4'>Published on </div>
									<div className='col'>
										{newTime}
									</div>
								</div>
							</li>
							<li class="list-group-item">
								<div className="row">
									<div className='col-4'>Published by</div>
									<div className='col'>
										{newsLocation}
									</div>
								</div>
							</li>
						</ul>

						<p className="m-2" >{newsBody}</p>
						<button onClick={this.expandNews}
							className="btn btn-outline-success m-1">
							{this.state.expanded ? "Collapes" : "Expand"}
						</button>
						<button
							className="btn btn-outline-dark m-1">
							Original Resource
					</button>
					</div>
				</div>
			</div>
		)

	}

}


export class ExplorePageComp extends React.Component {

	getMinLength(l) {
		return Math.min(l, 2)
	}

	getNewsTiles() {
		var entNewsList = [];
		var govNewsList = [];
		var techNewsList = [];
		var otheNewsList = [];

		for (let index = 0;
			index < this.getMinLength(news_file_data_ent_file1.length);
			index++) {
			entNewsList.push(
				<NewsComponent
					newsHeader={news_file_data_ent_file1[index]["title"]}
					newsBody={news_file_data_ent_file1[index]["description"]}
					newsLocation={news_file_data_ent_file1[index]["url"]}
					newTime={news_file_data_ent_file1[index]["publishedAt"]}
				/>
			)
		}

		for (let index = 0;
			index < this.getMinLength(news_file_data_gov_file1.length);
			index++) {
			govNewsList.push(
				<NewsComponent
					newsHeader={news_file_data_gov_file1[index]["title"]}
					newsBody={news_file_data_gov_file1[index]["description"]}
					newsLocation={news_file_data_gov_file1[index]["url"]}
					newTime={news_file_data_gov_file1[index]["publishedAt"]}
				/>
			)
		}

		for (let index = 0;
			index < this.getMinLength(news_file_data_tech_file1.length);
			index++) {
			techNewsList.push(
				<NewsComponent
					newsHeader={news_file_data_tech_file1[index]["title"]}
					newsBody={news_file_data_tech_file1[index]["description"]}
					newsLocation={news_file_data_tech_file1[index]["url"]}
					newTime={news_file_data_tech_file1[index]["publishedAt"]}
				/>
			)
		}

		for (let index = 0;
			index < this.getMinLength(news_file_data_othe_file1.length);
			index++) {
			otheNewsList.push(
				<NewsComponent
					newsHeader={news_file_data_othe_file1[index]["title"]}
					newsBody={news_file_data_othe_file1[index]["description"]}
					newsLocation={news_file_data_othe_file1[index]["url"]}
					newTime={news_file_data_othe_file1[index]["publishedAt"]}
				/>
			)
		}

		var respNewsList = [
			entNewsList,
			govNewsList,
			techNewsList,
			otheNewsList
		]

		return respNewsList
	}

	render() {

		var newsList = this.getNewsTiles();

		return (
			<div className="row">
				<h2>Entertainment</h2>
				<hr />
				{newsList[0]}
				<button className="btn mb-2">Read More</button>
				<h2>Government</h2>
				<hr />
				{newsList[1]}
				<button className="btn mb-2">Read More</button>
				<h2>Technology</h2>
				<hr />
				{newsList[2]}
				<button className="btn mb-2">Read More</button>
				<h2>Others</h2>
				<hr />
				{newsList[3]}
				<button className="btn mb-2">Read More</button>
			</div>
		)
	}
}