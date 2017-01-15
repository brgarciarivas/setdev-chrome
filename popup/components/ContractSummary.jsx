import React from 'react';
import { Link } from 'react-router/lib';
import FontAwesome from 'react-fontawesome';

import Base from './Base';
import ContractItemList from './ContractItemList';
import ContractDescription from './ContractDescription';

export default class ContractSummary extends Base {
    constructor(props) {
        super(props);
        this.state = {
            summary: true
        };
    }
	
	render() {
        console.log(this.state)
        const icon = this.state.summary ? 'list': 'file-text';        
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
                        name={icon}
                        size={'lg'}
                        className='icon'
                        onClick={ () => this.setState({summary: !this.state.summary})}
                    />
                </div>

                {
                    this.state.summary ? <ContractDescription/> : <ContractItemList/>
                }
            </div>
        );
    }
}





