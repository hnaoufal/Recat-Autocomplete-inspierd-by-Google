import React from 'react';
import Radium from 'radium';

export default Radium((props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#maginechannels" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                    <a href="#" className="navbar-brand">
                        Quandoo
                    </a>
                </div>
            </div>
        </nav>
    );
});

const styles = {
    logo: {
        height: '25px'
    }
};
