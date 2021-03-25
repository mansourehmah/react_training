import React, { Component } from 'react';
import Slider from "react-slick";

class ItemSlider extends Component {
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
        if (this.props.foods.length < 3) {
            settings.slidesToShow = this.props.foods.length
        }
        return (

            <div className="item-slider">
                {this.props.foods.length <= 0 ? (<div className="empty">
                    <h2>محصولی وجود ندارد</h2>
                </div>) : <Slider {...settings}>
                    {this.props.foods.map(food => {
                        return (
                            <div key={food.id} className="slide">
                                <div className="slide-wraper">
                                    <h3>{food.title}</h3>
                                    <h4>{food.price}</h4>
                                    <img src={food.image} alt={'image' + food.id} />
                                </div>
                            </div>
                        )
                    })}
                </Slider>}
            </div>
        );
    }
}

export default ItemSlider;