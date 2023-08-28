import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-wind';
import { slidesText } from "../../data/basic_details";
import slide1Image from '../../images/slides/slide1.jpg'
import slide2Image from '../../images/slides/slide2.jpg'
import slide3Image from '../../images/slides/slide3.jpg'

const H1 = styled.h1`
    font-size: 32px!important;
    text-align: center!important;
    opacity: 1!important;
    color: white!important;
    top: 65%;
`

const IMG = styled.img`
    height: 80vh;
`;

const HomeCarousel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <IMG src={slide1Image} />
        <H1 className="legend">{slidesText.slides1}</H1>
      </div>
      <div>
        <IMG src={slide2Image} />
        <H1 className="legend">{slidesText.slides2}</H1>
      </div>
      <div>
        <IMG src={slide3Image} />
        <H1 className="legend">{slidesText.slides3}</H1>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
