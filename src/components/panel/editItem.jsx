import React, { Component, Fragment } from 'react';
import PopUp from './editItem/popUp'

class EditItem extends Component {
    constructor() {
        super()
        this.state = {
            popUp: false,
            foodIndex : null
        }
    }
    setPopUp = (index) => {
        this.setState({ popUp: !this.state.popUp , foodIndex : index})
    }
    render() {
        return (<Fragment>
            <div>
                {this.props.foods.map((food , index )=> {
                    return (
                        <div key={'edit-' + food.id} onClick={()=>{this.setPopUp(index)}}>
                            <img src="" alt="" />
                            <h2>
                                {food.id}
                                {food.title}</h2>
                            <h3>{food.price}</h3>
                        </div>
                    )
                })}
                {this.state.popUp === false ? '' : <PopUp foodIndex={this.state.foodIndex} foods={this.props.foods} />}
            </div>
        </Fragment>);
    }
}

export default EditItem;