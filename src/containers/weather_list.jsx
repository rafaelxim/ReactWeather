import React from 'react' ; 
import { connect } from 'react-redux' ;

class WeatherList extends React.Component{
	render(){
		return(
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Cidade</th>
						<th>Temperatura</th>
						<th>Pressão</th>
						<th>Umidade</th>
					</tr>
				</thead>
				<tbody>
					
				</tbody>
			</table>



		)
	}
}

function mapStateToProps(state){
	return { weather: state.weather } ;
}

export default connect(mapStateToProps)(WeatherList) ;