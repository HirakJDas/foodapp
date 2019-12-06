import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {Route} from 'react-router-dom';
import FoodList from './containers/FoodList/FoodList';

class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <Route path="/foodapp" exact component={FoodList}/>
        </Layout>
       
      </div>
    );
  }
}

export default App;
