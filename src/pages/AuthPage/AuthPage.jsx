import React, { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

// * Components
import { Banner } from '../../components/Banner/Banner';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';

// * Files
import banner from '../../images/banners/b3';

// * Styles
import './AuthPage.scss';

export const AuthPage = () => {
  const [activeForm, setActiveForm] = useState('login');

  return <>
    <Banner image={banner} title="auth" />
    <div className="page authPage">
      <div className="toggleFormBtnWrap">
        <Button
          type="link"
          className="toggleFormBtn"
          onClick={() => setActiveForm(value => value === 'login' ? 'register' : 'login')}
        >
          go to {activeForm === 'login' ? 'register' : 'login'} <RightOutlined />
        </Button>
      </div>
      {activeForm === 'login' ? <LoginForm /> : <RegisterForm />}
    </div>
  </>;
}