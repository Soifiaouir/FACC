import React from 'react';
import CarousselU from '../../CarousselU';

const importAll = (r) => {
    return r.keys().map(key => ({
        path: r(key),
        name: key.replace(/^.*[\\/]/, '').split('.')[0]
    }));
};

const CarousselLogo = () => {
    const imageArray = importAll(require.context('../../../../../assets/FINANCEURS', false, /\.(png|jpe?g|svg)$/));
    return <CarousselU imageArray={imageArray}  hideImageName={false} />;
};

export default CarousselLogo;