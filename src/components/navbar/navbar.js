import React from 'react';

import styles from './navbar.module.scss';

import SearchInput from '../search-input/search-input';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.navbar}>
                <img className={styles.logo} src={require("./logo-white.png")} />
                <div className={styles.pages}>
                    <a>Nearby</a>
                    <a>Re-Order</a>
                    <a>Rewards</a>
                    <a>Referral</a>
                </div>
                <button className="btn lightseagreen invert">Login</button>
                <div className={`${styles.ig} input-group`}>
                    <SearchInput placeholder="Search" suggestions={[
                        "Coffee",
                        "Burgers",
                        "Noodles",
                        "Spaghetti",
                        "Bubble Tea",
                        "Coffee",
                        "Burgers",
                        "Noodles",
                        "Spaghetti",
                        "Bubble Tea"
                    ]}/>
                    <SearchInput placeholder="City" suggestions={[
                        "Toronto",
                        "Markham"
                    ]}/>
                </div>
            </div>
        )
    }
}

export default Navbar;