import React from 'react';
import './formsControls.css';
let formControlError = 'formControlError';

export const TextArea = ({input,meta, ...props}) => {
    let hasError = meta.touched && meta.error ?  <span className='textError'>{meta.error}</span> : ''
    return (
        <div>
            <div>
            <textarea className={hasError ? formControlError : ''} {...input} {...props} />
            </div>
            <div>
                {hasError}
            </div>
        </div>
    )
}

export const LoginInputArea = ({input, meta, ...props}) => {
    let hasError = meta.touched && meta.error ? <span className='textError'>{meta.error}</span> : ''
    return (
        <div>
        <div>
        <input className = {hasError ? formControlError : ''} {...input} {...props}/>
        </div>
        <div>
            {hasError}
        </div>
        </div>
    
    )
}

export const PasswordInputArea = ({input, meta , ...props}) => {
    let hasError = meta.touched && meta.error ? <span className='textError'>{meta.error}</span>:''
    return (
        <div>
            <div>
            <input className = {hasError ? formControlError : ''} {...input} {...props}/>
            </div>
            <div>
                {hasError}
            </div>
        </div>
    )
}

