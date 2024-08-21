import React, { useState, useEffect } from "react";
import luneg from '../../../assets/luneg.png';
import luned from '../../../assets/luned.png';
import { getArtistes } from "../../../api/api";
import ArtisteDetail from '../../../pages/artistes/artdet/ArtistesDetails';
import './CarouselA.css';

const CarouselA = ({ artisteIds }) => {
    const [artistes, setArtistes] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleArtistes, setVisibleArtistes] = useState(3);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedArtist, setSelectedArtist] = useState(null);

    useEffect(() => {
        const fetchArtistes = async () => {
            try {
                const allArtistes = await getArtistes();
                const filteredArtistes = artisteIds 
                    ? allArtistes.filter(artiste => artisteIds.includes(artiste.id))
                    : allArtistes;
                setArtistes(filteredArtistes);
                setLoading(false);
            } catch (err) {
                console.error("Erreur détaillée:", err);
                setError(`Erreur lors du chargement des artistes: ${err.message}`);
                setLoading(false);
            }
        };

        fetchArtistes();

        const handleResize = () => {
            setVisibleArtistes(window.innerWidth <= 768 ? 1 : 3);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [artisteIds]);

    useEffect(() => {
        if (artistes.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % artistes.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [artistes]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + artistes.length) % artistes.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % artistes.length);
    };

    const getVisibleArtistes = () => {
        return Array.from({ length: visibleArtistes }, (_, i) => 
            artistes[(currentIndex + i) % artistes.length]
        );
    };

    const handleArtisteClick = (artiste) => {
        setSelectedArtist(artiste);
    };

    const handleCloseDetail = () => {
        setSelectedArtist(null);
    };

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>{error}</div>;

    return (       
        <>
            <div className='carousel-artistes'>
                <img src={luneg} alt='precedent' className="arrow" onClick={prevSlide} />
                <div className="artistes">
                    {getVisibleArtistes().map((artiste) => {
                        const imageUrl = require(`../../../assets/Artistes/${artiste.photo}`);
                        return (
                            <div 
                                key={artiste.id} 
                                className="artiste-container"
                                onClick={() => handleArtisteClick(artiste)}
                            >
                                <img
                                    src={imageUrl}
                                    alt={`${artiste.prenom} ${artiste.nom}`}
                                    className="artiste-image"
                                />
                                <h4 className="artiste-name">{`${artiste.prenom} ${artiste.nom}`}</h4>
                            </div>
                        );
                    })}
                </div>
                <img src={luned} alt='suivant' className="arrow" onClick={nextSlide} />
            </div>
            {selectedArtist && (
                <ArtisteDetail 
                    artiste={selectedArtist} 
                    onClose={handleCloseDetail} 
                />
            )}
        </>
    );
};

export default CarouselA;