import React from 'react';

import { news_title } from './LocalDataLoad.js';

class SearchResultUnit extends React.Component {



	render() {
		return (
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-9">

							<ul class="col list-group list-group-flush mb-3">
								<li class="list-group-item">
									<div className="row">
										<div className='col-4'>Title</div>
										<div className='col'>
											{this.props.resultQuery['title']}
										</div>
									</div>
								</li>
								<li class="list-group-item">
									<div className="row">
										<div className='col-4'>Published by</div>
										<div className='col'>
											{this.props.resultQuery['author']}
										</div>
									</div>
								</li>
								<li class="list-group-item">
									<div className="row">
										<div className='col-4'>Published On</div>
										<div className='col'>
											{this.props.resultQuery['publishedAt']}
										</div>
									</div>
								</li>
							</ul>

						</div>
						<div className="col">
							<a href={this.props.resultQuery["url"]}>
								<button className="btn btn-outline-success">
									Read Complete Article
							</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export class SearchPageComp extends React.Component {

	constructor() {
		super()
		this.state = {
			query: "",
			showResponse: false
		}
		this.changeQuery = this.changeQuery.bind(this);
		this.showResult = this.showResult.bind(this);
	}

	changeQuery(event) {
		this.setState({
			query: event.target.value
		})
	}

	showResult() {
		this.setState({
			showResponse: true
		})
	}

	makeSearch() {
		var respList = [];
		for (let index = 0; index < 15; index++) {
			respList.push(
				<SearchResultUnit
					resultQuery={`${this.state.query} search resp ${index}`}
				/>
			)
		}
		return respList;
	}

	defaultList() {
		var respList = [];
		for (let index = 0; index < 30; index++) {
			respList.push(
				<SearchResultUnit
					resultQuery={news_title[index]}
				/>
			)
		}
		return respList;
	}


	render() {

		var searchView = <div></div>;
		var searchResult = <div></div>;
		if (!(this.state.query === "")) {
			searchView = <div className="p-2">
				Looking for .... {this.state.query}
			</div>
		}
		if (this.state.showResponse) {
			searchView = <div></div>;
			searchResult = <div>
				<hr />
				{this.makeSearch()}
			</div>
		}
		if (this.state.query === "") {
			searchView = <div></div>;
			searchResult = <div>
				{this.defaultList()}
			</div>;
		}

		return (
			<div className="row">
				<div className="col-10 form-group">
					<input
						type="text"
						className="form-control"
						id="QueryInput"
						value={this.state.query}
						onChange={this.changeQuery}
						placeholder="Enter Your Query"
					/>
				</div>
				<div className="col-2">
					<button
						className="btn btn-primary btn-block"
						onClick={
							() => {
								this.makeSearch();
								this.showResult();
							}
						}
					>
						Search Query
					</button>
				</div>
				<div>
					{searchView}
				</div>
				<div className="mt-4">
					{searchResult}
				</div>

			</div>
		)
	}
}