import React from 'react';
import { Link } from 'react-router/lib';

import Base from './Base';

export default class ContractItem extends Base {
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
            <Link 
                to={'/ContractSummary/'}
                style={style}
                className='ContractItem'>
               ContractItem
            </Link>
        );
    }
}

