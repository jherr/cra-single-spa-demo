/* eslint-disable no-restricted-properties, no-undef, no-unused-vars */
import React, { useState, useEffect } from 'react';
import Parcel from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

import './App.css';

function App() {
  const [MyParcel, setMyParcel] = useState(null);

  useEffect(() => {
    global.System
      .import('http://localhost:3010/bundle.js')
      .then(mod => {
        setMyParcel(mod.default);
      });
  }, []);

  return (
    <div className="App">
      {MyParcel && <Parcel
        config={MyParcel}
        mountParcel={mountRootParcel}
      />}
    </div>
  );
}

export default App;
