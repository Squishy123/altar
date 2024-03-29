/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import './layout.scss';

import { connect } from 'react-redux';

import { changeBG } from '../../state/actions';

import Navbar from '../navbar/navbar';

const mapStateToProps = state => {
    return { bgColor: state.bgColor };
};

const mapDispatchToProps = dispatch => {
    return {
        changeBG: bgColor => dispatch(changeBG(bgColor)),
    };
};

const Layout = ({ bgColor, changeBG, children }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Navbar/>
                <div className="main-container"  style={{ backgroundColor: bgColor }}>
                    <main>{children}</main>
                    <footer />
                </div>
            </>
        )}
    />
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);
