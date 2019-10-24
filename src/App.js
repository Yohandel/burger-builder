import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurguerBuilder from './Containers/BurguerBuilder/BurguerBuilder';

class App extends Component {
  state = {  }
  render() {
    return (
      <div>
        <Layout>
          <BurguerBuilder/>
        </Layout>
      </div>
    );
  }
}


export default App;
