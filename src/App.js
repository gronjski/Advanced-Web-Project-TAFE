import {initializeApp} from 'firebase/app'
import {firebaseConfig} from './config/Config'
import './App.css';
import { Test } from './Components/Test';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import {Routes, Route} from 'react-router-dom'

const FirebaseApp = initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/" element={ <About/> } />
        </Routes>
    </div>
  );
}

export default App;
