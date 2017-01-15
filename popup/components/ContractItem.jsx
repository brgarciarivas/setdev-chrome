import React from 'react';
import { Link } from 'react-router/lib';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Base from './Base';
import { pushIssue } from '../actions/Issues';

class ContractItem extends Base {
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
                className='ContractItem column'
            >
                <div className="top_info">
                    <div className="avatar" />
                    <div className="column">
                        <div className="username">
                            Bsin1
                        </div>
                        <div className="repository">
                            repository
                        </div>
                    </div>
                    <div className="column">
                         <div className="date" >
                            12/15
                         </div>
                        <div className="bounty" >
                            2.45
                        </div>
                    </div>              
               </div>
                <div className="bottom_info row">
                    {this.props.projectName}
                    <div className="tag">
                        swift
                    </div>
                    <div className="tag">
                        iOSs
                    </div>
                </div>
                
            </Link>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        pushIssue: issue => dispatch(pushIssue(pushIssue))
    };
};

export default connect(null, mapDispatchToProps)(ContractItem);