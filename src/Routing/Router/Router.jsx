import {Switch, Route} from "react-router-dom";
import Home from "../../PublicPage/Home";
import About from "../../PublicPage/About";
import Support from "../../PublicPage/Support";
import UserPanel from "../../PrivatePage/UserPanel";
import LoginPageLogic from "../../LoginPage/LoginPageLogic";
import SiginPage from "../../SiginPage/SiginPage";


export const Router = () =>
{


    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Support' component={Support}/>
            <Route path='/Login' component={LoginPageLogic}/>
            <Route path='/UserPanel' component={UserPanel}/>
            <Route path='/Sigin' component={SiginPage}/>
        </Switch>
    )
}