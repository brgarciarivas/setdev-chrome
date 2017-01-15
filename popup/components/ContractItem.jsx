import React from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';

import Base from './Base';
import { pushIssue } from '../actions/Issues';

class ContractItem extends Base {
    constructor(props) {
        super(props);
        this.autoBind('handleClick');
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
                <div key={index} className='catTile row'>
                    <p>{item}</p>
                </div>
            );
        });
    }
    handleClick() {
        const issue = {
            title: this.props.title,
            due: this.props.due,
            amount: this.props.amount,
            url: this.props.url,
            shortSum: this.props.shortSum,
            cat: this.props.cat,
            pic: this.props.pic,
            repo: this.props.repo,
        };
        this.props.pushIssue(issue);
        this.props.history.push('/ContractSummary');
    }
	render() {
        console.log('ContractItem')
        console.log(this.props)
        let style = {
            opacity: this.state.opacity
        };
        const imageStyle = {
            backgroundImage: `url('${this.props.pic}')`
        };        
        return (
            <a
                onClick={() => handleClick()}
                style={style}
                className='ContractItem column'
            >
                <div className='top_sec row'>
                    <div 
                        className='avatar'
                        style={imageStyle}
                    />
                    <div className='links column'>
                        <h1>{this.props.title}</h1>
                        <a href={this.props.url}>{this.props.url}</a>
                    </div>
                    <div className='info column'>
                        <div className='row lit'>
                            <FontAwesome
                                name='calendar'
                                size={'lg'}
                                className='icon'
                            />
                            <p>{this.props.due}</p>
                        </div>
                        <div className='row lit'>
                            <FontAwesome
                                name='btc'
                                size={'lg'}
                                className='icon'
                            />
                            <p>{this.props.amount}</p>
                        </div>
                    </div>
                </div>
                <div className='bottom_sec row'>
                    <p>{this.props.shortSum}</p>
                    <div className='cats row'>
                        { 
                            this.catTiles()
                        }
                    </div>
                </div>   
            </a>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        pushIssue: issue => dispatch(pushIssue(pushIssue))
    };
};

export default connect(null, mapDispatchToProps)(ContractItem);