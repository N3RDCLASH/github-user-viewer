import './App.css';
import DashboardLayout from '../src/layout/DashboardLayout'
import TopNav from '../src/layout/TopNav'
import Home from '../src/views/Home/Home'
import Search from '../src/views/Search/Search'
import Footer from './layout/Footer';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
         <TopNav/>
               <Switch>
                    <Route path='/' exact component={Home}></Route>
                    
                    <Route path='/search/:query' component={Search} ></Route>
                </Switch>
         <Footer/>
      </Router>

    </>
  )
}


export default App;
