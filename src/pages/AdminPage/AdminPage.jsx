import React from 'react';

// * Componets
import { Banner } from '../../components/Banner/Banner';

// * Files
import banner from '../../images/banners/b2';

// * Styles
import './AdminPage.scss';

export const AdminPage = () => {
  return <>
    <Banner image={banner} title="admin panel" />
    <div className="page adminPage">
    </div>
  </>;
}