import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Link from './Link';

render(
  <div>
    <div>Hello World</div>
    <Link page="https://www.google.com">Google</Link>
  </div>,
  document.getElementById('root'),
);
