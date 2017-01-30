import React, { Component } from 'react';
import { connect } from 'react-redux';
import Radium from 'radium';
import { fetchWikis } from '../../actions/index';

@Radium
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: '', term2: '', term3: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.getKey = this.getKey.bind(this);
    }
    componentWillMount() {
        this.props.fetchWikis();
    }
    onInputChange(event) {
        event.preventDefault();

        this.setState({
            term: event.target.value
        });
        const obj = this.props.wiki;

        const term = obj.filter((objItem) => {
            const string = objItem.title;
            return string.indexOf(this.state.term) === 0;
        });
        if (this.state.term2 !== this.state.term) {
            this.setState({term2: ''})
        }
        const term3 = obj.filter((objItem) => {
            const string = objItem.title;
            return string.indexOf(this.state.term) > -1;
        });

        if (term[0]) {
            this.setState({term2: term[0].title})
            this.setState({term3: term3})
        }

        if (this.state.term.length <= 1) {
            this.setState({term2: ''})
        }

    }
    onFormSubmit(event) {
        this.setState({ term: '' });
    }
    renderJson() {
        const list = this.props.wiki;

        return list.map((item) => {
            return(
                <div key={item.id}>{item.title}</div>
            );
        });
    }
    renderReducedJson() {
        if (this.state.term3) {
            const list = this.state.term3;
            console.log(list);

            return list.map((item) => {
                return(
                    <div key={item.id}>{item.title}</div>
                );
            });
        }
    }
    getKey(e) {
        if (e.keyCode === 39) {
            this.setState({term: this.state.term2})
        }
    }
    render() {
        return(
            <div>
                <h4>Press Arrow-Right to autofill</h4>
            <form style={[styles.form]} onSubmit={this.onFormSubmit} className="input-group">
                <div className="form-group has-feedback">
                    <input
                        style={[styles.input]}
                        type="text"
                        className="form-control"
                        onKeyDown={this.getKey}
                        onChange={this.onInputChange}
                        value={this.state.term}
                        placeholder="Search on Json-Placeholder in category Album"
                    />
                    <input
                        style={[styles.input, {zIndex: 10, color: 'gray'}]}
                        autoComplete
                        type="text"
                        className="form-control"
                        onChange={this.onInputChange}
                        value={this.state.term2}
                        disabled="disabled"
                    />
                    <i className="glyphicon glyphicon-search form-control-feedback"></i>
                </div>
            </form>
                <div style={[styles.json]} className="json">
                    <h5>Reduced Json:</h5>
                    {this.renderReducedJson()}
                    <h3>JSON fetched from <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder</a> through Redux/Redux-Thunk</h3>
                    {this.renderJson()}
                </div>
            </div>
        );
    }
}

const styles = {
    logo: {
        height: '25px'
    },
    form: {
        width: '100%',
        position: 'relative'
    },
    input: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 11,
        background: 'transparent'
    },
    json: {
        marginTop: '70px'
    }
};

function mapStateToProps(state) {
    return { wiki: state.wiki };
}

export default connect(mapStateToProps, { fetchWikis })(SearchBar);
