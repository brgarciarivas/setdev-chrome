import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Base from './Base';
import ContractItem from './ContractItem';

import { pushIssue } from '../actions/Issues';

class ContractList extends Base {
    constructor(props) {
        super(props);
        this.autoBind('showContracts')
        

    }
    
	showContracts() {
        
        return this.props.contracts.map((item, index) => {
            return(
                <ContractItem 
                    key={index}
                    title={item.title}
                    due={item.due}
                    amount={item.amount}
                    url={item.url}
                    shortSum={item.shortSum}
                    cat={item.cat}
                    pic={item.pic}
                    repo={item.repo}
                    link={this.props.history.push}
                    color={item.color}
                />
            );
        })
    }
	render() {
            
        return (
            <div className='ContractList'>
                <div className='nav row'>
                     <FontAwesome
                        onClick={ () =>  this.props.history.push('/AddNewIssue')}
                        name='plus'
                        size={'lg'}
                        className='icon'
                    />
                     <FontAwesome
                        name='gears'
                        size={'lg'}
                        className='icon'
                    />
                </div>
                <div className='container column '>
                    {this.props.contracts != null &&
                        this.showContracts()
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        contracts: state.Main.contracts
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pushIssue: issue => dispatch(pushIssue(pushIssue))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContractList);