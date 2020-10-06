import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CheckCircleFilled } from '@ant-design/icons';

// * Components
import { Loader } from '../../components/Loader/Loader';

// * Hooks
import { useHttp } from '../../hooks/http.hook';

// * Styles
import './ConfirmEmailPage.scss';
import { Button } from 'antd';

export const ConfirmEmailPage = () => {
  const [done, setDone] = useState(false);
  const history = useHistory();
  const { id, code } = useParams();
  const { request, loading } = useHttp();

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        await request(`users/confirmEmail`, 'post', { userId: id, confirmationToken: code });
        setDone(true);
      } catch (err) {
        history.push('/');
      }
    }

    confirmEmail();
  }, []);

  if (loading)
    return <Loader />;

  return <div className="page confirmEmailPage">
    {done && <SuccessMessage history={history} />}
  </div>;
}

const SuccessMessage = ({ history }) => <div className="successMessage">
  <CheckCircleFilled className="successMessage__icon" />
  <h2 className="successMessage__title">success!</h2>
  <p className="successMessage__text text">your email has been confirmed.</p>
  <Button
    type="primary"
    onClick={() => history.push('/')}
  >
    Go to Login
  </Button>
</div>;