import {initializeApp} from 'firebase/app'
import {firebaseConfig} from './config/Config'
import './App.css';
import { Test } from './Components/Test';

//const FirebaseApp = initializeApp(firebaseConfig)

function App() {
  return (
    <div className="App">
        <Test />
    </div>
  );
}

export default App;
