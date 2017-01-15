
import React from 'react';

import Base from './Base';

export default class TextInput extends Base {
    constructor(props) {
        super(props);
       
    }
    render() {
       
        const { input, meta: { touched, error }, name, label, text, type } = this.props;
        return (
            <div className='TextInput column'> 
                <input 
                    {...input}  
                    required
                    className='input_fields'
                    type={type}
                />
                <span className='bar'/>
                <label
                    htmlFor={name} 
                    className='main_label'
                >
                    {label}
                </label>
                {
                    touched && (error && <label htmlFor={name} className='error_label'>{error}</label>)
                }
                {
                    touched && (error && <span className='error_bar'/>)
                }      
            </div>
        );
    }
}