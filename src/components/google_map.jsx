import React from 'react' ; 

export default class GoogleMap extends React.Component{
	
	componentDidMount(){

		// esse primeiro parametro de Map abaixo, é uma referencia ao elemento map na div que foi renderizada 
		new google.maps.Map(this.refs.map, {
			zoom: 12, 
			center: {
				lat: this.props.lat, 
				lng: this.props.lon 
			}
		})
	}

	render(){
		return (
			<div ref ="map" />
		)
	}	
}
