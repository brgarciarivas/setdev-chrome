import React from 'react';
import { connect } from 'react-redux';

import Base from './Base';
import ContractItem from './ContractItem';

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
        return (
            <div className='ContractList'>
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
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ContractList);