import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//page components
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
