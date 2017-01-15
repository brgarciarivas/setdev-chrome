
import React from 'react';
import { Link } from 'react-router/lib';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class AddNewIssue extends Base {
    constructor(props) {
        super(props);
        
    }
	
	render() {
             
        return (
            <div className='AddNewIssue'>
               AddNewIssue
            </div>
        );
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     };
// };

// export default connect(null, mapDispatchToProps)(ContractItem);