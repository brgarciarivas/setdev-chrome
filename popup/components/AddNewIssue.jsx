
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
        this.autoBind('handleChange', 'handleSubmit');
        this.state = {
        	title: '',
        	issue: {
        		url: '',
        		username: '',
        		issueNumber: '',

        	}
        }
    }
	handleChange(event) {
    	this.setState({value: event.target.title});
  	}
	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.title);
    	event.preventDefault();
  	}
	render() {
             
        return (
            <div className='AddNewIssue column'>
            	<div className='nav'>
            	</div>
            	<div className='container column'>
            		<form 
            			className='name group'
            			onSubmit={this.handleSubmit}
            		>
            			<input 
            				type='text'
            				required
            				value={this.state.title} 
            				onChange={this.handleChange}
            			/>
            			<span className='highlight'/>
            			<span className='bar' />
            			<label>Bounty Name</label>
            		</form>
            		<div className='cal'>
            			<h1>Duration Today till: </h1>
            			<Calendar
            				className='calendar'   
            				style={{ margin: 20 }}
            				fullscreen={false}
            			/>
            		</div>
            		<div className='pay'>
            			<p>1Q2Bo9ZWQY5Er85zeYmLdMKFmvkq3TV3tg</p>
            			<div className='btc'/>
            			<div className='blue'/>
            			<div className='qr'/>
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