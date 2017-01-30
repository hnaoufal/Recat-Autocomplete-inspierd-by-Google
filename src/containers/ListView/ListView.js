import React, { Component } from 'react';
import Radium from 'radium';
import SearchBar from '../SearchBar/SearchBar';
import { connect } from 'react-redux';

@Radium
class ListView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (ListView);
