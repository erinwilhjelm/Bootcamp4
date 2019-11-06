import React from 'react';

class ViewBuilding extends React.Component {
	render() {

		const { data, selectedBuilding} = this.props

		const info = data[selectedBuilding -1]
	
		if(selectedBuilding === 0) {
		return (
			<div>
				<p>
					{' '}
					<i>Click on a name to view more information or delete building</i>
				</p>
			</div>
		);
	}
	else {

		return (
			<div>
	
				<p>Building Info</p>
				{info.name ? <u1>Name: {info.name}</u1> : ' '}
				{info.code ? <ul>Code: {info.code}</ul>: ' '}
				{info.coordinates.longitude ? <ul>Longitude: {info.coordinates.longitude}</ul>: ' '}
				{info.coordinates.latitude ? <ul>Latitude: {info.coordinates.latitude} </ul>: ' '}
				{info.address ? <ul>Address: {info.address} </ul> : '' }


		</div>
		
		);
			}

	}
}
export default ViewBuilding;


