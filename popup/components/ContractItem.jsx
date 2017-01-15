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
                className='ContractItem'
            >
                <div className='row align-center'>
                    <h6 className='flex-self'>{this.props.projectName}</h6>
                    <div className='flex'/>
                    <p className='flex-self'>{this.props.quoteInBits}</p>
                </div>
            </Link>
        );
    }
}

