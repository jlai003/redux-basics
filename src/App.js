import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
// import CakeContainer from './components/CakeContainer'
import DonutsContainer from './components/DonutsContainer'
import BananasContainer from './components/BananasContainer'
import HooksCakesContainer from './components/HooksCakesContainer';
import HooksOrangesContainer from './components/HooksOrangesContainer';
import OrangesContainer from './components/OrangesContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <div>
          <DonutsContainer/>
          <BananasContainer/>
          <HooksCakesContainer/>
          {/* <OrangesContainer/> */}
          <HooksOrangesContainer/>
      </div>
      {/* <CakeContainer/> */}
    </div>
    </Provider>
  );
}
export default App