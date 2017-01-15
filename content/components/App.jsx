import React, { Component } from 'react';
import { connect } from 'react-redux';
import { overlayBounties } from '../scripts/bounties';
import { checkMerge } from '../scripts/github';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intervalId: null
        };
    }

    componentDidMount() {
        if(!this.props.pageLoaded) {
            overlayBounties(this.props.dispatch);
        }
        var intervalId = setInterval(this.timer.bind(this), 7000); 
        this.setState({ intervalId: intervalId });
    }

    timer() {
        checkMerge(this.state.intervalId);
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