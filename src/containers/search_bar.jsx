import React from 'react' ; 

export default class SearchBar extends React.Component {

	constructor(props){
		super(props)

		this.state = {term: ''}

		//bind
		this.onInputChange = this.onInputChange.bind(this) ;
	}
	
	onInputChange(event){
		this.setState({term: event.target.value})
		console.log(event.target.value) ;
	}

	onFormSubmit(event){
		event.preventDefault() ;
	}

	render(){
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
					<input
						onChange = {this.onInputChange}
						className='form-control' 
						placeholder = "Selecione a Cidade"
						value={this.state.term}
					 />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Buscar</button>
					</span>
				</form>
		)
	}
}