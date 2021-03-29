import React from 'react';

class SearchResultUnit extends React.Component {
	render() {
		return (
			<div className="card mb-3">
				<div className="card-body">
					<div className="row">
						<div className="col-8">{
							this.props.resultQuery
						}</div>
						<div className="col-4">
							<button className="btn btn-outline-success">
								ReadMore
						</button>
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
			searchResult = <div></div>;
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
								this.showResult();
								this.makeSearch();
							}
						}
					>
						Search
					</button>
				</div>
				<div>
					{searchView}
				</div>
				<div>
					{searchResult}
				</div>

			</div>
		)
	}
}