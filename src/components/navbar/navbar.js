import React from 'react';

import styles from './navbar.module.scss';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.navbar}>
                <img className={styles.logo} src={require("../../images/logo.png")}/>
                <div className={styles.pages}>
                    <a>For Restaurants</a>
                    <a>For Companies</a>
                </div>
                <button className="btn lightseagreen">Order Now</button>
            </div>
        )
    }
}

export default Navbar;