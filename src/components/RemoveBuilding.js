import React from 'react';

class RemoveBuilding extends React.Component {

    render() {

        const { data, selectedBuilding ,deleteListing } = this.props

        const info = data[selectedBuilding - 1]

    if(selectedBuilding != 0){
        return (
            <form>

                <button
                    type="button"
                    onClick={() => deleteListing(info.id)}>
                    Click to delete!</button>
            </form>
        )

        }
        else {
            return (
                <div>

                </div>
            )
     }

    }
}



export default RemoveBuilding;