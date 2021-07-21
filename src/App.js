import Nav from './components/Nav'
import './App.css';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'
import Home from './components/Home'
import Cart from './components/Cart'
import Details from './components/Details'


function App() {
  return (
    <Router>
      <Provider store={store}>
       <Nav />
       <Route path='/' exact component={Home}/>
        <Router path='/cart' exact component={Cart}/>
        <Route path='/details/:id' exact component={Details}/>

        </Provider>
    </Router>
  );
}

export default App;
