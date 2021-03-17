import React, { Component } from 'react';

class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : this.props.foods[this.props.foodIndex].title,
            price : this.props.foods[this.props.foodIndex].price
        }
    }
    changeValue = (value) =>{
        console.log(value)
        this.setState({title : value})
    }
    render() { 
        return ( <div>
            <div>
                <input type="text" value={this.state.title} onChange={(e)=>this.changeValue(e.target.value)}/>
                <input type="text" value={this.state.price} onChange={(e)=>this.changeValue(e.target.value)}/>
            </div>

        </div> );
    }
}
 
export default PopUp;