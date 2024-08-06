import React, { useState } from "react";
import './Carrousselimg.css';
import luneg from '../../../assets/luneg.png';
import luned from '../../../assets/luned.png';

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../../assets/Oeuvres', false, /\.(png|jpe?g|svg)$/));

const CarrousselImg = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex -1 +images.length) % images.length);
  };

  const nextSlide = () =>{
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return(
    <div className="carroussel">
        <div className="img_container">
            <img src={images[currentIndex]} 
                 alt={`Slide${currentIndex + 1}`}
                 className="caroussel_img" />
        </div>
        <div className="control">
            <img src={luneg} alt="précédent" className="fleche"
                onClick={prevSlide} />
            <div className="indicateur">
                {images.map((_, index) => (
                    <div  key={index}
                          className={`indicator ${index === currentIndex ? 'active' : '' }`}
                          onClick = {() => goToSlide(index)} />
                    ))}
            <img src={luned} alt='suivante' className="fleche"
                 onClick={nextSlide} />
            </div>
        </div> 
    </div>
  );
};

export default CarrousselImg;