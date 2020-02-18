import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ setEmail, setPassword, label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input'  {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;