import React from 'react' ; 

export default class SearchBar extends React.Component {

	render(){
		return <form className="input-group">
			<input />
			<span className="input-group-btn">
				<button type="submit" className="btn btn-secondary">Buscar</button>
			</span>
		</form>
	}
}