import {useLayoutEffect} from "react";
import {StateValue} from "../Context/Context";
import {Redirect} from "react-router-dom";


export default function UserPanel ()
{

    const State = StateValue()
    const {login} = State

    console.log(login)

    return (
        <>
            {login ? <h1>Welcome To panel</h1> : <Redirect to='/Login'/> }
        </>

    )
}