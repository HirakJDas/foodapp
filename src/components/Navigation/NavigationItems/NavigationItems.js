import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/foodapp" exact>OurFood</NavigationItem>
        <NavigationItem link="/about">About</NavigationItem>
        <NavigationItem link="/Plan">Plans</NavigationItem>
        <NavigationItem link="/logout">Contact us</NavigationItem>
    </ul>
);
export default navigationItems;