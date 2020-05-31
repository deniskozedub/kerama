import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import IconExit from '../../public/svg/ant-design_close-outline.svg';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styles from './Popup.scss';

const Popup = ({ setIsPopupOpen }) => (
  <>
    <div className={styles.popupWrapper} />
    <div className={styles.popupContent}>
      <button
        className={styles.buttonClose}
        onClick={() => setIsPopupOpen(false)}
      >
        <IconExit />
      </button>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required('Введите имя'),
          email: Yup.string()
            .email('email не корректный')
            .required('Введите email'),
          phone: Yup.string()
            .matches(/^(\+38\ )\((0)\d{2}\)(\ )\d{3}(\ )\d{2}(\ )\d{2}$/, 'номер не валиден')
            .required('Введите номер'),
        })}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => (
          <form className={styles.form} onSubmit={formik.handleSubmit}>
            <h5 className={styles.formTitle}>заполните форму</h5>
            <p className={styles.text}>и мы свяжемся с вами</p>
            <Input formikProps={{
              ...formik,
              placeholder: formik.touched.name && formik.errors.name || 'Имя',
              type: 'text',
              name: 'name',
              classNameWrapper: styles.inputWrapper,
            }}
            />
            <Input formikProps={{
              ...formik,
              placeholder: formik.touched.email && formik.errors.email || 'E-mail',
              type: 'email',
              name: 'email',
              classNameWrapper: styles.inputWrapper,
            }}
            />
            <Input formikProps={{
              ...formik,
              placeholder: formik.touched.phone && formik.errors.phone || 'Номер телефона',
              type: 'text',
              name: 'phone',
              classNameWrapper: styles.inputWrapper,
            }}
            />
            <Input formikProps={{
              ...formik,
              placeholder: 'Комментарий',
              type: 'text',
              name: 'comment',
            }}
            />
            <Button
              viewType="orange"
              type="submit"
              disabled={!formik.dirty || !formik.isValid}
              classNameWrapper={styles.buttonWrapper}
            >
              получить консультацию
            </Button>
          </form>
        )}
      </Formik>
    </div>
  </>
);

Popup.propTypes = {
  setIsPopupOpen: PropTypes.func,
};

export default Popup;
