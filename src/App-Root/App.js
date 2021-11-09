import {Router} from "../Routing/Router/Router";
import {Links} from "../Routing/Links/Links";
import {StateValue} from "../Context/Context";
import MainPanel from "../MainPanel/MainPanel";
import './Panel-Login-SignIn.css'
import './App.css'

export default function App() {
    const {State} = StateValue()
    const Local = localStorage.getItem('User-Email')


    const AppBody = (
        <div  className='AppBody'>
            <div className='Panel-Login-SignIn'>
                <Links/>
                <Router/>
            </div>
        </div>
    )

    return State.login || Local? <MainPanel/> : AppBody
}