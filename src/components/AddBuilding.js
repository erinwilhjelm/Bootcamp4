import React from 'react'
import Popup from "reactjs-popup";

class AddBuilding extends React.Component { 
   

    handleSubmit = (e) => { 
        e.preventDefault() 
        const { addListing } = this.props
        addListing(this.refs.newName.value, this.refs.newCode.value, this.refs.newAddr.value, this.refs.newLat.value, this.refs.newLong.value)
    };

    render() {

        return(
            <div> 
                <Popup
                    className="reveal-modal-bg "
                    trigger={<i> Click here to add a new building</i>}
                    modal 
                    closeOnDocumentClick
                >      
                    <span> 
                        <h4>Type building information to add...</h4>
                        
                        <form onSubmit={this.handleSubmit}>
                            <label>Name: <input type="text" ref={"newName"}/> </label>

                            <label>Code: <input type="text" ref={"newCode"}/> </label>

                            <label>Latitude Coordinate: <input type="text"ref={"newLat"} /> </label>

                            <label>Longitude Coordinate: <input type="text" ref={"newLong"} /> </label>

                            <label>Address: <input type="text" ref={"newAddr"} /> </label>

                            <input type="submit" value="Add"/>
                        </form>
                    </span>
                </Popup>
                <p></p>
            </div>
        )
    }
}

export default AddBuilding;