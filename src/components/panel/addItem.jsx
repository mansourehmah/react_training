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
            disable: true
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
        else if (item === 'image') {
            this.setState({
                food: {
                    ...this.state.food,
                    image: value
                }
            })
        }
    }
    submite = () => {
        if (this.state.food.image === '') {
            this.state.food.image = 'https://cdn4.iconfinder.com/data/icons/ui-beast-3/32/ui-49-512.png'
        }
        axios
            .post(`https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods`, this.state.food)
            .then(() => {
                axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods').then((res) => {
                    this.props.updateData(res.data)
                })
            })

        // let foods = this.props.foods
        // foods.push(this.state.food)
        // this.props.updateData()
        this.setState({
            food: {
                image: '',
                title: '',
                price: ''
            }
        })
    }
    formValidation = () => {
        document.getElementById('addTitle').style.border = "none"
        document.getElementById('addPrice').style.border = "none"

        let disable = 0
        if (this.state.food.title.length < 2 || this.state.food.title.length > 30) {
            document.getElementById('addTitle').style.border = "1px solid red"
            disable++
        }
        if (this.state.food.price.length == 0 || this.state.food.price.search(/[a-z]/g) >= 0) {
            document.getElementById('addPrice').style.border = "1px solid red"
            disable++
        }
        if (this.state.food.image.indexOf('script') >= 0 || this.state.food.title.indexOf('script') >= 0 || this.state.food.price.indexOf('script') >= 0) {
            alert('adam bash :))')
            this.setState({
                food: {
                    image: '',
                    title: '',
                    price: ''
                }
            })
            disable++
        }
        if (disable == 0) {
            this.setState({ disable: false })
        }
        else {
            this.setState({ disable: true })
        }
    }
    componentDidMount() {
        this.formValidation()
    }
    render() {
        return (<Fragment>
            <div className="add-item">
                <div className="add-wraper">
                    <label htmlFor="addTitle">عنوان محصول</label>
                    <input type="text" id="addTitle" value={this.state.food.title} onKeyUp={this.formValidation} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                    <label htmlFor="addPrice">قیمت</label>
                    <input type="text" id="addPrice" value={this.state.food.price} onKeyUp={this.formValidation} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                    <span>آدرس عکس را وارد کنید</span>
                    <input type="text" value={this.state.food.image} onKeyUp={this.formValidation} onChange={(e) => this.changeValue(e.target.value, 'image')} />
                    <button onClick={this.submite} disabled={this.state.disable}>ثبت محصول</button>
                </div>
            </div>
        </Fragment>);
    }
}

export default AddItem;