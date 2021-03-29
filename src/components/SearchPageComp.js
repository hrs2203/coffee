import React from 'react'

export class SearchPageComp extends React.Component {

	constructor(){
		super()
		this.state = {
			query: ""
		}
		this.changeQuery = this.changeQuery.bind(this)
	}

	changeQuery(event){
		this.setState({
			query: event.target.value
		})
	}


	render() {

		var searchView = <div></div>
		if (!(this.state.query === "")){
			searchView = <div className="p-2">
				Looking for ... {this.state.query}
			</div>
		}

		return (
			<div>
				<form>
					<div class="form-group">
						<input 
							type="text" 
							class="form-control" 
							id="QueryInput"
							value={this.state.query}
							onChange={this.changeQuery}
							placeholder="Enter Your Query" />
					</div>
				</form>
				<div>
					{ searchView }
				</div>

			</div>
		)
	}
}