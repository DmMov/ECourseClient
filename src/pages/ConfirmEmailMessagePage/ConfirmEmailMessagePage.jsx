import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

// * Files
import mail from '../../images/mail';

// * Styles
import './ConfirmEmailMessagePage.scss';

export const ConfirmEmailMessagePage = () => {
  const history = useHistory();

  return <div className="page confirmEmailMessagePage">
    <img src={mail} alt="Confirm Email Message Page Image" className="confirmEmailMessagePage__image"/>
    <h2 className="confirmEmailMessagePage__title">confirm your email!</h2>
    <p className="confirmEmailMessagePage__text text">
      Your account has been successfully registered. To complete the process please check your email for a validation request.
    </p>
    <Button
      size="large"
      type="primary"
      className="confirmEmailMessagePage__btn"
      onClick={() => history.push('/')}
    >
      Go to Login
    </Button>
  </div>;
}