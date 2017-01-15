import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import ContractItem from './ContractItem';

export default class ContractList extends Base {
    constructor(props) {
        super(props);
        this.autoBind('showContracts')
    }
	showContracts() {
        var amount = [1,1,1,1,1];
        return amount.map((item, index) => {
            return(
                <ContractItem 
                    key={index}
                />
            );
        })
    }
	render() {     
        console.log('test')   
        return (
            <div className='ContractList'>
                <div className='container column '>
                   {
                    this.showContracts()
                   }
                </div>
            </div>
        );
    }
}

