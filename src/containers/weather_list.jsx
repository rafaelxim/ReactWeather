import React from 'react' ; 
import _ from 'lodash' ;
import { connect } from 'react-redux' ;
import Chart from '../components/chart' ;

class WeatherList extends React.Component{

	renderWeather(cityData){
		if(this.props.weather.length > 0){

			const fullWeather = this.props.weather.map(cityData => {
				
				const temperatures = cityData.list.map(weather => {
					return (weather.main.temp - 273.15) ;
				}) ;
				
				const pressoes = cityData.list.map(weather => {
					return weather.main.pressure ;
				}) ;

				const umidades = cityData.list.map(weather => {
					return weather.main.humidity ;
				}) ;
				
				const mediaTemp = parseInt(_.sum(temperatures) / temperatures.length) ; 
				const mediaPressoes = parseInt(_.sum(pressoes) / pressoes.length) ; 
				const mediaUmidades = parseInt(_.sum(umidades) / umidades.length) ; 
				
								
				return (
					<tr key = {cityData.city.name} >
						<td>{cityData.city.name}</td>
						<td>
							<Chart data = {temperatures} color="orange" />
							<div>{ `${mediaTemp} °C` }</div>
						</td>
						<td>
							<Chart data = {pressoes} color="green" />
							<div>{ `${mediaPressoes} Hpa` }</div>
						</td>
						<td>
							<Chart data = {umidades} color="blue" />
							<div>{ `${mediaUmidades} %` }</div>							
						</td>
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