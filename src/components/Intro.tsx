import React from "react";
import Slider, { Settings } from "react-slick";
import styled from "styled-components";

const items = [
  {
    image: "/images/intro-1.png",
    name: "Miss Chituru Okwu, Love Revival Cordinator",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor
  orci gravida dui tristique, eget gravida diam ullamcorper. Morbi
  interdum ipsum turpis. Quisque pellentesque dolor id nunc
  condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet
  enim volutpat non. Aenean non aliquet elit. Lorem ipsum dolor sit
  amet, consectetur adipiscing elit. Donec diam nibh, egestas varius
  elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu
  porta augue interdum in. Curabitur lobortis dolor quis nibh
  ultricies, a pellentesque ipsum placerat.`,
  },
  {
    image: "/images/pic11.png",
    name: "Mr Chika Elvis, Love Revival Cordinator",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempor orci gravida dui tristique, eget gravida diam ullamcorper. Morbi interdum ipsum turpis. Quisque pellentesque dolor id nunc condimentum volutpat. Phasellus vehicula libero dolor, sed laoreet enim volutpat non. Aenean non aliquet elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam nibh, egestas varius elementum eu, accumsan quis elit. Mauris varius lobortis sem, eu porta augue interdum in. Curabitur lobortis dolor quis nibh ultricies, a pellentesque ipsum placerat.

    `,
  },
];

const IntroComp = (): JSX.Element => {
  const settings: Settings = {
    infinite: true,
    speed: 700,
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: true,
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <div className="inner">
            <div className="text-center ">
              <img src={items[0].image} alt="" />
            </div>
            <div className="text-md-left text-center flex-1">
              <div className="text-content mt-md-0 mt-3 ml-0 ml-md-3">
                <p>{items[0].content}</p>

                <p className="mt-3 font-italic">{items[0].name}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="inner">
            <div className="text-center ">
              <img src={items[1].image} alt="" />
            </div>
            <div className="text-md-left text-center flex-1">
              <div className="text-content mt-md-0 mt-3 ml-0 ml-md-3">
                <p>{items[1].content}</p>

                <p className="mt-3 font-italic">{items[1].name}</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </Wrapper>
  );
};

export default IntroComp;

const Wrapper = styled.div`
  .inner {
    display: flex;
    align-items: center;
    img {
      width: 100%;
      max-width: 17rem;

      border-radius: 100%;
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .text-content {
      position: relative;
      &::before {
        content: url("/images/comment-left.svg");
        position: absolute;
        left: 0;
        top: -20%;
        /* transform: rotate(180deg); */
        z-index: -1;
      }
      &::after {
        content: url("/images/comment-right.svg");
        position: absolute;
        right: 0;
        bottom: 5%;
        z-index: -1;
      }
    }
  }
`;
