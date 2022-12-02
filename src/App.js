
import './App.css';
import Profile from './Components/Profile/Profile';
import Signup from './Components/Signup/Signup';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
 
    <BrowserRouter>
    <NavbarComponent/>
    {/* <div className="App"> */}
      
    <Switch>
    <Route exact path="/">
    <Signup/>
				</Route>
        <Route path='/Profile'>
          <Profile/>
        </Route>
    </Switch>
    {/* </div> */}
    </BrowserRouter>
    
      
    
  );
}

export default App;
