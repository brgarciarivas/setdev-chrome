import React from 'react';
import { Link } from 'react-router/lib';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class ContractSummary extends Base {
    constructor(props) {
        super(props);
        
    }
	
	render() {
        console.log(this.props)        
        return (

            <div className='ContractSummary'>
                <div className='nav row'>
                    <FontAwesome
                        onClick={ () => this.props.history.push('/ContractList')}
                        name='chevron-left'
                        size={'lg'}
                        className='icon'
                    />
                     <FontAwesome
                        name='list'
                        size={'lg'}
                        className='icon'
                    />
                </div>
                test
            </div>
        );
    }
}





