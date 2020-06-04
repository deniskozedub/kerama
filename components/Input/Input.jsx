import React, { useEffect } from 'react';
import cx from 'classnames';
import IMask from 'imask';
import PropTypes from 'prop-types';
import styles from './Input.scss';

const Input = ({
  formikProps: {
    type,
    values,
    handleChange,
    classNameWrapper,
    handleBlur,
    id,
    name,
    placeholder,
    touched,
    errors,
  },
}) => {
  useEffect(() => {
    if (name === 'phone') {
      const numberMask = new IMask(document.querySelector(`.${styles.input}[name=phone]`), {
        mask: '+{38} (\\000) 000 00 00',
      });
    }
  }, []);

  const classNameForInput = cx(cx(styles.input, classNameWrapper), {
    [styles.inputError]: touched[name] && errors[name],
    [styles.inputCorrect]: !(touched[name] && errors[name]),
  });

  return (
    <input
      type={type}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      className={classNameForInput}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  formikProps: PropTypes.shape({
    type: PropTypes.string,
    viewType: PropTypes.string,
    classNameWrapper: PropTypes.string,
    handleChange: PropTypes.func,
    handleBlur: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    touched: PropTypes.object,
    errors: PropTypes.object,
    values: PropTypes.object,
  }),
};

export default Input;
