import React from 'react'
import {
	news_file_data_ent_file1,
	news_file_data_gov_file1,
	news_file_data_tech_file1,
	news_file_data_othe_file1
} from '../components/LocalDataLoad.js';


class ExpandedNewsContent extends React.Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-4">
						<img
							src={this.props.imgLoc}
							alt="NewsImg"
						/>
					</div>
					<div className="col">
						{this.props.body}  
						<a href={this.props.newsLink}> Read More...</a>
					</div>
				</div>
			</div>
		)
	}
}

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
		var newsHeader = `${this.props.news.title}`;
		var newsBody = `${this.props.news.description}`;
		var newsLocation = `${this.props.news.url}`;
		var newTime = `${this.props.news.publishedAt}`;
		var newsBigBody = `${this.props.news.content}`;
		var newsAuthor = this.props.news.author

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
							<li class="list-group-item">
								<div className="row">
									<div className='col-4'>Published by</div>
									<div className='col'>
										{newsAuthor}
									</div>
								</div>
							</li>
						</ul>

						<p className="m-2" >{
							this.state.expanded ?
								<ExpandedNewsContent
									newsLink={newsLocation}
									imgLoc={this.props.news.urlToImage}
									body={newsBigBody} />
								: newsBody
						}</p>
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
					news={news_file_data_ent_file1[index]}
				/>
			)
		}

		for (let index = 0;
			index < this.getMinLength(news_file_data_gov_file1.length);
			index++) {
			govNewsList.push(
				<NewsComponent
					news={news_file_data_gov_file1[index]}
				/>
			)
		}

		for (let index = 0;
			index < this.getMinLength(news_file_data_tech_file1.length);
			index++) {
			techNewsList.push(
				<NewsComponent
					news={news_file_data_tech_file1[index]}
				/>
			)
		}

		for (let index = 0;
			index < this.getMinLength(news_file_data_othe_file1.length);
			index++) {
			otheNewsList.push(
				<NewsComponent
					news={news_file_data_othe_file1[index]}
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