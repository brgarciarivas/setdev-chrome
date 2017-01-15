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
    catTiles() {
        return this.props.cat.map((item, index) => {
            console.log(item)
            return(
                <div className='catTile'>
                    <p>{item}</p>
                </div>
            );
        });
    }
	render() {
        console.log(this.props)
        let style = {
            opacity: this.state.opacity
        }        
        return (
            <Link 
                to={'/ContractSummary/'}
                style={style}
                className='ContractItem column'
            >
                <div className='top_sec row'>
                    <div className='avatar'/>
                    <div className='links column'>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.url}</p>
                    </div>
                    <div className='info column'>
                        <div className='row'>
                            <FontAwesome
                                name='calender'
                                size={'lg'}
                                className='icon'
                            />
                            <p>{this.props.due}</p>
                        </div>
                        <div className='row'>
                            <FontAwesome
                                name='btc'
                                size={'lg'}
                                className='icon'
                            />
                            <p>{this.props.btc}</p>
                        </div>
                    </div>
                </div>
                <div className='bottom_sec row'>
                    <p>{this.props.shortSum}</p>
                    <div>
                        { this.catTiles()}
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