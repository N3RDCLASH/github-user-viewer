import React from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from '../../src/views/Home/Home';
import Search from '../../src/views/Search/Search';


const Content = () => {
    return (
        <div id="content">
            <Router>
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    
                    <Route path='/search/:query' component={Search} ></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Content
