import React from 'react'

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
	render() {

		var newsList = [];
		for (let ind = 0; ind < 10; ind++) {
			newsList.push(
				<NewsComponent
					newsHeader="newsHeader"
					newsBody="newsBody newsBody newsBody newsBody "
					newsLocation="newsLocation"
					newTime="newTime"
				/>
			)

		}

		return (
			<div className="row">
				{newsList}
			</div>
		)
	}
}