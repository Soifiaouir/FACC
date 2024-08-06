import React ,{ useState, useEffect } from "react";
import './CarrousselP.css';
import luneg from '../../../assets/luneg.png';
import luned from '../../../assets/luned.png';

//creation d'une fonction r qui permet la création d'un tableau pour les chemins vers toutes les images
const importAll = (r) => r.keys().map(r);//fonction utilise rkeys pour obtenir un tableau de tous les chemins puis map r pour appliquer la fonction r a chaque chemin
const imageArray = importAll(require.context('../../../assets/FINANCEURS', false, /\.(png|jpe?g|svg)$/));
// require.context = fonction de Webpack qui permet de spécifier  l'importaion des fichiers c'est a dire les chemins, le false permet de ne pas chercher dans les sous répertoires et le /\.() est une expression qui filtre les finchiers à importé qui seront ici les fichiers d'images

const CarrousselP = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setVisibleImages(1);
            } else {
                setVisibleImages(3);
            }
        };

        handleResize(); // Appel initial
        window.addEventListener('resize', handleResize);

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageArray.length);
        }, 3000);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const prevSlide =() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageArray.length) % imageArray.length);
    };
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex  + 1) % imageArray.length);
    };

    const getVisibleImages = () => {
        let visible = [];
        for (let i =0; i < visibleImages; i++) {
            visible.push(imageArray[(currentIndex +i) % imageArray.length]);
        }  
        return visible;    
    }

        return (
            <div className="logo">
                <div className='caroussel'>
                    <img src={luneg} alt = 'precedent' className="fleches"
                        onClick={prevSlide} />
                    <div className="carroussel_images">
                        {getVisibleImages().map((image, index) => (
                        <img key={index}
                            src={image}
                            alt={`Logo ${currentIndex+index + 1}`}
                            className="carroussel_img" />
                        ))}
                    </div>
                    <img src={luned} alt='suivant' className="fleches"
                        onClick={nextSlide} /> 
                </div>
            </div>
        );
};

export default CarrousselP ;
