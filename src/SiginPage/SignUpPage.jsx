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

import DayOptions from "./SingInItems/2-Middle/Options/2-DayOptions";
import MonthOptions from "./SingInItems/2-Middle/Options/3-MonthOptions";
import YearsOptions from "./SingInItems/2-Middle/Options/4-YearsOptions";





export default function SignUpPage()
{
    const {replace} = useHistory()




    const [SignUpData , SetSignUpData] = useState({
        FirstName : null,
        LastName : null,
        Email : null,
        Password : null,
        Days : null,
        Months : null,
        Years : null,
        Genders : null
    })

    const [Erros , SetErros] = useState()


    useEffect(()=> {

        console.log(Erros)

        SetErros(SignUpValidation(SignUpData))


    } , [SignUpData])



    const HandelSignUpData = event =>
    {
        SetSignUpData({...SignUpData , [event.target.name ]: event.target.value })
    }

    const dispatch  = useDispatch()



    const SubmitInfo = (e) =>
    {
        dispatch(SendSignUpData(SignUpData))
        e.preventDefault()
    }

    const AllowSignUp = () => Object.values(SignUpData).every(Boolean)





    return (

        <div className={'FlexSignPage'}>

            <div style={{width : '90%'}}>
                <Links/>
            </div>


            <div className={'SiginPage'}>
                <div className={'SiginForms'}>

                    <SiginTitle/>

                    <form>

                        <div className='NameInfo'>


                            <input type="text" name='FirstName' placeholder='First name' onChange={HandelSignUpData} />



                            <input type="text" name='LastName' placeholder='Last name' onChange={HandelSignUpData}/>
                        </div>

                        <>
                            <input  type='text' name='Email' placeholder='Mobile number or email' onChange={HandelSignUpData}/>
                            <input  type='text' name='Password' placeholder='New Password' onChange={HandelSignUpData}/>
                        </>

                        <div className='BrithdayInfo'>
                            <div className='Birthday'>
                                <p>Birthday</p>
                            </div>

                            <div className='Options'>
                                <DayOptions HandelSignUpData={HandelSignUpData}/>
                                <MonthOptions HandelSignUpData={HandelSignUpData}/>
                                <YearsOptions HandelSignUpData={HandelSignUpData}/>
                            </div>

                        </div>

                        <div className={'GenderInfo'}>

                            <div className='Gender'>
                                <p>Gender</p>
                            </div>

                            <div className='RadioInput'>
                                <section>
                                    <p>Female</p>
                                    <input name='Genders' value={'Female'} type="radio" onChange={HandelSignUpData}/>
                                </section>

                                <section>
                                    <p>Male</p>
                                    <input name='Genders' value={'Male'}  type="radio" onChange={HandelSignUpData}/>
                                </section>

                                <section>
                                    <p>Custom</p>
                                    <input name='Genders' value={'Custom'} type="radio" onChange={HandelSignUpData}/>
                                </section>
                            </div>
                        </div>

                        <SiginSummary/>

                        <SignUpButton AllowSignUp={AllowSignUp} SubmitInfo={SubmitInfo}/>
                    </form>
                </div>


                <SiginSlider/>

            </div>


            <div style={{width : '80%'}}>
                <Footer/>
            </div>


        </div>

    )
}