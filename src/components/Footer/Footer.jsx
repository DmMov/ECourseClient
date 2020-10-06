import React from 'react';
import { CopyrightOutlined } from '@ant-design/icons';

// * Components
import { Logo } from '../Logo/Logo';

// * Styles
import './Footer.scss';

export const Footer = () =>
  <footer className="footer">
    <Logo color="white" />
    <p className="footer__copyright">
      <CopyrightOutlined className="icon" /> Copyright
      <span className="digit year">{new Date().getFullYear()}. </span>
      <span className="eCourse">eCourse</span>.
      <span className="allRights">All rights reserved.</span>
    </p>
  </footer>;