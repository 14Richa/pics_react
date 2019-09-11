
import './SearchBar.css';

import React from 'react';

class SearchBar extends React.Component {
state = { term: ''};

onFormSubmit = event => {
	event.preventDefault();

	this.props.onSubmit(this.state.term);

};


	
	render() {
		return ( 
			<div className = "ui segment">

				<form onSubmit = {this.onFormSubmit} className = "ui form">
					<div className = "feild">
						<label> <h2> Image Search App </h2></label>
					<input					type = "text" 
					value = {this.state.term}  
					onChange = { e => this.setState({term: e.target.value.toUpperCase()})}
					placeholder = "Type here...."
					/>
					<div className = {`search`}>
					<button className = "ui black button" onClick = {this.onFormSubmit}> Search </button> </div>
					</div>
				</form> 
			</div>

		);
	}
}


export default SearchBar;