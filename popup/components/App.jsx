import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Base from './Base';

export default class App extends Base {
    constructor(props) {
        super(props);
        
    }

   

    render() {
        
        console.log('App render');
      
       
        return (
            <div className='App'>
                
                    <ReactCSSTransitionGroup  
                        transitionName='AppContainer'
                        transitionEnterTimeout={700}
                        transitionLeaveTimeout={300}
                    >
                        {React.cloneElement(this.props.children,
                            {
                                key: this.props.location.pathname
                        })}
                    </ReactCSSTransitionGroup>
                
           </div>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         environment: state.environment,
//         Candidate: state.Candidate,
//         PlatformCounts: state.PlatformCounts
//     };
// };

// export default connect(mapStateToProps)(App);