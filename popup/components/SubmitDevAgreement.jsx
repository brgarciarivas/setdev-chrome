import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';

export default class SubmitDevAgreement extends Base {
    constructor(props) {
        super(props);
        
    }
	
	render() {        
        return (
            <div className='SubmitDevAgreement'>
               SubmitDevAgreement
            </div>
        );
    }
}

