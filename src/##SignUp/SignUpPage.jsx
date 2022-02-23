import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import SignUpValidation from "./SignUpValidation";
import SignUpHeader from "./SignUpHeader";
import SignUpFooter from "./SignUpFooter";

import SiginSlider from "./SignUpSlider/SignUpSlider";
import './Main.css'
import Footer from "../Footer/Footer";
import {Links} from "../Routing/Links/Links";
import {useDispatch} from "react-redux";
import {SendSignUpData} from "./SignUpSlice";
import SignUpInputs from "./SignUpInputs";
import SignUpBirthday from "./SignUpBirthday";
import SignUpGender from "./SignUpGender";




export default function SignUpPage()
{
    const dispatch  = useDispatch()
    const {replace} = useHistory()


    const [SignUpData , SetSignUpData] = useState({
        FirstName : '',
        LastName : '',
        Email : '',
        Password : '',
        Days : '1',
        Months : 'January',
        Years : '2022',
        Gender : ''
    })

    const [WrongValidate , SetWrongValidate] = useState({})


    const [CheckOnBlur , SetCheckOnBlur] = useState({})


    const GetSignUpInfo = event =>
    {
        SetSignUpData({...SignUpData , [event.target.name ]: event.target.value })
    }

    const GetOnBlurBoolean = event =>
    {
        SetCheckOnBlur({...CheckOnBlur , [event.target.name] : true})
    }

    console.log(CheckOnBlur)

    const SubmitInfo = () =>
    {
        if (!Object.keys(WrongValidate).length)
        {
            dispatch(SendSignUpData(SignUpData))
        }
        else
        {
            SetCheckOnBlur({
                FirstName : true,
                LastName : true,
                Password : true,
                Email : true,
                Years : true,
                Gender : true
            })
        }

    }

    useEffect(()=> {

        SetWrongValidate(SignUpValidation(SignUpData))

    } , [SignUpData])




    return (

        <div className={'SignUpMain'}>

            <div style={{width : '90%'}}>
                <Links/>
            </div>


            <div className={'SignUpPage'}>




                <div className={'SignUpForm'}>

                    <SignUpHeader/>

                    <div className='FormInfo'>

                        <SignUpInputs
                            CheckOnBlur={CheckOnBlur}
                            GetOnBlurBoolean={GetOnBlurBoolean}
                            WrongValidate={WrongValidate}
                            GetSignUpInfo={GetSignUpInfo} />


                        <SignUpBirthday
                            CheckOnBlur={CheckOnBlur}
                            GetOnBlurBoolean={GetOnBlurBoolean}
                            WrongValidate={WrongValidate}
                            GetSignUpInfo={GetSignUpInfo}/>

                        <SignUpGender
                            CheckOnBlur={CheckOnBlur}
                            GetOnBlurBoolean={GetOnBlurBoolean}
                            WrongValidate={WrongValidate}
                            GetSignUpInfo={GetSignUpInfo}/>

                        <SignUpFooter SubmitInfo={SubmitInfo}/>

                    </div>


                </div>


                <SiginSlider/>

            </div>


            <div style={{width : '80%'}}>
                <Footer/>
            </div>


        </div>

    )
}