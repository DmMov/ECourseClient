import React from 'react';
import { render } from 'react-dom';

// * Sass
import 'antd/dist/antd.less';
import 'scss';

import(/* webpackChunkName: 'app' */ 'components/App')
  .then(({ App }) =>
    render(
      <App />,
      document.getElementById('root')
    )
  );