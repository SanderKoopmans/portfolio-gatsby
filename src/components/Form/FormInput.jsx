import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  icon,
  name,
  type,
  placeholder,
  onChange,
  className,
  value,
  children,
  label,
  ...props
}) => {

  return (
    <div className="inputGroup">
      <fieldset>
        <legend><span></span></legend>
      </fieldset>
      <label htmlFor={name}>{label}</label>
      <div className="inputBase">
        <div className="inputIcon">
          {icon}
        </div>
        <input 
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
        />
      </div>
    </div>
  )
};

FormInput.defaultProps = {
  type: 'text',
  className: ''
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default FormInput;
