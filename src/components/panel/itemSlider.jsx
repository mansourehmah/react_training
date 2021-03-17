import React, { Component } from 'react';
import Slider from "react-slick";

class ItemSlider extends Component {

    constructor() {
        super()
        this.state = {
            empty: false
        }
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        if (this.props.foods.length <3 ) {
            settings.slidesToShow = this.props.foods.length 
        }
        return (

            <div>
                <h2>محصولات موجود</h2>
                {this.props.empty ? (<h2>محصولی وجود ندارد</h2>) : <Slider {...settings}>
                    {this.props.foods.map(food => {
                        return (
                            <div key={food.id}>{food.title}</div>
                        )
                    })}
                </Slider>}
            </div>
        );
    }
}

export default ItemSlider;