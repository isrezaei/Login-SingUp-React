import {Switch, Route} from "react-router-dom";
import Home from "../../PublicPage/Home";
import About from "../../PublicPage/About";
import Support from "../../PublicPage/Support";
import LoginPageLogic from "../../LoginPage/LoginPageLogic";
import SignUpPage from "../../##SignUp/SignUpPage";

export const Router = () =>
{
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Support' component={Support}/>
            <Route path='/Login' component={LoginPageLogic}/>
            <Route path='/Sigin' component={SignUpPage}/>
        </Switch>
    )
}