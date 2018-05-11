import React from 'react' ; 
import { connect } from 'react-redux' ;
import Chart from '../components/chart' ;

class WeatherList extends React.Component{

	renderWeather(cityData){
		if(this.props.weather.length > 0){

			const fullWeather = this.props.weather.map(cityData => {
				
				const temperatures = cityData.list.map(weather => {
					return weather.main.temp ;
				}) ;
								
				return (
					<tr key = {cityData.city.name} >
						<td>{cityData.city.name}</td>
						<td>
							<Chart data = {temperatures} color="orange" />
						</td>
						<td>--</td>
						<td>--</td>
					</tr>
				)
			});

			return fullWeather ;
		}
	}



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
					{ this.renderWeather() }
				</tbody>
			</table>



		)
	}
}

function mapStateToProps(state){
	return { weather: state.weather } ;
}

export default connect(mapStateToProps)(WeatherList) ;