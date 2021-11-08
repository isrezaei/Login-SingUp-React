import ServerSignin from "../ServesApi/ServerSignin";
import {useHistory} from "react-router-dom";
import {ChangeStateValue , StateValue} from "../Context/Context";
import {CaseLoadin} from "../StateLogin/StateLogin";
import './SiginPage.css'



const Months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const Days = () =>
{
    let Number = []
    for (let i = 1 ; i <= 31 ; i++)
    {
        Number.push(i)
    }

    return Number
}

const Years = () =>
{
    let Number = []
    for (let i = 1901 ; i <= 2022 ; i++)
    {
        Number.push(i)
    }

    return Number.reverse()
}

export default function SiginPage()
{

    const {
        FirstName ,
        LastName ,
        PhoneEmail,
        Password ,
        Gender
    } = StateValue()

    const {
        SetFirstName,
        SetLastName,
        SetPhoneEmail,
        SetPassword,
        SetDay,
        SetMonth,
        SetYear,
        SetGender
    } = ChangeStateValue()


    const SelectedOption = {
        Male : 'Male' === Gender ,
        female : 'Female' === Gender,
        custom : 'Custom' === Gender
    }
    const {Male , Female , Custom} = SelectedOption

    const {replace} = useHistory()
    const {Dispatch} = ChangeStateValue()


    const SubmitInfo = (e) =>
    {
        e.preventDefault()

        ServerSignin(FirstName , LastName , PhoneEmail , Password)
            .then(Response => {
                if (Response.firstname)
                {
                    Dispatch({Type : CaseLoadin.LoginSuccess})
                    return replace('/Login')
                }

                alert('False')
            })


    }




    return (
        <div className='SiginPanel'>

            <p className='Title'>Create a new account</p>
            <p className='Alert'>Join Facebook and connect with 2.4 billion users around the world</p>

            <form>

                <div className='NameInfo'>
                    <input type="text" placeholder='First name' onChange={(e)=> SetFirstName(e.target.value)}/>
                    <input type="text" placeholder='Last name'  onChange={(e)=> SetLastName(e.target.value)} />
                </div>

                <input type='text' placeholder='Mobile number or email' onChange={(e)=> SetPhoneEmail(e.target.value)}/>

                <input type='text' placeholder='New Password' onChange={(e)=> SetPassword(e.target.value)}/>

                <div className='BrithdayInfo'>

                    <div className='Birthday'>
                        <p>Birthday</p>
                    </div>

                    <div className='Options'>

                        <select onChange={(e)=> SetDay(e.target.value)}>
                            {
                                Days().map((value , index)=> {
                                        return <option key={index} >{value}</option>
                                    }
                                )
                            }
                        </select>
                        <select  onChange={(e)=> SetMonth( e.target.value)}>
                            {
                                Months.map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    }
                                )
                            }
                        </select>
                        <select  onChange={(e)=> SetYear(e.target.value)}>
                            {
                                Years().map((value, index) => {
                                        return <option key={index}>{value}</option>
                                    }
                                )
                            }
                        </select>

                    </div>
                </div>

                <div className='GenderInfo'>


                    <div className='Gender'>
                        <p>Gender</p>
                    </div>


                    <div className='RadioInput'>
                        <section>
                            <p>Female</p>
                            <input checked={Female} type="radio" onChange={()=> SetGender('Female')}/>
                        </section>


                        <section>
                            <p>Male</p>
                            <input checked={Male} type="radio" onChange={()=> SetGender('Male')}/>
                        </section>


                        <section>
                            <p>Custom</p>
                            <input checked={Custom} type="radio" onChange={()=> SetGender('Custom')}/>
                        </section>
                    </div>


                </div>

                <p className='Summary'>
                    By clicking Sign Up, you agree to our <span style={{color : "#03a9f4" }}>Terms , Data ,
                    Policy</span>  You may receive SMS Notifications from us and can opt out any time.
                </p>

                <button className='LoginButton' onClick={SubmitInfo}>Sign in</button>


            </form>

        </div>
    )
}