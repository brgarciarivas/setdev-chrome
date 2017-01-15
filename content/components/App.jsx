import React, { Component } from 'react';
import { connect } from 'react-redux';
import { overlayBounties } from '../scripts/bounties';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.pageLoaded) {
            overlayBounties(this.props.dispatch);
        }

    }

    render() {

        console.log('content/App render');

        return (
            <div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pageLoaded: state.Main && state.Main.pageLoaded
    };
};

export default connect(mapStateToProps)(App);