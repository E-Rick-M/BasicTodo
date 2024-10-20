
import './App.css';
import {Fragment} from 'react'
import Header from './components/header'
import ToDo from './components/ToDo'
function App() {
  return (
    <Fragment>
      <Header/>
      <ToDo/>
    </Fragment>
  );
}

export default App;
