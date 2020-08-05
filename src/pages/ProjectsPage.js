import React from 'react';

import Hero from '../components/Hero';

function ProjectsPage(props) {
    return(
        <Hero title={props.title} subtitle={props.subtitle} text={props.text}/>
    );
}

export default ProjectsPage;