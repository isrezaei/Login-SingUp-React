import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import SignUpValidation from "../##SignUp/SignUpValidation";
import SiginTitle from "./SingInItems/1-Header/SiginTitle";
import SiginSummary from "./SingInItems/3-Footer/SiginSummary";
import SignUpButton from "./SingInItems/3-Footer/SignUpButton";
import SiginSlider from "./SiginSlider";
import './SiginStyle/SiginPage.css'
import Footer from "../Footer/Footer";
import {Links} from "../Routing/Links/Links";
import {useDispatch} from "react-redux";
import {SendSignUpData} from "../##SignUp/SignUpSlice";
import SignUpInputs from "../##SignUp/SignUpInputs";
import SignUpSelects from "../##SignUp/SignUpSelects";
import SignUpGender from "../##SignUp/SignUpGender";



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


    const [CheckOnBlur , SetCheckOnBlur] = useState(false)


    const GetSignUpInfo = event =>
    {
        SetSignUpData({...SignUpData , [event.target.name ]: event.target.value })
    }

    const GetOnBlurBoolean = event =>
    {
        SetCheckOnBlur({...CheckOnBlur , [event.target.name] : true})
    }


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

        <div className={'FlexSignPage'}>

            <div style={{width : '90%'}}>
                <Links/>
            </div>


            <div className={'SiginPage'}>
                <div className={'SiginForms'}>

                    <SiginTitle/>

                    <div className='Form'>

                        <SignUpInputs
                            CheckOnBlur={CheckOnBlur}
                            GetOnBlurBoolean={GetOnBlurBoolean}
                            WrongValidate={WrongValidate}
                            GetSignUpInfo={GetSignUpInfo} />


                        <SignUpSelects
                            CheckOnBlur={CheckOnBlur}
                            GetOnBlurBoolean={GetOnBlurBoolean}
                            WrongValidate={WrongValidate}
                            GetSignUpInfo={GetSignUpInfo}/>

                        <SignUpGender
                            CheckOnBlur={CheckOnBlur}
                            GetOnBlurBoolean={GetOnBlurBoolean}
                            WrongValidate={WrongValidate}
                            GetSignUpInfo={GetSignUpInfo}/>

                        <SiginSummary/>

                        <SignUpButton SubmitInfo={SubmitInfo}/>
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