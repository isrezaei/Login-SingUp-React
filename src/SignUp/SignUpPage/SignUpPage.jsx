import {useState} from "react";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {SendSignUpData} from "../../Redux/Slice/SignUpSlice";
import SignUpValidation from "../SignUpValidation/SignUpValidation";
import SignUpHeader from "../SignUpHeader/SignUpHeader";
import SignUpSlider from "../SignUpSlider/SignUpSlider";
import SignUpFooter from "../SignUpFooter/SignUpFooter";
import SignUpInputs from "../SignUpInput/SignUpInputs";
import SignUpBirthday from "../SignUpBirthday/SignUpBirthday";
import SignUpGender from "../SignUpGender/SignUpGender";
import './SignUpPage.css'



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
        <div className={'SignUpPage'}>

            <div className='SignUpForm'>

                <SignUpHeader/>

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

            <SignUpSlider/>
        </div>

    )
}