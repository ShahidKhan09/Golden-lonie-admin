import './App.scss';
import Landing from './components/landing/Landing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login/Login';
import AddProperty from './components/AddProperty/AddProperty';


function App() {
  return (
    <>
        <ToastContainer style={{ fontSize: 20 }} />
          <Router>
            {/* <Navbar/> */}
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/dashboard' component={Landing} />
              <Route exact path='/addproperty' component={AddProperty} />
            </Switch>
          </Router>
    </>
  );
}

export default App;
