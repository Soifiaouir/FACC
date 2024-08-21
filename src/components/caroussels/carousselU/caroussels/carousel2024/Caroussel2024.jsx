import React, { useState, useEffect } from 'react';
import CarousselU from '../../CarousselU';

const importAll = (r) => {
    return r.keys().map((key) => ({
        path: r(key),
        name: key.replace(/^.*[\\/]/, '').split('.')[0],
    }));
};

const Caroussel2024 = () => {
    const [allImages, setAllImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadImages = () => {
            try {
                const images2016 = importAll(require.context('../../../../../assets/2016/oeuvre', false, /\.(png|jpe?g|svg)$/));
                const images2014 = importAll(require.context('../../../../../assets/2014/oeuvre', false, /\.(png|jpe?g|svg)$/));
                setAllImages([...images2016, ...images2014]);
            } catch (error) {
                console.error("Erreur lors du chargement des images:", error);
            } finally {
                setIsLoading(false);
            }
        };

        loadImages();
    }, []);

    if (isLoading) {
        return <div>Chargement des images...</div>;
    }

    if (allImages.length === 0) {
        return <div>Aucune image trouvée</div>;
    }

    return (
        <div className="carousselAcceuil">
             <CarousselU imageArray={allImages} hideImageName={true}  />
        </div>
    );
};

export default Caroussel2024;