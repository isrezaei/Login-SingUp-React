import {Switch, Route} from "react-router-dom";
import Home from "../../PublicPage/Home";
import About from "../../PublicPage/About";
import Support from "../../PublicPage/Support";
import UserPanel from "../../PrivatePage/UserPanel";
import LoginPage from "../../LoginPage/LoginPage";


export const Router = () =>
{


    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Support' component={Support}/>
            <Route path='/UserPanel' component={UserPanel}/>
            <Route path='/Login' component={LoginPage}/>
        </Switch>
    )
}