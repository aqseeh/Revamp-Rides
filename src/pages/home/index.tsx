import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "@/components/cards";

const Home: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section>
        <div className="w-full h-screen">
          <Slider {...settings}>
            <div className="flex justify-center items-center">
              <img
                alt=""
                src="/pictures/slider1.jpg"
                className="w-full h-screen"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                alt=""
                src="/pictures/slider3.jpg"
                className="w-full h-screen"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                alt=""
                src="/pictures/slider.jpg"
                className="w-full h-screen"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                alt=""
                src="/pictures/slider 4.jpg"
                className="w-full h-screen"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                alt=""
                src="/pictures/slider5.jpg"
                className="w-full h-screen"
              />
            </div>
          </Slider>
        </div>
      </section>
      <section>
        <Cards />
      </section>
    </div>
  );
};

export default Home;
