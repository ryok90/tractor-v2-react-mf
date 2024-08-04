import './css/index.css';
import * as React from 'react';

const CartPage = React.lazy(() => import('./CartPage'));
const Checkout = React.lazy(() => import('./Checkout'));
const Thanks = React.lazy(() => import('./Thanks'));

const AddToCart = React.lazy(() => import('./AddToCart'));
const MiniCart = React.lazy(() => import('./MiniCart'));

export function setup(app) {
  app.registerPage('/checkout/cart', CartPage);
  app.registerPage('/checkout/checkout', Checkout);
  app.registerPage('/checkout/thanks', Thanks);

  app.registerExtension('add-to-cart', AddToCart);
  app.registerExtension('mini-cart', MiniCart);
}
