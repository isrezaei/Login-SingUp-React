import {Route} from "react-router-dom";
import {Router} from "../Routing/Router/Router";
import {Links} from "../Routing/Links/Links";
import {StateValue} from "../Context/Context";
import {ChangeStateValue} from "../Context/Context";
import MainPanel from "../MainPanel/MainPanel";
import './Panel-Login-SignIn.css'
import './App.css'



function App() {

    const {State} = StateValue()
    const {Dispatch} =ChangeStateValue()

    const Local = localStorage.getItem('User-Email')
    const login = State.login



    return (
        <>



            {
                login || Local?
                    <MainPanel/>

                    :

                    <div  className='AppBody'>
                        <div className='Panel-Login-SignIn'>
                            <Links/>
                            <Router/>
                        </div>
                    </div>


            }






        </>
    )
}

export default App;
