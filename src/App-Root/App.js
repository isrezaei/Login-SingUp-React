import {Router} from "../Routing/Router/Router";
import {Links} from "../Routing/Links/Links";
import {StateValue} from "../Context/Context";
import MainPanel from "../MainPanel/MainPanel";
import './ParentAllProject.css'
import Footer from "../Footer/Footer";

export default function App() {

    const {State , DarkMood } = StateValue()
    const Local = localStorage.getItem('User-Email')


    const AppBody = (

        <div className = {DarkMood ? 'DarkParentAllProject' : 'ParentAllProject'}>
            <Links/>
            <Router/>
            <Footer/>
        </div>

    )

    return  AppBody
}