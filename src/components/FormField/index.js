import React from 'react';

function FormField(props) {

    const label = props.label
    let FormInput = React.createElement(
        'input', 
        props
    );
    if (props.type === 'textarea'){
        FormInput = React.createElement(
            'textarea', 
            props
        );
    }
    return (
        <div>
            <label>
                {label}: 
                {FormInput}
            </label>
        </div>
    )
}

export default FormField;