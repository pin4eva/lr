import Glide from "@glidejs/glide";
import React, { useEffect } from "react";
import styled from "styled-components";

const GalleryComp = (): JSX.Element => {
  useEffect(() => {
    if (process.browser) {
      new Glide(".glide", {
        type: "carousel",
        perView: 3,
        focusAt: "center",
      }).mount();
    }
  }, []);

  return (
    <Wrapper>
      <div className="section-title">
        <div className="line"></div>
        <p>Picture Gallery</p>
        <div className="line"></div>
      </div>

      <div className="gallery-slider">
        <div className="glide aligin-items-center">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <img src="/images/slide-1.png" alt="" loading="lazy" />
              </li>
              <li className="glide__slide">
                <img src="/images/slide-2.png" alt="" loading="lazy" />
              </li>
              <li className="glide__slide">
                <img src="/images/slide-3.png" alt="" loading="lazy" />
              </li>
              <li className="glide__slide">
                <img src="/images/pic6.png" alt="" loading="lazy" />
              </li>
            </ul>
          </div>

          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left btn"
              data-glide-dir="<"
            >
              <i className="fas fa-caret-left text-primary fa-3x c-hand"></i>
            </button>
            <button
              className="glide__arrow glide__arrow--right btn"
              data-glide-dir=">"
            >
              <i className="fas fa-caret-right text-primary fa-3x c-hand"></i>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .glide__slide {
    img {
      width: 100%;
      height: 100%;
      max-height: 217px;
    }
  }
  .glide__arrow {
    box-shadow: none;
  }
`;

export default GalleryComp;
