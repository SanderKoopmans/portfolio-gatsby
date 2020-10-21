import React from 'react';
import PropTypes from 'prop-types';

const FormText = ({
  icon,
  name,
  type,
  placeholder,
  rows,
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
        <textarea
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={className}
          rows={rows}
        />

      </div>
    </div>
  )
};

FormText.defaultProps = {
  type: 'text',
  className: ''
}

FormText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired
}

export default FormText;
