import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';

export default class PaymentRreceived extends Base {
    constructor(props) {
        super(props);
        
    }
	
	render() {        
        return (
            <div className='PaymentRreceived'>
               PaymentRreceived
            </div>
        );
    }
}

