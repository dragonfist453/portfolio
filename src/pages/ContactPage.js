import React from 'react';

import Hero from '../components/Hero';

function ContactPage(props) {
    return(
        <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
    );
}

export default ContactPage;