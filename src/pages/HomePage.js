import React from 'react';

import About from '../components/About';

function HomePage(props) {
    
    return(
        <About title={props.title} subTitle={props.subTitle} />
    );
}

export default HomePage;