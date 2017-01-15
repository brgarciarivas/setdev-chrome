
import React from 'react';
import { Link } from 'react-router/lib';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import Calendar from 'rc-calendar';

import Base from './Base';
import TextInput from './TextInput'

export default class AddNewIssue extends Base {
    constructor(props) {
        super(props);
        this.state = {
        	issue: {
        		url: '',
        		username: '',
        		issueNumber: '',

        	}
        }
    }
	onSubmit(){

	}
	render() {
             
        return (
            <div className='AddNewIssue column'>
            	<div className='nav'>
            	</div>
            	<div className='container column'>
            		<div className='name '>
            			<h1>Bounty Name:</h1>
            			<p>repo name</p>
            		</div>
            		<div className='cal'>
            			<h1>Duration: </h1>
            			<Calendar
            				className='calendar'   
            				style={{ margin: 0 }}
            				fullscreen={false}
            			/>
            		</div>
            		<div className='btc'>

            		</div>
            	</div>
            	

            </div>
        );
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     };
// };

// export default connect(null, mapDispatchToProps)(ContractItem);