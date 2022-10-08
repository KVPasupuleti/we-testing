import logo from './logo.svg';
import './App.css';
import HomePageRoute from './routes/HomePage';
import uuid from 'uuid'

if (!localStorage.getItem("testing_user_id"))
  localStorage.setItem("testing_user_id", uuid.v4())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HomePageRoute />
      </header>
    </div>
  );
}

export default App;
