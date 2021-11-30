import {Router} from "../Routing/Router/Router";
import {Links} from "../Routing/Links/Links";
import {StateValue} from "../Context/Context";
import MainPanel from "../MainPanel/MainPanel";
import './ParentAllProject.css'


export default function App() {

    const {State , DarkMood } = StateValue()
    const Local = localStorage.getItem('User-Email')


    const AppBody = (

        <div className = {DarkMood ? 'DarkParentAllProject' : 'ParentAllProject'}>
            <Links/>
            <Router/>
        </div>

    )

    return State.login || Local? <MainPanel/> : AppBody
}