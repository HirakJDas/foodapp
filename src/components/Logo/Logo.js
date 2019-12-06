import React from 'react';
import classes from './Logo.css';
import Logo from '../../assets/image5.jpg';
const logo = (props) => (
    <div className={classes.Logo}>
        <img src={Logo} alt="Food Logo" />
    </div>
);

export default logo;