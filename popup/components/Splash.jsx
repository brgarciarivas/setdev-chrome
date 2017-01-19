import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router/lib';

import Base from './Base';

class Splash extends Base {

    constructor(props) {
        super(props);
        
    }
	render() {
        console.log(this.props)        
        return (
            <div className='Splash'>
                <div className='loader'>
                    <div className='loader-inner ball-triangle-path'>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
        );
    }
}






export default connect(null)(Splash);
