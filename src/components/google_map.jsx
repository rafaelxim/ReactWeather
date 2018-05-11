import React from 'react' ; 

export default class GoogleMap extends React.Component{
	
	componentDidMount(){
		new google.maps.Map(this.refs.map, {
			zoom: 12, 
			center: {
				lat: this.prop.lat, 
				lon: this.prop.lon 
			}
		})
	}

	render(){
		return {
			<div ref ="map" />
	}
}