import './App.css';
import DashboardLayout from '../src/layout/DashboardLayout'
import TopNav from '../src/layout/TopNav'
import Home from '../src/views/Home/Home'
import User from '../src/views/User/User';
import Search from '../src/views/Search/Search'
import Footer from './layout/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import NotFound from './views/NotFound/NotFound';
function App() {
  return (
    <>
      <Router>
         <TopNav/>
         <div id="main">
               <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/search/:query' component={Search} ></Route>
                    <Route path='/user/:username' component={User} ></Route>
                    <Route path='*' component={NotFound}></Route>
                </Switch>
         </div>
         <Footer/>
      </Router>

    </>
  )
}


export default App;
