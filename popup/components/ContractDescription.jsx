import React from 'react';

import Base from './Base';

export default class ContractDescription extends Base {
    constructor(props) {
        super(props);
        this.state = {
        	opacity: 0
        }
    }
	
	componentDidMount() {
        console.log('mounted')
        setTimeout(() => {
            this.setState({
                opacity: 1
            });
        }, 1000);
    }
	render() {
		let style = {
            opacity: this.state.opacity
        }       
        return (
            <div 
            	style={style}
            	className='ContractDescription'
            >
                <div className='ContractDescription  '>
                   ContractDescription
                </div>
            </div>
        );
    }
}

