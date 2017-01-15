
import React from 'react';

import Base from './Base';

export default class ContractItemList extends Base {
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
                className='ContractItemList'
                style={style}
            >
                <div className='ContractItemList  '>
                   
                </div>
            </div>
        );
    }
}

