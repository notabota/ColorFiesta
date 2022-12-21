import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import HoverCard from "/src/elements/HoverCard.jsx";
import "./SyncCarousel.css";

function NavArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings_content = {
      asNavFor: this.state.nav2,
      ref: (slider) => (this.slider1 = slider),
      fade: true,
      arrows: false
    };

    const settings_nav = {
      rows: 1,
      className: "center",
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NavArrow />,
      prevArrow: <NavArrow />,
      asNavFor: this.state.nav1,
      ref: (slider) => (this.slider2 = slider),
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: "60px",
      customPaging: (i) => <div class="slick"> {i + 1} </div>
    };

    return (
      <div id="carousel">
        <Slider {...settings_content}>
          {this.props.content.map((info) => (
            <div>
              <div class="carousel_content">
                <img
                  class="carousel_content_avatar"
                  src={info.avatar}
                  alt="avatar"
                />
                <div class="carousel_content_text">
                  <div class="carousel_content_title">{info.title}</div>
                  <div class="carousel_contentt_description">
                    {info.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <h4>Second Slider</h4>
        <Slider {...settings_nav}>
          {this.props.content.map((info) => (
            <div>
              <div class="carousel_card">
                <HoverCard name={info.name} title={info.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
