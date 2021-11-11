import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Main from './Components/Main'
import Detailpage from './Components/Detailpage'
import ProductDet from './Components/Product/ProductDetail'
import Omdb from './Components/Tester'

class Routes extends React.Component {
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={ Homepage }></Route>
                    <Route exact path="/product" component={ Main }></Route>
                    <Route exact path="/detail" component={ Detailpage }></Route>
                    <Route exact path="/product/:id/detail" component={ ProductDet }></Route>
                    <Route exact path="/omdb" component={ Omdb }></Route>
                </Switch>
            </Router>
        )
    }
}

export default Routes
