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
        var amount = [1,1,1,1,1];
        return this.props.Main.contracts.map((item, index) => {
            return(
                <ContractItem 
                    key={index}
                    projectName={item.projectName}
                    deadline={item.deadline}
                    quoteInBits={item.quoteInBits}
                />
            );
        })
    }
	render() {
        console.log(this.props)        
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
                        name='cog'
                        size={'lg'}
                        className='icon'
                    />
                </div>
                <div className='container column '>
                    {this.props.Main != null &&
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
        Main: state.Main
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        pushIssue: issue => dispatch(pushIssue(pushIssue))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContractList);