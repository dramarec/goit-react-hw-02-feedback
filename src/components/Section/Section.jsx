import React from 'react';
import style from './Layot.module.css';

const Section = ({ children, title }) => {
    return (
        <Section className={style.container}>
            {title && <h2>{title}</h2>}
            {children}
        </Section>
    );
};

export default Section;
