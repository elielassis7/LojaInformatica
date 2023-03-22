import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MenuServices(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(
    <div className="w-[90%] left-12 translate-x-12">
      <Slider {...settings}>
        <div className="h-72 w-40 flex items-center justify-center">
          <img src="\img-slide\img01.jpg" alt="" />
        </div>
        <div className="h-72 w-40 flex items-center justify-center">
          <img src="\img-slide\img02.jpg" alt="" />
        </div>
        <div className="h-72 w-40 flex items-center justify-center">
          <img src="\img-slide\img03.jpg" alt="" />
        </div>
        <div className="h-72 w-40 flex items-center justify-center">
          <img src="\img-slide\img04.jpg" alt="" />
        </div>
        <div className="h-72 w-40 flex items-center justify-center">
          <img src="\img-slide\img05.jpg" alt="" />
        </div>
        <div className="h-72 w-40  flex items-center justify-center">
          <img src="\img-slide\img06.jpg" alt="" />
          
        </div>
    </Slider>
    </div>
  )
}