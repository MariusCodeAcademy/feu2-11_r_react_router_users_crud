import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import SingleUserPage from './pages/SingleUserPage';

function App() {
  return (
    <div className='App'>
      {/* prideti route /users/2 gaunam SingleUserPage */}
      <Switch>
        <Route path={'/users/2'}>
          <SingleUserPage />
        </Route>
        <Route path={'/users'}>
          <UsersPage />
        </Route>
        <Route path={'/'} exact>
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
