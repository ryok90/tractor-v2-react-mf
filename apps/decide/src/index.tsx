import './css/index.css';
import * as React from 'react';

const ProductPage = React.lazy(() => import('./ProductPage'));

export function setup(app) {
  app.registerPage('/product/:id', ProductPage);
}
