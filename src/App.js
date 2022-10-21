import { Route } from 'react-router'
import logo from './logo.svg';
import './App.css';
import HomePageRoute from './routes/HomePage';
import NotificationRedirectionRoute from './routes/NotificationRedirectionRoute';
import uuid from 'uuid'

if (!localStorage.getItem("testing_user_id"))
  localStorage.setItem("testing_user_id", uuid.v4())

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route
          exact
          path={'/'}
          key={'HOME_PAGE_ROUTE'}
          component={HomePageRoute}
        />
        <Route
          exact
          path={'/notification-redirection'}
          key={'NOTIFICATION_REDIRECTION_ROUTE'}
          component={NotificationRedirectionRoute}
        />
      </header>
    </div>
  );
}

export default App;
