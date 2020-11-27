import React from 'react'
import './App.css';
import './reset.css'
import PizzaEditor from './pizzaEditor/pizzaEditor'
import { observer } from 'mobx-react';
import { Link, Route, Switch } from "react-router-dom";
import PizzaEditorCheckout from './pizzaEditor/pizzaEditorCheckout';
import PizzaEditorRegistration from './pizzaEditor/PizzaEditorRegistration';
import PizzaEditorLogin from './pizzaEditor/PizzaEditorLogin';
import PizzaEditorOrderList from './pizzaEditor/PizzaEditorOrderList';
import PizzaEditorPaymentForm from './pizzaEditor/PizzaEditorPaymentForm'; 


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">PizzaEditor</Link></li>
          <li><Link to="/pizza-editor-checkout">PizzaEditorCheckout</Link></li>
          <li><Link to="/pizza-editor-registration">PizzaEditorRegistration</Link></li>
          <li><Link to="/pizza-editor-login">PizzaEditorLogin</Link></li>
          <li><Link to="/pizza-editor-order-list">PizzaEditorOrderList</Link></li>
          <li><Link to="/pizza-editor-payment-form">PizzaEditorPaymentForm</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <PizzaEditor />
        </Route>
        <Route path="/pizza-editor-checkout">
          <PizzaEditorCheckout />
        </Route>
        <Route path="/pizza-editor-registration">
          <PizzaEditorRegistration />
        </Route>
        <Route path="/pizza-editor-login">
          <PizzaEditorLogin />
        </Route>
        <Route path="/pizza-editor-order-list">
          <PizzaEditorOrderList />
        </Route>
        <Route path="/pizza-editor-payment-form">
          <PizzaEditorPaymentForm />
        </Route>
      </Switch> 
    </>
  )
}

export default (observer(App));
