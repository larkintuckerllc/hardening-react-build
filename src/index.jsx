import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import sum from './sum';
import Link from './Link';

render(
  <div>
    <div>Hello World</div>
    <div>1 plus 2 equals {sum(1, 2).toString()}</div>
    <Link page="https://www.google.com">Google</Link>
  </div>,
  document.getElementById('root'),
);
