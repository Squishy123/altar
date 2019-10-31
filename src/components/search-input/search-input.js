import React from 'react';

import styles from './search-input.module.scss';

export default class SearchInput extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className={styles.container}>
            <input className="input text" type="text" styles={this.props.inputStyle} placeholder={this.props.placeholder}/>
            {
                <div styles={this.props.suggestionStyle} className={styles.suggestionsContainer}>
                    {
                        (this.props.suggestions) ?
                        this.props.suggestions.map((i) => (
                            <div className={styles.suggestion}>
                                {i}
                            </div>
                        )) : null
                    }
                </div>
            }
        </div>)
    }
}