import React from 'react' ; 
import { connect } from 'react-redux' ;
import { bindActionCreators } from 'redux' ;
import { fetchWeather } from '../actions/index' ;

class SearchBar extends React.Component {

	constructor(props){
		super(props)

		this.state = {term: ''}

		//bind
		this.onInputChange = this.onInputChange.bind(this) ;
		this.onFormSubmit = this.onFormSubmit.bind(this) ;
	}
	
	onInputChange(event){
		this.setState({term: event.target.value})
		console.log(event.target.value) ;
	}

	onFormSubmit(event){
		event.preventDefault() ;
		this.setState({ term: event.target.value }) ;
		this.props.fetchWeather(this.state.term) ;
		this.setState({ term: '' }) ;
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({ fetchWeather }, dispatch) ;
}

export default connect(null, mapDispatchToProps)(SearchBar) ;