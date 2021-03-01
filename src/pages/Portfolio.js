import React from 'react';


import About from '../components/About';
import Carousel from '../components/Carousel';

function Portfolio(props) {
    
    return(
        <div>
        <About title={props.title} subTitle={props.subTitle} text={props.text} />
        <Carousel />
    </div>
    );
}

export default Portfolio;