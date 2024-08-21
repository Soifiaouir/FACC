import React from 'react';
import CarousselU from '../../CarousselU';

const importAll = (r) => {
    return r.keys().map(key => ({
        path: r(key),
        name: key.replace(/^.*[\\/]/, '').split('.')[0]
    }));
};

const Caroussel2016B = () => {
    const imageArray = importAll(require.context('../../../../../assets/2016', false, /\.(png|jpe?g|svg)$/));
    return <CarousselU imageArray={imageArray}  hideImageName={true} />;
};

export default Caroussel2016B;