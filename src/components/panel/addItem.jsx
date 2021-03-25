import React, { Component, Fragment } from 'react';
const axios = require('axios');

class AddItem extends Component {

    constructor() {
        super()
        this.state = {
            food: {
                image: '',
                title: '',
                price: '',
            },
        }
    }

    changeValue = (value, item) => {
        if (item === 'title') {
            this.setState({
                food: {
                    ...this.state.food,
                    title: value
                }
            })
        }
        else if (item === 'price') {
            this.setState({
                food: {
                    ...this.state.food,
                    price: value
                }
            })
        }
        // else if(item === 'image'){
        //     this.setState({
        //         food: {
        //             ...this.state.food,
        //             image: value
        //         }
        //     })
        // }
    }
    submite = () => {

        // let foodFormData = new FormData();
        // foodFormData.append('image' , this.state.food.image)
        // foodFormData.append('title' , this.state.food.title)
        // foodFormData.append('price' , this.state.food.price)


        console.log(foodFormData.get('title'))
        axios.post(`https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods`, this.state.food)
            .then(res => console.log(res.data));
        let foods = this.props.foods
        foods.push(this.state.food)
        this.props.updateData(foods)
        this.setState({
            food: {
                image: '',
                title: '',
                price: ''
            }
        })
    }

    render() {
        return (<Fragment>
            <div className="add-item">
                <div className="add-wraper">
                    {/* <form id='add'> */}
                    <label htmlFor="addTitle">عنوان محصول</label>
                    <input type="text" id="addTitle" value={this.state.food.title} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                    <label htmlFor="addPrice">قیمت</label>
                    <input type="text" id="addPrice" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                    <input type="file" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'image')} />
                    <button onClick={this.submite}>ثبت محصول</button>
                    {/* </form> */}
                </div>
            </div>
        </Fragment>);
    }
}

export default AddItem;