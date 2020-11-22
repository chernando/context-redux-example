import React, {useRef} from 'react';
import { sample } from 'lodash';

import './App.css';
import AppWithContext from './with-context/AppWithContext';
import AppWithRedux from './with-redux/AppWithRedux';

const NAMES = ['Ana', 'Bob', 'Carlos', 'Diego', 'Ernesto'];

function App() {
  const setProfileContext = useRef((_nextProfile: any) => {});
  const setProfileRedux = useRef((_name: string) => {});

  const changeProfileName = () => {
    const name = sample(NAMES);

    console.log('[CHANGING PROFILE]', name);

    if (setProfileContext.current !== undefined) {
      setProfileContext.current({ name });
    }

    if (setProfileRedux.current !== undefined) {
      setProfileRedux.current(name ?? "");
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <p onClick={changeProfileName}>Click to change profile name</p>

        <h1>With Context</h1>
        <AppWithContext changeProfile={setProfileContext} />

        <h1>With Redux</h1>
        <AppWithRedux changeProfile={setProfileRedux} />
      </header>
    </div>
  );
}

export default App;
