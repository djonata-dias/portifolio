import React from 'react';
import { Header, Footer,Abstract } from './components';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Abstract />
      <Footer />
    </div>
  );
}

export default App;
