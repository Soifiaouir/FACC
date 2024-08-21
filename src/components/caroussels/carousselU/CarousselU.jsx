import React, { useState, useEffect } from "react";
import luneg from '../../../assets/luneg.png';
import luned from '../../../assets/luned.png';
import './CarousselU.css';

const CarousselU = ({ imageArray, hideImageName = false, forceMobile = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(forceMobile ? 1 : 3);

    useEffect(() => {
        const handleResize = () => {
            if (forceMobile || window.innerWidth <= 768) {
                setVisibleImages(1);
            } else {
                setVisibleImages(3);
            }
        };

        handleResize();
        if (!forceMobile) {
            window.addEventListener('resize', handleResize);
        }

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 3000);

        return () => {
            clearInterval(interval);
            if (!forceMobile) {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [imageArray.length, forceMobile]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
    };
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
    };

    const getVisibleImages = () => {
        let visible = [];
        for (let i = 0; i < visibleImages; i++) {
            visible.push(imageArray[(currentIndex + i) % imageArray.length]);
        }
        return visible;
    }

    return (       
        <div className={`CarousselU ${forceMobile ? 'mobile-always' : ''}`}>
            <img src={luneg} alt='precedent' className="arrow"
                onClick={prevSlide} />
            <div className="images">
                {getVisibleImages().map((image, index) => (
                    <div key={index} className="pic">
                        <img
                            src={image.path}
                            alt={`Logo ${currentIndex + index + 1}`}
                            className="img"
                        />
                        {!hideImageName && (
                            <h4 className="image-name">{image.name}</h4>
                        )}
                    </div>
                ))}
            </div>
            <img src={luned} alt='suivant' className="arrow"
                onClick={nextSlide} />
        </div>
    );
};

export default CarousselU;