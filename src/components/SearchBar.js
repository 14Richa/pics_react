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
						<label> Image Search </label>
					<input
					type = "text" 
					value = {this.state.term}  
					onChange = { e => this.setState({term: e.target.value.toUpperCase()})}
					placeholder = "Type here...."
					/>
					<button onClick = {this.onFormSubmit}> Search </button>
					</div>
				</form> 
			</div>

		);
	}
}


export default SearchBar;