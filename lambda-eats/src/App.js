import React from "react";
import { createGlobalStyle } from 'styled-components';
import Form from './Form'
import HomeC from './HomeC'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
body {
  background-color: #eae7dc;
  display: flex;
  justify-content: center;
  align-items: center; 
  }`


const App = () => {
  return (
    <>
    
    <GlobalStyle />
    <BrowserRouter>
     
     <Route exact path="/" component={HomeC} />
     <Route exact path="/pizzamaker" component={Form} />
     
     </BrowserRouter>
     
    </>
  );
};
export default App;



